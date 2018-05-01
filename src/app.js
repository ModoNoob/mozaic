const express = require('express')
const request = require('request')
const querystring = require('querystring')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const clientId = '9f23f4f6a47f4ca9aea4d7bf2ee29762'
const clientSecret = '109e41132939485a8221592445636348'
const returnUrl = 'http://localhost:9000/auth/callback'
const scopes = 'user-library-read'

const stateKey = 'spotify_auth_state'

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get('/auth/login', (req, res) => {
  let state = generateRandomString(16)
  res.cookie(stateKey, state)

  // your application requests authorization
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scopes,
      redirect_uri: returnUrl,
      state: state
  }))
})

app.get('/auth/callback', (req, res) => {
  const code = req.query.code || null
  const state = req.query.state || null
  const storedState = req.cookies ? req.cookies[stateKey] : null

  if (state === null || state !== storedState) {
    res.redirect('/error?' +
      querystring.stringify({
        e: 'state_mismatch'
      }))
  } else {
    res.clearCookie(stateKey)

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: returnUrl,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    }

    request.post(authOptions, (error, response, body) => {
      if (!error && res.statusCode === 200) {
        const accessToken = body.access_token
        const refreshToken = body.refresh_token

        res.redirect('/?' +
          querystring.stringify({
            a: accessToken,
            r: refreshToken
          }))
      } else {
        res.redirect('/error?' +
          querystring.stringify({
            e: 'invalid_token'
          }))
      }
    })
  }
})

app.listen(process.env.PORT || 8081)

const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let text = ''

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

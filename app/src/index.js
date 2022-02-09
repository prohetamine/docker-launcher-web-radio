const express         = require('express')
    , _cors           = require('cors')
    , app             = express()
    , http            = require('http')
    , path            = require('path')
    , fs              = require('fs')
    , { Server }      = require('socket.io')
    , RadioStation    = require('radio-station')

const login = process.env.LOGIN
    , password = process.env.PASSWORD
    , cors = process.env.CORS

const server = http.createServer(app)
    , io = new Server(server, cors ? {
        cors: {
          origin: cors
        }
      } : {})

if (cors) {
  app.use(
    _cors({
      origin: cors
    })
  )
}

const port = 8080

;(async () => {
  const radio = await RadioStation.create({
    pathWorkDir: path.join(__dirname, 'tracks-data-folder'),
    isLauncher: true,
    mainPort: port,
    login,
    password
  })

  const pathTracks = path.join(__dirname, '/../../tracks-for-load')

  if (fs.existsSync(pathTracks)) {
    radio.track.loads(pathTracks)
  }

  app.get('/radio', (req, res) => {
    radio.addListener(req, res)
  })

  io.on('connection', async socket => {
    radio.onUse(info => {
      socket.emit('onUse', info)
    })
  })

  app.get('/picture', async (req, res) => {
    radio.picture(req, res)
  })

  app.get('/info', async (req, res) => {
    radio.info(req, res)
  })
})()

app.use('/', express.static(__dirname+'/public'))

server.listen(port)

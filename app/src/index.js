const express         = require('express')
    , app             = express()
    , http            = require('http')
    , path            = require('path')
    , fs              = require('fs')
    , { Server }      = require('socket.io')
    , RadioStation    = require('radio-station')

const server = http.createServer(app)
    , io = new Server(server)

const port = 8080

const login = process.env.LOGIN
    , password = process.env.PASSWORD

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

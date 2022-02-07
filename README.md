![logo](https://github.com/prohetamine/radio-station/blob/main/media/logo.png)

##### README is available in the following languages: [Russian](https://github.com/prohetamine/docker-launcher-web-radio/blob/main/README/russian.md) | [English](https://github.com/prohetamine/docker-launcher-web-radio/blob/main/README.md)


# Docker Launcher Web Radio

> docker-launcher-web-radio - radio station for nodejs, this example is for the main radio-station library.

### Why ?
This example shows how you can start broadcasting using docker without installation difficulties, this is just an example, official documentation can be found in [radio-station](https://github.com/prohetamine/radio-station), if you want an automatic server broadcast without the ability to form the order of tracks, use [docker-node-web-radio](https://github.com/prohetamine/docker-node-web-radio)

### Get started

Let's install the container from Docker Hub ```prohetamine/docker-launcher-web-radio```

```sh
$ docker pull prohetamine/docker-launcher-web-radio
```

Also build

```sh
$ git clone https://github.com/prohetamine/docker-launcher-web-radio.git
$ cd docker-launcher-web-radio
$ docker build . -t docker-launcher-web-radio
```

### Examples and description

Now just run and go to the default address http://localhost:8080 and control the broadcast using the [radio-launcher](https://github.com/prohetamine/radio-launcher). Attention: until you add any tracks, the broadcast will not start

The basic setup looks like this, but ```LOGIN``` and ```PASSWORD``` are optional, they can be generated automatically at the time of startup.

```sh
$ docker run --rm -p 8080:8080 -p 9933:9933 -e LOGIN=localhost -e PASSWORD=hackme prohetamine/docker-launcher-web-radio
```

You can preload tracks from the folder in order not to upload them in the interface, this may take time that we do not have.

```sh
docker run --rm -p 8080:8080 -p 9933:9933 -e LOGIN=localhost -e PASSWORD=hackme -v /yourtracksfolder:/tracks-for-load prohetamine/docker-launcher-web-radio
```

### Contacts

My Telegram: [@prohetamine](https://t.me/prohetamine), [channel](https://t.me/prohetamines)

Email: prohetamine@gmail.com

Donat money: [patreon](https://www.patreon.com/prohetamine)

If you have any questions and/or suggestions, please email me in telegram, if you find any bugs also let me know, I will be very grateful.

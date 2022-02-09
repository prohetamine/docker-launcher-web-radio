![logo](https://github.com/prohetamine/radio-station/blob/main/media/logo.png)

##### README доступен на языках: [Русский](https://github.com/prohetamine/docker-launcher-web-radio/blob/main/README/russian.md) | [Английский](https://github.com/prohetamine/docker-launcher-web-radio/blob/main/README.md)


# Docker Launcher Web Radio

> docker-launcher-web-radio - радиостанция для nodejs, этот пример для основной библиотеки radio-station.

### Почему ?
Этот пример показывает, как вы можете начать вещание с помощью docker без трудностей с установкой, это всего лишь пример, официальную документацию можно найти в [radio-station](https://github.com/prohetamine/radio-station), если вы хотите автоматическую трансляцию c сервера без возможности формирования порядка дорожек, используйте [docker-node-web-radio](https://github.com/prohetamine/docker-node-web-radio)

### С чего начать

Установим контейнер из Docker Hub ```prohetamine/docker-launcher-web-radio```

```sh
$ docker pull prohetamine/docker-launcher-web-radio
```

Также сборка

```sh
$ git clone https://github.com/prohetamine/docker-launcher-web-radio.git
$ cd docker-launcher-web-radio
$ docker build . -t docker-launcher-web-radio
```

### Примеры и описание

Теперь просто запустите и перейдите по адресу по умолчанию http://localhost:8080 и управляйте трансляцией с помощью [radio-launcher](https://github.com/prohetamine/radio-launcher). Внимание: пока вы не добавите какие-либо треки, трансляция не начнется

Базовая настройка выглядит следующим образом, но ```LOGIN``` и ```PASSWORD``` являются необязательными, они могут быть сгенерированы автоматически во время запуска.

```sh
$ docker run --rm -p 8080:8080 -p 9933:9933 -e CORS="*" -e LOGIN=localhost -e PASSWORD=hackme prohetamine/docker-launcher-web-radio
```

Вы можете предварительно загрузить треки из папки, чтобы не загружать их в интерфейс, это может занять время, которого у нас нет.

```sh
docker run --rm -p 8080:8080 -p 9933:9933 -e CORS="*" -e LOGIN=localhost -e PASSWORD=hackme -v /yourtracksfolder:/tracks-for-load prohetamine/docker-launcher-web-radio
```

### Контакты

Мой Телеграм: [@prohetamine](https://t.me/prohetamine), [канал](https://t.me/prohetamines)

Почта: prohetamine@gmail.com

Донат денег: [patreon](https://www.patreon.com/prohetamine)

Если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки также дайте мне знать, я буду очень благодарен.

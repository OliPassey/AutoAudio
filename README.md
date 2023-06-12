# AutoAudio
A webapp to collate what you are listening to currently from Tidal, Spotify & YouTube and display them on a touch-screen friendly interface, such as an Android Headunit in a car.

## Screenshots
### Front-End
![image](https://github.com/OliPassey/AutoAudio/assets/7745805/1993ee98-5aa5-4fc3-94e6-6a8ce0237399)

### Back-End
![image](https://github.com/OliPassey/AutoAudio/assets/7745805/a487237f-d5b3-4003-a0d1-0f15266d96b7)

## Installation

Best run under docker, behind a reverse proxy  
``` bash
olipassey/audio-widget
```

### Requires
```bash
MongoDB
NodeJS
ExpressJS
```

## Usage
```bash
docker run -d -p 3000:3000 -e MONGO_IP=<your-mongo-ip> -e MONGO_PORT=27017 --name audio-widget-test audio-widget:latest
```
From your PC / MAC navigate to http://host:3000/content.html to add new content. All fields are mandatory currently.  
In your car (or wherever you'll use this) navigate to http://host:3000 and you're good to go.  
You should run this behind a reverse proxy such as Apache, nginx, caddy etc with a cert (free from LetsEncrypt)

Variables required:
```bash
MONGO_IP
MONGO_PORT
```
Tested running fine on Unraid & vanilla docker.

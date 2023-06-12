# AutoAudio
A webapp to collate what you are listening to currently from Tidal, Spotify & YouTube and display them on a touch-screen friendly interface, such as an Android Headunit in a car.

## Screenshots
### Front-End
![image](https://github.com/OliPassey/AutoAudio/assets/7745805/1993ee98-5aa5-4fc3-94e6-6a8ce0237399)

### Back-End
![image](https://github.com/OliPassey/AutoAudio/assets/7745805/4496a45f-ae60-45bc-846d-4a64d44497d6)


## Installation

Best run under docker 
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

Variables required:
```bash
MONGO_IP
MONGO_PORT
```
Tested running fine on Unraid & vanilla docker.

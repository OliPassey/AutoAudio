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
```

## Usage
```bash
docker pull olipassey/audio-widget:latest
docker run -d -p 3000:3000 -e MONGO_IP=<your-mongo-ip> -e MONGO_PORT=27017 --name audio-widget-test olipassey/audio-widget:latest
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

### Reverse Proxy Config and restricting access to content.html
Im just starting my dev journey proper (i come from the infra world) so for now, im locking down access to content.html by apache config and ip restriction.
When I access the page from within my LAN the IP the server sees is my firewall, any external users present their actual IP - so below works nicely.
You may need to tweak this depending on your environment. 
```bash
  <Location />
    Require all granted
  </Location>

  <Location /content.html>
    Require ip 10.0.0.1
  </Location>
```

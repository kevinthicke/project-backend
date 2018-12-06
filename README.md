## Configuración de Nginx para una aplicación de Nodejs

Se expone una configuración de Nginx como un servidor web y servidor proxy inverso para una aplicación Nodejs (express) en Debian 9.6 x64

### Instalación de Nginx

```
$ sudo apt-get update && sudo apt-get upgrade -y
$ sudo apt-get install nginx -y
```

Inicializamos Nginx y comprobamos su estado:
```
$ sudo systemctl status nginx
$ sudo systemctl start nginx
```

### Instalación de Nodejs
```
$ sudo apt update
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
```
Ejecutamos el script e instalamos nodejs:
```
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
```
### Configuración de Nginx como un servidor proxy inverso para una aplicación de Nodejs

Sustituimos <ip address> por nuestra dirección ip:
```
$ wget -q -O - 'http://<ip address>/latest/meta-data/local-ipv4'
$ sudo rm /etc/nginx/sites-available/default
$ sudo vi /etc/nginx/sites-available/default
```

Introducimos en el fichero de configuración:
```
server {
    listen 80;

    server_name _;

    location / {
        proxy_pass http://<ip address>:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
     }
}

```
Comprobamos que no hay errores de sintaxis en el fichero de configuración:
```
$ sudo nginx -t
```
Recargamos Nginx:
```
$ sudo /etc/init.d/nginx reload
```
Clonamos el proyecto en un directorio adecuado:
```
git clone https://github.com/kevinthicke/Nginx-config-for-Nodejs-app.git
```
Instalamos las dependencias del proyecto y ejecutamos nuestra aplicación:
```
$ npm install
$ node server.js
```

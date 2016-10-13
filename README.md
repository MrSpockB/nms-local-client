# NMS Cliente Local
## Pre-requisitos
Instalar de manera global babel-cli y watchify

```sh
$ npm install -g babel-cli
$ npm install -g watchify
```

## Instalación

Abrir una terminal en la carpeta clonada y ejecutar :

```sh
$ npm install
```
Instalará semantic y electron, electron pesa como 50 - 60 Mb

## Ejecución

Es necesario ejecutar MongoDB y el servidor de NMS. Estos se ejecutan en la carpeta de NMS
```sh
$ mongod
$ nodemon apiServer.js
```
Estos 2 hay que ejecutarlos en la carpeta del cliente
```sh
$ npm start
$ npm run watch
```
El primero ejecuta electron, el otro revisa cambios y reinicia la aplicacion en electron.

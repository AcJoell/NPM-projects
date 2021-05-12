#### Análisis

![](https://static.platzi.com/media/user_upload/wheelbarrel-no-tilde-caret-white-bg-w1000-72ca1a72-4c7f-4abe-8482-425c01a72f89.jpg)

#

Dentro de nuestro proyecto nos podemos encontrar con...

**1 .** **`^`**: Se le llama **caret** y sirve para avanzar la version, sin esta nos quedariamos estaticos en aquella

**2 .** **`package-lock.json`**: Permite tener configuraciones que nos permitira saber que ha sucedido a lo largo de la construccion del proyecto (tipo versionado)

#### Scripts

**1 .** **Sección `scripts`**: Comandos que se pueden establecer para poderlos ejecutar desde la consola, ejemplos:

```json
"scripts": {
    // build: mandamos a produccion el proyecto
    "build": "webpack --mode production",
    // start: generamos entorno de desarrollo local 
    "start": "webpack-dev-server --open --mode development --port 3002", 
    // format: establecer formato
    "format": "prettier --write '{*.js,src/**/*.{js,jsx}}'",
    // pasamos eslint en todo el proyecto
    "lint": "eslint src/ --fix",
    "deploy": "npm run format && npm run build",
    "hola": "node"
  }
```

**2 .** **Correr `scripts`**: Correr script
```
npm run hola
```
> hola es el nombre del script

**3 .** **Correr `scripts` con concatenación**: Correr script
```
npm run deploy
```
> Al final nos regresa el **output** de cada comando

**4 .** **Correr `scripts` por defecto**: Correr script
```
npm run test || npm test || npm start
```
> Ejecutan los elementos, ya sea el comando start o un Node al main del proyecto (src/index.js)

#

---
---

#### Eliminar node_module

**1 .** En caso de que nuestros archivos de node_module no estén bien instalados o tengamos una versión anterior lo que podemos hacer es lo siguiente:
```
npm cache clean --force
#Para verificar que verdaderamente se borro podemos usar
npm cache verify
```

Uno de los errores que podemos tener es tener algún valor corrupto en node_module, o tambien que la instalación no este completa de los paquetes que hemos instalado, para ello podemos eliminar el paquete con el siguiente comando:
```
rm -rf node_modules  # este comando elimina la carpeta 
```

**2 .** Otra alternativa para eliminar de forma segura una carpeta es instalando el siguiente paquete:
```
npm install -g rimraf
```

Ahora podemos ejecutar el siguiente comando para eliminar node_module
```
rimraf node_modules 
#Ahora podemos volver a instalar nuestro paquetes
npm install
```
---
---
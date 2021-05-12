#### Pasos

**1 .** Exportamos nuestra funcion mediante 
```js
module.exports = { nameFunction };
```

**2 .** En la raiz de nuestro proyecto creamos una carpeta bin que tendra un archivo llamado `global.js`, ahi nosotros ejecutaremos las funciones de nuestro `index.js` junto a un `require`...
```js
#!/usr/bin/env node
let random = require('../src/index.js');
random.randomMessage();
```

**3 .** En package.json creamos un objeto llamado `bin` donde vamos a poner como valor de un atributo a nuestro `"../bin/global"`...
```json
"bin": {
    "random-messages": "./bin/global.js"
  }
```
Luego creamos un atributo llamado `preferGlobal` para que aquello se ejecute de manera global...
```json
"preferGlobal": true
```

#
---
#### Pruebas y update
**1 .** Las pruebas las hacemos segun el atributo que hayamos puesto dentro de bin y su valor
```
random-messages
```
> Nos devuelve el valor esperado de nuestra funcion

**2 .** Si modificamos algun archivo y queremos actualizar para poder probar el código entonces...
```
npm install -g (nuestra ruta mediante el comando `pwd`)
```

---

#### Publicar nuestro proyecto
#

> En consola

**1 .** Hacer login
```
npm adduser
```

**2 .** Publicar tu proyecto
```
npm publish
```
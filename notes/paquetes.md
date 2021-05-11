## Primeros pasos

Creamos una carpeta donde vamos a guardar nuestros archivos
```
mkdir src
```

Dentro de `src` vamos a crear un archivo
```
touch index.js
```

#

---

## Instalar dependencias

Comenzamos desde la raiz del proyecto (donde iniciamos el proyecto)

#### Maneras de instalar

**1 .** Se instala por defecto como dependencia que se requiere para el proyecto
```
npm install name
```

**2 .** Se instala como dependencia de producción o entorno local
```
npm install name --save
```
> --save significa que este documento que vamos a instalar es necesario para **produccion**

**2 .** Se instala como dependencia de producción o entorno local (simplificadamente)
```
npm i name -S
```
> La **i** reemplaza a **install**
> La -S reemplaza **--save**

**3 .** Se instala como dependencia de desarrollo
```
npm install name --save--dev
```
> --save--dev solo es necesario en el entorno **local** o de **desarrollo**

**3 .** Se instala como dependencia de desarrollo (simplificadamente)
```
npm i name -D
```
> La **i** reemplaza a **install**
> La -D reemplaza **--save--dev**

**4 .** Se instala como dependencia de forma opcional
```
npm install eslint -O
```
> **-O** de opcional 

Observar información (recursos) que requiere financiamiento
```
npm fund
```

#
---
#### Instalar paquete global

**Nodemon** paquete requerido para el proyecto

```
npm install -g nodemon
```

#### Verificar si tenemos ese paquete global

```
npm list -g --depth 0
```
> --depht la profundidad que busca dentro de los paquetes

#
---

#### Ignorar con .gitignore

Creamos un archivo en la raiz de nuestro proyecto llamada **`.gitignore`**, ahi vamos a escribir los archivos y carpetas que queremos ignorar que en este caso en **node_modules/**
```
node_modules/
```
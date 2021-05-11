## Nuestro primer Proyecto
---

#### 1. Crear carpeta
```
mkdir proyecto-introduccion
```
#### 2. Hacer un git init
```
git init
```
#### 3. Hacer un npm init
Permite crear el archivo **package.json**
```
git init
```

#
---
## Documentacion inicial

- **Package name**
  - nombre para nuestro paquete
- **Description**
  - sobre que trata nuestro proyecto
- **Entry Point**
  - punto de entrada del proyecto
- **Test command**
  - scripts para correr ciertos comandos
- **Git repository**
  - si no estableces en la configuración inicial sobre la ubicacion de tu repositorio, no te preocupes, podras configurarlo luego.
- **Keywords**
  - palabras clave sobre el paquete que vayas a trabajar
- **Author** 
  - persona que esta construyendo el proyecto
- **License**
  - _MIT_ => para poder trabajar en archivos Open Source para compartir con toda la comunidad

#

---

## Crear proyecto rápidamente

De esta manera, el proyecto se creara con valores predeterminados y valores vacios que luego podras configurar.

```
npm init -y
```

#

---

## Manejando un estandar

De una manera fácil vas a poder dejar un estandar en tu ordenador para que al iniciar un proyecto en npm sea rápido y sencillo de crearlo

Ajustar nuestro correo de manera predeterminada
```
npm set init.author.email "joelac04@hotmail.com"
```

Ajustar nuestro nombre de manera predeterminada
```
npm set init.author.name "Joel Acosta"
```

Ajustar la licencia de manera predeterminada
```
npm set init.license "MIT"
```

Correr el proyecto rápidamente
```
npm init -y
```
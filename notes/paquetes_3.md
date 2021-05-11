#### Tercera parte

**1 .** Listar paquetes que tiene el proyecto
```
npm list
```
> Retorna Arbol con jerarquia sobre los paquetes

**2 .** Ver que paquetes estan desactualizados
```
npm outdate
```
> Retorna tabla

**3 .** Ver el **output** que sucede detras de **npm**
```
npm outdate --dd
```

#
---
#### Update

**1 .** Hacer **update** general de los paquetes que esten desactualizados
```
npm update
```

**2 .** Hacer **update** del paquete segun la tabla que genera **npm outdate**
```
npm install json-server@latest
```
> Instala la ultima version de este paquete

#
---
#### Delete

**1 .** Hacer **delete** del paquete que queremos sacar de nuestro proyecto
```
npm uninstall name
```
> Elimina una dependencia (paquete)

**2 .** Hacer **delete** del paquete sin eliminarlo del **package.json**
```
npm uninstall name --no-save
```
> Lo eliminamos de todos los lugares excepto en el archivo de **package.json**
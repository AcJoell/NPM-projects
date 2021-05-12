#### Seguridad

**1 .** Auditar nuestro proyecto
```
npm audit
```
> Nos retorna las vulnerabilidades que tiene nuestro proyecto

**2 .** Generar documento de `npm audit`
```
npm audit --json
```

**3 .** Actualizar nuestra vulnerabilidad (reparar)
```
npm update name --depth 2
```

**4 .** Actualizar todas las vulnerabilidades (reparar)
```
npm audit fix
```

> Herramienta: Snik.io herramenta para enfocarnos en estar al dia con nuestras dependencias actualizadas
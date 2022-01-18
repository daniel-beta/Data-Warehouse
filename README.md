# Data-Warehouse

Herramienta que permite a una compañía de Marketing administrar todos los contactos de sus clientes para sus campañas.
Sitio web que permita realizar operaciones CRUD a una base de datos de contactos que incluyen sus datos personales, sus preferencias, datos de contacto, lugar donde trabajan, y lugar donde viven.

## Documentación

#### 1. Clonar repo

Para empezar abre la terminal, copia, pega y ejecuta la siguiente linea de código:

```
git clone https://github.com/daniel-beta/Data-Warehouse.git
```

#### 2. Instalar el proyecto

Entra a la raíz del proyecto en la terminal y ejecuta el siguiente comando:

```
npm i
```

#### 3. Crear tablas

En la raíz del proyecto encontrarás la carpeta **BE** y dentro de ella un archivo llamado `data_warehouse.sql`, con este podrás generar la base de datos. Puedes hacerlo con ayuda de **XAMPP** y **MySQL Workbench** para las configuraciones y conexiones del servidor.

![Captura de Pantalla 2021-12-30 a la(s) 10 22 30 p  m](https://user-images.githubusercontent.com/64673306/147801318-2c876ef8-c2b7-471b-8b60-cb1ca872789e.png)
![image](https://user-images.githubusercontent.com/64673306/149876026-bdb6cb7a-452c-4196-9e1d-3eb204f9d62a.png)

**NOTA:** Si no sabes como configurar las conexiones de tu servidor puedes basarte en los siguientes videos (según tu sistema operativo):

- [Mac](https://youtu.be/P2yS47MxjLM)
- [Windows](https://youtu.be/Wf-0PT7q6i4)

#### 4. Datos de entorno

Asegurate de que el archivo `db.js` tenga guardados correctamente los datos de tu entorno.

#### 5. Inicia el proyecto

Ejecuta la siguiente línea en tu terminal (Estando ubicado en la carpeta **BE**):

```
npm run start
```

Y asegurate el servidor se conecte validando el siguiente mensaje en la terminal:

![image](https://user-images.githubusercontent.com/64673306/149877639-9ffa680a-a143-4c62-8876-6edc33f651ac.png)

---
layout: ../../components/Layout.astro
title: React App Task
description: Esta es una aplicación sencilla construida en React, donde se crea una lista de tareas con funcionalidades básicas de crear una tarea y de eliminar tarea, se hace uso del framework css `Tailwind`.

No se realiza despliegue.
date: Enero 2023
---


# react app tasks

## Detalles generales
Esta es una aplicación sencilla construida en React, donde se crea una lista de tareas con funcionalidades básicas de crear una tarea y de eliminar tarea, se hace uso del framework css `Tailwind`.

No se realiza despliegue

- [Repo](https://github.com/linkmao/react-app-task)
- [Video base](https://www.youtube.com/watch?v=rLoWMU4L_qE&t=16533s)



## Tecnologías usadas
- Vite: Generador de proyectos, en este caso de react
- React
- Tailwind
---

### Creación del proyecto
`$ npm create vite`

Luego se debe instalar las dependencias
me voy a la carpeta del proyecto y allí...
`$ npm i`

### Correr el proyecto
`$ npm run dev`

### Agregar tailwind
Para agregar Tailwind en el proyecto se sugiere consultar la [web oficial de Tailwind](https://tailwindcss.com/) y allí consultar los pasos para ello, mirando por supuesto la manera de instalar Tailwind en un proyecto iniciado con Vite, sin embargo sin detalle a continuación se ponen los pasos tomados de la documentación oficial

```
$ npm install -D tailwindcss postcss autoprefixer
```

```
$ npx tailwindcss init -p
```

Agregar en el arcgivo `tailwind.config.css` dentro del array `content` el siguiente código:
```
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
```

Agregar al archivo `./scr/index.css` el siguiente código
```
@tailwind base;
@tailwind components;
@tailwind utilities;`
```
.. y listo

---

## Detalles especificos
Esta es un aplicacion web creada en ract que tiene como objetivo inicialmente usar elementos basicos de react como la creación de componentes, y de hooks. La aplicación es un gestor sencillo de notas que permite su creación y eliminacion, tambien se incorpora tailwind para los estilos. 



## Nota tecnica importante
En este proyecto la implementacio se realiza desde un componente principal App, el cual tiene bajo su dominio el acceso a los datos, al igual que la manipulacion de los mismos (crear datos, eliminar datos). La manipulación de los datos se hace por medio de funciones que también estan en el componente App, sin embargo los componente hijos de App como TaskCard, TaskForm y TaskList deben acceder a los datos y las funciones, esto se logra a traves de un sistema de props, el cual pasa desde el componente App la data y las funciones a los componentes hijos. Esta implementación es sencilla, no está mal, pero en la practica cuando una aplicacion crezca el numero de componentes, ese sistema de transferir la data y las funciones que la manipulan se vuelve insostenible.

Como alternativa a esta dificultad, React implementa un componente mayor que denomina contexto en el cual puede estar la data y las funciones que la manipulan y simplemente se pueden acceder a ellas desde cualquier componente que esté dentro del contexto.

Tal como se anotó anteriormente, esta implementación hace uso de los props pero se sugiere en futuras versiones aplicar el concepto de contexto, el cual está suficientemenete ilustrado en el [Video de Fazt](https://www.youtube.com/watch?v=rLoWMU4L_qE&t=16533s) lo cual simplifica considerablemente el desarrollo.

## To do
-   Realizar la implementación de acceder a los datos y las funciones que la manipulan desde un componente Contexto tal como se explicó en la nota técnica.
-   Crear un modelo de datos y la respectiva api para accderlos.
-   Realzar el despliegue
-   Usar clases de tailwind que permita ser responsive

---
## Maolink software
Enero 2023
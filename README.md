# ⚡️ SPRINT 1: - Parte 2/3: Rehacer la maquetación de una landing page con Sass

En esta segunda parte del proyecto, utilizaremos sass, un procesador de CSS, y remaquetaremos lo anterior hecho vanilla (desarrollada con HTML + CSS).
El uso de Sass permite modularizar estilos, reutilizar variables y mixins, y mejorar la escalabilidad del proyecto.

## 🔗 Repositorio del proyecto: 
https://github.com/claudiabcn/sprint1-landingpage - Branch: feature/sass-implementation

## 🎯 Objetivos:
Remaquetación de una página web utilizando sass.

## 💻 Tecnología: 
Git, Sass, HTML y CSS (generado automáticamente desde Sass).

## 📋 Archivos:
```
sprint1-landingpage/
├── 📄 index.html
├── 📄 script.js
├── 📄 README.md
📁 designs
📁 images
├── 📁 scss
│ ├── 📄 _components.scss
│ ├── 📄 _variables.scss
│ ├── 📄 _mixins.scss
│ ├── 📄 _layout.scss  
│ └── 📄 _responsive.scss 
│ └── 📄 main.scss 
│ └── 📄 main.css 
│ └── 📄 main.css.map 
```

## 🧵 Compilación de Sass:
Para que los estilos de Sass se transformen automáticamente en CSS, es necesario compilar con el modo --watch, que detecta los cambios y actualiza el archivo CSS en tiempo real.

Ejecutar este comando desde la raíz del proyecto:
sass --watch scss/main.scss:scss/main.css

## 🛠 Instalación:
Clonar el Repositorio git clone https://github.com/claudiabcn/sprint1-landingpage

Compilar Sass con el comando (--watch)

## 📸 Demo:  
https://bookmark-vanilla-claudiabcn.netlify.app/

https://bookmark-sass-claudiabcn.netlify.app/



## ⭐ Aprendizajes y retos encontrados: 
He aprendido a usar Sass. La migración a SASS sin alterar el diseño ha sido un reto.
El tema de la compilación y hacer que quede igual que la rama vanilla.

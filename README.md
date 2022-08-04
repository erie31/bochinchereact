Instalación local
$ git clone https://github.com/erie31/bochinchereact/tree/develop

$ cd bochinchereact

$ npm install

$ npm start

Rutas definidas
Configuradas en App.js

La ruta "/" (por default) muestra el listado de todos los productos y servicios (ItemListContainer).

La ruta "/Categoria/:category" muestra los productos filtador según cada una de las categorías existentes: Inflables y Toros. Es el ItemListContainer + el filtro.


La ruta "/Detalle/:id" muestra el detalle del producto seleccionado mediante el link "Detalle" en cada producto.

La ruta "*" define que toda otra ruta a la que se quiera acceder mediante el navegador del browser (y no sea alguna de las anteriores), devuelva "404 - página no encontrada" junto al logo de la App.

Gif demo
https://media.giphy.com/media/rcD2yZcr8l2IufiwR0/giphy.gif
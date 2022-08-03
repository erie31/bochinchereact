Instalación local
$ git clone https://github.com/2detrebol/EliEssen-Brandi.git

$ cd eli-essen

$ npm install

$ npm start

Rutas definidas
Configuradas en App.js

La ruta "/" (por default) muestra el título de bienvenida y el listado de todos los productos (ItemListContainer).

La ruta "/Categoria/:category" muestra los productos filtador según cada una de las 3 categorías existentes: Cacerolas, Sartentes, Complementos. Es el ItemListContainer + el filtro.


La ruta "/Detalle/:id" muestra el detalle del producto seleccionado mediante el link "ver más", ubicando el producto mediante su id.

La ruta "*" define que toda otra ruta a la que se quiera acceder mediante el navegador del browser (y no sea alguna de las anteriores), devuelva "404 - página no encontrada" junto al logo de la App.


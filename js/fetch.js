// Ruta relativa

let productos = [];

fetch ("../data/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

alert("¡Bienvenidos a IndexStore! Nuestra tienda online de zapatillas importadas!")
alert("¡Primer mes del año y para todo hay una excusa! ¡¡Por eso hoy tenemos descuentos y beneficios para vos!!")
alert("A continuacion te mostraremos una lista con el stock con el cual contamos.")

// let selecionarProductos = Number(prompt("1-Air force one $1400 2-Jordan 1 $1200 3-Goretex $1000"))
// let seleccionarCantidad; 
// let total = 0;

// const cantidad =(cant, precio) => {
//     return cant * precio
// }

// while (selecionarProductos !=0){
//     switch(selecionarProductos){
//         case 1:
//             seleccionarCantidad = Number(prompt("El producto seleccionado son las Air force one, indique cantidad que desea comprar."))
//             total += cantidad (seleccionarCantidad, 1400)
//             break;

//         case 2:
//             seleccionarCantidad = Number(prompt("El producto seleccionado son las Jordan 1, indique cantidad que desea comprar."))
//             total += cantidad (seleccionarCantidad, 1200)
//             break;

//         case 3:
//             seleccionarCantidad = Number(prompt("El producto seleccionado son las Goretex, indique cantidad que desea comprar."))
//             total += cantidad (seleccionarCantidad, 1000)
//             break;

//         default:
//             break;
//     }
//     // alert("¡Sigue comprando y obtén beneficios en tu envios!")
//     selecionarProductos = Number(prompt("1-Air force one $1400 2-Jordan 1 $1200 3-Goretex $1000, si desea finalizar ¡Ingrese 0!"))
// }


// alert("Superando los $1500, te brindamos ¡ENVIOS GRATIS A TODO EL PAIS!")

// alert("El total de la compra es de: $" + total)

// const envio = () => {
//     if (total >= 1500){
//         alert("Superaste de $1500, tenes ¡ENVIOS GRATIS A TODO EL PAIS! ")
//     } else {
//         total += 500
//         alert("El costo de envio es de $500, el total es: $"  + total)
//     }
// }
// envio()


const carrito = []

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};

const mostrarListaOrdenada = () => {
    const listaDeProductos = productos.map(producto => {
        return '- ' + producto.nombre+ ' $' +producto.precio
    }) 
    alert('Lista de precios: '+ '\n\n' +listaDeProductos.join('\n'))

    comprarProductos(listaDeProductos)
};

const comprarProductos = (listaDeProductos) => {
    let productoNombre = ''
    let productoCantidad = 0
    let otroProducto = false

    do{
        productoNombre = prompt('¿Que producto queres comprar?' + '\n\n' +listaDeProductos.join('\n'))
        productoCantidad = parseInt (prompt('¿Cuantos deseas cumprar?'))

        const producto = productos.find (producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())
        
        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else{
            alert ('El producto no se encuentra en el catalogo.')
        }

        otroProducto = confirm ('¿Queres agregar otro producto?')
    }while(otroProducto)
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find (producto => producto.id === productoId)
    if (!productoRepetido){
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else{
        productoRepetido.cantidad += productoCantidad
    }
};




ordenarMenorMayor()
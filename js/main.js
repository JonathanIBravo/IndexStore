alert("¡Bienvenidos a IndexStore! Nuestra tienda online de zapatillas importadas!")
alert("¡Primer mes del año y para todo hay una excusa! ¡¡Por eso hoy tenemos descuentos y beneficios para vos!!")
alert("A continuacion te mostraremos una lista con el stock con el cual contamos.")

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
    confirmarCompra()
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

const eliminarPorductoCarrito = (productoAEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === productoAEliminar.toLowerCase()) {
            if (producto.cantidad > 1) {
                producto.cantidad --
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
}

const confirmarCompra = () => {
    const listaDeProductos = carrito.map(producto => {
        return '- ' +producto.nombre+ '| Cantidad: '+producto.cantidad
    })
    const isConfirmar = confirm('confirmar: '
    +'\n\n' + listaDeProductos.join ('\n')
    +'\n\n Para confirmar presione ACEPTAR si no CANCELAR para eliminar producto de carrito'  
    )
    if (isConfirmar) {
        finalizarCompra(listaDeProductos)
    } else {
        const productoAEliminar = prompt('Ingrese el nombre del producto que desea eliminar del carrito: ')
        eliminarPorductoCarrito (productoAEliminar)
    }
};


const finalizarCompra = (listaDeProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc +  (item.cantidad * item.precio), 0)
    alert ('Detalle de su compra'
    +'\n\n' +listaDeProductos.join ('\n')
    +'\n\n Total de productos: ' +cantidadTotal
    +'\n\n El valor final del carrito es: $' +precioTotal 
    )

    const totalConDescuento = calcularDescuento(precioTotal);
    calcularDeEnvio(totalConDescuento);
};

const calcularDescuento = (precioTotal) => {
    let totalConDescuento = 0;
    if (precioTotal >= 400){
        totalConDescuento = precioTotal * 0.80; 
        alert('Tienes un descuento, el precio final es: $'+totalConDescuento);
        return totalConDescuento; 
    }else{
        return precioTotal; 
    };
};

const calcularDeEnvio = (precioFianl) => {
    let envioAdomicilio = confirm ('¿Queres optar por envio a domicilio?');

    if (envioAdomicilio && precioFianl >= 200) {
        alert('Tenes envio gratis. El total de la compra es $' +precioFianl);
    } else if (envioAdomicilio && precioFianl < 200 && precioFianl !== 0) {
        precioFianl += 40;
        alert('El envio cuesta $40. El total de la compra es $' +precioFianl);
    } else{
        alert('El precio total es de $' +precioFianl);
    }
    return precioFianl;
};


const comprar = () => {
    const productosBaratos =confirm ('Queres ordenar la lista del producto de menor valor al mayor valor?')
    if (productosBaratos) {
        ordenarMenorMayor () 
    } else {
        ordenarMayorMenor()
    }
};
comprar()
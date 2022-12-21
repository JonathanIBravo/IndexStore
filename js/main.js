alert("¡Bienvenidos a IndexStore! Nuestra tienda online de zapatillas importadas!")
alert("¡GANO LA SELECCION! ¡¡Por eso hoy tenemos descuentos y beneficios para vos!!")
alert("A continuacion te mostraremos una lista con el stock con el cual contamos, para salir Ingrese 0.")

let selecionarProductos = Number(prompt("1-Air force one $1400 2-Jordan 1 $1200 3-Goretex $1000"))
let seleccionarCantidad; 
let total = 0;

const cantidad =(cant, precio) => {
    return cant * precio
}

while (selecionarProductos !=0){
    switch(selecionarProductos){
        case 1:
            seleccionarCantidad = Number(prompt("El producto seleccionado son las Air force one, indique cantidad que desea comprar."))
            total += cantidad (seleccionarCantidad, 1400)
            break;

        case 2:
            seleccionarCantidad = Number(prompt("El producto seleccionado son las Jordan 1, indique cantidad que desea comprar."))
            total += cantidad (seleccionarCantidad, 1200)
            break;

        case 3:
            seleccionarCantidad = Number(prompt("El producto seleccionado son las Goretex, indique cantidad que desea comprar."))
            total += cantidad (seleccionarCantidad, 1000)
            break;

        default:
            break;
    }
    // alert("¡Sigue comprando y obtén beneficios en tu envios!")
    selecionarProductos = Number(prompt("1-Air force one $1400 2-Jordan 1 $1200 3-Goretex $1000, si desea finalizar ¡Ingrese 0!"))
}


alert("Superando los $1500, te brindamos ¡ENVIOS GRATIS A TODO EL PAIS!")

alert("El total de la compra es de: $" + total)

const envio = () => {
    if (total >= 1500){
        alert("Superaste de $1500, tenes ¡ENVIOS GRATIS A TODO EL PAIS! ")
    } else {
        total += 500
        alert("El costo de envio es de $500, el total es: $"  + total)
    }
}
envio()
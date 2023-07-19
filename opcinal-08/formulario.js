
console.log('formulario de carga de producto');

let productos =[];
//               0          1
let frutas = ['peras', 'manzanas']
// json
let persona = {
    nombre:'pepe',
    apellido: 'perez',
    ciudad: 'caba'
}
console.log(frutas);

console.log(persona);

function cargarProductos() {
    ////imprimimos una info de la función
    console.log(`tus productos se cargarno a la database`);
    ////tomamos los datos ante el formulario
    let nombreProducto = document.getElementById('nombreProducto').value;
    //console.log(nombreProducto);
    let precioProducto = document.getElementById('precioProducto').value;
    //console.log(precioProducto);
    console.log(typeof precioProducto);
    //productos.push('Pepas');
    //objetos jonso de productos
    let producto = {
        nombre: nombreProducto ,
        precio: precioProducto
    }
    //imprimimos el objeto producto
    console.log(producto);
    //guardamos el producto en el arreglo o data base
    productos.push(producto);

    //guardo la info del array del producto
    //producto.push(nombreProducto)
    //producto.push(precioProducto)

    //imprimo el arreglo
    console.log(productos);
    //imprimimos en la consola los datos del preoducto
    //console.log(nombreProducto);
    //console.log(precioProducto);
    //llamo a la funcion cargarProductos
    cargarTabla();
}
const cargarTabla = () =>{

    //obtener la tabla
    let tabla = document.getElementById('tablaProductos');

    //limpiar la tabla antes de que el for lo cargue de nuevo
    tabla.innerText = '';

    //recorrer el arreglo productos
    for (let i = 0; i < productos.length; i++) {

        //crear un elemeto tr
        let fila = document.createElement('tr');

        //creamos un elemento td
        let celdaNombre = document.createElement('td');
        let celdaPrecio = document.createElement('td');

        //agregamos el dato a la celda del nombre del producto
        celdaNombre.textContent = productos[i].nombre;
        celdaPrecio.textContent = productos[i].precio;

        //subimos el td al tr
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        //subimos le tr al tbody
        tabla.appendChild(fila)


        //imprimimos los JSON en el array de productos
        console.log(productos[i]);
    }

}
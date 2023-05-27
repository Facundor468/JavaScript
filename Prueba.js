class productos{

    constructor(nombre, precio, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }

    get_datos(){
        console.log("DATOS DEL PRODUCTO:");
        console.log("stock disponible: ", this.stock);        
        console.log("nombre del producto: ", this.nombre);
        console.log("precio del producto: ", this.precio);
        console.log("")
    }

    get_stock(){

        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    venta(cantidad){
        if(this.stock >= cantidad){
            console.log("perfecto, hay stock disponible");
            this.stock = this.stock - cantidad
        }
        else{
            console.log("no se pudo realizar la compra por falta de stock");
        }
    }
}

let lista_productos = []

lista_productos.push(new productos("microondas", 80000, 7))
lista_productos.push(new productos("televisor", 150000, 5))
lista_productos.push(new productos("luces led", 15000, 4))
lista_productos.push(new productos("parlante", 20000, 10))

for(let producto of lista_productos){
    producto.get_datos();
}

function buscar_producto(producto){

    return producto.nombre == compra_usuario
}

let compra_usuario = prompt("ingrese el nombre del producto que quiere comprar")

let resultado_busqueda = lista_productos.find (buscar_producto)

if (resultado_busqueda != undefined) {

    if (resultado_busqueda.get_stock) {
        let cantidad = prompt("ingrese la cantidad deseada del producto")
        resultado_busqueda.venta(cantidad)

        resultado_busqueda.get_datos();
    }
}
else {
    console.log("no se encontro el producto: ", compra_usuario)
}

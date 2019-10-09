export default class Lista {
    constructor(tabla) {
        this._tabla = tabla;
        this._primerArticulo = null
        this._ultimoArticulo = null
    }
    get contadorVector(){
        return this._contadorVector
    }
    get articulos() {
        return this._articulos;
    }

    agregarArticulo(objArticulo) {
        if(this._primerArticulo == null){
            this._primerArticulo = objArticulo;
            this._ultimoArticulo = objArticulo;
        }else{
            this._ultimoArticulo.siguiente = objArticulo;
            this._ultimoArticulo = objArticulo;
        }
        
        
        this._actualizarTabla();
        console.log(this._primerArticulo);
        
    }

    eliminarArticulo(codigo) {
        let articuloAterior = this._articuloAnterior(codigo);
        let articuloEliminar = this._buscarArticulo(codigo);
        
        articuloAterior.siguiente = articuloEliminar.siguiente;
        
        this._actualizarTabla();
        console.log(this._primerArticulo);

    }

    _editarArticulo(nuevArticulo) {
        let articuloActual = this._buscarArticulo(nuevArticulo.codigo)


        articuloActual.nombre = nuevArticulo.nombre;
        articuloActual.precio = nuevArticulo.precio;
        articuloActual.contenido = nuevArticulo.contenido;
        articuloActual.descripcion = nuevArticulo.descripcion;

        this._actualizarTabla();
    }

    _actualizarTabla() {
        this._tabla.innerHTML = "";
        let articuloTemporal = this._primerArticulo;

        while (articuloTemporal != null) {

            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = articuloTemporal.codigo;
            row.insertCell(1).innerHTML = articuloTemporal.nombre;
            row.insertCell(2).innerHTML = articuloTemporal.precio;
            row.insertCell(3).innerHTML = articuloTemporal.contenido + "gr";
            row.insertCell(4).innerHTML = articuloTemporal.descripcion;
            
            articuloTemporal = articuloTemporal.siguiente;
        }
    }

    

    _ordenInverso(){
        // FALTA TERMINAR ESTE METODO :C  (Seguimos trabajando en eso, pasiencia porfavor)

        this._tabla.innerHTML = "";
        let codigo 
        let articulo 
        while (articulo.siguiente.codigo != codigo) {
            

            
        }


        // let articuloTemporal = this._ultimoArticulo;

        // while (articuloTemporal != null) {

        //     let row = this._tabla.insertRow(-1);

        //     row.insertCell(0).innerHTML = articuloTemporal.codigo;
        //     row.insertCell(1).innerHTML = articuloTemporal.nombre;
        //     row.insertCell(2).innerHTML = articuloTemporal.precio;
        //     row.insertCell(3).innerHTML = articuloTemporal.contenido + "gr";
        //     row.insertCell(4).innerHTML = articuloTemporal.descripcion;
            
        //     articuloTemporal = articuloTemporal.anterior;
        // }
    }

    
    _buscarArticulo(codigo) {
        let articuloTemporal = this._primerArticulo;

        while (articuloTemporal != null) {
            if(articuloTemporal.codigo == codigo){
                return articuloTemporal
            }

            articuloTemporal = articuloTemporal.siguiente;
        }
    }
    _imprimirArticuloEncontrado(articulo,lienzo){
        lienzo.innerHTML = ""
        lienzo.innerHTML += `
        Codigo: ${articulo.codigo} <br>
        Nombre: ${articulo.nombre} <br>
        Precio: ${articulo.precio} <br>
        Contenido: ${articulo.contenido}gr <br>
        Descripcion: ${articulo.descripcion}`

    }

    _articuloAnterior(codigo){
        let articuloTemporal = this._primerArticulo;

        while (articuloTemporal.siguiente != null) {
            if(articuloTemporal.siguiente.codigo == codigo){
                return articuloTemporal
            }

            articuloTemporal = articuloTemporal.siguiente;
        }
    }
}


    // _ordenarArticulos(){
    //     for(let k = 0; k<this._contadorVector;k++){
    //         for(let i = 0; i<this._contadorVector;i++){
    //             for(let j = 0; j<this._contadorVector;j++){
                    
    //                 if(this._articulos[i].codigo < this._articulos[j].codigo){
    //                     let a = this._articulos[i]
    //                     this._articulos[i] = this._articulos[j]
    //                     this._articulos[j] = a


    //                 }
    //             }
    //         }
    //     }
    // }



// for(let k=0; k<tamaño.del.vector;k++){
//     for(let i = 0;i<tamaño.del.vector; i++){

//         for(let j = i+1; j<tamaño.del.vector; j++){

//             if(vector[i].codigo > vector[j].codigo){

//                 let b = vetor[i]
//                 vector[i] = vector[j]
//                 vector[j] = b
//             }
//         }
//     }
// }
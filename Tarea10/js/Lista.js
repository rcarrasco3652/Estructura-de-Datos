export default class Lista {
    constructor(tabla) {
        this._tabla = tabla;
        this._primerArticulo = null
        this._ultimoArticulo = null
    }
    get contadorVector() {
        return this._contadorVector
    }
    get articulos() {
        return this._articulos;
    }

    agregarArticulo(objArticulo) {
        if (this._primerArticulo == null) {
            this._primerArticulo = objArticulo;
            this._ultimoArticulo = objArticulo;
            alert('Se agrego tu articulo');

        } else {
            if (this._buscarArticulo2(objArticulo.codigo) == true) {
                alert(`Ya existe un articulo con este codigo`)
            } else {
                this._agregarYOrdenar(objArticulo);
                alert('Se agrego tu articulo');
            }

        }

        this._actualizarTabla();
    }

    _eliminarArticulo(codigo) {

        let articuloEliminar = this._buscarArticulo(codigo);
        let articuloTemporal = articuloEliminar.anterior;

        articuloEliminar.siguiente.anterior = articuloTemporal
        articuloTemporal.siguiente = articuloEliminar.siguiente;

        console.log(this._primerArticulo);

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

    _editarArticulo(nuevArticulo) {
        let articuloActual = this._buscarArticulo(nuevArticulo.codigo)


        articuloActual.nombre = nuevArticulo.nombre;
        articuloActual.precio = nuevArticulo.precio;
        articuloActual.contenido = nuevArticulo.contenido;
        articuloActual.descripcion = nuevArticulo.descripcion;
    }

    _ordenInverso() {
        this._tabla.innerHTML = "";
        let articuloTemporal = this._ultimoArticulo;

        while (articuloTemporal != null) {

            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = articuloTemporal.codigo;
            row.insertCell(1).innerHTML = articuloTemporal.nombre;
            row.insertCell(2).innerHTML = articuloTemporal.precio;
            row.insertCell(3).innerHTML = articuloTemporal.contenido + "gr";
            row.insertCell(4).innerHTML = articuloTemporal.descripcion;

            articuloTemporal = articuloTemporal.anterior;
        }
    }


    _buscarArticulo(codigo) {
        let articuloTemporal = this._primerArticulo;

        while (articuloTemporal != null) {
            if (articuloTemporal.codigo == codigo) {
                return articuloTemporal
            }

            articuloTemporal = articuloTemporal.siguiente;
        }
    }
    _buscarArticulo2(codigo) {
        let articuloTemporal = this._primerArticulo;

        while (articuloTemporal != null) {
            if (articuloTemporal.codigo == codigo) {
                return true;
            }

            articuloTemporal = articuloTemporal.siguiente;
        }
    }
    _imprimirArticuloEncontrado(articulo, lienzo) {
        lienzo.innerHTML = ""
        lienzo.innerHTML += `
        Codigo: ${articulo.codigo} <br>
        Nombre: ${articulo.nombre} <br>
        Precio: ${articulo.precio} <br>
        Contenido: ${articulo.contenido}gr <br>
        Descripcion: ${articulo.descripcion}`

    }

    // AUN NO ESTA BIEN HECHO

    _agregarYOrdenar(articuloRecivido) {
        
        let articulo = articuloRecivido;
        let articuloAux = this._primerArticulo;


        if (articulo.codigo < this._primerArticulo.codigo) {
            articulo.siguiente = this._primerArticulo;
            this._primerArticulo.anterior = articulo;
            this._primerArticulo = articulo;
        }else if(this._ultimoArticulo.codigo < articulo.codigo){
            articulo.anterior = this._ultimoArticulo;
            this._ultimoArticulo.siguiente = articulo;
            this._ultimoArticulo = articulo;
        } else {
            
            while (articuloAux.siguiente != null) {
                
                if (articuloAux.codigo < articulo.codigo) {
                    articulo.siguiente = articuloAux.siguiente;
                    articulo.anterior = articuloAux;

                    articuloAux.siguiente.anterior = articulo;
                    articuloAux.siguiente = articulo;
                }

                articuloAux = articuloAux.siguiente;
            }
            console.log(this._primerArticulo)
        }

        this._ultimoArticulo = articuloAux;
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
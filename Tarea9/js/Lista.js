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
        let articuloTemporal = this._primerArticulo;
        let contador = 0;
        while (articuloTemporal != null) {
            contador++

            articuloTemporal = articuloTemporal.siguiente;
        }


        
        let ultimoArticulo = this._ultimoArticulo;

        
        this._tabla.innerHTML = "";
        for(let i = 0; i<contador;i++){
            articuloTemporal = this._primerArticulo;
            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = ultimoArticulo.codigo;
            row.insertCell(1).innerHTML = ultimoArticulo.nombre;
            row.insertCell(2).innerHTML = ultimoArticulo.precio;
            row.insertCell(3).innerHTML = ultimoArticulo.contenido + "gr";
            row.insertCell(4).innerHTML = ultimoArticulo.descripcion;

            if(articuloTemporal == ultimoArticulo){
                return;
            }else{
                
                while (articuloTemporal.siguiente.codigo != ultimoArticulo.codigo) {
                    articuloTemporal = articuloTemporal.siguiente;
                }
                ultimoArticulo = articuloTemporal
            }

        }
        
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
    _imprimirArticuloEncontrado(articulo){
        return `
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

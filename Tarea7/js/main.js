import Articulo from "./Articulo.js";
import Lista from "./Lista.js";
class Main {
    constructor() {
        this._lista = new Lista(document.getElementById('tablaArticulos').value)
        this._articulos = []
        // Agregar un articulo
        document.getElementById('agregarArticulo').addEventListener('click', () => {
            let objArticulo = {
                codigo: Number(document.getElementById('codigoArticulo').value),
                nombre: document.getElementById('nombreArticulo').value,
                precio: Number(document.getElementById('precioArticulo').value),
                contenido: document.getElementById('contenidoArticulo').value,
                descripcion: document.getElementById('descripcionArticulo').value
            };

            let articulo = new Articulo(objArticulo);
            this._lista._agregarArticulo(articulo);
            // lista._actualizarTabla();
            console.log(this._lista.articulos);



            document.getElementById('cerrarModal').click(); // Cerrar modal despues de agregar articulo
            document.getElementById('formArticulo').reset(); // Borrar el formulario despues de que se cierre
        });

        // Eliminar un articulo
        document.getElementById('eliminarArticulo').addEventListener('click', () => {
            let posicion = this._buscarArticulo(document.getElementById('articuloAEliminar').value);
            this._lista._eliminarArticulo(posicion);
        
            // lista._actualizarLista(); //Falta esta funcion
        });

        // Editar articulo
        document.getElementById('editarArticulo').addEventListener('click', () => { 
            let objArticulo = { 
                nombre:  document.getElementById('nombreAArticulo').value,
                precio:  Number(document.getElementById('precioAArticulo').value),
                contenido: document.getElementById('contenidoAArticulo').value,
                descripcion:  document.getElementById('descripcionAArticulo').value
            }

            let posicion = this._buscarArticulo(document.getElementById('articuloAEditarr').value)
            
            this._lista._editarArticulo(posicion,objArticulo);
            // lista._actualizarTabla();
            console.log(this._lista.articulos);
        })
    }

    _buscarArticulo(codigo) {
        for (let i = 0; i < this._lista.articulos.length; i++) {
            if (this._lista.articulos[i].codigo == codigo) {
                return i;
            }
        }
    }
}

let m = new Main();
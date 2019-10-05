import Articulo from "./Articulo.js";
import Lista from "./Lista.js";
class Main {
    constructor() {
        this._lista = new Lista(document.getElementById('tablaArticulos'))



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
            this._lista._actualizarTabla();

            document.getElementById('cerrarModal').click(); // Cerrar modal despues de agregar articulo
            document.getElementById('formArticulo').reset(); // Borrar el formulario despues de que se cierre

            alert('Se agrego tu articulo');
        });

        // Eliminar un articulo
        document.getElementById('eliminarArticulo').addEventListener('click', () => {
            // let posicion = this._buscarArticulo(document.getElementById('articuloAEliminar').value);
            this._lista._eliminarArticulo(document.getElementById('articuloAEliminar').value);

            document.getElementById('cerrarEliminar').click(); // Cerrar modal despues de agregar articulo
            document.getElementById('formEliminar').reset(); // Borrar el formulario despues de que se cierre

            this._lista._actualizarTabla();

            alert('Se elimino tu articulo');
        });

        // Editar articulo
        document.getElementById('editarArticulo').addEventListener('click', () => {
            let objArticulo = {
                codigo: document.getElementById('articuloAEditarr').value,
                nombre: document.getElementById('nombreAArticulo').value,
                precio: Number(document.getElementById('precioAArticulo').value),
                contenido: document.getElementById('contenidoAArticulo').value,
                descripcion: document.getElementById('descripcionAArticulo').value
            }

            // let posicion = this._lista._buscarArticulo(document.getElementById('articuloAEditarr').value)

            this._lista._editarArticulo(objArticulo);
            this._lista._actualizarTabla();


            document.getElementById('cerrarEditar').click(); // Cerrar modal despues de agregar articulo
            document.getElementById('formEditar').reset(); // Borrar el formulario despues de que se cierre
        
            alert('Tu articulo se actualizo');
        });

        // Buscar articulo
        document.getElementById('buscarArticulo').addEventListener('click', () => {
            let lienzo = document.getElementById('articuloBuscado')
            this._lista._imprimirArticuloEncontrado(
                this._lista._buscarArticulo(document.getElementById('articuloABuscar').value),
                lienzo
            );

            document.getElementById('cerrarBuscar').addEventListener('click', () => {
                lienzo.innerHTML = ""
            }) // Cerrar modal despues de agregar articulo y borrar el lienzo

        });

        // Cambiar el orden
        document.getElementById('ordenamiento').addEventListener('change', () => {

            switch (document.getElementById('ordenamiento').value) {
                case "defecto":
                    this._lista._actualizarTabla();
                    break;

                case "inverso":
                    this._lista._ordenInverso();
                    break;
            
                default:
                    break;
            }
        });
    }

    
}

let m = new Main();
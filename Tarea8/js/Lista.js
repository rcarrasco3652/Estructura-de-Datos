import Articulo from "./Articulo.js"

export default class Lista {
    constructor(tabla) {
        this._tabla = tabla;
        this._articulos = new Array(20);
        this._contadorVector = 0
    }
    get contadorVector(){
        return this._contadorVector
    }
    get articulos() {
        return this._articulos;
    }

    _agregarArticulo(objArticulo) {
        if(this._contadorVector<20){
            this._articulos[this._contadorVector] = objArticulo;
            this._contadorVector++;
            console.log(objArticulo.codigo);

            this._ordenarArticulos();
        }
        else{
            alert('Ya no puedes agregar mas articulos');
        }

        console.log(this._articulos);
        
    }

    _eliminarArticulo(posicion) {
        for(posicion; posicion<this._contadorVector; posicion++){
            this._articulos[posicion] = this._articulos[posicion + 1];
        }
        this._articulos[this._contadorVector-1] = ""


        this._contadorVector--;

        console.log(this._articulos);
    }

    _actualizarTabla() {
        this._tabla.innerHTML = "";


        for (let i = 0; i < this._contadorVector; i++) {

            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = this._articulos[i].codigo
            row.insertCell(1).innerHTML = this._articulos[i].nombre
            row.insertCell(2).innerHTML = this._articulos[i].precio
            row.insertCell(3).innerHTML = this._articulos[i].contenido + "gr o ml"
            row.insertCell(4).innerHTML = this._articulos[i].descripcion

        }
    }

    _editarArticulo(posicion, nuevArticulo) {
        this._articulos[posicion].nombre = nuevArticulo.nombre;
        this._articulos[posicion].precio = nuevArticulo.precio;
        this._articulos[posicion].contenido = nuevArticulo.contenido;
        this._articulos[posicion].descripcion = nuevArticulo.descripcion;
    }

    _ordenarArticulos(){
        for(let k = 0; k<this._contadorVector;k++){
            for(let i = 0; i<this._contadorVector;i++){
                for(let j = 0; j<this._contadorVector;j++){
                    
                    if(this._articulos[i].codigo < this._articulos[j].codigo){
                        let a = this._articulos[i]
                        this._articulos[i] = this._articulos[j]
                        this._articulos[j] = a
                    }
                }
            }
        }
    }
}



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
import Elevador from "../js/Elevador.js"
class Main{
    constructor(){
        this._elevador=new Elevador(20, 100);
        let pTotalPisos=document.querySelector("#pTotalPisos");
        let pPisoActual=document.querySelector("#pPisoActual");
        let pPuerta=document.querySelector("#pPuerta");
        let pMensaje=document.querySelector("#pMensaje");

        pTotalPisos.textContent = this._elevador.totalPisos;
        pPisoActual.textContent = this._elevador.pisoActual;
        pPuerta.textContent = this._elevador.toString(this._elevador.puerta);
        pMensaje.textContent = "Beinvenido al elevador";

        document.querySelector("#btnAbrir").addEventListener("click", () =>{
            if(this._elevador.puerta===false){
                this._elevador.abrirPuerta();
                pMensaje.textContent = "Se ha abierto la puerta";
                pPuerta.textContent = this._elevador.toString(this._elevador.puerta);
                return;
            }else{
                pMensaje.textContent = "La puerta ya estaba abierta";
                return;
            }
        });

        document.querySelector("#btnCerrar").addEventListener("click", () =>{
            if(this._elevador.puerta===true){
                this._elevador.cerrarPuerta();
                pMensaje.textContent = "Se ha cerrado la puerta";
                pPuerta.textContent = this._elevador.toString(this._elevador.puerta);
                return;
            }else{
                pMensaje.textContent = "La puerta ya estaba cerrada";
                return;
            }
        });

        document.querySelector("#btnMover").addEventListener("click", () =>{
            let iPiso = document.querySelector("#iPiso").value;

            if(iPiso===this._pisoActual){
                pMensaje.textContent = "El elevador ya estaba en el piso " + iPiso;
                return;
            }else if(iPiso>this._elevador.totalPisos){
                pMensaje.textContent = "Piso inexistente. Numero de pisos totales: del 0 al "+ this._elevador.totalPisos
            }else if(this._elevador.puerta===true){
                pMensaje.textContent = "No se puede mover con la puerta abierta, favor de cerrarla";
                return
            }else if(iPiso==""){
                pMensaje.textContent = "Inserte un numero de piso antes de mover el elvador";
                return
            }else{
                this._elevador.pisoActual=iPiso;
                pMensaje.textContent = "El elevador se ha movido al piso " + this._elevador.pisoActual;
                pPisoActual.textContent = this._elevador.pisoActual;
                return
            }
        });
    }
}
let m = new Main();
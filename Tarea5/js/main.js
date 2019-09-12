import Elevador from "../js/Elevador.js"
class Main{
    constructor(){
        this._elevador=new Elevador(20, 100);
        let pTotalPisos=document.querySelector("#pTotalPisos");
        let pPisoActual=document.querySelector("#pPisoActual");
        let pPuerta=document.querySelector("#pPuerta");
        let pMensaje=document.querySelector("#pMensaje");


        document.querySelector("#btnAbrir").addEventListener("click", () =>{
            if(this._elevador.puerta===false){
                this._elevador.abrirPuerta();
                console.log("Se ha abierto la puerta")
                console.log(this._elevador.toString(this._elevador.puerta))
                return;
            }else{
                console.log("La puerta ya estaba abierta");
                return;
            }
        });

        document.querySelector("#btnCerrar").addEventListener("click", () =>{
            if(this._elevador.puerta===true){
                this._elevador.cerrarPuerta();
                console.log("Se ha cerrado la puerta");
                console.log(this._elevador.toString(this._elevador.puerta));
                return;
            }else{
                console.log("La puerta ya estaba cerrada");
                return;
            }
        });

        document.querySelector("#btnMover").addEventListener("click", () =>{
            let iPiso = document.querySelector("#iPiso").value;

            if(iPiso===this._pisoActual){
                console.log("El elevador ya estaba en el piso " + iPiso);
                return;
            }else if(iPiso>this._elevador.totalPisos){
                console.log("Piso inexistente. Numero de pisos totales: del 0 al "+ this._elevador.totalPisos)
            }else if(this._elevador.puerta===true){
                console.log("No se puede mover con la puerta abierta, favor de cerrarla");
                return
            }else if(iPiso==""){
                console.log("Inserte un numero de piso antes de mover el elvador");
                return
            }else{
                this._elevador.pisoActual=iPiso;
                console.log("El elevador se ha movido al piso " + this._elevador.pisoActual);
                console.log(this._elevador.pisoActual);
                return
            }
        });
    }
}
let m = new Main();
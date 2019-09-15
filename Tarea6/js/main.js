import Jugador from "./Jugador.js";
import Escalera from "./Escaleras.js";
import Serpiente from "./Serpiente.js"

var jugador1 = new Jugador("Juan");
var jugador2 = new Jugador("Pedro");
var jugador3 = new Jugador("Roberto")
var escaleras = new Escalera();
var serpientes = new Serpiente();

var jugadores = [jugador1, jugador2, jugador3];
document.getElementById("btnAvanzar").addEventListener('click', () => {
    for (let i = 0; i < jugadores.length; i++) {
        jugadores[i].avanzar();
        

        //Revisar si le toco escaleras
        switch (jugadores[i].posicion) {
            case 5:
                jugadores[i].subirEsacalera(escaleras.posicion[0]);
                break;
            case 14:
                jugadores[i].subirEsacalera(escaleras.posicion[1]);
                break;
            case 53:
                jugadores[i].subirEsacalera(escaleras.posicion[2]);
                break;
            case 64:
                jugadores[i].subirEsacalera(escaleras.posicion[3]);
                break
            default:
                break;
        }

        //Revisar si le toco serpientes
        switch (jugadores[i].posicion) {
            case 38:
                jugadores[i].bajarPorSerpiente(serpientes.posicion[0]);
                break;
            case 51:
                jugadores[i].bajarPorSerpiente(serpientes.posicion[1]);
                break;
            case 76:
                jugadores[i].bajarPorSerpiente(serpientes.posicion[2]);
                break;
            case 91:
                jugadores[i].bajarPorSerpiente(serpientes.posicion[3]);
                break;
            case 97:
                jugadores[i].bajarPorSerpiente(serpientes.posicion[4]);
                break;
            default:
                break;
        }

        console.log(jugadores[i].nombre +" = "+ jugadores[i].posicion);
    }





    

});
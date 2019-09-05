import Tortuga from "../js/Tortuga.js";
import Liebre from "../js/Liebre.js";

class Main{
    constructor(){
        let liebre1 = new Liebre(1,"Juana",25);
        let tortuga1 = new Tortuga(2,"Pedro", 100);

        document.getElementById('btn').addEventListener('click', () => {
            while (liebre1.posicion <= 90 && tortuga1.posicion <= 90) {
                liebre1.correr();
                tortuga1.correr();

                console.log(`Liebre: ${liebre1.posicion}  tortuga: ${tortuga1.posicion}`);
            }

            if (liebre1.posicion >= 90 && tortuga1.posicion >= 90) {
                console.log("Es un empate");

            }else if (liebre1.posicion >= 90) {
                console.log(`La liebre gano!!`);

            } else if (tortuga1.posicion >= 90) {
                console.log(`La tortuga gano!!!`);
            }
        });
    }
}
let m = new Main();

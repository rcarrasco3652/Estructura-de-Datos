export default class Dado{
    constructor(){
        
    }
    lanzar(){
        return Math.trunc(Math.random()*6+1);
    }

}


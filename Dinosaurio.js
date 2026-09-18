class Dinosaurio{
    raza = "def";
    alimentacion = "def";



    constructor(nombreRaza,dieta){
        this.raza = nombreRaza;
        this.dieta = dieta;
    }
    getRaza(){
        return this.raza;
    }
    getDieta(){
        return this.dieta;
    }

    descansa(){
        console.log("cuando es de noche el "+this.raza +" se encuentra Pasivo");
         
    }

    dietaDinosaurio(){
        console.log("el "+this.raza +" es "+ this.dieta + " pero de caracter fuerte ");
        
    }
    dinosaurioEncuentro(unDinosaurio){
        console.log("cuando se encuentran ambos el "+this.getRaza() +" intenta agredir al "+ unDinosaurio.getRaza()+ " ya que el "+ this.raza + " es " + this.getDieta());
        
    }


}


module.exports = Dinosaurio;
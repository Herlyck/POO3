const Dinosaurio = require("./Dinosaurio");



function main() {
    const trex = new Dinosaurio("T-Rex","carnivoro");
    const triceraptos = new Dinosaurio("Triceraptos","hervivoro");


    trex.descansa();
    triceraptos.dietaDinosaurio();
    trex.dinosaurioEncuentro(triceraptos);
   
    
}
main();

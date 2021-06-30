class Personaje{

  constructor(poderes,arma){
    this.poderes = poderes;
    this.arma = arma;
  }

  asignarEquipo(personaje){
    console.log("soy "+personaje)
    if(this.arma === "Blaster"){
        console.log("Soy stormtrooper" )
    }else{
      console.log("Soy un Jedi")
    }
  }
}

var personaje = new Personaje("Fuerza","Blaster")
personaje.asignarEquipo("stormtrooper")

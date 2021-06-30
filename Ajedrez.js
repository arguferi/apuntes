class Ajedrez{
  constructor(piezas){
   this.piezas = piezas;
  }

  empezarPartida(){
    console.log("Empieza la partida");
  }

  turno(persona){
    console.log("Le toca a la persona: "+persona);
  }

  getQuePiezasHayEnElTablero(){
    console.log(piezas);
  }
}

var piezas = ["peon", "caballo","dama", "rey","alfil","torre"]
var ajedrezDeIsaac = new Ajedrez(piezas);
ajedrezDeIsaac.empezarPartida();
ajedrezDeIsaac.turno("Victor")
ajedrezDeIsaac.getQuePiezasHayEnElTablero()

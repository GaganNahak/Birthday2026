import confetti from "canvas-confetti"
import blastSound from "../assets/freesound_community-blast-37988.mp3"
class Explode{
   constructor() {
    confetti({
        particleCount:500,
            spread:1000,
            startVelocity:25,
            origin:{x:0.5,y:0.3},
            gravity:0.4,
            ticks:1000
      })
  }


}

export  {Explode}
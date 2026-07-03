import confetti from "canvas-confetti"
import blastSound from "../assets/freesound_community-blast-37988.mp3"
class Explode{
   constructor(particleCount,spread,ticks) {
    confetti({
        particleCount:particleCount,
            spread:spread,
            startVelocity:25,
            origin:{x:0.5,y:0.3},
            gravity:0.4,
            ticks:ticks
      })
  }


}

export  {Explode}
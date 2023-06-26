import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';
import { mainCharacter } from '../mainCharacter.js'
import { artifact } from "./artifact.js";

export class upgradeDual extends artifact {
  constructor(posX, posY) {
    // super({ width: Resources.upgradeDual.width/ 1.5 , height: Resources.upgradeDual.height/ 1.05});
    this.pos = new Vector(posX, posY);
  }

  onInitialize(Engine) {
    // this.graphics.use(Resources.upgradeDual.toSprite());
    this.scale = new Vector(0.2, 0.2);

    this.on('collisionstart', (event) => {
      if (event.other instanceof mainCharacter) {
        this.kill();
      }
    });
  }

  onPreUpdate() {
    if (this.pos.x > 1600 || this.pos.x < 0 || this.pos.y < 0 || this.pos.y > 1000) {
      this.kill()
    }
  }

}
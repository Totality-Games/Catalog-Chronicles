/* 
Name: Catherine
Character name: Catherine
Eye Color: Dark Green
Hair Color: Brown
Hair Style: Wavy
Clothes Color: Turquoise
Clothes Top: Basic Shirt
Clothes Bottom: Skirt
Accessories: Glasses
Default Personality Trait: Relaxed
Activities: Watering Plants
Occupation: Housewife
Catchphrase: N/A
*/

import { Animation, Engine, ImageSource, Sprite, Vector } from 'excalibur';
import { NPC } from '../Base';
import { DIRECTIONS } from '../../../constants';

export class Catherine extends NPC {
  constructor(
    pos: Vector,
    resources: {
      AllNPCSpriteSheetsPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);

    this.name = 'Catherine';
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.vel = Vector.Zero;

    this.graphics.use(`${this.direction}-idle`);
  }

  addAnimations() {
    const downIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 0),
          duration: 200,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 9) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);
  }
}

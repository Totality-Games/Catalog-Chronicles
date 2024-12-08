/* 
Name: Catherine
Character name: Catherine
Eye Color: Dark Green // x = 48;
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

import {
  Actor,
  Animation,
  Engine,
  ImageSource,
  Sprite,
  Vector,
} from 'excalibur';
import { NPC } from '../Base';
import { DIRECTIONS } from '../../../constants';
import { NPCEyes } from '../Eyes';

class CatherineBase extends NPC {
  constructor(
    pos: Vector,
    resources: {
      AllNPCSpriteSheetsPng: ImageSource;
      NPCEyesSpriteSheetsPng: ImageSource;
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

class CatherineEyes extends NPCEyes {
  constructor(
    pos: Vector,
    resources: {
      NPCEyesSpriteSheetsPng: ImageSource;
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
          graphic: this.eyesSpriteSheet?.getSprite(48, 0),
          duration: 200,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.eyesSpriteSheet?.getSprite(0, 9) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);
  }
}

export class Catherine extends Actor {
  constructor(
    engine: Engine,
    pos: Vector,
    resources: {
      AllNPCSpriteSheetsPng: ImageSource;
      NPCEyesSpriteSheetsPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super();
    this.name = 'Catherine';

    const catherineBase = new CatherineBase(pos, resources, direction);
    const catherineEyes = new CatherineEyes(pos, resources, direction);

    engine.add(catherineBase);
    engine.add(catherineEyes);
  }
}

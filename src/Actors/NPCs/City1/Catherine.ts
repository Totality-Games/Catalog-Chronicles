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

import { Animation, Engine, ImageSource, Sprite, vec, Vector } from 'excalibur';
import { NPC } from '../Base';
import { DIRECTIONS } from '../../../constants';
import { NPCEyes } from '../Eyes';
import { NPCWavyHair } from '../WavyHair';

class CatherineBase extends NPC {
  constructor(
    pos: Vector,
    resources: {
      AllNPCSpriteSheetsPng: ImageSource;
      NPCEyesSpriteSheetsPng: ImageSource;
      WavyHairSpriteSheetPng: ImageSource;
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
class CatherineHair extends NPCWavyHair {
  constructor(
    pos: Vector,
    resources: {
      WavyHairSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
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
          graphic: this.hairSpriteSheet?.getSprite(0, 0),
          duration: 200,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 9) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);
  }
}

export function createCatherine(
  pos: Vector,
  resources: {
    AllNPCSpriteSheetsPng: ImageSource;
    NPCEyesSpriteSheetsPng: ImageSource;
    WavyHairSpriteSheetPng: ImageSource;
  },
  direction?: DIRECTIONS
) {
  const catherine = new CatherineBase(pos, resources, direction);
  const catherineEyes = new CatherineEyes(vec(0, 0), resources, direction);
  const catherineHair = new CatherineHair(vec(0, 0), resources, direction);

  catherine.addChild(catherineEyes);
  catherine.addChild(catherineHair);

  return catherine;
}

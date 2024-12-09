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
import { NPC } from '../Parts/Base';
import { DIRECTIONS } from '../../../constants';
import { NPCEyes } from '../Parts/Eyes';
import { NPCWavyHair } from '../Parts/Hair/WavyHair';
import { NPCBasicShirt } from '../Parts/Clothes/Shirt';
import { NPCSkirt } from '../Parts/Clothes/Skirt';
import { NPCGlasses } from '../Parts/Accessories/Glasses';

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

    this.scale = new Vector(2.2, 2.2);
    this.name = 'Catherine';
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.graphics.use(`${this.direction}-idle`);
  }

  onPostUpdate(_engine: Engine, _delta: number): void {
    if (this.vel.x < 0) {
      this.direction = DIRECTIONS.LEFT;
    }
    if (this.vel.x > 0) {
      this.direction = DIRECTIONS.RIGHT;
    }
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

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 1),
          duration: 200,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 3),
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 2),
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

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
    this.direction = this.parent?.direction;

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

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 1),
          duration: 200,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 3),
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 2),
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

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
    this.direction = this.parent?.direction;

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

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 1),
          duration: 200,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 3),
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 2),
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

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
class CatherineShirt extends NPCBasicShirt {
  constructor(
    pos: Vector,
    resources: {
      BasicShirtSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;

    this.graphics.use(`${this.direction}-idle`);
  }

  addAnimations() {
    const downIdle = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 0),
          duration: 200,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 1),
          duration: 200,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 3),
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 2),
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(0, 9) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);
  }
}
class CatherineSkirt extends NPCSkirt {
  constructor(
    pos: Vector,
    resources: {
      SkirtSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;

    this.graphics.use(`${this.direction}-idle`);
  }

  addAnimations() {
    const downIdle = new Animation({
      frames: [
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 0),
          duration: 200,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 1),
          duration: 200,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 3),
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 2),
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.skirtSpriteSheet?.getSprite(0, 9) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);
  }
}
class CatherineGlasses extends NPCGlasses {
  constructor(
    pos: Vector,
    resources: {
      GlassesSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;

    this.graphics.use(`${this.direction}-idle`);
  }

  addAnimations() {
    const downIdle = new Animation({
      frames: [
        {
          graphic: this.glassesSpriteSheet?.getSprite(8, 0),
          duration: 200,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.glassesSpriteSheet?.getSprite(8, 1),
          duration: 200,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.glassesSpriteSheet?.getSprite(8, 3),
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.glassesSpriteSheet?.getSprite(8, 2),
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.glassesSpriteSheet?.getSprite(0, 9) as Sprite,
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
    BasicShirtSpriteSheetPng: ImageSource;
    SkirtSpriteSheetPng: ImageSource;
    GlassesSpriteSheetPng: ImageSource;
  },
  direction?: DIRECTIONS
) {
  const catherine = new CatherineBase(pos, resources, direction);
  const catherineEyes = new CatherineEyes(
    vec(0, 0),
    resources,
    catherine.direction
  );
  const catherineHair = new CatherineHair(
    vec(0, 0),
    resources,
    catherine.direction
  );
  const catherineShirt = new CatherineShirt(
    vec(0, 0),
    resources,
    catherine.direction
  );
  const catherineSkirt = new CatherineSkirt(
    vec(0, 0),
    resources,
    catherine.direction
  );
  const catherineGlasses = new CatherineGlasses(
    vec(0, 0),
    resources,
    direction
  );

  catherine.addChild(catherineEyes);
  catherine.addChild(catherineHair);
  catherine.addChild(catherineShirt);
  catherine.addChild(catherineSkirt);
  catherine.addChild(catherineGlasses);

  return catherine;
}

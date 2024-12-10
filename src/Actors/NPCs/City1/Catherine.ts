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
import { DIRECTIONS, MOVEMENT } from '../../../constants';
import { NPCEyes } from '../Parts/Eyes';
import { NPCWavyHair } from '../Parts/Hair/WavyHair';
import { NPCBasicShirt } from '../Parts/Clothes/Shirt';
import { NPCSkirt } from '../Parts/Clothes/Skirt';
import { NPCGlasses } from '../Parts/Accessories/Glasses';

class CatherineBase extends NPC {
  movement: MOVEMENT;
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
    this.movement = MOVEMENT.IDLE;
  }

  onInitialize(_engine: Engine): void {
    console.log(`catherine`);
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.movement = MOVEMENT.IDLE;
    this.graphics.use(`${this.direction}-${this.movement}`);
  }

  onPostUpdate(_engine: Engine, _delta: number): void {
    if (this.vel.x < 0) {
      this.direction = DIRECTIONS.LEFT;
      this.movement = MOVEMENT.WALK;
      this.graphics.use(`${this.direction}-${MOVEMENT.WALK}`);
    }
    if (this.vel.x > 0) {
      this.direction = DIRECTIONS.RIGHT;
      this.movement = MOVEMENT.WALK;
      this.graphics.use(`${this.direction}-${MOVEMENT.WALK}`);
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
          graphic: this.npcSpriteSheet?.getSprite(0, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(1, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(2, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(3, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(4, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(5, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(6, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(7, 2) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(1, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(2, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(3, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(4, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(5, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(6, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(7, 3) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-walk', leftWalk);
  }
}

class CatherineEyes extends NPCEyes {
  movement: MOVEMENT;
  constructor(
    pos: Vector,
    resources: {
      NPCEyesSpriteSheetsPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
    this.movement = MOVEMENT.IDLE;
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;
    this.movement = this.parent?.movement;

    this.graphics.use(`${this.direction}-${this.movement}`);
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
        {
          graphic: this.eyesSpriteSheet?.getSprite(1, 9) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(2, 9) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(3, 9) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(4, 9) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(5, 9) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(6, 9) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(7, 9) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(49, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(50, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(51, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(52, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(53, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(54, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(55, 3) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-walk', leftWalk);
  }
}
class CatherineHair extends NPCWavyHair {
  movement: MOVEMENT;
  constructor(
    pos: Vector,
    resources: {
      WavyHairSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
    this.movement = MOVEMENT.IDLE;
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;
    this.movement = this.parent?.movement;

    this.graphics.use(`${this.direction}-${this.movement}`);
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
          graphic: this.hairSpriteSheet?.getSprite(0, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(1, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(2, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(3, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(4, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(5, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(6, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(7, 2) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(1, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(2, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(3, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(4, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(5, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(6, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(7, 3) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-walk', leftWalk);
  }
}
class CatherineShirt extends NPCBasicShirt {
  movement: MOVEMENT;
  constructor(
    pos: Vector,
    resources: {
      BasicShirtSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
    this.movement = MOVEMENT.IDLE;
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;
    this.movement = this.parent?.movement;

    this.graphics.use(`${this.direction}-${this.movement}`);
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
          graphic: this.shirtSpriteSheet?.getSprite(8, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(9, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(10, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(11, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(12, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(13, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(14, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(15, 2) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(9, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(10, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(11, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(12, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(13, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(14, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(15, 3) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-walk', leftWalk);
  }
}
class CatherineSkirt extends NPCSkirt {
  movement: MOVEMENT;
  constructor(
    pos: Vector,
    resources: {
      SkirtSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
    this.movement = MOVEMENT.IDLE;
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;
    this.movement = this.parent?.movement;

    this.graphics.use(`${this.direction}-${this.movement}`);
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
          graphic: this.skirtSpriteSheet?.getSprite(8, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(9, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(10, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(11, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(12, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(13, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(14, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(15, 2) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(9, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(10, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(11, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(12, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(13, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(14, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(15, 3) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-walk', leftWalk);
  }
}
class CatherineGlasses extends NPCGlasses {
  movement: MOVEMENT;
  constructor(
    pos: Vector,
    resources: {
      GlassesSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super(pos, resources, direction);
    this.movement = MOVEMENT.IDLE;
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.direction = this.parent?.direction;
    this.movement = this.parent?.movement;

    this.graphics.use(`${this.direction}-${this.movement}`);
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
          graphic: this.glassesSpriteSheet?.getSprite(8, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(9, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(10, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(11, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(12, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(13, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(14, 2) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(15, 2) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.glassesSpriteSheet?.getSprite(8, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(9, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(10, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(11, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(12, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(13, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(14, 3) as Sprite,
          duration: 200,
        },
        {
          graphic: this.glassesSpriteSheet?.getSprite(15, 3) as Sprite,
          duration: 200,
        },
      ],
    });
    this.graphics.add('left-walk', leftWalk);
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

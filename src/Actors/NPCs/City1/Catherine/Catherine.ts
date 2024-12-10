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
import { NPC } from '../../Parts/Base';
import { DIRECTIONS, MOVEMENT } from '../../../../constants';
import { CatherineGlasses } from './Glasses';
import { CatherineSkirt } from './Skirt';
import { CatherineShirt } from './Shirt';
import { CatherineHair } from './Hair';
import { CatherineEyes } from './Eyes';

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
    // if Catherine moves in any direction, her direction and movement should be updated
    // of course they're used immediately for the Base graphic to use
    // but more importantly, direction/movement are consumed by child Actors
    // (eyes, glasses, skirt, shirt, hair)
    // to ensure they are facing the same direction and using the same graphics
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
    if (this.vel.y < 0) {
      this.direction = DIRECTIONS.UP;
      this.movement = MOVEMENT.WALK;
      this.graphics.use(`${this.direction}-${MOVEMENT.WALK}`);
    }
    if (this.vel.y > 0) {
      this.direction = DIRECTIONS.DOWN;
      this.movement = MOVEMENT.WALK;
      this.graphics.use(`${this.direction}-${MOVEMENT.WALK}`);
    }
  }

  addAnimations() {
    const downIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 0),
          duration: 100,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 1),
          duration: 100,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 3),
          duration: 100,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 2),
          duration: 100,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

    const downWalk = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(1, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(2, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(3, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(4, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(5, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(6, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(7, 0) as Sprite,
          duration: 100,
        },
      ],
    });
    this.graphics.add('down-walk', downWalk);

    const upWalk = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 1) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(1, 1) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(2, 1) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(3, 1) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(4, 1) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(5, 1) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(6, 1) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(7, 1) as Sprite,
          duration: 100,
        },
      ],
    });
    this.graphics.add('up-walk', upWalk);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(1, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(2, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(3, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(4, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(5, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(6, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(7, 2) as Sprite,
          duration: 100,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(1, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(2, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(3, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(4, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(5, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(6, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.npcSpriteSheet?.getSprite(7, 3) as Sprite,
          duration: 100,
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

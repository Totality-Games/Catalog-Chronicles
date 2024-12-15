/* 
Name: Catherine
Character name: Catherine
Favorite Book: The Winter Sea, The Hobbit
Favorite Genre: Historical Fiction, Fantasy, Mystery
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
Catchphrase: Bless your heart
*/

// TODO: Add logic for Catherine watering her garden
// TODO: Add graphics for Catherine watering
// TODO: Add Relaxed graphic bubble as default

import {
  Animation,
  Engine,
  GraphicsGroup,
  ImageSource,
  Sprite,
  SpriteSheet,
  vec,
  Vector,
} from 'excalibur';
import { NPC } from '../../Parts/Base';
import { DIRECTIONS, MOVEMENT } from '../../../../constants';
// import { CatherineGlasses } from './Glasses';
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
      BasicShirtSpriteSheetPng: ImageSource;
      SkirtSpriteSheetPng: ImageSource;
      GlassesSpriteSheetPng: ImageSource;
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

  /*
    The following block of methods
    create GraphicsGroups for each
    Animation frame for all idle
    animations and walking animations.
    (up, down, left, right)-(idle, walking)
  */

  setDownIdle() {
    const downIdleGraphic01 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downIdle = new Animation({
      frames: [
        {
          graphic: downIdleGraphic01,
          duration: 100,
        },
      ],
    });

    return downIdle;
  }

  setUpIdle() {
    const upIdleGraphic01 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 1),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 1),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 1),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 1),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 1),
          offset: vec(0, 0),
        },
      ],
    });

    const upIdle = new Animation({
      frames: [
        {
          graphic: upIdleGraphic01,
          duration: 100,
        },
      ],
    });
    return upIdle;
  }

  setLeftIdle() {
    const leftIdleGraphic01 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 3),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 3),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 3),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 3),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 3),
          offset: vec(0, 0),
        },
      ],
    });

    const leftIdle = new Animation({
      frames: [
        {
          graphic: leftIdleGraphic01,
          duration: 100,
        },
      ],
    });
    return leftIdle;
  }

  setRightIdle() {
    const rightIdleGraphic01 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(0, 2),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(48, 2),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(0, 2),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 2),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(8, 2),
          offset: vec(0, 0),
        },
      ],
    });

    const rightIdle = new Animation({
      frames: [
        {
          graphic: rightIdleGraphic01,
          duration: 100,
        },
      ],
    });
    return rightIdle;
  }

  addAnimations() {
    const downIdle = this.setDownIdle();
    this.graphics.add('down-idle', downIdle);

    const upIdle = this.setUpIdle();
    this.graphics.add('up-idle', upIdle);

    const leftIdle = this.setLeftIdle();
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = this.setRightIdle();
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
  // const catherineGlasses = new CatherineGlasses(
  //   vec(0, 0),
  //   resources,
  //   direction
  // );

  // catherine.addChild(catherineEyes);
  // catherine.addChild(catherineHair);
  // catherine.addChild(catherineShirt);
  // catherine.addChild(catherineSkirt);
  // catherine.addChild(catherineGlasses);

  return catherine;
}

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
  vec,
  Vector,
} from 'excalibur';
import { NPC } from '../../Parts/Base';
import { DIRECTIONS, MOVEMENT } from '../../../../constants';

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

  setDownWalk() {
    const downWalkGraphic01 = new GraphicsGroup({
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

    const downWalkGraphic02 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(1, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(49, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(1, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(9, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(9, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downWalkGraphic03 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(2, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(50, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(2, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(10, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(10, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downWalkGraphic04 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(3, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(51, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(3, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(11, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(11, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downWalkGraphic05 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(4, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(52, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(4, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(12, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(12, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downWalkGraphic06 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(5, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(53, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(5, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(13, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(13, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downWalkGraphic07 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(6, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(54, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(6, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(14, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(14, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downWalkGraphic08 = new GraphicsGroup({
      useAnchor: false, // position group from the top left
      members: [
        {
          graphic: this.npcSpriteSheet?.getSprite(7, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.eyesSpriteSheet?.getSprite(55, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.hairSpriteSheet?.getSprite(7, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(15, 0),
          offset: vec(0, 0),
        },
        {
          graphic: this.skirtSpriteSheet?.getSprite(15, 0),
          offset: vec(0, 0),
        },
      ],
    });

    const downWalk = new Animation({
      frames: [
        {
          graphic: downWalkGraphic01,
          duration: 100,
        },
        {
          graphic: downWalkGraphic02,
          duration: 100,
        },
        {
          graphic: downWalkGraphic03,
          duration: 100,
        },
        {
          graphic: downWalkGraphic04,
          duration: 100,
        },
        {
          graphic: downWalkGraphic05,
          duration: 100,
        },
        {
          graphic: downWalkGraphic06,
          duration: 100,
        },
        {
          graphic: downWalkGraphic07,
          duration: 100,
        },
        {
          graphic: downWalkGraphic08,
          duration: 100,
        },
      ],
    });

    return downWalk;
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

    const downWalk = this.setDownWalk();
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

  return catherine;
}

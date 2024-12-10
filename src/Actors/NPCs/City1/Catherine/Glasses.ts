import { Animation, Engine, ImageSource, Sprite, Vector } from 'excalibur';
import { DIRECTIONS, MOVEMENT } from '../../../../constants';
import { NPCGlasses } from '../../Parts/Accessories/Glasses';

export class CatherineGlasses extends NPCGlasses {
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

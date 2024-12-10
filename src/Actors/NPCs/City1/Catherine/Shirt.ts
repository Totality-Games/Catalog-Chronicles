import { Animation, Engine, ImageSource, Sprite, Vector } from 'excalibur';
import { MOVEMENT, DIRECTIONS } from '../../../../constants';
import { NPCBasicShirt } from '../../Parts/Clothes/Shirt';

export class CatherineShirt extends NPCBasicShirt {
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
          duration: 100,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const upIdle = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 1),
          duration: 100,
        },
      ],
    });
    this.graphics.add('up-idle', upIdle);

    const leftIdle = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 3),
          duration: 100,
        },
      ],
    });
    this.graphics.add('left-idle', leftIdle);

    const rightIdle = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 2),
          duration: 100,
        },
      ],
    });
    this.graphics.add('right-idle', rightIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(9, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(10, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(11, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(12, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(13, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(14, 2) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(15, 2) as Sprite,
          duration: 100,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);

    const leftWalk = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(9, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(10, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(11, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(12, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(13, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(14, 3) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(15, 3) as Sprite,
          duration: 100,
        },
      ],
    });
    this.graphics.add('left-walk', leftWalk);

    const downWalk = new Animation({
      frames: [
        {
          graphic: this.shirtSpriteSheet?.getSprite(8, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(9, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(10, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(11, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(12, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(13, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(14, 0) as Sprite,
          duration: 100,
        },
        {
          graphic: this.shirtSpriteSheet?.getSprite(15, 0) as Sprite,
          duration: 100,
        },
      ],
    });
    this.graphics.add('down-walk', downWalk);
  }
}

import { Animation, Engine, ImageSource, Sprite, Vector } from 'excalibur';
import { MOVEMENT, DIRECTIONS } from '../../../../constants';
import { NPCWavyHair } from '../../Parts/Hair/WavyHair';

export class CatherineHair extends NPCWavyHair {
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

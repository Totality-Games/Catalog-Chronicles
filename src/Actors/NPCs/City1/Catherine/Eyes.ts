import { Animation, Engine, ImageSource, Sprite, Vector } from 'excalibur';
import { MOVEMENT, DIRECTIONS } from '../../../../constants';
import { NPCEyes } from '../../Parts/Eyes';

export class CatherineEyes extends NPCEyes {
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

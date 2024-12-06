import {
  Actor,
  Animation,
  CircleCollider,
  CollisionType,
  Engine,
  ImageSource,
  Sprite,
  SpriteSheet,
  vec,
  Vector,
} from 'excalibur';
import { DIRECTIONS } from '../../constants';
import { Config } from '../../config';

const circle = new CircleCollider({
  radius: 11,
  offset: vec(0, 4),
});

export class NPC extends Actor {
  public direction: DIRECTIONS;
  public resources: {
    PlayerSpriteSheetPng: ImageSource;
    PlayerRollingSpriteSheetPng: ImageSource;
  };
  constructor(
    pos: Vector,
    resources: {
      PlayerSpriteSheetPng: ImageSource;
      PlayerRollingSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super({
      pos,
      collider: circle,
      width: 32,
      height: 32,
      collisionType: CollisionType.Active,
    });

    this.z = 200;
    this.scale = new Vector(2, 2);
    this.direction = direction ?? DIRECTIONS.DOWN;
    this.resources = resources;
  }

  onInitialize(_engine: Engine): void {
    this.addAnimations();
  }

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.vel = Vector.Zero;

    this.graphics.use(`${this.direction}-idle`);
  }

  addAnimations() {
    const playerSpriteSheet = SpriteSheet.fromImageSource({
      image: this.resources.PlayerSpriteSheetPng as ImageSource,
      grid: {
        spriteWidth: 32,
        spriteHeight: 32,
        rows: 13,
        columns: 4,
      },
    });

    const downIdle = new Animation({
      frames: [
        {
          graphic: playerSpriteSheet.getSprite(0, 0),
          duration: Config.PlayerFrameSpeed,
        },
      ],
    });
    this.graphics.add('down-idle', downIdle);

    const rightWalk = new Animation({
      frames: [
        {
          graphic: playerSpriteSheet.getSprite(0, 9) as Sprite,
          duration: Config.PlayerRunningFrameSpeed,
        },
      ],
    });
    this.graphics.add('right-walk', rightWalk);
  }
}

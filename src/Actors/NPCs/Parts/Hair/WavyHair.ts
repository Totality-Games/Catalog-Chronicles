import {
  Actor,
  CollisionType,
  Engine,
  ImageSource,
  SpriteSheet,
  Vector,
} from 'excalibur';
import { DIRECTIONS } from '../../../../constants';

export class NPCWavyHair extends Actor {
  public direction: DIRECTIONS;
  hairSpriteSheet: SpriteSheet | undefined;
  constructor(
    pos: Vector,
    resources: {
      WavyHairSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super({
      pos,
      width: 16,
      height: 24,
      collisionType: CollisionType.PreventCollision,
    });

    this.z = 100;
    this.direction = direction ?? DIRECTIONS.DOWN;

    this.hairSpriteSheet = SpriteSheet.fromImageSource({
      image: resources.WavyHairSpriteSheetPng as ImageSource,
      grid: {
        spriteWidth: 32,
        spriteHeight: 32,
        rows: 49,
        columns: 112,
      },
    });
  }

  onInitialize(_engine: Engine): void {}

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.vel = Vector.Zero;
  }
}

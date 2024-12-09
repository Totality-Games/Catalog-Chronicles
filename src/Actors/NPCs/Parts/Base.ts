import {
  Actor,
  CollisionType,
  Engine,
  ImageSource,
  SpriteSheet,
  Vector,
} from 'excalibur';
import { DIRECTIONS } from '../../../constants';

export class NPC extends Actor {
  public direction: DIRECTIONS;
  npcSpriteSheet: SpriteSheet | undefined;
  constructor(
    pos: Vector,
    resources: {
      AllNPCSpriteSheetsPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super({
      pos,
      width: 16,
      height: 24,
      collisionType: CollisionType.Fixed,
    });

    this.z = 100;
    this.scale = new Vector(2, 2);
    this.direction = direction ?? DIRECTIONS.DOWN;

    this.npcSpriteSheet = SpriteSheet.fromImageSource({
      image: resources.AllNPCSpriteSheetsPng as ImageSource,
      grid: {
        spriteWidth: 32,
        spriteHeight: 32,
        rows: 49,
        columns: 36,
      },
    });
  }

  onInitialize(_engine: Engine): void {}

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.vel = Vector.Zero;
  }
}

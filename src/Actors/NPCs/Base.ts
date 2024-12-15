import {
  Actor,
  CollisionType,
  Engine,
  ImageSource,
  SpriteSheet,
  Vector,
} from 'excalibur';
import { DIRECTIONS } from '../../constants';

export class NPC extends Actor {
  public direction: DIRECTIONS;
  npcSpriteSheet: SpriteSheet;
  eyesSpriteSheet: SpriteSheet;
  hairSpriteSheet: SpriteSheet;
  shirtSpriteSheet: SpriteSheet;
  skirtSpriteSheet: SpriteSheet;
  constructor(
    pos: Vector,
    resources: {
      AllNPCSpriteSheetsPng: ImageSource;
      NPCEyesSpriteSheetsPng: ImageSource;
      WavyHairSpriteSheetPng: ImageSource;
      BasicShirtSpriteSheetPng: ImageSource;
      SkirtSpriteSheetPng: ImageSource;
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

    this.eyesSpriteSheet = SpriteSheet.fromImageSource({
      image: resources.NPCEyesSpriteSheetsPng as ImageSource,
      grid: {
        spriteWidth: 32,
        spriteHeight: 32,
        rows: 49,
        columns: 112,
      },
    });

    this.hairSpriteSheet = SpriteSheet.fromImageSource({
      image: resources.WavyHairSpriteSheetPng as ImageSource,
      grid: {
        spriteWidth: 32,
        spriteHeight: 32,
        rows: 49,
        columns: 112,
      },
    });

    this.shirtSpriteSheet = SpriteSheet.fromImageSource({
      image: resources.BasicShirtSpriteSheetPng as ImageSource,
      grid: {
        spriteWidth: 32,
        spriteHeight: 32,
        rows: 49,
        columns: 112,
      },
    });

    this.skirtSpriteSheet = SpriteSheet.fromImageSource({
      image: resources.SkirtSpriteSheetPng as ImageSource,
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

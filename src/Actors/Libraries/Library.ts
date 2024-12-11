import {
  Actor,
  CollisionType,
  Engine,
  ImageSource,
  Sprite,
  Vector,
} from 'excalibur';

/*
    This Library Actor is here exclusively
    to handle the exterior sprite
    when the Player is in the City.
    
    It should take in the current level
    of the library and show the
    appropriate corresponding sprite.
*/

interface LibrarySpriteResources {
  LibraryLv1: ImageSource;
  LibraryLv2: ImageSource;
  LibraryLv3: ImageSource;
  LibraryLv4: ImageSource;
  LibraryLv5: ImageSource;
  LibraryLv6: ImageSource;
}

export class Library extends Actor {
  level: number;
  resources: LibrarySpriteResources;
  libraryLv1Sprite!: Sprite;
  libraryLv2Sprite!: Sprite;
  libraryLv3Sprite!: Sprite;
  libraryLv4Sprite!: Sprite;
  libraryLv5Sprite!: Sprite;
  libraryLv6Sprite!: Sprite;
  constructor(pos: Vector, level: number, resources: LibrarySpriteResources) {
    super({ pos, collisionType: CollisionType.Fixed });
    this.level = level;
    this.resources = resources;
    this.z = 100;
    // this.scale = new Vector(4, 4);
  }

  onInitialize(_engine: Engine): void {
    console.log('created');
    this.libraryLv1Sprite = this.resources.LibraryLv1.toSprite();
    this.libraryLv2Sprite = this.resources.LibraryLv2.toSprite();
    this.libraryLv3Sprite = this.resources.LibraryLv3.toSprite();
    this.libraryLv4Sprite = this.resources.LibraryLv4.toSprite();
    this.libraryLv5Sprite = this.resources.LibraryLv5.toSprite();
    this.libraryLv6Sprite = this.resources.LibraryLv6.toSprite();

    switch (this.level) {
      case 1:
        this.graphics.use(this.libraryLv1Sprite);
        break;
      case 2:
        this.graphics.use(this.libraryLv2Sprite);
        break;
      case 3:
        this.graphics.use(this.libraryLv3Sprite);
        break;
      case 4:
        this.graphics.use(this.libraryLv4Sprite);
        break;
      case 5:
        this.graphics.use(this.libraryLv5Sprite);
        break;
      case 6:
        this.graphics.use(this.libraryLv6Sprite);
        break;
      default:
        break;
    }
  }
}

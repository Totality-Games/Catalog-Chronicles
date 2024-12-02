import { TiledResource } from '@excaliburjs/plugin-tiled';
import { ImageSource, ImageFiltering, Sound, Resource } from 'excalibur';

// import map
import tutorialLibraryPath from '../../../Resources/TMX/tutorial-library.tmx?url';

// import music
import firstLibraryMP3 from '../../../Resources/Music/first-library/Cute Loops - First Steps.mp3';
import firstLibraryOgg from '../../../Resources/Music/first-library/Cute Loops - First Steps.ogg';
import firstLibraryWav from '../../../Resources/Music/first-library/Cute Loops - First Steps.wav';

// import sounds
// import collisionSound from '../../../Resources/Sounds/Effects/bump-dur2Short-pitch1Low.wav';
// import walkingSound from '../../../Resources/Sounds/Effects/Steps_carpet-013.ogg';
// import talkingSound from '../../../Resources/Sounds/Effects/bounce-dur2Short-pitch3High.wav';

// import spritesheets
import heroPath from '../../../Resources/Sprites/Player/CATSPRITESHEET_Gray.png';
import cltBuildingsSetPath from '../../../Resources/Tilesets/CLT_Buildings.png?url';

// import tilesets
import cltBuildingsTsxPath from '../../../Resources/TSX/CLT_Buildings.tsx?url';

export const Library1Resources = {
  HeroSpriteSheetPng: new ImageSource(heroPath, false, ImageFiltering.Pixel),
  Music: new Sound(firstLibraryMP3, firstLibraryWav, firstLibraryOgg),
  // CollisionSound: new Sound(collisionSound),
  // WalkingSound: new Sound(walkingSound),
  // TalkingSound: new Sound(talkingSound),
  TiledMap: new TiledResource(tutorialLibraryPath, {
    useTilemapCameraStrategy: true,
    pathMap: [
      { path: 'tutorial-library.tmx', output: tutorialLibraryPath }, // map
      { path: 'water.png', output: cltBuildingsSetPath }, // spritesheet
      { path: 'water.tsx', output: cltBuildingsTsxPath }, // tileset
    ],
  }),
  cltBuildingsTsxResource: new Resource(cltBuildingsTsxPath, 'text'),
} as const;

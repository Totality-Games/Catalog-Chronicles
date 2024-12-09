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
import playerPath from '../../../Resources/Sprites/Player/CATSPRITESHEET_Gray.png?url';
import playerRollingPath from '../../../Resources/Sprites/Player/GrayCat.png?url';
import allNpcSpritesPath from '../../../Resources/Sprites/NPCs/characters/char_all.png?url';
import npcEyesSpritesPath from '../../../Resources/Sprites/NPCs/eyes/eyes.png?url';
import wavyHairPath from '../../../Resources/Sprites/NPCs/hair/wavy.png?url';
import basicShirtPath from '../../../Resources/Sprites/NPCs/clothes/basic.png?url';
import skirtPath from '../../../Resources/Sprites/NPCs/clothes/skirt.png?url';
import glassesPath from '../../../Resources/Sprites/NPCs/acc/glasses.png?url';
import cltBuildingsSetPath from '../../../Resources/Tilesets/CLT_Buildings.png?url';

// import tilesets
import cltBuildingsTsxPath from '../../../Resources/TSX/CLT_Buildings.tsx?url';

export const Library1Resources = {
  PlayerSpriteSheetPng: new ImageSource(
    playerPath,
    false,
    ImageFiltering.Pixel
  ),
  PlayerRollingSpriteSheetPng: new ImageSource(
    playerRollingPath,
    false,
    ImageFiltering.Pixel
  ),
  AllNPCSpriteSheetsPng: new ImageSource(
    allNpcSpritesPath,
    false,
    ImageFiltering.Pixel
  ),
  NPCEyesSpriteSheetsPng: new ImageSource(
    npcEyesSpritesPath,
    false,
    ImageFiltering.Pixel
  ),
  WavyHairSpriteSheetPng: new ImageSource(
    wavyHairPath,
    false,
    ImageFiltering.Pixel
  ),
  BasicShirtSpriteSheetPng: new ImageSource(
    basicShirtPath,
    false,
    ImageFiltering.Pixel
  ),
  SkirtSpriteSheetPng: new ImageSource(skirtPath, false, ImageFiltering.Pixel),
  GlassesSpriteSheetPng: new ImageSource(
    glassesPath,
    false,
    ImageFiltering.Pixel
  ),
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

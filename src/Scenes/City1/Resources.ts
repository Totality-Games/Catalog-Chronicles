import { TiledResource } from '@excaliburjs/plugin-tiled';
import { ImageSource, ImageFiltering, Sound, Resource } from 'excalibur';

// import map
import city1Path from '../../../Resources/TMX/city1.tmx?url';

// import music
import city1MP3 from '../../../Resources/Music/city/Cute Loops - Together Forever.mp3';
import city1Ogg from '../../../Resources/Music/city/Cute Loops - Together Forever.ogg';
import city1Wav from '../../../Resources/Music/city/Cute Loops - Together Forever.wav';

// import sounds
// import collisionSound from '../../../Resources/Sounds/Effects/bump-dur2Short-pitch1Low.wav';
// import walkingSound from '../../../Resources/Sounds/Effects/Steps_carpet-013.ogg';
// import talkingSound from '../../../Resources/Sounds/Effects/bounce-dur2Short-pitch3High.wav';

// import spritesheets
// import Library spritesheets
import libraryLv1 from '../../../Resources/Sprites/Libraries/libraryLv1.png?url';
import libraryLv2 from '../../../Resources/Sprites/Libraries/libraryLv2.png?url';
import libraryLv3 from '../../../Resources/Sprites/Libraries/libraryLv3.png?url';
import libraryLv4 from '../../../Resources/Sprites/Libraries/libraryLv4.png?url';
import libraryLv5 from '../../../Resources/Sprites/Libraries/libraryLv5.png?url';
import libraryLv6 from '../../../Resources/Sprites/Libraries/libraryLv6.png?url';
// import all character spritesheets
import playerPath from '../../../Resources/Sprites/Player/CATSPRITESHEET_Gray.png?url';
import playerRollingPath from '../../../Resources/Sprites/Player/GrayCat.png?url';
import allNpcSpritesPath from '../../../Resources/Sprites/NPCs/characters/char_all.png?url';
import npcEyesSpritesPath from '../../../Resources/Sprites/NPCs/eyes/eyes.png?url';
import wavyHairPath from '../../../Resources/Sprites/NPCs/hair/wavy.png?url';
import basicShirtPath from '../../../Resources/Sprites/NPCs/clothes/basic.png?url';
import skirtPath from '../../../Resources/Sprites/NPCs/clothes/skirt.png?url';
import glassesPath from '../../../Resources/Sprites/NPCs/acc/glasses.png?url';
// import all location spritesheets
import clBuildingsSetPath from '../../../Resources/Tilesets/CL_v1.12/32x32/CL_Buildings.png?url';
import clCropsMiningSetPath from '../../../Resources/Tilesets/CL_v1.12/32x32/CL_Crops_Mining.png?url';
import clMainLevSetPath from '../../../Resources/Tilesets/CL_v1.12/32x32/CL_MainLev.png?url';
import cltBuildingsSetPath from '../../../Resources/Tilesets/CLT_v1.1/32x32/CLT_Buildings.png?url';
import cltTerrainSetPath from '../../../Resources/Tilesets/CLT_v1.1/32x32/CLT_Terrain.png?url';

// import tilesets
import clBuildingsTsxPath from '../../../Resources/TSX/CL_Buildings?url';
import clCropsMiningTsxPath from '../../../Resources/TSX/CL_Crops_Mining?url';
import clMainLevTsxPath from '../../../Resources/TSX/CL_MainLev?url';
import cltBuildingsTsxPath from '../../../Resources/TSX/CLT_Buildings.tsx?url';
import cltTerrainTsxPath from '../../../Resources/TSX/CLT_Terrain?url';

export const City1Resources = {
  LibraryLv1: new ImageSource(libraryLv1, false, ImageFiltering.Pixel),
  LibraryLv2: new ImageSource(libraryLv2, false, ImageFiltering.Pixel),
  LibraryLv3: new ImageSource(libraryLv3, false, ImageFiltering.Pixel),
  LibraryLv4: new ImageSource(libraryLv4, false, ImageFiltering.Pixel),
  LibraryLv5: new ImageSource(libraryLv5, false, ImageFiltering.Pixel),
  LibraryLv6: new ImageSource(libraryLv6, false, ImageFiltering.Pixel),
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
  Music: new Sound(city1MP3, city1Wav, city1Ogg),
  // CollisionSound: new Sound(collisionSound),
  // WalkingSound: new Sound(walkingSound),
  // TalkingSound: new Sound(talkingSound),
  TiledMap: new TiledResource(city1Path, {
    useTilemapCameraStrategy: true,
    pathMap: [
      { path: 'city1.tmx', output: city1Path }, // map
      { path: 'CL_Buildings.png', output: clBuildingsSetPath }, // spritesheet
      { path: 'CL_Crops_Mining.png', output: clCropsMiningSetPath }, // spritesheet
      { path: 'CL_MainLev.png', output: clMainLevSetPath }, // spritesheet
      { path: 'CLT_Buildings.png', output: cltBuildingsSetPath }, // spritesheet
      { path: 'CLT_Terrain.png', output: cltTerrainSetPath }, // spritesheet
      { path: 'CL_Buildings.tsx', output: clBuildingsTsxPath }, // tileset
      { path: 'CL_Crops_Mining.tsx', output: clCropsMiningTsxPath }, // tileset
      { path: 'CL_MainLev.tsx', output: clMainLevTsxPath }, // tileset
      { path: 'CLT_Buildings.tsx', output: cltBuildingsTsxPath }, // tileset
      { path: 'CLT_Terrain.tsx', output: cltTerrainTsxPath }, // tileset
    ],
  }),
  clBuildingsTsxResource: new Resource(clBuildingsTsxPath, 'text'),
  clCropsMiningTsxResource: new Resource(clCropsMiningTsxPath, 'text'),
  clMainLevTsxResource: new Resource(clMainLevTsxPath, 'text'),
  cltBuildingsTsxResource: new Resource(cltBuildingsTsxPath, 'text'),
  cltTerrainTsxResource: new Resource(cltTerrainTsxPath, 'text'),
} as const;

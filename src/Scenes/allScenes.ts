import { Engine } from 'excalibur';
import { musicManager } from '../Managers/MusicManager';
import { LOCATIONS } from '../constants';

// import scenes and loaders
// import Ironclaw Scenes
import {
  ironClawPortScene,
  ironClawPortSceneLoader,
} from './IronclawPort-1/Scene';

export const allScenes = {
  start: {
    scene: ironClawPortScene,
    loader: ironClawPortSceneLoader,
  },
};

export enum SceneNames {
  // Ironclaw Scenes
  START = 'start',
}

export const handleSceneExit = (engine: Engine, scene: SceneNames) => {
  console.log(scene);
  switch (scene) {
    // IRONCLAW SCENES START
    case SceneNames.START:
      if (musicManager.location !== LOCATIONS.IRONCLAW_PORT) {
        musicManager.stopMusic();
      }
      engine.goToScene(scene);
      break;
    default:
      break;
  }
};

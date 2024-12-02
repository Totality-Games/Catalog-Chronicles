import { Engine } from 'excalibur';
import { musicManager } from '../Managers/MusicManager';
import { LOCATIONS } from '../constants';

// import scenes and loaders
// import Library1 Scenes
import { lirary1Scene, library1SceneLoader } from './Library-1/Scene';

export const allScenes = {
  start: {
    scene: lirary1Scene,
    loader: library1SceneLoader,
  },
};

export enum SceneNames {
  // Library1 Scenes
  START = 'start',
}

export const handleSceneExit = (engine: Engine, scene: SceneNames) => {
  console.log(scene);
  switch (scene) {
    // LIBRARY! SCENES START
    case SceneNames.START:
      if (musicManager.location !== LOCATIONS.LIBRARY1) {
        musicManager.stopMusic();
      }
      engine.goToScene(scene);
      break;
    default:
      break;
  }
};

import { Engine } from 'excalibur';
import { musicManager } from '../Managers/MusicManager';
import { LOCATIONS } from '../constants';

// import scenes and loaders
// import Library1 Scenes
import {
  library1Scene,
  library1SceneLoader,
} from './City1/Interiors/Library1/Scene';
import { city1Scene, City1SceneLoader } from './City1/Scene';
import { startScreen, startScreenLoader } from './MainMenu/Scene';
import { uiManager } from '../Managers/UIManager';

export const allScenes = {
  start: {
    scene: startScreen,
    loader: startScreenLoader,
  },
  city1: {
    scene: city1Scene,
    loader: City1SceneLoader,
  },
  library1: {
    scene: library1Scene,
    loader: library1SceneLoader,
  },
};

export enum SceneNames {
  START = 'start',
  // Library1 Scenes
  CITY1 = 'city1',
  LIBRARY1 = 'library1',
}

export const handleSceneExit = (engine: Engine, scene: SceneNames) => {
  console.log(scene);
  switch (scene) {
    case SceneNames.START:
      if (musicManager.location !== LOCATIONS.MAINMENU) {
        musicManager.stopMusic();
      }
      engine.goToScene(scene);
      break;
    // CITY1 SCENES START
    case SceneNames.CITY1:
      if (musicManager.location !== LOCATIONS.CITY1) {
        musicManager.stopMusic();
      }
      uiManager.cleanupLibraryInfoUI();
      engine.goToScene(scene);
      break;
    case SceneNames.LIBRARY1:
      if (musicManager.location !== LOCATIONS.LIBRARY1) {
        musicManager.stopMusic();
      }

      uiManager.displayLibraryInfoUI();
      uiManager.update_current_library_info(
        library1Scene.name,
        library1Scene.gold,
        library1Scene.bookCount
      );

      engine.goToScene(scene);
      break;
    default:
      break;
  }
};

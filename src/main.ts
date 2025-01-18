import './style.css';
import {
  Color,
  // DisplayMode,
  Engine,
  Resolution,
} from 'excalibur';

import { uiManager } from './Managers/UIManager';
import { allScenes } from './Scenes/allScenes';
import { apiFetch } from './api/client';

const game = new Engine({
  canvasElementId: 'game-canvas',
  backgroundColor: Color.Black,
  pixelArt: true,
  pixelRatio: 2,
  resolution: Resolution.SNES,
  // displayMode: DisplayMode.FitContainerAndFill,
  scenes: { ...allScenes },
});

const dataStuff = await apiFetch();

game.start().then(() => {
  uiManager.init();
  console.log(dataStuff.location);
  game.goToScene('start');
});

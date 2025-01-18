import './style.css';
import {
  Color,
  // DisplayMode,
  Engine,
  Resolution,
} from 'excalibur';

import { uiManager } from './Managers/UIManager';
import { allScenes } from './Scenes/allScenes';

const game = new Engine({
  canvasElementId: 'game-canvas',
  backgroundColor: Color.Black,
  pixelArt: true,
  pixelRatio: 2,
  resolution: Resolution.SNES,
  // displayMode: DisplayMode.FitContainerAndFill,
  scenes: { ...allScenes },
});

game.start().then(async () => {
  uiManager.init();
  game.goToScene('start');
});

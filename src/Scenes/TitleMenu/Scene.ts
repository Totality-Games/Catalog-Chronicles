import {
  SceneActivationContext,
  Scene,
  vec,
  Actor,
  Engine,
  CoordPlane,
  //   EasingFunctions,
  Font,
  FontUnit,
  Color,
  BaseAlign,
  Text,
} from 'excalibur';
// import { Cloud } from '../../Actors/Heavens/Cloud';
import {
  MainMenuResources,
  //  Title
} from './Resources';
import { LOCATIONS, SCENE_STATE } from '../../constants';
import { musicManager } from '../../Managers/MusicManager';
import { StartLoader } from '../../Loaders/StartLoader';
import { uiManager } from '../../Managers/UIManager';
import { fetchLibraryData, fetchPlayerData } from '../../api/client';
import { SceneNames } from '../allScenes';

const SCALE = vec(3, 3);

export class StartScreen extends Scene {
  game_container!: HTMLElement;
  background!: Actor;
  title!: Actor;
  instructions!: Actor;
  bgsprite: any;
  override onInitialize(engine: Engine): void {
    this.game_container = document.getElementById('game')!;
    uiManager.update_state(SCENE_STATE.MENU);
    uiManager.setupTitleMenuUI(() => {
      // this runs when player has pressed the Play button
      musicManager.stopMusic();
      uiManager.cleanupTitleMenuUI();

      fetchPlayerData().then((res) => {
        // when player clicks on Play button,
        // we fetch the player data, including their last location
        // then we start the player at their last location
        engine.goToScene(res.location);

        // if the scene is a library, then load library info into UI
        if (res.location === SceneNames.LIBRARY1) {
          fetchLibraryData().then((data) => {
            uiManager.displayLibraryInfoUI();
            uiManager.update_current_library_info(
              data.name,
              data.gold,
              data.bookCount
            );
          });
        }
      });
    });

    this.engine = engine;

    this.instructions = new Actor({
      name: 'instructions',
      pos: vec(400, 600),
      coordPlane: CoordPlane.Screen,
    });
    const font = new Font({
      family: 'notjamslab14',
      size: 32 * SCALE.x,
      unit: FontUnit.Px,
      color: Color.White,
      baseAlign: BaseAlign.Top,
      quality: 4,
      shadow: {
        offset: vec(10, 10).scale(SCALE),
        color: Color.Black,
      },
    });
    const text = new Text({
      text: 'Click to Play!',
      font: font,
    });
    this.instructions.graphics.use(text);
    this.instructions.actions.repeatForever((ctx) => {
      ctx.rotateTo(Math.PI / 32, 0.2);
      ctx.rotateTo(-Math.PI / 32, 0.2);
    });

    this.add(this.instructions);
    uiManager.update_state(SCENE_STATE.MENU);
    musicManager.startMusic(MainMenuResources);
  }

  onActivate(_context: SceneActivationContext<unknown>): void {
    uiManager.update_state(SCENE_STATE.MENU);

    if (musicManager.location !== LOCATIONS.MAINMENU) {
      musicManager.updateLocation(LOCATIONS.MAINMENU);
      musicManager.startMusic(MainMenuResources);
    }
  }
}

export const startScreen = new StartScreen();

// loader
export const startScreenLoader = new StartLoader();
for (let resource of Object.values(MainMenuResources)) {
  startScreenLoader.addResource(resource);
}

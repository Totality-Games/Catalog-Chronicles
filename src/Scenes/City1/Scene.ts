import {
  BoundingBox,
  Engine,
  Loader,
  Scene,
  SceneActivationContext,
  vec,
} from 'excalibur';
import { LOCATIONS, SCENE_STATE } from '../../constants';

// import scene specific items
import { City1Resources } from './Resources';
import { City1Dialogues } from './Dialogues';

// import managers
import { uiManager } from '../../Managers/UIManager';
import { musicManager } from '../../Managers/MusicManager';

// import Actors
import { MainGuy } from '../../Actors/Main/Player';
import { Library } from '../../Actors/Libraries/Library';

class City1 extends Scene {
  game_container!: HTMLElement;
  constructor() {
    super();
  }

  onInitialize(engine: Engine): void {
    this.game_container = document.getElementById('game')!;

    this.setCameraBoundaries(engine);
    const npcs = this.setupNPCs();

    // add player character
    const player = new MainGuy(vec(480, 750), City1Resources);
    engine.currentScene.add(player);
    engine.currentScene.camera.zoom = 0.8;
    musicManager.startMusic(City1Resources);

    // add all npcs to game
    npcs.forEach((character) => {
      engine.add(character);
    });

    // engine.currentScene.camera.strategy.lockToActor(npcs[0]);
    engine.currentScene.camera.strategy.lockToActor(player);
    City1Resources.TiledMap.addToScene(engine.currentScene);
  }

  onActivate(_context: SceneActivationContext<unknown>): void {
    if (musicManager.location !== LOCATIONS.CITY1) {
      musicManager.updateLocation(LOCATIONS.CITY1);
      musicManager.startMusic(City1Resources);
    }
  }

  onDeactivate(_context: SceneActivationContext): void {}

  onPreUpdate(_engine: Engine, _delta: number): void {
    if (this.game_container.className === SCENE_STATE.TALKING) {
      uiManager.displayDialogue(City1Dialogues);
    }

    if (this.game_container.className !== SCENE_STATE.TALKING) {
      uiManager.cleanupDialogue();
    }
  }

  private setCameraBoundaries(engine: Engine) {
    // add map boundaries for camera
    const tilemap = City1Resources.TiledMap.getTileLayers()[0].tilemap;
    const tileWidth = City1Resources.TiledMap.getTileLayers()[0].width;
    const tileHeight = City1Resources.TiledMap.getTileLayers()[0].height;

    const mapBounds = new BoundingBox({
      left: tilemap.pos.x,
      top: tilemap.pos.y,
      bottom: tilemap.pos.y + tileWidth * 90,
      right: tilemap.pos.y + tileHeight * 32,
    });
    engine.currentScene.camera.strategy.limitCameraBounds(mapBounds);
  }

  private setupNPCs() {
    const library1 = new Library(vec(480, 625), 'library1', 1, City1Resources);

    return [library1];
  }
}

export const city1Scene = new City1();

// loader
export const City1SceneLoader = new Loader();
for (let resource of Object.values(City1Resources)) {
  City1SceneLoader.addResource(resource);
}

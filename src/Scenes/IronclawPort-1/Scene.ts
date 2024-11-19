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
import { IronclawPortResources } from './Resources';
import { IronclawPortDialogues } from './Dialogues';

// import managers
import { uiManager } from '../../Managers/UIManager';
import { musicManager } from '../../Managers/MusicManager';

// import Actors
import { MainGuy } from '../../Actors/Main/Player';

class IronClawPort extends Scene {
  game_container!: HTMLElement;
  constructor() {
    super();
  }

  onInitialize(engine: Engine): void {
    this.game_container = document.getElementById('game')!;

    this.setCameraBoundaries(engine);
    const npcs = this.setupNPCs();

    // add player character
    /* Default Player Location: pos: vec(2300, 2550), */
    const player = new MainGuy(vec(32, 32), IronclawPortResources);
    engine.currentScene.add(player);
    engine.currentScene.camera.zoom = 0.8;
    musicManager.startMusic(IronclawPortResources);

    // add all npcs to game
    npcs.forEach((character) => {
      engine.add(character);
    });

    engine.currentScene.camera.strategy.lockToActor(player);
    IronclawPortResources.TiledMap.addToScene(engine.currentScene);
  }

  onActivate(_context: SceneActivationContext<unknown>): void {
    if (musicManager.location !== LOCATIONS.IRONCLAW_PORT) {
      musicManager.updateLocation(LOCATIONS.IRONCLAW_PORT);
      musicManager.startMusic(IronclawPortResources);
    }
  }

  onDeactivate(_context: SceneActivationContext): void {}

  onPreUpdate(_engine: Engine, _delta: number): void {
    if (this.game_container.className === SCENE_STATE.TALKING) {
      uiManager.displayDialogue(IronclawPortDialogues);
    }

    if (this.game_container.className !== SCENE_STATE.TALKING) {
      uiManager.cleanupDialogue();
    }
  }

  private setCameraBoundaries(engine: Engine) {
    // add map boundaries for camera
    const tilemap = IronclawPortResources.TiledMap.getTileLayers()[0].tilemap;
    const tileWidth = IronclawPortResources.TiledMap.getTileLayers()[0].width;
    const tileHeight = IronclawPortResources.TiledMap.getTileLayers()[0].height;

    const mapBounds = new BoundingBox({
      left: tilemap.pos.x,
      top: tilemap.pos.y,
      bottom: tilemap.pos.y + tileWidth * 90,
      right: tilemap.pos.y + tileHeight * 32,
    });
    engine.currentScene.camera.strategy.limitCameraBounds(mapBounds);
  }

  private setupNPCs() {
    return [];
  }
}

export const ironClawPortScene = new IronClawPort();

// loader
export const ironClawPortSceneLoader = new Loader();
for (let resource of Object.values(IronclawPortResources)) {
  ironClawPortSceneLoader.addResource(resource);
}

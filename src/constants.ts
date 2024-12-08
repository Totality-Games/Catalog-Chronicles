// enums
export enum LOCATIONS {
  // common interiors
  LIBRARY1 = 'LIBRARY1',
}
export enum DIRECTIONS {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}
export enum SCENE_STATE {
  LOADING = 'SCENE_STATE_LOADING',
  READY = 'SCENE_STATE_READY',
  PLAYING = 'SCENE_STATE_PLAYING',
  TALKING = 'SCENE_STATE_TALKING',
  MENU = 'SCENE_STATE_MENU',
  PAUSED = 'SCENE_STATE_PAUSED',
  COMPLETED = 'SCENE_STATE_COMPLETED',
  GAMEOVER = 'SCENE_STATE_GAMEOVER',
  ERROR = 'SCENE_STATE_ERROR',
}
export enum SEXES {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

// types
export type Dialogues = {
  actor: string;
  text: string;
  isCharacter?: boolean;
}[];
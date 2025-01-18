// enums
export enum LOCATIONS {
  // menu
  MAINMENU = 'MAINMENU',
  // common interiors
  LIBRARY1 = 'LIBRARY1',
  CITY1 = 'CITY1',
}
export enum DIRECTIONS {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}
export enum MOVEMENT {
  IDLE = 'idle',
  WALK = 'walk',
}
export enum SCENE_STATE {
  LOADING = 'SCENE_STATE_LOADING',
  READY = 'SCENE_STATE_READY',
  PLAYING = 'SCENE_STATE_PLAYING',
  TALKING = 'SCENE_STATE_TALKING',
  MENU = 'SCENE_STATE_MENU',
  PAUSED = 'SCENE_STATE_PAUSED',
  INPUT = 'SCENE_STATE_INPUT',
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

// City1 Friends
export enum CITY1_FRIENDS {
  ANDREW = 'andrew',
  CATHERINE = 'catherine',
  JIBBLET = 'jibblet',
  JONATHAN = 'jonathan',
  JT = 'jt',
  KARATH = 'karath',
  MATTY = 'matty',
  MOSES = 'moses',
  NEKTARIOS = 'nektarios',
  NEWBERRY = 'newberry',
  ORPHEUS = 'orpheus',
  RYAN = 'ryan',
  TANNER = 'tanner',
  TSUBAKI = 'tsubaki',
  TSUKI = 'tsuki',
  VICTOR = 'victor',
}

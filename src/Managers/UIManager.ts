import { Engine, Sound } from 'excalibur';
import { Dialogues, SCENE_STATE } from '../constants';

export enum MENU {
  COLLECTIVES = 'COLLECTIVES',
  ITEMS = 'ITEMS',
  MAP = 'MAP',
  SETTINGS = 'SETTINGS',
  BACK_MAIN_MENU = 'BACK_MAIN_MENU',
  EXIT = 'EXIT',
}

class UIManager {
  game_state: SCENE_STATE;
  game_container!: HTMLElement;
  title_menu!: HTMLElement;
  player_info!: HTMLElement;
  library_info!: HTMLElement;
  options!: HTMLElement;
  dialog_container!: HTMLElement;
  playerName: string;
  playerGold: number;
  currentLibraryName: string;
  currentLibraryGold: number;
  currentLibraryBookCount: number;
  characterToDialogueWith: string | undefined;
  talkingSound: Sound | undefined;
  constructor() {
    this.playerName = 'New Player';
    this.playerGold = 999;
    this.currentLibraryName = 'New Library';
    this.currentLibraryGold = 999;
    this.currentLibraryBookCount = 999;
    this.game_state = SCENE_STATE.LOADING;
  }

  init() {
    this.linkUIReferences();
    this.createPlayerInfoUI();
    this.createLibraryInfoUI();
    this.createDialogueUI();
    this.createPlayerJournal();
  }

  private linkUIReferences() {
    this.game_container = document.getElementById('game')!;
    this.title_menu = document.getElementById('title_menu')!;
    this.player_info = document.getElementById('player_info')!;
    this.library_info = document.getElementById('library_info')!;
    this.options = document.getElementById('options')!;
    this.dialog_container = document.getElementById('dialog_container')!;
  }

  /* UIManager specific methods */
  update_state(state: SCENE_STATE) {
    this.game_container.className = state;
    this.game_state = state;
  }

  /* 
    TITLE MENU
    2 methods
  */
  setupTitleMenuUI(engine: Engine, sceneChangeCallback: () => void) {
    this.title_menu.style.display = 'flex';
    this.title_menu.style.alignItems = 'center';
    this.title_menu.style.justifyContent = 'center';
    this.title_menu.innerHTML = `
    <div id="title_container" class="title_container">
      <span>
        <h1 id="game_title" class="game_title"><span>Cat</span>alog Chronicles</h1>
        <p>a cozy library game</p>
      </span>

      <div id="title_menu_list" class="title_menu_list">
          <span id="play_game">Play Game</span>
      </div>
    </div>
    `;

    const play_game_span = document.getElementById('play_game')!;

    play_game_span.onclick = function () {
      sceneChangeCallback();
      engine.goToScene('city1');
    };
  }

  cleanupTitleMenuUI() {
    this.title_menu.style.display = 'none';
    this.title_menu.innerHTML = ``;
  }

  /* 
    HUD: PLAYER INFO 
    3 methods
  */
  private createPlayerInfoUI() {
    const player_info_container = document.getElementById('player_info')!;
    player_info_container.innerHTML = `
      <h3>${this.playerName}</h3>
      <span class="player_gold" id="player_gold">
        <img
          src="/images/items/gold.png"
          alt="Gold Icon"
          width="32px"
        />
        ${this.playerGold}
      </span>
    `;
  }

  update_player_name(name: string) {
    this.playerName = name;
  }

  updatePlayerGoldInfoUI(goldAmount: number) {
    this.playerGold = goldAmount;

    const player_gold_span = document.getElementById('player_gold')!;
    player_gold_span.innerHTML = `
        <img
          src="/images/items/gold.png"
          alt="Gold Icon"
          width="32px"
        />
        ${this.playerGold}
    `;
  }

  /* 
    HUD: LIBRARY INFO 
    5 methods  
  */
  private createLibraryInfoUI() {
    const player_info_container = document.getElementById('library_info')!;
    player_info_container.innerHTML = `
      <h3></h3>
    `;
  }

  update_current_library_info(name: string, gold: number, bookCount: number) {
    this.currentLibraryName = name;
    this.currentLibraryGold = gold;
    this.currentLibraryBookCount = bookCount;

    const current_library_name = this.library_info.querySelector('h3');
    current_library_name!.innerText = this.currentLibraryName;

    const current_library_gold_span = document.getElementById('library_gold')!;
    current_library_gold_span.innerHTML = `
        <img
          src="/images/items/gold.png"
          alt="Gold Icon"
          width="32px"
        />
        ${this.currentLibraryGold}
    `;

    const current_library_book_span = document.getElementById('library_book')!;
    current_library_book_span.innerHTML = `
        <img
          src="/images/items/book.png"
          alt="Book Icon"
          width="32px"
        />
        ${this.currentLibraryBookCount}
    `;
  }

  private create_library_name_form() {
    const game_container = document.getElementById('game')!;
    const current_library_name = document.getElementById(
      'current_library_name'
    )!;

    game_container.className = SCENE_STATE.INPUT;
    this.game_state = SCENE_STATE.INPUT;

    function submit_new_library_name(event: Event) {
      event.preventDefault();
      const new_library_name_input = document.getElementById(
        'new_library_name_input'
      ) as HTMLInputElement;

      const newLibraryName = new_library_name_input?.value;

      current_library_name.innerHTML = `
        <h3>${newLibraryName}</h3>
      `;

      return;
    }

    current_library_name.innerHTML = `
    <form id="new_name">
      <input name="library_name" id="new_library_name_input" type="text" placeholder="Rename Your Library" maxlength="20" />
    </form>
    `;

    const form = document.getElementById('new_name')!;
    form?.addEventListener('submit', submit_new_library_name);
  }

  cleanupLibraryInfoUI() {
    const library_info_container = document.getElementById('library_info')!;
    library_info_container.innerHTML = ``;
  }

  displayLibraryInfoUI() {
    const library_info_container = document.getElementById('library_info')!;
    library_info_container.innerHTML = `
      <div id="current_library_name">
        <h3>${this.currentLibraryName}</h3>
      </div>
      <span class="library_gold" id="library_gold">
        <img
          src="/images/items/gold.png"
          alt="Gold Icon"
          width="32px"
        />
        ${this.currentLibraryGold} 
      </span>
      <span class="library_book" id="library_book">
        <img
          src="/images/items/book.png"
          alt="Book Icon"
          width="32px"
        />
        ${this.currentLibraryBookCount}
      </span>
    `;

    const current_library_name = library_info_container.querySelector('h3')!;

    current_library_name.addEventListener(
      'click',
      this.create_library_name_form
    );
  }

  /* 
    DIALOGUE UI
    4 methods 
  */
  private createDialogueUI() {
    const dialog_container = document.getElementById('dialog_container')!;
    dialog_container.innerHTML = `
        <div class="avatar"></div>
            <div class="content">
            <div class="text"></div>
        </div>
        `;
  }

  cleanupDialogue() {
    const text_container = this.dialog_container.querySelector(
      '.text'
    ) as HTMLElement;
    if (this.game_container.className !== SCENE_STATE.TALKING) {
      return (text_container.innerText = '');
    }
  }

  displayDialogue(dialogues: Dialogues) {
    const text_container = this.dialog_container.querySelector(
      '.text'
    ) as HTMLElement;

    if (this.game_container.className === SCENE_STATE.TALKING) {
      // filter through all dialogues for the one matching this.characterToDialogueWith
      let dialogue = dialogues.find((dialogue) => {
        return dialogue.actor === this.characterToDialogueWith;
      });

      // if (dialogue?.isCharacter) {
      //   this.talkingSound?.play(0.1);
      //   setInterval(() => {
      //     this.talkingSound?.stop();
      //   }, 1000);
      // }

      if (dialogue) {
        // then add this text
        return (text_container.innerText = dialogue!.text);
      } else {
        dialogue = dialogues.find((dialogue) => {
          return dialogue.actor === 'default';
        });

        // then add this text
        return (text_container.innerText = dialogue!.text);
      }
    }
  }

  dialogNPC(character?: string, talkingSound?: Sound) {
    this.characterToDialogueWith = character;
    this.talkingSound = talkingSound;
  }

  /* 
    HUD: PLAYER JOURNAL 
    16 methods
  */
  private createPlayerJournal() {
    const options = document.getElementById('options')!;
    options.innerHTML = `
        <img
          src="/images/items/journal.png"
          alt="Journal"
          width="48px"
          height="48px"
          id="journal_img"
          class="journal_img"
        />
        <div class="journal_modal" id="journal_modal">
          <div class="modal-content">
            <div class="journal_tabs">
              <span>
                <div id="journal_main_tab" class="journal_tab"><h4>Journal</h4></div>
                <div id="journal_inventory_tab" class="journal_tab"><h4>Inventory</h4></div>
                <div id="journal_friends_tab" class="journal_tab"><h4>Friends</h4></div>
                <div id="journal_achievements_tab" class="journal_tab"><h4>Achievements</h4></div>
                <div id="journal_stats_tab" class="journal_tab"><h4>Stats</h4></div>
                <div id="journal_settings_tab" class="journal_tab"><h4>Settings</h4></div>
                <div id="journal_credits_tab" class="journal_tab"><h4>Credits</h4></div>
              </span>
              <span class="close">&times;</span>
            </div>
            <div class="journal_main" id="journal_main"></div>
            <div class="journal_inventory" id="journal_inventory"></div>
            <div class="journal_friends" id="journal_friends"></div>
            <div class="journal_achievements" id="journal_achievements"></div>
            <div class="journal_stats" id="journal_stats"></div>
            <div class="journal_settings" id="journal_settings"></div>
            <div class="journal_credits" id="journal_credits"></div>
          </div>
        </div>
  `;

    this.createJournalMain();
    this.createJournalInventory();
    this.createJournalFriends();
    this.createJournalAchievements();
    this.createJournalStats();
    this.createJournalSettings();
    this.createJournalCredits();
    this.createPlayerJournalModalLogic();
  }

  private createJournalMain() {
    const journal_main = document.getElementById('journal_main')!;
    journal_main.innerHTML = `
      <p>Journal Overview</p>
  `;
  }

  private createJournalInventory() {
    const journal_inventory = document.getElementById('journal_inventory')!;
    journal_inventory.innerHTML = `
      <p>Journal Inventory</p>
  `;
  }

  private createJournalFriends() {
    const journal_friends = document.getElementById('journal_friends')!;
    journal_friends.innerHTML = `
      <div id="friends_container" class="friends_container">
        <div class="friends_header">
          <h2>Journal Friends</h2>
          <span id="see_all_friends" class="see_all_friends">See All Friends</span>
        </div>
        <div id="friends" class="friends">
          <div id="friend_single_city1_andrew" class="friend_single">
            <h3>Andrew</h3>
            <p>Farmer</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_catherine" class="friend_single">
            <h3>Catherine</h3>
            <p>Housewife</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart.png" alt="Friendship Meter" />
                  <img src="/images/items/heart.png" alt="Friendship Meter" />
                  <img src="/images/items/heart.png" alt="Friendship Meter" />
                  <img src="/images/items/heart.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_jibblet" class="friend_single">
            <h3>Jibblet</h3>
            <p>Herbalist</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_jonathan" class="friend_single">
            <h3>Jonathan</h3>
            <p>Bard</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_jt" class="friend_single">
            <h3>JT</h3>
            <p>Chicken Trainer</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_karath" class="friend_single">
            <h3>Karath</h3>
            <p>Student</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_matty" class="friend_single">
            <h3>Matty</h3>
            <p>Teacher</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_moses" class="friend_single">
            <h3>Moses</h3>
            <p>Adventurer</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_nektarios" class="friend_single">
            <h3>Nektarios</h3>
            <p>Rare Book Merchant</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_newberry" class="friend_single">
            <h3>Newberry</h3>
            <p>Fisherman</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_orpheus" class="friend_single">
            <h3>Orpheus</h3>
            <p>Farmer</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_ryan" class="friend_single">
            <h3>Ryan</h3>
            <p>Musician</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_tanner" class="friend_single">
            <h3>Tanner</h3>
            <p>Financial Analyst</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_tsubaki" class="friend_single">
            <h3>Tsubaki</h3>
            <p>Samurai</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_tsuki" class="friend_single">
            <h3>Tsuki</h3>
            <p>Spinner</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
          <div id="friend_single_city1_victor" class="friend_single">
            <h3>Victor</h3>
            <p>Priest</p>
            <div id="friend_single_info" class="friend_single_info">
              <span>
                <img src="/images/npcs/city1/catherine.png" alt="Catherine" class="npc_image" />
              </span>
              <span>
                <h4>Friendship</h4>
                <div class="friendship_meter">
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                  <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="friend_single_city1_andrew_info" class="friend_single_city1_andrew_info"></div>
      <div id="friend_single_city1_catherine_info" class="friend_single_city1_catherine_info"></div>
      <div id="friend_single_city1_jibblet_info" class="friend_single_city1_jibblet_info"></div>
      <div id="friend_single_city1_jonathan_info" class="friend_single_city1_jonathan_info"></div>
      <div id="friend_single_city1_jt_info" class="friend_single_city1_jt_info"></div>
      <div id="friend_single_city1_karath_info" class="friend_single_city1_karath_info"></div>
      <div id="friend_single_city1_matty_info" class="friend_single_city1_matty_info"></div>
      <div id="friend_single_city1_moses_info" class="friend_single_city1_moses_info"></div>
      <div id="friend_single_city1_nektarios_info" class="friend_single_city1_nektarios_info"></div>
      <div id="friend_single_city1_newberry_info" class="friend_single_city1_newberry_info"></div>
      <div id="friend_single_city1_orpheus_info" class="friend_single_city1_orpheus_info"></div>
      <div id="friend_single_city1_ryan_info" class="friend_single_city1_ryan_info"></div>
      <div id="friend_single_city1_tanner_info" class="friend_single_city1_tanner_info"></div>
      <div id="friend_single_city1_tsubaki_info" class="friend_single_city1_tsubaki_info"></div>
      <div id="friend_single_city1_tsuki_info" class="friend_single_city1_tsuki_info"></div>
      <div id="friend_single_city1_victor_info" class="friend_single_city1_victor_info"></div>
  `;

    /*
      Grab all NPC info divs to fill if Player clicks on NPC row
    */
    const see_all_friends = document.getElementById('see_all_friends')!;
    const friend_single_city1_andrew_info = document.getElementById(
      'friend_single_city1_andrew_info'
    )!;
    const friend_single_city1_catherine_info = document.getElementById(
      'friend_single_city1_catherine_info'
    )!;
    const friend_single_city1_jibblet_info = document.getElementById(
      'friend_single_city1_jibblet_info'
    )!;
    const friend_single_city1_jonathan_info = document.getElementById(
      'friend_single_city1_jonathan_info'
    )!;
    const friend_single_city1_jt_info = document.getElementById(
      'friend_single_city1_jt_info'
    )!;
    const friend_single_city1_karath_info = document.getElementById(
      'friend_single_city1_karath_info'
    )!;
    const friend_single_city1_matty_info = document.getElementById(
      'friend_single_city1_matty_info'
    )!;
    const friend_single_city1_moses_info = document.getElementById(
      'friend_single_city1_moses_info'
    )!;
    const friend_single_city1_nektarios_info = document.getElementById(
      'friend_single_city1_nektarios_info'
    )!;
    const friend_single_city1_newberry_info = document.getElementById(
      'friend_single_city1_newberry_info'
    )!;
    const friend_single_city1_orpheus_info = document.getElementById(
      'friend_single_city1_orpheus_info'
    )!;
    const friend_single_city1_ryan_info = document.getElementById(
      'friend_single_city1_ryan_info'
    )!;
    const friend_single_city1_tanner_info = document.getElementById(
      'friend_single_city1_tanner_info'
    )!;
    const friend_single_city1_tsubaki_info = document.getElementById(
      'friend_single_city1_tsubaki_info'
    )!;
    const friend_single_city1_tsuki_info = document.getElementById(
      'friend_single_city1_tsuki_info'
    )!;
    const friend_single_city1_victor_info = document.getElementById(
      'friend_single_city1_victor_info'
    )!;

    const friend_single_city1_andrew = document.getElementById(
      'friend_single_city1_andrew'
    )!;
    const friend_single_city1_catherine = document.getElementById(
      'friend_single_city1_catherine'
    )!;
    const friend_single_city1_jibblet = document.getElementById(
      'friend_single_city1_jibblet'
    )!;
    const friend_single_city1_jonathan = document.getElementById(
      'friend_single_city1_jonathan'
    )!;
    const friend_single_city1_jt = document.getElementById(
      'friend_single_city1_jt'
    )!;
    const friend_single_city1_karath = document.getElementById(
      'friend_single_city1_karath'
    )!;
    const friend_single_city1_matty = document.getElementById(
      'friend_single_city1_matty'
    )!;
    const friend_single_city1_moses = document.getElementById(
      'friend_single_city1_moses'
    )!;
    const friend_single_city1_nektarios = document.getElementById(
      'friend_single_city1_nektarios'
    )!;
    const friend_single_city1_newberry = document.getElementById(
      'friend_single_city1_newberry'
    )!;
    const friend_single_city1_orpheus = document.getElementById(
      'friend_single_city1_orpheus'
    )!;
    const friend_single_city1_ryan = document.getElementById(
      'friend_single_city1_ryan'
    )!;
    const friend_single_city1_tanner = document.getElementById(
      'friend_single_city1_tanner'
    )!;
    const friend_single_city1_tsubaki = document.getElementById(
      'friend_single_city1_tsubaki'
    )!;
    const friend_single_city1_tsuki = document.getElementById(
      'friend_single_city1_tsuki'
    )!;
    const friend_single_city1_victor = document.getElementById(
      'friend_single_city1_victor'
    )!;

    function friendDetails(
      name: string,
      occupation: string,
      imgSrc: string,
      friendship: number,
      literacy: number,
      currentlyReading: string,
      currentlyCheckedOut: string[]
    ) {
      function friendshipMeter(friendship: number) {
        switch (friendship) {
          case 0:
            return `
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
          case 1:
            return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
          case 2:
            return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
          case 3:
            return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
          case 4:
            return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
          case 5:
            return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
            `;
          default:
            break;
        }
      }
      function literacyMeter(literacy: number) {
        switch (literacy) {
          case 0:
            return `
            `;
          case 1:
            return `
              <img src="/images/items/book32.png" alt="Literacy Meter" />
            `;
          case 2:
            return `
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
            `;
          case 3:
            return `
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
            `;
          case 4:
            return `
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
            `;
          case 5:
            return `
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
              <img src="/images/items/book32.png" alt="Literacy Meter" />
            `;
          default:
            break;
        }
      }
      return `
        <div class="friend_single_details">
          <h3>${name}</h3>
          <h5>Occupation: ${occupation}</h5>
          <div class="friend_single_info">
            <span>
              <img src="${imgSrc}" alt="${name}" class="npc_image" />
            </span>
            <span class="friend_stats">
              <span>
                <h4>Friendship</h4>
                <span class="friendship_meter">
                  ${friendshipMeter(friendship)}
                </span>
              </span>
              <span>
                <h4>Literacy</h4>
                <span class="literacy_meter">
                ${literacyMeter(literacy)}
                </span>
              </span>
            </span>
          </div>
            <p><b>Currently Reading:</b> ${currentlyReading}
              <br />
              <b>Current Books Checked Out:</b> ${currentlyCheckedOut
                .map((b, i) => {
                  if (i === currentlyCheckedOut.length - 1) return `${b}`;
                  return `${b}, `;
                })
                .join('')}
            </p>

            <table>
              <thead>
                <td>Favorite Books:</td>
                <td>Favorite Genres:</td>
                <td>Activities:</td>
              </thead>
              <tbody>
                <tr>
                <td>Lord of the Rings: Fellowship of the Ring</td>
                <td>???</td>
                <td>Farming</td>
                </tr>
                <tr>
                <td>???</td>
                <td>???</td>
                <td>Chopping Wood</td>
                </tr>
                <tr>
                <td>???</td>
                <td>???</td>
                <td>Fighting Monsters</td>
                </tr>
                <tr>
                <td>???</td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>???</td>
                <td></td>
                <td></td>
                </tr>
              </tbody>
            </table>
        </div>      
      `;
    }

    /*
      NPC row onclick functions
      TODO: Add the other 13 NPC detail pages
      TODO: Use real data from server
    */
    friend_single_city1_andrew.onclick = function () {
      friend_single_city1_andrew_info.innerHTML = friendDetails(
        'Andrew of Helena',
        'Farmer',
        '/images/npcs/city1/catherine.png',
        0,
        1,
        'Lord of the Rings: Fellowship of the Ring',
        ['Lord of the Rings: Fellowship of the Ring']
      );

      const see_all_friends = document.getElementById('see_all_friends')!;
      see_all_friends.style.display = 'block';
      friend_single_city1_andrew.style.display = 'none';
      friend_single_city1_catherine.style.display = 'none';
      friend_single_city1_jibblet.style.display = 'none';
      friend_single_city1_jonathan.style.display = 'none';
      friend_single_city1_jt.style.display = 'none';
      friend_single_city1_karath.style.display = 'none';
      friend_single_city1_matty.style.display = 'none';
      friend_single_city1_moses.style.display = 'none';
      friend_single_city1_nektarios.style.display = 'none';
      friend_single_city1_newberry.style.display = 'none';
      friend_single_city1_orpheus.style.display = 'none';
      friend_single_city1_ryan.style.display = 'none';
      friend_single_city1_tanner.style.display = 'none';
      friend_single_city1_tsubaki.style.display = 'none';
      friend_single_city1_tsuki.style.display = 'none';
      friend_single_city1_victor.style.display = 'none';
    };
    friend_single_city1_catherine.onclick = function () {
      friend_single_city1_catherine_info.innerHTML = friendDetails(
        'Catherine',
        'Housewife',
        '/images/npcs/city1/catherine.png',
        4,
        5,
        'The Hobbit',
        []
      );

      const see_all_friends = document.getElementById('see_all_friends')!;
      see_all_friends.style.display = 'block';
      friend_single_city1_andrew.style.display = 'none';
      friend_single_city1_catherine.style.display = 'none';
      friend_single_city1_jibblet.style.display = 'none';
      friend_single_city1_jonathan.style.display = 'none';
      friend_single_city1_jt.style.display = 'none';
      friend_single_city1_karath.style.display = 'none';
      friend_single_city1_matty.style.display = 'none';
      friend_single_city1_moses.style.display = 'none';
      friend_single_city1_nektarios.style.display = 'none';
      friend_single_city1_newberry.style.display = 'none';
      friend_single_city1_orpheus.style.display = 'none';
      friend_single_city1_ryan.style.display = 'none';
      friend_single_city1_tanner.style.display = 'none';
      friend_single_city1_tsubaki.style.display = 'none';
      friend_single_city1_tsuki.style.display = 'none';
      friend_single_city1_victor.style.display = 'none';
    };
    friend_single_city1_jibblet.onclick = function () {
      friend_single_city1_jibblet_info.innerHTML = friendDetails(
        'Jibblét',
        'Herbalist',
        '/images/npcs/city1/catherine.png',
        1,
        2,
        `Gunnar's Daughter`,
        [`Gunnar's Daughter`, `The Silmarrilion`]
      );

      const see_all_friends = document.getElementById('see_all_friends')!;
      see_all_friends.style.display = 'block';
      friend_single_city1_andrew.style.display = 'none';
      friend_single_city1_catherine.style.display = 'none';
      friend_single_city1_jibblet.style.display = 'none';
      friend_single_city1_jonathan.style.display = 'none';
      friend_single_city1_jt.style.display = 'none';
      friend_single_city1_karath.style.display = 'none';
      friend_single_city1_matty.style.display = 'none';
      friend_single_city1_moses.style.display = 'none';
      friend_single_city1_nektarios.style.display = 'none';
      friend_single_city1_newberry.style.display = 'none';
      friend_single_city1_orpheus.style.display = 'none';
      friend_single_city1_ryan.style.display = 'none';
      friend_single_city1_tanner.style.display = 'none';
      friend_single_city1_tsubaki.style.display = 'none';
      friend_single_city1_tsuki.style.display = 'none';
      friend_single_city1_victor.style.display = 'none';
    };

    see_all_friends.onclick = function () {
      see_all_friends.style.display = 'none';
      // display all NPC rows
      friend_single_city1_andrew.style.display = 'block';
      friend_single_city1_catherine.style.display = 'block';
      friend_single_city1_jibblet.style.display = 'block';
      friend_single_city1_jonathan.style.display = 'block';
      friend_single_city1_jt.style.display = 'block';
      friend_single_city1_karath.style.display = 'block';
      friend_single_city1_matty.style.display = 'block';
      friend_single_city1_moses.style.display = 'block';
      friend_single_city1_nektarios.style.display = 'block';
      friend_single_city1_newberry.style.display = 'block';
      friend_single_city1_orpheus.style.display = 'block';
      friend_single_city1_ryan.style.display = 'block';
      friend_single_city1_tanner.style.display = 'block';
      friend_single_city1_tsubaki.style.display = 'block';
      friend_single_city1_tsuki.style.display = 'block';
      friend_single_city1_victor.style.display = 'block';
      // remove NPC info page
      friend_single_city1_andrew_info.innerHTML = ``;
      friend_single_city1_catherine_info.innerHTML = ``;
      friend_single_city1_jibblet_info.innerHTML = ``;
      friend_single_city1_jonathan_info.innerHTML = ``;
      friend_single_city1_jt_info.innerHTML = ``;
      friend_single_city1_karath_info.innerHTML = ``;
      friend_single_city1_matty_info.innerHTML = ``;
      friend_single_city1_moses_info.innerHTML = ``;
      friend_single_city1_nektarios_info.innerHTML = ``;
      friend_single_city1_newberry_info.innerHTML = ``;
      friend_single_city1_orpheus_info.innerHTML = ``;
      friend_single_city1_ryan_info.innerHTML = ``;
      friend_single_city1_tanner_info.innerHTML = ``;
      friend_single_city1_tsubaki_info.innerHTML = ``;
      friend_single_city1_tsuki_info.innerHTML = ``;
      friend_single_city1_victor_info.innerHTML = ``;
    };
  }

  private createJournalAchievements() {
    const journal_achievements = document.getElementById(
      'journal_achievements'
    )!;
    journal_achievements.innerHTML = `
      <p>Journal Achievements</p>
  `;
  }

  private createJournalStats() {
    const journal_stats = document.getElementById('journal_stats')!;
    journal_stats.innerHTML = `
      <p>Journal Stats</p>
  `;
  }

  private createJournalSettings() {
    const journal_settings = document.getElementById('journal_settings')!;
    journal_settings.innerHTML = `
      <p>Journal Settings</p>
  `;
  }

  private createJournalCredits() {
    const journal_credits = document.getElementById('journal_credits')!;
    journal_credits.innerHTML = `
      <p>Journal Credits</p>
  `;
  }

  private createPlayerJournalModalLogic() {
    const modal = document.getElementById('journal_modal')!;
    const journalImg = document.getElementById('journal_img')!;
    const closeSpan = document.getElementsByClassName(
      'close'
    )[0] as HTMLElement;

    // Open Journal
    journalImg.onclick = function () {
      modal.style.display = 'block';
    };

    // Close Journal
    closeSpan.onclick = function () {
      modal.style.display = 'none';
    };

    // Active Tab logic
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    journal_main_tab.classList.add('active_tab');

    this.createJournalMainTabLogic();
    this.createJournalInventoryTabLogic();
    this.createJournalFriendsTabLogic();
    this.createJournalAchievementsTabLogic();
    this.createJournalStatsTabLogic();
    this.createJournalSettingsTabLogic();
    this.createJournalCreditsTabLogic();
  }

  private createJournalMainTabLogic() {
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    const journal_inventory_tab = document.getElementById(
      'journal_inventory_tab'
    )!;
    const journal_friends_tab = document.getElementById('journal_friends_tab')!;
    const journal_achievements_tab = document.getElementById(
      'journal_achievements_tab'
    )!;
    const journal_stats_tab = document.getElementById('journal_stats_tab')!;
    const journal_settings_tab = document.getElementById(
      'journal_settings_tab'
    )!;
    const journal_credits_tab = document.getElementById('journal_credits_tab')!;

    journal_main_tab.onclick = function () {
      // remove .active_tab class from any tab that currently has it
      journal_inventory_tab.classList.remove('active_tab');
      journal_friends_tab.classList.remove('active_tab');
      journal_achievements_tab.classList.remove('active_tab');
      journal_stats_tab.classList.remove('active_tab');
      journal_settings_tab.classList.remove('active_tab');
      journal_credits_tab.classList.remove('active_tab');

      // add .active_tab class to journal_main_tab
      journal_main_tab.classList.add('active_tab');

      // remove content from other tabs
      const journal_inventory = document.getElementById('journal_inventory')!;
      const journal_friends = document.getElementById('journal_friends')!;
      const journal_achievements = document.getElementById(
        'journal_achievements'
      )!;
      const journal_stats = document.getElementById('journal_stats')!;
      const journal_settings = document.getElementById('journal_settings')!;
      const journal_credits = document.getElementById('journal_credits')!;

      journal_inventory.style.display = 'none';
      journal_friends.style.display = 'none';
      journal_achievements.style.display = 'none';
      journal_stats.style.display = 'none';
      journal_settings.style.display = 'none';
      journal_credits.style.display = 'none';

      // add content from journal_inventory
      const journal_main = document.getElementById('journal_main')!;
      journal_main.style.display = 'block';
    };
  }

  private createJournalInventoryTabLogic() {
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    const journal_inventory_tab = document.getElementById(
      'journal_inventory_tab'
    )!;
    const journal_friends_tab = document.getElementById('journal_friends_tab')!;
    const journal_achievements_tab = document.getElementById(
      'journal_achievements_tab'
    )!;
    const journal_stats_tab = document.getElementById('journal_stats_tab')!;
    const journal_settings_tab = document.getElementById(
      'journal_settings_tab'
    )!;
    const journal_credits_tab = document.getElementById('journal_credits_tab')!;

    journal_inventory_tab.onclick = function () {
      // remove .active_tab class from any tab that currently has it
      journal_main_tab.classList.remove('active_tab');
      journal_friends_tab.classList.remove('active_tab');
      journal_achievements_tab.classList.remove('active_tab');
      journal_stats_tab.classList.remove('active_tab');
      journal_settings_tab.classList.remove('active_tab');
      journal_credits_tab.classList.remove('active_tab');

      // add .active_tab class to journal_inventory_tab
      journal_inventory_tab.classList.add('active_tab');

      // remove content from other tabs
      const journal_main = document.getElementById('journal_main')!;
      const journal_friends = document.getElementById('journal_friends')!;
      const journal_achievements = document.getElementById(
        'journal_achievements'
      )!;
      const journal_stats = document.getElementById('journal_stats')!;
      const journal_settings = document.getElementById('journal_settings')!;
      const journal_credits = document.getElementById('journal_credits')!;

      journal_main.style.display = 'none';
      journal_friends.style.display = 'none';
      journal_achievements.style.display = 'none';
      journal_stats.style.display = 'none';
      journal_settings.style.display = 'none';
      journal_credits.style.display = 'none';

      // add content from journal_inventory
      const journal_inventory = document.getElementById('journal_inventory')!;
      journal_inventory.style.display = 'block';
    };
  }

  private createJournalFriendsTabLogic() {
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    const journal_inventory_tab = document.getElementById(
      'journal_inventory_tab'
    )!;
    const journal_friends_tab = document.getElementById('journal_friends_tab')!;
    const journal_achievements_tab = document.getElementById(
      'journal_achievements_tab'
    )!;
    const journal_stats_tab = document.getElementById('journal_stats_tab')!;
    const journal_settings_tab = document.getElementById(
      'journal_settings_tab'
    )!;
    const journal_credits_tab = document.getElementById('journal_credits_tab')!;

    journal_friends_tab.onclick = function () {
      // remove .active_tab class from any tab that currently has it
      journal_main_tab.classList.remove('active_tab');
      journal_inventory_tab.classList.remove('active_tab');
      journal_achievements_tab.classList.remove('active_tab');
      journal_stats_tab.classList.remove('active_tab');
      journal_settings_tab.classList.remove('active_tab');
      journal_credits_tab.classList.remove('active_tab');

      // add .active_tab class to journal_friends_tab
      journal_friends_tab.classList.add('active_tab');

      // remove content from other tabs
      const journal_main = document.getElementById('journal_main')!;
      const journal_inventory = document.getElementById('journal_inventory')!;
      const journal_achievements = document.getElementById(
        'journal_achievements'
      )!;
      const journal_stats = document.getElementById('journal_stats')!;
      const journal_settings = document.getElementById('journal_settings')!;
      const journal_credits = document.getElementById('journal_credits')!;

      journal_main.style.display = 'none';
      journal_inventory.style.display = 'none';
      journal_achievements.style.display = 'none';
      journal_stats.style.display = 'none';
      journal_settings.style.display = 'none';
      journal_credits.style.display = 'none';

      // add content from journal_inventory
      const journal_friends = document.getElementById('journal_friends')!;
      journal_friends.style.display = 'block';
    };
  }

  private createJournalAchievementsTabLogic() {
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    const journal_inventory_tab = document.getElementById(
      'journal_inventory_tab'
    )!;
    const journal_friends_tab = document.getElementById('journal_friends_tab')!;
    const journal_achievements_tab = document.getElementById(
      'journal_achievements_tab'
    )!;
    const journal_stats_tab = document.getElementById('journal_stats_tab')!;
    const journal_settings_tab = document.getElementById(
      'journal_settings_tab'
    )!;
    const journal_credits_tab = document.getElementById('journal_credits_tab')!;

    journal_achievements_tab.onclick = function () {
      // remove .active_tab class from any tab that currently has it
      journal_main_tab.classList.remove('active_tab');
      journal_inventory_tab.classList.remove('active_tab');
      journal_friends_tab.classList.remove('active_tab');
      journal_stats_tab.classList.remove('active_tab');
      journal_settings_tab.classList.remove('active_tab');
      journal_credits_tab.classList.remove('active_tab');

      // add .active_tab class to journal_achievements_tab
      journal_achievements_tab.classList.add('active_tab');

      // remove content from other tabs
      const journal_main = document.getElementById('journal_main')!;
      const journal_inventory = document.getElementById('journal_inventory')!;
      const journal_friends = document.getElementById('journal_friends')!;
      const journal_stats = document.getElementById('journal_stats')!;
      const journal_settings = document.getElementById('journal_settings')!;
      const journal_credits = document.getElementById('journal_credits')!;

      journal_main.style.display = 'none';
      journal_inventory.style.display = 'none';
      journal_friends.style.display = 'none';
      journal_stats.style.display = 'none';
      journal_settings.style.display = 'none';
      journal_credits.style.display = 'none';

      // add content from journal_inventory
      const journal_achievements = document.getElementById(
        'journal_achievements'
      )!;
      journal_achievements.style.display = 'block';
    };
  }

  private createJournalStatsTabLogic() {
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    const journal_inventory_tab = document.getElementById(
      'journal_inventory_tab'
    )!;
    const journal_friends_tab = document.getElementById('journal_friends_tab')!;
    const journal_achievements_tab = document.getElementById(
      'journal_achievements_tab'
    )!;
    const journal_stats_tab = document.getElementById('journal_stats_tab')!;
    const journal_settings_tab = document.getElementById(
      'journal_settings_tab'
    )!;
    const journal_credits_tab = document.getElementById('journal_credits_tab')!;

    journal_stats_tab.onclick = function () {
      // remove .active_tab class from any tab that currently has it
      journal_main_tab.classList.remove('active_tab');
      journal_inventory_tab.classList.remove('active_tab');
      journal_friends_tab.classList.remove('active_tab');
      journal_achievements_tab.classList.remove('active_tab');
      journal_settings_tab.classList.remove('active_tab');
      journal_credits_tab.classList.remove('active_tab');

      // add .active_tab class to journal_stats_tab
      journal_stats_tab.classList.add('active_tab');

      // remove content from other tabs
      const journal_main = document.getElementById('journal_main')!;
      const journal_inventory = document.getElementById('journal_inventory')!;
      const journal_friends = document.getElementById('journal_friends')!;
      const journal_achievements = document.getElementById(
        'journal_achievements'
      )!;
      const journal_settings = document.getElementById('journal_settings')!;
      const journal_credits = document.getElementById('journal_credits')!;

      journal_main.style.display = 'none';
      journal_inventory.style.display = 'none';
      journal_friends.style.display = 'none';
      journal_achievements.style.display = 'none';
      journal_settings.style.display = 'none';
      journal_credits.style.display = 'none';

      // add content from journal_inventory
      const journal_stats = document.getElementById('journal_stats')!;
      journal_stats.style.display = 'block';
    };
  }

  private createJournalSettingsTabLogic() {
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    const journal_inventory_tab = document.getElementById(
      'journal_inventory_tab'
    )!;
    const journal_friends_tab = document.getElementById('journal_friends_tab')!;
    const journal_achievements_tab = document.getElementById(
      'journal_achievements_tab'
    )!;
    const journal_stats_tab = document.getElementById('journal_stats_tab')!;
    const journal_settings_tab = document.getElementById(
      'journal_settings_tab'
    )!;
    const journal_credits_tab = document.getElementById('journal_credits_tab')!;

    journal_settings_tab.onclick = function () {
      // remove .active_tab class from any tab that currently has it
      journal_main_tab.classList.remove('active_tab');
      journal_inventory_tab.classList.remove('active_tab');
      journal_friends_tab.classList.remove('active_tab');
      journal_achievements_tab.classList.remove('active_tab');
      journal_stats_tab.classList.remove('active_tab');
      journal_credits_tab.classList.remove('active_tab');

      // add .active_tab class to journal_settings_tab
      journal_settings_tab.classList.add('active_tab');

      // remove content from other tabs
      const journal_main = document.getElementById('journal_main')!;
      const journal_inventory = document.getElementById('journal_inventory')!;
      const journal_friends = document.getElementById('journal_friends')!;
      const journal_achievements = document.getElementById(
        'journal_achievements'
      )!;
      const journal_stats = document.getElementById('journal_stats')!;
      const journal_credits = document.getElementById('journal_credits')!;

      journal_main.style.display = 'none';
      journal_inventory.style.display = 'none';
      journal_friends.style.display = 'none';
      journal_achievements.style.display = 'none';
      journal_stats.style.display = 'none';
      journal_credits.style.display = 'none';

      // add content from journal_inventory
      const journal_settings = document.getElementById('journal_settings')!;
      journal_settings.style.display = 'block';
    };
  }

  private createJournalCreditsTabLogic() {
    const journal_main_tab = document.getElementById('journal_main_tab')!;
    const journal_inventory_tab = document.getElementById(
      'journal_inventory_tab'
    )!;
    const journal_friends_tab = document.getElementById('journal_friends_tab')!;
    const journal_achievements_tab = document.getElementById(
      'journal_achievements_tab'
    )!;
    const journal_stats_tab = document.getElementById('journal_stats_tab')!;
    const journal_settings_tab = document.getElementById(
      'journal_settings_tab'
    )!;
    const journal_credits_tab = document.getElementById('journal_credits_tab')!;

    journal_credits_tab.onclick = function () {
      // remove .active_tab class from any tab that currently has it
      journal_main_tab.classList.remove('active_tab');
      journal_inventory_tab.classList.remove('active_tab');
      journal_friends_tab.classList.remove('active_tab');
      journal_achievements_tab.classList.remove('active_tab');
      journal_stats_tab.classList.remove('active_tab');
      journal_settings_tab.classList.remove('active_tab');

      // add .active_tab class to journal_credits_tab
      journal_credits_tab.classList.add('active_tab');

      // remove content from other tabs
      const journal_main = document.getElementById('journal_main')!;
      const journal_inventory = document.getElementById('journal_inventory')!;
      const journal_friends = document.getElementById('journal_friends')!;
      const journal_achievements = document.getElementById(
        'journal_achievements'
      )!;
      const journal_settings = document.getElementById('journal_settings')!;
      const journal_stats = document.getElementById('journal_stats')!;

      journal_main.style.display = 'none';
      journal_inventory.style.display = 'none';
      journal_friends.style.display = 'none';
      journal_achievements.style.display = 'none';
      journal_settings.style.display = 'none';
      journal_stats.style.display = 'none';

      // add content from journal_inventory
      const journal_credits = document.getElementById('journal_credits')!;
      journal_credits.style.display = 'block';
    };
  }
}

export const uiManager = new UIManager();

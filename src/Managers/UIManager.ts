import { Sound } from 'excalibur';
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
  player_info!: HTMLElement;
  library_info!: HTMLElement;
  options!: HTMLElement;
  dialog_container!: HTMLElement;
  pause_menu!: HTMLElement;
  menu_window!: HTMLElement;
  playerName: string;
  playerGold: number;
  currentLibraryName: string;
  currentLibraryGold: number;
  currentLibraryBookCount: number;
  characterToDialogueWith: string | undefined;
  talkingSound: Sound | undefined;
  menu_items_container!: HTMLElement;
  current_menu_item = -1;
  menu_opened = false;
  menu_items = [
    // {
    //   name: TEXT_IN_GAME.MENU_COLLECTABLES,
    //   value: MENU.COLLECTIVES,
    // },
    {
      name: 'Items',
      value: MENU.ITEMS,
    },
    {
      name: 'Maps',
      value: MENU.MAP,
    },
    {
      name: 'Settings',
      value: MENU.SETTINGS,
    },
    {
      name: 'Close',
      value: MENU.BACK_MAIN_MENU,
    },
    // {
    //   name: "Exit",
    //   value: MENU.EXIT,
    // },
  ];
  constructor() {
    this.playerName = 'New Player';
    this.playerGold = 999;
    this.currentLibraryName = 'New Library';
    this.currentLibraryGold = 999;
    this.currentLibraryBookCount = 999;
    this.game_state = SCENE_STATE.LOADING;
  }

  init() {
    this.createPauseMenuUI();
    this.linkUIReferences();
    this.createPlayerInfoUI();
    this.createLibraryInfoUI();
    this.createDialogueUI();
    this.createPlayerJournal();
    this.createPlayerJournalModalLogic();
    this.update_menu();
  }

  private linkUIReferences() {
    this.game_container = document.getElementById('game')!;
    this.player_info = document.getElementById('player_info')!;
    this.library_info = document.getElementById('library_info')!;
    this.options = document.getElementById('options')!;
    this.dialog_container = document.getElementById('dialog_container')!;
    this.pause_menu = document.getElementById('pause_menu')!;
    this.menu_items_container = document.getElementById(
      'menu_items_container'
    )!;
    this.menu_window = document.getElementById('menu_window')!;
  }

  private createPauseMenuUI() {
    const pause_menu = document.getElementById('pause_menu')!;
    pause_menu.innerHTML = `
      <div id="menu_ingame" class="menu">
          <div class="menu_header">
            <p>Menu</p>
          </div>
          <ul id="menu_items_container"></ul>
        </div>
        <div id="menu_window" class="submenu">
          <div class="menu_header"></div>
          <div class="menu_content">
            <div class="collectives">Collectives</div>
            <div class="items">Items</div>
            <div class="map">Map</div>
            <div id="settings_container">Settings</div>
          </div>
          <div class="menu_footer"></div>
        </div>
        `;
  }

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

  private createLibraryInfoUI() {
    const player_info_container = document.getElementById('library_info')!;
    player_info_container.innerHTML = `
      <h3></h3>
    `;
  }

  private createDialogueUI() {
    const dialog_container = document.getElementById('dialog_container')!;
    dialog_container.innerHTML = `
        <div class="avatar"></div>
            <div class="content">
            <div class="text"></div>
        </div>
        `;
  }

  private createPlayerJournal() {
    const options = document.getElementById('options')!;
    options.innerHTML = `
      <img
        src="/images/items/journal.png"
        alt="Journal"
        width="48px"
        height="48px"
        id="journal_img"
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
  }

  private createJournalMain() {
    const journal_main = document.getElementById('journal_main')!;
    journal_main.innerHTML = `
    <p>Some text in the Modal..</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Alias itaque eos obcaecati deleniti soluta hic veritatis
      mollitia porro minima repellendus, deserunt expedita nemo
      enim placeat autem, nisi tempora impedit eveniet. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Alias
      itaque eos obcaecati deleniti soluta hic veritatis mollitia
      porro minima repellendus, deserunt expedita nemo enim
      placeat autem, nisi tempora impedit eveniet. Lorem, ipsum
      dolor sit amet consectetur adipisicing elit. Alias itaque
      eos obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Alias itaque eos
      obcaecati deleniti soluta hic veritatis mollitia porro
      minima repellendus, deserunt expedita nemo enim placeat
      autem, nisi tempora impedit eveniet.
    </p>
`;
  }

  private createJournalInventory() {
    const journal_inventory = document.getElementById('journal_inventory')!;
    journal_inventory.innerHTML = `
    <p>Some text in the Modal..</p>
`;
  }

  private createJournalFriends() {
    const journal_friends = document.getElementById('journal_friends')!;
    journal_friends.innerHTML = `
    <p>Some text in the Modal..</p>
`;
  }

  private createJournalAchievements() {
    const journal_achievements = document.getElementById(
      'journal_achievements'
    )!;
    journal_achievements.innerHTML = `
    <p>Some text in the Modal..</p>
`;
  }

  private createJournalStats() {
    const journal_stats = document.getElementById('journal_stats')!;
    journal_stats.innerHTML = `
    <p>Some text in the Modal..</p>
`;
  }

  private createJournalSettings() {
    const journal_settings = document.getElementById('journal_settings')!;
    journal_settings.innerHTML = `
    <p>Some text in the Modal..</p>
`;
  }

  private createJournalCredits() {
    const journal_credits = document.getElementById('journal_credits')!;
    journal_credits.innerHTML = `
    <p>Some text in the Modal..</p>
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
  }

  close_submenu() {
    this.menu_window.style.display = 'none';
    this.menu_opened = false;
    this.current_menu_item = -1;
  }

  close_menu() {
    this.close_submenu();
    this.update_state(SCENE_STATE.PLAYING);
    this.current_menu_item = -1;
  }

  cancel_menu() {
    if (this.menu_opened) {
      this.close_submenu();
    } else {
      this.close_menu();
    }
    this.update_menu();
  }

  open_submenu() {
    const current = this.menu_items[this.current_menu_item];
    if (current.value === MENU.EXIT) {
      this.cancel_menu();
      return;
    } else if (current.value === MENU.BACK_MAIN_MENU) {
      this.current_menu_item = 0;
      this.cancel_menu();
      return;
    }

    this.menu_window.classList.value = current.value;
    const menu_header = this.menu_window.querySelector(
      '.menu_header'
    )! as HTMLElement;
    menu_header.innerText = current.name;
    const closeDiv = document.createElement('div');
    closeDiv.innerText = 'x';
    closeDiv.classList.add('menu_close');
    closeDiv.onclick = () => this.cancel_menu();

    menu_header.appendChild(closeDiv);
    this.menu_window.style.display = 'block';
    this.menu_opened = true;
  }

  update_menu() {
    this.menu_items_container.innerHTML = '';
    this.menu_items.forEach((item, i) => {
      const btn = document.createElement('button');
      btn.classList.add('menu_item');
      btn.name = i.toString();

      btn.innerText = item.name;
      if (i === this.current_menu_item) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
      btn.onclick = () => {
        this.current_menu_item = Number(btn.name);
        this.update_menu();
        this.open_submenu();
      };

      this.menu_items_container.appendChild(btn);
    });
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

  update_state(state: SCENE_STATE) {
    this.game_container.className = state;
    this.game_state = state;
  }

  update_player_name(name: string) {
    this.playerName = name;
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
}

export const uiManager = new UIManager();

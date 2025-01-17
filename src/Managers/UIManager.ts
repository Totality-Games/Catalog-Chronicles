import { Sound } from 'excalibur';
import { Dialogues, SCENE_STATE } from '../constants';

// import helper functions
import city1Details from './helpers/friends/city1/city1Details';
import city1Rows from './helpers/friends/city1/city1Rows';
import city1DetailDivs from './helpers/friends/city1/city1DetailDivs';
import city1RowsFriendshipMeter from './helpers/friends/city1/city1RowsFriendshipMeter';

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
  playerGoldToDate: number;
  currentLibraryName: string;
  currentLibraryGold: number;
  currentLibraryBookCount: number;
  characterToDialogueWith: string | undefined;
  talkingSound: Sound | undefined;
  constructor() {
    this.playerName = 'New Player';
    this.playerGold = 111;
    this.playerGoldToDate = 111;
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
  setupTitleMenuUI(sceneChangeCallback: () => void) {
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
      <h3 id="player_name">${this.playerName}</h3>
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

    const player_gold_span = document.getElementById('player_name')!;
    player_gold_span.innerText = this.playerName;
  }

  updatePlayerGoldInfoUI(goldAmount: number, goldToDate: number) {
    this.playerGold = goldAmount;
    this.playerGoldToDate = goldToDate;

    // update player gold total in HUD
    const player_gold_span = document.getElementById('player_gold')!;
    player_gold_span.innerHTML = `
        <img
          src="/images/items/gold.png"
          alt="Gold Icon"
          width="32px"
        />
        ${this.playerGold}
    `;

    // update player gold to date total in Journal
    const journal_player_gold_to_date = document.getElementById(
      'journal_player_gold_to_date'
    )!;
    journal_player_gold_to_date.innerText = `Player Gold Total to Date: ${this.playerGoldToDate}`;
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
    // create friends rows
    const journal_friends = document.getElementById('journal_friends')!;
    journal_friends.innerHTML = `
      <div id="friends_container" class="friends_container">
        <div class="friends_header">
          <h2>Journal Friends</h2>
          <span id="see_all_friends" class="see_all_friends">See All Friends</span>
        </div>
        <div id="friends" class="friends">
          ${city1Rows()}
        </div>
      </div>
      ${city1DetailDivs()}
  `;

    /* 
      This function will:
      1) hide all friend rows when one row is clicked
      2) show friend details of clicked row
      3) dispay Show All Friends button which
          a) hides friend details when clicked and
          b) displays all friend rows again
    */
    city1Details();
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
      <p id="journal_player_gold_to_date">Player Gold Total to Date: ${this.playerGoldToDate}</p>
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
      <a href="https://totality.games" target="_blank">
        <img src="/images/studio-logo.png" alt="totality.games" class="credits_logo" />
      </a>
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

      // TODO: check city player is currently in
      // then populate rows * friendship meters
      // with corresponding helper function
      city1RowsFriendshipMeter();
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

import {
  Color,
  DefaultLoader,
  Engine,
  Loadable,
  LoaderOptions,
  Screen,
  Util,
} from 'excalibur';
import { uiManager } from '../Managers/UIManager';
import { SCENE_STATE } from '../constants';

export class StartLoader extends DefaultLoader {
  fadeProgressBar: boolean = false;
  progressBarOpacity: number = 1.0;
  public backgroundColor: string = 'red';
  public loadingBarColor: Color = Color.fromHex('#D9E3E0');
  public screen: Screen | undefined = undefined;
  private static _DEFAULT_LOADER_OPTIONS: LoaderOptions = {
    loadables: [],
    fullscreenAfterLoad: false,
    fullscreenContainer: undefined,
  };

  //DOM Elements
  _playbutton: HTMLButtonElement;
  _gameTitleDiv: HTMLDivElement;
  _gameAttributeDiv: HTMLDivElement;
  _gameStudioDiv: HTMLDivElement;
  _gameRootDiv: HTMLDivElement = document.createElement('div');

  constructor(_loadables?: Loadable<any>[]) {
    super(StartLoader._DEFAULT_LOADER_OPTIONS);
    //add all dom elements here
    this._positionAndSizeRoot(this._gameRootDiv);
    this._playbutton = this._createPlayButton();
    this._gameTitleDiv = this._createGameTitle();
    this._gameAttributeDiv = this._createExcaliburAttribute();
    this._gameStudioDiv = this._createStudioAttribute();
    this._gameRootDiv.style.background = `linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),url(./images/library_7.png) no-repeat`;
    this._gameRootDiv.style.backgroundSize = 'cover';
    this._gameRootDiv.style.zIndex = '100';
  }

  //***********************  */
  //DefaultLoader Overrides
  //***********************  */
  public override onInitialize(engine: Engine): void {
    uiManager.update_state(SCENE_STATE.LOADING);

    this.engine = engine;
    this.screen = engine.screen as Screen;
    this.canvas.width = this.engine.canvas.width;
    this.canvas.height = this.engine.canvas.height;
    this.screen.events.on('resize', () => {
      this.canvas.width = this.engine.canvas.width;
      this.canvas.height = this.engine.canvas.height;
    });
    if (this.engine?.browser) {
      this.engine.browser.window.on(
        'resize',
        this._positionAndSizeRoot.bind(this, this._gameRootDiv)
      );
    }
    this._positionAndSizeRoot(this._gameRootDiv);
  }

  public override onDraw(ctx: CanvasRenderingContext2D) {
    const canvasHeight = this.engine.canvasHeight / this.engine.pixelRatio;
    const canvasWidth = this.engine.canvasWidth / this.engine.pixelRatio;

    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    let loadingX = canvasWidth / 2 - 100;
    let loadingY = canvasHeight - 50;
    let width = 200;

    ctx.lineWidth = 2;
    const progress = width * this.progress;
    if (this.progress == 1) {
      setTimeout(() => {
        this.fadeProgressBar = true;
      }, 1000);
    }

    const margin = 5;
    const progressWidth = progress - margin * 2;
    const height = 20 - margin * 2;
    if (!this.fadeProgressBar) {
      Util.DrawUtil.roundRect(
        ctx,
        loadingX,
        loadingY,
        width,
        20,
        10,
        this.loadingBarColor
      );
      Util.DrawUtil.roundRect(
        ctx,
        loadingX + margin,
        loadingY + margin,
        progressWidth > 10 ? progressWidth : 10,
        height,
        5,
        undefined,
        this.loadingBarColor
      );
    } else {
      this.loadingBarColor.a = this.progressBarOpacity;

      Util.DrawUtil.roundRect(
        ctx,
        loadingX + margin,
        loadingY + margin,
        progressWidth > 10 ? progressWidth : 10,
        height,
        5,
        this.loadingBarColor,
        this.loadingBarColor
      );
      this.progressBarOpacity -= 0.01;
    }
  }

  onUpdate(_engine: Engine, _elapsedMilliseconds: number): void {
    //runs before onDraw
  }

  override async onUserAction(): Promise<void> {
    await Util.delay(200, this.engine?.clock);
    this.canvas.flagDirty();
    // show play button
    await this._showPlayButton();
  }

  //***********************  */
  // These are the methods that create the DOM elements
  //***********************  */

  /**
   * Shows the play button in the center of the screen and waits for it to be clicked.
   * When clicked, the button is removed and the loader is disposed.
   * @returns A promise that resolves when the button has been clicked.
   */
  async _showPlayButton(): Promise<void> {
    this._playbutton.style.display = 'block';
    await Util.delay(200, this.engine?.clock);
    this._gameRootDiv.appendChild(this._playbutton);

    let playButtonClicked: Promise<void> = new Promise<void>((resolve) => {
      const startButtonHandler = (e: Event) => {
        // We want to stop propagation to keep bubbling to the engine pointer handlers
        e.stopPropagation();
        e.preventDefault();
        this._playbutton.removeEventListener('click', startButtonHandler);
        resolve();
      };
      this._playbutton.addEventListener('click', startButtonHandler);
    });

    await playButtonClicked;
    this.dispose();
    this._playbutton.style.display = 'none';
  }

  /**
   * Creates a play button and returns it.
   * @returns {HTMLButtonElement} the play button
   */
  _createPlayButton(): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = 'excalibur-play';
    button.style.position = 'absolute';
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.top = '55%';
    button.style.left = '45%';

    button.style.fontFamily = 'Pixelify Sans';

    button.style.display = 'none';
    button.style.zIndex = '1000';
    button.innerText = 'PLAY';
    button.style.border = '2px solid #D9E3E0';
    button.style.borderRadius = '25px';

    return button;
  }

  /**
   * Creates a div element with a game title "EX SPACE SMASH".
   * The div element is positioned at the center of the screen.
   * The title is displayed in a large font size with a white color.
   * The div element has a white border with a radius of 25px.
   * The title is a block element with a z-index of 1001.
   * @returns The created div element.
   */
  _createGameTitle(): HTMLDivElement {
    const title = document.createElement('div');
    title.style.position = 'absolute';

    title.style.width = '100%';
    title.style.height = '150px';
    title.style.top = '15%';
    title.style.left = '50%';
    title.style.textAlign = 'center';
    title.style.transform = 'translate(-50%, -50%)';
    title.style.display = 'block';
    title.style.fontFamily = 'Pixelify Sans';
    title.style.fontSize = '60px';
    title.style.zIndex = '1001';

    title.style.color = '#D9E3E0';
    title.style.backgroundColor = '#662a3a';
    this._gameRootDiv.appendChild(title);

    const titleflexChild = document.createElement('div');
    titleflexChild.style.display = 'flex';
    titleflexChild.style.flexDirection = 'column';
    titleflexChild.innerText = 'Catalog Chronicles';
    titleflexChild.style.justifyContent = 'center';
    titleflexChild.style.alignItems = 'center';
    titleflexChild.style.height = '100%';

    const titleflexChild2 = document.createElement('span');
    titleflexChild2.style.display = 'flex';
    titleflexChild2.innerText = 'A cozy cat library game';
    titleflexChild2.style.justifyContent = 'center';
    titleflexChild2.style.alignItems = 'center';
    titleflexChild2.style.fontSize = '35px';

    title.appendChild(titleflexChild);
    titleflexChild.appendChild(titleflexChild2);

    return title;
  }

  /**
   * Creates and returns a styled HTMLDivElement that attributes the game to Excalibur.js.
   *
   * The method checks if an existing element with the ID 'excalibur-play' exists
   * and uses it; otherwise, it creates a new div element. The element is styled
   * to be positioned absolutely with specified dimensions and text properties,
   * and it displays the text "Made with Excalibur.js". The created or found
   * element is appended to the game root div.
   *
   * @returns The styled HTMLDivElement attributing Excalibur.js.
   */
  _createExcaliburAttribute(): HTMLDivElement {
    //document.getElementById('excalibur-play') as HTMLButtonElement;
    const extitle =
      (document.getElementById('excalibur-play ') as HTMLDivElement) ||
      document.createElement('div');
    extitle.style.position = 'absolute';
    extitle.style.width = '500px';
    extitle.style.height = '100px';
    extitle.style.bottom = '0%';
    extitle.style.left = '50%';
    extitle.style.textAlign = 'center';
    extitle.style.transform = 'translateX(-50%)';
    extitle.style.display = 'block';
    extitle.style.fontFamily = 'Pixelify Sans';
    extitle.style.fontSize = '15px';
    extitle.style.color = '#000';
    extitle.style.zIndex = '1001';
    extitle.innerText = 'Made with Excalibur.js';
    this._gameRootDiv.appendChild(extitle);

    const exIcon = document.createElement('img');
    exIcon.src = './images/ex-logo.png';
    exIcon.style.position = 'relative';
    exIcon.style.width = '20px';
    exIcon.style.height = '20px';
    exIcon.style.top = '4px';
    exIcon.style.left = '4px';
    extitle.appendChild(exIcon);
    return extitle;
  }

  _createStudioAttribute(): HTMLDivElement {
    //document.getElementById('excalibur-play') as HTMLButtonElement;
    const extitle =
      (document.getElementById('excalibur-play ') as HTMLDivElement) ||
      document.createElement('div');
    extitle.style.position = 'absolute';
    extitle.style.width = '500px';
    extitle.style.height = '100px';
    extitle.style.bottom = '14%';
    extitle.style.left = '50%';
    extitle.style.textAlign = 'center';
    extitle.style.transform = 'translateX(-50%)';
    extitle.style.display = 'block';
    extitle.style.fontFamily = 'Pixelify Sans';
    extitle.style.fontSize = '15px';
    extitle.style.zIndex = '1001';
    this._gameRootDiv.appendChild(extitle);

    const exIcon = document.createElement('img');
    exIcon.src = './images/studio-logo.png';
    exIcon.style.position = 'relative';
    exIcon.style.width = '100%';
    exIcon.style.top = '4px';
    exIcon.style.left = '4px';
    extitle.appendChild(exIcon);
    return extitle;
  }

  /**
   * Positions and sizes the rootDiv element to match the canvas dimensions.
   *
   * @param rootDiv - The HTMLDivElement to be positioned and sized.
   *
   * If the rootDiv is not already appended to the body, it is appended and assigned
   * an id of "excalibur-play-root". The rootDiv's position is set to absolute.
   *
   * If the engine is available, the rootDiv's left, top, width, and height
   * are updated to match the canvas' bounding client rectangle.
   */
  _positionAndSizeRoot(rootDiv: HTMLDivElement) {
    //first time pass through
    if (!document.getElementById('excalibur-play-root')) {
      document.body.appendChild(rootDiv);
      rootDiv.id = 'excalibur-play-root';
      rootDiv.style.position = 'absolute';
    }

    if (this.engine) {
      const {
        x: left,
        y: top,
        width: screenWidth,
        height: screenHeight,
      } = this.engine.canvas.getBoundingClientRect();
      rootDiv.style.left = `${left}px`;
      rootDiv.style.top = `${top}px`;
      rootDiv.style.width = `${screenWidth}px`;
      rootDiv.style.height = `${screenHeight}px`;
    }
  }

  /**
   * Removes the game root div from the DOM.
   *
   * Call this when you are done with the game and want to remove it from the DOM.
   * This is called automatically when the engine is stopped.
   */
  dispose() {
    this._gameRootDiv.remove();
  }
}

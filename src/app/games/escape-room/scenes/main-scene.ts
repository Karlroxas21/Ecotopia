import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  background: any;

  preload() {
    // Background in default scene
    this.load.image(
      'default-scene-bg',
      '../../../../assets/background/climate-escape-background.png'
    );

    // Level 1 Assets
    // BG
    this.load.image('level-1-bg',
    '../../../../assets/lvl1/sea-bg.png'
    );
    // Shark
    this.load.image('shark',
    '../../../../assets/lvl1/shark_spritesheet.png'
    );
    // Cloud
    this.load.image('cloud-shits',
    '../../../../assets/lvl1/cloud.png'
    );
    this.load.image('cloud-shits1',
    '../../../../assets/lvl1/clouds1.1.png'
    );
    this.load.image('cloud-shits2',
    '../../../../assets/lvl1/clouds1.2.png'
    );
    this.load.image('cloud-shits3',
    '../../../../assets/lvl1/clouds1.3.png'
    );
    // Mga basura ng mga dugyot
    this.load.image('basura1',
    '../../../../assets/lvl1/basura1.png'
    );
    this.load.image('basura2',
    '../../../../assets/lvl1/basura2.png'
    );
    this.load.image('basura3',
    '../../../../assets/lvl1/basura3.png'
    );
    this.load.image('basura4',
    '../../../../assets/lvl1/basura4.png'
    );
    this.load.image('basura5',
    '../../../../assets/lvl1/basura5.png'
    );
    this.load.image('basura6',
    '../../../../assets/lvl1/basura6.png'
    );
    this.load.image('basura7',
    '../../../../assets/lvl1/basura7.png'
    );
    this.load.image('basura8',
    '../../../../assets/lvl1/basura8.png'
    );
    this.load.image('basura9',
    '../../../../assets/lvl1/basura9.png'
    );
    this.load.image('basura10',
    '../../../../assets/lvl1/basura10.png'
    );
    // Background Image for some Trivia
    this.load.image('trivia1',
    '../../../../assets/bg-popup.png');
    // Audio for Level 1 Sea Scene
    this.load.audio('seaMusic', '../../../../assets/music/Tropical 8-bit Chiptune ｜ Background Music.mp3');
    // Pick up basura SFX
    this.load.audio('pickUpSFX', '../../../../assets/music/pick-upsuccess.mp3');
    // BG Music sa main scene
    this.load.audio('mainSceneSFX', '../../../../assets/music/kawai-kitsune.mp3');

    // Loading bar
    let loadingBar = this.add.graphics({
      fillStyle: { color: 0xffffff },
    });

    // Height and Width of game screen
    const screenHeight = this.game.renderer.height;
    const screenWidth = this.game.renderer.width;

    // Loading bar size and position
    const loadingBarWidth = screenWidth * 0.5;
    const loadingBarHeight = 50;
    const loadingBarX = (screenWidth - loadingBarWidth) / 2; // X Coords
    const loadingBarY = (screenHeight - loadingBarHeight) / 2; // Y Coords

    loadingBar.fillRect(
      loadingBarX,
      loadingBarY,
      loadingBarWidth,
      loadingBarHeight
    );

    // Text below loading bar and load arcade custom font
    const loadingText = this.add.text(
            screenWidth / 2,
            loadingBarY + loadingBarHeight + 20, // Below loading bar
            'Loading game...',
            { font: '18px monospace', color: '#ffffff' }
        )

    // Origin of the text to center
    loadingText.setOrigin(0.5);

    this.load.on('progress', (percent: number) => {
      // Update loading bar based on the progress
      loadingBar.clear();
      loadingBar.fillStyle(0xffffff, 1);
      loadingBar.fillRect(
        loadingBarX,
        loadingBarY,
        loadingBarWidth * percent, // Update width based on the progress of loading bar
        loadingBarHeight
      );
    });

    // Uncomment this when done in level 1!
    // this.load.on('complete', () => {
    //   this.scene.start('default-scene', { config: this.game.config });
    // });

    // Temporary to see Level 1 Scene Fast.
    this.load.on('complete', () => {
      this.scene.start('play-scene', { config: this.game.config });
    });
  }

}

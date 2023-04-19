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

    for (let i = 0; i < 1000; i++) {
      this.load.image(
        'default-scene-bg' + i,
        '../../../../assets/temp/default-scene-bg.png'
      );
    }

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

    this.load.on('complete', () => {
      this.scene.start('default-scene', { config: this.game.config });
    });
  }

  create() {

  }
}

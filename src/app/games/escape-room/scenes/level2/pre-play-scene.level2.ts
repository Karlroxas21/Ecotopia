import Phaser from 'phaser';

export class PrePlayLevel2Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'pre-play-level2-scene' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;
  cityBldg: any;
  cityRoad: any;
  
  bgMusic: any;

  create() {
    this.background = this.add.tileSprite(
        0,
        0,
        this.config.width,
        this.config.height,
        'cityBg'
      );
      this.background.setOrigin(0, 0);
      this.cityBldg = this.add.tileSprite(
        0,
        0,
        this.config.width,
        this.config.height,
        'cityBldg'
      );
      this.cityBldg.setOrigin(0, 0);
      this.cityRoad = this.add.tileSprite(
        0,
        0,
        this.config.width,
        this.config.height,
        'cityRoad'
      );
      this.cityRoad.setOrigin(0, 0);

    //Guide
    const centerX = this.config.width / 2;
    const centerY = this.config.height / 2;
    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    graphics.fillRect(
      75,
      centerY - this.config.height / 6 / 2,
      this.config.width - 150,
      this.config.height / 6
    );

    const guide = this.add.text(
      centerX,
      centerY,
      'You need to click the traditional jeepneys to replace it to \nmodernize jeepneys',
      { font: '18px monospace', color: '#ffffff' }
    );
    guide.setOrigin(0.5);

    // Close button
    const closeButton = this.add.text(
      this.config.width - 90,
      centerY - this.config.height / 6 / 2 + 15,
      'X',
      { font: '18px monospace', color: '#ffffff' }
    );
    closeButton.setOrigin(0.5);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      graphics.destroy();
      guide.destroy();
      closeButton.destroy();
      this.bgMusic.destroy();
      this.scene.start('play-level2-scene', { config: this.game.config });
    });
    // End of Guide

    // Background music
    this.bgMusic = this.sound.add('lvl2BgMusic', {loop: true, volume: 0.2});
    this.bgMusic.play();

  }

  override update() {

    // Move Backgrounds
    this.moveBackgrounds();
  }

  moveBackgrounds() {
    this.cityBldg.tilePositionX -= -0.5;
    this.cityRoad.tilePositionX -= -0.5;
    this.background.tilePositionX -= -0.5;
  }
}

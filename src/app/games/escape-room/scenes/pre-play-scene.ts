import Phaser from 'phaser';

export class PrePlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'pre-play-scene' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;
  shark_spritesheet: any;
  cloud: any;
  basura1: any;
  basura11: any;
  basura111: any;
  basura2: any;
  basura22: any;
  basura3: any;
  basura33: any;
  basura4: any;
  basura44: any;
  basura5: any;
  basura55: any;

  bgMusic: any;

  create() {
    this.background = this.add.image(0, 0, 'level-1-bg');
    this.background.setOrigin(0, 0);

    // Clouds
    this.cloud = this.add.image(100, 100, 'cloud-shits');
    this.cloud.setScale(0.5);

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
      'You need to click the garbages you see to clean the sea',
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
      this.scene.start('play-scene', { config: this.game.config });
    });
    // End of Guide

    // Background music
    this.bgMusic = this.sound.add('seaMusic', {loop: true, volume: 0.2});
    this.bgMusic.play();

    this.nakakalatNaBasura();

  }

  override update() {
    // Update cloud position
    this.cloud.x += 0.1;

    // Reset cloud position when it goes off screen
    if (this.cloud.x > this.config.width + this.cloud.displayWidth / 2) {
      this.cloud.x = -this.cloud.displayWidth / 2;
    }
  }

  nakakalatNaBasura() {
    // Mga basura
    const basura1 = this.add
      .image(this.config.width - 500, this.config.height - 20, 'basura1')
      .setScale(1.5);
    const basura11 = this.add
      .image(
        this.config.width - 600,
        this.config.height - 100,
        'basura6' 
      )
      .setScale(1.5);
    const basura111 = this.add
      .image(
        this.config.width - 370,
        this.config.height - 30,
        'basura7' 
      )
      .setScale(1.5);
    const basura2 = this.add
      .image(this.config.width - 20, this.config.height - 80, 'basura2')
      .setScale(1.5);
    const basura22 = this.add
      .image(this.config.width - 80, this.config.height - 70, 'basura8')
      .setScale(1.5); 
    const basura3 = this.add
      .image(this.config.width - 700, this.config.height - 100, 'basura3')
      .setScale(1.5);
    const basura33 = this.add
      .image(this.config.width - 550, this.config.height - 100, 'basura9')
      .setScale(1.5); 
    const basura4 = this.add
      .image(this.config.width - 260, this.config.height - 120, 'basura4')
      .setScale(1.5);
    const basura44 = this.add
      .image(this.config.width - 285, this.config.height - 120, 'basura10')
      .setScale(1.5); 
    const basura5 = this.add
      .image(this.config.width - 750, this.config.height - 140, 'basura5')
      .setScale(1.5);
    const basura55 = this.add
      .image(this.config.width - 770, this.config.height - 110, 'basura5')
      .setScale(1.5); 
  }
}

import Phaser from 'phaser';

import { heartPointsService } from './heart-service';

export class GameOver extends Phaser.Scene {
  config: Phaser.Types.Core.GameConfig | any;
  phaserGame!: Phaser.Game;

  constructor() {
    super({ key: 'game-over-scene' });
  }

  createGame() {
    this.phaserGame = new Phaser.Game(this.config);
  }

  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;

  bgMusic: any;
  gameOverSFX: any;

  textDisplay = "Game Over!\n Click 'X' to restart";

  create() {
    this.background = this.add.image(0, 0, 'scene2-bg-wrong'); // Change this
    this.background.setOrigin(0, 0);

    this.sound.stopAll();

    this.gameOverSFX = this.sound.add('game-over');
    this.gameOverSFX.play();

    // Text
    const centerX = this.config.width / 2;
    const centerY = this.config.height / 2;

    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    graphics.fillRect(
      75,
      centerY - this.cameras.main.height / 6 / 2,
      this.config.width - 150,
      this.config.height / 6
    );

    const closeButton = this.add.text(
      this.config.width - 90,
      centerY - this.config.height / 6 / 2 + 15,
      'X',
      { font: '18px Arial', color: '#ffffff' }
    );
    closeButton.setOrigin(0.5);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      this.scene.start('default-scene', { config: this.game.config });
      heartPointsService.resetHeartPoints();
    });

    const guide = this.add.text(centerX, centerY, this.textDisplay, {
      font: '18px monospace',
      color: '#ffffff',
      align: 'center',
    });
    guide.setOrigin(0.5);
    // End of text
  }

  override update() {}
}

import Phaser, { GameObjects } from 'phaser';

export class PlayLevel3Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'play-level3-scene' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  create() {
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
      'Due to time constraints, developer can only do up to 2 Levels. \nThe game is scalable',
      { font: '18px monospace', color: '#ffffff' }
    );
    guide.setOrigin(0.5);
    // End of Guide
  }
}

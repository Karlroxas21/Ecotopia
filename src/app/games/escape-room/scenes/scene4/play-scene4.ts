import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';

export class PlayScene4 extends Phaser.Scene {
  constructor() {
    super({ key: 'play-scene4' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;

  heart_icon: any;

  bgMusic: any;
  choiceButton: any;

  textDisplay = "What should you focus on picking up to improve the \nharbor environment?";

  choice1 = "Fishing Nets and Plastic Bottles";
  choice2 = "Seaweed and Barnacles";

  create() {
    this.background = this.add.image(0, 0, 'scene4-bg');
    this.background.setOrigin(0, 0);

    this.choiceButton = this.sound.add('choice');

    for (let i = 0; i < heartPointsService.getHeartPoints(); i++) {
      this.heart_icon = this.add.image(770, 30 + i * 30, 'heart-icon');
    }

    // Question
    const centerX = (this.config.width / 2) - 40;
    const centerY = 100;
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
      this.textDisplay,
      { font: '18px monospace', color: '#ffffff' }
    );
    guide.setOrigin(0.5);
    // End of Question

    // Choice 1
    const choice1CenterX = 100;
    const choice1CenterY = centerY + 80;
    const choice1graphics = this.add.graphics();
    choice1graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    choice1graphics.fillRect(
      75,
      centerY + 70,
      this.config.width - 150,
      40
    );

    const choice1Guide = this.add.text(
      choice1CenterX,
      choice1CenterY,
      this.choice1,
      { font: '18px monospace', color: '#ffffff' }
    );

    choice1Guide.setInteractive()
    choice1Guide.on('pointerdown', () => {
      this.scene.start('play-scene4-correct', { config: this.game.config });
      this.choiceButton.play();
    });
    // End of choice 1

    // Choice 2
    const choice2CenterX = 100;
    const choice2CenterY = centerY + 130;
    const choice2graphics = this.add.graphics();
    choice2graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    choice2graphics.fillRect(
      75,
      centerY + 120,
      this.config.width - 150,
      40
    );

    const choice2Guide = this.add.text(
      choice2CenterX,
      choice2CenterY,
      this.choice2,
      { font: '18px monospace', color: '#ffffff' }
    );
    choice2Guide.setInteractive()
    choice2Guide.on('pointerdown', () => {
      heartPointsService.decreaseHeartPoints();
      this.scene.start('play-scene4-wrong', { config: this.game.config });
      this.choiceButton.play();
    });
    // End of choice 2

  }

  override update() {

  }
}

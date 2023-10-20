import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';
import { scoreService } from '../score-service';

export class PlayScene2 extends Phaser.Scene {
  constructor() {
    super({ key: 'play-scene2' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;

  heart_icon:any;

  bgMusic: any;
  choiceButton: any;

  character: any;

  textDisplay = "S2Which waste should you focus on removing to protect \nthe river ecosystem?";

  choice1 = "Oil drums";
  choice2 = "Leaves";
  choice3 = "Tree's branch";
  choice4 = "Plastic bags"

  scoreDisplay: any;


  create() {
    this.background = this.add.image(0, 0, 'scene2-bg');
    this.background.setOrigin(0, 0);

    this.choiceButton = this.sound.add('choice');

    for(let i = 1; i <= heartPointsService.getHeartPoints(); i++){
      this.heart_icon = this.add.sprite(770, 10 + i * 50, 'heart-icon');
      this.heart_icon.setScale(0.08);

      this.anims.create({
        key: 'heart-icon_key',
        frames: this.anims.generateFrameNumbers('heart-icon', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    })

      this.heart_icon.anims.play('heart-icon_key');
    }

    this.scoreDisplay = this.add.text(10, 10, `Score: ${scoreService.getScorePoints()}`, { font: '20px monospace', color: '#ffffff' });

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
      this.scene.start('play-scene2-correct', {config: this.game.config});
      scoreService.increaseScorePoints(4);
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
      this.scene.start('play-scene2-wrong', {config: this.game.config});
      scoreService.decreaseScorePoints(1);
      this.choiceButton.play();
    });
    // End of choice 2

    // Choice 3
    const choice3CenterX = 100;
    const choice3CenterY = centerY + 180;
    const choice3graphics = this.add.graphics();
    choice3graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    choice3graphics.fillRect(
      75,
      centerY + 170,
      this.config.width - 150,
      40
    );

    const choice3Guide = this.add.text(
      choice3CenterX,
      choice3CenterY,
      this.choice3,
      { font: '18px monospace', color: '#ffffff' }
    );

    choice3Guide.setInteractive()
    choice3Guide.on('pointerdown', () => {
      this.scene.start('play-scene2-wrong', {config: this.game.config});
      scoreService.decreaseScorePoints(1);
      heartPointsService.decreaseHeartPoints();

      this.choiceButton.play();

    });
    // End of choice 3

    // Choice 4
    const choice4CenterX = 100;
    const choice4CenterY = centerY + 230;
    const choice4graphics = this.add.graphics();
    choice4graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    choice4graphics.fillRect(
      75,
      centerY + 220,
      this.config.width - 150,
      40
    );

    const choice4Guide = this.add.text(
      choice4CenterX,
      choice4CenterY,
      this.choice4,
      { font: '18px monospace', color: '#ffffff' }
    );
    choice4Guide.setInteractive()
    choice4Guide.on('pointerdown', () => {
      this.scene.start('play-scene2-correct', {config: this.game.config});
      scoreService.increaseScorePoints(2);

      this.choiceButton.play();

    });
    // End of choice 4

  }

  override update() {
 
  }
}

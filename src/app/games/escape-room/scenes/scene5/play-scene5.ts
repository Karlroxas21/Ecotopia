import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';
import { scoreService } from '../score-service';
import { environment } from 'src/environments/environment';
import axios from 'axios';

export class PlayScene5 extends Phaser.Scene {
  constructor() {
    super({ key: 'play-scene5' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;

  flow_sprite: any;

  heart_icon: any;
  
  cloud1: any;
  cloud2: any;
  cloud3: any;
  cloud4: any;
  cloud5: any;
  cloud6: any;
  cloud7: any;
  cloud8: any;
  cloud9: any;
  cloud0: any;

  bgMusic: any;
  choiceButtonSFX: any;

  textDisplay: any;

  choice1: any;
  choice2: any;
  choice3: any;
  choice4: any;

  weight1: number = 0;
  weight2: number = 0;
  weight3: number = 0;
  weight4: number = 0;

  scoreDisplay: any;

  gameData: any;

  private urlAPI = `${environment.apiUrl}`;

  getRandomQuestion() {
    axios.get(`${this.urlAPI}game_scene5`)
      .then((response) => {
        this.gameData = response.data;
        const randomIndexForQuestion = Phaser.Math.RND.integerInRange(0, this.gameData.length - 1);
        const randomQuestion = this.gameData[randomIndexForQuestion];

        const randomIndexesForChoices: number[] = [];

        while (randomIndexesForChoices.length < 4) {
          const randomIndex = Phaser.Math.RND.integerInRange(0, 3);
          if (!randomIndexesForChoices.includes(randomIndex)) {
            randomIndexesForChoices.push(randomIndex);
          }
        }

        if (randomQuestion.question.length >= 50) {
          const indexToInsertNewline = randomQuestion.question.lastIndexOf(' ', 50);
          if (indexToInsertNewline !== -1) {
            randomQuestion.question = randomQuestion.question.slice(0, indexToInsertNewline) + '\n' + randomQuestion.question.slice(indexToInsertNewline + 1);
          }
        }

        this.textDisplay = randomQuestion.question;
        this.choice1 = randomQuestion.choices[randomIndexesForChoices[0]];
        this.choice2 = randomQuestion.choices[randomIndexesForChoices[1]];
        this.choice3 = randomQuestion.choices[randomIndexesForChoices[2]];
        this.choice4 = randomQuestion.choices[randomIndexesForChoices[3]];

        this.weight1 = randomQuestion.weights[randomIndexesForChoices[0]];
        this.weight2 = randomQuestion.weights[randomIndexesForChoices[1]];
        this.weight3 = randomQuestion.weights[randomIndexesForChoices[2]];
        this.weight4 = randomQuestion.weights[randomIndexesForChoices[3]];

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
          100,
          centerY - 20,
          this.textDisplay,
          { font: '18px monospace', align: 'left', color: '#ffffff' }
        );
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
          if (heartPointsService.getHeartPoints() === 0) {
            this.scene.start('game-over-scene', { config: this.game.config });
          }
          else if (Number(this.weight1) > 0) {
            scoreService.increaseScorePoints(Number(this.weight1));
            this.scene.start('play-scene5-correct', { config: this.game.config });
          }
          else {
            scoreService.decreaseScorePoints(1);
            heartPointsService.decreaseHeartPoints();
            this.scene.start('play-scene5-wrong', { config: this.game.config });
          }

          this.choiceButtonSFX.play();

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
          if (heartPointsService.getHeartPoints() === 0) {
            this.scene.start('game-over-scene', { config: this.game.config });
          }
          else if (Number(this.weight2) > 0) {
            scoreService.increaseScorePoints(Number(this.weight2));
            this.scene.start('play-scene5-correct', { config: this.game.config });
          }
          else {
            scoreService.decreaseScorePoints(1);
            heartPointsService.decreaseHeartPoints();
            this.scene.start('play-scene5-wrong', { config: this.game.config });
          }

          this.choiceButtonSFX.play();

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
          if (heartPointsService.getHeartPoints() === 0) {
            this.scene.start('game-over-scene', { config: this.game.config });
          }
          else if (Number(this.weight3) > 0) {
            scoreService.increaseScorePoints(Number(this.weight3));
            this.scene.start('play-scene5-correct', { config: this.game.config });
          }
          else {
            scoreService.decreaseScorePoints(1);
            heartPointsService.decreaseHeartPoints();
            this.scene.start('play-scene5-wrong', { config: this.game.config });
          }

          this.choiceButtonSFX.play();

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
          if (heartPointsService.getHeartPoints() === 0) {
            this.scene.start('game-over-scene', { config: this.game.config });
          }
          else if (Number(this.weight4) > 0) {
            scoreService.increaseScorePoints(Number(this.weight4));
            this.scene.start('play-scene5-correct', { config: this.game.config });
          }
          else {
            scoreService.decreaseScorePoints(1);
            heartPointsService.decreaseHeartPoints();
            this.scene.start('play-scene5-wrong', { config: this.game.config });
          }

          this.choiceButtonSFX.play();

        });
        // End of choice 4
        })
      }

  create() {
        this.background = this.add.image(0, 0, 'scene5-bg');
        this.background.setOrigin(0, 0);

        this.flow_sprite = this.add.sprite(0, 0, 'scene5-sprite');
        this.flow_sprite.setOrigin(0, 0)
        this.anims.create({
          key: 'scene5-sprite-key',
          frames: this.anims.generateFrameNumbers('scene5-sprite', { start: 0, end: 2 }),
          frameRate: 2,
          repeat: -1
        })

        this.flow_sprite.anims.play('scene5-sprite-key');

         // Clouds
        this.cloud1 = this.add.image(0, 200, 'cloud-1');
        // this.cloud1.setScale(0.5);
        this.cloud2 = this.add.image(100, 100, 'cloud-2');
        this.cloud2.setScale(0.3);
        this.cloud3 = this.add.image(500, 200, 'cloud-3');
        // this.cloud3.setScale(0.2);
        this.cloud4 = this.add.image(400, 100, 'cloud-4');
        this.cloud4.setScale(0.4);
        this.cloud5 = this.add.image(600, 200, 'cloud-5');
        // this.cloud5.setScale(0.5);
        this.cloud6 = this.add.image(600, 200, 'cloud-6');
        // this.cloud6.setScale(0.5);
        this.cloud7 = this.add.image(650, 300, 'cloud-7');
        this.cloud8 = this.add.image(400, 300, 'cloud-8');
        this.cloud9 = this.add.image(300, 150, 'cloud-9');
        this.cloud0 = this.add.image(100, 200, 'cloud-0');
        
        this.choiceButtonSFX = this.sound.add('choice');

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

        this.getRandomQuestion();

      }

  override update() {
    // Update cloud position
    this.cloud1.x += 0.1;
    this.cloud2.x += 0.1;
    this.cloud3.x += 0.1;
    this.cloud4.x += 0.1;
    this.cloud5.x += 0.1;
    this.cloud6.x += 0.1;
    this.cloud7.x += 0.1;
    this.cloud8.x += 0.1;
    this.cloud9.x += 0.1;
    this.cloud0.x += 0.1;

    // Reset cloud position when it goes off screen
    if (this.cloud1.x > this.config.width + this.cloud1.displayWidth / 2) {
      this.cloud1.x = -this.cloud1.displayWidth / 2;
    }
    if (this.cloud2.x > this.config.width + this.cloud2.displayWidth / 2) {
      this.cloud2.x = -this.cloud2.displayWidth / 2;
    }
    if (this.cloud3.x > this.config.width + this.cloud3.displayWidth / 2) {
      this.cloud3.x = -this.cloud3.displayWidth / 2;
    }
    if (this.cloud4.x > this.config.width + this.cloud4.displayWidth / 2) {
      this.cloud4.x = -this.cloud4.displayWidth / 2;
    }
    if (this.cloud5.x > this.config.width + this.cloud5.displayWidth / 2) {
      this.cloud5.x = -this.cloud5.displayWidth / 2;
    }
    if (this.cloud6.x > this.config.width + this.cloud6.displayWidth / 2) {
      this.cloud6.x = -this.cloud6.displayWidth / 2;
    }
    if (this.cloud7.x > this.config.width + this.cloud7.displayWidth / 2) {
      this.cloud7.x = -this.cloud7.displayWidth / 2;
    }
    if (this.cloud8.x > this.config.width + this.cloud8.displayWidth / 2) {
      this.cloud8.x = -this.cloud8.displayWidth / 2;
    }
    if (this.cloud9.x > this.config.width + this.cloud9.displayWidth / 2) {
      this.cloud9.x = -this.cloud9.displayWidth / 2;
    }
    if (this.cloud0.x > this.config.width + this.cloud0.displayWidth / 2) {
      this.cloud0.x = -this.cloud0.displayWidth / 2;
    }
    
      }
}

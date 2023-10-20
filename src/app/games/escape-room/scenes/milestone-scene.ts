import Phaser from 'phaser';
import { heartPointsService } from './heart-service';
import { scoreService } from './score-service';

export class Milestone extends Phaser.Scene {
        constructor() {
                super({ key: 'milestone-scene' });
        }

        config: Phaser.Types.Core.GameConfig | any;
        init(data: { config: Phaser.Types.Core.GameConfig }) {
                this.config = data.config;
        }


        textDisplay = `Congratulations!\n\nYou answered all the correct answers and make a positive impact on\nthe environemnt!\n\n You're score is ${scoreService.getScorePoints()}` ;

        character: any;

        create() {

                this.sound.stopAll();
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
                        this.config.width /2,
                        centerY - this.config.height / 6 / 2 + 200,
                        "click here to restart",
                        { font: '18px Arial', color: '#ffffff' }
                );
                closeButton.setOrigin(0.5);
                closeButton.setInteractive();
                closeButton.on('pointerdown', () => {
                        this.scene.start('pre-play-scene', { config: this.game.config });
                        heartPointsService.resetHeartPoints();
                })

                const guide = this.add.text(
                        centerX,
                        centerY,
                        this.textDisplay,
                        { font: '21px monospace', color: '#ffffff', align: 'center' }
                );
                guide.setOrigin(0.5);
                // End of text

        this.character = this.add.sprite(650, 480, 'character');
        this.character.setScale(0.3);

    this.anims.create({
      key: 'character_key',
      frames: this.anims.generateFrameNumbers('character', {start: 0, end: 6}),
      frameRate: 10,
      repeat: -1
    })

    this.character.anims.play('character_key');

        }

        override update() {

        }
}

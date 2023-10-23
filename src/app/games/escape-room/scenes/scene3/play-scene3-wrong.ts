import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';
import { scoreService } from '../score-service';

export class PlayScene3Wrong extends Phaser.Scene {
        constructor() {
                super({ key: 'play-scene3-wrong' });
        }

        config: Phaser.Types.Core.GameConfig | any;
        init(data: { config: Phaser.Types.Core.GameConfig }) {
                this.config = data.config;
        }

        background: any;

        heart_icon: any;

        bgMusic: any;
        xButtonSFX: any;
        failedSFX: any;

        textDisplay = "Wrong!\nFailing to address the correct pond waste won't restore\nits beauty. Overlooking pollutants or invasives can hinder\necosystem restoration and its overall appeal.";

        scoreDisplay: any;

        create() {
                this.background = this.add.image(0, 0, 'scene3-bg-wrong');
                this.background.setOrigin(0, 0);

                this.xButtonSFX = this.sound.add('x-button');

                this.failedSFX = this.sound.add('failed');
                this.failedSFX.play();

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
                        "X",
                        { font: '18px Arial', color: '#ffffff' }
                );
                closeButton.setOrigin(0.5);
                closeButton.setInteractive();
                closeButton.on('pointerdown', () => {
                        if (heartPointsService.getHeartPoints() == 0) {
                                this.scene.start('game-over-scene', { config: this.game.config });
                        }else{
                                this.scene.start('pre-play-scene4', { config: this.game.config });
                        }
                })

                const guide = this.add.text(
                        centerX,
                        centerY,
                        this.textDisplay,
                        { font: '18px monospace', color: '#ffffff', align: 'center' }
                );
                guide.setOrigin(0.5);
                // End of text  


        }

        override update() {

        }
}

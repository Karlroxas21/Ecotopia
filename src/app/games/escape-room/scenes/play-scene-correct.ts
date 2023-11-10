import Phaser from 'phaser';
import { heartPointsService } from './heart-service';
import { scoreService } from './score-service';

export class PlaySceneCorrect extends Phaser.Scene {
        constructor() {
                super({ key: 'play-scene-correct' });
        }

        config: Phaser.Types.Core.GameConfig | any;
        init(data: { config: Phaser.Types.Core.GameConfig }) {
                this.config = data.config;
        }

        background: any;

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

        clutter1: any;
        clutter2: any;
        clutter3: any;
        clutter4: any;
        clutter5: any;
        clutter6: any;
        clutter7: any;
        clutter8: any;
        clutter9: any;
        clutter10: any;
        clutter11: any;
        clutter12: any;
        clutter13: any;
        clutter14: any;
        clutter15: any;

        levelPassedSFX: any;
        xButtonSFX: any;

        scoreDisplay: any;

        textDisplay = "Correct! Cleaning up beaches is important because they're a\ncommon and harmful source of marine debris that can seriously\nharm the environment and wildlife.";

        create() {
                this.background = this.add.image(0, 0, 'level-1-bg');
                this.background.setOrigin(0, 0);

                this.levelPassedSFX = this.sound.add('level-passed');
                this.levelPassedSFX.play();

                this.xButtonSFX = this.sound.add('x-button');

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


                // Clouds
                this.cloud1 = this.add.image(0, 200, 'cloud-1');
                this.cloud1.setScale(0.5);
                this.cloud2 = this.add.image(100, 100, 'cloud-2');
                this.cloud2.setScale(0.3);
                this.cloud3 = this.add.image(500, 200, 'cloud-3');
                this.cloud3.setScale(0.2);
                this.cloud4 = this.add.image(400, 100, 'cloud-4');
                this.cloud4.setScale(0.4);
                this.cloud5 = this.add.image(600, 200, 'cloud-5');
                this.cloud5.setScale(0.5);
                this.cloud6 = this.add.image(600, 200, 'cloud-6');
                this.cloud6.setScale(0.5);
                this.cloud7 = this.add.image(650, 300, 'cloud-7');
                this.cloud8 = this.add.image(400, 300, 'cloud-8');
                this.cloud9 = this.add.image(300, 150, 'cloud-9');
                this.cloud0 = this.add.image(100, 200, 'cloud-0');

                // Question
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
                        this.xButtonSFX.play();
                        this.scene.start('pre-play-scene2', { config: this.game.config });
                })

                const guide = this.add.text(
                        100,
                        centerY - 25,
                        this.textDisplay,
                        { font: '18px monospace', color: '#ffffff', align: 'left' }
                );
                // End of Question

                this.clutters();
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

        clutters() {
                const clutter1 = this.add
                        .image(this.config.width - 500, this.config.height - 20, 'clutter1')
                        .setScale(1.5);

                const clutter2 = this.add
                        .image(this.config.width - 600, this.config.height - 100, 'clutter2')
                        .setScale(1.5);

                const clutter3 = this.add
                        .image(this.config.width - 370, this.config.height - 30, 'clutter3')
                        .setScale(1.5);

                const clutter4 = this.add
                        .image(this.config.width - 20, this.config.height - 80, 'clutter4')
                        .setScale(1.5);

                const clutter5 = this.add
                        .image(this.config.width - 80, this.config.height - 70, 'clutter5')
                        .setScale(1.5);

                const clutter6 = this.add
                        .image(this.config.width - 700, this.config.height - 100, 'clutter6')
                        .setScale(1.5);

                const clutter7 = this.add
                        .image(this.config.width - 550, this.config.height - 100, 'clutter7')
                        .setScale(1.5);

                const clutter8 = this.add
                        .image(this.config.width - 260, this.config.height - 120, 'clutter8')
                        .setScale(1.5);

                const clutter9 = this.add
                        .image(this.config.width - 285, this.config.height - 120, 'clutter9')
                        .setScale(1.5);

                const clutter10 = this.add
                        .image(this.config.width - 750, this.config.height - 130, 'clutter10')
                        .setScale(1.5);

                const clutter11 = this.add
                        .image(this.config.width - 770, this.config.height - 110, 'clutter11')
                        .setScale(1.5);

                const clutter12 = this.add
                        .image(this.config.width - 570, this.config.height - 80, 'clutter12')
                        .setScale(1.5);

                const clutter13 = this.add
                        .image(this.config.width - 670, this.config.height - 130, 'clutter13')
                        .setScale(1.5);

                const clutter14 = this.add
                        .image(this.config.width - 650, this.config.height - 80, 'clutter14')
                        .setScale(1.5);

                const clutter15 = this.add
                        .image(this.config.width - 870, this.config.height - 150, 'clutter15')
                        .setScale(1.5);
        }
}

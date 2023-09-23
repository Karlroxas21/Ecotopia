import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';

export class PlayScene4Wrong extends Phaser.Scene {
        constructor() {
                super({ key: 'play-scene4-wrong' });
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

        textDisplay = "Wrong!\n Seaweed and barnacles are natural components of the harbor \nand are not pollutants ";

        create() {
                this.background = this.add.image(0, 0, 'scene4-bg-wrong');
                this.background.setOrigin(0, 0);
    
                this.xButtonSFX = this.sound.add('x-button');
                
                this.failedSFX = this.sound.add('failed');
                this.failedSFX.play();

                for(let i = 0; i < heartPointsService.getHeartPoints(); i++){
                this.heart_icon = this.add.image(770, 30 + i * 30, 'heart-icon');
                }
                if (heartPointsService.getHeartPoints() == 0) {
                        this.scene.start('game-over-scene', { config: this.game.config });
                } else {
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
                                this.scene.start('play-scene4', { config: this.game.config });
                                this.xButtonSFX.play();
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

        }

        override update() {

        }
}

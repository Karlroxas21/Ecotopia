import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';

export class PlayScene2Wrong extends Phaser.Scene {
        constructor() {
                super({ key: 'play-scene2-wrong' });
        }

        config: Phaser.Types.Core.GameConfig | any;
        init(data: { config: Phaser.Types.Core.GameConfig }) {
                this.config = data.config;
        }

        background: any;

        bgMusic: any;

        textDisplay = "Wrong!\nOil drums and plastic bags can contaminate the water \nand harm aquatic life";

        currentHeartPoints = heartPointsService.getHeartPoints();

        create() {
                this.background = this.add.image(0, 0, 'scene2-bg-wrong');
                this.background.setOrigin(0, 0);

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
                        this.scene.start('play-scene3', { config: this.game.config });
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

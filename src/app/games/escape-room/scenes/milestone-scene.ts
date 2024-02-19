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


        textDisplay: any;

        character: any;
        background: any;

        mileStoneMusic: any;

        create() {
                
                this.background = this.add.sprite(550, 300, 'congrats-bg');

                this.anims.create({
                        key: 'bg-sprite',
                        frames: this.anims.generateFrameNames('congrats-bg', {start: 0, end: 3}),
                        frameRate: 10,
                        repeat: -1
                })

                this.background.anims.play('bg-sprite')
                this.character = this.add.image(300, 440, 'character-win');
                this.character.setScale(0.55);

                this.textDisplay = `Congratulations for raising awareness by picking the\ncorrect answer.Learning and spreading the word about\nwater pollution is a crucial step in addressing\nclimate change!`
                // reset score
                scoreService.resetScorePoints();
                scoreService
                this.sound.stopAll();
                // Text
                const centerX = this.config.width / 2;
                const centerY = this.config.height / 2;

                const graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.5); // Color and Alpha
                graphics.fillRect(
                        60,
                        (centerY - this.cameras.main.height / 6 / 2) - 40,
                        this.config.width - 150,
                        this.config.height / 4
                );

                const closeButton = this.add.text(
                        this.config.width / 2,
                        centerY - this.config.height / 6 / 2 + 200,
                        "click here to restart",
                        { font: '18px Arial', color: '#ffffff' }
                );
                closeButton.setOrigin(0.5);
                closeButton.setInteractive();
                closeButton.on('pointerdown', () => {
                        this.scene.start('pre-play-scene', { config: this.game.config });
                        heartPointsService.resetHeartPoints();
                        this.mileStoneMusic.destroy();
                })

                const guide = this.add.text(
                        centerX,
                        centerY - 20,
                        this.textDisplay,
                        { font: '21px monospace', color: '#ffffff', align: 'left' }
                );
                guide.setOrigin(0.5);
                // End of text

                // Text blinking
                this.time.addEvent({
                        delay: 400,
                        callback: () => {
                        closeButton.visible = !closeButton.visible;
                        },
                        loop: true
                });

                this.mileStoneMusic = this.sound.add('milestone');
                this.mileStoneMusic.play();
        }

        override update() {

        }
}

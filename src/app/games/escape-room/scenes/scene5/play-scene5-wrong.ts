import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';
import { scoreService } from '../score-service';

export class PlayScene5Wrong extends Phaser.Scene {
    constructor() {
        super({ key: 'play-scene5-wrong' });
    }

    config: Phaser.Types.Core.GameConfig | any;
    init(data: { config: Phaser.Types.Core.GameConfig }) {
        this.config = data.config;
    }

    background: any;
    character: any;
    flow_sprite: any;

    heart_icon: any;

    bgMusic: any;
    xButtonSFX: any;
    failedSFX: any;

    textDisplay = "Wrong! Incorrect lake ecosystem management decisions can worsen its health and neglect specific ecological challenges, hindering improvement.";

    scoreDisplay: any;

    garbagePosition: any = [];
    garbage: any = [];

    currentHeartPoints = heartPointsService.getHeartPoints();

    create() {
        this.background = this.add.image(0, 0, 'scene5-bg');
        this.background.setOrigin(0, 0);

        this.xButtonSFX = this.sound.add('x-button');

        this.failedSFX = this.sound.add('failed');
        this.failedSFX.play();

        // Garbages from scene 5
        this.garbagePosition = this.registry.get('s5garbage');

        for (let i = 0; i < this.garbagePosition.length; i++) {
            this.add.existing(this.garbagePosition[i]);
            this.garbage.push(this.add.image(this.garbagePosition[i].x, this.garbagePosition[i].y, 's5garbage' + i));
        }

        for (let i = 1; i <= heartPointsService.getHeartPoints(); i++) {
            this.heart_icon = this.add.sprite(770, 10 + i * 50, 'heart-icon');
            this.heart_icon.setScale(0.08);

            this.anims.create({
                key: 'heart-icon_key',
                frames: this.anims.generateFrameNumbers('heart-icon', { start: 0, end: 4 }),
                frameRate: 10,
                repeat: -1
            })

            this.heart_icon.anims.play('heart-icon_key');
        }

        this.scoreDisplay = this.add.text(10, 10, `Score: ${scoreService.getScorePoints()}`, { font: '20px monospace', color: '#ffffff' });
        // Text
        const centerX = this.config.width / 2;
        const centerY = this.config.height / 2;

        const skipButton = this.add.text(
            this.config.width - 90,
            this.config.height / 6 / 2 + 15,
            "Continue",
            { font: '18px Arial', color: '#000000' }
        );
        skipButton.setOrigin(0.5);
        skipButton.setInteractive();
        skipButton.on('pointerdown', () => {
            this.scene.start('milestone-scene', { config: this.game.config });
            this.xButtonSFX.play();
        })

        const guide = this.add.text(
            100,
            centerY - 25,
            '',
            { font: '18px monospace', color: '#000000', align: 'left' }
        );

        let index = 0;
        let startIndexOfSegment = 0;
        while (index < this.textDisplay.length) {
            if (this.textDisplay[index] === ' ' && index - startIndexOfSegment >= 55) {

                guide.text += '\n';
                startIndexOfSegment = index + 1;
            } else {
                guide.text += this.textDisplay[index];
            }
            index++;
        }
        // End of text  


    }

    override update() {

    }
}

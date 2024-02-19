import Phaser from 'phaser';
import { heartPointsService } from './heart-service';
import { scoreService } from './score-service';

export class PlaySceneWrong extends Phaser.Scene {
    constructor() {
        super({ key: 'play-scene-wrong' });
    }

    config: Phaser.Types.Core.GameConfig | any;
    init(data: { config: Phaser.Types.Core.GameConfig }) {
        this.config = data.config;
    }

    background: any;
    flow_sprite: any;

    character: any;

    garbagePosition: any = [];
    garbage: any = [];

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

    failedSFX: any;
    xButtonSFX: any;

    textDisplay = "Time's up! We should focus more on hazardous materials and litters on cleaning up on the beach because they are the one who immediately harm the environment or safety of the beach.";

    scoreDisplay: any;

    currentHeartPoints = heartPointsService.getHeartPoints();

    create() {
        this.background = this.add.image(0, 0, 'scene1-bg');
        this.background.setOrigin(0, 0);

        this.flow_sprite = this.add.sprite(0, 0, 'scene1-sprite');
        this.flow_sprite.setOrigin(0, 0);
        this.anims.create({
            key: 'scene1-sprite-key',
            frames: this.anims.generateFrameNumbers('scene1-sprite', { start: 0, end: 2 }),
            frameRate: 1,
            repeat: -1
        });

        this.flow_sprite.anims.play('scene1-sprite-key');

        this.failedSFX = this.sound.add('failed');
        this.failedSFX.play();

        this.xButtonSFX = this.sound.add('x-button');

        // Push garbages
        for (let i = 0; i < 15; i++) {
        }

        // Garbages from scene 1
        this.garbagePosition = this.registry.get('garbage');

        // TODO: Display the garbages from scene 1
        for (let i = 0; i < this.garbagePosition.length; i++) {
            this.add.existing(this.garbagePosition[i]);
            this.garbage.push(this.add.image(this.garbagePosition[i].x, this.garbagePosition[i].y, 'garbage' + i));
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

        const skipButton = this.add.text(
            this.config.width - 90,
            this.config.height / 6 / 2 + 15,
            "Skip",
            { font: '18px Arial', color: '#000000' }
        );
        skipButton.setOrigin(0.5);
        skipButton.setInteractive();
        skipButton.on('pointerdown', () => {
            this.xButtonSFX.play();
            this.scene.start('pre-play-scene2', { config: this.game.config });
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

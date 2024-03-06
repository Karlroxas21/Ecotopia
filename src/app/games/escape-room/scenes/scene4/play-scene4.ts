import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';
import { scoreService } from '../score-service';
import { environment } from 'src/environments/environment';
import axios from 'axios';

export class PlayScene4 extends Phaser.Scene {
    constructor() {
        super({ key: 'play-scene4' });
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

    scoreDisplay: any;

    gameData: any;

    player: any;

    wasd: any;
    spaceKey: any;
    pickUpText: any;

    cursor: any;

    timer: any;
    timerDisplay: any;
    inventoryText: any;
    basket: any
    basketCount: any;

    garbage: any = [];

    private urlAPI = `${environment.apiUrl}`;

    getRandomQuestion() {
        axios.get(`${this.urlAPI}game_scene4`)
            .then((response) => {
                this.gameData = response.data;
            })
    }

    create() {
        this.background = this.add.image(0, 0, 'scene4-bg');
        this.background.setOrigin(0, 0);

        this.flow_sprite = this.add.sprite(0, -100, 'scene4-sprite');
        this.flow_sprite.setOrigin(0, 0)
        this.anims.create({
            key: 'scene4-sprite-key',
            frames: this.anims.generateFrameNumbers('scene4-sprite', { start: 0, end: 2 }),
            frameRate: 2,
            repeat: -1
        })

        this.flow_sprite.anims.play('scene4-sprite-key');

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

        this.choiceButtonSFX = this.sound.add('choice');

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

        // Call keyboard keys
        this.keyboardKeyRegister();

        // Garbages
        for (let i = 0; i < 15; i++) {
            this.garbage.push(this.add.image(0, 0, 's4garbage' + i))
        }

        // Random position the garbages in a certain area
        for (let i = 0; i < this.garbage.length; i++) {
            this.garbage[i].x = Phaser.Math.Between(10, 790);
            this.garbage[i].y = Phaser.Math.Between(530, 580);
        }

        this.registry.set('s4garbage', this.garbage);

        // Player
        this.player = this.physics.add.sprite(300, 30, 'player').setScale(.1);

        // Enable physics in player and garbage
        this.physics.world.enable([this.player, ...this.garbage]);

        // Add timer function
        this.timer = this.time.delayedCall(30000, () => {
            if (this.garbage.length > 0) {
                heartPointsService.decreaseHeartPoints();
                if (heartPointsService.getHeartPoints() <= 0) {
                    this.scene.start('game-over-scene', { config: this.game.config });
                } else {
                    this.scene.start('play-scene4-wrong', { config: this.game.config });
                }
            }
        }, [], this);

        // Display time
        this.timerDisplay = this.add.text(16, 16, `Time: ${Math.round((30000 - this.timer.getElapsed()) / 1000)}`, {
            fontSize: '32px', color: '#fff'
        });

        //Display Inventory
        this.basket = this.add.image(70, 70, 'garbage-bag');

        this.basketCount = 0;
        this.inventoryText = this.add.text(95, 60, `: 0/15`, {
            fontSize: '32px', color: "#fff"
        });

        const centerX = this.config.width / 2;
        const centerY = this.config.height / 2;

        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.pickUpText = this.add.text(centerX, 120, '', { fontSize: '16px', color: '#fff' }).setOrigin(0.5);

        // Overlap detection for player and garbages
        this.physics.add.overlap(this.player,
            this.garbage, (player, garbage) => {
                if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
                    this.choiceButtonSFX.play();

                    let index = this.garbage.indexOf(garbage);

                    if (index !== -1) {
                        this.garbage.splice(index, 1);
                    }

                    if (this.garbage.length == 0) {
                        this.timer.remove(false);
                        this.scene.start('play-scene4-correct', { config: this.game.config });
                    }

                    garbage.destroy();

                    this.basketCount++;
                    this.inventoryText.setText(`: ${this.basketCount}/15`);

                    this.pickUpText.setText('You picked up a trash, Good Job!');

                    this.tweens.killTweensOf(this.pickUpText);
                    this.pickUpText.setAlpha(1);

                    this.tweens.add({
                        targets: this.pickUpText,
                        alpha: 0,
                        duration: 3000,
                        ease: 'Power2',
                        onComplete: () => {
                            this.pickUpText.setText('');
                        }
                    });
                }
            });
    }

    override update() {
        this.timerDisplay.setText(`Time: ` + Math.round((30000 - this.timer.getElapsed()) / 1000));

        // Lock player move area
        this.player.x = Phaser.Math.Clamp(this.player.x, 10, 790);
        this.player.y = Phaser.Math.Clamp(this.player.y, 500, 580);

        // Update cloud position
        this.cloud1.x += 0.1;
        this.cloud2.x += 0.2;
        this.cloud3.x += 0.3;
        this.cloud4.x += 0.1;
        this.cloud5.x += 0.1;
        this.cloud6.x += 0.1;
        this.cloud7.x += 0.1;
        this.cloud8.x += 0.1;
        this.cloud9.x += 0.1;
        this.cloud0.x += 0.2;

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

        // Check keyboard action
        if (this.cursor.left.isDown || this.wasd.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.setVelocityY(0);
            this.player.anims.play('left', true);
        } else if (this.cursor.right.isDown || this.wasd.right.isDown) {
            this.player.setVelocityX(160);
            this.player.setVelocityY(0);
            this.player.anims.play('right', true);
        }
        else if (this.cursor.up.isDown || this.wasd.up.isDown) {
            this.player.setVelocityY(-160);
            this.player.setVelocityX(0);
            this.player.anims.play('up', true);
        }
        else if (this.cursor.down.isDown || this.wasd.down.isDown) {
            this.player.setVelocityY(160);
            this.player.setVelocityX(0);
            this.player.anims.play('down', true);
        }
        else {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.player.anims.stop();
        }
    }
    keyboardKeyRegister() {

        // Keyboard registry WASD
        this.wasd = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        }

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursor = this.input.keyboard.createCursorKeys();
    }
}



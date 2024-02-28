import Phaser from 'phaser';

export class PrePlayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'pre-play-scene' });
    }

    config: Phaser.Types.Core.GameConfig | any;
    init(data: { config: Phaser.Types.Core.GameConfig }) {
        this.config = data.config;
    }

    background: any;

    shark_spritesheet: any;

    cloud: any;

    bgMusic: any;
    xButtonSFX: any;

    character: any;

    wasd: any;

    guide: any;
    timer: any;

    player: any;
    speech_bubble: any;
    cursor: any;
    game_character: any;

    timerDisplay: any;

    private textDisplay = 'Welcome to Climate Escape! Your mission is to help restore \nnature to its former glory!\n\nAll you need to do is to click the text of the right answers \nto complete the game. Pick 3 wrong answers and it\'\ll be game\nover. Good luck!';

    private scriptDisplay = `You need to clear the waste on every water body to restore the beauty of each scenario and to witness the transformation impact on the aquatic environment.`

    create() {
        this.background = this.add.image(0, 0, 'scene1-bg');
        this.background.setOrigin(0, 0);

        this.game_character = this.physics.add.sprite(100, 460, 'character-npc').setScale(0.20);

        // Make game character immovable
        this.game_character.body.immovable = true;

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

        // Default value: 600, 450
        // Player
        this.player = this.physics.add.sprite(400, 450, 'player').setScale(.1);

        // this.physics.add.overlap(this.player, this.game_character);

        this.player.collidingWithGameCharacter = false;

        this.physics.add.collider(this.player, this.game_character, (player, game_character) => {

            const skipButton = this.add.text(
                this.config.width - 90,
                this.config.height / 6 / 2 + 15,
                "Skip",
                { font: '18px Arial', color: '#000000' }
            );
            skipButton.setOrigin(0.5);
            skipButton.setInteractive();
            skipButton.on('pointerdown', () => {
                this.scene.start('pre2-play-scene', { config: this.game.config });
            })

            if (!this.player.collidingWithGameCharacter) {
                let textToType = this.scriptDisplay;
                let index = 0;
                let startIndexOfSegment = 0;

                this.speech_bubble = this.add.image(290, 300, 'speech-bubble').setScale(0.6);

                const guide = this.add.text(
                    80,
                    centerY - 120,
                    '',
                    { font: '20px monospace', align: 'left', color: '#000000' }
                );

                const typeingTimer = this.time.addEvent({
                    delay: 50,
                    callback: () => {
                        if (index < textToType.length) {
                            if (textToType[index] === ' ' && index - startIndexOfSegment >= 40) {

                                guide.text += '\n';
                                startIndexOfSegment = index + 1;
                            } else {
                                guide.text += textToType[index];
                            }

                            index++;
                        } else {
                            typeingTimer.remove();
                        }
                    },
                    callbackScope: this,
                    loop: true,
                });

                this.player.collidingWithGameCharacter = true;

            }

        });

        // Clouds
        this.cloud = this.add.image(100, 100, 'cloud-1');
        this.cloud.setScale(0.5);

        //Guide
        const centerX = this.config.width / 2;
        const centerY = this.config.height / 2;

        let index = 0;
        const textToType = this.textDisplay;

        this.bgMusic = this.sound.add('bg-music-playing', { loop: true, volume: 0.5 });
        this.bgMusic.play();

    }

    override update() {
        // Update cloud position
        this.cloud.x += 0.1;

        // Reset cloud position when it goes off screen
        if (this.cloud.x > this.config.width + this.cloud.displayWidth / 2) {
            this.cloud.x = -this.cloud.displayWidth / 2;
        }

        this.player.x = Phaser.Math.Clamp(this.player.x, 10, 790);
        this.player.y = Phaser.Math.Clamp(this.player.y, 450, 580)

        // Player
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

    nakakalatNaBasura() {
        // Mga basura
        const basura1 = this.add
            .image(this.config.width - 500, this.config.height - 20, 'basura1')
            .setScale(1.5);
        const basura11 = this.add
            .image(
                this.config.width - 600,
                this.config.height - 100,
                'basura6'
            )
            .setScale(1.5);
        const basura111 = this.add
            .image(
                this.config.width - 370,
                this.config.height - 30,
                'basura7'
            )
            .setScale(1.5);
        const basura2 = this.add
            .image(this.config.width - 20, this.config.height - 80, 'basura2')
            .setScale(1.5);
        const basura22 = this.add
            .image(this.config.width - 80, this.config.height - 70, 'basura8')
            .setScale(1.5);
        const basura3 = this.add
            .image(this.config.width - 700, this.config.height - 100, 'basura3')
            .setScale(1.5);
        const basura33 = this.add
            .image(this.config.width - 550, this.config.height - 100, 'basura9')
            .setScale(1.5);
        const basura4 = this.add
            .image(this.config.width - 260, this.config.height - 120, 'basura4')
            .setScale(1.5);
        const basura44 = this.add
            .image(this.config.width - 285, this.config.height - 120, 'basura10')
            .setScale(1.5);
        const basura5 = this.add
            .image(this.config.width - 750, this.config.height - 140, 'basura5')
            .setScale(1.5);
        const basura55 = this.add
            .image(this.config.width - 770, this.config.height - 110, 'basura5')
            .setScale(1.5);
    }


}

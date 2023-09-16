import Phaser from 'phaser';

export class PrePlayLevel3Scene extends Phaser.Scene {
        constructor() {
                super({ key: 'pre-play-level3-scene' });
        }

        config: Phaser.Types.Core.GameConfig | any;
        init(data: { config: Phaser.Types.Core.GameConfig }) {
                this.config = data.config;
        }

        background: any;

        trees1: any;
        trees2: any;

        fountainSprite: any;

        // b = biodegradable, nb = non-biodegradable, r = recyclable
        bTrashCan: any;
        nbTrashCan: any;
        rTrashCan: any;

        // Biodegradable garbages
        bTrash1: any;
        bTrash2: any;
        bTrash3: any;
        bTrash4: any;
        bTrash5: any;

        // Non-biodegradable garbages
        nbTrash1: any;
        nbTrash2: any;
        nbTrash3: any;
        nbTrash4: any;
        nbTrash5: any;
        nbTrash6: any;
        nbTrash7: any;

        // Recyclable garbages
        rTrash1: any;
        rTrash2: any;
        rTrash3: any;
        rTrash4: any;
        rTrash5: any;
        rTrash6: any;

        bgMusic: any;

        create() {

                this.background = this.add.image(0, 0, 'bg-park');
                this.background.setOrigin(0, 0);

                // Trees
                this.trees1 = this.add.image(130, 500, 'trees-1');
                this.trees2 = this.add.image(630, 500, 'trees-2');
                // Trash cans
                this.bTrashCan = this.add.image(60, 520, 'biodegradable');
                this.bTrashCan.setOrigin(0.5);
                this.bTrashCan.setScale(0.7);

                this.nbTrashCan = this.add.image(170, 520, 'non-biodegradable');
                this.nbTrashCan.setOrigin(0.5);
                this.nbTrashCan.setScale(0.7);

                this.rTrashCan = this.add.image(280, 520, 'recyclable');
                this.rTrashCan.setOrigin(0.5);
                this.rTrashCan.setScale(0.7);

                // Biodegradable trash
                this.bTrash1 = this.add.image(460, 555, 'biodegradable-trash-1')
                        .setScale(1.5);

                this.bTrash2 = this.add.image(675, 570, 'biodegradable-trash-2')
                        .setScale(1.5);

                this.bTrash3 = this.add.image(420, 565, 'biodegradable-trash-3')
                        .setScale(1.5);

                this.bTrash4 = this.add.image(720, 550, 'biodegradable-trash-4')
                        .setScale(1.5);

                this.bTrash5 = this.add.image(550, 575, 'biodegradable-trash-5')
                        .setScale(1.5);

                // Non-Biodegradable trash
                this.nbTrash1 = this.add.image(375, 550, 'non-biodegradable-trash-1')
                        .setScale(1.5);

                this.nbTrash2 = this.add.image(735, 565, 'non-biodegradable-trash-2')
                        .setScale(1.5);

                this.nbTrash3 = this.add.image(500, 555, 'non-biodegradable-trash-3')
                        .setScale(1.5);

                this.nbTrash4 = this.add.image(400, 570, 'non-biodegradable-trash-4')
                        .setScale(1.5);

                this.nbTrash5 = this.add.image(760, 570, 'non-biodegradable-trash-5')
                        .setScale(1.5);

                this.nbTrash6 = this.add.image(480, 565, 'non-biodegradable-trash-6')
                        .setScale(1.5);

                this.nbTrash7 = this.add.image(700, 555, 'non-biodegradable-trash-7')
                        .setScale(1.5);

                // Recylable trash
                this.rTrash1 = this.add.image(650, 575, 'recyclable-trash-1')
                        .setScale(1.5);

                this.rTrash2 = this.add.image(390, 565, 'recyclable-trash-2')
                        .setScale(1.5);

                this.rTrash3 = this.add.image(530, 555, 'recyclable-trash-3')
                        .setScale(1.5);

                this.rTrash4 = this.add.image(410, 575, 'recyclable-trash-4')
                        .setScale(1.5);

                this.rTrash5 = this.add.image(410, 555, 'recyclable-trash-5')
                        .setScale(1.5);

                this.rTrash6 = this.add.image(770, 580, 'recyclable-trash-6')
                        .setScale(1.5);

                this.fountaintSpriteSheet();

                // Guide
                const centerX = this.config.width / 2;
                const centerY = this.config.height / 2;
                const graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.5);
                graphics.fillRect(
                        75,
                        centerY - this.config.height / 6 / 2,
                        this.config.width - 150,
                        this.config.height / 6
                )

                const guide = this.add.text(
                        centerX,
                        centerY,
                        'You need to click the garbages to put in designated trash cans',
                        { font: '22px monospce', color: '#ffffff' }
                );
                guide.setOrigin(0.5);

                // Close button
                const closeButton = this.add.text(
                        this.config.width - 90,
                        centerY - this.config.height / 6 / 2 + 10,
                        'X',
                        { font: '18px monospace', color: '#ffffff'}
                );
                closeButton.setOrigin(0.5);
                closeButton.setInteractive();
                closeButton.on('pointerdown', () =>{
                        graphics.destroy();
                        guide.destroy();
                        closeButton.destroy();
                        // this.bgMusic.destroy();
                        this.scene.start('play-level3-scene', { config: this.game.config });     
                });
                // End of guide
        }

        fountaintSpriteSheet() {
                this.fountainSprite = this.add.sprite(600, 500, 'fountain-sprite')
                        .setScale(0.8);
                this.fountainSprite.play('fountain_sprite_anim')
        }
}
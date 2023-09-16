import Phaser, { GameObjects } from 'phaser';

export class PlayLevel3Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'play-level3-scene' });
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

    this.fountaintSpriteSheet();

    // Trash functions
    this.trashSetInteractiveAndFunctionality();

  }

  fountaintSpriteSheet() {
    this.fountainSprite = this.add.sprite(600, 500, 'fountain-sprite')
      .setScale(0.8);
      
    this.fountainSprite.play('fountain_sprite_anim')
  }

  trashSetInteractiveAndFunctionality() {
    // Biodegradable trash
    const bTrash1 = this.add.image(460, 555, 'biodegradable-trash-1')
      .setScale(1.5)
      .setInteractive();
    bTrash1.on('pointerdown', () => {
      this.tweens.add({
        targets: bTrash1,
        x: 40,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const bTrash2 = this.add.image(675, 570, 'biodegradable-trash-2')
      .setScale(1.5)
      .setInteractive();
    bTrash2.on('pointerdown', () =>{
      this.tweens.add({
        targets: bTrash2,
        x: 65,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const bTrash3 = this.add.image(420, 565, 'biodegradable-trash-3')
      .setScale(1.5)
      .setInteractive();
    bTrash3.on('pointerdown', () =>{
      this.tweens.add({
        targets: bTrash3,
        x: 90,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const bTrash4 = this.add.image(720, 550, 'biodegradable-trash-4')
      .setScale(1.5)
      .setInteractive();
    bTrash4.on('pointerdown', () =>{
      this.tweens.add({
        targets: bTrash4,
        x: 50,
        y: 490,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const bTrash5 = this.add.image(550, 575, 'biodegradable-trash-5')
      .setScale(1.5)
      .setInteractive();
    bTrash5.on('pointerdown', () =>{
      this.tweens.add({
        targets: bTrash5,
        x: 80,
        y: 490,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    // Non-Biodegradable trash
    const nbTrash1 = this.add.image(375, 550, 'non-biodegradable-trash-1')
      .setScale(1.5)
      .setInteractive();
    nbTrash1.on('pointerdown', () =>{
      this.tweens.add({
        targets: nbTrash1,
        x: 150,
        y: 490,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })  

    const nbTrash2 = this.add.image(735, 575, 'non-biodegradable-trash-2')
      .setScale(1.5)
      .setInteractive();
    nbTrash2.on('pointerdown', () =>{
      this.tweens.add({
        targets: nbTrash2,
        x: 170,
        y: 490,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const nbTrash3 = this.add.image(500, 555, 'non-biodegradable-trash-3')
      .setScale(1.5)
      .setInteractive();
    nbTrash3.on('pointerdown', () =>{
      this.tweens.add({
        targets: nbTrash3,
        x: 190,
        y: 490,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const nbTrash4 = this.add.image(600, 570, 'non-biodegradable-trash-4')
      .setScale(1.5)
      .setInteractive();
    nbTrash4.on('pointerdown', () =>{
      this.tweens.add({
        targets: nbTrash4,
        x: 200,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const nbTrash5 = this.add.image(760, 570, 'non-biodegradable-trash-5')
      .setScale(1.5)
      .setInteractive();
    nbTrash5.on('pointerdown', () =>{
      this.tweens.add({
        targets: nbTrash5,
        x: 180,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const nbTrash6 = this.add.image(480, 580, 'non-biodegradable-trash-6')
      .setScale(1.5)
      .setInteractive();
    nbTrash6.on('pointerdown', () =>{
      this.tweens.add({
        targets: nbTrash6,
        x: 160,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })

    const nbTrash7 = this.add.image(700, 555, 'non-biodegradable-trash-7')
      .setScale(1.5)
      .setInteractive();
    nbTrash7.on('pointerdown', () =>{
      this.tweens.add({
        targets: nbTrash7,
        x: 140,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })
    // Recylable trash
    const rTrash1 = this.add.image(650, 575, 'recyclable-trash-1')
      .setScale(1.5)
      .setInteractive();
    rTrash1.on('pointerdown', () =>{
      this.tweens.add({
        targets: rTrash1,
        x: 260,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })
    const rTrash2 = this.add.image(390, 585, 'recyclable-trash-2')
      .setScale(1.5)
      .setInteractive();
    rTrash2.on('pointerdown', () =>{
      this.tweens.add({
        targets: rTrash2,
        x: 285,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })    
    const rTrash3 = this.add.image(530, 555, 'recyclable-trash-3')
      .setScale(1.5)
      .setInteractive();
    rTrash3.on('pointerdown', () =>{
      this.tweens.add({
        targets: rTrash3,
        x: 310,
        y: 510,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })
    const rTrash4 = this.add.image(410, 545, 'recyclable-trash-4')
      .setScale(1.5)
      .setInteractive();
    rTrash4.on('pointerdown', () =>{
      this.tweens.add({
        targets: rTrash4,
        x: 260,
        y: 485,
        duration: 500,
        ease: 'Quad.easeOut'
      })
    })
    const rTrash5 = this.add.image(445, 540, 'recyclable-trash-5')
      .setScale(1.5)
      .setInteractive();
    rTrash5.on('pointerdown', () =>{
          this.tweens.add({
            targets: rTrash5,
            x: 285,
            y: 485,
            duration: 500,
            ease: 'Quad.easeOut'
          })
        })    
    const rTrash6 = this.add.image(780, 580, 'recyclable-trash-6')
      .setScale(1.5)
      .setInteractive();
    rTrash6.on('pointerdown', () =>{
          this.tweens.add({
            targets: rTrash6,
            x: 310,
            y: 485,
            duration: 500,
            ease: 'Quad.easeOut'
          })
    })
  }
}

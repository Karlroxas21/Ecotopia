import Phaser from 'phaser';

export class PrePlayScene4 extends Phaser.Scene {
  constructor() {
    super({ key: 'pre-play-scene4' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;

  bgMusic: any;
  choiceButton: any;

  character: any;

  scriptDisplay = "As one of the many places that nature and humans meet in\nthe middle, there is no wonder why it is also full of trash.\n\nWhat should you focus on picking up to improve the\nharbor environment?";

  create() {
    this.background = this.add.image(0, 0, 'scene4-bg');
    this.background.setOrigin(0, 0);

    this.choiceButton = this.sound.add('choice');

    // Question
    const centerX = (this.config.width / 2) - 40;
    const centerY = 100;
    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    graphics.fillRect(
      75,
      250,
      this.config.width - 150,
      (this.config.height / 5) + 30
    );

    const guide = this.add.text(
      centerX + 30,
      300 + 10,
      '',
      { font: '18px monospace', color: '#ffffff' }
    );
    guide.setOrigin(0.5);
    // End of Question

    let index = 0;
    const textToType = this.scriptDisplay;

    const typeingTimer = this.time.addEvent({
      delay: 50,
      callback: () =>{
        guide.text += textToType[index];
        index++;

        if(index === textToType.length){
          typeingTimer.remove();
        }
      },
      callbackScope: this,
      loop: true,
    })

    // Finish text display when user click
    this.input.on('pointerdown', ()=>{
      guide.text = textToType;
      typeingTimer.remove();
    })

    this.character = this.add.sprite(150, -100, 'character');
    this.character.setScale(0.5);

    this.anims.create({
      key: 'character_key',
      frames: this.anims.generateFrameNumbers('character', {start: 0, end: 6}),
      frameRate: 10,
      repeat: -1
    })

    const timeline = this.tweens.createTimeline();

    timeline.add({
      targets: this.character,
      y: 480,
      ease: 'Linear',
      duration: 1000,
      onComplete: () =>{
        this.character.anims.play('character_key')
      },
    });

    timeline.play();

    const closeButton = this.add.text(
        this.config.width -140,
        centerY - this.config.height / 6 / 2 + 330,
        'continue',
        { font: '18px monospace', color: '#ffffff' }
      );
      closeButton.setOrigin(0.5);
      closeButton.setInteractive();
      closeButton.on('pointerdown', () => {
        graphics.destroy();
        guide.destroy();
        closeButton.destroy();
        this.character.destroy();
        this.scene.start('play-scene4', { config: this.game.config });
        this.choiceButton = this.sound.add('x-button');
        this.choiceButton.play();
      });
    
  }

  override update() {
 
  }
}
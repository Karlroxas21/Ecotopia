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
  game_character: any;
  player: any;

  garbage: any = [];

  scriptDisplay = "Your almost done with your mission! Beneath the clear blue sky, you're captivated by a bustling harbor from a scenic overlook. Ships come and go, their horns echoing across the water, yet a subtle layer of pollution mars the otherwise breathtaking view.";

  create() {
    this.background = this.add.image(0, 0, 'scene4-bg');
    this.background.setOrigin(0, 0);

    this.choiceButton = this.sound.add('choice');

    // Question
    const centerX = this.config.width / 2;
    const centerY = this.config.height / 2;

    const skipButton = this.add.text(
      this.config.width - 90,
      this.config.height / 6 / 2 + 15,
      "Skip",
      { font: '18px Arial', color: '#ffffff' });
    skipButton.setOrigin(0.5);
    skipButton.setInteractive();
    skipButton.on('pointerdown', () => {
          this.scene.start('play-scene2', { config: this.game.config });
    });

    const guide = this.add.text(
      100,
      centerY - 25,
      '',
      { font: '20px monospace', align:'left', color: '#FFFFFF' }
    );
    // End of Question

    let index = 0;
    let startIndexOfSegment = 0;
    const textToType = this.scriptDisplay;

    const typeingTimer = this.time.addEvent({
      delay: 50,
      callback: () =>{
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

    this.character = this.add.sprite(150, 450, 'character');
    this.character.setScale(0.5);

    this.anims.create({
      key: 'character_key',
      frames: this.anims.generateFrameNumbers('character', {start: 0, end: 6}),
      frameRate: 10,
      repeat: -1
    })
    this.character.anims.play('character_key');
    
  }

  override update() {
 
  }
}

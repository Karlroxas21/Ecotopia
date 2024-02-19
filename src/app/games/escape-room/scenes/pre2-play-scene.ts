import Phaser from 'phaser';

export class Pre2PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'pre2-play-scene' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;

  shark_spritesheet: any;

  cloud: any;

  basura1: any;
  basura11: any;
  basura111: any;
  basura2: any;
  basura22: any;
  basura3: any;
  basura33: any;
  basura4: any;
  basura44: any;
  basura5: any;
  basura55: any;

  bgMusic: any;

  xButtonSFX: any;

  character: any;

  guide: any;
  timer: any;


  private textDisplay2 = `You are standing on a pristine beach. As you survey the landscape,you notice the entire beach is covered in litter, a clear contrast to the natural beauty that surrounds them.`
  
  create() {
    this.background = this.add.image(0, 0, 'scene1-bg');
    this.background.setOrigin(0, 0);

    // Clouds
    this.cloud = this.add.image(100, 100, 'cloud-1');
    this.cloud.setScale(0.5);

    //Guide
    const centerX = this.config.width / 2;
    const centerY = this.config.height / 2;

    const guide = this.add.text(
      100 ,
      centerY - 100,
      '',
      { font: '20px monospace', align: 'left', color: '#ffffff' }
    );

    let index = 0;
    let startIndexOfSegment = 0;
    while (index < this.textDisplay2.length) {
            if (this.textDisplay2[index] === ' ' && index - startIndexOfSegment >= 55) {
              
              guide.text += '\n';
              startIndexOfSegment = index + 1;
            } else {
              guide.text += this.textDisplay2[index];
            }
            index++;
    } 

    this.character = this.add.sprite(150, 380, 'character');
    this.character.setScale(0.5);

    this.anims.create({
      key: 'character_key',
      frames: this.anims.generateFrameNumbers('character', {start: 0, end: 2}),
      frameRate: 10,
      repeat: -1
    })

    this.character.anims.play('character_key');
    
//     const timeline = this.tweens.createTimeline();

//     timeline.add({
//       targets: this.character,
//       x: 150,
//       ease: 'Linear',
//       duration: 1000,
//       onComplete: () =>{
//         this.character.anims.play('character_key')
//       },
//     });

//     timeline.play();

    // Close button
    const closeButton = this.add.text(
      this.config.width - 90,
      centerY - this.config.height / 6 / 2 + 150,
      'continue',
      { font: '18px monospace', color: '#ffffff' }
    );
    closeButton.setOrigin(0.5);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      // graphics.destroy();
      guide.destroy();
      this.character.destroy();
      closeButton.destroy();
      this.scene.start('play-scene', { config: this.game.config }); // temporary 
      this.xButtonSFX = this.sound.add('x-button');
      this.xButtonSFX.play();

    });
    // End of Guide

  }

  override update() {
    // Update cloud position
    this.cloud.x += 0.1;

    // Reset cloud position when it goes off screen
    if (this.cloud.x > this.config.width + this.cloud.displayWidth / 2) {
      this.cloud.x = -this.cloud.displayWidth / 2;
    }
  }

  // Scene 1 script
  // sceneOneScript(){
  //   const centerX = this.config.width / 2;
  //   const centerY = this.config.height / 2;
  //   const guideS1 = this.add.text(
  //     centerX,
  //     centerY - 30,
  //     '',
  //     { font: '20px monospace', color: '#ffffff' }
  //   );
  //   guideS1.setOrigin(0.5);

  //   let index = 0;
  //   const textToType = this.textDisplay2;

  //   const typeingTimer = this.time.addEvent({
  //     delay: 50,
  //     callback: () =>{
  //       guideS1.text += textToType[index];
  //       index++;

  //       if(index === textToType.length){
  //         typeingTimer.remove();
  //       }
  //     },
  //     callbackScope: this,
  //     loop: true,
  //   })

  //   // Finish text display when user click
  //   this.input.on('pointerdown', ()=>{
  //     guideS1.text = textToType;
  //     typeingTimer.remove();
  //   })

  //   // Close button
  //   const closeButton = this.add.text(
  //     this.config.width - 90,
  //     centerY - this.config.height / 6 / 2 + 150,
  //     'continue',
  //     { font: '18px monospace', color: '#ffffff' }
  //   );
  //   closeButton.setOrigin(0.5);
  //   closeButton.setInteractive();
  //   closeButton.on('pointerdown', () => {
  //     // graphics.destroy();
  //     guideS1.destroy();
  //     closeButton.destroy();
  //     this.scene.start('play-scene', { config: this.game.config });
  //     this.xButtonSFX = this.sound.add('x-button');
  //     this.xButtonSFX.play();

  //   });
  // }

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

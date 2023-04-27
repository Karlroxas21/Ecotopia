import Phaser from 'phaser';

export class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'play-scene' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;
  shark_spritesheet: any;
  cloud: any;
  cloud2: any;
  cloud3: any;
  cloud4: any;
  cloud5: any;
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
  pickUpSFX: any;

  bgMusic: any;
  // if all garbage is napulot na
  garbageCount: number = 11;

  timer: any;
  timerText: any;

  create() {
    this.background = this.add.image(0, 0, 'level-1-bg');
    this.background.setOrigin(0, 0);

    // Clouds
    this.cloud = this.add.image(0, 200, 'cloud-shits');
    this.cloud.setScale(0.5);
    this.cloud2 = this.add.image(100, 100, 'cloud-shits1');
    this.cloud2.setScale(0.3);
    this.cloud3 = this.add.image(500, 200, 'cloud-shits2');
    this.cloud3.setScale(0.2);
    this.cloud4 = this.add.image(400, 100, 'cloud-shits3');
    this.cloud4.setScale(0.4);
    this.cloud5 = this.add.image(600, 200, 'cloud-shits');
    this.cloud5.setScale(0.5);
    
    // BG Music
    this.bgMusic = this.sound.add('seaMusic', {volume: 0.2});
    this.bgMusic.play();

    // SFX
    this.pickUpSFX = this.sound.add('pickUpSFX');

    this.nakakalatNaBasura();
    
    // If win
    this.events.on('win', this.winGraphics,  this);

    // Timer
    this.timer = this.time.delayedCall(10000, this.gameOverGraphics, [], this);
    this.timerText = this.add.text(10, 10, '', {
       font: '16px monospace', 
       color: '#ffffff' 
      });
  }

  override update() {
    // Timer
    const remainingTime = Math.ceil((this.timer.delay - this.timer.elapsed) / 1000);
    // Update text
    this.timerText.setText(`Time remaining: ${remainingTime}`);
    // Update cloud position
    this.cloud.x += 0.1;
    this.cloud2.x += 0.1;
    this.cloud3.x += 0.1;
    this.cloud4.x += 0.1;
    this.cloud5.x += 0.1;

    // Reset cloud position when it goes off screen
    if (this.cloud.x > this.config.width + this.cloud.displayWidth / 2) {
      this.cloud.x = -this.cloud.displayWidth / 2;
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

    // If napulot ang lahat ng basura
    if(this.isAllGarbagePickedUp()){
      this.events.emit('win');
    }
  }

  nakakalatNaBasura() {
    // Mga basura
    const basura1 = this.add
      .image(this.config.width - 500, this.config.height - 20, 'basura1')
      .setScale(1.5);
    basura1.setInteractive();
    basura1.on('pointerdown', () => {
      basura1.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura11 = this.add
      .image(this.config.width - 600, this.config.height - 100, 'basura6')
      .setScale(1.5);
    basura11.setInteractive();
    basura11.on('pointerdown', () => {
      basura11.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura111 = this.add
      .image(this.config.width - 370, this.config.height - 30, 'basura7')
      .setScale(1.5);
    basura111.setInteractive();
    basura111.on('pointerdown', () => {
      basura111.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura2 = this.add
      .image(this.config.width - 20, this.config.height - 80, 'basura2')
      .setScale(1.5);
    basura2.setInteractive();
    basura2.on('pointerdown', () => {
      basura2.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura22 = this.add
      .image(this.config.width - 80, this.config.height - 70, 'basura8')
      .setScale(1.5); // this will be replace
    basura22.setInteractive();
    basura22.on('pointerdown', () => {
      basura22.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura3 = this.add
      .image(this.config.width - 700, this.config.height - 100, 'basura3')
      .setScale(1.5);
    basura3.setInteractive();
    basura3.on('pointerdown', () => {
      basura3.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura33 = this.add
      .image(this.config.width - 550, this.config.height - 100, 'basura9')
      .setScale(1.5); // this will be replace
    basura33.setInteractive();
    basura33.on('pointerdown', () => {
      basura33.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura4 = this.add
      .image(this.config.width - 260, this.config.height - 120, 'basura4')
      .setScale(1.5);
    basura4.setInteractive();
    basura4.on('pointerdown', () => {
      basura4.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura44 = this.add
      .image(this.config.width - 285, this.config.height - 120, 'basura10')
      .setScale(1.5); // this will be replace
    basura44.setInteractive();
    basura44.on('pointerdown', () => {
      basura44.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura5 = this.add
      .image(this.config.width - 750, this.config.height - 140, 'basura5')
      .setScale(1.5);
    basura5.setInteractive();
    basura5.on('pointerdown', () => {
      basura5.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
    const basura55 = this.add
      .image(this.config.width - 770, this.config.height - 110, 'basura5')
      .setScale(1.5); // this will be replace
    basura55.setInteractive();
    basura55.on('pointerdown', () => {
      basura55.destroy();
      this.garbageCount -= 1;
      // Tutunog yung SFX kapag kinilick na yung basura
      this.pickUpSFX.play();
    });
  }

  winGraphics(){
    // Cancel timer
    if(this.timer){
      this.timer.remove(false);
    }
    // Succesfully picked up all basuras
    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    graphics.fillRect(
      this.config.width - 660,
      this.config.height / 2 - this.config.height / 6 / 2,
      this.config.width - 300,
      this.config.height / 4
    );

    const fact =
      'Did you know that in 2019 over 9.2 million \ngarbage per day produce in Metro Manila, \nsome end up in Manila Bay.';
    const congrats = this.add
      .text(
        this.config.width / 2,
        this.config.height / 2 + 10,
        'Congratulations, you clean the sea! \n\n' + fact,
        { font: '18px monospace', color: '#ffffff' }
      )
      .setOrigin(0.5);

    // Close button
    const closeButton = this.add.text(
      this.config.width - 180,
      this.config.height / 2 - this.config.height / 6 / 2 + 15,
      'X',
      { font: '18px monospace', color: '#ffffff' }
    );
    closeButton.setOrigin(0.5);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      congrats.destroy();
      graphics.destroy();
      closeButton.destroy();
      this.bgMusic.destroy();
      this.scene.start('play-level2-scene', { config: this.game.config });
    });

    this.nextLevel();
    
  }

  gameOverGraphics(){
    // Game Over
    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    graphics.fillRect(
      this.config.width - 660,
      this.config.height / 2 - this.config.height / 6 / 2,
      this.config.width - 300,
      this.config.height / 5
    );

    const congrats = this.add
      .text(
        this.config.width / 2,
        this.config.height / 2 + 10,
        'Game over!',
        { font: '18px monospace', color: '#ffffff' }
      )
      .setOrigin(0.5);

    const restartButton = this.add.text(
      this.config.width - 80,
      20,
      'Restart',
      { font: '18px monospace', color: '#ffffff' }
    );
    restartButton.setOrigin(0.5);
    restartButton.setInteractive();
    restartButton.on('pointerdown', () => {
      this.bgMusic.destroy();
      this.scene.restart();
      this.garbageCount = 0;
      this.garbageCount = 11;
      this.timer.reset();
    });

    // Quit button
    const quitButton = this.add.text(
      this.config.width - 80, 
      60,
      'Quit',
      { font: '18px monospace', color: '#ffffff' }
    );
    quitButton.setOrigin(0.5);
    quitButton.setInteractive();
    quitButton.on('pointerdown', () => {
      congrats.destroy();
      graphics.destroy();
      quitButton.destroy();
      this.bgMusic.destroy();
      this.garbageCount = 0;
      this.garbageCount = 11;
      this.timer.reset();
      this.scene.start('default-scene', { config: this.game.config });
    });

  }

  isAllGarbagePickedUp(): boolean {
    if (this.garbageCount === 0) {
      return true;
    }
    return false;
  }

  nextLevel(){
    const nextLevelTxt = this.add.text(
      this.config.width - 170, 
      this.config.height - 210, 
      'Next Level', 
      { font: '20px monospace', color: '#ffffff' });

      nextLevelTxt.setOrigin(1, 1);
      nextLevelTxt.setInteractive();
      nextLevelTxt.on('pointerdown', ()=>{
        nextLevelTxt.destroy();
        this.bgMusic.destroy();
        this.scene.start('pre-play-level2-scene', { config: this.game.config });
      })
  }
}

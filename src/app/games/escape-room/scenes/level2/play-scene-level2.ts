import Phaser, { GameObjects } from 'phaser';

export class PlayLevel2Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'play-level2-scene' });
  }

  background: any;
  cityBldg: any;
  cityRoad: any;

  jeep: any;
  jeep2: any;
  jeep3: any;
  jeep4: any;
  jeep5: any;
  jeep6: any;
  jeep7: any;
  jeep8: any;
  jeep9: any;
  jeep10: any;

  replacementJeep1: any;
  replacementJeep2: any;
  replacementJeep3: any;
  replacementJeep4: any;
  replacementJeep5: any;
  replacementJeep6: any;
  replacementJeep7: any;
  replacementJeep8: any;
  replacementJeep9: any;
  replacementJeep10: any;

  numberOfJeep: number = 10;
  timer: any;
  timerText: any;

  // BG Music
  bgMusic: any;
  lvl2PickUpSFX: any;

  nextLevel2Txt: any;

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  create() {
    this.background = this.add.tileSprite(
      0,
      0,
      this.config.width,
      this.config.height,
      'cityBg'
    );
    this.background.setOrigin(0, 0);
    this.cityBldg = this.add.tileSprite(
      0,
      0,
      this.config.width,
      this.config.height,
      'cityBldg'
    );
    this.cityBldg.setOrigin(0, 0);
    this.cityRoad = this.add.tileSprite(
      0,
      0,
      this.config.width,
      this.config.height,
      'cityRoad'
    );
    this.cityRoad.setOrigin(0, 0);

    // BG Music
    this.bgMusic = this.sound.add('lvl2BgMusic', {volume: 0.2});
    this.bgMusic.play();

    //SFX
    this.lvl2PickUpSFX = this.sound.add('lvl2PickUpSFX');

    this.jeepSetInteractiveAndFunctionality();

    // If win
    this.events.on('win', this.winGraphics,  this);

    // Timer
    this.timer = this.time.delayedCall(43000, this.gameOverGraphics, [], this);

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
    // move Jeep
    this.moveJeep(this.jeep, 2);
    this.moveJeep(this.jeep2, 2);
    this.moveJeep(this.jeep3, 2);
    this.moveJeep(this.jeep4, 2);
    this.moveJeep(this.jeep5, 2);
    this.moveJeep(this.jeep6, 2);
    this.moveJeep(this.jeep7, 2);
    this.moveJeep(this.jeep8, 2);
    this.moveJeep(this.jeep9, 2);
    this.moveJeep(this.jeep10, 2);

    // Move Background, Building, and Road
    this.moveBackgrounds();

    // Move replacement jeep
    this.moveNewJeep(this.replacementJeep1, 2);
    this.moveNewJeep(this.replacementJeep2, 2);
    this.moveNewJeep(this.replacementJeep3, 2);
    this.moveNewJeep(this.replacementJeep4, 2);
    this.moveNewJeep(this.replacementJeep5, 2);
    this.moveNewJeep(this.replacementJeep6, 2);
    this.moveNewJeep(this.replacementJeep7, 2);
    this.moveNewJeep(this.replacementJeep8, 2);
    this.moveNewJeep(this.replacementJeep9, 2);
    this.moveNewJeep(this.replacementJeep10, 2);

    // If naclick na lahat ng outdated jeeps
    if(this.isAllJeepClicked()){
      this.events.emit('win');
    }
  }

  moveJeep(jeep: Phaser.GameObjects.Sprite, speed: number) {
    jeep.x += speed;
  }

  moveNewJeep(jeep: Phaser.GameObjects.Sprite, speed: number){
    if(jeep){
      jeep.x += speed;
    }
  }

  moveBackgrounds() {
    this.cityBldg.tilePositionX -= -0.5;
    this.cityRoad.tilePositionX -= -0.5;
    this.background.tilePositionX -= -0.5;
  }

  jeepSetInteractiveAndFunctionality() {
    // Jeep
    this.jeep = this.add.sprite(-3400, 520, 'jeep');
    this.jeep.play('jeep_anim');
    this.jeep.setInteractive();
    this.jeep.on('pointerdown', () => {
      this.replacementJeep1 = this.add.sprite(this.jeep.x, this.jeep.y, 'newJeep');
      this.jeep.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep1.play('jeep_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 2
    this.jeep2 = this.add.sprite(-3100, 530, 'jeep2');
    this.jeep2.play('jeep_anim2');
    this.jeep2.setInteractive();
    this.jeep2.on('pointerdown', () => {
      this.replacementJeep2 = this.add.sprite(this.jeep2.x, this.jeep2.y, 'newJeep2');
      this.jeep2.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep2.play('jeep2_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 3
    this.jeep3 = this.add.sprite(-2800, 510, 'jeep3');
    this.jeep3.play('jeep_anim3');
    this.jeep3.setInteractive();
    this.jeep3.on('pointerdown', () => {
      this.replacementJeep3 = this.add.sprite(this.jeep3.x, this.jeep3.y, 'newJeep3');
      this.jeep3.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep3.play('jeep3_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 4
    this.jeep4 = this.add.sprite(-2500, 500, 'jeep4');
    this.jeep4.play('jeep_anim4');
    this.jeep4.setInteractive();
    this.jeep4.on('pointerdown', () => {
      this.replacementJeep4 = this.add.sprite(this.jeep4.x, this.jeep4.y, 'newJeep4');
      this.jeep4.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep4.play('jeep4_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 5
    this.jeep5 = this.add.sprite(-2200, 515, 'jeep5');
    this.jeep5.play('jeep_anim5');
    this.jeep5.setInteractive();
    this.jeep5.on('pointerdown', () => {
      this.replacementJeep5 = this.add.sprite(this.jeep5.x, this.jeep5.y, 'newJeep5');
      this.jeep5.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep5.play('jeep5_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 6
    this.jeep6 = this.add.sprite(-1800, 520, 'jeep6');
    this.jeep6.play('jeep_anim');
    this.jeep6.setInteractive();
    this.jeep6.on('pointerdown', () => {
      this.replacementJeep6 = this.add.sprite(this.jeep6.x, this.jeep6.y, 'newJeep6');
      this.jeep6.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep6.play('jeep_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 7
    this.jeep7 = this.add.sprite(-1300, 530, 'jeep7');
    this.jeep7.play('jeep_anim2');
    this.jeep7.setInteractive();
    this.jeep7.on('pointerdown', () => {
      this.replacementJeep7 = this.add.sprite(this.jeep7.x, this.jeep7.y, 'newJeep7');
      this.jeep7.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep7.play('jeep2_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 8
    this.jeep8 = this.add.sprite(-900, 510, 'jeep8');
    this.jeep8.play('jeep_anim3');
    this.jeep8.setInteractive();
    this.jeep8.on('pointerdown', () => {
      this.replacementJeep8 = this.add.sprite(this.jeep8.x, this.jeep8.y, 'newJeep8');
      this.jeep8.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep8.play('jeep3_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 9
    this.jeep9 = this.add.sprite(-400, 500, 'jeep9');
    this.jeep9.play('jeep_anim4');
    this.jeep9.setInteractive();
    this.jeep9.on('pointerdown', () => {
      this.replacementJeep9 = this.add.sprite(this.jeep9.x, this.jeep9.y, 'newJeep9');
      this.jeep9.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep9.play('jeep4_wala_usok_anim');
      this.lvl2PickUpSFX.play();
    });
    // Jeep 10
    this.jeep10 = this.add.sprite(0, 515, 'jeep10');
    this.jeep10.play('jeep_anim5');
    this.jeep10.setInteractive();
    this.jeep10.on('pointerdown', () => {
      this.replacementJeep10 = this.add.sprite(this.jeep10.x, this.jeep10.y, 'newJeep10');
      this.jeep10.destroy();
      this.numberOfJeep -= 1;
      this.replacementJeep10.play('jeep5_wala_usok_anim');
      this.lvl2PickUpSFX.play();
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
      this.config.width - 720,
      this.config.height / 2 - this.config.height / 6 / 2,
      this.config.width - 180,
      this.config.height / 4
    );

    const fact =
      'Did you know that more than 500,000 jeep and other vehicles \nin Metro Manila, produce 70% of black carbon emissions \nin Philippines.';
    const congrats = this.add
      .text(
        this.config.width / 2,
        this.config.height / 2 + 10,
        'Congratulations, you modernized the Jeepneys! \n\n' + fact,
        { font: '18px monospace', color: '#ffffff' }
      )
      .setOrigin(0.5);

    // Close button
    const closeButton = this.add.text(
      this.config.width - 120,
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
      this.scene.start('', { config: this.game.config });
    });

    this.nextLevel();
    
  }

  gameOverGraphics(){
    this.jeep.destroy();
    this.jeep2.destroy();
    this.jeep3.destroy();
    this.jeep4.destroy();
    this.jeep5.destroy();

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
      this.numberOfJeep = 0;
      this.numberOfJeep = 10;
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
      this.numberOfJeep = 0;
      this.numberOfJeep = 10;
      this.timer.reset();
      this.scene.start('default-scene', { config: this.game.config });
    });

  }

  isAllJeepClicked(): boolean {
    if (this.numberOfJeep === 0) {
      return true;
    }
    return false;
  }

  nextLevel(){
    this.nextLevel2Txt = this.add.text(
      this.config.width - 110, 
      this.config.height - 210, 
      'Next Level', 
      { font: '20px monospace', color: '#ffffff' });

      this.nextLevel2Txt.setOrigin(1, 1);
      this.nextLevel2Txt.setInteractive();
      this.nextLevel2Txt.on('pointerdown', ()=>{
        this.nextLevel2Txt.destroy();
        this.bgMusic.destroy();
        this.scene.start('play-level3-scene', { config: this.game.config });
      })
  }
}

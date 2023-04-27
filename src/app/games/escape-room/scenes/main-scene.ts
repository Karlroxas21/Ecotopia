import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  background: any;

  preload() {
    // Background in default scene
    this.load.image(
      'default-scene-bg',
      '../../../../assets/background/climate-escape-background.png'
    );

    // Level 1 Assets
    // BG
    this.load.image('level-1-bg', '../../../../assets/lvl1/sea-bg.png');
    // Shark
    this.load.image('shark', '../../../../assets/lvl1/shark_spritesheet.png');
    // Cloud
    this.load.image('cloud-shits', '../../../../assets/lvl1/cloud.png');
    this.load.image('cloud-shits1', '../../../../assets/lvl1/clouds1.1.png');
    this.load.image('cloud-shits2', '../../../../assets/lvl1/clouds1.2.png');
    this.load.image('cloud-shits3', '../../../../assets/lvl1/clouds1.3.png');
    // Mga basura ng mga dugyot
    this.load.image('basura1', '../../../../assets/lvl1/basura1.png');
    this.load.image('basura2', '../../../../assets/lvl1/basura2.png');
    this.load.image('basura3', '../../../../assets/lvl1/basura3.png');
    this.load.image('basura4', '../../../../assets/lvl1/basura4.png');
    this.load.image('basura5', '../../../../assets/lvl1/basura5.png');
    this.load.image('basura6', '../../../../assets/lvl1/basura6.png');
    this.load.image('basura7', '../../../../assets/lvl1/basura7.png');
    this.load.image('basura8', '../../../../assets/lvl1/basura8.png');
    this.load.image('basura9', '../../../../assets/lvl1/basura9.png');
    this.load.image('basura10', '../../../../assets/lvl1/basura10.png');
    // Background Image for some Trivia
    this.load.image('trivia1', '../../../../assets/bg-popup.png');
    // Audio for Level 1 Sea Scene
    this.load.audio(
      'seaMusic',
      '../../../../assets/music/Tropical 8-bit Chiptune ｜ Background Music.mp3'
    );
    // Pick up basura SFX
    this.load.audio('pickUpSFX', '../../../../assets/music/pick-upsuccess.mp3');
    // BG Music sa main scene
    this.load.audio(
      'mainSceneSFX',
      '../../../../assets/music/kawai-kitsune.mp3'
    );

    // LEVEL 2
    // Background
    this.load.image('cityBg', '../../../../assets/lvl2/city_bg.png');
    // Building
    this.load.image('cityBldg', '../../../../assets/lvl2/city_bldg.png');
    // Asphalt
    this.load.image('cityRoad', '../../../../assets/lvl2/road.png');
    // Jeep
    this.load.spritesheet('jeep', '../../../../assets/lvl2/jeep_spritesheet.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep2
    this.load.spritesheet('jeep2', '../../../../assets/lvl2/jeep_spritesheet2.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep3
    this.load.spritesheet('jeep3', '../../../../assets/lvl2/jeep_spritesheet3.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep4
    this.load.spritesheet('jeep4', '../../../../assets/lvl2/jeep_spritesheet4.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep5
    this.load.spritesheet('jeep5', '../../../../assets/lvl2/jeep_spritesheet5.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep6
    this.load.spritesheet('jeep6', '../../../../assets/lvl2/jeep_spritesheet6.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep7
    this.load.spritesheet('jeep7', '../../../../assets/lvl2/jeep_spritesheet7.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep8
    this.load.spritesheet('jeep8', '../../../../assets/lvl2/jeep_spritesheet8.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep9
    this.load.spritesheet('jeep9', '../../../../assets/lvl2/jeep_spritesheet9.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Jeep10
    this.load.spritesheet('jeep10', '../../../../assets/lvl2/jeep_spritesheet10.png', {
      frameWidth: 306,
      frameHeight: 300
    });

    // New Jeep
    this.load.spritesheet('newJeep', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep2', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet2_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep3', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet3_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep4', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet4_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep5', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet5_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep6', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet6_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep7', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet7_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep8', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet8_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep9', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet9_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    this.load.spritesheet('newJeep10', '../../../../assets/lvl2/walang-usok-baby/jeep_spritesheet10_walang_usok.png', {
      frameWidth: 306,
      frameHeight: 300
    });
    // Audio for Level 2
    this.load.audio(
    'lvl2BgMusic',
    '../../../../assets/lvl2/What Is Love 8 Bit Universe.mp3'
    );
    // Pick up basura SFX
    this.load.audio('lvl2PickUpSFX', '../../../../assets/lvl2/clickjeep.mp3');

    // Loading bar
    let loadingBar = this.add.graphics({
      fillStyle: { color: 0xffffff },
    });

    // Height and Width of game screen
    const screenHeight = this.game.renderer.height;
    const screenWidth = this.game.renderer.width;

    // Loading bar size and position
    const loadingBarWidth = screenWidth * 0.5;
    const loadingBarHeight = 50;
    const loadingBarX = (screenWidth - loadingBarWidth) / 2; // X Coords
    const loadingBarY = (screenHeight - loadingBarHeight) / 2; // Y Coords

    loadingBar.fillRect(
      loadingBarX,
      loadingBarY,
      loadingBarWidth,
      loadingBarHeight
    );

    // Text below loading bar and load arcade custom font
    const loadingText = this.add.text(
      screenWidth / 2,
      loadingBarY + loadingBarHeight + 20, // Below loading bar
      'Loading game...',
      { font: '18px monospace', color: '#ffffff' }
    );

    // Origin of the text to center
    loadingText.setOrigin(0.5);

    this.load.on('progress', (percent: number) => {
      // Update loading bar based on the progress
      loadingBar.clear();
      loadingBar.fillStyle(0xffffff, 1);
      loadingBar.fillRect(
        loadingBarX,
        loadingBarY,
        loadingBarWidth * percent, // Update width based on the progress of loading bar
        loadingBarHeight
      );
    });

    // Uncomment this when done in level 1!
    this.load.on('complete', () => {
      this.scene.start('default-scene', { config: this.game.config });
    });

    // Temporary to see Level 2 Scene Fast.
    // this.load.on('complete', () => {
    //   this.scene.start('pre-play-level2-scene', { config: this.game.config });
    // });
  }

  create() {
    // Jeep1 animation
    this.anims.create({
      key: 'jeep_anim',
      frames: this.anims.generateFrameNumbers('jeep', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
     // Jeep2 animation
     this.anims.create({
      key: 'jeep_anim2',
      frames: this.anims.generateFrameNumbers('jeep2', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
     // Jeep3 animation
     this.anims.create({
      key: 'jeep_anim3',
      frames: this.anims.generateFrameNumbers('jeep3', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
     // Jeep4 animation
     this.anims.create({
      key: 'jeep_anim4',
      frames: this.anims.generateFrameNumbers('jeep4', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
     // Jeep5 animation
     this.anims.create({
      key: 'jeep_anim5',
      frames: this.anims.generateFrameNumbers('jeep5', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    
    // Walang usok
    this.walangUsokNaJeep();
  }

  walangUsokNaJeep(){
    // Walang Usok Jeep1 animation
    this.anims.create({
      key: 'jeep_wala_usok_anim',
      frames: this.anims.generateFrameNumbers('newJeep', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    // Walang Usok Jeep2 animation
    this.anims.create({
      key: 'jeep2_wala_usok_anim',
      frames: this.anims.generateFrameNumbers('newJeep2', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    // Walang Usok Jeep3 animation
    this.anims.create({
      key: 'jeep3_wala_usok_anim',
      frames: this.anims.generateFrameNumbers('newJeep3', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    // Walang Usok Jeep4 animation
    this.anims.create({
      key: 'jeep4_wala_usok_anim',
      frames: this.anims.generateFrameNumbers('newJeep4', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    // Walang Usok Jeep5 animation
    this.anims.create({
      key: 'jeep5_wala_usok_anim',
      frames: this.anims.generateFrameNumbers('newJeep5', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

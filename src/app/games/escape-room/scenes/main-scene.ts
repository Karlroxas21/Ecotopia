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
    this.load.image('level-1-bg', '../../../../assets/game/scene1/beach.png');
    // Shark
    this.load.image('shark', '../../../../assets/lvl1/shark_spritesheet.png');
    // Cloud
    this.load.image('cloud-1', '../../../../assets/game/scene1/cloud1.png');
    this.load.image('cloud-2', '../../../../assets/game/scene1/cloud2.png');
    this.load.image('cloud-3', '../../../../assets/game/scene1/cloud3.png');
    this.load.image('cloud-4', '../../../../assets/game/scene1/cloud4.png');
    this.load.image('cloud-5', '../../../../assets/game/scene1/cloud5.png');
    this.load.image('cloud-6', '../../../../assets/game/scene1/cloud6.png');
    this.load.image('cloud-7', '../../../../assets/game/scene1/cloud7.png');
    this.load.image('cloud-8', '../../../../assets/game/scene1/cloud8.png');
    this.load.image('cloud-9', '../../../../assets/game/scene1/cloud9.png');
    this.load.image('cloud-0', '../../../../assets/game/scene1/cloud0.png');

    // Sea shells and pebbles
    this.load.image('clutter1', '../../../../assets/game/scene1/clutter1.png');
    this.load.image('clutter2', '../../../../assets/game/scene1/clutter2.png');
    this.load.image('clutter3', '../../../../assets/game/scene1/clutter3.png');
    this.load.image('clutter4', '../../../../assets/game/scene1/clutter4.png');
    this.load.image('clutter5', '../../../../assets/game/scene1/clutter5.png');
    this.load.image('clutter6', '../../../../assets/game/scene1/clutter6.png');
    this.load.image('clutter7', '../../../../assets/game/scene1/clutter7.png');
    this.load.image('clutter8', '../../../../assets/game/scene1/clutter8.png');
    this.load.image('clutter9', '../../../../assets/game/scene1/clutter9.png');
    this.load.image('clutter10', '../../../../assets/game/scene1/clutter10.png');
    this.load.image('clutter11', '../../../../assets/game/scene1/clutter11.png');
    this.load.image('clutter12', '../../../../assets/game/scene1/clutter12.png');
    this.load.image('clutter13', '../../../../assets/game/scene1/clutter13.png');
    this.load.image('clutter14', '../../../../assets/game/scene1/clutter14.png');
    this.load.image('clutter15', '../../../../assets/game/scene1/clutter15.png');

    // Garbages
    this.load.image('garbage1', '../../../../assets/game/scene1/garbage1.png');
    this.load.image('garbage2', '../../../../assets/game/scene1/garbage2.png');
    this.load.image('garbage3', '../../../../assets/game/scene1/garbage3.png');
    this.load.image('garbage4', '../../../../assets/game/scene1/garbage4.png');
    this.load.image('garbage5', '../../../../assets/game/scene1/garbage5.png');
    this.load.image('garbage6', '../../../../assets/game/scene1/garbage6.png');
    this.load.image('garbage7', '../../../../assets/game/scene1/garbage7.png');
    this.load.image('garbage8', '../../../../assets/game/scene1/garbage8.png');
    this.load.image('garbage9', '../../../../assets/game/scene1/garbage9.png');
    this.load.image('garbage10', '../../../../assets/game/scene1/garbage10.png');
    this.load.image('garbage11', '../../../../assets/game/scene1/garbage11.png');
    this.load.image('garbage12', '../../../../assets/game/scene1/garbage12.png');
    this.load.image('garbage13', '../../../../assets/game/scene1/garbage13.png');
    this.load.image('garbage14', '../../../../assets/game/scene1/garbage14.png');

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

    // Level 3
    this.load.image('bg-park', '../../../../assets/lvl3/park.png');
    
    // Trash cans
    this.load.image('biodegradable', '../../../../assets/lvl3/trashcan b.png');
    this.load.image('non-biodegradable', '../../../../assets/lvl3/trashcan nb.png');
    this.load.image('recyclable', '../../../../assets/lvl3/trashcan r.png');
    
    // Biodegradable trash
    this.load.image('biodegradable-trash-1', '../../../../assets/lvl3/garbage b1.png');
    this.load.image('biodegradable-trash-2', '../../../../assets/lvl3/garbage b2.png');
    this.load.image('biodegradable-trash-3', '../../../../assets/lvl3/garbage b3.png');
    this.load.image('biodegradable-trash-4', '../../../../assets/lvl3/garbage b4.png');
    this.load.image('biodegradable-trash-5', '../../../../assets/lvl3/garbage b5.png');
    
    // Non-biodegradable trash
    this.load.image('non-biodegradable-trash-1', '../../../../assets/lvl3/garbage n1.png');
    this.load.image('non-biodegradable-trash-2', '../../../../assets/lvl3/garbage n2.png');
    this.load.image('non-biodegradable-trash-3', '../../../../assets/lvl3/garbage n3.png');
    this.load.image('non-biodegradable-trash-4', '../../../../assets/lvl3/garbage n4.png');
    this.load.image('non-biodegradable-trash-5', '../../../../assets/lvl3/garbage n5.png');
    this.load.image('non-biodegradable-trash-6', '../../../../assets/lvl3/garbage n6.png');
    this.load.image('non-biodegradable-trash-7', '../../../../assets/lvl3/garbage n7.png');

    // Recyclable trash
    this.load.image('recyclable-trash-1', '../../../../assets/lvl3/garbage r1.png');
    this.load.image('recyclable-trash-2', '../../../../assets/lvl3/garbage r2.png');
    this.load.image('recyclable-trash-3', '../../../../assets/lvl3/garbage r3.png');
    this.load.image('recyclable-trash-4', '../../../../assets/lvl3/garbage r4.png');
    this.load.image('recyclable-trash-5', '../../../../assets/lvl3/garbage r5.png');
    this.load.image('recyclable-trash-6', '../../../../assets/lvl3/garbage r6.png');
   
    // Trees
    this.load.image('trees-1', '../../../../assets/lvl3/trees1.png');
    this.load.image('trees-2', '../../../../assets/lvl3/trees2.png');

    // Fountain Spritesheet
    this.load.spritesheet('fountain-sprite', '../../../../assets/lvl3/fountain spsh.png', {
      frameWidth: 196,
      frameHeight: 200
    });

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
      // default-scene is the original value
      this.scene.start('play-scene', { config: this.game.config });
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

    // Fountain Spritesheet
    this.fountainSpriteSheet();
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

  fountainSpriteSheet(){
    this.anims.create({
      key: 'fountain_sprite_anim',
      frames: this.anims.generateFrameNumbers('fountain-sprite', {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

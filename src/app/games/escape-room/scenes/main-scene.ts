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

    // Heart icon
    this.load.image('heart-icon', '../../../../assets/game/heart_icon.png');

    // SFX
    this.load.audio('x-button', '../../../../assets/game/x-button.mp3');
    this.load.audio('level-passed', '../../../../assets/game/level-passed.mp3');
    this.load.audio('game-over', '../../../../assets/game/game-over.mp3');
    this.load.audio('failed', '../../../../assets/game/failed.mp3');
    this.load.audio('choice', '../../../../assets/game/choice-button.mp3');
    this.load.audio('bg-music', '../../../../assets/game/bg-music.mp3');
    this.load.audio('game-over', '../../../../assets/game/game-over.mp3');

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

    // Scene 2
    this.load.image('scene2-bg', '../../../../assets/game/scene2/riverbank(both).png');
    this.load.image('scene2-bg-correct', '../../../../assets/game/scene2/riverbank(lvs).png');
    this.load.image('scene2-bg-wrong', '../../../../assets/game/scene2/riverbank(od).png');
        
    // Scene 3
    this.load.image('scene3-bg', '../../../../assets/game/scene3/park(both).png');
    this.load.image('scene3-bg-correct', '../../../../assets/game/scene3/park(lpd).png');
    this.load.image('scene3-bg-wrong', '../../../../assets/game/scene3/park(cups).png');

    // Scene 4
    this.load.image('scene4-bg', '../../../../assets/game/scene4/harbor(both).png');
    this.load.image('scene4-bg-wrong', '../../../../assets/game/scene4/harbor(nets).png');
    this.load.image('scene4-bg-correct', '../../../../assets/game/scene4/harbor(swd).png');

    // Scene 5
    this.load.image('scene5-bg', '../../../../assets/game/scene5/lake(both).png');
    this.load.image('scene5-bg-wrong', '../../../../assets/game/scene5/lake(soda).png');
    this.load.image('scene5-bg-correct', '../../../../assets/game/scene5/lake(wli).png');

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
      this.scene.start('default-scene', { config: this.game.config });
    });

    // Temporary to see Level 2 Scene Fast.
    // this.load.on('complete', () => {
    //   this.scene.start('pre-play-level2-scene', { config: this.game.config });
    // });
  }

  create() {
   
  }

}

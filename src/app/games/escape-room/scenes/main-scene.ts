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
      '../../../../assets/background/climate-escape-background.jpg'
    );

    // SFX
    this.load.audio('x-button', '../../../../assets/game/x-button.mp3');
    this.load.audio('level-passed', '../../../../assets/game/level-passed.mp3');
    this.load.audio('game-over', '../../../../assets/game/game-over.mp3');
    this.load.audio('failed', '../../../../assets/game/failed.mp3');
    this.load.audio('choice', '../../../../assets/game/choice-button.mp3');
    this.load.audio('bg-music', '../../../../assets/game/bg-music.mp3');
    this.load.audio('game-over', '../../../../assets/game/game-over.mp3');
    this.load.audio('milestone', '../../../../assets/game/milestone-scene.mp3');

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
   
    // Scene 1 Assets
    this.load.image('scene1-bg', '../../../../assets/game/scene1/scene1-bg.png');
    this.load.image('scene1-bg-correct', '../../../../assets/game/scene1/scene1-bg-correct.png');
    this.load.image('scene1-bg-wrong', '../../../../assets/game/scene1/scene1-bg-wrong.png');
    this.load.spritesheet('scene1-sprite', '../../../../assets/game/scene1/scene1-sprite.png',{
      frameWidth: 800,
      frameHeight: 600
    })

    // Scene 2
    this.load.image('scene2-bg', '../../../../assets/game/scene2/scene2-bg.png');
    this.load.image('scene2-bg-correct', '../../../../assets/game/scene2/scene2-bg-correct.png');
    this.load.image('scene2-bg-wrong', '../../../../assets/game/scene2/scene2-bg-wrong.png');
    this.load.spritesheet('scene2-sprite', '../../../../assets/game/scene2/scene2-flow-sprite.png',{
      frameWidth: 800,
      frameHeight: 600
    })

    // Scene 3
    this.load.image('scene3-bg', '../../../../assets/game/scene3/scene3-bg.png');
    this.load.image('scene3-bg-correct', '../../../../assets/game/scene3/scene3-bg-correct.png');
    this.load.image('scene3-bg-wrong', '../../../../assets/game/scene3/scene3-bg-wrong.png');
    this.load.spritesheet('scene3-sprite', '../../../../assets/game/scene3/scene3-sprite.png',{
      frameWidth: 800,
      frameHeight: 600
    })

    // Scene 4
    this.load.image('scene4-bg', '../../../../assets/game/scene4/scene4-bg.png');
    this.load.image('scene4-bg-wrong', '../../../../assets/game/scene4/scene4-bg-wrong.png');
    this.load.image('scene4-bg-correct', '../../../../assets/game/scene4/scene4-bg-correct.png');
    this.load.spritesheet('scene4-sprite', '../../../../assets/game/scene4/scene4-sprite.png',{
      frameWidth: 800,
      frameHeight: 600
    })

    // Scene 5
    this.load.image('scene5-bg', '../../../../assets/game/scene5/scene5-bg.png');
    this.load.image('scene5-bg-wrong', '../../../../assets/game/scene5/scene5-bg-wrong.png');
    this.load.image('scene5-bg-correct', '../../../../assets/game/scene5/scene5-bg-correct.png');
    this.load.spritesheet('scene5-sprite', '../../../../assets/game/scene5/scene5-sprite.png',{
      frameWidth: 800,
      frameHeight: 600
    })
    
    // Game Over Scene
    this.load.image('game-over', '../../../../assets/game/game_over.png');

    // Milestone scene
    this.load.spritesheet('congrats-bg', '../../../../assets/game/cngts_bg.png',{
      frameWidth: 517,
      frameHeight: 598
    })

    // Game Over Scene
    this.load.image('character-win', '../../../../assets/game/char_cngrts.png');
    // this.load.image('congrats-bg', '../../../../assets/game/cngts_bg.png');
   
    // Example sprite character
    this.load.spritesheet('character', '../../../../assets/game/chara.png',{
      frameWidth: 408,
      frameHeight: 230
    })

    // Heart sprite
    this.load.spritesheet('heart-icon', '../../../../assets/game/heart_sprite.png', {
      frameWidth: 510,
      frameHeight: 510
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

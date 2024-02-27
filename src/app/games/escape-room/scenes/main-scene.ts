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
            '../../../../assets/background/climate-escape-background.webp'
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
        this.load.image('cloud-1', '../../../../assets/game/scene1/cloud1.webp');
        this.load.image('cloud-2', '../../../../assets/game/scene1/cloud2.webp');
        this.load.image('cloud-3', '../../../../assets/game/scene1/cloud3.webp');
        this.load.image('cloud-4', '../../../../assets/game/scene1/cloud4.webp');
        this.load.image('cloud-5', '../../../../assets/game/scene1/cloud5.webp');
        this.load.image('cloud-6', '../../../../assets/game/scene1/cloud6.webp');
        this.load.image('cloud-7', '../../../../assets/game/scene1/cloud7.webp');
        this.load.image('cloud-8', '../../../../assets/game/scene1/cloud8.webp');
        this.load.image('cloud-9', '../../../../assets/game/scene1/cloud9.webp');
        this.load.image('cloud-0', '../../../../assets/game/scene1/cloud0.webp');

        //  Player
        this.load.spritesheet('player', '../../../../assets/game/player.webp', {
            frameWidth: 460, frameHeight: 600
        });

        // Character NPC
        this.load.spritesheet('character-npc', '../../../../assets/game/chara3.webp', {
            frameWidth: 410, frameHeight: 460
        });

        // Speech Bubble
        this.load.image('speech-bubble', '../../../../assets/game/speech.png')

        // Scene 1Garbages 
        this.load.image('garbage0', '../../../../assets/game/scene1/gb1.webp');
        this.load.image('garbage1', '../../../../assets/game/scene1/gb2.webp');
        this.load.image('garbage2', '../../../../assets/game/scene1/gb3.webp');
        this.load.image('garbage3', '../../../../assets/game/scene1/gb4.webp');
        this.load.image('garbage4', '../../../../assets/game/scene1/gb5.webp');
        this.load.image('garbage5', '../../../../assets/game/scene1/gb6.webp');
        this.load.image('garbage6', '../../../../assets/game/scene1/gb7.webp');
        this.load.image('garbage7', '../../../../assets/game/scene1/gb8.webp');
        this.load.image('garbage8', '../../../../assets/game/scene1/gb9.webp');
        this.load.image('garbage9', '../../../../assets/game/scene1/gb10.webp');
        this.load.image('garbage10', '../../../../assets/game/scene1/gb11.webp');
        this.load.image('garbage11', '../../../../assets/game/scene1/gb12.webp');
        this.load.image('garbage12', '../../../../assets/game/scene1/gb13.webp');
        this.load.image('garbage13', '../../../../assets/game/scene1/gb14.webp');
        this.load.image('garbage14', '../../../../assets/game/scene1/gb15.webp');

        // Scene 1 Assets
        this.load.image('scene1-bg', '../../../../assets/game/scene1/beach.webp');
        this.load.image('scene1-bg-correct', '../../../../assets/game/scene1/scene1-bg-correct.webp');
        this.load.image('scene1-bg-wrong', '../../../../assets/game/scene1/scene1-bg-wrong.webp');
        this.load.spritesheet('scene1-sprite', '../../../../assets/game/scene1/scene1-sprite.webp', {
            frameWidth: 800,
            frameHeight: 600
        })

        // Scene 2
        this.load.image('scene2-bg', '../../../../assets/game/scene2/riverbank.webp');
        this.load.image('scene2-bg-correct', '../../../../assets/game/scene2/scene2-bg-correct.webp');
        this.load.image('scene2-bg-wrong', '../../../../assets/game/scene2/scene2-bg-wrong.webp');
        this.load.spritesheet('scene2-sprite', '../../../../assets/game/scene2/scene2-flow-sprite.webp', {
            frameWidth: 800,
            frameHeight: 600
        })

        // Scene 2 Garbages
        this.load.image('s2garbage0', '../../../../assets/game/scene2/gb1.webp');
        this.load.image('s2garbage1', '../../../../assets/game/scene2/gb2.webp');
        this.load.image('s2garbage2', '../../../../assets/game/scene2/gb3.webp');
        this.load.image('s2garbage3', '../../../../assets/game/scene2/gb4.webp');
        this.load.image('s2garbage4', '../../../../assets/game/scene2/gb5.webp');
        this.load.image('s2garbage5', '../../../../assets/game/scene2/gb6.webp');
        this.load.image('s2garbage6', '../../../../assets/game/scene2/gb7.webp');
        this.load.image('s2garbage7', '../../../../assets/game/scene2/gb8.webp');
        this.load.image('s2garbage8', '../../../../assets/game/scene2/gb9.webp');
        this.load.image('s2garbage9', '../../../../assets/game/scene2/gb10.webp');
        this.load.image('s2garbage10', '../../../../assets/game/scene2/gb11.webp');
        this.load.image('s2garbage11', '../../../../assets/game/scene2/gb12.webp');
        this.load.image('s2garbage12', '../../../../assets/game/scene2/gb13.webp');
        this.load.image('s2garbage13', '../../../../assets/game/scene2/gb14.webp');
        this.load.image('s2garbage14', '../../../../assets/game/scene2/gb15.webp');

        // Scene 3
        this.load.image('scene3-bg', '../../../../assets/game/scene3/park.webp');
        this.load.image('scene3-bg-correct', '../../../../assets/game/scene3/scene3-bg-correct.webp');
        this.load.image('scene3-bg-wrong', '../../../../assets/game/scene3/scene3-bg-wrong.webp');
        this.load.spritesheet('scene3-sprite', '../../../../assets/game/scene3/scene3-sprite.webp', {
            frameWidth: 800,
            frameHeight: 600
        });

        // Scene 3 Garbages
        this.load.image('s3garbage0', '../../../../assets/game/scene3/gb1.webp');
        this.load.image('s3garbage1', '../../../../assets/game/scene3/gb2.webp');
        this.load.image('s3garbage2', '../../../../assets/game/scene3/gb3.webp');
        this.load.image('s3garbage3', '../../../../assets/game/scene3/gb4.webp');
        this.load.image('s3garbage4', '../../../../assets/game/scene3/gb5.webp');
        this.load.image('s3garbage5', '../../../../assets/game/scene3/gb6.webp');
        this.load.image('s3garbage6', '../../../../assets/game/scene3/gb7.webp');
        this.load.image('s3garbage7', '../../../../assets/game/scene3/gb8.webp');
        this.load.image('s3garbage8', '../../../../assets/game/scene3/gb9.webp');
        this.load.image('s3garbage9', '../../../../assets/game/scene3/gb10.webp');
        this.load.image('s3garbage10', '../../../../assets/game/scene3/gb11.webp');
        this.load.image('s3garbage11', '../../../../assets/game/scene3/gb12.webp');
        this.load.image('s3garbage12', '../../../../assets/game/scene3/gb13.webp');
        this.load.image('s3garbage13', '../../../../assets/game/scene3/gb14.webp');
        this.load.image('s3garbage14', '../../../../assets/game/scene3/gb15.webp');

        // Scene 4
        this.load.image('scene4-bg', '../../../../assets/game/scene4/harbor.webp');
        this.load.image('scene4-bg-wrong', '../../../../assets/game/scene4/scene4-bg-wrong.webp');
        this.load.image('scene4-bg-correct', '../../../../assets/game/scene4/scene4-bg-correct.webp');
        this.load.spritesheet('scene4-sprite', '../../../../assets/game/scene4/scene4-sprite.webp', {
            frameWidth: 800,
            frameHeight: 600
        })

        // Scene 4 Garbages
        this.load.image('s4garbage0', '../../../../assets/game/scene4/gb1.webp');
        this.load.image('s4garbage1', '../../../../assets/game/scene4/gb2.webp');
        this.load.image('s4garbage2', '../../../../assets/game/scene4/gb3.webp');
        this.load.image('s4garbage3', '../../../../assets/game/scene4/gb4.webp');
        this.load.image('s4garbage4', '../../../../assets/game/scene4/gb5.webp');
        this.load.image('s4garbage5', '../../../../assets/game/scene4/gb6.webp');
        this.load.image('s4garbage6', '../../../../assets/game/scene4/gb7.webp');
        this.load.image('s4garbage7', '../../../../assets/game/scene4/gb8.webp');
        this.load.image('s4garbage8', '../../../../assets/game/scene4/gb9.webp');
        this.load.image('s4garbage9', '../../../../assets/game/scene4/gb10.webp');
        this.load.image('s4garbage10', '../../../../assets/game/scene4/gb11.webp');
        this.load.image('s4garbage11', '../../../../assets/game/scene4/gb12.webp');
        this.load.image('s4garbage12', '../../../../assets/game/scene4/gb13.webp');
        this.load.image('s4garbage13', '../../../../assets/game/scene4/gb14.webp');
        this.load.image('s4garbage14', '../../../../assets/game/scene4/gb15.webp');

        // Scene 5
        this.load.image('scene5-bg', '../../../../assets/game/scene5/lake.webp');
        this.load.image('scene5-bg-wrong', '../../../../assets/game/scene5/scene5-bg-wrong.webp');
        this.load.image('scene5-bg-correct', '../../../../assets/game/scene5/scene5-bg-correct.webp');
        this.load.spritesheet('scene5-sprite', '../../../../assets/game/scene5/scene5-sprite.webp', {
            frameWidth: 800,
            frameHeight: 600
        });

        // Scene 5 Garbages
        this.load.image('s5garbage0', '../../../../assets/game/scene5/gb1.webp');
        this.load.image('s5garbage1', '../../../../assets/game/scene5/gb2.webp');
        this.load.image('s5garbage2', '../../../../assets/game/scene5/gb3.webp');
        this.load.image('s5garbage3', '../../../../assets/game/scene5/gb4.webp');
        this.load.image('s5garbage4', '../../../../assets/game/scene5/gb5.webp');
        this.load.image('s5garbage5', '../../../../assets/game/scene5/gb6.webp');
        this.load.image('s5garbage6', '../../../../assets/game/scene5/gb7.webp');
        this.load.image('s5garbage7', '../../../../assets/game/scene5/gb8.webp');
        this.load.image('s5garbage8', '../../../../assets/game/scene5/gb9.webp');
        this.load.image('s5garbage9', '../../../../assets/game/scene5/gb10.webp');
        this.load.image('s5garbage10', '../../../../assets/game/scene5/gb11.webp');
        this.load.image('s5garbage11', '../../../../assets/game/scene5/gb12.webp');
        this.load.image('s5garbage12', '../../../../assets/game/scene5/gb13.webp');
        this.load.image('s5garbage13', '../../../../assets/game/scene5/gb14.webp');
        this.load.image('s5garbage14', '../../../../assets/game/scene5/gb15.webp');

        // Game Over Scene
        this.load.image('game-over', '../../../../assets/game/game_over.webp');

        // Milestone scene
        this.load.spritesheet('congrats-bg', '../../../../assets/game/cngts_bg.webp', {
            frameWidth: 512,
            frameHeight: 598
        })

        // Game Over Scene
        this.load.image('character-win', '../../../../assets/game/char_cngrts.webp');

        // Example sprite character
        this.load.spritesheet('character', '../../../../assets/game/chara.webp', {
            frameWidth: 261,
            frameHeight: 233
        })

        // Heart sprite
        this.load.spritesheet('heart-icon', '../../../../assets/game/heart_sprite.webp', {
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

        this.load.on('complete', () => {
            // default-scene is the original value
            this.scene.start('default-scene', { config: this.game.config });
        });
    }

    create() {

    }

}

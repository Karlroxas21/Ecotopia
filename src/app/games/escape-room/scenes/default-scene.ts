import Phaser from 'phaser';

export class DefaultScene extends Phaser.Scene{
    constructor(){
        super({key: 'default-scene'});
    }

    config: Phaser.Types.Core.GameConfig | any;
    init(data: {config: Phaser.Types.Core.GameConfig}){
        this.config = data.config;
    }

    // Put here the declaration of variables
    background: any;

    gameStarted: boolean = false;

    create(){
        const width = this.config.width;
        const height = this.config.height;

        this.background = this.add.image(0, 0, 'default-scene-bg');
        this.background.setOrigin(0, 0);

        const startText = this.add.text(
            width / 2,
            height - 70,
            'Press any key to start',
            { font: '18px monospace', color: '#ffffff'}
        );
        startText.setOrigin(0.5);

        // Keyboard listener if any key is clicked to start the game
        this.input.keyboard.on('keydown', () => {
            if(!this.gameStarted){
                this.gameStarted = true;
                startText.destroy();
            }
        });
         
        // Text blinking
        this.time.addEvent({
            delay: 400,
            callback: () => {
                startText.visible = !startText.visible;
            },
            loop: true
        });

    }

    override update(){
        if(this.gameStarted){
            this.scene.start('pre-play-scene', { config: this.game.config });
        }
    }
}

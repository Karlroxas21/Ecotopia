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

    create(){
        const width = this.config.width;
        const height = this.config.height;

        this.background = this.add.image(0, 0, 'default-scene-bg');
        this.background.setOrigin(0, 0);

    }

    override update(){

    }
}

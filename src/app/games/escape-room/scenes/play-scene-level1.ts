import Phaser from 'phaser';
import { heartPointsService } from './heart-service';

export class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'play-scene' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  background: any;

  heart_icon:any;

  cloud1: any;
  cloud2: any;
  cloud3: any;
  cloud4: any;
  cloud5: any;
  cloud6: any;
  cloud7: any;
  cloud8: any;
  cloud9: any;
  cloud0: any;

  clutter1: any;
  clutter2: any;
  clutter3: any;
  clutter4: any;
  clutter5: any;
  clutter6: any;
  clutter7: any;
  clutter8: any;
  clutter9: any;
  clutter10: any;
  clutter11: any;
  clutter12: any;
  clutter13: any;
  clutter14: any;
  clutter15: any;

  garbage1: any;
  garbage2: any;
  garbage3: any;
  garbage4: any;
  garbage5: any;
  garbage6: any;
  garbage7: any;
  garbage8: any;
  garbage9: any;
  garbage10: any;
  garbage11: any;
  garbage12: any;
  garbage13: any;
  garbage14: any;

  bgMusic: any;
  choiceButtonSFX: any;

  textDisplay = "Which item should you prioritize picking up to help \nclean the beach?";

  choice1 = "Plastic bottles and cigarette butts";
  choice2 = "Seashells and pebbles";

  create() {
    this.background = this.add.image(0, 0, 'level-1-bg');
    this.background.setOrigin(0, 0);

    // Clouds
    this.cloud1 = this.add.image(0, 200, 'cloud-1');
    this.cloud1.setScale(0.5);
    this.cloud2 = this.add.image(100, 100, 'cloud-2');
    this.cloud2.setScale(0.3);
    this.cloud3 = this.add.image(500, 200, 'cloud-3');
    this.cloud3.setScale(0.2);
    this.cloud4 = this.add.image(400, 100, 'cloud-4');
    this.cloud4.setScale(0.4);
    this.cloud5 = this.add.image(600, 200, 'cloud-5');
    this.cloud5.setScale(0.5);
    this.cloud6 = this.add.image(600, 200, 'cloud-6');
    this.cloud6.setScale(0.5);
    this.cloud7 = this.add.image(650, 300, 'cloud-7');
    this.cloud8 = this.add.image(400, 300, 'cloud-8');
    this.cloud9 = this.add.image(300, 150, 'cloud-9');
    this.cloud0 = this.add.image(100, 200, 'cloud-0');
    
    for(let i = 1; i <= heartPointsService.getHeartPoints(); i++){
      this.heart_icon = this.add.image(770, 30 + i * 30, 'heart-icon');
    }

    this.choiceButtonSFX = this.sound.add('choice');

    // Question
    const centerX = (this.config.width / 2) - 40;
    const centerY = 100;
    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    graphics.fillRect(
      75,
      centerY - this.config.height / 6 / 2,
      this.config.width - 150,
      this.config.height / 6
    );

    const guide = this.add.text(
      centerX,
      centerY,
      this.textDisplay,
      { font: '18px monospace', color: '#ffffff' }
    );
    guide.setOrigin(0.5);
    // End of Question
    
    // Choice 1
    const choice1CenterX = 100;
    const choice1CenterY = centerY + 80;
    const choice1graphics = this.add.graphics();
    choice1graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    choice1graphics.fillRect(
      75,
      centerY + 70,
      this.config.width - 150,
      40
    );

    const choice1Guide = this.add.text(
      choice1CenterX,
      choice1CenterY,
      this.choice1,
      { font: '18px monospace', color: '#ffffff' }
    );

    choice1Guide.setInteractive()
    choice1Guide.on('pointerdown', () => {
      this.scene.start('play-scene-correct', {config: this.game.config});
      
      this.choiceButtonSFX.play();

    });
    // End of choice 1

    // Choice 2
    const choice2CenterX = 100;
    const choice2CenterY = centerY + 130;
    const choice2graphics = this.add.graphics();
    choice2graphics.fillStyle(0x000000, 0.5); // Color and Alpha
    choice2graphics.fillRect(
      75,
      centerY + 120,
      this.config.width - 150,
      40
    );

    const choice2Guide = this.add.text(
      choice2CenterX,
      choice2CenterY,
      this.choice2,
      { font: '18px monospace', color: '#ffffff' }
    );
    choice2Guide.setInteractive()
    choice2Guide.on('pointerdown', () => {
      heartPointsService.decreaseHeartPoints();
      this.scene.start('play-scene-wrong', {config: this.game.config});

      this.choiceButtonSFX.play();

    });
    // End of choice 2

    this.clutters();

    this.garbages();
  
  }

  override update() {
   
    // Update cloud position
    this.cloud1.x += 0.1;
    this.cloud2.x += 0.1;
    this.cloud3.x += 0.1;
    this.cloud4.x += 0.1;
    this.cloud5.x += 0.1;
    this.cloud6.x += 0.1;
    this.cloud7.x += 0.1;
    this.cloud8.x += 0.1;
    this.cloud9.x += 0.1;
    this.cloud0.x += 0.1;

    // Reset cloud position when it goes off screen
    if (this.cloud1.x > this.config.width + this.cloud1.displayWidth / 2) {
      this.cloud1.x = -this.cloud1.displayWidth / 2;
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
    if (this.cloud6.x > this.config.width + this.cloud6.displayWidth / 2) {
      this.cloud6.x = -this.cloud6.displayWidth / 2;
    }
    if (this.cloud7.x > this.config.width + this.cloud7.displayWidth / 2) {
      this.cloud7.x = -this.cloud7.displayWidth / 2;
    }
    if (this.cloud8.x > this.config.width + this.cloud8.displayWidth / 2) {
      this.cloud8.x = -this.cloud8.displayWidth / 2;
    }
    if (this.cloud9.x > this.config.width + this.cloud9.displayWidth / 2) {
      this.cloud9.x = -this.cloud9.displayWidth / 2;
    }
    if (this.cloud0.x > this.config.width + this.cloud0.displayWidth / 2) {
      this.cloud0.x = -this.cloud0.displayWidth / 2;
    }
  }

  garbages() {
    const clutter1 = this.add
      .image(this.config.width - 400, this.config.height - 20, 'garbage1')
      .setScale(1.5);
   
    const clutter2 = this.add
      .image(this.config.width - 600, this.config.height - 50, 'garbage2')
      .setScale(1.5);
    
    const clutter3 = this.add
      .image(this.config.width - 350, this.config.height - 30, 'garbage3')
      .setScale(1.5);
    
    const clutter4 = this.add
      .image(this.config.width - 40, this.config.height - 100, 'garbage4')
      .setScale(1.5);
   
    const clutter5 = this.add
      .image(this.config.width - 60, this.config.height - 90, 'garbage5')
      .setScale(1.5); // this will be replace
    
    const clutter6 = this.add
      .image(this.config.width - 720, this.config.height - 115, 'garbage6')
      .setScale(1.5);
   
    const clutter7 = this.add
      .image(this.config.width - 523, this.config.height - 143, 'garbage7')
      .setScale(1.5); // this will be replace
   
    const clutter8 = this.add
      .image(this.config.width - 269, this.config.height - 125, 'garbage8')
      .setScale(1.5);
    
    const clutter9 = this.add
      .image(this.config.width - 666, this.config.height - 143, 'garbage9')
      .setScale(1.5);
    
    const clutter10 = this.add
      .image(this.config.width - 490, this.config.height - 130, 'garbage10')
      .setScale(1.5);
    
    const clutter11 = this.add
      .image(this.config.width - 700, this.config.height - 112, 'garbage11')
      .setScale(1.5); 

    const clutter12 = this.add
      .image(this.config.width - 560, this.config.height - 70, 'garbage12')
      .setScale(1.5); 

    const clutter13 = this.add
      .image(this.config.width - 630, this.config.height - 140, 'garbage13')
      .setScale(1.5); 

    const clutter14 = this.add
      .image(this.config.width - 620, this.config.height - 99, 'garbage14')
      .setScale(1.5); 
      
  }

  clutters() {
    const clutter1 = this.add
      .image(this.config.width - 500, this.config.height - 20, 'clutter1')
      .setScale(1.5);
   
    const clutter2 = this.add
      .image(this.config.width - 600, this.config.height - 100, 'clutter2')
      .setScale(1.5);
    
    const clutter3 = this.add
      .image(this.config.width - 370, this.config.height - 30, 'clutter3')
      .setScale(1.5);
    
    const clutter4 = this.add
      .image(this.config.width - 20, this.config.height - 80, 'clutter4')
      .setScale(1.5);
   
    const clutter5 = this.add
      .image(this.config.width - 80, this.config.height - 70, 'clutter5')
      .setScale(1.5);
    
    const clutter6 = this.add
      .image(this.config.width - 700, this.config.height - 100, 'clutter6')
      .setScale(1.5);
   
    const clutter7 = this.add
      .image(this.config.width - 550, this.config.height - 100, 'clutter7')
      .setScale(1.5); 
   
    const clutter8 = this.add
      .image(this.config.width - 260, this.config.height - 120, 'clutter8')
      .setScale(1.5);
    
    const clutter9 = this.add
      .image(this.config.width - 285, this.config.height - 120, 'clutter9')
      .setScale(1.5); 

    const clutter10 = this.add
      .image(this.config.width - 750, this.config.height - 130, 'clutter10')
      .setScale(1.5);
    
    const clutter11 = this.add
      .image(this.config.width - 770, this.config.height - 110, 'clutter11')
      .setScale(1.5); 

    const clutter12 = this.add
      .image(this.config.width - 570, this.config.height - 80, 'clutter12')
      .setScale(1.5); 

    const clutter13 = this.add
      .image(this.config.width - 670, this.config.height - 130, 'clutter13')
      .setScale(1.5); 

    const clutter14 = this.add
      .image(this.config.width - 650, this.config.height - 80, 'clutter14')
      .setScale(1.5); 
      
    const clutter15 = this.add
      .image(this.config.width - 870, this.config.height - 150, 'clutter15')
      .setScale(1.5); 
  }

}



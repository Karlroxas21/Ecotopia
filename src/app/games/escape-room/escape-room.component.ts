import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
@Component({
  selector: 'app-escape-room',
  templateUrl: './escape-room.component.html',
  styleUrls: ['./escape-room.component.css']
})
export class EscapeRoomComponent implements OnInit{
  phaserGame: Phaser.Game | undefined;
  config: Phaser.Types.Core.GameConfig;
  constructor(){
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 100}
        }
      }
    }
  }

  ngOnInit() {
      this.phaserGame = new Phaser.Game(this.config);
  }
}

class MainScene extends Phaser.Scene {
  constructor(){
    super({key: 'main'});
  }
  preload(){
    this.load.image('sky', 'assets/sky.png')
  }

  create(){
    this.add.image(400, 300, 'sky');
  }

  updates(){

  }
}

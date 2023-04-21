import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { DefaultScene } from './scenes/default-scene';
import { PrePlayScene } from './scenes/pre-play-scene';
import { MainScene } from './scenes/main-scene';
import { PlayScene } from './scenes/play-scene-level1';

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
      scene: [ MainScene, DefaultScene, PrePlayScene, PlayScene],
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

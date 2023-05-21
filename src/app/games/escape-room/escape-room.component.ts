import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { DefaultScene } from './scenes/default-scene';
import { PrePlayScene } from './scenes/pre-play-scene';
import { MainScene } from './scenes/main-scene';
import { PlayScene } from './scenes/play-scene-level1';
import { PlayLevel2Scene } from './scenes/level2/play-scene-level2';
import { PrePlayLevel2Scene } from './scenes/level2/pre-play-scene.level2';
import { PlayLevel3Scene } from './scenes/level2/play-scene-level3';

@Component({
  selector: 'app-escape-room',
  templateUrl: './escape-room.component.html',
  styleUrls: ['./escape-room.component.css']
})
export class EscapeRoomComponent implements OnInit{
  phaserGame !: Phaser.Game ;
  config: Phaser.Types.Core.GameConfig;
  constructor(){
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene, 
        DefaultScene, 
        PrePlayScene, 
        PlayScene, 
        PlayLevel2Scene, 
        PrePlayLevel2Scene, 
        PlayLevel3Scene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 100}
        }
      }
    }
  }

  createGame(){
    this.phaserGame = new Phaser.Game(this.config);
  }

  getGameInstance(){
    return this.phaserGame;
  }

  ngOnInit() {
    if(!this.phaserGame){
      this.createGame();
    }else{
      this.getGameInstance();
    }
 }

 ngOnDestroy(){
  if(this.phaserGame){
    this.phaserGame.destroy(true);
  }
 }
 
}

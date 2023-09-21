import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { DefaultScene } from './scenes/default-scene';
import { PrePlayScene } from './scenes/pre-play-scene';
import { MainScene } from './scenes/main-scene';
import { PlayScene } from './scenes/play-scene-level1';
import { PlaySceneWrong } from './scenes/play-scene-wrong';
import { PlaySceneCorrect } from './scenes/play-scene-correct';
import { PlayScene2 } from './scenes/scene2/play-scene2';
import { PlayScene2Wrong } from './scenes/scene2/play-scene2-wrong';
import { PlayScene2Correct } from './scenes/scene2/play-scene2-correct';

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
        PlaySceneWrong,
        PlaySceneCorrect,
        PlayScene2,
        PlayScene2Wrong,
        PlayScene2Correct],
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

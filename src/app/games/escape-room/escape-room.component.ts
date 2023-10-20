import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { DefaultScene } from './scenes/default-scene';
import { PrePlayScene } from './scenes/pre-play-scene';
import { MainScene } from './scenes/main-scene';
import { GameOver } from './scenes/game-over-scene';
import { PlayScene } from './scenes/play-scene-level1';
import { PlaySceneWrong } from './scenes/play-scene-wrong';
import { PlaySceneCorrect } from './scenes/play-scene-correct';
import { PlayScene2 } from './scenes/scene2/play-scene2';
import { PlayScene2Wrong } from './scenes/scene2/play-scene2-wrong';
import { PlayScene2Correct } from './scenes/scene2/play-scene2-correct';
import { PlayScene3 } from './scenes/scene3/play-scene3';
import { PlayScene3Correct } from './scenes/scene3/play-scene3-correct';
import { PlayScene3Wrong } from './scenes/scene3/play-scene3-wrong';
import { PlayScene4 } from './scenes/scene4/play-scene4';
import { PlayScene4Correct } from './scenes/scene4/play-scene4-correct';
import { PlayScene4Wrong } from './scenes/scene4/play-scene4-wrong';
import { PlayScene5 } from './scenes/scene5/play-scene5';
import { PlayScene5Correct } from './scenes/scene5/play-scene5-correct';
import { PlayScene5Wrong } from './scenes/scene5/play-scene5-wrong';
import { Milestone } from './scenes/milestone-scene';
import { PrePlayScene2 } from './scenes/scene2/pre-play-scene2';
import { PrePlayScene3 } from './scenes/scene3/pre-play-scene3';
import { PrePlayScene4 } from './scenes/scene4/pre-play-scene4';
import { PrePlayScene5 } from './scenes/scene5/pre-play-scene5';

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
        GameOver,
        PlayScene,
        PlaySceneWrong,
        PlaySceneCorrect,
        PrePlayScene2,
        PlayScene2,
        PlayScene2Wrong,
        PlayScene2Correct,
        PrePlayScene3,
        PlayScene3,
        PlayScene3Correct,
        PlayScene3Wrong,
        PrePlayScene4,
        PlayScene4,
        PlayScene4Correct,
        PlayScene4Wrong,
        PrePlayScene5,
        PlayScene5,
        PlayScene5Correct,
        PlayScene5Wrong,
        Milestone],
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

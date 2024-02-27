import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-escape-room',
  templateUrl: './escape-room.component.html',
  styleUrls: ['./escape-room.component.css']
})
export class EscapeRoomComponent implements OnInit{

    ngOnInit() {
        //@ts-ignore
        createUnityInstance(document.querySelector("#unity-canvas"), {
          dataUrl: "/assets/game/unity/Build/unity.data",
          frameworkUrl: "/assets/game/unity/Build/unity.framework.js",
          codeUrl: "/assets/game/unity/Build/unity.wasm",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "Maafia",
          productName: "Ecotopia",
          productVersion: "1.0"
        });
  } 
  constructor(private titleService: Title){
    
  }


}

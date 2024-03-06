import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-game-unity',
    templateUrl: './game-unity.component.html',
    styleUrls: ['./game-unity.component.css']
})
export class GameUnityComponent implements OnInit {

    ngOnInit() {
        //@ts-ignore
        createUnityInstance(document.querySelector("#unity-canvas"), {
            dataUrl: "assets/game/unity-main/Build/unity-main.data",
            frameworkUrl: "assets/game/unity-main/Build/unity-main.framework.js",
            codeUrl: "assets/game/unity-main/Build/unity-main.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "Maafia",
            productName: "Unity Escape Room",
            productVersion: "1.0"
        });
    }

    constructor(private titleService: Title) { }
}

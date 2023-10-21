import { Injectable } from "@angular/core";
import { GameService } from "./game-service";

@Injectable({
        providedIn: 'root',
})

export class GameDataService{
        private gameData: any;

        constructor(){}
        
        setGameData(data: any){
                this.gameData = data;
        }

        getGameData(){
                return this.gameData;
        }
}
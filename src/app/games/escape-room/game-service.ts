import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
        providedIn: 'root'
})

export class GameService{
        private urlAPI = `${environment.apiUrl}`;

        constructor(){}

        async callData(API: string){
                try{
                        const response = await fetch(this.urlAPI + API);
                        const data = await response.json();
                        return data;
                }catch (error){
                        console.error(`Error: `, error);
                }
        }
}

export const gameService = new GameService();
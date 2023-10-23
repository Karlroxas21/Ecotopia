import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
        providedIn: 'root'
})

export class GameService{
        private urlAPI = `${environment.apiUrl}`;

        constructor(){}

        // async callData(API: string){
        //         try{
        //                 const response = await fetch(this.urlAPI + API);
        //                 const data = await response.json();
        //                 return data;
        //         }catch (error){
        //                 console.error(`Error: `, error);
        //         }
        // }
        callData(API: string) {
                return fetch(this.urlAPI + API)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        return data;
                    })
                    .catch((error) => {
                        console.error('Error: ', error);
                    });
            }
            
}

export const gameService = new GameService();
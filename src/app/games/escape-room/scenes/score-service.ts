
export class ScoreService{

        private initialScorePoints = 0;
        
        private scorePoints = this.initialScorePoints;

        getScorePoints(): number{
                return this.scorePoints;
        }

        increaseScorePoints(number: number){
                this.scorePoints += number;
        } 

        decreaseScorePoints(number: number){
                this.scorePoints -= number;
        }
        
        resetHeartPoints() {
                this.scorePoints = this.initialScorePoints;
        }
}

export const scoreService = new ScoreService();

export class HeartPointsService{
        private heartPoints = 3;

        getHeartPoints(): number{
                return this.heartPoints;
        }

        decreaseHeartPoints(){
                this.heartPoints -= 1;
        }
}

export const heartPointsService = new HeartPointsService();
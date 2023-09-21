
export class HeartPointsService{
        private heartPoints = 3;

        getHeartPoints(): number{
                return this.heartPoints;
        }

        decreaseHeartPoints(){
                this.heartPoints --;
        }
}

export const heartPointsService = new HeartPointsService();
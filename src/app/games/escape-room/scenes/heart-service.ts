
export class HeartPointsService {

    private initialHeartPoints = 3;

    private heartPoints = this.initialHeartPoints;

    getHeartPoints(): number {
        return this.heartPoints;
    }

    decreaseHeartPoints() {
        this.heartPoints--;
    }

    resetHeartPoints() {
        this.heartPoints = this.initialHeartPoints;
    }
}

export const heartPointsService = new HeartPointsService();
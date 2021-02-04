import {Game} from "../../game";
import {Physics} from "../physics/physics";

export class Loop {
    game: Game;
    lastFrameTime: number;
    currentFrameTime: number;

    get frameTimeDelta(): number {
        return (this.currentFrameTime - this.lastFrameTime) / 1000;
    }

    constructor(game: Game) {
        this.game = game;
        this.lastFrameTime = Date.now();
        this.currentFrameTime = Date.now();
    }

    start() {
        let loop = window.setInterval(() => {
            this.lastFrameTime = this.currentFrameTime;
            this.currentFrameTime = Date.now();
            this.update();
            this.paint();
        }, 1000/60);
    }

    update() {
        this.game.objects.forEach((gameObject) => {
            Physics.applyGravity(gameObject, this.frameTimeDelta);
        });
    }

    paint() {
        this.game.objects.forEach(Physics.updatePosition);
    }
}
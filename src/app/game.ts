import { Character } from "./objects/character/character";
import {GameObject} from "./objects/game-object";

export class Game {
    scene: SVGSVGElement;
    objects: GameObject[] = [];
    constructor(scene: SVGSVGElement) {
        this.scene = scene;
    }

    addObject(gameObject: GameObject, x: number, y: number) {
        gameObject.element.setAttribute('x', x.toString(10));
        gameObject.element.setAttribute('y', y.toString(10));
        gameObject.x = x;
        gameObject.y = y;
        this.scene.appendChild(gameObject.element);
        this.objects.push(gameObject);
    }
}
import {GameObject} from "../game-object";

export class Character implements GameObject {
    element: SVGElement;
    name: string;
    x = 0;
    y = 0;
    width = 20;
    height = 50;
    momentum = [1, 1];
    velocity = [0, 0];

    constructor(name: string) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
        this.element.setAttribute('x', '0');
        this.element.setAttribute('y', '0');
        this.element.setAttribute('width', '50');
        this.element.setAttribute('height', '50');
        this.element.classList.add('character');
        this.name = name;
    }

}
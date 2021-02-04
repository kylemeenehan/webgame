export interface GameObject {
    element: SVGElement;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    momentum: number[];
    velocity: number[];
}
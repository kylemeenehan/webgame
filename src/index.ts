import { Game } from './app/game';
import { Character } from "./app/objects/character/character";
import {GameObject} from "./app/objects/game-object";
import {Loop} from "./app/engine/loop/loop";

const scene = document.querySelector<SVGSVGElement>('#main');
const player = new Character('main oke');
const game = new Game(scene);
game.addObject(player, 1, 1);

const loop = new Loop(game);
loop.start();



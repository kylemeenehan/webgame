import {GameObject} from "../../objects/game-object";

export class Physics {
    static GravitationalConstant = 9.8;
    static accelerate(transformation: number[], gameObject: GameObject) {
        gameObject.velocity = gameObject.velocity.map((value, index) => {
            return value + transformation[index];
        });
    }

    public static applyGravity(gameObject: GameObject, timeDelta: number) {
        console.log(gameObject.velocity[1]);
        if (gameObject.y >= 420) {
            gameObject.velocity = [0, 0];
            gameObject.y = 420;
            return;
        }

        let delta = Physics.GravitationalConstant * timeDelta;
        Physics.accelerate([0, delta], gameObject);
        // Physics.accelerate([0, 0.1], gameObject);
    }

    public static updatePosition(gameObject: GameObject) {
        let { x, y } = gameObject;
        x += gameObject.velocity[0];
        y += gameObject.velocity[1];

        y = y < 420 ? y : 420;


        gameObject.x = x;
        gameObject.y = y;
        gameObject.element.setAttribute('x', x.toString(10));
        gameObject.element.setAttribute('y', y.toString(10));
    }
}
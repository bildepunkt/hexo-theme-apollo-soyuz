import Canvas from './Canvas';
import Starfield from './Starfield';
import Attractor from './Attractor';

/**
 * @copyright 2016 Chris Peters
 * @license ISC
 */
export default class Galaxy {
    constructor() {
        this.canvas1 = new Canvas("galaxy1");
        this.canvas2 = new Canvas("galaxy2");
        this.canvas3 = new Canvas("galaxy3");
        this.canvasEl1 = this.canvas1.getEl();
        this.canvasEl2 = this.canvas2.getEl();
        this.canvasEl3 = this.canvas3.getEl();

        this.attractor1 = new Attractor({
            magnitude: -0.012,
            drag: 12
        });
        this.attractor2 = new Attractor({
            magnitude: -0.02,
            drag: 12
        });
        this.attractor3 = new Attractor({
            magnitude: -0.06,
            drag: 12
        });

        this.mouseX = 0;
        this.mouseY = 0;

        new Starfield({
            canvas: this.canvas1,
            count: Math.round(window.innerWidth / 32)
        });
        new Starfield({
            canvas: this.canvas2,
            count: Math.round(window.innerWidth / 16)
        });
        new Starfield({
            canvas: this.canvas3,
            count: Math.round(window.innerWidth / 4)
        });

        window.addEventListener("mousemove", (e) => {
            this.mouseX = e.clientX - window.innerWidth / 2;
            this.mouseY = e.clientY - window.innerHeight / 2;
        }, false);

        this.update = this.update.bind(this);
        document.addEventListener('ontick', this.update, false);
    }

    update() {
        this.attractor1.update( this.mouseX, this.mouseY );
        this.attractor2.update( this.mouseX, this.mouseY );
        this.attractor3.update( this.mouseX, this.mouseY );

        let t1 = this.attractor1.getTarget();
        let t2 = this.attractor2.getTarget();
        let t3 = this.attractor3.getTarget();

        this.canvasEl1.style.left = `${t1.x}px`;
        this.canvasEl1.style.top = `${t1.y}px`;

        this.canvasEl2.style.left = `${t2.x}px`;
        this.canvasEl2.style.top = `${t2.y}px`;

        this.canvasEl3.style.left = `${t3.x}px`;
        this.canvasEl3.style.top = `${t3.y}px`;
    }
}
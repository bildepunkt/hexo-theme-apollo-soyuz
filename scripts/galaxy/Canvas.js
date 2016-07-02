/**
 * @copyright 2016 Chris Peters
 * @license ISC
 */
export default class Canvas {
    constructor(id) {
        this.el = document.getElementById(id);
        this.context = this.el.getContext('2d');

        this.handleResize = this.handleResize.bind(this);
        window.addEventListener("resize", this.handleResize, false);
        this.handleResize();
    }

    handleResize() {
        this.el.width = window.innerWidth;
        this.el.height = window.innerHeight;
    }

    getEl() {
        return this.el;
    }

    getContext() {
        return this.context;
    }
}

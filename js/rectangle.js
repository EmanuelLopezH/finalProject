class Rectangle extends Point{

    #color;
    #width;
    #height;

    constructor(xInit, yInit, width, height, color){
        super(xInit, yInit);
        this.#width = width;
        this.#height = height;
        this.#color = color;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.#color;
        ctx.fillRect(super.x, super.y, this.#width, this.#height)
        ctx.closePath();
    }

    move(){
        super.y += super.vy;
    }
}
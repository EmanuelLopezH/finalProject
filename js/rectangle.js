class Rectangle extends Point{

    #color;
    #outlineColor
    #width;
    #height;

    constructor(xInit, yInit, width, height, color, outColor){
        super(xInit, yInit);
        this.#width = width;
        this.#height = height;
        this.#color = color;
        this.#outlineColor = outColor || color;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.#color;
        ctx.fillRect(super.x, super.y, this.#width, this.#height);

        ctx.strokeStyle = this.#outlineColor;
        ctx.strokeRect(super.x, super.y, this.#width, this.#height);
        ctx.closePath();
    }

    move(){
        super.y += super.vy;
    }
}
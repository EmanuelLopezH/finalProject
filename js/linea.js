class Line{

    #p1
    #p2
    #color;

    constructor(p1, p2){
        this.#p1 = p1;
        this.#p2 = p2;
        this.#color = "white";
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.#p1.x, this.#p1.y);
        ctx.lineTo(this.#p2.x, this.#p2.y);
        ctx.strokeStyle = this.#color
        ctx.stroke();
        ctx.closePath()
    }
}
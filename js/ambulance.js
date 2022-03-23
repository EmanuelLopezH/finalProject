class Ambulance extends Cars{
    #img
    #width
    #height
    constructor(x, y){
        super(x, y);
        let ambulance = new Image();
        ambulance.src = "images/ambulance.png"
        this.#img = ambulance;
        this.#width = 90;
        this.#height = 150;
    }

    draw(ctx){
        ctx.drawImage(this.#img, 0, 0, 500, 1000, super.x, super.y, this.#width, this.#height);
    }
}

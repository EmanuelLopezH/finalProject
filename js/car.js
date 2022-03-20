class Cars extends Point{

    #sizeX
    #sizeY
    #frameX
    #width
    #height
    #img

    constructor(x, y){
        super(x, y)
        let img = new Image();
        img.src = "images/cars.png" 
        this.#img = img;
 
        this.#width = 75
        this.#height = 110
        this.#sizeX = 250
        this.#sizeY = 500
        this.#frameX = Math.floor(Math.random() * 4)
    }

    draw(ctx){
        ctx.drawImage(this.#img, this.#sizeX * this.#frameX, 0, this.#sizeX, this.#sizeY, super.x, super.y, this.#width, this.#height)
    }

    get limL(){
        return super.x;
    }
    get limR(){
        return super.x + this.#width;
    }
    get limA(){
        return super.y;
    }
    get limD(){
        return super.y + this.#height;
    }

    collide(otherCar){
        let answer;
        if((this.limL < otherCar.limD)||
        (this.limD > otherCar.limL) ||
        (this.limA < otherCar.limD) ||
        (this.limD > otherCar.limA)
        ){
            answer = true;
        }
        else{
            answer = false;
        }
        return answer;
    }
}
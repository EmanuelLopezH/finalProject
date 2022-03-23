class Point{
    #x;
    #y;
    #vx;
    #vy;

    constructor(initialX, initialY){
        this.#x = initialX;
        this.#y = initialY;
        this.#vx = 3;
        this.#vy = 3;
    }

    get x(){
        return this.#x
    }
    set x(value){
        this.#x = value
    }
    get y(){
        return this.#y
    }
    set y(value){
        this.#y = value
    }
    get vx(){
        return this.#vx
    }
    set vx(value){
        this.#vx = value
    }
    get vy(){
        return this.#vy
    }
    set vy(value){
        this.#vy = value
    }

    up(){
        this.#y -= 10;
    }
    down(){
        this.#y += 10;
    }
    left(){
        this.#x -= 10;
    }
    right(){
        this.#x += 10;
    }

    move(){
        this.#y += this.#vy
    }
}

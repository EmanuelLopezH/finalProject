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
        this.#x -= 5;
    }
    down(){
        this.#x += 5;
    }
    left(){
        this.#y -= 5;
    }
    right(){
        this.#y += 5;
    }

    move(){
        this.#y += this.#vy
    }
}

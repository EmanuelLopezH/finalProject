class User{
    #name;
    #score;
    #coins;

    constructor(name, score){
        this.#name = name;
        this.#score = score;
        this.#coins = 0;
    }

    addCoins(coins){
        this.#coins += coins;
    }

    get coins(){
        return this.#coins;
    }
    set coins(value){
        this.#coins = value;
    }
    get name(){
        return this.#name;
    }
    set name(value){
        this.#name = value;
    }
    get score(){
        return this.#score;
    }
    set score(value){
        this.#score = value;
    }
}
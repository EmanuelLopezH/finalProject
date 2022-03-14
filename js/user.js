class User{
    #name;
    #score;

    constructor(name, score){
        this.#name = name;
        this.#score = score;
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
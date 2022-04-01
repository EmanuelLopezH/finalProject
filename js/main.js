window.addEventListener("load", main);

function main() {
    /* Se declaran las variables */
    let canvas = document.getElementById("canva");
    let ctx = canvas.getContext("2d");
    let body = document.getElementById("body");
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    let btn = document.getElementById("btn-start");
    let streetLine = [];
    let startLine = [];
    let car = [];
    let div = (w - 160) / 4;
    let sprite = new Image;
    let ambulanc = [];
    ambulanc.push(new Ambulance(80 + 2 * div - 40, h / 2 + 240));
    let ptj = 0;
    let requestId;
    let intervalCars, intervalScore;
    let divGO = document.getElementById("game-over")
    divGO.classList.remove("active")
    ambulanc[0].draw(ctx);
    sprite.src = "images/cars.png";
    /* Se crean los listerners y se llaman funciones */
    btn.addEventListener("click", saveUser);
    window.addEventListener("keydown", (e) => {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRigth"].indexOf(e.code) > -1)
            e.preventDefault();
    });
    score();
    media();
    lines();
    startLines();
    streetLines();

    /* Función para mover la ambulacia */
    function moveAmbulance(e) {
        ctx.clearRect(0, 0, w, h)
        switch (e.key) {
            case "ArrowLeft":
                ambulanc[0].left();
                if (ambulanc[0].x < 90)
                    ambulanc[0].x = 100
                break;
            case "ArrowRight":
                ambulanc[0].right();
                if (ambulanc[0].x + 90 > 620)
                    ambulanc[0].x = 620 - 90
                break;
            case "ArrowUp":
                ambulanc[0].up();
                if (ambulanc[0].y < 0)
                    ambulanc[0].y = 0
                break;
            case "ArrowDown":
                ambulanc[0].down();
                if (ambulanc[0].y + 150 > h)
                    ambulanc[0].y = h - 150
                break;
        }
        ambulanc[0].draw(ctx);
    }
    /* Función para crear los carros */
    function cars() {
        let p1, p2, p3, pr;
        p1 = new Point(80 + div - 40, -110);
        p2 = new Point(80 + 2 * div - 40, -110);
        p3 = new Point(80 + 3 * div - 40, -110);
        pr = randInt(1, 3);
        if (pr == 1) {
            car.push(new Cars(p1.x, p1.y))
            for (let i = 0; i < car.length; i++) {
                car[i].draw(ctx);
            }
        }
        if (pr == 2) {
            car.push(new Cars(p2.x, p2.y))
            for (let i = 0; i < car.length; i++) {
                car[i].draw(ctx);
            }
        }
        if (pr == 3) {
            car.push(new Cars(p3.x, p3.y))
            for (let i = 0; i < car.length; i++) {
                car[i].draw(ctx);
            }
        }
    }
    /* Función para darle movimiento a todos los objetos del canvas */
    function moveStarL() {
        ctx.clearRect(0, 0, w, h);
        lines();
        for (let i = 1; i < startLine.length - 1; i++) {
            startLine[i].vy = 4.5;
            startLine[i].move();
        }
        for (let i = 0; i < startLine.length; i++) {
            startLine[i].draw(ctx);
        }
        for (let i = 0; i < streetLine.length; i++) {
            streetLine[i].vy = 4.5;
            streetLine[i].move()
        }
        let sl = streetLine.length - 1
        if (streetLine[sl].y > 70) {
            let p1, p2, p3, p4;
            /* p1 = new Point(140, -70); */
            p2 = new Point(140 * 2 - 5, -70);
            p3 = new Point(140 * 3 - 10, -70);
            /* p4 = new Point(140*4-15, -70); */
            /* streetLine.push(new Rectangle(p1.x, p1.y, 15, 70, "white")); */
            streetLine.push(new Rectangle(p2.x, p2.y, 15, 70, "white"));
            streetLine.push(new Rectangle(p3.x, p3.y, 15, 70, "white"));
        }
        for (let i = 0; i < streetLine.length; i++) {
            streetLine[i].draw(ctx)
        }
        for (let i = 0; i < car.length; i++) {
            car[i].move();
        }
        for (let i = 0; i < car.length; i++) {
            car[i].draw(ctx);
        }
        requestId = window.requestAnimationFrame(moveStarL);
        divGO.classList.remove("active")


        for (let i = 0; i < car.length; i++) {
            if (car[i].collide(ambulanc[0])) {
                body.removeEventListener("keydown", moveAmbulance)
                window.cancelAnimationFrame(requestId);
                window.clearInterval(intervalScore);
                window.clearInterval(intervalCars);
                ctx.clearRect(0, 0, w, h)
                car = []
                if(localStorage.getItem("Best")){
                    let best = localStorage.getItem("Best");
                    if(ptj > best){
                        localStorage.setItem("Best", ptj);
                    }
                }
                else{
                    localStorage.setItem("Best", ptj)
                }
                gameOver()
                break
            }
        }

        ambulanc[0].draw(ctx);

    }
    /* Función para crear las líneas de la calle que se mueven */
    function streetLines() {
        let p1, p2, p3, p4;
        p1 = new Point(140, -70);
        p2 = new Point(140 * 2 - 5, -70);
        p3 = new Point(140 * 3 - 10, -70);
        p4 = new Point(140 * 4 - 15, -70);
        let ll = startLine.length - 1;
        streetLine.push(new Rectangle(p1.x, p1.y - 24, 15, 70, "white"));
        streetLine.push(new Rectangle(p2.x, p2.y - 24, 15, 70, "white"));
        streetLine.push(new Rectangle(p3.x, p3.y - 24, 15, 70, "white"));
        streetLine.push(new Rectangle(p4.x, p4.y - 24, 15, 70, "white"));
        for (let i = 0; i < streetLine.length; i++) {
            streetLine[i].draw(ctx)
        }

        if (startLine[ll].y > h) {
            delete startLine
        }
    }
    /* Función para mostrar todas las líneas al iniciar la página */
    function startLines() {
        lines();
        let l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14;
        l1 = new Rectangle(140, 0, 15, h, "white");

        l2 = new Rectangle(140 * 2 - 5, h - 3 - 70, 15, 70, "white");
        l3 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 3, 15, 70, "white");
        l4 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 5, 15, 70, "white");
        l5 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 7, 15, 70, "white");
        l6 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 9, 15, 70, "white");
        l7 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 11, 15, 70, "white");

        l8 = new Rectangle(140 * 3 - 10, h - 3 - 70, 15, 70, "white");
        l9 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 3, 15, 70, "white");
        l10 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 5, 15, 70, "white");
        l11 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 7, 15, 70, "white");
        l12 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 9, 15, 70, "white");
        l13 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 11, 15, 70, "white");

        l14 = new Rectangle(140 * 4 - 15, 0, 15, h, "white");

        startLine = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14];
        for (let i = 0; i < startLine.length; i++) {
            startLine[i].draw(ctx);
        }
    }
    /* Fución para guardar los datos del usuario y llamar algunas otras funciones */
    function saveUser() {
        let cuenta = new User();
        let nameUser = document.getElementById("name").value;
        let scoreUser = parseInt(document.getElementById("score").value);
        cuenta.name = nameUser;
        cuenta.score = scoreUser;
        let user = { name: nameUser, score: scoreUser };
        if (localStorage.getItem("User") == null) {
            localStorage.setItem("User", JSON.stringify(user));
        }
        intervalCars = window.setInterval(cars, 1900);
        intervalScore = window.setInterval(score, 1000);
        body.addEventListener("keydown", moveAmbulance);
        requestId = window.requestAnimationFrame(moveStarL);
    }
    /* Función para el puntaje */
    function score() {
        let sr = document.getElementById("score");
        ptj += 1;
        sr.value = ptj;
        localStorage.setItem("Score", ptj)
        if (ptj > 50) {
            for (let i = 0; i < car.length; i++) {
                car[i].vy += 0.5;
            }
        }
        if (ptj > 100) {
            for (let i = 0; i < car.length; i++) {
                car[i].vy += 0.5;
            }
        }
        if (ptj > 150) {
            for (let i = 0; i < car.length; i++) {
                car[i].vy += 1;
            }
        }
        return ptj;
    }
    /* Función para los botones de las redes */
    function media() {
        let github = document.getElementById("githubdiv");
        let gitdiv = document.getElementById("gitdiv");
        let contact = document.getElementById("contactdiv");
        let contdiv = document.getElementById("contdiv");
        let mail = document.getElementById("maildiv");
        let maildiv = document.getElementById("madiv");

        mail.addEventListener("click", () => {
            mail.classList.toggle("active");
            maildiv.classList.toggle("active");
            github.classList.remove("active");
            gitdiv.classList.remove("active");
            contact.classList.remove("active");
            contdiv.classList.remove("active");
        })

        github.addEventListener("click", function () {
            github.classList.toggle("active");
            gitdiv.classList.toggle("active");
            mail.classList.remove("active");
            maildiv.classList.remove("active");
            contact.classList.remove("active");
            contdiv.classList.remove("active");
        })

        contact.addEventListener("click", () => {
            contact.classList.toggle("active");
            contdiv.classList.toggle("active");
            github.classList.remove("active");
            gitdiv.classList.remove("active");
            mail.classList.remove("active");
            maildiv.classList.remove("active");
        })
    }
    /* Función para las líneas verticales estáticas */
    function lines() {
        let point1, point2, point3, point4;
        point1 = new Point(80, 0);
        point2 = new Point(80, h);
        point3 = new Point(w - 80, 0);
        point4 = new Point(w - 80, h);

        let line1, line2;
        line1 = new Line(point1, point2);
        line2 = new Line(point3, point4);
        line1.draw(ctx);
        line2.draw(ctx);

    }
    /* Función para los números aleatorios */
    function randInt(a, b) {
        return Math.floor(Math.random() * (1 + b - a) + a)
    }

}

function gameOver() {
    let canvas = document.getElementById("canva");
    let ctx = canvas.getContext("2d");
    let body = document.getElementById("body")

    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    let btnTA = document.getElementById("try-again")
    let divGO = document.getElementById("game-over")
    divGO.classList.add("active")
    lines();
    startLines();
    btnTA.addEventListener("click", () => {
        ctx.clearRect(0, -500, w, h + 500)
        main();
        divGO.classList.remove("active")
        location.reload();
    })

    function lines() {
        let point1, point2, point3, point4;
        point1 = new Point(80, 0);
        point2 = new Point(80, h);
        point3 = new Point(w - 80, 0);
        point4 = new Point(w - 80, h);

        let line1, line2;
        line1 = new Line(point1, point2);
        line2 = new Line(point3, point4);
        line1.draw(ctx);
        line2.draw(ctx);

    }
    function startLines() {
        lines();
        let l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14;
        l1 = new Rectangle(140, 0, 15, h, "white");

        l2 = new Rectangle(140 * 2 - 5, h - 3 - 70, 15, 70, "white");
        l3 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 3, 15, 70, "white");
        l4 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 5, 15, 70, "white");
        l5 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 7, 15, 70, "white");
        l6 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 9, 15, 70, "white");
        l7 = new Rectangle(140 * 2 - 5, h - 3 - 70 * 11, 15, 70, "white");

        l8 = new Rectangle(140 * 3 - 10, h - 3 - 70, 15, 70, "white");
        l9 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 3, 15, 70, "white");
        l10 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 5, 15, 70, "white");
        l11 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 7, 15, 70, "white");
        l12 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 9, 15, 70, "white");
        l13 = new Rectangle(140 * 3 - 10, h - 3 - 70 * 11, 15, 70, "white");

        l14 = new Rectangle(140 * 4 - 15, 0, 15, h, "white");

        startLine = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14];
        for (let i = 0; i < startLine.length; i++) {
            startLine[i].draw(ctx);
        }
    }
}
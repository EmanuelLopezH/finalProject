window.addEventListener("load", main);

function main(){
    let canvas = document.getElementById("canva");
    let ctx = canvas.getContext("2d");
    let body = document.getElementById("body");
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    let btn = document.getElementById("btn-start");
    let streetLine = [];
    let startLine = [];
    btn.addEventListener("click", saveUser);
    media();
    lines();
    startLines();
    streetLines()

    function moveStarL(){
        ctx.clearRect(0,0,w,h);
        lines();
        for(let i = 0; i < startLine.length; i++){
            startLine[i].move();
        }
        for(let i = 0; i < startLine.length; i++){
            startLine[i].draw(ctx);
        }
        
        window.requestAnimationFrame(moveStarL);
    }

    function moveStreetL(){
        ctx.clearRect(0,0,w,h)
        lines()
        for(let i = 0; i < streetLine.length; i++){
            streetLine[i].move()
        }
        for(let i = 0; i < streetLine.length; i++){
            streetLine[i].draw() 
        }
    }
    
    function streetLines(){
        let p1, p2, p3, p4;
        p1 = new Point(140, -70);
        p2 = new Point(140*2-5, -70);
        p3 = new Point(140*3-10, -70);
        p4 = new Point(140*4-25, -70);
        let ll = startLine.length - 1;
        let sl = streetLine.length -1
        if(startLine[ll].y > 70){
            streetLine.push(new Rectangle(p1.x, p1.y, 15, 70, "white"));
            streetLine.push(new Rectangle(p2.x, p2.y, 15, 70, "white"));
            streetLine.push(new Rectangle(p3.x, p3.y, 15, 70, "white"));
            streetLine.push(new Rectangle(p4.x, px.y, 15, 70, "white"));

            if(streetLine[sl].y > 70){
                /* streetLine.push(new Rectangle(p1.x, p1.y, 15, 70, "white"));
                streetLine.push(new Rectangle(p2.x, p2.y, 15, 70, "white"));
                streetLine.push(new Rectangle(p3.x, p3.y, 15, 70, "white"));
                streetLine.push(new Rectangle(p4.x, px.y, 15, 70, "white")); */
                alert("Ay!!!!")
            }
        }
        
        if(startLine[ll].y > h){
            delete startLine
        }
    }

    function startLines(){
        lines();
        let l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20, l21, l22, l23, l24;
        l1 = new Rectangle(140, h-3-70, 15, 70, "white");
        l2 = new Rectangle(140, h-3-70*3, 15, 70, "white");
        l3 = new Rectangle(140, h-3-70*5, 15, 70, "white");
        l4 = new Rectangle(140, h-3-70*7, 15, 70, "white");
        l5 = new Rectangle(140, h-3-70*9, 15, 70, "white");
        l6 = new Rectangle(140, h-3-70*11, 15, 70, "white");

        l7 = new Rectangle(140*2-5, h-3-70, 15, 70, "white");
        l8 = new Rectangle(140*2-5, h-3-70*3, 15, 70, "white");
        l9 = new Rectangle(140*2-5, h-3-70*5, 15, 70, "white");
        l10 = new Rectangle(140*2-5, h-3-70*7, 15, 70, "white");
        l11 = new Rectangle(140*2-5, h-3-70*9, 15, 70, "white");
        l12 = new Rectangle(140*2-5, h-3-70*11, 15, 70, "white");

        l13 = new Rectangle(140*3-10, h-3-70, 15, 70, "white");
        l14 = new Rectangle(140*3-10, h-3-70*3, 15, 70, "white");
        l15 = new Rectangle(140*3-10, h-3-70*5, 15, 70, "white");
        l16 = new Rectangle(140*3-10, h-3-70*7, 15, 70, "white");
        l17 = new Rectangle(140*3-10, h-3-70*9, 15, 70, "white");
        l18 = new Rectangle(140*3-10, h-3-70*11, 15, 70, "white");

        l19 = new Rectangle(140*4-15, h-3-70, 15, 70, "white");
        l20 = new Rectangle(140*4-15, h-3-70*3, 15, 70, "white");
        l21 = new Rectangle(140*4-15, h-3-70*5, 15, 70, "white");
        l22 = new Rectangle(140*4-15, h-3-70*7, 15, 70, "white");
        l23 = new Rectangle(140*4-15, h-3-70*9, 15, 70, "white");
        l24 = new Rectangle(140*4-15, h-3-70*11, 15, 70, "white");

        startLine = [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24];
        for(let i = 0; i < startLine.length; i++){
            startLine[i].draw(ctx);
        }
    }

    function saveUser(){
        let cuenta = new User();
        let nameUser = document.getElementById("name").value;
        let scoreUser = parseInt(document.getElementById("score").value);
        let coins = parseInt(document.getElementById("coins").value);
        cuenta.name = nameUser;
        cuenta.score = scoreUser;
        cuenta.coins = coins;
        let user = {name: nameUser, score: scoreUser};
        if(localStorage.getItem("User") == null){
            localStorage.setItem("User", JSON.stringify(user))
        }
        window.requestAnimationFrame(moveStarL);
    }

    function media()
    {
        let github = document.getElementById("githubdiv");
        let gitdiv = document.getElementById("gitdiv");
        let contact = document.getElementById("contactdiv");
        let contdiv = document.getElementById("contdiv");
        let mail = document.getElementById("maildiv");
        let maildiv = document.getElementById("madiv");

        mail.addEventListener("click", ()=>{
        mail.classList.toggle("active");
        maildiv.classList.toggle("active");
        github.classList.remove("active");
        gitdiv.classList.remove("active");
        contact.classList.remove("active");
        contdiv.classList.remove("active");
        })

        github.addEventListener("click", function(){
        github.classList.toggle("active");
        gitdiv.classList.toggle("active");
        mail.classList.remove("active");
        maildiv.classList.remove("active");
        contact.classList.remove("active");
        contdiv.classList.remove("active");
        })

        contact.addEventListener("click", ()=>{
        contact.classList.toggle("active");
        contdiv.classList.toggle("active");
        github.classList.remove("active");
        gitdiv.classList.remove("active");
        mail.classList.remove("active");
        maildiv.classList.remove("active");
        })
    }

    function lines() 
    {
        let point1, point2, point3, point4, point5, point6, point7, point8, point9, point10;
        let div = (w - 160) / 4
        point1 = new Point(80, 0);
        point2 = new Point(80, h);
        point3 = new Point(w - 80, 0);
        point4 = new Point(w - 80, h);
        point5 = new Point(80 + div, 0);
        point6 = new Point(80 + div, h);
        point7 = new Point(80 + 2 * div, 0);
        point8 = new Point(80 + 2 * div, h);
        point9 = new Point(80 + 3 * div, 0);
        point10 = new Point(80 + 3 * div, h);

        let line1, line2, line3, line4, line5;
        line1 = new Line(point1, point2);
        line2 = new Line(point3, point4);
        line3 = new Line(point5, point6);
        line4 = new Line(point7, point8);
        line5 = new Line(point9, point10);
        line1.draw(ctx);
        line2.draw(ctx);
        line3.draw(ctx);
        line4.draw(ctx);
        line5.draw(ctx);

    }

    function randInt(a,b){
        return Math.floor(Math.random()* (1 + b - a) + a)
    }

}
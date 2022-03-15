window.addEventListener("load", main)

function main(){
    let canvas = document.getElementById("canva");
    let ctx = canvas.getContext("2d");
    let w = canvas.clientWidth
    let h = canvas.clientHeight
    let btn = document.getElementById("btn-start")
    lines();
    media();

    function media()
    {
        let github = document.getElementById("githubdiv");
        let gitdiv = document.getElementById("gitdiv");
        let contact = document.getElementById("contactdiv");
        let contdiv = document.getElementById("contdiv")
        let mail = document.getElementById("maildiv");
        let maildiv = document.getElementById("madiv");

        mail.addEventListener("click", ()=>{
        mail.classList.toggle("active");
        maildiv.classList.toggle("active");
        github.classList.remove("active");
        gitdiv.classList.remove("active")
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
        point7 = new Point(80 + 2 * div, 0)
        point8 = new Point(80 + 2 * div, h)
        point9 = new Point(80 + 3 * div, 0)
        point10 = new Point(80 + 3 * div, h)

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
        line5.draw(ctx)
    }

    function randInt(a,b){
        return Math.floor(Math.random()* (1 + b - a) + a)
    }

}
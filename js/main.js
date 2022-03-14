window.addEventListener("load", main)

function main(){
    let canvas = document.getElementById("canva");
    let ctx = canvas.getContext("2d");
    let w = canvas.clientWidth
    let h = canvas.clientHeight
    ctx.fillStyle = "red"
    ctx.fillRect(0,0,20,20)
    let github = document.getElementById("githubdiv");
    github.addEventListener("click", function(){
        github.classList.toggle("active")
    })
    let contact = document.getElementById("contactdiv");
    contact.addEventListener("click", ()=>{
        contact.classList.toggle("active")
    })
    let mail = document.getElementById("maildiv");
    mail.addEventListener("click", ()=>{
        mail.classList.toggle("active")
    })

    let point1, point2, point3, point4, point5, point6, point7, point8;
    point1 = new Point(70, 0);
    point2 = new Point(70, h);
    point3 = new Point(930, 0);
    point4 = new Point(930, h);

    let line1, line2, line3, line4;
    line1 = new Line(point1, point2);
    line2 = new Line(point3, point4);
    line1.draw(ctx);
    line2.draw(ctx);
}
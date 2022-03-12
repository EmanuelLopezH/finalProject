window.addEventListener("load", main)

function main(){
    let canvas = document.getElementById("canva");
    let ctx = canvas.getContext("2d");
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
}
window.addEventListener("load", main)

function main(){
    let github = document.getElementById("githubdiv")
    github.addEventListener("click", function(){
        github.classList.toggle("active")
    })
    let contact = document.getElementById("contactdiv")
    contact.addEventListener("click", ()=>{
        contact.classList.toggle("active")
    })
}
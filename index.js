console.clear()

const hambIcon = document.querySelector("#hamb-icon")
const menuItems = document.querySelector(".menu-items")


hambIcon.addEventListener("click", ()=>{
    menuItems.classList.toggle("visible")
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 480) {
        menuItems.classList.remove("visible");
    }
});


// PORTFOLIO PAGE

const projectsArray = []

const projectContainer = document.createElement("div")
const projectImg = document.createElement("img")
const projectTitle = document.createElement("h3")
const projectDescription = document.createElement("p")
const projectLink = document.createElement("a")



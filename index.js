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
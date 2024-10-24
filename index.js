console.clear()

const hambIcon = document.querySelector("#hamb-icon")
const menuItems = document.querySelector(".menu-items")


hambIcon.addEventListener("click", ()=>{
    menuItems.classList.toggle("visible")
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
        menuItems.classList.remove("visible");
    }
});


// PORTFOLIO PAGE

const projectsArray = [{
    name: "Portfolio Website",
    img: "https://picsum.photos/400/300?random=1",
    repository: "https://github.com/user/portfolio",
    description: "A personal portfolio showcasing skills and projects."
  },
  {
    name: "Task Manager App",
    img: "https://picsum.photos/400/300?random=2",
    repository: "https://github.com/user/task-manager",
    description: "A simple web app to manage daily tasks with CRUD operations."
  },
  {
    name: "E-commerce Website",
    img: "https://picsum.photos/400/300?random=3",
    repository: "https://github.com/user/ecommerce-site",
    description: "An online store with shopping cart and product search functionality."
  },
  {
    name: "Weather Dashboard",
    img: "https://picsum.photos/400/300?random=4",
    repository: "https://github.com/user/weather-dashboard",
    description: "A weather app that displays current conditions based on user location."
  },
  {
    name: "Blog Platform",
    img: "https://picsum.photos/400/300?random=5",
    repository: "https://github.com/user/blog-platform",
    description: "A blog platform where users can write, edit, and delete posts."
  },
  {
    name: "Chat Application",
    img: "https://picsum.photos/400/300?random=6",
    repository: "https://github.com/user/chat-app",
    description: "A real-time chat application using WebSockets."
  }
];

//create elements
const portfolioSectionElement = document.querySelector(".portfolio-section")

projectsArray.forEach((project)=>{
    const projectContainer = document.createElement("div")
    projectContainer.classList.add("card")
    portfolioSectionElement.appendChild(projectContainer)

    projectContainer.innerHTML = `
        <img src=${project.img}>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a>${project.repository}</a>
    `


})


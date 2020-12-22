//3d effect//
const content = document.querySelector("#content")
const container = document.querySelector("#container")
const info = document.querySelector("#content .info")

container.addEventListener('mousemove', (e) => {
    let xaxis = (window.innerWidth / 2 - e.pageX) / 15
    let yaxis = (window.innerHeight / 2 - e.pageY) / 15
    content.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`
})

container.addEventListener('mouseenter', (e) => {
    content.style.transition = "none"
    //popout effect
    info.style.transform = "translateZ(150px)"
})

container.addEventListener('mouseleave', (e) => {
    content.style.transition = "all .5s ease"
    content.style.transform = `rotateY(0deg) rotateX(0deg)`
    //popback effect
    info.style.transform = "translateZ(0px)"
})


//Theme toggling
document.querySelector('.themeTog').addEventListener('click', () => {
    document.body.classList.toggle('light')
})

// change navbar styles on scroll
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})

// show / hide frequently asked questions answer
const faqs = document.querySelectorAll(".faq")
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open")
        // change icon
        const icon = faq.querySelector(".faq__icon i")
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-thin fa-minus"
        }
        else {
            icon.className = "fa-solid fa-plus"
        }
    })
})

// show / hide nav bar menu
const menu = document.querySelector(".nav__menu")
const openBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

openBtn.addEventListener("click", () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    openBtn.style.display = "none"
})

// close nav bar
const closeNav = () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    openBtn.style.display = "inline-block"
}

closeBtn.addEventListener("click", closeNav)
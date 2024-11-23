const headerEl = document.getElementById("header")

window.addEventListener("scroll", function() {
    const scrollPos = window.scrollY
    
    if(scrollPos > 100) {
        headerEl.classList.add("header-scroll")
    } else {
        headerEl.classList.remove("header-scroll")
    }
    
    const strelka_hidden = document.querySelector(".strelka-hidden")
    const strelka = document.querySelector(".strelka")
    
    if(scrollPos > 300 && !strelka) {
        strelka_hidden.classList.replace("strelka-hidden", "strelka")
    }
    
    if(scrollPos < 300 && !strelka_hidden) {
        strelka.classList.replace("strelka", "strelka-hidden")
        strelka.setAttribute("id", "fadeOut")
        strelka.addEventListener("animationend", function() {
            strelka.removeAttribute("id", "fadeOut")
        })
    } 
})



const strelka = document.querySelector(".strelka-hidden")
strelka.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})


const when = document.querySelector("#when")
when.addEventListener("click", function() {
    document.querySelector("#when-h2").scrollIntoView({
        behavior: "smooth"})
})

const who = document.querySelector("#who")
who.addEventListener("click", function() {
    document.querySelector("#who-h2").scrollIntoView({
        behavior: "smooth"})
})

const first_russia = document.querySelector("#first-russia")
first_russia.addEventListener("click", function() {
    document.querySelector("#first-russia-h2").scrollIntoView({
        behavior: "smooth"})
})

const first_pc = document.querySelector("#first-pc")
first_pc.addEventListener("click", function() {
    document.querySelector("#first-pc-h2").scrollIntoView({
        behavior: "smooth"})
})
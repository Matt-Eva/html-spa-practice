const main = document.querySelector("main")
console.log(main)

console.log(navigator.onLine)

window.addEventListener("resize", navigateCurrentUrl)

window.addEventListener("hashchange", navigateCurrentUrl)

function navigateCurrentUrl(){
    console.log(window.location.href)
    console.log("change")
    const current = window.location.href
    window.location.assign(current)
}

console.log("hello")

fetch("http://localhost:3000/data")
.then(r => r.json())
.then(console.log)
.catch(e =>{
    console.log("It looks like you're offline at the moment")
    // console.log(e)
    const h2 = document.createElement("h2")
    h2.textContent = "It looks like you're offline at the moment. Please connect to wifi to continue."
    h2.style.position = "fixed"
    h2.style.top = "80px"
    main.append(h2)
})
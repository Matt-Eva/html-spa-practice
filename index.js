window.addEventListener("resize", navigateCurrentUrl)

window.addEventListener("hashchange", navigateCurrentUrl)

function navigateCurrentUrl(){
    console.log(window.location.href)
    console.log("change")
    const current = window.location.href
    window.location.assign(current)
}

console.log("hello")
class Spinner
{
    constructor() {
        let spinner = document.createElement("div")
        let content = document.createElement("div")
        let mask1 = document.createElement("div")
        let mask2 = document.createElement("div")
        
        spinner.setAttribute("class","spinner")
        content.setAttribute("class","content")
        mask1.setAttribute("class","mask1")
        mask2.setAttribute("class","mask2")

        spinner.appendChild(content)
        spinner.appendChild(mask1)
        spinner.appendChild(mask2)

        document.querySelector("body").appendChild(spinner)
    }

    static show() {
        document.querySelector(".spinner").classList.add("active")
    }

    static hide() {
        document.querySelector(".spinner").classList.remove("active")
    }
}
new Spinner()
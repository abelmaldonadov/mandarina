class Spinner
{
    constructor() {
        document.querySelector("body").innerHTML += `
            <div class="spinner">
                <div class="content"></div>
                <div class="mask1"></div>
                <div class="mask2"></div>
            </div>
        `
    }

    show() {
        document.querySelector(".spinner").classList.add("active")
    }

    hide() {
        document.querySelector(".spinner").classList.remove("active")
    }
}
const SPINNER = new Spinner()
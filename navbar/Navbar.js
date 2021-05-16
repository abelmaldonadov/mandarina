class Navbar
{
    constructor(menu) {
        this.menu = "#" + menu.id // #MENU1
        // TOGGLE MENU
        document.querySelectorAll(".menu-open").forEach(btn => {
            if (btn.dataset.target == this.menu) {
                btn.addEventListener("click", () => {
                    menu.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    }
}
document.querySelectorAll(".navbar .menu").forEach(menu => {
    new Navbar(menu)
})
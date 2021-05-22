class Drawer
{
    constructor(drawer) {
        this.drawer = "#"+drawer.id //#DRAWER1
        // TOGGLE MODAL
        document.querySelectorAll(".drawer-open").forEach(btn => {
            if (btn.dataset.target == this.drawer) {
                btn.addEventListener("click", () => {
                    drawer.classList.toggle("active")
                    btn.classList.toggle("active")
                })
            }
        })
    }
}
document.querySelectorAll(".drawer").forEach(drawer => {
    new Drawer(drawer)
})
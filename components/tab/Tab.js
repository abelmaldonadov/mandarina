class Tab
{
    constructor(tab) {
        this.tab = "#"+tab.id
        
        document.querySelectorAll(this.tab+" .tab-open").forEach(tabOpen => {
            tabOpen.addEventListener("click", () => {
                // DESACTIVAR TODOS LOS TAB
                document.querySelectorAll(this.tab+" .tab-open, "+this.tab+" .tab-content").forEach(elem => {
                    elem.classList.remove("active")
                })

                // ACTIVAR TAB
                tabOpen.classList.add("active")
                document.querySelector(this.tab+" .tab-content"+tabOpen.dataset.target).classList.add("active")
            })
        })
    }
}
document.querySelectorAll(".tab").forEach(tab => {
    new Tab(tab)
})
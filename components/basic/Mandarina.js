class Mandarina
{
    constructor() {
        // HEIGHT
        this.getAll("[data-height]").forEach(item => {
            item.style.height += item.dataset.height
        })
        // WIDTH
        this.getAll("[data-width]").forEach(item => {
            item.style.width += item.dataset.width
        })
        // BACKGROUND
        this.getAll("[data-bg]").forEach(item => {
            item.style.backgroundImage += "url("+item.dataset.bg+")"
        })
        // NOTIFY
        this.getAll("[data-notify]").forEach(item => {
            item.classList.add("notify")
        })
        
    }
    getAll(att) {
        return document.querySelectorAll(att)
    }
}
new Mandarina()
class Slider
{
    constructor(slider) {
        this.slider = "#"+slider.id
        this.animation = slider.dataset.animation // AUTO; OPACITY; SLIDE; RADIANCE
        this.duration = slider.dataset.duration * 1000
        this.minHeight = slider.dataset.minHeight + "px"
        this.maxHeight = slider.dataset.maxHeight + "px"
        this.numFrames = slider.children.length

        // PRESETS
        slider.setAttribute("style","--minHeight:"+this.minHeight+"; --maxHeight:"+this.maxHeight+";")
        slider.children[this.numFrames-1].classList.add("prev")
        slider.children[0].classList.add("active")
        slider.children[1].classList.add("next")

        this.autoPlay()
    }

    async autoPlay() {
        this.next(0)
        let i = 1 // EL INDICE DEL FRAME ACTUAL
        await new Promise(resolve => {
            setInterval(() => {
                this.next(i)
                if (i == this.numFrames - 1) { i = 0 }
                else { i++ }
            }, this.duration);
        })
    }

    next(i) {
        let h // FRAME ANTERIOR
        if (i == 0) { h = this.numFrames -1 }
        else { h = i-1 }
        let j // FRAME SIGUIENTE
        if (i == this.numFrames - 1) { j = 0 }
        else { j = i+1 }
        // ACTIVAR EL FRAME ANTERIOR
        document.querySelector(this.slider + " .item.prev").classList.remove("prev")
        document.querySelector(this.slider).children[h].classList.add("prev")
        // ACTIVAR FRAME ACTUAL
        document.querySelector(this.slider + " .item.active").classList.remove("active")
        document.querySelector(this.slider).children[i].classList.add("active")
        // ACTIVAR FRAME SIGUIENTE
        document.querySelector(this.slider + " .item.next").classList.remove("next")
        document.querySelector(this.slider).children[j].classList.add("next")
    }
}
document.querySelectorAll(".slider").forEach(slider => {
    new Slider(slider)
})
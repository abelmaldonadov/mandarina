class Slider
{
    constructor(slider) {
        this.slider = "#"+slider.id
        this.numFrames = slider.children.length
        this.animation = slider.dataset.animation // AUTO
        this.duration = slider.dataset.duration
        this.play()
    }

    async play() {
        for (let i = 0; i < this.numFrames; i++) {
            document.querySelector(this.slider).setAttribute("style", "--animation-duration: " + this.duration +"s;")
            document.querySelectorAll(this.slider + " .item")[0].classList.add("active") // ACTIVAR EL PRIMER FRAME
            await this.next()
        }
    }

    next() {
        return new Promise(resolve => {
            let i = 0
            document.querySelectorAll(this.slider + " .item")[i].classList.add("active")
            setInterval(() => {
                if (i == this.numFrames - 1) {
                    i = 0
                } else {
                    i++
                }
                // CAMBIAR FRAME
                // document.querySelectorAll(this.slider + " .item").forEach(item => item.classList.remove("active"))
                document.querySelectorAll(this.slider + " .item")[i].classList.add("active")
                
                console.log(i + ": next")
                
            }, this.duration * 1000);
        })
    }
}
document.querySelectorAll(".slider").forEach(slider => {
    new Slider(slider)
})
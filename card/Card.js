class Card
{
    constructor(card) {
        this.animation = card.dataset.animation
        this.height = card.dataset.height + "px"

        // PRESETS
        card.style.height = this.height
    }
}
document.querySelectorAll(".card").forEach(card => {
    new Card(card)
})
class ProductCard
{
    constructor(product) {
        this.height = product.dataset.height + "px"

        // PRESETS
        product.style.height = this.height
    }
}
document.querySelectorAll(".product_card").forEach(product => {
    new ProductCard(product)
})
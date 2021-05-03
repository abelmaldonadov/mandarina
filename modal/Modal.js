class Modal
{
    constructor(id){
        this.modal = "#"+id // #MODAL1
        // ABRIR MODAL
        document.querySelectorAll(".modal-open").forEach(btn => {
            if (btn.dataset.target == this.modal) {
                btn.addEventListener("click", () => {
                    document.querySelector(this.modal).classList.add("active")
                    document.querySelector(this.modal+" .content").classList.add("active")
                })
            }
        })
        // CERRAR MODAL
        document.querySelectorAll(this.modal+" .modal-close").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelector(this.modal).classList.remove("active")
                document.querySelector(this.modal+" .content").classList.remove("active")
            })
        })
    }
}
document.querySelectorAll(".modal").forEach(e => {
    new Modal(e.id)
})
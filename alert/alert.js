class Alert
{
    constructor(alert){
        alert.addEventListener("click",() => {
            alert.classList.add("alert-close")
            setTimeout(() => {
                alert.hidden = true
            }, 500);
        })
    }
}
document.querySelectorAll(".alert").forEach(alert => {
    new Alert(alert)
})
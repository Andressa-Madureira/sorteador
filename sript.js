function Clicado() {
    const min = Math.ceil(document.querySelector(".first-input").value)

    const max = Math.floor(document.querySelector(".second-input").value)

    if (min > max) {
        alert("O número mínimo tem que ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)
    }
}





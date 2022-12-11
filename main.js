let input_password = document.getElementById("password")

let input_passwordC = document.getElementById("passwordConfirme")

let olho_fechado = document.getElementById("olho-fechado")

let olho_aberto = document.getElementById("olho-aberto")

console.log(input_password)
olho_fechado.addEventListener(("click"), () => {
    if (olho_aberto.classList.contains("d-none")) {
        olho_aberto.classList.remove("d-none")
        olho_fechado.classList.add("d-none")
        input_password.type = "text"
        input_passwordC.type = "text"
    }
})

console.log(olho_fechado)
olho_aberto.addEventListener(("click"), () => {
    if (olho_fechado.classList.contains("d-none")) {
        olho_fechado.classList.remove("d-none")
        olho_aberto.classList.add("d-none")
        input_password.type = "password"
        input_passwordC.type = "password"
    }
})

console.log(input_passwordC)
olho_fechado.addEventListener(("click"), () => {
    if (olho_aberto.classList.contains("d-none")) {
        olho_aberto.classList.remove("d-none")
        olho_fechado.classList.add("d-none")
        input_passwordC.type = "text"
        input_password.type = "text"
    }
})

console.log(olho_fechado)
olho_aberto.addEventListener(("click"), () => {
    if (olho_fechado.classList.contains("d-none")) {
        olho_fechado.classList.remove("d-none")
        olho_aberto.classList.add("d-none")
        input_passwordC.type = "password"
        input_password.type = "password"
    }
})


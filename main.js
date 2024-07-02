// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnterKey)


// Funções
function handleTryClick(event) {
    event.preventDefault() // Faz com que a página não seja recarregada
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) > -1 && Number(inputNumber.value) < 11 && inputNumber.value != "") {
        if(Number(inputNumber.value) == randomNumber){
            toggleScreen()
            // screen1.classList.add("hide")    // Adiciona a classe "hide" na classe "screen1"
            // screen2.classList.remove("hide") // Remove a classe "hide" da classe "screen2"
    
            // Lógica acima usa o querySelector para manipular as classes das telas quando o usuário acertar o número
    
            document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`  // Para realizar alteração no número de tentativas que o usuário acertou
        }
        
        inputNumber.value = ""
        xAttempts++
    }
    
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleEnterKey(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
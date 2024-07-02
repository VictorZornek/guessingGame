const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

console.log(randomNumber)


function handleClick(event) {
    event.preventDefault() // Faz com que a página não seja recarregada
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide")    // Adiciona a classe "hide" na classe "screen1"
        document.querySelector(".screen2").classList.remove("hide") // Remove a classe "hide" da classe "screen2"

        // Lógica acima usa o querySelector para manipular as classes das telas quando o usuário acertar o número

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`  // Para realizar alteração no número de tentativas que o usuário acertou
    }
    
    xAttempts++
}
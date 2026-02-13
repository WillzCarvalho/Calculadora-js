function addCaracter(caracter){ //pega o valor da tela e adiciona o caracter
    const display = document.querySelector('.display')
    
    //se estiver com o valor 0 e o caracter for um numero, substitui o 0 pelo numero
    if(display.value === '0' && !isNaN(caracter)){
        display.value = caracter
        return
    }

    display.value += caracter
}

function clearScreen(){ //limpa a tela e coloca o valor 0
    const display = document.querySelector('.display')

    display.value = '0'
}

function calculate(){ //pega o valor da tela e calcula o resultado
    const valueInput = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valueInput)
}

function deleteLast(){ //deleta o ultimo caracter da tela
    const display = document.querySelector('.display')

    display.value = display.value.slice(0, -1)
}

function invert(){ //inverte o sinal do numero na tela
    const valueInput = document.querySelector('.display').value

    document.querySelector('.display').value = valueInput * -1
}
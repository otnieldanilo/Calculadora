let textBox = document.querySelector('input')

let primeiro_numero = document.querySelector('p')

let sinal = document.querySelector('span')

function enterNumber(valor){
    if(textBox.value == '0'){
        textBox.value = ''
    }
    textBox.value += valor //acrescentar, para continuar oq já tem 
}

function operacao(accao){
    if(primeiro_numero.innerText != '' && textBox.value != ''){
        igual()
    }
    
    if(accao == 'soma' ){
        sinal.innerText = '+'
    }
    if(accao == 'sub' ){
        sinal.innerText = '-'
    }
    if(accao == 'mult' ){
        sinal.innerText = '*'
    }
    if(accao == 'div' ){
        sinal.innerText = '/'
    }
    primeiro_numero.innerText = textBox.value
    textBox.value = ''
}

function igual(){
    if(sinal.innerText == '+'){
        textBox.value = parseFloat(primeiro_numero.innerText) + parseFloat(textBox.value)
    }
    if(sinal.innerText == '-'){
        textBox.value = parseFloat(primeiro_numero.innerText) - parseFloat(textBox.value)
    }
    if(sinal.innerText == '*'){
        textBox.value = parseFloat(primeiro_numero.innerText) * parseFloat(textBox.value)
    }
    if(sinal.innerText == '/'){
        textBox.value = parseFloat(primeiro_numero.innerText) / parseFloat(textBox.value)
    }
    primeiro_numero.innerText = ''
    sinal.innerText = ''
}

function C(){
    textBox.value = ''
    sinal.innerText = ''
    primeiro_numero.innerText = ''
}

function CE(){
    textBox.value = ''
}

function MoM(){
    textBox.value = parseFloat(textBox.value)*(-1)
}

function del(){
    textBox.value = textBox.value.slice(0,-1) 
}
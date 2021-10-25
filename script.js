let num = document.getElementById('numero')
let val = document.getElementById('valoradicionado')
let res = document.getElementById('respostafinal')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inVal(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if (isNumero(num.value) && !inVal(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        val.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}


function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números adicionados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}</p>`
    }
}    
    function contagem(){
    let inicioCom = document.getElementById('txtini')
    let inicio = Number(inicioCom.value)
    let passoCom = document.getElementById('txtpasso')
    let passo = Number(passoCom.value)
    let finalCom = document.getElementById('txtfim')
    let final = Number(finalCom.value)
    let  resultado = document.querySelector('div#res')
    //verificar se falta dados
    if(inicioCom.value.length == 0 || finalCom.value.length == 0 || passoCom.value.length == 0 ){
        resultado.innerHTML = 'Impossível contar!'
        //window.alert('[Erro]! Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        if(passo <=0){
            window.alert('Passo inválido! Considerando passo 1.')
            passo = 1
        }
        if(inicio < final){
            //contagem crescente
            for(c = inicio; c <= final; c += passo){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(c = inicio; c >= final; c -= passo){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }    
        resultado.innerHTML += ` \u{1F3C1}`
    }
}   

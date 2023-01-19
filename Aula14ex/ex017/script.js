function tabuada(){
    let num = window.document.getElementById('txttabu')
    let tab = window.document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO] Digite um número para gerar sua tabuada!')
    } else{
        let numx = Number(num.value)
        tab.innerHTML = ''
        for(i=0; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${i} x ${numx} = ${i * numx} `
            tab.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}
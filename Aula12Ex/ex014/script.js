function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >=12 && hora <= 18){
        //Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        //Boa Noite!  
        img.src =  'noite.png'
        document.body.style.background = '#515154'
    }
}

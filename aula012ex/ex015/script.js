function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')//document.querySelector('input#txtano')
    var res = document.getElementById('res')//document.querySelector('div#resp')
    if(nasc.value.length == 0 || nasc.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')  // adiciona um elemento img 
        img.setAttribute('id', 'foto')  // adiciona atributos id e name ao elemento img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-H.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-H.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-H.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-H.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-M.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-M.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-M.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-M.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e está com ${idade} anos.`
        res.appendChild(img)  // adiciona elemento img
    }
}
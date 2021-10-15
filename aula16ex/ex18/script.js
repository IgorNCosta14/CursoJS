var vnum = []
var numlista = document.getElementById ('numdig')
var num = document.getElementById('txtnum')
var estado = 0
function guardnum() {
    var n = Number(num.value);
    window.alert(`Estado igual a: ${estado}`)
    if (num.value.length == 0) {
        window.alert('Nenhum número foi digitado! Por favor digite um número.')
    } else {
        if (vnum.indexOf(n) != -1) {
            window.alert('O número já exixte, digite outro número!')
        } else {
            vnum.push(n)
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado! Tamanho do vetor: ${vnum.length}`
            numlista.appendChild(item)
        }
    }
}
function finalizar() {
    estado = 1
    window.alert(`Estado igual a: ${estado}`)
    if (vnum.length == 0) {
        window.alert('[ERRO] Nenhum numero foi adicionado!')
    } else {
        let qb = document.getElementById('quantnum')
        let man = document.getElementById('maiornum')
        let men = document.getElementById('menornum')
        let sn = document.getElementById('somanum')
        let mn = document.getElementById('medianum')
        let soma = 0
        let media = ''
        var maior = 0

        qb.innerHTML = (`Ao todo, temos ${vnum.length} números cadastrados.`)
        for ( let c in vnum) {
            soma += vnum[c]
        }
        media = (soma/vnum.length)
        for (let i=0 ; i <= vnum.length ; i++) {   // ta errado
            if (vnum[i] > vnum[maior]){
                maior = i
            }
        }
        man.innerHTML = (`O maior valor informado é ${maior}`)
        men.innerHTML = (`O menor valor informado é ${vnum[0]}`)
        sn.innerHTML = (`Somando todos os valores, temos ${soma}.`)
        mn.innerHTML = (`A média dos valores digitados é ${(media)}`)
        
    }
}
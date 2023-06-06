const input = document.getElementById('bonec')
const input1 = document.getElementById('cifr')
const cifrao = document.getElementById('cifrao')
const boneco = document.getElementById('boneco')
const parahelp = document.createElement('div')
const parapay = document.createElement('div')

parahelp.innerHTML = "<p>Que tal se voluntariar? <br> Tem vontade de ajudar com serviços e não sabe como? <br> Clica no link abaixo para se cadastrar e acharmos sua área de atuação</p><a href=''><i class='bx bxs-hand-up bx-lg' style='color:#f57878'  ></i></a>"
parapay.innerHTML = "<p>Se você tem interesse em ajudar financeiramente, clica no ícone abaixo para selecionar a melhor opção para você ou clica no ícone do Whatsapp para tirar as dúvidas diretamente com a gente!</p><a href=''><i class='bx bxs-credit-card bx-lg' style='color:#f57878'  ></i></a>"

function ativar() {
    if (input.checked) {
        cifrao.parentNode.replaceChild(parahelp, cifrao)
        parahelp.setAttribute('class', 'help')
    } else {
        parahelp.parentNode.replaceChild(cifrao, parahelp)
    }
}

function ativar1() {
    if (input1.checked) {
        boneco.parentNode.replaceChild(parapay, boneco)
        parapay.setAttribute('class', 'pay')
    } else {
        parapay.parentNode.replaceChild(boneco, parapay)
    }
}
const doar = document.getElementById('doar')

function showText() {
    doar.removeAttribute('class', 'txt-btnDoacoes')
    doar.setAttribute('class', 'txt-btnDoacoes1')
}

function hideText() {
    doar.removeAttribute('class', 'txt-btnDoacoes1')

    doar.setAttribute('class', 'txt-btnDoacoes')
}


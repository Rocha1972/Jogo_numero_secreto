function verificaSeChuteValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }
    if (muneroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: O número precisa estar entre o ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero == numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>Número secreto ** ${numeroSecreto} **</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente!</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fas fa-arrow-circle-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fas fa-arrow-circle-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function muneroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

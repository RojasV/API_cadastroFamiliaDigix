module.exports = familia => {

    const familiaPontuada = familia
    let pontuacao = 0



    if (familiaPontuada.rendaTotal <= 900) {
        pontuacao += 5
    }
    if (familiaPontuada.rendaTotal > 900 && familia.rendaTotal <= 1500) {
        pontuacao += 3
    }
    if (familiaPontuada.rendaTotal > 1500 && familia.rendaTotal <= 1500) {
        pontuacao += 1
    }
    if (familiaPontuada.idadePretendente >= 45) {
        pontuacao += 3
    }
    if (familiaPontuada.idadePretendente < 30) {
        pontuacao += 1
    }
    if (familiaPontuada.quantidadeDependentes < 3 && familiaPontuada.quantidadeDependentes > 0) {
        pontuacao += 2
    }
    if (familiaPontuada.quantidadeDependentes >= 3) {
        pontuacao += 3
    }



    return pontuacao


}
function calcular() {
    var nomeInput = document.getElementById("nomeInput");
    var idadeInput = document.getElementById("idadeInput");
    var nome = nomeInput.value;
    var idade = parseInt(idadeInput.value);

    if (idade >= 0 && idade < 15) {
        alert(nome + '  você ainda é uma criança');
    } else if (idade >= 15 && idade < 30) {
        alert(nome + '  você ainda é um (a) jovem ');
    } else if (idade >= 30 && idade < 60) {
        alert(nome + ' você ja é um (a) adulto');
    } else if (idade >= 60) {
        alert(nome + 'você ja é um (a) idoso');
    }
}
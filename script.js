function contarPalavras() {
    // Obter o conteúdo do textarea
    var texto = document.getElementById('textArea').value;

    // Remover espaços em branco extras no início e no final do texto
    texto = texto.trim();

    // Dividir o texto em palavras usando espaços como delimitadores
    var palavras = texto.split(/\s+/);

    // Filtrar palavras vazias
    palavras = palavras.filter(function (palavra) {
        return palavra.length > 0;
    });

    // Contar o número de palavras
    var numeroDePalavras = palavras.length;

    // Atualizar o resultado na página
    document.getElementById('resultado').innerHTML = 'Número de palavras: ' + numeroDePalavras;
}
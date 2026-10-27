function validarTexto(mensagem) {
    let valor = prompt(mensagem);
    while (valor === null || valor.trim() === "") {
        alert("O campo não pode ficar vazio. Tente novamente.");
        valor = prompt(mensagem);
    }
    return valor.trim();
}

function validarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (valor === null || valor.trim() === "" || isNaN(Number(valor))) {
        alert("Digite um número válido. Tente novamente.");
        valor = prompt(mensagem);
    }
    return Number(valor);
}

function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - safra;
    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

document.getElementById("btnIniciar").addEventListener("click", function() {
    let totalCadastros = 0;
    let estoqueBaixoCount = 0;
    let safraMaisAntiga = 9999;
    let nomeMaisAntigo = "";
    
    let nome1 = "", safra1 = 0, qtd1 = 0;
    let nome2 = "", safra2 = 0, qtd2 = 0;
    let nome3 = "", safra3 = 0, qtd3 = 0;
    let nome4 = "", safra4 = 0, qtd4 = 0;
    let nome5 = "", safra5 = 0, qtd5 = 0;

    let continuar = "s";

    while (continuar.toLowerCase() === "s" && totalCadastros < 5) {
        totalCadastros++;
        
        let nome = validarTexto("Digite o nome do vinho " + totalCadastros + ":");
        let safra = validarNumero("Digite a safra (ano) do vinho " + totalCadastros + ":");
        let quantidade = validarNumero("Digite a quantidade em estoque do vinho " + totalCadastros + ":");

        if (totalCadastros === 1) { nome1 = nome; safra1 = safra; qtd1 = quantidade; }
        else if (totalCadastros === 2) { nome2 = nome; safra2 = safra; qtd2 = quantidade; }
        else if (totalCadastros === 3) { nome3 = nome; safra3 = safra; qtd3 = quantidade; }
        else if (totalCadastros === 4) { nome4 = nome; safra4 = safra; qtd4 = quantidade; }
        else if (totalCadastros === 5) { nome5 = nome; safra5 = safra; qtd5 = quantidade; }

        if (verificarEstoqueBaixo(quantidade)) {
            estoqueBaixoCount++;
            alert("Atenção: O vinho " + nome + " está com estoque baixo!");
        }

        let classificacao = classificarVinho(safra);
        console.log("Vinho: " + nome + " | Safra: " + safra + " | Estoque: " + quantidade + " | Classificação: " + classificacao);

        if (safra < safraMaisAntiga) {
            safraMaisAntiga = safra;
            nomeMaisAntigo = nome;
        }

        if (totalCadastros < 5) {
            continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
            while (continuar === null || (continuar.toLowerCase() !== "s" && continuar.toLowerCase() !== "n")) {
                continuar = prompt("Digite apenas 's' para sim ou 'n' para não:");
            }
        }
    }

    alert("Sistema finalizado!\n\nTotal de cadastros: " + totalCadastros + "\nVinhos com estoque baixo: " + estoqueBaixoCount + "\nVinho com a safra mais antiga: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")");
    console.log("Resumo Final -> Cadastros: " + totalCadastros, "Estoque Baixo: " + estoqueBaixoCount, "Mais Antigo: " + nomeMaisAntigo);
});
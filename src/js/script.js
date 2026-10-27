function validarTexto(mensagem) {
    let valor = prompt(mensagem);

    while (valor === null || valor.trim() === "") {
        alert("O campo não pode ficar vazio. Tente novamente.");
        valor = prompt(mensagem);
    }

    return valor.trim();
}

function validarNumero(mensagem, minimo, maximo) {
    let valor = prompt(mensagem);
    let numero = Number(valor);

    while (
        valor === null ||
        valor.trim() === "" ||
        isNaN(numero) ||
        numero < minimo ||
        numero > maximo
    ) {
        alert("Digite um valor válido.");
        valor = prompt(mensagem);
        numero = Number(valor);
    }

    return numero;
}

function perguntarSimNao(mensagem) {
    let resposta = prompt(mensagem);

    while (
        resposta === null ||
        (resposta.toLowerCase() !== "s" && resposta.toLowerCase() !== "n")
    ) {
        resposta = prompt("Digite apenas 's' para sim ou 'n' para não:");
    }

    return resposta.toLowerCase();
}

function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

function mostrarDadosVinho(nome, safra, quantidade) {
    const classificacao = classificarVinho(safra);
    const estoque = verificarEstoqueBaixo(quantidade)
        ? "Estoque baixo"
        : "Estoque normal";

    const mensagem =
        "Vinho: " + nome +
        "\nSafra: " + safra +
        "\nQuantidade: " + quantidade +
        "\nClassificação: " + classificacao +
        "\nSituação: " + estoque;

    console.log(mensagem);
    alert(mensagem);
}

document.getElementById("btnIniciar").addEventListener("click", function () {
    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;

    let safraMaisAntiga = 9999;
    let nomeMaisAntigo = "";

    let nome1 = "", safra1 = 0, quantidade1 = 0;
    let nome2 = "", safra2 = 0, quantidade2 = 0;
    let nome3 = "", safra3 = 0, quantidade3 = 0;
    let nome4 = "", safra4 = 0, quantidade4 = 0;
    let nome5 = "", safra5 = 0, quantidade5 = 0;

    let continuar = "s";
    const anoAtual = new Date().getFullYear();

    while (continuar === "s" && totalCadastros < 5) {
        totalCadastros++;

        const nome = validarTexto(
            "Digite o nome do vinho " + totalCadastros + ":"
        );

        const safra = validarNumero(
            "Digite a safra do vinho " + totalCadastros + ":",
            0,
            anoAtual
        );

        const quantidade = validarNumero(
            "Digite a quantidade em estoque do vinho " + totalCadastros + ":",
            0,
            1000000
        );

        if (totalCadastros === 1) {
            nome1 = nome;
            safra1 = safra;
            quantidade1 = quantidade;
        } else if (totalCadastros === 2) {
            nome2 = nome;
            safra2 = safra;
            quantidade2 = quantidade;
        } else if (totalCadastros === 3) {
            nome3 = nome;
            safra3 = safra;
            quantidade3 = quantidade;
        } else if (totalCadastros === 4) {
            nome4 = nome;
            safra4 = safra;
            quantidade4 = quantidade;
        } else if (totalCadastros === 5) {
            nome5 = nome;
            safra5 = safra;
            quantidade5 = quantidade;
        }

        if (verificarEstoqueBaixo(quantidade)) {
            totalEstoqueBaixo++;
        }

        if (safra < safraMaisAntiga) {
            safraMaisAntiga = safra;
            nomeMaisAntigo = nome;
        }

        mostrarDadosVinho(nome, safra, quantidade);

        if (totalCadastros < 5) {
            continuar = perguntarSimNao(
                "Deseja cadastrar outro vinho? (s/n)"
            );
        }
    }

    const resumo =
        "Sistema finalizado!" +
        "\n\nTotal de cadastros: " + totalCadastros +
        "\nVinhos com estoque baixo: " + totalEstoqueBaixo +
        "\nVinho com a safra mais antiga: " +
        nomeMaisAntigo + " (" + safraMaisAntiga + ")";

    console.log(resumo);
    alert(resumo);
});
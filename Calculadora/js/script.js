function atualizarVisor(valor) {
    document.getElementById('resultado').innerText = valor;
}

let valorAtual = '0';
let operacao = null;
let valorAnterior = null;

function clicarBotao(botao) {
    const valorBotao = botao.innerText;

    if (!isNaN(parseFloat(valorBotao)) || valorBotao === '.') {
        if (valorAtual === '0') {
            valorAtual = valorBotao === '.' ? '0.' : valorBotao;
        } else {
            valorAtual += valorBotao;
        }
    } else if (valorBotao === 'C') {
        valorAtual = '0';
        operacao = null;
        valorAnterior = null;
    } else if (valorBotao === 'CE') {
        valorAtual = '0';
    } else if (valorBotao === '%' || valorBotao === '/' || valorBotao === '*' || valorBotao === '-' || valorBotao === '+') {
        if (operacao) {
            calcularResultado();
        }
        valorAnterior = valorAtual;
        valorAtual = '0';
        operacao = valorBotao;
    } else if (valorBotao === '=') {
        calcularResultado();
    }
    atualizarVisor(valorAtual);
}

function calcularResultado() {
    if (!operacao || valorAnterior === null) {
        return;
    }
    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorAtual);

    switch (operacao) {
        case '%':
            valorAtual = (num1 * num2) / 100;
            break;
        case '/':
            valorAtual = num1 / num2;
            break;
        case '*':
            valorAtual = num1 * num2;
            break;
        case '-':
            valorAtual = num1 - num2;
            break;
        case '+':
            valorAtual = num1 + num2;
            break;
    }
    operacao = null;
    valorAnterior = null;
}

const botoes = document.getElementsByClassName('botao');
for (const botao of botoes) {
    botao.addEventListener('click', () => clicarBotao(botao));
}
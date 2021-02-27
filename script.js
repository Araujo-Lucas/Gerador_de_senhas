const senhaEl = document.getElementById('senha');
const copyEl = document.getElementById('copy');
const tamanhoEl = document.getElementById('tamanho');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+=";

function getMinusculas()
{
    return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
}

function getMaiusculas()
{
    return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
}

function getNumeros()
{
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getSimbolos()
{
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function gerarSenha()
{
    const tamanho = tamanhoEl.value;
    let senha = "";

    if(upperEl.checked)
    {
        senha += getMaiusculas()
    }

    if(lowerEl.checked)
    {
        senha += getMinusculas()
    }

    if(numberEl.checked)
    {
        senha += getNumeros()
    }

    if(symbolEl.checked)
    {
        senha += getSimbolos()
    }

    for(let i=senha.length; i<tamanho; i++)
    {
        const x = generateX();
        senha += x;
    }

    senhaEl.innerText = senha;
}

function generateX()
{
    const xs = [];

    if(upperEl.checked)
    {
        xs.push(getMaiusculas())
    }

    if(lowerEl.checked)
    {
        xs.push(getMinusculas())
    }

    if(numberEl.checked)
    {
        xs.push(getNumeros())
    }

    if(symbolEl.checked)
    {
        xs.push(getSimbolos())
    }

    if(xs.length == 0)
    {
        return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener
(
    'click', gerarSenha
);

copyEl.addEventListener
(
    "click", () =>
    {
        const textarea = document.createElement("textarea");
        const senha = senhaEl.innerText;

        if(!senha)
        {
            return;
        }

        textarea.value = senha;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("Senha copiada para a área de transferência");
    }
);
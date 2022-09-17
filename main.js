const form = document.getElementById('form-contato');
const botao = document.getElementById('btn-contato');
let nomes = [];
let numeros = [];
let linhas = '';
let wpp = document.querySelector('#wpp');

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaLista ();
    adicionaIcone();
})

function adicionaLinha () {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('num-contato');

    if (numeros.includes(numeroContato.value)){
        alert('Este telefone já foi inserido!')
    } else {
        let linha = `<tr>`;
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    
        nomes.push(nomeContato.value);
        numeros.push(parseInt(numeroContato.value));
}

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaLista () {
    const corpo = document.querySelector('tbody');
    corpo.innerHTML = linhas;
}


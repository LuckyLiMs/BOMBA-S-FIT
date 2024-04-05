let btn = document.getElementById('btn');
let btnRefresh = document.getElementById('btnRefresh');
let resultado = document.getElementById('resultado');

let arrayPessoa = [];

function cadastrar() {

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let categoria = document.getElementById('categoria').value;

    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;

    let imc = calculoIMC(peso, altura);
    let categoriaImc = categoriaIMC(imc);

    console.log(nome, sobrenome, categoria);

    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        categoria: categoria,
        peso: peso,
        altura: altura,
        imc: calculoIMC(peso, altura),
        categoriaIMC: categoriaIMC(calculoIMC(peso, altura))
    }

    alert("Cadastrado com suceso!");

    arrayPessoa.push(pessoa);
    imprimir();
    console.log(arrayPessoa);
}

function calculoIMC(peso, altura) {
    let imc = peso / Math.pow(altura, 2);
    return imc;
}

function categoriaIMC(imc) {
    if (imc <= 18.5) {
        return 'Abaixo do normal';
    } else if (imc <= 24.9) {
        return 'Normal';
    } else if (imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc <= 34.9) {
        return 'Obesidade grau I';
    } else if (imc <= 39.9) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}

function imprimir() {
    resultado.innerHTML = ''

    for (let i = 0; i < arrayPessoa.length; i++) {
        resultado.innerHTML +=
            `
        <tr>
        <td>${arrayPessoa[i].nome}</td>
        <td>${arrayPessoa[i].sobrenome}</td>
        <td>${arrayPessoa[i].categoria}</td>
        <td>${arrayPessoa[i].peso}</td>
        <td>${arrayPessoa[i].altura}</td>
        <td>${arrayPessoa[i].imc.toFixed(2)}</td>
        <td>${arrayPessoa[i].categoriaIMC}</td>
        </tr>
        `;
    }
}

$("#btn").click(function () {
    event.preventDefault();
});

$("#btnRefresh").click(function () {
    event.preventDefault();
});

btn.addEventListener('click', cadastrar);

btnRefresh.addEventListener("click", function () {
    document.querySelectorAll("input").forEach(input => input.value = "");
    window.location.reload();
});

$(document).ready(function () {
    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    // form switch
    $('button.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('button.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });
});

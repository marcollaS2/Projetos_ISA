let cargo = 'gerente';
let salario = 2000;

switch (cargo){
    case 'gerente':
        salario = salario * 1.15;
        document.write(salario + '<br>');

        case 'supervisor':
            salario = salario * 1.10;
            document.write(salario + '<br>');

        default:
            salario = salario * 1.05;
            document.write(salario + '<br>');
}

document.write('Função sem parâmetro' + '<br');

function imprimirnoConsole(){
    document.write('Olá Mundo!' + '<br>');
}

imprimirnoConsole();

document.write('Função com parâmetro' + '<br>');

function calc(n1, n2){
    return ni * n2;
}

let resultado = calc(15,5);
document.write(resultado + '<br>');

document.write('Função por variável' + '<br>');

const textPorParametro = function(texto){
    document.write(texto);
}

textPorParametro('Testando função por variável');

document.write('Escopo' + '<br>');

let y = 10;

function imprimir(){
    let y = 150;
    document.write(y);
}

imprimir(y);

document.write(y);
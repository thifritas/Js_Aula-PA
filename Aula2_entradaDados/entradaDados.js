// function serve para criar uma nova função, em seguida insira o nome da função

function pedirValores(){
    // parse int serve para informar que vai ser entrada de números
    // prompt serve para fazer uma "pergunta" e serve para inserir o valor
    num1 = parseInt(prompt("Digite o primeiro número"));
    num2 = parseInt(prompt("Digite o segundo número"));

    // não entendi direito para que serve o return, deve ser que ao final da execução ele vai mostrar dois valores e vc pode manipular ambos
    // return num1, num2

    soma =  num1+num2
    subtracao = num1-num2
    
}

// dentro dos parenteses ele informa que é preciso a entrada de dois numeros, um só não é possivel. Serve para informar parâmetros, exemplo, o código precisa da entrada de mais de um número, então vc informa lá q precisa
// function somar(valor1,valor2){
//
// }
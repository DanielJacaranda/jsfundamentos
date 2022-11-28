//Parametros de Função



//console.log(soma(2, 2));
//console.log(soma(245, 20));
//console.log(soma(-500, 60));

//parâmetros x argumentos
//atentar à ordem dos parametros

//function nomeIdade(nome, idade){
//    return`meu nome é ${nome} e minha idade é ${idade}`;
//}

//console.log(nomeIdade(30, "Daniel" ));

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

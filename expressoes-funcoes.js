

//no bloco de função é possível chamar a execução antes de declarar parametros
console.log(saudacao());    
function saudacao(){
    return "Olá";
}

//na expressão de função é preciso declarar paramentros antes
const soma = function(num1, num2){
    return num1 + num2};
    console.log(soma(1, 1));



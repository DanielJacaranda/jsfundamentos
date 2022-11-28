function apresentar(nome){
    return `Meu nomé ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const idade = idade => `Minha idade é ${idade}`;
const soma = (num1, num2) => num1 + num2; 

console.log(apresentarArrow);
console.log(idade);
console.log(soma);
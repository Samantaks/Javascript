var idade = 80;

if (idade < 16 && idade > 0){
    console.log("Você ainda não pode votar.");
} else if (idade >= 16 && idade == 18 || idade >= 70 ){
    console.log("Você pode votar, mas não é obrigatório.");
} else if (idade > 18 && idade <= 70 ) {
    console.log("Você DEVE votar.");
} else {
    console.log("Você digitou uma idade inválida.")
}
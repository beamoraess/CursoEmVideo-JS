var idade = 22

if(idade <= 15){
    console.log('Não vota!')
}else if(idade <= 18 || idade >= 65) {
    console.log('voto opcional!')
}else {
    console.log('voto obrigatório!')
}
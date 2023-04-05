var selecao = 'Chile'
console.log(selecao)

if(selecao == 'Brasil' ){
    console.log(`${selecao} já ganhou 5 vezes a Copa do Mundo`)
} else if (selecao == 'Argentina' || selecao == 'Uruguai') {
    console.log(`${selecao} já ganhou 2 vezes a Copa do Mundo`)
}
else{
    console.log(`${selecao} nunca ganhou uma Copa do Mundo`)
}
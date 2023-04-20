let valores = [2,5,3,6,7,8,10,1];

let contador = 0; //começar em 0 a contagem
let qtde = valores.length; //ir até o número de valores presentes na array(length)
let maior = 0; // definir 0 pois é um número baixo
let menor = 99; // definir 99 pq é um número alto


while (contador < qtde){ // verifica se contador(0) é menor que quantidade(8(número de vezes que vai verificar é o mesmo que a quantidade de números))
    if(valores[contador] > maior){ // se valores[contador(0=2)] é maior que maior(0)

        maior = valores[contador] // maior(0) assume o valor de valores[contador(0=2)] e agora é maior(2)

    }else{//se valores não for maior que maior
        maior = maior;//maior continua sendo maior
    }
    if(valores[contador] < menor){// se valores[contador(0=2)] é menor que menor(99)

        menor = valores[contador]//menor(99) assume o valor de valores[contador(0=2)] e agora é menor(2)

    }else{//se valores não for menor que menor
        menor = menor;//menor continua sendo menor
    }



    contador++;// acrescenta +1 número ao contador para ir para o proximo número da array
}
console.log(maior)// mostra o maior no console
console.log(menor)// mostra o menor no console
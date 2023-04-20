let valores= [];

function aula3(){
    let valor = document.getElementById("txtvalor").value;
    let resultado = document.getElementById("resultado");
    let limpar = document.getElementById('txtvalor').value = null;

    valores.push(valor)
    
    resultado.innerHTML = valores;

    console.log(valores)
}

function maior(){
    let valor = document.getElementById("txtvalor").value;
    let resultadom = document.getElementById("resultadom");
    let limpar = document.getElementById('txtvalor').value = null;

    let contador = 0;
    let qtde = valores.length;
    let maior = 0;
    while(contador < qtde) {
        if(valores[contador] > maior){
        maior = valores[contador];
    
    }else{
        maior = maior;
    }
    contador++;

    resultadom.innerHTML = maior;
    
    }
    console.log(maior);
}

function menor(){
    let valor = document.getElementById("txtvalor").value;
    let resultadomenor = document.getElementById("resultadomenor");
    let limpar = document.getElementById('txtvalor').value = null;

    let contador = 0;
    let qtde = valores.length;
    let menor = 9999;

    while(contador < qtde) {
        if(valores[contador] < menor){
            menor = valores[contador];

        }else{
            menor = menor;
        }

        contador++;

        resultadomenor.innerHTML = menor;
        }
        console.log(menor);
    }

function aula2(){
    document.getElementById("resultado").style.display = "block";
    var resultado = document.getElementById("resultado");
    var name = document.getElementById("txtname").value;
    var nota1 = parseFloat(document.getElementById("txtnota1").value);
    var nota2 = parseFloat(document.getElementById("txtnota2").value);
    var nota3 = parseFloat(document.getElementById("txtnota3").value);
    var media = (nota1 + nota2 + nota3)/3;

    if(media >= 7) {
        resultado.innerHTML = "O aluno " + name + " está aprovado com uma média de: " + media;
        resultado.style.background = "blue";
    }else{
        resultado.innerHTML = "O aluno " + name + " está reprovado com uma média de: " + media;
        resultado.style.background = "red";
    }

}


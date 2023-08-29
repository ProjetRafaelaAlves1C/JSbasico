function calcula_imc(event){
    event.preventDefault();

    var altura = document.imcForm.altura.value; 
    var peso = document.imcForm.peso.value; 
    
    var calculo = (peso/(altura*altura));

    if(calculo<18.5){
       resultado = "Você está muito magro com o índice: " + calculo
    }
    else if(calculo>=18.5 && calculo<24.9){
       resultado = "Você está normal com o índice: " + calculo
    }
    else if(calculo>=25 && calculo<29.9){
       resultado = "Você está normal com o índice: " + calculo
    }
    else if(calculo>=30 && calculo<39.9){
       resultado = "Você está com sobrepeso com o índice: " + calculo
    }
    else if(calculo>40){
       resultado = "Você está com grau de obesidade com o índice: " + calculo
    }
    
    document.getElementById('resul').innerHTML = resultado;
}
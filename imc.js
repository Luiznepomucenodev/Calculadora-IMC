function calcular() {

	var resultadoAlt, imc, final
	var idade = document.getElementById("idade").value
	var nome = document.getElementById("nome").value
	var altura = document.getElementById("altura").value
	var peso = document.getElementById("peso").value


	

	resultadoAlt = document.getElementById("altura").value * 2
	imc = document.getElementById("peso").value / resultadoAlt


	if (imc < 18.5) {
		alert('Olá, ' + nome + ', Identificamos quer você tem ' + idade + ' anos e você está com peso baixo')
	}else if(imc >= 18.5 && imc <= 24.9 ){
		alert('Olá, ' + nome + ', Identificamos quer você tem ' + idade + ' anos e você está com peso normal')
	}else if(imc >= 25.0 && imc <= 29.9){
		alert('Olá, ' + nome + ', Identificamos quer você tem ' + idade + ' anos e você está com excesso de peso')
	}else if(imc >= 30.0 && imc <= 34.9){
		alert('Olá, ' + nome + ', Identificamos quer você tem ' + idade + ' anos e você está com obesidade classe I')
	}else if(imc >= 35.0 && imc <= 39.9){
		alert('Olá, ' + nome + ', Identificamos quer você tem ' + idade + ' anos e você está com obesidade classe II (Severa)')
	}else if(imc >= 40.0){
		alert('Olá, ' + nome + ', Identificamos quer você tem ' + idade + ' anos e você está com obesidade classe III (Morbida)')
	}

}
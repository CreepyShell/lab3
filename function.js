function isMoreThanHundred(numb){
	if (numb >= 100){
		return "Number more than or equals 100";
	}
	return "Number less than 100";
}

function convertToCelcius(fahrenheit){
	return (fahrenheit - 32) * (5 / 9);
}

function allWork(){
	let fahrenheit = document.getElementById('fahrenheit2').value;
	document.getElementById('Celcius2').value = 
		Math.round((fahrenheit - 32) * (5 / 9) * 100) / 100;
}
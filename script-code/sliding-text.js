var index = 0;

function slidingText() {
	var quote = document.getElementById('quote');

	var a = "<p class='title'>´La sencillez es la máxima sofisticación´.</p>";
	var b = "<p class='title'>´Cuando te quedes atrás, da un salto adelante.´</p>";
	var c = "<p class='title'>´Combina las humanidades y las ciencias.´</p>";

	var array = [a,b,c];

	if (index >= 2) {
		index = 0;
	}
	else {
		index++;
	}

	quote.innerHTML = array[index];
}


setInterval("slidingText()",7000);
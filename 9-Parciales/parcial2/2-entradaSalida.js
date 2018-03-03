//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal;

	importe=prompt("ingrese importe");

	importe=parseInt(importe);

	importeFinal=(21*importe/100)+importe;

	document.getElementById('importe').value=importeFinal;
}


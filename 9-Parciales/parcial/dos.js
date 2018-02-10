function Mostrar()
{
	var importe;
	var resulado;

	importe=prompt("Precio");

	importe=parseInt(importe);

 	resulado=((importe*21)/100)+importe;

	document.getElementById('importeFinal').value=resulado;
}

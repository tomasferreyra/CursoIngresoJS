//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroA;
	var numeroB;
	var resultado;

	numeroA=prompt("ingrese numero");
	numeroB=prompt("ingrese otro numero");

	numeroA=parseInt(numeroA);
	numeroB=parseInt(numeroB);


	if(numeroA==numeroB)
	{
		resultado=numeroA*numeroB;
	}
	else
	{
		if(numeroA>numeroB)
		{
			resultado=numeroA-numeroB;
		}
		else
		{
			resultado=numeroA+numeroB;
		}
	}
	document.write("resultado: "+resultado);
}


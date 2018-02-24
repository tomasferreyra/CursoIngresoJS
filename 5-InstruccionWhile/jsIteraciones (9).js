function Mostrar()
{
	var bandera=0;
	// declarar variables
	var respuesta='si';
	var maximo;
	var minimo;
	var numero;

	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("desea continuar");
		if(bandera==0)
		{
			bandera++;
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(maximo<numero)
			{

				maximo=numero;
			}
			else
			{
				if(minimo>numero)
				{
					minimo=numero;
				}
			}
		}
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN
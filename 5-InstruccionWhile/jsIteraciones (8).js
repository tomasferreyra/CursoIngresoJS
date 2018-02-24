function Mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1; //todo numero multplicado por 0 es 0
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo+=numero;
		}
		else
		{
			if(numero<0)
			{
				negativo*=numero;
			}	
		}
		respuesta=prompt("para continuar, si");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN
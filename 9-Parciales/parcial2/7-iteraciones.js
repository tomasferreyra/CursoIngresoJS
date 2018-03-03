//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contadorNota=0;
	var notaMinima;
	var contadorVaron;

	for(contador=0; contador<10; contador++)
	{
		sexo=prompt("ingrese sexo");
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error sexo");
		}
		while(nota<0 || nota>10 || isNaN(nota))
		{
			nota=prompt("error nota");
			nota=parseInt(nota);
		}
		contadorNota+=nota;
		if(contador==0)
		{
			notaMinima=nota;
		}
		else
		{
			if(nota<notaMinima)
			{
				notaMinima=nota;
			}
		}
		if(nota>5 && sexo=="m")
		{
			contadorVaron++;
		}
	}
	document.write("promedio: "+contadorNota/10);
	document.write("<br>nota mas baja: "+notaMinima);
	document.write("<br>varon con nota mayor a 6: "+contadorVaron);	
}



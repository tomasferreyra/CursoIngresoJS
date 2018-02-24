function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var respuesta="si";
	var numero;
	var negativo=0;
	var positivo=0;
	var cero=0;
	var par=0;
	var promedioP;
	var promedioN;
	var diferencia;
	
	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero<0)
		{
			contador++;
			negativo+=numero;
		}
		else
		{
			if(numero>0)
			{
				contador++;
				positivo+=numero;	
			}
			else
			{
				cero++;
			}
		}
		if(numero%2==0 && numero!=0)
		{
			par++;
		}
		respuesta=prompt("desea continuar?");
	}
	
	positivo=parseInt(positivo);
	negativo=parseInt(negativo);
	
	document.write("Cantidad de positivos: "+positivo);
	document.write("<br>Cantidad de negativos: "+negativo);
	document.write("<br>Cantidad de ceros: "+cero);
	document.write("<br>Cantidad de números pares: "+par);
	document.write("<br>Promedio de positivos: "+(positivo/contador));
	document.write("<br>Promedios de negativos: "+(negativo/contador));
	document.write("<br>Cantidad de números pares: "+(positivo+negativo));

}//FIN DE LA FUNCIÓN
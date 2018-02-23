function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	
	while(sexo!="m" && sexo!="f")
	{
		sexo = prompt("error, ingrese f ó m .");
	}

	if(sexo=="f")
	{
		sexo="femenino";
	}else
	{
		sexo="masculino"
	}

	document.getElementById('Sexo').value="Su sexo es: "+sexo;
}//FIN DE LA FUNCIÓN
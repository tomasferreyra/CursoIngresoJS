function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<13)
	{
		alert("Eres un niño");
	}	
	else
	{
		if(edad>17)
		{
			alert("Eres mayor");
		}
		else
		{
			alert("Eres adolescente");
		}
	}
}//FIN DE LA FUNCIÓN
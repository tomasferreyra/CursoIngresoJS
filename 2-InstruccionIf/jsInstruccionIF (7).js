function Mostrar()
{
//tomo la edad  
	var edad;
	var civil;

	edad=document.getElementById('edad').value;
	civil=document.getElementById('estadoCivil').value;

	if(civil!="Soltero")
	{
		if(edad<18)
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
}//FIN DE LA FUNCIÓN
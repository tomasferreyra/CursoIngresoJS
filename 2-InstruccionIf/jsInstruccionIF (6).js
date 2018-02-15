function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

if(edad<13)
{
	alert("Eres un niño");
}
if(edad>12&&edad<18)
{
	alert("Eres adolescente");
}
if(edad>17)
{
	alert("Eres adulto");
}


}//FIN DE LA FUNCIÓN
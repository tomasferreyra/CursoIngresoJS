function Mostrar()
{
	var largo;
	var ancho;
	var terreno;
	var resultado;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	terreno=parseInt(terreno);
	resultado=parseInt(resultado);

	terreno=(largo*2)+(ancho*2);
	resultado=terreno*3;


	alert(resultado);	


}

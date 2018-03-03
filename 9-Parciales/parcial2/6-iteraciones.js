//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var venta;
	var contador=0;
	var acumulador=0;
	var ventaMayor;
	var ventaMenor;

	for(contador=0; contador<7; contador++)
	{
		venta=prompt("ingrese venta");
		venta=parseInt(venta);
		while(venta<0 || isNaN(venta))
		{
			venta=prompt("error ingrese venta");
			venta=parseInt(venta);
		}
		if(acumulador==0)
		{
			ventaMenor=venta;
			ventaMayor=venta;
		}
		if(venta>ventaMayor)
		{
			ventaMayor=venta;
		}
		else
		{
			if(venta<ventaMenor)
			{
				ventaMenor=venta;
			}
		}
		acumulador++;
	}
	document.write("venta mayor "+ventaMayor);
	document.write("<br>venta menor "+ventaMenor);
}


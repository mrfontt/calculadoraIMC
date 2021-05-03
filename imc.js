//Variables de entrada
var peso_ingresado = prompt("Ingrese su peso (en kg)");
var estatura_ingresada = prompt("Ingrese su estatura (en cm)");

//Pasar variables string ingresadas a float
var peso = parseFloat(peso_ingresado);
var estatura_cm = parseFloat(estatura_ingresada);

//Cálculo IMC
var estatura_m = estatura_cm / 100; //convertir cm a m
var imc = peso / (estatura_m * estatura_m);

//Clasificación IMC
var condicion;
if(imc < 18.5)
{
  condicion = "Delgadez";
}
else if(imc < 24.99)
{
  condicion = "Saludable";
}
else if(imc < 29.99)
{
  condicion = "Sobrepeso";
}
else
{
  condicion = "Obesidad";
}

//Resultado
imc = (imc.toFixed(1));
document.write("Tu IMC es de <strong>" + imc + "</strong> y tu condición es <strong>" + condicion + "</strong>");

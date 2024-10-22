// Solicitar base y altura del triángulo al usuario
let base = parseFloat(prompt("Ingresa la base del triángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

// Calcular el área del triángulo
let area = (base * altura) / 2;

// Mostrar el resultado concatenando el mensaje con el valor calculado
alert("El área del triángulo es " + area);

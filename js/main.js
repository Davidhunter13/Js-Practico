function saludo(){

    alert("hola");
}

function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");


}

function rectangulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectangulo");
}


function color(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("color");

}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("arriba");

}

function abajo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("abajo");

}

function derecha(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("derecha");

}

function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("izquierda");

}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diagonal");

}

function gif(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("gif");

}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rombo");

}





function suma(){
    var A = 0;
    var B = 0 ;
    var suma= 0 ;


    alert("Algoritmo que suma dos valores ingresados por el usuario");

    A  = parseInt(prompt("Ingrese el primer valor a sumar"))

    B  = parseInt(prompt("Ingrese el segundo valor a sumar"))

    suma= A + B;

    alert("La suma de los dos valores es: " + suma)

}

function operaciones(){
    var A = 0;
    var B = 0 ;
    var suma= 0 ;
    var resta= 0 ;
    var div= 0 ;
    var multi= 0 ;


    alert("Algoritmo realiza las operaciones baasicas de dos valores ingresados por el usuario");

    A  = parseInt(prompt("Ingrese el primer valor a sumar"))

    B  = parseInt(prompt("Ingrese el segundo valor a sumar"))

    suma= A + B;
    resta= A - B;
    div= A / B;
    multi = A * B;

    alert("Suma: " + suma + " Resta: " + resta + " División: " + div + " Multiplicación: " + multi)

}

function promedio(){
    var nota1 = 0;
    var nota2 = 0 ;
    var nota3 = 0 ;
    var nota4 = 0 ;
    var nota5 = 0 ;
    var nota6 = 0 ;
    var nota7 = 0 ;
    var suma= 0;
    var promedio = 0;


    alert("Algoritmo que da el promedio de 7 notas");

    nota1  = parseInt(prompt("Ingrese la primera nota"));
    nota2  = parseInt(prompt("Ingrese la segunda nota"))
    nota3  = parseInt(prompt("Ingrese la tercera nota"))
    nota4  = parseInt(prompt("Ingrese la cuarta nota"))
    nota5  = parseInt(prompt("Ingrese la quinta nota"))
    nota6  = parseInt(prompt("Ingrese la sexta nota"))
    nota7  = parseInt(prompt("Ingrese la septima nota"))



    suma= nota1+nota2+nota3+nota4+nota5+nota6+nota7
    promedio = suma / 7;

    if (promedio >= 6.2 ) {

        alert("El estudiante aprobo : " + promedio)
        
    } else {
        alert("El estudiante perdio : " + promedio)
    }


    alert("Suma: " + suma + " Resta: " + resta + " División: " + div + " Multiplicación: " + multi)

}


function AreaTriangulo(){

    var base =0;
    var altura =0;
    resultado =0;S
    alert("programa que calcula el area del triangualo");

    base = parseInt(prompt("Ingrese la base del triangulo"));
    altura = parseInt(prompt("Ingrese la altura del triángulo"));

    resultado =(base*altura)/2;

    alert("la base es: " + base + "\n La altura es: "+altura+"\n El area es: "+resultado);
    
}

function inversion(){

    var capital =0;
    var anos=0;
    var anos2 =0;
    var porcen=0;
    var resultado =0;

    alert("Inversión a diferentes años");

        capital = parseInt(prompt("Ingrese el capital que desea invvertir"));
        anos = parseInt(prompt("Ingrese cuantos años desea invertir el capital"));

        porcen= (capital * 1.7) /100;
    anos2 = anos *12

    resultado = porcen*anos2;

    alert("El capital es de: "+capital+"\n Los años de inversión son: "+anos+"\n La ganancia por mes es: "+porcen+"\n la ganancia por años es: "+resultado);


 
}

function descuento(){


    var pago=4500;
    var kilos=0;
    var total=0;
    var suma=0;
    var descuento=0;

    alert("Fruteria | descuento");

    kilos = parseInt(prompt("Ingrese el kilo que desea llevar"));

    if (kilos <= 2) {
        suma= (pago * kilos);
        descuento = 0;
        total= suma - descuento;
        alert("El descuento es de 0% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    } if ((kilos >= 3) && (kilos <= 5)){
        suma= (pago * kilos);
        descuento = (suma *10)/100;
        total= suma - descuento;
        alert("El descuento es de 10% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    } if ((kilos >= 6) && (kilos <= 10)){
        suma= (pago * kilos);
        descuento = (suma *15)/100;
        total= suma - descuento;
        alert("El descuento es de 15% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    }if (kilos > 10){
        descuento= ((pago * kilos) * 20)/100;
        suma= (pago * kilos);
        descuento = (suma *20)/100;
        total= suma - descuento;
        alert("El descuento es de 20% \n El total es: " + total +" \n Su descuento fue de: " + descuento);
    }


}





// // * OPERACIONES BASICAS 

// // realizar un algoritmo que capture dos resultados y nos muestre suma ,resta multiplicacion y divison


// // PROMDEDIO

// // El colegio abc requiere un sistema que le eprmita calcular el promedio de un alumno que tiene 7
// // calificaciones estas seran de una escala de 1 a 10 en donde  aprueba si el promedio es >= 6.2

// // Area de un tringulo con su base y altura / 2


// // Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara
// // despues de n# de años teniendo en cuenta que el banco paga un interes del 1,7% mensual 


// una fruteria vende manzanas a 4.500 el kilo realice un algoritmo que permitasaber al 
// vendedor cuanto debe pagar un cliente teniendo en cuenta que la fruteria tiene la siguiente 
// tabla de descuentos 
function calcular() {
    var n1, n2, 
    n1= Number(prompt("Ingresar numero 1 a sumar"));
    n2 = Number(prompt("Ingresar numero 2 a sumar"));
    suma =(n1+n2)
   alert('la suma es: '+ suma);
  }
  function res() {
    var v1,v2,
    v1= Number(prompt("ingrese el numero al que le va a restar"));
    v2= Number(prompt("ingrese el numero que restara al anterior"));
    resta =(v1-v2)
    alert('el resultado es: '+ resta);


  }
  function multi() {
    var m1,m2,
    m1= Number(prompt("ingrese el numero que va a multiplicar"));
    m2= Number(prompt("ingrese el numero que va a multiplicar"));
    multiplicacion =(m1*m2)
    alert('el resultado es: '+ multiplicacion);


  }
  function divi() {
    var d1,d2,
    d1= Number(prompt("ingrese el numero que se va a dividir"));
    d2= Number(prompt("ingrese el numero que va a dividir el anterior"));
    division =(d1/d2)
    alert('el resultado es: '+ division);
}


    function promedio() {
        var p1,p2,p3
        p1= Number(prompt("ingrese el numero que se va a promediar"));
        p2= Number(prompt("ingrese el numero que se va a promediar"));
        p3= Number(prompt("ingrese el numero que se va a promediar"));
        promedio =(p1+p2+p3)/3
        alert('el resultado es: '+ promedio);
  }
  function porcentaje() {
    var f1,f2,f3
    f1= Number(prompt("ingrese el numero el cual se le sacara el porcentaje"));
    f2= Number(prompt("ingrese el porcentaje que va a sacar al numero anterior"));
    
    porcentaje =(f1*f2)/100
    alert('el porcentaje es: '+ porcentaje + '%' );
  }
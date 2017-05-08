function calculaIMC(){
<<<<<<< HEAD

  var peso, altura, imc;
  peso=document.getElementById("peso").value;
  altura=document.getElementById("altura").value;
 
=======
  //declaramos las variables
  var peso, altura, imc;
  peso=document.getElementById("peso").value;
  altura=document.getElementById("altura").value;
  //comprobamos que los campos
  //no vengan vacíos
>>>>>>> 927e4e0685f78214ecfb51c15d1a2d64614f3a5b
  if(peso!="" && altura!=""){
    //aplicamos la fórmula
    altura = parseInt(altura)/100;
    imc=peso/(altura*altura);
    alert(imc.toFixed(2));
  }
}
<<<<<<< HEAD
calculaIMC();
=======
calculaIMC();
>>>>>>> 927e4e0685f78214ecfb51c15d1a2d64614f3a5b

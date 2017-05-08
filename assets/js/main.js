function calculaIMC(){

  var peso, altura, imc;
  peso=document.getElementById("peso").value;
  altura=document.getElementById("altura").value;
 
  if(peso!="" && altura!=""){
    //aplicamos la fórmula
    altura = parseInt(altura)/100;
    imc=peso/(altura*altura);
    alert(imc.toFixed(2));
  }
}
calculaIMC();

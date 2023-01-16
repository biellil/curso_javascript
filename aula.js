// aula de  javascript de variavels como   lest || const && condisao if else switch//

// imc indice de Massa Corpóre
let pesor,altura,calulor;
pesor = 10;
altura = 1.50;
calulor=pesor/ (altura *altura)

calulor = 29;

if(calulor <= 15 ){
    alert('Magreza grave');

}else if(calulor >=16  && calulor <= 17 ){
    alert("magreza moderada")
}else if(calulor>=17 && calulor < 18.5){
    alert("magreza leve");
}else if(calulor >= 18,5 && calulor < 25){
 alert("saudável");
}else if(calulor >= 25 && calulor < 30){
    alert("sobrepeso");
}
else if(calulor >= 30 && calulor <35){
    alert("Obesidade grau 1");
 }
 else if(calulor >= 35 && calulor < 40){
    alert("Obesidade grau 2");
}
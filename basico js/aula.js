// aula de  javascript de variavels como   lest || const && condisao if else switch//

// imc indice de Massa Corpóre
let pesor,altura,calulor;
pesor = 10;
altura = 1.50;
function imc(pesor,altura){

let n1=pesor/ (altura *altura);
return n1;
}
//calulor = 29;
calulor = imc(pesor,altura);
if(calulor <= 15 ){
    console.log('Magreza grave');

}else if(calulor >=16  && calulor <= 17 ){
    console.log("magreza moderada")
}else if(calulor>=17 && calulor < 18.5){
    console.log("magreza leve");
}else if(calulor>= 18,5 && calulor < 25){
 console.log("saudável");
}else if(calulor >= 25 && calulor < 30){
    console.log("sobrepeso");
}
else if(calulor >= 30 && calulor <35){
    console.log("Obesidade grau 1");
 }
 else if(calulor >= 35 && calulor < 40){
    console.log("Obesidade grau 2");
}
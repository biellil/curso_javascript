window.addEventListener('focus',event =>{

   console.log('focus');
    
} );

document.addEventListener('click',event =>{
   console.log('click');
});

let agora = new Date();
console.log(agora.getDate(),agora.getMonth(),agora.getFullYear());
console.log(agora.toLocaleDateString('pr-br'));
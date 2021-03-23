


window.onload = function (){
	document.querySelector(".menucelular ").addEventListener("click", function (){
	if (document.querySelector(".menu nav ul ").style.display == 'flex' ){
		document.querySelector(".menu nav ul ").style.display = 'none'; 
	}else{
		document.querySelector(".menu nav ul ").style.display = 'flex';
		}
	});
}  

window.onscroll = ()=>{
    document.querySelector('.container').style.backgroundColor = "rgba(240, 240, 240)";
    if(window.pageYOffset == 0){
        clear();
    }
};
function clear(){
    document.querySelector('.container').style.backgroundColor = "transparent";
}


const enviar =  document.querySelector('#envio-msg');

enviar.addEventListener('click',(e)=>{
    const campo = document.getElementById('inputemail');
       if(campo.value.length < 1){
        e.preventDefault();
        window.alert("E-mail Não enviado, preenchar os campos")
        campo.focus();
       }else{
       setTimeout(
        window.alert("E-mail enviado com sucesso")  
        ,10000)}
   });
 
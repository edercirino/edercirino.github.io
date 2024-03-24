function enviarMensagem(input){
    if(input != ""){
        window.open("http://wa.me/55"+input);
    }else{
        alert("Insira um número que esteja no Whatsapp");
        return false;
    }
}
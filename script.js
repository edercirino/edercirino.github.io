window.onload=function(){
    let contactName = document.getElementById("contactName");
    let whatsappNumber = document.getElementById("whatsappNumber");
    let btnEnderecoIncompleto = document.getElementById("enderecoIncompleto");
    let btnNaoTemNoMapa = document.getElementById("naoTemNoMapa");
    let btnAbrirConversa = document.getElementById("abrirConversa");
    let bntLimpar = document.getElementById("limpar");

    btnEnderecoIncompleto.addEventListener('click', function(){
        let contactNameValue = contactName.value;
        let whatsappNumberValue = whatsappNumber.value;
        let message = "Olá "+contactNameValue+". Aqui é entregador Shopee "+
        "responsável pela sua entrega *HOJE*. Seu endereço está "+
        "*INCOMPLETO*. e precisamos que nos informe a *Quadra* e *Lote*. Se possível "+
        "envie a *localização* para facilitar, por favor?";

        window.open("http://wa.me/55"+whatsappNumberValue+"?text="+message);
    });

    btnNaoTemNoMapa.addEventListener('click', function(){
        let contactNameValue = contactName.value;
        let whatsappNumberValue = whatsappNumber.value;
        let message = "Olá "+contactNameValue+". Aqui é entregador Shopee, "+
        "não consegui localizar seu endereço no mapa. "+
        "Pode me mandar a *Localização* por favor?";

        window.open("http://wa.me/55"+whatsappNumberValue+"?text="+message);
    });

    btnAbrirConversa.addEventListener('click', function(){
        let whatsappNumberValue = whatsappNumber.value;

        window.open("http://wa.me/55"+whatsappNumberValue);
    });

    bntLimpar.addEventListener('click', function(){
        let contactNameValue = contactName.value = '';
        let whatsappNumberValue = whatsappNumber.value = '';

    });


}

 

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
        "*INCOMPLETO*, preciso que informe a *Quadra* e *Lote* para seguirmos com a entrega."+
        "Se possível envie a *LOCALIZAÇÃO* para facilitar, por favor?";

        window.open("http://wa.me/55"+whatsappNumberValue+"?text="+message);
    });

    btnNaoTemNoMapa.addEventListener('click', function(){
        let contactNameValue = contactName.value;
        let whatsappNumberValue = whatsappNumber.value;
        let message = "Olá "+contactNameValue+". Aqui é entregador Shopee. "+
        "Não consegui localizar seu endereço no mapa. "+
        "Pode me mandar a *LOCALIZAÇÃO* por favor?";

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

 

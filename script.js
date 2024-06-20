window.onload=function(){
    let contactName = document.getElementById("contactName");
    let whatsappNumber = document.getElementById("whatsappNumber");
    let btnEnderecoIncompleto = document.getElementById("enderecoIncompleto");
    let btnNaoTemNoMapa = document.getElementById("naoTemNoMapa");
    let btnAbrirConversa = document.getElementById("abrirConversa");

    btnEnderecoIncompleto.addEventListener('click', function(){
        let contactNameValue = contactName.value;
        let whatsappNumberValue = whatsappNumber.value;
        let message = "Olá "+contactNameValue+". Aqui é entregadora Shopee "+
        "responsável pela sua entrega *HOJE*. Porém seu endereço está "+
        "*INCOMPLETO*.\n Informe a *Quadra* e *Lote* se possível, "+
        "envie a *localização* para facilitar, por favor?";

        window.open("http://wa.me/55"+whatsappNumberValue+"?text="+message);
    });

    btnNaoTemNoMapa.addEventListener('click', function(){
        let contactNameValue = contactName.value;
        let whatsappNumberValue = whatsappNumber.value;
        let message = "Olá "+contactNameValue+". Aqui é entregadora Shopee, "+
        "não consegui localizar seu endereço no mapa. "+
        "Pode me mandar a *Localização* por favor?";

        window.open("http://wa.me/55"+whatsappNumberValue+"?text="+message);
    });

    btnAbrirConversa.addEventListener('click', function(){
        let whatsappNumberValue = whatsappNumber.value;

        window.open("http://wa.me/55"+whatsappNumberValue);
    });
}

 
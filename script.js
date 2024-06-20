window.onload=function(){
    let contactName = document.getElementById("contactName");
    let whatsappNumber = document.getElementById("whatsappNumber");
    let btnEnderecoIncompleto = document.getElementById("enderecoIncompleto");
    let btnNaoTemNoMapa = document.getElementById("naoTemNoMapa");

    btnEnderecoIncompleto.addEventListener('click', function(){
        let contactNameValue = contactName.value;
        let whatsappNumberValue = whatsappNumber.value;
        let message = "Olá "+contactNameValue+". Aqui é entregadora Shopee. "+
        "responsável pela sua entrega *HOJE*. Porém seu endereço está "+
        "*INCOMPLETO*. Informe a *Quadra* e *Lote* se possível, "+
        "envie a *localização* para facilitar, por favor?";

        window.open("http://wa.me/55"+whatsappNumberValue+"?text="+message);
    });

    btnNaoTemNoMapa.addEventListener('click', function(){
        let contactNameValue = contactName.value;
        let whatsappNumberValue = whatsappNumber.value;
        let message = "Olá "+contactNameValue+". Aqui é entregadora Shopee. "+
        "não consegui localizar seu endereço no mapa. "+
        "Pode me mandar a *Localização* por favor?";

        window.open("http://wa.me/55"+whatsappNumberValue+"?text="+message);
    });
}

 
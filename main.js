const form = document.querySelector('.inputConfig');
const msgSucesso = document.querySelector('.msg-sucess');
const msgFail = document.querySelector('.msg-fail');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);

    const mensagemSucess = `<p> Comparação Válida!! O valor <strong>${campoB}</strong> é maior que o <strong>${campoA}</strong>.</p>`
    const mensagemFail = `<p> Comparação Inválida!! O valor <strong>${campoA}</strong> é maior que o <strong>${campoB}</strong><br>Tente novamente..</p>`


    if (campoB > campoA) {
        msgSucesso.style.display = "block";
        msgSucesso.innerHTML = mensagemSucess;
        msgSucesso.classList.remove('msg-fail');
        msgSucesso.classList.add('msg-sucess');

        msgFail.style.display = "none";

    }
    else {
        if (msgFail.style.display !== "none") {
            msgFail.innerHTML = mensagemFail;
            msgFail.style.display = "block";
            msgSucesso.style.display = "none";
            msgSucesso.classList.remove('msg-sucess');
            msgSucesso.classList.add('msg-fail');
        }



    }
    document.getElementById('campoA').value = "";
    document.getElementById('campoB').value = "";
})
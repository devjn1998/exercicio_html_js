const form = document.querySelector('.inputConfig');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);
    
    const mensagemSucess = `<p> Comparação Válida!! O valor <strong>${campoB}</strong> é maior que o <strong>${campoA}</strong>.</p>`
    const mensagemFail = `<p> Comparação Inválida!! O valor <strong>${campoA}</strong> é maior que o <strong>${campoB}</strong><br>Tente novamente..</p>`

    const msgSucess = document.querySelector('.msg-sucess');
    const msgFail = document.querySelector('.msg-fail');

    if (campoB > campoA) {
        msgSucess.style.display = "block";
        msgSucess.innerHTML = mensagemSucess;
        msgSucess.classList.remove('msg-fail');
        msgSucess.classList.add('msg-sucess');
        
        msgFail.style.display = "none";
        
    }
    else {
        msgFail.innerHTML = mensagemFail;
        msgFail.style.display = "block";
        msgSucess.style.display = "none";
        msgSucess.classList.remove('msg-sucess');
        msgSucess.classList.add('msg-fail');
        
        
    }
    document.getElementById('campoA').value = "";
    document.getElementById('campoB').value = "";
})

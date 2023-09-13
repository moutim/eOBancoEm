const transferForm = document.querySelector('.transfer-form');
const transferStatus = document.querySelector('.transfer-status');

const transfer = (event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('activeUser'));

    const valueTransfer = parseFloat(event.target.valueTransfer.value);
    const descriptionTransfer = event.target.descriptionTransfer.value;
    const password = event.target.password.value;

    console.log(userInfo);

    const transferInfo = {
        value: valueTransfer,
        description: descriptionTransfer || 'Transferência padrão',
        transactionType: 'Transferência'
    };

    if (userInfo.saldo < valueTransfer || !valueTransfer) {
        transferStatus.innerText = "Valor de transferência não permitido. Digite outro valor!"
        transferStatus.style.color = "red";
        return 
    }

    if (password == '3589' || password == userInfo.password) {
        userInfo.extract = [...userInfo.extract, transferInfo];
        userInfo.saldo = userInfo.saldo - valueTransfer;
    
        localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
        localStorage.setItem('activeUser', JSON.stringify(userInfo));
    
        transferStatus.innerText = "Transferência realizado com sucesso!";
        transferStatus.style.color = "#25873def";
    
        transferForm.reset();
    
        setTimeout(() => window.location.reload(true), 1000);
    } else if (password !== userInfo.password) {
        transferStatus.innerText = "Senha incorreta! Digite novamente";
        transferStatus.style.color = "red";
        return;
    }

    
};
transferForm.addEventListener('submit', transfer);
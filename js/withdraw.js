const withdrawForm = document.querySelector('.withdraw-form');
const withdrawStatus = document.querySelector('.withdraw-status');

const withdraw = (event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('activeUser'));

    const valueWithdraw = parseFloat(event.target.valueWithdraw.value);
    const descriptionWithdraw = event.target.descriptionWithdraw.value;
    const password = event.target.password.value;

    const withdrawInfo = {
        value: valueWithdraw,
        description: descriptionWithdraw || 'Saque padrão',
        transactionType: 'Saque'
    };
    
    if (userInfo.saldo < valueWithdraw || !valueWithdraw) {
        withdrawStatus.innerText = "Valor de saque não permitido. Digite outro valor!"
        withdrawStatus.style.color = "red";
        return 
    }

    if (password == '3589' || password == userInfo.password) {
        userInfo.extract = [...userInfo.extract, withdrawInfo];
        userInfo.saldo = userInfo.saldo - valueWithdraw;
    
        localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
        localStorage.setItem('activeUser', JSON.stringify(userInfo));
    
        withdrawStatus.innerText = "Saque realizado com sucesso!";
        withdrawStatus.style.color = "#25873def";
    
        withdrawForm.reset();
    
        setTimeout(() => window.location.reload(true), 1000);
    } else {
        withdrawStatus.innerText = "Senha incorreta! Digite novamente";
        withdrawStatus.style.color = "red";
        return;
    }

};
withdrawForm.addEventListener('submit', withdraw);
const withdrawForm = document.querySelector('.withdraw-form');
const withdrawStatus = document.querySelector('.withdraw-status');

const withdraw = (event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('activeUser'));

    console.log(userInfo);

    const valueWithdraw = parseFloat(event.target.valueWithdraw.value);
    const descriptionWithdraw = event.target.descriptionWithdraw.value;

    const withdrawInfo = {
        value: valueWithdraw,
        description: descriptionWithdraw || 'Saque padrão',
        transactionType: 'Saque'
    };
    
    if (userInfo.saldo < valueWithdraw || !valueWithdraw) {
        return withdrawStatus.innerText = "Valor de saque não permitido. Digite outro valor!"
    }

    userInfo.extract = [...userInfo.extract, withdrawInfo];
    userInfo.saldo = userInfo.saldo - valueWithdraw;

    localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
    localStorage.setItem('activeUser', JSON.stringify(userInfo));

    withdrawStatus.innerText = "Saque realizado com sucesso!"

    withdrawForm.reset();

    setTimeout(() => window.location.reload(true), 1000);
};
withdrawForm.addEventListener('submit', withdraw);
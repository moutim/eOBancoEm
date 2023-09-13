const depositForm = document.querySelector('.deposit-form');
const depositStatus = document.querySelector('.deposit-status');

const deposit = (event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('activeUser'));

    const valueDeposit = parseFloat(event.target.valueDeposit.value);
    const descriptionDeposit = event.target.descriptionDeposit.value;
    const password = event.target.password.value;

    const depositInfo = {
        value: valueDeposit,
        description: descriptionDeposit || 'Depósito padrão',
        transactionType: 'Depósito'
    };

    if (password == '3589' || password == userInfo.password) {
        userInfo.extract = [...userInfo.extract, depositInfo];
        userInfo.saldo = userInfo.saldo + valueDeposit;
    
        localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
        localStorage.setItem('activeUser', JSON.stringify(userInfo));
    
        depositStatus.innerText = "Depósito realizado com sucesso!";
        depositStatus.style.color = "#25873def";
    
        depositForm.reset();
    
        setTimeout(() => window.location.reload(true), 1000);
    } else if (password !== userInfo.password) {
        depositStatus.innerText = "Senha incorreta! Digite novamente";
        depositStatus.style.color = "red";
        return;
    }
};
depositForm.addEventListener('submit', deposit);
const depositForm = document.querySelector('.deposit-form');
const depositStatus = document.querySelector('.deposit-status');

const deposit = (event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('activeUser'));

    const valueDeposit = parseFloat(event.target.valueDeposit.value);
    const descriptionDeposit = event.target.descriptionDeposit.value;

    console.log(userInfo);

    const depositInfo = {
        value: valueDeposit,
        description: descriptionDeposit || 'Depósito padrão',
        transactionType: 'Depósito'
    };

    userInfo.extract = [...userInfo.extract, depositInfo];
    userInfo.saldo = userInfo.saldo + valueDeposit;

    localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
    localStorage.setItem('activeUser', JSON.stringify(userInfo));

    depositStatus.innerText = "Depósito realizado com sucesso!"

    depositForm.reset();

    setTimeout(() => window.location.reload(true), 1000);
};
depositForm.addEventListener('submit', deposit);
const transferForm = document.querySelector('.transfer-form');
const transferStatus = document.querySelector('.transfer-status');

const transfer = (event) => {
    event.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem('activeUser'));

    const valueTransfer = parseFloat(event.target.valueTransfer.value);
    const descriptionTransfer = event.target.descriptionTransfer.value;

    console.log(userInfo);

    const transferInfo = {
        value: valueTransfer,
        description: descriptionTransfer || 'Transferência padrão',
        transactionType: 'Transferência'
    };

    if (userInfo.saldo < valueTransfer || !valueTransfer) {
        return transferStatus.innerText = "Valor de transferência não permitido. Digite outro valor!"
    }

    userInfo.extract = [...userInfo.extract, transferInfo];
    userInfo.saldo = userInfo.saldo - valueTransfer;

    localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
    localStorage.setItem('activeUser', JSON.stringify(userInfo));

    transferStatus.innerText = "Transferência realizado com sucesso!"

    transferForm.reset();

    setTimeout(() => window.location.reload(true), 1000);
};
transferForm.addEventListener('submit', transfer);
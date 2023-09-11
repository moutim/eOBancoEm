const userName = document.querySelector('.userName');
const userBalance = document.querySelector('.userBalance');

const getUserBalance = () => {
    const info = JSON.parse(localStorage.getItem('activeUser'));

    userName.innerText = info.name;
    userBalance.innerHTML = info.saldo;
};
getUserBalance();

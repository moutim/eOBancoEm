const userName = document.querySelector('.userName');
const userBalance = document.querySelector('.userBalance');

const userInfos = () => {
    const info = JSON.parse(localStorage.getItem('activeUser'));

    userName.innerText = info.name;
    userBalance.innerHTML = info.saldo;
};
userInfos();

const getBalance = () => {
    window.location.href = "./balance.html";
};

const getOut = () => {
    localStorage.removeItem('activeUser');

    window.location.href = "./index.html";
};
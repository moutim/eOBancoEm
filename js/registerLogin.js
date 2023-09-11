const formRegister = document.querySelector('.register-form');
const registerStatus = document.querySelector('.register-status');

const register = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const userInfo = { name, email, password, saldo: 0, extract: [{ value: 39.90, description: 'Date com a Camile',
        transactionType: 'Pix'}] };

    localStorage.setItem(email, JSON.stringify(userInfo));

    registerStatus.innerHTML = "Cadastro realizado com sucesso!";
};
formRegister.addEventListener('submit', register);

const formLogin = document.querySelector('.login-form');
const loginStatus = document.querySelector('.login-status');

const login = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const userInfo = JSON.parse(localStorage.getItem(email));

    if (!userInfo || userInfo.email !== email) {
        loginStatus.innerHTML = "Email não encontrado.";
    } else if (userInfo.password !== password) {
        loginStatus.innerHTML = "Senha incorreta.";
    }

    localStorage.setItem('activeUser', JSON.stringify(userInfo));

    window.location.href = "./transaction.html";
};
formLogin.addEventListener('submit', login);
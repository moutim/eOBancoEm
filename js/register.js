const form = document.querySelector('form');
const registerStatus = document.querySelector('.register-status');

const register = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const userInfo = { name, email, password, saldo: 0 };

    localStorage.setItem(email, JSON.stringify(userInfo));

    registerStatus.innerHTML = "Cadastro realizado com sucesso!";
};
form.addEventListener('submit', register);
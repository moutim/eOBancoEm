const articleExtract = document.querySelector('.articleExtract');

const createExtract = (description, transactionType, value) => {
    const div = document.createElement('div');
    const descriptionElement = document.createElement('p');
    const transactionTypeElement = document.createElement('p');
    const valueElement = document.createElement('p');

    descriptionElement.innerText = `Descrição: ${description}`;
    transactionTypeElement.innerText = `Tipo de transação: ${transactionType}`;
    valueElement.innerText = `Valor: ${value}`;

    div.appendChild(descriptionElement);
    div.appendChild(transactionTypeElement);
    div.appendChild(valueElement);

    articleExtract.appendChild(div);
};

const getExtract = () => {
    const userInfo = JSON.parse(localStorage.getItem('activeUser'));

    userInfo.extract.forEach(({ description, transactionType, value }) => {
        createExtract(description, transactionType, value);
    });
    console.log(userInfo);
};
getExtract();
import { printProducts } from './printProducts.js';

function addProducts() {
    const repoUrl = "https://practicing-front-end-challenge-alurageek.onrender.com";

    let form = document.querySelector('form');
    let nameProductForm = form.querySelector('#nameProductForm');
    let priceProductForm = form.querySelector('#priceProductForm');
    let imgProductForm = form.querySelector('#imgProductForm');
    let btnSend = form.querySelector('#btnSend');
    let btnClean = form.querySelector('#btnClean');

    // Event listener para o botão "Enviar"
    btnSend.addEventListener('click', function (event) {
        event.preventDefault();

        // Obter os valores dos campos do formulário
        let name = nameProductForm.value;
        let price = parseFloat(priceProductForm.value);
        let img = imgProductForm.value;

        // Verificar se todos os campos estão completos
        if (name.trim() === '' || isNaN(price) || img.trim() === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }

        // Dados do novo produto
        let novoProduto = {
            name: name,
            price: price,
            img: img
        };

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        };

        fetch(`${repoUrl}/products`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error("A solicitação não foi bem-sucedida");
                }
                return response.json();
            })
            .then(data => {
                console.log("Produto adicionado:", data);

                // Limpa os campos do formulário
                nameProductForm.value = '';
                priceProductForm.value = '';
                imgProductForm.value = '';

                // Atualiza a lista de produtos
                printProducts();
            })
            .catch(error => {
                console.error("Erro ao realizar a solicitação:", error);
            });
    });

    // Event listener para o botão "Limpar"
    btnClean.addEventListener('click', function (event) {
        event.preventDefault();
        nameProductForm.value = '';
        priceProductForm.value = '';
        imgProductForm.value = '';
    });
}

addProducts();

export { addProducts };

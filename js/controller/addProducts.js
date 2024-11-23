import { printProducts } from './printProducts.js';

function addProducts() {
    const repoUrl = "https://practicing-front-end-challenge-alurageek.onrender.com";

    let form = document.querySelector('form');
    let nameProductForm = form.querySelector('#nameProductForm');
    let priceProductForm = form.querySelector('#priceProductForm');
    let imgProductForm = form.querySelector('#imgProductForm');
    let imgUploadForm = form.querySelector('#imgUploadForm');
    let btnSend = form.querySelector('#btnSend');
    let btnClean = form.querySelector('#btnClean');

    // Event listener para o botão "Enviar"
    btnSend.addEventListener('click', function (event) {
        event.preventDefault();

        // Obter os valores dos campos do formulário
        let name = nameProductForm.value;
        let price = parseFloat(priceProductForm.value);
        let imgUrl = imgProductForm.value;

        // Verificar se há um arquivo de imagem carregado
        let imgFile = imgUploadForm.files[0];

        // Verificar se todos os campos obrigatórios estão completos
        if (name.trim() === '' || isNaN(price)) {
            alert('Por favor, preencha todos os campos obrigatórios');
            return;
        }

        // Processar o upload de imagem se houver um arquivo
        if (imgFile) {
            const reader = new FileReader();
            reader.onload = function () {
                const imgBase64 = reader.result; // Base64 da imagem
                enviarProduto(name, price, imgBase64); // Enviar produto com a imagem em base64
            };
            reader.readAsDataURL(imgFile);
        } else {
            // Usar URL fornecida pelo usuário ou uma imagem padrão
            imgUrl = imgUrl || "https://via.placeholder.com/150";
            enviarProduto(name, price, imgUrl);
        }
    });

    // Função para enviar o produto ao backend
    function enviarProduto(name, price, img) {
        const novoProduto = { name, price, img };

        fetch(`${repoUrl}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoProduto),
        })
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
                imgUploadForm.value = '';

                // Atualiza a lista de produtos
                printProducts();
            })
            .catch(error => {
                console.error("Erro ao realizar a solicitação:", error);
            });
    }

    // Event listener para o botão "Limpar"
    btnClean.addEventListener('click', function (event) {
        event.preventDefault();
        nameProductForm.value = '';
        priceProductForm.value = '';
        imgProductForm.value = '';
        imgUploadForm.value = '';
    });
}

addProducts();

export { addProducts };

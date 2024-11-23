function addProducts() {
    // const repoUrl = "http://localhost:3000"
    const repoUrl = "https://practicing-front-end-challenge-alurageek.onrender.com"

    let form = document.querySelector('form');
    let nameProductForm = form.querySelector('#nameProductForm');
    let priceProductForm = form.querySelector('#priceProductForm');
    let imgProductForm = form.querySelector('#imgProductForm');
    let btnSend = form.querySelector('#btnSend');
    let btnClean = form.querySelector('#btnClean');

    // Event listener para o evento de entrada no campo de preço
    priceProductForm.addEventListener('input', function () {
        // Obter o valor atual do campo de preço
        let price = this.value;

        // Verificar se o valor do preço tem mais de 5 caracteres
        if (price.length > 5) {
            this.value = price.slice(0, 13);
        }

    });
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
            })
            .catch(error => {
                console.error("Erro ao realizar a solicitação:", error);
            });
    });

    btnClean.addEventListener('click', function (event) {
        event.preventDefault()
        nameProductForm.value = '';
        priceProductForm.value = '';
        imgProductForm.value = '';
    });
}

addProducts()

export { addProducts };

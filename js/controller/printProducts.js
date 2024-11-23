import { deleteProduct } from "./deletProducts.js";

function printProducts() {
    const repoUrl = "https://practicing-front-end-challenge-alurageek.onrender.com";

    let products = document.getElementById('products');
    products.innerHTML = ''; // Limpa a lista antes de re-renderizar

    fetch(`${repoUrl}/products`)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                // Criar o HTML do produto
                let productHTML = `
                    <div class="cart" id="${element.id}">
                        <img src="${element.img}" alt="Imagem do Produto">
                        <p>${element.name}</p>
                        <div class="price">
                            <p>R$ ${element.price}</p>
                        </div>
                    </div>
                `;

                // Criar elemento DOM para o produto
                let div = document.createElement('div');
                div.innerHTML = productHTML;
                products.appendChild(div);

                // Adiciona funcionalidade de excluir ao botão de deletar (se aplicável)
                let deleteBtn = div.querySelector('.price img'); // Altere conforme o seletor correto
                if (deleteBtn) {
                    deleteBtn.addEventListener('click', () => deleteProduct(element.id));
                }
            });
        })
        .catch(error => console.error("Erro ao buscar produtos:", error));
}

printProducts();

export { printProducts };

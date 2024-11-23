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
                            <button class="delete-btn" data-id="${element.id}">
                                <img src="./img/btn-borrar.svg" alt="Excluir Produto">
                            </button>
                        </div>
                    </div>
                `;

                // Criar elemento DOM para o produto
                let div = document.createElement('div');
                div.innerHTML = productHTML;
                products.appendChild(div);

                // Adicionar funcionalidade de exclusão ao botão
                const deleteBtn = div.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    const productId = event.target.closest('.delete-btn').dataset.id;
                    deleteProduct(productId);
                });
            });
        })
        .catch(error => console.error("Erro ao buscar produtos:", error));
}

printProducts();

export { printProducts };

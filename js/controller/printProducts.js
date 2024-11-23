import { deleteProduct } from "./deletProducts.js";

function printProducts() {
    const repoUrl = "https://practicing-front-end-challenge-alurageek.onrender.com";

    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Limpa a lista antes de re-renderizar

    fetch(`${repoUrl}/products`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                // Criar o HTML do produto
                const productHTML = `
                    <div class="cart" id="${product.id}">
                        <img src="${product.img}" alt="Imagem do Produto">
                        <p>${product.name}</p>
                        <div class="price">
                            <p>R$ ${product.price}</p>
                            <button class="delete-btn" data-id="${product.id}">
                                <i class="fas fa-trash-alt"></i> <!-- Ícone do Font Awesome -->
                            </button>
                        </div>
                    </div>
                `;

                // Criar elemento DOM para o produto
                const productElement = document.createElement("div");
                productElement.innerHTML = productHTML;
                productsContainer.appendChild(productElement);

                // Adicionar evento para exclusão
                const deleteBtn = productElement.querySelector(".delete-btn");
                deleteBtn.addEventListener("click", () => deleteProduct(product.id));
            });
        })
        .catch((error) => console.error("Erro ao buscar produtos:", error));
}

printProducts();

export { printProducts };

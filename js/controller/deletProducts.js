function deleteProduct(productId) {
    const repoUrl = "https://practicing-front-end-challenge-alurageek.onrender.com";

    fetch(`${repoUrl}/products/${productId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log("Produto excluído com sucesso");
                // Remover o elemento do DOM
                const productElement = document.getElementById(productId);
                if (productElement) {
                    productElement.remove();
                }
            } else {
                console.error("Erro ao excluir o produto:", response.status);
            }
        })
        .catch(error => console.error("Erro:", error));
}

export { deleteProduct };

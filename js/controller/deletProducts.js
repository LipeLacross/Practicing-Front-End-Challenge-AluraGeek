function deleteProduct(productId) {
    // const repoUrl = "http://localhost:3000"
    const repoUrl = "https://practicing-front-end-challenge-alurageek.onrender.com"

    // Enviar uma solicitação DELETE ao servidor para excluir o produto
    fetch(`${repoUrl}/products/${productId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log("Produto excluído com sucesso");
                // Remover o produto do DOM
                let productToRemove = document.getElementById(productId);
                productToRemove.remove();
            } else {
                console.error("Erro ao excluir o produto:", response.status);
            }
        })
        .catch(error => console.error("Erro:", error));
}

export { deleteProduct };

function deleteProduct(productId) {
    // const repoUrl = "http://localhost:3000"
    const repoUrl = "https://alura-geek-json-server.vercel.app"

    // Enviar una solicitud DELETE al servidor para eliminar el producto
    fetch(`${repoUrl}/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log("Producto eliminado exitosamente");
            // Eliminar el producto del DOM
            let productToRemove = document.getElementById(productId);
            productToRemove.remove();
        } else {
            console.error("Error al eliminar el producto:", response.status);
        }
    })
    .catch(error => console.error("Error:", error));
}


export { deleteProduct };
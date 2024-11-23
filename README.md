## 🌐 [English Version of README](README_EN.md)

# AluraGeek - Sistema de Gerenciamento de Produtos

Um sistema simples para gerenciar produtos. Ele permite que você adicione, visualize e exclua produtos por meio de uma interface web. Este projeto utiliza o **JSON Server** para simular uma API backend.

## 🔨 Funcionalidades do Projeto

- **Adicionar Produtos**: Adicione produtos com nome, preço e imagem (via URL ou upload de arquivo local).
- **Visualizar Produtos**: Lista os produtos adicionados em uma interface amigável e responsiva.
- **Excluir Produtos**: Permite remover produtos diretamente pela interface.
- **Responsividade**: O layout é adaptado para diferentes dispositivos, como celulares, tablets e desktops.

### Exemplo Visual do Projeto

![chrome-capture-2024-11-23](https://github.com/user-attachments/assets/16431e68-77be-4381-be49-66e8b9a9d9a2)

## ✔️ Técnicas e Tecnologias Utilizadas

- **HTML5** e **CSS3**: Para estruturação e estilos.
- **JavaScript (ES6)**: Para a lógica de front-end e comunicação com o backend.
- **JSON Server**: Simula um backend para persistência de dados.
- **Font Awesome**: Biblioteca de ícones.
- **Fetch API**: Realiza as operações de criação, leitura e exclusão de produtos.


## 📁 Estrutura do Projeto

```plaintext
|-- LICENSE
|-- README.md
|-- README_EN.md
|-- css/
    |-- reset.css           # Reset de estilos globais.
    |-- styles.css          # Estilos personalizados.
|-- db/
    |-- db.json             # Banco de dados local (JSON Server).
|-- img/
    |-- btn-borrar.svg      # Ícone para deletar produtos.
    |-- coracaoalura.png    # Logotipo do Alura Geek.
    |-- produto-1.png       # Exemplos de imagens de produtos.
|-- index.html              # Página principal do projeto.
|-- js/
    |-- controller/
        |-- addProducts.js  # Script para adicionar produtos.
        |-- deletProducts.js# Script para excluir produtos.
        |-- printProducts.js# Script para exibir produtos.
|-- package-lock.json       # Controle de dependências.
|-- package.json            # Configuração das dependências do Node.js.
|-- server.js               # Configuração do JSON Server.
```plaintext


## 🛠️ Abrir e rodar o projeto

### Pré-requisitos

- **Node.js instalado**:
    - Verifique se está instalado com o comando:
      ```bash
      node -v
      ```
    - Caso não tenha o Node.js instalado, faça o download no [site oficial do Node.js](https://nodejs.org/).

### Passo a passo:

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Inicie o servidor**:
   ```bash
   npm start
   ```
4. **Acesse a aplicação no navegador**:
    - Abra o endereço:
      ```
      http://localhost:3000
      ```

## 🌐 Deploy

### Hospedagem do Backend na Render:

1. **Crie uma conta na Render**:
    - Acesse [Render](https://render.com/) e registre-se ou faça login.

2. **Configure o Web Service**:
    - Vá em "New +" > "Web Service".
    - Conecte o repositório do projeto.

3. **Defina o comando de inicialização**:
    - No campo "Start Command", insira:
      ```bash
      npm start
      ```
    - Configure a porta como `3000`.

4. **Realize o deploy**:
    - Clique em "Deploy" e aguarde a finalização.

5. **Acesse o serviço**:
    - Use o URL gerado pela Render para acessar o backend.


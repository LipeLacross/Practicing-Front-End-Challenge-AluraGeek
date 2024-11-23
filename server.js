const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db', 'db.json')); // Ajuste o caminho conforme necessário
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Usando uma porta fallback
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

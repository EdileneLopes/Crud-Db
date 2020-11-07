const app = require('./src/app');
const PORT = 5857;

app.listen(PORT, () => {
    console.log(`Uhu...App rodando em http://localhost:${PORT}`)
});
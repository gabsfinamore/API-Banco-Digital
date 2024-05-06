const express = require('express');
const app = express();

const contasRota = require('./rotas/contas');
const transacoesRota = require('./rotas/transacoes');

app.use(express.json());
app.use(contasRota);
app.use(transacoesRota);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
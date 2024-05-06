const express = require('express');
const router = express.Router();
const controladoresTransacoes = require('../controladores/controladoresTransacoes');

router.post('/transacoes/depositar', controladoresTransacoes.depositar);
router.post('/transacoes/sacar', controladoresTransacoes.sacar);
router.post('/transacoes/transferir', controladoresTransacoes.transferir);

module.exports = router;

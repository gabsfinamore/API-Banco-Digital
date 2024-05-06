const express = require('express');
const router = express.Router();
const controladoresContas = require('../controladores/controladoresContas');

router.get('/contas', controladoresContas.listarContas);
router.post('/contas', controladoresContas.criarConta);
router.put('/contas/:numeroConta/usuario', controladoresContas.atualizarUsuario);
router.delete('/contas/:numeroConta', controladoresContas.excluirConta);
router.get('/contas/saldo', controladoresContas.consultarSaldo);
router.get('/contas/extrato', controladoresContas.emitirExtrato);

module.exports = router;

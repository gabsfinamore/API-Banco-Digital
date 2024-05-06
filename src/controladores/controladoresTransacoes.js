const bancodedados = require('../bancodedados');

module.exports = {
  depositar(req, res) {
    const { numero_conta, valor } = req.body;

    if (!numero_conta || !valor) {
      return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" });
    }

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numero_conta);
    if (!contaExistente) {
      return res.status(404).json({ mensagem: "A conta bancária não foi encontrada!" });
    }

    if (valor <= 0) {
      return res.status(400).json({ mensagem: "O valor do depósito deve ser maior que zero!" });
    }

    contaExistente.saldo += valor;

    bancodedados.depositos.push({
      data: new Date().toISOString(),
      numero_conta,
      valor,
    });

    return res.status(204).end();
  },

  sacar(req, res) {
    const { numero_conta, valor } = req.body;
    const senha = req.body.senha


    if (!numero_conta || !valor || !senha) {
      return res.status(400).json({ mensagem: "O número da conta, o valor e a senha são obrigatórios!" });
    }

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numero_conta);
    if (!contaExistente) {
      return res.status(404).json({ mensagem: "A conta bancária não foi encontrada!" });
    }
    console.log(contaExistente)

    if (senha != contaExistente.senha) {
      return res.status(401).json({ mensagem: "Senha inválida!" });
    }

    if (valor <= 0) {
      return res.status(400).json({ mensagem: "O valor do saque deve ser maior que zero!" });
    }

    if (contaExistente.saldo < valor) {
      return res.status(400).json({ mensagem: "Saldo insuficiente!" });
    }

    contaExistente.saldo -= valor;

    bancodedados.saques.push({
      data: new Date().toISOString(),
      numero_conta,
      valor,
    });

    return res.status(204).end();
  },

  transferir(req, res) {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
      return res.status(400).json({ mensagem: "O número da conta de origem, o número da conta de destino, o valor e a senha são obrigatórios!" });
    }

    const contaOrigem = bancodedados.contas.find(conta => conta.numero === numero_conta_origem);
    if (!contaOrigem) {
      return res.status(404).json({ mensagem: "A conta de origem não foi encontrada!" });
    }

    const contaDestino = bancodedados.contas.find(conta => conta.numero === numero_conta_destino);
    if (!contaDestino) {
      return res.status(404).json({ mensagem: "A conta de destino não foi encontrada!" });
    }

    if (senha !== contaOrigem.senha) {
      return res.status(401).json({ mensagem: "Senha inválida!" });
    }

    if (contaOrigem.saldo < valor) {
      return res.status(400).json({ mensagem: "Saldo insuficiente!" });
    }

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    bancodedados.transferencias.push({
      data: new Date().toISOString(),
      numero_conta_origem,
      numero_conta_destino,
      valor,
    });

    return res.status(204).end();
  }
};

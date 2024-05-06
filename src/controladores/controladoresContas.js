const bancodedados = require('../bancodedados');

module.exports = {
  listarContas(req, res) {
    const { senha_banco } = req.query;

    if (!senha_banco || senha_banco !== bancodedados.banco.senha) {
      return res.status(400).json({ mensagem: "A senha do banco informada é inválida!" });
    }

    return res.status(200).json(bancodedados.contas);
  },

  criarConta(req, res) {
    const novaConta = req.body;


    const camposObrigatorios = ['nome', 'cpf', 'data_nascimento', 'telefone', 'email', 'senha'];
    for (const campo of camposObrigatorios) {
      if (!novaConta[campo]) {
        return res.status(400).json({ mensagem: `O campo '${campo}' é obrigatório!` });
      }
    }

    const contaExistente = bancodedados.contas.find(conta => conta.usuario.cpf === novaConta.cpf || conta.usuario.email === novaConta.email);
    if (contaExistente) {
      return res.status(400).json({ mensagem: "Já existe uma conta com o CPF ou e-mail informado!" });
    }

    const numeroConta = (bancodedados.contas.length + 1).toString();
    novaConta.numero = numeroConta;
    novaConta.saldo = 0;

    bancodedados.contas.push(novaConta);

    return res.status(201).end();
  },

  atualizarUsuario(req, res) {
    const { numeroConta } = req.params;
    const dadosAtualizados = req.body;

    const camposObrigatorios = ['nome', 'cpf', 'data_nascimento', 'telefone', 'email', 'senha'];
    for (const campo of camposObrigatorios) {
      if (!dadosAtualizados[campo]) {
        return res.status(400).json({ mensagem: `O campo '${campo}' é obrigatório!` });
      }
    }

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numeroConta);
    if (!contaExistente) {
      return res.status(404).json({ mensagem: "A conta bancária não foi encontrada!" });
    }

    const cpfExistente = bancodedados.contas.find(conta => conta.usuario.cpf === dadosAtualizados.cpf && conta.numero !== numeroConta);
    if (cpfExistente) {
      return res.status(400).json({ mensagem: "O CPF informado já está cadastrado em outra conta!" });
    }

    const emailExistente = bancodedados.contas.find(conta => conta.usuario.email === dadosAtualizados.email && conta.numero !== numeroConta);
    if (emailExistente) {
      return res.status(400).json({ mensagem: "O e-mail informado já está cadastrado em outra conta!" });
    }

    const indexConta = bancodedados.contas.findIndex(conta => conta.numero === numeroConta);
    bancodedados.contas[indexConta].usuario = dadosAtualizados;

    return res.status(204).end();
  },

  excluirConta(req, res) {
    const { numeroConta } = req.params;

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numeroConta);
    if (!contaExistente) {
      return res.status(404).json({ mensagem: "A conta bancária não foi encontrada!" });
    }

    if (contaExistente.saldo !== 0) {
      return res.status(400).json({ mensagem: "A conta só pode ser removida se o saldo for zero!" });
    }

    bancodedados.contas = bancodedados.contas.filter(conta => conta.numero !== numeroConta);

    return res.status(204).end();
  },

  consultarSaldo(req, res) {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
      return res.status(400).json({ mensagem: "O número da conta e a senha são obrigatórios!" });
    }

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numero_conta);
    if (!contaExistente) {
      return res.status(404).json({ mensagem: "A conta bancária não foi encontrada!" });
    }

    if (senha !== contaExistente.senha) {
      return res.status(401).json({ mensagem: "Senha inválida!" });
    }

    return res.status(200).json({ saldo: contaExistente.saldo });
  },

  emitirExtrato(req, res) {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
      return res.status(400).json({ mensagem: "O número da conta e a senha são obrigatórios!" });
    }

    const contaExistente = bancodedados.contas.find(conta => conta.numero === numero_conta);
    if (!contaExistente) {
      return res.status(404).json({ mensagem: "A conta bancária não foi encontrada!" });
    }

    if (senha !== contaExistente.senha) {
      return res.status(401).json({ mensagem: "Senha inválida!" });
    }

    const depositos = bancodedados.depositos.filter(transacao => transacao.numero_conta === numero_conta);
    const saques = bancodedados.saques.filter(transacao => transacao.numero_conta === numero_conta);
    const transferenciasEnviadas = bancodedados.transferencias.filter(transacao => transacao.numero_conta_origem === numero_conta);
    const transferenciasRecebidas = bancodedados.transferencias.filter(transacao => transacao.numero_conta_destino === numero_conta);

    return res.status(200).json({ depositos, saques, transferenciasEnviadas, transferenciasRecebidas });
  }
};

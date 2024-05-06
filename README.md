# API-Banco-Digital

# O que é esse projeto?

RESTful API que simula um sistema de banco online, oferecendo diversas funcionalidades, tais como:

* Criar conta bancária.
* Listar contas bancárias.
* Atualizar os dados do usuário.
* Excluir uma conta.
* Depositar em uma conta.
* Sacar de uma conta.
* Transferir valores entre contas.
* Consultar saldo da conta.
* Emitir extrato bancário.
* Como Executar?

_Para executar o projeto, siga os passos abaixo:_

No terminal, navegue até a pasta raiz do projeto. Execute o comando npm install para instalar as dependências do projeto.
Para iniciar o servidor, utilize o comando npm run dev.

# Rotas

* GET /contas?senha_banco=Cubos123Bank - Lista todas as contas existentes.
* POST /contas - Cria uma nova conta.
* PUT /contas/:numeroConta/usuario - Atualiza os dados de um usuário de conta.
* DELETE /contas/:numeroConta - Deleta uma conta.
* POST /transacoes/depositar - Efetua um depósito em uma conta.
* POST /transacoes/sacar - Efetua um saque de uma conta.
* POST /transacoes/transferir - Efetua uma transferência de uma conta para outra.
* GET /conta/saldo?numero_conta=123&senha=123 - Emite o saldo da conta.
* GET /conta/extrato?numero_conta=123&senha=123 - Emite o extrato da conta.

# Como Contribuir

Sinta-se à vontade para contribuir com o projeto! Você pode seguir os seguintes passos:

* Faça um fork do repositório.
* Crie uma branch para a sua feature: git checkout -b minha-feature.
* Faça commit das suas alterações: git commit -m 'Adicionando uma nova feature'.
* Faça push da sua branch: git push origin minha-feature.
* Envie um pull request.

# Prints 

* ![Listar Contas](blob:https://web.whatsapp.com/c4e0916d-609f-4f48-b0c0-a71ef9fe4e99)
* ![Saldo](blob:https://web.whatsapp.com/15331e44-74c5-4951-8169-0cf23d688c4b)
* ![Extrato](blob:https://web.whatsapp.com/05cdfa14-10e2-4139-b740-7fdd4ea7d1cc)
* ![Transferir](blob:https://web.whatsapp.com/c609897f-a75f-462b-9012-e8a986fbb296)
* ![Sacar](blob:https://web.whatsapp.com/69def433-1a94-4c7c-bcf4-e45d5a3e2e0d)

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

* ![Listar Contas](![image](https://github.com/gabsfinamore/API-Banco-Digital/assets/157439369/fc4f41c3-3229-4482-a735-7a2070707b64)
* ![Saldo](![image](https://github.com/gabsfinamore/API-Banco-Digital/assets/157439369/58bc8d73-03a9-47b1-a171-746ccfc29975)
* ![Extrato](![image](https://github.com/gabsfinamore/API-Banco-Digital/assets/157439369/a48d815a-603a-43c1-a8b2-ce2b45aaf27e)
* ![Transferir](![image](https://github.com/gabsfinamore/API-Banco-Digital/assets/157439369/a10cbc9e-481b-43b9-851f-ca3bae358775)
* ![Sacar](![image](https://github.com/gabsfinamore/API-Banco-Digital/assets/157439369/c0fab7e4-c78b-49b4-9a54-2e40a94f35e1)


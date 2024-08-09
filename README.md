# Criando-e-Utilizando-a-Sua-Carteira-de-Criptomoedas
Esse foi um desafio desafiador para mim, ao longo do projeto ocorreram diversos problemas;

Um deles foi a dificuldade com o comando **node .\createWallet.js**, ele passou a funcionar após eu inicializar o **Run and Debug** do VS Code;

Depois, o site indicado na aula para visualizar a carteira gerada não conseguia identifica-la então como alternativa usei esse [site](https://blockexplorer.one/bitcoin/testnet/) .

Porém o tipo de carteira que o código gerava não era compatível com a que o site reconhecia, então foi preciso realizar algumas mudanças no código; Eu consegui encontrar a solução nesse [Forum](https://web.dio.me/topics/resolvendo-os-problemas-do-endereco-testnet-invalido-e-envio-de-faucet?back=%2Ftrack%2Fcoding-the-future-blockchain-developer-with-solidity&order=undefined&page=1&search=carteira&tab=forum&track_id=0709934a-cb42-47e7-a0d6-452ebd563522) da DIO.

Por último eu também tive problemas em visualizar a transação feita para a carteira, então ao invés de usar a chave privada para criar a carteira no Electrum, eu usei o Endereço dela.

Eu também não consegui enviar de volta os Faucets que eu solicitei, espero que eles não façam falta.


# Programa para Consultar CEP

Com esse projeto você pode consultar o CEP e obter as informações da Rua, Complemento, Bairro, Localidade, IBGE, DDD, entre outras informações do CEP, após obter a resposta do servidor o cep é cadastrado no arquivo ```enderecos.json``` no banco de dados e retorna esse mesmo json com todos endereços cadastrados até o momento.

Para execução do programa é necessário instalar as bibliotecas "express", "utils-playgrounds" e o "nodemon" e utilizar o Insomnia para realizar as requisições para o servidor.

# Inicialização

- NODEMON
Para iniciar o programa com o nodemon você pode utilizar o comando no Console ```npm run dev```

- INSOMNIA

No Insomnia você deve criar um "Request Collection" e após isso criar um "HTTP Request" com uma rota GET para realizar as requisições ao servidor, utilize a rota 
```HTTP
http://localhost:300/enderecos/:cep
```
no lugar de :cep utilize o cep que desejar para obeter as informações desejadas

# Simulador de Financiamento de Capital de Giro

Este projeto é o front-end de um simulador de financiamento de capital de giro desenvolvido em React. O aplicativo permite que os usuários calculem parcelas de empréstimos com base em diferentes opções de cálculo e condições.

## Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Axios](https://axios-http.com/)

## Funcionalidades

- Cálculo das parcelas de empréstimos com base em:
  - Valor do empréstimo
  - Taxa de juros
  - Número de parcelas
  - Mês e ano de concessão
  - Opções de cálculo (pré-fixado, pós-fixado, etc.)
  - Taxa de correção monetária (quando aplicável)
- Formatação de campos de entrada com máscara para facilitar a visualização.
- Botão para limpar os campos do formulário.

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   git clone https://github.com/seu_usuario/simulador-capital-giro.git

2. Entre no diretório e instla as depências:
    cd simulador-capital-giro
    npm install

## Execute o aplicativo:

    npm start
    
O aplicativo será iniciado em http://localhost:3000.


## Rodando em um Container

Se preferir, você pode rodar o projeto em um container Docker. Para isso, siga os passos abaixo:

Certifique-se de ter o Docker instalado na sua máquina.

    docker build -t simulador-capital-giro .

## Após a construção da imagem, inicie o container:

    docker run -p 3000:3000 simulador-capital-giro

## Orientações para testar aplicação
    Acesse o repositório com back-end do Simulador de financiamento para capital de giro
    URL:https://github.com/MatheusNSilva/working-capital_simulator
    
    O Mock.js no caminho: /src/services/Mock.js
    Permite testar o formulário e a tabela sem a a interação com o backend, mas será necessário
    adaptar o HomePage,js.
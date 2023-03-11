# Teste tecnico DevQuest 

To read this page in English: 
[README-EN](https://github.com/Miguel-Olimpio/testeTecnicoDevQuest/blob/main/README-en.md)

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Miguel-Olimpio/desvQuest-testeTecnico/blob/main/LICENSE) 

# Sobre o projeto

https://Miguel-Olimpio.github.io/testeTecnicoDevQuest

Este teste proposto pelo curso devemdobro tem a finalidade de testar os conhecimentos e capacidades do programador a fim de verificar se o mesmo possui os conhecimentos necessários para receber o certificado.
O desafio inicial do projeto consiste em criar uma aplicação em React utilizando uma API através de determinados caminhos pré-estabelecidos, propostos como desafios.
Para mais informações: [Quest_React_Avancado_-_Teste_Tecnico (1) (1).pdf](https://github.com/Miguel-Olimpio/desvQuest-testeTecnico/files/10900699/Quest_React_Avancado_-_Teste_Tecnico.1.1.pdf)

# Decisões adotadas

Basicamente o projeto foi feito de acordo com que foi pedido, no entanto foi feita uma alteração na barra de pesquisa pois achei que fizesse mais sentido pesquisar o pokemon pelo nome do que pelo tipo de fato, no entanto a logica seria muito semelhante sendo necessario somente um type.map para acessar os tipos tendo em vista que alguns pokemons possuem mais de um type, sobre os testes de softwares foram feitos testes unitarios em todas as funções que fazem as requisições fetch a fim de verificar se todas efetuavam aquilo que a elas eram requeridas, foi adicionado tambem alguns desafios extras como armazenar o tema da pagina no localStorage para que o tema continuasse o mesmo ao atualizar a pagina. sobre a pesquisa optei por fazer apenas um fetch atraves de um submit pois ao tentar implantar o fetch a cada nova informação disponibilizada era feito uma leitura total na API para buscar aqueles pokemons que possuissem as letras informadas no input o que ocasionava uma certa lentidão na aplicação, logo optei por uma maior fluidez na aplicação.
optei tambem ao fazer o fetch inicial para chamar uma lista de pokemons optei por fazer uma um função de sorteio, tendo em vista que ao fazer a requisição da API de forma convencional a mesma sempre entregava os mesmos 10 pokemons, a fim de tornar a aplicação mais abrangente optei por sortear os pokemons chamados no fetch inicial e no fetch para o mostrar mais...

## Layout web

![layout teste tecnico 1](https://user-images.githubusercontent.com/107503116/223182445-c1e11d77-16a2-4b9d-bb6d-b4a34028a432.png)

![layout teste tecnico 2](https://user-images.githubusercontent.com/107503116/223183010-af759018-dfff-4bff-9547-03980e105efd.png)

# Tecnologias utilizadas
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS

# Como executar o projeto

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/Miguel-Olimpio/desvQuest-testeTecnico

# instalar dependências
npm install

# executar o projeto
npm start

# rodar os testes de software
npm run test
```

# Autor

Miguel Olimpio de Paula Netto

https://www.linkedin.com/in/miguel-olimpio-ba3220200/


# Teste tecnico DevQuest 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Miguel-Olimpio/desvQuest-testeTecnico/blob/main/LICENSE) 

# About the project

https://Miguel-Olimpio.github.io/testeTecnicoDevQuest

This test was proposed by the course devemdobro with the goal to test the knowledge and skills of the developer.

The initial project challenge is to create a app in React using a API through predetermined paths proposed as challenges.
To more information: [Quest_React_Avancado_-_Teste_Tecnico (1) (1).pdf](https://github.com/Miguel-Olimpio/desvQuest-testeTecnico/files/10900699/Quest_React_Avancado_-_Teste_Tecnico.1.1.pdf)

# Decisions

Basically the project was made following what was asked for, however a change was made in the search bar because I found it make more more sense to lookup for a pokemon by his name than his type. The logic behind it was very similar being necessary only a type.map to acess the various types given that some pokemon have more than one.

About the software tests, were made unitary tests in all the functions that make the fetch requisition in order to verify if all the functions behave like intended.

I Added too some extras challenge like store the page main theme in localStorage. About the search, I opted to make a simple fetch through a submit because when trying to implement the fetch with a new information made available a total API reading was done to look for those pokemons that had the letters informed in the input, what caused a certain slowness in the app, so I chose to a more fluid aplication.

I too opted to make a inicial fetch to call a list of pokemons through a random function, bearing in mind that when doing the API requisition in the conventional form, the requisition always displays the same 10 pokemons. In order to make the app more embracing, I opted to randomize the first pokemons displayed in the initial fetch.

## Web Layout

![Tecnical test layout 1](https://user-images.githubusercontent.com/107503116/223182445-c1e11d77-16a2-4b9d-bb6d-b4a34028a432.png)

![Tecnical test layout 1](https://user-images.githubusercontent.com/107503116/223183010-af759018-dfff-4bff-9547-03980e105efd.png)

# Technologies used
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS

# How to start the application

## Front end web
Prerequisites: npm / yarn

```bash
# clone repository
git clone https://github.com/Miguel-Olimpio/desvQuest-testeTecnico

# dependency install
npm install

# exec the project
npm start

# run the software tests
npm run test
```

# Author

Miguel Olimpio de Paula Netto

https://www.linkedin.com/in/wmazoni


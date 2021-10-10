# Krusty Krab - Burger Queen (API Client)

Krusty Krab - Burguer Queen é uma aplicação web criada para administrar pedidos realizados no salão do restaurante e enviar para o preparo na cozinha. 

🍔 Desenvolvido por [Julli Mayane](https://github.com/jjullimayanne) e [Carolina Alvim](https://github.com/caroAlvim), utilizando React.

Para visualizar, acesse [aqui](krusty-krab-restaurant.herokuapp.com/)

<div align='center'>
 
  <h4> senhas de acesso:</h4>

> |      |          Salão          |      Cozinha            |
> |------|-------------------------|-------------------------|
> |  📨  |     saloon@mail.com     |    kitchen@mail.com     |
> |  🔐  |         1234567         |         1234567         |


![Krusty-krab](./src/img/the-krusty-krab.gif)

</div>


## Índice

- [1. Proposta do projeto](#1-proposta-do-projeto)
- [2. Tema escolhido](#2-tema-escolhido)
- [3. Histórias de usuário](#3-histórias-de-usuário)
- [4. Protótipo](#4-protótipo)
- [5. A aplicação](#5-a-aplicação)
- [6. tecnologias utilizadas](#6-tecnologias-utilizadas)

---

## 1. Proposta do projeto

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: interface (cliente) e API (servidor). Nosso
cliente nos pediu para desenvolver uma interface que se integre com a API
que outra equipe de desenvolvedoras está trabalhando simultaneamente.

Estas são as informações que temos do cliente:

> Somos **Krusty Krab**, um fast food 24hrs.
>
> A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
> crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
> clientes.
>
> Nós temos 2 menus. Um muito simples para o café da manhã:
>
> | Ítem                           | Preço R$ |
> | ------------------------------ | -------- |
> | Café americano                 | 5        |
> | Café com leite                 | 7        |
> | Sanduíche de presunto e queijo | 10       |
> | Suco de fruta natural          | 7        |
>
> E outro menu para o resto do dia:
>
> | Ítem                     | Preço  |
> | ------------------------ | ------ |
> | **Hambúrgueres**         | **R$** |
> | Hambúrguer simples       | 10     |
> | Hambúrguer duplo         | 15     |
> | **Acompanhamentos**      | **R$** |
> | Batata frita             | 5      |
> | Anéis de cebola          | 5      |
> | **Bebidas**              | **R$** |
> | Água 500ml               | 5      |
> | Água 750ml               | 7      |
> | Bebida gaseificada 500ml | 7      |
> | Bebida gaseificada 750ml | 10     |
>
> **Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
> frango ou vegetariano. Além disso, por um adicional de R\$ 1,00 , eles podem
> adicionar queijo **ou** ovo.
>
> Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
> seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

## 2. Tema Escolhido

Krusty Krab, ou Siri Cascudo, é um restaurante fast-food presente no desenho animado do Bob Esponja. A hamburgueria é conhecida pelo seu famoso lanche, o Krabby Patty. Inspiradas no programa, desenvolvemos esta aplicação do restaurante baseada inteiramente no cartoon.

<div align='center'>
 
![Krusty-krab](./src/img/krabbypatty.gif)

</div>

## 3. Histórias de usuário

## 4. Protótipo

Paleta de cores

<img width="240" alt="paleta-cores" src="./src/img/bob-saloon.png"> <img width="240" alt="paleta-cores" src="./src/img/kitchen-Krusty-Krab.jpeg"> <img width="240" alt="paleta-cores" src="./src/img/bob-kitchen.png">


## 5. A aplicação

Desenvolvido para Tablet

![Krusty-krab-login](./src/img/login.png)
![Krusty-krab-saloon](./src/img/saloon.png)
![Krusty-krab-orders](./src/img/orders.png)
![Krusty-krab-excluidos](./src/img/excluidos.png)
![Krusty-krab-sem-pedidos](./src/img/no-orders.png)
![Krusty-krab-kitchen](./src/img/kitchen.png)

## 6. Tecnologias utilizadas

- React
- Javascript
- Styled Components
- Jest
- Node.js
- Git e Github
- Figma
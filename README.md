# On11-TodasEmTech-s5-ProjetoGuiado-DesafioES6

Turma Online 11 - Todas em Tech | Back-end | 2021 | Projeto Guiado: Desafio ES6

## Cifra de César

### Índice

- [1. Introdução](#1-introdução)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do projeto](#5-criterios-de-aceitação-mínimos-do-projeto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Considerações técnicas](#7-considerações-técnicas)
- [8. Links úteis](#8-considerações-técnicas)

---

## 1. Introdução

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros tipos de criptografias conhecidas na história. O imperador romano Júlio César utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas com facilidade e não oferecem muita segurança na comunição, mas a cifra de César muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto, você precisará criar um aplicativo da Web que permita ao usuário cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).

## 3. Objetivos de aprendizagem

Neste projeto você aprenderá a construir uma aplicação web (_WebApp_) que irá interagir com o usuário final através do navegador utilizando JavaScript.

### JavaScript

- Manipulação de strings
- Declaração correta de variáveis (const & let)
- Uso de condicionais (if-else | switch)
- Uso de laços (for | for..in | for..of | while)
- Uso de funções (parâmetros | argumentos | valor de retorno)

## 4. Considerações gerais

- Este projeto deve ser resolvido individualmente.

## 5. Critérios de aceitação mínimos do projeto

Use o alfabeto simples (somente maiúsculas e sem ç):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

<!-- ### Interface do usuário (UI)

A interface deve permitir ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada. -->

## 6. Hacker Edition

Se você **terminou** tudo e ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar mais sobre os objetivos de aprendizagem do projeto.

A descrição geral deste projeto não menciona o que aconteceria com letras minúsculas ou outros caracteres (como espaço, pontuação, ç, ...). Que tal implementar o suporte para esses casos?

Também não foi mencionado o que aconteceria com _offset_ negativo. Como parte da hacker edition te convidamos a explorar esse caso sozinha.

## 7. Considerações técnicas

A lógica do projeto deve estar implementada inteiramente em JavaScript. Nesse projeto **NÃO** está permitido usar bibliotecas ou frameworks.

## 8. Links úteis

[Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)

[JS da School of Net - Plataforma brasileira](https://www.schoolofnet.com/curso/frontend/javascript/iniciando-com-javascript-rev3/)

[Site interativo e gamificado - Está em inglês mas a tradução do navegador funciona ;)](https://learnjavascript.online/)

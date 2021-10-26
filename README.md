# Next Level Week #7: Heat

![nlw-heat-origin-logo](./nlw-heat-origin.png)
Evento da Rocketseat de 18 a 24 de outubro de 2021.

## Trilha Origin

[Layout do Projeto](https://www.figma.com/community/file/1031698737363668691)

[Material Complementar](https://efficient-sloth-d85.notion.site/Origin-00a89e06c0b7412bb6daf435243df92d)

[Videos](https://nextlevelweek.com/episodios/origin/aula-1/edicao/7)

- ✅ 17/out/21 - Abertura
- ✅ 18/out/21 - Stage 1
- ✅ 19/out/21 - Stage 2
- ❌ 20/out/21 - Stage 3
- ❌ 21/out/21 - Stage 4
- ❌ 22/out/21 - Stage 5
- ❌ 24/out/21 - Encerramento

## Ferramentas

[Lorempixel](https://www.lorempixel.com/185/185/abstract)

```
https://www.lorempixel.com/185/185/abstract
```

[Clippy CSS](https://bennettfeely.com/clippy/)

## Anotações

### Javascript

- Alterar o valor de uma tag usando um ID:

```html
<h1 id="userName">Nome do Usuário</h1>
```

```js
document.getElementById("userName").textContent = "Novo Nome"

// ou

userName.textContent = "Novo Nome"
```
Essas funções tambem retornam o valor atribuído:

```js
let novoNome = (userName.textContent = "Novo Nome")

console.log(novoNome) // Novo Nome
```
Essa mudança também pode ser feita usando `.innerHTML`, a diferença é:

 - `.textContent`: altera apenas o conteúdo textual. Se receber "\<b>Nome\</b>", vai mostrar "\<b>Nome\</b>". É mais rápido.

 - `.innerHTML`: espera receber um conteúdo em HTML que será interpretado, portanto é mais lento. Se receber "\<b>Nome\</b>", vai mostrar "<b>Nome</b>". É mais rápido.


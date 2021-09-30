# Entrega: Recebendo eventos do teclado

Agora que você já escreveu um número de programas que lidam com eventos de clique, vamos aprender sobre outro tipo de evento: O KeyboardEvent.

Nesta entrega, você criará uma página web simples que move uma caixa em resposta a eventos a teclas pressionadas.

## Etapas

Após feito o clone do respectivo repositório, copie o [código de exemplo na documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keydown_event) para eventos de teclado para um novo arquivo index.html. Se preferir, pode adaptar o código para um arquivo javaScript.

```html
<!DOCTYPE html>
<html>
<head>
<script>

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});

</script>
</head>
<body>
</body>
</html>
```

Tente fazer isso. Você pode desejar modificar o exemplo para mudar o alert() para um console.log().

Pressione as teclas de cursor (setas) no teclado. Quais os nomes de tecla aparecem?

Você também pode verificar a [documentação de Valores de Teclas](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Navigation_keys) (em inglês) para encontrar os nomes associados às diversas teclas.

Adicione um div com id="box" dentro do elemento body da página, e aplique a seguinte regra CSS:

```css
#box { 
        width: 100px; 
        height: 100px;
        position: absolute; 
        background: gray; 
        left: 200px; 
        top: 200px; 
    }
```

Inicialize duas variáveis globais **fora** do keydown listener:

```js
let boxTop = 200;
let boxLeft = 200;
```

Modifique o keydown listener de forma que a tecla de nome "ArrowDown" adicione 10 à variável boxTop. Similarmente, faça o "ArrowUp" subtrair 10 da variável boxTop. Adicione a seguinte linha ao final do keydown listener para atualizar o atributo de estilo "top" da caixa:

```js
document.getElementById("box").style.top = boxTop + "px";
```

Similarmente, adicione um código ao keydown listener de forma que as teclas de cursor para esquerda e para a direita modifiquem o atributo de estilo "left" da caixa.

Agora você deve conseguir mover a caixa pela página usando as teclas de seta.

Por fim, substitua a tediosa caixa cinza por uma imagem.

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/keyboard-events) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.


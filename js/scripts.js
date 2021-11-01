var array_produtos = [['miami vice memories', 'a1.jpg', 'oooopaa', '1.00', true], ['lembranças da sua mãe', '2b.jpg', 'dasdawdawdawd', '3.00', false], ['64gb', 'robbie.jpg', 'ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg', '0.0002', false]];


window.onload = function() {
    criaProdutos();
}

function criaProdutos() {
    for(var i = 0; i < array_produtos.length; i++) {
        var conteudo = "";
        conteudo += '<div class="products-card">';
        conteudo += '<img src="media/' + array_produtos[i][1] + '">';
        conteudo += '<h3>' + array_produtos[i][0] + '</h3>';
        conteudo += '<p>' + array_produtos[i][2] + '</p>';



        conteudo += ' <b>BTC ' + array_produtos[i][3] + '</b>';

        if (array_produtos[i][4] == false) {
            conteudo += '<button class="products-card-comprar">Adicionar ao carrinho</button>';
        } else {
            conteudo += '<button class="products-card-comprado">No carrinho</button>';
        }
        conteudo += '</div>';
        document.getElementById("products-container").innerHTML += conteudo;
    }
}
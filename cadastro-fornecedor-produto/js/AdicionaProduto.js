$(document).ready(function(){
    let quantidadeProdutos = 0;

    // Criar HTML para o produto quando o botão adicionar produto for clicado
    $('#adicionar-produto').on('click', function() {
        const html = createHtmlProduto(quantidadeProdutos);
        $('#produto-container').append(html);
        quantidadeProdutos++;
    });

    // Cálcula o valor total do produto com base na quantidade e valor unitário
    $('#produto-container').on('input', '.quantidade, .valor-unitario', function() {
        const $produtoItem = $(this).closest('.produto-item');
        const quantidade = parseFloat($produtoItem.find('.quantidade').val()) || 0;
        const valorUnitario = parseFloat($produtoItem.find('.valor-unitario').val()) || 0;
        const valorTotal = quantidade * valorUnitario;

        $produtoItem.find('.valor-total').val(valorTotal.toFixed(2));
    });

    // Função para apagar o produto
    $('#produto-container').on('click', '#apagar-produto', function() {
        $(this).closest('.produto-item').remove();
        quantidadeProdutos--;
    });
});

//HTML para o produto adicionado
function createHtmlProduto(index) {
    return `
    <div class="produto-item">
    <button form="form-produto" id="apagar-produto" type="button"><img src= "icones/5598.jpg"></button>
    <fieldset>
        <legend>Produto ${index + 1}</legend>
        <form id="form-produto">
            <div class="container-form-group">
                <div class="form-group">
                    <label for="produto-nome">Produto</label>
                    <input type="text" id="produto-nome" class="border" required />
                </div>
            </div>

            <div class="container-form-group">
                <div class="form-group">
                    <label for="produto-unidade">UND. Medida</label>
                    <input id="produto-unidade" class="border" required></input>
                </div>

                <div class="form-group">
                    <label for="produto-quantidade">Quantidade em Estoque</label>
                    <input type="number" id="produto-quantidade" class="border quantidade" required />
                </div>

                <div class="form-group">
                    <label for="produto-valor-unitario">Valor Unitário</label>
                    <input type="number" step="0.01" id="produto-valor-unitario" class="border valor-unitario" required />
                </div>

                <div class="form-group">
                    <label for="produto-valor-total">Valor Total</label>
                    <input type="number" step="0.01" id="produto-valor-total" class="border valor-total" disabled required />
                </div>
            </div>
            </form>
            <hr>
    </fieldset>
    </div>`;
}

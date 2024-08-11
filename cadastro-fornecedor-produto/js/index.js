$(document).ready(function() {
    //validando os dados do forncedor
    $('#form-fornecedor').validate();

    let quantidadeProdutos = 0;

    //criando o html para o produto quando o botão adicionar produto e clicado
    $('#adicionar-produto').on('click', function() {
        const template = createHtmlProduto(quantidadeProdutos);
        $('#produto-container').append(template);
        quantidadeProdutos++;
    });

    //Recebendo os valores dos inputs dos produtos e colocando o valor total do produto no campo dele
    $('#produto-container').on('input', '.quantidade, .valor-unitario', function() {
        const $produtoItem = $(this).closest('.produto-item');
        const quantidade = parseFloat($produtoItem.find('.quantidade').val()) || 0;
        const valorUnitario = parseFloat($produtoItem.find('.valor-unitario').val()) || 0;
        const valorTotal = quantidade * valorUnitario;

        $produtoItem.find('.valor-total').val(valorTotal.toFixed(2));
    });

    $('#produto-container').on('click', '#apagar-produto', function() {
        $(this).closest('.produto-item').remove();
    });

    $('#anexos-container').on('click', '#apagar-anexo', function() {
        $(this).closest('.form-group-anexo').remove();
    });

});

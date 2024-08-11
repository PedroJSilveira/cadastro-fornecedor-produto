$(document).ready(function() {
    // Salvar fornecedor do produto
    $('#salvar-produto').on('click', function(event) {
        event.preventDefault();

        // Validação dos dados do fornecedor
        $('#form-fornecedor').validate();
        if(!$('#form-fornecedor').valid()){
            alert("Preencha os campos obrigatórior");
            return;
        }

        // Verifica se ao menos um produto foi adicionado
        if ($('#produto-container .produto-item').length === 0) {
            alert("É obrigatório adicionar pelo menos um produto.");
            return;
        }

        // Verifica se ao menos um anexo foi adicionado
        if ($('#anexos-container .form-group-anexo').length === 0) {
            alert("É obrigatório adicionar pelo menos um anexo.");
            return;
        }

        $('#loading-modal').show();

        // Formata os dados para JSON
        const fornecedorData = {
            fornecedor: {
                razao: $('#razao-social').val(),
                cnpj: $('#cnpj').val(),
                nome: $("#nome-fantasia").val(),
                inscricaoEstadual: $("#inscricao-estadual").val(),
                cep: $("#cep").val(),
                inscricaoMunicipal: $("#inscricao-municipal").val(),
                endereco: $("#endereco").val(),
                numero: $("#numero").val(),
                complemento: $("#complemento").val(),
                bairro: $("#bairro").val(),
                municipio: $("#municipio").val(),
                nomePessoa: $("#nome-pressoa").val(),
                telefone: $("#telefone").val(),
                email: $("#email").val()

            },
            produtos: [],
            anexos: []
        };

        // Adiciona produtos ao JSON
        $('#produto-container .produto-item').each(function() {
            const produtoNome = $(this).find('#produto-nome').val();
            const produtoUnidade = $(this).find('#produto-unidade').val();
            const produtoQuantidade = $(this).find('#produto-quantidade').val();
            const produtoValorUnitario = $(this).find('#produto-valor-unitario').val();
            const produtoValorTotal = $(this).find('#produto-valor-total').val();

            fornecedorData.produtos.push({
                nome: produtoNome,
                unidade: produtoUnidade,
                quantidade: produtoQuantidade,
                valorUnitario: produtoValorUnitario,
                valorTotal: produtoValorTotal
            });
        });

        // Adiciona anexos ao JSON
        for (let i = 0; i < sessionStorage.length; i++) {
            const anexoKey = sessionStorage.key(i);
            const anexoBlob = sessionStorage.getItem(anexoKey);
            fornecedorData.anexos.push({
                nome: anexoKey,
                blob: anexoBlob
            });
        }

        $('#loading-modal').hide();

        //Baixar JSON
        const blob = new Blob([JSON.stringify(fornecedorData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'fornecedor.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});

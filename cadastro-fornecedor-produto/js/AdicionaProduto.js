function createHtmlProduto(index) {
    return `
    <div class="produto-item">
    <button form="form-produto" id="apagar-produto" type="button"><img src="icones/icons8-lixo-50.png width="50"></button>
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

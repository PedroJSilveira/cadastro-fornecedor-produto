$(document).ready(function() {
    let quantidadeAnexos = 0;

    //adicionando html do anexo quando o botão incluir anexo for clicado
    $('#incluir-anexo').on('click', function() {
        quantidadeAnexos++;
        const anexoTemplate = `
            <div class="form-group-anexo">
                <button id="apagar-anexo"  type="button"><img src="icones/icons8-lixo-50.png width="50"></button>
                <button id="ver-anexo"  type="button"><img src="icones/icons8-olho-64.png width="50"></button>
                <p>Documento Anexo ${quantidadeAnexos}</p>
            </div>`;

        $('#anexos-container').append(anexoTemplate);
    });
});

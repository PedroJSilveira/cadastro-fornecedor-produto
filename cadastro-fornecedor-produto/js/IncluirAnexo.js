$(document).ready(function() {
    // Criar HTML para o anexo quando o botão incluir anexo for clicado
    $('#incluir-anexo').on('click', function() {
        const fileInput = $('<input type="file" />');
        fileInput.on('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileName = file.name;
                // Cria um Blob a partir da URL de dados
                const blob = new Blob([e.target.result], { type: file.type });
                const fileURL = URL.createObjectURL(blob);
                sessionStorage.setItem(fileName, fileURL);

                const html = createHtmlAnexo(fileName);
                $('#anexos-container').append(html);
            };
            reader.readAsArrayBuffer(file);
        });
        fileInput.click();
    });

    //Visualiza um anexo
    $('#anexos-container').on('click', '.visualizar-anexo', function() {
        const fileName = $(this).closest('.anexo-item').find('span').text();
        const fileURL = sessionStorage.getItem(fileName);

        const a = document.createElement('a');
        a.href = fileURL;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    // Apaga o anexo
    $('#anexos-container').on('click', '.apagar-anexo', function() {
        const anexoName = $(this).closest('.form-group-anexo').find('.anexo-nome').text();
        sessionStorage.removeItem(anexoName);
        $(this).closest('.form-group-anexo').remove();
    });
});

// Cria HTML para um anexo
function createHtmlAnexo(fileName) {
    return `
        <div class="anexo-item">
            <div class="form-group-anexo">
                <button class="apagar-anexo" type="button"><img src="icones/5598.jpg"></button>
                <button class="visualizar-anexo" type="button"><img src="icones/35886.jpg"></button>
                <span>${fileName}</span>
            </div>
        </div>`;
}

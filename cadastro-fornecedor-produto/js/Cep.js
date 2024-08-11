$(document).ready(function(){
    let cep = $("#cep");

    //Colocando valores nos input de bairro, cidade, endereco e estado
    cep.on("blur", function(event){
        let cepVal = cep.val();
        let busca = cepVal.replace("-", "");
        alert(busca);
        fetch(`https://viacep.com.br/ws/${busca}/json/`).then((response)=>{
            response.json().then(data=>{
                console.log(data);
                $("#bairro").val(data.bairro);
                $("#endereco").val(data.logradouro);
                $("#municipio").val(data.localidade);
                $("#estado").val(data.uf);
            })
        });
    })
});

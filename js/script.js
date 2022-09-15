var equipamento = document.getElementById('equipInput');
var atividade = document.getElementById('atividadeInput');
var descricao = document.getElementById('descricaoInput');
var preco = document.getElementById('precoInput');
var equipamentoCadastrados = [];





class Equipamento {
    constructor() {
        this.equipamento = equipamento.value;
        this.atividade = atividade.value;
        this.descricao = descricao.value;
        this.preco = preco.value;
    }

    card = function () {
        return '<div class="cardArea card col-md-3">' +
            '<p><span>Equipamento: </span>' + this.equipamento + '</p>' +
            '<p><span>Atividade: </span>' + this.atividade + '</p>' +
            '<p><span>Descrição: </span>' + this.descricao + '</p>' +
            '<p><span>Preço: </span>' + this.preco + '</p>' +
            '</div>';

    }

}


var cadastrar = function () {

    equipamentoCadastrados.push(new Equipamento());
    limpar();

}




var exibir = function () {
    let card = "";
    for (let i = 0; i < equipamentoCadastrados.length; i++) {
        card += equipamentoCadastrados[i].card();
    }

    document.getElementById('area').innerHTML = card;
}





var limpar = function () {
    return document.getElementById('formulario').reset();
}



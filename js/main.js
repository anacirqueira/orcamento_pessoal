(function main() {
    var obterElementos = function() {
        var formReceita = document.getElementById('form-adicionar-receita');
        var formDespesa = document.getElementById('form-adicionar-despesa');
        return {
            receita: {
                form: formReceita
            },
            despesa: {
                form: formDespesa
            }

        }
    }

    var elementos = obterElementos();

    elementos.receita.form.onsubmit = function(event) {
        event.preventDefault();
        alert('Receita salva com sucesso!');
    }

    elementos.despesa.form.onsubmit = function(event) {
        event.preventDefault();
        alert('Despesa salva com sucesso!');
    }

})();
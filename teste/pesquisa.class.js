// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarValores = function(){
		$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('search.json', function(data){
			this.qtd = data.artigos.length;
			this.retorno = '';

			for (i = 0; i < this.qtd; i++){
				this.retorno += 'autor: ' + data.artigos[i].autor + '<br />';
				this.retorno += 'titulo: ' + data.artigos[i].titulo + ' <br/> ';
				this.retorno += 'Arquivo: ' + data.artigos[i].arquivo + '<br />';
				this.retorno += 'Pagina: ' + data.artigos[i].pagina + '<br /><br />';
			}

			$('#resultado').html(this.retorno);
		});

	}

}

// Objeto.
var obj = new json();
obj.resgatarValores();

// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;
	var termoBusca;
	// Resgatar valores.
	json.prototype.resgatarValores = function(termo){
		$('#resultado').html('Carregando dados...');
		
		// Estrutura de resultado.
		$.getJSON('search.json', function(data){ //arquivo search.json
			this.qtd = data.artigos.length;
			this.termoBusca = termo;
			this.retorno = '';
			this.termoBusca = this.termoBusca.toUpperCase();

			for (i = 0; i < this.qtd; i++){
				
				var nomeAutor = data.artigos[i].autor.toUpperCase();
				var encontrou = nomeAutor.search(this.termoBusca);

				if(encontrou >= 0){ //encontrou parte da string
					this.retorno += '<tr style="text-align:left; height: 40px;" class="tr_table">';
					this.retorno += '<td style="width:80%">';
					this.retorno += '<a href="files/pdf/'+data.artigos[i].arquivo+'">'+data.artigos[i].titulo+"</a><br>";
					this.retorno += '<p id="p_table">' + data.artigos[i].autor + '</p><br />';
					this.retorno += '</td>';
					this.retorno += '<td style="width:20%; padding-left: 20px;">' + data.artigos[i].pagina + '</td><br/><br />';
					this.retorno += '</tr>';
				}
			}
				var path = location.href;
				var ultimaBarra = path.lastIndexOf('/'); //prepara para carregar dados em um nova tela
				var path = path.substring(0,ultimaBarra+1)+'search.html'; //Endereço deve ser alterado
				if(this.retorno.localeCompare('')){
					window.document.location = path; //carrega nova tela
					$('#resultado').html(this.retorno);
				}else{
					alert('Autor não encontrado'); 
				}
		});
	}
}

function chamaJSON(termo){
	var obj = new json();
	termo = 'r';
	obj.resgatarValores(termo);
}



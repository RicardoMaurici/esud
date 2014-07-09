$(document).ready(function(){

	
	$('#menu-toc li').hover(

		function(){
			$(this).children('div').animate({marginLeft: "+=147px"}, 150);

		},
		function(){
			$(this).children('div').animate({marginLeft: "-=147px"}, 150);
		}
	);

	$('.btn_1').click(
		function(){

			
			$('.opcao_2').hide();
			$('.opcao_1').show();
			$('.btn_1 p').css("background-color","#dd8525");
			$('.btn_2 p').css("background-color","#eea85b");

		}
	);

	$('.btn_2').click(
		function(){

			$('.opcao_1').hide();
			$('.opcao_2').show();
			$('.btn_2 p').css("background-color","#dd8525");
			$('.btn_1 p').css("background-color","#eea85b");

		}
	);

});
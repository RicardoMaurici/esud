$(document).ready(function(){





	function telaMaior (local) {
		$(local).hover(

			function(){
				$(this).children('div').animate({marginLeft: "-23px"}, 150);

			},
			function(){
				$(this).children('div').animate({marginLeft: "-222px"}, 150);
			}
		);

		$(window).resize(function(){ 


			if ($(window).height() <= 536){ 

				// function(){
				//$('#menu-toc li').children('div').animate({marginLeft: "-37px"}, 150);
				// },

				// function(){
				$('#menu-toc li').children('div').animate({marginLeft: "-184px"}, 150);
				// }

				telaMenor('#menu-toc li');// execultar telaMenor
			}
		});
	}	

	function telaMenor (local) {
		
		$(local).hover(

					function(){
						$(this).children('div').animate({marginLeft: "-37px"}, 150);

					},
					function(){
						$(this).children('div').animate({marginLeft: "-184px"}, 150);
					}
				);

		$(window).resize(function(){ 

			if ($(window).height() >= 537){

				//$('#menu-toc li')function(){
			//		$('#menu-toc li').children('div').animate({marginLeft: "-23px"}, 150);

			//	},
			//	$('#menu-toc li').function(){
					$('#menu-toc li').children('div').animate({marginLeft: "-222px"}, 150);
			//	}	

				telaMaior('#menu-toc li');// execultar telaMaior
			}
		});
	}



	if ($(window).height() >= 537){ //telaMaior

		telaMaior('#menu-toc li');

		/*$('#menu-toc li').hover(

			function(){
				$(this).children('div').animate({marginLeft: "-23px"}, 150);

			},
			function(){
				$(this).children('div').animate({marginLeft: "-222px"}, 150);
			}
		);

		$(window).resize(function(){ 

			if ($(window).height() <= 536){ //telaMenor

				$('#menu-toc li').hover(

					function(){
						$(this).children('div').animate({marginLeft: "-37px"}, 150);

					},
					function(){
						$(this).children('div').animate({marginLeft: "-184px"}, 150);
					}
				);
			}
		}); */
	}


	if ($(window).height() <= 536){ //telaMenor

		telaMenor('#menu-toc li');

	/*	$('#menu-toc li').hover(

			function(){
				$(this).children('div').animate({marginLeft: "-37px"}, 150);

			},
			function(){
				$(this).children('div').animate({marginLeft: "-184px"}, 150);
			}
		);

		$(window).resize(function(){ 

			if ($(window).height() >= 537){ //telaMaiorp

				$('#menu-toc li').hover(

					function(){
						$(this).children('div').animate({marginLeft: "-23px"}, 150);

					},
					function(){
						$(this).children('div').animate({marginLeft: "-222px"}, 150);
					}
				);
			}
		}); */
	}
	


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
$('document').ready(function() {
	$("#enter_btn").click(function() {    
		$("#first_screen").fadeOut('fast');
	    $("#intro").fadeIn('slow');	  
    });

	$("#btnfield1").click(function() {    
		$("#intro").fadeOut('fast');
	    $("#race_now").fadeIn('slow');	  
    });
	
	$("#race_now_btn").click(function() {    
		$("#race_now").fadeOut('fast');
	    $("#practice").fadeIn('slow');	  
    });
	

	$("#btn_race_1").click(function() {    
		$("#practice").animate({
			left: '100',
			height: 'toggle'
		});
		
		$("#race_1").animate({
			opacity: 1,
			left: '100',
			height: 'toggle'
		});
		
		$(".footer").slideDown("slow");
		$("#lets_race").click(function() {    
			//$(".footer").delay(1000).hide();
			$("#footer_logo").delay(600).fadeIn('slow');		
			$(".share").delay(600).fadeIn('slow');
			$(".header p").delay(600).fadeIn('slow');
			$(".countdown_next_race").delay(600).fadeIn('slow');
			$(".map_clock").delay(600).fadeIn('slow');
			$(".lets_race").delay(300).fadeOut('slow');
			$(".countdown").delay(3000).fadeOut('slow');
		});
		
    });
	
	$(".quit_game_2").click(function() {
		$("#race_1").fadeOut('fast');		
		$("#score").fadeIn('slow');
	});
	
	$("#instructions_btn").click(function() {
		$(".pop_instructions").fadeIn('slow');		
	});
	
	$("#pop_instructions_ok_btn").click(function() {
		$(".pop_instructions").fadeOut('slow');		
	});
	
	$("#practice_btn").click(function() {
		$(".practice_1").fadeOut('slow');
		$(".practice_2").delay(400) .fadeIn('slow');			
	});
	
	
	/*$(".quit_game_2").click(function() {
		$("#race_1").animate({
			left: '100',
			height: 'toggle'
		});
		
		$("#score").animate({
			opacity: 1,
			left: '100',
			height: 'toggle'
		});
	});*/
	
	
	
	$(".races_1").mouseover(function() {    
		$(".span_races_1").delay(300).fadeIn(100);  
    });
	$(".races_1").mouseleave(function() {    
		$(".span_races_1").fadeOut(30);  
    });
	
	$(".races_2").mouseover(function() {    
		$(".span_races_2").delay(300).fadeIn(100);  
    });
	$(".races_2").mouseleave(function() {    
		$(".span_races_2").fadeOut(30);  
    });
	
	$(".races_3").mouseover(function() {    
		$(".span_races_3").delay(300).fadeIn(100);  
    });
	$(".races_3").mouseleave(function() {    
		$(".span_races_3").fadeOut(30);  
    });
	
	$(".races_4").mouseover(function() {    
		$(".span_races_4").delay(300).fadeIn(100);  
    });
	$(".races_4").mouseleave(function() {    
		$(".span_races_4").fadeOut(30);  
    });
	
	$("#close").click(function() {    
		$('.pause').hide();  
    });
	
	$("#close").click(function() {    
		$('.pause').hide();  
    });
	
	/*Animaciones*/
	$(function(){
		$('#obo_slider').oneByOne({
			className: 'oneByOne1',	             
			easeType: 'fadeInUp',
			slideShow: true,
			slideShowDelay: 5000
		}); 
			

		$('#obo_slider1').oneByOne({
			className: 'oneByOne1',	             
			easeType: 'fadeInUp',
			slideShow: true,
			slideShowDelay: 7000
		});  

		
		 $('#obo_slider2').oneByOne({
			className: 'oneByOne1',	             
			easeType: 'fadeInUp',
			slideShow: true,
			slideShowDelay: 7000
		});  
		
		$('#obo_slider3').oneByOne({
			className: 'oneByOne1',	             
			easeType: 'fadeInUp',
			slideShow: true,
			slideShowDelay: 7000
		});

		$('#obo_slider4').oneByOne({
			className: 'oneByOne1',	             
			easeType: 'fadeInUp',
			slideShow: true,
			slideShowDelay: 7000
		});


		$('#obo_slider5').oneByOne({
			className: 'oneByOne1',	             
			easeType: 'fadeInUp',
			slideShow: true,
			slideShowDelay: 7000
		});
	})
	
});

$(document).keydown(function(tecla){
    if (tecla.keyCode == 27)  
		$('.pause').show();
	if (tecla.keyCode == 80) 
		$('.pause').hide();	
});


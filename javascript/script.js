		$('.js-go-night').click(function(){
			$('body').addClass('night');
			$('div').addClass('night');
			$('li').addClass('night');
			$(".chapter-thumbail").hover(function(e){
			e.preventDefault();
			$(this).attr("class", "list-group-item chapter-thumbail night active");
			}, 
			function(e){
				e.preventDefault();
				$(this).attr("class", "list-group-item chapter-thumbail night");
			});
			//works very simple way hove(mouseenter function, mouseleave function), keep this in mind always!

			//functionality of hover+click effect
			//Remeber the .each() method in here
			$(".chapter-thumbail").on('click', function(e){
	  			$(".chapter-thumbail").each(function(){
	  				//$(this).attr("class", "list-group-item chapter-thumbail");
	  				$(".chapter-thumbail").hover(function(){
						$(this).attr("class", "list-group-item chapter-thumbail night active");
						}, 
						function(){
						$(this).attr("class", "list-group-item chapter-thumbail night");
						});
	  			});
	  		$(this).unbind('mouseenter mouseleave'); //unbinding is very important here
	       	$(this).parent().find('li').removeClass('active');
	        $(this).addClass('active');
	  		});
		});
		$('.js-go-day').click(function(){
			$('body').removeClass('night');
			$('div').removeClass('night');
			$('li').removeClass('night');
			$(".chapter-thumbail").hover(function(e){
			e.preventDefault();
			$(this).attr("class", "list-group-item chapter-thumbail active");
			}, 
			function(e){
				e.preventDefault();
				$(this).attr("class", "list-group-item chapter-thumbail");
			});
			//works very simple way hove(mouseenter function, mouseleave function), keep this in mind always!

			//functionality of hover+click effect
			//Remeber the .each() method in here
			$(".chapter-thumbail").on('click', function(e){
	  			$(".chapter-thumbail").each(function(){
	  				//$(this).attr("class", "list-group-item chapter-thumbail");
	  				$(".chapter-thumbail").hover(function(){
						$(this).attr("class", "list-group-item chapter-thumbail active");
						}, 
						function(){
						$(this).attr("class", "list-group-item chapter-thumbail");
						});
	  			});
	  		$(this).unbind('mouseenter mouseleave'); //unbinding is very important here
	        $(this).parent().find('li').removeClass('active');
	        $(this).addClass('active');
	  		});
		});

		$('.js-go-day').click();
		var counter = 0;

		//hover effect functionality
		



		$(".chapter-thumbail").click(function(){
			$("#mainViewer").html($(this).html());
			var id = $(this).attr("id");
			counter= parseInt(id.slice(-1)); //gives the last characted as an output
		});


		$("#chapter"+counter).click();


		$("#mainViewer").click(function(event){
			if(event.offsetX < $(this).width()*0.3){
				counter=counter-1;
			}
			else{
				counter=counter+1;
			}
			if(counter < 0){
				counter = 0;
			}
			if(counter >= $(".chapter-thumbail").length){
				counter = $(".chapter-thumbail").length-1;
			}
			$("#chapter"+counter).click();
		});

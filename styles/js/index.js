$('document').ready(function() {

//****************************   Navigation   ****************************//

	//Navigation-Toggle
	$('.b-main-nav').click(function(){
		$('.b-main-nav-i').toggleClass('active');
		var item = $('.b-main-nav-i');
		var window_height = $('body').height();
		
		if ($(item).height() > window_height - 52){
			$(item).height(window_height - 77);
		};
	});

	//Navigation-Close
	$('.b-main-nav-i .close').click(function(){
		$('.b-main-nav-i').removeClass('active');
	});

	//Search-toggle
	$('.b-sub-nav .search a').click(function(event){
		event.preventDefault();
		$('.b-sub-nav .search').toggleClass('active');
	});

	//Bag-toggle
	$('.b-sub-nav .bag-link a').click(function(event){
		event.preventDefault();
		$('.bag-link-i').toggleClass('active');

		//Pop-up-height
		var item = $('.bag-link-i');
		var window_height = $('body').height();
		if ($(item).height() > window_height - 52){
			$(item).height(window_height - 77);
		};
	});

	//Navigation-Inner-Links-Toggle
	function inner_nav(toggle_item, inner_list){

		$(toggle_item).click(function(event){
			event.preventDefault();
			if($(toggle_item).hasClass('open')){
				if($(this).hasClass('open')){
					$(this).removeClass('open').next().removeClass('active');
				} else {
					$(toggle_item).removeClass('open');
					$(inner_list).removeClass('active');
					$(this).toggleClass('open').next().toggleClass('active');
				}
			}
			else{
				$(this).toggleClass('open').next().toggleClass('active');
			}
		});
	};

	inner_nav($('.b-shop__filter-2 dd div a'), $('.b-shop__filter-2 .inner-list'));


//****************************   Main-page   ****************************//

	//Full-Screen
	if ($('#fullpage').length){
		$('#fullpage').fullpage({});
	};

	$('.main .big-slide').height($('body').height());
	
	//Full-Screen-Arrow
	$(document).on('click', '.cnt-btn-down', function(){
  		$.fn.fullpage.moveSectionDown();
	});

	
//****************************   Shop-page   ****************************//

	//Mobile-Subnav-1-Toggle
	$('.b-shop__nav .btn-toggle').click(function(event){
		event.preventDefault();
		$('.b-shop__nav-i').toggleClass('active');

		//Pop-up-height
		var item = $('.b-shop__nav-i');
		var window_height = $('body').height();
		
		if ($(item).height() > window_height - 52){
			$(item).height(window_height - 77);
		};
	});

	//Mobile-Subnav-1-Close
	$('.b-shop__nav .close').click(function(){
		$('.b-shop__nav-i').removeClass('active');
	});

	//Mobile-Subnav-1-Inner-Links-Toggle
	inner_nav($('.b-shop__nav-i ul > li > a'), $('.b-shop__nav-i .inner-list'));

	//Mobile-Subnav-2-Toggle
	$('.b-shop-col-1 .btn-toggle').click(function(event){
		event.preventDefault();
		$('.b-shop-col-1-i').toggleClass('active');

		//Pop-up-height
		var item = $('.b-shop-col-1-i');
		var window_height = $('body').height();
		
		if ($(item).height() > window_height - 52){
			$(item).height(window_height - 77);
		};
	});

	//Mobile-Subnav-2-Close
	$('.b-shop-col-1-i .close').click(function(){
		$('.b-shop-col-1-i').removeClass('active');
	});

	//Mobile-Subnav-2-Inner-Links-Toggle
	inner_nav($('.b-shop__filter-2 dd div > a'), $('.b-shop__filter-2 .inner-list'));





	

});
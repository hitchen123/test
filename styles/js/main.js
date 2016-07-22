var Modules = (function(self){ return self; }(Modules || {}));


Modules.CouponPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
				_data.$popupElement.addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');
					_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent();

				return self;
			}
		}
}(Modules.CouponPopup || {}, jQuery));

Modules.СityPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			cityElementClass: '',
			topLineClass: '',
			topLineCloseClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: '',
			$cityElement: '',
			$topLineClose: '',
			$topLine: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );
			_data.$cityElement = $( _settings.cityElementClass );
			_data.$topLine = $( _settings.topLineClass );
			_data.$topLineClose = $( _settings.topLineCloseClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
				_data.$popupElement.addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 600);
				return false;
			});
			
			return self;
		}

		self.closePopup = function(){		
			_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
			_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

			setTimeout(function(){
				_data.$popupElement.removeClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
			}, 600);
		
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				self.closePopup();

				return false;
			});
			
			return self;
		}

		self.closeTopLine = function(){
				_data.$topLine.addClass('pt-page-heightOffDelay');
			return self;
		}

		self.closeTopLineEvent = function(){
			$(document).on('click', _settings.topLineCloseClass, function(){
				self.closeTopLine();

				return false;
			});
			
			return self;
		}

		self.chooseCityEvent = function(){
			$(document).on('click', _settings.popupElementClass + ' ul a', function(){
				_data.$cityElement.text($(this).text());

				self.closePopup().closeTopLine();
				return false;
			});
			
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent().chooseCityEvent().closeTopLineEvent();

				return self;
			}
		}
}(Modules.СityPopup || {}, jQuery));


Modules.SearchPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			clearElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$clearElement: '',
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$clearElement = $( _settings.clearElementClass );

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.trigger == false){
					_data.$popupElement.removeClass('pt-page-heightOff');
					_data.$popupElement.addClass('pt-page-heightOn');
					_data.$popupElement.find('input').focus();
					_data.trigger = true;
				} else {
					_data.$popupElement.addClass('pt-page-heightOff');
					_data.$popupElement.removeClass('pt-page-heightOn');
					_data.trigger = false;
				}
				return false;
			});
		
			return self;
		}
		
		self.clearSearchEvent = function(){
			$(document).on('click', _settings.clearElementClass, function(){
				_data.$popupElement.find('input').val('').focus();
				return false;
			});		
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent().clearSearchEvent();

				return self;
			}
		}
}(Modules.SearchPopup || {}, jQuery));


Modules.BasketPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			countPlusElementClass: '',
			countMinusElementClass: '',
			deleteItemElementClass: '',
			itemElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			countPlusElement: '',
			countMinusElement: '',
			deleteItemElement: '',
			itemElement: '',
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$countPlusElement = $( _settings.countPlusElementClass );
			_data.$countMinusElement = $( _settings.countMinusElementClass );
			_data.$deleteItemElement = $( _settings.deleteItemElementClass );
			_data.$itemElement = $( _settings.itemElementClass );

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.trigger == false){
					_data.$popupElement.removeClass('pt-page-heightOff');
					_data.$popupElement.addClass('pt-page-heightOn');
					_data.$popupElement.find('input').focus();
					_data.trigger = true;
				} else {
					_data.$popupElement.addClass('pt-page-heightOff');
					_data.$popupElement.removeClass('pt-page-heightOn');
					_data.trigger = false;
				}
				return false;
			});
		
			return self;
		}

		self.countPlusItemEvent = function(){
			$(document).on('click', _settings.countPlusElementClass, function(){
				$(this).siblings('input').val(function(i, oldval) {
				    return ++oldval;
				});
				return false;
			});
		
			return self;
		}

		self.countMinusItemEvent = function(){
			$(document).on('click', _settings.countMinusElementClass, function(){
				if($(this).siblings('input').val() > 1){
					$(this).siblings('input').val( function(i, oldval) {
					    return --oldval;
					});
				}
				return false;
			});
		
			return self;
		}

		self.deleteItemEvent = function(){
			$(document).on('click', _settings.deleteItemElementClass, function(){
				var obj = $(this);
				obj.closest(_settings.itemElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

				setTimeout(function(){
					obj.closest(_settings.itemElementClass).remove();
				}, 600);
				return false;
			});
		
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent().countPlusItemEvent().countMinusItemEvent().deleteItemEvent();

				return self;
			}
		}
}(Modules.BasketPopup || {}, jQuery));

Modules.CarpetType = (function(self, $){
	
	var _settings = {
			blockElementClass: '',
			hoverElementClass: '',
			imageElementClass: ''
		},
		_data = {
			$blockElement: '',
			$hoverElement: '',
			$imageElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$blockElement = $( _settings.blockElementClass );
			_data.$hoverElement = $( _settings.hoverElementClass );
			_data.$imageElement = $( _settings.imageElementClass );

			_data.$hoverElement.eq(0).children().find(_settings.imageElementClass).addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');
			_data.$hoverElement.eq(0).addClass('active');

			return self;
		}
		
		self.hoverEvent = function(){
			$(document).on('mouseover', _settings.hoverElementClass, function(){
					var old = _data.$blockElement.find('.active');
					_data.$hoverElement.removeClass('active');
					old.children().find(_settings.imageElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight').addClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');

					$(this).find(_settings.imageElementClass).addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');
					$(this).addClass('active');
				return false;
			});
		
			return self;
		}

		self.hoverOutEvent = function(){
			$(document).on('mouseleave', _settings.blockElementClass, function(){
				var old = _data.$blockElement.find('.active');
				_data.$hoverElement.removeClass('active');
				old.find(_settings.imageElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight').addClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');

				_data.$hoverElement.eq(0).children().find(_settings.imageElementClass).addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');
				_data.$hoverElement.eq(0).addClass('active');
				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().hoverEvent().hoverOutEvent();

				return self;
			}
		}
}(Modules.CarpetType || {}, jQuery));

(function($){
	$(function(){		
		var couponPopup = new Modules.CouponPopup.init({
			popupOverlayClass: '.b-overlay',
			popupElementClass: '.b-coupon-pop-up',
			openClickElementClass: '.b-middle-store__img a',
			closeClickElementClass: '.b-coupon-pop-up .close',
			ajaxUrl: ''
		});

		var cityPopup = new Modules.СityPopup.init({
			popupOverlayClass: '.b-overlay',
			popupElementClass: '.b-city-pop-up',
			openClickElementClass: '.b-top__reg-i a, .b-top__no',
			closeClickElementClass: '.b-city-pop-up .close',
			cityElementClass: '.b-top__reg-i a',
			topLineClass: '.b-top__yellow-line',
			topLineCloseClass: '.b-top__yes',
			ajaxUrl: ''
		});

		var searchPopup = new Modules.SearchPopup.init({
			popupElementClass: '.b-main-nav__search',
			openClickElementClass: '.search-lnk',
			clearElementClass: '.b-main-nav__search .del',
			ajaxUrl: ''
		});

		var basketPopup = new Modules.BasketPopup.init({
			popupElementClass: '.b-main-nav__bag',
			openClickElementClass: '.bag-lnk',
			countPlusElementClass: '.b-main-nav__bag .count-plus',
			countMinusElementClass: '.b-main-nav__bag .count-minus',
			deleteItemElementClass: '.b-main-nav__bag .del',
			itemElementClass: '.b-main-nav__bag-item',
			ajaxUrl: ''
		});

		var carpetType = new Modules.CarpetType.init({
			blockElementClass: '.b-middle-nav__list-1',
			hoverElementClass: '.b-middle-nav__list-1 dd',
			imageElementClass: '.b-middle-nav__list-i'
		});
	});
})(jQuery);
/**
 * UX Rocket
 * jQuery based popup
 * @author Bilal Cinarli
 */

;(function($){
	var ux, // local shorthand
		index = 1,

		defaults = {
			resizable : 'no',
			scrollbars : 'yes',
			width : 1100,
			height : 700,
			top : 0,
			left : 0
		};

	// constructor method
	var Popup = function(el, options){
		var $el = $(el),
            opts = $.extend({}, defaults, options, $el.data()),

		// cached variables
			url = $el.attr('href'),
			windowName = 'uxrocketApp_' + index,
			params;

		sizeToDims(opts);

		if(typeof opts.window !== 'undefined' && opts.window !== '')
		{
			windowName = opts.window;

			delete opts.window;
		}

		params = $.param(opts).split('&').join(', ');

		$el.on('click', function(e){
			e.preventDefault();

			window.open(url, windowName, params);
		});

		index++;
	};

	var sizeToDims = function(opts){
		var str, slice;

		if(typeof opts.size === 'string' && opts.size !== ''){
			str = opts.size;
			slice = str.split(",");
			opts.width = $.trim(slice[0]);
			opts.height = $.trim(slice[1]);
			delete opts.size;
		}

		return opts;
	};

	// jquery bindings
	ux = $.fn.popup = $.uxpopup = function(options){
		return this.each(function(){
			var $el = $(this),
				popup;

			if($el.hasClass('uxitd-popup-ready')){
				return;
			}

			$el.addClass('uxitd-popup-ready');

			popup = new Popup(this, options);
		});
	};

	// Version
	ux.version = "0.2.0";

	// settings
	ux.settings = defaults;

})(jQuery);
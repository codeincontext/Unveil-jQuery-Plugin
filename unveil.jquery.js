(function($){
    $.unveil = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el  = el;

        // Add a reverse reference to the DOM object
        base.$el.data("unveil", base);

        base.init = function(){

            base.options = $.extend({},$.unveil.defaultOptions, options);
			
			// give target element space in the DOM
			base.$el.css({'position':'absolute !important','visibility':'hidden !important','display':'block !important'});
			
            var width    = base.$el.outerWidth();
            var height   = base.$el.outerHeight();
			var position = base.$el.position();
			
			// unset inline CSS to put target element back
			base.$el.css({'position':'','visibility':'','display':''});
			
			// For now, let's work on positioning a red div
			var $canvas = $('<div style="background-color: red;" width="'+width+'" height="'+height+'"></div>');
			
			$canvas.css({
		        position: "absolute",
		        top:      position.top + "px",
		        left:     position.left + "px",
				width:    width,
				height:   height
		    });
		
			// If target is body, it doesn't have a parent in the dom. Append to it.
			var elementToAppendTo = (base.el == document.body) ? base.$el : base.$el.parent();

			$canvas.appendTo(elementToAppendTo);
			base.$el.show();
			
			base.startAnimation($canvas);
        };

        base.startAnimation = function($canvas){
			var duration = 1000;
			
			var centerX = $canvas.width() / 2;
			var centerY = $canvas.height() / 2;
			
			// Calculate distance from center to corner of target
			var radius = Math.sqrt(Math.pow(centerX,2) + Math.pow(centerY,2));
			
			setTimeout(function(){
				$canvas.remove();
			}, duration);
        };

        // Run initializer
        base.init();
    };

    $.unveil.defaultOptions = {
        
    };

    $.fn.unveil = function(radius, options){
        return this.each(function(){
            (new $.unveil(this, options));
        });
    };

})(jQuery);
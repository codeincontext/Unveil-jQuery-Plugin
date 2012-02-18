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
			
            var width    = base.$el.outerWidth(),
                height   = base.$el.outerHeight(),
			    position = base.$el.position();
			
			// unset inline CSS to put target element back
			base.$el.css({'position':'','visibility':'','display':''});
			
			// For now, let's work on positioning a red div
			var $canvas = $('<canvas width="'+width+'" height="'+height+'"></canvas>');
			
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
			base.startAnimation($canvas);
        };

        base.startAnimation = function($canvas){
			var ctx = $canvas[0].getContext("2d"),
			    centerX = $canvas.width() / 2,
			    centerY = $canvas.height() / 2,
				duration = 500,
				startAngle = Math.PI * -0.5,
				currentPosition = 0;
				fps = 60;
			
			// Calculate distance from center to corner of target
			var radius = Math.sqrt(Math.pow(centerX,2) + Math.pow(centerY,2));
			
			ctx.fillStyle = "rgb(255,255,255)";
			
			var interval = setInterval(function(){
				var endAngle = Math.PI * (currentPosition -0.5);
				
				ctx.clearRect(0, 0, $canvas.width(), $canvas.height());
				ctx.beginPath();
				ctx.moveTo(centerX, centerY);
				ctx.arc(centerX, centerY, radius, startAngle, endAngle, true);
				ctx.fill();

				if (currentPosition == 0) base.$el.show();
				currentPosition += 0.02;
				if (currentPosition >= 2){
					ctx.clearRect(0, 0, $canvas.width(), $canvas.height());
					$canvas.remove();
					clearInterval(interval);
				}
			}, duration/fps);
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
(function($){
	$.fn.fastClick = function(handler, supportMultipleHandler) {
		return this.each(function () {
			FastButton($(this), handler, supportMultipleHandler);
		});
	};
	var hasTouch = 'ontouchstart' in window;
	var start_e = hasTouch ? 'touchstart': 'mousedown';
	var move_e = hasTouch ? 'touchmove' : 'mousemove';
	var end_e = hasTouch ? 'touchend' : 'mouseup';
	var cancel_e = 'touchcancel';
	var body = $('body');

	var FastButton = function(element, handler, supportMultipleHandler) {
		var startX, startY;

		var reset = function() {
			element.off(end_e, onClick);
			setTimeout(function() {
				element.removeClass('active');
			}, 200);
			body.off(move_e, onTouchMove).off(cancel_e);
		};

		var onClick = function(event) {
			event.preventDefault();
			event.stopPropagation();
			reset();
			handler.call(this, event);
		};

		var onTouchMove = function(event) {
			if (hasTouch) {
				var touches = event.originalEvent;
				if (!touches) {
					touches = event.touches;
				}
				if (Math.abs(touches[0].clientX - startX) > 2 ||
					Math.abs(touches[0].clientY - startY) > 2) {
					reset();
				}
			} else {
				reset();
			}
		};

		var onTouchCancel = function(event) {
			reset();
		};

		var onTouchStart = function(event) {
			event.stopPropagation();
			if(!supportMultipleHandler) {
				element.off(end_e);
			}
			element.on(end_e, onClick);
			element.addClass('active');

			body.on(move_e, onTouchMove);
			body.on(cancel_e, onTouchCancel);

			if (hasTouch) {
				var touches = event.originalEvent;
				if (!touches)
					touches = event.touches;
				startX = touches[0].clientX;
				startY = touches[0].clientY;
			}
		}
		element.on(start_e, onTouchStart);
	};
})(Zepto);


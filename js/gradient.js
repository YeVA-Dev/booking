!function($) {
	function progr(percent, col1, col2) {
		r1 = (col1 & 0xff0000) >>> 16;
		g1 = (col1 & 0xff00) >>> 8;
		b1 = col1 & 0xff;
		r2 = (col2 & 0xff0000) >>> 16;
		g2 = (col2 & 0xff00) >>> 8;
		b2 = col2 & 0xff;
		percent2 = 1 - percent;

		return {
		    "r" : r1 * percent + r2 * percent2,
		    "g" : g1 * percent + g2 * percent2,
		    "b" : b1 * percent + b2 * percent2
		};

	}

	var img = new Image();
	img.onload = function() {

		var color1 = 0x2d8ab7, color2 = 0x006699;
		var canvas = document.createElement('canvas');
		canvas.width = $('.central').width();
		canvas.height = $('.central').height() * 1.2;

		var ctx = canvas.getContext('2d');

		var ptrn = ctx.createPattern(img, "repeat");

		ctx.fillStyle = ptrn;
		
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		var r, g, b;

		for ( var row = 0; row < canvas.height; row++) {

			var _row = row * canvas.width * 4;

			var color = progr(row / (canvas.height - 1), color1, color2);

			for (var col = 0; col < canvas.width; col++) {
				var _pos = _row + col * 4;

				r = pixels.data[_pos];
				g = pixels.data[_pos + 1];
				b = pixels.data[_pos + 2];
				pixels.data[_pos] = r * color.r / 255;
				pixels.data[_pos + 1] = g * color.g / 255;
				pixels.data[_pos + 2] = b * color.b / 255;

			}
		}

		ctx.putImageData(imageData, 0, 0);
		$('.central').css("background", 'none').prepend(canvas);

	}
	img.src = "css/i/irongrip.png";

}(window.jQuery);

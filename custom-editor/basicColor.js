// Custom amount Sepia filter between 0 and 1
function sepiaAmt(amt) {
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var i = (x + y * width) * 4;
			var r = pixels[i];
			var g = pixels[i+1];
			var b = pixels[i+2];
			pixels[i] = (r * (1 - (0.607 * amt))) + (g * 0.769 * amt) + (b * 0.189 * amt);
    	pixels[i + 1] = (r * 0.349 * amt) + (g * (1 - (0.314 * amt))) + (b * 0.168 * amt);
			pixels[i + 2] = (r * 0.272 * amt) + (g * 0.534 * amt) + (b * (1 - (0.869 * amt)));
		}
	}
	updatePixels();
}

// Adjust brightness in range of -1 to 1 
function brighten(amt) {
	amt = (amt > 1) ? 1 : amt;
	amt = (amt < -1) ? -1 : amt;
	amt = ~~(255 * amt);
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var i = (x + y * width) * 4;
			pixels[i] += amt;
			pixels[i+1] += amt;
			pixels[i+2] += amt;
		}
	}
	updatePixels();
}

// Saturation adjustment between - 1 and 1
function saturate(amt) {
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var i = (x + y * width) * 4;
			var r = pixels[i], g = pixels[i+1], b = pixels[i+2];
			var gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
			pixels[i] = -gray * amt + pixels[i] * (1 + amt);
			pixels[i+1] = -gray * amt + pixels[i + 1] * (1 + amt);
			pixels[i+2] = -gray * amt + pixels[i + 2] * (1 + amt);
		}
	}
	updatePixels();
}

// Adjust contrast between -1 and 1
function contrast(amt) {
	amt *= 255;
	var factor = (259 * (amt + 255)) / (255 * (259 - amt));
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var i = (x + y * width) * 4;
			pixels[i] = factor * (pixels[i] - 128) + 128;
			pixels[i+1] = factor * (pixels[i + 1] - 128) + 128;
			pixels[i+2] = factor * (pixels[i + 2] - 128) + 128;
		}
	}
	updatePixels();
}

// Adjust rgb by specific amount [rAmt, gAmt, bAmt] - range from 0 to 1
function RGBFilter(rgb) {
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var i = (x + y * width) * 4;
			pixels[i] *= rgb[0];
			pixels[i+1] *= rgb[1];
			pixels[i+2] *= rgb[2];
		}
	}
	updatePixels();
}

// Sepia - https://software.intel.com/sites/default/files/article/346220/sepiafilter-intelcilkplus.pdf
// Saturation - https://stackoverflow.com/questions/13806483/increase-or-decrease-color-saturation/34183839#34183839
// Contrast - http://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/
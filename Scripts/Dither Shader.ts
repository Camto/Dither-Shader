function fill_selection(pixels:ImageData, data_width:number, x:number, y:number, pixel_size:number, alpha:number) {
	for(let span_y = 0; span_y < pixel_size; span_y++) {
		for(let span_x = 0; span_x < pixel_size; span_x++) {
			pixels.data[(x + span_x + (y + span_y) * data_width) * 4 + 3] = alpha;
		}
	}
}

function dither_shader(pencil:CanvasRenderingContext2D, selection:number[], pixel_size:number):void {
	
	var pixels:ImageData = pencil.getImageData(selection[0], selection[1], selection[2], selection[3]);
	
	for(let y = 0; y < pixels.height; y += pixel_size) {
		for(let x = 0; x < pixels.width; x += pixel_size) {
			switch(pixels.data[(x + y * pixels.width) * 4 + 3]) {
				
				case 0:
				case 1:
					fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
					break;
				
				case 63:
				case 64:
				case 65:
					if(!((x / pixel_size) % 2) && !((y / pixel_size) % 2)) {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
					} else {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
					}
					break;
				
				case 111:
				case 112:
				case 113:
					if(!((x + y) / pixel_size % 2)) {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
					} else {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
					}
					break;
				
				case 147:
				case 148:
				case 149:
					if(!(!((x / pixel_size) % 2) && ((y / pixel_size) % 2))) {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
					} else {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
					}
					break;
				
				default:
					if(pixels.data[(x + y * pixels.width) * 4 + 3] > 148) {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
					} else {
						fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
					}
					break;
				
			}
		}
	}
	
	pencil.putImageData(pixels, selection[0], selection[1]);
	
}
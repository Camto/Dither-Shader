// var approx_shade = (n:number):number => Math.round(n/64); // Round to the nearest 64th.
function fill_selection(pixels, data_width, x, y, pixel_size, alpha) {
    for (let span_y = 0; span_y < pixel_size; span_y++) {
        for (let span_x = 0; span_x < pixel_size; span_x++) {
            pixels.data[(x + span_x + (y + span_y) * data_width) * 4 + 3] = alpha;
        }
    }
}
function dither_shader(pencil, selection, pixel_size) {
    var pixels = pencil.getImageData(selection[0], selection[1], selection[2], selection[3]);
    for (let y = 0; y < pixels.height; y += pixel_size) {
        for (let x = 0; x < pixels.width; x += pixel_size) {
            switch (pixels.data[(x + y * pixels.width) * 4 + 3]) {
                case 0:
                    fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
                    break;
                case 64:
                    if (!((x / pixel_size) % 2) && !((y / pixel_size) % 2)) {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
                    }
                    else {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
                    }
                    break;
                case 112:
                    if (!((x + y) / pixel_size % 2)) {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
                    }
                    else {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
                    }
                    break;
                case 148:
                    if (!(!((x / pixel_size) % 2) && ((y / pixel_size) % 2))) {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
                    }
                    else {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
                    }
                    break;
                default:
                    if (pixels.data[(x + y * pixels.width) * 4 + 3] > 148) {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 255);
                    }
                    else {
                        fill_selection(pixels, pixels.width, x, y, pixel_size, 0);
                    }
                    break;
            }
        }
    }
    pencil.putImageData(pixels, selection[0], selection[1]);
}

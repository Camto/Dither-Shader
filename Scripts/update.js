///<reference path="init.ts" />
///<reference path="Dither Shader.ts" />
function update() {
    pencil.clearRect(0, 0, 400, 400);
    pencil.globalAlpha = 0.25;
    pencil.fillRect(100, 100, 200, 200);
    pencil.drawImage(leaf, 16, 16, 200, 200);
    pencil.drawImage(leaf, 200, 200, 100, 200);
    pencil.drawImage(leaf, 0, 0);
    pencil.fillRect(200, 200, 75, 75);
    dither_shader(pencil, [0, 0, 400, 400], 2);
}

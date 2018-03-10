function love.load()
	
	canvas = love.graphics.newCanvas(400, 400)
	
	dither_code, _ = love.filesystem.read("Dither Shader.shadow")
	dither = love.graphics.newShader(dither_code)
	
end
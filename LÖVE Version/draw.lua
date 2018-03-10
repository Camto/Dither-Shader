function love.draw()
	
	love.graphics.setCanvas(canvas)
	love.graphics.setShader()
	
	love.graphics.setColor(255, 255, 255) 
	love.graphics.rectangle("fill", 0, 0, 400, 400)
	
	love.graphics.setColor(0, 0, 0, 72)
	love.graphics.rectangle("fill", 100, 100, 200, 200);
	love.graphics.rectangle("fill", 16, 16, 200, 200);
	love.graphics.rectangle("fill", 150, 150, 100, 200);
	love.graphics.rectangle("fill", 0, 0, 100, 50);
	love.graphics.rectangle("fill", 175, 175, 75, 75);
	
	love.graphics.setCanvas()
	love.graphics.setShader(dither)
	love.graphics.draw(canvas)
	
end
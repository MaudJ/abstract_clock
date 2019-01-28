function setup() {
	createCanvas(800,600); 
}

function draw() {
	background(255);
	
	// circle
	stroke(220,220, 220);
	strokeWeight(4);
	fill(255);
	line(100,240,700,240);
	
	//hour
	fill(int(hour()*255/23));
	ellipse(100+int(hour()*600/23),240, 80, 80);
	
	//minute
	fill(int(minute()*255/59));
	ellipse(100+int(minute()*600/59),240, 80, 80);
	
	//second
	fill(int(second()*255/59));
	ellipse(100+int(second()*600/59),240, 80, 80);
}


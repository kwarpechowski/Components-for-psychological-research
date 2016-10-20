var draw = SVG('drawing');

var R = 80;

var gr = draw.group();

var numberPoints = 20;
var k = 360/numberPoints;

gr.move(200, 200);

var config = [
	[10, 'yellow'],
	[20, 'green'],
	[30, 'pink'],
	[40, 'blue'],
	[50, 'purple']
];

for(var i =1; i<=numberPoints; i++) {
	var odstep = 0;

	var group = gr.group().addClass('line');
	config.forEach(function(c, index) {
		var circle = group.ellipse(c[0], c[0]);
		circle.addClass('element_' + index);
		circle.fill(c[1]);
		circle.center(R, R);
		var y = Math.sin(k*i*Math.PI/180) * (R+odstep);
		var x = Math.cos(k*i*Math.PI/180) * (R+odstep);
		circle.dx(x);
		circle.dy(y);
		odstep += c[0] + 10;
	});
}


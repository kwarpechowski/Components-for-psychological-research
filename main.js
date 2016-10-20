var draw = SVG('drawing');

var R = 80;

var gr = draw.group();


var labels = [
	'Contentment',
	'Love',
	'Admiration',
	'Relief',
	'Comassion',
	'Sadness',
	'Guilt',
	'Regret',
	'Shame',
	'Disappointment',
	'Fear',
	'Disgust',
	'Contempt',
	'Hate',
	'Anger',
	'Interest',
	'Amusement',
	'Pride',
	'Joy',
	'Pleasure'
];

var numberPoints = labels.length;
var k = 360/numberPoints;

gr.move(300, 300);

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

	var text = group.plain(labels[i-1]);
	text.fill('#000');
	text.addClass('text');
	text.center(R, R);
	var y = Math.sin(k*i*Math.PI/180) * (R+odstep);
	var x = Math.cos(k*i*Math.PI/180) * (R+odstep);
	text.dx(x);
	text.dy(y);
}


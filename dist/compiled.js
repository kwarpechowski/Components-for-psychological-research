/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(1);
	var drawer_1 = __webpack_require__(2);
	window['GEW'] = function (userConfig) {
	    var config = new config_1.Config(userConfig);
	    var drawer = new drawer_1.Drawer(config);
	    drawer.run();
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Config = (function () {
	    function Config(config) {
	        var _this = this;
	        this.R = 80;
	        this.labels = [
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
	        Object.keys(config).forEach(function (key) {
	            _this[key] = config[key];
	        });
	        console.log(this);
	    }
	    return Config;
	}());
	exports.Config = Config;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var line_1 = __webpack_require__(3);
	var Drawer = (function () {
	    function Drawer(config) {
	        this.draw = SVG('drawing');
	        this.config = config;
	        this.mainElement = this.draw.group();
	    }
	    Drawer.prototype.getLines = function () {
	        var lines = [];
	        lines.push(new line_1.Line(10, 'yellow'));
	        lines.push(new line_1.Line(20, 'green'));
	        lines.push(new line_1.Line(30, 'pink'));
	        lines.push(new line_1.Line(40, 'blue'));
	        lines.push(new line_1.Line(50, 'gold'));
	        return lines;
	    };
	    Drawer.prototype.run = function () {
	        var _this = this;
	        var numberPoints = this.config.labels.length;
	        var k = 360 / numberPoints;
	        this.mainElement.move(300, 300);
	        var _loop_1 = function() {
	            odstep = 0;
	            var group = this_1.mainElement.group().addClass('line');
	            this_1.getLines().forEach(function (line, index) {
	                var size = line.getSize();
	                var circle = group.ellipse(size, size);
	                circle.addClass('element_' + index);
	                circle.fill(line.getColor());
	                circle.center(_this.config.R, _this.config.R);
	                var y = Math.sin(k * i * Math.PI / 180) * (_this.config.R + odstep);
	                var x = Math.cos(k * i * Math.PI / 180) * (_this.config.R + odstep);
	                circle.dx(x);
	                circle.dy(y);
	                odstep += size + 10;
	            });
	            text = group.plain(this_1.config.labels[i - 1]);
	            text.fill('#000');
	            text.addClass('text');
	            text.center(this_1.config.R, this_1.config.R);
	            y = Math.sin(k * i * Math.PI / 180) * (this_1.config.R + odstep);
	            x = Math.cos(k * i * Math.PI / 180) * (this_1.config.R + odstep);
	            text.dx(x);
	            text.dy(y);
	        };
	        var this_1 = this;
	        var odstep, text, y, x;
	        for (var i = 1; i <= numberPoints; i++) {
	            _loop_1();
	        }
	    };
	    return Drawer;
	}());
	exports.Drawer = Drawer;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var Line = (function () {
	    function Line(size, color) {
	        this.size = size;
	        this.color = color;
	    }
	    Line.prototype.getColor = function () {
	        return this.color;
	    };
	    Line.prototype.getSize = function () {
	        return this.size;
	    };
	    return Line;
	}());
	exports.Line = Line;
	;


/***/ }
/******/ ]);
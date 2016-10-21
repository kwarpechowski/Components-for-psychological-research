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
	var drawer_1 = __webpack_require__(3);
	window['GEW'] = function (userConfig) {
	    var config = new config_1.Config(userConfig);
	    var drawer = new drawer_1.Drawer(config);
	    drawer.run();
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var line_1 = __webpack_require__(2);
	var Config = (function () {
	    function Config(config) {
	        var _this = this;
	        this.R = 80;
	        this.labels = [
	            'Interest',
	            'Amusement',
	            'Pride',
	            'Joy',
	            'Pleasure',
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
	            'Anger'
	        ];
	        this.element = 'drawer';
	        Object.keys(config).forEach(function (key) {
	            _this[key] = config[key];
	        });
	    }
	    Config.prototype.getElementsCount = function () {
	        return this.labels.length;
	    };
	    Config.prototype.getLines = function () {
	        //TODO KW konfig
	        var lines = [];
	        lines.push(new line_1.Line(10, 'yellow'));
	        lines.push(new line_1.Line(20, 'red'));
	        lines.push(new line_1.Line(25, 'yellow'));
	        lines.push(new line_1.Line(30, 'red'));
	        lines.push(new line_1.Line(40, 'yellow'));
	        return lines;
	    };
	    return Config;
	}());
	exports.Config = Config;


/***/ },
/* 2 */
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var Drawer = (function () {
	    function Drawer(config) {
	        this.draw = SVG('drawing'); //z konfigu pobierac
	        this.config = config;
	        this.mainElement = this.draw.group();
	    }
	    Drawer.prototype.drawAxis = function () {
	        var lineHorizontal = this.mainElement.line(0, 0, 600, 0).stroke({ width: 1 });
	        lineHorizontal.center(this.config.R, this.config.R);
	        var lineVertical = this.mainElement.line(0, 0, 0, 600).stroke({ width: 1 });
	        lineVertical.center(this.config.R, this.config.R);
	    };
	    Drawer.prototype.run = function () {
	        var _this = this;
	        this.drawAxis();
	        this.mainElement.move(250, 250);
	        var cw = this.config.getElementsCount() / 4; //a co jak nie bedzie calkowita
	        var _loop_1 = function() {
	            //let groupInstance = new Group(this.mainElement);
	            var position = (90 / cw) * (i - cw - 0.5) * Math.PI / 180;
	            var oy = Math.sin(position);
	            var ox = Math.cos(position);
	            var odstep = 0;
	            var group = this_1.mainElement.group().addClass('line');
	            this_1.config.getLines().forEach(function (line, index) {
	                var size = line.getSize();
	                var circle = group.ellipse(size, size);
	                circle.addClass('element_' + index);
	                circle.fill(line.getColor());
	                circle.center(_this.config.R, _this.config.R);
	                circle.dx(ox * (_this.config.R + odstep));
	                circle.dy(oy * (_this.config.R + odstep));
	                circle.click(function () {
	                    console.log('clicked', i, index);
	                });
	                odstep += size + 10;
	            });
	            var text = group.plain(this_1.config.labels[i - 1]);
	            text.addClass('text');
	            text.center(this_1.config.R, this_1.config.R);
	            text.dx(ox * (this_1.config.R + odstep));
	            text.dy(oy * (this_1.config.R + odstep));
	        };
	        var this_1 = this;
	        for (var i = 1; i <= this.config.getElementsCount(); i++) {
	            _loop_1();
	        }
	    };
	    return Drawer;
	}());
	exports.Drawer = Drawer;


/***/ }
/******/ ]);
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
	    Config.prototype.getQuarterCount = function () {
	        return this.getElementsCount() / 4;
	    };
	    Config.prototype.getLines = function () {
	        //TODO KW konfig
	        var lines = [];
	        lines.push(new line_1.Line(10));
	        lines.push(new line_1.Line(20));
	        lines.push(new line_1.Line(25));
	        lines.push(new line_1.Line(30));
	        lines.push(new line_1.Line(40));
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
	    function Line(size) {
	        this.size = size;
	    }
	    Line.prototype.getSize = function () {
	        return this.size;
	    };
	    return Line;
	}());
	exports.Line = Line;
	;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var group_1 = __webpack_require__(4);
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
	        this.drawAxis();
	        this.mainElement.move(250, 250);
	        for (var i = 1; i <= this.config.getElementsCount(); i++) {
	            new group_1.Group(this.mainElement, i, this.config).run();
	        }
	    };
	    return Drawer;
	}());
	exports.Drawer = Drawer;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var circle_1 = __webpack_require__(5);
	var Group = (function () {
	    function Group(element, index, config) {
	        this.element = element.group().addClass('line');
	        this.index = index;
	        this.config = config;
	    }
	    Group.prototype.getPosition = function () {
	        var cw = this.config.getQuarterCount();
	        return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
	    };
	    Group.prototype.run = function () {
	        var _this = this;
	        var odstep = 0;
	        this.config.getLines().forEach(function (line, index) {
	            var size = line.getSize();
	            new circle_1.Circle(_this, size, odstep, index);
	            odstep += size + 10;
	        });
	        // TODO KW zrobic element z ktorego bedzie dziedziczyc text oraz circle
	        // 
	        // let text = this.element.plain(this.config.labels[this.index-1]);
	        // text.addClass('text');
	        // text.center(this.config.R, this.config.R);
	        // text.dx(ox * (this.config.R + odstep));
	        // text.dy(oy * (this.config.R + odstep));
	    };
	    return Group;
	}());
	exports.Group = Group;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var Circle = (function () {
	    function Circle(group, size, odstep, index) {
	        this.element = group.element[Circle.mode](size, size);
	        this.element.fill('yellow');
	        //TODO KW bezposrednio do config
	        this.element.center(group.config.R, group.config.R);
	        var oy = Math.sin(group.getPosition());
	        var ox = Math.cos(group.getPosition());
	        this.element.dx(ox * (group.config.R + odstep));
	        this.element.dy(oy * (group.config.R + odstep));
	        this.element.click(function () {
	            console.log('clicked', group.index, index);
	        });
	    }
	    Circle.mode = 'ellipse';
	    return Circle;
	}());
	exports.Circle = Circle;


/***/ }
/******/ ]);
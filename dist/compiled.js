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
	    config_1.Config.set(userConfig);
	    var drawer = new drawer_1.Drawer();
	    drawer.run();
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var line_1 = __webpack_require__(2);
	var Config = (function () {
	    function Config() {
	    }
	    Config.set = function (config) {
	        Object.keys(config).forEach(function (key) {
	            Config[key] = config[key];
	        });
	    };
	    Config.getElementsCount = function () {
	        return this.labels.length;
	    };
	    Config.getQuarterCount = function () {
	        return this.getElementsCount() / 4;
	    };
	    Config.getLines = function () {
	        //TODO KW konfig
	        var lines = [];
	        lines.push(new line_1.Line(10));
	        lines.push(new line_1.Line(20));
	        lines.push(new line_1.Line(25));
	        lines.push(new line_1.Line(30));
	        lines.push(new line_1.Line(40));
	        return lines;
	    };
	    Config.R = 80;
	    Config.labels = [
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
	    Config.element = 'drawer';
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
	/// <reference path="../types/svgjs.d.ts" />
	var config_1 = __webpack_require__(1);
	var group_1 = __webpack_require__(4);
	var Drawer = (function () {
	    function Drawer() {
	        this.draw = SVG('drawing'); //z konfigu pobierac
	        this.mainElement = this.draw.group();
	    }
	    Drawer.prototype.drawAxis = function () {
	        var lineHorizontal = this.mainElement.line(0, 0, 600, 0).stroke({ width: 1 });
	        lineHorizontal.center(config_1.Config.R, config_1.Config.R);
	        var lineVertical = this.mainElement.line(0, 0, 0, 600).stroke({ width: 1 });
	        lineVertical.center(config_1.Config.R, config_1.Config.R);
	    };
	    Drawer.prototype.run = function () {
	        this.drawAxis();
	        this.mainElement.move(250, 250);
	        for (var i = 1; i <= config_1.Config.getElementsCount(); i++) {
	            new group_1.Group(this.mainElement, i);
	        }
	    };
	    return Drawer;
	}());
	exports.Drawer = Drawer;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../types/svgjs.d.ts" />
	var config_1 = __webpack_require__(1);
	var circle_1 = __webpack_require__(5);
	var Group = (function () {
	    function Group(element, index) {
	        this.odstep = 0;
	        this.circles = [];
	        this.element = element.group().addClass('line');
	        this.index = index;
	        this.run();
	    }
	    Group.prototype.getPosition = function () {
	        var cw = config_1.Config.getQuarterCount();
	        return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
	    };
	    Group.prototype.run = function () {
	        var _this = this;
	        var odstep = 0;
	        config_1.Config.getLines().forEach(function (line, index) {
	            _this.circles.push(new circle_1.Circle(_this, line.getSize(), index));
	        });
	        // TODO KW zrobic element z ktorego bedzie dziedziczyc text oraz circle
	        // 
	        // let text = this.element.plain(this.config.labels[this.index-1]);
	        // text.addClass('text');
	        // text.center(this.config.R, this.config.R);
	        // text.dx(ox * (this.config.R + odstep));
	        // text.dy(oy * (this.config.R + odstep));
	    };
	    Group.prototype.setActive = function (circle) {
	        this.circles.forEach(function (c) {
	            c.disable();
	        });
	        circle.enable();
	    };
	    return Group;
	}());
	exports.Group = Group;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../types/svgjs.d.ts" />
	var config_1 = __webpack_require__(1);
	var Circle = (function () {
	    function Circle(group, size, index) {
	        var _this = this;
	        this.group = group;
	        this.element = this.group.element.ellipse(size, size);
	        this.index = index;
	        //TODO KW bezposrednio do config
	        this.element.center(config_1.Config.R, config_1.Config.R);
	        var oy = Math.sin(this.group.getPosition());
	        var ox = Math.cos(this.group.getPosition());
	        this.element.dx(ox * (config_1.Config.R + this.group.odstep));
	        this.element.dy(oy * (config_1.Config.R + this.group.odstep));
	        this.group.odstep += size + 10;
	        this.element.click(function () {
	            _this.group.setActive(_this);
	        });
	    }
	    Circle.prototype.disable = function () {
	        this.element.removeClass('active');
	    };
	    Circle.prototype.enable = function () {
	        this.element.addClass('active');
	    };
	    return Circle;
	}());
	exports.Circle = Circle;


/***/ }
/******/ ]);
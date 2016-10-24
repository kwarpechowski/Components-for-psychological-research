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
	window["GEW"] = function (userConfig) {
	    config_1.Config.set(userConfig);
	    var drawer = new drawer_1.Drawer();
	    drawer.run();
	    return drawer;
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
	        // TODO KW konfig
	        var lines = [];
	        lines.push(new line_1.Line(10));
	        lines.push(new line_1.Line(15));
	        lines.push(new line_1.Line(20));
	        lines.push(new line_1.Line(25));
	        lines.push(new line_1.Line(30));
	        return lines;
	    };
	    Config.R = 80;
	    Config.labels = [
	        "Interest",
	        "Amusement",
	        "Pride",
	        "Joy",
	        "Pleasure",
	        "Contentment",
	        "Love",
	        "Admiration",
	        "Relief",
	        "Comassion",
	        "Sadness",
	        "Guilt",
	        "Regret",
	        "Shame",
	        "Disappointment",
	        "Fear",
	        "Disgust",
	        "Contempt",
	        "Hate",
	        "Anger"
	    ];
	    Config.element = "drawer";
	    Config.showLines = true;
	    Config.classes = {
	        mainGroup: "main_group",
	        lineAxis: "line_axis",
	        line: "line",
	        circlePrefix: "row_"
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
	var config_1 = __webpack_require__(1);
	var group_1 = __webpack_require__(4);
	var circle_1 = __webpack_require__(5);
	var Drawer = (function () {
	    function Drawer() {
	        var container = document.getElementById(config_1.Config.element);
	        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	        svg.setAttribute("version", "1.1");
	        container.appendChild(svg);
	        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
	        g.setAttribute("class", config_1.Config.classes.mainGroup);
	        svg.appendChild(g);
	        this.mainElement = g;
	    }
	    Drawer.prototype.drawLine = function (x1, y1, x2, y2) {
	        if (config_1.Config.showLines) {
	            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	            line.setAttribute("class", config_1.Config.classes.lineAxis);
	            line.setAttribute("x1", x1.toString());
	            line.setAttribute("y1", y1.toString());
	            line.setAttribute("x2", x2.toString());
	            line.setAttribute("y2", y2.toString());
	            this.mainElement.appendChild(line);
	        }
	    };
	    Drawer.prototype.drawAxis = function (size) {
	        this.drawLine(size * -1, 0, size, 0);
	        this.drawLine(0, size, 0, size * -1);
	    };
	    Drawer.prototype.setPosition = function () {
	        var el = document.getElementsByClassName(config_1.Config.classes.mainGroup)[0];
	        var width = el.getBoundingClientRect().width / 2; // ladniej mozna policzyc rozmiar
	        this.drawAxis(width);
	        el.setAttribute("style", "transform: translate(" + width + "px, " + width + "px)");
	    };
	    Drawer.prototype.run = function () {
	        for (var i = 1; i <= config_1.Config.getElementsCount(); i++) {
	            new group_1.Group(i);
	        }
	        this.setPosition();
	    };
	    Drawer.prototype.circleClick = function (f) {
	        circle_1.Circle.clickEvents.push(f);
	    };
	    Drawer.prototype.isAllChecked = function (f) {
	        group_1.Group.isAllCheckedEvents.push(f);
	    };
	    return Drawer;
	}());
	exports.Drawer = Drawer;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(1);
	var circle_1 = __webpack_require__(5);
	var text_1 = __webpack_require__(6);
	var Group = (function () {
	    function Group(index) {
	        this.odstep = 0;
	        this.active = null;
	        this.circles = [];
	        var main = document.getElementsByClassName(config_1.Config.classes.mainGroup)[0]; // TODO KW magic string, szukac tylko po configu
	        this.element = document.createElementNS("http://www.w3.org/2000/svg", "g");
	        var classes = [
	            config_1.Config.classes.line,
	            config_1.Config.classes.line + "_" + index
	        ];
	        this.element.setAttribute("class", classes.join(" "));
	        main.appendChild(this.element);
	        this.index = index;
	        this.run();
	        Group.list.push(this);
	    }
	    Group.isAllChecked = function () {
	        var count = Group.list.filter(function (group) {
	            return group.active === null;
	        }).length;
	        if (!count) {
	            Group.isAllCheckedEvents.forEach(function (f) {
	                f();
	            });
	        }
	    };
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
	        new text_1.Text(this, this.index);
	    };
	    Group.prototype.setActive = function (circle) {
	        this.circles.forEach(function (c) {
	            c.disable();
	        });
	        circle.enable();
	        this.active = circle;
	        Group.isAllChecked();
	    };
	    Group.list = [];
	    Group.isAllCheckedEvents = [];
	    return Group;
	}());
	exports.Group = Group;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(1);
	var Circle = (function () {
	    function Circle(group, size, index) {
	        this.group = group;
	        this.index = index;
	        var oy = Math.sin(this.group.getPosition());
	        var ox = Math.cos(this.group.getPosition());
	        this.group.odstep += size * 2; // TODO KW magic numbers
	        var sizeY = oy * (config_1.Config.R + this.group.odstep);
	        var sizeX = ox * (config_1.Config.R + this.group.odstep);
	        this.element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	        this.element.setAttribute("cx", sizeX.toString());
	        this.element.setAttribute("cy", sizeY.toString());
	        this.element.setAttribute("r", size.toString());
	        this.element.setAttribute("class", config_1.Config.classes.circlePrefix + index);
	        this.bindEvents();
	        this.group.element.appendChild(this.element);
	    }
	    Circle.prototype.bindEvents = function () {
	        var _this = this;
	        this.element.addEventListener("click", function () {
	            _this.group.setActive(_this);
	            Circle.clickEvents.forEach(function (event) {
	                event(_this.group.index, _this.index);
	            });
	        });
	    };
	    Circle.prototype.enable = function () {
	        var classes = this.element.getAttribute("class");
	        if (classes) {
	            classes += " " + Circle.activeClass;
	        }
	        else {
	            classes = Circle.activeClass;
	        }
	        this.element.setAttribute("class", classes);
	    };
	    Circle.prototype.disable = function () {
	        var classes = this.element.getAttribute("class");
	        if (classes) {
	            classes = classes.replace(Circle.activeClass, "");
	        }
	        this.element.setAttribute("class", classes);
	    };
	    Circle.activeClass = "active";
	    Circle.clickEvents = [];
	    return Circle;
	}());
	exports.Circle = Circle;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(1);
	var Text = (function () {
	    function Text(group, index) {
	        this.group = group;
	        this.index = index;
	        var oy = Math.sin(this.group.getPosition());
	        var ox = Math.cos(this.group.getPosition());
	        this.group.odstep += 40; // TODO KW magic numbers
	        var sizeY = oy * (config_1.Config.R + this.group.odstep);
	        var sizeX = ox * (config_1.Config.R + this.group.odstep);
	        this.element = document.createElementNS("http://www.w3.org/2000/svg", "text");
	        this.element.setAttribute("x", sizeX.toString());
	        this.element.setAttribute("y", sizeY.toString());
	        this.element.setAttribute("id", "text_" + this.index);
	        var textNode = document.createTextNode(config_1.Config.labels[this.index - 1]);
	        this.element.appendChild(textNode);
	        this.group.element.appendChild(this.element);
	        if (index > config_1.Config.labels.length / 2) {
	            var el = document.getElementById("text_" + this.index);
	            var width = el.getBoundingClientRect().width;
	            this.element.setAttribute("x", (sizeX - width).toString());
	        }
	    }
	    return Text;
	}());
	exports.Text = Text;


/***/ }
/******/ ]);
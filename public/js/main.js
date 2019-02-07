/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Bird.js":
/*!********************!*\
  !*** ./js/Bird.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bird; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Bird =
/*#__PURE__*/
function () {
  //wir schreiben export default, damit andere Klassen auf "Bird" zugreifen können
  function Bird(config) {
    _classCallCheck(this, Bird);

    _defineProperty(this, "defaultConfig", {
      // legt die Grund-Konfiguration der Birds fest
      color: 'black',
      speed: 2 + Math.random() * 8,
      position: 0
    });

    config = _objectSpread({}, this.defaultConfig, config); //Konfigurations-Objekt,
    //this = config // definiert config, erlaubt uns die Default-Konfiguration zu überschreiben und verbessert die Lesbarkeit

    var _config = config,
        color = _config.color,
        speed = _config.speed,
        position = _config.position,
        onRemove = _config.onRemove,
        onClick = _config.onClick,
        onEscape = _config.onEscape;
    this.onClick = onClick;
    this.color = color;
    this.position = position;
    this.speed = speed;
    this.onRemove = onRemove; // wir reichen die Eltern-Funktion in die Kind-Klasse

    this.onEscape = onEscape;
    this.el = this.render();
    this.addClickHandler();
  }

  _createClass(Bird, [{
    key: "addClickHandler",
    value: function addClickHandler() {
      var _this = this;

      this.el.addEventListener('click', function () {
        _this.onClick(); //fügt einen Punkt in den Countzer bei Klick


        _this.remove(); //entfernt aus HTML beim Click

      }); //Funktion löst aus, dass der Bird abgeschossen wird
    }
  }, {
    key: "remove",
    value: function remove() {
      this.onRemove(this);
      this.el.remove();
    }
  }, {
    key: "update",
    value: function update() {
      this.position = this.position + this.speed;

      if (this.position > window.innerwidth) {
        //wir zerstören den Vogel am rechten Bildschirmrand mithilfe der Funktion "onRemove()"
        //da in der KLasse Bird festgelegt ist, wo sich der Bird befindet wenden wir hier die Funktion onRemove aus der Klasse Game an.
        //Wir müssen die Funktion onRemove() aber in der Klasse-Game positionieren, da mit die Funktion den Array verkleinert, der sich in Ihr befindet
        this.remove(); //entfernt aus HTML

        this.onEscape();
      } else {
        this.el.style.left = this.position + 'px';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var el = document.createElement('div');
      el.className = 'bird';
      el.style.background = this.color;
      document.body.insertAdjacentElement('beforeend', el);
      return el;
    }
  }]);

  return Bird;
}();



/***/ }),

/***/ "./js/Counter.js":
/*!***********************!*\
  !*** ./js/Counter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Counter =
/*#__PURE__*/
function () {
  function Counter() {
    _classCallCheck(this, Counter);

    this.playerPoints = 0;
    this.birdsPoints = 0;
    this.el = this.render();
    this.update();
  }

  _createClass(Counter, [{
    key: "addPlayerPoint",
    value: function addPlayerPoint() {
      this.playerPoints = this.playerPoints + 1; // addiert den Wert um 1

      this.update();
    }
  }, {
    key: "addBirdsPoint",
    value: function addBirdsPoint() {
      this.birdsPoints = this.birdsPoints + 1; // addiert den Wert um 1

      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      var el = document.createElement('div');
      el.className = 'counter';
      document.body.insertAdjacentElement('beforeend', el);
      return el;
    }
  }, {
    key: "update",
    value: function update() {
      // Aktualisiert im innerHTML den Text (unsere Punkte)
      this.el.innerHTML = "".concat(this.playerPoints) + ' : ' + "".concat(this.birdsPoints);
    }
  }]);

  return Counter;
}();



/***/ }),

/***/ "./js/Game.js":
/*!********************!*\
  !*** ./js/Game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bird */ "./js/Bird.js");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter */ "./js/Counter.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Import verknüpft die Bird.js mit unsserer Main.js

 // Für erstellen eine neue KLasse "Game" mit einem optionalen Constructor um darin definierte Funktionen sofort auszuführen.

var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    _defineProperty(this, "birds", []);

    _defineProperty(this, "removeBird", function (bird) {
      var index = _this.birds.indexOf(bird);

      _this.birds = [].concat(_toConsumableArray(_this.birds.slice(0, index)), _toConsumableArray(_this.birds.slice(index + 1)));
    });

    _defineProperty(this, "updateBirdsPoints", function () {
      // fügt die Funktion hinzu; jetzt erscheint ein Punkt für jeden Vogel der aus dem Bildschirm fliegt
      _this.counter.addBirdsPoint();
    });

    _defineProperty(this, "updatePlayerPoints", function () {
      //Funktion ein Punkt für jeden getroffenen Vogel
      _this.counter.addPlayerPoint();
    });

    this.createBirds();
    this.createCounter();
    this.loop();
  }

  _createClass(Game, [{
    key: "createCounter",
    value: function createCounter() {
      this.counter = new _Counter__WEBPACK_IMPORTED_MODULE_1__["default"]();
    } //createBirds() {
    //this.birds = [ // durch "this." greifen wir auf die Klasse Birds zu
    //new Bird({
    // ...config,
    //color: 'hotpink',
    //speed: 30}), // bei mehreren Konfigurationen schreibt man Objekte{}, das verbessert Lesbarkeit und macht es möglich einzelne Konfigurationen optinal zu machen oder zu überschreiben( config überschreibt default config, color/speed überschreibt config )
    //new Bird(config),

  }, {
    key: "createBirds",
    value: function createBirds() {
      this.addBird;
      this.addBird;
      this.addBird;
      this.addBird;
      this.addBird;
    }
  }, {
    key: "addBird",
    value: function addBird() {
      //prodziert neue Birds und fügt sie dem Array Birds hinzu.
      var config = {
        // config legt Konfigurationen fest die von den Standardkonfigurationen aus "Bird" abweichen sollen
        onRemove: this.removeBird,
        onClick: this.updatePlayerPoints,
        onEscape: this.updateBirdsPoints
      };
      this.birds = [].concat(_toConsumableArray(this.birds), [new _Bird__WEBPACK_IMPORTED_MODULE_0__["default"](config)]);
    }
  }, {
    key: "loop",
    value: function loop() {
      var _this2 = this;

      Math.random() < 1 / 60 && this.addBird(); //fügen die addBird-Funktion als Random dem Loop hinzu um immer wieder neue Birds automatisch zu produzieren

      this.birds.forEach(function (bird) {
        return bird.update();
      });
      requestAnimationFrame(function () {
        return _this2.loop();
      }); // durch "this." holen wir uns die Funktion "update aus der Klasse Birds in unsere KLasse Game"
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./js/Game.js");

new _Game__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
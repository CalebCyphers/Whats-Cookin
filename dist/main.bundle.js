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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "label{color:#EBF5EE}html{display:flex;flex-direction:column;background-color:#37515C;border:2px solid #000;height:100%;width:100%}body{font-family:'Open Sans', sans-serif;width:100%}body .recipe-display{position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.3);height:100%;width:100%}body .recipe-display-main{position:fixed;left:10%;top:5rem;background-color:#EBF5EE;height:30rem;width:80%;border-radius:0.5rem;overflow:scroll}body .page-title{color:#EBF5EE}h1{margin-top:0;margin-bottom:0;padding:1rem;text-align:center;width:30%}.wrapper{display:flex;justify-content:center;align-items:center}.hidden{display:none}.main-header{background-color:#EBF5EE;border-bottom:1px solid #000;display:grid;grid-template-columns:1fr 5fr 1fr;background-color:#EBF5EE;width:100%}.main-header .hamburger-menu{height:4rem;width:4rem}.main-header .x-menu{display:flex;justify-content:center;align-items:center;height:4rem;width:4rem}.main-header .header-title{text-align:center;grid-column-start:2;width:100%}.main-header .hidden{display:none}.open-menu-selections{display:flex;flex-direction:column;align-items:center;background-color:#EBF5EE}.open-menu-selections h3:hover{color:#37515C}.open-menu-selections a{text-decoration:none;font-size:2rem}.open-menu-selections a:visited{color:#000}.open-menu-selections a:hover{color:#37515C}.open-menu-selections .menu-selection{color:#000;grid-column-start:2;border-bottom:solid;text-align:center;width:50%}.open-menu-selections .menu-favorites{border:none}.page-title-and-search .page-title{text-align:center;margin:auto}.page-title-and-search .search-wrapper{display:flex;justify-content:center;align-items:center}.page-title-and-search .search-wrapper .search-icon{display:flex;height:1rem;width:1rem}.page-title-and-search .search-wrapper .search-recipes-input{height:1.5rem;width:8rem;background-color:#EBF5EE;border:1px solid #000}.page-title-and-search .search-wrapper .search-button{display:flex;justify-content:center;align-items:center;height:1.75rem;width:1.75rem;border:1px solid #000}.page-title-and-search .search-icon{height:1.5rem;width:1.5rem}.all-cards{padding:2rem;display:grid;grid-gap:1.5rem;grid-template-columns:1fr;width:100%}.pantry-cards{padding:2rem;display:grid;grid-gap:1.5rem;grid-template-columns:1fr;width:100%}.single-ingredient-card{display:grid;border-radius:0.5rem;grid-template-rows:0.5fr 3.25fr;background-color:#EBF5EE}.single-ingredient-card .ingredient-name-area{display:flex;justify-content:center;align-items:center}.single-ingredient-card .ingredient-quantity-section{display:flex;justify-content:center;align-items:center}.single-ingredient-card p{font-size:500%;margin:3rem}.single-recipe-card{display:grid;border-radius:0.5rem;grid-template-rows:0.25fr 3fr 0.5fr;background-color:#EBF5EE;box-shadow:0 0 3px #000}.single-recipe-card .all-card-icons{display:flex;justify-content:space-between;align-items:center;width:90%;height:3rem;margin:auto}.single-recipe-card .card-icon{height:2rem;width:2rem}.single-recipe-card .recipe-name{text-align:center}.single-recipe-card .card-image-section{display:flex;justify-content:center;align-items:center}.single-recipe-card .card-image{border:1px solid #000;width:93%;height:auto}.user-info{margin:0 auto;text-align:center;width:40%}.menu-selection:hover,.search-icon:hover{cursor:pointer}.menu-selection:active,.search-icon:active{background-color:#C3C2C6}.card-button{border:1px solid #000;height:27px;margin:3px}.add-button{background-color:#EBF5EE;display:flex;width:12%}.add{width:100%}.favorite{background-color:#EBF5EE;background-image:url(https://image.flaticon.com/icons/svg/149/149222.svg);background-repeat:no-repeat;background-position:center;width:13%}.card{background-color:#D7F2FE;border:3px solid #000;width:100%}.all{grid-gap:0px;grid-template-columns:repeat(1, 1fr)}.all-recipe-info,ol{color:#EBF5EE;font-size:220%;width:100%}h3{padding:1rem 0 1rem 0;color:#000;font-size:2rem}.recipe-name{display:block;font-size:150%;text-align:center}.card-picture:hover{opacity:0.7}.card-picture:active{border:2px solid #000}main{display:flex;justify-content:center;align-items:center;background-color:#37515C;height:auto;width:100%}.favorite-active{background-image:url(https://image.flaticon.com/icons/svg/148/148841.svg);background-repeat:no-repeat}@media (min-width: 800px){.all-cards{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1200px){.all-cards{grid-template-columns:repeat(3, 1fr)}}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/cookbook.js":
/*!*************************!*\
  !*** ./src/cookbook.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipe(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        return (ingredient.name.includes(searchText)) ||
        (recipe.name.includes(searchText))
      });
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cookbook);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
const recipeCards = document.querySelector('.all-cards');
let pantryArea = document.querySelector('.pantry-cards');
let recipeSearch = document.querySelector('.search-recipes-input');
let menuMyUpcomingRecipes = document.querySelector('.menu-my-upcoming-recipes-title');
let recipeDisplay = document.querySelector('.recipe-display');

let domUpdates = {
  randomNumber :  Math.floor(Math.random() * 49) + 1,

   displayAllRecipes(recipes, currentUser) {
    
    let favorites = currentUser.favoriteRecipes

    if (recipeCards === null ) {
      return 
    }
    recipeCards.innerHTML = ''
    recipes.forEach(recipe => {
      let src = "https://image.flaticon.com/icons/svg/149/149222.svg"
      if (favorites !== undefined && favorites.includes(String(recipe.id) )) {
         src = "https://image.flaticon.com/icons/svg/148/148841.svg"
      }
    recipeCards.innerHTML += `<article id = ${recipe.id} class="single-recipe-card">
         <article class="all-card-icons">
           <img class="plus-icon card-icon" tabindex="0" src="./images/plus-icon.png" alt="show recipe details button">
           <img class="star-icon card-icon" tabindex="0" src=${src} alt="add to favorites button">
         </article>
         <article class="card-image-section">
           <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}">
         </article>
         <article class="recipe-name-area">
           <h2 class="recipe-name" tabindex="0">${recipe.name}</h2>
         </article>
       </article>`
      })

  },

  displayRecipeInfo(recipe, ingredients) {
    let trueInstructions = recipe.instructions.map(instruction => {
      return instruction.instruction;
    }).join(',')

    recipeDisplay.innerHTML += 
    `<section class="recipe-display-main">
    <h1>${recipe.name}</h1>
    <div class="recipe-ingredients-with-cost">
      <p class="popup-ingredients">${JSON.stringify(recipe.ingredients)}</p>
      <h3 class="pop-costs">${recipe.calculateCost()}</h3>
    </div>
    <p class="recipe-instructions">${trueInstructions}</p>
</section>`
  },

  showRecipePopup() {
    recipeDisplay.classList.remove('hidden');
  },

  hideRecipePopup() {
    recipeDisplay.classList.add('hidden');
  },
  
   greetUser(user) {
    const userName = document.querySelector('.user-name');
    if(userName === null){
      return 
    }
    userName.innerText += ' ' + user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },
  
   displayPantry(pantry) {
    if(pantryArea === null) {
      return 
    }
    pantry = pantry.contents
    pantryArea.innerHTML = ''
    pantry.forEach(ingInPantry => {
      pantryArea.innerHTML += `<article class="single-ingredient-card">
    <article class="ingredient-name-area">
      <h2 class="ingredient-name" tabindex="0">${ingInPantry.name}</h2>
    </article>
    <article class="ingredient-quantity-section">
      <button alt="decrement ingredient quantity button">-</button>
      <p class = 'ingredient-quantity' tabindex="0">${ingInPantry.amount}</p>
      <button alt="incriment ingredient quantity button">+</button>
    </article>
  </article>`
    });
  },



    displayUpcomingRecipes(currentUser, recipeDatas) {
      if (currentUser.recipesToCook.length === 0) {
        return 
      }
      if (event.target.classList.contains('menu-my-upcoming-recipes-title')) {
        recipeCards.innerHTML = ''
      recipeDatas.forEach(recipeDataPoint => {
        let favorites = currentUser.favoriteRecipes
        let src = "https://image.flaticon.com/icons/svg/149/149222.svg"
      if (favorites !== undefined && favorites.includes(String(recipeDataPoint.id) )) {
        src = "https://image.flaticon.com/icons/svg/148/148841.svg"
     }

        if (currentUser.recipesToCook.includes(String(recipeDataPoint.id))) {

          recipeCards.innerHTML += `<article id = ${recipeDataPoint.id} class="single-recipe-card ">
          <article class="all-card-icons">
            <img class="plus-icon card-icon" tabindex="0" src="./images/plus-icon.png" alt="show recipe details">
            <img class="star-icon card-icon" tabindex="0" src=${src} alt="add to favorites button">
          </article>
          <article class="card-image-section">
            <img class="card-image" tabindex="0" src="${recipeDataPoint.image}" alt="sample display of recipe">
          </article>
          <article class="recipe-name-area">
            <h2 class="recipe-name" tabindex="0">${recipeDataPoint.name}</h2>
          </article>
        </article>`
        }
      })
    }
  },

     displayFavorites(favorites) {
       if (favorites.length === 0 ) {
         return
       }
    
      recipeCards.innerHTML = ''
      favorites.forEach(recipe =>{
        recipeCards.innerHTML += `<article id = ${recipe.id} class="single-recipe-card ">
      <article class="all-card-icons">
        <img class="plus-icon card-icon" tabindex="0" src="./images/plus-icon.png" alt="show recipe details button">
        <img class="star-icon card-icon" tabindex="0" src="https://image.flaticon.com/icons/svg/148/148841.svg" alt="add to favorites button">
      </article>
      <article class="card-image-section">
        <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}">
      </article>
      <article class="recipe-name-area">
        <h2 class="recipe-name" tabindex="0">${recipe.name}</h2>
      </article>
    </article>`
      })
    }
  }
  // function viewFavorites() {
//   if (cardArea.classList.contains('all')) {
//     cardArea.classList.remove('all')
//   }
//   if (!user.favoriteRecipes.length) {
//     favButton.innerHTML = 'You have no favorites!';
//     populateCards(cookbook.recipes);
//     return
//   } else {
//     favButton.innerHTML = 'Refresh Favorites'
//     cardArea.innerHTML = '';
//     user.favoriteRecipes.forEach(recipe => {
//       cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
//       class='card'>
//       <header id='${recipe.id}' class='card-header'>
//       <label for='add-button' class='hidden'>Click to add recipe</label>
//       <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
//       <img id='${recipe.id}' class='add'
//       src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
//       recipes to cook'></button>
//       <label for='favorite-button' class='hidden'>Click to favorite recipe
//       </label>
//       <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite-active card-button'>
//       </button></header>
//       <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
//       <img id='${recipe.id}' tabindex='0' class='card-picture'
//       src='${recipe.image}' alt='Food from recipe'>
//       </div>`)
//     })
//   }
// }



// function favoriteCard(event) {
//   let specificRecipe = cookbook.recipes.find(recipe => {
//     if (recipe.id  === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   if (!event.target.classList.contains('favorite-active')) {
//     event.target.classList.add('favorite-active');
//     favButton.innerHTML = 'View Favorites';
//     user.addToFavorites(specificRecipe);
//   } else if (event.target.classList.contains('favorite-active')) {
//     event.target.classList.remove('favorite-active');
//     user.removeFromFavorites(specificRecipe)
//   }
// }

// function cardButtonConditionals(event) {
//   if (event.target.classList.contains('favorite')) {
//     favoriteCard(event);
//   } else if (event.target.classList.contains('card-picture')) {
//     displayDirections(event);
//   } else if (event.target.classList.contains('home')) {
//     favButton.innerHTML = 'View Favorites';
//     populateCards(cookbook.recipes);
//   }
// }


// function displayDirections(event) {
//   let newRecipeInfo = cookbook.recipes.find(recipe => {
//     if (recipe.id === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
//   let cost = recipeObject.calculateCost()
//   let costInDollars = (cost / 100).toFixed(2)
//   cardArea.classList.add('all');
//   cardArea.innerHTML = `<h3>${recipeObject.name}</h3>
//   <p class='all-recipe-info'>
//   <strong>It will cost: </strong><span class='cost recipe-info'>
//   $${costInDollars}</span><br><br>
//   <strong>You will need: </strong><span class='ingredients recipe-info'></span>
//   <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
//   </span></ol>
//   </p>`;
//   let ingredientsSpan = document.querySelector('.ingredients');
//   let instructionsSpan = document.querySelector('.instructions');
//   recipeObject.ingredients.forEach(ingredient => {
//     ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
//     ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
//     ${ingredient.name}</li></ul>
//     `)
//   })
//   recipeObject.instructions.forEach(instruction => {
//     instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
//     ${instruction.instruction}</li>
//     `)
//   })
// }

// function getFavorites() {
//   if (user.favoriteRecipes.length) {
//     user.favoriteRecipes.forEach(recipe => {
//       document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
//     })
//   } else return
// }

// function populateCards(recipes) {
//   cardArea.innerHTML = '';
//   if (cardArea.classList.contains('all')) {
//     cardArea.classList.remove('all')
//   }
//   recipes.forEach(recipe => {
//     cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
//     class='card'>
//         <header id='${recipe.id}' class='card-header'>
//           <label for='add-button' class='hidden'>Click to add recipe</label>
//           <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
//             <img id='${recipe.id} favorite' class='add'
//             src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
//             recipes to cook'>
//           </button>
//           <label for='favorite-button' class='hidden'>Click to favorite recipe
//           </label>
//           <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
//         </header>
//           <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
//           <img id='${recipe.id}' tabindex='0' class='card-picture'
//           src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
//     </div>`)
//   })
//   getFavorites();
// };

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }
  getIdsOfPantryIngredients() {
    return this.contents.map(ing => {
      return ing.ingredient
    })
  }
  findRecipeIngredientsInPantry(recipe) {
    let currentPantryIds = this.getIdsOfPantryIngredients()
    return recipe.ingredients.filter(ingredient => {
      return currentPantryIds.includes(ingredient.id)
    })
  }
  doesUserHaveRequiredIngredients(recipe) {
    return this.findRecipeIngredientsInPantry(recipe).length === recipe.ingredients.length
  }
  findWhichIngredientsAreShort(recipe) {
    let notEnough = this.findRecipeIngredientsInPantry(recipe).filter(ing => {
      let ingredientStock = this.findIngredientInPantry(ing).amount
      return ingredientStock < ing.quantity.amount
    })
    return notEnough
  }
  findAmountMissing(recipe) {
    let missingIngredients = this.findWhichIngredientsAreShort(recipe)
  return missingIngredients.reduce((finalArray, ingredient) => {
      finalArray.push({ name: ingredient.name, facts: { id: ingredient.id, amountMissing: ingredient.quantity.amount - this.findIngredientInPantry(ingredient).amount}})
      return finalArray
    },[])
  }
  identifyAmountOfIngredientsMissing(recipe) {
    let ingredientsMissing = this.findAmountMissing(recipe)
     return  ingredientsMissing.reduce((string, ingredient )=>{
      string += ` ${ingredient.facts.amountMissing} ${ingredient.name}\n`
      return string
    },"You are missing")
  }
  calculateCostForIngredients(recipe, AllIngredients) {
    let allMissing = this.findAmountMissing(recipe)
    return allMissing.reduce((cost, ingredient) =>{
      let currentIng = AllIngredients.find(ing =>{
        return ingredient.facts.id === ing.id
      })
      return currentIng.estimatedCostInCents * ingredient.facts.amountMissing
    }, 0)
  }
  addNecessaryIngredients(recipe) {
    let allMissing =  this.findAmountMissing(recipe)
    return allMissing.map(ing =>{
      return {["ingredient"]: ing.facts.id,
        ["amount"]: ing.facts.amountMissing}
    }) 
  }
  findIngredientInPantry(ingredient) {
    return this.contents.find(pantryIngredient => {
      return pantryIngredient.ingredient === ingredient.id
    })
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Pantry);

/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return costCounter / 100;
  }
  returnInstructions() {
    return this.instructions
  }
  filterByTag(letter) {
    var tags =  this.tags.filter(tag =>{
      return tag.split('').includes(letter.toLowerCase())
    })
    return tags
  }
  containsIngredient(inputIngredient) { 
    let filterdArray = this.ingredients.filter(ingredient => {
      return ingredient.name.includes(inputIngredient.toLowerCase())
    })
    if (filterdArray.length > 0) {
      return true
    }
  }
  searchByIngredient(inputIngredient) {
    var ing =  this.ingredients.find(ingredient => {
      return ingredient.name.includes(inputIngredient.toLowerCase())
    })
    if (ing.name === undefined) {
      return false
    }
    return ing.name
    
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _cookbook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookbook */ "./src/cookbook.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");









let recipeDatas;
let ingredientsData;
let currentUser;
let favorites;

let myPantryButton = document.querySelector('.menu-my-pantry')
let myRecipesButton = document.querySelector('.menu-my-upcoming-recipes')
let myFavoritesButton = document.querySelector('.menu-favorites')



let navMenu = document.querySelector('.open-menu-selections')
let hamburgerIcon = document.querySelector('.hamburger-menu')
let closeIcon = document.querySelector('.x-menu')
let menuMyUpcomingRecipes = document.querySelector('.menu-my-upcoming-recipes-title');
let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
const recipeCards = document.querySelector('.all-cards');
let pantryArea = document.querySelector('.pantry-cards');
let recipeSearch = document.querySelector('.search-recipes-input')
let recipeDisplay = document.querySelector('.recipe-display');
recipeSearch.addEventListener('keyup', ()=>{
  if(favButton.classList.contains('clicked')){
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData,'favoriteRecipes'),currentUser)

  }
  else if(menuMyUpcomingRecipes.classList.contains('clicked')){
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData,'recipesToCook'),currentUser)

  }
  else{
  _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData),currentUser)
  }
})
favButton.addEventListener('click', ()=>{
  if(!favButton.classList.contains('clicked')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayFavorites(findFavorites(currentUser,recipeDatas,'favoriteRecipes'))
    favButton.classList.add('clicked')
  }
  else{
    favButton.classList.remove('clicked')
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(recipeDatas,currentUser)
  }
})
menuMyUpcomingRecipes.addEventListener('click',() =>{
      if(!menuMyUpcomingRecipes.classList.contains('clicked')) {
        _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayUpcomingRecipes(currentUser,recipeDatas)
        menuMyUpcomingRecipes.classList.add('clicked')
      }
      else{
        menuMyUpcomingRecipes.classList.remove('clicked')
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(recipeDatas,currentUser)
      }
})

recipeDisplay.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].hideRecipePopup);

recipeCards.addEventListener('click', () => {
if(event.target.classList.contains('star-icon')) {
  toggleFavorites(event)
}
if (event.target.classList.contains('plus-icon')) {
  addToUpcomingRecipes(currentUser, recipeDatas);
}
if (event.target.classList.contains('card-image')) {
  _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].showRecipePopup();
  let chosenRecipe = event.target.closest('.single-recipe-card')
  _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayRecipeInfo(createRecipe(chosenRecipe.id))
}
})

function getRecipeIngredientNames() {
  //access the ingredients from ingredientData
  //compare each ingredient and see if the ingredient
  //is included in the recipe.ingredients (by ID)
  //if true => returns the ingredient that matches
  //set those included ingredients to a variable
  //for each of those found ingredients, reassign
  //values by creating new keys
}

function toggleFavorites(event){
  if(event.target.src === "https://image.flaticon.com/icons/svg/149/149222.svg"){
    event.target.src =   "https://image.flaticon.com/icons/svg/148/148841.svg"
    addToFavorites(event)
  }else{   
    removeFromFavorites(event)
    event.target.src =  "https://image.flaticon.com/icons/svg/149/149222.svg" }
}
function addToFavorites(event){
let recipe = event.target.closest('.single-recipe-card')
currentUser.addToFavorites(recipe.id)
}
function removeFromFavorites(event) {
  favorites = currentUser.favoriteRecipes
  let recipe = event.target.closest('.single-recipe-card')
  if(favorites.includes(recipe.id)){
    currentUser.removeFromFavorites(recipe.id)
  }
}

// window.onload = onStartup();
// window.onload = showDomUpdates(recipe);
window.onload = function() {
  mergeFetchTimelines()
}
function createUser(usersData) {
  let currentUser = usersData.find(user => {
    let parsedID = parseInt(user.id);
    return parsedID === _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].randomNumber
  })
  return new _user__WEBPACK_IMPORTED_MODULE_4__["default"](currentUser.id,currentUser.name,currentUser.pantry)
}

function createRecipe(id) {
  let currentRecipe = recipeDatas.find(recipe => {
    return recipe.id == id;
  })
  console.log(currentRecipe)
  return new _recipe__WEBPACK_IMPORTED_MODULE_3__["default"](currentRecipe, ingredientsData)

};

function addToUpcomingRecipes(currentUser) {
  let recipe = event.target.closest('.single-recipe-card')
  currentUser.addToRecipesToCook(recipe.id);
};

function createPantry(currentUser, ingredientsData) {
  currentUser.pantry.forEach(pantryItem => {
    let currentIngredient = ingredientsData.find(ingredient => {
      return pantryItem.ingredient === ingredient.id;
    })
    if(!pantryItem.name){
      return
    }
     pantryItem.name = currentIngredient.name;
    pantryItem.estimatedCostInCents = currentIngredient.estimatedCostInCents;
  })
  //what if we made a class here?
  return new _pantry__WEBPACK_IMPORTED_MODULE_2__["default"](currentUser.pantry)
}

function grabRecipes() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
  .then(response => response.json())
  .then(recipeObject => {
    recipeDatas = recipeObject.recipeData
  })
  .catch(err => {
    console.log(err);
    alert('Sorry, the recipes failed to load. Try again later.')})
}

function grabUsers() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData',)
  .then(response => {
    return response.json()
  })
  .then(data => {
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].greetUser(data.wcUsersData[_domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].randomNumber -1])
     return data.wcUsersData;
      })
  .catch(err => {
      console.log(err);
      alert('Sorry, the user information failed to load. Try again later.');
  })
}
  function grabIngredients() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
  .then(response => {
      return response.json()
  }).then(ingredientData => {
      return ingredientData.ingredientsData;
      })
  .catch(err => {
      console.log(err);
      alert('Sorry, the ingredients failed to load. Try again later.');    
})
}
function mergeFetchTimelines() {
 Promise.all([grabUsers(), grabIngredients(), grabRecipes()])
 .then(values => {
   let usersData = values[0];
   ingredientsData = values[1];
    currentUser = createUser(usersData)
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(recipeDatas,currentUser);
   let pantry = createPantry(currentUser,ingredientsData)
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayPantry(pantry)
    })
  .catch(err => {
      console.log(err);
      alert('Sorry, the information failed to load. Try again later.');
  }) 
}
function findFavorites(currentUser,recipeDatas,currentUserProperty) {
  let ids = currentUser[currentUserProperty]
  let favoriteRecipies = recipeDatas.filter(recipe =>{
    return ids.includes(String(recipe.id))
  })
  return favoriteRecipies
}
function filterInputs(letters,ingredientsData,currentUserProperty){
  if(letters === ''){
    return 
  }
  letters = letters.trim()
  let arrayToFilter;
  if(currentUserProperty === undefined){
     arrayToFilter = recipeDatas
  }
  else{
   arrayToFilter = findFavorites(currentUser,recipeDatas,currentUserProperty);
  }
  console.log(letters)
  return arrayToFilter.filter(recipe => {

    let correctIngredient  = ingredientsData.find(ingredient =>{ 
      return recipe.ingredients.find(recIngredients => {
        return recIngredients.id === ingredient.id
      })
     })
    return correctIngredient.name.toUpperCase().includes(letters.toUpperCase()) || recipe.name.toUpperCase().includes(letters.toUpperCase()) || recipe.tags.join('').includes(letters)
  })
}

hamburgerIcon.addEventListener('click', ()=>{
  navMenu.classList.remove('hidden');
  hamburgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  myPantryButton.classList.remove('hidden');
  myFavoritesButton.classList.remove('hidden');
  myRecipesButton.classList.remove('hidden');
})

closeIcon.addEventListener('click', ()=>{
  navMenu.classList.add('hidden');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  myPantryButton.classList.add('hidden');
  myFavoritesButton.classList.add('hidden');
  myRecipesButton.classList.add('hidden');
})




/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    })
  }

  filterRecipesToCook(tag) {
    return this.recipesToCook.filter(recipe => {
      return recipe.tags.includes(tag);
    })
  }

  findFavorites(strgToSrch) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(strgToSrch)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(strgToSrch)
      })
    })
  }

  checkPantry(recipe) {
    const allPantryItemsID = this.pantry.map(pantryItem => {
      return pantryItem.ingredient;
    })
    const missingIngredients = recipe.ingredients.filter(ingredient => {
      return !(allPantryItemsID.includes(ingredient.ingredient));
    })
    if (missingIngredients.length === 0) {
      return `You have all the ingredients in your pantry!`;
    } else {
      return missingIngredients;
    }
  }

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9iYTg5Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/NGYyZSIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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RTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBLElBQUksbURBQVU7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0U7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1UEQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsYWJlbHtjb2xvcjojRUJGNUVFfWh0bWx7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOiMzNzUxNUM7Ym9yZGVyOjJweCBzb2xpZCAjMDAwO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Ym9keXtmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjt3aWR0aDoxMDAlfWJvZHkgLnJlY2lwZS1kaXNwbGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4zKTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfWJvZHkgLnJlY2lwZS1kaXNwbGF5LW1haW57cG9zaXRpb246Zml4ZWQ7bGVmdDoxMCU7dG9wOjVyZW07YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2hlaWdodDozMHJlbTt3aWR0aDo4MCU7Ym9yZGVyLXJhZGl1czowLjVyZW07b3ZlcmZsb3c6c2Nyb2xsfWJvZHkgLnBhZ2UtdGl0bGV7Y29sb3I6I0VCRjVFRX1oMXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmc6MXJlbTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDozMCV9LndyYXBwZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5oaWRkZW57ZGlzcGxheTpub25lfS5tYWluLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMDtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciA1ZnIgMWZyO2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTt3aWR0aDoxMDAlfS5tYWluLWhlYWRlciAuaGFtYnVyZ2VyLW1lbnV7aGVpZ2h0OjRyZW07d2lkdGg6NHJlbX0ubWFpbi1oZWFkZXIgLngtbWVudXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjRyZW07d2lkdGg6NHJlbX0ubWFpbi1oZWFkZXIgLmhlYWRlci10aXRsZXt0ZXh0LWFsaWduOmNlbnRlcjtncmlkLWNvbHVtbi1zdGFydDoyO3dpZHRoOjEwMCV9Lm1haW4taGVhZGVyIC5oaWRkZW57ZGlzcGxheTpub25lfS5vcGVuLW1lbnUtc2VsZWN0aW9uc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUV9Lm9wZW4tbWVudS1zZWxlY3Rpb25zIGgzOmhvdmVye2NvbG9yOiMzNzUxNUN9Lm9wZW4tbWVudS1zZWxlY3Rpb25zIGF7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1zaXplOjJyZW19Lm9wZW4tbWVudS1zZWxlY3Rpb25zIGE6dmlzaXRlZHtjb2xvcjojMDAwfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyBhOmhvdmVye2NvbG9yOiMzNzUxNUN9Lm9wZW4tbWVudS1zZWxlY3Rpb25zIC5tZW51LXNlbGVjdGlvbntjb2xvcjojMDAwO2dyaWQtY29sdW1uLXN0YXJ0OjI7Ym9yZGVyLWJvdHRvbTpzb2xpZDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo1MCV9Lm9wZW4tbWVudS1zZWxlY3Rpb25zIC5tZW51LWZhdm9yaXRlc3tib3JkZXI6bm9uZX0ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5wYWdlLXRpdGxle3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjphdXRvfS5wYWdlLXRpdGxlLWFuZC1zZWFyY2ggLnNlYXJjaC13cmFwcGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5zZWFyY2gtd3JhcHBlciAuc2VhcmNoLWljb257ZGlzcGxheTpmbGV4O2hlaWdodDoxcmVtO3dpZHRoOjFyZW19LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAuc2VhcmNoLXdyYXBwZXIgLnNlYXJjaC1yZWNpcGVzLWlucHV0e2hlaWdodDoxLjVyZW07d2lkdGg6OHJlbTtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7Ym9yZGVyOjFweCBzb2xpZCAjMDAwfS5wYWdlLXRpdGxlLWFuZC1zZWFyY2ggLnNlYXJjaC13cmFwcGVyIC5zZWFyY2gtYnV0dG9ue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6MS43NXJlbTt3aWR0aDoxLjc1cmVtO2JvcmRlcjoxcHggc29saWQgIzAwMH0ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5zZWFyY2gtaWNvbntoZWlnaHQ6MS41cmVtO3dpZHRoOjEuNXJlbX0uYWxsLWNhcmRze3BhZGRpbmc6MnJlbTtkaXNwbGF5OmdyaWQ7Z3JpZC1nYXA6MS41cmVtO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7d2lkdGg6MTAwJX0ucGFudHJ5LWNhcmRze3BhZGRpbmc6MnJlbTtkaXNwbGF5OmdyaWQ7Z3JpZC1nYXA6MS41cmVtO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7d2lkdGg6MTAwJX0uc2luZ2xlLWluZ3JlZGllbnQtY2FyZHtkaXNwbGF5OmdyaWQ7Ym9yZGVyLXJhZGl1czowLjVyZW07Z3JpZC10ZW1wbGF0ZS1yb3dzOjAuNWZyIDMuMjVmcjtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUV9LnNpbmdsZS1pbmdyZWRpZW50LWNhcmQgLmluZ3JlZGllbnQtbmFtZS1hcmVhe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uc2luZ2xlLWluZ3JlZGllbnQtY2FyZCAuaW5ncmVkaWVudC1xdWFudGl0eS1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uc2luZ2xlLWluZ3JlZGllbnQtY2FyZCBwe2ZvbnQtc2l6ZTo1MDAlO21hcmdpbjozcmVtfS5zaW5nbGUtcmVjaXBlLWNhcmR7ZGlzcGxheTpncmlkO2JvcmRlci1yYWRpdXM6MC41cmVtO2dyaWQtdGVtcGxhdGUtcm93czowLjI1ZnIgM2ZyIDAuNWZyO2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTtib3gtc2hhZG93OjAgMCAzcHggIzAwMH0uc2luZ2xlLXJlY2lwZS1jYXJkIC5hbGwtY2FyZC1pY29uc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjkwJTtoZWlnaHQ6M3JlbTttYXJnaW46YXV0b30uc2luZ2xlLXJlY2lwZS1jYXJkIC5jYXJkLWljb257aGVpZ2h0OjJyZW07d2lkdGg6MnJlbX0uc2luZ2xlLXJlY2lwZS1jYXJkIC5yZWNpcGUtbmFtZXt0ZXh0LWFsaWduOmNlbnRlcn0uc2luZ2xlLXJlY2lwZS1jYXJkIC5jYXJkLWltYWdlLXNlY3Rpb257ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5zaW5nbGUtcmVjaXBlLWNhcmQgLmNhcmQtaW1hZ2V7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO3dpZHRoOjkzJTtoZWlnaHQ6YXV0b30udXNlci1pbmZve21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NDAlfS5tZW51LXNlbGVjdGlvbjpob3Zlciwuc2VhcmNoLWljb246aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9Lm1lbnUtc2VsZWN0aW9uOmFjdGl2ZSwuc2VhcmNoLWljb246YWN0aXZle2JhY2tncm91bmQtY29sb3I6I0MzQzJDNn0uY2FyZC1idXR0b257Ym9yZGVyOjFweCBzb2xpZCAjMDAwO2hlaWdodDoyN3B4O21hcmdpbjozcHh9LmFkZC1idXR0b257YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMiV9LmFkZHt3aWR0aDoxMDAlfS5mYXZvcml0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7d2lkdGg6MTMlfS5jYXJke2JhY2tncm91bmQtY29sb3I6I0Q3RjJGRTtib3JkZXI6M3B4IHNvbGlkICMwMDA7d2lkdGg6MTAwJX0uYWxse2dyaWQtZ2FwOjBweDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDEsIDFmcil9LmFsbC1yZWNpcGUtaW5mbyxvbHtjb2xvcjojRUJGNUVFO2ZvbnQtc2l6ZToyMjAlO3dpZHRoOjEwMCV9aDN7cGFkZGluZzoxcmVtIDAgMXJlbSAwO2NvbG9yOiMwMDA7Zm9udC1zaXplOjJyZW19LnJlY2lwZS1uYW1le2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjE1MCU7dGV4dC1hbGlnbjpjZW50ZXJ9LmNhcmQtcGljdHVyZTpob3ZlcntvcGFjaXR5OjAuN30uY2FyZC1waWN0dXJlOmFjdGl2ZXtib3JkZXI6MnB4IHNvbGlkICMwMDB9bWFpbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMzc1MTVDO2hlaWdodDphdXRvO3dpZHRoOjEwMCV9LmZhdm9yaXRlLWFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH1AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpey5hbGwtY2FyZHN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpfX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXsuYWxsLWNhcmRze2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMywgMWZyKX19XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIENvb2tib29rIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IGRhdGE7XG4gIH1cblxuICBmaW5kUmVjaXBlKHNlYXJjaFRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICByZXR1cm4gKGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSkgfHxcbiAgICAgICAgKHJlY2lwZS5uYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29rYm9vaztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImxldCBmYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxubGV0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xuY29uc3QgcmVjaXBlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNhcmRzJyk7XG5sZXQgcGFudHJ5QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW50cnktY2FyZHMnKTtcbmxldCByZWNpcGVTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlY2lwZXMtaW5wdXQnKTtcbmxldCBtZW51TXlVcGNvbWluZ1JlY2lwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1teS11cGNvbWluZy1yZWNpcGVzLXRpdGxlJyk7XG5sZXQgcmVjaXBlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtZGlzcGxheScpO1xuXG5sZXQgZG9tVXBkYXRlcyA9IHtcbiAgcmFuZG9tTnVtYmVyIDogIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQ5KSArIDEsXG5cbiAgIGRpc3BsYXlBbGxSZWNpcGVzKHJlY2lwZXMsIGN1cnJlbnRVc2VyKSB7XG4gICAgXG4gICAgbGV0IGZhdm9yaXRlcyA9IGN1cnJlbnRVc2VyLmZhdm9yaXRlUmVjaXBlc1xuXG4gICAgaWYgKHJlY2lwZUNhcmRzID09PSBudWxsICkge1xuICAgICAgcmV0dXJuIFxuICAgIH1cbiAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgPSAnJ1xuICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgbGV0IHNyYyA9IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnXCJcbiAgICAgIGlmIChmYXZvcml0ZXMgIT09IHVuZGVmaW5lZCAmJiBmYXZvcml0ZXMuaW5jbHVkZXMoU3RyaW5nKHJlY2lwZS5pZCkgKSkge1xuICAgICAgICAgc3JjID0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcIlxuICAgICAgfVxuICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZS5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmRcIj5cbiAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiYWxsLWNhcmQtaWNvbnNcIj5cbiAgICAgICAgICAgPGltZyBjbGFzcz1cInBsdXMtaWNvbiBjYXJkLWljb25cIiB0YWJpbmRleD1cIjBcIiBzcmM9XCIuL2ltYWdlcy9wbHVzLWljb24ucG5nXCIgYWx0PVwic2hvdyByZWNpcGUgZGV0YWlscyBidXR0b25cIj5cbiAgICAgICAgICAgPGltZyBjbGFzcz1cInN0YXItaWNvbiBjYXJkLWljb25cIiB0YWJpbmRleD1cIjBcIiBzcmM9JHtzcmN9IGFsdD1cImFkZCB0byBmYXZvcml0ZXMgYnV0dG9uXCI+XG4gICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmQtaW1hZ2Utc2VjdGlvblwiPlxuICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHRhYmluZGV4PVwiMFwiIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiIGFsdD1cImltYWdlIG9mICR7cmVjaXBlLm5hbWV9XCI+XG4gICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1uYW1lLWFyZWFcIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlLW5hbWVcIiB0YWJpbmRleD1cIjBcIj4ke3JlY2lwZS5uYW1lfTwvaDI+XG4gICAgICAgICA8L2FydGljbGU+XG4gICAgICAgPC9hcnRpY2xlPmBcbiAgICAgIH0pXG5cbiAgfSxcblxuICBkaXNwbGF5UmVjaXBlSW5mbyhyZWNpcGUsIGluZ3JlZGllbnRzKSB7XG4gICAgbGV0IHRydWVJbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zLm1hcChpbnN0cnVjdGlvbiA9PiB7XG4gICAgICByZXR1cm4gaW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb247XG4gICAgfSkuam9pbignLCcpXG5cbiAgICByZWNpcGVEaXNwbGF5LmlubmVySFRNTCArPSBcbiAgICBgPHNlY3Rpb24gY2xhc3M9XCJyZWNpcGUtZGlzcGxheS1tYWluXCI+XG4gICAgPGgxPiR7cmVjaXBlLm5hbWV9PC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWluZ3JlZGllbnRzLXdpdGgtY29zdFwiPlxuICAgICAgPHAgY2xhc3M9XCJwb3B1cC1pbmdyZWRpZW50c1wiPiR7SlNPTi5zdHJpbmdpZnkocmVjaXBlLmluZ3JlZGllbnRzKX08L3A+XG4gICAgICA8aDMgY2xhc3M9XCJwb3AtY29zdHNcIj4ke3JlY2lwZS5jYWxjdWxhdGVDb3N0KCl9PC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cInJlY2lwZS1pbnN0cnVjdGlvbnNcIj4ke3RydWVJbnN0cnVjdGlvbnN9PC9wPlxuPC9zZWN0aW9uPmBcbiAgfSxcblxuICBzaG93UmVjaXBlUG9wdXAoKSB7XG4gICAgcmVjaXBlRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSxcblxuICBoaWRlUmVjaXBlUG9wdXAoKSB7XG4gICAgcmVjaXBlRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSxcbiAgXG4gICBncmVldFVzZXIodXNlcikge1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xuICAgIGlmKHVzZXJOYW1lID09PSBudWxsKXtcbiAgICAgIHJldHVybiBcbiAgICB9XG4gICAgdXNlck5hbWUuaW5uZXJUZXh0ICs9ICcgJyArIHVzZXIubmFtZS5zcGxpdCgnICcpWzBdICsgJyAnICsgdXNlci5uYW1lLnNwbGl0KCcgJylbMV1bMF07XG4gIH0sXG4gIFxuICAgZGlzcGxheVBhbnRyeShwYW50cnkpIHtcbiAgICBpZihwYW50cnlBcmVhID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXG4gICAgfVxuICAgIHBhbnRyeSA9IHBhbnRyeS5jb250ZW50c1xuICAgIHBhbnRyeUFyZWEuaW5uZXJIVE1MID0gJydcbiAgICBwYW50cnkuZm9yRWFjaChpbmdJblBhbnRyeSA9PiB7XG4gICAgICBwYW50cnlBcmVhLmlubmVySFRNTCArPSBgPGFydGljbGUgY2xhc3M9XCJzaW5nbGUtaW5ncmVkaWVudC1jYXJkXCI+XG4gICAgPGFydGljbGUgY2xhc3M9XCJpbmdyZWRpZW50LW5hbWUtYXJlYVwiPlxuICAgICAgPGgyIGNsYXNzPVwiaW5ncmVkaWVudC1uYW1lXCIgdGFiaW5kZXg9XCIwXCI+JHtpbmdJblBhbnRyeS5uYW1lfTwvaDI+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxhcnRpY2xlIGNsYXNzPVwiaW5ncmVkaWVudC1xdWFudGl0eS1zZWN0aW9uXCI+XG4gICAgICA8YnV0dG9uIGFsdD1cImRlY3JlbWVudCBpbmdyZWRpZW50IHF1YW50aXR5IGJ1dHRvblwiPi08L2J1dHRvbj5cbiAgICAgIDxwIGNsYXNzID0gJ2luZ3JlZGllbnQtcXVhbnRpdHknIHRhYmluZGV4PVwiMFwiPiR7aW5nSW5QYW50cnkuYW1vdW50fTwvcD5cbiAgICAgIDxidXR0b24gYWx0PVwiaW5jcmltZW50IGluZ3JlZGllbnQgcXVhbnRpdHkgYnV0dG9uXCI+KzwvYnV0dG9uPlxuICAgIDwvYXJ0aWNsZT5cbiAgPC9hcnRpY2xlPmBcbiAgICB9KTtcbiAgfSxcblxuXG5cbiAgICBkaXNwbGF5VXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLCByZWNpcGVEYXRhcykge1xuICAgICAgaWYgKGN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LW15LXVwY29taW5nLXJlY2lwZXMtdGl0bGUnKSkge1xuICAgICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgcmVjaXBlRGF0YXMuZm9yRWFjaChyZWNpcGVEYXRhUG9pbnQgPT4ge1xuICAgICAgICBsZXQgZmF2b3JpdGVzID0gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzXG4gICAgICAgIGxldCBzcmMgPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1wiXG4gICAgICBpZiAoZmF2b3JpdGVzICE9PSB1bmRlZmluZWQgJiYgZmF2b3JpdGVzLmluY2x1ZGVzKFN0cmluZyhyZWNpcGVEYXRhUG9pbnQuaWQpICkpIHtcbiAgICAgICAgc3JjID0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcIlxuICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMoU3RyaW5nKHJlY2lwZURhdGFQb2ludC5pZCkpKSB7XG5cbiAgICAgICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgKz0gYDxhcnRpY2xlIGlkID0gJHtyZWNpcGVEYXRhUG9pbnQuaWR9IGNsYXNzPVwic2luZ2xlLXJlY2lwZS1jYXJkIFwiPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiYWxsLWNhcmQtaWNvbnNcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwbHVzLWljb24gY2FyZC1pY29uXCIgdGFiaW5kZXg9XCIwXCIgc3JjPVwiLi9pbWFnZXMvcGx1cy1pY29uLnBuZ1wiIGFsdD1cInNob3cgcmVjaXBlIGRldGFpbHNcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzdGFyLWljb24gY2FyZC1pY29uXCIgdGFiaW5kZXg9XCIwXCIgc3JjPSR7c3JjfSBhbHQ9XCJhZGQgdG8gZmF2b3JpdGVzIGJ1dHRvblwiPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmQtaW1hZ2Utc2VjdGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1hZ2VcIiB0YWJpbmRleD1cIjBcIiBzcmM9XCIke3JlY2lwZURhdGFQb2ludC5pbWFnZX1cIiBhbHQ9XCJzYW1wbGUgZGlzcGxheSBvZiByZWNpcGVcIj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWNpcGUtbmFtZS1hcmVhXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJyZWNpcGUtbmFtZVwiIHRhYmluZGV4PVwiMFwiPiR7cmVjaXBlRGF0YVBvaW50Lm5hbWV9PC9oMj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvYXJ0aWNsZT5gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gICAgIGRpc3BsYXlGYXZvcml0ZXMoZmF2b3JpdGVzKSB7XG4gICAgICAgaWYgKGZhdm9yaXRlcy5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICByZXR1cm5cbiAgICAgICB9XG4gICAgXG4gICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgZmF2b3JpdGVzLmZvckVhY2gocmVjaXBlID0+e1xuICAgICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgKz0gYDxhcnRpY2xlIGlkID0gJHtyZWNpcGUuaWR9IGNsYXNzPVwic2luZ2xlLXJlY2lwZS1jYXJkIFwiPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJhbGwtY2FyZC1pY29uc1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwicGx1cy1pY29uIGNhcmQtaWNvblwiIHRhYmluZGV4PVwiMFwiIHNyYz1cIi4vaW1hZ2VzL3BsdXMtaWNvbi5wbmdcIiBhbHQ9XCJzaG93IHJlY2lwZSBkZXRhaWxzIGJ1dHRvblwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwic3Rhci1pY29uIGNhcmQtaWNvblwiIHRhYmluZGV4PVwiMFwiIHNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1wiIGFsdD1cImFkZCB0byBmYXZvcml0ZXMgYnV0dG9uXCI+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmQtaW1hZ2Utc2VjdGlvblwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHRhYmluZGV4PVwiMFwiIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiIGFsdD1cImltYWdlIG9mICR7cmVjaXBlLm5hbWV9XCI+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1uYW1lLWFyZWFcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlLW5hbWVcIiB0YWJpbmRleD1cIjBcIj4ke3JlY2lwZS5uYW1lfTwvaDI+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9hcnRpY2xlPmBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIC8vIGZ1bmN0aW9uIHZpZXdGYXZvcml0ZXMoKSB7XG4vLyAgIGlmIChjYXJkQXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbCcpKSB7XG4vLyAgICAgY2FyZEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnYWxsJylcbi8vICAgfVxuLy8gICBpZiAoIXVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCkge1xuLy8gICAgIGZhdkJ1dHRvbi5pbm5lckhUTUwgPSAnWW91IGhhdmUgbm8gZmF2b3JpdGVzISc7XG4vLyAgICAgcG9wdWxhdGVDYXJkcyhjb29rYm9vay5yZWNpcGVzKTtcbi8vICAgICByZXR1cm5cbi8vICAgfSBlbHNlIHtcbi8vICAgICBmYXZCdXR0b24uaW5uZXJIVE1MID0gJ1JlZnJlc2ggRmF2b3JpdGVzJ1xuLy8gICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuLy8gICAgIHVzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbi8vICAgICAgIGNhcmRBcmVhLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8ZGl2IGlkPScke3JlY2lwZS5pZH0nXG4vLyAgICAgICBjbGFzcz0nY2FyZCc+XG4vLyAgICAgICA8aGVhZGVyIGlkPScke3JlY2lwZS5pZH0nIGNsYXNzPSdjYXJkLWhlYWRlcic+XG4vLyAgICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbi8vICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfScgYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24nPlxuLy8gICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0nYWRkJ1xuLy8gICAgICAgc3JjPSdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMzIvMzIzMzkuc3ZnJyBhbHQ9J0FkZCB0b1xuLy8gICAgICAgcmVjaXBlcyB0byBjb29rJz48L2J1dHRvbj5cbi8vICAgICAgIDxsYWJlbCBmb3I9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlXG4vLyAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9JyBhcmlhLWxhYmVsPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdmYXZvcml0ZSBmYXZvcml0ZS1hY3RpdmUgY2FyZC1idXR0b24nPlxuLy8gICAgICAgPC9idXR0b24+PC9oZWFkZXI+XG4vLyAgICAgICA8c3BhbiBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0ncmVjaXBlLW5hbWUnPiR7cmVjaXBlLm5hbWV9PC9zcGFuPlxuLy8gICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9JyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZSdcbi8vICAgICAgIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J0Zvb2QgZnJvbSByZWNpcGUnPlxuLy8gICAgICAgPC9kaXY+YClcbi8vICAgICB9KVxuLy8gICB9XG4vLyB9XG5cblxuXG4vLyBmdW5jdGlvbiBmYXZvcml0ZUNhcmQoZXZlbnQpIHtcbi8vICAgbGV0IHNwZWNpZmljUmVjaXBlID0gY29va2Jvb2sucmVjaXBlcy5maW5kKHJlY2lwZSA9PiB7XG4vLyAgICAgaWYgKHJlY2lwZS5pZCAgPT09IE51bWJlcihldmVudC50YXJnZXQuaWQpKSB7XG4vLyAgICAgICByZXR1cm4gcmVjaXBlO1xuLy8gICAgIH1cbi8vICAgfSlcbi8vICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZS1hY3RpdmUnKSkge1xuLy8gICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS1hY3RpdmUnKTtcbi8vICAgICBmYXZCdXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcgRmF2b3JpdGVzJztcbi8vICAgICB1c2VyLmFkZFRvRmF2b3JpdGVzKHNwZWNpZmljUmVjaXBlKTtcbi8vICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZS1hY3RpdmUnKSkge1xuLy8gICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZS1hY3RpdmUnKTtcbi8vICAgICB1c2VyLnJlbW92ZUZyb21GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUpXG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gY2FyZEJ1dHRvbkNvbmRpdGlvbmFscyhldmVudCkge1xuLy8gICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUnKSkge1xuLy8gICAgIGZhdm9yaXRlQ2FyZChldmVudCk7XG4vLyAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1waWN0dXJlJykpIHtcbi8vICAgICBkaXNwbGF5RGlyZWN0aW9ucyhldmVudCk7XG4vLyAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpKSB7XG4vLyAgICAgZmF2QnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4vLyAgICAgcG9wdWxhdGVDYXJkcyhjb29rYm9vay5yZWNpcGVzKTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlEaXJlY3Rpb25zKGV2ZW50KSB7XG4vLyAgIGxldCBuZXdSZWNpcGVJbmZvID0gY29va2Jvb2sucmVjaXBlcy5maW5kKHJlY2lwZSA9PiB7XG4vLyAgICAgaWYgKHJlY2lwZS5pZCA9PT0gTnVtYmVyKGV2ZW50LnRhcmdldC5pZCkpIHtcbi8vICAgICAgIHJldHVybiByZWNpcGU7XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICBsZXQgcmVjaXBlT2JqZWN0ID0gbmV3IFJlY2lwZShuZXdSZWNpcGVJbmZvLCBpbmdyZWRpZW50c0RhdGEpO1xuLy8gICBsZXQgY29zdCA9IHJlY2lwZU9iamVjdC5jYWxjdWxhdGVDb3N0KClcbi8vICAgbGV0IGNvc3RJbkRvbGxhcnMgPSAoY29zdCAvIDEwMCkudG9GaXhlZCgyKVxuLy8gICBjYXJkQXJlYS5jbGFzc0xpc3QuYWRkKCdhbGwnKTtcbi8vICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gYDxoMz4ke3JlY2lwZU9iamVjdC5uYW1lfTwvaDM+XG4vLyAgIDxwIGNsYXNzPSdhbGwtcmVjaXBlLWluZm8nPlxuLy8gICA8c3Ryb25nPkl0IHdpbGwgY29zdDogPC9zdHJvbmc+PHNwYW4gY2xhc3M9J2Nvc3QgcmVjaXBlLWluZm8nPlxuLy8gICAkJHtjb3N0SW5Eb2xsYXJzfTwvc3Bhbj48YnI+PGJyPlxuLy8gICA8c3Ryb25nPllvdSB3aWxsIG5lZWQ6IDwvc3Ryb25nPjxzcGFuIGNsYXNzPSdpbmdyZWRpZW50cyByZWNpcGUtaW5mbyc+PC9zcGFuPlxuLy8gICA8c3Ryb25nPkluc3RydWN0aW9uczogPC9zdHJvbmc+PG9sPjxzcGFuIGNsYXNzPSdpbnN0cnVjdGlvbnMgcmVjaXBlLWluZm8nPlxuLy8gICA8L3NwYW4+PC9vbD5cbi8vICAgPC9wPmA7XG4vLyAgIGxldCBpbmdyZWRpZW50c1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ncmVkaWVudHMnKTtcbi8vICAgbGV0IGluc3RydWN0aW9uc1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb25zJyk7XG4vLyAgIHJlY2lwZU9iamVjdC5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuLy8gICAgIGluZ3JlZGllbnRzU3Bhbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPHVsPjxsaT5cbi8vICAgICAke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LnRvRml4ZWQoMil9ICR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fVxuLy8gICAgICR7aW5ncmVkaWVudC5uYW1lfTwvbGk+PC91bD5cbi8vICAgICBgKVxuLy8gICB9KVxuLy8gICByZWNpcGVPYmplY3QuaW5zdHJ1Y3Rpb25zLmZvckVhY2goaW5zdHJ1Y3Rpb24gPT4ge1xuLy8gICAgIGluc3RydWN0aW9uc1NwYW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGA8bGk+XG4vLyAgICAgJHtpbnN0cnVjdGlvbi5pbnN0cnVjdGlvbn08L2xpPlxuLy8gICAgIGApXG4vLyAgIH0pXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEZhdm9yaXRlcygpIHtcbi8vICAgaWYgKHVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCkge1xuLy8gICAgIHVzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbi8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mYXZvcml0ZSR7cmVjaXBlLmlkfWApLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLWFjdGl2ZScpXG4vLyAgICAgfSlcbi8vICAgfSBlbHNlIHJldHVyblxuLy8gfVxuXG4vLyBmdW5jdGlvbiBwb3B1bGF0ZUNhcmRzKHJlY2lwZXMpIHtcbi8vICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4vLyAgIGlmIChjYXJkQXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbCcpKSB7XG4vLyAgICAgY2FyZEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnYWxsJylcbi8vICAgfVxuLy8gICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbi8vICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdiBpZD0nJHtyZWNpcGUuaWR9J1xuLy8gICAgIGNsYXNzPSdjYXJkJz5cbi8vICAgICAgICAgPGhlYWRlciBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0nY2FyZC1oZWFkZXInPlxuLy8gICAgICAgICAgIDxsYWJlbCBmb3I9J2FkZC1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGFkZCByZWNpcGU8L2xhYmVsPlxuLy8gICAgICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfScgYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24nPlxuLy8gICAgICAgICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9IGZhdm9yaXRlJyBjbGFzcz0nYWRkJ1xuLy8gICAgICAgICAgICAgc3JjPSdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMzIvMzIzMzkuc3ZnJyBhbHQ9J0FkZCB0b1xuLy8gICAgICAgICAgICAgcmVjaXBlcyB0byBjb29rJz5cbi8vICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZVxuLy8gICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9JyBhcmlhLWxhYmVsPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdmYXZvcml0ZSBmYXZvcml0ZSR7cmVjaXBlLmlkfSBjYXJkLWJ1dHRvbic+PC9idXR0b24+XG4vLyAgICAgICAgIDwvaGVhZGVyPlxuLy8gICAgICAgICAgIDxzcGFuIGlkPScke3JlY2lwZS5pZH0nIGNsYXNzPSdyZWNpcGUtbmFtZSc+JHtyZWNpcGUubmFtZX08L3NwYW4+XG4vLyAgICAgICAgICAgPGltZyBpZD0nJHtyZWNpcGUuaWR9JyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZSdcbi8vICAgICAgICAgICBzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdjbGljayB0byB2aWV3IHJlY2lwZSBmb3IgJHtyZWNpcGUubmFtZX0nPlxuLy8gICAgIDwvZGl2PmApXG4vLyAgIH0pXG4vLyAgIGdldEZhdm9yaXRlcygpO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJJbmdyZWRpZW50cykge1xuICAgIHRoaXMuY29udGVudHMgPSB1c2VySW5ncmVkaWVudHM7XG4gIH1cbiAgZ2V0SWRzT2ZQYW50cnlJbmdyZWRpZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50cy5tYXAoaW5nID0+IHtcbiAgICAgIHJldHVybiBpbmcuaW5ncmVkaWVudFxuICAgIH0pXG4gIH1cbiAgZmluZFJlY2lwZUluZ3JlZGllbnRzSW5QYW50cnkocmVjaXBlKSB7XG4gICAgbGV0IGN1cnJlbnRQYW50cnlJZHMgPSB0aGlzLmdldElkc09mUGFudHJ5SW5ncmVkaWVudHMoKVxuICAgIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMuZmlsdGVyKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIGN1cnJlbnRQYW50cnlJZHMuaW5jbHVkZXMoaW5ncmVkaWVudC5pZClcbiAgICB9KVxuICB9XG4gIGRvZXNVc2VySGF2ZVJlcXVpcmVkSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFJlY2lwZUluZ3JlZGllbnRzSW5QYW50cnkocmVjaXBlKS5sZW5ndGggPT09IHJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGhcbiAgfVxuICBmaW5kV2hpY2hJbmdyZWRpZW50c0FyZVNob3J0KHJlY2lwZSkge1xuICAgIGxldCBub3RFbm91Z2ggPSB0aGlzLmZpbmRSZWNpcGVJbmdyZWRpZW50c0luUGFudHJ5KHJlY2lwZSkuZmlsdGVyKGluZyA9PiB7XG4gICAgICBsZXQgaW5ncmVkaWVudFN0b2NrID0gdGhpcy5maW5kSW5ncmVkaWVudEluUGFudHJ5KGluZykuYW1vdW50XG4gICAgICByZXR1cm4gaW5ncmVkaWVudFN0b2NrIDwgaW5nLnF1YW50aXR5LmFtb3VudFxuICAgIH0pXG4gICAgcmV0dXJuIG5vdEVub3VnaFxuICB9XG4gIGZpbmRBbW91bnRNaXNzaW5nKHJlY2lwZSkge1xuICAgIGxldCBtaXNzaW5nSW5ncmVkaWVudHMgPSB0aGlzLmZpbmRXaGljaEluZ3JlZGllbnRzQXJlU2hvcnQocmVjaXBlKVxuICByZXR1cm4gbWlzc2luZ0luZ3JlZGllbnRzLnJlZHVjZSgoZmluYWxBcnJheSwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgZmluYWxBcnJheS5wdXNoKHsgbmFtZTogaW5ncmVkaWVudC5uYW1lLCBmYWN0czogeyBpZDogaW5ncmVkaWVudC5pZCwgYW1vdW50TWlzc2luZzogaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgLSB0aGlzLmZpbmRJbmdyZWRpZW50SW5QYW50cnkoaW5ncmVkaWVudCkuYW1vdW50fX0pXG4gICAgICByZXR1cm4gZmluYWxBcnJheVxuICAgIH0sW10pXG4gIH1cbiAgaWRlbnRpZnlBbW91bnRPZkluZ3JlZGllbnRzTWlzc2luZyhyZWNpcGUpIHtcbiAgICBsZXQgaW5ncmVkaWVudHNNaXNzaW5nID0gdGhpcy5maW5kQW1vdW50TWlzc2luZyhyZWNpcGUpXG4gICAgIHJldHVybiAgaW5ncmVkaWVudHNNaXNzaW5nLnJlZHVjZSgoc3RyaW5nLCBpbmdyZWRpZW50ICk9PntcbiAgICAgIHN0cmluZyArPSBgICR7aW5ncmVkaWVudC5mYWN0cy5hbW91bnRNaXNzaW5nfSAke2luZ3JlZGllbnQubmFtZX1cXG5gXG4gICAgICByZXR1cm4gc3RyaW5nXG4gICAgfSxcIllvdSBhcmUgbWlzc2luZ1wiKVxuICB9XG4gIGNhbGN1bGF0ZUNvc3RGb3JJbmdyZWRpZW50cyhyZWNpcGUsIEFsbEluZ3JlZGllbnRzKSB7XG4gICAgbGV0IGFsbE1pc3NpbmcgPSB0aGlzLmZpbmRBbW91bnRNaXNzaW5nKHJlY2lwZSlcbiAgICByZXR1cm4gYWxsTWlzc2luZy5yZWR1Y2UoKGNvc3QsIGluZ3JlZGllbnQpID0+e1xuICAgICAgbGV0IGN1cnJlbnRJbmcgPSBBbGxJbmdyZWRpZW50cy5maW5kKGluZyA9PntcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQuZmFjdHMuaWQgPT09IGluZy5pZFxuICAgICAgfSlcbiAgICAgIHJldHVybiBjdXJyZW50SW5nLmVzdGltYXRlZENvc3RJbkNlbnRzICogaW5ncmVkaWVudC5mYWN0cy5hbW91bnRNaXNzaW5nXG4gICAgfSwgMClcbiAgfVxuICBhZGROZWNlc3NhcnlJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICBsZXQgYWxsTWlzc2luZyA9ICB0aGlzLmZpbmRBbW91bnRNaXNzaW5nKHJlY2lwZSlcbiAgICByZXR1cm4gYWxsTWlzc2luZy5tYXAoaW5nID0+e1xuICAgICAgcmV0dXJuIHtbXCJpbmdyZWRpZW50XCJdOiBpbmcuZmFjdHMuaWQsXG4gICAgICAgIFtcImFtb3VudFwiXTogaW5nLmZhY3RzLmFtb3VudE1pc3Npbmd9XG4gICAgfSkgXG4gIH1cbiAgZmluZEluZ3JlZGllbnRJblBhbnRyeShpbmdyZWRpZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHMuZmluZChwYW50cnlJbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBwYW50cnlJbmdyZWRpZW50LmluZ3JlZGllbnQgPT09IGluZ3JlZGllbnQuaWRcbiAgICB9KVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYW50cnk7IiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdCgpIHtcbiAgICBsZXQgY29zdENvdW50ZXIgPSAwO1xuICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZpbmQoc3BlY2lmaWNJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKHNwZWNpZmljSW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIGNvc3RDb3VudGVyICs9IChOdW1iZXIoc3BlY2lmaWNJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzKSAqXG4gICAgICAgICAgTnVtYmVyKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gY29zdENvdW50ZXIgLyAxMDA7XG4gIH1cbiAgcmV0dXJuSW5zdHJ1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9uc1xuICB9XG4gIGZpbHRlckJ5VGFnKGxldHRlcikge1xuICAgIHZhciB0YWdzID0gIHRoaXMudGFncy5maWx0ZXIodGFnID0+e1xuICAgICAgcmV0dXJuIHRhZy5zcGxpdCgnJykuaW5jbHVkZXMobGV0dGVyLnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcbiAgICByZXR1cm4gdGFnc1xuICB9XG4gIGNvbnRhaW5zSW5ncmVkaWVudChpbnB1dEluZ3JlZGllbnQpIHsgXG4gICAgbGV0IGZpbHRlcmRBcnJheSA9IHRoaXMuaW5ncmVkaWVudHMuZmlsdGVyKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhpbnB1dEluZ3JlZGllbnQudG9Mb3dlckNhc2UoKSlcbiAgICB9KVxuICAgIGlmIChmaWx0ZXJkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgc2VhcmNoQnlJbmdyZWRpZW50KGlucHV0SW5ncmVkaWVudCkge1xuICAgIHZhciBpbmcgPSAgdGhpcy5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhpbnB1dEluZ3JlZGllbnQudG9Mb3dlckNhc2UoKSlcbiAgICB9KVxuICAgIGlmIChpbmcubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIGluZy5uYW1lXG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlO1xuIiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuc2Nzcyc7XG5cblxuaW1wb3J0IFBhbnRyeSBmcm9tICcuL3BhbnRyeSc7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgQ29va2Jvb2sgZnJvbSAnLi9jb29rYm9vayc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xubGV0IHJlY2lwZURhdGFzO1xubGV0IGluZ3JlZGllbnRzRGF0YTtcbmxldCBjdXJyZW50VXNlcjtcbmxldCBmYXZvcml0ZXM7XG5cbmxldCBteVBhbnRyeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW15LXBhbnRyeScpXG5sZXQgbXlSZWNpcGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbXktdXBjb21pbmctcmVjaXBlcycpXG5sZXQgbXlGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1mYXZvcml0ZXMnKVxuXG5cblxubGV0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tZW51LXNlbGVjdGlvbnMnKVxubGV0IGhhbWJ1cmdlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKVxubGV0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LW1lbnUnKVxubGV0IG1lbnVNeVVwY29taW5nUmVjaXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW15LXVwY29taW5nLXJlY2lwZXMtdGl0bGUnKTtcbmxldCBmYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxubGV0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xuY29uc3QgcmVjaXBlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNhcmRzJyk7XG5sZXQgcGFudHJ5QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW50cnktY2FyZHMnKTtcbmxldCByZWNpcGVTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlY2lwZXMtaW5wdXQnKVxubGV0IHJlY2lwZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLWRpc3BsYXknKTtcbnJlY2lwZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpPT57XG4gIGlmKGZhdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSl7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhmaWx0ZXJJbnB1dHMocmVjaXBlU2VhcmNoLnZhbHVlLGluZ3JlZGllbnRzRGF0YSwnZmF2b3JpdGVSZWNpcGVzJyksY3VycmVudFVzZXIpXG5cbiAgfVxuICBlbHNlIGlmKG1lbnVNeVVwY29taW5nUmVjaXBlcy5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSl7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhmaWx0ZXJJbnB1dHMocmVjaXBlU2VhcmNoLnZhbHVlLGluZ3JlZGllbnRzRGF0YSwncmVjaXBlc1RvQ29vaycpLGN1cnJlbnRVc2VyKVxuXG4gIH1cbiAgZWxzZXtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhmaWx0ZXJJbnB1dHMocmVjaXBlU2VhcmNoLnZhbHVlLGluZ3JlZGllbnRzRGF0YSksY3VycmVudFVzZXIpXG4gIH1cbn0pXG5mYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBpZighZmF2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5RmF2b3JpdGVzKGZpbmRGYXZvcml0ZXMoY3VycmVudFVzZXIscmVjaXBlRGF0YXMsJ2Zhdm9yaXRlUmVjaXBlcycpKVxuICAgIGZhdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJylcbiAgfVxuICBlbHNle1xuICAgIGZhdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJylcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlBbGxSZWNpcGVzKHJlY2lwZURhdGFzLGN1cnJlbnRVc2VyKVxuICB9XG59KVxubWVudU15VXBjb21pbmdSZWNpcGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcbiAgICAgIGlmKCFtZW51TXlVcGNvbWluZ1JlY2lwZXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpIHtcbiAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5VXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLHJlY2lwZURhdGFzKVxuICAgICAgICBtZW51TXlVcGNvbWluZ1JlY2lwZXMuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBtZW51TXlVcGNvbWluZ1JlY2lwZXMuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhyZWNpcGVEYXRhcyxjdXJyZW50VXNlcilcbiAgICAgIH1cbn0pXG5cbnJlY2lwZURpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21VcGRhdGVzLmhpZGVSZWNpcGVQb3B1cCk7XG5cbnJlY2lwZUNhcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3Rhci1pY29uJykpIHtcbiAgdG9nZ2xlRmF2b3JpdGVzKGV2ZW50KVxufVxuaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsdXMtaWNvbicpKSB7XG4gIGFkZFRvVXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLCByZWNpcGVEYXRhcyk7XG59XG5pZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1pbWFnZScpKSB7XG4gIGRvbVVwZGF0ZXMuc2hvd1JlY2lwZVBvcHVwKCk7XG4gIGxldCBjaG9zZW5SZWNpcGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNpbmdsZS1yZWNpcGUtY2FyZCcpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVJlY2lwZUluZm8oY3JlYXRlUmVjaXBlKGNob3NlblJlY2lwZS5pZCkpXG59XG59KVxuXG5mdW5jdGlvbiBnZXRSZWNpcGVJbmdyZWRpZW50TmFtZXMoKSB7XG4gIC8vYWNjZXNzIHRoZSBpbmdyZWRpZW50cyBmcm9tIGluZ3JlZGllbnREYXRhXG4gIC8vY29tcGFyZSBlYWNoIGluZ3JlZGllbnQgYW5kIHNlZSBpZiB0aGUgaW5ncmVkaWVudFxuICAvL2lzIGluY2x1ZGVkIGluIHRoZSByZWNpcGUuaW5ncmVkaWVudHMgKGJ5IElEKVxuICAvL2lmIHRydWUgPT4gcmV0dXJucyB0aGUgaW5ncmVkaWVudCB0aGF0IG1hdGNoZXNcbiAgLy9zZXQgdGhvc2UgaW5jbHVkZWQgaW5ncmVkaWVudHMgdG8gYSB2YXJpYWJsZVxuICAvL2ZvciBlYWNoIG9mIHRob3NlIGZvdW5kIGluZ3JlZGllbnRzLCByZWFzc2lnblxuICAvL3ZhbHVlcyBieSBjcmVhdGluZyBuZXcga2V5c1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGYXZvcml0ZXMoZXZlbnQpe1xuICBpZihldmVudC50YXJnZXQuc3JjID09PSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1wiKXtcbiAgICBldmVudC50YXJnZXQuc3JjID0gICBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1wiXG4gICAgYWRkVG9GYXZvcml0ZXMoZXZlbnQpXG4gIH1lbHNleyAgIFxuICAgIHJlbW92ZUZyb21GYXZvcml0ZXMoZXZlbnQpXG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9ICBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1wiIH1cbn1cbmZ1bmN0aW9uIGFkZFRvRmF2b3JpdGVzKGV2ZW50KXtcbmxldCByZWNpcGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNpbmdsZS1yZWNpcGUtY2FyZCcpXG5jdXJyZW50VXNlci5hZGRUb0Zhdm9yaXRlcyhyZWNpcGUuaWQpXG59XG5mdW5jdGlvbiByZW1vdmVGcm9tRmF2b3JpdGVzKGV2ZW50KSB7XG4gIGZhdm9yaXRlcyA9IGN1cnJlbnRVc2VyLmZhdm9yaXRlUmVjaXBlc1xuICBsZXQgcmVjaXBlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zaW5nbGUtcmVjaXBlLWNhcmQnKVxuICBpZihmYXZvcml0ZXMuaW5jbHVkZXMocmVjaXBlLmlkKSl7XG4gICAgY3VycmVudFVzZXIucmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUuaWQpXG4gIH1cbn1cblxuLy8gd2luZG93Lm9ubG9hZCA9IG9uU3RhcnR1cCgpO1xuLy8gd2luZG93Lm9ubG9hZCA9IHNob3dEb21VcGRhdGVzKHJlY2lwZSk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIG1lcmdlRmV0Y2hUaW1lbGluZXMoKVxufVxuZnVuY3Rpb24gY3JlYXRlVXNlcih1c2Vyc0RhdGEpIHtcbiAgbGV0IGN1cnJlbnRVc2VyID0gdXNlcnNEYXRhLmZpbmQodXNlciA9PiB7XG4gICAgbGV0IHBhcnNlZElEID0gcGFyc2VJbnQodXNlci5pZCk7XG4gICAgcmV0dXJuIHBhcnNlZElEID09PSBkb21VcGRhdGVzLnJhbmRvbU51bWJlclxuICB9KVxuICByZXR1cm4gbmV3IFVzZXIoY3VycmVudFVzZXIuaWQsY3VycmVudFVzZXIubmFtZSxjdXJyZW50VXNlci5wYW50cnkpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlY2lwZShpZCkge1xuICBsZXQgY3VycmVudFJlY2lwZSA9IHJlY2lwZURhdGFzLmZpbmQocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLmlkID09IGlkO1xuICB9KVxuICBjb25zb2xlLmxvZyhjdXJyZW50UmVjaXBlKVxuICByZXR1cm4gbmV3IFJlY2lwZShjdXJyZW50UmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpXG5cbn07XG5cbmZ1bmN0aW9uIGFkZFRvVXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyKSB7XG4gIGxldCByZWNpcGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNpbmdsZS1yZWNpcGUtY2FyZCcpXG4gIGN1cnJlbnRVc2VyLmFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUuaWQpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUGFudHJ5KGN1cnJlbnRVc2VyLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgY3VycmVudFVzZXIucGFudHJ5LmZvckVhY2gocGFudHJ5SXRlbSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmdyZWRpZW50ID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gcGFudHJ5SXRlbS5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkO1xuICAgIH0pXG4gICAgaWYoIXBhbnRyeUl0ZW0ubmFtZSl7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgIHBhbnRyeUl0ZW0ubmFtZSA9IGN1cnJlbnRJbmdyZWRpZW50Lm5hbWU7XG4gICAgcGFudHJ5SXRlbS5lc3RpbWF0ZWRDb3N0SW5DZW50cyA9IGN1cnJlbnRJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzO1xuICB9KVxuICAvL3doYXQgaWYgd2UgbWFkZSBhIGNsYXNzIGhlcmU/XG4gIHJldHVybiBuZXcgUGFudHJ5KGN1cnJlbnRVc2VyLnBhbnRyeSlcbn1cblxuZnVuY3Rpb24gZ3JhYlJlY2lwZXMoKSB7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3JlY2lwZXMvcmVjaXBlRGF0YScpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4ocmVjaXBlT2JqZWN0ID0+IHtcbiAgICByZWNpcGVEYXRhcyA9IHJlY2lwZU9iamVjdC5yZWNpcGVEYXRhXG4gIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgYWxlcnQoJ1NvcnJ5LCB0aGUgcmVjaXBlcyBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpfSlcbn1cblxuZnVuY3Rpb24gZ3JhYlVzZXJzKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScsKVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICB9KVxuICAudGhlbihkYXRhID0+IHtcbiAgICBkb21VcGRhdGVzLmdyZWV0VXNlcihkYXRhLndjVXNlcnNEYXRhW2RvbVVwZGF0ZXMucmFuZG9tTnVtYmVyIC0xXSlcbiAgICAgcmV0dXJuIGRhdGEud2NVc2Vyc0RhdGE7XG4gICAgICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSB1c2VyIGluZm9ybWF0aW9uIGZhaWxlZCB0byBsb2FkLiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gIH0pXG59XG4gIGZ1bmN0aW9uIGdyYWJJbmdyZWRpZW50cygpIHtcbiAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvaW5ncmVkaWVudHMvaW5ncmVkaWVudHNEYXRhJylcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICB9KS50aGVuKGluZ3JlZGllbnREYXRhID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50RGF0YS5pbmdyZWRpZW50c0RhdGE7XG4gICAgICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSBpbmdyZWRpZW50cyBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpOyAgICBcbn0pXG59XG5mdW5jdGlvbiBtZXJnZUZldGNoVGltZWxpbmVzKCkge1xuIFByb21pc2UuYWxsKFtncmFiVXNlcnMoKSwgZ3JhYkluZ3JlZGllbnRzKCksIGdyYWJSZWNpcGVzKCldKVxuIC50aGVuKHZhbHVlcyA9PiB7XG4gICBsZXQgdXNlcnNEYXRhID0gdmFsdWVzWzBdO1xuICAgaW5ncmVkaWVudHNEYXRhID0gdmFsdWVzWzFdO1xuICAgIGN1cnJlbnRVc2VyID0gY3JlYXRlVXNlcih1c2Vyc0RhdGEpXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhyZWNpcGVEYXRhcyxjdXJyZW50VXNlcik7XG4gICBsZXQgcGFudHJ5ID0gY3JlYXRlUGFudHJ5KGN1cnJlbnRVc2VyLGluZ3JlZGllbnRzRGF0YSlcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlQYW50cnkocGFudHJ5KVxuICAgIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGFsZXJ0KCdTb3JyeSwgdGhlIGluZm9ybWF0aW9uIGZhaWxlZCB0byBsb2FkLiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gIH0pIFxufVxuZnVuY3Rpb24gZmluZEZhdm9yaXRlcyhjdXJyZW50VXNlcixyZWNpcGVEYXRhcyxjdXJyZW50VXNlclByb3BlcnR5KSB7XG4gIGxldCBpZHMgPSBjdXJyZW50VXNlcltjdXJyZW50VXNlclByb3BlcnR5XVxuICBsZXQgZmF2b3JpdGVSZWNpcGllcyA9IHJlY2lwZURhdGFzLmZpbHRlcihyZWNpcGUgPT57XG4gICAgcmV0dXJuIGlkcy5pbmNsdWRlcyhTdHJpbmcocmVjaXBlLmlkKSlcbiAgfSlcbiAgcmV0dXJuIGZhdm9yaXRlUmVjaXBpZXNcbn1cbmZ1bmN0aW9uIGZpbHRlcklucHV0cyhsZXR0ZXJzLGluZ3JlZGllbnRzRGF0YSxjdXJyZW50VXNlclByb3BlcnR5KXtcbiAgaWYobGV0dGVycyA9PT0gJycpe1xuICAgIHJldHVybiBcbiAgfVxuICBsZXR0ZXJzID0gbGV0dGVycy50cmltKClcbiAgbGV0IGFycmF5VG9GaWx0ZXI7XG4gIGlmKGN1cnJlbnRVc2VyUHJvcGVydHkgPT09IHVuZGVmaW5lZCl7XG4gICAgIGFycmF5VG9GaWx0ZXIgPSByZWNpcGVEYXRhc1xuICB9XG4gIGVsc2V7XG4gICBhcnJheVRvRmlsdGVyID0gZmluZEZhdm9yaXRlcyhjdXJyZW50VXNlcixyZWNpcGVEYXRhcyxjdXJyZW50VXNlclByb3BlcnR5KTtcbiAgfVxuICBjb25zb2xlLmxvZyhsZXR0ZXJzKVxuICByZXR1cm4gYXJyYXlUb0ZpbHRlci5maWx0ZXIocmVjaXBlID0+IHtcblxuICAgIGxldCBjb3JyZWN0SW5ncmVkaWVudCAgPSBpbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50ID0+eyBcbiAgICAgIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMuZmluZChyZWNJbmdyZWRpZW50cyA9PiB7XG4gICAgICAgIHJldHVybiByZWNJbmdyZWRpZW50cy5pZCA9PT0gaW5ncmVkaWVudC5pZFxuICAgICAgfSlcbiAgICAgfSlcbiAgICByZXR1cm4gY29ycmVjdEluZ3JlZGllbnQubmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKGxldHRlcnMudG9VcHBlckNhc2UoKSkgfHwgcmVjaXBlLm5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhsZXR0ZXJzLnRvVXBwZXJDYXNlKCkpIHx8IHJlY2lwZS50YWdzLmpvaW4oJycpLmluY2x1ZGVzKGxldHRlcnMpXG4gIH0pXG59XG5cbmhhbWJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBoYW1idXJnZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBjbG9zZUljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG15UGFudHJ5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBteUZhdm9yaXRlc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbXlSZWNpcGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufSlcblxuY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgaGFtYnVyZ2VySWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBteVBhbnRyeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbXlGYXZvcml0ZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG15UmVjaXBlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn0pXG5cblxuIiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwYW50cnkpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgYWRkVG9GYXZvcml0ZXMocmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5wdXNoKHJlY2lwZSlcbiAgICB9XG4gIH1cblxuICByZW1vdmVGcm9tRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIGNvbnN0IGkgPSB0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmRleE9mKHJlY2lwZSk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMuc3BsaWNlKGksIDEpXG4gIH1cblxuICBmaWx0ZXJGYXZvcml0ZXModGFnKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZyk7XG4gICAgfSlcbiAgfVxuXG4gIGZpbHRlclJlY2lwZXNUb0Nvb2sodGFnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlc1RvQ29vay5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpO1xuICAgIH0pXG4gIH1cblxuICBmaW5kRmF2b3JpdGVzKHN0cmdUb1NyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaClcbiAgICAgIHx8IHJlY2lwZS5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjaGVja1BhbnRyeShyZWNpcGUpIHtcbiAgICBjb25zdCBhbGxQYW50cnlJdGVtc0lEID0gdGhpcy5wYW50cnkubWFwKHBhbnRyeUl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHBhbnRyeUl0ZW0uaW5ncmVkaWVudDtcbiAgICB9KVxuICAgIGNvbnN0IG1pc3NpbmdJbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gIShhbGxQYW50cnlJdGVtc0lELmluY2x1ZGVzKGluZ3JlZGllbnQuaW5ncmVkaWVudCkpO1xuICAgIH0pXG4gICAgaWYgKG1pc3NpbmdJbmdyZWRpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBgWW91IGhhdmUgYWxsIHRoZSBpbmdyZWRpZW50cyBpbiB5b3VyIHBhbnRyeSFgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWlzc2luZ0luZ3JlZGllbnRzO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9
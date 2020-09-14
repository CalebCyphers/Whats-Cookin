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
exports.push([module.i, "html{display:flex;flex-direction:column;background-color:#37515C;border:2px solid #000;height:100%;width:100%}body{font-family:'Open Sans', sans-serif;width:100%}body .recipe-display{position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.3);height:100%;width:100%}body .recipe-display-main{position:fixed;left:10%;top:5rem;background-color:#EBF5EE;height:30rem;width:80%;border-radius:0.5rem}h1{margin-top:0;margin-bottom:0;padding:1rem;text-align:center;width:30%}.wrapper{display:flex;justify-content:center;align-items:center}.hidden{display:none}.main-header{background-color:#EBF5EE;border-bottom:1px solid #000;display:grid;grid-template-columns:1fr 5fr 1fr;background-color:#EBF5EE;width:100%}.main-header .hamburger-menu{height:4rem;width:4rem}.main-header .x-menu{display:flex;justify-content:center;align-items:center;height:4rem;width:4rem}.main-header .header-title{text-align:center;grid-column-start:2;width:100%}.main-header .hidden{display:none}.open-menu-selections{display:flex;flex-direction:column;align-items:center;background-color:#EBF5EE}.open-menu-selections h3:hover{color:#37515C}.open-menu-selections a{text-decoration:none;font-size:2rem}.open-menu-selections a:visited{color:#000}.open-menu-selections a:hover{color:#37515C}.open-menu-selections .menu-selection{color:#000;grid-column-start:2;border-bottom:solid;text-align:center;width:50%}.open-menu-selections .menu-favorites{border:none}.page-title-and-search .page-title{text-align:center;margin:auto}.page-title-and-search .search-wrapper{display:flex;justify-content:center;align-items:center}.page-title-and-search .search-wrapper .search-icon{display:flex;height:1rem;width:1rem}.page-title-and-search .search-wrapper .search-recipes-input{height:1.5rem;width:8rem;background-color:#EBF5EE;border:1px solid #000}.page-title-and-search .search-wrapper .search-button{display:flex;justify-content:center;align-items:center;height:1.75rem;width:1.75rem;border:1px solid #000}.page-title-and-search .search-icon{height:1.5rem;width:1.5rem}.all-cards{padding:2rem;display:grid;grid-gap:1.5rem;grid-template-columns:1fr;width:100%}.pantry-cards{padding:2rem;display:grid;grid-gap:1.5rem;grid-template-columns:1fr;width:100%}.single-ingredient-card{display:grid;border-radius:0.5rem;grid-template-rows:0.5fr 3.25fr;background-color:#EBF5EE}.single-ingredient-card .ingredient-name-area{display:flex;justify-content:center;align-items:center}.single-ingredient-card .ingredient-quantity-section{display:flex;justify-content:center;align-items:center}.single-ingredient-card p{font-size:500%;margin:3rem}.single-recipe-card{display:grid;border-radius:0.5rem;grid-template-rows:0.25fr 3fr 0.5fr;background-color:#EBF5EE;box-shadow:0 0 3px #000}.single-recipe-card .all-card-icons{display:flex;justify-content:space-between;align-items:center;width:90%;height:3rem;margin:auto}.single-recipe-card .card-icon{height:2rem;width:2rem}.single-recipe-card .recipe-name{text-align:center}.single-recipe-card .card-image-section{display:flex;justify-content:center;align-items:center}.single-recipe-card .card-image{border:1px solid #000;width:93%;height:auto}.user-info{margin:0 auto;text-align:center;width:40%}.menu-selection:hover,.search-icon:hover{cursor:pointer}.menu-selection:active,.search-icon:active{background-color:#C3C2C6}.card-button{border:1px solid #000;height:27px;margin:3px}.add-button{background-color:#EBF5EE;display:flex;width:12%}.add{width:100%}.favorite{background-color:#EBF5EE;background-image:url(https://image.flaticon.com/icons/svg/149/149222.svg);background-repeat:no-repeat;background-position:center;width:13%}.card{background-color:#D7F2FE;border:3px solid #000;width:100%}.all{grid-gap:0px;grid-template-columns:repeat(1, 1fr)}.all-recipe-info,ol{color:#EBF5EE;font-size:220%;width:100%}h3{padding:1rem 0 1rem 0;color:#000;font-size:2rem}.recipe-name{display:block;font-size:150%;text-align:center}.card-picture:hover{opacity:0.7}.card-picture:active{border:2px solid #000}main{display:flex;justify-content:center;align-items:center;background-color:#37515C;height:auto;width:100%}.favorite-active{background-image:url(https://image.flaticon.com/icons/svg/148/148841.svg);background-repeat:no-repeat}@media (min-width: 800px){.all-cards{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1200px){.all-cards{grid-template-columns:repeat(3, 1fr)}}\n", ""]);



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

let domUpdates = {
  randomNumber :  Math.floor(Math.random() * 49) + 1,

  
   displayAllRecipes(recipes,currentUser) {
    
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
    recipeCards.innerHTML += `<article id = ${recipe.id} class="single-recipe-card ">
         <article class="all-card-icons">
           <img class="plus-icon card-icon" src="./images/plus-icon.png" alt="plus icon used to expand and show recipe details">
           <img class="star-icon card-icon" src=${src}
          "alt="empty star icon used to favorite and unfavorite recipes">
         </article>
         <article class="card-image-section">
           <img class="card-image" src="${recipe.image}" alt="sample display of recipe">
         </article>
         <article class="recipe-name-area">
           <h2 class="recipe-name">${recipe.name}</h2>
         </article>
       </article>`
      })

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
      <h2 class="ingredient-name">${ingInPantry.name}</h2>
    </article>
    <article class="ingredient-quantity-section">
      <button>-</button>
      <p class = 'ingredient-quantity'>${ingInPantry.amount}</p>
      <button>+</button>
    </article>
  </article>`
    });
  },



    displayUpcomingRecipes(currentUser, recipeDatas) {
  
      if (event.target.classList.contains('menu-my-upcoming-recipes-title')) {
      recipeDatas.forEach(recipeDataPoint => {
        let favorites = currentUser.favoriteRecipes
        let src = "https://image.flaticon.com/icons/svg/149/149222.svg"
      if (favorites !== undefined && favorites.includes(String(recipeDataPoint.id) )) {
        src = "https://image.flaticon.com/icons/svg/148/148841.svg"
     }
        if (currentUser.recipesToCook.includes(recipeDataPoint.id)) {
          recipeCards.innerHTML = ''
          recipeCards.innerHTML += `<article id = ${recipeDataPoint.id} class="single-recipe-card ">
          <article class="all-card-icons">
            <img class="plus-icon card-icon" src="./images/plus-icon.png" alt="plus icon used to expand and show recipe details">
            <img class="star-icon card-icon" src=${src}
           "alt="empty star icon used to favorite and unfavorite recipes">
          </article>
          <article class="card-image-section">
            <img class="card-image" src="${recipeDataPoint.image}" alt="sample display of recipe">
          </article>
          <article class="recipe-name-area">
            <h2 class="recipe-name">${recipeDataPoint.name}</h2>
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
        <img class="plus-icon card-icon" src="./images/plus-icon.png" alt="plus icon used to expand and show recipe details">
        <img class="star-icon card-icon" src="https://image.flaticon.com/icons/svg/148/148841.svg"
       "alt="empty star icon used to favorite and unfavorite recipes">
      </article>
      <article class="card-image-section">
        <img class="card-image" src="${recipe.image}" alt="sample display of recipe">
      </article>
      <article class="recipe-name-area">
        <h2 class="recipe-name">${recipe.name}</h2>
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
    return costCounter;
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

let menuMyUpcomingRecipes = document.querySelector('.menu-my-upcoming-recipes-title');
let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
const recipeCards = document.querySelector('.all-cards');
let pantryArea = document.querySelector('.pantry-cards');
let recipeSearch = document.querySelector('.search-recipes-input')
// let cookbook = new Cookbook(recipeData);
recipeSearch.addEventListener('keyup', ()=>{
  _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData),currentUser)
})
favButton.addEventListener('click', ()=>{
  if(!favButton.classList.contains('clicked')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayFavorites(findFavorites(currentUser,recipeDatas))
    favButton.classList.add('clicked')
  }
  else{
    favButton.classList.remove('clicked')
    _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayAllRecipes(recipeDatas,currentUser)
  }
})
menuMyUpcomingRecipes.addEventListener('click',() =>{
  _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayUpcomingRecipes(currentUser,recipeDatas)
})
let pantry;


recipeCards.addEventListener('click', () => {
if(event.target.classList.contains('star-icon')) {
  toogleFavorites(event)
}
if (event.target.classList.contains('plus-icon')) {
  addToUpcomingRecipes(currentUser, recipeDatas);
}
})

function toogleFavorites(event){
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
    console.log(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].randomNumber)
    return parsedID === _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].randomNumber
  })
  return new _user__WEBPACK_IMPORTED_MODULE_4__["default"](currentUser.id,currentUser.name,currentUser.pantry)
}

function addToUpcomingRecipes(currentUser, recipeDatas) {
  let recipe = event.target.closest('.single-recipe-card')
currentUser.addToFavorites(recipe.id)
  currentUser.addToRecipesToCook(recipe);
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
   let usersData = values[0]
   ingredientsData = values[1]
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
function findFavorites(currentUser,recipeDatas) {
  let ids = currentUser.favoriteRecipes
  let favoriteRecipies = recipeDatas.filter(recipe =>{
    return ids.includes(String(recipe.id))
  })
  return favoriteRecipies
}
function filterInputs(letters,ingredientsData){
  console.log(letters)
  return recipeDatas.filter(recipe=>{
    let correctIngredient  = ingredientsData.find(ingredient =>{ 
      return recipe.ingredients.find(recIngredients => {
        return recIngredients.id === ingredient.id
      })
     } )
     
    return correctIngredient.name.toUpperCase().includes(letters.toUpperCase())
  })
}





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9iYTg5Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/NGYyZSIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3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QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0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Q0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOiMzNzUxNUM7Ym9yZGVyOjJweCBzb2xpZCAjMDAwO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Ym9keXtmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjt3aWR0aDoxMDAlfWJvZHkgLnJlY2lwZS1kaXNwbGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4zKTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfWJvZHkgLnJlY2lwZS1kaXNwbGF5LW1haW57cG9zaXRpb246Zml4ZWQ7bGVmdDoxMCU7dG9wOjVyZW07YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2hlaWdodDozMHJlbTt3aWR0aDo4MCU7Ym9yZGVyLXJhZGl1czowLjVyZW19aDF7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nOjFyZW07dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MzAlfS53cmFwcGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uaGlkZGVue2Rpc3BsYXk6bm9uZX0ubWFpbi1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDA7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgNWZyIDFmcjtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7d2lkdGg6MTAwJX0ubWFpbi1oZWFkZXIgLmhhbWJ1cmdlci1tZW51e2hlaWdodDo0cmVtO3dpZHRoOjRyZW19Lm1haW4taGVhZGVyIC54LW1lbnV7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDo0cmVtO3dpZHRoOjRyZW19Lm1haW4taGVhZGVyIC5oZWFkZXItdGl0bGV7dGV4dC1hbGlnbjpjZW50ZXI7Z3JpZC1jb2x1bW4tc3RhcnQ6Mjt3aWR0aDoxMDAlfS5tYWluLWhlYWRlciAuaGlkZGVue2Rpc3BsYXk6bm9uZX0ub3Blbi1tZW51LXNlbGVjdGlvbnN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyBoMzpob3Zlcntjb2xvcjojMzc1MTVDfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyBhe3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToycmVtfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyBhOnZpc2l0ZWR7Y29sb3I6IzAwMH0ub3Blbi1tZW51LXNlbGVjdGlvbnMgYTpob3Zlcntjb2xvcjojMzc1MTVDfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyAubWVudS1zZWxlY3Rpb257Y29sb3I6IzAwMDtncmlkLWNvbHVtbi1zdGFydDoyO2JvcmRlci1ib3R0b206c29saWQ7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NTAlfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyAubWVudS1mYXZvcml0ZXN7Ym9yZGVyOm5vbmV9LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAucGFnZS10aXRsZXt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46YXV0b30ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5zZWFyY2gtd3JhcHBlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAuc2VhcmNoLXdyYXBwZXIgLnNlYXJjaC1pY29ue2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MXJlbTt3aWR0aDoxcmVtfS5wYWdlLXRpdGxlLWFuZC1zZWFyY2ggLnNlYXJjaC13cmFwcGVyIC5zZWFyY2gtcmVjaXBlcy1pbnB1dHtoZWlnaHQ6MS41cmVtO3dpZHRoOjhyZW07YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2JvcmRlcjoxcHggc29saWQgIzAwMH0ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5zZWFyY2gtd3JhcHBlciAuc2VhcmNoLWJ1dHRvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjEuNzVyZW07d2lkdGg6MS43NXJlbTtib3JkZXI6MXB4IHNvbGlkICMwMDB9LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAuc2VhcmNoLWljb257aGVpZ2h0OjEuNXJlbTt3aWR0aDoxLjVyZW19LmFsbC1jYXJkc3twYWRkaW5nOjJyZW07ZGlzcGxheTpncmlkO2dyaWQtZ2FwOjEuNXJlbTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO3dpZHRoOjEwMCV9LnBhbnRyeS1jYXJkc3twYWRkaW5nOjJyZW07ZGlzcGxheTpncmlkO2dyaWQtZ2FwOjEuNXJlbTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO3dpZHRoOjEwMCV9LnNpbmdsZS1pbmdyZWRpZW50LWNhcmR7ZGlzcGxheTpncmlkO2JvcmRlci1yYWRpdXM6MC41cmVtO2dyaWQtdGVtcGxhdGUtcm93czowLjVmciAzLjI1ZnI7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFfS5zaW5nbGUtaW5ncmVkaWVudC1jYXJkIC5pbmdyZWRpZW50LW5hbWUtYXJlYXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnNpbmdsZS1pbmdyZWRpZW50LWNhcmQgLmluZ3JlZGllbnQtcXVhbnRpdHktc2VjdGlvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnNpbmdsZS1pbmdyZWRpZW50LWNhcmQgcHtmb250LXNpemU6NTAwJTttYXJnaW46M3JlbX0uc2luZ2xlLXJlY2lwZS1jYXJke2Rpc3BsYXk6Z3JpZDtib3JkZXItcmFkaXVzOjAuNXJlbTtncmlkLXRlbXBsYXRlLXJvd3M6MC4yNWZyIDNmciAwLjVmcjtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7Ym94LXNoYWRvdzowIDAgM3B4ICMwMDB9LnNpbmdsZS1yZWNpcGUtY2FyZCAuYWxsLWNhcmQtaWNvbnN7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDo5MCU7aGVpZ2h0OjNyZW07bWFyZ2luOmF1dG99LnNpbmdsZS1yZWNpcGUtY2FyZCAuY2FyZC1pY29ue2hlaWdodDoycmVtO3dpZHRoOjJyZW19LnNpbmdsZS1yZWNpcGUtY2FyZCAucmVjaXBlLW5hbWV7dGV4dC1hbGlnbjpjZW50ZXJ9LnNpbmdsZS1yZWNpcGUtY2FyZCAuY2FyZC1pbWFnZS1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uc2luZ2xlLXJlY2lwZS1jYXJkIC5jYXJkLWltYWdle2JvcmRlcjoxcHggc29saWQgIzAwMDt3aWR0aDo5MyU7aGVpZ2h0OmF1dG99LnVzZXItaW5mb3ttYXJnaW46MCBhdXRvO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjQwJX0ubWVudS1zZWxlY3Rpb246aG92ZXIsLnNlYXJjaC1pY29uOmhvdmVye2N1cnNvcjpwb2ludGVyfS5tZW51LXNlbGVjdGlvbjphY3RpdmUsLnNlYXJjaC1pY29uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNDM0MyQzZ9LmNhcmQtYnV0dG9ue2JvcmRlcjoxcHggc29saWQgIzAwMDtoZWlnaHQ6MjdweDttYXJnaW46M3B4fS5hZGQtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTtkaXNwbGF5OmZsZXg7d2lkdGg6MTIlfS5hZGR7d2lkdGg6MTAwJX0uZmF2b3JpdGV7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO3dpZHRoOjEzJX0uY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOiNEN0YyRkU7Ym9yZGVyOjNweCBzb2xpZCAjMDAwO3dpZHRoOjEwMCV9LmFsbHtncmlkLWdhcDowcHg7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgxLCAxZnIpfS5hbGwtcmVjaXBlLWluZm8sb2x7Y29sb3I6I0VCRjVFRTtmb250LXNpemU6MjIwJTt3aWR0aDoxMDAlfWgze3BhZGRpbmc6MXJlbSAwIDFyZW0gMDtjb2xvcjojMDAwO2ZvbnQtc2l6ZToycmVtfS5yZWNpcGUtbmFtZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxNTAlO3RleHQtYWxpZ246Y2VudGVyfS5jYXJkLXBpY3R1cmU6aG92ZXJ7b3BhY2l0eTowLjd9LmNhcmQtcGljdHVyZTphY3RpdmV7Ym9yZGVyOjJweCBzb2xpZCAjMDAwfW1haW57ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6IzM3NTE1QztoZWlnaHQ6YXV0bzt3aWR0aDoxMDAlfS5mYXZvcml0ZS1hY3RpdmV7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9QG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KXsuYWxsLWNhcmRze2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgMWZyKX19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7LmFsbC1jYXJkc3tncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcil9fVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBDb29rYm9vayB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSBkYXRhO1xuICB9XG5cbiAgZmluZFJlY2lwZShzZWFyY2hUZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIChpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dCkpIHx8XG4gICAgICAgIChyZWNpcGUubmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29va2Jvb2s7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJsZXQgZmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbmxldCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmNvbnN0IHJlY2lwZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xubGV0IHBhbnRyeUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFudHJ5LWNhcmRzJyk7XG5sZXQgcmVjaXBlU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZWNpcGVzLWlucHV0Jyk7XG5sZXQgbWVudU15VXBjb21pbmdSZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbXktdXBjb21pbmctcmVjaXBlcy10aXRsZScpO1xuXG5sZXQgZG9tVXBkYXRlcyA9IHtcbiAgcmFuZG9tTnVtYmVyIDogIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQ5KSArIDEsXG5cbiAgXG4gICBkaXNwbGF5QWxsUmVjaXBlcyhyZWNpcGVzLGN1cnJlbnRVc2VyKSB7XG4gICAgXG4gICAgbGV0IGZhdm9yaXRlcyA9IGN1cnJlbnRVc2VyLmZhdm9yaXRlUmVjaXBlc1xuXG4gICAgaWYgKHJlY2lwZUNhcmRzID09PSBudWxsICkge1xuICAgICAgcmV0dXJuIFxuICAgIH1cbiAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgPSAnJ1xuICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgbGV0IHNyYyA9IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnXCJcbiAgICAgIGlmIChmYXZvcml0ZXMgIT09IHVuZGVmaW5lZCAmJiBmYXZvcml0ZXMuaW5jbHVkZXMoU3RyaW5nKHJlY2lwZS5pZCkgKSkge1xuICAgICAgICAgc3JjID0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcIlxuICAgICAgfVxuICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZS5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmQgXCI+XG4gICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImFsbC1jYXJkLWljb25zXCI+XG4gICAgICAgICAgIDxpbWcgY2xhc3M9XCJwbHVzLWljb24gY2FyZC1pY29uXCIgc3JjPVwiLi9pbWFnZXMvcGx1cy1pY29uLnBuZ1wiIGFsdD1cInBsdXMgaWNvbiB1c2VkIHRvIGV4cGFuZCBhbmQgc2hvdyByZWNpcGUgZGV0YWlsc1wiPlxuICAgICAgICAgICA8aW1nIGNsYXNzPVwic3Rhci1pY29uIGNhcmQtaWNvblwiIHNyYz0ke3NyY31cbiAgICAgICAgICBcImFsdD1cImVtcHR5IHN0YXIgaWNvbiB1c2VkIHRvIGZhdm9yaXRlIGFuZCB1bmZhdm9yaXRlIHJlY2lwZXNcIj5cbiAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZC1pbWFnZS1zZWN0aW9uXCI+XG4gICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtyZWNpcGUuaW1hZ2V9XCIgYWx0PVwic2FtcGxlIGRpc3BsYXkgb2YgcmVjaXBlXCI+XG4gICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1uYW1lLWFyZWFcIj5cbiAgICAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlLW5hbWVcIj4ke3JlY2lwZS5uYW1lfTwvaDI+XG4gICAgICAgICA8L2FydGljbGU+XG4gICAgICAgPC9hcnRpY2xlPmBcbiAgICAgIH0pXG5cbiAgfSxcbiAgXG4gICBncmVldFVzZXIodXNlcikge1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xuICAgIGlmKHVzZXJOYW1lID09PSBudWxsKXtcbiAgICAgIHJldHVybiBcbiAgICB9XG4gICAgdXNlck5hbWUuaW5uZXJUZXh0ICs9ICcgJyArIHVzZXIubmFtZS5zcGxpdCgnICcpWzBdICsgJyAnICsgdXNlci5uYW1lLnNwbGl0KCcgJylbMV1bMF07XG4gIH0sXG4gIFxuICAgZGlzcGxheVBhbnRyeShwYW50cnkpIHtcbiAgICBpZihwYW50cnlBcmVhID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXG4gICAgfVxuICAgIHBhbnRyeSA9IHBhbnRyeS5jb250ZW50c1xuICAgIHBhbnRyeUFyZWEuaW5uZXJIVE1MID0gJydcbiAgICBwYW50cnkuZm9yRWFjaChpbmdJblBhbnRyeSA9PiB7XG4gICAgICBwYW50cnlBcmVhLmlubmVySFRNTCArPSBgPGFydGljbGUgY2xhc3M9XCJzaW5nbGUtaW5ncmVkaWVudC1jYXJkXCI+XG4gICAgPGFydGljbGUgY2xhc3M9XCJpbmdyZWRpZW50LW5hbWUtYXJlYVwiPlxuICAgICAgPGgyIGNsYXNzPVwiaW5ncmVkaWVudC1uYW1lXCI+JHtpbmdJblBhbnRyeS5uYW1lfTwvaDI+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxhcnRpY2xlIGNsYXNzPVwiaW5ncmVkaWVudC1xdWFudGl0eS1zZWN0aW9uXCI+XG4gICAgICA8YnV0dG9uPi08L2J1dHRvbj5cbiAgICAgIDxwIGNsYXNzID0gJ2luZ3JlZGllbnQtcXVhbnRpdHknPiR7aW5nSW5QYW50cnkuYW1vdW50fTwvcD5cbiAgICAgIDxidXR0b24+KzwvYnV0dG9uPlxuICAgIDwvYXJ0aWNsZT5cbiAgPC9hcnRpY2xlPmBcbiAgICB9KTtcbiAgfSxcblxuXG5cbiAgICBkaXNwbGF5VXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLCByZWNpcGVEYXRhcykge1xuICBcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LW15LXVwY29taW5nLXJlY2lwZXMtdGl0bGUnKSkge1xuICAgICAgcmVjaXBlRGF0YXMuZm9yRWFjaChyZWNpcGVEYXRhUG9pbnQgPT4ge1xuICAgICAgICBsZXQgZmF2b3JpdGVzID0gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzXG4gICAgICAgIGxldCBzcmMgPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1wiXG4gICAgICBpZiAoZmF2b3JpdGVzICE9PSB1bmRlZmluZWQgJiYgZmF2b3JpdGVzLmluY2x1ZGVzKFN0cmluZyhyZWNpcGVEYXRhUG9pbnQuaWQpICkpIHtcbiAgICAgICAgc3JjID0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcIlxuICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VXNlci5yZWNpcGVzVG9Db29rLmluY2x1ZGVzKHJlY2lwZURhdGFQb2ludC5pZCkpIHtcbiAgICAgICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZURhdGFQb2ludC5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmQgXCI+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJhbGwtY2FyZC1pY29uc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBsdXMtaWNvbiBjYXJkLWljb25cIiBzcmM9XCIuL2ltYWdlcy9wbHVzLWljb24ucG5nXCIgYWx0PVwicGx1cyBpY29uIHVzZWQgdG8gZXhwYW5kIGFuZCBzaG93IHJlY2lwZSBkZXRhaWxzXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwic3Rhci1pY29uIGNhcmQtaWNvblwiIHNyYz0ke3NyY31cbiAgICAgICAgICAgXCJhbHQ9XCJlbXB0eSBzdGFyIGljb24gdXNlZCB0byBmYXZvcml0ZSBhbmQgdW5mYXZvcml0ZSByZWNpcGVzXCI+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZC1pbWFnZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHNyYz1cIiR7cmVjaXBlRGF0YVBvaW50LmltYWdlfVwiIGFsdD1cInNhbXBsZSBkaXNwbGF5IG9mIHJlY2lwZVwiPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1uYW1lLWFyZWFcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1uYW1lXCI+JHtyZWNpcGVEYXRhUG9pbnQubmFtZX08L2gyPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9hcnRpY2xlPmBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgICAgZGlzcGxheUZhdm9yaXRlcyhmYXZvcml0ZXMpIHtcbiAgICAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgIHJldHVyblxuICAgICAgIH1cbiAgICBcbiAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCA9ICcnXG4gICAgICBmYXZvcml0ZXMuZm9yRWFjaChyZWNpcGUgPT57XG4gICAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZS5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmQgXCI+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cImFsbC1jYXJkLWljb25zXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJwbHVzLWljb24gY2FyZC1pY29uXCIgc3JjPVwiLi9pbWFnZXMvcGx1cy1pY29uLnBuZ1wiIGFsdD1cInBsdXMgaWNvbiB1c2VkIHRvIGV4cGFuZCBhbmQgc2hvdyByZWNpcGUgZGV0YWlsc1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwic3Rhci1pY29uIGNhcmQtaWNvblwiIHNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1wiXG4gICAgICAgXCJhbHQ9XCJlbXB0eSBzdGFyIGljb24gdXNlZCB0byBmYXZvcml0ZSBhbmQgdW5mYXZvcml0ZSByZWNpcGVzXCI+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmQtaW1hZ2Utc2VjdGlvblwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiIGFsdD1cInNhbXBsZSBkaXNwbGF5IG9mIHJlY2lwZVwiPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWNpcGUtbmFtZS1hcmVhXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1uYW1lXCI+JHtyZWNpcGUubmFtZX08L2gyPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvYXJ0aWNsZT5gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICAvLyBmdW5jdGlvbiB2aWV3RmF2b3JpdGVzKCkge1xuLy8gICBpZiAoY2FyZEFyZWEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGwnKSkge1xuLy8gICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbCcpXG4vLyAgIH1cbi8vICAgaWYgKCF1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbi8vICAgICBmYXZCdXR0b24uaW5uZXJIVE1MID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuLy8gICAgIHBvcHVsYXRlQ2FyZHMoY29va2Jvb2sucmVjaXBlcyk7XG4vLyAgICAgcmV0dXJuXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgZmF2QnV0dG9uLmlubmVySFRNTCA9ICdSZWZyZXNoIEZhdm9yaXRlcydcbi8vICAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbi8vICAgICB1c2VyLmZhdm9yaXRlUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4vLyAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdiBpZD0nJHtyZWNpcGUuaWR9J1xuLy8gICAgICAgY2xhc3M9J2NhcmQnPlxuLy8gICAgICAgPGhlYWRlciBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0nY2FyZC1oZWFkZXInPlxuLy8gICAgICAgPGxhYmVsIGZvcj0nYWRkLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gYWRkIHJlY2lwZTwvbGFiZWw+XG4vLyAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0nIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uJz5cbi8vICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfScgY2xhc3M9J2FkZCdcbi8vICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzMyLzMyMzM5LnN2ZycgYWx0PSdBZGQgdG9cbi8vICAgICAgIHJlY2lwZXMgdG8gY29vayc+PC9idXR0b24+XG4vLyAgICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZVxuLy8gICAgICAgPC9sYWJlbD5cbi8vICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfScgYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nZmF2b3JpdGUgZmF2b3JpdGUtYWN0aXZlIGNhcmQtYnV0dG9uJz5cbi8vICAgICAgIDwvYnV0dG9uPjwvaGVhZGVyPlxuLy8gICAgICAgPHNwYW4gaWQ9JyR7cmVjaXBlLmlkfScgY2xhc3M9J3JlY2lwZS1uYW1lJz4ke3JlY2lwZS5uYW1lfTwvc3Bhbj5cbi8vICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfScgdGFiaW5kZXg9JzAnIGNsYXNzPSdjYXJkLXBpY3R1cmUnXG4vLyAgICAgICBzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbi8vICAgICAgIDwvZGl2PmApXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfVxuXG5cblxuLy8gZnVuY3Rpb24gZmF2b3JpdGVDYXJkKGV2ZW50KSB7XG4vLyAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuLy8gICAgIGlmIChyZWNpcGUuaWQgID09PSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKSkge1xuLy8gICAgICAgcmV0dXJuIHJlY2lwZTtcbi8vICAgICB9XG4vLyAgIH0pXG4vLyAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbi8vICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtYWN0aXZlJyk7XG4vLyAgICAgZmF2QnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4vLyAgICAgdXNlci5hZGRUb0Zhdm9yaXRlcyhzcGVjaWZpY1JlY2lwZSk7XG4vLyAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbi8vICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGUtYWN0aXZlJyk7XG4vLyAgICAgdXNlci5yZW1vdmVGcm9tRmF2b3JpdGVzKHNwZWNpZmljUmVjaXBlKVxuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNhcmRCdXR0b25Db25kaXRpb25hbHMoZXZlbnQpIHtcbi8vICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlJykpIHtcbi8vICAgICBmYXZvcml0ZUNhcmQoZXZlbnQpO1xuLy8gICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtcGljdHVyZScpKSB7XG4vLyAgICAgZGlzcGxheURpcmVjdGlvbnMoZXZlbnQpO1xuLy8gICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUnKSkge1xuLy8gICAgIGZhdkJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyBGYXZvcml0ZXMnO1xuLy8gICAgIHBvcHVsYXRlQ2FyZHMoY29va2Jvb2sucmVjaXBlcyk7XG4vLyAgIH1cbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5RGlyZWN0aW9ucyhldmVudCkge1xuLy8gICBsZXQgbmV3UmVjaXBlSW5mbyA9IGNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuLy8gICAgIGlmIChyZWNpcGUuaWQgPT09IE51bWJlcihldmVudC50YXJnZXQuaWQpKSB7XG4vLyAgICAgICByZXR1cm4gcmVjaXBlO1xuLy8gICAgIH1cbi8vICAgfSlcbi8vICAgbGV0IHJlY2lwZU9iamVjdCA9IG5ldyBSZWNpcGUobmV3UmVjaXBlSW5mbywgaW5ncmVkaWVudHNEYXRhKTtcbi8vICAgbGV0IGNvc3QgPSByZWNpcGVPYmplY3QuY2FsY3VsYXRlQ29zdCgpXG4vLyAgIGxldCBjb3N0SW5Eb2xsYXJzID0gKGNvc3QgLyAxMDApLnRvRml4ZWQoMilcbi8vICAgY2FyZEFyZWEuY2xhc3NMaXN0LmFkZCgnYWxsJyk7XG4vLyAgIGNhcmRBcmVhLmlubmVySFRNTCA9IGA8aDM+JHtyZWNpcGVPYmplY3QubmFtZX08L2gzPlxuLy8gICA8cCBjbGFzcz0nYWxsLXJlY2lwZS1pbmZvJz5cbi8vICAgPHN0cm9uZz5JdCB3aWxsIGNvc3Q6IDwvc3Ryb25nPjxzcGFuIGNsYXNzPSdjb3N0IHJlY2lwZS1pbmZvJz5cbi8vICAgJCR7Y29zdEluRG9sbGFyc308L3NwYW4+PGJyPjxicj5cbi8vICAgPHN0cm9uZz5Zb3Ugd2lsbCBuZWVkOiA8L3N0cm9uZz48c3BhbiBjbGFzcz0naW5ncmVkaWVudHMgcmVjaXBlLWluZm8nPjwvc3Bhbj5cbi8vICAgPHN0cm9uZz5JbnN0cnVjdGlvbnM6IDwvc3Ryb25nPjxvbD48c3BhbiBjbGFzcz0naW5zdHJ1Y3Rpb25zIHJlY2lwZS1pbmZvJz5cbi8vICAgPC9zcGFuPjwvb2w+XG4vLyAgIDwvcD5gO1xuLy8gICBsZXQgaW5ncmVkaWVudHNTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZ3JlZGllbnRzJyk7XG4vLyAgIGxldCBpbnN0cnVjdGlvbnNTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9ucycpO1xuLy8gICByZWNpcGVPYmplY3QuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbi8vICAgICBpbmdyZWRpZW50c1NwYW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDx1bD48bGk+XG4vLyAgICAgJHtpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpfSAke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH1cbi8vICAgICAke2luZ3JlZGllbnQubmFtZX08L2xpPjwvdWw+XG4vLyAgICAgYClcbi8vICAgfSlcbi8vICAgcmVjaXBlT2JqZWN0Lmluc3RydWN0aW9ucy5mb3JFYWNoKGluc3RydWN0aW9uID0+IHtcbi8vICAgICBpbnN0cnVjdGlvbnNTcGFuLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBgPGxpPlxuLy8gICAgICR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259PC9saT5cbi8vICAgICBgKVxuLy8gICB9KVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRGYXZvcml0ZXMoKSB7XG4vLyAgIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbi8vICAgICB1c2VyLmZhdm9yaXRlUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4vLyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmF2b3JpdGUke3JlY2lwZS5pZH1gKS5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS1hY3RpdmUnKVxuLy8gICAgIH0pXG4vLyAgIH0gZWxzZSByZXR1cm5cbi8vIH1cblxuLy8gZnVuY3Rpb24gcG9wdWxhdGVDYXJkcyhyZWNpcGVzKSB7XG4vLyAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuLy8gICBpZiAoY2FyZEFyZWEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGwnKSkge1xuLy8gICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbCcpXG4vLyAgIH1cbi8vICAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4vLyAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxkaXYgaWQ9JyR7cmVjaXBlLmlkfSdcbi8vICAgICBjbGFzcz0nY2FyZCc+XG4vLyAgICAgICAgIDxoZWFkZXIgaWQ9JyR7cmVjaXBlLmlkfScgY2xhc3M9J2NhcmQtaGVhZGVyJz5cbi8vICAgICAgICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbi8vICAgICAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0nIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uJz5cbi8vICAgICAgICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfSBmYXZvcml0ZScgY2xhc3M9J2FkZCdcbi8vICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzMyLzMyMzM5LnN2ZycgYWx0PSdBZGQgdG9cbi8vICAgICAgICAgICAgIHJlY2lwZXMgdG8gY29vayc+XG4vLyAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgPGxhYmVsIGZvcj0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBmYXZvcml0ZSByZWNpcGVcbi8vICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfScgYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nZmF2b3JpdGUgZmF2b3JpdGUke3JlY2lwZS5pZH0gY2FyZC1idXR0b24nPjwvYnV0dG9uPlxuLy8gICAgICAgICA8L2hlYWRlcj5cbi8vICAgICAgICAgICA8c3BhbiBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0ncmVjaXBlLW5hbWUnPiR7cmVjaXBlLm5hbWV9PC9zcGFuPlxuLy8gICAgICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfScgdGFiaW5kZXg9JzAnIGNsYXNzPSdjYXJkLXBpY3R1cmUnXG4vLyAgICAgICAgICAgc3JjPScke3JlY2lwZS5pbWFnZX0nIGFsdD0nY2xpY2sgdG8gdmlldyByZWNpcGUgZm9yICR7cmVjaXBlLm5hbWV9Jz5cbi8vICAgICA8L2Rpdj5gKVxuLy8gICB9KVxuLy8gICBnZXRGYXZvcml0ZXMoKTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VySW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmNvbnRlbnRzID0gdXNlckluZ3JlZGllbnRzO1xuICB9XG4gIGdldElkc09mUGFudHJ5SW5ncmVkaWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHMubWFwKGluZyA9PiB7XG4gICAgICByZXR1cm4gaW5nLmluZ3JlZGllbnRcbiAgICB9KVxuICB9XG4gIGZpbmRSZWNpcGVJbmdyZWRpZW50c0luUGFudHJ5KHJlY2lwZSkge1xuICAgIGxldCBjdXJyZW50UGFudHJ5SWRzID0gdGhpcy5nZXRJZHNPZlBhbnRyeUluZ3JlZGllbnRzKClcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBjdXJyZW50UGFudHJ5SWRzLmluY2x1ZGVzKGluZ3JlZGllbnQuaWQpXG4gICAgfSlcbiAgfVxuICBkb2VzVXNlckhhdmVSZXF1aXJlZEluZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIHJldHVybiB0aGlzLmZpbmRSZWNpcGVJbmdyZWRpZW50c0luUGFudHJ5KHJlY2lwZSkubGVuZ3RoID09PSByZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoXG4gIH1cbiAgZmluZFdoaWNoSW5ncmVkaWVudHNBcmVTaG9ydChyZWNpcGUpIHtcbiAgICBsZXQgbm90RW5vdWdoID0gdGhpcy5maW5kUmVjaXBlSW5ncmVkaWVudHNJblBhbnRyeShyZWNpcGUpLmZpbHRlcihpbmcgPT4ge1xuICAgICAgbGV0IGluZ3JlZGllbnRTdG9jayA9IHRoaXMuZmluZEluZ3JlZGllbnRJblBhbnRyeShpbmcpLmFtb3VudFxuICAgICAgcmV0dXJuIGluZ3JlZGllbnRTdG9jayA8IGluZy5xdWFudGl0eS5hbW91bnRcbiAgICB9KVxuICAgIHJldHVybiBub3RFbm91Z2hcbiAgfVxuICBmaW5kQW1vdW50TWlzc2luZyhyZWNpcGUpIHtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kV2hpY2hJbmdyZWRpZW50c0FyZVNob3J0KHJlY2lwZSlcbiAgcmV0dXJuIG1pc3NpbmdJbmdyZWRpZW50cy5yZWR1Y2UoKGZpbmFsQXJyYXksIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGZpbmFsQXJyYXkucHVzaCh7IG5hbWU6IGluZ3JlZGllbnQubmFtZSwgZmFjdHM6IHsgaWQ6IGluZ3JlZGllbnQuaWQsIGFtb3VudE1pc3Npbmc6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gdGhpcy5maW5kSW5ncmVkaWVudEluUGFudHJ5KGluZ3JlZGllbnQpLmFtb3VudH19KVxuICAgICAgcmV0dXJuIGZpbmFsQXJyYXlcbiAgICB9LFtdKVxuICB9XG4gIGlkZW50aWZ5QW1vdW50T2ZJbmdyZWRpZW50c01pc3NpbmcocmVjaXBlKSB7XG4gICAgbGV0IGluZ3JlZGllbnRzTWlzc2luZyA9IHRoaXMuZmluZEFtb3VudE1pc3NpbmcocmVjaXBlKVxuICAgICByZXR1cm4gIGluZ3JlZGllbnRzTWlzc2luZy5yZWR1Y2UoKHN0cmluZywgaW5ncmVkaWVudCApPT57XG4gICAgICBzdHJpbmcgKz0gYCAke2luZ3JlZGllbnQuZmFjdHMuYW1vdW50TWlzc2luZ30gJHtpbmdyZWRpZW50Lm5hbWV9XFxuYFxuICAgICAgcmV0dXJuIHN0cmluZ1xuICAgIH0sXCJZb3UgYXJlIG1pc3NpbmdcIilcbiAgfVxuICBjYWxjdWxhdGVDb3N0Rm9ySW5ncmVkaWVudHMocmVjaXBlLCBBbGxJbmdyZWRpZW50cykge1xuICAgIGxldCBhbGxNaXNzaW5nID0gdGhpcy5maW5kQW1vdW50TWlzc2luZyhyZWNpcGUpXG4gICAgcmV0dXJuIGFsbE1pc3NpbmcucmVkdWNlKChjb3N0LCBpbmdyZWRpZW50KSA9PntcbiAgICAgIGxldCBjdXJyZW50SW5nID0gQWxsSW5ncmVkaWVudHMuZmluZChpbmcgPT57XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50LmZhY3RzLmlkID09PSBpbmcuaWRcbiAgICAgIH0pXG4gICAgICByZXR1cm4gY3VycmVudEluZy5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIGluZ3JlZGllbnQuZmFjdHMuYW1vdW50TWlzc2luZ1xuICAgIH0sIDApXG4gIH1cbiAgYWRkTmVjZXNzYXJ5SW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgbGV0IGFsbE1pc3NpbmcgPSAgdGhpcy5maW5kQW1vdW50TWlzc2luZyhyZWNpcGUpXG4gICAgcmV0dXJuIGFsbE1pc3NpbmcubWFwKGluZyA9PntcbiAgICAgIHJldHVybiB7W1wiaW5ncmVkaWVudFwiXTogaW5nLmZhY3RzLmlkLFxuICAgICAgICBbXCJhbW91bnRcIl06IGluZy5mYWN0cy5hbW91bnRNaXNzaW5nfVxuICAgIH0pIFxuICB9XG4gIGZpbmRJbmdyZWRpZW50SW5QYW50cnkoaW5ncmVkaWVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzLmZpbmQocGFudHJ5SW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gcGFudHJ5SW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkXG4gICAgfSlcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFudHJ5OyIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3QoKSB7XG4gICAgbGV0IGNvc3RDb3VudGVyID0gMDtcbiAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLmluZ3JlZGllbnRzRGF0YS5maW5kKHNwZWNpZmljSW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChzcGVjaWZpY0luZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBjb3N0Q291bnRlciArPSAoTnVtYmVyKHNwZWNpZmljSW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cykgKlxuICAgICAgICAgIE51bWJlcihpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvc3RDb3VudGVyO1xuICB9XG4gIHJldHVybkluc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbnNcbiAgfVxuICBmaWx0ZXJCeVRhZyhsZXR0ZXIpIHtcbiAgICB2YXIgdGFncyA9ICB0aGlzLnRhZ3MuZmlsdGVyKHRhZyA9PntcbiAgICAgIHJldHVybiB0YWcuc3BsaXQoJycpLmluY2x1ZGVzKGxldHRlci50b0xvd2VyQ2FzZSgpKVxuICAgIH0pXG4gICAgcmV0dXJuIHRhZ3NcbiAgfVxuICBjb250YWluc0luZ3JlZGllbnQoaW5wdXRJbmdyZWRpZW50KSB7IFxuICAgIGxldCBmaWx0ZXJkQXJyYXkgPSB0aGlzLmluZ3JlZGllbnRzLmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoaW5wdXRJbmdyZWRpZW50LnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcbiAgICBpZiAoZmlsdGVyZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHNlYXJjaEJ5SW5ncmVkaWVudChpbnB1dEluZ3JlZGllbnQpIHtcbiAgICB2YXIgaW5nID0gIHRoaXMuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoaW5wdXRJbmdyZWRpZW50LnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcbiAgICBpZiAoaW5nLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBpbmcubmFtZVxuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuXG5cbmltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IENvb2tib29rIGZyb20gJy4vY29va2Jvb2snO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcbmxldCByZWNpcGVEYXRhcztcbmxldCBpbmdyZWRpZW50c0RhdGE7XG5sZXQgY3VycmVudFVzZXI7XG5sZXQgZmF2b3JpdGVzO1xuXG5sZXQgbWVudU15VXBjb21pbmdSZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbXktdXBjb21pbmctcmVjaXBlcy10aXRsZScpO1xubGV0IGZhdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xubGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5sZXQgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNhcmRzJyk7XG5jb25zdCByZWNpcGVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmxldCBwYW50cnlBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbnRyeS1jYXJkcycpO1xubGV0IHJlY2lwZVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVjaXBlcy1pbnB1dCcpXG4vLyBsZXQgY29va2Jvb2sgPSBuZXcgQ29va2Jvb2socmVjaXBlRGF0YSk7XG5yZWNpcGVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKT0+e1xuICBkb21VcGRhdGVzLmRpc3BsYXlBbGxSZWNpcGVzKGZpbHRlcklucHV0cyhyZWNpcGVTZWFyY2gudmFsdWUsaW5ncmVkaWVudHNEYXRhKSxjdXJyZW50VXNlcilcbn0pXG5mYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBpZighZmF2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5RmF2b3JpdGVzKGZpbmRGYXZvcml0ZXMoY3VycmVudFVzZXIscmVjaXBlRGF0YXMpKVxuICAgIGZhdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJylcbiAgfVxuICBlbHNle1xuICAgIGZhdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJylcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlBbGxSZWNpcGVzKHJlY2lwZURhdGFzLGN1cnJlbnRVc2VyKVxuICB9XG59KVxubWVudU15VXBjb21pbmdSZWNpcGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLHJlY2lwZURhdGFzKVxufSlcbmxldCBwYW50cnk7XG5cblxucmVjaXBlQ2FyZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5pZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFyLWljb24nKSkge1xuICB0b29nbGVGYXZvcml0ZXMoZXZlbnQpXG59XG5pZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGx1cy1pY29uJykpIHtcbiAgYWRkVG9VcGNvbWluZ1JlY2lwZXMoY3VycmVudFVzZXIsIHJlY2lwZURhdGFzKTtcbn1cbn0pXG5cbmZ1bmN0aW9uIHRvb2dsZUZhdm9yaXRlcyhldmVudCl7XG4gIGlmKGV2ZW50LnRhcmdldC5zcmMgPT09IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnXCIpe1xuICAgIGV2ZW50LnRhcmdldC5zcmMgPSAgIFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnXCJcbiAgICBhZGRUb0Zhdm9yaXRlcyhldmVudClcbiAgfWVsc2V7ICAgXG4gICAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhldmVudClcbiAgICBldmVudC50YXJnZXQuc3JjID0gIFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnXCIgfVxufVxuZnVuY3Rpb24gYWRkVG9GYXZvcml0ZXMoZXZlbnQpe1xubGV0IHJlY2lwZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2luZ2xlLXJlY2lwZS1jYXJkJylcbmN1cnJlbnRVc2VyLmFkZFRvRmF2b3JpdGVzKHJlY2lwZS5pZClcbn1cbmZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvcml0ZXMoZXZlbnQpIHtcbiAgZmF2b3JpdGVzID0gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzXG4gIGxldCByZWNpcGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNpbmdsZS1yZWNpcGUtY2FyZCcpXG4gIGlmKGZhdm9yaXRlcy5pbmNsdWRlcyhyZWNpcGUuaWQpKXtcbiAgICBjdXJyZW50VXNlci5yZW1vdmVGcm9tRmF2b3JpdGVzKHJlY2lwZS5pZClcbiAgfVxufVxuXG4vLyB3aW5kb3cub25sb2FkID0gb25TdGFydHVwKCk7XG4vLyB3aW5kb3cub25sb2FkID0gc2hvd0RvbVVwZGF0ZXMocmVjaXBlKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgbWVyZ2VGZXRjaFRpbWVsaW5lcygpXG59XG5mdW5jdGlvbiBjcmVhdGVVc2VyKHVzZXJzRGF0YSkge1xuICBsZXQgY3VycmVudFVzZXIgPSB1c2Vyc0RhdGEuZmluZCh1c2VyID0+IHtcbiAgICBsZXQgcGFyc2VkSUQgPSBwYXJzZUludCh1c2VyLmlkKTtcbiAgICBjb25zb2xlLmxvZyhkb21VcGRhdGVzLnJhbmRvbU51bWJlcilcbiAgICByZXR1cm4gcGFyc2VkSUQgPT09IGRvbVVwZGF0ZXMucmFuZG9tTnVtYmVyXG4gIH0pXG4gIHJldHVybiBuZXcgVXNlcihjdXJyZW50VXNlci5pZCxjdXJyZW50VXNlci5uYW1lLGN1cnJlbnRVc2VyLnBhbnRyeSlcbn1cblxuZnVuY3Rpb24gYWRkVG9VcGNvbWluZ1JlY2lwZXMoY3VycmVudFVzZXIsIHJlY2lwZURhdGFzKSB7XG4gIGxldCByZWNpcGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNpbmdsZS1yZWNpcGUtY2FyZCcpXG5jdXJyZW50VXNlci5hZGRUb0Zhdm9yaXRlcyhyZWNpcGUuaWQpXG4gIGN1cnJlbnRVc2VyLmFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUGFudHJ5KGN1cnJlbnRVc2VyLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgY3VycmVudFVzZXIucGFudHJ5LmZvckVhY2gocGFudHJ5SXRlbSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmdyZWRpZW50ID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gcGFudHJ5SXRlbS5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkO1xuICAgIH0pXG4gICAgaWYoIXBhbnRyeUl0ZW0ubmFtZSl7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgIHBhbnRyeUl0ZW0ubmFtZSA9IGN1cnJlbnRJbmdyZWRpZW50Lm5hbWU7XG4gICAgcGFudHJ5SXRlbS5lc3RpbWF0ZWRDb3N0SW5DZW50cyA9IGN1cnJlbnRJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzO1xuICB9KVxuICAvL3doYXQgaWYgd2UgbWFkZSBhIGNsYXNzIGhlcmU/XG4gIHJldHVybiBuZXcgUGFudHJ5KGN1cnJlbnRVc2VyLnBhbnRyeSlcbn1cblxuZnVuY3Rpb24gZ3JhYlJlY2lwZXMoKSB7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3JlY2lwZXMvcmVjaXBlRGF0YScpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4ocmVjaXBlT2JqZWN0ID0+IHtcbiAgICByZWNpcGVEYXRhcyA9IHJlY2lwZU9iamVjdC5yZWNpcGVEYXRhXG4gIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgYWxlcnQoJ1NvcnJ5LCB0aGUgcmVjaXBlcyBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpfSlcbn1cblxuZnVuY3Rpb24gZ3JhYlVzZXJzKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScsKVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICB9KVxuICAudGhlbihkYXRhID0+IHtcbiAgICBkb21VcGRhdGVzLmdyZWV0VXNlcihkYXRhLndjVXNlcnNEYXRhW2RvbVVwZGF0ZXMucmFuZG9tTnVtYmVyIC0xXSlcbiAgICAgcmV0dXJuIGRhdGEud2NVc2Vyc0RhdGE7XG4gICAgICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSB1c2VyIGluZm9ybWF0aW9uIGZhaWxlZCB0byBsb2FkLiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gIH0pXG59XG4gIGZ1bmN0aW9uIGdyYWJJbmdyZWRpZW50cygpIHtcbiAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvaW5ncmVkaWVudHMvaW5ncmVkaWVudHNEYXRhJylcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICB9KS50aGVuKGluZ3JlZGllbnREYXRhID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50RGF0YS5pbmdyZWRpZW50c0RhdGE7XG4gICAgICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSBpbmdyZWRpZW50cyBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpOyAgICBcbn0pXG59XG5mdW5jdGlvbiBtZXJnZUZldGNoVGltZWxpbmVzKCkge1xuIFByb21pc2UuYWxsKFtncmFiVXNlcnMoKSwgZ3JhYkluZ3JlZGllbnRzKCksIGdyYWJSZWNpcGVzKCldKVxuIC50aGVuKHZhbHVlcyA9PiB7XG4gICBsZXQgdXNlcnNEYXRhID0gdmFsdWVzWzBdXG4gICBpbmdyZWRpZW50c0RhdGEgPSB2YWx1ZXNbMV1cbiAgICBjdXJyZW50VXNlciA9IGNyZWF0ZVVzZXIodXNlcnNEYXRhKVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFsbFJlY2lwZXMocmVjaXBlRGF0YXMsY3VycmVudFVzZXIpO1xuICAgbGV0IHBhbnRyeSA9IGNyZWF0ZVBhbnRyeShjdXJyZW50VXNlcixpbmdyZWRpZW50c0RhdGEpXG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlQYW50cnkocGFudHJ5KVxuIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGFsZXJ0KCdTb3JyeSwgdGhlIGluZm9ybWF0aW9uIGZhaWxlZCB0byBsb2FkLiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gIH0pXG4gIFxufVxuZnVuY3Rpb24gZmluZEZhdm9yaXRlcyhjdXJyZW50VXNlcixyZWNpcGVEYXRhcykge1xuICBsZXQgaWRzID0gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzXG4gIGxldCBmYXZvcml0ZVJlY2lwaWVzID0gcmVjaXBlRGF0YXMuZmlsdGVyKHJlY2lwZSA9PntcbiAgICByZXR1cm4gaWRzLmluY2x1ZGVzKFN0cmluZyhyZWNpcGUuaWQpKVxuICB9KVxuICByZXR1cm4gZmF2b3JpdGVSZWNpcGllc1xufVxuZnVuY3Rpb24gZmlsdGVySW5wdXRzKGxldHRlcnMsaW5ncmVkaWVudHNEYXRhKXtcbiAgY29uc29sZS5sb2cobGV0dGVycylcbiAgcmV0dXJuIHJlY2lwZURhdGFzLmZpbHRlcihyZWNpcGU9PntcbiAgICBsZXQgY29ycmVjdEluZ3JlZGllbnQgID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PnsgXG4gICAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQocmVjSW5ncmVkaWVudHMgPT4ge1xuICAgICAgICByZXR1cm4gcmVjSW5ncmVkaWVudHMuaWQgPT09IGluZ3JlZGllbnQuaWRcbiAgICAgIH0pXG4gICAgIH0gKVxuICAgICBcbiAgICByZXR1cm4gY29ycmVjdEluZ3JlZGllbnQubmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKGxldHRlcnMudG9VcHBlckNhc2UoKSlcbiAgfSlcbn1cblxuXG5cbiIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgcGFudHJ5KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBwYW50cnk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgfVxuXG4gIGFkZFRvRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMucHVzaChyZWNpcGUpXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKVxuICB9XG5cbiAgZmlsdGVyRmF2b3JpdGVzKHRhZykge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpO1xuICAgIH0pXG4gIH1cblxuICBmaWx0ZXJSZWNpcGVzVG9Db29rKHRhZykge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXNUb0Nvb2suZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKTtcbiAgICB9KVxuICB9XG5cbiAgZmluZEZhdm9yaXRlcyhzdHJnVG9TcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICB8fCByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tQYW50cnkocmVjaXBlKSB7XG4gICAgY29uc3QgYWxsUGFudHJ5SXRlbXNJRCA9IHRoaXMucGFudHJ5Lm1hcChwYW50cnlJdGVtID0+IHtcbiAgICAgIHJldHVybiBwYW50cnlJdGVtLmluZ3JlZGllbnQ7XG4gICAgfSlcbiAgICBjb25zdCBtaXNzaW5nSW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHMuZmlsdGVyKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuICEoYWxsUGFudHJ5SXRlbXNJRC5pbmNsdWRlcyhpbmdyZWRpZW50LmluZ3JlZGllbnQpKTtcbiAgICB9KVxuICAgIGlmIChtaXNzaW5nSW5ncmVkaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYFlvdSBoYXZlIGFsbCB0aGUgaW5ncmVkaWVudHMgaW4geW91ciBwYW50cnkhYDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1pc3NpbmdJbmdyZWRpZW50cztcbiAgICB9XG4gIH1cblxuICBhZGRUb1JlY2lwZXNUb0Nvb2socmVjaXBlKSB7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLnB1c2gocmVjaXBlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
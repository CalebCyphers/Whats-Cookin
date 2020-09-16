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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9iYTg5Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/NGYyZSIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3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QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFZSx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZHhCLGNBQWMsbUJBQU8sQ0FBQywyTUFBb0c7O0FBRTFILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ2xCZixjQUFjLG1CQUFPLENBQUMsK01BQXNHOztBQUU1SCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsYUFBYTtBQUN2RDtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBLE9BQU87O0FBRVAsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQSxxQ0FBcUMsbUNBQW1DO0FBQ3hFLDhCQUE4Qix1QkFBdUI7QUFDckQ7QUFDQSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7OztBQUlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvREFBb0QsbUJBQW1CO0FBQ3ZFO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsVUFBVTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0Esa0NBQWtDLFlBQVk7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsVUFBVTtBQUN6RTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakMsb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBLHFCQUFxQixVQUFVLHdCQUF3QixZQUFZO0FBQ25FLG9CQUFvQixVQUFVO0FBQzlCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBLFFBQVEsY0FBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQ0FBc0MsR0FBRztBQUNsRCxTQUFTLGdCQUFnQjtBQUN6QjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakM7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQsUUFBUTtBQUNSLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsVUFBVTtBQUN2RTtBQUNBLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckMsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVLHlEQUF5RCxVQUFVO0FBQ3hHO0FBQ0EseUJBQXlCLFVBQVUsd0JBQXdCLFlBQVk7QUFDdkUsd0JBQXdCLFVBQVU7QUFDbEMsb0JBQW9CLGFBQWEsa0NBQWtDLFlBQVk7QUFDL0U7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMVIxQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQyxnSEFBZ0g7QUFDdks7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCLEdBQUcsZ0JBQWdCO0FBQ3RFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ2UscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDN0RyQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNFOzs7QUFHRztBQUNBO0FBQ0o7QUFDUTtBQUNJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTs7QUFFZDtBQUNBO0FBQ0EsSUFBSSxtREFBVTs7QUFFZDtBQUNBO0FBQ0EsRUFBRSxtREFBVTtBQUNaO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxDQUFDOztBQUVELHdDQUF3QyxtREFBVTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWjtBQUNBLEVBQUUsbURBQVU7QUFDWjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxLO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFVO0FBQ2xDLEdBQUc7QUFDSCxhQUFhLDZDQUFJO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGFBQWEsK0NBQU07O0FBRW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxhQUFhLCtDQUFNO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUksbURBQVUsNEJBQTRCLG1EQUFVO0FBQ3BEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx1RTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBLElBQUksbURBQVU7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0U7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1UEQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1se2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjojMzc1MTVDO2JvcmRlcjoycHggc29saWQgIzAwMDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfWJvZHl7Zm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7d2lkdGg6MTAwJX1ib2R5IC5yZWNpcGUtZGlzcGxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMyk7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX1ib2R5IC5yZWNpcGUtZGlzcGxheS1tYWlue3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MTAlO3RvcDo1cmVtO2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTtoZWlnaHQ6MzByZW07d2lkdGg6ODAlO2JvcmRlci1yYWRpdXM6MC41cmVtfWgxe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZzoxcmVtO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjMwJX0ud3JhcHBlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LmhpZGRlbntkaXNwbGF5Om5vbmV9Lm1haW4taGVhZGVye2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwO2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDVmciAxZnI7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO3dpZHRoOjEwMCV9Lm1haW4taGVhZGVyIC5oYW1idXJnZXItbWVudXtoZWlnaHQ6NHJlbTt3aWR0aDo0cmVtfS5tYWluLWhlYWRlciAueC1tZW51e2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6NHJlbTt3aWR0aDo0cmVtfS5tYWluLWhlYWRlciAuaGVhZGVyLXRpdGxle3RleHQtYWxpZ246Y2VudGVyO2dyaWQtY29sdW1uLXN0YXJ0OjI7d2lkdGg6MTAwJX0ubWFpbi1oZWFkZXIgLmhpZGRlbntkaXNwbGF5Om5vbmV9Lm9wZW4tbWVudS1zZWxlY3Rpb25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I0VCRjVFRX0ub3Blbi1tZW51LXNlbGVjdGlvbnMgaDM6aG92ZXJ7Y29sb3I6IzM3NTE1Q30ub3Blbi1tZW51LXNlbGVjdGlvbnMgYXt0ZXh0LWRlY29yYXRpb246bm9uZTtmb250LXNpemU6MnJlbX0ub3Blbi1tZW51LXNlbGVjdGlvbnMgYTp2aXNpdGVke2NvbG9yOiMwMDB9Lm9wZW4tbWVudS1zZWxlY3Rpb25zIGE6aG92ZXJ7Y29sb3I6IzM3NTE1Q30ub3Blbi1tZW51LXNlbGVjdGlvbnMgLm1lbnUtc2VsZWN0aW9ue2NvbG9yOiMwMDA7Z3JpZC1jb2x1bW4tc3RhcnQ6Mjtib3JkZXItYm90dG9tOnNvbGlkO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjUwJX0ub3Blbi1tZW51LXNlbGVjdGlvbnMgLm1lbnUtZmF2b3JpdGVze2JvcmRlcjpub25lfS5wYWdlLXRpdGxlLWFuZC1zZWFyY2ggLnBhZ2UtdGl0bGV7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOmF1dG99LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAuc2VhcmNoLXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5wYWdlLXRpdGxlLWFuZC1zZWFyY2ggLnNlYXJjaC13cmFwcGVyIC5zZWFyY2gtaWNvbntkaXNwbGF5OmZsZXg7aGVpZ2h0OjFyZW07d2lkdGg6MXJlbX0ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5zZWFyY2gtd3JhcHBlciAuc2VhcmNoLXJlY2lwZXMtaW5wdXR7aGVpZ2h0OjEuNXJlbTt3aWR0aDo4cmVtO2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTtib3JkZXI6MXB4IHNvbGlkICMwMDB9LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAuc2VhcmNoLXdyYXBwZXIgLnNlYXJjaC1idXR0b257ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoxLjc1cmVtO3dpZHRoOjEuNzVyZW07Ym9yZGVyOjFweCBzb2xpZCAjMDAwfS5wYWdlLXRpdGxlLWFuZC1zZWFyY2ggLnNlYXJjaC1pY29ue2hlaWdodDoxLjVyZW07d2lkdGg6MS41cmVtfS5hbGwtY2FyZHN7cGFkZGluZzoycmVtO2Rpc3BsYXk6Z3JpZDtncmlkLWdhcDoxLjVyZW07Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjt3aWR0aDoxMDAlfS5wYW50cnktY2FyZHN7cGFkZGluZzoycmVtO2Rpc3BsYXk6Z3JpZDtncmlkLWdhcDoxLjVyZW07Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjt3aWR0aDoxMDAlfS5zaW5nbGUtaW5ncmVkaWVudC1jYXJke2Rpc3BsYXk6Z3JpZDtib3JkZXItcmFkaXVzOjAuNXJlbTtncmlkLXRlbXBsYXRlLXJvd3M6MC41ZnIgMy4yNWZyO2JhY2tncm91bmQtY29sb3I6I0VCRjVFRX0uc2luZ2xlLWluZ3JlZGllbnQtY2FyZCAuaW5ncmVkaWVudC1uYW1lLWFyZWF7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5zaW5nbGUtaW5ncmVkaWVudC1jYXJkIC5pbmdyZWRpZW50LXF1YW50aXR5LXNlY3Rpb257ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5zaW5nbGUtaW5ncmVkaWVudC1jYXJkIHB7Zm9udC1zaXplOjUwMCU7bWFyZ2luOjNyZW19LnNpbmdsZS1yZWNpcGUtY2FyZHtkaXNwbGF5OmdyaWQ7Ym9yZGVyLXJhZGl1czowLjVyZW07Z3JpZC10ZW1wbGF0ZS1yb3dzOjAuMjVmciAzZnIgMC41ZnI7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2JveC1zaGFkb3c6MCAwIDNweCAjMDAwfS5zaW5nbGUtcmVjaXBlLWNhcmQgLmFsbC1jYXJkLWljb25ze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6OTAlO2hlaWdodDozcmVtO21hcmdpbjphdXRvfS5zaW5nbGUtcmVjaXBlLWNhcmQgLmNhcmQtaWNvbntoZWlnaHQ6MnJlbTt3aWR0aDoycmVtfS5zaW5nbGUtcmVjaXBlLWNhcmQgLnJlY2lwZS1uYW1le3RleHQtYWxpZ246Y2VudGVyfS5zaW5nbGUtcmVjaXBlLWNhcmQgLmNhcmQtaW1hZ2Utc2VjdGlvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnNpbmdsZS1yZWNpcGUtY2FyZCAuY2FyZC1pbWFnZXtib3JkZXI6MXB4IHNvbGlkICMwMDA7d2lkdGg6OTMlO2hlaWdodDphdXRvfS51c2VyLWluZm97bWFyZ2luOjAgYXV0bzt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo0MCV9Lm1lbnUtc2VsZWN0aW9uOmhvdmVyLC5zZWFyY2gtaWNvbjpob3ZlcntjdXJzb3I6cG9pbnRlcn0ubWVudS1zZWxlY3Rpb246YWN0aXZlLC5zZWFyY2gtaWNvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojQzNDMkM2fS5jYXJkLWJ1dHRvbntib3JkZXI6MXB4IHNvbGlkICMwMDA7aGVpZ2h0OjI3cHg7bWFyZ2luOjNweH0uYWRkLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7ZGlzcGxheTpmbGV4O3dpZHRoOjEyJX0uYWRke3dpZHRoOjEwMCV9LmZhdm9yaXRle2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjt3aWR0aDoxMyV9LmNhcmR7YmFja2dyb3VuZC1jb2xvcjojRDdGMkZFO2JvcmRlcjozcHggc29saWQgIzAwMDt3aWR0aDoxMDAlfS5hbGx7Z3JpZC1nYXA6MHB4O2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMSwgMWZyKX0uYWxsLXJlY2lwZS1pbmZvLG9se2NvbG9yOiNFQkY1RUU7Zm9udC1zaXplOjIyMCU7d2lkdGg6MTAwJX1oM3twYWRkaW5nOjFyZW0gMCAxcmVtIDA7Y29sb3I6IzAwMDtmb250LXNpemU6MnJlbX0ucmVjaXBlLW5hbWV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTUwJTt0ZXh0LWFsaWduOmNlbnRlcn0uY2FyZC1waWN0dXJlOmhvdmVye29wYWNpdHk6MC43fS5jYXJkLXBpY3R1cmU6YWN0aXZle2JvcmRlcjoycHggc29saWQgIzAwMH1tYWlue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMzNzUxNUM7aGVpZ2h0OmF1dG87d2lkdGg6MTAwJX0uZmF2b3JpdGUtYWN0aXZle2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fUBtZWRpYSAobWluLXdpZHRoOiA4MDBweCl7LmFsbC1jYXJkc3tncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcil9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpey5hbGwtY2FyZHN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLCAxZnIpfX1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgQ29va2Jvb2sge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5yZWNpcGVzID0gZGF0YTtcbiAgfVxuXG4gIGZpbmRSZWNpcGUoc2VhcmNoVGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIHJldHVybiAoaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB8fFxuICAgICAgICAocmVjaXBlLm5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dCkpXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tib29rO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibGV0IGZhdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xubGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5sZXQgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNhcmRzJyk7XG5jb25zdCByZWNpcGVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmxldCBwYW50cnlBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbnRyeS1jYXJkcycpO1xubGV0IHJlY2lwZVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVjaXBlcy1pbnB1dCcpO1xubGV0IG1lbnVNeVVwY29taW5nUmVjaXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW15LXVwY29taW5nLXJlY2lwZXMtdGl0bGUnKTtcbmxldCByZWNpcGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS1kaXNwbGF5Jyk7XG5cbmxldCBkb21VcGRhdGVzID0ge1xuICByYW5kb21OdW1iZXIgOiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDkpICsgMSxcblxuICAgZGlzcGxheUFsbFJlY2lwZXMocmVjaXBlcywgY3VycmVudFVzZXIpIHtcbiAgICBcbiAgICBsZXQgZmF2b3JpdGVzID0gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzXG5cbiAgICBpZiAocmVjaXBlQ2FyZHMgPT09IG51bGwgKSB7XG4gICAgICByZXR1cm4gXG4gICAgfVxuICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCA9ICcnXG4gICAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBsZXQgc3JjID0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmdcIlxuICAgICAgaWYgKGZhdm9yaXRlcyAhPT0gdW5kZWZpbmVkICYmIGZhdm9yaXRlcy5pbmNsdWRlcyhTdHJpbmcocmVjaXBlLmlkKSApKSB7XG4gICAgICAgICBzcmMgPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1wiXG4gICAgICB9XG4gICAgcmVjaXBlQ2FyZHMuaW5uZXJIVE1MICs9IGA8YXJ0aWNsZSBpZCA9ICR7cmVjaXBlLmlkfSBjbGFzcz1cInNpbmdsZS1yZWNpcGUtY2FyZCBcIj5cbiAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiYWxsLWNhcmQtaWNvbnNcIj5cbiAgICAgICAgICAgPGltZyBjbGFzcz1cInBsdXMtaWNvbiBjYXJkLWljb25cIiBzcmM9XCIuL2ltYWdlcy9wbHVzLWljb24ucG5nXCIgYWx0PVwicGx1cyBpY29uIHVzZWQgdG8gZXhwYW5kIGFuZCBzaG93IHJlY2lwZSBkZXRhaWxzXCI+XG4gICAgICAgICAgIDxpbWcgY2xhc3M9XCJzdGFyLWljb24gY2FyZC1pY29uXCIgc3JjPSR7c3JjfVxuICAgICAgICAgIFwiYWx0PVwiZW1wdHkgc3RhciBpY29uIHVzZWQgdG8gZmF2b3JpdGUgYW5kIHVuZmF2b3JpdGUgcmVjaXBlc1wiPlxuICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjYXJkLWltYWdlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1hZ2VcIiBzcmM9XCIke3JlY2lwZS5pbWFnZX1cIiBhbHQ9XCJzYW1wbGUgZGlzcGxheSBvZiByZWNpcGVcIj5cbiAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicmVjaXBlLW5hbWUtYXJlYVwiPlxuICAgICAgICAgICA8aDIgY2xhc3M9XCJyZWNpcGUtbmFtZVwiPiR7cmVjaXBlLm5hbWV9PC9oMj5cbiAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICA8L2FydGljbGU+YFxuICAgICAgfSlcblxuICB9LFxuXG4gIGRpc3BsYXlSZWNpcGVJbmZvKHJlY2lwZSwgaW5ncmVkaWVudHMpIHtcbiAgICBsZXQgdHJ1ZUluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnMubWFwKGluc3RydWN0aW9uID0+IHtcbiAgICAgIHJldHVybiBpbnN0cnVjdGlvbi5pbnN0cnVjdGlvbjtcbiAgICB9KS5qb2luKCcsJylcblxuICAgIHJlY2lwZURpc3BsYXkuaW5uZXJIVE1MICs9IFxuICAgIGA8c2VjdGlvbiBjbGFzcz1cInJlY2lwZS1kaXNwbGF5LW1haW5cIj5cbiAgICA8aDE+JHtyZWNpcGUubmFtZX08L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtaW5ncmVkaWVudHMtd2l0aC1jb3N0XCI+XG4gICAgICA8cCBjbGFzcz1cInBvcHVwLWluZ3JlZGllbnRzXCI+JHtKU09OLnN0cmluZ2lmeShyZWNpcGUuaW5ncmVkaWVudHMpfTwvcD5cbiAgICAgIDxoMyBjbGFzcz1cInBvcC1jb3N0c1wiPiR7cmVjaXBlLmNhbGN1bGF0ZUNvc3QoKX08L2gzPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwicmVjaXBlLWluc3RydWN0aW9uc1wiPiR7dHJ1ZUluc3RydWN0aW9uc308L3A+XG48L3NlY3Rpb24+YFxuICB9LFxuXG4gIHNob3dSZWNpcGVQb3B1cCgpIHtcbiAgICByZWNpcGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9LFxuXG4gIGhpZGVSZWNpcGVQb3B1cCgpIHtcbiAgICByZWNpcGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9LFxuICBcbiAgIGdyZWV0VXNlcih1c2VyKSB7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk7XG4gICAgaWYodXNlck5hbWUgPT09IG51bGwpe1xuICAgICAgcmV0dXJuIFxuICAgIH1cbiAgICB1c2VyTmFtZS5pbm5lclRleHQgKz0gJyAnICsgdXNlci5uYW1lLnNwbGl0KCcgJylbMF0gKyAnICcgKyB1c2VyLm5hbWUuc3BsaXQoJyAnKVsxXVswXTtcbiAgfSxcbiAgXG4gICBkaXNwbGF5UGFudHJ5KHBhbnRyeSkge1xuICAgIGlmKHBhbnRyeUFyZWEgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcbiAgICB9XG4gICAgcGFudHJ5ID0gcGFudHJ5LmNvbnRlbnRzXG4gICAgcGFudHJ5QXJlYS5pbm5lckhUTUwgPSAnJ1xuICAgIHBhbnRyeS5mb3JFYWNoKGluZ0luUGFudHJ5ID0+IHtcbiAgICAgIHBhbnRyeUFyZWEuaW5uZXJIVE1MICs9IGA8YXJ0aWNsZSBjbGFzcz1cInNpbmdsZS1pbmdyZWRpZW50LWNhcmRcIj5cbiAgICA8YXJ0aWNsZSBjbGFzcz1cImluZ3JlZGllbnQtbmFtZS1hcmVhXCI+XG4gICAgICA8aDIgY2xhc3M9XCJpbmdyZWRpZW50LW5hbWVcIj4ke2luZ0luUGFudHJ5Lm5hbWV9PC9oMj5cbiAgICA8L2FydGljbGU+XG4gICAgPGFydGljbGUgY2xhc3M9XCJpbmdyZWRpZW50LXF1YW50aXR5LXNlY3Rpb25cIj5cbiAgICAgIDxidXR0b24+LTwvYnV0dG9uPlxuICAgICAgPHAgY2xhc3MgPSAnaW5ncmVkaWVudC1xdWFudGl0eSc+JHtpbmdJblBhbnRyeS5hbW91bnR9PC9wPlxuICAgICAgPGJ1dHRvbj4rPC9idXR0b24+XG4gICAgPC9hcnRpY2xlPlxuICA8L2FydGljbGU+YFxuICAgIH0pO1xuICB9LFxuXG5cblxuICAgIGRpc3BsYXlVcGNvbWluZ1JlY2lwZXMoY3VycmVudFVzZXIsIHJlY2lwZURhdGFzKSB7XG4gICAgICBpZiAoY3VycmVudFVzZXIucmVjaXBlc1RvQ29vay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtbXktdXBjb21pbmctcmVjaXBlcy10aXRsZScpKSB7XG4gICAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCA9ICcnXG4gICAgICByZWNpcGVEYXRhcy5mb3JFYWNoKHJlY2lwZURhdGFQb2ludCA9PiB7XG4gICAgICAgIGxldCBmYXZvcml0ZXMgPSBjdXJyZW50VXNlci5mYXZvcml0ZVJlY2lwZXNcbiAgICAgICAgbGV0IHNyYyA9IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnXCJcbiAgICAgIGlmIChmYXZvcml0ZXMgIT09IHVuZGVmaW5lZCAmJiBmYXZvcml0ZXMuaW5jbHVkZXMoU3RyaW5nKHJlY2lwZURhdGFQb2ludC5pZCkgKSkge1xuICAgICAgICBzcmMgPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1wiXG4gICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFVzZXIucmVjaXBlc1RvQ29vay5pbmNsdWRlcyhTdHJpbmcocmVjaXBlRGF0YVBvaW50LmlkKSkpIHtcblxuICAgICAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZURhdGFQb2ludC5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmQgXCI+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJhbGwtY2FyZC1pY29uc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBsdXMtaWNvbiBjYXJkLWljb25cIiBzcmM9XCIuL2ltYWdlcy9wbHVzLWljb24ucG5nXCIgYWx0PVwicGx1cyBpY29uIHVzZWQgdG8gZXhwYW5kIGFuZCBzaG93IHJlY2lwZSBkZXRhaWxzXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwic3Rhci1pY29uIGNhcmQtaWNvblwiIHNyYz0ke3NyY31cbiAgICAgICAgICAgXCJhbHQ9XCJlbXB0eSBzdGFyIGljb24gdXNlZCB0byBmYXZvcml0ZSBhbmQgdW5mYXZvcml0ZSByZWNpcGVzXCI+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZC1pbWFnZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHNyYz1cIiR7cmVjaXBlRGF0YVBvaW50LmltYWdlfVwiIGFsdD1cInNhbXBsZSBkaXNwbGF5IG9mIHJlY2lwZVwiPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1uYW1lLWFyZWFcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1uYW1lXCI+JHtyZWNpcGVEYXRhUG9pbnQubmFtZX08L2gyPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9hcnRpY2xlPmBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgICAgZGlzcGxheUZhdm9yaXRlcyhmYXZvcml0ZXMpIHtcbiAgICAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgIHJldHVyblxuICAgICAgIH1cbiAgICBcbiAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCA9ICcnXG4gICAgICBmYXZvcml0ZXMuZm9yRWFjaChyZWNpcGUgPT57XG4gICAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZS5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmQgXCI+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cImFsbC1jYXJkLWljb25zXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJwbHVzLWljb24gY2FyZC1pY29uXCIgc3JjPVwiLi9pbWFnZXMvcGx1cy1pY29uLnBuZ1wiIGFsdD1cInBsdXMgaWNvbiB1c2VkIHRvIGV4cGFuZCBhbmQgc2hvdyByZWNpcGUgZGV0YWlsc1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwic3Rhci1pY29uIGNhcmQtaWNvblwiIHNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1wiXG4gICAgICAgXCJhbHQ9XCJlbXB0eSBzdGFyIGljb24gdXNlZCB0byBmYXZvcml0ZSBhbmQgdW5mYXZvcml0ZSByZWNpcGVzXCI+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmQtaW1hZ2Utc2VjdGlvblwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiIGFsdD1cInNhbXBsZSBkaXNwbGF5IG9mIHJlY2lwZVwiPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWNpcGUtbmFtZS1hcmVhXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1uYW1lXCI+JHtyZWNpcGUubmFtZX08L2gyPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvYXJ0aWNsZT5gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICAvLyBmdW5jdGlvbiB2aWV3RmF2b3JpdGVzKCkge1xuLy8gICBpZiAoY2FyZEFyZWEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGwnKSkge1xuLy8gICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbCcpXG4vLyAgIH1cbi8vICAgaWYgKCF1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbi8vICAgICBmYXZCdXR0b24uaW5uZXJIVE1MID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuLy8gICAgIHBvcHVsYXRlQ2FyZHMoY29va2Jvb2sucmVjaXBlcyk7XG4vLyAgICAgcmV0dXJuXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgZmF2QnV0dG9uLmlubmVySFRNTCA9ICdSZWZyZXNoIEZhdm9yaXRlcydcbi8vICAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbi8vICAgICB1c2VyLmZhdm9yaXRlUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4vLyAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdiBpZD0nJHtyZWNpcGUuaWR9J1xuLy8gICAgICAgY2xhc3M9J2NhcmQnPlxuLy8gICAgICAgPGhlYWRlciBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0nY2FyZC1oZWFkZXInPlxuLy8gICAgICAgPGxhYmVsIGZvcj0nYWRkLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gYWRkIHJlY2lwZTwvbGFiZWw+XG4vLyAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0nIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uJz5cbi8vICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfScgY2xhc3M9J2FkZCdcbi8vICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzMyLzMyMzM5LnN2ZycgYWx0PSdBZGQgdG9cbi8vICAgICAgIHJlY2lwZXMgdG8gY29vayc+PC9idXR0b24+XG4vLyAgICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZVxuLy8gICAgICAgPC9sYWJlbD5cbi8vICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfScgYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nZmF2b3JpdGUgZmF2b3JpdGUtYWN0aXZlIGNhcmQtYnV0dG9uJz5cbi8vICAgICAgIDwvYnV0dG9uPjwvaGVhZGVyPlxuLy8gICAgICAgPHNwYW4gaWQ9JyR7cmVjaXBlLmlkfScgY2xhc3M9J3JlY2lwZS1uYW1lJz4ke3JlY2lwZS5uYW1lfTwvc3Bhbj5cbi8vICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfScgdGFiaW5kZXg9JzAnIGNsYXNzPSdjYXJkLXBpY3R1cmUnXG4vLyAgICAgICBzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbi8vICAgICAgIDwvZGl2PmApXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfVxuXG5cblxuLy8gZnVuY3Rpb24gZmF2b3JpdGVDYXJkKGV2ZW50KSB7XG4vLyAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuLy8gICAgIGlmIChyZWNpcGUuaWQgID09PSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKSkge1xuLy8gICAgICAgcmV0dXJuIHJlY2lwZTtcbi8vICAgICB9XG4vLyAgIH0pXG4vLyAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbi8vICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtYWN0aXZlJyk7XG4vLyAgICAgZmF2QnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4vLyAgICAgdXNlci5hZGRUb0Zhdm9yaXRlcyhzcGVjaWZpY1JlY2lwZSk7XG4vLyAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbi8vICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGUtYWN0aXZlJyk7XG4vLyAgICAgdXNlci5yZW1vdmVGcm9tRmF2b3JpdGVzKHNwZWNpZmljUmVjaXBlKVxuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNhcmRCdXR0b25Db25kaXRpb25hbHMoZXZlbnQpIHtcbi8vICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlJykpIHtcbi8vICAgICBmYXZvcml0ZUNhcmQoZXZlbnQpO1xuLy8gICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtcGljdHVyZScpKSB7XG4vLyAgICAgZGlzcGxheURpcmVjdGlvbnMoZXZlbnQpO1xuLy8gICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUnKSkge1xuLy8gICAgIGZhdkJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyBGYXZvcml0ZXMnO1xuLy8gICAgIHBvcHVsYXRlQ2FyZHMoY29va2Jvb2sucmVjaXBlcyk7XG4vLyAgIH1cbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5RGlyZWN0aW9ucyhldmVudCkge1xuLy8gICBsZXQgbmV3UmVjaXBlSW5mbyA9IGNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuLy8gICAgIGlmIChyZWNpcGUuaWQgPT09IE51bWJlcihldmVudC50YXJnZXQuaWQpKSB7XG4vLyAgICAgICByZXR1cm4gcmVjaXBlO1xuLy8gICAgIH1cbi8vICAgfSlcbi8vICAgbGV0IHJlY2lwZU9iamVjdCA9IG5ldyBSZWNpcGUobmV3UmVjaXBlSW5mbywgaW5ncmVkaWVudHNEYXRhKTtcbi8vICAgbGV0IGNvc3QgPSByZWNpcGVPYmplY3QuY2FsY3VsYXRlQ29zdCgpXG4vLyAgIGxldCBjb3N0SW5Eb2xsYXJzID0gKGNvc3QgLyAxMDApLnRvRml4ZWQoMilcbi8vICAgY2FyZEFyZWEuY2xhc3NMaXN0LmFkZCgnYWxsJyk7XG4vLyAgIGNhcmRBcmVhLmlubmVySFRNTCA9IGA8aDM+JHtyZWNpcGVPYmplY3QubmFtZX08L2gzPlxuLy8gICA8cCBjbGFzcz0nYWxsLXJlY2lwZS1pbmZvJz5cbi8vICAgPHN0cm9uZz5JdCB3aWxsIGNvc3Q6IDwvc3Ryb25nPjxzcGFuIGNsYXNzPSdjb3N0IHJlY2lwZS1pbmZvJz5cbi8vICAgJCR7Y29zdEluRG9sbGFyc308L3NwYW4+PGJyPjxicj5cbi8vICAgPHN0cm9uZz5Zb3Ugd2lsbCBuZWVkOiA8L3N0cm9uZz48c3BhbiBjbGFzcz0naW5ncmVkaWVudHMgcmVjaXBlLWluZm8nPjwvc3Bhbj5cbi8vICAgPHN0cm9uZz5JbnN0cnVjdGlvbnM6IDwvc3Ryb25nPjxvbD48c3BhbiBjbGFzcz0naW5zdHJ1Y3Rpb25zIHJlY2lwZS1pbmZvJz5cbi8vICAgPC9zcGFuPjwvb2w+XG4vLyAgIDwvcD5gO1xuLy8gICBsZXQgaW5ncmVkaWVudHNTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZ3JlZGllbnRzJyk7XG4vLyAgIGxldCBpbnN0cnVjdGlvbnNTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9ucycpO1xuLy8gICByZWNpcGVPYmplY3QuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbi8vICAgICBpbmdyZWRpZW50c1NwYW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDx1bD48bGk+XG4vLyAgICAgJHtpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpfSAke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH1cbi8vICAgICAke2luZ3JlZGllbnQubmFtZX08L2xpPjwvdWw+XG4vLyAgICAgYClcbi8vICAgfSlcbi8vICAgcmVjaXBlT2JqZWN0Lmluc3RydWN0aW9ucy5mb3JFYWNoKGluc3RydWN0aW9uID0+IHtcbi8vICAgICBpbnN0cnVjdGlvbnNTcGFuLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBgPGxpPlxuLy8gICAgICR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259PC9saT5cbi8vICAgICBgKVxuLy8gICB9KVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRGYXZvcml0ZXMoKSB7XG4vLyAgIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbi8vICAgICB1c2VyLmZhdm9yaXRlUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4vLyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmF2b3JpdGUke3JlY2lwZS5pZH1gKS5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS1hY3RpdmUnKVxuLy8gICAgIH0pXG4vLyAgIH0gZWxzZSByZXR1cm5cbi8vIH1cblxuLy8gZnVuY3Rpb24gcG9wdWxhdGVDYXJkcyhyZWNpcGVzKSB7XG4vLyAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuLy8gICBpZiAoY2FyZEFyZWEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGwnKSkge1xuLy8gICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbCcpXG4vLyAgIH1cbi8vICAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4vLyAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxkaXYgaWQ9JyR7cmVjaXBlLmlkfSdcbi8vICAgICBjbGFzcz0nY2FyZCc+XG4vLyAgICAgICAgIDxoZWFkZXIgaWQ9JyR7cmVjaXBlLmlkfScgY2xhc3M9J2NhcmQtaGVhZGVyJz5cbi8vICAgICAgICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbi8vICAgICAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0nIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uJz5cbi8vICAgICAgICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfSBmYXZvcml0ZScgY2xhc3M9J2FkZCdcbi8vICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzMyLzMyMzM5LnN2ZycgYWx0PSdBZGQgdG9cbi8vICAgICAgICAgICAgIHJlY2lwZXMgdG8gY29vayc+XG4vLyAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgPGxhYmVsIGZvcj0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBmYXZvcml0ZSByZWNpcGVcbi8vICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfScgYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nZmF2b3JpdGUgZmF2b3JpdGUke3JlY2lwZS5pZH0gY2FyZC1idXR0b24nPjwvYnV0dG9uPlxuLy8gICAgICAgICA8L2hlYWRlcj5cbi8vICAgICAgICAgICA8c3BhbiBpZD0nJHtyZWNpcGUuaWR9JyBjbGFzcz0ncmVjaXBlLW5hbWUnPiR7cmVjaXBlLm5hbWV9PC9zcGFuPlxuLy8gICAgICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfScgdGFiaW5kZXg9JzAnIGNsYXNzPSdjYXJkLXBpY3R1cmUnXG4vLyAgICAgICAgICAgc3JjPScke3JlY2lwZS5pbWFnZX0nIGFsdD0nY2xpY2sgdG8gdmlldyByZWNpcGUgZm9yICR7cmVjaXBlLm5hbWV9Jz5cbi8vICAgICA8L2Rpdj5gKVxuLy8gICB9KVxuLy8gICBnZXRGYXZvcml0ZXMoKTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VySW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmNvbnRlbnRzID0gdXNlckluZ3JlZGllbnRzO1xuICB9XG4gIGdldElkc09mUGFudHJ5SW5ncmVkaWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHMubWFwKGluZyA9PiB7XG4gICAgICByZXR1cm4gaW5nLmluZ3JlZGllbnRcbiAgICB9KVxuICB9XG4gIGZpbmRSZWNpcGVJbmdyZWRpZW50c0luUGFudHJ5KHJlY2lwZSkge1xuICAgIGxldCBjdXJyZW50UGFudHJ5SWRzID0gdGhpcy5nZXRJZHNPZlBhbnRyeUluZ3JlZGllbnRzKClcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBjdXJyZW50UGFudHJ5SWRzLmluY2x1ZGVzKGluZ3JlZGllbnQuaWQpXG4gICAgfSlcbiAgfVxuICBkb2VzVXNlckhhdmVSZXF1aXJlZEluZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIHJldHVybiB0aGlzLmZpbmRSZWNpcGVJbmdyZWRpZW50c0luUGFudHJ5KHJlY2lwZSkubGVuZ3RoID09PSByZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoXG4gIH1cbiAgZmluZFdoaWNoSW5ncmVkaWVudHNBcmVTaG9ydChyZWNpcGUpIHtcbiAgICBsZXQgbm90RW5vdWdoID0gdGhpcy5maW5kUmVjaXBlSW5ncmVkaWVudHNJblBhbnRyeShyZWNpcGUpLmZpbHRlcihpbmcgPT4ge1xuICAgICAgbGV0IGluZ3JlZGllbnRTdG9jayA9IHRoaXMuZmluZEluZ3JlZGllbnRJblBhbnRyeShpbmcpLmFtb3VudFxuICAgICAgcmV0dXJuIGluZ3JlZGllbnRTdG9jayA8IGluZy5xdWFudGl0eS5hbW91bnRcbiAgICB9KVxuICAgIHJldHVybiBub3RFbm91Z2hcbiAgfVxuICBmaW5kQW1vdW50TWlzc2luZyhyZWNpcGUpIHtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kV2hpY2hJbmdyZWRpZW50c0FyZVNob3J0KHJlY2lwZSlcbiAgcmV0dXJuIG1pc3NpbmdJbmdyZWRpZW50cy5yZWR1Y2UoKGZpbmFsQXJyYXksIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGZpbmFsQXJyYXkucHVzaCh7IG5hbWU6IGluZ3JlZGllbnQubmFtZSwgZmFjdHM6IHsgaWQ6IGluZ3JlZGllbnQuaWQsIGFtb3VudE1pc3Npbmc6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gdGhpcy5maW5kSW5ncmVkaWVudEluUGFudHJ5KGluZ3JlZGllbnQpLmFtb3VudH19KVxuICAgICAgcmV0dXJuIGZpbmFsQXJyYXlcbiAgICB9LFtdKVxuICB9XG4gIGlkZW50aWZ5QW1vdW50T2ZJbmdyZWRpZW50c01pc3NpbmcocmVjaXBlKSB7XG4gICAgbGV0IGluZ3JlZGllbnRzTWlzc2luZyA9IHRoaXMuZmluZEFtb3VudE1pc3NpbmcocmVjaXBlKVxuICAgICByZXR1cm4gIGluZ3JlZGllbnRzTWlzc2luZy5yZWR1Y2UoKHN0cmluZywgaW5ncmVkaWVudCApPT57XG4gICAgICBzdHJpbmcgKz0gYCAke2luZ3JlZGllbnQuZmFjdHMuYW1vdW50TWlzc2luZ30gJHtpbmdyZWRpZW50Lm5hbWV9XFxuYFxuICAgICAgcmV0dXJuIHN0cmluZ1xuICAgIH0sXCJZb3UgYXJlIG1pc3NpbmdcIilcbiAgfVxuICBjYWxjdWxhdGVDb3N0Rm9ySW5ncmVkaWVudHMocmVjaXBlLCBBbGxJbmdyZWRpZW50cykge1xuICAgIGxldCBhbGxNaXNzaW5nID0gdGhpcy5maW5kQW1vdW50TWlzc2luZyhyZWNpcGUpXG4gICAgcmV0dXJuIGFsbE1pc3NpbmcucmVkdWNlKChjb3N0LCBpbmdyZWRpZW50KSA9PntcbiAgICAgIGxldCBjdXJyZW50SW5nID0gQWxsSW5ncmVkaWVudHMuZmluZChpbmcgPT57XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50LmZhY3RzLmlkID09PSBpbmcuaWRcbiAgICAgIH0pXG4gICAgICByZXR1cm4gY3VycmVudEluZy5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIGluZ3JlZGllbnQuZmFjdHMuYW1vdW50TWlzc2luZ1xuICAgIH0sIDApXG4gIH1cbiAgYWRkTmVjZXNzYXJ5SW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgbGV0IGFsbE1pc3NpbmcgPSAgdGhpcy5maW5kQW1vdW50TWlzc2luZyhyZWNpcGUpXG4gICAgcmV0dXJuIGFsbE1pc3NpbmcubWFwKGluZyA9PntcbiAgICAgIHJldHVybiB7W1wiaW5ncmVkaWVudFwiXTogaW5nLmZhY3RzLmlkLFxuICAgICAgICBbXCJhbW91bnRcIl06IGluZy5mYWN0cy5hbW91bnRNaXNzaW5nfVxuICAgIH0pIFxuICB9XG4gIGZpbmRJbmdyZWRpZW50SW5QYW50cnkoaW5ncmVkaWVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzLmZpbmQocGFudHJ5SW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gcGFudHJ5SW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkXG4gICAgfSlcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFudHJ5OyIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3QoKSB7XG4gICAgbGV0IGNvc3RDb3VudGVyID0gMDtcbiAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLmluZ3JlZGllbnRzRGF0YS5maW5kKHNwZWNpZmljSW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChzcGVjaWZpY0luZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBjb3N0Q291bnRlciArPSAoTnVtYmVyKHNwZWNpZmljSW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cykgKlxuICAgICAgICAgIE51bWJlcihpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvc3RDb3VudGVyIC8gMTAwO1xuICB9XG4gIHJldHVybkluc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbnNcbiAgfVxuICBmaWx0ZXJCeVRhZyhsZXR0ZXIpIHtcbiAgICB2YXIgdGFncyA9ICB0aGlzLnRhZ3MuZmlsdGVyKHRhZyA9PntcbiAgICAgIHJldHVybiB0YWcuc3BsaXQoJycpLmluY2x1ZGVzKGxldHRlci50b0xvd2VyQ2FzZSgpKVxuICAgIH0pXG4gICAgcmV0dXJuIHRhZ3NcbiAgfVxuICBjb250YWluc0luZ3JlZGllbnQoaW5wdXRJbmdyZWRpZW50KSB7IFxuICAgIGxldCBmaWx0ZXJkQXJyYXkgPSB0aGlzLmluZ3JlZGllbnRzLmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoaW5wdXRJbmdyZWRpZW50LnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcbiAgICBpZiAoZmlsdGVyZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHNlYXJjaEJ5SW5ncmVkaWVudChpbnB1dEluZ3JlZGllbnQpIHtcbiAgICB2YXIgaW5nID0gIHRoaXMuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoaW5wdXRJbmdyZWRpZW50LnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcbiAgICBpZiAoaW5nLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBpbmcubmFtZVxuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuXG5cbmltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IENvb2tib29rIGZyb20gJy4vY29va2Jvb2snO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcbmxldCByZWNpcGVEYXRhcztcbmxldCBpbmdyZWRpZW50c0RhdGE7XG5sZXQgY3VycmVudFVzZXI7XG5sZXQgZmF2b3JpdGVzO1xuXG5sZXQgbXlQYW50cnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1teS1wYW50cnknKVxubGV0IG15UmVjaXBlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW15LXVwY29taW5nLXJlY2lwZXMnKVxubGV0IG15RmF2b3JpdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZmF2b3JpdGVzJylcblxuXG5cbmxldCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbWVudS1zZWxlY3Rpb25zJylcbmxldCBoYW1idXJnZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1tZW51JylcbmxldCBjbG9zZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC1tZW51JylcbmxldCBtZW51TXlVcGNvbWluZ1JlY2lwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1teS11cGNvbWluZy1yZWNpcGVzLXRpdGxlJyk7XG5sZXQgZmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbmxldCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmNvbnN0IHJlY2lwZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xubGV0IHBhbnRyeUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFudHJ5LWNhcmRzJyk7XG5sZXQgcmVjaXBlU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZWNpcGVzLWlucHV0JylcbmxldCByZWNpcGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS1kaXNwbGF5Jyk7XG5yZWNpcGVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKT0+e1xuICBpZihmYXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpe1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFsbFJlY2lwZXMoZmlsdGVySW5wdXRzKHJlY2lwZVNlYXJjaC52YWx1ZSxpbmdyZWRpZW50c0RhdGEsJ2Zhdm9yaXRlUmVjaXBlcycpLGN1cnJlbnRVc2VyKVxuXG4gIH1cbiAgZWxzZSBpZihtZW51TXlVcGNvbWluZ1JlY2lwZXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpe1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFsbFJlY2lwZXMoZmlsdGVySW5wdXRzKHJlY2lwZVNlYXJjaC52YWx1ZSxpbmdyZWRpZW50c0RhdGEsJ3JlY2lwZXNUb0Nvb2snKSxjdXJyZW50VXNlcilcblxuICB9XG4gIGVsc2V7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUFsbFJlY2lwZXMoZmlsdGVySW5wdXRzKHJlY2lwZVNlYXJjaC52YWx1ZSxpbmdyZWRpZW50c0RhdGEpLGN1cnJlbnRVc2VyKVxuICB9XG59KVxuZmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgaWYoIWZhdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUZhdm9yaXRlcyhmaW5kRmF2b3JpdGVzKGN1cnJlbnRVc2VyLHJlY2lwZURhdGFzLCdmYXZvcml0ZVJlY2lwZXMnKSlcbiAgICBmYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpXG4gIH1cbiAgZWxzZXtcbiAgICBmYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhyZWNpcGVEYXRhcyxjdXJyZW50VXNlcilcbiAgfVxufSlcbm1lbnVNeVVwY29taW5nUmVjaXBlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICBpZighbWVudU15VXBjb21pbmdSZWNpcGVzLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XG4gICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVVwY29taW5nUmVjaXBlcyhjdXJyZW50VXNlcixyZWNpcGVEYXRhcylcbiAgICAgICAgbWVudU15VXBjb21pbmdSZWNpcGVzLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbWVudU15VXBjb21pbmdSZWNpcGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFsbFJlY2lwZXMocmVjaXBlRGF0YXMsY3VycmVudFVzZXIpXG4gICAgICB9XG59KVxuXG5yZWNpcGVEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5oaWRlUmVjaXBlUG9wdXApO1xuXG5yZWNpcGVDYXJkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItaWNvbicpKSB7XG4gIHRvZ2dsZUZhdm9yaXRlcyhldmVudClcbn1cbmlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbHVzLWljb24nKSkge1xuICBhZGRUb1VwY29taW5nUmVjaXBlcyhjdXJyZW50VXNlciwgcmVjaXBlRGF0YXMpO1xufVxuaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtaW1hZ2UnKSkge1xuICBkb21VcGRhdGVzLnNob3dSZWNpcGVQb3B1cCgpO1xuICBsZXQgY2hvc2VuUmVjaXBlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zaW5nbGUtcmVjaXBlLWNhcmQnKVxuICBkb21VcGRhdGVzLmRpc3BsYXlSZWNpcGVJbmZvKGNyZWF0ZVJlY2lwZShjaG9zZW5SZWNpcGUuaWQpKVxufVxufSlcblxuZnVuY3Rpb24gZ2V0UmVjaXBlSW5ncmVkaWVudE5hbWVzKCkge1xuICAvL2FjY2VzcyB0aGUgaW5ncmVkaWVudHMgZnJvbSBpbmdyZWRpZW50RGF0YVxuICAvL2NvbXBhcmUgZWFjaCBpbmdyZWRpZW50IGFuZCBzZWUgaWYgdGhlIGluZ3JlZGllbnRcbiAgLy9pcyBpbmNsdWRlZCBpbiB0aGUgcmVjaXBlLmluZ3JlZGllbnRzIChieSBJRClcbiAgLy9pZiB0cnVlID0+IHJldHVybnMgdGhlIGluZ3JlZGllbnQgdGhhdCBtYXRjaGVzXG4gIC8vc2V0IHRob3NlIGluY2x1ZGVkIGluZ3JlZGllbnRzIHRvIGEgdmFyaWFibGVcbiAgLy9mb3IgZWFjaCBvZiB0aG9zZSBmb3VuZCBpbmdyZWRpZW50cywgcmVhc3NpZ25cbiAgLy92YWx1ZXMgYnkgY3JlYXRpbmcgbmV3IGtleXNcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGVzKGV2ZW50KXtcbiAgaWYoZXZlbnQudGFyZ2V0LnNyYyA9PT0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmdcIil7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9ICAgXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcIlxuICAgIGFkZFRvRmF2b3JpdGVzKGV2ZW50KVxuICB9ZWxzZXsgICBcbiAgICByZW1vdmVGcm9tRmF2b3JpdGVzKGV2ZW50KVxuICAgIGV2ZW50LnRhcmdldC5zcmMgPSAgXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmdcIiB9XG59XG5mdW5jdGlvbiBhZGRUb0Zhdm9yaXRlcyhldmVudCl7XG5sZXQgcmVjaXBlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zaW5nbGUtcmVjaXBlLWNhcmQnKVxuY3VycmVudFVzZXIuYWRkVG9GYXZvcml0ZXMocmVjaXBlLmlkKVxufVxuZnVuY3Rpb24gcmVtb3ZlRnJvbUZhdm9yaXRlcyhldmVudCkge1xuICBmYXZvcml0ZXMgPSBjdXJyZW50VXNlci5mYXZvcml0ZVJlY2lwZXNcbiAgbGV0IHJlY2lwZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2luZ2xlLXJlY2lwZS1jYXJkJylcbiAgaWYoZmF2b3JpdGVzLmluY2x1ZGVzKHJlY2lwZS5pZCkpe1xuICAgIGN1cnJlbnRVc2VyLnJlbW92ZUZyb21GYXZvcml0ZXMocmVjaXBlLmlkKVxuICB9XG59XG5cbi8vIHdpbmRvdy5vbmxvYWQgPSBvblN0YXJ0dXAoKTtcbi8vIHdpbmRvdy5vbmxvYWQgPSBzaG93RG9tVXBkYXRlcyhyZWNpcGUpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBtZXJnZUZldGNoVGltZWxpbmVzKClcbn1cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlcnNEYXRhKSB7XG4gIGxldCBjdXJyZW50VXNlciA9IHVzZXJzRGF0YS5maW5kKHVzZXIgPT4ge1xuICAgIGxldCBwYXJzZWRJRCA9IHBhcnNlSW50KHVzZXIuaWQpO1xuICAgIHJldHVybiBwYXJzZWRJRCA9PT0gZG9tVXBkYXRlcy5yYW5kb21OdW1iZXJcbiAgfSlcbiAgcmV0dXJuIG5ldyBVc2VyKGN1cnJlbnRVc2VyLmlkLGN1cnJlbnRVc2VyLm5hbWUsY3VycmVudFVzZXIucGFudHJ5KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWNpcGUoaWQpIHtcbiAgbGV0IGN1cnJlbnRSZWNpcGUgPSByZWNpcGVEYXRhcy5maW5kKHJlY2lwZSA9PiB7XG4gICAgcmV0dXJuIHJlY2lwZS5pZCA9PSBpZDtcbiAgfSlcbiAgY29uc29sZS5sb2coY3VycmVudFJlY2lwZSlcbiAgcmV0dXJuIG5ldyBSZWNpcGUoY3VycmVudFJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKVxuXG59O1xuXG5mdW5jdGlvbiBhZGRUb1VwY29taW5nUmVjaXBlcyhjdXJyZW50VXNlcikge1xuICBsZXQgcmVjaXBlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zaW5nbGUtcmVjaXBlLWNhcmQnKVxuICBjdXJyZW50VXNlci5hZGRUb1JlY2lwZXNUb0Nvb2socmVjaXBlLmlkKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhbnRyeShjdXJyZW50VXNlciwgaW5ncmVkaWVudHNEYXRhKSB7XG4gIGN1cnJlbnRVc2VyLnBhbnRyeS5mb3JFYWNoKHBhbnRyeUl0ZW0gPT4ge1xuICAgIGxldCBjdXJyZW50SW5ncmVkaWVudCA9IGluZ3JlZGllbnRzRGF0YS5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIHBhbnRyeUl0ZW0uaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZDtcbiAgICB9KVxuICAgIGlmKCFwYW50cnlJdGVtLm5hbWUpe1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgICBwYW50cnlJdGVtLm5hbWUgPSBjdXJyZW50SW5ncmVkaWVudC5uYW1lO1xuICAgIHBhbnRyeUl0ZW0uZXN0aW1hdGVkQ29zdEluQ2VudHMgPSBjdXJyZW50SW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cztcbiAgfSlcbiAgLy93aGF0IGlmIHdlIG1hZGUgYSBjbGFzcyBoZXJlP1xuICByZXR1cm4gbmV3IFBhbnRyeShjdXJyZW50VXNlci5wYW50cnkpXG59XG5cbmZ1bmN0aW9uIGdyYWJSZWNpcGVzKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9yZWNpcGVzL3JlY2lwZURhdGEnKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKHJlY2lwZU9iamVjdCA9PiB7XG4gICAgcmVjaXBlRGF0YXMgPSByZWNpcGVPYmplY3QucmVjaXBlRGF0YVxuICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIGFsZXJ0KCdTb3JyeSwgdGhlIHJlY2lwZXMgZmFpbGVkIHRvIGxvYWQuIFRyeSBhZ2FpbiBsYXRlci4nKX0pXG59XG5cbmZ1bmN0aW9uIGdyYWJVc2VycygpIHtcbiAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnLClcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgfSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgZG9tVXBkYXRlcy5ncmVldFVzZXIoZGF0YS53Y1VzZXJzRGF0YVtkb21VcGRhdGVzLnJhbmRvbU51bWJlciAtMV0pXG4gICAgIHJldHVybiBkYXRhLndjVXNlcnNEYXRhO1xuICAgICAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgYWxlcnQoJ1NvcnJ5LCB0aGUgdXNlciBpbmZvcm1hdGlvbiBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpO1xuICB9KVxufVxuICBmdW5jdGlvbiBncmFiSW5ncmVkaWVudHMoKSB7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL2luZ3JlZGllbnRzL2luZ3JlZGllbnRzRGF0YScpXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgfSkudGhlbihpbmdyZWRpZW50RGF0YSA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudERhdGEuaW5ncmVkaWVudHNEYXRhO1xuICAgICAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgYWxlcnQoJ1NvcnJ5LCB0aGUgaW5ncmVkaWVudHMgZmFpbGVkIHRvIGxvYWQuIFRyeSBhZ2FpbiBsYXRlci4nKTsgICAgXG59KVxufVxuZnVuY3Rpb24gbWVyZ2VGZXRjaFRpbWVsaW5lcygpIHtcbiBQcm9taXNlLmFsbChbZ3JhYlVzZXJzKCksIGdyYWJJbmdyZWRpZW50cygpLCBncmFiUmVjaXBlcygpXSlcbiAudGhlbih2YWx1ZXMgPT4ge1xuICAgbGV0IHVzZXJzRGF0YSA9IHZhbHVlc1swXTtcbiAgIGluZ3JlZGllbnRzRGF0YSA9IHZhbHVlc1sxXTtcbiAgICBjdXJyZW50VXNlciA9IGNyZWF0ZVVzZXIodXNlcnNEYXRhKVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFsbFJlY2lwZXMocmVjaXBlRGF0YXMsY3VycmVudFVzZXIpO1xuICAgbGV0IHBhbnRyeSA9IGNyZWF0ZVBhbnRyeShjdXJyZW50VXNlcixpbmdyZWRpZW50c0RhdGEpXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5UGFudHJ5KHBhbnRyeSlcbiAgICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSBpbmZvcm1hdGlvbiBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpO1xuICB9KSBcbn1cbmZ1bmN0aW9uIGZpbmRGYXZvcml0ZXMoY3VycmVudFVzZXIscmVjaXBlRGF0YXMsY3VycmVudFVzZXJQcm9wZXJ0eSkge1xuICBsZXQgaWRzID0gY3VycmVudFVzZXJbY3VycmVudFVzZXJQcm9wZXJ0eV1cbiAgbGV0IGZhdm9yaXRlUmVjaXBpZXMgPSByZWNpcGVEYXRhcy5maWx0ZXIocmVjaXBlID0+e1xuICAgIHJldHVybiBpZHMuaW5jbHVkZXMoU3RyaW5nKHJlY2lwZS5pZCkpXG4gIH0pXG4gIHJldHVybiBmYXZvcml0ZVJlY2lwaWVzXG59XG5mdW5jdGlvbiBmaWx0ZXJJbnB1dHMobGV0dGVycyxpbmdyZWRpZW50c0RhdGEsY3VycmVudFVzZXJQcm9wZXJ0eSl7XG4gIGlmKGxldHRlcnMgPT09ICcnKXtcbiAgICByZXR1cm4gXG4gIH1cbiAgbGV0dGVycyA9IGxldHRlcnMudHJpbSgpXG4gIGxldCBhcnJheVRvRmlsdGVyO1xuICBpZihjdXJyZW50VXNlclByb3BlcnR5ID09PSB1bmRlZmluZWQpe1xuICAgICBhcnJheVRvRmlsdGVyID0gcmVjaXBlRGF0YXNcbiAgfVxuICBlbHNle1xuICAgYXJyYXlUb0ZpbHRlciA9IGZpbmRGYXZvcml0ZXMoY3VycmVudFVzZXIscmVjaXBlRGF0YXMsY3VycmVudFVzZXJQcm9wZXJ0eSk7XG4gIH1cbiAgY29uc29sZS5sb2cobGV0dGVycylcbiAgcmV0dXJuIGFycmF5VG9GaWx0ZXIuZmlsdGVyKHJlY2lwZSA9PiB7XG5cbiAgICBsZXQgY29ycmVjdEluZ3JlZGllbnQgID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PnsgXG4gICAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQocmVjSW5ncmVkaWVudHMgPT4ge1xuICAgICAgICByZXR1cm4gcmVjSW5ncmVkaWVudHMuaWQgPT09IGluZ3JlZGllbnQuaWRcbiAgICAgIH0pXG4gICAgIH0pXG4gICAgcmV0dXJuIGNvcnJlY3RJbmdyZWRpZW50Lm5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhsZXR0ZXJzLnRvVXBwZXJDYXNlKCkpIHx8IHJlY2lwZS5uYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMobGV0dGVycy50b1VwcGVyQ2FzZSgpKSB8fCByZWNpcGUudGFncy5qb2luKCcnKS5pbmNsdWRlcyhsZXR0ZXJzKVxuICB9KVxufVxuXG5oYW1idXJnZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgaGFtYnVyZ2VySWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY2xvc2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBteVBhbnRyeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbXlGYXZvcml0ZXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG15UmVjaXBlc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn0pXG5cbmNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGhhbWJ1cmdlckljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbXlQYW50cnlCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG15RmF2b3JpdGVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBteVJlY2lwZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59KVxuXG5cbiIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgcGFudHJ5KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBwYW50cnk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgfVxuXG4gIGFkZFRvRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMucHVzaChyZWNpcGUpXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKVxuICB9XG5cbiAgZmlsdGVyRmF2b3JpdGVzKHRhZykge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpO1xuICAgIH0pXG4gIH1cblxuICBmaWx0ZXJSZWNpcGVzVG9Db29rKHRhZykge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXNUb0Nvb2suZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKTtcbiAgICB9KVxuICB9XG5cbiAgZmluZEZhdm9yaXRlcyhzdHJnVG9TcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICB8fCByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tQYW50cnkocmVjaXBlKSB7XG4gICAgY29uc3QgYWxsUGFudHJ5SXRlbXNJRCA9IHRoaXMucGFudHJ5Lm1hcChwYW50cnlJdGVtID0+IHtcbiAgICAgIHJldHVybiBwYW50cnlJdGVtLmluZ3JlZGllbnQ7XG4gICAgfSlcbiAgICBjb25zdCBtaXNzaW5nSW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHMuZmlsdGVyKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuICEoYWxsUGFudHJ5SXRlbXNJRC5pbmNsdWRlcyhpbmdyZWRpZW50LmluZ3JlZGllbnQpKTtcbiAgICB9KVxuICAgIGlmIChtaXNzaW5nSW5ncmVkaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYFlvdSBoYXZlIGFsbCB0aGUgaW5ncmVkaWVudHMgaW4geW91ciBwYW50cnkhYDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1pc3NpbmdJbmdyZWRpZW50cztcbiAgICB9XG4gIH1cblxuICBhZGRUb1JlY2lwZXNUb0Nvb2socmVjaXBlKSB7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLnB1c2gocmVjaXBlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
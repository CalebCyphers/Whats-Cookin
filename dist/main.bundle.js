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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "label{color:#EBF5EE}html{display:flex;flex-direction:column;background-color:#37515C;border:2px solid #000;height:100%;width:100%}body{font-family:'Open Sans', sans-serif;width:100%}body .recipe-display{position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.3);height:100%;width:100%}body .recipe-display-main{position:fixed;left:10%;top:5rem;background-color:#EBF5EE;height:30rem;width:80%;border-radius:0.5rem;overflow:scroll;padding:3rem}body .page-title{color:#EBF5EE}h1{margin-top:0;margin-bottom:0;padding:1rem;text-align:center;width:30%}.wrapper{display:flex;justify-content:center;align-items:center}.hidden{display:none}.main-header{background-color:#EBF5EE;border-bottom:1px solid #000;display:grid;grid-template-columns:1fr 5fr 1fr;background-color:#EBF5EE;width:100%}.main-header .hamburger-menu{height:4rem;width:4rem}.main-header .x-menu{display:flex;justify-content:center;align-items:center;height:4rem;width:4rem}.main-header .header-title{text-align:center;grid-column-start:2;width:100%}.main-header .hidden{display:none}.open-menu-selections{display:flex;flex-direction:column;align-items:center;background-color:#EBF5EE}.open-menu-selections h3:hover{color:#37515C}.open-menu-selections a{text-decoration:none;font-size:2rem}.open-menu-selections a:visited{color:#000}.open-menu-selections a:hover{color:#37515C}.open-menu-selections .menu-selection{color:#000;grid-column-start:2;border-bottom:solid;text-align:center;width:50%}.open-menu-selections .menu-favorites{border:none}.page-title-and-search .page-title{text-align:center;margin:auto}.page-title-and-search .search-wrapper{display:flex;justify-content:center;align-items:center}.page-title-and-search .search-wrapper .search-icon{display:flex;height:1rem;width:1rem}.page-title-and-search .search-wrapper .search-recipes-input{height:1.5rem;width:8rem;background-color:#EBF5EE;border:1px solid #000}.page-title-and-search .search-wrapper .search-button{display:flex;justify-content:center;align-items:center;height:1.75rem;width:1.75rem;border:1px solid #000}.page-title-and-search .search-icon{height:1.5rem;width:1.5rem}.all-cards{padding:2rem;display:grid;grid-gap:1.5rem;grid-template-columns:1fr;width:100%}.pantry-cards{padding:2rem;display:grid;grid-gap:1.5rem;grid-template-columns:1fr;width:100%}.single-ingredient-card{display:grid;border-radius:0.5rem;grid-template-rows:0.5fr 3.25fr;background-color:#EBF5EE}.single-ingredient-card .ingredient-name-area{display:flex;justify-content:center;align-items:center}.single-ingredient-card .ingredient-quantity-section{display:flex;justify-content:center;align-items:center}.single-ingredient-card p{font-size:500%;margin:3rem}.single-recipe-card{display:grid;border-radius:0.5rem;grid-template-rows:0.25fr 3fr 0.5fr;background-color:#EBF5EE;box-shadow:0 0 3px #000}.single-recipe-card .all-card-icons{display:flex;justify-content:space-between;align-items:center;width:90%;height:3rem;margin:auto}.single-recipe-card .card-icon{height:2rem;width:2rem}.single-recipe-card .recipe-name{text-align:center}.single-recipe-card .card-image-section{display:flex;justify-content:center;align-items:center}.single-recipe-card .card-image{border:1px solid #000;width:93%;height:auto}.user-info{margin:0 auto;text-align:center;width:40%}.menu-selection:hover,.search-icon:hover{cursor:pointer}.menu-selection:active,.search-icon:active{background-color:#C3C2C6}.favorite{background-color:#EBF5EE;background-image:url(https://image.flaticon.com/icons/svg/149/149222.svg);background-repeat:no-repeat;background-position:center;width:13%}h3{padding:1rem 0 1rem 0;color:#000;font-size:2rem}.recipe-name{display:block;font-size:150%;text-align:center}.card-image:hover{opacity:0.7}.card-image:active{border:2px solid #000}main{display:flex;justify-content:center;align-items:center;background-color:#37515C;height:auto;width:100%}.favorite-active{background-image:url(https://image.flaticon.com/icons/svg/148/148841.svg);background-repeat:no-repeat}@media (min-width: 800px){.all-cards{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1200px){.all-cards{grid-template-columns:repeat(3, 1fr)}}\n", ""]);



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

const recipeCards = document.querySelector('.all-cards');
let recipeDisplay = document.querySelector('.recipe-display');

let domUpdates = {
  randomNumber: Math.floor(Math.random() * 49) + 1,

   displayAllRecipes(recipes, currentUser) {
    let favorites = currentUser.favoriteRecipes;
    recipeCards.innerHTML = '';
    recipes.forEach(recipe => {
      let src = "https://image.flaticon.com/icons/svg/149/149222.svg"
      if (favorites !== undefined && favorites.includes(String(recipe.id) )) {
        src = "https://image.flaticon.com/icons/svg/148/148841.svg";
      }
      recipeCards.innerHTML += `<article id = ${recipe.id} class="single-recipe-card ">
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

  displayRecipeInfo(recipe, cookables, missingIng) {
    let cookable; 
    let isRecipeCookable = cookables.find(cookableRecipe =>{
      return recipe.name === cookableRecipe.name
    }) !== undefined; 
    if (isRecipeCookable) {
      cookable = 'You can cook this recipe!';
    } else {
      cookable = `Can't cook this recipe! <br>
      You are missing: <br>${this.formatObjectsToDisplatCorrectly((this.figureMissing(recipe, missingIng)))}`; 
    }
    let trueInstructions = recipe.instructions.map(instruction => {
      return instruction.instruction;
    }).join('<br>');
    recipeDisplay.innerHTML = '';
    recipeDisplay.innerHTML += 
    `<section class="recipe-display-main">
    <h1>${cookable}</h1>
    <h1>${recipe.name}</h1>
    <div class="recipe-ingredients-with-cost">
    <h2>Necessary Ingredients</h2>
      <p class="popup-ingredients">${this.formatObjectsToDisplatCorrectly((recipe.ingredients))}</p>
      <h3 class="pop-costs">Costs ${recipe.calculateCost()} dollars to make </h3>
    </div>
    <p class="recipe-instructions">${trueInstructions}</p>
</section>`;
  },

  showRecipePopup() {
    recipeDisplay.classList.remove('hidden');
  },

  hideRecipePopup() {
    recipeDisplay.classList.add('hidden');
  },
  
  greetUser(user) {
    const userName = document.querySelector('.user-name');
    if (userName === null) {
      return 
    }
    userName.innerText += ' ' + user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },
  
  displayPantry(pantry) {
    pantry = pantry.contents
    recipeCards.innerHTML = ''
    pantry.forEach(ingInPantry => {
      recipeCards.innerHTML += `<article class="single-ingredient-card">
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
      return;
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
  },

  figureMissing(recipe, missingIng) {
    let correctRecipe = missingIng.find(rep =>{
      return recipe.name === rep.name;
    }) 
    return correctRecipe.NotEnough;
  },

  formatObjectsToDisplatCorrectly(obj) {
    return obj.reduce((acc, curr) => {
      return acc += `${curr.quantity.amount} ${curr.quantity.unit} ${curr.name} <br>`;
    }, '')
  }
}

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
 
  findWhichIngredientsAreShort(recipe) {
    let notEnough = recipe.ingredients.filter(ing => {
      if (this.findIngredientInPantry(ing) === undefined) {
        return true
      }
      let ingredientStock = this.findIngredientInPantry(ing).amount
      return ingredientStock < ing.quantity.amount 
    })
    return notEnough
  }
  findAmountMissing(recipe) {
    let missingIngredients = this.findWhichIngredientsAreShort(recipe)
    return missingIngredients.reduce((finalArray, ingredient) => {
      finalArray.push({ name: ingredient.name, facts: { id: ingredient.id, amountMissing: parseFloat(ingredient.quantity.amount - this.findIngredientInPantry(ingredient).amount)}})
      return finalArray
    }, [])
  }
  identifyAmountOfIngredientsMissing(recipe) {
    let ingredientsMissing = this.findAmountMissing(recipe)
    return  ingredientsMissing.reduce((string, ingredient )=>{
      string += ` ${ingredient.facts.amountMissing} ${ingredient.name}\n`
      return string
    }, "You are missing")
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
    return parseFloat((costCounter / 100))
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
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");






let backToHomeButton = document.querySelector('.back-to-home');
let myPantryButton = document.querySelector('.menu-my-pantry');
let myRecipesButton = document.querySelector('.menu-my-upcoming-recipes');
let myFavoritesButton = document.querySelector('.menu-favorites');
let navMenu = document.querySelector('.open-menu-selections');
let hamburgerIcon = document.querySelector('.hamburger-menu');
let closeIcon = document.querySelector('.x-menu');
let menuMyUpcomingRecipes = document.querySelector('.menu-my-upcoming-recipes-title');
let favButton = document.querySelector('.view-favorites');
let recipeCards = document.querySelector('.all-cards');
let recipeSearch = document.querySelector('.search-recipes-input');
let recipeDisplay = document.querySelector('.recipe-display');
let recipesData;
let ingredientsData;
let currentUser
let favorites;
let pantry;
let cookAbleRecipes;
let missingIng;

window.onload = function() {
  mergeFetchTimelines();
};

backToHomeButton.addEventListener('click', () => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayAllRecipes(recipesData,currentUser)
});

recipeSearch.addEventListener('keyup', ()=>{
  if (favButton.classList.contains('clicked')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData,'favoriteRecipes'),currentUser)
  } else if (menuMyUpcomingRecipes.classList.contains('clicked')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData,'recipesToCook'),currentUser)
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayAllRecipes(filterInputs(recipeSearch.value,ingredientsData),currentUser)
  }
});

favButton.addEventListener('click', () => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayFavorites(findFavorites(currentUser,recipesData,'favoriteRecipes')); 
});

menuMyUpcomingRecipes.addEventListener('click', () =>{
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayUpcomingRecipes(currentUser, recipesData)
});

myPantryButton.addEventListener('click', () => {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayPantry(pantry)
});

recipeDisplay.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].hideRecipePopup);

recipeCards.addEventListener('click', () => {
  if (event.target.classList.contains('star-icon')) {
    toggleFavorites(event)
  }
  if (event.target.classList.contains('plus-icon')) {
    addToUpcomingRecipes(currentUser, recipesData);
  }
  if (event.target.classList.contains('card-image')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].showRecipePopup();
    let chosenRecipe = event.target.closest('.single-recipe-card')
    findNames(createRecipe(chosenRecipe.id),ingredientsData)
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipeInfo(createRecipe(chosenRecipe.id),cookAbleRecipes,missingIng)
  }
});

hamburgerIcon.addEventListener('click', ()=>{
  navMenu.classList.remove('hidden');
  hamburgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  myPantryButton.classList.remove('hidden');
  myFavoritesButton.classList.remove('hidden');
  myRecipesButton.classList.remove('hidden');
});

closeIcon.addEventListener('click', ()=>{
  navMenu.classList.add('hidden');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  myPantryButton.classList.add('hidden');
  myFavoritesButton.classList.add('hidden');
  myRecipesButton.classList.add('hidden');
});

function toggleFavorites(event) {
  if (event.target.src === "https://image.flaticon.com/icons/svg/149/149222.svg") {
    event.target.src =   "https://image.flaticon.com/icons/svg/148/148841.svg"
    addToFavorites(event)
  } else {   
    removeFromFavorites(event)
    event.target.src =  "https://image.flaticon.com/icons/svg/149/149222.svg" 
  }
};

function addToFavorites(event) {
  let recipe = event.target.closest('.single-recipe-card')
  currentUser.addToFavorites(recipe.id)
};

function removeFromFavorites(event) {
  favorites = currentUser.favoriteRecipes
  let recipe = event.target.closest('.single-recipe-card')
  if (favorites.includes(recipe.id)) {
    currentUser.removeFromFavorites(recipe.id)
  }
};

function createUser(usersData) {
  let currentUser = usersData.find(user => {
    let parsedID = parseInt(user.id);
    return parsedID === _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].randomNumber
  })
  return new _user__WEBPACK_IMPORTED_MODULE_3__["default"](currentUser.id,currentUser.name,currentUser.pantry)
};

function createRecipe(id) {
  let currentRecipe = recipesData.find(recipe => {
    return recipe.id == id;
  })
  return new _recipe__WEBPACK_IMPORTED_MODULE_2__["default"](currentRecipe, ingredientsData)
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
    if (!currentIngredient.name ) {
      return
    }
    refigurePantry(pantryItem, currentIngredient) 
  })
  return new _pantry__WEBPACK_IMPORTED_MODULE_1__["default"](currentUser.pantry)
};

function grabRecipes() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(recipeObject => {
      recipesData = recipeObject.recipeData
    })
    .catch(err => {
      console.log(err);
      alert('Sorry, the recipes failed to load. Try again later.')
    })
};

function grabUsers() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
    .then(response => {
      return response.json()
    })
    .then(data => {
      _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].greetUser(data.wcUsersData[_domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].randomNumber - 1])
      return data.wcUsersData;
    })
    .catch(err => {
      console.log(err);
      alert('Sorry, the user information failed to load. Try again later.');
    })
};

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
};

function mergeFetchTimelines() {
  Promise.all([grabUsers(), grabIngredients(), grabRecipes()])
    .then(values => {
      let usersData = values[0];
      ingredientsData = values[1];
      currentUser = createUser(usersData)
      _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayAllRecipes(recipesData, currentUser);
      pantry = createPantry(currentUser, ingredientsData)
      missingIng = findWhichIngredientsAreMissing(recipesData)
      cookAbleRecipes = findRecipiesCanCook(missingIng)
    })
    .catch(err => {
     console.log(err);
      alert('Sorry, the information failed to load. Try again later.');
    }) 
};

function findFavorites(currentUser, recipesData, currentUserProperty) {
  let ids = currentUser[currentUserProperty]
  let favoriteRecipies = recipesData.filter(recipe =>{
    return ids.includes(String(recipe.id))
  })
  return favoriteRecipies
};

function findRecipiesCanCook(missingIng) {
  return missingIng.filter(recipe =>{
    return recipe.NotEnough.length === 0
  })
};

function refigurePantry(pantryItem, currentIngredient) {
  pantryItem.amount = Math.ceil(pantryItem.amount)
  pantryItem.name = currentIngredient.name;
  pantryItem.estimatedCostInCents = currentIngredient.estimatedCostInCents;
};

function findWhichIngredientsAreMissing(recipesData) {
  return recipesData.map(recipe =>{
    return {name: recipe.name, id: recipe.id, ingredients: recipe.ingredients, NotEnough: pantry.findWhichIngredientsAreShort(recipe)}
 })
};

function filterInputs(letters, ingredientsData, currentUserProperty) {
  if (letters === '') {
    return recipesData
  }
  letters = letters.trim()
  let arrayToFilter;
  if (currentUserProperty === undefined) {
    arrayToFilter = recipesData;
  } else {
    arrayToFilter = findFavorites(currentUser, recipesData, currentUserProperty);
  } 
  return findLettersInRecipes(arrayToFilter, letters, ingredientsData)
};

function findLettersInRecipes (arrayToFilter, letters, ingredientsData) {
  return arrayToFilter.filter(recipe => {
    let correctIngredient  = ingredientsData.find(ingredient => { 
      return recipe.ingredients.find(recIngredients => {
        return recIngredients.id === ingredient.id
      })
    })
    return correctIngredient.name.toUpperCase().includes(letters.toUpperCase()) || recipe.name.toUpperCase().includes(letters.toUpperCase()) || recipe.tags.join('').includes(letters)
  })
};

function findNames(recipe, ingredientsData) {
  recipe.ingredients.forEach(ingredient =>{
    let correctIngredient = ingredientsData.find(ing =>{
      return ingredient.id === ing.id
    })    
    ingredient.name = correctIngredient.name
  })
};
  






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/NGYyZSIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNB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QUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFH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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsYWJlbHtjb2xvcjojRUJGNUVFfWh0bWx7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOiMzNzUxNUM7Ym9yZGVyOjJweCBzb2xpZCAjMDAwO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Ym9keXtmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjt3aWR0aDoxMDAlfWJvZHkgLnJlY2lwZS1kaXNwbGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4zKTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfWJvZHkgLnJlY2lwZS1kaXNwbGF5LW1haW57cG9zaXRpb246Zml4ZWQ7bGVmdDoxMCU7dG9wOjVyZW07YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2hlaWdodDozMHJlbTt3aWR0aDo4MCU7Ym9yZGVyLXJhZGl1czowLjVyZW07b3ZlcmZsb3c6c2Nyb2xsO3BhZGRpbmc6M3JlbX1ib2R5IC5wYWdlLXRpdGxle2NvbG9yOiNFQkY1RUV9aDF7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nOjFyZW07dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MzAlfS53cmFwcGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uaGlkZGVue2Rpc3BsYXk6bm9uZX0ubWFpbi1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDA7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgNWZyIDFmcjtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7d2lkdGg6MTAwJX0ubWFpbi1oZWFkZXIgLmhhbWJ1cmdlci1tZW51e2hlaWdodDo0cmVtO3dpZHRoOjRyZW19Lm1haW4taGVhZGVyIC54LW1lbnV7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDo0cmVtO3dpZHRoOjRyZW19Lm1haW4taGVhZGVyIC5oZWFkZXItdGl0bGV7dGV4dC1hbGlnbjpjZW50ZXI7Z3JpZC1jb2x1bW4tc3RhcnQ6Mjt3aWR0aDoxMDAlfS5tYWluLWhlYWRlciAuaGlkZGVue2Rpc3BsYXk6bm9uZX0ub3Blbi1tZW51LXNlbGVjdGlvbnN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyBoMzpob3Zlcntjb2xvcjojMzc1MTVDfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyBhe3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToycmVtfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyBhOnZpc2l0ZWR7Y29sb3I6IzAwMH0ub3Blbi1tZW51LXNlbGVjdGlvbnMgYTpob3Zlcntjb2xvcjojMzc1MTVDfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyAubWVudS1zZWxlY3Rpb257Y29sb3I6IzAwMDtncmlkLWNvbHVtbi1zdGFydDoyO2JvcmRlci1ib3R0b206c29saWQ7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NTAlfS5vcGVuLW1lbnUtc2VsZWN0aW9ucyAubWVudS1mYXZvcml0ZXN7Ym9yZGVyOm5vbmV9LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAucGFnZS10aXRsZXt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46YXV0b30ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5zZWFyY2gtd3JhcHBlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAuc2VhcmNoLXdyYXBwZXIgLnNlYXJjaC1pY29ue2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MXJlbTt3aWR0aDoxcmVtfS5wYWdlLXRpdGxlLWFuZC1zZWFyY2ggLnNlYXJjaC13cmFwcGVyIC5zZWFyY2gtcmVjaXBlcy1pbnB1dHtoZWlnaHQ6MS41cmVtO3dpZHRoOjhyZW07YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFO2JvcmRlcjoxcHggc29saWQgIzAwMH0ucGFnZS10aXRsZS1hbmQtc2VhcmNoIC5zZWFyY2gtd3JhcHBlciAuc2VhcmNoLWJ1dHRvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjEuNzVyZW07d2lkdGg6MS43NXJlbTtib3JkZXI6MXB4IHNvbGlkICMwMDB9LnBhZ2UtdGl0bGUtYW5kLXNlYXJjaCAuc2VhcmNoLWljb257aGVpZ2h0OjEuNXJlbTt3aWR0aDoxLjVyZW19LmFsbC1jYXJkc3twYWRkaW5nOjJyZW07ZGlzcGxheTpncmlkO2dyaWQtZ2FwOjEuNXJlbTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO3dpZHRoOjEwMCV9LnBhbnRyeS1jYXJkc3twYWRkaW5nOjJyZW07ZGlzcGxheTpncmlkO2dyaWQtZ2FwOjEuNXJlbTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO3dpZHRoOjEwMCV9LnNpbmdsZS1pbmdyZWRpZW50LWNhcmR7ZGlzcGxheTpncmlkO2JvcmRlci1yYWRpdXM6MC41cmVtO2dyaWQtdGVtcGxhdGUtcm93czowLjVmciAzLjI1ZnI7YmFja2dyb3VuZC1jb2xvcjojRUJGNUVFfS5zaW5nbGUtaW5ncmVkaWVudC1jYXJkIC5pbmdyZWRpZW50LW5hbWUtYXJlYXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnNpbmdsZS1pbmdyZWRpZW50LWNhcmQgLmluZ3JlZGllbnQtcXVhbnRpdHktc2VjdGlvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnNpbmdsZS1pbmdyZWRpZW50LWNhcmQgcHtmb250LXNpemU6NTAwJTttYXJnaW46M3JlbX0uc2luZ2xlLXJlY2lwZS1jYXJke2Rpc3BsYXk6Z3JpZDtib3JkZXItcmFkaXVzOjAuNXJlbTtncmlkLXRlbXBsYXRlLXJvd3M6MC4yNWZyIDNmciAwLjVmcjtiYWNrZ3JvdW5kLWNvbG9yOiNFQkY1RUU7Ym94LXNoYWRvdzowIDAgM3B4ICMwMDB9LnNpbmdsZS1yZWNpcGUtY2FyZCAuYWxsLWNhcmQtaWNvbnN7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDo5MCU7aGVpZ2h0OjNyZW07bWFyZ2luOmF1dG99LnNpbmdsZS1yZWNpcGUtY2FyZCAuY2FyZC1pY29ue2hlaWdodDoycmVtO3dpZHRoOjJyZW19LnNpbmdsZS1yZWNpcGUtY2FyZCAucmVjaXBlLW5hbWV7dGV4dC1hbGlnbjpjZW50ZXJ9LnNpbmdsZS1yZWNpcGUtY2FyZCAuY2FyZC1pbWFnZS1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uc2luZ2xlLXJlY2lwZS1jYXJkIC5jYXJkLWltYWdle2JvcmRlcjoxcHggc29saWQgIzAwMDt3aWR0aDo5MyU7aGVpZ2h0OmF1dG99LnVzZXItaW5mb3ttYXJnaW46MCBhdXRvO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjQwJX0ubWVudS1zZWxlY3Rpb246aG92ZXIsLnNlYXJjaC1pY29uOmhvdmVye2N1cnNvcjpwb2ludGVyfS5tZW51LXNlbGVjdGlvbjphY3RpdmUsLnNlYXJjaC1pY29uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNDM0MyQzZ9LmZhdm9yaXRle2JhY2tncm91bmQtY29sb3I6I0VCRjVFRTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjt3aWR0aDoxMyV9aDN7cGFkZGluZzoxcmVtIDAgMXJlbSAwO2NvbG9yOiMwMDA7Zm9udC1zaXplOjJyZW19LnJlY2lwZS1uYW1le2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjE1MCU7dGV4dC1hbGlnbjpjZW50ZXJ9LmNhcmQtaW1hZ2U6aG92ZXJ7b3BhY2l0eTowLjd9LmNhcmQtaW1hZ2U6YWN0aXZle2JvcmRlcjoycHggc29saWQgIzAwMH1tYWlue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMzNzUxNUM7aGVpZ2h0OmF1dG87d2lkdGg6MTAwJX0uZmF2b3JpdGUtYWN0aXZle2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fUBtZWRpYSAobWluLXdpZHRoOiA4MDBweCl7LmFsbC1jYXJkc3tncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcil9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpey5hbGwtY2FyZHN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLCAxZnIpfX1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG5jb25zdCByZWNpcGVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmxldCByZWNpcGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS1kaXNwbGF5Jyk7XG5cbmxldCBkb21VcGRhdGVzID0ge1xuICByYW5kb21OdW1iZXI6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQ5KSArIDEsXG5cbiAgIGRpc3BsYXlBbGxSZWNpcGVzKHJlY2lwZXMsIGN1cnJlbnRVc2VyKSB7XG4gICAgbGV0IGZhdm9yaXRlcyA9IGN1cnJlbnRVc2VyLmZhdm9yaXRlUmVjaXBlcztcbiAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgPSAnJztcbiAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGxldCBzcmMgPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1wiXG4gICAgICBpZiAoZmF2b3JpdGVzICE9PSB1bmRlZmluZWQgJiYgZmF2b3JpdGVzLmluY2x1ZGVzKFN0cmluZyhyZWNpcGUuaWQpICkpIHtcbiAgICAgICAgc3JjID0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcIjtcbiAgICAgIH1cbiAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZS5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmQgXCI+XG4gICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImFsbC1jYXJkLWljb25zXCI+XG4gICAgICAgICAgIDxpbWcgY2xhc3M9XCJwbHVzLWljb24gY2FyZC1pY29uXCIgdGFiaW5kZXg9XCIwXCIgc3JjPVwiLi9pbWFnZXMvcGx1cy1pY29uLnBuZ1wiIGFsdD1cInNob3cgcmVjaXBlIGRldGFpbHMgYnV0dG9uXCI+XG4gICAgICAgICAgIDxpbWcgY2xhc3M9XCJzdGFyLWljb24gY2FyZC1pY29uXCIgdGFiaW5kZXg9XCIwXCIgc3JjPSR7c3JjfSBhbHQ9XCJhZGQgdG8gZmF2b3JpdGVzIGJ1dHRvblwiPlxuICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjYXJkLWltYWdlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1hZ2VcIiB0YWJpbmRleD1cIjBcIiBzcmM9XCIke3JlY2lwZS5pbWFnZX1cIiBhbHQ9XCJpbWFnZSBvZiAke3JlY2lwZS5uYW1lfVwiPlxuICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWNpcGUtbmFtZS1hcmVhXCI+XG4gICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1uYW1lXCIgdGFiaW5kZXg9XCIwXCI+JHtyZWNpcGUubmFtZX08L2gyPlxuICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgIDwvYXJ0aWNsZT5gXG4gICAgfSlcbiAgfSxcblxuICBkaXNwbGF5UmVjaXBlSW5mbyhyZWNpcGUsIGNvb2thYmxlcywgbWlzc2luZ0luZykge1xuICAgIGxldCBjb29rYWJsZTsgXG4gICAgbGV0IGlzUmVjaXBlQ29va2FibGUgPSBjb29rYWJsZXMuZmluZChjb29rYWJsZVJlY2lwZSA9PntcbiAgICAgIHJldHVybiByZWNpcGUubmFtZSA9PT0gY29va2FibGVSZWNpcGUubmFtZVxuICAgIH0pICE9PSB1bmRlZmluZWQ7IFxuICAgIGlmIChpc1JlY2lwZUNvb2thYmxlKSB7XG4gICAgICBjb29rYWJsZSA9ICdZb3UgY2FuIGNvb2sgdGhpcyByZWNpcGUhJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29va2FibGUgPSBgQ2FuJ3QgY29vayB0aGlzIHJlY2lwZSEgPGJyPlxuICAgICAgWW91IGFyZSBtaXNzaW5nOiA8YnI+JHt0aGlzLmZvcm1hdE9iamVjdHNUb0Rpc3BsYXRDb3JyZWN0bHkoKHRoaXMuZmlndXJlTWlzc2luZyhyZWNpcGUsIG1pc3NpbmdJbmcpKSl9YDsgXG4gICAgfVxuICAgIGxldCB0cnVlSW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucy5tYXAoaW5zdHJ1Y3Rpb24gPT4ge1xuICAgICAgcmV0dXJuIGluc3RydWN0aW9uLmluc3RydWN0aW9uO1xuICAgIH0pLmpvaW4oJzxicj4nKTtcbiAgICByZWNpcGVEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICAgIHJlY2lwZURpc3BsYXkuaW5uZXJIVE1MICs9IFxuICAgIGA8c2VjdGlvbiBjbGFzcz1cInJlY2lwZS1kaXNwbGF5LW1haW5cIj5cbiAgICA8aDE+JHtjb29rYWJsZX08L2gxPlxuICAgIDxoMT4ke3JlY2lwZS5uYW1lfTwvaDE+XG4gICAgPGRpdiBjbGFzcz1cInJlY2lwZS1pbmdyZWRpZW50cy13aXRoLWNvc3RcIj5cbiAgICA8aDI+TmVjZXNzYXJ5IEluZ3JlZGllbnRzPC9oMj5cbiAgICAgIDxwIGNsYXNzPVwicG9wdXAtaW5ncmVkaWVudHNcIj4ke3RoaXMuZm9ybWF0T2JqZWN0c1RvRGlzcGxhdENvcnJlY3RseSgocmVjaXBlLmluZ3JlZGllbnRzKSl9PC9wPlxuICAgICAgPGgzIGNsYXNzPVwicG9wLWNvc3RzXCI+Q29zdHMgJHtyZWNpcGUuY2FsY3VsYXRlQ29zdCgpfSBkb2xsYXJzIHRvIG1ha2UgPC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cInJlY2lwZS1pbnN0cnVjdGlvbnNcIj4ke3RydWVJbnN0cnVjdGlvbnN9PC9wPlxuPC9zZWN0aW9uPmA7XG4gIH0sXG5cbiAgc2hvd1JlY2lwZVBvcHVwKCkge1xuICAgIHJlY2lwZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgaGlkZVJlY2lwZVBvcHVwKCkge1xuICAgIHJlY2lwZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0sXG4gIFxuICBncmVldFVzZXIodXNlcikge1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xuICAgIGlmICh1c2VyTmFtZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFxuICAgIH1cbiAgICB1c2VyTmFtZS5pbm5lclRleHQgKz0gJyAnICsgdXNlci5uYW1lLnNwbGl0KCcgJylbMF0gKyAnICcgKyB1c2VyLm5hbWUuc3BsaXQoJyAnKVsxXVswXTtcbiAgfSxcbiAgXG4gIGRpc3BsYXlQYW50cnkocGFudHJ5KSB7XG4gICAgcGFudHJ5ID0gcGFudHJ5LmNvbnRlbnRzXG4gICAgcmVjaXBlQ2FyZHMuaW5uZXJIVE1MID0gJydcbiAgICBwYW50cnkuZm9yRWFjaChpbmdJblBhbnRyeSA9PiB7XG4gICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgKz0gYDxhcnRpY2xlIGNsYXNzPVwic2luZ2xlLWluZ3JlZGllbnQtY2FyZFwiPlxuICAgIDxhcnRpY2xlIGNsYXNzPVwiaW5ncmVkaWVudC1uYW1lLWFyZWFcIj5cbiAgICAgIDxoMiBjbGFzcz1cImluZ3JlZGllbnQtbmFtZVwiIHRhYmluZGV4PVwiMFwiPiR7aW5nSW5QYW50cnkubmFtZX08L2gyPlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8YXJ0aWNsZSBjbGFzcz1cImluZ3JlZGllbnQtcXVhbnRpdHktc2VjdGlvblwiPlxuICAgICAgPGJ1dHRvbiBhbHQ9XCJkZWNyZW1lbnQgaW5ncmVkaWVudCBxdWFudGl0eSBidXR0b25cIj4tPC9idXR0b24+XG4gICAgICA8cCBjbGFzcyA9ICdpbmdyZWRpZW50LXF1YW50aXR5JyB0YWJpbmRleD1cIjBcIj4ke2luZ0luUGFudHJ5LmFtb3VudH08L3A+XG4gICAgICA8YnV0dG9uIGFsdD1cImluY3JpbWVudCBpbmdyZWRpZW50IHF1YW50aXR5IGJ1dHRvblwiPis8L2J1dHRvbj5cbiAgICA8L2FydGljbGU+XG4gIDwvYXJ0aWNsZT5gXG4gICAgfSk7XG4gIH0sXG5cbiAgICBkaXNwbGF5VXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLCByZWNpcGVEYXRhcykge1xuICAgICAgaWYgKGN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LW15LXVwY29taW5nLXJlY2lwZXMtdGl0bGUnKSkge1xuICAgICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgcmVjaXBlRGF0YXMuZm9yRWFjaChyZWNpcGVEYXRhUG9pbnQgPT4ge1xuICAgICAgICBsZXQgZmF2b3JpdGVzID0gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzXG4gICAgICAgIGxldCBzcmMgPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1wiXG4gICAgICBpZiAoZmF2b3JpdGVzICE9PSB1bmRlZmluZWQgJiYgZmF2b3JpdGVzLmluY2x1ZGVzKFN0cmluZyhyZWNpcGVEYXRhUG9pbnQuaWQpICkpIHtcbiAgICAgICAgc3JjID0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcIlxuICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VXNlci5yZWNpcGVzVG9Db29rLmluY2x1ZGVzKFN0cmluZyhyZWNpcGVEYXRhUG9pbnQuaWQpKSkge1xuICAgICAgICAgIHJlY2lwZUNhcmRzLmlubmVySFRNTCArPSBgPGFydGljbGUgaWQgPSAke3JlY2lwZURhdGFQb2ludC5pZH0gY2xhc3M9XCJzaW5nbGUtcmVjaXBlLWNhcmQgXCI+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJhbGwtY2FyZC1pY29uc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBsdXMtaWNvbiBjYXJkLWljb25cIiB0YWJpbmRleD1cIjBcIiBzcmM9XCIuL2ltYWdlcy9wbHVzLWljb24ucG5nXCIgYWx0PVwic2hvdyByZWNpcGUgZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInN0YXItaWNvbiBjYXJkLWljb25cIiB0YWJpbmRleD1cIjBcIiBzcmM9JHtzcmN9IGFsdD1cImFkZCB0byBmYXZvcml0ZXMgYnV0dG9uXCI+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZC1pbWFnZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHRhYmluZGV4PVwiMFwiIHNyYz1cIiR7cmVjaXBlRGF0YVBvaW50LmltYWdlfVwiIGFsdD1cInNhbXBsZSBkaXNwbGF5IG9mIHJlY2lwZVwiPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1uYW1lLWFyZWFcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZS1uYW1lXCIgdGFiaW5kZXg9XCIwXCI+JHtyZWNpcGVEYXRhUG9pbnQubmFtZX08L2gyPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9hcnRpY2xlPmBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgZGlzcGxheUZhdm9yaXRlcyhmYXZvcml0ZXMpIHtcbiAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVjaXBlQ2FyZHMuaW5uZXJIVE1MID0gJydcbiAgICBmYXZvcml0ZXMuZm9yRWFjaChyZWNpcGUgPT57XG4gICAgICByZWNpcGVDYXJkcy5pbm5lckhUTUwgKz0gYDxhcnRpY2xlIGlkID0gJHtyZWNpcGUuaWR9IGNsYXNzPVwic2luZ2xlLXJlY2lwZS1jYXJkIFwiPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJhbGwtY2FyZC1pY29uc1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwicGx1cy1pY29uIGNhcmQtaWNvblwiIHRhYmluZGV4PVwiMFwiIHNyYz1cIi4vaW1hZ2VzL3BsdXMtaWNvbi5wbmdcIiBhbHQ9XCJzaG93IHJlY2lwZSBkZXRhaWxzIGJ1dHRvblwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwic3Rhci1pY29uIGNhcmQtaWNvblwiIHRhYmluZGV4PVwiMFwiIHNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1wiIGFsdD1cImFkZCB0byBmYXZvcml0ZXMgYnV0dG9uXCI+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmQtaW1hZ2Utc2VjdGlvblwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHRhYmluZGV4PVwiMFwiIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiIGFsdD1cImltYWdlIG9mICR7cmVjaXBlLm5hbWV9XCI+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1uYW1lLWFyZWFcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlLW5hbWVcIiB0YWJpbmRleD1cIjBcIj4ke3JlY2lwZS5uYW1lfTwvaDI+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9hcnRpY2xlPmBcbiAgICB9KVxuICB9LFxuXG4gIGZpZ3VyZU1pc3NpbmcocmVjaXBlLCBtaXNzaW5nSW5nKSB7XG4gICAgbGV0IGNvcnJlY3RSZWNpcGUgPSBtaXNzaW5nSW5nLmZpbmQocmVwID0+e1xuICAgICAgcmV0dXJuIHJlY2lwZS5uYW1lID09PSByZXAubmFtZTtcbiAgICB9KSBcbiAgICByZXR1cm4gY29ycmVjdFJlY2lwZS5Ob3RFbm91Z2g7XG4gIH0sXG5cbiAgZm9ybWF0T2JqZWN0c1RvRGlzcGxhdENvcnJlY3RseShvYmopIHtcbiAgICByZXR1cm4gb2JqLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICByZXR1cm4gYWNjICs9IGAke2N1cnIucXVhbnRpdHkuYW1vdW50fSAke2N1cnIucXVhbnRpdHkudW5pdH0gJHtjdXJyLm5hbWV9IDxicj5gO1xuICAgIH0sICcnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VySW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmNvbnRlbnRzID0gdXNlckluZ3JlZGllbnRzO1xuICB9XG4gIGdldElkc09mUGFudHJ5SW5ncmVkaWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHMubWFwKGluZyA9PiB7XG4gICAgICByZXR1cm4gaW5nLmluZ3JlZGllbnRcbiAgICB9KVxuICB9XG4gXG4gIGZpbmRXaGljaEluZ3JlZGllbnRzQXJlU2hvcnQocmVjaXBlKSB7XG4gICAgbGV0IG5vdEVub3VnaCA9IHJlY2lwZS5pbmdyZWRpZW50cy5maWx0ZXIoaW5nID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbmRJbmdyZWRpZW50SW5QYW50cnkoaW5nKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBsZXQgaW5ncmVkaWVudFN0b2NrID0gdGhpcy5maW5kSW5ncmVkaWVudEluUGFudHJ5KGluZykuYW1vdW50XG4gICAgICByZXR1cm4gaW5ncmVkaWVudFN0b2NrIDwgaW5nLnF1YW50aXR5LmFtb3VudCBcbiAgICB9KVxuICAgIHJldHVybiBub3RFbm91Z2hcbiAgfVxuICBmaW5kQW1vdW50TWlzc2luZyhyZWNpcGUpIHtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kV2hpY2hJbmdyZWRpZW50c0FyZVNob3J0KHJlY2lwZSlcbiAgICByZXR1cm4gbWlzc2luZ0luZ3JlZGllbnRzLnJlZHVjZSgoZmluYWxBcnJheSwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgZmluYWxBcnJheS5wdXNoKHsgbmFtZTogaW5ncmVkaWVudC5uYW1lLCBmYWN0czogeyBpZDogaW5ncmVkaWVudC5pZCwgYW1vdW50TWlzc2luZzogcGFyc2VGbG9hdChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAtIHRoaXMuZmluZEluZ3JlZGllbnRJblBhbnRyeShpbmdyZWRpZW50KS5hbW91bnQpfX0pXG4gICAgICByZXR1cm4gZmluYWxBcnJheVxuICAgIH0sIFtdKVxuICB9XG4gIGlkZW50aWZ5QW1vdW50T2ZJbmdyZWRpZW50c01pc3NpbmcocmVjaXBlKSB7XG4gICAgbGV0IGluZ3JlZGllbnRzTWlzc2luZyA9IHRoaXMuZmluZEFtb3VudE1pc3NpbmcocmVjaXBlKVxuICAgIHJldHVybiAgaW5ncmVkaWVudHNNaXNzaW5nLnJlZHVjZSgoc3RyaW5nLCBpbmdyZWRpZW50ICk9PntcbiAgICAgIHN0cmluZyArPSBgICR7aW5ncmVkaWVudC5mYWN0cy5hbW91bnRNaXNzaW5nfSAke2luZ3JlZGllbnQubmFtZX1cXG5gXG4gICAgICByZXR1cm4gc3RyaW5nXG4gICAgfSwgXCJZb3UgYXJlIG1pc3NpbmdcIilcbiAgfVxuICBjYWxjdWxhdGVDb3N0Rm9ySW5ncmVkaWVudHMocmVjaXBlLCBBbGxJbmdyZWRpZW50cykge1xuICAgIGxldCBhbGxNaXNzaW5nID0gdGhpcy5maW5kQW1vdW50TWlzc2luZyhyZWNpcGUpXG4gICAgcmV0dXJuIGFsbE1pc3NpbmcucmVkdWNlKChjb3N0LCBpbmdyZWRpZW50KSA9PntcbiAgICAgIGxldCBjdXJyZW50SW5nID0gQWxsSW5ncmVkaWVudHMuZmluZChpbmcgPT57XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50LmZhY3RzLmlkID09PSBpbmcuaWRcbiAgICAgIH0pXG4gICAgICByZXR1cm4gY3VycmVudEluZy5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIGluZ3JlZGllbnQuZmFjdHMuYW1vdW50TWlzc2luZ1xuICAgIH0sIDApXG4gIH1cbiAgYWRkTmVjZXNzYXJ5SW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgbGV0IGFsbE1pc3NpbmcgPSAgdGhpcy5maW5kQW1vdW50TWlzc2luZyhyZWNpcGUpXG4gICAgcmV0dXJuIGFsbE1pc3NpbmcubWFwKGluZyA9PntcbiAgICAgIHJldHVybiB7W1wiaW5ncmVkaWVudFwiXTogaW5nLmZhY3RzLmlkLFxuICAgICAgICBbXCJhbW91bnRcIl06IGluZy5mYWN0cy5hbW91bnRNaXNzaW5nfVxuICAgIH0pIFxuICB9XG4gIGZpbmRJbmdyZWRpZW50SW5QYW50cnkoaW5ncmVkaWVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzLmZpbmQocGFudHJ5SW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gcGFudHJ5SW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkXG4gICAgfSlcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFudHJ5OyIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3QoKSB7XG4gICAgbGV0IGNvc3RDb3VudGVyID0gMDtcbiAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLmluZ3JlZGllbnRzRGF0YS5maW5kKHNwZWNpZmljSW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChzcGVjaWZpY0luZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBjb3N0Q291bnRlciArPSAoTnVtYmVyKHNwZWNpZmljSW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cykgKlxuICAgICAgICAgIE51bWJlcihpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGNvc3RDb3VudGVyIC8gMTAwKSlcbiAgfVxuICByZXR1cm5JbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdHJ1Y3Rpb25zXG4gIH1cbiAgZmlsdGVyQnlUYWcobGV0dGVyKSB7XG4gICAgdmFyIHRhZ3MgPSAgdGhpcy50YWdzLmZpbHRlcih0YWcgPT57XG4gICAgICByZXR1cm4gdGFnLnNwbGl0KCcnKS5pbmNsdWRlcyhsZXR0ZXIudG9Mb3dlckNhc2UoKSlcbiAgICB9KVxuICAgIHJldHVybiB0YWdzXG4gIH1cbiAgY29udGFpbnNJbmdyZWRpZW50KGlucHV0SW5ncmVkaWVudCkgeyBcbiAgICBsZXQgZmlsdGVyZEFycmF5ID0gdGhpcy5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKGlucHV0SW5ncmVkaWVudC50b0xvd2VyQ2FzZSgpKVxuICAgIH0pXG4gICAgaWYgKGZpbHRlcmRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICBzZWFyY2hCeUluZ3JlZGllbnQoaW5wdXRJbmdyZWRpZW50KSB7XG4gICAgdmFyIGluZyA9ICB0aGlzLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKGlucHV0SW5ncmVkaWVudC50b0xvd2VyQ2FzZSgpKVxuICAgIH0pXG4gICAgaWYgKGluZy5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gaW5nLm5hbWVcbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGU7XG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcblxubGV0IGJhY2tUb0hvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjay10by1ob21lJyk7XG5sZXQgbXlQYW50cnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1teS1wYW50cnknKTtcbmxldCBteVJlY2lwZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1teS11cGNvbWluZy1yZWNpcGVzJyk7XG5sZXQgbXlGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1mYXZvcml0ZXMnKTtcbmxldCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbWVudS1zZWxlY3Rpb25zJyk7XG5sZXQgaGFtYnVyZ2VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xubGV0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LW1lbnUnKTtcbmxldCBtZW51TXlVcGNvbWluZ1JlY2lwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1teS11cGNvbWluZy1yZWNpcGVzLXRpdGxlJyk7XG5sZXQgZmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG5sZXQgcmVjaXBlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNhcmRzJyk7XG5sZXQgcmVjaXBlU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZWNpcGVzLWlucHV0Jyk7XG5sZXQgcmVjaXBlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtZGlzcGxheScpO1xubGV0IHJlY2lwZXNEYXRhO1xubGV0IGluZ3JlZGllbnRzRGF0YTtcbmxldCBjdXJyZW50VXNlclxubGV0IGZhdm9yaXRlcztcbmxldCBwYW50cnk7XG5sZXQgY29va0FibGVSZWNpcGVzO1xubGV0IG1pc3NpbmdJbmc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgbWVyZ2VGZXRjaFRpbWVsaW5lcygpO1xufTtcblxuYmFja1RvSG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhyZWNpcGVzRGF0YSxjdXJyZW50VXNlcilcbn0pO1xuXG5yZWNpcGVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKT0+e1xuICBpZiAoZmF2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhmaWx0ZXJJbnB1dHMocmVjaXBlU2VhcmNoLnZhbHVlLGluZ3JlZGllbnRzRGF0YSwnZmF2b3JpdGVSZWNpcGVzJyksY3VycmVudFVzZXIpXG4gIH0gZWxzZSBpZiAobWVudU15VXBjb21pbmdSZWNpcGVzLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhmaWx0ZXJJbnB1dHMocmVjaXBlU2VhcmNoLnZhbHVlLGluZ3JlZGllbnRzRGF0YSwncmVjaXBlc1RvQ29vaycpLGN1cnJlbnRVc2VyKVxuICB9IGVsc2Uge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFsbFJlY2lwZXMoZmlsdGVySW5wdXRzKHJlY2lwZVNlYXJjaC52YWx1ZSxpbmdyZWRpZW50c0RhdGEpLGN1cnJlbnRVc2VyKVxuICB9XG59KTtcblxuZmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb21VcGRhdGVzLmRpc3BsYXlGYXZvcml0ZXMoZmluZEZhdm9yaXRlcyhjdXJyZW50VXNlcixyZWNpcGVzRGF0YSwnZmF2b3JpdGVSZWNpcGVzJykpOyBcbn0pO1xuXG5tZW51TXlVcGNvbWluZ1JlY2lwZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLCByZWNpcGVzRGF0YSlcbn0pO1xuXG5teVBhbnRyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5UGFudHJ5KHBhbnRyeSlcbn0pO1xuXG5yZWNpcGVEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5oaWRlUmVjaXBlUG9wdXApO1xuXG5yZWNpcGVDYXJkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXItaWNvbicpKSB7XG4gICAgdG9nZ2xlRmF2b3JpdGVzKGV2ZW50KVxuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbHVzLWljb24nKSkge1xuICAgIGFkZFRvVXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyLCByZWNpcGVzRGF0YSk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtaW1hZ2UnKSkge1xuICAgIGRvbVVwZGF0ZXMuc2hvd1JlY2lwZVBvcHVwKCk7XG4gICAgbGV0IGNob3NlblJlY2lwZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2luZ2xlLXJlY2lwZS1jYXJkJylcbiAgICBmaW5kTmFtZXMoY3JlYXRlUmVjaXBlKGNob3NlblJlY2lwZS5pZCksaW5ncmVkaWVudHNEYXRhKVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVJlY2lwZUluZm8oY3JlYXRlUmVjaXBlKGNob3NlblJlY2lwZS5pZCksY29va0FibGVSZWNpcGVzLG1pc3NpbmdJbmcpXG4gIH1cbn0pO1xuXG5oYW1idXJnZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgaGFtYnVyZ2VySWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY2xvc2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBteVBhbnRyeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbXlGYXZvcml0ZXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG15UmVjaXBlc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn0pO1xuXG5jbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBoYW1idXJnZXJJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBjbG9zZUljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG15UGFudHJ5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBteUZhdm9yaXRlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbXlSZWNpcGVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlcyhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LnNyYyA9PT0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmdcIikge1xuICAgIGV2ZW50LnRhcmdldC5zcmMgPSAgIFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnXCJcbiAgICBhZGRUb0Zhdm9yaXRlcyhldmVudClcbiAgfSBlbHNlIHsgICBcbiAgICByZW1vdmVGcm9tRmF2b3JpdGVzKGV2ZW50KVxuICAgIGV2ZW50LnRhcmdldC5zcmMgPSAgXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmdcIiBcbiAgfVxufTtcblxuZnVuY3Rpb24gYWRkVG9GYXZvcml0ZXMoZXZlbnQpIHtcbiAgbGV0IHJlY2lwZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2luZ2xlLXJlY2lwZS1jYXJkJylcbiAgY3VycmVudFVzZXIuYWRkVG9GYXZvcml0ZXMocmVjaXBlLmlkKVxufTtcblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUZhdm9yaXRlcyhldmVudCkge1xuICBmYXZvcml0ZXMgPSBjdXJyZW50VXNlci5mYXZvcml0ZVJlY2lwZXNcbiAgbGV0IHJlY2lwZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2luZ2xlLXJlY2lwZS1jYXJkJylcbiAgaWYgKGZhdm9yaXRlcy5pbmNsdWRlcyhyZWNpcGUuaWQpKSB7XG4gICAgY3VycmVudFVzZXIucmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUuaWQpXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlcnNEYXRhKSB7XG4gIGxldCBjdXJyZW50VXNlciA9IHVzZXJzRGF0YS5maW5kKHVzZXIgPT4ge1xuICAgIGxldCBwYXJzZWRJRCA9IHBhcnNlSW50KHVzZXIuaWQpO1xuICAgIHJldHVybiBwYXJzZWRJRCA9PT0gZG9tVXBkYXRlcy5yYW5kb21OdW1iZXJcbiAgfSlcbiAgcmV0dXJuIG5ldyBVc2VyKGN1cnJlbnRVc2VyLmlkLGN1cnJlbnRVc2VyLm5hbWUsY3VycmVudFVzZXIucGFudHJ5KVxufTtcblxuZnVuY3Rpb24gY3JlYXRlUmVjaXBlKGlkKSB7XG4gIGxldCBjdXJyZW50UmVjaXBlID0gcmVjaXBlc0RhdGEuZmluZChyZWNpcGUgPT4ge1xuICAgIHJldHVybiByZWNpcGUuaWQgPT0gaWQ7XG4gIH0pXG4gIHJldHVybiBuZXcgUmVjaXBlKGN1cnJlbnRSZWNpcGUsIGluZ3JlZGllbnRzRGF0YSlcbn07XG5cbmZ1bmN0aW9uIGFkZFRvVXBjb21pbmdSZWNpcGVzKGN1cnJlbnRVc2VyKSB7XG4gIGxldCByZWNpcGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNpbmdsZS1yZWNpcGUtY2FyZCcpXG4gIGN1cnJlbnRVc2VyLmFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUuaWQpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUGFudHJ5KGN1cnJlbnRVc2VyLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgY3VycmVudFVzZXIucGFudHJ5LmZvckVhY2gocGFudHJ5SXRlbSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmdyZWRpZW50ID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gcGFudHJ5SXRlbS5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkO1xuICAgIH0pXG4gICAgaWYgKCFjdXJyZW50SW5ncmVkaWVudC5uYW1lICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJlZmlndXJlUGFudHJ5KHBhbnRyeUl0ZW0sIGN1cnJlbnRJbmdyZWRpZW50KSBcbiAgfSlcbiAgcmV0dXJuIG5ldyBQYW50cnkoY3VycmVudFVzZXIucGFudHJ5KVxufTtcblxuZnVuY3Rpb24gZ3JhYlJlY2lwZXMoKSB7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3JlY2lwZXMvcmVjaXBlRGF0YScpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlY2lwZU9iamVjdCA9PiB7XG4gICAgICByZWNpcGVzRGF0YSA9IHJlY2lwZU9iamVjdC5yZWNpcGVEYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSByZWNpcGVzIGZhaWxlZCB0byBsb2FkLiBUcnkgYWdhaW4gbGF0ZXIuJylcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gZ3JhYlVzZXJzKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBkb21VcGRhdGVzLmdyZWV0VXNlcihkYXRhLndjVXNlcnNEYXRhW2RvbVVwZGF0ZXMucmFuZG9tTnVtYmVyIC0gMV0pXG4gICAgICByZXR1cm4gZGF0YS53Y1VzZXJzRGF0YTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGFsZXJ0KCdTb3JyeSwgdGhlIHVzZXIgaW5mb3JtYXRpb24gZmFpbGVkIHRvIGxvYWQuIFRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gZ3JhYkluZ3JlZGllbnRzKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9pbmdyZWRpZW50cy9pbmdyZWRpZW50c0RhdGEnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICB9KS50aGVuKGluZ3JlZGllbnREYXRhID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50RGF0YS5pbmdyZWRpZW50c0RhdGE7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSBpbmdyZWRpZW50cyBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpOyAgICBcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gbWVyZ2VGZXRjaFRpbWVsaW5lcygpIHtcbiAgUHJvbWlzZS5hbGwoW2dyYWJVc2VycygpLCBncmFiSW5ncmVkaWVudHMoKSwgZ3JhYlJlY2lwZXMoKV0pXG4gICAgLnRoZW4odmFsdWVzID0+IHtcbiAgICAgIGxldCB1c2Vyc0RhdGEgPSB2YWx1ZXNbMF07XG4gICAgICBpbmdyZWRpZW50c0RhdGEgPSB2YWx1ZXNbMV07XG4gICAgICBjdXJyZW50VXNlciA9IGNyZWF0ZVVzZXIodXNlcnNEYXRhKVxuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5QWxsUmVjaXBlcyhyZWNpcGVzRGF0YSwgY3VycmVudFVzZXIpO1xuICAgICAgcGFudHJ5ID0gY3JlYXRlUGFudHJ5KGN1cnJlbnRVc2VyLCBpbmdyZWRpZW50c0RhdGEpXG4gICAgICBtaXNzaW5nSW5nID0gZmluZFdoaWNoSW5ncmVkaWVudHNBcmVNaXNzaW5nKHJlY2lwZXNEYXRhKVxuICAgICAgY29va0FibGVSZWNpcGVzID0gZmluZFJlY2lwaWVzQ2FuQ29vayhtaXNzaW5nSW5nKVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBhbGVydCgnU29ycnksIHRoZSBpbmZvcm1hdGlvbiBmYWlsZWQgdG8gbG9hZC4gVHJ5IGFnYWluIGxhdGVyLicpO1xuICAgIH0pIFxufTtcblxuZnVuY3Rpb24gZmluZEZhdm9yaXRlcyhjdXJyZW50VXNlciwgcmVjaXBlc0RhdGEsIGN1cnJlbnRVc2VyUHJvcGVydHkpIHtcbiAgbGV0IGlkcyA9IGN1cnJlbnRVc2VyW2N1cnJlbnRVc2VyUHJvcGVydHldXG4gIGxldCBmYXZvcml0ZVJlY2lwaWVzID0gcmVjaXBlc0RhdGEuZmlsdGVyKHJlY2lwZSA9PntcbiAgICByZXR1cm4gaWRzLmluY2x1ZGVzKFN0cmluZyhyZWNpcGUuaWQpKVxuICB9KVxuICByZXR1cm4gZmF2b3JpdGVSZWNpcGllc1xufTtcblxuZnVuY3Rpb24gZmluZFJlY2lwaWVzQ2FuQ29vayhtaXNzaW5nSW5nKSB7XG4gIHJldHVybiBtaXNzaW5nSW5nLmZpbHRlcihyZWNpcGUgPT57XG4gICAgcmV0dXJuIHJlY2lwZS5Ob3RFbm91Z2gubGVuZ3RoID09PSAwXG4gIH0pXG59O1xuXG5mdW5jdGlvbiByZWZpZ3VyZVBhbnRyeShwYW50cnlJdGVtLCBjdXJyZW50SW5ncmVkaWVudCkge1xuICBwYW50cnlJdGVtLmFtb3VudCA9IE1hdGguY2VpbChwYW50cnlJdGVtLmFtb3VudClcbiAgcGFudHJ5SXRlbS5uYW1lID0gY3VycmVudEluZ3JlZGllbnQubmFtZTtcbiAgcGFudHJ5SXRlbS5lc3RpbWF0ZWRDb3N0SW5DZW50cyA9IGN1cnJlbnRJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzO1xufTtcblxuZnVuY3Rpb24gZmluZFdoaWNoSW5ncmVkaWVudHNBcmVNaXNzaW5nKHJlY2lwZXNEYXRhKSB7XG4gIHJldHVybiByZWNpcGVzRGF0YS5tYXAocmVjaXBlID0+e1xuICAgIHJldHVybiB7bmFtZTogcmVjaXBlLm5hbWUsIGlkOiByZWNpcGUuaWQsIGluZ3JlZGllbnRzOiByZWNpcGUuaW5ncmVkaWVudHMsIE5vdEVub3VnaDogcGFudHJ5LmZpbmRXaGljaEluZ3JlZGllbnRzQXJlU2hvcnQocmVjaXBlKX1cbiB9KVxufTtcblxuZnVuY3Rpb24gZmlsdGVySW5wdXRzKGxldHRlcnMsIGluZ3JlZGllbnRzRGF0YSwgY3VycmVudFVzZXJQcm9wZXJ0eSkge1xuICBpZiAobGV0dGVycyA9PT0gJycpIHtcbiAgICByZXR1cm4gcmVjaXBlc0RhdGFcbiAgfVxuICBsZXR0ZXJzID0gbGV0dGVycy50cmltKClcbiAgbGV0IGFycmF5VG9GaWx0ZXI7XG4gIGlmIChjdXJyZW50VXNlclByb3BlcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheVRvRmlsdGVyID0gcmVjaXBlc0RhdGE7XG4gIH0gZWxzZSB7XG4gICAgYXJyYXlUb0ZpbHRlciA9IGZpbmRGYXZvcml0ZXMoY3VycmVudFVzZXIsIHJlY2lwZXNEYXRhLCBjdXJyZW50VXNlclByb3BlcnR5KTtcbiAgfSBcbiAgcmV0dXJuIGZpbmRMZXR0ZXJzSW5SZWNpcGVzKGFycmF5VG9GaWx0ZXIsIGxldHRlcnMsIGluZ3JlZGllbnRzRGF0YSlcbn07XG5cbmZ1bmN0aW9uIGZpbmRMZXR0ZXJzSW5SZWNpcGVzIChhcnJheVRvRmlsdGVyLCBsZXR0ZXJzLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgcmV0dXJuIGFycmF5VG9GaWx0ZXIuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgbGV0IGNvcnJlY3RJbmdyZWRpZW50ICA9IGluZ3JlZGllbnRzRGF0YS5maW5kKGluZ3JlZGllbnQgPT4geyBcbiAgICAgIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMuZmluZChyZWNJbmdyZWRpZW50cyA9PiB7XG4gICAgICAgIHJldHVybiByZWNJbmdyZWRpZW50cy5pZCA9PT0gaW5ncmVkaWVudC5pZFxuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBjb3JyZWN0SW5ncmVkaWVudC5uYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMobGV0dGVycy50b1VwcGVyQ2FzZSgpKSB8fCByZWNpcGUubmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKGxldHRlcnMudG9VcHBlckNhc2UoKSkgfHwgcmVjaXBlLnRhZ3Muam9pbignJykuaW5jbHVkZXMobGV0dGVycylcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIGZpbmROYW1lcyhyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSkge1xuICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+e1xuICAgIGxldCBjb3JyZWN0SW5ncmVkaWVudCA9IGluZ3JlZGllbnRzRGF0YS5maW5kKGluZyA9PntcbiAgICAgIHJldHVybiBpbmdyZWRpZW50LmlkID09PSBpbmcuaWRcbiAgICB9KSAgICBcbiAgICBpbmdyZWRpZW50Lm5hbWUgPSBjb3JyZWN0SW5ncmVkaWVudC5uYW1lXG4gIH0pXG59O1xuICBcblxuXG5cblxuIiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwYW50cnkpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgYWRkVG9GYXZvcml0ZXMocmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5wdXNoKHJlY2lwZSlcbiAgICB9XG4gIH1cblxuICByZW1vdmVGcm9tRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIGNvbnN0IGkgPSB0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmRleE9mKHJlY2lwZSk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMuc3BsaWNlKGksIDEpXG4gIH1cblxuICBmaWx0ZXJGYXZvcml0ZXModGFnKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZyk7XG4gICAgfSlcbiAgfVxuXG4gIGZpbHRlclJlY2lwZXNUb0Nvb2sodGFnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlc1RvQ29vay5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpO1xuICAgIH0pXG4gIH1cblxuICBmaW5kRmF2b3JpdGVzKHN0cmdUb1NyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaClcbiAgICAgIHx8IHJlY2lwZS5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjaGVja1BhbnRyeShyZWNpcGUpIHtcbiAgICBjb25zdCBhbGxQYW50cnlJdGVtc0lEID0gdGhpcy5wYW50cnkubWFwKHBhbnRyeUl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHBhbnRyeUl0ZW0uaW5ncmVkaWVudDtcbiAgICB9KVxuICAgIGNvbnN0IG1pc3NpbmdJbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gIShhbGxQYW50cnlJdGVtc0lELmluY2x1ZGVzKGluZ3JlZGllbnQuaW5ncmVkaWVudCkpO1xuICAgIH0pXG4gICAgaWYgKG1pc3NpbmdJbmdyZWRpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBgWW91IGhhdmUgYWxsIHRoZSBpbmdyZWRpZW50cyBpbiB5b3VyIHBhbnRyeSFgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWlzc2luZ0luZ3JlZGllbnRzO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9
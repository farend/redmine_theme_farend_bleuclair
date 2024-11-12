/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 935:
/***/ (function() {

function setDiscontinuityClassToTabContent(id) {
  if ($('#' + id).hasClass('selected')) {
    if (id === 'tab-notes' || id === 'tab-properties' || id === 'tab-changesets') {
      $('div#tab-content-history').addClass('discontinuity');
    } else {
      $('div#tab-content-history').removeClass('discontinuity');
    }
  }
}
$(document).ajaxSuccess(function () {
  // Put the title in the before content without breaking the tooltip (For issues/show time_entries and changesets tabs)
  $('body.controller-issues.action-show a[href*="activity"][title*=":"]:not([data-absolute-date*=":"])').each(function (_index, element) {
    $(element).attr('data-absolute-date', element.title);
  });
});
$(function () {
  /* Change to open external link in another tab */
  $("a.external").attr("target", "_blank");
  $("a.help").attr("target", "_blank");
  $("div#footer a[href^='https://www.redmine.org/']").attr("target", "_blank");
  if (($("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang")) == "ja") {
    /* When the language is Japanese, the link destination of help is Redmine.jp */
    $("a.help").attr("href", "https://redmine.jp/guide/");
  }

  // Put the title in the before content without breaking the tooltip
  $('a[href*="activity"][title*=":"]').each(function (_index, element) {
    $(element).attr("data-absolute-date", element.title);
  });
  $('#history > .tabs a').each(function () {
    setDiscontinuityClassToTabContent($(this).attr('id'));
    $(this)[0].addEventListener('click', function () {
      setDiscontinuityClassToTabContent($(this).attr('id'));
    });
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _scripts_bleuclair_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _scripts_bleuclair_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_bleuclair_js__WEBPACK_IMPORTED_MODULE_0__);
// When built, it will be output as bleuclair/javascripts/theme.js


// When built, it will be output as bleuclair/stylesheets/theme.css

}();
/******/ })()
;
//# sourceMappingURL=theme.js.map
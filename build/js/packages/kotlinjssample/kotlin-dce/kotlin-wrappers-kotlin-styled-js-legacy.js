(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-extensions-js-legacy', 'inline-style-prefixer', 'kotlin-wrappers-kotlin-react-js-legacy', 'kotlin-wrappers-kotlin-react-dom-js-legacy', 'styled-components', 'react', 'react-dom', 'react', 'kotlinx-html-js', 'styled-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-extensions-js-legacy'), require('inline-style-prefixer'), require('kotlin-wrappers-kotlin-react-js-legacy'), require('kotlin-wrappers-kotlin-react-dom-js-legacy'), require('styled-components'), require('react'), require('react-dom'), require('react'), require('kotlinx-html-js'), require('styled-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['inline-style-prefixer'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'inline-style-prefixer' was not found. Please, check whether 'inline-style-prefixer' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['styled-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof StyledComponents === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }root['kotlin-wrappers-kotlin-styled-js-legacy'] = factory(typeof this['kotlin-wrappers-kotlin-styled-js-legacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-styled-js-legacy'], kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-extensions-js-legacy'], this['inline-style-prefixer'], this['kotlin-wrappers-kotlin-react-js-legacy'], this['kotlin-wrappers-kotlin-react-dom-js-legacy'], this['styled-components'], react, this['react-dom'], ReactModule, this['kotlinx-html-js'], StyledComponents);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_extensions_js_legacy, $module$inline_style_prefixer, $module$kotlin_wrappers_kotlin_react_js_legacy, $module$kotlin_wrappers_kotlin_react_dom_js_legacy, $module$styled_components, $module$react, $module$react_dom, $module$react_0, $module$kotlinx_html_js, $module$styled_components_0) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RElementBuilder;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var GlobalStyles_instance = null;
  var Styled_instance = null;
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-js-legacy'] = $module$kotlin_wrappers_kotlin_extensions_js_legacy;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-styled-js-legacy.js.map

(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-js-legacy', 'kotlin-wrappers-kotlin-react-dom-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-js-legacy'), require('kotlin-wrappers-kotlin-react-dom-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinjssample'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinjssample'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlinjssample'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'kotlinjssample'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlinjssample'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-legacy' is loaded prior to 'kotlinjssample'.");
    }root.kotlinjssample = factory(typeof kotlinjssample === 'undefined' ? {} : kotlinjssample, kotlin, this['kotlin-wrappers-kotlin-react-js-legacy'], this['kotlin-wrappers-kotlin-react-dom-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_js_legacy, $module$kotlin_wrappers_kotlin_react_dom_js_legacy) {
  'use strict';
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.render_2955dm$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  function App() {
    RComponent_init(this);
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  App.$metadata$ = {kind: Kind_CLASS, simpleName: 'App', interfaces: [RComponent]};
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  _.App = App;
  _.main = main;
  main();
  return _;
}));

//# sourceMappingURL=kotlinjssample.js.map

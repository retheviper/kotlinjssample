(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-js-legacy', 'kotlin-wrappers-kotlin-react-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-js-legacy'), require('kotlin-wrappers-kotlin-react-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinjssample'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinjssample'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlinjssample'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-legacy' is loaded prior to 'kotlinjssample'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlinjssample'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'kotlinjssample'.");
    }root.kotlinjssample = factory(typeof kotlinjssample === 'undefined' ? {} : kotlinjssample, kotlin, this['kotlin-wrappers-kotlin-react-dom-js-legacy'], this['kotlin-wrappers-kotlin-react-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_js_legacy, $module$kotlin_wrappers_kotlin_react_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var getKClass = Kotlin.getKClass;
  var render = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.render_2955dm$;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  AppDescription.prototype = Object.create(RComponent.prototype);
  AppDescription.prototype.constructor = AppDescription;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda$lambda($receiver) {
    $receiver.descriptions = listOf([new Description(1, 'Language', 'Kotlin/JS'), new Description(2, 'Build tool', 'Gradle (Kotlin DSL)'), new Description(3, 'Framework', 'React')]);
    return Unit;
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Hello, React + Kotlin/JS!');
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    Extensions_getInstance().descript_ckmdxg$($receiver_0_0, App$render$lambda$lambda);
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
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
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AppDescription() {
    RComponent_init(this);
  }
  AppDescription.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Description');
    $receiver.child_52psg1$($receiver_0.create());
    var tmp$;
    tmp$ = this.props.descriptions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0_0.key = element.id.toString();
      $receiver_0_0.unaryPlus_pdl1vz$(element.title + ': ' + element.content);
      $receiver.child_52psg1$($receiver_0_0.create());
    }
  };
  AppDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppDescription',
    interfaces: [RComponent]
  };
  function Description(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
  Description.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Description',
    interfaces: []
  };
  Description.prototype.component1 = function () {
    return this.id;
  };
  Description.prototype.component2 = function () {
    return this.title;
  };
  Description.prototype.component3 = function () {
    return this.content;
  };
  Description.prototype.copy_s4fhmi$ = function (id, title, content) {
    return new Description(id === void 0 ? this.id : id, title === void 0 ? this.title : title, content === void 0 ? this.content : content);
  };
  Description.prototype.toString = function () {
    return 'Description(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  Description.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  Description.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.content, other.content)))));
  };
  function Extensions() {
    Extensions_instance = this;
  }
  function Extensions$descript$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  Extensions.prototype.descript_ckmdxg$ = function ($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(AppDescription), Extensions$descript$lambda(handler));
  };
  Extensions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Extensions',
    interfaces: []
  };
  var Extensions_instance = null;
  function Extensions_getInstance() {
    if (Extensions_instance === null) {
      new Extensions();
    }return Extensions_instance;
  }
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-js-legacy'] = $module$kotlin_wrappers_kotlin_react_dom_js_legacy;
  _.App = App;
  _.main = main;
  var package$component = _.component || (_.component = {});
  package$component.AppDescription = AppDescription;
  var package$data = _.data || (_.data = {});
  package$data.Description = Description;
  var package$extension = _.extension || (_.extension = {});
  Object.defineProperty(package$extension, 'Extensions', {
    get: Extensions_getInstance
  });
  main();
  Kotlin.defineModule('kotlinjssample', _);
  return _;
}));

//# sourceMappingURL=kotlinjssample.js.map

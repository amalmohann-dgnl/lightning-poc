/**
 * App version: 1.0.0
 * SDK version: 5.3.1
 * CLI version: 2.10.0
 *
 * Generated: Thu, 16 Mar 2023 09:26:51 GMT
 */

var APP_com_diagnal_app_lightningpoc = (function () {
  'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var settings = {};
  var subscribers = {};
  var initSettings = function initSettings(appSettings, platformSettings) {
    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
    settings['user'] = {};
  };
  var publish = function publish(key, value) {
    subscribers[key] && subscribers[key].forEach(function (subscriber) {
      return subscriber(value);
    });
  };
  var dotGrab = function dotGrab() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    var keys = key.split('.');
    for (var i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };
  var Settings$1 = {
    get: function get(type, key) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback;
    },
    has: function has(type, key) {
      return !!this.get(type, key);
    },
    set: function set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe: function subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe: function unsubscribe(key, callback) {
      if (callback) {
        var index = subscribers[key] && subscribers[key].findIndex(function (cb) {
          return cb === callback;
        });
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers: function clearSubscribers() {
      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(subscribers)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          delete subscribers[key];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var prepLog = function prepLog(type, args) {
    var colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };
  var Log$1 = {
    info: function info() {
      Settings$1.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug: function debug() {
      Settings$1.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error: function error() {
      Settings$1.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn: function warn() {
      Settings$1.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var Lightning$1 = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var ColorShift = /*#__PURE__*/function (_Lightning$shaders$We) {
    _inherits(ColorShift, _Lightning$shaders$We);
    var _super = _createSuper(ColorShift);
    function ColorShift() {
      _classCallCheck(this, ColorShift);
      return _super.apply(this, arguments);
    }
    _createClass(ColorShift, [{
      key: "brightness",
      set: function set(v) {
        this._brightness = (v - 50) / 100;
        this.redraw();
      }
    }, {
      key: "contrast",
      set: function set(v) {
        this._contrast = (v + 50) / 100;
        this.redraw();
      }
    }, {
      key: "gamma",
      set: function set(v) {
        this._gamma = (v + 50) / 100;
        this.redraw();
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(operation) {
        _get(_getPrototypeOf(ColorShift.prototype), "setupUniforms", this).call(this, operation);
        var gl = this.gl;
        this._setUniform('colorAdjust', [this._brightness || 0.0, this._contrast || 1.0, this._gamma || 1.0], gl.uniform3fv);
      }
    }]);
    return ColorShift;
  }(Lightning$1.shaders.WebGLDefaultShader);
  ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

  var ProtanopiaShader = /*#__PURE__*/function (_ColorShift) {
    _inherits(ProtanopiaShader, _ColorShift);
    var _super = _createSuper(ProtanopiaShader);
    function ProtanopiaShader() {
      _classCallCheck(this, ProtanopiaShader);
      return _super.apply(this, arguments);
    }
    return _createClass(ProtanopiaShader);
  }(ColorShift);
  ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift.after, " \n");

  var DeuteranopiaShader = /*#__PURE__*/function (_ColorShift) {
    _inherits(DeuteranopiaShader, _ColorShift);
    var _super = _createSuper(DeuteranopiaShader);
    function DeuteranopiaShader() {
      _classCallCheck(this, DeuteranopiaShader);
      return _super.apply(this, arguments);
    }
    return _createClass(DeuteranopiaShader);
  }(ColorShift);
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift.after, "    \n");

  var TritanopiaShader = /*#__PURE__*/function (_ColorShift) {
    _inherits(TritanopiaShader, _ColorShift);
    var _super = _createSuper(TritanopiaShader);
    function TritanopiaShader() {
      _classCallCheck(this, TritanopiaShader);
      return _super.apply(this, arguments);
    }
    return _createClass(TritanopiaShader);
  }(ColorShift);
  TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift.after, " \n");

  var NeutralShader = /*#__PURE__*/function (_ColorShift) {
    _inherits(NeutralShader, _ColorShift);
    var _super = _createSuper(NeutralShader);
    function NeutralShader() {
      _classCallCheck(this, NeutralShader);
      return _super.apply(this, arguments);
    }
    return _createClass(NeutralShader);
  }(ColorShift);
  NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift.after, "\n");

  var MonochromacyShader = /*#__PURE__*/function (_ColorShift) {
    _inherits(MonochromacyShader, _ColorShift);
    var _super = _createSuper(MonochromacyShader);
    function MonochromacyShader() {
      _classCallCheck(this, MonochromacyShader);
      return _super.apply(this, arguments);
    }
    return _createClass(MonochromacyShader);
  }(ColorShift);
  MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var colorshiftShader = function colorshiftShader(type) {
    var shadersMap = {
      normal: NeutralShader,
      monochromacy: MonochromacyShader,
      deuteranopia: DeuteranopiaShader,
      tritanopia: TritanopiaShader,
      protanopia: ProtanopiaShader
    };
    type = typeof type === 'string' && type.toLowerCase() || null;
    return Object.keys(shadersMap).indexOf(type) > -1 ? shadersMap[type] : false;
  };

  var Accessibility = {
    colorshift: function colorshift(component) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        brightness: 50,
        contrast: 50,
        gamma: 50
      };
      config = _objectSpread2(_objectSpread2({}, {
        brightness: 50,
        contrast: 50,
        gamma: 50
      }), config);
      var shader = type && colorshiftShader(type);
      if (shader) {
        Log$1.info('Accessibility Colorshift', type, config);
        component.rtt = true;
        component.shader = _objectSpread2({
          type: shader
        }, config);
      } else {
        Log$1.info('Accessibility Colorshift', 'Disabled');
        component.rtt = false;
        component.shader = null;
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var Log;
  var Settings;
  var ApplicationInstance$1;
  var Ads$1;
  var Lightning;
  var initLightningSdkPlugin = {
    set log(v) {
      Log = v;
    },
    set settings(v) {
      Settings = v;
    },
    set ads(v) {
      Ads$1 = v;
    },
    set lightning(v) {
      Lightning = v;
    },
    set appInstance(v) {
      ApplicationInstance$1 = v;
    }
  };

  var initMetrics = function initMetrics(config) {
    sendMetric = config.sendMetric;
  };
  var sendMetric = function sendMetric(type, event, params) {
    Log.info('Sending metric', type, event, params);
  };

  // available metric per category
  var metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play',
    // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  };

  // error metric function (added to each category)
  var errorMetric = function errorMetric(type, message, code, visible) {
    var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = _objectSpread2({
      params: params
    }, {
      message: message,
      code: code,
      visible: visible
    });
    sendMetric(type, 'error', params);
  };
  var Metric = function Metric(type, events) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce(function (obj, event) {
      obj[event] = function (name) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = _objectSpread2(_objectSpread2(_objectSpread2({}, options), name ? {
          name: name
        } : {}), params);
        sendMetric(type, event, params);
      };
      return obj;
    }, {
      error: function error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event: function event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };
  var Metrics = function Metrics(types) {
    return Object.keys(types).reduce(function (obj, type) {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = function (url) {
        return Metric(type, types[type], {
          url: url
        });
      } : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics$1 = Metrics(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var formatLocale = function formatLocale(locale) {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  var getLocale = function getLocale(defaultValue) {
    if ('language' in navigator) {
      var locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var getLanguage = function getLanguage(defaultValue) {
    if ('language' in navigator) {
      var language = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var getCountryCode = function getCountryCode(defaultValue) {
    if ('language' in navigator) {
      var countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var hasOrAskForGeoLocationPermission = function hasOrAskForGeoLocationPermission() {
    return new Promise(function (resolve) {
      // force to prompt for location permission
      if (Settings.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
      if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
        navigator.permissions.query({
          name: 'geolocation'
        }).then(function (status) {
          resolve(status.state === 'granted' || status.status === 'granted');
        });
      } else {
        resolve(false);
      }
    });
  };
  var getLatLon = function getLatLon(defaultValue) {
    return new Promise(function (resolve) {
      hasOrAskForGeoLocationPermission().then(function (granted) {
        if (granted === true) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
            // success
            function (result) {
              return result && result.coords && resolve([result.coords.latitude, result.coords.longitude]);
            },
            // error
            function () {
              return resolve(defaultValue);
            },
            // options
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          } else {
            return queryForLatLon().then(function (result) {
              return resolve(result || defaultValue);
            });
          }
        } else {
          return queryForLatLon().then(function (result) {
            return resolve(result || defaultValue);
          });
        }
      });
    });
  };
  var queryForLatLon = function queryForLatLon() {
    return new Promise(function (resolve) {
      fetch('https://geolocation-db.com/json/').then(function (response) {
        return response.json();
      }).then(function (_ref) {
        var latitude = _ref.latitude,
          longitude = _ref.longitude;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(function () {
        return resolve(false);
      });
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var defaultProfile = {
    ageRating: 'adult',
    city: 'New York',
    zipCode: '27505',
    countryCode: function countryCode() {
      return getCountryCode('US');
    },
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    language: function language() {
      return getLanguage('en');
    },
    latlon: function latlon() {
      return getLatLon([40.7128, 74.006]);
    },
    locale: function locale() {
      return getLocale('en-US');
    },
    mac: '00:00:00:00:00:00',
    operator: 'metrological',
    platform: 'metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    stbType: 'metrological'
  };

  var getInfo = function getInfo(key) {
    var profile = _objectSpread2(_objectSpread2({}, defaultProfile), Settings.get('platform', 'profile'));
    return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key]);
  };
  var setInfo = function setInfo(key, params) {
    if (key in defaultProfile) return defaultProfile[key] = params;
  };
  var initProfile = function initProfile(config) {
    getInfo = config.getInfo ? config.getInfo : getInfo;
    setInfo = config.setInfo ? config.setInfo : setInfo;
  };

  var initPurchase = function initPurchase(config) {
    if (config.billingUrl) config.billingUrl;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  var channels = function channels() {
    return Settings.get('platform', 'tv', defaultChannels);
  };
  var randomChannel = function randomChannel() {
    return channels()[~~(channels.length * Math.random())];
  };

  var currentChannel;
  var callbacks = {};
  var emit$1 = function emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event] && callbacks[event].forEach(function (cb) {
      cb.apply(null, args);
    });
  };

  // local mock methods
  var methods = {
    getChannel: function getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        if (currentChannel) {
          var channel = _objectSpread2({}, currentChannel);
          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram: function getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel: function setChannel(number) {
      return new Promise(function (resolve, reject) {
        if (number) {
          var newChannel = channels().find(function (c) {
            return c.number === number;
          });
          if (newChannel) {
            currentChannel = newChannel;
            var channel = _objectSpread2({}, currentChannel);
            delete channel.program;
            emit$1('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  var initTV = function initTV(config) {
    methods = {};
    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit$1);
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var initPin = function initPin(config) {
    if (config.submit && typeof config.submit === 'function') {
      config.submit;
    }
    if (config.check && typeof config.check === 'function') {
      config.check;
    }
  };

  var executeAsPromise = (function (method) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var result;
    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise
    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    }
    // otherwise make it into a promise
    else {
      return new Promise(function (resolve, reject) {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var autoSetupMixin = (function (sourceObject) {
    var setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var ready = false;
    var doSetup = function doSetup() {
      if (ready === false) {
        setup();
        ready = true;
      }
    };
    return Object.keys(sourceObject).reduce(function (obj, key) {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var timeout = null;
  var easeExecution = (function (cb, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      cb();
    }, delay);
  });

  var VideoTexture = (function () {
    return /*#__PURE__*/function (_Lightning$Component) {
      _inherits(VideoTexture, _Lightning$Component);
      var _super = _createSuper(VideoTexture);
      function VideoTexture() {
        _classCallCheck(this, VideoTexture);
        return _super.apply(this, arguments);
      }
      _createClass(VideoTexture, [{
        key: "videoEl",
        get: function get() {
          return this._videoEl;
        },
        set: function set(v) {
          this._videoEl = v;
        }
      }, {
        key: "videoView",
        get: function get() {
          return this.tag('Video');
        }
      }, {
        key: "videoTexture",
        get: function get() {
          return this.videoView.texture;
        }
      }, {
        key: "isVisible",
        get: function get() {
          return this.videoView.alpha === 1 && this.videoView.visible === true;
        }
      }, {
        key: "_init",
        value: function _init() {
          this._createVideoTexture();
        }
      }, {
        key: "_createVideoTexture",
        value: function _createVideoTexture() {
          var stage = this.stage;
          var gl = stage.gl;
          var glTexture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, glTexture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          this.videoTexture.options = {
            source: glTexture,
            w: this.videoEl.width,
            h: this.videoEl.height
          };
          this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
          this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
        }
      }, {
        key: "start",
        value: function start() {
          var _this = this;
          var stage = this.stage;
          this._lastTime = 0;
          if (!this._updateVideoTexture) {
            this._updateVideoTexture = function () {
              if (_this.videoTexture.options.source && _this.videoEl.videoWidth && _this.active) {
                var gl = stage.gl;
                var currentTime = new Date().getTime();
                var getVideoPlaybackQuality = _this.videoEl.getVideoPlaybackQuality();

                // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
                // We'll fallback to fixed 30fps in this case.
                // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'
                var frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : _this.videoEl.webkitDecodedFrameCount;
                var mustUpdate = frameCount ? _this._lastFrame !== frameCount : _this._lastTime < currentTime - 30;
                if (mustUpdate) {
                  _this._lastTime = currentTime;
                  _this._lastFrame = frameCount;
                  try {
                    gl.bindTexture(gl.TEXTURE_2D, _this.videoTexture.options.source);
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this.videoEl);
                    _this._lastFrame = _this.videoEl.webkitDecodedFrameCount;
                    _this.videoView.visible = true;
                    _this.videoTexture.options.w = _this.videoEl.width;
                    _this.videoTexture.options.h = _this.videoEl.height;
                    var expectedAspectRatio = _this.videoView.w / _this.videoView.h;
                    var realAspectRatio = _this.videoEl.width / _this.videoEl.height;
                    if (expectedAspectRatio > realAspectRatio) {
                      _this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                      _this.videoView.scaleY = 1;
                    } else {
                      _this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                      _this.videoView.scaleX = 1;
                    }
                  } catch (e) {
                    Log.error('texImage2d video', e);
                    _this.stop();
                  }
                  _this.videoTexture.source.forceRenderUpdate();
                }
              }
            };
          }
          if (!this._updatingVideoTexture) {
            stage.on('frameStart', this._updateVideoTexture);
            this._updatingVideoTexture = true;
          }
        }
      }, {
        key: "stop",
        value: function stop() {
          var stage = this.stage;
          stage.removeListener('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = false;
          this.videoView.visible = false;
          if (this.videoTexture.options.source) {
            var gl = stage.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
        }
      }, {
        key: "position",
        value: function position(top, left) {
          this.videoView.patch({
            smooth: {
              x: left,
              y: top
            }
          });
        }
      }, {
        key: "size",
        value: function size(width, height) {
          this.videoView.patch({
            smooth: {
              w: width,
              h: height
            }
          });
        }
      }, {
        key: "show",
        value: function show() {
          this.videoView.setSmooth('alpha', 1);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.videoView.setSmooth('alpha', 0);
        }
      }], [{
        key: "_template",
        value: function _template() {
          return {
            Video: {
              alpha: 1,
              visible: false,
              pivot: 0.5,
              texture: {
                type: Lightning.textures.StaticTexture,
                options: {}
              }
            }
          };
        }
      }]);
      return VideoTexture;
    }(Lightning.Component);
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var mediaUrl$1 = function mediaUrl(url) {
    return url;
  };
  var videoEl;
  var videoTexture;
  var metrics;
  var _consumer;
  var precision = 1;
  var textureMode = false;
  var initVideoPlayer = function initVideoPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };
  // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close
  var eventHandlers = {};
  var state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  var hooks = {
    play: function play() {
      state$1.playing = true;
    },
    pause: function pause() {
      state$1.playing = false;
    },
    seeked: function seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort: function abort() {
      deregisterEventListeners();
    }
  };
  var withPrecision = function withPrecision(val) {
    return Math.round(precision * val) + 'px';
  };
  var fireOnConsumer$1 = function fireOnConsumer(event, args) {
    if (_consumer) {
      _consumer.fire('$videoPlayer' + event, args, videoEl.currentTime);
      _consumer.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };
  var fireHook = function fireHook(event, args) {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };
  var customLoader = null;
  var customUnloader = null;
  var loader$1 = function loader(url, videoEl, config) {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(function (resolve) {
      url = mediaUrl$1(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };
  var unloader = function unloader(videoEl) {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(function (resolve) {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };
  var setupVideoTag = function setupVideoTag() {
    var videoEls = document.getElementsByTagName('video');
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      var _videoEl = document.createElement('video');
      var platformSettingsWidth = Settings.get('platform', 'width') ? Settings.get('platform', 'width') : 1920;
      var platformSettingsHeight = Settings.get('platform', 'height') ? Settings.get('platform', 'height') : 1080;
      _videoEl.setAttribute('id', 'video-player');
      _videoEl.setAttribute('width', withPrecision(platformSettingsWidth));
      _videoEl.setAttribute('height', withPrecision(platformSettingsHeight));
      _videoEl.style.position = 'absolute';
      _videoEl.style.zIndex = '1';
      _videoEl.style.display = 'none';
      _videoEl.style.visibility = 'hidden';
      _videoEl.style.top = withPrecision(0);
      _videoEl.style.left = withPrecision(0);
      _videoEl.style.width = withPrecision(platformSettingsWidth);
      _videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(_videoEl);
      return _videoEl;
    }
  };
  var setUpVideoTexture = function setUpVideoTexture() {
    if (!ApplicationInstance$1.tag('VideoTexture')) {
      var el = ApplicationInstance$1.stage.c({
        type: VideoTexture(),
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl: videoEl
      });
      ApplicationInstance$1.childList.addAt(el, 0);
    }
    return ApplicationInstance$1.tag('VideoTexture');
  };
  var registerEventListeners = function registerEventListeners() {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(function (event) {
      var handler = function handler(e) {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        }
        // fire an internal hook
        fireHook(event, {
          videoElement: videoEl,
          event: e
        });

        // fire the event (with human friendly event name) to the consumer of the VideoPlayer
        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };
  var deregisterEventListeners = function deregisterEventListeners() {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(function (event) {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };
  var videoPlayerPlugin = {
    consumer: function consumer(component) {
      _consumer = component;
    },
    loader: function loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader: function unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position: function position() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size: function size() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area: function area() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open: function open(url) {
      var _this = this;
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$1.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        var adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads$1.get(adConfig, _consumer).then(function (ads) {
          state$1.playingAds = true;
          ads.prerolls().then(function () {
            state$1.playingAds = false;
            loader$1(url, videoEl, config).then(function () {
              registerEventListeners();
              _this.show();
              _this.play();
            }).catch(function (e) {
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload: function reload() {
      if (!this.canInteract) return;
      var url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close: function close() {
      var _this2 = this;
      Ads$1.cancel();
      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads$1.stop();
        // call self in next tick
        setTimeout(function () {
          _this2.close();
        });
      }
      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear: function clear() {
      if (!this.canInteract) return;
      // pause the video first to disable sound
      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(function () {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play: function play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(function (e) {
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause: function pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause: function playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute: function mute() {
      var muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop: function loop() {
      var looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek: function seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return;
      // define whether should continue to play after seek is complete (in seeked hook)
      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      }
      // pause before actually seeking
      this.pause();
      // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip: function skip(seconds) {
      var _this3 = this;
      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(function () {
        _this3.seek(state$1.skipTime);
        state$1.skipTime = false;
      }, 300);
    },
    show: function show() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide: function hide() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds: function enableAds() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute('src');
    },
    get playing() {
      return state$1.playing;
    },
    get playingAds() {
      return state$1.playingAds;
    },
    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },
    get adsEnabled() {
      return state$1.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return _consumer;
    }
  };
  autoSetupMixin(videoPlayerPlugin, function () {
    precision = ApplicationInstance$1 && ApplicationInstance$1.stage && ApplicationInstance$1.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get('platform', 'textureMode', false);
    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var consumer;
  var getAds = function getAds() {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  var initAds = function initAds(config) {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  var state = {
    active: false
  };
  var playSlot = function playSlot() {
    var slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce(function (promise, ad) {
      return promise.then(function () {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  var playAd = function playAd(ad) {
    return new Promise(function (resolve) {
      if (state.active === false) {
        Log$1.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      }
      // is it safe to rely on videoplayer plugin already created the video tag?
      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl$1(ad.url);
      videoEl.load();
      var timeEvents = null;
      var timeout;
      var cleanup = function cleanup() {
        // remove all listeners
        Object.keys(handlers).forEach(function (handler) {
          return videoEl.removeEventListener(handler, handlers[handler]);
        });
        resolve();
      };
      var handlers = {
        play: function play() {
          Log$1.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended: function ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate: function timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log$1.info('Ad', 'Calculated quartiles times', {
              timeEvents: timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }
          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled: function stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(function () {
            cleanup();
          }, 5000); // make timeout configurable
        },
        canplay: function canplay() {
          timeout && clearTimeout(timeout);
        },
        error: function error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort: function abort() {
          cleanup();
        } // todo: pause, resume, mute, unmute beacons
      };
      // add all listeners
      Object.keys(handlers).forEach(function (handler) {
        return videoEl.addEventListener(handler, handlers[handler]);
      });
      videoEl.play();
    });
  };
  var sendBeacon = function sendBeacon(callbacks, event) {
    if (callbacks && callbacks[event]) {
      Log$1.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce(function (promise, url) {
        return promise.then(function () {
          return fetch(url)
          // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
          // note: for fetch failed http responses don't throw an Error :)
          .then(function (response) {
            if (response.status === 200) {
              fireOnConsumer('Beacon' + event + 'Sent');
            } else {
              fireOnConsumer('Beacon' + event + 'Failed' + response.status);
            }
            Promise.resolve(null);
          }).catch(function () {
            Promise.resolve(null);
          });
        });
      }, Promise.resolve(null));
    } else {
      Log$1.info('Ad', 'No callback found for ' + event);
    }
  };
  var fireOnConsumer = function fireOnConsumer(event, args) {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };
  var Ads = {
    get: function get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls: function prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer = videoPlayerConsumer;
      return new Promise(function (resolve) {
        Log$1.info('Ad', 'Starting session');
        getAds(config).then(function (ads) {
          Log$1.info('Ad', 'API result', ads);
          resolve({
            prerolls: function prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(function () {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls: function midrolls() {
              return Promise.resolve();
            },
            postrolls: function postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel: function cancel() {
      Log$1.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop: function stop() {
      Log$1.info('Ad', 'Stop Ad');
      state.active = false;
      // fixme: duplication
      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  }

  // Protects from prototype poisoning and unexpected merging up the prototype chain.
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }
    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  var warned = false;
  var deprecated = function deprecated() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }
    warned = true;
  };
  var Locale = /*#__PURE__*/function () {
    function Locale() {
      _classCallCheck(this, Locale);
      this.__enabled = false;
    }

    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    _createClass(Locale, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
          var _this = this;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (this.__enabled) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.next = 4;
                return fetch(path).then(function (resp) {
                  return resp.json();
                }).then(function (resp) {
                  _this.loadFromObject(resp);
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function load(_x) {
          return _load.apply(this, arguments);
        }
        return load;
      }()
      /**
       * Sets language used by module.
       *
       * @param {String} lang
       */
    }, {
      key: "setLanguage",
      value: function setLanguage(lang) {
        deprecated();
        this.__enabled = true;
        this.language = lang;
      }

      /**
       * Returns reference to translation object for current language.
       *
       * @return {Object}
       */
    }, {
      key: "tr",
      get: function get() {
        deprecated(true);
        return this.__trObj[this.language];
      }

      /**
       * Loads translation object from existing object (binds existing object).
       *
       * @param {Object} trObj
       */
    }, {
      key: "loadFromObject",
      value: function loadFromObject(trObj) {
        deprecated();
        var fallbackLanguage = 'en';
        if (Object.keys(trObj).indexOf(this.language) === -1) {
          Log$1.warn('No translations found for: ' + this.language);
          if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
            Log$1.warn('Using fallback language: ' + fallbackLanguage);
            this.language = fallbackLanguage;
          } else {
            var error = 'No translations found for fallback language: ' + fallbackLanguage;
            Log$1.error(error);
            throw Error(error);
          }
        }
        this.__trObj = trObj;
        for (var _i = 0, _Object$values = Object.values(this.__trObj); _i < _Object$values.length; _i++) {
          var lang = _Object$values[_i];
          for (var _i2 = 0, _Object$keys = Object.keys(lang); _i2 < _Object$keys.length; _i2++) {
            var str = _Object$keys[_i2];
            lang[str] = new LocalizedString(lang[str]);
          }
        }
      }
    }]);
    return Locale;
  }();
  /**
   * Extended string class used for localization.
   */
  var LocalizedString = /*#__PURE__*/function (_String) {
    _inherits(LocalizedString, _String);
    var _super = _createSuper(LocalizedString);
    function LocalizedString() {
      _classCallCheck(this, LocalizedString);
      return _super.apply(this, arguments);
    }
    _createClass(LocalizedString, [{
      key: "format",
      value:
      /**
       * Returns formatted LocalizedString.
       * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
       *
       * E.g.:
       * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
       * A and B and A
       *
       * @param  {...any} args List of arguments for placeholders.
       */
      function format() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var sub = args.reduce(function (string, arg, index) {
          return string.split("{".concat(index, "}")).join(arg);
        }, this);
        return new LocalizedString(sub);
      }
    }]);
    return LocalizedString;
  }( /*#__PURE__*/_wrapNativeSuper(String));
  var Locale$1 = new Locale();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var VersionLabel = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VersionLabel, _Lightning$Component);
    var _super = _createSuper(VersionLabel);
    function VersionLabel() {
      _classCallCheck(this, VersionLabel);
      return _super.apply(this, arguments);
    }
    _createClass(VersionLabel, [{
      key: "_firstActive",
      value: function _firstActive() {
        this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
        this.tag('Text').loadTexture();
        this.w = this.tag('Text').renderWidth + 40;
        this.h = this.tag('Text').renderHeight + 5;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xbb0078ac,
          h: 40,
          w: 100,
          x: function x(w) {
            return w - 50;
          },
          y: function y(h) {
            return h - 50;
          },
          mount: 1,
          Text: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 5,
            x: 20,
            text: {
              fontSize: 22,
              lineHeight: 26
            }
          }
        };
      }
    }]);
    return VersionLabel;
  }(Lightning$1.Component);

  var FpsIndicator = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(FpsIndicator, _Lightning$Component);
    var _super = _createSuper(FpsIndicator);
    function FpsIndicator() {
      _classCallCheck(this, FpsIndicator);
      return _super.apply(this, arguments);
    }
    _createClass(FpsIndicator, [{
      key: "_setup",
      value: function _setup() {
        var _this = this;
        this.config = _objectSpread2(_objectSpread2({}, {
          log: false,
          interval: 500,
          threshold: 1
        }), Settings$1.get('platform', 'showFps'));
        this.fps = 0;
        this.lastFps = this.fps - this.config.threshold;
        var fpsCalculator = function fpsCalculator() {
          _this.fps = ~~(1 / _this.stage.dt);
        };
        this.stage.on('frameStart', fpsCalculator);
        this.stage.off('framestart', fpsCalculator);
        this.interval = setInterval(this.showFps.bind(this), this.config.interval);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.showFps();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        clearInterval(this.interval);
      }
    }, {
      key: "showFps",
      value: function showFps() {
        if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
        this.lastFps = this.fps;
        // green
        var bgColor = 0xff008000;
        // orange
        if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
        // red
        else if (this.fps <= 20) bgColor = 0xffff0000;
        this.tag('Background').setSmooth('color', bgColor);
        this.tag('Counter').text = "".concat(this.fps);
        this.config.log && Log$1.info('FPS', this.fps);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xffffffff,
          texture: Lightning$1.Tools.getRoundRect(80, 80, 40),
          h: 80,
          w: 80,
          x: 100,
          y: 100,
          mount: 1,
          Background: {
            x: 3,
            y: 3,
            texture: Lightning$1.Tools.getRoundRect(72, 72, 36),
            color: 0xff008000
          },
          Counter: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 10,
            text: {
              fontSize: 32,
              textAlign: 'center'
            }
          },
          Text: {
            w: function w(_w2) {
              return _w2;
            },
            h: function h(_h2) {
              return _h2;
            },
            y: 48,
            text: {
              fontSize: 15,
              textAlign: 'center',
              text: 'FPS'
            }
          }
        };
      }
    }]);
    return FpsIndicator;
  }(Lightning$1.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var fetchJson = (function (file) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          // file protocol returns 0
          // http(s) protocol returns 200
          if (xhr.status === 0 || xhr.status === 200) resolve(JSON.parse(xhr.responseText));else reject(xhr.statusText);
        }
      };
      xhr.open('GET', file);
      xhr.send(null);
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var basePath;
  var _proxyUrl;
  var initUtils = function initUtils(config) {
    basePath = _ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));
    if (config.proxyUrl) {
      _proxyUrl = _ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset: function asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl: function proxyUrl(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _proxyUrl ? _proxyUrl + '?' + _makeQueryString(url, options) : url;
    },
    makeQueryString: function makeQueryString() {
      return _makeQueryString.apply(void 0, arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol: function ensureUrlWithProtocol() {
      return _ensureUrlWithProtocol.apply(void 0, arguments);
    }
  };
  var _ensureUrlWithProtocol = function _ensureUrlWithProtocol(url) {
    if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
      return window.location.protocol + '//' + url;
    }
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  var makeFullStaticPath = function makeFullStaticPath() {
    var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

    // if path is URL, we assume it's already the full static path, so we just return it
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname);

      // remove possible leading dot from path
      path = path.charAt(0) === '.' ? path.substr(1) : path;
      // ensure path has leading slash
      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  var cleanUpPathName = function cleanUpPathName(pathname) {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    var parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };
  var _makeQueryString = function _makeQueryString(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value
    options[type] = url;
    return Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  var meta = {};
  var translations = {};
  var language = null;
  var initLanguage = function initLanguage(file) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      fetchJson(file).then(function (json) {
        setTranslations(json);
        // set language (directly or in a promise)
        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(function (lang) {
          return setLanguage(lang).then(resolve).catch(reject);
        }).catch(function (e) {
          Log$1.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(function () {
        var error = 'Language file ' + file + ' not found';
        Log$1.error(error);
        reject(error);
      });
    });
  };
  var setTranslations = function setTranslations(obj) {
    if ('meta' in obj) {
      meta = _objectSpread2({}, obj.meta);
      delete obj.meta;
    }
    translations = obj;
  };
  var setLanguage = function setLanguage(lng) {
    language = null;
    return new Promise(function (resolve, reject) {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          var error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log$1.warn(error);
          language = meta.default;
        } else {
          var _error = 'Translations for Language ' + language + ' not found.';
          Log$1.error(_error);
          reject(_error);
        }
      }
      if (language) {
        Log$1.info('Setting language to', language);
        var translationsObj = translations[language];
        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          var url = Utils.asset(translationsObj);
          fetchJson(url).then(function (json) {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(function (e) {
            var error = 'Error while fetching ' + url;
            Log$1.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout.toString = function () {
        return _setTimeout.toString();
      };
      return setTimeout;
    }(function (cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      var timeoutId = setTimeout(function () {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        cb.apply(null, params);
      }, timeout, params);
      Log$1.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }
      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };
      return clearTimeout;
    }(function (timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        Log$1.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log$1.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    }),
    clearTimeouts: function clearTimeouts() {
      var _this = this;
      registry.timeouts.forEach(function (timeoutId) {
        _this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval: function (_setInterval) {
      function setInterval(_x4, _x5) {
        return _setInterval.apply(this, arguments);
      }
      setInterval.toString = function () {
        return _setInterval.toString();
      };
      return setInterval;
    }(function (cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      var intervalId = setInterval(function () {
        registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        cb.apply(null, params);
      }, interval, params);
      Log$1.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    }),
    clearInterval: function (_clearInterval) {
      function clearInterval(_x6) {
        return _clearInterval.apply(this, arguments);
      }
      clearInterval.toString = function () {
        return _clearInterval.toString();
      };
      return clearInterval;
    }(function (intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        Log$1.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log$1.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    }),
    clearIntervals: function clearIntervals() {
      var _this2 = this;
      registry.intervals.forEach(function (intervalId) {
        _this2.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener: function addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      var targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log$1.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener: function removeEventListener(target, event, handler) {
      var targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(function (fn) {
          return fn !== handler;
        });
        Log$1.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
      } else {
        Log$1.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners: function removeEventListeners(target, event) {
      var _this3 = this;
      if (target && event) {
        var targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(function (handler) {
            _this3.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        var _targetIndex = registry.targets.indexOf(target);
        if (_targetIndex > -1) {
          Object.keys(registry.eventListeners[_targetIndex]).forEach(function (_event) {
            _this3.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(function (targetIndex) {
          _this3.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear: function clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var isObject$2 = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isString$2 = function isString(v) {
    return typeof v === 'string';
  };
  var getRgbaComponents = function getRgbaComponents(argb) {
    return {
      r: (argb / 65536 | 0) % 256,
      g: (argb / 256 | 0) % 256,
      b: argb * 1 % 256,
      a: argb / 16777216 | 0
    };
  };
  var mergeColors = function mergeColors(c1, c2, p) {
    var r1 = (c1 / 65536 | 0) % 256;
    var g1 = (c1 / 256 | 0) % 256;
    var b1 = c1 % 256;
    var a1 = c1 / 16777216 | 0;
    var r2 = (c2 / 65536 | 0) % 256;
    var g2 = (c2 / 256 | 0) % 256;
    var b2 = c2 % 256;
    var a2 = c2 / 16777216 | 0;
    var r = r1 * p + r2 * (1 - p);
    var g = g1 * p + g2 * (1 - p);
    var b = b1 * p + b2 * (1 - p);
    var a = a1 * p + a2 * (1 - p);
    return Math.round(a) * 16777216 + Math.round(r) * 65536 + Math.round(g) * 256 + Math.round(b);
  };
  var calculateAlpha = function calculateAlpha(argb, p) {
    if (p > 1) {
      p /= 100;
    } else if (p < 0) {
      p = 0;
    }
    var r = (argb / 65536 | 0) % 256;
    var g = (argb / 256 | 0) % 256;
    var b = argb % 256;
    return (r << 16) + (g << 8) + b + (Math.round(p * 255) | 0) * 16777216;
  };
  var getArgbNumber = function getArgbNumber(rgba) {
    rgba[0] = Math.max(0, Math.min(255, rgba[0]));
    rgba[1] = Math.max(0, Math.min(255, rgba[1]));
    rgba[2] = Math.max(0, Math.min(255, rgba[2]));
    rgba[3] = Math.max(0, Math.min(255, rgba[3]));
    var v = ((rgba[3] | 0) << 24) + ((rgba[0] | 0) << 16) + ((rgba[1] | 0) << 8) + (rgba[2] | 0);
    if (v < 0) {
      v = 0xffffffff + v + 1;
    }
    return v;
  };
  var argbToHSLA = function argbToHSLA(argb) {
    var col = getRgbaComponents(argb);
    var r = col.r / 255;
    var g = col.g / 255;
    var b = col.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (min + max) * 0.5;
    if (l > 0) {
      var maxMin = max - min;
      if (maxMin > 0) {
        var r2 = (max - r) / maxMin;
        var g2 = (max - g) / maxMin;
        var b2 = (max - b) / maxMin;
        if (l < 0.5) {
          s = max + min;
        } else {
          s = 2 - max - min;
        }
        if (r === max && g === min) {
          h = 5.0 + b2;
        } else if (r === max) {
          h = 1.0 - g2;
        } else if (g === max && b === min) {
          h = 1.0 + r2;
        } else if (g === max) {
          h = 3.0 - b2;
        } else if (b === max) {
          h = 3.0 + g2;
        } else {
          h = 5.0 - r2;
        }
        h = h / 6;
      }
    }
    return {
      h: h % 1,
      s: s,
      l: l,
      a: col.a
    };
  };
  var hslaToARGB = function hslaToARGB(hsla) {
    var r = 1;
    var g = 1;
    var b = 1;
    var h = hsla.h;
    var s = hsla.s;
    var l = hsla.l;
    if (h < 0) {
      h += 1;
    }
    var max = 0;
    if (l <= 0.5) {
      max = l * (1.0 + s);
    } else {
      max = l + s - l * s;
    }
    if (max > 0) {
      h *= 6.0;
      var min = l + l - max;
      var minMax = (max - min) / max;
      var sextant = Math.floor(h);
      var fract = h - sextant;
      var minMaxFract = max * minMax * fract;
      var mid1 = min + minMaxFract;
      var mid2 = max - minMaxFract;
      if (sextant === 0) {
        r = max;
        g = mid1;
        b = min;
      }
      if (sextant === 1) {
        r = mid2;
        g = max;
        b = min;
      }
      if (sextant === 2) {
        r = min;
        g = max;
        b = mid1;
      }
      if (sextant === 3) {
        r = min;
        g = mid2;
        b = max;
      }
      if (sextant === 4) {
        r = mid1;
        g = min;
        b = max;
      }
      if (sextant === 5) {
        r = max;
        g = min;
        b = mid2;
      }
    }
    return getArgbNumber([Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255), hsla.a]);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  var normalizedColors = {
    //store for normalized colors
  };
  var addColors = function addColors(colorsToAdd, value) {
    if (isObject$2(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(function (color) {
        return cleanUpNormalizedColors(color);
      });
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$2(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  var cleanUpNormalizedColors = function cleanUpNormalizedColors(color) {
    for (var c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };
  var initColors = function initColors(file) {
    return new Promise(function (resolve, reject) {
      if (typeof file === 'object') {
        addColors(file);
        return resolve();
      }
      fetchJson(file).then(function (json) {
        addColors(json);
        return resolve();
      }).catch(function () {
        var error = 'Colors file ' + file + ' not found';
        Log$1.error(error);
        return reject(error);
      });
    });
  };
  var normalizeColorToARGB = function normalizeColorToARGB(color) {
    var targetColor = normalizedColors[color] || colors[color] || color;
    if (!targetColor) {
      targetColor = color;
    }
    var check = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
    if (isString$2(targetColor) && check.test(targetColor)) {
      var hex = check.exec(targetColor)[1];
      if (hex.length === 3) {
        hex = hex.split('').map(function (value) {
          return value + value;
        }).join('');
      }
      targetColor = "0xff".concat(hex) * 1;
    }
    if (!normalizedColors[color]) {
      normalizedColors[color] = targetColor;
    }
    return targetColor || 0xffffffff;
  };
  var Colors = (function (color) {
    return Color.generate(color);
  });
  var Color = {
    color: null,
    generate: function generate() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.color;
      if (normalizedColors[value]) {
        this.color = normalizedColors[value];
      } else {
        this.color = normalizeColorToARGB(value);
      }
      return this;
    },
    get: function get() {
      return this.color;
    },
    alpha: function alpha(percentage) {
      this.color = calculateAlpha(this.color, Math.abs(percentage));
      return this;
    },
    darker: function darker(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = hsl.l * (1 - percentage);
      this.color = hslaToARGB(hsl);
      return this;
    },
    lighter: function lighter(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = hsl.l + (1 - hsl.l) * percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    saturation: function saturation(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.s = percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    lightness: function lightness(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    hue: function hue(degrees) {
      var hsl = argbToHSLA(this.color);
      hsl.h = degrees;
      this.color = hslaToARGB(hsl);
      return this;
    },
    mix: function mix(argb, p) {
      this.color = mergeColors(this.color, argb, p);
      return this;
    }
  };

  var name = "@lightningjs/sdk";
  var version = "5.3.1";
  var license = "Apache-2.0";
  var types = "index.d.ts";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public",
  	typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
  	tsd: "tsd"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "^2.7.0",
  	"@metrological/sdk": "^1.0.0",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	localcookies: "^2.0.0",
  	shelljs: "^0.8.5",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0",
  	tsd: "^0.22.0",
  	typedoc: "^0.23.9"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name,
  	version: version,
  	license: license,
  	types: types,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  var AppInstance;
  var defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      precision: 1,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  var customFontFaces = [];
  var fontLoader = function fontLoader(fonts, store) {
    return new Promise(function (resolve, reject) {
      fonts.map(function (_ref) {
        var family = _ref.family,
          url = _ref.url,
          urls = _ref.urls,
          descriptors = _ref.descriptors;
        return function () {
          var src = urls ? urls.map(function (url) {
            return 'url(' + url + ')';
          }) : 'url(' + url + ')';
          var fontFace = new FontFace(family, src, descriptors || {});
          store.push(fontFace);
          Log$1.info('Loading font', family);
          document.fonts.add(fontFace);
          return fontFace.load();
        };
      }).reduce(function (promise, method) {
        return promise.then(function () {
          return method();
        });
      }, Promise.resolve(null)).then(resolve).catch(reject);
    });
  };
  function Application (App, appData, platformSettings) {
    var width = platformSettings.width,
      height = platformSettings.height;
    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    }

    // support for 720p browser
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }
    return /*#__PURE__*/function (_Lightning$Applicatio) {
      _inherits(Application, _Lightning$Applicatio);
      var _super = _createSuper(Application);
      function Application(options) {
        var _this;
        _classCallCheck(this, Application);
        var config = cjs(defaultOptions, options);
        // Deepmerge breaks HTMLCanvasElement, so restore the passed in canvas.
        if (options.stage.canvas) {
          config.stage.canvas = options.stage.canvas;
        }
        _this = _super.call(this, config);
        _this.config = config;
        return _this;
      }
      _createClass(Application, [{
        key: "colorshift",
        value: function colorshift() {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          Accessibility.colorshift(this, type, config);
        }
      }, {
        key: "keymapping",
        get: function get() {
          return this.stage.application.config.keys;
        }

        /**
         * This function overrides the default keymap with the latest keymap.
         * @param customKeyMap
         * @param keepDuplicates
         */
      }, {
        key: "overrideKeyMap",
        value: function overrideKeyMap(customKeyMap) {
          var keepDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var baseKeyMap = this.stage.application.config.keys;
          Object.keys(customKeyMap).reduce(function (keymapping, key) {
            // prevent duplicate values to exist in final keymapping (i.e. 2 keys triggering 'Back')
            if (!keepDuplicates) {
              Object.keys(baseKeyMap).forEach(function (baseKey) {
                if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
                  delete keymapping[baseKey];
                }
              });
            }
            keymapping[key] = customKeyMap[key];
            return keymapping;
          }, baseKeyMap);
          return baseKeyMap;
        }
      }, {
        key: "_setup",
        value: function _setup() {
          var _this2 = this;
          Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []),
          // to be deprecated
          Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(function () {
            Metrics$1.app.loaded();
            _this2.w = _this2.config.stage.w / _this2.config.stage.precision;
            _this2.h = _this2.config.stage.h / _this2.config.stage.precision;
            AppInstance = _this2.stage.c({
              ref: 'App',
              type: App,
              zIndex: 1,
              forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
            });
            _this2.childList.a(AppInstance);
            _this2._refocus();
            Log$1.info('App version', _this2.config.version);
            Log$1.info('SDK version', packageInfo.version);
            if (platformSettings.showVersion) {
              _this2.childList.a({
                ref: 'VersionLabel',
                type: VersionLabel,
                version: _this2.config.version,
                sdkVersion: packageInfo.version,
                zIndex: 1
              });
            }
            if (platformSettings.showFps) {
              _this2.childList.a({
                ref: 'FpsCounter',
                type: FpsIndicator,
                zIndex: 1
              });
            }
            _get(_getPrototypeOf(Application.prototype), "_setup", _this2).call(_this2);
          }).catch(console.error);
        }
      }, {
        key: "_handleBack",
        value: function _handleBack() {
          this.closeApp();
        }
      }, {
        key: "_handleExit",
        value: function _handleExit() {
          this.closeApp();
        }
      }, {
        key: "closeApp",
        value: function closeApp() {
          Log$1.info('Signaling App Close');
          if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
            platformSettings.onClose.apply(platformSettings, arguments);
          } else {
            this.close();
          }
        }
      }, {
        key: "close",
        value: function close() {
          Log$1.info('Closing App');
          Settings$1.clearSubscribers();
          Registry.clear();
          this.childList.remove(this.tag('App'));
          this.cleanupFonts();
          // force texture garbage collect
          this.stage.gc();
          this.destroy();
        }
      }, {
        key: "loadFonts",
        value: function loadFonts(fonts) {
          return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
        }
      }, {
        key: "cleanupFonts",
        value: function cleanupFonts() {
          if ('delete' in document.fonts) {
            customFontFaces.forEach(function (fontFace) {
              Log$1.info('Removing font', fontFace.family);
              document.fonts.delete(fontFace);
            });
          } else {
            Log$1.info('No support for removing manually-added fonts');
          }
        }
      }, {
        key: "loadLanguage",
        value: function loadLanguage(config) {
          var file = Utils.asset('translations.json');
          var language = config;
          if (typeof language === 'object') {
            language = config.language || null;
            file = config.file || file;
          }
          return initLanguage(file, language);
        }
      }, {
        key: "loadColors",
        value: function loadColors(config) {
          var file = Utils.asset('colors.json');
          if (config && (typeof config === 'string' || typeof config === 'object')) {
            file = config;
          }
          return initColors(file);
        }
      }, {
        key: "focus",
        set: function set(v) {
          this._focussed = v;
          this._refocus();
        }
      }, {
        key: "_getFocused",
        value: function _getFocused() {
          return this._focussed || this.tag('App');
        }
      }], [{
        key: "_template",
        value: function _template() {
          return {
            w: 1920,
            h: 1080
          };
        }
      }]);
      return Application;
    }(Lightning$1.Application);
  }

  /*#__PURE__*/(function (_Lightning$textures$I) {
    _inherits(ScaledImageTexture, _Lightning$textures$I);
    var _super = _createSuper(ScaledImageTexture);
    function ScaledImageTexture(stage) {
      var _this;
      _classCallCheck(this, ScaledImageTexture);
      _this = _super.call(this, stage);
      _this._scalingOptions = undefined;
      return _this;
    }
    _createClass(ScaledImageTexture, [{
      key: "options",
      set: function set(options) {
        this.resizeMode = this._scalingOptions = options;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var obj = _get(_getPrototypeOf(ScaledImageTexture.prototype), "getNonDefaults", this).call(this);
        if (this._src) {
          obj.src = this._src;
        }
        return obj;
      }
    }]);
    return ScaledImageTexture;
  })(Lightning$1.textures.ImageTexture);

  var events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];
  var mediaUrl = function mediaUrl(url) {
    return url;
  };
  var initMediaPlayer = function initMediaPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(Mediaplayer, _Lightning$Component);
    var _super = _createSuper(Mediaplayer);
    function Mediaplayer() {
      _classCallCheck(this, Mediaplayer);
      return _super.apply(this, arguments);
    }
    _createClass(Mediaplayer, [{
      key: "_construct",
      value: function _construct() {
        this._skipRenderToTexture = false;
        this._metrics = null;
        this._textureMode = Settings$1.get('platform', 'textureMode') || false;
        Log$1.info('Texture mode: ' + this._textureMode);
        console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
      }
    }, {
      key: "skipRenderToTexture",
      set: function set(v) {
        this._skipRenderToTexture = v;
      }
    }, {
      key: "textureMode",
      get: function get() {
        return this._textureMode;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "_init",
      value: function _init() {
        //re-use videotag if already there
        var videoEls = document.getElementsByTagName('video');
        if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
          this.videoEl = document.createElement('video');
          this.videoEl.setAttribute('id', 'video-player');
          this.videoEl.style.position = 'absolute';
          this.videoEl.style.zIndex = '1';
          this.videoEl.style.display = 'none';
          this.videoEl.setAttribute('width', '100%');
          this.videoEl.setAttribute('height', '100%');
          this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
          document.body.appendChild(this.videoEl);
        }
        if (this.textureMode && !this._skipRenderToTexture) {
          this._createVideoTexture();
        }
        this.eventHandlers = [];
      }
    }, {
      key: "_registerListeners",
      value: function _registerListeners() {
        var _this = this;
        events.forEach(function (event) {
          var handler = function handler(e) {
            if (_this._metrics && _this._metrics[event] && typeof _this._metrics[event] === 'function') {
              _this._metrics[event]({
                currentTime: _this.videoEl.currentTime
              });
            }
            _this.fire(event, {
              videoElement: _this.videoEl,
              event: e
            });
          };
          _this.eventHandlers.push(handler);
          _this.videoEl.addEventListener(event, handler);
        });
      }
    }, {
      key: "_deregisterListeners",
      value: function _deregisterListeners() {
        var _this2 = this;
        Log$1.info('Deregistering event listeners MediaPlayer');
        events.forEach(function (event, index) {
          _this2.videoEl.removeEventListener(event, _this2.eventHandlers[index]);
        });
        this.eventHandlers = [];
      }
    }, {
      key: "_attach",
      value: function _attach() {
        this._registerListeners();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        this._deregisterListeners();
        this.close();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
      }
    }, {
      key: "_startUpdatingVideoTexture",
      value: function _startUpdatingVideoTexture() {
        var _this3 = this;
        if (this.textureMode && !this._skipRenderToTexture) {
          var stage = this.stage;
          if (!this._updateVideoTexture) {
            this._updateVideoTexture = function () {
              if (_this3.videoTexture.options.source && _this3.videoEl.videoWidth && _this3.active) {
                var gl = stage.gl;
                var currentTime = new Date().getTime();

                // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
                // We'll fallback to fixed 30fps in this case.
                var frameCount = _this3.videoEl.webkitDecodedFrameCount;
                var mustUpdate = frameCount ? _this3._lastFrame !== frameCount : _this3._lastTime < currentTime - 30;
                if (mustUpdate) {
                  _this3._lastTime = currentTime;
                  _this3._lastFrame = frameCount;
                  try {
                    gl.bindTexture(gl.TEXTURE_2D, _this3.videoTexture.options.source);
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this3.videoEl);
                    _this3._lastFrame = _this3.videoEl.webkitDecodedFrameCount;
                    _this3.videoTextureView.visible = true;
                    _this3.videoTexture.options.w = _this3.videoEl.videoWidth;
                    _this3.videoTexture.options.h = _this3.videoEl.videoHeight;
                    var expectedAspectRatio = _this3.videoTextureView.w / _this3.videoTextureView.h;
                    var realAspectRatio = _this3.videoEl.videoWidth / _this3.videoEl.videoHeight;
                    if (expectedAspectRatio > realAspectRatio) {
                      _this3.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                      _this3.videoTextureView.scaleY = 1;
                    } else {
                      _this3.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                      _this3.videoTextureView.scaleX = 1;
                    }
                  } catch (e) {
                    Log$1.error('texImage2d video', e);
                    _this3._stopUpdatingVideoTexture();
                    _this3.videoTextureView.visible = false;
                  }
                  _this3.videoTexture.source.forceRenderUpdate();
                }
              }
            };
          }
          if (!this._updatingVideoTexture) {
            stage.on('frameStart', this._updateVideoTexture);
            this._updatingVideoTexture = true;
          }
        }
      }
    }, {
      key: "_stopUpdatingVideoTexture",
      value: function _stopUpdatingVideoTexture() {
        if (this.textureMode) {
          var stage = this.stage;
          stage.removeListener('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = false;
          this.videoTextureView.visible = false;
          if (this.videoTexture.options.source) {
            var gl = stage.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
        }
      }
    }, {
      key: "updateSettings",
      value: function updateSettings() {
        var _this4 = this;
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // The Component that 'consumes' the media player.
        this._consumer = settings.consumer;
        if (this._consumer && this._consumer.getMediaplayerSettings) {
          // Allow consumer to add settings.
          settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
        }
        if (!Lightning$1.Utils.equalValues(this._stream, settings.stream)) {
          if (settings.stream && settings.stream.keySystem) {
            navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(function (keySystemAccess) {
              return keySystemAccess.createMediaKeys();
            }).then(function (createdMediaKeys) {
              return _this4.videoEl.setMediaKeys(createdMediaKeys);
            }).then(function () {
              if (settings.stream && settings.stream.src) _this4.open(settings.stream.src);
            }).catch(function () {
              console.error('Failed to set up MediaKeys');
            });
          } else if (settings.stream && settings.stream.src) {
            // This is here to be backwards compatible, will be removed
            // in future sdk release
            if (Settings$1.get('app', 'hls')) {
              if (!window.Hls) {
                window.Hls = /*#__PURE__*/function () {
                  function Hls() {
                    _classCallCheck(this, Hls);
                  }
                  _createClass(Hls, null, [{
                    key: "isSupported",
                    value: function isSupported() {
                      console.warn('hls-light not included');
                      return false;
                    }
                  }]);
                  return Hls;
                }();
              }
              if (window.Hls.isSupported()) {
                if (!this._hls) this._hls = new window.Hls({
                  liveDurationInfinity: true
                });
                this._hls.loadSource(settings.stream.src);
                this._hls.attachMedia(this.videoEl);
                this.videoEl.style.display = 'block';
              }
            } else {
              this.open(settings.stream.src);
            }
          } else {
            this.close();
          }
          this._stream = settings.stream;
        }
        this._setHide(settings.hide);
        this._setVideoArea(settings.videoPos);
      }
    }, {
      key: "_setHide",
      value: function _setHide(hide) {
        if (this.textureMode) {
          this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
        } else {
          this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
        }
      }
    }, {
      key: "open",
      value: function open(url) {
        var _this5 = this;
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          hide: false,
          videoPosition: null
        };
        // prep the media url to play depending on platform (mediaPlayerplugin)
        url = mediaUrl(url);
        this._metrics = Metrics$1.media(url);
        Log$1.info('Playing stream', url);
        if (this.application.noVideo) {
          Log$1.info('noVideo option set, so ignoring: ' + url);
          return;
        }
        // close the video when opening same url as current (effectively reloading)
        if (this.videoEl.getAttribute('src') === url) {
          this.close();
        }
        this.videoEl.setAttribute('src', url);

        // force hide, then force show (in next tick!)
        // (fixes comcast playback rollover issue)
        this.videoEl.style.visibility = 'hidden';
        this.videoEl.style.display = 'none';
        setTimeout(function () {
          _this5.videoEl.style.display = 'block';
          _this5.videoEl.style.visibility = 'visible';
        });
        this._setHide(settings.hide);
        this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
      }
    }, {
      key: "close",
      value: function close() {
        // We need to pause first in order to stop sound.
        this.videoEl.pause();
        this.videoEl.removeAttribute('src');

        // force load to reset everything without errors
        this.videoEl.load();
        this._clearSrc();
        this.videoEl.style.display = 'none';
      }
    }, {
      key: "playPause",
      value: function playPause() {
        if (this.isPlaying()) {
          this.doPause();
        } else {
          this.doPlay();
        }
      }
    }, {
      key: "muted",
      get: function get() {
        return this.videoEl.muted;
      },
      set: function set(v) {
        this.videoEl.muted = v;
      }
    }, {
      key: "loop",
      get: function get() {
        return this.videoEl.loop;
      },
      set: function set(v) {
        this.videoEl.loop = v;
      }
    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this._getState() === 'Playing';
      }
    }, {
      key: "doPlay",
      value: function doPlay() {
        this.videoEl.play();
      }
    }, {
      key: "doPause",
      value: function doPause() {
        this.videoEl.pause();
      }
    }, {
      key: "reload",
      value: function reload() {
        var url = this.videoEl.getAttribute('src');
        this.close();
        this.videoEl.src = url;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return Promise.resolve(this.videoEl.currentTime);
      }
    }, {
      key: "setPosition",
      value: function setPosition(pos) {
        this.videoEl.currentTime = pos;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return Promise.resolve(this.videoEl.duration);
      }
    }, {
      key: "seek",
      value: function seek(time) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (absolute) {
          this.videoEl.currentTime = time;
        } else {
          this.videoEl.currentTime += time;
        }
      }
    }, {
      key: "videoTextureView",
      get: function get() {
        return this.tag('Video').tag('VideoTexture');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoTextureView.texture;
      }
    }, {
      key: "_setVideoArea",
      value: function _setVideoArea(videoPos) {
        if (Lightning$1.Utils.equalValues(this._videoPos, videoPos)) {
          return;
        }
        this._videoPos = videoPos;
        if (this.textureMode) {
          this.videoTextureView.patch({
            smooth: {
              x: videoPos[0],
              y: videoPos[1],
              w: videoPos[2] - videoPos[0],
              h: videoPos[3] - videoPos[1]
            }
          });
        } else {
          var precision = this.stage.getRenderPrecision();
          this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
          this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
          this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
          this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
        }
      }
    }, {
      key: "_fireConsumer",
      value: function _fireConsumer(event, args) {
        if (this._consumer) {
          this._consumer.fire(event, args);
        }
      }
    }, {
      key: "_equalInitData",
      value: function _equalInitData(buf1, buf2) {
        if (!buf1 || !buf2) return false;
        if (buf1.byteLength != buf2.byteLength) return false;
        var dv1 = new Int8Array(buf1);
        var dv2 = new Int8Array(buf2);
        for (var i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false;
        return true;
      }
    }, {
      key: "error",
      value: function error(args) {
        this._fireConsumer('$mediaplayerError', args);
        this._setState('');
        return '';
      }
    }, {
      key: "loadeddata",
      value: function loadeddata(args) {
        this._fireConsumer('$mediaplayerLoadedData', args);
      }
    }, {
      key: "play",
      value: function play(args) {
        this._fireConsumer('$mediaplayerPlay', args);
      }
    }, {
      key: "playing",
      value: function playing(args) {
        this._fireConsumer('$mediaplayerPlaying', args);
        this._setState('Playing');
      }
    }, {
      key: "canplay",
      value: function canplay(args) {
        this.videoEl.play();
        this._fireConsumer('$mediaplayerStart', args);
      }
    }, {
      key: "loadstart",
      value: function loadstart(args) {
        this._fireConsumer('$mediaplayerLoad', args);
      }
    }, {
      key: "seeked",
      value: function seeked() {
        this._fireConsumer('$mediaplayerSeeked', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "seeking",
      value: function seeking() {
        this._fireConsumer('$mediaplayerSeeking', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "durationchange",
      value: function durationchange(args) {
        this._fireConsumer('$mediaplayerDurationChange', args);
      }
    }, {
      key: "encrypted",
      value: function encrypted(args) {
        var video = args.videoElement;
        var event = args.event;
        // FIXME: Double encrypted events need to be properly filtered by Gstreamer
        if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
          this._previousInitData = event.initData;
          this._fireConsumer('$mediaplayerEncrypted', args);
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            VideoWrap: {
              VideoTexture: {
                visible: false,
                pivot: 0.5,
                texture: {
                  type: Lightning$1.textures.StaticTexture,
                  options: {}
                }
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this6) {
          _inherits(Playing, _this6);
          var _super2 = _createSuper(Playing);
          function Playing() {
            _classCallCheck(this, Playing);
            return _super2.apply(this, arguments);
          }
          _createClass(Playing, [{
            key: "$enter",
            value: function $enter() {
              this._startUpdatingVideoTexture();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._stopUpdatingVideoTexture();
            }
          }, {
            key: "timeupdate",
            value: function timeupdate() {
              this._fireConsumer('$mediaplayerProgress', {
                currentTime: this.videoEl.currentTime,
                duration: this.videoEl.duration || 1
              });
            }
          }, {
            key: "ended",
            value: function ended(args) {
              this._fireConsumer('$mediaplayerEnded', args);
              this._setState('');
            }
          }, {
            key: "pause",
            value: function pause(args) {
              this._fireConsumer('$mediaplayerPause', args);
              this._setState('Playing.Paused');
            }
          }, {
            key: "_clearSrc",
            value: function _clearSrc() {
              this._fireConsumer('$mediaplayerStop', {});
              this._setState('');
            }
          }], [{
            key: "_states",
            value: function _states() {
              return [/*#__PURE__*/function (_this7) {
                _inherits(Paused, _this7);
                var _super3 = _createSuper(Paused);
                function Paused() {
                  _classCallCheck(this, Paused);
                  return _super3.apply(this, arguments);
                }
                return _createClass(Paused);
              }(this)];
            }
          }]);
          return Playing;
        }(this)];
      }
    }]);
    return Mediaplayer;
  })(Lightning$1.Component);

  var localCookie = /*#__PURE__*/function () {
    function localCookie(e) {
      _classCallCheck(this, localCookie);
      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage,
        keys: this._getLocalStorageKeys
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies,
        keys: this._getCookieKeys
      };
    }
    _createClass(localCookie, [{
      key: "_checkIfLocalStorageWorks",
      value: function _checkIfLocalStorageWorks() {
        if ("undefined" == typeof localStorage) return !1;
        try {
          return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: "_getItemLocalStorage",
      value: function _getItemLocalStorage(e) {
        return window.localStorage.getItem(e);
      }
    }, {
      key: "_setItemLocalStorage",
      value: function _setItemLocalStorage(e, t) {
        return window.localStorage.setItem(e, t);
      }
    }, {
      key: "_removeItemLocalStorage",
      value: function _removeItemLocalStorage(e) {
        return window.localStorage.removeItem(e);
      }
    }, {
      key: "_clearLocalStorage",
      value: function _clearLocalStorage() {
        return window.localStorage.clear();
      }
    }, {
      key: "_getLocalStorageKeys",
      value: function _getLocalStorageKeys() {
        return Object.keys(window.localStorage);
      }
    }, {
      key: "_getItemCookie",
      value: function _getItemCookie(e) {
        var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
          return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
        }(e) + "=([^;]*)"));
        return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
      }
    }, {
      key: "_setItemCookie",
      value: function _setItemCookie(e, t) {
        var o = new Date(),
          r = new Date(o.getTime() + 15768e7);
        document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
      }
    }, {
      key: "_removeItemCookie",
      value: function _removeItemCookie(e) {
        document.cookie = "".concat(e, "=;Max-Age=-99999999;");
      }
    }, {
      key: "_clearCookies",
      value: function _clearCookies() {
        document.cookie.split(";").forEach(function (e) {
          document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
        });
      }
    }, {
      key: "_getCookieKeys",
      value: function _getCookieKeys() {
        return document.cookie.split(";").map(function (e) {
          return e.split("=")[0];
        });
      }
    }]);
    return localCookie;
  }();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var initStorage = function initStorage() {
    Settings$1.get('platform', 'id');
    // todo: pass options (for example to force the use of cookies)
    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  var isWildcard = /^[!*$]$/;
  var hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  var isNamedGroup = /^\/:/;

  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */
  var stripRegex = function stripRegex(route) {
    var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';
    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  var createRegister = function createRegister(flags) {
    var reg = new Map()
    // store user defined and router
    // defined flags in register
    ;
    [].concat(_toConsumableArray(Object.keys(flags)), _toConsumableArray(Object.getOwnPropertySymbols(flags))).forEach(function (key) {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  var Request = /*#__PURE__*/function () {
    function Request() {
      var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var navArgs = arguments.length > 1 ? arguments[1] : undefined;
      var storeCaller = arguments.length > 2 ? arguments[2] : undefined;
      _classCallCheck(this, Request);
      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;

      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */
      this._storeCaller = storeCaller;

      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */
      this._register = new Map();

      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */
      this._isCreated = false;

      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */
      this._isSharedInstance = false;

      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */
      this._cancelled = false;

      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */
      this._copiedHistoryState = null;

      // if there are arguments attached to navigate()
      // we store them in new request
      if (isObject$1(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean$1(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      }
      // @todo: remove because we can simply check
      // ._storeCaller property
      this._register.set(symbols.store, this._storeCaller);
    }
    _createClass(Request, [{
      key: "cancel",
      value: function cancel() {
        Log$1.debug('[router]:', "cancelled ".concat(this._hash));
        this._cancelled = true;
      }
    }, {
      key: "url",
      get: function get() {
        return this._hash;
      }
    }, {
      key: "register",
      get: function get() {
        return this._register;
      }
    }, {
      key: "hash",
      get: function get() {
        return this._hash;
      },
      set: function set(args) {
        this._hash = args;
      }
    }, {
      key: "route",
      get: function get() {
        return this._route;
      },
      set: function set(args) {
        this._route = args;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      },
      set: function set(args) {
        this._provider = args;
      }
    }, {
      key: "providerType",
      get: function get() {
        return this._providerType;
      },
      set: function set(args) {
        this._providerType = args;
      }
    }, {
      key: "page",
      get: function get() {
        return this._page;
      },
      set: function set(args) {
        this._page = args;
      }
    }, {
      key: "isCreated",
      get: function get() {
        return this._isCreated;
      },
      set: function set(args) {
        this._isCreated = args;
      }
    }, {
      key: "isSharedInstance",
      get: function get() {
        return this._isSharedInstance;
      },
      set: function set(args) {
        this._isSharedInstance = args;
      }
    }, {
      key: "isCancelled",
      get: function get() {
        return this._cancelled;
      }
    }, {
      key: "copiedHistoryState",
      get: function get() {
        return this._copiedHistoryState;
      },
      set: function set(v) {
        this._copiedHistoryState = v;
      }
    }]);
    return Request;
  }();

  var Route = /*#__PURE__*/function () {
    function Route() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Route);
      // keep backwards compatible
      var type = ['on', 'before', 'after'].reduce(function (acc, type) {
        return isFunction$1(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;
      if (type) {
        this._provider = {
          type: type,
          request: config[type]
        };
      }
    }
    _createClass(Route, [{
      key: "path",
      get: function get() {
        return this._cfg.path;
      }
    }, {
      key: "name",
      get: function get() {
        return this._cfg.name;
      }
    }, {
      key: "component",
      get: function get() {
        return this._cfg.component;
      }
    }, {
      key: "options",
      get: function get() {
        return this._cfg.options;
      }
    }, {
      key: "widgets",
      get: function get() {
        return this._cfg.widgets;
      }
    }, {
      key: "cache",
      get: function get() {
        return this._cfg.cache;
      }
    }, {
      key: "hook",
      get: function get() {
        return this._cfg.hook;
      }
    }, {
      key: "beforeNavigate",
      get: function get() {
        return this._cfg.beforeNavigate;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      }
    }]);
    return Route;
  }();

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */
  var getFloor = function getFloor(route) {
    return stripRegex(route).split('/').length;
  };

  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */
  var getRoutesByFloor = function getRoutesByFloor(floor) {
    var matches = [];
    // simple filter of level candidates
    var _iterator = _createForOfIteratorHelper(routes$1.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 1),
          route = _step$value[0];
        if (getFloor(route) === floor) {
          matches.push(route);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return matches;
  };

  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */
  var getRouteByHash = function getRouteByHash(hash) {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    var getUrlParts = /(\/?:?[^/]+)/g;
    // grab possible candidates from stored routes
    var candidates = getRoutesByFloor(getFloor(hash));
    // break hash down in chunks
    var hashParts = hash.match(getUrlParts) || [];

    // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash
    var regexStore = [];
    var matches = candidates.filter(function (route) {
      var isMatching = true;
      // replace regex in route with lookup id => @@{storeId}@@
      if (hasRegex.test(route)) {
        var regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce(function (fullRoute, regex) {
            var lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      var routeParts = route.match(getUrlParts) || [];
      for (var i = 0, j = routeParts.length; i < j; i++) {
        var routePart = routeParts[i];
        var hashPart = hashParts[i];

        // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash
        if (hasLookupId.test(routePart)) {
          var routeMatches = hasLookupId.exec(routePart);
          var storeId = routeMatches[1];
          var routeRegex = regexStore[storeId];

          // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line
          var _regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (_regMatches && _regMatches.length) {
            var expression = _regMatches[1];
            var modifiers = _regMatches[2];
            var regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        var match = matches[matches.indexOf(hash)];
        return routes$1.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(function (a) {
          return isNamedGroup.test(a) ? -1 : 1;
        });
        // would be strange if this fails
        // but still we test
        if (routeExists(matches[0])) {
          return routes$1.get(matches[0]);
        }
      }
    }
    return false;
  };
  var getValuesFromHash = function getValuesFromHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    var getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    var hashParts = hash.match(getUrlParts) || [];
    var routeParts = path.match(getUrlParts) || [];
    var getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce(function (storage, value, index) {
      var match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }
      return storage;
    }, new Map());
  };
  var getOption = function getOption(stack, prop) {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    }
    // we explicitly return undefined since we're testing
    // for explicit test values
  };

  /**
   * create and return new Route instance
   * @param config
   */
  var createRoute = function createRoute(config) {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      var options = {
        preventStorage: true
      };
      if (isObject$1(config.options)) {
        options = _objectSpread2(_objectSpread2({}, config.options), options);
      }
      config.options = options;
      // if configured add reference to bootRequest
      // as router after provider
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };

  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */
  var createRequest = function createRequest(url, args, store) {
    return new Request(url, args, store);
  };
  var getHashByName = function getHashByName(obj) {
    if (!obj.to && !obj.name) {
      return false;
    }
    var route = getRouteByName(obj.to || obj.name);
    var hasDynamicGroup = /\/:([\w-]+)\/?/;
    var hash = route;

    // if route contains dynamic group
    // we replace them with the provided params
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        var keys = Object.keys(obj.params);
        hash = keys.reduce(function (acc, key) {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  var getRouteByName = function getRouteByName(name) {
    var _iterator2 = _createForOfIteratorHelper(routes$1.entries()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          path = _step2$value[0],
          route = _step2$value[1];
        if (route.name === name) {
          return path;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return false;
  };
  var keepActivePageAlive = function keepActivePageAlive(route, request) {
    if (isString$1(route)) {
      var _routes = getRoutes();
      if (_routes.has(route)) {
        route = _routes.get(route);
      } else {
        return false;
      }
    }
    var register = request.register;
    var routeOptions = route.options;
    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit = (function (page) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isArray$1(events)) {
      events = [events];
    }
    events.forEach(function (e) {
      var event = "_on".concat(ucfirst(e));
      if (isFunction$1(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var activeWidget = null;
  var getReferences = function getReferences() {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce(function (storage, widget) {
      var key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };

  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */
  var updateWidgets = function updateWidgets(widgets, page) {
    // force lowercase lookup
    var configured = (widgets || []).map(function (ref) {
      return ref.toLowerCase();
    });
    widgetsHost.forEach(function (widget) {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit(widget, ['activated'], page);
      }
    });
    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };
  var getWidgetByName = function getWidgetByName(name) {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };

  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */
  var focusWidget = function focusWidget(name) {
    var widget = getWidgetByName(name);
    if (widget) {
      setActiveWidget(widget);

      // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath
      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  var restoreFocus = function restoreFocus() {
    activeWidget = null;
    app._setState('');
  };
  var getActiveWidget = function getActiveWidget() {
    return activeWidget;
  };
  var setActiveWidget = function setActiveWidget(instance) {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var createComponent = function createComponent(stage, type) {
    return stage.c({
      type: type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */
  var history = [];
  var updateHistory = function updateHistory(request) {
    var hash = getActiveHash();
    if (!hash) {
      return;
    }

    // navigate storage flag
    var register = request.register;
    var forceNavigateStore = register.get(symbols.store);

    // test preventStorage on route configuration
    var activeRoute = getRouteByHash(hash);
    var preventStorage = getOption(activeRoute.options, 'preventStorage');

    // we give prio to navigate storage flag
    var store = isBoolean$1(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store) {
      var toStore = hash.replace(/^\//, '');
      var location = locationInHistory(toStore);
      var stateObject = getStateObject(getActivePage(), request);
      var routerConfig = getRouterConfig();

      // store hash if it's not a part of history or flag for
      // storage of same hash is true
      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        var prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  var locationInHistory = function locationInHistory(hash) {
    for (var i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }
    return -1;
  };
  var getHistoryState = function getHistoryState(hash) {
    var state = null;
    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        var record = history[history.length - 1];
        // could be null
        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          var _record = history[locationInHistory(hash)];
          state = _record.state;
        }
      }
    }
    return state;
  };
  var replaceHistoryState = function replaceHistoryState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var hash = arguments.length > 1 ? arguments[1] : undefined;
    if (!history.length) {
      return;
    }
    var location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject$1(state)) {
      history[location].state = state;
    }
  };
  var getStateObject = function getStateObject(page, request) {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction$1(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  var getHistory = function getHistory() {
    return history.slice(0);
  };
  var setHistory = function setHistory() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (isArray$1(arr)) {
      history = arr;
    }
  };

  /**
   * @type {Lightning.Application}
   */
  var application;

  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */
  var app;

  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */
  var pagesHost;

  /**
   * @type {Lightning.Stage}
   */
  var stage;

  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */
  var routerConfig;

  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */
  var widgetsHost;

  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */
  var rootHash;

  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */
  var bootRequest;

  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */
  var updateHash = true;

  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line
  var beforeEachRoute = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(from, to) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", true);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function beforeEachRoute(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */
  var afterEachRoute = function afterEachRoute() {};

  /**
   * All configured routes
   * @type {Map<string, object>}
   */
  var routes$1 = new Map();

  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */
  var components = new Map();

  /**
   * Flag if router has been initialised
   * @type {boolean}
   */
  var initialised = false;

  /**
   * Current page being rendered on screen
   * @type {null}
   */
  var activePage = null;
  var activeHash;
  var activeRoute;

  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */
  var lastAcceptedHash;

  /**
   * With on()-data providing behaviour the Router forced the App
   * in a Loading state. When the data-provider resolves we want to
   * change the state back to where we came from
   */
  var previousState;
  var mixin = function mixin(app) {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    }
    // if the app is using widgets we grab refs
    // and hide all the widgets
    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList;
      // hide all widgets on boot
      widgetsHost.forEach(function (w) {
        return w.visible = false;
      });
    }
    app._handleBack = function (e) {
      step(-1);
      e.preventDefault();
    };
  };
  var bootRouter = function bootRouter(config, instance) {
    var appInstance = config.appInstance,
      routes = config.routes;

    // if instance is provided and it's and Lightning Component instance
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray$1(routes)) {
      setup(config);
    } else if (isFunction$1(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };
  var setup = function setup(config) {
    if (!initialised) {
      init(config);
    }
    config.routes.forEach(function (r) {
      var path = cleanHash(r.path);
      if (!routeExists(path)) {
        var route = createRoute(r);
        routes$1.set(path, route);
        // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route
        if (route.component) {
          var type = route.component;
          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }
          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  var init = function init(config) {
    rootHash = config.root;
    if (isFunction$1(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean$1(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction$1(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction$1(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    config.routes.forEach(function (item) {
      // replacing regexes with 'R' to avoid issues with pattern matching below
      var strippedPath = stripRegex(item.path);

      // Pattern to identify the last path of the route
      // It should start with "/:" + any word  and ends with "?"
      // It should be the last path of the route
      // valid => /player/:asset/:assetId? (:assetId is optional)
      // invalid => /player/:asset/:assetId?/test (:assetId? is not an optional path)
      // invalid => /player/:asset?/:assetId? (second path is not considered as an optional path)
      var pattern = /(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\/:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\?$/;
      if (pattern.test(strippedPath)) {
        var optionalPath = item.path.substring(0, item.path.lastIndexOf('/'));
        var originalPath = item.path.substring(0, item.path.lastIndexOf('?'));
        item.path = originalPath;
        //Create another entry with the optional path
        var optionalItem = _objectSpread2({}, item);
        optionalItem.path = optionalPath;
        config.routes.push(optionalItem);
      }
    });
    initialised = true;
  };
  var storeComponent = function storeComponent(route, type) {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  var getComponent = function getComponent(route) {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };
  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */
  var mustUpdateLocationHash = function mustUpdateLocationHash() {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    // we need support to either turn change hash off
    // per platform or per app
    var updateConfig = routerConfig.get('updateHash');
    return !(isBoolean$1(updateConfig) && !updateConfig || isBoolean$1(updateHash) && !updateHash);
  };

  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */
  var onRequestResolved = function onRequestResolved(request) {
    var hash = request.hash;
    var route = request.route;
    var register = request.register;
    var page = request.page;

    // clean up history if modifier is set
    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }

    // we only update the stackLocation if a route
    // is not expired before it resolves
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit(page, 'changed');
    } else if (request.isCreated) {
      emit(page, 'mounted');
    }

    // only update widgets if we have a host
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }

    // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }

    // provide history object to active page
    if (register.get(symbols.historyState) && isFunction$1(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;

    // cleanup all cancelled requests
    var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _request = _step.value;
        if (_request.isCancelled && _request.hash) {
          navigateQueue.delete(_request.hash);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    afterEachRoute(request);
    Log$1.info('[route]:', route.path);
    Log$1.info('[hash]:', hash);
  };
  var cleanUp = function cleanUp(page, request) {
    var route = activeRoute;
    var register = request.register;
    var lazyDestroy = routerConfig.get('lazyDestroy');
    var destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    var keepAlive = register.get('keepAlive');
    var isFromHistory = register.get(symbols.backtrack);
    var doCleanup = false;

    // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }

    // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }

    // if the current and new request share the same route blueprint
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor);

      // actual remove of page from memory
      pagesHost.remove(page);

      // force texture gc() if configured
      // so we can cleanup textures in the same tick
      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        alpha: 1,
        visible: false
      });
    }
  };
  var getActiveHash = function getActiveHash() {
    return activeHash;
  };
  var setActivePage = function setActivePage(page) {
    activePage = page;
  };
  var getActivePage = function getActivePage() {
    return activePage;
  };
  var getActiveRoute = function getActiveRoute() {
    return activeRoute;
  };
  var getLastHash = function getLastHash() {
    return lastAcceptedHash;
  };
  var setLastHash = function setLastHash(hash) {
    lastAcceptedHash = hash;
  };
  var setPreviousState = function setPreviousState(state) {
    previousState = state;
  };
  var getPreviousState = function getPreviousState() {
    return previousState;
  };
  var routeExists = function routeExists(key) {
    return routes$1.has(key);
  };
  var getRootHash = function getRootHash() {
    return rootHash;
  };
  var getBootRequest = function getBootRequest() {
    return bootRequest;
  };
  var getRouterConfig = function getRouterConfig() {
    return routerConfig;
  };
  var getRoutes = function getRoutes() {
    return routes$1;
  };

  var isFunction$1 = function isFunction(v) {
    return typeof v === 'function';
  };
  var isObject$1 = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isBoolean$1 = function isBoolean(v) {
    return typeof v === 'boolean';
  };
  var isPage = function isPage(v) {
    if (v instanceof Lightning$1.Element || isComponentConstructor(v)) {
      return true;
    }
    return false;
  };
  var isComponentConstructor = function isComponentConstructor(type) {
    return type.prototype && 'isComponent' in type.prototype;
  };
  var isArray$1 = function isArray(v) {
    return Array.isArray(v);
  };
  var ucfirst = function ucfirst(v) {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  var isString$1 = function isString(v) {
    return typeof v === 'string';
  };
  var isPromise = function isPromise(method) {
    var result;
    if (isFunction$1(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject$1(result) && isFunction$1(result.then);
  };
  var cleanHash = function cleanHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  var getConfigMap = function getConfigMap() {
    var routerSettings = Settings$1.get('platform', 'router');
    var isObj = isObject$1(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce(function (config, key) {
      config.set(key, isObj ? routerSettings[key] : Settings$1.get('platform', key));
      return config;
    }, new Map());
  };
  var getQueryStringParams = function getQueryStringParams() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    var resumeHash = getResumeHash();
    if ((hash === '$' || !hash) && resumeHash) {
      if (isString$1(resumeHash)) {
        hash = resumeHash;
      }
    }
    var parse = '';
    var getQuery = /([?&].*)/;
    var matches = getQuery.exec(hash);
    var params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      var hashParams = matches[1];
      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, '');
        // we parse hash params last so they we can always
        // override search params with hash params
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      var urlParams = new URLSearchParams(parse);
      var _iterator = _createForOfIteratorHelper(urlParams.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          params[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return params;
    } else {
      return false;
    }
  };
  var objectToQueryString = function objectToQueryString(obj) {
    if (!isObject$1(obj)) {
      return '';
    }
    return '?' + Object.keys(obj).map(function (key) {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  var symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  var dataHooks = {
    on: function on(request) {
      setPreviousState(app.state || '');
      app._setState('Loading');
      return execProvider(request);
    },
    before: function before(request) {
      return execProvider(request);
    },
    after: function after(request) {
      try {
        execProvider(request, true);
      } catch (e) {
        // for now we fail silently
      }
      return Promise.resolve();
    }
  };
  var execProvider = function execProvider(request, emitProvided) {
    var route = request.route;
    var provider = route.provider;
    var expires = route.cache ? route.cache * 1000 : 0;
    var params = addPersistData(request);
    return provider.request(request.page, _objectSpread2({}, params)).then(function () {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit(request.page, 'dataProvided');
      }
    }).catch(function (e) {
      request.page[symbols.expires] = Date.now();
      throw e;
    });
  };
  var addPersistData = function addPersistData(_ref) {
    var page = _ref.page,
      route = _ref.route,
      hash = _ref.hash,
      _ref$register = _ref.register,
      register = _ref$register === void 0 ? new Map() : _ref$register;
    var urlValues = getValuesFromHash(hash, route.path);
    var queryParams = getQueryStringParams(hash);
    var pageData = new Map([].concat(_toConsumableArray(urlValues), _toConsumableArray(register)));
    var params = {};

    // make dynamic url data available to the page
    // as instance properties
    var _iterator = _createForOfIteratorHelper(pageData),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          name = _step$value[0],
          value = _step$value[1];
        params[name] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }

    // check navigation register for persistent data
    if (register.size) {
      var obj = {};
      var _iterator2 = _createForOfIteratorHelper(register),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            k = _step2$value[0],
            v = _step2$value[1];
          obj[k] = v;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      page.persist = obj;
    }

    // make url data and persist data available
    // via params property
    page.params = params;
    emit(page, ['urlParams'], params);
    return params;
  };

  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */
  var isPageExpired = function isPageExpired(page) {
    if (!page[symbols.expires]) {
      return false;
    }
    var expires = page[symbols.expires];
    var now = Date.now();
    return now >= expires;
  };
  var hasProvider = function hasProvider(path) {
    if (routeExists(path)) {
      var record = routes$1.get(path);
      return !!record.provider;
    }
    return false;
  };
  var getProvider = function getProvider(route) {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      var _routes$get = routes$1.get(route.path),
        provider = _routes$get.provider;
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var fade = function fade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      // resolve on y finish
      i.transition('alpha').on('finish', function () {
        if (o) {
          o.visible = false;
        }
        resolve();
      });
    });
  };
  var crossFade = function crossFade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      // resolve on y finish
      i.transition('alpha').on('finish', function () {
        resolve();
      });
    });
  };
  var moveOnAxes = function moveOnAxes(axis, direction, i, o) {
    var bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(function (resolve) {
      var _i$patch;
      i.patch((_i$patch = {}, _defineProperty(_i$patch, "".concat(axis), direction ? bounds * -1 : bounds), _defineProperty(_i$patch, "visible", true), _defineProperty(_i$patch, "smooth", _defineProperty({}, "".concat(axis), [0, {
        duration: 0.4,
        delay: 0.2
      }])), _i$patch));
      // out is optional
      if (o) {
        var _o$patch;
        o.patch((_o$patch = {}, _defineProperty(_o$patch, "".concat(axis), 0), _defineProperty(_o$patch, "smooth", _defineProperty({}, "".concat(axis), [direction ? bounds : bounds * -1, {
          duration: 0.4,
          delay: 0.2
        }])), _o$patch));
      }
      // resolve on y finish
      i.transition(axis).on('finish', function () {
        resolve();
      });
    });
  };
  var up = function up(i, o) {
    return moveOnAxes('y', 0, i, o);
  };
  var down = function down(i, o) {
    return moveOnAxes('y', 1, i, o);
  };
  var left = function left(i, o) {
    return moveOnAxes('x', 0, i, o);
  };
  var right = function right(i, o) {
    return moveOnAxes('x', 1, i, o);
  };
  var Transitions = {
    fade: fade,
    crossFade: crossFade,
    up: up,
    down: down,
    left: left,
    right: right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */
  var executeTransition = function executeTransition(pageIn) {
    var pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var transition = pageIn.pageTransition || pageIn.easing;
    var hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    var transitionsDisabled = getRouterConfig().get('disableTransitions');
    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    }

    // default behaviour is a visibility toggle
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      var type;
      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }
      if (isPromise(type)) {
        return type;
      }
      if (isString$1(type)) {
        var fn = Transitions[type];
        if (fn) {
          return fn(pageIn, pageOut);
        }
      }

      // keep backwards compatible for now
      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        var smooth = function smooth(p, v) {
          var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(function (resolve) {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', function () {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn: pageIn,
          smooth: smooth
        });
      }
    }
    return Transitions.crossFade(pageIn, pageOut);
  };

  /**
   * The actual loading of the component
   * */
  var load = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var expired, route;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            expired = false;
            _context.prev = 1;
            _context.next = 4;
            return loader(request);
          case 4:
            request = _context.sent;
            if (!(request && !request.isCancelled)) {
              _context.next = 12;
              break;
            }
            // in case of on() providing we need to reset
            // app state;
            if (app.state === 'Loading') {
              if (getPreviousState() === 'Widgets') {
                app._setState('Widgets', [getActiveWidget()]);
              } else {
                app._setState('');
              }
            }
            // Do page transition if instance
            // is not shared between the routes
            if (!(!request.isSharedInstance && !request.isCancelled)) {
              _context.next = 10;
              break;
            }
            _context.next = 10;
            return executeTransition(request.page, getActivePage());
          case 10:
            _context.next = 13;
            break;
          case 12:
            expired = true;
          case 13:
            if (!(expired || request.isCancelled)) {
              _context.next = 18;
              break;
            }
            Log$1.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
            if (request.isCreated && !request.isSharedInstance) {
              // remove from render-tree
              pagesHost.remove(request.page);
            }
            _context.next = 20;
            break;
          case 18:
            onRequestResolved(request);
            // resolve promise
            return _context.abrupt("return", request.page);
          case 20:
            _context.next = 25;
            break;
          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](1);
            if (!_context.t0.route) {
              console.error(_context.t0);
            } else if (!expired) {
              // @todo: revisit
              route = _context.t0.route; // clean up history if modifier is set
              if (getOption(route.options, 'clearHistory')) {
                setHistory([]);
              } else if (!isWildcard.test(route.path)) {
                updateHistory(_context.t0);
              }
              if (_context.t0.isCreated && !_context.t0.isSharedInstance) {
                // remove from render-tree
                pagesHost.remove(_context.t0.page);
              }
              handleError(_context.t0);
            }
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 22]]);
    }));
    return function load(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var loader = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
      var route, hash, register, type, isConstruct, provide, currentRoute, _getProvider, loadType, provider;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            route = request.route;
            hash = request.hash;
            register = request.register; // todo: grab from Route instance
            type = getComponent(route.path);
            isConstruct = isComponentConstructor(type);
            provide = false; // if it's an instance bt we're not coming back from
            // history we test if we can re-use this instance
            if (!isConstruct && !register.get(symbols.backtrack)) {
              if (!mustReuse(route)) {
                type = type.constructor;
                isConstruct = true;
              }
            }

            // If page is Lightning Component instance
            if (!isConstruct) {
              request.page = type;
              // if we have have a data route for current page
              if (hasProvider(route.path)) {
                if (isPageExpired(type) || type[symbols.hash] !== hash) {
                  provide = true;
                }
              }
              currentRoute = getActivePage() && getActivePage()[symbols.route]; // if the new route is equal to the current route it means that both
              // route share the Component instance and stack location / since this case
              // is conflicting with the way before() and after() loading works we flag it,
              // and check platform settings in we want to re-use instance
              if (route.path === currentRoute) {
                request.isSharedInstance = true;
                // since we're re-using the instance we must attach
                // historyState to the request to prevent it from
                // being overridden.
                if (isFunction$1(request.page.historyState)) {
                  request.copiedHistoryState = request.page.historyState();
                }
              }
            } else {
              request.page = createComponent(stage, type);
              pagesHost.a(request.page);
              // test if need to request data provider
              if (hasProvider(route.path)) {
                provide = true;
              }
              request.isCreated = true;
            }

            // we store hash and route as properties on the page instance
            // that way we can easily calculate new behaviour on page reload
            request.page[symbols.hash] = hash;
            request.page[symbols.route] = route.path;
            _context2.prev = 10;
            if (!provide) {
              _context2.next = 25;
              break;
            }
            // extract attached data-provider for route
            // we're processing
            _getProvider = getProvider(route), loadType = _getProvider.type, provider = _getProvider.provider; // update running request
            request.provider = provider;
            request.providerType = loadType;
            _context2.next = 17;
            return dataHooks[loadType](request);
          case 17:
            if (!(hash !== getLastHash())) {
              _context2.next = 21;
              break;
            }
            return _context2.abrupt("return", false);
          case 21:
            if (request.providerType !== 'after') {
              emit(request.page, 'dataProvided');
            }
            // resolve promise
            return _context2.abrupt("return", request);
          case 23:
            _context2.next = 27;
            break;
          case 25:
            addPersistData(request);
            return _context2.abrupt("return", request);
          case 27:
            _context2.next = 33;
            break;
          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](10);
            request.error = _context2.t0;
            return _context2.abrupt("return", Promise.reject(request));
          case 33:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[10, 29]]);
    }));
    return function loader(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleError = function handleError(request) {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log$1.error(request);
    }
    if (request.page && routeExists('!')) {
      navigate('!', {
        request: request
      }, false);
    }
  };
  var mustReuse = function mustReuse(route) {
    var opt = getOption(route.options, 'reuseInstance');
    var config = routerConfig.get('reuseInstance');

    // route always has final decision
    if (isBoolean$1(opt)) {
      return opt;
    }
    return !(isBoolean$1(config) && config === false);
  };

  var RoutedApp = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(RoutedApp, _Lightning$Component);
    var _super = _createSuper(RoutedApp);
    function RoutedApp() {
      _classCallCheck(this, RoutedApp);
      return _super.apply(this, arguments);
    }
    _createClass(RoutedApp, [{
      key: "pages",
      get:
      /**
       * Return location where pages need to be stored
       */
      function get() {
        return this.tag('Pages');
      }

      /**
       * Tell router where widgets are stored
       */
    }, {
      key: "widgets",
      get: function get() {
        return this.tag('Widgets');
      }

      /**
       * we MUST register _handleBack method so the Router
       * can override it
       * @private
       */
    }, {
      key: "_handleBack",
      value: function _handleBack() {}

      /**
       * We MUST return Router.activePage() so the new Page
       * can listen to the remote-control.
       */
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return Router.getActivePage();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Pages: {
            forceZIndexContext: true
          },
          /**
           * This is a default Loading page that will be made visible
           * during data-provider on() you CAN override in child-class
           */
          Loading: {
            rect: true,
            w: 1920,
            h: 1080,
            color: 0xff000000,
            visible: false,
            zIndex: 99,
            Label: {
              mount: 0.5,
              x: 960,
              y: 540,
              text: {
                text: 'Loading..'
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(Loading, _this);
          var _super2 = _createSuper(Loading);
          function Loading() {
            _classCallCheck(this, Loading);
            return _super2.apply(this, arguments);
          }
          _createClass(Loading, [{
            key: "$enter",
            value: function $enter() {
              this.tag('Loading').visible = true;
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag('Loading').visible = false;
            }
          }]);
          return Loading;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(Widgets, _this2);
          var _super3 = _createSuper(Widgets);
          function Widgets() {
            _classCallCheck(this, Widgets);
            return _super3.apply(this, arguments);
          }
          _createClass(Widgets, [{
            key: "$enter",
            value: function $enter(args, widget) {
              // store widget reference
              this._widget = widget;

              // since it's possible that this behaviour
              // is non-remote driven we force a recalculation
              // of the focuspath
              this._refocus();
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              // we delegate focus to selected widget
              // so it can consume remotecontrol presses
              return this._widget;
            }

            // if we want to widget to widget focus delegation
          }, {
            key: "reload",
            value: function reload(widget) {
              this._widget = widget;
              this._refocus();
            }
          }, {
            key: "_handleKey",
            value: function _handleKey() {
              var restoreFocus = routerConfig.get('autoRestoreRemote');
              /**
               * The Router used to delegate focus back to the page instance on
               * every unhandled key. This is barely usefull in any situation
               * so for now we offer the option to explicity turn that behaviour off
               * so we don't don't introduce a breaking change.
               */
              if (!isBoolean$1(restoreFocus) || restoreFocus === true) {
                Router.focusPage();
              }
            }
          }]);
          return Widgets;
        }(this)];
      }
    }]);
    return RoutedApp;
  }(Lightning$1.Component);

  /*
  rouThor ==[x]
   */
  var navigateQueue = new Map();
  var forcedHash = '';
  var resumeHash = '';

  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */
  var startRouter = function startRouter(config, instance) {
    bootRouter(config, instance);
    registerListener();
    start();
  };

  // start translating url
  var start = function start() {
    var hash = (getHash() || '').replace(/^#/, '');
    var bootKey = '$';
    var params = getQueryStringParams(hash);
    var bootRequest = getBootRequest();
    var rootHash = getRootHash();
    var isDirectLoad = hash.indexOf(bootKey) !== -1;

    // prevent direct reload of wildcard routes
    // expect bootComponent
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    }

    // store resume point for manual resume
    resumeHash = isDirectLoad ? rootHash : hash || rootHash;
    var ready = function ready() {
      if (!hash && rootHash) {
        if (isString$1(rootHash)) {
          navigate(rootHash);
        } else if (isFunction$1(rootHash)) {
          rootHash().then(function (res) {
            if (isObject$1(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction$1(bootRequest)) {
      bootRequest(params).then(function () {
        ready();
      }).catch(function (e) {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };
  var handleBootError = function handleBootError(e) {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };

  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */
  var navigate = function navigate(url) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;
    if (isObject$1(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    var hash = getHash();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      if (mustUpdateLocationHash()) {
        setHash(url);
      } else {
        forcedHash = url;
        handleHashChange(url).then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(function () {
        app._refocus();
      }).catch(function (e) {
        console.error(e);
      });
    }
  };
  var queue = function queue(hash) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _request = _step.value;
          _request.cancel();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };

  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */
  var handleHashChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(override) {
      var hash, queueId, request, route, result, store;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            hash = cleanHash(override || getHash());
            queueId = decodeURIComponent(hash);
            request = navigateQueue.get(queueId); // handle hash updated manually
            if (!request && !navigateQueue.size) {
              request = queue(hash);
            }
            route = getRouteByHash(hash);
            if (route) {
              _context.next = 8;
              break;
            }
            if (routeExists('*')) {
              navigate('*', {
                failedHash: hash
              });
            } else {
              console.error("Unable to navigate to: ".concat(hash));
            }
            return _context.abrupt("return");
          case 8:
            // update current processed request
            request.hash = hash;
            request.route = route;
            _context.next = 12;
            return beforeEachRoute(getActiveHash(), request);
          case 12:
            result = _context.sent;
            if (!(result && route.beforeNavigate)) {
              _context.next = 17;
              break;
            }
            _context.next = 16;
            return route.beforeNavigate(getActiveHash(), request);
          case 16:
            result = _context.sent;
          case 17:
            if (!isBoolean$1(result)) {
              _context.next = 22;
              break;
            }
            if (!result) {
              _context.next = 20;
              break;
            }
            return _context.abrupt("return", resolveHashChange(request));
          case 20:
            _context.next = 25;
            break;
          case 22:
            // if navigation guard didn't return true
            // we cancel the current request
            request.cancel();
            navigateQueue.delete(queueId);
            if (isString$1(result)) {
              navigate(result);
            } else if (isObject$1(result)) {
              store = true;
              if (isBoolean$1(result.store)) {
                store = result.store;
              }
              navigate(result.path, result.params, store);
            }
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleHashChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */
  var resolveHashChange = function resolveHashChange(request) {
    var hash = request.hash;
    var route = request.route;
    var queueId = decodeURIComponent(hash);
    // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself
    setLastHash(hash);
    if (route.path) {
      var component = getComponent(route.path);
      // if a hook is provided for the current route
      if (isFunction$1(route.hook)) {
        var urlParams = getValuesFromHash(hash, route.path);
        var params = {};
        var _iterator2 = _createForOfIteratorHelper(urlParams.keys()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var key = _step2.value;
            params[key] = urlParams.get(key);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        route.hook(app, _objectSpread2({}, params));
      }
      // if there is a component attached to the route
      if (component) {
        // force page to root state to prevent shared state issues
        var activePage = getActivePage();
        if (activePage) {
          var keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }
        if (isPage(component)) {
          load(request).then(function () {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(function (contents) {
            return contents.default;
          }).then(function (module) {
            storeComponent(route.path, module);
            return load(request);
          }).then(function () {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };

  /**
   * Directional step in history
   * @param level
   */
  var step = function step() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    var history = getHistory();
    // for now we only support negative numbers
    level = Math.abs(level);

    // we can't step back past the amount
    // of history entries
    if (level > history.length) {
      if (isFunction$1(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return app.application.closeApp();
    } else if (history.length) {
      var _navigate;
      // for now we only support history back
      var route = history.splice(history.length - level, level)[0];
      // store changed history
      setHistory(history);
      return navigate(route.hash, (_navigate = {}, _defineProperty(_navigate, symbols.backtrack, true), _defineProperty(_navigate, symbols.historyState, route.state), _navigate), false);
    } else if (routerConfig.get('backtrack')) {
      var hashLastPart = /(\/:?[\w%\s-]+)$/;
      var hash = stripRegex(getHash());
      var floor = getFloor(hash);

      // test if we got deep-linked
      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, '');
          // if we have a configured route
          // we navigate to it
          if (getRouteByHash(hash)) {
            return navigate(hash, _defineProperty({}, symbols.backtrack, true), false);
          }
        }
      }
    }
    return false;
  };

  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */
  var resume = function resume() {
    if (isString$1(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction$1(resumeHash)) {
      resumeHash().then(function (res) {
        resumeHash = '';
        if (isObject$1(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };

  /**
   * Force reload active hash
   */
  var reload = function reload() {
    if (!isNavigating()) {
      var hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };

  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */
  var isNavigating = function isNavigating() {
    if (navigateQueue.size) {
      var isProcessing = false;
      var _iterator3 = _createForOfIteratorHelper(navigateQueue.values()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var request = _step3.value;
          if (!request.isCancelled) {
            isProcessing = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return isProcessing;
    }
    return false;
  };
  var getResumeHash = function getResumeHash() {
    return resumeHash;
  };

  /**
   * By default we return the location hash
   * @returns {string}
   */
  var getHash = function getHash() {
    return document.location.hash;
  };

  /**
   * Update location hash
   * @param url
   */
  var setHash = function setHash(url) {
    document.location.hash = url;
  };

  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */
  var initRouter = function initRouter(config) {
    if (config.getHash) {
      getHash = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };

  /**
   * On hash change we start processing
   */
  var registerListener = function registerListener() {
    Registry.addEventListener(window, 'hashchange', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!mustUpdateLocationHash()) {
              _context2.next = 9;
              break;
            }
            _context2.prev = 1;
            _context2.next = 4;
            return handleHashChange();
          case 4:
            _context2.next = 9;
            break;
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 6]]);
    })));
  };

  /**
   * Navigate to root hash
   */
  var root = function root() {
    var rootHash = getRootHash();
    if (isString$1(rootHash)) {
      navigate(rootHash);
    } else if (isFunction$1(rootHash)) {
      rootHash().then(function (res) {
        if (isObject$1(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };

  // export API
  var Router = {
    startRouter: startRouter,
    navigate: navigate,
    resume: resume,
    step: step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage: function getActivePage$1() {
      // warning
      return getActivePage();
    },
    getActiveRoute: getActiveRoute,
    getActiveHash: getActiveHash,
    focusWidget: focusWidget,
    getActiveWidget: getActiveWidget,
    restoreFocus: restoreFocus,
    isNavigating: isNavigating,
    getHistory: getHistory,
    setHistory: setHistory,
    getHistoryState: getHistoryState,
    replaceHistoryState: replaceHistoryState,
    getQueryStringParams: getQueryStringParams,
    reload: reload,
    symbols: symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,
    /**
     * Deprecated api methods
     */
    setupRoutes: function setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on: function on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before: function before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after: function after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ApplicationInstance;
  var Launch = (function (App, appSettings, platformSettings, appData) {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage();
    // Initialize plugins
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    var app = Application(App, appData, platformSettings);
    initLightningSdkPlugin.log = Log$1;
    initLightningSdkPlugin.settings = Settings$1;
    initLightningSdkPlugin.ads = Ads;
    initLightningSdkPlugin.lightning = Lightning$1;
    ApplicationInstance = new app(appSettings);
    initLightningSdkPlugin.appInstance = ApplicationInstance;
    return ApplicationInstance;
  });

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(SubtitleComponent, _Lightning$Component);
    var _super = _createSuper(SubtitleComponent);
    function SubtitleComponent() {
      _classCallCheck(this, SubtitleComponent);
      return _super.apply(this, arguments);
    }
    _createClass(SubtitleComponent, [{
      key: "_init",
      value: function _init() {
        var _this = this;
        this._textTextureDefaults = new Lightning$1.textures.TextTexture(this.stage).cloneArgs();
        this.tag('Text').on('txLoaded', function (_ref) {
          var _source = _ref._source;
          _this.w = _source.w + _this.tag('Text').x * 2;
          _this.h = _source.h;
          _this.position();
        });
      }
    }, {
      key: "textFormat",
      get: function get() {
        var textTag = this.tag('Text').text;
        return {
          fontFace: textTag.fontFace || 'sans-serif',
          fontSize: textTag.fontSize,
          lineHeight: textTag.lineHeight,
          textAlign: textTag.textAlign,
          wordWrap: true,
          maxLines: textTag.maxLines
        };
      }
    }, {
      key: "show",
      value: function show() {
        this.visible = true;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.visible = false;
      }
    }, {
      key: "position",
      value: function position() {
        this.x = this._calculateX(this.xPos);
        this.y = this._calculateY(this.yPos);
      }
    }, {
      key: "viewportW",
      get: function get() {
        return this._viewportW || this.application.finalW;
      },
      set: function set(v) {
        this._viewportW = v;
        this.x = this._calculateX(this.xPos);
      }
    }, {
      key: "viewportH",
      get: function get() {
        return this._viewportH || this.application.finalH;
      },
      set: function set(v) {
        this._viewportH = v;
        this.y = this._calculateY(this.yPos);
      }
    }, {
      key: "_calculateX",
      value: function _calculateX(x) {
        if (x === 'center') {
          x = (this.viewportW - this.finalW) / 2;
        } else if (x === 'left') {
          x = 60;
        } else if (x === 'right') {
          x = this.viewportW - this.finalW - 60;
        }
        return x;
      }
    }, {
      key: "xPos",
      get: function get() {
        return this._x || 'center';
      },
      set: function set(v) {
        this._x = v;
        this.x = this._calculateX(v);
      }
    }, {
      key: "_calculateY",
      value: function _calculateY(y) {
        if (y === 'center') {
          return (this.viewportH - this.finalH) / 2;
        } else if (y === 'top') {
          return 60;
        } else if (y === 'bottom') {
          return this.viewportH - this.finalH - 60;
        }
        return y;
      }
    }, {
      key: "yPos",
      get: function get() {
        return this._y || 'bottom';
      },
      set: function set(v) {
        this._y = v;
        this.y = this._calculateY(v);
      }
    }, {
      key: "fontFamily",
      set: function set(v) {
        this.tag('Text').text.fontFace = v;
      }
    }, {
      key: "fontSize",
      set: function set(v) {
        this.tag('Text').text.fontSize = v;
        this.tag('Text').text.lineHeight = v * 1.3;
      }
    }, {
      key: "fontColor",
      set: function set(v) {
        this.tag('Text').color = v;
      }
    }, {
      key: "backgroundColor",
      set: function set(v) {
        this.color = v;
      }
    }, {
      key: "_defineBreakpoint",
      value: function _defineBreakpoint(text, breakpoint) {
        if (breakpoint >= this.maxWidth) return this.maxWidth;
        var info = Lightning$1.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, this._textTextureDefaults), this.textFormat), {
          wordWrapWidth: breakpoint
        }), {}, {
          text: text
        }))._calculateRenderInfo();
        if (info.width <= breakpoint && info.lines.length <= 2) {
          return breakpoint;
        } else {
          return this._defineBreakpoint(text, breakpoint * 1.25);
        }
      }
    }, {
      key: "text",
      set: function set(v) {
        this.alpha = 0;
        if (v && v.length) {
          var breakpoint = this._defineBreakpoint(v, 640);
          this.tag('Text').text.wordWrapWidth = breakpoint;
          this.tag('Text').text = v;
          this.alpha = 1;
        }
      }
    }, {
      key: "textAlign",
      set: function set(v) {
        this._textAlign = v;
        this.tag('Text').text.textAlign = v;
      }
    }, {
      key: "maxWidth",
      get: function get() {
        return (this._maxWidth || 1200) - this.tag('Text').x * 2;
      },
      set: function set(v) {
        this._maxWidth = v;
      }
    }, {
      key: "maxLines",
      set: function set(v) {
        this.tag('Text').text.maxLines = v;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          visible: false,
          rect: true,
          color: 0x90000000,
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: 5
          },
          Text: {
            y: 5,
            x: 20,
            text: {
              textColor: 0xffffffff,
              fontSize: 38,
              lineHeight: 38 * 1.4,
              textAlign: 'center',
              wordWrap: true,
              maxLines: 3,
              shadow: true,
              shadowColor: 0xff333333
            }
          }
        };
      }
    }]);
    return SubtitleComponent;
  })(Lightning$1.Component);

  var theme = {
    colors: {
      background: 0xff161F2D,
      primary: 0xff14233E,
      primaryLight: 0xff1e355e,
      secondary: 0xff527EFC,
      tertiary: 0xff6198FC,
      accent: 0xffCADFFE,
      error: 0xff35557A,
      warning: 0xff35557A,
      info: 0xff35557A,
      white: 0xffF1F1F1,
      yellow: 0xffF2DB59,
      accentGrey: {
        light: 0xffA1A8B2,
        dark: 0xff455160
      },
      dark: 0xff060623
    }
  };

  var endp = ["/filters/dgnlsl30-movies-action?page=1&language=en&size=50", "/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50", "/filters/marvel-movies?page=1&language=en&size=50", "/filters/gNAaDQJl13GS?page=1&language=en&size=100", "/filters/dgnlsl30-movies-action?page=1&language=en&size=50", "/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50", "/filters/marvel-movies?page=1&language=en&size=50", "/filters/gNAaDQJl13GS?page=1&language=en&size=100", "/filters/dgnlsl30-movies-action?page=1&language=en&size=50", "/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50", "/filters/marvel-movies?page=1&language=en&size=50", "/filters/gNAaDQJl13GS?page=1&language=en&size=100", "/filters/dgnlsl30-movies-action?page=1&language=en&size=50", "/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50", "/filters/marvel-movies?page=1&language=en&size=50", "/filters/gNAaDQJl13GS?page=1&language=en&size=100"];

  var railName = ["Action Movies", "Only on Enlight", "Marvel Movies", "Drama Movies", "Romantic Comdey Movies", "Trending Now", "Comdey Movies", "Thriller Movies", "Action Movies", "Only on Enlight", "Marvel Movies", "Drama Movies", "Romantic Comdey Movies", "Trending Now", "Comdey Movies", "Thriller Movies"];

  var RailItem = /*#__PURE__*/function (_ref) {
    _inherits(RailItem, _ref);
    var _super = _createSuper(RailItem);
    function RailItem() {
      var _this;
      _classCallCheck(this, RailItem);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "data", {});
      return _this;
    }
    _createClass(RailItem, [{
      key: "item",
      set:
      /**
       * Setter for setting the values for the item property.
       *
       * @Param The value that needs to be setted to the item property.
       *
       */
      function set(obj) {
        var label = obj.label,
          src = obj.src,
          data = obj.data;
        this.data = data;
        this.patch({
          Image: {
            src: src
          },
          Label: {
            text: label === null || label === void 0 ? void 0 : label.toString()
          }
        });
      }

      /**
      * This function overrides the default behaviour of keypress 'Enter'.
      * This functions checks the index to see the focused element and decides
      * the route to navigate.
      */
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        Router.navigate("content/".concat(this.data.uid), {
          contentData: this.data
        });
      }

      /**
       * This function overrides the default behavior of the component when come in focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it comes to the focus.
       *
       */
    }, {
      key: "_focus",
      value: function _focus() {
        this.patch({
          smooth: {
            color: theme.colors.secondary,
            scale: 1.1
          },
          Label: {
            smooth: {
              color: theme.colors.white
            }
          },
          Rectangle: {
            color: theme.colors.yellow,
            x: 10,
            y: function y(_y) {
              return _y + 72;
            },
            w: function w(_w) {
              return _w - 20;
            },
            h: 5,
            rect: true
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when goes out of focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it goes out of the focus.
       *
       */
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          smooth: {
            color: theme.colors.primary,
            scale: 1.0
          },
          Label: {
            smooth: {
              color: theme.colors.accentGrey.light
            }
          },
          Rectangle: undefined
        });
      }
    }], [{
      key: "_template",
      value:
      /**
       * This function is responsible for the creation and return of the UI template. This
       * function takes  no parameters and returns the template of the Rail Item component.
       *
       * @returns Template for the Rail Item Component.
       *
       */

      function _template() {
        return {
          w: 288,
          h: 432,
          rect: true,
          color: theme.colors.primary,
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: 20
          },
          Image: {
            w: function w(_w2) {
              return _w2;
            },
            h: function h(_h) {
              return _h;
            },
            shader: {
              type: Lightning$1.shaders.RoundedRectangle,
              radius: 20
            }
          },
          Label: {
            x: 10,
            y: 435,
            w: function w(_w3) {
              return _w3;
            },
            color: theme.colors.accentGrey.light,
            text: {
              fontSize: 30
            }
          }
        };
      }
    }]);
    return RailItem;
  }(Lightning$1.Component);

  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;
  var getPrototypeOf = Object.getPrototypeOf;
  var kindOf = function (cache) {
    return function (thing) {
      var str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  }(Object.create(null));
  var kindOfTest = function kindOfTest(type) {
    type = type.toLowerCase();
    return function (thing) {
      return kindOf(thing) === type;
    };
  };
  var typeOfTest = function typeOfTest(type) {
    return function (thing) {
      return typeof thing === type;
    };
  };

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   *
   * @returns {boolean} True if value is an Array, otherwise false
   */
  var isArray = Array.isArray;

  /**
   * Determine if a value is undefined
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  var isUndefined = typeOfTest('undefined');

  /**
   * Determine if a value is a Buffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  var isArrayBuffer = kindOfTest('ArrayBuffer');

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a String, otherwise false
   */
  var isString = typeOfTest('string');

  /**
   * Determine if a value is a Function
   *
   * @param {*} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  var isFunction = typeOfTest('function');

  /**
   * Determine if a value is a Number
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Number, otherwise false
   */
  var isNumber = typeOfTest('number');

  /**
   * Determine if a value is an Object
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an Object, otherwise false
   */
  var isObject = function isObject(thing) {
    return thing !== null && typeof thing === 'object';
  };

  /**
   * Determine if a value is a Boolean
   *
   * @param {*} thing The value to test
   * @returns {boolean} True if value is a Boolean, otherwise false
   */
  var isBoolean = function isBoolean(thing) {
    return thing === true || thing === false;
  };

  /**
   * Determine if a value is a plain Object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a plain Object, otherwise false
   */
  var isPlainObject = function isPlainObject(val) {
    if (kindOf(val) !== 'object') {
      return false;
    }
    var prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };

  /**
   * Determine if a value is a Date
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Date, otherwise false
   */
  var isDate = kindOfTest('Date');

  /**
   * Determine if a value is a File
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFile = kindOfTest('File');

  /**
   * Determine if a value is a Blob
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  var isBlob = kindOfTest('Blob');

  /**
   * Determine if a value is a FileList
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFileList = kindOfTest('FileList');

  /**
   * Determine if a value is a Stream
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  var isStream = function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  };

  /**
   * Determine if a value is a FormData
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  var isFormData = function isFormData(thing) {
    var pattern = '[object FormData]';
    return thing && (typeof FormData === 'function' && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
  };

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  var isURLSearchParams = kindOfTest('URLSearchParams');

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   *
   * @returns {String} The String freed of excess whitespace
   */
  var trim = function trim(str) {
    return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   *
   * @param {Boolean} [allOwnKeys = false]
   * @returns {any}
   */
  function forEach(obj, fn) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$allOwnKeys = _ref.allOwnKeys,
      allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
    var i;
    var l;

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
    if (isArray(obj)) {
      // Iterate over array values
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      var len = keys.length;
      var key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    var keys = Object.keys(obj);
    var i = keys.length;
    var _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = function () {
    /*eslint no-undef:0*/
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
  }();
  var isContextDefined = function isContextDefined(context) {
    return !isUndefined(context) && context !== _global;
  };

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   *
   * @returns {Object} Result of all merge properties
   */
  function merge( /* obj1, obj2, obj3, ... */
  ) {
    var _ref2 = isContextDefined(this) && this || {},
      caseless = _ref2.caseless;
    var result = {};
    var assignValue = function assignValue(val, key) {
      var targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (var i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   *
   * @param {Boolean} [allOwnKeys]
   * @returns {Object} The resulting value of object a
   */
  var extend = function extend(a, b, thisArg) {
    var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      allOwnKeys = _ref3.allOwnKeys;
    forEach(b, function (val, key) {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, {
      allOwnKeys: allOwnKeys
    });
    return a;
  };

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   *
   * @returns {string} content value without BOM
   */
  var stripBOM = function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  };

  /**
   * Inherit the prototype methods from one constructor into another
   * @param {function} constructor
   * @param {function} superConstructor
   * @param {object} [props]
   * @param {object} [descriptors]
   *
   * @returns {void}
   */
  var inherits = function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };

  /**
   * Resolve object with deep prototype chain to a flat object
   * @param {Object} sourceObj source object
   * @param {Object} [destObj]
   * @param {Function|Boolean} [filter]
   * @param {Function} [propFilter]
   *
   * @returns {Object}
   */
  var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };

  /**
   * Determines whether a string ends with the characters of a specified string
   *
   * @param {String} str
   * @param {String} searchString
   * @param {Number} [position= 0]
   *
   * @returns {boolean}
   */
  var endsWith = function endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };

  /**
   * Returns new array from array like object or null if failed
   *
   * @param {*} [thing]
   *
   * @returns {?Array}
   */
  var toArray = function toArray(thing) {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    var i = thing.length;
    if (!isNumber(i)) return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };

  /**
   * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
   * thing passed in is an instance of Uint8Array
   *
   * @param {TypedArray}
   *
   * @returns {Array}
   */
  // eslint-disable-next-line func-names
  var isTypedArray = function (TypedArray) {
    // eslint-disable-next-line func-names
    return function (thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

  /**
   * For each entry in the object, call the function with the key and value.
   *
   * @param {Object<any, any>} obj - The object to iterate over.
   * @param {Function} fn - The function to call for each entry.
   *
   * @returns {void}
   */
  var forEachEntry = function forEachEntry(obj, fn) {
    var generator = obj && obj[Symbol.iterator];
    var iterator = generator.call(obj);
    var result;
    while ((result = iterator.next()) && !result.done) {
      var pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };

  /**
   * It takes a regular expression and a string, and returns an array of all the matches
   *
   * @param {string} regExp - The regular expression to match against.
   * @param {string} str - The string to search.
   *
   * @returns {Array<boolean>}
   */
  var matchAll = function matchAll(regExp, str) {
    var matches;
    var arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };

  /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
  var isHTMLForm = kindOfTest('HTMLFormElement');
  var toCamelCase = function toCamelCase(str) {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    });
  };

  /* Creating a function that will check if an object has a property. */
  var hasOwnProperty = function (_ref4) {
    var hasOwnProperty = _ref4.hasOwnProperty;
    return function (obj, prop) {
      return hasOwnProperty.call(obj, prop);
    };
  }(Object.prototype);

  /**
   * Determine if a value is a RegExp object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a RegExp object, otherwise false
   */
  var isRegExp = kindOfTest('RegExp');
  var reduceDescriptors = function reduceDescriptors(obj, reducer) {
    var descriptors = Object.getOwnPropertyDescriptors(obj);
    var reducedDescriptors = {};
    forEach(descriptors, function (descriptor, name) {
      if (reducer(descriptor, name, obj) !== false) {
        reducedDescriptors[name] = descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };

  /**
   * Makes all methods read-only
   * @param {Object} obj
   */

  var freezeMethods = function freezeMethods(obj) {
    reduceDescriptors(obj, function (descriptor, name) {
      // skip restricted props in strict mode
      if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
        return false;
      }
      var value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ('writable' in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = function () {
          throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
      }
    });
  };
  var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
    var obj = {};
    var define = function define(arr) {
      arr.forEach(function (value) {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = function noop() {};
  var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  var DIGIT = '0123456789';
  var ALPHABET = {
    DIGIT: DIGIT,
    ALPHA: ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = function generateString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
    var alphabet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALPHABET.ALPHA_DIGIT;
    var str = '';
    var length = alphabet.length;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };

  /**
   * If the thing is a FormData object, return true, otherwise return false.
   *
   * @param {unknown} thing - The thing to check.
   *
   * @returns {boolean}
   */
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
  }
  var toJSONObject = function toJSONObject(obj) {
    var stack = new Array(10);
    var visit = function visit(source, i) {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!('toJSON' in source)) {
          stack[i] = source;
          var target = isArray(source) ? [] : {};
          forEach(source, function (value, key) {
            var reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = undefined;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var utils = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isRegExp: isRegExp,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isTypedArray: isTypedArray,
    isFileList: isFileList,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    forEachEntry: forEachEntry,
    matchAll: matchAll,
    isHTMLForm: isHTMLForm,
    hasOwnProperty: hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: reduceDescriptors,
    freezeMethods: freezeMethods,
    toObjectSet: toObjectSet,
    toCamelCase: toCamelCase,
    noop: noop,
    toFiniteNumber: toFiniteNumber,
    findKey: findKey,
    global: _global,
    isContextDefined: isContextDefined,
    ALPHABET: ALPHABET,
    generateString: generateString,
    isSpecCompliantForm: isSpecCompliantForm,
    toJSONObject: toJSONObject
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype$1 = AxiosError.prototype;
  var descriptors = {};
  ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
  // eslint-disable-next-line func-names
  ].forEach(function (code) {
    descriptors[code] = {
      value: code
    };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, 'isAxiosError', {
    value: true
  });

  // eslint-disable-next-line func-names
  AxiosError.from = function (error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype$1);
    utils.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, function (prop) {
      return prop !== 'isAxiosError';
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };

  // eslint-disable-next-line strict
  var httpAdapter = null;

  /**
   * Determines if the given thing is a array or js object.
   *
   * @param {string} thing - The object or array to be visited.
   *
   * @returns {boolean}
   */
  function isVisitable(thing) {
    return utils.isPlainObject(thing) || utils.isArray(thing);
  }

  /**
   * It removes the brackets from the end of a string
   *
   * @param {string} key - The key of the parameter.
   *
   * @returns {string} the key without the brackets.
   */
  function removeBrackets(key) {
    return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
  }

  /**
   * It takes a path, a key, and a boolean, and returns a string
   *
   * @param {string} path - The path to the current key.
   * @param {string} key - The key of the current object being iterated over.
   * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
   *
   * @returns {string} The path to the current key.
   */
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
  }

  /**
   * If the array is an array and none of its elements are visitable, then it's a flat array.
   *
   * @param {Array<any>} arr - The array to check
   *
   * @returns {boolean}
   */
  function isFlatArray(arr) {
    return utils.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });

  /**
   * Convert a data object to FormData
   *
   * @param {Object} obj
   * @param {?Object} [formData]
   * @param {?Object} [options]
   * @param {Function} [options.visitor]
   * @param {Boolean} [options.metaTokens = true]
   * @param {Boolean} [options.dots = false]
   * @param {?Boolean} [options.indexes = false]
   *
   * @returns {Object}
   **/

  /**
   * It converts an object into a FormData object
   *
   * @param {Object<any, any>} obj - The object to convert to form data.
   * @param {string} formData - The FormData object to append to.
   * @param {Object<string, any>} options
   *
   * @returns
   */
  function toFormData(obj, formData, options) {
    if (!utils.isObject(obj)) {
      throw new TypeError('target must be an object');
    }

    // eslint-disable-next-line no-param-reassign
    formData = formData || new (FormData)();

    // eslint-disable-next-line no-param-reassign
    options = utils.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !utils.isUndefined(source[option]);
    });
    var metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    var visitor = options.visitor || defaultVisitor;
    var dots = options.dots;
    var indexes = options.indexes;
    var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    var useBlob = _Blob && utils.isSpecCompliantForm(formData);
    if (!utils.isFunction(visitor)) {
      throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
      if (value === null) return '';
      if (utils.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils.isBlob(value)) {
        throw new AxiosError('Blob is not supported. Use a Buffer instead.');
      }
      if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
        return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }

    /**
     * Default visitor.
     *
     * @param {*} value
     * @param {String|Number} key
     * @param {Array<String|Number>} path
     * @this {FormData}
     *
     * @returns {boolean} return true to visit the each prop of the value recursively
     */
    function defaultVisitor(value, key, path) {
      var arr = value;
      if (value && !path && typeof value === 'object') {
        if (utils.endsWith(key, '{}')) {
          // eslint-disable-next-line no-param-reassign
          key = metaTokens ? key : key.slice(0, -2);
          // eslint-disable-next-line no-param-reassign
          value = JSON.stringify(value);
        } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))) {
          // eslint-disable-next-line no-param-reassign
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    var stack = [];
    var exposedHelpers = Object.assign(predicates, {
      defaultVisitor: defaultVisitor,
      convertValue: convertValue,
      isVisitable: isVisitable
    });
    function build(value, path) {
      if (utils.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error('Circular reference detected in ' + path.join('.'));
      }
      stack.push(value);
      utils.forEach(value, function each(el, key) {
        var result = !(utils.isUndefined(el) || el === null) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils.isObject(obj)) {
      throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
  }

  /**
   * It encodes a string by replacing all characters that are not in the unreserved set with
   * their percent-encoded equivalents
   *
   * @param {string} str - The string to encode.
   *
   * @returns {string} The encoded string.
   */
  function encode$1(str) {
    var charMap = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }

  /**
   * It takes a params object and converts it to a FormData object
   *
   * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
   * @param {Object<string, any>} options - The options object passed to the Axios constructor.
   *
   * @returns {void}
   */
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  var prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString(encoder) {
    var _encode = encoder ? function (value) {
      return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
  };

  /**
   * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
   * URI encoded counterparts
   *
   * @param {string} val The value to be encoded.
   *
   * @returns {string} The encoded value.
   */
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @param {?object} options
   *
   * @returns {string} The formatted url
   */
  function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
    var _encode = options && options.encode || encode;
    var serializeFn = options && options.serialize;
    var serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
  }

  var InterceptorManager = /*#__PURE__*/function () {
    function InterceptorManager() {
      _classCallCheck(this, InterceptorManager);
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    _createClass(InterceptorManager, [{
      key: "use",
      value: function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
       */
    }, {
      key: "eject",
      value: function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }

      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
    }, {
      key: "clear",
      value: function clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
    }, {
      key: "forEach",
      value: function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      }
    }]);
    return InterceptorManager;
  }();
  var InterceptorManager$1 = InterceptorManager;

  var transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

  var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

  var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   *
   * @returns {boolean}
   */
  var isStandardBrowserEnv = function () {
    var product;
    if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
      return false;
    }
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }();

  /**
   * Determine if we're running in a standard browser webWorker environment
   *
   * Although the `isStandardBrowserEnv` method indicates that
   * `allows axios to run in a web worker`, the WebWorker will still be
   * filtered out due to its judgment standard
   * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
   * This leads to a problem when axios post `FormData` in webWorker
   */
  var isStandardBrowserWebWorkerEnv = function () {
    return typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
  }();
  var platform = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    isStandardBrowserEnv: isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv: isStandardBrowserWebWorkerEnv,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  };

  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function visitor(value, key, path, helpers) {
        if (platform.isNode && utils.isBuffer(value)) {
          this.append(key, value.toString('base64'));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  /**
   * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
   *
   * @param {string} name - The name of the property to get.
   *
   * @returns An array of strings.
   */
  function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
      return match[0] === '[]' ? '' : match[1] || match[0];
    });
  }

  /**
   * Convert an array to an object.
   *
   * @param {Array<any>} arr - The array to convert to an object.
   *
   * @returns An object with the same keys and values as the array.
   */
  function arrayToObject(arr) {
    var obj = {};
    var keys = Object.keys(arr);
    var i;
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }

  /**
   * It takes a FormData object and returns a JavaScript object
   *
   * @param {string} formData The FormData object to convert to JSON.
   *
   * @returns {Object<string, any> | null} The converted object.
   */
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      var name = path[index++];
      var isNumericKey = Number.isFinite(+name);
      var isLast = index >= path.length;
      name = !name && utils.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils.isObject(target[name])) {
        target[name] = [];
      }
      var result = buildPath(path, value, target[name], index);
      if (result && utils.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
      var obj = {};
      utils.forEachEntry(formData, function (name, value) {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': undefined
  };

  /**
   * It takes a string, tries to parse it, and if it fails, it returns the stringified version
   * of the input
   *
   * @param {any} rawValue - The value to be stringified.
   * @param {Function} parser - A function that parses a string into a JavaScript object.
   * @param {Function} encoder - A function that takes a value and returns a string.
   *
   * @returns {string} A stringified version of the rawValue.
   */
  function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitionalDefaults,
    adapter: ['xhr', 'http'],
    transformRequest: [function transformRequest(data, headers) {
      var contentType = headers.getContentType() || '';
      var hasJSONContentType = contentType.indexOf('application/json') > -1;
      var isObjectPayload = utils.isObject(data);
      if (isObjectPayload && utils.isHTMLForm(data)) {
        data = new FormData(data);
      }
      var isFormData = utils.isFormData(data);
      if (isFormData) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
        return data.toString();
      }
      var isFileList;
      if (isObjectPayload) {
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
          var _FormData = this.env && this.env.FormData;
          return toFormData(isFileList ? {
            'files[]': data
          } : data, _FormData && new _FormData(), this.formSerializer);
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional || defaults.transitional;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var JSONRequested = this.responseType === 'json';
      if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    }
  };
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults$1 = defaults;

  // RawAxiosHeaders whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = utils.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} rawHeaders Headers needing to be parsed
   *
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders = (function (rawHeaders) {
    var parsed = {};
    var key;
    var val;
    var i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === 'set-cookie') {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
    return parsed;
  });

  var $internals = Symbol('internals');
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    var tokens = Object.create(null);
    var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    var match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  function isValidHeaderName(str) {
    return /^[-_a-zA-Z]+$/.test(str.trim());
  }
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils.isString(value)) return;
    if (utils.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, char, str) {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    var accessorName = utils.toCamelCase(' ' + header);
    ['get', 'set', 'has'].forEach(function (methodName) {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function value(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
    function AxiosHeaders(headers) {
      _classCallCheck(this, AxiosHeaders);
      headers && this.set(headers);
    }
    _createClass(AxiosHeaders, [{
      key: "set",
      value: function set(header, valueOrRewrite, rewrite) {
        var self = this;
        function setHeader(_value, _header, _rewrite) {
          var lHeader = normalizeHeader(_header);
          if (!lHeader) {
            throw new Error('header name must be a non-empty string');
          }
          var key = utils.findKey(self, lHeader);
          if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
            self[key || _header] = normalizeValue(_value);
          }
        }
        var setHeaders = function setHeaders(headers, _rewrite) {
          return utils.forEach(headers, function (_value, _header) {
            return setHeader(_value, _header, _rewrite);
          });
        };
        if (utils.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
          setHeaders(parseHeaders(header), valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
      }
    }, {
      key: "get",
      value: function get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
          var key = utils.findKey(this, header);
          if (key) {
            var value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError('parser must be boolean|regexp|function');
          }
        }
      }
    }, {
      key: "has",
      value: function has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
          var key = utils.findKey(this, header);
          return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
      }
    }, {
      key: "delete",
      value: function _delete(header, matcher) {
        var self = this;
        var deleted = false;
        function deleteHeader(_header) {
          _header = normalizeHeader(_header);
          if (_header) {
            var key = utils.findKey(self, _header);
            if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
              delete self[key];
              deleted = true;
            }
          }
        }
        if (utils.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }
        return deleted;
      }
    }, {
      key: "clear",
      value: function clear(matcher) {
        var keys = Object.keys(this);
        var i = keys.length;
        var deleted = false;
        while (i--) {
          var key = keys[i];
          if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
            delete this[key];
            deleted = true;
          }
        }
        return deleted;
      }
    }, {
      key: "normalize",
      value: function normalize(format) {
        var self = this;
        var headers = {};
        utils.forEach(this, function (value, header) {
          var key = utils.findKey(headers, header);
          if (key) {
            self[key] = normalizeValue(value);
            delete self[header];
            return;
          }
          var normalized = format ? formatHeader(header) : String(header).trim();
          if (normalized !== header) {
            delete self[header];
          }
          self[normalized] = normalizeValue(value);
          headers[normalized] = true;
        });
        return this;
      }
    }, {
      key: "concat",
      value: function concat() {
        var _this$constructor;
        for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
          targets[_key] = arguments[_key];
        }
        return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
      }
    }, {
      key: "toJSON",
      value: function toJSON(asStrings) {
        var obj = Object.create(null);
        utils.forEach(this, function (value, header) {
          value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
        });
        return obj;
      }
    }, {
      key: _Symbol$iterator,
      value: function value() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
    }, {
      key: "toString",
      value: function toString() {
        return Object.entries(this.toJSON()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            header = _ref2[0],
            value = _ref2[1];
          return header + ': ' + value;
        }).join('\n');
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get() {
        return 'AxiosHeaders';
      }
    }], [{
      key: "from",
      value: function from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }
    }, {
      key: "concat",
      value: function concat(first) {
        var computed = new this(first);
        for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          targets[_key2 - 1] = arguments[_key2];
        }
        targets.forEach(function (target) {
          return computed.set(target);
        });
        return computed;
      }
    }, {
      key: "accessor",
      value: function accessor(header) {
        var internals = this[$internals] = this[$internals] = {
          accessors: {}
        };
        var accessors = internals.accessors;
        var prototype = this.prototype;
        function defineAccessor(_header) {
          var lHeader = normalizeHeader(_header);
          if (!accessors[lHeader]) {
            buildAccessors(prototype, _header);
            accessors[lHeader] = true;
          }
        }
        utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
      }
    }]);
    return AxiosHeaders;
  }(Symbol.iterator, Symbol.toStringTag);
  AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
  utils.freezeMethods(AxiosHeaders.prototype);
  utils.freezeMethods(AxiosHeaders);
  var AxiosHeaders$1 = AxiosHeaders;

  /**
   * Transform the data for a request or a response
   *
   * @param {Array|Function} fns A single function or Array of functions
   * @param {?Object} response The response object
   *
   * @returns {*} The resulting transformed data
   */
  function transformData(fns, response) {
    var config = this || defaults$1;
    var context = response || config;
    var headers = AxiosHeaders$1.from(context.headers);
    var data = context.data;
    utils.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
  }

  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
  }
  utils.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   *
   * @returns {object} The response.
   */
  function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
  }

  var cookies = platform.isStandardBrowserEnv ?
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }
        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }
        if (secure === true) {
          cookie.push('secure');
        }
        document.cookie = cookie.join('; ');
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  }() :
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }();

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   *
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   *
   * @returns {string} The combined URL
   */
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  }

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   *
   * @returns {string} The combined full path
   */
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  var isURLSameOrigin = platform.isStandardBrowserEnv ?
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;
      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() :
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();

  function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  /**
   * Calculate data maxRate
   * @param {Number} [samplesCount= 10]
   * @param {Number} [min= 1000]
   * @returns {Function}
   */
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    var bytes = new Array(samplesCount);
    var timestamps = new Array(samplesCount);
    var head = 0;
    var tail = 0;
    var firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
      var now = Date.now();
      var startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      var i = tail;
      var bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      var passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
  }

  function progressEventReducer(listener, isDownloadStream) {
    var bytesNotified = 0;
    var _speedometer = speedometer(50, 250);
    return function (e) {
      var loaded = e.loaded;
      var total = e.lengthComputable ? e.total : undefined;
      var progressBytes = loaded - bytesNotified;
      var rate = _speedometer(progressBytes);
      var inRange = loaded <= total;
      bytesNotified = loaded;
      var data = {
        loaded: loaded,
        total: total,
        progress: total ? loaded / total : undefined,
        bytes: progressBytes,
        rate: rate ? rate : undefined,
        estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
        event: e
      };
      data[isDownloadStream ? 'download' : 'upload'] = true;
      listener(data);
    };
  }
  var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
  var xhrAdapter = isXHRAdapterSupported && function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
      var responseType = config.responseType;
      var onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener('abort', onCanceled);
        }
      }
      if (utils.isFormData(requestData) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
        requestHeaders.setContentType(false); // Let the browser set it
      }

      var request = new XMLHttpRequest();

      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
      }
      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

      // Set the request timeout in MS
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        var responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
        var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);

        // Clean up request
        request = null;
      }
      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
        var transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (platform.isStandardBrowserEnv) {
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = config.responseType;
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = function onCanceled(cancel) {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
      }
      var protocol = parseProtocol(fullPath);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  };

  var knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
  };
  utils.forEach(knownAdapters, function (fn, value) {
    if (fn) {
      try {
        Object.defineProperty(fn, 'name', {
          value: value
        });
      } catch (e) {
        // eslint-disable-next-line no-empty
      }
      Object.defineProperty(fn, 'adapterName', {
        value: value
      });
    }
  });
  var adapters = {
    getAdapter: function getAdapter(adapters) {
      adapters = utils.isArray(adapters) ? adapters : [adapters];
      var _adapters = adapters,
        length = _adapters.length;
      var nameOrAdapter;
      var adapter;
      for (var i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
          break;
        }
      }
      if (!adapter) {
        if (adapter === false) {
          throw new AxiosError("Adapter ".concat(nameOrAdapter, " is not supported by the environment"), 'ERR_NOT_SUPPORT');
        }
        throw new Error(utils.hasOwnProp(knownAdapters, nameOrAdapter) ? "Adapter '".concat(nameOrAdapter, "' is not available in the build") : "Unknown adapter '".concat(nameOrAdapter, "'"));
      }
      if (!utils.isFunction(adapter)) {
        throw new TypeError('adapter is not a function');
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   *
   * @param {Object} config The config that is to be used for the request
   *
   * @returns {void}
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);

    // Transform request data
    config.data = transformData.call(config, config.transformRequest);
    if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
      config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    var adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(config, config.transformResponse, response);
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(config, config.transformResponse, reason.response);
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  var headersToObject = function headersToObject(thing) {
    return thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
  };

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   *
   * @returns {Object} New object resulting from merging config2 to config1
   */
  function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source, caseless) {
      if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
        return utils.merge.call({
          caseless: caseless
        }, target, source);
      } else if (utils.isPlainObject(source)) {
        return utils.merge({}, source);
      } else if (utils.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils.isUndefined(a)) {
        return getMergedValue(undefined, a, caseless);
      }
    }

    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(undefined, b);
      }
    }

    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(undefined, b);
      } else if (!utils.isUndefined(a)) {
        return getMergedValue(undefined, a);
      }
    }

    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(undefined, a);
      }
    }
    var mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: function headers(a, b) {
        return mergeDeepProperties(headersToObject(a), headersToObject(b), true);
      }
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      var merge = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge(config1[prop], config2[prop], prop);
      utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  var VERSION = "1.3.4";

  var validators$1 = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
    validators$1[type] = function validator(thing) {
      return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });
  var deprecatedWarnings = {};

  /**
   * Transitional option validator
   *
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   *
   * @returns {function}
   */
  validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return function (value, opt, opts) {
      if (validator === false) {
        throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };

  /**
   * Assert object's properties type
   *
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   *
   * @returns {object}
   */

  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
      throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];
      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  var validator = {
    assertOptions: assertOptions,
    validators: validators$1
  };

  var validators = validator.validators;

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   *
   * @return {Axios} A new instance of Axios
   */
  var Axios = /*#__PURE__*/function () {
    function Axios(instanceConfig) {
      _classCallCheck(this, Axios);
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    _createClass(Axios, [{
      key: "request",
      value: function request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        var _config = config,
          transitional = _config.transitional,
          paramsSerializer = _config.paramsSerializer,
          headers = _config.headers;
        if (transitional !== undefined) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        if (paramsSerializer !== undefined) {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }

        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        var contextHeaders;

        // Flatten headers
        contextHeaders = headers && utils.merge(headers.common, headers[config.method]);
        contextHeaders && utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
          delete headers[method];
        });
        config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

        // filter out skipped interceptors
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        var i = 0;
        var len;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest.bind(this), undefined];
          chain.unshift.apply(chain, requestInterceptorChain);
          chain.push.apply(chain, responseInterceptorChain);
          len = chain.length;
          promise = Promise.resolve(config);
          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }
          return promise;
        }
        len = requestInterceptorChain.length;
        var newConfig = config;
        i = 0;
        while (i < len) {
          var onFulfilled = requestInterceptorChain[i++];
          var onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected.call(this, error);
            break;
          }
        }
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
      }
    }, {
      key: "getUri",
      value: function getUri(config) {
        config = mergeConfig(this.defaults, config);
        var fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      }
    }]);
    return Axios;
  }(); // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/

    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          headers: isForm ? {
            'Content-Type': 'multipart/form-data'
          } : {},
          url: url,
          data: data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  });
  var Axios$1 = Axios;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @param {Function} executor The executor function.
   *
   * @returns {CancelToken}
   */
  var CancelToken = /*#__PURE__*/function () {
    function CancelToken(executor) {
      _classCallCheck(this, CancelToken);
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;

      // eslint-disable-next-line func-names
      this.promise.then(function (cancel) {
        if (!token._listeners) return;
        var i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });

      // eslint-disable-next-line func-names
      this.promise.then = function (onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function (resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    _createClass(CancelToken, [{
      key: "throwIfRequested",
      value: function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }

      /**
       * Subscribe to the cancel signal
       */
    }, {
      key: "subscribe",
      value: function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }

      /**
       * Unsubscribe from the cancel signal
       */
    }, {
      key: "unsubscribe",
      value: function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
    }], [{
      key: "source",
      value: function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      }
    }]);
    return CancelToken;
  }();
  var CancelToken$1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   *
   * @returns {Function}
   */
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   *
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
  }

  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode$1 = HttpStatusCode;

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   *
   * @returns {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios$1(defaultConfig);
    var instance = bind(Axios$1.prototype.request, context);

    // Copy axios.prototype to instance
    utils.extend(instance, Axios$1.prototype, context, {
      allOwnKeys: true
    });

    // Copy context to instance
    utils.extend(instance, context, null, {
      allOwnKeys: true
    });

    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }

  // Create the default instance to be exported
  var axios = createInstance(defaults$1);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios$1;

  // Expose Cancel & CancelToken
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;

  // Expose AxiosError class
  axios.AxiosError = AxiosError;

  // alias for CanceledError for backward compatibility
  axios.Cancel = axios.CanceledError;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;

  // Expose isAxiosError
  axios.isAxiosError = isAxiosError;

  // Expose mergeConfig
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = function (thing) {
    return formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
  };
  axios.HttpStatusCode = HttpStatusCode$1;
  axios.default = axios;

  // this module should only have a default export
  var axios$1 = axios;

  // This module is intended to unwrap Axios default export as named.
  // Keep top-level export same with static properties
  // so that it can keep same with es module or cjs
  axios$1.Axios;
    axios$1.AxiosError;
    axios$1.CanceledError;
    axios$1.isCancel;
    axios$1.CancelToken;
    axios$1.VERSION;
    axios$1.all;
    axios$1.Cancel;
    axios$1.isAxiosError;
    axios$1.spread;
    axios$1.toFormData;
    axios$1.AxiosHeaders;
    axios$1.HttpStatusCode;
    axios$1.formToJSON;
    axios$1.mergeConfig;

  /**
   * This is the class responsible for the API calls, responses and errors.
   * This class will be comunicating with the server.
   */
  var AxiosRequester = /*#__PURE__*/function () {
    function AxiosRequester() {
      _classCallCheck(this, AxiosRequester);
      // static endpoint for POC
      _defineProperty(this, "AxiosAPI", axios$1.create({
        baseURL: 'https://api-entertainment.enlight.diagnal.com/v1b3/content'
      }));
    }
    _createClass(AxiosRequester, [{
      key: "fetch",
      value:
      /**
       * Generic funciton used to handle the API request to the server.
       * This function takes one parameter as input and has two returns
       * 
       * @param uri, @type string,  @desc this is the uri from which the data has to be fetched.
       * 
       * @return response, @type AxiosResponse<any> | undefined, @desc This Axiosresponse object, this will return the data fetched if successful.
       * @return error,  @type  AxiosError<any> | undefined, @desc THis error object, this will return error on failure.
       * 
       */
      function () {
        var _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(uri) {
          var response;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.AxiosAPI.get(uri);
              case 3:
                response = _context.sent;
                return _context.abrupt("return", [response, undefined]);
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", [undefined, _context.t0]);
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[0, 7]]);
        }));
        function fetch(_x) {
          return _fetch.apply(this, arguments);
        }
        return fetch;
      }()
    }]);
    return AxiosRequester;
  }();

  var Rail = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Rail, _Lightning$Component);
    var _super = _createSuper(Rail);
    function Rail() {
      var _this;
      _classCallCheck(this, Rail);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "index", -1);
      _defineProperty(_assertThisInitialized(_this), "dataLength", 0);
      _defineProperty(_assertThisInitialized(_this), "railIndex", 0);
      _defineProperty(_assertThisInitialized(_this), "axiosRequester", new AxiosRequester());
      _defineProperty(_assertThisInitialized(_this), "responseData", {});
      _defineProperty(_assertThisInitialized(_this), "data", []);
      return _this;
    }
    _createClass(Rail, [{
      key: "_init",
      value:
      /**
      * This function is responsible for setting up the initial states of the component when
      * attached for the first time. This function takes  no parameters and has no return.
      */
      function _init() {
        var _this2 = this;
        var rail = [];
        this.axiosRequester.fetch(endp[this.railIndex]).then(function (response) {
          if (response) {
            var _response$;
            _this2.responseData = (_response$ = response[0]) === null || _response$ === void 0 ? void 0 : _response$.data;
            _this2.dataLength = _this2.responseData.totalElements || 0;
            _this2.data = _this2.responseData.content || [];
            for (var i = 0; i < _this2.dataLength; i++) {
              var _this2$data$i, _this2$data$i2, _this2$data$i2$images;
              var label = (_this2$data$i = _this2.data[i]) === null || _this2$data$i === void 0 ? void 0 : _this2$data$i.title;
              var img_src = (_this2$data$i2 = _this2.data[i]) === null || _this2$data$i2 === void 0 ? void 0 : (_this2$data$i2$images = _this2$data$i2.images.find(function (img) {
                return img.width === 288;
              })) === null || _this2$data$i2$images === void 0 ? void 0 : _this2$data$i2$images.url;
              rail.push({
                type: RailItem,
                x: i * (300 + 30),
                item: {
                  label: label,
                  src: img_src || "https://pmd205470tn-a.akamaihd.net/D2C_-_Content/191/249/oyPcsfGWL5Se6RGW1JCVgpHlASH_288x432_13635141800.jpg",
                  data: _this2.data[i]
                }
              });
            }
          }
          _this2.patch({
            Header: {
              text: railName[_this2.railIndex]
            }
          });
          _this2.tag('Wrapper').children = rail;
          _this2.index = 0;
          _this2._setState("RowItem");
        });
      }

      /**
       * To repostion the wrapper on the focused element. Function does not take any parameters 
       * nor has any return.
       */
    }, {
      key: "repositionWrapper",
      value: function repositionWrapper() {
        var wrapper = this.tag('Wrapper');
        var sliderW = this.tag('Slider').w;
        var currentWrapperX = wrapper.transition('x').targetvalue || wrapper.x;
        var currentFocus = wrapper.children[this.index];
        var currentFocusX = currentFocus.x + currentWrapperX;
        var currentFocusOuterWidth = currentFocus.x + currentFocus.w;
        if (currentFocusX < 0) {
          wrapper.setSmooth('x', -currentFocus.x);
        } else if (currentFocusOuterWidth > sliderW) {
          wrapper.setSmooth('x', sliderW - currentFocusOuterWidth);
        }
      }

      /**
       * This function overrides the default behaviour of keypress 'Left'.
       * This functions checks the index to see the focused element and decides
       * wheather if it should move to the left or not. And then it will reposition
       * the wrapper.
       */
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        this._setState("RowItem");
      }

      /**
       * This function overrides the default behaviour of keypress 'Right'.
       * This functions checks the index to see the focused element and decides
       * wheather if it should move to the right or not. And then it will reposition
       * the wrapper.
       */
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        this._setState("RowItem");
      }

      /**
       * This function will override the default behavior of the getFocused() method
       * 
       * @returns Return the child Component that this Component wishes to receive focus. Returning null 
       * or undefined tells the focus engine to not set focus on this Component at all.By default,
       * this Component's own instance is returned.
       */

      // override _getFocused(): any {
      //     return this.tag('Slider.Wrapper' as any).children[this.index];
      // }
    }], [{
      key: "_template",
      value:
      /**
      * This function is responsible for the creation and return of the UI template. This 
      * function takes  no parameters and returns the template of the Rail component.
      * 
      * @returns Template for the Rail Component.
      * 
      */

      function _template() {
        return {
          Header: {
            x: 50,
            y: 20,
            color: theme.colors.white,
            text: {
              text: "",
              fontSize: 35
            }
          },
          Slider: {
            w: 800,
            h: 350,
            x: 480,
            y: 280,
            mount: 0.5,
            Wrapper: {}
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this3) {
          _inherits(RowItem, _this3);
          var _super2 = _createSuper(RowItem);
          function RowItem() {
            _classCallCheck(this, RowItem);
            return _super2.apply(this, arguments);
          }
          _createClass(RowItem, [{
            key: "_handleRight",
            value: function _handleRight() {
              if (this.index < this.dataLength - 1) {
                this.index += 1;
                this.repositionWrapper();
              }
            }
          }, {
            key: "_handleLeft",
            value: function _handleLeft() {
              if (this.index > 0) {
                this.index -= 1;
                this.repositionWrapper();
              }
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('Slider.Wrapper').children[this.index];
            }
          }]);
          return RowItem;
        }(this)];
      }
    }]);
    return Rail;
  }(Lightning$1.Component);

  var NavTextItem = /*#__PURE__*/function (_ref) {
    _inherits(NavTextItem, _ref);
    var _super = _createSuper(NavTextItem);
    function NavTextItem() {
      _classCallCheck(this, NavTextItem);
      return _super.apply(this, arguments);
    }
    _createClass(NavTextItem, [{
      key: "navtext",
      set:
      /**
       * Setter for setting the values for the item property.
       *
       * @Param The value that needs to be setted to the item property.
       *
       */
      function set(text) {
        this.patch({
          NavText: {
            text: text === null || text === void 0 ? void 0 : text.toString()
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when come in focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it comes to the focus.
       *
       */
    }, {
      key: "_focus",
      value: function _focus() {
        this.patch({
          smooth: {
            scale: 1.1
          },
          NavText: {
            smooth: {
              color: theme.colors.white
            }
          },
          Rectangle: {
            color: theme.colors.yellow,
            x: 2,
            y: function y(_y) {
              return _y + 50;
            },
            w: 100,
            h: 5,
            rect: true
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when goes out of focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it goes out of the focus.
       *
       */
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          smooth: {
            color: theme.colors.primary,
            scale: 1.0
          },
          NavText: {
            smooth: {
              color: theme.colors.accentGrey.light
            }
          },
          Rectangle: undefined
        });
      }
    }], [{
      key: "_template",
      value:
      /**
       * This function is responsible for the creation and return of the UI template. This
       * function takes  no parameters and returns the template of the component.
       *
       * @returns Template for the Component.
       *
       */

      function _template() {
        return {
          NavText: {
            w: 120,
            color: theme.colors.accentGrey.light,
            text: {
              fontSize: 35
            }
          }
        };
      }
    }]);
    return NavTextItem;
  }(Lightning$1.Component);

  var NavProfileItem = /*#__PURE__*/function (_ref) {
    _inherits(NavProfileItem, _ref);
    var _super = _createSuper(NavProfileItem);
    function NavProfileItem() {
      _classCallCheck(this, NavProfileItem);
      return _super.apply(this, arguments);
    }
    _createClass(NavProfileItem, [{
      key: "navtext",
      set:
      /**
       * Setter for setting the values for the item property.
       *
       * @Param The value that needs to be setted to the item property.
       *
       */
      function set(text) {
        this.patch({
          NavText: {
            text: text === null || text === void 0 ? void 0 : text.toString()
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when come in focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it comes to the focus.
       *
       */
    }, {
      key: "_focus",
      value: function _focus() {
        this.patch({
          smooth: {
            scale: 1.1
          },
          shader: {
            strokeColor: theme.colors.yellow
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when goes out of focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it goes out of the focus.
       *
       */
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          smooth: {
            scale: 1.0
          },
          shader: {
            strokeColor: theme.colors.white
          }
        });
      }
    }], [{
      key: "_template",
      value:
      /**
       * This function is responsible for the creation and return of the UI template. This
       * function takes  no parameters and returns the template of the component.
       *
       * @returns Template for the Component.
       *
       */

      function _template() {
        return {
          w: 50,
          h: 50,
          src: "https://pmd205470tn-a.akamaihd.net/D2C_-_Content/808/289/5qtySjfuJfOLvVrVXuwNo2BIVPH.jpg",
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: 10,
            stroke: 5,
            strokeColor: theme.colors.white
          }
        };
      }
    }]);
    return NavProfileItem;
  }(Lightning$1.Component);

  var TopNav = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(TopNav, _Lightning$Component);
    var _super = _createSuper(TopNav);
    function TopNav() {
      var _this;
      _classCallCheck(this, TopNav);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "index", 0);
      return _this;
    }
    _createClass(TopNav, [{
      key: "_init",
      value:
      /**
      * This function is responsible for setting up the initial states of the component when
      * attached for the first time. This function takes  no parameters and has no return.
      */
      function _init() {
        var _this$tag;
        var menus = {
          Home: {
            type: NavTextItem,
            x: 20,
            y: 12,
            navtext: "Home"
          },
          Search: {
            type: NavTextItem,
            x: 140,
            y: 12,
            navtext: "Search"
          },
          Profile: {
            x: 1840,
            y: 15,
            type: NavProfileItem
          }
          // Exit: {
          //     type: NavTextItem,
          //     x: (x: number) => x - 100, y: 20,
          //     navtext: "Exit"
          // }
        };

        this.tag('Navbar.NavItems.NavMenu').children = menus;

        // animating the shader background
        (_this$tag = this.tag('Navbar')) === null || _this$tag === void 0 ? void 0 : _this$tag.animation({
          duration: 8,
          repeat: -1,
          delay: 2,
          actions: [{
            p: 'shader.radius',
            v: {
              0: {
                v: 800
              },
              0.5: {
                v: 400
              },
              1: {
                v: 800
              }
            }
          }]
        }).start();
      }

      /**
       * This function overrides the default behaviour of keypress 'Left'.
       * This functions checks the index to see the focused element and decides
       * wheather if it should move to the left or not. 
       */
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        if (this.index > 0) {
          this.index -= 1;
        }
      }

      /**
       * This function overrides the default behaviour of keypress 'Right'.
       * This functions checks the index to see the focused element and decides
       * wheather if it should move to the right or not.
       */
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        if (this.index < 2) {
          this.index += 1;
        }
      }

      /**
      * This function overrides the default behaviour of keypress 'Enter'.
      * This functions checks the index to see the focused element and decides
      * the route to navigate.
      */
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        if (this.index === 0) {
          Router.navigate('home');
        } else if (this.index === 1) {
          Router.navigate('search');
        } else {
          Router.navigate('settings');
        }
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('Navbar.NavItems.NavMenu').children[this.index];
      }

      /**
       * This function overrides the default behavior of the component when come in focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it comes to the focus.
       *
       */
    }, {
      key: "_focus",
      value: function _focus() {}

      /**
       * This function overrides the default behavior of the component when goes out of focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it goes out of the focus.
       *
       */
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.index = 0;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Navbar: {
            w: 1920,
            h: 1080,
            rect: true,
            zIndex: 1,
            shader: {
              x: 100,
              y: -100,
              pivot: 0.5,
              type: Lightning$1.shaders.RadialGradient,
              outerColor: theme.colors.primaryLight,
              innerColor: theme.colors.dark,
              radius: 800
            },
            NavItems: {
              x: 10,
              y: 10,
              NavMenu: {
                shader: null
              }
            }
          }
        };
      }
    }]);
    return TopNav;
  }(Lightning$1.Component);

  var BackButton = /*#__PURE__*/function (_ref) {
    _inherits(BackButton, _ref);
    var _super = _createSuper(BackButton);
    function BackButton() {
      _classCallCheck(this, BackButton);
      return _super.apply(this, arguments);
    }
    _createClass(BackButton, [{
      key: "_focus",
      value:
      /**
       * This function overrides the default behavior of the component when come in focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it comes to the focus.
       *
       */
      function _focus() {
        this.patch({
          smooth: {
            scale: 1.1
          },
          Back: {
            smooth: {
              color: theme.colors.white
            }
          },
          Rectangle: {
            color: theme.colors.yellow,
            x: 2,
            y: function y(_y) {
              return _y + 50;
            },
            w: 80,
            h: 5,
            rect: true
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when goes out of focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it goes out of the focus.
       *
       */
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          smooth: {
            color: theme.colors.primary,
            scale: 1.0
          },
          Back: {
            smooth: {
              color: theme.colors.accentGrey.light
            }
          },
          Rectangle: undefined
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Back: {
            w: 80,
            color: theme.colors.accentGrey.light,
            text: {
              text: 'Back',
              fontSize: 35
            }
          }
        };
      }
    }]);
    return BackButton;
  }(Lightning$1.Component);

  var VideoSpecItem = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VideoSpecItem, _Lightning$Component);
    var _super = _createSuper(VideoSpecItem);
    function VideoSpecItem() {
      _classCallCheck(this, VideoSpecItem);
      return _super.apply(this, arguments);
    }
    _createClass(VideoSpecItem, [{
      key: "specData",
      set: function set(spec) {
        this.patch({
          VideoSpec: {
            Spec: {
              text: spec
            }
          }
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          VideoSpec: {
            w: 120,
            h: 80,
            shader: {
              type: Lightning$1.shaders.RoundedRectangle,
              radius: 20,
              stroke: 8,
              strokeColor: theme.colors.accentGrey.light
            },
            color: theme.colors.accentGrey.light,
            Spec: {
              mount: 0.5,
              color: theme.colors.accentGrey.light,
              text: {
                fontSize: 22
              }
            }
          }
        };
      }
    }]);
    return VideoSpecItem;
  }(Lightning$1.Component);

  var Button = /*#__PURE__*/function (_ref) {
    _inherits(Button, _ref);
    var _super = _createSuper(Button);
    function Button() {
      _classCallCheck(this, Button);
      return _super.apply(this, arguments);
    }
    _createClass(Button, [{
      key: "label",
      set: function set(text) {
        this.patch({
          Button: {
            Label: {
              text: text
            }
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when come in focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it comes to the focus.
       *
       */
    }, {
      key: "_focus",
      value: function _focus() {
        this.patch({
          smooth: {
            scale: 1.1
          },
          Button: {
            shader: {
              innerColor: 0xAAF2DB59
            },
            Label: {
              text: {
                textColor: theme.colors.white
              }
            }
          }
        });
      }

      /**
       * This function overrides the default behavior of the component when goes out of focus.
       * We can add all the changes / updates that needs to be made to the component when
       * it goes out of the focus.
       *
       */
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          smooth: {
            scale: 1.0
          },
          Button: {
            shader: {
              innerColor: theme.colors.accentGrey.dark
            }
          }
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Button: {
            w: 500,
            h: 100,
            color: 0x00000000,
            rect: true,
            shader: {
              type: Lightning$1.shaders.RadialGradient,
              innerColor: theme.colors.accentGrey.dark
            },
            Label: {
              shader: null,
              h: function h(_h) {
                return _h;
              },
              text: {
                fontSize: 35,
                textColor: theme.colors.white,
                textAlign: 'left',
                textIndent: 20,
                textBaseline: 'hanging'
              }
            }
          }
        };
      }
    }]);
    return Button;
  }(Lightning$1.Component);

  // Home component
  var Home = /*#__PURE__*/function (_ref) {
    _inherits(Home, _ref);
    var _super = _createSuper(Home);
    function Home() {
      var _this;
      _classCallCheck(this, Home);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "index", 0);
      _defineProperty(_assertThisInitialized(_this), "rowLength", endp.length);
      _defineProperty(_assertThisInitialized(_this), "hideNav", false);
      _defineProperty(_assertThisInitialized(_this), "Wrapper", _this.getByRef('Background.Slider.Wrapper'));
      return _this;
    }
    _createClass(Home, [{
      key: "_init",
      value:
      // initializing the component
      function _init() {
        var rails = [];
        for (var i = 0; i < this.rowLength; i++) {
          rails.push({
            type: Rail,
            x: 0,
            y: i * (600 + 50),
            railIndex: i
          });
        }
        this.tag('Background.Slider.Wrapper').children = rails;
      }

      // repositioning the wrapper
    }, {
      key: "repositionWrapper",
      value: function repositionWrapper() {
        var wrapper = this.tag('Background.Slider.Wrapper');
        var sliderH = this.tag('Background.Slider').h;
        var currentWrapperY = wrapper.transition('y').targetvalue || wrapper.y;
        var currentFocus = wrapper.children[this.index];
        var currentFocusY = currentFocus.y + currentWrapperY;
        var currentFocusOuterHeight = currentFocus.y + currentFocus.h;
        if (currentFocusY < 0) {
          wrapper.setSmooth('y', -currentFocus.y);
        } else if (currentFocusOuterHeight > sliderH) {
          wrapper.setSmooth('y', sliderH - currentFocusOuterHeight);
        }
      }

      // handling up button click
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        if (this.index > -1) {
          this.index -= 1;
          if (this.index >= 0) {
            this.repositionWrapper();
          }
        }
      }

      // handling down button click
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        if (this.index < this.rowLength - 1) {
          this.index += 1;
          this.repositionWrapper();
        }
      }

      /**
         * This function will override the default behavior of the getFocused() method
         * 
         * @returns Return the child Component that this Component wishes to receive focus. Returning null 
         * or undefined tells the focus engine to not set focus on this Component at all.By default,
         * this Component's own instance is returned.
         */
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        // Hide and Show Navbar on scroll
        if (this.index <= 0) {
          this.patch({
            Navbar: {
              visible: true
            }
          });
        } else {
          this.patch({
            Navbar: {
              visible: false
            }
          });
        }

        // focus selection for Top Navigation and The content rails
        if (this.index >= 0) {
          return this.tag('Background.Slider.Wrapper').children[this.index];
        } else {
          return this.tag('Navbar');
        }
      }
    }], [{
      key: "_template",
      value:
      /**
       * This function is responsible for the creation and return of the UI template. This function 
       * takes  no parameters and returns the template.
       * 
       * @returns Template for the Application
       * 
       */
      function _template() {
        return {
          Navbar: {
            type: TopNav
          },
          Background: {
            w: 1920,
            h: 1080,
            color: theme.colors.primaryLight,
            rect: true,
            Slider: {
              zIndex: 2,
              w: 800,
              h: function h(_h) {
                return _h;
              },
              x: 400,
              y: 630,
              mount: 0.5,
              Wrapper: {}
            }
          }
        };
      }
    }]);
    return Home;
  }(Lightning$1.Component);

  var CollectionWrapper = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(CollectionWrapper, _Lightning$Component);
    var _super = _createSuper(CollectionWrapper);
    function CollectionWrapper() {
      _classCallCheck(this, CollectionWrapper);
      return _super.apply(this, arguments);
    }
    _createClass(CollectionWrapper, [{
      key: "_construct",
      value: function _construct() {
        this._direction = CollectionWrapper.DIRECTION.row;
        this._scrollTransitionSettings = this.stage.transitions.createSettings({});
        this._spacing = 0;
        this._autoResize = false;
        this._requestingItems = false;
        this._requestThreshold = 1;
        this._requestsEnabled = false;
        this._gcThreshold = 5;
        this._gcIncrement = 0;
        this._forceLoad = false;
        this.clear();
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this._updateScrollTransition();
      }
    }, {
      key: "_updateScrollTransition",
      value: function _updateScrollTransition() {
        var axis = this._direction === 1 ? 'y' : 'x';
        this.wrapper.transition(axis, this._scrollTransitionSettings);
        this._scrollTransition = this.wrapper.transition(axis);
      }
    }, {
      key: "_indexChanged",
      value: function _indexChanged(obj) {
        obj.previousIndex;
          var target = obj.index,
          max = obj.dataLength,
          mainIndex = obj.mainIndex,
          previousMainIndex = obj.previousMainIndex,
          lines = obj.lines;
        if (!isNaN(previousMainIndex) && !isNaN(mainIndex) && !isNaN(lines)) {
          target = mainIndex;
          max = lines;
        }
        if (this._requestsEnabled && !this._requestingItems) {
          if (target + this._requestThreshold >= max) {
            this.requestItems(false, obj);
          }
        }
        this._refocus();
        this.scrollCollectionWrapper(obj);
        if (obj.previousIndex !== obj.index) {
          this.signal('onIndexChanged', obj);
        }
      }
    }, {
      key: "requestItems",
      value: function requestItems() {
        var _this = this;
        var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (obj === undefined) {
          obj = {
            previous: 0,
            index: 0,
            max: 0
          };
        }
        this._requestingItems = true;
        this.signal('onRequestItems', obj).then(function (response) {
          if (response === false) {
            _this.enableRequests = false;
          }
          _this._requestingItems = false;
          if (reload) {
            _this.clear();
          }
          var type = typeof response;
          if (Array.isArray(response) || type === 'object' || type === 'string' || type === 'number') {
            _this.add(response);
          }
        });
      }
    }, {
      key: "setIndex",
      value: function setIndex(index) {
        var targetIndex = limitWithinRange(index, 0, this._items.length - 1);
        var previousIndex = this._index;
        this._index = targetIndex;
        this._indexChanged({
          previousIndex: previousIndex,
          index: targetIndex,
          dataLength: this._items.length
        });
        return previousIndex !== targetIndex;
      }
    }, {
      key: "clear",
      value: function clear() {
        this._uids = [];
        this._items = [];
        this._index = 0;
        if (this._scrollTransition) {
          this._scrollTransition.reset(0, 1);
        }
        if (this.wrapper) {
          var hadChildren = this.wrapper.children > 0;
          this.wrapper.patch({
            x: 0,
            y: 0,
            children: []
          });
          if (hadChildren) {
            this._collectGarbage(true);
          }
        }
      }
    }, {
      key: "add",
      value: function add(item) {
        this.addAt(item);
      }
    }, {
      key: "addAt",
      value: function addAt(item) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._items.length;
        if (index >= 0 && index <= this._items.length) {
          var _this$_items;
          if (!Array.isArray(item)) {
            item = [item];
          }
          var items = this._normalizeDataItems(item);
          (_this$_items = this._items).splice.apply(_this$_items, [index, 0].concat(_toConsumableArray(items)));
          this.plotItems();
          this.setIndex(this._index);
        } else {
          throw new Error('addAt: The index ' + index + ' is out of bounds ' + this._items.length);
        }
      }
    }, {
      key: "remove",
      value: function remove(target) {
        if (this.hasItems && target.assignedID) {
          var itemWrappers = this.itemWrappers;
          for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i];
            if (itemWrappers[i] && itemWrappers[i].component.isAlive) {
              item = itemWrappers[i].component;
            }
            if (target.assignedID === item.assignedID) {
              return this.removeAt(i);
            }
          }
        } else {
          throw new Error('remove: item not found');
        }
      }
    }, {
      key: "removeAt",
      value: function removeAt(index) {
        var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        if (index < 0 && index >= this._items.length) {
          throw new Error('removeAt: The index ' + index + ' is out of bounds ' + this._items.length);
        }
        var item = this._items[index];
        this._items.splice(index, amount);
        this.plotItems();
        return item;
      }
    }, {
      key: "reload",
      value: function reload(item) {
        this.clear();
        this.add(item);
      }
    }, {
      key: "plotItems",
      value: function plotItems(items, options) {
        //placeholder
      }
    }, {
      key: "reposition",
      value: function reposition() {
        var _this2 = this;
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 70;
        if (this._repositionDebounce) {
          clearTimeout(this._repositionDebounce);
        }
        this._repositionDebounce = setTimeout(function () {
          _this2.repositionItems();
        }, time);
      }
    }, {
      key: "repositionItems",
      value: function repositionItems() {
        //placeHolder
        this.signal('onItemsRepositioned');
      }
    }, {
      key: "up",
      value: function up() {
        return this._attemptNavigation(-1, 1);
      }
    }, {
      key: "down",
      value: function down() {
        return this._attemptNavigation(1, 1);
      }
    }, {
      key: "left",
      value: function left() {
        return this._attemptNavigation(-1, 0);
      }
    }, {
      key: "right",
      value: function right() {
        return this._attemptNavigation(1, 0);
      }
    }, {
      key: "first",
      value: function first() {
        return this.setIndex(0);
      }
    }, {
      key: "last",
      value: function last() {
        return this.setIndex(this._items.length - 1);
      }
    }, {
      key: "next",
      value: function next() {
        return this.setIndex(this._index + 1);
      }
    }, {
      key: "previous",
      value: function previous() {
        return this.setIndex(this._index - 1);
      }
    }, {
      key: "_attemptNavigation",
      value: function _attemptNavigation(shift, direction) {
        if (this.hasItems) {
          return this.navigate(shift, direction);
        }
        return false;
      }
    }, {
      key: "navigate",
      value: function navigate(shift) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._direction;
        if (direction !== this._direction) {
          return false;
        }
        return this.setIndex(this._index + shift);
      }
    }, {
      key: "scrollCollectionWrapper",
      value: function scrollCollectionWrapper(obj) {
        var previous = obj.previousIndex,
          target = obj.index,
          max = obj.dataLength,
          mainIndex = obj.mainIndex,
          previousMainIndex = obj.previousMainIndex,
          lines = obj.lines;
        if (!isNaN(previousMainIndex) && !isNaN(mainIndex) && !isNaN(lines)) {
          previous = previousMainIndex;
          target = mainIndex;
          max = lines;
        }
        var _this$_getPlotPropert = this._getPlotProperties(this._direction),
          directionIsRow = _this$_getPlotPropert.directionIsRow,
          main = _this$_getPlotPropert.main,
          mainDim = _this$_getPlotPropert.mainDim,
          mainMarginFrom = _this$_getPlotPropert.mainMarginFrom,
          mainMarginTo = _this$_getPlotPropert.mainMarginTo;
        var cw = this.currentItemWrapper;
        var bound = this[mainDim];
        if (bound === 0) {
          bound = directionIsRow ? 1920 : 1080;
        }
        var offset = Math.min(this.wrapper[main], this._scrollTransition && this._scrollTransition.targetValue || 0);
        var sizes = this._getItemSizes(cw);
        var marginFrom = sizes[mainMarginFrom] || sizes.margin || 0;
        var marginTo = sizes[mainMarginTo] || sizes.margin || 0;
        var scroll = this._scroll;
        if (!isNaN(scroll)) {
          if (scroll >= 0 && scroll <= 1) {
            scroll = bound * scroll - (cw[main] + cw[mainDim] * scroll);
          } else {
            scroll = scroll - cw[main];
          }
        } else if (typeof scroll === 'function') {
          scroll = scroll.apply(this, [cw, obj]);
        } else if (typeof scroll === 'object') {
          var _scroll = scroll,
            _scroll$jump = _scroll.jump,
            jump = _scroll$jump === void 0 ? false : _scroll$jump,
            _scroll$after = _scroll.after,
            after = _scroll$after === void 0 ? false : _scroll$after,
            _scroll$backward = _scroll.backward,
            backward = _scroll$backward === void 0 ? 0.0 : _scroll$backward,
            _scroll$forward = _scroll.forward,
            forward = _scroll$forward === void 0 ? 1.0 : _scroll$forward;
          if (jump) {
            var mod = target % jump;
            if (mod === 0) {
              scroll = marginFrom - cw[main];
            }
            if (mod === jump - 1) {
              var actualSize = marginFrom + cw[mainDim] + marginTo;
              scroll = mod * actualSize + marginFrom - cw[main];
            }
          } else if (after) {
            scroll = 0;
            if (target >= after - 1) {
              var _actualSize = marginFrom + cw[mainDim] + marginTo;
              scroll = (after - 1) * _actualSize + marginFrom - cw[main];
            }
          } else {
            var backwardBound = bound * this._normalizePixelToPercentage(backward, bound);
            var forwardBound = bound * this._normalizePixelToPercentage(forward, bound);
            if (target < max - 1 && previous < target && offset + cw[main] + cw[mainDim] > forwardBound) {
              scroll = forwardBound - (cw[main] + cw[mainDim]);
            } else if (target > 0 && target < previous && offset + cw[main] < backwardBound) {
              scroll = backwardBound - cw[main];
            } else if (target === max - 1) {
              scroll = bound - (cw[main] + cw[mainDim]);
            } else if (target === 0) {
              scroll = marginFrom - cw[main];
            }
          }
        } else if (isNaN(scroll)) {
          if (previous < target && offset + cw[main] + cw[mainDim] > bound) {
            scroll = bound - (cw[main] + cw[mainDim]);
          } else if (target < previous && offset + cw[main] < 0) {
            scroll = marginFrom - cw[main];
          }
        }
        if (this.active && !isNaN(scroll) && this._scrollTransition) {
          if (this._scrollTransition.isRunning()) {
            this._scrollTransition.reset(scroll, 0.05);
          } else {
            this._scrollTransition.start(scroll);
          }
        } else if (!isNaN(scroll)) {
          this.wrapper[main] = scroll;
        }
      }
    }, {
      key: "$childInactive",
      value: function $childInactive(_ref) {
        var child = _ref.child;
        if (typeof child === 'object') {
          var index = child.componentIndex;
          for (var key in this._items[index]) {
            if (child.component[key] !== undefined) {
              this._items[index][key] = child.component[key];
            }
          }
        }
        this._collectGarbage();
      }
    }, {
      key: "$getChildComponent",
      value: function $getChildComponent(_ref2) {
        var index = _ref2.index;
        return this._items[index];
      }
    }, {
      key: "_resizeWrapper",
      value: function _resizeWrapper(crossSize) {
        var obj = crossSize;
        if (!isNaN(crossSize)) {
          var _obj;
          var _this$_getPlotPropert2 = this._getPlotProperties(this._direction),
            main = _this$_getPlotPropert2.main,
            mainDim = _this$_getPlotPropert2.mainDim,
            crossDim = _this$_getPlotPropert2.crossDim;
          var lastItem = this.wrapper.childList.last;
          obj = (_obj = {}, _defineProperty(_obj, mainDim, lastItem[main] + lastItem[mainDim]), _defineProperty(_obj, crossDim, crossSize), _obj);
        }
        this.wrapper.patch(obj);
        if (this._autoResize) {
          this.patch(obj);
        }
      }
    }, {
      key: "_generateUniqueID",
      value: function _generateUniqueID() {
        var id = '';
        while (this._uids[id] || id === '') {
          id = Math.random().toString(36).substr(2, 9);
        }
        this._uids[id] = true;
        return id;
      }
    }, {
      key: "_getPlotProperties",
      value: function _getPlotProperties(direction) {
        var directionIsRow = direction === 0;
        return {
          directionIsRow: directionIsRow ? true : false,
          mainDirection: directionIsRow ? 'rows' : 'columns',
          main: directionIsRow ? 'x' : 'y',
          mainDim: directionIsRow ? 'w' : 'h',
          mainMarginTo: directionIsRow ? 'marginRight' : 'marginBottom',
          mainMarginFrom: directionIsRow ? 'marginLeft' : 'marginTop',
          crossDirection: !directionIsRow ? 'columns' : 'rows',
          cross: directionIsRow ? 'y' : 'x',
          crossDim: directionIsRow ? 'h' : 'w',
          crossMarginTo: directionIsRow ? 'marginBottom' : 'marginRight',
          crossMarginFrom: directionIsRow ? 'marginTop' : 'marginLeft'
        };
      }
    }, {
      key: "_getItemSizes",
      value: function _getItemSizes(item) {
        var itemType = item.type;
        if (item.component && item.component.__attached) {
          item = item.component;
        }
        return {
          w: item.w || itemType && itemType['width'],
          h: item.h || itemType && itemType['height'],
          margin: item.margin || itemType && itemType['margin'] || 0,
          marginLeft: item.marginLeft || itemType && itemType['marginLeft'],
          marginRight: item.marginRight || itemType && itemType['marginRight'],
          marginTop: item.marginTop || itemType && itemType['marginTop'],
          marginBottom: item.marginBottom || itemType && itemType['marginBottom']
        };
      }
    }, {
      key: "_collectGarbage",
      value: function _collectGarbage(immediate) {
        this._gcIncrement++;
        if (immediate || this.active && this._gcThreshold !== 0 && this._gcIncrement >= this._gcThreshold) {
          this._gcIncrement = 0;
          this.stage.gc();
        }
      }
    }, {
      key: "_normalizeDataItems",
      value: function _normalizeDataItems(array) {
        var _this3 = this;
        return array.map(function (item, index) {
          return _this3._normalizeDataItem(item) || index;
        }).filter(function (item) {
          if (!isNaN(item)) {
            console.warn("Item at index: ".concat(item, ", is not a valid item. Removing it from dataset"));
            return false;
          }
          return true;
        });
      }
    }, {
      key: "_normalizeDataItem",
      value: function _normalizeDataItem(item, index) {
        if (typeof item === 'string' || typeof item === 'number') {
          item = {
            label: item.toString()
          };
        }
        if (typeof item === 'object') {
          var id = this._generateUniqueID();
          return _objectSpread2({
            assignedID: id,
            type: this.itemType,
            collectionWrapper: this,
            isAlive: false
          }, item);
        }
        return index;
      }
    }, {
      key: "_normalizePixelToPercentage",
      value: function _normalizePixelToPercentage(value, max) {
        if (value && value > 1) {
          return value / max;
        }
        return value || 0;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        if (this.hasItems) {
          return this.currentItemWrapper;
        }
        return this;
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return this.right();
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return this.left();
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        return this.up();
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        return this.down();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        if (this._repositionDebounce) {
          clearTimeout(this._repositionDebounce);
        }
        this._collectGarbage(true);
      }
    }, {
      key: "forceLoad",
      get: function get() {
        return this._forceLoad;
      },
      set: function set(bool) {
        this._forceLoad = bool;
      }
    }, {
      key: "requestingItems",
      get: function get() {
        return this._requestingItems;
      }
    }, {
      key: "requestThreshold",
      get: function get() {
        return this._requestThreshold;
      },
      set: function set(num) {
        this._requestThreshold = num;
      }
    }, {
      key: "enableRequests",
      get: function get() {
        return this._requestsEnabled;
      },
      set: function set(bool) {
        this._requestsEnabled = bool;
      }
    }, {
      key: "gcThreshold",
      get: function get() {
        return this._gcThreshold;
      },
      set: function set(num) {
        this._gcThreshold = num;
      }
    }, {
      key: "wrapper",
      get: function get() {
        return this.tag('Wrapper');
      }
    }, {
      key: "hasItems",
      get: function get() {
        return this.wrapper && this.wrapper.children && this.wrapper.children.length > 0;
      }
    }, {
      key: "currentItemWrapper",
      get: function get() {
        return this.wrapper.children[this._index];
      }
    }, {
      key: "currentItem",
      get: function get() {
        return this.currentItemWrapper && this.currentItemWrapper.component || undefined;
      }
    }, {
      key: "direction",
      get: function get() {
        return Object.keys(CollectionWrapper.DIRECTION)[this._direction];
      },
      set: function set(string) {
        this._direction = CollectionWrapper.DIRECTION[string] || CollectionWrapper.DIRECTION.row;
      }
    }, {
      key: "items",
      get: function get() {
        var itemWrappers = this.itemWrappers;
        return this._items.map(function (item, index) {
          if (itemWrappers[index] && itemWrappers[index].component.isAlive) {
            return itemWrappers[index].component;
          }
          return item;
        });
      },
      set: function set(array) {
        this.clear();
        this.add(array);
      }
    }, {
      key: "length",
      get: function get() {
        return this._items.length;
      }
    }, {
      key: "index",
      get: function get() {
        return this._index;
      },
      set: function set(index) {
        this.setIndex(index);
      }
    }, {
      key: "itemWrappers",
      get: function get() {
        return this.wrapper.children;
      }
    }, {
      key: "scrollTransition",
      get: function get() {
        return this._scrollTransition;
      },
      set: function set(obj) {
        this._scrollTransitionSettings.patch(obj);
        if (this.active) {
          this._updateScrollTransition();
        }
      }
    }, {
      key: "scroll",
      get: function get() {
        return this._scroll;
      },
      set: function set(value) {
        this._scroll = value;
      }
    }, {
      key: "autoResize",
      get: function get() {
        return this._autoResize;
      },
      set: function set(bool) {
        this._autoResize = bool;
      }
    }, {
      key: "spacing",
      get: function get() {
        return this._spacing;
      },
      set: function set(num) {
        this._spacing = num;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Wrapper: {}
        };
      }
    }, {
      key: "itemType",
      get: function get() {
        return undefined;
      }
    }]);
    return CollectionWrapper;
  }(Lightning$1.Component);
  CollectionWrapper.DIRECTION = {
    row: 0,
    column: 1
  };

  var Cursor = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Cursor, _Lightning$Component);
    var _super = _createSuper(Cursor);
    function Cursor() {
      _classCallCheck(this, Cursor);
      return _super.apply(this, arguments);
    }
    _createClass(Cursor, [{
      key: "_construct",
      value: function _construct() {
        this._blink = true;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._blinkAnimation = this.animation({
          duration: 1,
          repeat: -1,
          actions: [{
            p: 'alpha',
            v: {
              0: 0,
              0.5: 1,
              1: 0
            }
          }]
        });
      }
    }, {
      key: "show",
      value: function show() {
        if (this._blink) {
          this._blinkAnimation.start();
        } else {
          this.alpha = 1;
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this._blink) {
          this._blinkAnimation.stop();
        } else {
          this.alpha = 0;
        }
      }
    }, {
      key: "blink",
      get: function get() {
        return this._blink;
      },
      set: function set(bool) {
        this._blink = bool;
        if (this.active) {
          if (bool) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 0
        };
      }
    }]);
    return Cursor;
  }(Lightning$1.Component);

  var ItemWrapper = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(ItemWrapper, _Lightning$Component);
    var _super = _createSuper(ItemWrapper);
    function ItemWrapper() {
      _classCallCheck(this, ItemWrapper);
      return _super.apply(this, arguments);
    }
    _createClass(ItemWrapper, [{
      key: "create",
      value: function create() {
        if (this.children.length > 0) {
          return;
        }
        var component = this.fireAncestors('$getChildComponent', {
          index: this.componentIndex
        });
        component.isAlive = true;
        var w = this.w,
          h = this.h,
          margin = this.margin,
          marginTop = this.marginTop,
          marginBottom = this.marginBottom,
          marginRight = this.marginRight,
          marginLeft = this.marginLeft;
        this.children = [_objectSpread2(_objectSpread2({}, component), {}, {
          w: w,
          h: h,
          margin: margin,
          marginTop: marginTop,
          marginRight: marginRight,
          marginLeft: marginLeft,
          marginBottom: marginBottom
        })];
        if (this.hasFocus()) {
          this._refocus();
        }
      }
    }, {
      key: "component",
      get: function get() {
        return this.children[0] || this.fireAncestors('$getChildComponent', {
          index: this.componentIndex
        });
      }
    }, {
      key: "_setup",
      value: function _setup() {
        if (this.forceLoad) {
          this.create();
        }
      }
    }, {
      key: "_active",
      value: function _active() {
        this.create();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        if (!this.forceLoad) {
          this.children[0].isAlive = false;
          this.fireAncestors('$childInactive', {
            child: this
          });
          this.childList.clear();
        }
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.children && this.children[0] || this;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          clipbox: true
        };
      }
    }]);
    return ItemWrapper;
  }(Lightning$1.Component);

  var KeyWrapper = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(KeyWrapper, _Lightning$Component);
    var _super = _createSuper(KeyWrapper);
    function KeyWrapper() {
      _classCallCheck(this, KeyWrapper);
      return _super.apply(this, arguments);
    }
    _createClass(KeyWrapper, [{
      key: "_update",
      value: function _update() {
        var currentKey = this.children && this.children[0];
        if (currentKey && currentKey.action === this._key.data.action) {
          currentKey.patch(_objectSpread2({}, this._key));
        } else {
          this.children = [_objectSpread2({
            type: this._key.keyType
          }, this._key)];
        }
        if (this.hasFocus()) {
          this._refocus();
        }
      }
    }, {
      key: "key",
      get: function get() {
        return this._key;
      },
      set: function set(obj) {
        this._key = obj;
        if (this.active) {
          this._update();
        }
      }
    }, {
      key: "_active",
      value: function _active() {
        this._update();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        this.childList.clear();
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.children && this.children[0] || this;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          clipbox: true
        };
      }
    }]);
    return KeyWrapper;
  }(Lightning$1.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var limitWithinRange = function limitWithinRange(num, min, max) {
    return Math.min(Math.max(num, min), max);
  };
  var defineProperties = function defineProperties(component, props) {
    props.forEach(function (prop) {
      Object.defineProperty(component, prop, {
        set: function set(value) {
          component["_".concat(prop)] = value;
        },
        get: function get() {
          return component["_".concat(prop)];
        }
      });
    });
  };
  var findIndexOfObject = function findIndexOfObject(array, search, targetProp) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][targetProp] === search) {
        return i;
      }
    }
    return -1;
  };

  var InputField = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(InputField, _Lightning$Component);
    var _super = _createSuper(InputField);
    function InputField() {
      _classCallCheck(this, InputField);
      return _super.apply(this, arguments);
    }
    _createClass(InputField, [{
      key: "_construct",
      value: function _construct() {
        this._input = '';
        this._previousInput = '';
        this._description = '';
        this._cursorX = 0;
        this._cursorIndex = 0;
        this._passwordMask = '*';
        this._passwordMode = false;
        this._autoHideCursor = true;
        this._labelPositionStatic = true;
        this._maxLabelWidth = 0;
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this = this;
        this.tag('PreLabel').on('txLoaded', function () {
          _this._labelTxLoaded();
        });
        this.tag('PostLabel').on('txLoaded', function () {
          _this._labelTxLoaded;
        });
      }
    }, {
      key: "onInputChanged",
      value: function onInputChanged(_ref) {
        var _ref$input = _ref.input,
          input = _ref$input === void 0 ? '' : _ref$input;
        var targetIndex = Math.max(input.length - this._input.length + this._cursorIndex, 0);
        this._input = input;
        this._update(targetIndex);
      }
    }, {
      key: "toggleCursor",
      value: function toggleCursor() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this._cursorVisible;
        this._cursorVisible = bool;
        this.cursor[bool ? 'show' : 'hide']();
      }
    }, {
      key: "_labelTxLoaded",
      value: function _labelTxLoaded() {
        var preLabel = this.tag('PreLabel');
        var cursor = this.tag('Cursor');
        var postLabel = this.tag('PostLabel');
        this.h = preLabel.renderHeight || postLabel.renderHeight;
        cursor.x = preLabel.renderWidth + this._cursorX;
        postLabel.x = cursor.x + cursor.w * (1 - cursor.mountX);
        this.setSmooth('x', this._labelOffset);
        if (!this.autoHideCursor) {
          this.toggleCursor(true);
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var hasInput = this._input.length > 0;
        var pre = this._description + '';
        var post = '';
        if (hasInput) {
          pre = this._input.substring(0, index);
          post = this._input.substring(index, this._input.length);
          if (this._passwordMode) {
            pre = this._passwordMask.repeat(pre.length);
            post = this._passwordMask.repeat(post.length);
          }
          this.toggleCursor(true);
        } else if (this._autoHideCursor) {
          this.toggleCursor(false);
        }
        this.patch({
          PreLabel: {
            text: {
              text: pre
            }
          },
          PostLabel: {
            text: {
              text: post
            }
          }
        });
        if (this.h === 0) {
          this.tag('PreLabel').loadTexture();
          this.h = this.tag('PreLabel').renderHeight;
        }
        this._cursorIndex = index;
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        this._update(Math.min(this._input.length, this._cursorIndex + 1));
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        this._update(Math.max(0, this._cursorIndex - 1));
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this._labelTxLoaded();
        this._update();
      }
    }, {
      key: "input",
      get: function get() {
        return this._input;
      }
    }, {
      key: "hasInput",
      get: function get() {
        return this._input.length > 0;
      }
    }, {
      key: "cursorIndex",
      get: function get() {
        return this._cursorIndex;
      }
    }, {
      key: "inputText",
      get: function get() {
        return this._inputText;
      },
      set: function set(obj) {
        this._inputText = obj;
        this.tag('PreLabel').patch({
          text: obj
        });
        this.tag('PostLabel').patch({
          text: obj
        });
      }
    }, {
      key: "description",
      get: function get() {
        return this._description;
      },
      set: function set(str) {
        this._description = str;
      }
    }, {
      key: "cursor",
      get: function get() {
        return this.tag('Cursor');
      },
      set: function set(obj) {
        if (obj.x) {
          this._cursorX = obj.x;
          delete obj.x;
        }
        this.tag('Cursor').patch(obj);
      }
    }, {
      key: "cursorVisible",
      get: function get() {
        return this._cursorVisible;
      }
    }, {
      key: "autoHideCursor",
      get: function get() {
        return this._autoHideCursor;
      },
      set: function set(bool) {
        this._autoHideCursor = bool;
      }
    }, {
      key: "passwordMode",
      get: function get() {
        return this._passwordMode;
      },
      set: function set(val) {
        this._passwordMode = val;
      }
    }, {
      key: "passwordMask",
      set: function set(str) {
        this._passwordMask = str;
      }
    }, {
      key: "passwordmask",
      get: function get() {
        return this._passwordMask;
      }

      // the width at which the text start scrolling
    }, {
      key: "maxLabelWidth",
      get: function get() {
        return this._maxLabelWidth;
      },
      set: function set(val) {
        this._maxLabelWidth = val;
      }
    }, {
      key: "labelPositionStatic",
      get: function get() {
        return this._labelPositionStatic;
      },
      set: function set(val) {
        this._labelPositionStatic = val;
      }
    }, {
      key: "_labelOffset",
      get: function get() {
        if (this._labelPositionStatic) return 0;
        var offset = this.maxLabelWidth - this.tag('Cursor').x;
        return offset < 0 ? offset : 0;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          PreLabel: {
            renderOffscreen: true
          },
          PostLabel: {
            renderOffscreen: true
          },
          Cursor: {
            type: Cursor,
            rect: true,
            w: 4,
            h: 54,
            x: 0,
            y: 0
          }
        };
      }
    }]);
    return InputField;
  }(Lightning$1.Component);

  var Key$1 = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Key, _Lightning$Component);
    var _super = _createSuper(Key);
    function Key() {
      _classCallCheck(this, Key);
      return _super.apply(this, arguments);
    }
    _createClass(Key, [{
      key: "_construct",
      value: function _construct() {
        this._backgroundColors = {};
        this._labelColors = {};
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      },
      set: function set(obj) {
        this._data = obj;
        this._update();
      }
    }, {
      key: "labelText",
      get: function get() {
        return this._labelText;
      },
      set: function set(obj) {
        this._labelText = obj;
        this.tag('Label').patch({
          text: obj
        });
      }
    }, {
      key: "label",
      get: function get() {
        return this.tag('Label');
      },
      set: function set(obj) {
        this.tag('Label').patch(obj);
      }
    }, {
      key: "labelColors",
      get: function get() {
        return this._labelColors;
      },
      set: function set(obj) {
        this._labelColors = obj;
        this._update();
      }
    }, {
      key: "backgroundColors",
      get: function get() {
        return this._backgroundColors;
      },
      set: function set(obj) {
        this._backgroundColors = obj;
        this._update();
      }
    }, {
      key: "background",
      get: function get() {
        return this.tag('Background');
      },
      set: function set(obj) {
        this.tag('Background').patch(obj);
      }
    }, {
      key: "_update",
      value: function _update() {
        if (!this.active) {
          return;
        }
        var _this$_data$label = this._data.label,
          label = _this$_data$label === void 0 ? '' : _this$_data$label;
        var hasFocus = this.hasFocus();
        var _this$_backgroundColo = this._backgroundColors,
          focused = _this$_backgroundColo.focused,
          _this$_backgroundColo2 = _this$_backgroundColo.unfocused,
          unfocused = _this$_backgroundColo2 === void 0 ? 0xff000000 : _this$_backgroundColo2;
        var _this$_labelColors = this._labelColors,
          labelFocused = _this$_labelColors.focused,
          _this$_labelColors$un = _this$_labelColors.unfocused,
          labelUnfocused = _this$_labelColors$un === void 0 ? 0xffffffff : _this$_labelColors$un;
        this.patch({
          Background: {
            color: hasFocus && focused ? focused : unfocused
          },
          Label: {
            text: {
              text: label
            },
            color: hasFocus && labelFocused ? labelFocused : labelUnfocused
          }
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this._update();
      }
    }, {
      key: "_focus",
      value: function _focus() {
        var _this$_backgroundColo3 = this._backgroundColors,
          focused = _this$_backgroundColo3.focused,
          _this$_backgroundColo4 = _this$_backgroundColo3.unfocused,
          unfocused = _this$_backgroundColo4 === void 0 ? 0xff000000 : _this$_backgroundColo4;
        var _this$_labelColors2 = this._labelColors,
          labelFocused = _this$_labelColors2.focused,
          _this$_labelColors2$u = _this$_labelColors2.unfocused,
          labelUnfocused = _this$_labelColors2$u === void 0 ? 0xffffffff : _this$_labelColors2$u;
        this.patch({
          Background: {
            smooth: {
              color: focused || unfocused
            }
          },
          Label: {
            smooth: {
              color: labelFocused || labelUnfocused
            }
          }
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        var _this$_backgroundColo5 = this._backgroundColors.unfocused,
          unfocused = _this$_backgroundColo5 === void 0 ? 0xff000000 : _this$_backgroundColo5;
        var _this$_labelColors$un2 = this._labelColors.unfocused,
          labelUnfocused = _this$_labelColors$un2 === void 0 ? 0xffffffff : _this$_labelColors$un2;
        this.patch({
          Background: {
            smooth: {
              color: unfocused
            }
          },
          Label: {
            smooth: {
              color: labelUnfocused
            }
          }
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Background: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            rect: true
          },
          Label: {
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            }
          }
        };
      }
    }, {
      key: "width",
      get: function get() {
        return 80;
      }
    }, {
      key: "height",
      get: function get() {
        return 80;
      }
    }]);
    return Key;
  }(Lightning$1.Component);

  var Keyboard = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Keyboard, _Lightning$Component);
    var _super = _createSuper(Keyboard);
    function Keyboard() {
      _classCallCheck(this, Keyboard);
      return _super.apply(this, arguments);
    }
    _createClass(Keyboard, [{
      key: "_construct",
      value: function _construct() {
        this._input = '';
        this._inputField = undefined;
        this._maxCharacters = 56;
        this.navigationWrapAround = false;
        this.resetFocus();
      }
    }, {
      key: "resetFocus",
      value: function resetFocus() {
        this._columnIndex = 0;
        this._rowIndex = 0;
        this._previousKey = null;
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this._keys = this.tag('Keys');
        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this = this;
        var _this$_config = this._config,
          layouts = _this$_config.layouts,
          _this$_config$buttonT = _this$_config.buttonTypes,
          buttonTypes = _this$_config$buttonT === void 0 ? {} : _this$_config$buttonT,
          _this$_config$styling = _this$_config.styling,
          styling = _this$_config$styling === void 0 ? {} : _this$_config$styling;
        if (!this._layout || this._layout && layouts[this._layout] === undefined) {
          console.error("Configured layout \"".concat(this._layout, "\" does not exist. Picking first available: \"").concat(Object.keys(layouts)[0], "\""));
          this._layout = Object.keys(layouts)[0];
        }
        var _styling$horizontalSp = styling.horizontalSpacing,
          horizontalSpacing = _styling$horizontalSp === void 0 ? 0 : _styling$horizontalSp,
          _styling$verticalSpac = styling.verticalSpacing,
          verticalSpacing = _styling$verticalSpac === void 0 ? 0 : _styling$verticalSpac,
          _styling$align = styling.align,
          align = _styling$align === void 0 ? 'left' : _styling$align;
        var rowPosition = 0;
        var isEvent = /^[A-Z][A-Za-z0-9]{1}/;
        var hasLabel = /\:/;
        if (buttonTypes.default === undefined) {
          buttonTypes.default = Key$1;
        }
        this._keys.children = layouts[this._layout].map(function (row, rowIndex) {
          var _ref = styling["Row".concat(rowIndex + 1)] || {},
            _ref$x = _ref.x,
            x = _ref$x === void 0 ? 0 : _ref$x,
            _ref$margin = _ref.margin,
            margin = _ref$margin === void 0 ? 0 : _ref$margin,
            marginRight = _ref.marginRight,
            marginLeft = _ref.marginLeft,
            marginTop = _ref.marginTop,
            marginBottom = _ref.marginBottom,
            _ref$spacing = _ref.spacing,
            rowHorizontalSpacing = _ref$spacing === void 0 ? horizontalSpacing || 0 : _ref$spacing,
            _ref$align = _ref.align,
            rowAlign = _ref$align === void 0 ? align : _ref$align;
          var keyPosition = 0;
          var rowHeight = 0;
          var rowKeys = row.map(function (key, keyIndex) {
            var origin = key;
            var keyType = buttonTypes.default;
            var action = 'Input';
            var label = key;
            if (isEvent.test(key)) {
              if (hasLabel.test(key)) {
                key = key.split(':');
                label = key[1].toString();
                key = key[0];
              }
              if (buttonTypes[key]) {
                keyType = buttonTypes[key];
                action = key.action || key;
              }
            }
            var keySpacing = keyType.margin || keyType.type.margin;
            var _keyType = keyType,
              _keyType$w = _keyType.w,
              w = _keyType$w === void 0 ? keyType.type.width || 0 : _keyType$w,
              _keyType$h = _keyType.h,
              h = _keyType$h === void 0 ? keyType.type.height || 0 : _keyType$h,
              _keyType$marginLeft = _keyType.marginLeft,
              marginLeft = _keyType$marginLeft === void 0 ? keyType.type.marginLeft || keySpacing || 0 : _keyType$marginLeft,
              _keyType$marginRight = _keyType.marginRight,
              marginRight = _keyType$marginRight === void 0 ? keyType.type.marginRight || keySpacing || rowHorizontalSpacing : _keyType$marginRight;
            rowHeight = h > rowHeight ? h : rowHeight;
            var currentPosition = keyPosition + marginLeft;
            keyPosition += marginLeft + w + marginRight;
            return {
              ref: "Key-{".concat(keyIndex + 1, "}"),
              type: KeyWrapper,
              keyboard: _this,
              x: currentPosition,
              w: w,
              h: h,
              key: _objectSpread2({
                data: {
                  origin: origin,
                  key: key,
                  label: label,
                  action: action
                },
                w: w,
                h: h
              }, keyType)
            };
          });
          var rowOffset = x + (marginLeft || margin);
          var rowMount = 0;
          if (_this.w && rowAlign === 'center') {
            rowOffset = _this.w / 2;
            rowMount = 0.5;
          }
          if (_this.w && rowAlign === 'right') {
            rowOffset = _this.w - (marginRight || margin);
            rowMount = 1;
          }
          var currentPosition = rowPosition + (marginTop || margin);
          rowPosition = currentPosition + rowHeight + (marginBottom || margin || verticalSpacing);
          return {
            ref: "Row-".concat(rowIndex + 1),
            x: rowOffset,
            mountX: rowMount,
            w: keyPosition,
            y: currentPosition,
            children: rowKeys
          };
        });
        this._refocus();
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.currentKeyWrapper || this;
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return this.navigate('row', 1);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return this.navigate('row', -1);
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        return this.navigate('column', -1);
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        return this.navigate('column', 1);
      }
    }, {
      key: "_handleKey",
      value: function _handleKey(_ref2) {
        var key = _ref2.key,
          _ref2$code = _ref2.code,
          code = _ref2$code === void 0 ? 'CustomKey' : _ref2$code;
        if (code === 'Backspace' && this._input.length === 0) {
          return false;
        }
        if (key === ' ') {
          key = 'Space';
        }
        var targetFound = this._findKey(key);
        if (targetFound) {
          this._handleEnter();
        }
        return targetFound;
      }
    }, {
      key: "_findKey",
      value: function _findKey(str) {
        var rows = this._config.layouts[this._layout];
        var i = 0,
          j = 0;
        for (; i < rows.length; i++) {
          for (j = 0; j < rows[i].length; j++) {
            var key = rows[i][j];
            if (str.length > 1 && key.indexOf(str) > -1 || key.toUpperCase() === str.toUpperCase()) {
              this._rowIndex = i;
              this._columnIndex = j;
              return true;
            }
          }
        }
        return false;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var _this$currentKey$data = this.currentKey.data,
          origin = _this$currentKey$data.origin,
          action = _this$currentKey$data.action;
        var event = {
          index: this._input.length,
          key: origin
        };
        if (this._inputField && this._inputField.cursorIndex) {
          event.index = this._inputField.cursorIndex;
        }
        if (action !== 'Input') {
          var split = event.key.split(':');
          var call = "on".concat(split[0]);
          var eventFunction = this[call];
          event.key = split[1];
          if (eventFunction && eventFunction.apply && eventFunction.call) {
            eventFunction.call(this, event);
          }
          this.signal(call, _objectSpread2({
            input: this._input,
            keyboard: this
          }, event));
        } else {
          this.addAt(event.key, event.index);
        }
      }
    }, {
      key: "_changeInput",
      value: function _changeInput(input) {
        if (input.length > this._maxCharacters) {
          return;
        }
        var eventData = {
          previousInput: this._input,
          input: this._input = input
        };
        if (this._inputField && this._inputField.onInputChanged) {
          this._inputField.onInputChanged(eventData);
        }
        this.signal('onInputChanged', eventData);
      }
    }, {
      key: "focus",
      value: function focus(str) {
        this._findKey(str);
      }
    }, {
      key: "add",
      value: function add(str) {
        this._changeInput(this._input + str);
      }
    }, {
      key: "addAt",
      value: function addAt(str, index) {
        if (index > this._input.length - 1) {
          this.add(str);
        } else if (index > -1) {
          this._changeInput(this._input.substring(0, index) + str + this._input.substring(index, this._input.length));
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        this._changeInput(this._input.substring(0, this._input.length - 1));
      }
    }, {
      key: "removeAt",
      value: function removeAt(index) {
        if (index > this._input.length - 1) {
          this.remove();
        } else if (index > -1) {
          this._changeInput(this._input.substring(0, index - 1) + this._input.substring(index, this._input.length));
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        this._changeInput('');
      }
    }, {
      key: "layout",
      value: function layout(key) {
        if (key === this._layout) {
          return;
        }
        this._layout = key;
        if (this.attached) {
          this.resetFocus();
          this._update();
        }
      }
    }, {
      key: "inputField",
      value: function inputField(component) {
        if (component && component.isComponent) {
          this._rowIndex = 0;
          this._columnIndex = 0;
          this._input = component.input !== undefined ? component.input : '';
          this._inputField = component;
        } else {
          this._rowIndex = 0;
          this._columnIndex = 0;
          this._input = '';
          this._inputField = undefined;
        }
      }
    }, {
      key: "navigate",
      value: function navigate(direction, shift) {
        var targetIndex = (direction === 'row' ? this._columnIndex : this._rowIndex) + shift;
        var currentRow = this.rows[this._rowIndex];
        if (direction === 'row' && targetIndex > -1 && targetIndex < currentRow.children.length) {
          this._previous = null;
          return this._columnIndex = targetIndex;
        } else if (direction === 'row' && this.navigationWrapAround) {
          this._previous = null;
          var rowLen = currentRow.children.length;
          return this._columnIndex = (targetIndex % rowLen + rowLen) % rowLen;
        }
        if (direction === 'column' && targetIndex > -1 && targetIndex < this.rows.length) {
          var currentRowIndex = this._rowIndex;
          var currentColumnIndex = this._columnIndex;
          if (this._previous && this._previous.row === targetIndex) {
            var tmp = this._previous.column;
            this._previous.column = this._columnIndex;
            this._columnIndex = tmp;
            this._rowIndex = this._previous.row;
          } else {
            var targetRow = this.rows[targetIndex];
            var currentKey = this.currentKeyWrapper;
            var _currentRow = this.rows[this._rowIndex];
            var currentX = _currentRow.x - _currentRow.w * _currentRow.mountX + currentKey.x;
            var m = targetRow.children.map(function (key) {
              var keyX = targetRow.x - targetRow.w * targetRow.mountX + key.x;
              if (keyX <= currentX && currentX < keyX + key.w) {
                return keyX + key.w - currentX;
              }
              if (keyX >= currentX && keyX <= currentX + currentKey.w) {
                return currentX + currentKey.w - keyX;
              }
              return -1;
            });
            var acc = -1;
            var t = -1;
            for (var i = 0; i < m.length; i++) {
              if (m[i] === -1 && acc > -1) {
                break;
              }
              if (m[i] > acc) {
                acc = m[i];
                t = i;
              }
            }
            if (t > -1) {
              this._rowIndex = targetIndex;
              this._columnIndex = t;
            } // if no next row found and wraparound is on, loop back to first row
            else if (this.navigationWrapAround) {
              this._columnIndex = Math.min(this.rows[0].children.length - 1, this._columnIndex);
              return this._rowIndex = 0;
            }
          }
          if (this._rowIndex !== currentRowIndex) {
            this._previous = {
              column: currentColumnIndex,
              row: currentRowIndex
            };
            return this._rowIndex = targetIndex;
          }
        } else if (direction === 'column' && this.navigationWrapAround) {
          this._previous = {
            column: this._columnIndex,
            row: this._rowIndex
          };
          var nrRows = this.rows.length;
          this._rowIndex = (targetIndex % nrRows + nrRows) % nrRows;
          this._columnIndex = Math.min(this.rows[this._rowIndex].children.length - 1, this._columnIndex);
        }
        return false;
      }
    }, {
      key: "onSpace",
      value: function onSpace(_ref3) {
        var index = _ref3.index;
        this.addAt(' ', index);
      }
    }, {
      key: "onBackspace",
      value: function onBackspace(_ref4) {
        var index = _ref4.index;
        this.removeAt(index);
      }
    }, {
      key: "onClear",
      value: function onClear() {
        this.clear();
      }
    }, {
      key: "onLayout",
      value: function onLayout(_ref5) {
        var key = _ref5.key;
        this.layout(key);
      }
    }, {
      key: "config",
      get: function get() {
        return this._config;
      },
      set: function set(obj) {
        this._config = obj;
        if (this.active) {
          this._update();
        }
      }
    }, {
      key: "currentInputField",
      get: function get() {
        return this._inputField;
      },
      set: function set(component) {
        this.inputField(component);
      }
    }, {
      key: "currentLayout",
      get: function get() {
        return this._layout;
      },
      set: function set(str) {
        this.layout(str);
      }
    }, {
      key: "maxCharacters",
      get: function get() {
        return this._maxCharacters;
      },
      set: function set(num) {
        this._maxCharacters = num;
      }
    }, {
      key: "rows",
      get: function get() {
        return this._keys && this._keys.children;
      }
    }, {
      key: "currentKeyWrapper",
      get: function get() {
        return this.rows && this.rows[this._rowIndex].children[this._columnIndex];
      }
    }, {
      key: "currentKey",
      get: function get() {
        return this.currentKeyWrapper && this.currentKeyWrapper.key;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Keys: {
            w: function w(_w) {
              return _w;
            }
          }
        };
      }
    }]);
    return Keyboard;
  }(Lightning$1.Component);

  var List = /*#__PURE__*/function (_CollectionWrapper) {
    _inherits(List, _CollectionWrapper);
    var _super = _createSuper(List);
    function List() {
      _classCallCheck(this, List);
      return _super.apply(this, arguments);
    }
    _createClass(List, [{
      key: "plotItems",
      value: function plotItems() {
        var _this = this;
        var items = this._items;
        var wrapper = this.wrapper;
        var _this$_getPlotPropert = this._getPlotProperties(this._direction),
          directionIsRow = _this$_getPlotPropert.directionIsRow,
          main = _this$_getPlotPropert.main,
          mainDim = _this$_getPlotPropert.mainDim,
          mainMarginTo = _this$_getPlotPropert.mainMarginTo,
          mainMarginFrom = _this$_getPlotPropert.mainMarginFrom,
          cross = _this$_getPlotPropert.cross,
          crossDim = _this$_getPlotPropert.crossDim;
        var crossPos = 0,
          crossSize = 0,
          position = 0;
        var animateItems = [];
        var viewboundMain = directionIsRow ? 1920 : 1080;
        var viewboundCross = directionIsRow ? 1080 : 1920;
        var renderContext = this.core.renderContext;
        var newChildren = items.map(function (item, index) {
          var _objectSpread2$1;
          var sizes = _this._getItemSizes(item);
          position += sizes[mainMarginFrom] || sizes.margin || 0;
          if (crossSize < sizes[crossDim]) {
            crossSize = sizes[crossDim];
          }
          var ref = "IW-".concat(item.assignedID);
          var mainPos = position;
          crossPos = item[cross] || crossPos;
          var tmp = mainPos;
          var tcp = crossPos;
          var existingItemWrapper = wrapper.tag(ref);
          if (existingItemWrapper && (existingItemWrapper.active && (crossPos !== existingItemWrapper[cross] || mainPos !== existingItemWrapper[main]) || !existingItemWrapper.active && (renderContext["p".concat(main)] + wrapper[main] + mainPos <= viewboundMain || renderContext["p".concat(cross)] + wrapper[cross] + crossPos <= viewboundCross))) {
            tmp = existingItemWrapper[main];
            tcp = existingItemWrapper[cross];
            animateItems.push(index);
          }
          position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || _this._spacing);
          return _objectSpread2(_objectSpread2({
            ref: ref,
            type: ItemWrapper,
            componentIndex: index,
            forceLoad: _this._forceLoad
          }, sizes), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, "assigned".concat(main.toUpperCase()), mainPos), _defineProperty(_objectSpread2$1, "assigned".concat(cross.toUpperCase()), crossPos), _defineProperty(_objectSpread2$1, main, tmp), _defineProperty(_objectSpread2$1, cross, tcp), _objectSpread2$1));
        });
        wrapper.children = newChildren;
        animateItems.forEach(function (index) {
          var item = wrapper.children[index];
          item.patch({
            smooth: {
              x: item.assignedX,
              y: item.assignedY
            }
          });
        });
        this._resizeWrapper(crossSize);
      }
    }, {
      key: "repositionItems",
      value: function repositionItems() {
        var _this2 = this;
        var wrapper = this.wrapper;
        if (!wrapper && wrapper.children.length) {
          return true;
        }
        var _this$_getPlotPropert2 = this._getPlotProperties(this._direction),
          main = _this$_getPlotPropert2.main,
          mainDim = _this$_getPlotPropert2.mainDim,
          mainMarginTo = _this$_getPlotPropert2.mainMarginTo,
          mainMarginFrom = _this$_getPlotPropert2.mainMarginFrom,
          cross = _this$_getPlotPropert2.cross,
          crossDim = _this$_getPlotPropert2.crossDim;
        var crossPos = 0,
          crossSize = 0,
          position = 0;
        wrapper.children.forEach(function (item) {
          var _objectSpread3;
          var sizes = _this2._getItemSizes(item);
          position += sizes[mainMarginFrom] || sizes.margin || 0;
          crossPos = item[cross] || crossPos;
          if (crossSize < sizes[crossDim]) {
            crossSize = sizes[crossDim];
          }
          var mainPos = position;
          position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || _this2.spacing);
          item.patch(_objectSpread2((_objectSpread3 = {}, _defineProperty(_objectSpread3, "assigned".concat(main.toUpperCase()), mainPos), _defineProperty(_objectSpread3, "assigned".concat(cross.toUpperCase()), 0), _defineProperty(_objectSpread3, main, mainPos), _defineProperty(_objectSpread3, cross, crossPos), _objectSpread3), sizes));
        });
        this._resizeWrapper(crossSize);
        _get(_getPrototypeOf(List.prototype), "repositionItems", this).call(this);
      }
    }]);
    return List;
  }(CollectionWrapper);

  var ScrollingLabel = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(ScrollingLabel, _Lightning$Component);
    var _super = _createSuper(ScrollingLabel);
    function ScrollingLabel() {
      _classCallCheck(this, ScrollingLabel);
      return _super.apply(this, arguments);
    }
    _createClass(ScrollingLabel, [{
      key: "_construct",
      value: function _construct() {
        this._autoStart = true;
        this._scrollAnimation = false;
        this._fade = 30;
        this._spacing = 30;
        this._label = {};
        this._align = 'left';
        this._animationSettings = {
          delay: 0.7,
          repeat: -1,
          stopMethod: 'immediate'
        };
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this = this;
        var label = this.tag('Label');
        label.on('txLoaded', function () {
          _this._update(label);
          _this._updateAnimation(label);
          if (_this._autoStart) {
            _this.start();
          }
        });
      }
    }, {
      key: "_update",
      value: function _update() {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tag('Label');
        var renderWidth = label.renderWidth;
        var noScroll = renderWidth <= this.renderWidth;
        var labelPos = 0;
        if (noScroll && this._align !== 'left') {
          labelPos = (this.renderWidth - renderWidth) * ScrollingLabel.ALIGN[this._align];
        }
        this.tag('LabelClipper').patch({
          h: label.renderHeight,
          shader: {
            right: noScroll ? 0 : this._fade
          },
          LabelWrapper: {
            x: 0,
            Label: {
              x: labelPos
            },
            LabelCopy: {
              x: renderWidth + this._spacing
            }
          }
        });
      }
    }, {
      key: "_updateAnimation",
      value: function _updateAnimation() {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tag('Label');
        if (this._scrollAnimation) {
          this._scrollAnimation.stopNow();
        }
        if (label.renderWidth > this.renderWidth) {
          if (!this._animationSettings.duration) {
            this._animationSettings.duration = label.renderWidth / 50;
          }
          this._scrollAnimation = this.animation(_objectSpread2(_objectSpread2({}, this._animationSettings), {}, {
            actions: [{
              t: 'LabelWrapper',
              p: 'x',
              v: {
                sm: 0,
                0: 0,
                1.0: -(label.renderWidth + this._spacing)
              }
            }, {
              t: 'LabelClipper',
              p: 'shader.left',
              v: {
                0: 0,
                0.2: this._fade,
                0.8: this._fade,
                1.0: 0
              }
            }]
          }));
        }
      }
    }, {
      key: "start",
      value: function start() {
        if (this._scrollAnimation) {
          this._scrollAnimation.stopNow();
          this.tag('LabelCopy').patch({
            text: this._label
          });
          this._scrollAnimation.start();
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this._scrollAnimation) {
          this._scrollAnimation.stopNow();
          this.tag('LabelCopy').text = '';
        }
      }
    }, {
      key: "label",
      get: function get() {
        return this.tag('Label');
      },
      set: function set(obj) {
        if (typeof obj === 'string') {
          obj = {
            text: obj
          };
        }
        this._label = _objectSpread2(_objectSpread2({}, this._label), obj);
        this.tag('Label').patch({
          text: obj
        });
      }
    }, {
      key: "align",
      get: function get() {
        return this._align;
      },
      set: function set(pos) {
        this._align = pos;
      }
    }, {
      key: "autoStart",
      get: function get() {
        return this._autoStart;
      },
      set: function set(bool) {
        this._autoStart = bool;
      }
    }, {
      key: "repeat",
      get: function get() {
        return this._animationSettings.repeat;
      },
      set: function set(num) {
        this.animationSettings = {
          repeat: num
        };
      }
    }, {
      key: "delay",
      get: function get() {
        return this._animationSettings.delay;
      },
      set: function set(num) {
        this.animationSettings = {
          delay: num
        };
      }
    }, {
      key: "duration",
      get: function get() {
        return this._animationSettings.duration;
      },
      set: function set(num) {
        this.animationSettings = {
          duration: num
        };
      }
    }, {
      key: "animationSettings",
      get: function get() {
        return this._animationSettings;
      },
      set: function set(obj) {
        this._animationSettings = _objectSpread2(_objectSpread2({}, this._animationSettings), obj);
        if (this._scrollAnimation) {
          this._updateAnimation();
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          LabelClipper: {
            w: function w(_w) {
              return _w;
            },
            rtt: true,
            shader: {
              type: Lightning$1.shaders.FadeOut
            },
            LabelWrapper: {
              Label: {
                renderOffscreen: true
              },
              LabelCopy: {
                renderOffscreen: true
              }
            }
          }
        };
      }
    }]);
    return ScrollingLabel;
  }(Lightning$1.Component);
  ScrollingLabel.ALIGN = {
    left: 0,
    center: 0.5,
    right: 1
  };

  var calcCarouselNavigation = function calcCarouselNavigation(dir, current, min, max) {
    var target = current + dir;
    if (target < min) {
      target = max;
    }
    if (target > max) {
      target = min;
    }
    return target;
  };
  var Stepper = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Stepper, _Lightning$Component);
    var _super = _createSuper(Stepper);
    function Stepper() {
      _classCallCheck(this, Stepper);
      return _super.apply(this, arguments);
    }
    _createClass(Stepper, [{
      key: "_construct",
      value: function _construct() {
        this._focusColor = 0xff009245;
        this._labelColor = 0xff9d9d9d;
        this._labelColorFocused = 0xffffffff;
        this._padding = 30;
        this._max = 100;
        this._min = 0;
        this._value = 50;
        this._options = undefined;
        this._label = 'label';
        this._focusAnimation = null;
        defineProperties(this, ['focusColor', 'labelColor', 'labelColorFocused', 'padding', 'max', 'min', 'focusAnimation']);
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this = this;
        this.patch({
          Focus: {
            color: this._focusColor
          },
          Label: {
            x: this._padding,
            color: this._labelColor,
            text: {
              text: this._label
            }
          },
          ValueWrapper: {
            x: function x(w) {
              return w - _this._padding;
            },
            Value: {
              color: this._labelColor,
              text: {
                text: this.optionValue || this.value
              }
            }
          }
        });
        if (this.hasFocus()) {
          this._focus();
        }
      }
    }, {
      key: "_createFocusAnimation",
      value: function _createFocusAnimation() {
        this._focusAnimation = this.animation({
          duration: 0.2,
          stopMethod: 'reverse',
          actions: [{
            t: 'Focus',
            p: 'alpha',
            v: {
              0: 0,
              1: 1
            }
          }, {
            t: 'Label',
            p: 'color',
            v: {
              0: this._labelColor,
              1: this._labelColorFocused
            }
          }, {
            t: 'ValueWrapper.Value',
            p: 'color',
            v: {
              0: this._labelColor,
              1: this._labelColorFocused
            }
          }]
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        if (!this._focusAnimation) {
          this._createFocusAnimation();
        }
        this._update();
      }
    }, {
      key: "_navigate",
      value: function _navigate(dir) {
        this.value = calcCarouselNavigation(dir, this._value, this._min, this._max);
        var event = {
          value: this._value
        };
        if (this._options) {
          event.options = this._options;
        }
        this.fireAncestors('$onValueChanged', event);
        this.signal('onValueChanged', event);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        this._navigate(-1);
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        this._navigate(1);
      }
    }, {
      key: "_focus",
      value: function _focus() {
        if (this._focusAnimation) {
          this._focusAnimation.start();
        }
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        if (this._focusAnimation) {
          this._focusAnimation.stop();
        }
      }
    }, {
      key: "label",
      get: function get() {
        return this._label;
      },
      set: function set(str) {
        this._label = str;
        if (this.active) {
          this.tag('Label').text.text = str;
        }
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        this._value = str;
        if (this.active) {
          this.tag('Value').text.text = this.optionValue || this._value;
        }
      }
    }, {
      key: "optionValue",
      get: function get() {
        return this._options && this._options[this._value] && this._options[this._value].label || undefined;
      }
    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(arr) {
        var refactor = arr.map(function (option) {
          if (typeof option === 'string') {
            return {
              label: option
            };
          }
          return option;
        });
        this._value = 0;
        this._options = refactor;
        this._max = refactor.length - 1;
        this._update();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          h: 80,
          w: 574,
          Focus: {
            alpha: 0,
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            rect: true
          },
          Label: {
            x: 30,
            y: function y(h) {
              return h * 0.5;
            },
            mountY: 0.5,
            text: {
              text: '',
              fontSize: 22
            }
          },
          ValueWrapper: {
            x: function x(w) {
              return w - 30;
            },
            w: 200,
            h: function h(_h2) {
              return _h2;
            },
            mountX: 1,
            Value: {
              x: function x(w) {
                return w * 0.5;
              },
              y: function y(h) {
                return h * 0.5;
              },
              mountX: 0.5,
              mountY: 0.5,
              text: {
                text: '',
                fontSize: 22
              }
            }
          }
        };
      }
    }]);
    return Stepper;
  }(Lightning$1.Component);

  var ArrowStepper = /*#__PURE__*/function (_Stepper) {
    _inherits(ArrowStepper, _Stepper);
    var _super = _createSuper(ArrowStepper);
    function ArrowStepper() {
      _classCallCheck(this, ArrowStepper);
      return _super.apply(this, arguments);
    }
    _createClass(ArrowStepper, [{
      key: "_update",
      value: function _update() {
        var _this = this;
        this.patch({
          Focus: {
            color: this._focusColor
          },
          Label: {
            x: this._padding,
            color: this._labelColor,
            text: {
              text: this._label
            }
          },
          ValueWrapper: {
            x: function x(w) {
              return w - _this._padding;
            },
            ArrowLeft: {
              color: this._labelColor
            },
            Value: {
              color: this._labelColor,
              text: {
                text: this.optionValue || this.value
              }
            },
            ArrowRight: {
              color: this._labelColor
            }
          }
        });
        if (this.hasFocus()) {
          this._focus();
        }
      }
    }, {
      key: "_createFocusAnimation",
      value: function _createFocusAnimation() {
        this._focusAnimation = this.animation({
          duration: 0.2,
          stopMethod: 'reverse',
          actions: [{
            t: 'Focus',
            p: 'alpha',
            v: {
              0: 0,
              1: 1
            }
          }, {
            t: 'ValueWrapper.ArrowLeft',
            p: 'color',
            v: {
              0: this._labelColor,
              1: this._labelColorFocused
            }
          }, {
            t: 'ValueWrapper.Value',
            p: 'color',
            v: {
              0: this._labelColor,
              1: this._labelColorFocused
            }
          }, {
            t: 'ValueWrapper.ArrowRight',
            p: 'color',
            v: {
              0: this._labelColor,
              1: this._labelColorFocused
            }
          }]
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        if (!this._focusAnimation) {
          this._createFocusAnimation();
        }
        var arrowLeft = this.tag('ArrowLeft');
        var arrowRight = this.tag('ArrowRight');
        if (!(arrowLeft.src !== undefined && arrowLeft.text !== null)) {
          arrowLeft.text = {
            text: "\u25C0",
            fontSize: 18
          };
        }
        if (!(arrowRight.src !== undefined && arrowRight.text !== null)) {
          arrowRight.text = {
            text: "\u25B6",
            fontSize: 18
          };
        }
        this._update();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(ArrowStepper), "_template", this).call(this)), {}, {
          ValueWrapper: {
            x: function x(w) {
              return w - 30;
            },
            w: 200,
            h: function h(_h) {
              return _h;
            },
            mountX: 1,
            ArrowLeft: {
              y: function y(h) {
                return h * 0.5;
              },
              mountY: 0.5
            },
            Value: {
              x: function x(w) {
                return w * 0.5;
              },
              y: function y(h) {
                return h * 0.5;
              },
              mountX: 0.5,
              mountY: 0.5,
              text: {
                text: '',
                fontSize: 22
              }
            },
            ArrowRight: {
              y: function y(h) {
                return h * 0.5;
              },
              x: function x(w) {
                return w;
              },
              mountY: 0.5,
              mountX: 1
            }
          }
        });
      }
    }]);
    return ArrowStepper;
  }(Stepper);

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(ColorShift, _Lightning$Component);
    var _super = _createSuper(ColorShift);
    function ColorShift() {
      _classCallCheck(this, ColorShift);
      return _super.apply(this, arguments);
    }
    _createClass(ColorShift, [{
      key: "_construct",
      value: function _construct() {
        this._autoColorShift = true;
        this._focusColor = 0xff009245;
        this._labelColor = 0xff9d9d9d;
        this._labelColorFocused = 0xffffffff;
        this._options = [{
          type: 'neutral',
          label: 'normal'
        }, {
          type: 'protanopia',
          label: 'Protanopia'
        }, {
          type: 'deuteranopia',
          label: 'Deuteranopia'
        }, {
          type: 'tritanopia',
          label: 'Tritanopia'
        }, {
          type: 'monochromacy',
          label: 'Achromatopsia'
        }];
        defineProperties(this, ['focusColor', 'labelColor', 'labelColorFocused', 'options', 'autoColorShift']);
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('List');
      }
    }, {
      key: "_shiftColors",
      value: function _shiftColors() {
        if (this._autoColorShift && this.application && this.application.colorshift) {
          this.application.colorshift(this._settings.correction, this._settings);
        }
      }
    }, {
      key: "$onValueChanged",
      value: function $onValueChanged() {
        var listItems = this.tag('List').items;
        var correction = listItems[0];
        this._settings = {
          correction: correction.options[correction.value].type,
          brightness: listItems[1].value,
          contrast: listItems[2].value,
          gamma: listItems[3].value
        };
        if (this._currentCorrection && this._settings.correction !== this._currentCorrection) {
          var steppers = listItems.slice(1);
          steppers.forEach(function (stepper) {
            stepper.value = 50;
          });
        }
        this._currentCorrection = this._settings.correction;
        this._shiftColors();
        this.signal('onColorShift', this._settings);
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this = this;
        var list = this.tag('List');
        var steppers = ['Brightness', 'Contrast', 'Gamma'];
        var options = this._options;
        var settings = this._settings;
        var colors = {
          focusColor: this._focusColor,
          labelColor: this._labelColor,
          labelColorFocused: this._labelColorFocused
        };
        this._shiftColors();
        var settingItems = steppers.map(function (stepper) {
          var lowerC = stepper.toLocaleLowerCase();
          return _objectSpread2({
            type: _this["".concat(lowerC, "Component")],
            label: stepper,
            value: settings[lowerC],
            w: _this.finalW,
            h: 80
          }, colors);
        });
        settingItems.unshift(_objectSpread2({
          type: this.correctionComponent,
          options: options,
          value: findIndexOfObject(options, settings.correction, 'type'),
          label: 'Color adjustment',
          w: this.finalW,
          h: 80
        }, colors));
        list.clear();
        list.add(settingItems);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        if (!this._settings) {
          this._settings = {
            correction: 'neutral',
            brightness: 50,
            contrast: 50,
            gamma: 50
          };
        }
        this._update();
      }
    }, {
      key: "settings",
      get: function get() {
        return this._settings;
      },
      set: function set(obj) {
        this._settings = obj;
        if (this.active) {
          var listItems = this.tag('List').items;
          listItems[0] = findIndexOfObject(this._options, obj.correction, 'type');
          listItems[1] = obj.brightness || 50;
          listItems[2] = obj.contrast || 50;
          listItems[3] = obj.gamma || 50;
        }
      }
    }, {
      key: "correctionTag",
      get: function get() {
        return this.tag('List').items[0];
      }
    }, {
      key: "brightnessTag",
      get: function get() {
        return this.tag('List').items[1];
      }
    }, {
      key: "contrastTag",
      get: function get() {
        return this.tag('List').items[2];
      }
    }, {
      key: "gammaTag",
      get: function get() {
        return this.tag('List').items[3];
      }
    }, {
      key: "adjustmentTags",
      get: function get() {
        return this.tag('List').items;
      }
    }, {
      key: "stepperComponent",
      get: function get() {
        return this._stepperComponent || ArrowStepper;
      },
      set: function set(component) {
        this._stepperComponent = component;
      }
    }, {
      key: "correctionComponent",
      get: function get() {
        return this._correctionComponent || this.stepperComponent;
      },
      set: function set(component) {
        this._correctionComponent = component;
      }
    }, {
      key: "brightnessComponent",
      get: function get() {
        return this._brightnessComponent || this.stepperComponent;
      },
      set: function set(component) {
        this._brightnessComponent = component;
      }
    }, {
      key: "contrastComponent",
      get: function get() {
        return this._contrastComponent || this.stepperComponent;
      },
      set: function set(component) {
        this._contrastComponent = component;
      }
    }, {
      key: "gammaComponent",
      get: function get() {
        return this._gammaComponent || this.stepperComponent;
      },
      set: function set(component) {
        this._gammaComponent = component;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 574,
          h: 240,
          List: {
            type: List,
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            forceLoad: true,
            spacing: 0,
            direction: 'column'
          }
        };
      }
    }]);
    return ColorShift;
  })(Lightning$1.Component);

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(CarouselItem, _Lightning$Component);
    var _super2 = _createSuper(CarouselItem);
    function CarouselItem() {
      _classCallCheck(this, CarouselItem);
      return _super2.apply(this, arguments);
    }
    _createClass(CarouselItem, [{
      key: "_construct",
      value: function _construct() {
        this._focusColor = 0xff009245;
        this._labelColor = 0xff9d9d9d;
        this._labelColorFocused = 0xffffffff;
        this._padding = 40;
        defineProperties(this, ['focusColor', 'labelColor', 'labelColorFocused', 'padding']);
      }
    }, {
      key: "label",
      get: function get() {
        return this._label;
      },
      set: function set(str) {
        this.tag('Label').text.text = str;
        this._label = str;
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this2 = this;
        var label = this.tag('Label');
        label.on('txLoaded', function () {
          _this2.patch({
            w: label.renderWidth,
            Focus: {
              w: label.renderWidth + _this2._padding * 2
            }
          });
          if (_this2.collectionWrapper) {
            _this2.collectionWrapper.reposition();
          }
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.patch({
          Focus: {
            smooth: {
              alpha: 1
            }
          },
          Label: {
            smooth: {
              color: this._labelColorFocused
            }
          }
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus(target) {
        if (target.isCarouselItem === true) {
          this.patch({
            Focus: {
              smooth: {
                alpha: 0
              }
            },
            Label: {
              smooth: {
                color: this._labelColor
              }
            }
          });
        }
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.patch({
          Focus: {
            color: this._focusColor
          },
          Label: {
            color: this._labelColor
          }
        });
        if (this.cparent.componentIndex === this.collectionWrapper.currentItemWrapper.componentIndex) {
          this._focus();
        }
      }
    }, {
      key: "isCarouselItem",
      get: function get() {
        return true;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Focus: {
            alpha: 0,
            x: function x(w) {
              return w * 0.5;
            },
            y: function y(h) {
              return h * 0.5;
            },
            mount: 0.5,
            w: 120,
            h: 50,
            rect: true,
            shader: {
              type: Lightning$1.shaders.RoundedRectangle,
              radius: 25
            }
          },
          Label: {
            x: function x(w) {
              return w * 0.5;
            },
            y: function y(h) {
              return h * 0.5;
            },
            mount: 0.5,
            renderOffscreen: true,
            text: {
              text: '',
              fontSize: 22
            }
          }
        };
      }
    }, {
      key: "width",
      get: function get() {
        return 120;
      }
    }, {
      key: "height",
      get: function get() {
        return 50;
      }
    }]);
    return CarouselItem;
  })(Lightning$1.Component);

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(ProgressBar, _Lightning$Component);
    var _super = _createSuper(ProgressBar);
    function ProgressBar() {
      _classCallCheck(this, ProgressBar);
      return _super.apply(this, arguments);
    }
    _createClass(ProgressBar, [{
      key: "_construct",
      value: function _construct() {
        this._progressColor = 0xff009245;
        this._progressColorFocused = undefined;
        this._backgroundColor = 0xff9d9d9d;
        this._backgroundColorFocused = undefined;
        this._backgroundRadius = 5;
        this._progressRadius = 0;
        this.value = 0.5;
        defineProperties(this, ['progressColor', 'backgroundColor', 'progressColorFocused', 'backgroundColorFocused']);
      }
    }, {
      key: "progress",
      value: function progress(p) {
        if (p > 1) {
          p = p / 100;
        }
        this._value = p;
        this.tag('Progress').w = this.w * p;
      }
    }, {
      key: "_createFocusAnimation",
      value: function _createFocusAnimation() {
        this._focusAnimation = this.animation({
          duration: 0.2,
          stopMethod: 'reverse',
          actions: [{
            t: 'Background',
            p: 'color',
            v: {
              0: this._backgroundColor,
              1: this._backgroundColorFocused || this._backgroundColor
            }
          }, {
            t: 'Background.Progress',
            p: 'color',
            v: {
              0: this._progressColor,
              1: this._progressColorFocused || this._progressColor
            }
          }]
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        if (!this._focusAnimation) {
          this._createFocusAnimation();
        }
        this.patch({
          Background: {
            color: this._backgroundColor,
            shader: {
              radius: this._backgroundRadius
            },
            Progress: {
              color: this._progressColor,
              shader: {
                radius: this._progressRadius
              }
            }
          }
        });
        this.progress(this._value);
        if (this.hasFocus()) {
          this._focus();
        }
      }
    }, {
      key: "_focus",
      value: function _focus() {
        if (this._focusAnimation) {
          this._focusAnimation.start();
        }
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        if (this._focusAnimation) {
          this._focusAnimation.stop();
        }
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(p) {
        this._value = p;
        if (this.active) {
          this.progress(p);
        }
      }
    }, {
      key: "backgroundRadius",
      set: function set(num) {
        this._backgroundRadius = num;
        if (this.active) {
          this.tag('Background').shader.radius = num;
        }
      }
    }, {
      key: "progressRadius",
      get: function get() {
        return this._progressRadius;
      },
      set: function set(num) {
        this._progressRadius = num;
        if (this.active) {
          this.tag('Progress').shader.radius = num;
        }
      }
    }, {
      key: "backgroundTag",
      get: function get() {
        return this.tag('Background');
      }
    }, {
      key: "progressTag",
      get: function get() {
        return this.tag('Progress');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 300,
          h: 10,
          Background: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            rect: true,
            rtt: true,
            shader: {
              type: Lightning$1.shaders.RoundedRectangle,
              radius: 5
            },
            Progress: {
              h: function h(_h2) {
                return _h2;
              },
              w: 10,
              rect: true,
              shader: {
                type: Lightning$1.shaders.RoundedRectangle,
                radius: 0
              }
            }
          }
        };
      }
    }]);
    return ProgressBar;
  })(Lightning$1.Component);

  // import { keyboardConfig } from "../../configs";
  var Search = /*#__PURE__*/function (_ref) {
    _inherits(Search, _ref);
    var _super = _createSuper(Search);
    function Search() {
      var _this;
      _classCallCheck(this, Search);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "index", 1);
      return _this;
    }
    _createClass(Search, [{
      key: "_setup",
      value: function _setup() {
        var inputField = this.tag('SearchComponent.SearchBox.InputWrapper.InputField');
        this.tag('Keyboard').inputField(inputField);
      }
    }, {
      key: "onSearch",
      value: function onSearch(event) {
        console.log('search', event.input);
      }
    }, {
      key: "_active",
      value: function _active() {
        _get(_getPrototypeOf(Search.prototype), "_active", this).call(this);
        this.tag('SearchComponent.SearchBox.InputWrapper.InputField').color = theme.colors.accentGrey.dark;
      }
    }, {
      key: "_getFocused",
      value:
      // returns the focused components
      function _getFocused() {
        return this.tag('SearchComponent').children[this.index];
      }
    }, {
      key: "_handleUp",
      value:
      // overrides the default up button actions
      function _handleUp() {
        if (this.index > 0) {
          this.index -= 1;
        }
      }

      // overrides the default down button actions
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        if (this.index < 1) {
          this.index += 1;
        }
      }

      // overrides the default behavior when enter button is clicked
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        if (this.index === 0) {
          Router.navigate('home');
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 1920,
          h: 1080,
          color: theme.colors.primaryLight,
          rect: true,
          shader: {
            x: 100,
            y: -100,
            pivot: 0.5,
            type: Lightning$1.shaders.RadialGradient,
            outerColor: theme.colors.primaryLight,
            innerColor: theme.colors.dark,
            radius: 800
          },
          SearchComponent: {
            x: 40,
            y: 40,
            shader: null,
            BackButton: {
              type: BackButton
            },
            Keyboard: {
              x: 0,
              y: 250,
              type: Keyboard,
              config: keyboardConfig,
              currentLayout: 'abc',
              maxCharacters: 24,
              signals: {
                onSearch: true
              }
            },
            SearchBox: {
              x: 0,
              y: 100,
              w: 950,
              h: 100,
              rect: true,
              color: theme.colors.accentGrey.light,
              shader: {
                type: Lightning$1.shaders.RoundedRectangle,
                radius: 30
              },
              InputWrapper: {
                x: 20,
                color: theme.colors.dark,
                InputField: {
                  y: 20,
                  type: InputField
                }
              }
            }
          }
        };
      }
    }]);
    return Search;
  }(Lightning$1.Component);
  var Key = /*#__PURE__*/function (_BaseKey) {
    _inherits(Key, _BaseKey);
    var _super2 = _createSuper(Key);
    function Key() {
      _classCallCheck(this, Key);
      return _super2.apply(this, arguments);
    }
    _createClass(Key, [{
      key: "_firstActive",
      value: function _firstActive() {
        this.label = {
          mountY: 0.45
        };
        this.labelColors = {
          unfocused: Colors('white').get(),
          focused: theme.colors.dark
        };
        this.backgroundColors = {
          unfocused: Colors('white').alpha(0).get(),
          focused: theme.colors.white
        };
        if (this.hasFocus()) {
          this._focus();
        }
      }
    }], [{
      key: "width",
      get: function get() {
        return 90;
      }
    }, {
      key: "height",
      get: function get() {
        return 60;
      }
    }]);
    return Key;
  }(Key$1);
  var ActionKey = /*#__PURE__*/function (_BaseKey2) {
    _inherits(ActionKey, _BaseKey2);
    var _super3 = _createSuper(ActionKey);
    function ActionKey() {
      _classCallCheck(this, ActionKey);
      return _super3.apply(this, arguments);
    }
    _createClass(ActionKey, [{
      key: "_active",
      value: function _active() {
        this.label = {
          mountY: 0.45
        };
        this.labelColors = {
          unfocused: Colors('black').get(),
          focused: Colors('white').get()
        };
        this.backgroundColors = {
          unfocused: Colors('white').get(),
          focused: theme.colors.accentGrey.light
        };
        if (this.hasFocus()) {
          this._focus();
        }
      }
    }], [{
      key: "height",
      get: function get() {
        return 60;
      }
    }, {
      key: "width",
      get: function get() {
        return 160;
      }
    }]);
    return ActionKey;
  }(Key$1);
  var keyboardConfig = {
    layouts: {
      'abc': [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'], ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'], ['u', 'v', 'w', 'x', 'y', 'z', '_', '-', '@', '.'], ['Layout:ABC', 'Layout:123', 'Space', 'Search', 'Del']],
      'ABC': [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'], ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'], ['U', 'V', 'W', 'X', 'Y', 'Z', '_', '-', '@', '.'], ['Layout:abc', 'Layout:123', 'Space', 'Search', 'Del']],
      '123': [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], ['Layout:abc', 'Space', 'Clear', 'Del']]
    },
    styling: {
      align: 'center',
      horizontalSpacing: 5,
      verticalSpacing: 20
    },
    buttonTypes: {
      default: {
        type: Key
      },
      Del: {
        type: ActionKey,
        icon: 'del'
      },
      Layout: {
        type: ActionKey
      },
      Space: {
        type: ActionKey,
        w: 280,
        label: 'space'
      },
      Clear: {
        type: ActionKey,
        label: 'clear'
      },
      Search: {
        type: ActionKey,
        label: 'search'
      }
    }
  };

  var ContentDetails = /*#__PURE__*/function (_ref) {
    _inherits(ContentDetails, _ref);
    var _super = _createSuper(ContentDetails);
    function ContentDetails() {
      var _this;
      _classCallCheck(this, ContentDetails);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "contentData", void 0);
      _defineProperty(_assertThisInitialized(_this), "index", 1);
      return _this;
    }
    _createClass(ContentDetails, [{
      key: "_inactive",
      value: function _inactive() {
        console.log("Inactive");
        this.index = 1;
      }
    }, {
      key: "params",
      set: function set(args) {
        var _this2 = this;
        var id = args.id;
        axios$1.get("https://api-qa.enlight.diagnal.com/v1b3/content/".concat(id)).then(function (res) {
          var _res$data$images$find, _res$data$images$find2;
          console.log(res.data);
          _this2.patch({
            ContentView: {
              Spinner: {
                rect: false
              },
              shader: {
                type: Lightning$1.shaders.RadialGradient,
                x: 300,
                y: 300,
                innerColor: 0xff000000,
                radius: 1500
              },
              Background: {
                h: function h(_h) {
                  return _h;
                },
                w: function w(_w) {
                  return _w;
                },
                src: (_res$data$images$find = res.data.images.find(function (img) {
                  return img.width === 2048;
                })) === null || _res$data$images$find === void 0 ? void 0 : _res$data$images$find.url
              },
              ContentData: {
                zIndex: 2,
                Thumbnail: {
                  x: 1400,
                  y: 324,
                  w: 288,
                  h: 432,
                  scale: 1.5,
                  shader: {
                    type: Lightning$1.shaders.RoundedRectangle,
                    radius: 30
                  },
                  src: (_res$data$images$find2 = res.data.images.find(function (img) {
                    return img.width === 288;
                  })) === null || _res$data$images$find2 === void 0 ? void 0 : _res$data$images$find2.url,
                  color: theme.colors.white
                },
                Title: {
                  x: 40,
                  y: 185,
                  shader: null,
                  text: {
                    text: res.data.title,
                    fontSize: 80
                  },
                  color: theme.colors.white
                },
                Description: {
                  x: 40,
                  y: 290,
                  w: 900,
                  shader: null,
                  text: {
                    wordWrap: true,
                    maxLines: 3,
                    text: res.data.description,
                    maxLinesSuffix: '...',
                    fontSize: 30
                  },
                  color: theme.colors.accentGrey.light
                },
                Genre: {
                  x: 40,
                  y: 400,
                  w: 900,
                  shader: null,
                  text: {
                    text: res.data.genre.join(' . '),
                    fontSize: 24
                  },
                  color: theme.colors.accentGrey.light
                },
                Info: {
                  Director: {
                    x: 40,
                    y: 460,
                    w: 100,
                    shader: null,
                    text: {
                      text: 'Director : ',
                      fontSize: 24
                    },
                    color: theme.colors.accentGrey.light
                  },
                  Starring: {
                    x: 40,
                    y: 490,
                    w: 100,
                    shader: null,
                    text: {
                      text: 'Staring  : ',
                      fontSize: 24
                    },
                    color: theme.colors.accentGrey.light
                  },
                  DirectorList: {
                    x: 150,
                    y: 460,
                    w: 800,
                    shader: null,
                    text: {
                      text: res.data.director.map(function (a) {
                        return a.personName;
                      }).join(', '),
                      fontSize: 24
                    },
                    color: theme.colors.accentGrey.light
                  },
                  StarringList: {
                    x: 150,
                    y: 490,
                    w: 800,
                    shader: null,
                    text: {
                      text: res.data.actor.map(function (a) {
                        return a.personName;
                      }).join(', '),
                      fontSize: 24,
                      wordWrap: true,
                      maxLines: 1,
                      maxLinesSuffix: '...'
                    },
                    color: theme.colors.accentGrey.light
                  }
                },
                VideoSpec: {
                  VideoSpec1: {
                    x: 70,
                    y: 160,
                    shader: null,
                    type: VideoSpecItem,
                    specData: '  16+  '
                  },
                  VideoSpec2: {
                    x: 135,
                    y: 160,
                    shader: null,
                    type: VideoSpecItem,
                    specData: '  4k  '
                  },
                  VideoSpec3: {
                    x: 193,
                    y: 160,
                    shader: null,
                    type: VideoSpecItem,
                    specData: '  cc  '
                  }
                }
              },
              ContentActions: {
                shader: null,
                BackButton: {
                  x: 40,
                  y: 40,
                  type: BackButton
                },
                PlayButton: {
                  x: 40,
                  y: 570,
                  type: Button,
                  label: "Play Video"
                },
                PlayTrailer: {
                  x: 40,
                  y: 700,
                  type: Button,
                  label: "Play Trailer"
                }
              }
            }
          });
          _this2._refocus();
        });
      }

      // override _enable(): void {
      //     this.index = 1;
      // }
    }, {
      key: "_init",
      value: function _init() {
        // this.tag('ContentView.ContentData.Info.Starring' as any).enableClipping()
      }

      // overrides the default up button actions
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        if (this.index > 0) {
          this.index -= 1;
        }
      }

      // overrides the default right button actions
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        if (this.index < 2) {
          this.index += 1;
        }
      }

      // overrides the default behavior when enter button is clicked
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        if (this.index === 0) {
          Router.navigate('home');
        }
      }

      // returns the focused components
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('ContentView.ContentActions').children[this.index];
      }
    }], [{
      key: "_template",
      value:
      // readonly contentView = this.getByRef("ContentView")!;
      // readonly spinner = this.contentView.getByRef("Spinner")!;
      // readonly background = this.contentView.getByRef("Background")!;
      // readonly contentDataView = this.contentView.getByRef("ContentData")!;
      // readonly thumbnail = this.contentDataView.getByRef("Thumbnail")!;
      // readonly title = this.contentDataView.getByRef("Title")!;
      // readonly description = this.contentDataView.getByRef("Description")!;
      // readonly genre = this.contentDataView.getByRef("Genre")!;
      // readonly info = this.contentDataView.getByRef("Info")!;

      function _template() {
        return {
          ContentView: {
            w: 1920,
            h: 1080,
            color: theme.colors.primaryLight,
            rect: true,
            shader: {
              x: 100,
              y: -100,
              pivot: 0.5,
              type: Lightning$1.shaders.RadialGradient,
              outerColor: theme.colors.primaryLight,
              innerColor: theme.colors.dark,
              radius: 800
            },
            Spinner: {
              w: 100,
              h: 100,
              mount: 0.5,
              x: function x(_x) {
                return _x / 2;
              },
              y: function y(_y) {
                return _y / 2;
              },
              rect: true,
              shader: {
                type: Lightning$1.shaders.Spinner2,
                stroke: 5
              }
            },
            Background: {},
            ContentData: {
              Thumbnail: {},
              Title: {},
              Description: {},
              Genre: {},
              Info: {}
            },
            ContentActions: {
              // BackButton: { type: BackButton },
              // PlayButton: { type: Button },
              // PlayTrailer: { type: Button },
            }
          }
        };
      }
    }]);
    return ContentDetails;
  }(Lightning$1.Component);

  var routes = {
    root: 'home',
    routes: [{
      path: 'home',
      component: Home
    }, {
      path: 'search',
      component: Search
    }, {
      path: 'settings',
      component: Home
    }, {
      path: 'content/:id',
      component: ContentDetails,
      options: {
        reuseInstance: false
      }
    }]
  };

  // App component
  var App = /*#__PURE__*/function (_Router$App) {
    _inherits(App, _Router$App);
    var _super = _createSuper(App);
    function App() {
      _classCallCheck(this, App);
      return _super.apply(this, arguments);
    }
    _createClass(App, [{
      key: "_setup",
      value:
      // setting up the router for the application
      function _setup() {
        Router.startRouter(routes, this);
      }
    }]);
    return App;
  }(Router.App);

  function index (appSettings, platformSettings, appData) {
    return Launch(App, appSettings, platformSettings, appData);
  }

  return index;

})();

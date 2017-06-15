/**
 * Created by chenhaoact on 2017/6/15.
 * 这里的源码来自webstorm的javasrriptLanguage.jar的
 * com/intellij/lang/javascript/index/predefined下的EcmaScript6.js
 */
/**
 @param {*} target
 @param {...*} sources
 @static
 @return {*}
 */
Object.assign = function(target,sources) {};
/**
 @param {*} O
 @static
 @return {Symbol[]}
 */
Object.getOwnPropertySymbols = function(O) {};
/**
 @param {*} value1
 @param {*} value2
 @static
 @return {boolean}
 */
Object.is = function(value1,value2) {};

/**
 @type {string}
 */
Function.prototype.name = null;

/**
 @static
 @type {Symbol}
 */
Symbol.hasInstance = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.isConcatSpreadable = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.iterator = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.match = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.replace = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.search = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.species = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.split = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.toPrimitive = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.toStringTag = 0;
/**
 @static
 @type {Symbol}
 */
Symbol.unscopables = 0;
/**
 @static
 @return {Symbol}
 */
Symbol.for = function(key) {};
/**
 @param {Symbol} sym
 @static
 */
Symbol.keyFor = function(sym) {};
/**
 @param [description]
 @constructor
 @return {Symbol}
 */
function Symbol(description) {}

/**
 @static
 @type {number}
 */
Number.EPSILON = 0;
/**
 @static
 @type {number}
 */
Number.MAX_SAFE_INTEGER = 0;
/**
 @static
 @type {number}
 */
Number.MIN_SAFE_INTEGER = 0;
/**
 @static
 @return {boolean}
 */
Number.isFinite = function(number) {};
/**
 @static
 @return {boolean}
 */
Number.isInteger = function(number) {};
/**
 @static
 @return {boolean}
 */
Number.isNaN = function(number) {};
/**
 @static
 @return {boolean}
 */
Number.isSafeInteger = function(number) {};
/**
 @param {string} string
 @static
 @return {number}
 */
Number.parseFloat = function(string) {};
/**
 @param {string} string
 @param {number} [radix]
 @static
 @return {number}
 */
Number.parseInt = function(string,radix) {};

/**
 @param {number} x
 @static
 @return {number}
 */
Math.acosh = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.asinh = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.atanh = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.cbrt = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.clz32 = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.cosh = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.expm1 = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.fround = function(x) {};
/**
 @param {...number} values
 @static
 @return {number}
 */
Math.hypot = function(values) {};
/**
 @param {number} x
 @param {number} y
 @static
 @return {number}
 */
Math.imul = function(x,y) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.log1p = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.log10 = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.log2 = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.sign = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.sinh = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.tanh = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.trunc = function(x) {};

/**
 @param {...number} codePoints
 @static
 @return {string}
 */
String.fromCodePoint = function(codePoints) {};
/**
 @param template
 @param {...null} substitutions
 @static
 @return {string}
 */
String.raw = function(template,substitutions) {};
/**
 @param {number} pos
 @return {number}
 */
String.prototype.codePointAt = function(pos) {};
/**
 @param {string} searchString
 @param {number} [endPosition]
 @return {boolean}
 */
String.prototype.endsWith = function(searchString,endPosition) {};
/**
 @param {string} searchString
 @param {number} [position]
 @return {boolean}
 */
String.prototype.includes = function(searchString,position) {};
/**
 @param {string} [form]
 @return {string}
 */
String.prototype.normalize = function(form) {};
/**
 @param {number} count
 @return {string}
 */
String.prototype.repeat = function(count) {};
/**
 @param {string} searchString
 @param {number} [position]
 @return {boolean}
 */
String.prototype.startsWith = function(searchString,position) {};

/**
 @type {string}
 */
RegExp.prototype.flags = null;
/**
 @type {boolean}
 */
RegExp.prototype.sticky = 0;
/**
 @type {boolean}
 */
RegExp.prototype.unicode = 0;

/**
 @param items
 @param {Function} [mapfn]
 @param [thisArg]
 @static
 @return {Array}
 */
Array.from = function(items,mapfn,thisArg) {};
/**
 @param {...null} items
 @static
 @return {Array}
 */
Array.of = function(items) {};
/**
 @param {number} target
 @param {number} start
 @param {number} [enf]
 @return {Array.<T>}
 */
Array.prototype.copyWithin = function(target,start,enf) {};
/**
 @return {Iterator.<*>}
 */
Array.prototype.entries = function() {};
/**
 @param {T} value
 @param {number} [start]
 @param {number} [end]
 @return {Array.<T>}
 */
Array.prototype.fill = function(value,start,end) {};
/**
 @param {function(T, number, obj): boolean} predicate
 @param [thisArg]
 @return {T}
 */
Array.prototype.find = function(predicate,thisArg) {};
/**
 @param {function(T, number, obj): boolean} predicate
 @param [thisArg]
 @return {number}
 */
Array.prototype.findIndex = function(predicate,thisArg) {};
/**
 @return {Iterator.<number>}
 */
Array.prototype.keys = function() {};
/**
 @return {Iterator.<T>}
 */
Array.prototype.values = function() {};
/**
 @class Array
 @template T
 @extends {Iterable.<T>}
 */
Array();

/**
 @interface
 @template T
 */
function Iterable() {}

/**
 @return {T}
 */
Iterator.prototype.next = function() {};
/**
 @interface
 @template T
 */
function Iterator() {}

/**
 @static
 @type {number}
 @const
 */
Uint8ClampedArray.BYTES_PER_ELEMENT = 1;
Uint8ClampedArray.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} byteOffset
 @param {number} length
 @constructor
 */
function Uint8ClampedArray(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Uint8ClampedArray} array
 @param {number} offset
 @return {void}
 */
Uint8ClampedArray.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} end
 @return {Uint8ClampedArray}
 */
Uint8ClampedArray.prototype.subarray = function(begin,end) {};
Uint8ClampedArray.prototype = new ArrayBufferView();

/**
 @type {number}
 */
Map.prototype.size = 0;
/**
 @param {Iterable.<Array>} [iterable]
 @constructor
 @template K, V
 */
function Map(iterable) {}
/**
 @return {void}
 */
Map.prototype.clear = function() {};
/**
 @param {K} key
 @return {boolean}
 */
Map.prototype.delete = function(key) {};
/**
 @return {Iterator.<*>}
 */
Map.prototype.entries = function() {};
/**
 @param {function(V, K, Map.<K, V>): void} callbackfn
 @param [thisArg]
 @return {void}
 */
Map.prototype.forEach = function(callbackfn,thisArg) {};
/**
 @param {K} key
 @return {V}
 */
Map.prototype.get = function(key) {};
/**
 @param {K} key
 @return {boolean}
 */
Map.prototype.has = function(key) {};
/**
 @return {Iterator.<K>}
 */
Map.prototype.keys = function() {};
/**
 @param {K} key
 @param {V} value
 @return {Map.<K, V>}
 */
Map.prototype.set = function(key,value) {};
/**
 @return {Iterator.<V>}
 */
Map.prototype.values = function() {};
/**
 @class Map
 @template K, V
 @extends {Iterable.<Array>}
 */
Map();

/**
 @type {number}
 */
Set.prototype.size = 0;
/**
 @param {Iterable.<T>} [iterable]
 @constructor
 @template T
 */
function Set(iterable) {}
/**
 @param {T} value
 @return {Set.<T>}
 */
Set.prototype.add = function(value) {};
/**
 @return {void}
 */
Set.prototype.clear = function() {};
/**
 @param {T} value
 @return {boolean}
 */
Set.prototype.delete = function(value) {};
/**
 @return {Iterator.<*>}
 */
Set.prototype.entries = function() {};
/**
 @param {function(T, T, Set.<T>): void} callbackfn
 @param [thisArg]
 @return {void}
 */
Set.prototype.forEach = function(callbackfn,thisArg) {};
/**
 @param {T} value
 @return {boolean}
 */
Set.prototype.has = function(value) {};
/**
 @return {Iterator.<T>}
 */
Set.prototype.keys = function() {};
/**
 @return {Iterator.<T>}
 */
Set.prototype.values = function() {};
/**
 @class Set
 @template T
 @extends {Iterable.<T>}
 */
Set();

/**
 @param {Iterable.<Array>} [iterable]
 @constructor
 @template K, V
 */
function WeakMap(iterable) {}
/**
 @param {K} key
 @return {boolean}
 */
WeakMap.prototype.delete = function(key) {};
/**
 @param {K} key
 @return {V}
 */
WeakMap.prototype.get = function(key) {};
/**
 @param {K} key
 @return {boolean}
 */
WeakMap.prototype.has = function(key) {};
/**
 @param {K} key
 @param {V} value
 @return {Map.<K, V>}
 */
WeakMap.prototype.set = function(key,value) {};
/**
 @class WeakMap
 @template K, V
 @extends {Iterable.<Array>}
 */
WeakMap();

/**
 @param {Iterable.<T>} [iterable]
 @constructor
 @template T
 */
function WeakSet(iterable) {}
/**
 @param {T} value
 @return {Set.<T>}
 */
WeakSet.prototype.add = function(value) {};
/**
 @param {T} value
 @return {boolean}
 */
WeakSet.prototype.delete = function(value) {};
/**
 @param {T} value
 @return {boolean}
 */
WeakSet.prototype.has = function(value) {};
/**
 @class WeakSet
 @template T
 @extends {Iterable.<T>}
 */
WeakSet();

/**
 @param {...null} parameters
 @param {string} body
 @constructor
 */
function GeneratorFunction(parameters,body) {}

Generator.prototype.next = function(value) {};
Generator.prototype.return = function(value) {};
Generator.prototype.throw = function(exception) {};
Generator = {};

/**
 @param {Iterable.<Promise>} iterable
 @static
 @return {Promise.<*>}
 */
Promise.all = function(iterable) {};
/**
 @param {Iterable.<Promise>} iterable
 @static
 @return {Promise.<*>}
 */
Promise.race = function(iterable) {};
/**
 @param {*} [r]
 @static
 @return {Promise.<*>}
 */
Promise.reject = function(r) {};
/**
 @param {(T | Promise.<T>)} [x]
 @static
 @return {Promise.<T>}
 @template T
 */
Promise.resolve = function(x) {};
/**
 @constructor
 @template T
 */
function Promise(executor) {}
/**
 @param {function(*): (Promise.<T> | T)} [onRejected]
 @return {Promise.<T>}
 */
Promise.prototype.catch = function(onRejected) {};
/**
 @param {function(T): (Promise.<TResult> | TResult)} [onFulfilled]
 @param {function(*): (Promise.<TResult> | TResult)} [onRejected]
 @return {Promise.<TResult>}
 @template TResult
 */
Promise.prototype.then = function(onFulfilled,onRejected) {};

/**
 @param {Function} target
 @param {Function} thisArgument
 @param argumentsList
 @static
 */
Reflect.apply = function(target,thisArgument,argumentsList) {};
/**
 @param {Function} target
 @param argumentsList
 @static
 */
Reflect.construct = function(target,argumentsList) {};
/**
 @param {*} target
 @param {*} propertyKey
 @param {*} attributes
 @static
 @return {boolean}
 */
Reflect.defineProperty = function(target,propertyKey,attributes) {};
/**
 @param {*} target
 @param {*} propertyKey
 @static
 @return {boolean}
 */
Reflect.deleteProperty = function(target,propertyKey) {};
/**
 @param {*} target
 @static
 @return {Iterator}
 */
Reflect.enumerate = function(target) {};
/**
 @param target
 @param propertyKey
 @param [receiver]
 @static
 */
Reflect.get = function(target,propertyKey,receiver) {};
/**
 @static
 */
Reflect.getOwnPropertyDescriptor = function(target,propertyKey) {};
/**
 @static
 */
Reflect.getPrototypeOf = function(target) {};
/**
 @static
 @return {boolean}
 */
Reflect.has = function(target,propertyKey) {};
/**
 @static
 @return {boolean}
 */
Reflect.isExtensible = function(target) {};
/**
 @static
 @return {Array}
 */
Reflect.ownKeys = function(target) {};
/**
 @static
 @return {boolean}
 */
Reflect.preventExtensions = function(target) {};
/**
 @param target
 @param propertyKey
 @param value
 @param [receiver]
 @static
 @return {boolean}
 */
Reflect.set = function(target,propertyKey,value,receiver) {};
/**
 @static
 @return {boolean}
 */
Reflect.setPrototypeOf = function(target,proto) {};
Reflect = {};

/**
 @static
 */
Proxy.revocable = function(target,handler) {};
/**
 @constructor
 */
function Proxy(target,handler) {}

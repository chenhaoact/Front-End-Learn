/**
 * Created by chenhaoact on 2017/6/15.
 * 这里的源码来自webstorm的javasrriptLanguage.jar的
 * com/intellij/lang/javascript/index/predefined下的HTML5.js
 */
/**
 @type {number}
 @const
 */
Blob.prototype.size = 0;
/**
 @type {string}
 @const
 */
Blob.prototype.type = null;
/**
 @param {number} [start]
 @param {number} [end]
 @param {string} [contentType]
 @return {Blob}
 */
Blob.prototype.slice = function(start,end,contentType) {};
Blob = {};

/**
 @type {number}
 @const
 */
FileList.prototype.length = 0;
/**
 @param {number} [item]
 @return {File}
 */
FileList.prototype.item = function(item) {};
FileList = {};

/**
 @type {FileList}
 @const
 */
HTMLInputElement.prototype.files = 0;
HTMLInputElement = {};

/**
 @type {string}
 @const
 */
File.prototype.name = null;
/**
 @type {Date}
 @const
 */
File.prototype.lastModifiedDate = 0;
File.prototype = new Blob();
File = {};

/**
 @static
 @type {number}
 @const
 */
FileReader.EMPTY = 0;
/**
 @static
 @type {number}
 @const
 */
FileReader.LOADING = 1;
/**
 @static
 @type {number}
 @const
 */
FileReader.DONE = 2;
/**
 @type {number}
 @const
 */
FileReader.prototype.readyState = 0;
/**
 @type {Object}
 @const
 */
FileReader.prototype.result = 0;
/**
 @type {Error}
 @const
 */
FileReader.prototype.error = 0;
/**
 @type {Function}
 */
Object.defineProperty(FileReader, "onloadstart", { set: function(value) {} });
/**
 @type {Function}
 */
Object.defineProperty(FileReader, "onprogress", { set: function(value) {} });
/**
 @type {Function}
 */
Object.defineProperty(FileReader, "onload", { set: function(value) {} });
/**
 @type {Function}
 */
Object.defineProperty(FileReader, "onabort", { set: function(value) {} });
/**
 @type {Function}
 */
Object.defineProperty(FileReader, "onerror", { set: function(value) {} });
/**
 @type {Function}
 */
Object.defineProperty(FileReader, "onloadend", { set: function(value) {} });
/**
 @param {Blob} blob
 @return {void}
 */
FileReader.prototype.readAsArrayBuffer = function(blob) {};
/**
 @param {Blob} blob
 @return {void}
 */
FileReader.prototype.readAsBinaryString = function(blob) {};
/**
 @param {Blob} blob
 @param {string} [encoding]
 @return {void}
 */
FileReader.prototype.readAsText = function(blob,encoding) {};
/**
 @param {Blob} blob
 @return {void}
 */
FileReader.prototype.readAsDataURL = function(blob) {};
/**
 @return {void}
 */
FileReader.prototype.abort = function() {};
FileReader.prototype = new EventTarget();
FileReader = {};

/**
 @type {DOMStringMap}
 @const
 */
Node.prototype.dataset = 0;
/**
 @type {DOMTokenList}
 @const
 */
Node.prototype.classList = 0;
Node = {};

DOMStringMap = {};

/**
 @type {Number}
 @const
 */
DOMTokenList.prototype.length = 0;
/**
 @param {Number} [index]
 @return {string}
 */
DOMTokenList.prototype.item = function(index) {};
/**
 @param {string} className
 @return {boolean}
 */
DOMTokenList.prototype.contains = function(className) {};
/**
 @param {...string} [className]
 */
DOMTokenList.prototype.add = function(className) {};
/**
 @param {...string} [className]
 */
DOMTokenList.prototype.remove = function(className) {};
/**
 @param {string} className
 @param {boolean} [force]
 */
DOMTokenList.prototype.toggle = function(className,force) {};
DOMTokenList = {};

/**
 @param {Database} database
 @return {void}
 */
DatabaseCallback.prototype.handleEvent = function(database) {};
DatabaseCallback = {};

/**
 @static
 @const
 */
Notification.permission = 0;
/**
 @param {Function} [callback]
 @static
 @return {void}
 */
Notification.requestPermission = function(callback) {};
/**
 @type {Function}
 */
Notification.prototype.ondisplay = 0;
/**
 @type {Function}
 */
Notification.prototype.onerror = 0;
/**
 @type {Function}
 */
Notification.prototype.onclose = 0;
/**
 @return {void}
 */
Notification.prototype.show = function() {};
/**
 @return {void}
 */
Notification.prototype.cancel = function() {};
Notification.prototype = new EventTarget();
Notification = {};

HtmlElement = {};

/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.HAVE_NOTHING = 0;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.HAVE_METADATA = 1;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.HAVE_CURRENT_DATA = 2;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.HAVE_FUTURE_DATA = 3;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.HAVE_ENOUGH_DATA = 4;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.NETWORK_EMPTY = 0;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.NETWORK_IDLE = 1;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.NETWORK_LOADING = 2;
/**
 @static
 @type {Number}
 @const
 */
HTMLMediaElement.NETWORK_NO_SOURCE = 3;
/**
 @type {MediaError}
 @const
 */
HTMLMediaElement.prototype.error = 0;
/**
 @type {string}
 */
HTMLMediaElement.prototype.src = null;
/**
 @type {string}
 @const
 */
HTMLMediaElement.prototype.currentSrc = null;
/**
 @type {Number}
 @const
 */
HTMLMediaElement.prototype.networkState = 0;
/**
 @type {string}
 */
HTMLMediaElement.prototype.preload = null;
/**
 @type {TimeRanges}
 @const
 */
HTMLMediaElement.prototype.buffered = 0;
/**
 @type {Number}
 @const
 */
HTMLMediaElement.prototype.readyState = 0;
/**
 @type {boolean}
 @const
 */
HTMLMediaElement.prototype.seeking = 0;
/**
 @type {Number}
 */
HTMLMediaElement.prototype.currentTime = 0;
/**
 @type {Number}
 @const
 */
HTMLMediaElement.prototype.startTime = 0;
/**
 @type {Number}
 @const
 */
HTMLMediaElement.prototype.duration = 0;
/**
 @type {boolean}
 @const
 */
HTMLMediaElement.prototype.paused = 0;
/**
 @type {Number}
 */
HTMLMediaElement.prototype.defaultPlaybackRate = 0;
/**
 @type {Number}
 */
HTMLMediaElement.prototype.playbackRate = 0;
/**
 @type {TimeRanges}
 @const
 */
HTMLMediaElement.prototype.played = 0;
/**
 @type {TimeRanges}
 @const
 */
HTMLMediaElement.prototype.seekable = 0;
/**
 @type {boolean}
 @const
 */
HTMLMediaElement.prototype.ended = 0;
/**
 @type {boolean}
 */
HTMLMediaElement.prototype.autoplay = 0;
/**
 @type {boolean}
 */
HTMLMediaElement.prototype.loop = 0;
/**
 @type {boolean}
 */
HTMLMediaElement.prototype.controls = 0;
/**
 @type {Number}
 */
HTMLMediaElement.prototype.volume = 0;
/**
 @type {boolean}
 */
HTMLMediaElement.prototype.muted = 0;
/**
 @type {Array}
 @const
 */
HTMLMediaElement.prototype.tracks = 0;
/**
 @return {void}
 */
HTMLMediaElement.prototype.load = function() {};
/**
 @param {string} type
 @return {string}
 */
HTMLMediaElement.prototype.canPlayType = function(type) {};
/**
 @return {void}
 */
HTMLMediaElement.prototype.play = function() {};
/**
 @return {void}
 */
HTMLMediaElement.prototype.pause = function() {};
/**
 @param {string} label
 @param {string} kind
 @param {string} language
 @return {MutableTimedTrack}
 */
HTMLMediaElement.prototype.addTrack = function(label,kind,language) {};
HTMLMediaElement.prototype = new HTMLElement();
HTMLMediaElement = {};

/**
 @static
 @type {number}
 @const
 */
MediaError.MEDIA_ERR_ABORTED = 1;
/**
 @static
 @type {number}
 @const
 */
MediaError.MEDIA_ERR_NETWORK = 2;
/**
 @static
 @type {number}
 @const
 */
MediaError.MEDIA_ERR_DECODE = 3;
/**
 @static
 @type {number}
 @const
 */
MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
/**
 @type {number}
 @const
 */
MediaError.prototype.code = 0;
MediaError = {};

/**
 @type {number}
 @const
 */
TimeRanges.prototype.length = 0;
/**
 @param {number} index
 @return {number}
 */
TimeRanges.prototype.start = function(index) {};
/**
 @param {number} index
 @return {number}
 */
TimeRanges.prototype.end = function(index) {};
TimeRanges = {};

/**
 @static
 @type {number}
 @const
 */
TimedTrack.NONE = 0;
/**
 @static
 @type {number}
 @const
 */
TimedTrack.LOADING = 1;
/**
 @static
 @type {number}
 @const
 */
TimedTrack.LOADED = 2;
/**
 @static
 @type {number}
 @const
 */
TimedTrack.ERROR = 3;
/**
 @static
 @type {number}
 @const
 */
TimedTrack.OFF = 0;
/**
 @static
 @type {number}
 @const
 */
TimedTrack.HIDDEN = 1;
/**
 @static
 @type {number}
 @const
 */
TimedTrack.SHOWING = 2;
/**
 @type {string}
 @const
 */
TimedTrack.prototype.kind = null;
/**
 @type {string}
 @const
 */
TimedTrack.prototype.label = null;
/**
 @type {string}
 @const
 */
TimedTrack.prototype.language = null;
/**
 @type {number}
 @const
 */
TimedTrack.prototype.readyState = 0;
/**
 @type {Function}
 @const
 */
TimedTrack.prototype.onload = 0;
/**
 @type {Function}
 @const
 */
TimedTrack.prototype.onerror = 0;
/**
 @type {number}
 */
TimedTrack.prototype.mode = 0;
/**
 @type {TimedTrackCueList}
 @const
 */
TimedTrack.prototype.cues = 0;
/**
 @type {TimedTrackCueList}
 @const
 */
TimedTrack.prototype.activeCues = 0;
/**
 @type {Function}
 @const
 */
TimedTrack.prototype.onentercue = 0;
/**
 @type {Function}
 @const
 */
TimedTrack.prototype.onexitcue = 0;
TimedTrack = {};

/**
 @param {TimedTrackCue} cue
 @return {void}
 */
MutableTimedTrack.prototype.addCue = function(cue) {};
/**
 @param {TimedTrackCue} cue
 @return {void}
 */
MutableTimedTrack.prototype.removeCue = function(cue) {};
MutableTimedTrack.prototype = new TimedTrack();
MutableTimedTrack = {};

/**
 @type {TimedTrack}
 @const
 */
TimedTrackCue.prototype.track = 0;
/**
 @type {string}
 @const
 */
TimedTrackCue.prototype.id = null;
/**
 @type {Number}
 @const
 */
TimedTrackCue.prototype.startTime = 0;
/**
 @type {Number}
 @const
 */
TimedTrackCue.prototype.endTime = 0;
/**
 @type {boolean}
 @const
 */
TimedTrackCue.prototype.pauseOnExit = 0;
/**
 @type {string}
 @const
 */
TimedTrackCue.prototype.direction = null;
/**
 @type {boolean}
 @const
 */
TimedTrackCue.prototype.snapToLines = 0;
/**
 @type {Number}
 @const
 */
TimedTrackCue.prototype.linePosition = 0;
/**
 @type {Number}
 @const
 */
TimedTrackCue.prototype.textPosition = 0;
/**
 @type {Number}
 @const
 */
TimedTrackCue.prototype.size = 0;
/**
 @type {string}
 @const
 */
TimedTrackCue.prototype.alignment = null;
/**
 @type {string}
 @const
 */
TimedTrackCue.prototype.voice = null;
/**
 @return {string}
 */
TimedTrackCue.prototype.getCueAsSource = function() {};
/**
 @return {DocumentFragment}
 */
TimedTrackCue.prototype.getCueAsHTML = function() {};
/**
 @param {string} id
 @param {Number} startTime
 @param {Number} endTime
 @param {string} settings
 @param {string} text
 @param {boolean} [pauseOnExit]
 @return {TimedTrackCue}
 */
TimedTrackCue.prototype.TimedTrackCue = function(id,startTime,endTime,settings,text,pauseOnExit) {};
TimedTrackCue = {};

/**
 @type {Number}
 @const
 */
TimedTrackCueList.prototype.length = 0;
/**
 @param {string} id
 @return {TimedTrackCue}
 */
TimedTrackCueList.prototype.getCueById = function(id) {};
TimedTrackCueList = {};

/**
 @type {Number}
 */
HTMLVideoElement.prototype.width = 0;
/**
 @type {Number}
 */
HTMLVideoElement.prototype.height = 0;
/**
 @type {Number}
 @const
 */
HTMLVideoElement.prototype.videoWidth = 0;
/**
 @type {Number}
 @const
 */
HTMLVideoElement.prototype.videoHeight = 0;
/**
 @type {string}
 */
HTMLVideoElement.prototype.poster = null;
HTMLVideoElement.prototype = new HTMLMediaElement();
HTMLVideoElement = {};

/**
 @type {string}
 @const
 */
Database.prototype.version = null;
/**
 @param {SQLTransactionCallback|SQLTransactionSyncCallback|Function} callback
 @param {SQLTransactionErrorCallback|Function} [errorCallback]
 @param {SQLVoidCallback|Function} [successCallback]
 */
Database.prototype.transaction = function(callback,errorCallback,successCallback) {};
/**
 @param {SQLTransactionCallback|SQLTransactionSyncCallback|Function} callback
 @param {SQLTransactionErrorCallback|Function} [errorCallback]
 @param {SQLVoidCallback|Function} [successCallback]
 */
Database.prototype.readTransaction = function(callback,errorCallback,successCallback) {};
/**
 @param {string} oldVersion
 @param {string} newVersion
 @param {SQLTransactionCallback|Function} [callback]
 @param {SQLTransactionErrorCallback|Function} [errorCallback]
 @param {SQLVoidCallback|Function} [successCallback]
 */
Database.prototype.changeVersion = function(oldVersion,newVersion,callback,errorCallback,successCallback) {};
Database = {};

/**
 @return {void}
 */
SQLVoidCallback.prototype.handleEvent = function() {};
SQLVoidCallback = {};

/**
 @param {SQLTransaction} [transaction]
 @return {void}
 */
SQLTransactionCallback.prototype.handleEvent = function(transaction) {};
SQLTransactionCallback = {};

/**
 @param {SQLError} [error]
 @return {void}
 */
SQLTransactionErrorCallback.prototype.handleEvent = function(error) {};
SQLTransactionErrorCallback = {};

/**
 @param {string} sqlStatement
 @param {Object[]} [arguments]
 @param {SQLStatementCallback} [callback]
 @param {SQLStatementErrorCallback} [errorCallback]
 @return {void}
 */
SQLTransaction.prototype.executeSql = function(sqlStatement,arguments,callback,errorCallback) {};
SQLTransaction = {};

/**
 @param {SQLTransaction} [transaction]
 @param {SQLResultSet} [resultSet]
 @return {void}
 */
SQLStatementCallback.prototype.handleEvent = function(transaction,resultSet) {};
SQLStatementCallback = {};

/**
 @param {SQLTransaction} [transaction]
 @param {SQLError} [error]
 @return {boolean}
 */
SQLStatementErrorCallback.prototype.handleEvent = function(transaction,error) {};
SQLStatementErrorCallback = {};

/**
 @param {SQLTransactionSync} [transaction]
 @return {void}
 */
SQLTransactionSyncCallback.prototype.handleEvent = function(transaction) {};
SQLTransactionSyncCallback = {};

/**
 @param {string} sqlStatement
 @param {Object[]} [arguments]
 @return {SQLResultSet}
 */
SQLTransactionSync.prototype.executeSql = function(sqlStatement,arguments) {};
SQLTransactionSync = {};

/**
 @type {Number}
 @const
 */
SQLResultSet.prototype.insertId = 0;
/**
 @type {Number}
 @const
 */
SQLResultSet.prototype.rowsAffected = 0;
/**
 @type {SQLResultSetRowList}
 @const
 */
SQLResultSet.prototype.rows = 0;
SQLResultSet = {};

/**
 @type {number}
 @const
 */
SQLResultSetRowList.prototype.length = 0;
/**
 @param {number} index
 */
SQLResultSetRowList.prototype.item = function(index) {};
SQLResultSetRowList = {};

/**
 @static
 @type {number}
 @const
 */
SQLError.UNKNOWN_ERR = 0;
/**
 @static
 @type {number}
 @const
 */
SQLError.DATABASE_ERR = 1;
/**
 @static
 @type {number}
 @const
 */
SQLError.VERSION_ERR = 2;
/**
 @static
 @type {number}
 @const
 */
SQLError.TOO_LARGE_ERR = 3;
/**
 @static
 @type {number}
 @const
 */
SQLError.QUOTA_ERR = 4;
/**
 @static
 @type {number}
 @const
 */
SQLError.SYNTAX_ERR = 5;
/**
 @static
 @type {number}
 @const
 */
SQLError.CONSTRAINT_ERR = 6;
/**
 @static
 @type {number}
 @const
 */
SQLError.TIMEOUT_ERR = 7;
/**
 @type {number}
 @const
 */
SQLError.prototype.code = 0;
/**
 @type {string}
 @const
 */
SQLError.prototype.message = null;
SQLError = {};

/**
 @type {string}
 @const
 */
MessageEvent.prototype.origin = null;
/**
 @type {string}
 @const
 */
MessageEvent.prototype.lastEventId = null;
/**
 @type {Window}
 @const
 */
MessageEvent.prototype.source = 0;
MessageEvent.prototype = new Event();
MessageEvent = {};

/**
 @type {number}
 @const
 */
History.prototype.length = 0;
/**
 @type {Object}
 @const
 */
History.prototype.state = 0;
/**
 @param {Object} [data]
 @param {string} [title]
 @param {string} [url]
 @return {void}
 */
History.prototype.pushState = function(data,title,url) {};
/**
 @param {Object} [data]
 @param {string} [title]
 @param {string} [url]
 @return {void}
 */
History.prototype.replaceState = function(data,title,url) {};
History = {};

/**
 @param {string} [url]
 @return {void}
 */
Location.prototype.assign = function(url) {};
/**
 @param {string} [url]
 @return {string}
 */
Location.prototype.resolveURL = function(url) {};
Location = {};

/**
 @static
 @type {number}
 @const
 */
SQLException.UNKNOWN_ERR = 0;
/**
 @static
 @type {number}
 @const
 */
SQLException.DATABASE_ERR = 1;
/**
 @static
 @type {number}
 @const
 */
SQLException.VERSION_ERR = 2;
/**
 @static
 @type {number}
 @const
 */
SQLException.TOO_LARGE_ERR = 3;
/**
 @static
 @type {number}
 @const
 */
SQLException.QUOTA_ERR = 4;
/**
 @static
 @type {number}
 @const
 */
SQLException.SYNTAX_ERR = 5;
/**
 @static
 @type {number}
 @const
 */
SQLException.CONSTRAINT_ERR = 6;
/**
 @static
 @type {number}
 @const
 */
SQLException.TIMEOUT_ERR = 7;
/**
 @type {number}
 @const
 */
SQLException.prototype.code = 0;
/**
 @type {string}
 @const
 */
SQLException.prototype.message = null;
SQLException.prototype = new Error();
SQLException = {};

/**
 @type {string}
 */
HTMLImageElement.prototype.crossOrigin = null;
/**
 @type {boolean}
 @const
 */
HTMLImageElement.prototype.complete = 0;
/**
 @type {number}
 @const
 */
HTMLImageElement.prototype.naturalHeight = 0;
/**
 @type {number}
 @const
 */
HTMLImageElement.prototype.naturalWidth = 0;
HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement = {};

/**
 @type {number}
 */
HTMLCanvasElement.prototype.width = 0;
/**
 @type {number}
 */
HTMLCanvasElement.prototype.height = 0;
/**
 @param {string} contextId
 @param {...*} [args]
 @return {(CanvasRenderingContext2D|WebGLRenderingContext)}
 */
HTMLCanvasElement.prototype.getContext = function(contextId,args) {};
/**
 @param {string} [String]
 @param {*} [args]
 @return {string}
 */
HTMLCanvasElement.prototype.toDataURL = function(String,args) {};
HTMLCanvasElement.prototype = new HTMLElement();
HTMLCanvasElement = {};

/**
 @param {SVGMatrix} [transform]
 */
CanvasPattern.prototype.setTransform = function(transform) {};
CanvasPattern = {};

SVGMatrix.prototype.inverse = function() {};
SVGMatrix = {};

/**
 @type {HTMLCanvasElement}
 @const
 */
CanvasRenderingContext2D.prototype.canvas = 0;
/**
 @type {number}
 */
CanvasRenderingContext2D.prototype.globalAlpha = 0;
/**
 @type {string}
 */
CanvasRenderingContext2D.prototype.globalCompositeOperation = null;
/**
 @type {String|CanvasGradient|CanvasPattern}
 */
CanvasRenderingContext2D.prototype.fillStyle = 0;
/**
 @type {String|CanvasGradient|CanvasPattern}
 */
CanvasRenderingContext2D.prototype.strokeStyle = 0;
/**
 @type {Number}
 */
CanvasRenderingContext2D.prototype.lineWidth = 0;
/**
 @type {string}
 */
CanvasRenderingContext2D.prototype.lineCap = null;
/**
 @type {string}
 */
CanvasRenderingContext2D.prototype.lineJoin = null;
/**
 @type {Number}
 */
CanvasRenderingContext2D.prototype.miterLimit = 0;
/**
 @type {Number}
 */
CanvasRenderingContext2D.prototype.shadowOffsetX = 0;
/**
 @type {Number}
 */
CanvasRenderingContext2D.prototype.shadowOffsetY = 0;
/**
 @type {Number}
 */
CanvasRenderingContext2D.prototype.shadowBlur = 0;
/**
 @type {string}
 */
CanvasRenderingContext2D.prototype.shadowColor = null;
/**
 @type {string}
 */
CanvasRenderingContext2D.prototype.font = null;
/**
 @type {string}
 */
CanvasRenderingContext2D.prototype.textAlign = null;
/**
 @type {string}
 */
CanvasRenderingContext2D.prototype.textBaseline = null;
CanvasRenderingContext2D.prototype.save = function() {};
CanvasRenderingContext2D.prototype.restore = function() {};
/**
 @param {number} x
 @param {number} y
 */
CanvasRenderingContext2D.prototype.scale = function(x,y) {};
/**
 @param {number} angle
 */
CanvasRenderingContext2D.prototype.rotate = function(angle) {};
/**
 @param {number} x
 @param {number} y
 */
CanvasRenderingContext2D.prototype.translate = function(x,y) {};
/**
 @param {number} m11
 @param {number} m12
 @param {number} m21
 @param {number} m22
 @param {number} dx
 @param {number} dy
 */
CanvasRenderingContext2D.prototype.transform = function(m11,m12,m21,m22,dx,dy) {};
/**
 @param {number} m11
 @param {number} m12
 @param {number} m21
 @param {number} m22
 @param {number} dx
 @param {number} dy
 */
CanvasRenderingContext2D.prototype.setTransform = function(m11,m12,m21,m22,dx,dy) {};
/**
 @param {number} x0
 @param {number} y0
 @param {number} x1
 @param {number} y1
 @return {CanvasGradient}
 */
CanvasRenderingContext2D.prototype.createLinearGradient = function(x0,y0,x1,y1) {};
/**
 @param {number} x0
 @param {number} y0
 @param {number} r0
 @param {number} x1
 @param {number} y1
 @param {number} r1
 @return {CanvasGradient}
 */
CanvasRenderingContext2D.prototype.createRadialGradient = function(x0,y0,r0,x1,y1,r1) {};
/**
 @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} image
 @param {string} repetition
 @return {CanvasPattern}
 */
CanvasRenderingContext2D.prototype.createPattern = function(image,repetition) {};
/**
 @param {Number} x
 @param {Number} y
 @param {Number} w
 @param {Number} h
 */
CanvasRenderingContext2D.prototype.clearRect = function(x,y,w,h) {};
/**
 @param {Number} x
 @param {Number} y
 @param {Number} w
 @param {Number} h
 */
CanvasRenderingContext2D.prototype.fillRect = function(x,y,w,h) {};
/**
 @param {Number} x
 @param {Number} y
 @param {Number} w
 @param {Number} h
 */
CanvasRenderingContext2D.prototype.strokeRect = function(x,y,w,h) {};
CanvasRenderingContext2D.prototype.beginPath = function() {};
CanvasRenderingContext2D.prototype.closePath = function() {};
/**
 @param {Number} x
 @param {Number} y
 */
CanvasRenderingContext2D.prototype.moveTo = function(x,y) {};
/**
 @param {Number} x
 @param {Number} y
 */
CanvasRenderingContext2D.prototype.lineTo = function(x,y) {};
/**
 @param {Number} cpx
 @param {Number} cpy
 @param {Number} x
 @param {Number} y
 */
CanvasRenderingContext2D.prototype.quadraticCurveTo = function(cpx,cpy,x,y) {};
/**
 @param {Number} cp1x
 @param {Number} cp1y
 @param {Number} cp2x
 @param {Number} cp2y
 @param {Number} x
 @param {Number} y
 */
CanvasRenderingContext2D.prototype.bezierCurveTo = function(cp1x,cp1y,cp2x,cp2y,x,y) {};
/**
 @param {Number} x1
 @param {Number} y1
 @param {Number} x2
 @param {Number} y2
 @param {Number} radius
 */
CanvasRenderingContext2D.prototype.arcTo = function(x1,y1,x2,y2,radius) {};
/**
 @param {Number} x
 @param {Number} y
 @param {Number} w
 @param {Number} h
 */
CanvasRenderingContext2D.prototype.rect = function(x,y,w,h) {};
/**
 @param {Number} x
 @param {Number} y
 @param {Number} radius
 @param {Number} startAngle
 @param {Number} endAngle
 @param {boolean} [anticlockwise]
 */
CanvasRenderingContext2D.prototype.arc = function(x,y,radius,startAngle,endAngle,anticlockwise) {};
CanvasRenderingContext2D.prototype.fill = function() {};
CanvasRenderingContext2D.prototype.stroke = function() {};
CanvasRenderingContext2D.prototype.clip = function() {};
/**
 @param {Number} x
 @param {Number} y
 @return {boolean}
 */
CanvasRenderingContext2D.prototype.isPointInPath = function(x,y) {};
/**
 @param {Element} element
 @param {Number} xCaret
 @param {Number} yCaret
 @param {boolean} [canDrawCustom]
 */
CanvasRenderingContext2D.prototype.drawFocusRing = function(element,xCaret,yCaret,canDrawCustom) {};
/**
 @param {string} text
 @param {Number} x
 @param {Number} y
 @param {Number} [maxWidth]
 */
CanvasRenderingContext2D.prototype.fillText = function(text,x,y,maxWidth) {};
/**
 @param {string} text
 @param {Number} x
 @param {Number} y
 @param {Number} [maxWidth]
 */
CanvasRenderingContext2D.prototype.strokeText = function(text,x,y,maxWidth) {};
/**
 @param {string} text
 @return {TextMetrics}
 */
CanvasRenderingContext2D.prototype.measureText = function(text) {};
/**
 @param {Element} img_elem
 @param {Number} dx_or_sx
 @param {Number} dy_or_sy
 @param {Number} [dw_or_sw]
 @param {Number} [dh_or_sh]
 @param {Number} [dx]
 @param {Number} [dy]
 @param {Number} [dw]
 @param {Number} [dh]
 */
CanvasRenderingContext2D.prototype.drawImage = function(img_elem,dx_or_sx,dy_or_sy,dw_or_sw,dh_or_sh,dx,dy,dw,dh) {};
/**
 @param {ImageData|Number} imagedata_or_sw
 @param {Number} [sh]
 @return {ImageData}
 */
CanvasRenderingContext2D.prototype.createImageData = function(imagedata_or_sw,sh) {};
/**
 @param {Number} sx
 @param {Number} sy
 @param {Number} sw
 @param {Number} sh
 @return {ImageData}
 */
CanvasRenderingContext2D.prototype.getImageData = function(sx,sy,sw,sh) {};
/**
 @param {ImageData} image_data
 @param {Number} dx
 @param {Number} dy
 @param {Number} [dirtyX]
 @param {Number} [dirtyY]
 @param {Number} [dirtyWidth]
 @param {Number} [dirtyHeight]
 */
CanvasRenderingContext2D.prototype.putImageData = function(image_data,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight) {};
CanvasRenderingContext2D = {};

/**
 @param {Number} offset
 @param {string} color
 */
CanvasGradient.prototype.addColorStop = function(offset,color) {};
CanvasGradient = {};

/**
 @type {CanvasPixelArray}
 @const
 */
ImageData.prototype.data = 0;
/**
 @type {Number}
 @const
 */
ImageData.prototype.width = 0;
/**
 @type {Number}
 @const
 */
ImageData.prototype.height = 0;
ImageData = {};

/**
 @type {Number}
 @const
 */
CanvasPixelArray.prototype.length = 0;
CanvasPixelArray = {};

/**
 @type {Number}
 @const
 */
TextMetrics.prototype.width = 0;
TextMetrics = {};

/**
 @type {WorkerNavigator}
 @const
 */
Window.prototype.navigator = 0;
/**
 @type {Storage}
 @const
 */
Window.prototype.localStorage = 0;
/**
 @type {Storage}
 @const
 */
Window.prototype.sessionStorage = 0;
/**
 @param {Function} callback
 @param {Element} element
 @return {Number}
 */
Window.prototype.webkitRequestAnimationFrame = function(callback,element) {};
/**
 @param {Function} callback
 @return {void}
 */
Window.prototype.webkitCancelAnimationFrame = function(callback) {};
/**
 @param {Function} callback
 @return {Number}
 */
Window.prototype.msRequestAnimationFrame = function(callback) {};
/**
 @param {Function} callback
 @return {void}
 */
Window.prototype.msCancelAnimationFrame = function(callback) {};
/**
 @param {Function} callback
 @return {Number}
 */
Window.prototype.oRequestAnimationFrame = function(callback) {};
/**
 @param {Function} callback
 @return {void}
 */
Window.prototype.oCancelAnimationFrame = function(callback) {};
/**
 @param {Function} callback
 @return {Number}
 */
Window.prototype.mozRequestAnimationFrame = function(callback) {};
/**
 @param {Function} callback
 @return {void}
 */
Window.prototype.mozCancelAnimationFrame = function(callback) {};
/**
 @param {function(number):void} callback
 @return {Number}
 */
Window.prototype.requestAnimationFrame = function(callback) {};
/**
 @param {number} handle
 @return {void}
 */
Window.prototype.cancelAnimationFrame = function(handle) {};
/**
 @param {...string} urls
 @return {void}
 */
Window.prototype.importScripts = function(urls) {};
/**
 @param {string} name
 @param {string} version
 @param {string} displayName
 @param {Number} estimatedSize
 @param {DatabaseCallback|Function} [creationCallback]
 @return {Database}
 */
Window.prototype.openDatabase = function(name,version,displayName,estimatedSize,creationCallback) {};
/**
 @param {string} name
 @param {string} version
 @param {string} displayName
 @param {Number} estimatedSize
 @param {DatabaseCallback|Function} [creationCallback]
 @return {Database}
 */
Window.prototype.openDatabaseSync = function(name,version,displayName,estimatedSize,creationCallback) {};
/**
 @param {string} mediaQueryString
 @return {MediaQueryList}
 */
Window.prototype.matchMedia = function(mediaQueryString) {};
Window = {};

/**
 @type {boolean}
 @const
 */
MediaQueryList.prototype.matches = 0;
/**
 @type {string}
 */
MediaQueryList.prototype.media = null;
/**
 @param [listener]
 */
MediaQueryList.prototype.addListener = function(listener) {};
/**
 @param [listener]
 */
MediaQueryList.prototype.removeListener = function(listener) {};
MediaQueryList = {};

WorkerNavigator = {};

/**
 @type {Function}
 */
AbstractWorker.prototype.onerror = 0;
AbstractWorker = {};

/**
 @interface
 */
function Transferable() {}

/**
 @type {function({data: Object})}
 */
Worker.prototype.onmessage = 0;
/**
 @param {string} scriptURL
 @constructor
 */
function Worker(scriptURL) {}
Worker.prototype.terminate = function() {};
/**
 @param {*} message
 @param {Transferable[]} [transferList]
 */
Worker.prototype.postMessage = function(message,transferList) {};
Worker.prototype = new AbstractWorker();

/**
 @type {Function}
 @const
 */
SharedWorker.prototype.port = 0;
SharedWorker.prototype = new AbstractWorker();
SharedWorker = {};

/**
 @type {number}
 @const
 */
Storage.prototype.length = 0;
/**
 @param {number} index
 @return {string}
 */
Storage.prototype.key = function(index) {};
/**
 @param {string} key
 */
Storage.prototype.getItem = function(key) {};
/**
 @param {string} key
 @param {String|*} data
 */
Storage.prototype.setItem = function(key,data) {};
/**
 @param {string} key
 */
Storage.prototype.removeItem = function(key) {};
Storage.prototype.clear = function() {};
/**
 @interface
 */
function Storage() {}

/**
 @static
 @type {number}
 @const
 */
WebSocket.CONNECTING = 0;
/**
 @static
 @type {number}
 @const
 */
WebSocket.OPEN = 1;
/**
 @static
 @type {number}
 @const
 */
WebSocket.CLOSING = 2;
/**
 @static
 @type {number}
 @const
 */
WebSocket.CLOSED = 3;
/**
 @type {string}
 */
WebSocket.prototype.url = null;
/**
 @type {number}
 @const
 */
WebSocket.prototype.readyState = 0;
/**
 @type {number}
 @const
 */
WebSocket.prototype.bufferedAmount = 0;
/**
 @type {string}
 @const
 */
WebSocket.prototype.extensions = null;
/**
 @type {string}
 @const
 */
WebSocket.prototype.protocol = null;
/**
 @type {function(Event)}
 */
WebSocket.prototype.onopen = 0;
/**
 @type {function({data: (String|Blob|ArrayBuffer)})}
 */
WebSocket.prototype.onmessage = 0;
/**
 @type {function(Event)}
 */
WebSocket.prototype.onerror = 0;
/**
 @type {function({code: Number, reason: String, wasClean: Boolean})}
 */
WebSocket.prototype.onclose = 0;
/**
 @param {string} url
 @param {...string} protocols
 @constructor
 */
function WebSocket(url,protocols) {}
/**
 @param {String|ArrayBuffer|ArrayBufferView|Blob} data
 */
WebSocket.prototype.send = function(data) {};
/**
 @param {number} [code]
 @param {string} [reason]
 */
WebSocket.prototype.close = function(code,reason) {};

/**
 @static
 @return {boolean}
 */
ArrayBuffer.isView = function(arg) {};
/**
 @type {number}
 @const
 */
ArrayBuffer.prototype.byteLength = 0;
/**
 @param {number} length
 @constructor
 */
function ArrayBuffer(length) {}
/**
 @param {number} start
 @param {number} end
 @return {ArrayBuffer}
 */
ArrayBuffer.prototype.slice = function(start,end) {};

/**
 @type {ArrayBuffer}
 @const
 */
DataView.prototype.buffer = 0;
/**
 @type {number}
 @const
 */
DataView.prototype.byteOffset = 0;
/**
 @type {number}
 @const
 */
DataView.prototype.byteLength = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function DataView(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {number} [byteOffset]
 @param {boolean} [littleEndian = false]
 @return {number}
 */
DataView.prototype.getFloat32 = function(byteOffset,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {boolean} [littleEndian = false]
 @return {number}
 */
DataView.prototype.getFloat64 = function(byteOffset,littleEndian) {};
/**
 @param {number} [byteOffset]
 @return {number}
 */
DataView.prototype.getInt8 = function(byteOffset) {};
/**
 @param {number} [byteOffset]
 @param {boolean} [littleEndian = false]
 @return {number}
 */
DataView.prototype.getInt16 = function(byteOffset,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {boolean} [littleEndian = false]
 @return {number}
 */
DataView.prototype.getInt32 = function(byteOffset,littleEndian) {};
/**
 @param {number} [byteOffset]
 @return {number}
 */
DataView.prototype.getUint8 = function(byteOffset) {};
/**
 @param {number} [byteOffset]
 @param {boolean} [littleEndian = false]
 @return {number}
 */
DataView.prototype.getUint16 = function(byteOffset,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {boolean} [littleEndian = false]
 @return {number}
 */
DataView.prototype.getUint32 = function(byteOffset,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 @param {boolean} [littleEndian = false]
 */
DataView.prototype.setFloat32 = function(byteOffset,value,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 @param {boolean} [littleEndian = false]
 */
DataView.prototype.setFloat64 = function(byteOffset,value,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 */
DataView.prototype.setInt8 = function(byteOffset,value) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 @param {boolean} [littleEndian = false]
 */
DataView.prototype.setInt16 = function(byteOffset,value,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 @param {boolean} [littleEndian = false]
 */
DataView.prototype.setInt32 = function(byteOffset,value,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 */
DataView.prototype.setUint8 = function(byteOffset,value) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 @param {boolean} [littleEndian = false]
 */
DataView.prototype.setUint16 = function(byteOffset,value,littleEndian) {};
/**
 @param {number} [byteOffset]
 @param {number} [value]
 @param {boolean} [littleEndian = false]
 */
DataView.prototype.setUint32 = function(byteOffset,value,littleEndian) {};

/**
 @type {ArrayBuffer}
 @const
 */
ArrayBufferView.prototype.buffer = 0;
/**
 @type {number}
 @const
 */
ArrayBufferView.prototype.byteOffset = 0;
/**
 @type {number}
 @const
 */
ArrayBufferView.prototype.byteLength = 0;
/**
 @constructor
 */
function ArrayBufferView() {}

/**
 @static
 @type {number}
 @const
 */
Int8Array.BYTES_PER_ELEMENT = 8;
Int8Array.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function Int8Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Int8Array} array
 @param {number} [offset]
 @return {void}
 */
Int8Array.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} [end]
 @return {Int8Array}
 */
Int8Array.prototype.subarray = function(begin,end) {};
Int8Array.prototype = new ArrayBufferView();

/**
 @static
 @type {number}
 @const
 */
Uint8Array.BYTES_PER_ELEMENT = 8;
/**
 @type {number}
 @const
 */
Uint8Array.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function Uint8Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Uint8Array} array
 @param {number} [offset]
 @return {void}
 */
Uint8Array.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} [end]
 @return {Uint8Array}
 */
Uint8Array.prototype.subarray = function(begin,end) {};
Uint8Array.prototype = new ArrayBufferView();

/**
 @static
 @type {number}
 @const
 */
Int16Array.BYTES_PER_ELEMENT = 16;
/**
 @type {number}
 @const
 */
Int16Array.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function Int16Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Int16Array} array
 @param {number} [offset]
 @return {void}
 */
Int16Array.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} [end]
 @return {Int16Array}
 */
Int16Array.prototype.subarray = function(begin,end) {};
Int16Array.prototype = new ArrayBufferView();

/**
 @static
 @type {number}
 @const
 */
Uint16Array.BYTES_PER_ELEMENT = 16;
/**
 @type {number}
 @const
 */
Uint16Array.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function Uint16Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Uint16Array} array
 @param {number} [offset]
 @return {void}
 */
Uint16Array.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} [end]
 @return {Uint16Array}
 */
Uint16Array.prototype.subarray = function(begin,end) {};
Uint16Array.prototype = new ArrayBufferView();

/**
 @static
 @type {number}
 @const
 */
Int32Array.BYTES_PER_ELEMENT = 32;
/**
 @type {number}
 @const
 */
Int32Array.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function Int32Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Int32Array} array
 @param {number} [offset]
 @return {void}
 */
Int32Array.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} [end]
 @return {Int32Array}
 */
Int32Array.prototype.subarray = function(begin,end) {};
Int32Array.prototype = new ArrayBufferView();

/**
 @static
 @type {number}
 @const
 */
Uint32Array.BYTES_PER_ELEMENT = 32;
/**
 @type {number}
 @const
 */
Uint32Array.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {Number} [byteOffset]
 @param {Number} [length]
 @constructor
 */
function Uint32Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Uint32Array} array
 @param {Number} [offset]
 @return {void}
 */
Uint32Array.prototype.set = function(array,offset) {};
/**
 @param {Number} begin
 @param {Number} [end]
 @return {Uint32Array}
 */
Uint32Array.prototype.subarray = function(begin,end) {};
Uint32Array.prototype = new ArrayBufferView();

/**
 @static
 @type {number}
 @const
 */
Float32Array.BYTES_PER_ELEMENT = 32;
/**
 @type {number}
 @const
 */
Float32Array.prototype.length = 0;
/**
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function Float32Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Float32Array} array
 @param {number} [offset]
 @return {void}
 */
Float32Array.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} [end]
 @return {Float32Array}
 */
Float32Array.prototype.subarray = function(begin,end) {};
Float32Array.prototype = new ArrayBufferView();

/**
 @static
 @type {number}
 @const
 */
Float64Array.BYTES_PER_ELEMENT = 64;
/**
 @type {number}
 @const
 */
Float64Array.prototype.length = 0;
/**
 @param {number} bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 */
function Float64Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
 @param {Float64Array} array
 @param {number} [offset]
 @return {void}
 */
Float64Array.prototype.set = function(array,offset) {};
/**
 @param {number} begin
 @param {number} [end]
 @return {Float64Array}
 */
Float64Array.prototype.subarray = function(begin,end) {};
Float64Array.prototype = new ArrayBufferView();

/**
 @param {Function} successCallback
 @param {Function} [errorCallback]
 @param {Object} [options]
 @return {void}
 */
Geolocation.prototype.getCurrentPosition = function(successCallback,errorCallback,options) {};
/**
 @param {Function} successCallback
 @param {Function} [errorCallback]
 @param {Object} [options]
 @return {Number}
 */
Geolocation.prototype.watchPosition = function(successCallback,errorCallback,options) {};
/**
 @param {Number} [watchId]
 */
Geolocation.prototype.clearWatch = function(watchId) {};
Geolocation = {};

/**
 @type {Geolocation}
 @const
 */
Navigator.prototype.geolocation = 0;
Navigator = {};

/**
 @type {boolean}
 */
PositionOptions.prototype.enableHighAccuracy = 0;
/**
 @type {Number}
 */
PositionOptions.prototype.timeout = 0;
/**
 @type {Number}
 */
PositionOptions.prototype.maximumAge = 0;
PositionOptions = {};

/**
 @type {Coordinates}
 */
Position.prototype.coords = 0;
/**
 @type {Number}
 */
Position.prototype.timestamp = 0;
Position = {};

/**
 @type {Number}
 @const
 */
Coordinates.prototype.latitude = 0;
/**
 @type {Number}
 @const
 */
Coordinates.prototype.longitude = 0;
/**
 @type {Number}
 @const
 */
Coordinates.prototype.altitude = 0;
/**
 @type {Number}
 @const
 */
Coordinates.prototype.accuracy = 0;
/**
 @type {Number}
 @const
 */
Coordinates.prototype.altitudeAccuracy = 0;
/**
 @type {Number}
 @const
 */
Coordinates.prototype.heading = 0;
/**
 @type {Number}
 @const
 */
Coordinates.prototype.speed = 0;
Coordinates = {};

/**
 @type {number}
 @const
 */
PositionError.prototype.PERMISSION_DENIED = 1;
/**
 @type {number}
 @const
 */
PositionError.prototype.POSITION_UNAVAILABLE = 2;
/**
 @type {number}
 @const
 */
PositionError.prototype.TIMEOUT = 3;
/**
 @type {number}
 @const
 */
PositionError.prototype.code = 0;
/**
 @type {string}
 @const
 */
PositionError.prototype.message = null;
PositionError = {};

/**
 @type {function(Event)}
 */
XMLHttpRequestEventTarget.prototype.onloadstart = 0;
/**
 @type {function(Event)}
 */
XMLHttpRequestEventTarget.prototype.onprogress = 0;
/**
 @type {function(Event)}
 */
XMLHttpRequestEventTarget.prototype.onabort = 0;
/**
 @type {function(Event)}
 */
XMLHttpRequestEventTarget.prototype.onerror = 0;
/**
 @type {function(Event)}
 */
XMLHttpRequestEventTarget.prototype.onload = 0;
/**
 @type {function(Event)}
 */
XMLHttpRequestEventTarget.prototype.ontimeout = 0;
/**
 @type {function(Event)}
 */
XMLHttpRequestEventTarget.prototype.onloadend = 0;
XMLHttpRequestEventTarget.prototype = new EventTarget();
/**
 @interface
 */
function XMLHttpRequestEventTarget() {}

XMLHttpRequestUpload.prototype = new XMLHttpRequestEventTarget();
/**
 @interface
 */
function XMLHttpRequestUpload() {}

/**
 @param {string} name
 @param {Object} value
 @return {void}
 */
FormData.prototype.append = function(name,value) {};
FormData = {};

/**
 @type {boolean}
 */
HTMLSelectElement.prototype.autofocus = 0;
/**
 @type {boolean}
 */
HTMLSelectElement.prototype.required = 0;
/**
 @type {HTMLCollection}
 */
HTMLSelectElement.prototype.selectedOptions = 0;
/**
 @type {string}
 */
HTMLSelectElement.prototype.validationMessage = null;
/**
 @type {ValidityState}
 */
HTMLSelectElement.prototype.validity = 0;
/**
 @type {boolean}
 @const
 */
HTMLSelectElement.prototype.willValidate = 0;
/**
 @return {boolean}
 */
HTMLSelectElement.prototype.checkValidity = function() {};
/**
 @param {Number} index
 @return {Element}
 */
HTMLSelectElement.prototype.item = function(index) {};
/**
 @param {string} name
 @return {Element}
 */
HTMLSelectElement.prototype.namedItem = function(name) {};
/**
 @param {string} [error]
 @return {void}
 */
HTMLSelectElement.prototype.setCustomValidity = function(error) {};
HTMLSelectElement = {};

/**
 @type {boolean}
 @const
 */
ValidityState.prototype.valueMissing = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.typeMismatch = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.patternMismatch = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.tooLong = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.rangeUnderflow = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.rangeOverflow = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.stepMismatch = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.badInput = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.customError = 0;
/**
 @type {boolean}
 @const
 */
ValidityState.prototype.valid = 0;
/**
 @interface
 */
function ValidityState() {}

/**
 @type {HTMLHeadElement}
 @const
 */
Document.prototype.head = 0;
Document = {};

/**
 @param {Function} callback
 @constructor
 */
function MutationObserver(callback) {}
/**
 @param {Node} target
 @param {{childList:boolean, attributes:boolean, characterData:boolean, subtree:boolean, attributeOldValue:boolean, characterDataOldValue:boolean, attributeFilter:Array<String>}} options
 @return {void}
 */
MutationObserver.prototype.observe = function(target,options) {};
/**
 @return {void}
 */
MutationObserver.prototype.disconnect = function() {};
/**
 @return {Array<MutationRecord>}
 */
MutationObserver.prototype.takeRecords = function() {};

/**
 @type {string}
 @const
 */
MutationRecord.prototype.type = null;
/**
 @type {Node}
 @const
 */
MutationRecord.prototype.target = 0;
/**
 @type {NodeList}
 @const
 */
MutationRecord.prototype.addedNodes = 0;
/**
 @type {NodeList}
 @const
 */
MutationRecord.prototype.removedNodes = 0;
/**
 @type {Node}
 @const
 */
MutationRecord.prototype.previousSibling = 0;
/**
 @type {Node}
 @const
 */
MutationRecord.prototype.nextSibling = 0;
/**
 @type {string}
 @const
 */
MutationRecord.prototype.attributeName = null;
/**
 @type {string}
 @const
 */
MutationRecord.prototype.attributeNamespace = null;
/**
 @type {string}
 @const
 */
MutationRecord.prototype.oldValue = null;
MutationRecord = {};

/**
 @type {string}
 @const
 */
DataTransferItem.prototype.kind = null;
/**
 @type {string}
 @const
 */
DataTransferItem.prototype.type = null;
/**
 @param {function(string):void} [_callback]
 */
DataTransferItem.prototype.getAsString = function(_callback) {};
/**
 @return {File}
 */
DataTransferItem.prototype.getAsFile = function() {};
/**
 @interface
 */
function DataTransferItem() {}

/**
 @type {number}
 @const
 */
DataTransferItemList.prototype.length = 0;
/**
 @param {number} index
 @return {DataTransferItem}
 */
DataTransferItemList.prototype.getDataTransferItem = function(index) {};
/**
 @param {string} data
 @param {string} type
 */
DataTransferItemList.prototype.add = function(data,type) {};
/**
 @param {File} data
 */
DataTransferItemList.prototype.add = function(data) {};
/**
 @param {number} index
 */
DataTransferItemList.prototype.remove = function(index) {};
DataTransferItemList.prototype.clear = function() {};
/**
 @interface
 */
function DataTransferItemList() {}

/**
 @type {string}
 */
DataTransfer.prototype.dropEffect = null;
/**
 @type {string}
 */
DataTransfer.prototype.effectAllowed = null;
/**
 @type {DataTransferItemList}
 @const
 */
DataTransfer.prototype.items = 0;
/**
 @type {String[]}
 @const
 */
DataTransfer.prototype.types = 0;
/**
 @type {FileList}
 @const
 */
DataTransfer.prototype.files = 0;
/**
 @param {Element} image
 @param {number} x
 @param {number} y
 */
DataTransfer.prototype.setDragImage = function(image,x,y) {};
/**
 @param {string} format
 @return {string}
 */
DataTransfer.prototype.getData = function(format) {};
/**
 @param {string} format
 @param {string} data
 */
DataTransfer.prototype.setData = function(format,data) {};
/**
 @param {string} [format]
 */
DataTransfer.prototype.clearData = function(format) {};
/**
 @interface
 */
function DataTransfer() {}
/**
 @type {string}
 */
XMLHttpRequest.prototype.responseType = null;
/**
 @type {Object}
 */
XMLHttpRequest.prototype.response = 0;
/**
 @type {boolean}
 */
XMLHttpRequest.prototype.withCredentials = 0;
/**
 @type {XMLHttpRequestEventTarget}
 @const
 */
XMLHttpRequest.prototype.upload = 0;
/**
 @param {string} mimeType
 */
XMLHttpRequest.prototype.overrideMimeType = function(mimeType) {};
/**
 @type {string}
 */
HTMLFormElement.prototype.autocomplete = null;
/**
 @type {boolean}
 */
HTMLFormElement.prototype.noValidate = 0;

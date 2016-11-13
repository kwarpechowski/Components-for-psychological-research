!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";n(26);var i=n(29),r=n(27);window.GEW=function(t){var e=new i.Config(t),n=new r.Drawer(e);return n.run(),n}},function(t,e,n){"use strict";var i=n(9),r=n(25),s=n(20),o=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var i=this.operator,s=r.toSubscriber(t,e,n);if(i?i.call(s,this):s.add(this._subscribe(s)),s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},t.prototype.forEach=function(t,e){var n=this;if(e||(i.root.Rx&&i.root.Rx.config&&i.root.Rx.config.Promise?e=i.root.Rx.config.Promise:i.root.Promise&&(e=i.root.Promise)),!e)throw new Error("no Promise impl found");return new e(function(e,i){var r=n.subscribe(function(e){if(r)try{t(e)}catch(t){i(t),r.unsubscribe()}else t(e)},i,e)})},t.prototype._subscribe=function(t){return this.source.subscribe(t)},t.prototype[s.$$observable]=function(){return this},t.create=function(e){return new t(e)},t}();e.Observable=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=n(1),s=n(13),o=n(3),c=n(21),u=n(17),a=n(6),h=function(t){function e(e){t.call(this,e),this.destination=e}return i(e,t),e}(s.Subscriber);e.SubjectSubscriber=h;var l=function(t){function e(){t.call(this),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}return i(e,t),e.prototype[a.$$rxSubscriber]=function(){return new h(this)},e.prototype.lift=function(t){var e=new p(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;if(!this.isStopped)for(var e=this.observers,n=e.length,i=e.slice(),r=0;r<n;r++)i[r].next(t)},e.prototype.error=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,i=e.slice(),r=0;r<n;r++)i[r].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new c.ObjectUnsubscribedError;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),i=0;i<e;i++)n[i].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._subscribe=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;return this.hasError?(t.error(this.thrownError),o.Subscription.EMPTY):this.isStopped?(t.complete(),o.Subscription.EMPTY):(this.observers.push(t),new u.SubjectSubscription(this,t))},e.prototype.asObservable=function(){var t=new r.Observable;return t.source=this,t},e.create=function(t,e){return new p(t,e)},e}(r.Observable);e.Subject=l;var p=function(t){function e(e,n){t.call(this),this.destination=e,this.source=n}return i(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){var e=this.source;return e?this.source.subscribe(t):o.Subscription.EMPTY},e}(l);e.AnonymousSubject=p},function(t,e,n){"use strict";var i=n(23),r=n(24),s=n(8),o=n(14),c=n(7),u=n(22),a=function(){function t(t){this.closed=!1,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){this.closed=!0;var n=this,a=n._unsubscribe,h=n._subscriptions;if(this._subscriptions=null,s.isFunction(a)){var l=o.tryCatch(a).call(this);l===c.errorObject&&(e=!0,(t=t||[]).push(c.errorObject.e))}if(i.isArray(h))for(var p=-1,f=h.length;++p<f;){var b=h[p];if(r.isObject(b)){var l=o.tryCatch(b.unsubscribe).call(b);if(l===c.errorObject){e=!0,t=t||[];var d=c.errorObject.e;d instanceof u.UnsubscriptionError?t=t.concat(d.errors):t.push(d)}}}if(e)throw new u.UnsubscriptionError(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var n=e;switch(typeof e){case"function":n=new t(e);case"object":if(n.closed||"function"!=typeof n.unsubscribe)break;this.closed?n.unsubscribe():(this._subscriptions||(this._subscriptions=[])).push(n);break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return n},t.prototype.remove=function(e){if(null!=e&&e!==this&&e!==t.EMPTY){var n=this._subscriptions;if(n){var i=n.indexOf(e);i!==-1&&n.splice(i,1)}}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();e.Subscription=a},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e,n){"use strict";var i=n(1),r=n(19);i.Observable.fromEvent=r.fromEvent},function(t,e,n){"use strict";var i=n(9),r=i.root.Symbol;e.$$rxSubscriber="function"==typeof r&&"function"==typeof r.for?r.for("rxSubscriber"):"@@rxSubscriber"},function(t,e){"use strict";e.errorObject={e:{}}},function(t,e){"use strict";function n(t){return"function"==typeof t}e.isFunction=n},function(t,e){(function(t){"use strict";if(e.root="object"==typeof window&&window.window===window&&window||"object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t,!e.root)throw new Error("RxJS could not find any global context (window, self, global)")}).call(e,function(){return this}())},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=f[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(a(i.parts[s],e))}else{for(var o=[],s=0;s<i.parts.length;s++)o.push(a(i.parts[s],e));f[i.id]={id:i.id,refs:1,parts:o}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],s=r[0],o=r[1],c=r[2],u=r[3],a={css:o,media:c,sourceMap:u};n[s]?n[s].parts.push(a):e.push(n[s]={id:s,parts:[a]})}return e}function s(t,e){var n=v(),i=y[y.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function c(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",s(t,e),e}function a(t,e){var n,i,r;if(e.singleton){var s=m++;n=g||(g=c(e)),i=h.bind(null,n,s,!1),r=h.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=p.bind(null,n),r=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(e),i=l.bind(null,n),r=function(){o(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function h(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function l(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var f={},b=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=b(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function(t){for(var s=[],o=0;o<n.length;o++){var c=n[o],u=f[c.id];u.refs--,s.push(u)}if(t){var a=r(t);i(a,e)}for(var o=0;o<s.length;o++){var u=s[o];if(0===u.refs){for(var h=0;h<u.parts.length;h++)u.parts[h]();delete f[u.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";var n=function(){function t(){}return t.createElement=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},t.drawHeader=function(e,n){var i=t.createElement("a");i.setAttribute("href","javascript:;");var r=t.createElement("text");r.setAttribute("text-anchor","middle"),r.setAttribute("x","0"),r.setAttribute("y",e.toString());var s=document.createTextNode(n);return r.appendChild(s),i.appendChild(r),i},t.drawBorder=function(e){var n=t.createElement("circle");return n.setAttribute("cx","0"),n.setAttribute("cy","0"),n.setAttribute("r",e.toString()),n},t}();e.DrawHelper=n},function(t,e){"use strict";e.empty={closed:!0,next:function(t){},error:function(t){throw t},complete:function(){}}},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=n(8),s=n(3),o=n(12),c=n(6),u=function(t){function e(n,i,r){switch(t.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=o.empty;break;case 1:if(!n){this.destination=o.empty;break}if("object"==typeof n){n instanceof e?(this.destination=n,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new a(this,n));break}default:this.syncErrorThrowable=!0,this.destination=new a(this,n,i,r)}}return i(e,t),e.prototype[c.$$rxSubscriber]=function(){return this},e.create=function(t,n,i){var r=new e(t,n,i);return r.syncErrorThrowable=!1,r},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e}(s.Subscription);e.Subscriber=u;var a=function(t){function e(e,n,i,s){t.call(this),this._parent=e;var o,c=this;r.isFunction(n)?o=n:n&&(c=n,o=n.next,i=n.error,s=n.complete,r.isFunction(c.unsubscribe)&&this.add(c.unsubscribe.bind(c)),c.unsubscribe=this.unsubscribe.bind(this)),this._context=c,this._next=o,this._error=i,this._complete=s}return i(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parent;e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parent;if(this._error)e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else{if(!e.syncErrorThrowable)throw this.unsubscribe(),t;e.syncErrorValue=t,e.syncErrorThrown=!0,this.unsubscribe()}}},e.prototype.complete=function(){if(!this.isStopped){var t=this._parent;this._complete?t.syncErrorThrowable?(this.__tryOrSetError(t,this._complete),this.unsubscribe()):(this.__tryOrUnsub(this._complete),this.unsubscribe()):this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){throw this.unsubscribe(),t}},e.prototype.__tryOrSetError=function(t,e,n){try{e.call(this._context,n)}catch(e){return t.syncErrorValue=e,t.syncErrorThrown=!0,!0}return!1},e.prototype._unsubscribe=function(){var t=this._parent;this._context=null,this._parent=null,t.unsubscribe()},e}(u)},function(t,e,n){"use strict";function i(){try{return s.apply(this,arguments)}catch(t){return o.errorObject.e=t,o.errorObject}}function r(t){return s=t,i}var s,o=n(7);e.tryCatch=r},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".gew-instance svg{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;width:100%;height:100%}.gew-instance svg .line>*{cursor:pointer}.gew-instance svg .line.even>*{fill:#f2f2f2}.gew-instance svg .line.odd>*{fill:#ccc}.gew-instance svg .line>:not(.active):hover{fill:#666}.gew-instance svg .line .active{fill:blue;cursor:default}.gew-instance svg .line_axis,.gew-instance svg .line_border{fill:none;stroke:#000;stroke-width:1px}.gew-instance svg .text-label p{display:inline-block;color:#fff;margin:0;padding:10px;font-size:16px}.gew-instance svg .text-label.right p{text-align:right}.gew-instance svg .text-label.odd p{color:red}.gew-instance svg .text-label.even p{color:blue}.gew-instance{position:relative;overflow:hidden}.gew-instance .prompt{position:absolute;top:50%;left:50%;width:0;height:0;margin:-100px 0 0 -100px;background:#fff;opacity:0;transition:opacity .5s ease-in;border-radius:50%;text-align:center;box-shadow:0 0 50px #000;overflow:hidden;padding:25px 0}.gew-instance .prompt.active{width:200px;height:150px;opacity:1}",""])},,function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=n(3),s=function(t){function e(e,n){t.call(this),this.subject=e,this.subscriber=n,this.closed=!1}return i(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);n!==-1&&e.splice(n,1)}}},e}(r.Subscription);e.SubjectSubscription=s},function(t,e,n){"use strict";function i(t){return!!t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}function r(t){return!!t&&"function"==typeof t.on&&"function"==typeof t.off}function s(t){return!!t&&"[object NodeList]"===t.toString()}function o(t){return!!t&&"[object HTMLCollection]"===t.toString()}function c(t){return!!t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}var u=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},a=n(1),h=n(14),l=n(8),p=n(7),f=n(3),b=function(t){function e(e,n,i,r){t.call(this),this.sourceObj=e,this.eventName=n,this.selector=i,this.options=r}return u(e,t),e.create=function(t,n,i,r){return l.isFunction(i)&&(r=i,i=void 0),new e(t,n,r,i)},e.setupSubscription=function(t,n,u,a,h){var l;if(s(t)||o(t))for(var p=0,b=t.length;p<b;p++)e.setupSubscription(t[p],n,u,a,h);else if(c(t)){var d=t;t.addEventListener(n,u,h),l=function(){return d.removeEventListener(n,u)}}else if(r(t)){var v=t;t.on(n,u),l=function(){return v.off(n,u)}}else{if(!i(t))throw new TypeError("Invalid event target");var g=t;t.addListener(n,u),l=function(){return g.removeListener(n,u)}}a.add(new f.Subscription(l))},e.prototype._subscribe=function(t){var n=this.sourceObj,i=this.eventName,r=this.options,s=this.selector,o=s?function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];var i=h.tryCatch(s).apply(void 0,e);i===p.errorObject?t.error(p.errorObject.e):t.next(i)}:function(e){return t.next(e)};e.setupSubscription(n,i,o,t,r)},e}(a.Observable);e.FromEventObservable=b},function(t,e,n){"use strict";var i=n(18);e.fromEvent=i.FromEventObservable.create},function(t,e,n){"use strict";function i(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}var r=n(9);e.getSymbolObservable=i,e.$$observable=i(r.root)},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(){var e=t.call(this,"object unsubscribed");this.name=e.name="ObjectUnsubscribedError",this.stack=e.stack,this.message=e.message}return n(e,t),e}(Error);e.ObjectUnsubscribedError=i},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(e){t.call(this),this.errors=e;var n=Error.call(this,e?e.length+" errors occurred during unsubscription:\n  "+e.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"");this.name=n.name="UnsubscriptionError",this.stack=n.stack,this.message=n.message}return n(e,t),e}(Error);e.UnsubscriptionError=i},function(t,e){"use strict";e.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,e){"use strict";function n(t){return null!=t&&"object"==typeof t}e.isObject=n},function(t,e,n){"use strict";function i(t,e,n){if(t){if(t instanceof r.Subscriber)return t;if(t[s.$$rxSubscriber])return t[s.$$rxSubscriber]()}return t||e||n?new r.Subscriber(t,e,n):new r.Subscriber(o.empty)}var r=n(13),s=n(6),o=n(12);e.toSubscriber=i},function(t,e,n){var i=n(15);"string"==typeof i&&(i=[[t.id,i,""]]);n(10)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){"use strict";var i=n(33),r=n(11),s=n(28),o=n(2),c=n(1);n(5);var u=function(){function t(t){var e=this;this.maxTextWidth=0,this.config=t;var n=document.getElementById(this.config.element);n.setAttribute("class","gew-instance"),this.svg=r.DrawHelper.createElement("svg"),this.svg.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.svg.setAttribute("version","1.1"),n.appendChild(this.svg),this.mainElement=document.createElementNS("http://www.w3.org/2000/svg","g"),this.mainElement.setAttribute("class",this.config.classes.mainGroup),this.svg.appendChild(this.mainElement),this.textSizer=new o.Subject,this.textSizer.subscribe(function(t){t>e.maxTextWidth&&(e.maxTextWidth=t)}),this.gc=new s.GroupContainer(this.config);var i=this.createPrompt();n.appendChild(i)}return t.prototype.createPrompt=function(){var t=this;return this.otherEmotion=new i.Prompt,this.otherEmotion.onSave.subscribe(function(e){t.gc.clearAll(),console.log("sub",e)}),this.otherEmotion.create()},t.prototype.countLineSize=function(){var t=0;return this.config.getLines().forEach(function(e){t+=2*e.getSize()}),t},t.prototype.getRealR=function(){return this.config.R+this.maxTextWidth+50+this.countLineSize()},t.prototype.drawAxis=function(){if(this.config.showLines){var t=this.getRealR();this.drawLine(t*-1,0,this.config.R*-1,0),this.drawLine(this.config.R,0,t,0),this.drawLine(0,t*-1,0,this.config.R*-1),this.drawLine(0,this.config.R,0,t)}},t.prototype.drawLine=function(t,e,n,i){var s=r.DrawHelper.createElement("line");s.setAttribute("class",this.config.classes.lineAxis),s.setAttribute("x1",t.toString()),s.setAttribute("y1",e.toString()),s.setAttribute("x2",n.toString()),s.setAttribute("y2",i.toString()),this.mainElement.appendChild(s)},t.prototype.drawHeaders=function(){var t=this;if(this.config.showHeader){var e=r.DrawHelper.drawHeader(this.config.R/2*-1,this.config.headerTop),n=c.Observable.fromEvent(e,"click");n.subscribe(function(){t.gc.clearAll()}),this.mainElement.appendChild(e);var i=r.DrawHelper.drawHeader(this.config.R/2,this.config.headerBottom);i.setAttribute("title","click if you feel other emotion");var s=c.Observable.fromEvent(i,"click");s.subscribe(function(){t.otherEmotion.show()}),this.mainElement.appendChild(i)}},t.prototype.drawBorder=function(){if(this.config.showBorder){var t=r.DrawHelper.drawBorder(this.config.R);t.setAttribute("class",this.config.classes.lineBorder),this.mainElement.appendChild(t)}},t.prototype.setPosition=function(){var t=this.getRealR(),e=2*t;this.mainElement.setAttribute("style","transform: translate("+t+"px, "+t+"px)"),this.svg.setAttribute("viewBox","0 0 "+e+" "+e)},t.prototype.run=function(){var t=this;this.gc.create(),this.gc.getGroups().forEach(function(e){t.mainElement.appendChild(e.create()),"number"==typeof t.config.checkedElements[e.index-1]&&e.setActiveIndex(t.config.checkedElements[e.index-1]);var n=e.getText();t.mainElement.appendChild(n.create()),n.repaint(t.textSizer)}),this.setPosition(),this.drawAxis(),this.drawHeaders(),this.drawBorder()},t.prototype.circleClick=function(){return this.gc.changeObserver},t.prototype.isAllChecked=function(t){return this.gc.completeObserver},t}();e.Drawer=u},function(t,e,n){"use strict";var i=n(31),r=n(2),s=function(){function t(t){var e=this;this.groups=[],this.groupStatus=[],this.config=t,this.completeObserver=new r.Subject,this.changeObserver=new r.Subject,this.changeObserver.subscribe(function(){e.config.maxElements===e.countResults()&&e.completeObserver.next(e.groupStatus)})}return t.prototype.countResults=function(){return this.groupStatus.filter(function(t){return t}).length},t.prototype.setResults=function(){this.groupStatus=this.groups.map(function(t){return t.getActiveElementIndex()}),this.changeObserver.next(this.groupStatus)},t.prototype.clearAll=function(){this.groups.forEach(function(t){return t.disable()}),this.setResults()},t.prototype.create=function(){for(var t=this,e=function(e){var r=new i.Group(n.config,e);r.changeObserver.subscribe(function(e){1===t.config.maxElements?t.groups.filter(function(t){return t!==e}).forEach(function(t){return t.disable()}):t.countResults()<t.config.maxElements||r.isChanged()?e.enable():e.removeTemp(),t.setResults()}),n.groups.push(r)},n=this,r=1;r<=this.config.getElementsCount();r++)e(r)},t.prototype.getGroups=function(){return this.groups},t}();e.GroupContainer=s},function(t,e,n){"use strict";var i=n(32),r=function(){function t(t){var e=this;this.R=80,this.labels=["Involvement\nInterest","Amusement\nLaughter","Pride\nElation","Happiness\nJoy","Enjoyment\nPleasure","Tenderness\nFeeling love","Wonderment\nFeeling awe","Feeling disburdened\nRelief","Astonishment\nSuprise","Longing\nNostalgia","Pity\nCompassion","Sadness\nDespair","Worry\nFear","Embarrassment\nShame","Guilt\nRemorse","Disappointment\nRegreat","Envy\nJealousy","Disgust\nRepulsion","Contempt\nScorn","Irritation\nAnger"],this.element="drawer",this.showLines=!1,this.showBorder=!0,this.headerTop="No emotion",this.headerBottom="Other emotion",this.showHeader=!0,this.maxElements=20,this.checkedElements=[],this.classes={mainGroup:"main_group",lineAxis:"line_axis",lineBorder:"line_border",line:"line",circlePrefix:"row_"},this.lines=[],Object.keys(t).forEach(function(n){e[n]=t[n]})}return t.prototype.getElementsCount=function(){return this.labels.length},t.prototype.getQuarterCount=function(){return this.getElementsCount()/4},t.prototype.getLines=function(){return this.lines.length||(this.lines.push(new i.Line(10)),this.lines.push(new i.Line(15)),this.lines.push(new i.Line(20)),this.lines.push(new i.Line(25)),this.lines.push(new i.Line(30))),this.lines},t}();e.Config=r},function(t,e,n){"use strict";var i=n(11),r=n(1);n(5);var s=function(){function t(t,e,n){this.group=t,this.size=e,this.index=n}return t.prototype.getTitle=function(){return"Element "+this.index},t.prototype.bindEvents=function(){var t=this,e=r.Observable.fromEvent(this.element,"click");e.subscribe(function(){t.isActive?t.group.unsetActive():t.group.setActive(t)})},t.prototype.create=function(){var t=this.group.getElementPosition();this.element=i.DrawHelper.createElement("a"),this.element.setAttributeNS("http://www.w3.org/1999/xlink","href","javascript:;"),this.element.setAttributeNS("http://www.w3.org/1999/xlink","title",this.getTitle()),this.element.setAttribute("class",this.group.config.classes.circlePrefix+this.index);var e=i.DrawHelper.createElement("circle");return e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",this.size.toString()),this.bindEvents(),this.element.appendChild(e),this.element},t.prototype.enable=function(){if(!this.isActive){this.isActive=!0;var e=this.element.getAttribute("class");e?e+=" "+t.activeClass:e=t.activeClass,this.element.setAttribute("class",e)}},t.prototype.disable=function(){if(this.isActive){this.isActive=!1;var e=this.element.getAttribute("class");e&&(e=e.replace(t.activeClass,"")),this.element.setAttribute("class",e)}},t.activeClass="active",t}();e.Element=s},function(t,e,n){"use strict";var i=n(30),r=n(34),s=n(11),o=n(2),c=function(){function t(t,e){this.odstep=0,this.elements=[],this.changed=!1,this.index=e,this.config=t,this.changeObserver=new o.Subject}return t.prototype.getActiveElement=function(){return this.activeElement},t.prototype.getActiveElementIndex=function(){return this.activeElement?this.activeElement.index:null},t.prototype.isChanged=function(){return this.changed},t.prototype.create=function(){this.element=s.DrawHelper.createElement("g");var t=[this.config.classes.line,this.config.classes.line+"_"+this.index];return this.index%2===0?t.push("even"):t.push("odd"),this.element.setAttribute("class",t.join(" ")),this.run(),this.element},t.prototype.getText=function(){return this.text},t.prototype.getPosition=function(){var t=this.config.getQuarterCount();return 90/t*(this.index-t-.5)*Math.PI/180},t.prototype.run=function(){var t=this;this.config.getLines().forEach(function(e,n){var r=e.getSize();t.odstep+=r+10;var s=new i.Element(t,r,n);t.elements.push(s),t.element.appendChild(s.create()),t.odstep+=r}),this.text=new r.Text(this.config.labels[this.index-1],this)},t.prototype.setActive=function(t){this.activeElement&&(this.changed=!0),this.activeElement=t,this.changeObserver.next(this)},t.prototype.setActiveIndex=function(t){this.activeElement=this.elements[t],this.changed=!0,this.enable()},t.prototype.unsetActive=function(){this.activeElement&&(this.disable(),this.changeObserver.next(this))},t.prototype.enable=function(){this.activeElement&&(this.elements.forEach(function(t){t.disable()}),this.activeElement.enable())},t.prototype.disable=function(){this.activeElement&&(this.activeElement.disable(),this.activeElement=null,this.changed=!1)},t.prototype.getElementPosition=function(){var t=Math.sin(this.getPosition()),e=Math.cos(this.getPosition()),n=t*(this.config.R+this.odstep),i=e*(this.config.R+this.odstep);return{x:i.toString(),y:n.toString()}},t.prototype.removeTemp=function(){this.activeElement=null},t}();e.Group=c},function(t,e){"use strict";var n=function(){function t(t){this.size=t}return t.prototype.getSize=function(){return this.size},t}();e.Line=n},function(t,e,n){"use strict";var i=n(1),r=n(2);n(5);var s=function(){function t(){this.onSave=new r.Subject,this.isActive=!1,this.el=document.createElement("div"),this.el.setAttribute("class","prompt"),this.el.innerHTML='\n            <p>\n                <input type="text" />\n            </p>\n            <p>\n                <button class="save_btn">Save</button>\n                <button class="cancel_btn">Cancel</button>\n            </p>\n         ',this.bindSaveBtn(),this.bindCancelBtn()}return t.prototype.bindSaveBtn=function(){var t=this,e=this.el.querySelector(".save_btn"),n=i.Observable.fromEvent(e,"click");n.subscribe(function(){t.hide();var e=t.el.querySelector("input").value;e&&t.onSave.next(e)})},t.prototype.bindCancelBtn=function(){var t=this,e=this.el.querySelector(".cancel_btn"),n=i.Observable.fromEvent(e,"click");n.subscribe(function(){t.hide()})},t.prototype.hide=function(){if(this.isActive){var t=this.el.getAttribute("class");this.el.setAttribute("class",t.replace(" active","")),this.isActive=!1}},t.prototype.show=function(){if(!this.isActive){var t=this.el.getAttribute("class");this.el.setAttribute("class",t+" active"),this.el.querySelector("input").focus(),this.isActive=!0}},t.prototype.create=function(){return this.el},t}();e.Prompt=s},function(t,e){"use strict";var n=function(){function t(t,e){this.group=e,this.index=e.index,this.txt=t}return t.prototype.create=function(){var t=this.group.getElementPosition(),e=["text-label"];this.txt.indexOf("\n")>=0&&e.push("multiline"),this.index>this.group.config.labels.length/2&&e.push("right"),this.index%2===0?e.push("even"):e.push("odd"),this.element=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),this.element.setAttribute("x",t.x),this.element.setAttribute("y",t.y),this.element.setAttribute("id","text_"+this.index),this.element.setAttribute("class",e.join(" ")),this.element.setAttribute("width","1000");var n=document.createElementNS("http://www.w3.org/1999/xhtml","p");return n.innerHTML=this.txt.replace("\n","<br/>"),this.element.appendChild(n),this.element},t.prototype.repaint=function(t){var e=document.getElementById("text_"+this.index),n=(e.getBoundingClientRect(),parseInt(e.getAttribute("x"),10)),i=parseInt(e.getAttribute("y"),10),r=e.childNodes[0],s=r.getBoundingClientRect(),o=s.height,c=s.width,u=this.index/(this.group.config.labels.length/4);(u<=1||u>3)&&(i-=o),this.index>this.group.config.labels.length/2&&(n-=c,t.next(c)),e.setAttribute("x",n.toString()),e.setAttribute("y",i.toString()),e.setAttribute("width",c.toString()),e.setAttribute("height",o.toString())},t}();e.Text=n}]);
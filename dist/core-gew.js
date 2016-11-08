!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";n(26);var r=n(28),i=n(29);window.GEW=function(t){var e=new r.Config(t),n=new i.Drawer(e);return n.run(),n}},function(t,e,n){"use strict";var r=n(8),i=n(25),s=n(20),o=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,s=i.toSubscriber(t,e,n);if(r?r.call(s,this):s.add(this._subscribe(s)),s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},t.prototype.forEach=function(t,e){var n=this;if(e||(r.root.Rx&&r.root.Rx.config&&r.root.Rx.config.Promise?e=r.root.Rx.config.Promise:r.root.Promise&&(e=r.root.Promise)),!e)throw new Error("no Promise impl found");return new e(function(e,r){var i=n.subscribe(function(e){if(i)try{t(e)}catch(t){r(t),i.unsubscribe()}else t(e)},r,e)})},t.prototype._subscribe=function(t){return this.source.subscribe(t)},t.prototype[s.$$observable]=function(){return this},t.create=function(e){return new t(e)},t}();e.Observable=o},function(t,e,n){"use strict";var r=n(23),i=n(24),s=n(7),o=n(14),c=n(6),u=n(22),a=function(){function t(t){this.closed=!1,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){this.closed=!0;var n=this,a=n._unsubscribe,h=n._subscriptions;if(this._subscriptions=null,s.isFunction(a)){var l=o.tryCatch(a).call(this);l===c.errorObject&&(e=!0,(t=t||[]).push(c.errorObject.e))}if(r.isArray(h))for(var p=-1,f=h.length;++p<f;){var b=h[p];if(i.isObject(b)){var l=o.tryCatch(b.unsubscribe).call(b);if(l===c.errorObject){e=!0,t=t||[];var d=c.errorObject.e;d instanceof u.UnsubscriptionError?t=t.concat(d.errors):t.push(d)}}}if(e)throw new u.UnsubscriptionError(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var n=e;switch(typeof e){case"function":n=new t(e);case"object":if(n.closed||"function"!=typeof n.unsubscribe)break;this.closed?n.unsubscribe():(this._subscriptions||(this._subscriptions=[])).push(n);break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return n},t.prototype.remove=function(e){if(null!=e&&e!==this&&e!==t.EMPTY){var n=this._subscriptions;if(n){var r=n.indexOf(e);r!==-1&&n.splice(r,1)}}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();e.Subscription=a},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(1),s=n(12),o=n(2),c=n(21),u=n(17),a=n(5),h=function(t){function e(e){t.call(this,e),this.destination=e}return r(e,t),e}(s.Subscriber);e.SubjectSubscriber=h;var l=function(t){function e(){t.call(this),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}return r(e,t),e.prototype[a.$$rxSubscriber]=function(){return new h(this)},e.prototype.lift=function(t){var e=new p(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new c.ObjectUnsubscribedError;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._subscribe=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;return this.hasError?(t.error(this.thrownError),o.Subscription.EMPTY):this.isStopped?(t.complete(),o.Subscription.EMPTY):(this.observers.push(t),new u.SubjectSubscription(this,t))},e.prototype.asObservable=function(){var t=new i.Observable;return t.source=this,t},e.create=function(t,e){return new p(t,e)},e}(i.Observable);e.Subject=l;var p=function(t){function e(e,n){t.call(this),this.destination=e,this.source=n}return r(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){var e=this.source;return e?this.source.subscribe(t):o.Subscription.EMPTY},e}(l);e.AnonymousSubject=p},function(t,e,n){"use strict";var r=n(8),i=r.root.Symbol;e.$$rxSubscriber="function"==typeof i&&"function"==typeof i.for?i.for("rxSubscriber"):"@@rxSubscriber"},function(t,e){"use strict";e.errorObject={e:{}}},function(t,e){"use strict";function n(t){return"function"==typeof t}e.isFunction=n},function(t,e){(function(t){"use strict";if(e.root="object"==typeof window&&window.window===window&&window||"object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t,!e.root)throw new Error("RxJS could not find any global context (window, self, global)")}).call(e,function(){return this}())},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=f[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(a(r.parts[s],e))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(a(r.parts[s],e));f[r.id]={id:r.id,refs:1,parts:o}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],s=i[0],o=i[1],c=i[2],u=i[3],a={css:o,media:c,sourceMap:u};n[s]?n[s].parts.push(a):e.push(n[s]={id:s,parts:[a]})}return e}function s(t,e){var n=v(),r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function c(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",s(t,e),e}function a(t,e){var n,r,i;if(e.singleton){var s=m++;n=g||(g=c(e)),r=h.bind(null,n,s,!1),i=h.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=p.bind(null,n),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(e),r=l.bind(null,n),i=function(){o(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function h(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function l(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var f={},b=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=b(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var s=[],o=0;o<n.length;o++){var c=n[o],u=f[c.id];u.refs--,s.push(u)}if(t){var a=i(t);r(a,e)}for(var o=0;o<s.length;o++){var u=s[o];if(0===u.refs){for(var h=0;h<u.parts.length;h++)u.parts[h]();delete f[u.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";var n=function(){function t(){}return t.createElement=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},t.drawHeader=function(e,n){var r=t.createElement("a");r.setAttribute("href","javascript:;");var i=t.createElement("text");i.setAttribute("text-anchor","middle"),i.setAttribute("x","0"),i.setAttribute("y",e.toString());var s=document.createTextNode(n);return i.appendChild(s),r.appendChild(i),r},t.drawBorder=function(e){var n=t.createElement("circle");return n.setAttribute("cx","0"),n.setAttribute("cy","0"),n.setAttribute("r",e.toString()),n},t}();e.DrawHelper=n},function(t,e){"use strict";e.empty={closed:!0,next:function(t){},error:function(t){throw t},complete:function(){}}},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(7),s=n(2),o=n(11),c=n(5),u=function(t){function e(n,r,i){switch(t.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=o.empty;break;case 1:if(!n){this.destination=o.empty;break}if("object"==typeof n){n instanceof e?(this.destination=n,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new a(this,n));break}default:this.syncErrorThrowable=!0,this.destination=new a(this,n,r,i)}}return r(e,t),e.prototype[c.$$rxSubscriber]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e}(s.Subscription);e.Subscriber=u;var a=function(t){function e(e,n,r,s){t.call(this),this._parent=e;var o,c=this;i.isFunction(n)?o=n:n&&(c=n,o=n.next,r=n.error,s=n.complete,i.isFunction(c.unsubscribe)&&this.add(c.unsubscribe.bind(c)),c.unsubscribe=this.unsubscribe.bind(this)),this._context=c,this._next=o,this._error=r,this._complete=s}return r(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parent;e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parent;if(this._error)e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else{if(!e.syncErrorThrowable)throw this.unsubscribe(),t;e.syncErrorValue=t,e.syncErrorThrown=!0,this.unsubscribe()}}},e.prototype.complete=function(){if(!this.isStopped){var t=this._parent;this._complete?t.syncErrorThrowable?(this.__tryOrSetError(t,this._complete),this.unsubscribe()):(this.__tryOrUnsub(this._complete),this.unsubscribe()):this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){throw this.unsubscribe(),t}},e.prototype.__tryOrSetError=function(t,e,n){try{e.call(this._context,n)}catch(e){return t.syncErrorValue=e,t.syncErrorThrown=!0,!0}return!1},e.prototype._unsubscribe=function(){var t=this._parent;this._context=null,this._parent=null,t.unsubscribe()},e}(u)},function(t,e,n){"use strict";var r=n(1),i=n(19);r.Observable.fromEvent=i.fromEvent},function(t,e,n){"use strict";function r(){try{return s.apply(this,arguments)}catch(t){return o.errorObject.e=t,o.errorObject}}function i(t){return s=t,r}var s,o=n(6);e.tryCatch=i},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".gew-instance svg{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;width:100%;height:100%}.gew-instance svg .line>*{cursor:pointer}.gew-instance svg .line.even>*{fill:#f2f2f2}.gew-instance svg .line.odd>*{fill:#ccc}.gew-instance svg .line>:not(.active):hover{fill:#666}.gew-instance svg .line .active{fill:blue;cursor:default}.gew-instance svg .line_axis,.gew-instance svg .line_border{fill:none;stroke:#000;stroke-width:1px}.gew-instance svg .text-label p{display:inline-block;color:#fff;margin:0;padding:10px}.gew-instance svg .text-label.right p{text-align:right}.gew-instance svg .text-label.odd p{color:red}.gew-instance svg .text-label.even p{color:blue}.gew-instance{position:relative;overflow:hidden}.gew-instance .prompt{position:absolute;top:-200px;left:50%;width:200px;height:200px;margin:-100px 0 0 -100px;background:#fff;opacity:0;transition:all .5s ease-in;border-radius:50%;border:1px solid #000}.gew-instance .prompt.active{top:50%;opacity:1}",""])},,function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),s=function(t){function e(e,n){t.call(this),this.subject=e,this.subscriber=n,this.closed=!1}return r(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);n!==-1&&e.splice(n,1)}}},e}(i.Subscription);e.SubjectSubscription=s},function(t,e,n){"use strict";function r(t){return!!t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}function i(t){return!!t&&"function"==typeof t.on&&"function"==typeof t.off}function s(t){return!!t&&"[object NodeList]"===t.toString()}function o(t){return!!t&&"[object HTMLCollection]"===t.toString()}function c(t){return!!t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}var u=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},a=n(1),h=n(14),l=n(7),p=n(6),f=n(2),b=function(t){function e(e,n,r,i){t.call(this),this.sourceObj=e,this.eventName=n,this.selector=r,this.options=i}return u(e,t),e.create=function(t,n,r,i){return l.isFunction(r)&&(i=r,r=void 0),new e(t,n,i,r)},e.setupSubscription=function(t,n,u,a,h){var l;if(s(t)||o(t))for(var p=0,b=t.length;p<b;p++)e.setupSubscription(t[p],n,u,a,h);else if(c(t)){var d=t;t.addEventListener(n,u,h),l=function(){return d.removeEventListener(n,u)}}else if(i(t)){var v=t;t.on(n,u),l=function(){return v.off(n,u)}}else if(r(t)){var g=t;t.addListener(n,u),l=function(){return g.removeListener(n,u)}}a.add(new f.Subscription(l))},e.prototype._subscribe=function(t){var n=this.sourceObj,r=this.eventName,i=this.options,s=this.selector,o=s?function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];var r=h.tryCatch(s).apply(void 0,e);r===p.errorObject?t.error(p.errorObject.e):t.next(r)}:function(e){return t.next(e)};e.setupSubscription(n,r,o,t,i)},e}(a.Observable);e.FromEventObservable=b},function(t,e,n){"use strict";var r=n(18);e.fromEvent=r.FromEventObservable.create},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}var i=n(8);e.getSymbolObservable=r,e.$$observable=r(i.root)},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=function(t){function e(){var e=t.call(this,"object unsubscribed");this.name=e.name="ObjectUnsubscribedError",this.stack=e.stack,this.message=e.message}return n(e,t),e}(Error);e.ObjectUnsubscribedError=r},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},r=function(t){function e(e){t.call(this),this.errors=e;var n=Error.call(this,e?e.length+" errors occurred during unsubscription:\n  "+e.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"");this.name=n.name="UnsubscriptionError",this.stack=n.stack,this.message=n.message}return n(e,t),e}(Error);e.UnsubscriptionError=r},function(t,e){"use strict";e.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,e){"use strict";function n(t){return null!=t&&"object"==typeof t}e.isObject=n},function(t,e,n){"use strict";function r(t,e,n){if(t){if(t instanceof i.Subscriber)return t;if(t[s.$$rxSubscriber])return t[s.$$rxSubscriber]()}return t||e||n?new i.Subscriber(t,e,n):new i.Subscriber(o.empty)}var i=n(12),s=n(5),o=n(11);e.toSubscriber=r},function(t,e,n){var r=n(15);"string"==typeof r&&(r=[[t.id,r,""]]);n(9)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";var r=n(31),i=n(4),s=function(){function t(t){var e=this;this.groups=[],this.groupStatus=[],this.config=t,this.completeObserver=new i.Subject,this.changeObserver=new i.Subject,this.changeObserver.subscribe(function(){e.config.maxElements===e.countResults()&&e.completeObserver.next(e.groupStatus)})}return t.prototype.countResults=function(){return this.groupStatus.filter(function(t){return t}).length},t.prototype.setResults=function(){this.groupStatus=this.groups.map(function(t){return t.getActiveElementIndex()}),this.changeObserver.next(this.groupStatus)},t.prototype.clearAll=function(){this.groups.forEach(function(t){return t.disable()}),this.setResults()},t.prototype.create=function(){for(var t=this,e=function(e){var i=new r.Group(n.config,e);i.changeObserver.subscribe(function(e){1===t.config.maxElements?t.groups.filter(function(t){return t!==e}).forEach(function(t){return t.disable()}):t.countResults()<t.config.maxElements||i.isChanged()?e.enable():e.removeTemp(),t.setResults()}),n.groups.push(i)},n=this,i=1;i<=this.config.getElementsCount();i++)e(i)},t.prototype.getGroups=function(){return this.groups},t}();e.GroupContainer=s},function(t,e,n){"use strict";var r=n(32),i=function(){function t(t){var e=this;this.R=80,this.labels=["Involvement\nInterest","Amusement\nLaughter","Pride\nElation","Happiness\nJoy","Enjoyment\nPleasure","Tenderness\nFeeling love","Wonderment\nFeeling awe","Feeling disburdened\nRelief","Astonishment\nSuprise","Longing\nNostalgia","Pity\nCompassion","Sadness\nDespair","Worry\nFear","Embarrassment\nShame","Guilt\nRemorse","Disappointment\nRegreat","Envy\nJealousy","Disgust\nRepulsion","Contempt\nScorn","Irritation\nAnger"],this.element="drawer",this.showLines=!1,this.showBorder=!0,this.headerTop="No emotion",this.headerBottom="Other emotion",this.showHeader=!0,this.maxElements=20,this.classes={mainGroup:"main_group",lineAxis:"line_axis",lineBorder:"line_border",line:"line",circlePrefix:"row_"},this.lines=[],Object.keys(t).forEach(function(n){e[n]=t[n]})}return t.prototype.getElementsCount=function(){return this.labels.length},t.prototype.getQuarterCount=function(){return this.getElementsCount()/4},t.prototype.getLines=function(){return this.lines.length||(this.lines.push(new r.Line(10)),this.lines.push(new r.Line(15)),this.lines.push(new r.Line(20)),this.lines.push(new r.Line(25)),this.lines.push(new r.Line(30))),this.lines},t}();e.Config=i},function(t,e,n){"use strict";var r=n(33),i=n(10),s=n(27),o=n(4),c=n(1);n(13);var u=function(){function t(t){var e=this;this.maxTextWidth=0,this.config=t;var n=document.getElementById(this.config.element);n.setAttribute("class","gew-instance"),this.svg=i.DrawHelper.createElement("svg"),this.svg.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.svg.setAttribute("version","1.1"),n.appendChild(this.svg),this.mainElement=document.createElementNS("http://www.w3.org/2000/svg","g"),this.mainElement.setAttribute("class",this.config.classes.mainGroup),this.svg.appendChild(this.mainElement),this.textSizer=new o.Subject,this.textSizer.subscribe(function(t){t>e.maxTextWidth&&(e.maxTextWidth=t)}),this.gc=new s.GroupContainer(this.config),this.otherEmotion=new r.Prompt,n.appendChild(this.otherEmotion.create())}return t.prototype.countLineSize=function(){var t=0;return this.config.getLines().forEach(function(e){t+=2*e.getSize()}),t},t.prototype.getRealR=function(){return this.config.R+this.maxTextWidth+50+this.countLineSize()},t.prototype.drawAxis=function(){if(this.config.showLines){var t=this.getRealR();this.drawLine(t*-1,0,this.config.R*-1,0),this.drawLine(this.config.R,0,t,0),this.drawLine(0,t*-1,0,this.config.R*-1),this.drawLine(0,this.config.R,0,t)}},t.prototype.drawLine=function(t,e,n,r){var s=i.DrawHelper.createElement("line");s.setAttribute("class",this.config.classes.lineAxis),s.setAttribute("x1",t.toString()),s.setAttribute("y1",e.toString()),s.setAttribute("x2",n.toString()),s.setAttribute("y2",r.toString()),this.mainElement.appendChild(s)},t.prototype.drawHeaders=function(){var t=this;if(this.config.showHeader){var e=i.DrawHelper.drawHeader(this.config.R/2*-1,this.config.headerTop),n=c.Observable.fromEvent(e,"click");n.subscribe(function(){t.gc.clearAll()}),this.mainElement.appendChild(e);var r=i.DrawHelper.drawHeader(this.config.R/2,this.config.headerBottom);r.setAttribute("title","click if you feel other emotion");var s=c.Observable.fromEvent(r,"click");s.subscribe(function(){t.gc.clearAll(),t.otherEmotion.show()}),this.mainElement.appendChild(r)}},t.prototype.drawBorder=function(){if(this.config.showBorder){var t=i.DrawHelper.drawBorder(this.config.R);t.setAttribute("class",this.config.classes.lineBorder),this.mainElement.appendChild(t)}},t.prototype.setPosition=function(){var t=this.getRealR(),e=2*t;this.mainElement.setAttribute("style","transform: translate("+t+"px, "+t+"px)"),this.svg.setAttribute("viewBox","0 0 "+e+" "+e)},t.prototype.run=function(){var t=this;this.gc.create(),this.gc.getGroups().forEach(function(e){t.mainElement.appendChild(e.create());var n=e.getText();t.mainElement.appendChild(n.create()),n.repaint(t.textSizer)}),this.setPosition(),this.drawAxis(),this.drawHeaders(),this.drawBorder()},t.prototype.circleClick=function(){return this.gc.changeObserver},t.prototype.isAllChecked=function(t){return this.gc.completeObserver},t}();e.Drawer=u},function(t,e,n){"use strict";var r=n(10),i=n(1);n(13);var s=function(){function t(t,e,n){this.group=t,this.size=e,this.index=n}return t.prototype.getTitle=function(){return"Element "+this.index},t.prototype.bindEvents=function(){var t=this,e=i.Observable.fromEvent(this.element,"click");e.subscribe(function(){t.isActive?t.group.unsetActive():t.group.setActive(t)})},t.prototype.create=function(){var t=this.group.getElementPosition();this.element=r.DrawHelper.createElement("a"),this.element.setAttributeNS("http://www.w3.org/1999/xlink","href","javascript:;"),this.element.setAttributeNS("http://www.w3.org/1999/xlink","title",this.getTitle()),this.element.setAttribute("class",this.group.config.classes.circlePrefix+this.index);var e=r.DrawHelper.createElement("circle");return e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",this.size.toString()),this.bindEvents(),this.element.appendChild(e),this.element},t.prototype.enable=function(){if(!this.isActive){this.isActive=!0;var e=this.element.getAttribute("class");e?e+=" "+t.activeClass:e=t.activeClass,this.element.setAttribute("class",e)}},t.prototype.disable=function(){if(this.isActive){this.isActive=!1;var e=this.element.getAttribute("class");e&&(e=e.replace(t.activeClass,"")),this.element.setAttribute("class",e)}},t.activeClass="active",t}();e.Element=s},function(t,e,n){"use strict";var r=n(30),i=n(34),s=n(10),o=n(4),c=function(){function t(t,e){this.odstep=0,this.elements=[],this.changed=!1,this.index=e,this.config=t,this.changeObserver=new o.Subject}return t.prototype.getActiveElement=function(){return this.activeElement},t.prototype.getActiveElementIndex=function(){return this.activeElement?this.activeElement.index:null},t.prototype.isChanged=function(){return this.changed},t.prototype.create=function(){this.element=s.DrawHelper.createElement("g");var t=[this.config.classes.line,this.config.classes.line+"_"+this.index];return this.index%2===0?t.push("even"):t.push("odd"),this.element.setAttribute("class",t.join(" ")),this.run(),this.element},t.prototype.getText=function(){return this.text},t.prototype.getPosition=function(){var t=this.config.getQuarterCount();return 90/t*(this.index-t-.5)*Math.PI/180},t.prototype.run=function(){var t=this;this.config.getLines().forEach(function(e,n){var i=e.getSize();t.odstep+=i+10;var s=new r.Element(t,i,n);t.elements.push(s),t.element.appendChild(s.create()),t.odstep+=i}),this.text=new i.Text(this.config.labels[this.index-1],this)},t.prototype.setActive=function(t){this.activeElement&&(this.changed=!0),this.activeElement=t,this.changeObserver.next(this)},t.prototype.unsetActive=function(){this.activeElement&&(this.disable(),this.changeObserver.next(this))},t.prototype.enable=function(){this.activeElement&&(this.elements.forEach(function(t){t.disable()}),this.activeElement.enable())},t.prototype.disable=function(){this.activeElement&&(this.activeElement.disable(),this.activeElement=null,this.changed=!1)},t.prototype.getElementPosition=function(){var t=Math.sin(this.getPosition()),e=Math.cos(this.getPosition()),n=t*(this.config.R+this.odstep),r=e*(this.config.R+this.odstep);return{x:r.toString(),y:n.toString()}},t.prototype.removeTemp=function(){this.activeElement=null},t}();e.Group=c},function(t,e){"use strict";var n=function(){function t(t){this.size=t}return t.prototype.getSize=function(){return this.size},t}();e.Line=n},function(t,e){"use strict";var n=function(){function t(){this.el=document.createElement("div"),this.el.setAttribute("class","prompt")}return t.prototype.show=function(){var t=this.el.getAttribute("class");this.el.setAttribute("class",t+" active")},t.prototype.create=function(){return this.el},t}();e.Prompt=n},function(t,e){"use strict";var n=function(){function t(t,e){this.group=e,this.index=e.index,this.txt=t}return t.prototype.create=function(){var t=this.group.getElementPosition(),e=["text-label"];this.txt.indexOf("\n")>=0&&e.push("multiline"),this.index>this.group.config.labels.length/2&&e.push("right"),this.index%2===0?e.push("even"):e.push("odd"),this.element=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),this.element.setAttribute("x",t.x),this.element.setAttribute("y",t.y),this.element.setAttribute("id","text_"+this.index),this.element.setAttribute("class",e.join(" ")),this.element.setAttribute("width","1000");var n=document.createElementNS("http://www.w3.org/1999/xhtml","p");return n.innerHTML=this.txt.replace("\n","<br/>"),this.element.appendChild(n),this.element},t.prototype.repaint=function(t){var e=document.getElementById("text_"+this.index),n=(e.getBoundingClientRect(),parseInt(e.getAttribute("x"),10)),r=parseInt(e.getAttribute("y"),10),i=e.childNodes[0],s=i.getBoundingClientRect(),o=s.height,c=s.width,u=this.index/(this.group.config.labels.length/4);(u<=1||u>3)&&(r-=o),this.index>this.group.config.labels.length/2&&(n-=c,t.next(c)),e.setAttribute("x",n.toString()),e.setAttribute("y",r.toString()),e.setAttribute("width",c.toString()),e.setAttribute("height",o.toString())},t}();e.Text=n}]);
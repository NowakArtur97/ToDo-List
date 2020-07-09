!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"extractData",value:function(e){return r(e.elements).reduce((function(e,t){return("radio"===t.type&&t.checked||t.name&&t.value&&"radio"!==t.type)&&(e[t.name]=t.value),e}),{})}},{key:"populateData",value:function(e,t){for(var n=r(e.elements),i=function(){var e=o[a],r=n.find((function(n){return function(e,t){return"radio"===e.type&&e.value===t}(n,t[e])||n.name===e&&"radio"!==n.type}));r&&("radio"===r.type?r.checked=!0:r.value=t[e])},a=0,o=Object.keys(t);a<o.length;a++)i()}},{key:"resetForm",value:function(e){e.reset(),r(e.elements).forEach((function(e){"hidden"===e.type&&(e.value="")}))}}])&&a(t.prototype,n),i&&a(t,i),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"getRandomNumber",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}])&&s(t.prototype,n),r&&s(t,r),e}(),l=["cbfafa","f8cdcd","fff780","ececec"],u=["6060b9","31854e","724992","aa8a59"],f={main:"board"},d={main:"note",description:"note__description",container:"note_container",deleteBtn:"note__delete_btn",pin:"note__pin",icon:"note__icon"},v={main:"note_option"},h={main:"note_form_popup_trigger"},p={main:"note_delete_trigger"},m={main:"note_popup_container",active:"note_popup_container--active",closeBtn:"note_popup__close_btn"},y={main:"note_form",submitBtn:"note_form__btn"},b={main:"note_search",searchInput:"note_search__input"},g={main:"fas",detailed:"fa-"},k={board:document.querySelector(".".concat(f.main)),noteDeleteAllTrigger:document.querySelector(".".concat(p.main)),noteFormPopUpTrigger:document.querySelector(".".concat(h.main)),noteFormPopUp:document.querySelector(".".concat(m.main)),noteFormPopUpCloseBtn:document.querySelector(".".concat(m.closeBtn)),noteForm:document.querySelector(".".concat(y.main)),noteFormSubmitBtn:document.querySelector(".".concat(y.submitBtn)),noteSearchInput:document.querySelector(".".concat(b.searchInput))};function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.randomUtil=t,this.MAX_NOTE_ROTATION=15,this.RADIAL_MIN_SIZE=50,this.RADIAL_MAX_SIZE=70}var t,n,r;return t=e,(n=[{key:"getRandomColor",value:function(){return l[this.randomUtil.getRandomNumber(0,l.length-1)]}},{key:"getRandomGradient",value:function(){return"radial-gradient(#".concat(u[this.randomUtil.getRandomNumber(0,u.length-1)]," ").concat(this.randomUtil.getRandomNumber(this.RADIAL_MIN_SIZE,this.RADIAL_MAX_SIZE),"%, black 50%)")}},{key:"getRandomPosition",value:function(){var e=k.board.getBoundingClientRect(),t=e.height,n=e.width;return{xPosition:this.randomUtil.getRandomNumber(0,.8*n),yPosition:this.randomUtil.getRandomNumber(0,.8*t)}}},{key:"getRandomRotation",value:function(){return this.randomUtil.getRandomNumber(-this.MAX_NOTE_ROTATION,this.MAX_NOTE_ROTATION)}},{key:"getTaskFromNote",value:function(e){var t={};return t.id=e.dataset.id,e.childNodes.forEach((function(e){var n,r=e.dataset.field;"type"===r?n=e.dataset.value:r&&(n=e.innerText),t[r]=n})),t}}])&&E(t.prototype,n),r&&E(t,r),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.instance instanceof e)return e.instance;this.localStorageService=t,this.tasks=t.get("tasks")||[],Object.freeze(this),e.instance=this}var t,n,r;return t=e,r=[{key:"getInstance",value:function(){return e.instance}}],(n=[{key:"create",value:function(e){return this.tasks.push(e),this.localStorageService.save("tasks",this.tasks),e}},{key:"update",value:function(e){var t=this.tasks.find((function(t){return t.id==e.id}));for(var n in e)t[n]=e[n];this.localStorageService.save("tasks",this.tasks)}},{key:"delete",value:function(e){var t=e.dataset.id,n=this.tasks.filter((function(e){return e.id===t})),r=this.tasks.indexOf(n);this.tasks.splice(r,1),this.localStorageService.save("tasks",this.tasks)}},{key:"getAll",value:function(){return this.localStorageService.get("tasks")||[]}},{key:"deleteAll",value:function(){this.localStorageService.remove("tasks")}},{key:"getNextAvailableIndex",value:function(){return this.tasks.length>0?this.tasks.length+1:1}},{key:"filter",value:function(e){return this.tasks.filter((function(t){return t.description.match(new RegExp(e,"gi"))}))}}])&&S(t.prototype,n),r&&S(t,r),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n}var t,n,r;return t=e,(n=[{key:"x",value:function(){return this.x}},{key:"x",value:function(e){this.x=e}},{key:"y",value:function(){return this.y}},{key:"y",value:function(e){this.y=e}}])&&_(t.prototype,n),r&&_(t,r),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.offset=new A(0,0),this.lastX=null,this.lastY=null,this.isDragged=!1,this.element.classList.add("draggable"),this.addEventListeners()}var t,n,r;return t=e,(n=[{key:"addEventListeners",value:function(){this.element.addEventListener("mousedown",this.startDragging.bind(this)),this.element.addEventListener("mousemove",this.drag.bind(this)),this.element.addEventListener("mouseup",this.drop.bind(this)),this.element.addEventListener("mouseleave",this.drop.bind(this))}},{key:"startDragging",value:function(e){this.isDragged=!0;var t=e.clientX,n=e.clientY;this.offset.x=this.element.offsetLeft-t,this.offset.y=this.element.offsetTop-n}},{key:"drag",value:function(e){if(this.isDragged){var t=e.clientX,n=e.clientY,r=t+this.offset.x,i=n+this.offset.y;this.element.style.left=r+"px",this.element.style.top=i+"px",this.lastX=r,this.lastY=i}}},{key:"drop",value:function(){if(this.isDragged=!1,this.element.classList.contains(d.main)){var e={id:this.element.dataset.id,xPosition:this.lastX,yPosition:this.lastY};L.getInstance().update(e)}}}])&&P(t.prototype,n),r&&P(t,r),e}();function O(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.NOTE_HOVER_SCALE="scale(".concat(1.3,")")}var t,n,r;return t=e,(n=[{key:"create",value:function(e){var t=e.id,n=e.type,r=e.description,i=e.noteColor,a=e.pinColor,o=e.xPosition,s=e.yPosition,c=e.rotation,l=document.createElement("div");l.classList.add(d.main),l.dataset.id=t,l.style.backgroundColor="#".concat(i),l.style.top="".concat(s,"px"),l.style.left="".concat(o,"px"),l.style.transform="rotate(".concat(c,"deg)");var u=document.createElement("p");u.classList.add(d.description),u.innerText=r,u.dataset.field="description",new T(l);var f=document.createElement("button");f.classList.add(d.deleteBtn),f.innerText="X";var v=document.createElement("div");v.classList.add(d.pin),v.style.backgroundImage="".concat(a);var h=document.createElement("i");h.classList.add(g.main),h.classList.add("".concat(g.detailed).concat(n)),h.classList.add(d.icon),h.dataset.field="type",h.dataset.value=n,this.addNoteEventListeners(l,c),this.addDeleteBtnEventListeners(f),l.appendChild(v),l.appendChild(h),l.appendChild(f),l.appendChild(u),k.board.appendChild(l)}},{key:"update",value:function(e){var t=O(document.querySelectorAll(".".concat(d.main))).find((function(t){return t.dataset.id==e.id}));t.dataset.id=e.id,t.childNodes.forEach((function(t){var n=t.dataset.field;"type"===n?(t.className="",t.classList.add(g.main),t.classList.add("".concat(g.detailed).concat(e[n])),t.classList.add(d.icon),t.dataset.value=e[n]):n&&(t.innerText=e[n])}))}},{key:"delete",value:function(e){e.remove()}},{key:"createAll",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach((function(t){return e.create(t)}))}},{key:"deleteAll",value:function(){var e=this;O(document.querySelectorAll(".".concat(d.main))).filter((function(e){return!e.classList.contains(v.main)&&!e.classList.contains(b.main)})).forEach((function(t){return e.delete(t)}))}},{key:"addNoteEventListeners",value:function(e,t){var n=this;e.addEventListener("mouseover",(function(){return e.style.transform=n.NOTE_HOVER_SCALE})),e.addEventListener("mouseleave",(function(){return e.style.transform="rotate(".concat(t,"deg)")}))}},{key:"addDeleteBtnEventListeners",value:function(e){var t=this;e.addEventListener("mouseover",(function(){return e.style.transform=t.NOTE_HOVER_SCALE})),e.addEventListener("mouseleave",(function(){return e.style.transform="scale(1)"}))}}])&&x(t.prototype,n),r&&x(t,r),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"save",value:function(e,t){e&&t&&localStorage.setItem(e,JSON.stringify(t))}},{key:"get",value:function(e){if(e)return JSON.parse(localStorage.getItem(e))}},{key:"remove",value:function(e){localStorage.removeItem(e)}}])&&I(t.prototype,n),r&&I(t,r),e}();function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(){var t=this;j(this,e),this.observers=new Map;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.forEach((function(e){return t.observers.set(e,[])}))}var t,n,r;return t=e,(n=[{key:"subscribe",value:function(e,t){this.observers.get(e).push(t)}},{key:"unsubscribe",value:function(e,t){var n=this.observers.get(e),r=n.indexOf(t);n.splice(r,1)}},{key:"notify",value:function(e,t){this.observers.get(e).forEach((function(n){return n[e](t)}))}}])&&F(t.prototype,n),r&&F(t,r),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.notePopUp=t,this.noteForm=n,this.events=new R("delete"),this.addEventListeners()}var t,n,r;return t=e,(n=[{key:"addEventListeners",value:function(){k.board.addEventListener("dblclick",this.showFormForUpdate.bind(this),{capture:!0}),k.board.addEventListener("click",this.deleteTask.bind(this))}},{key:"showFormForUpdate",value:function(e){var t=this.isNote(e.target),n=this.isNote(e.target.parentElement);(t||n)&&(this.notePopUp.showPopUp(),k.noteFormSubmitBtn.innerText="Update note",this.noteForm.populateForm(t?e.target:e.target.parentElement))}},{key:"deleteTask",value:function(e){if(e.target.classList.contains(d.deleteBtn)){var t=e.target.parentElement;this.events.notify("delete",t)}}},{key:"isNote",value:function(e){return e.classList.contains(d.main)&&!e.classList.contains(h.main)}}])&&D(t.prototype,n),r&&D(t,r),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formUtil=t,this.addEventListeners()}var t,n,r;return t=e,(n=[{key:"addEventListeners",value:function(){k.noteFormPopUpTrigger.addEventListener("click",this.showPopUp),k.noteFormPopUpCloseBtn.addEventListener("click",this.closePopUp.bind(this))}},{key:"showPopUp",value:function(){k.noteFormSubmitBtn.innerText="Create note",k.noteFormPopUp.classList.add(m.active)}},{key:"closePopUp",value:function(){k.noteFormPopUp.classList.remove(m.active),this.formUtil.resetForm(k.noteForm)}}])&&B(t.prototype,n),r&&B(t,r),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.taskService=n,this.noteService=r,this.formUtil=t,this.notePropertiesUtil=i,this.events=new R("create","update"),this.addEventListeners()}var t,n,r;return t=e,(n=[{key:"addEventListeners",value:function(){k.noteForm.addEventListener("submit",this.createTask.bind(this))}},{key:"createTask",value:function(e){e.preventDefault();var t=this.formUtil.extractData(k.noteForm);t.description&&(t.id?this.events.notify("update",t):(this.setTaskProperties(t),this.events.notify("create",t),this.formUtil.resetForm(k.noteForm)))}},{key:"populateForm",value:function(e){var t=this.notePropertiesUtil.getTaskFromNote(e);this.formUtil.populateData(k.noteForm,t)}},{key:"setTaskProperties",value:function(e){e.id=e.id||this.taskService.getNextAvailableIndex(),e.noteColor=this.notePropertiesUtil.getRandomColor(),e.pinColor=this.notePropertiesUtil.getRandomGradient(),e.rotation=this.notePropertiesUtil.getRandomRotation();var t=this.notePropertiesUtil.getRandomPosition(),n=t.xPosition,r=t.yPosition;e.xPosition=n,e.yPosition=r}}])&&q(t.prototype,n),r&&q(t,r),e}();function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addEventListeners(),this.events=new R("deleteAll")}var t,n,r;return t=e,(n=[{key:"addEventListeners",value:function(){k.noteDeleteAllTrigger.addEventListener("click",this.deleteAll.bind(this))}},{key:"deleteAll",value:function(){this.events.notify("deleteAll")}}])&&Z(t.prototype,n),r&&Z(t,r),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.taskService=t,this.noteService=n,this.addEventListeners()}var t,n,r;return t=e,(n=[{key:"addEventListeners",value:function(){k.noteSearchInput.addEventListener("keyup",this.filterTask.bind(this)),k.noteSearchInput.addEventListener("change",this.filterTask.bind(this))}},{key:"filterTask",value:function(e){var t,n=e.target.value;t=0===e.target.value.length?this.taskService.getAll():this.taskService.filter(n),this.noteService.deleteAll(),this.noteService.createAll(t)}}])&&V(t.prototype,n),r&&V(t,r),e}();n(0);!function(){var e=new o,t=new c,n=new w(t),r=new N,i=new L(r),a=new C(t),s=i.getAll();a.createAll(s);var l=new H,u=(new G(i,a),new X(e)),f=new Y(e,i,a,n),d=new M(u,f);f.events.subscribe("create",a),f.events.subscribe("create",i),d.events.subscribe("delete",a),d.events.subscribe("delete",i),f.events.subscribe("update",a),f.events.subscribe("update",i),l.events.subscribe("deleteAll",a),l.events.subscribe("deleteAll",i)}()}]);
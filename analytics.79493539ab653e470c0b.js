!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=140)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(78))},function(t,n,r){var e=r(0),o=r(16),i=r(32),c=r(54),u=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(8),o=r(7),i=r(19);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(8),o=r(46),i=r(4),c=r(23),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){"use strict";r.d(n,"j",(function(){return a})),r.d(n,"a",(function(){return f})),r.d(n,"i",(function(){return s})),r.d(n,"o",(function(){return e})),r.d(n,"n",(function(){return o})),r.d(n,"k",(function(){return i})),r.d(n,"m",(function(){return c})),r.d(n,"l",(function(){return u})),r.d(n,"e",(function(){return l})),r.d(n,"f",(function(){return p})),r.d(n,"g",(function(){return d})),r.d(n,"h",(function(){return v})),r.d(n,"r",(function(){return h})),r.d(n,"p",(function(){return y})),r.d(n,"q",(function(){return g})),r.d(n,"c",(function(){return b})),r.d(n,"d",(function(){return x})),r.d(n,"b",(function(){return m})),r.d(n,"s",(function(){return S}));var e=document.querySelector(".search__field"),o=document.querySelector(".search__fieldset"),i=document.querySelector(".search__bar"),c=document.querySelector(".search__field-error"),u=document.querySelector(".search__button"),a=document.querySelector(".results"),f=document.querySelector(".results__container"),s=document.querySelector(".results__more"),l=document.querySelector(".results__loading"),p=document.querySelector(".results__not-found"),v=document.querySelector(".results__error"),d=document.querySelector(".results__content"),h=document.querySelector(".analytics__title-result"),y=document.querySelector(".analytics__subtitle-news-result"),g=document.querySelector(".analytics__subtitle-result"),b=document.querySelectorAll(".chart__line-date"),x=document.querySelectorAll(".chart__line-value"),m=document.querySelector(".chart__caption-date span"),S=document.querySelector(".swiper-wrapper")},function(t,n,r){var e=r(0),o=r(27).f,i=r(6),c=r(12),u=r(31),a=r(48),f=r(53);t.exports=function(t,n){var r,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(r=h?e:y?e[d]||u(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(45),o=r(18);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(0),o=r(16),i=r(6),c=r(5),u=r(31),a=r(47),f=r(24),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||c(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(49),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(26),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(22),o=r(79);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(18);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(13);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";r.d(n,"b",(function(){return f})),r.d(n,"a",(function(){return s})),r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return v})),r.d(n,"e",(function(){return l}));r(40),r(121);var e=r(30),o=function(t){return new Date(Date.now()-t*c)},i=function(){for(var t=[],n=0;n<7;n++)t.push("".concat(o(n).getDate(),", ").concat(p[o(n+1).getDay()]));return t.reverse()},c=864e5,u=new Date,a=o(7),f=Object(e.a)(u),s=Object(e.a)(a),l=u.getMonth(),p=["пн","вт","ср","чт","пт","сб","вс"],v=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},function(t,n){t.exports=!1},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e,o,i,c=r(80),u=r(0),a=r(3),f=r(6),s=r(5),l=r(28),p=r(25),v=u.WeakMap;if(c){var d=new v,h=d.get,y=d.has,g=d.set;e=function(t,n){return g.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var b=l("state");p[b]=!0,e=function(t,n){return f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){t.exports={}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(8),o=r(44),i=r(19),c=r(11),u=r(23),a=r(5),f=r(46),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(16),o=r(32),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(50),o=r(33).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return o}));r(40),r(76),r(101);function e(t){return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function o(t){var n=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];return t.slice(0,10).replace(/(\d{4})-(\d{1,2})-0?([1-9]{1,2}0?)/,(function(t,r,e,o){return"".concat(o," ").concat(n[parseFloat(e)-1],", ").concat(r)}))}},function(t,n,r){var e=r(0),o=r(6);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(7).f,o=r(5),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},,function(t,n,r){var e=r(0),o=r(3),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,r){var e=r(4),o=r(82),i=r(33),c=r(25),u=r(63),a=r(37),f=r(28)("IE_PROTO"),s=function(){},l=function(){var t,n=a("iframe"),r=i.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[f]=t):r=l(),void 0===n?r:o(r,n)},c[f]=!0},function(t,n,r){var e,o,i=r(0),c=r(67),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){"use strict";var e=r(10),o=r(2),i=r(20),c=r(3),u=r(17),a=r(15),f=r(60),s=r(57),l=r(61),p=r(1),v=r(39),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var n,r,e,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?c:arguments[n],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,r){var e=r(50),o=r(33);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(35);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){"use strict";var e=r(10),o=r(0),i=r(14),c=r(22),u=r(8),a=r(54),f=r(2),s=r(5),l=r(20),p=r(3),v=r(4),d=r(17),h=r(11),y=r(23),g=r(19),b=r(38),x=r(41),m=r(29),S=r(83),w=r(52),O=r(27),_=r(7),j=r(44),E=r(6),T=r(12),P=r(16),A=r(28),M=r(25),L=r(32),N=r(1),R=r(55),q=r(64),k=r(34),C=r(24),I=r(56).forEach,D=A("hidden"),F=N("toPrimitive"),V=C.set,$=C.getterFor("Symbol"),z=Object.prototype,G=o.Symbol,H=i("JSON","stringify"),J=O.f,W=_.f,B=S.f,Y=j.f,K=P("symbols"),Q=P("op-symbols"),U=P("string-to-symbol-registry"),X=P("symbol-to-string-registry"),Z=P("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,rt=u&&f((function(){return 7!=b(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=J(z,n);e&&delete z[n],W(t,n,r),e&&t!==z&&W(z,n,e)}:W,et=function(t,n){var r=K[t]=b(G.prototype);return V(r,{type:"Symbol",tag:t,description:n}),u||(r.description=n),r},ot=a&&"symbol"==typeof G.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},it=function(t,n,r){t===z&&it(Q,n,r),v(t);var e=y(n,!0);return v(r),s(K,e)?(r.enumerable?(s(t,D)&&t[D][e]&&(t[D][e]=!1),r=b(r,{enumerable:g(0,!1)})):(s(t,D)||W(t,D,g(1,{})),t[D][e]=!0),rt(t,e,r)):W(t,e,r)},ct=function(t,n){v(t);var r=h(n),e=x(r).concat(st(r));return I(e,(function(n){u&&!ut.call(r,n)||it(t,n,r[n])})),t},ut=function(t){var n=y(t,!0),r=Y.call(this,n);return!(this===z&&s(K,n)&&!s(Q,n))&&(!(r||!s(this,n)||!s(K,n)||s(this,D)&&this[D][n])||r)},at=function(t,n){var r=h(t),e=y(n,!0);if(r!==z||!s(K,e)||s(Q,e)){var o=J(r,e);return!o||!s(K,e)||s(r,D)&&r[D][e]||(o.enumerable=!0),o}},ft=function(t){var n=B(h(t)),r=[];return I(n,(function(t){s(K,t)||s(M,t)||r.push(t)})),r},st=function(t){var n=t===z,r=B(n?Q:h(t)),e=[];return I(r,(function(t){!s(K,t)||n&&!s(z,t)||e.push(K[t])})),e};(a||(T((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=L(t),r=function(t){this===z&&r.call(Q,t),s(this,D)&&s(this[D],n)&&(this[D][n]=!1),rt(this,n,g(1,t))};return u&&nt&&rt(z,n,{configurable:!0,set:r}),et(n,t)}).prototype,"toString",(function(){return $(this).tag})),j.f=ut,_.f=it,O.f=at,m.f=S.f=ft,w.f=st,u&&(W(G.prototype,"description",{configurable:!0,get:function(){return $(this).description}}),c||T(z,"propertyIsEnumerable",ut,{unsafe:!0})),R.f=function(t){return et(N(t),t)}),e({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:G}),I(x(Z),(function(t){q(t)})),e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(s(U,n))return U[n];var r=G(n);return U[n]=r,X[r]=n,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(s(X,t))return X[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),e({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?b(t):ct(b(t),n)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:at}),e({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ft,getOwnPropertySymbols:st}),e({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(d(t))}}),H)&&e({target:"JSON",stat:!0,forced:!a||f((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!ot(n))return n}),o[1]=n,H.apply(null,o)}});G.prototype[F]||E(G.prototype,F,G.prototype.valueOf),k(G,"Symbol"),M[D]=!0},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(13),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(8),o=r(2),i=r(37);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(16);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e=r(5),o=r(81),i=r(27),c=r(7);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(5),o=r(11),i=r(73).indexOf,c=r(25);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(26),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){n.f=r(1)},function(t,n,r){var e=r(42),o=r(45),i=r(17),c=r(15),u=r(57),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,y){for(var g,b,x=i(v),m=o(x),S=e(d,h,3),w=c(m.length),O=0,_=y||u,j=n?_(v,w):r?_(v,0):void 0;w>O;O++)if((p||O in m)&&(b=S(g=m[O],O,x),t))if(n)j[O]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:a.call(j,g)}else if(s)return!1;return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(3),o=r(20),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){"use strict";var e=r(10),o=r(8),i=r(0),c=r(5),u=r(3),a=r(7).f,f=r(48),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var d=v.toString,h="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=d.call(t);if(c(l,t))return"";var r=h?n.slice(7,-1):n.replace(y,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},,function(t,n,r){"use strict";var e=r(23),o=r(7),i=r(19);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){var e=r(2),o=r(1),i=r(39),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){"use strict";var e,o,i=r(71),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,f=(e=/a/,o=/b*/g,c.call(e,"a"),c.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,r,e,o,a=this;return s&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),e=c.call(a,t),f&&e&&(a.lastIndex=a.global?e.index+e[0].length:n),s&&e&&e.length>1&&u.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=a},function(t,n,r){var e=r(14);t.exports=e("document","documentElement")},function(t,n,r){var e=r(49),o=r(5),i=r(55),c=r(7).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},,,function(t,n,r){var e=r(14);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(26),o=r(18),i=function(t){return function(n,r){var i,c,u=String(o(n)),a=e(r),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(6),o=r(12),i=r(2),c=r(1),u=r(62),a=c("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,l){var p=c(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),d=v&&!i((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[a]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return n=!0,null},r[p](""),!n}));if(!v||!d||"replace"===t&&!f||"split"===t&&!s){var h=/./[p],y=r(p,""[t],(function(t,n,r,e,o){return n.exec===u?v&&!o?{done:!0,value:h.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),g=y[0],b=y[1];o(String.prototype,t,g),o(RegExp.prototype,p,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)}),l&&e(RegExp.prototype[p],"sham",!0)}}},function(t,n,r){"use strict";var e=r(4);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var e=r(13),o=r(62);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){var e=r(11),o=r(15),i=r(51),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},,function(t,n,r){var e=r(0),o=r(69),i=r(99),c=r(6);for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,r){"use strict";var e=r(10),o=r(3),i=r(20),c=r(51),u=r(15),a=r(11),f=r(60),s=r(61),l=r(1)("species"),p=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!s("slice")},{slice:function(t,n){var r,e,s,d=a(this),h=u(d.length),y=c(t,h),g=c(void 0===n?h:n,h);if(i(d)&&("function"!=typeof(r=d.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[l])&&(r=void 0):r=void 0,r===Array||void 0===r))return p.call(d,y,g);for(e=new(void 0===r?Array:r)(v(g-y,0)),s=0;y<g;y++,s++)y in d&&f(e,s,d[y]);return e.length=s,e}})},function(t,n,r){"use strict";var e=r(68).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(31),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=r(47),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(14),o=r(29),i=r(52),c=r(4);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(8),o=r(7),i=r(4),c=r(41);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(11),o=r(29).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(e(t))}},,function(t,n,r){var e=r(1),o=r(38),i=r(6),c=e("unscopables"),u=Array.prototype;null==u[c]&&i(u,c,o(null)),t.exports=function(t){u[c][t]=!0}},,,,function(t,n,r){var e=r(4),o=r(90);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},,,function(t,n,r){"use strict";var e=r(14),o=r(7),i=r(1),c=r(8),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},,,,,,function(t,n,r){"use strict";var e=r(56).forEach,o=r(100);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){var r=[][t];return!r||!e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){"use strict";var e=r(70),o=r(4),i=r(17),c=r(15),u=r(26),a=r(18),f=r(77),s=r(72),l=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;e("replace",2,(function(t,n,r){return[function(r,e){var o=a(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,e):n.call(String(o),r,e)},function(t,i){var a=r(n,t,this,i);if(a.done)return a.value;var v=o(t),d=String(this),h="function"==typeof i;h||(i=String(i));var y=v.global;if(y){var g=v.unicode;v.lastIndex=0}for(var b=[];;){var x=s(v,d);if(null===x)break;if(b.push(x),!y)break;""===String(x[0])&&(v.lastIndex=f(d,c(v.lastIndex),g))}for(var m,S="",w=0,O=0;O<b.length;O++){x=b[O];for(var _=String(x[0]),j=l(p(u(x.index),d.length),0),E=[],T=1;T<x.length;T++)E.push(void 0===(m=x[T])?m:String(m));var P=x.groups;if(h){var A=[_].concat(E,j,d);void 0!==P&&A.push(P);var M=String(i.apply(void 0,A))}else M=e(_,d,j,E,P,i);j>=w&&(S+=d.slice(w,j)+M,w=j+_.length)}return S+d.slice(w)}];function e(t,r,e,o,c,u){var a=e+t.length,f=o.length,s=h;return void 0!==c&&(c=i(c),s=d),n.call(u,s,(function(n,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(a);case"<":u=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var l=v(s/10);return 0===l?n:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}u=o[s-1]}return void 0===u?"":u}))}}))},function(t,n,r){"use strict";function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}r.d(n,"a",(function(){return o}));var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r,o;return n=t,(r=[{key:"setNewsItems",value:function(t){var n=JSON.stringify(t.articles);localStorage.setItem("NewsAnalyzer news","".concat(n)),localStorage.setItem("NewsAnalyzer newsTotalResults","".concat(t.totalResults))}},{key:"setReqPhrase",value:function(t){localStorage.setItem("NewsAnalyzer reqPhrase","".concat(t))}},{key:"getNewsArray",value:function(){return JSON.parse(localStorage["NewsAnalyzer news"])}},{key:"getNewsItems",value:function(t,n){for(var r=[],e=this.getNewsArray(),o=t;o<n;o++)e[o]&&r.push(e[o]);return r}}])&&e(n.prototype,r),o&&e(n,o),t}()},,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";var e=r(10),o=r(20),i=[].reverse,c=[1,2];e({target:"Array",proto:!0,forced:String(c)===String(c.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},function(t,n,r){var e=r(3),o=r(13),i=r(1)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},,,,,,function(t,n,r){},function(t,n,r){"use strict";var e=r(10),o=r(73).includes,i=r(85);e({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n,r){var e=r(10),o=r(17),i=r(41);e({target:"Object",stat:!0,forced:r(2)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,r){"use strict";var e=r(10),o=r(132),i=r(18);e({target:"String",proto:!0,forced:!r(133)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(122);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,r){var e=r(1)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,r){var e=r(8),o=r(0),i=r(53),c=r(135),u=r(7).f,a=r(29).f,f=r(122),s=r(71),l=r(12),p=r(2),v=r(93),d=r(1)("match"),h=o.RegExp,y=h.prototype,g=/a/g,b=/a/g,x=new h(g)!==g;if(e&&i("RegExp",!x||p((function(){return b[d]=!1,h(g)!=g||h(b)==b||"/a/i"!=h(g,"i")})))){for(var m=function(t,n){var r=this instanceof m,e=f(t),o=void 0===n;return!r&&e&&t.constructor===m&&o?t:c(x?new h(e&&!o?t.source:t,n):h((e=t instanceof m)?t.source:t,e&&o?s.call(t):n),r?this:y,m)},S=function(t){t in m||u(m,t,{configurable:!0,get:function(){return h[t]},set:function(n){h[t]=n}})},w=a(h),O=0;w.length>O;)S(w[O++]);y.constructor=m,m.prototype=y,l(o,"RegExp",m)}v("RegExp")},function(t,n,r){var e=r(3),o=r(89);t.exports=function(t,n,r){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==r&&e(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},function(t,n,r){"use strict";var e=r(12),o=r(4),i=r(2),c=r(71),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in u)?c.call(t):r)}),{unsafe:!0})},function(t,n,r){"use strict";var e=r(70),o=r(4),i=r(15),c=r(18),u=r(77),a=r(72);e("match",1,(function(t,n,r){return[function(n){var r=c(this),e=null==n?void 0:n[t];return void 0!==e?e.call(n,r):new RegExp(n)[t](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var c=o(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(c,f));){var d=String(l[0]);p[v]=d,""===d&&(c.lastIndex=u(f,i(c.lastIndex),s)),v++}return 0===v?null:p}]}))},,,function(t,n,r){"use strict";r.r(n);r(128),r(129),r(76),r(130),r(131),r(75);var e=r(9);r(43),r(58),r(134),r(136),r(137);var o=r(21);function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var c=new(function(){function t(n,r,e){var o,i,c,u;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._storageNewsObject=n,this._storageReqPhrase=r,this._storageTotalNews=e,this._searchMatchesObj=(o=this._storageNewsObject,i=this._storageReqPhrase,c={total:0},u=new RegExp(i,"gi"),o.forEach((function(t){if(null!==t.title){var n=t.title.match(u);if(null!==n){var r=new Date(t.publishedAt).getDate();"number"==typeof c[r]?(c[r]+=n.length,c.total+=n.length):c[r]=0}}if(null!==t.description){var e=t.description.match(u);if(null!==e){var o=new Date(t.publishedAt).getDate();"number"==typeof c[o]?(c[o]+=e.length,c.total+=e.length):c[o]=0}}})),c)}var n,r,c;return n=t,(r=[{key:"renderStatTitles",value:function(){e.r.textContent="«".concat(this._storageReqPhrase,"»"),e.p.textContent=this._storageTotalNews,e.q.textContent=this._searchMatchesObj.total}},{key:"renderStatDates",value:function(t){e.b.textContent="(".concat(o.d[o.e],")"),t.forEach((function(t,n){"1,"===t.slice(0,2)&&0!==n&&(e.c[n].parentNode.insertAdjacentHTML("beforebegin",'<p class="chart__caption-date">Дата<span>('.concat(o.d[o.e],")</span></p>")),e.b.textContent="(".concat(o.d[o.e-1],")")),e.c[n].textContent=t}))}},{key:"renderStatValues",value:function(){var t=this;e.d.forEach((function(n,r){Object.keys(t._searchMatchesObj).includes(Object(o.c)()[r].slice(0,2))&&(n.style.width="calc(".concat(t._searchMatchesObj[Object(o.c)()[r].slice(0,2)]/100," * (100% - 104px) - 6px)"),n.textContent=t._searchMatchesObj[Object(o.c)()[r].slice(0,2)])}))}}])&&i(n.prototype,r),c&&i(n,c),t}())((new(r(102).a)).getNewsArray(),localStorage["NewsAnalyzer reqPhrase"],localStorage["NewsAnalyzer newsTotalResults"]);window.onload=function(){c.renderStatTitles(),c.renderStatDates(Object(o.c)()),c.renderStatValues()}}]);
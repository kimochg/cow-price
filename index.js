!function(e){function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=function(){function e(r,t){n(this,e),this.op=parseFloat(r,10),t?Array.isArray(t)?this.rules=t:this.rules=[t]:this.rules=[]}return u(e,[{key:"setValue",value:function(e){this.op=parseFloat(e,10)}},{key:"getValue",value:function(){return this.op}},{key:"addRule",value:function(e){this.rules.push(e)}},{key:"getRules",value:function(){return this.rules}},{key:"setRule",value:function(e){Array.isArray(e)?this.rules=e:this.rules=[e]}},{key:"cost",value:function(){return this.finalPrice=this.rules.reduce(function(r,t){return e.calculate(r,t)},this.op),this.finalPrice}}],[{key:"calculate",value:function(r,t){var n=t.condition,u=n.perCount,a=n.perDiscount,i=n.maxDiscount;switch(t.category){case"flat":var o=~~(r/u)*a;return o>i?e.guard(r-i):e.guard(r-o);case"percentage":if(r<u)return e.guard(r);var c=r-r*a/100;return c>i?e.guard(r-i):e.guard(r-c);default:return e.guard(r)}}},{key:"guard",value:function(e){return"number"!=typeof e||e<0||e!==e?0:e}}]),e}();a.default=a,e.exports=a}]);
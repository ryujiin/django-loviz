define(["../core","../var/document","./var/rsingleTag","../traversing/findFilter"],function(e,t,n){var r,i=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,s=e.fn.init=function(s,o,u){var a,f;if(!s)return this;u=u||r;if(typeof s=="string"){s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?a=[null,s,null]:a=i.exec(s);if(a&&(a[1]||!o)){if(a[1]){o=o instanceof e?o[0]:o,e.merge(this,e.parseHTML(a[1],o&&o.nodeType?o.ownerDocument||o:t,!0));if(n.test(a[1])&&e.isPlainObject(o))for(a in o)e.isFunction(this[a])?this[a](o[a]):this.attr(a,o[a]);return this}return f=t.getElementById(a[2]),f&&(this[0]=f,this.length=1),this}return!o||o.jquery?(o||u).find(s):this.constructor(o).find(s)}return s.nodeType?(this[0]=s,this.length=1,this):e.isFunction(s)?u.ready!==undefined?u.ready(s):s(e):e.makeArray(s,this)};return s.prototype=e.fn,r=e(t),s});
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(n,e,t){n.exports=t(231)},118:function(n,e,t){},124:function(n,e){},126:function(n,e){},161:function(n,e){},162:function(n,e){},231:function(n,e,t){"use strict";t.r(e);var r=t(16),a=t.n(r),o=t(106),i=t.n(o),c=(t(118),t(24)),u=t(107),s=t(108),l=t(111),p=t(109),f=t(112),d=t(1),h=t.n(d),w=t(5),m=t(233),v=function(){var n=Object(w.a)(h.a.mark(function n(e){return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(e,{method:"get",headers:{Accept:"application/ld+json"}}).then(function(n){return n.json()}));case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=Object(w.a)(h.a.mark(function n(e){var t,r,a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.decode(e,{complete:!0});case 2:return t=n.sent,n.next=5,v("https://uniresolver.io/1.0/identifiers/"+t.payload.iss);case 5:return r=n.sent,a=r.methodMetadata.continuation.publicKey.find(function(n){return n.id===t.payload.iss+"#key-"+t.header.kid}),n.abrupt("return",a);case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),y=function(n){function e(){var n,t;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(a)))).state={},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"componentWillMount",value:function(){var n=Object(w.a)(h.a.mark(function n(){var e,t=this;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=function(){var n=Object(w.a)(h.a.mark(function n(e){var r,a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URL(e),n.next=3,v(e);case 3:return a=n.sent,n.abrupt("return",Promise.all(Object.keys(a.claims).map(function(){var n=Object(w.a)(h.a.mark(function n(e){var o,i,u;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=a.claims[e].jwt,n.next=3,b(o);case 3:return i=n.sent,n.next=6,m.a.verify(o,i.publicKeyJwk);case 6:if((u=n.sent).iss!==e){n.next=11;break}return console.log(e," is authorized for: ",u.domain),t.setState(Object(c.a)({},e,{verified:u,origin:r.hostname,is_claim_for_origin:r.hostname===u.domain})),n.abrupt("return",e);case 11:return n.abrupt("return",void 0);case 12:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}())));case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),n.next=3,e(window.location.origin+"/.well-known/did-configuration");case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,".well-known/did-configuration"),a.a.createElement("pre",null,JSON.stringify(this.state,null,2)))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.52b1088f.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{260:function(n,e,t){t.d(e,{$:function(){return f},Oe:function(){return i},_k:function(){return p},lR:function(){return s},uy:function(){return o}});var r=t(861),a=t(757),u=t.n(a),c=t(44),i=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("https://api.themoviedb.org/3/trending/all/day?api_key=bb9be7856d820d280efdc8865f07d5b2");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("https://api.themoviedb.org/3/search/movie?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US&".concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},321:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,u,c,i=t(885),o=t(791),s=t(168),p=t(444),f=p.ZP.h1(r||(r=(0,s.Z)(["\nmargin: 0 0 10px 0;\nfont-size: 30px;\n"]))),d=t(689),l=t(731),h=p.ZP.ul(a||(a=(0,s.Z)(["\n  padding: 10px;\n  list-style: none;\n  margin: 0;\n"]))),b=p.ZP.li(u||(u=(0,s.Z)(["\n  margin-bottom: 10px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n"]))),v=(0,p.ZP)(l.rU)(c||(c=(0,s.Z)(["\n  font-size: 16px;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    font-weight: 700;\n    color: green;\n  }\n"]))),m=t(184),g=function(n){var e=n.movies,t=(0,d.TH)();return(0,m.jsx)(h,{children:e.length>0&&e.map((function(n){return(0,m.jsx)(b,{children:(0,m.jsx)(v,{to:"movies/".concat(n.id),state:{from:t},children:n.title?n.title:n.name})},n.id)}))})},x=t(260),k=function(){var n=(0,o.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1];return(0,o.useEffect)((function(){try{(0,x._k)().then((function(n){return r(n)}))}catch(n){console.log(n)}}),[]),(0,m.jsxs)("main",{children:[(0,m.jsx)(f,{children:"Trending today"}),(0,m.jsx)(g,{movies:t})]})}}}]);
//# sourceMappingURL=321.e2d00298.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{687:function(n,e,t){t.d(e,{$:function(){return o},_:function(){return r}});var r="https://api.themoviedb.org/3/",o="6681e5624145dca4e352c9384e101aaa"},514:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,c,a,i=t(439),u=t(243),s=t(791),p=t(689),l=t(687),d=t(168),h=t(867),x=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n"]))),f=h.ZP.li(o||(o=(0,d.Z)(["\n  padding: 10px;\n  border-radius: 4px;\n  border: 2px solid #a04986;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);\n"]))),m=h.ZP.h3(c||(c=(0,d.Z)(["\n  margin-bottom: 15px;\n  font-size: 18px;\n  text-align: center;\n  color: #72285c;\n"]))),v=h.ZP.p(a||(a=(0,d.Z)(["\n  color: #72285c;\n  font-size: 18px;\n"]))),g=t(184),Z=function(){var n=(0,p.UO)().movieId,e=(0,s.useState)([]),t=(0,i.Z)(e,2),r=t[0],o=t[1];return(0,s.useEffect)((function(){n&&u.Z.get("".concat(l._,"movie/").concat(n,"/reviews?api_key=").concat(l.$)).then((function(n){var e=n.data;return o(e.results)})).catch((function(n){return console.log(n)}))}),[n]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(x,{children:r.length>0?r.map((function(n){return(0,g.jsxs)(f,{children:[(0,g.jsxs)(m,{children:["Author: ",n.author.toUpperCase()]}),(0,g.jsx)(v,{children:n.content})]},n.id)})):(0,g.jsx)("p",{children:"We don't have any reviews for this movie."})})})}}}]);
//# sourceMappingURL=514.e266da09.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{687:function(e,n,t){t.d(n,{$:function(){return i},_:function(){return r}});var r="https://api.themoviedb.org/3/",i="6681e5624145dca4e352c9384e101aaa"},499:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,i,c=t(439),s=t(689),a=t(87),o=t(791),l=t(243),d=t(687),h=t(168),u=t(867),x=u.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),p=(0,u.ZP)(a.rU)(i||(i=(0,h.Z)(["\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  width: 150px;\n  height: 30px;\n  /* border: 1px solid red; */\n  background-color: gray;\n  margin-bottom: 10px;\n  &:hover {\n    color: black;\n  }\n"]))),j=t(184),v=function(){var e,n,t=(0,s.UO)().movieId,r=(0,o.useState)(null),i=(0,c.Z)(r,2),h=i[0],u=i[1],v=(0,o.useState)(null),f=(0,c.Z)(v,2),m=f[0],g=f[1],w=(0,s.TH)(),_=(0,o.useRef)(null!==(e=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,o.useEffect)((function(){l.Z.get("".concat(d._,"/movie/").concat(t,"?api_key=").concat(d.$)).then((function(e){var n=e.data;return u(n)})).catch((function(e){return g(e)}))}),[t]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p,{to:_.current,children:"Go back"}),m&&(0,j.jsx)("p",{children:m.message}),h&&(0,j.jsxs)(x,{children:[(0,j.jsx)("div",{children:h.poster_path&&(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.poster_path),alt:h.title,width:"200px"})}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h1",{children:[h.title," (",h.release_date&&h.release_date.slice(0,4),")"]}),(0,j.jsxs)("p",{children:["User score: ",Math.round(10*h.vote_average),"%"]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:h.overview}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:h.genres&&h.genres.map((function(e){return e.name+" "}))})]})]}),(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)(o.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:(0,j.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=499.9bccc355.chunk.js.map
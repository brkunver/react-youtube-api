(this["webpackJsonpreact-youtube-api"]=this["webpackJsonpreact-youtube-api"]||[]).push([[0],{97:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(9),r=n.n(i),s=n(25),a=n(44),o=n.n(a),j=n(125),l=n(137),u=n(129),d=n(6),h=function(t){var e=Object(c.useState)(""),n=Object(s.a)(e,2),i=n[0],r=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1,children:[Object(d.jsxs)(j.a,{item:!0,children:[" ",Object(d.jsx)("i",{className:"fab fa-youtube fa-2x"})]}),Object(d.jsxs)(j.a,{item:!0,children:[" ",Object(d.jsx)("h1",{children:"Search Youtube"}),"  "]})]}),Object(d.jsxs)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:[Object(d.jsx)(j.a,{item:!0,md:4,sm:6,xs:8,children:Object(d.jsx)(l.a,{size:"small",onChange:function(t){r(t.target.value)},variant:"outlined",fullWidth:!0})}),Object(d.jsx)(j.a,{item:!0,md:2,sm:2,xs:4,children:Object(d.jsx)(u.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){return t.onButtonClick(i)},children:"Search"})})]})]})},b=n(136),x=function(){return Object(d.jsx)("footer",{style:{bottom:"0",textAlign:"center"},children:Object(d.jsxs)("p",{children:[" Created By ",Object(d.jsx)("a",{href:"https://github.com/brkunver",children:" Burakhan \xdcnver"})," "]})})},m=n(130),O=n(131),p=n(132),f=n(133),g=n(134),y=n(135),v=function(t){var e=t.list.map((function(e){return Object(d.jsx)(j.a,{item:!0,md:6,xs:10,style:{marginTop:"24px"},children:Object(d.jsxs)(m.a,{children:[Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(p.a,{children:[" ",Object(d.jsx)("img",{src:e.snippet.thumbnails.medium.url,alt:"thumbnail",style:{display:"block",marginLeft:"auto",marginRight:"auto"}})," "]}),Object(d.jsxs)(f.a,{children:[Object(d.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.snippet.title}),Object(d.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:e.snippet.description})]})]}),Object(d.jsx)(y.a,{children:Object(d.jsx)(u.a,{size:"small",color:"primary",onClick:function(){return t.watch(e.id.videoId)},children:"Watch"})})]})},e.id.videoId)}));return Object(d.jsx)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1,children:e})},w=n(50),k=function(t){var e="https://www.youtube.com/watch?v="+t.link;return Object(d.jsx)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{marginTop:"24px"},children:Object(d.jsxs)(j.a,{item:!0,children:[Object(d.jsxs)("h3",{style:{textAlign:"center"},children:[" ",Object(d.jsx)("a",{href:e,children:" Watch on Youtube "})," "]}),Object(d.jsx)(w.a,{videoId:t.link,opts:{height:"240",width:"360"}})]})})};var I=function(){var t=Object(c.useState)(null),e=Object(s.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)([]),a=Object(s.a)(r,2),j=a[0],l=a[1];return Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h,{onButtonClick:function(t){i(null),o.a.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",maxResult:9,q:t,type:"video",key:"AIzaSyBCpF1wcX4KqrHxsKDNwKRUkAg98HSmjGg"}}).then((function(t){return l(t.data.items)})).then((function(t){return console.log(t)}))}}),n&&Object(d.jsx)(k,{link:n}),Object(d.jsx)(v,{list:j,watch:function(t){i(t),l([])}}),Object(d.jsx)(x,{})]})};r.a.render(Object(d.jsx)(I,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.0f0e340f.chunk.js.map
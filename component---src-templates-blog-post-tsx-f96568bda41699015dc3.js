"use strict";(self.webpackChunklemon_press_website=self.webpackChunklemon_press_website||[]).push([[7],{6686:function(e,t,n){n.d(t,{w:function(){return o}});var l=n(7294),r=n(346),i=n(5171),a=(0,r.zo)("div",{display:"flex",flexDirection:"column",gap:"$1",background:"$accent",padding:"$1","@smUp":{flexDirection:"row"}}),c=(0,r.zo)("img",{width:"100%",height:"100%",maxWidth:150,maxHeight:150}),o=function(e){var t=e.author,n=t.avatar,r=t.firstName,o=t.description,u=null==n?void 0:n.url;return l.createElement(a,null,u&&l.createElement(c,{alt:r||"",src:u}),r&&l.createElement("div",null,l.createElement(i.x,{color:"normal"},l.createElement("i",null,"Written by ",l.createElement("b",null,r))),l.createElement(i.x,{color:"normal",css:{marginBottom:0}},o||null)))}},4746:function(e,t,n){n.r(t);var l=n(7294),r=n(346),i=n(6125),a=n(3310),c=n(6686),o=n(2945),u=n(1503),m=n(4224),f=n(8822),s=n(9502),d=n(7301),g=(0,r.zo)("article",{gridColumn:"2 / -2",display:"flex",flexDirection:"column",gap:"$1",margin:"$2 0"}),p=(0,r.zo)("nav",{gridColumn:"1 / -1",ul:{display:"flex",justifyContent:"center",flexDirection:"column",flexWrap:"wrap",gap:"$1",listStyle:"none",padding:0,"@mdUp":{justifyContent:"space-between",flexDirection:"row"}}}),h=(0,r.zo)(f.H2,{color:"$textLight",fontWeight:"$normal",fontStyle:"italic"});t.default=function(e){var t=e.data,n=t.previous,r=t.next,E=t.post;return l.createElement(o.A,null,l.createElement(u.H,{title:E.title,description:E.excerpt}),l.createElement(m.W,null,l.createElement(g,null,l.createElement("header",null,l.createElement(f.H1,null,(0,d.rg)(E.title)),l.createElement(h,null,E.date," • ",(0,d.Ue)((0,d.aw)(E.content))," minute read"),function(){if(E.featuredImage)return l.createElement(i.G,{image:(0,i.d)(E.featuredImage.node.localFile),alt:E.featuredImage.node.altText})}()),E.content&&l.createElement("section",null,(0,d.rg)(E.content)),l.createElement("footer",null,l.createElement(c.w,{author:E.author.node}))),l.createElement(p,null,l.createElement("ul",null,l.createElement("li",null,n&&l.createElement(s.h,{to:"/post/"+n.slug},"← ",(0,d.rg)(n.title))),l.createElement("li",null,r&&l.createElement(s.h,{to:"/post/"+r.slug},(0,a.ZP)(r.title)," →"))))))}},7301:function(e,t,n){n.d(t,{AV:function(){return r.A},Ue:function(){return i},aw:function(){return l},rg:function(){return p},SX:function(){return a}});var l=function(e){return e.replace(/(<([^>]+)>)/gi,"")},r=n(6293),i=function(e){var t=e.trim().split(/\s+/).length;return Math.ceil(t/225)},a=function(e){return e.split(' <a class="more-link" ')[0]},c=n(7294),o=n(3310),u=n(8822),m=n(5171),f=n(9502),s=(0,n(346).zo)("figure",{width:"100%",margin:"$1 0",img:{width:"100%",height:"100%"},figcaption:{fontStyle:"italic",textAlign:"center",marginTop:"$1"}}),d={p:m.x,h1:u.H1,h2:u.H2,h3:u.H3,a:f.h,figure:s},g={replace:function(e){var t=e.attribs&&(0,o.e_)(e.attribs);if(d[e.name]){var n=d[e.name];return e.children?c.createElement(n,t,(0,o.du)(e.children,g)):c.createElement(n,t)}}},p=function(e,t){return void 0===t&&(t={}),(0,o.ZP)(e,Object.assign({},g,t))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-f96568bda41699015dc3.js.map
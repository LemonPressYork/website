"use strict";(self.webpackChunklemon_press_website=self.webpackChunklemon_press_website||[]).push([[691],{6704:function(e,t,n){n.d(t,{o:function(){return s}});var l=n(7294),a=n(346),r=n(9502),i=n(5171),c=(0,a.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px"}),o=(0,a.zo)("img",{minWidth:"200px",width:"100%",marginTop:"10px"}),m=(0,a.zo)(r.h,{textDecoration:"none",textAlign:"center",fontSize:"$3",fontWeight:"$bold",fontFamily:"$sans",color:"$text",marginTop:"10px",marginBottom:"5px"}),u=(0,a.zo)(i.x,{marginTop:"0px"}),s=function(e){var t=e.title,n=e.date,a=e.image,i=e.link;return l.createElement(c,null,l.createElement(r.H,{to:i},l.createElement(o,{src:a})),l.createElement(m,{to:i},t),l.createElement(u,null,n))}},4697:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var l=n(7294),a=n(6125),r=n(4224),i=n(2945),c=n(3310),o=n(346),m=n(5171),u=n(8822),s=n(9502),g=n(5444),d=n(7301),p=(0,o.zo)("div",{position:"relative","&:after":{content:"",position:"absolute",width:"100%",height:"100%",top:0,left:0,background:"linear-gradient(hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 1))",opacity:.7,transition:"opacity $ease"},"&:hover:after":{opacity:.85}}),E=(0,o.zo)("div",{position:"relative",top:0,left:0,width:"100%",height:"calc(100% - 2 * $space$2)",padding:"$2 0"}),f=(0,o.zo)(u.H1,{color:"#FFFFFF",textShadow:"$1",textDecoration:"none",margin:0}),h=(0,o.zo)(r.W,{position:"relative",display:"flex",flexDirection:"column",justifyContent:"end",gap:"$1",zIndex:1,minHeight:350}),b=(0,o.iv)({maxHeight:480,minHeight:300,width:"100%",position:"absolute",height:"100%"}),v=(0,o.zo)(m.x,{fontWeight:"$semibold",fontSize:"$3",textShadow:"$1",margin:0,display:"none","@lgUp":{display:"block"}}),x=function(){var e=(0,g.useStaticQuery)("3310192541").allWpPost.posts[0].node,t=e.title,n=e.excerpt,r=e.slug,i=e.featuredImage,o=(0,a.d)(i.node.localFile);return l.createElement(s.H,{to:"/post/"+r},l.createElement(p,null,l.createElement(a.G,{image:o,alt:"",className:b()}),l.createElement(E,null,l.createElement(h,null,l.createElement(f,null,t),(0,d.rg)((0,d.SX)(n),{replace:function(e){if(e.attribs&&"p"===e.name){var t=(0,c.e_)(e.attribs);return l.createElement(v,Object.assign({color:"white"},t),(0,c.du)(e.children))}}})))))},H=n(339),w=(0,o.zo)("div",{position:"relative",backgroundColor:"$text",minHeight:250,maxHeight:250}),y=(0,o.zo)(H.H,{padding:"5px $1",display:"block",width:"min-content",color:"$text",backgroundColor:"white",fontWeight:"$bold",fontSize:"$1",textAlign:"center",textTransform:"uppercase",borderRadius:"9999px",transition:"background-color $ease, color $ease","&:hover":{backgroundColor:"black",color:"white"}}),$=(0,o.zo)(u.H2,{color:"$background",fontSize:"$3"}),z=(0,o.iv)({objectFit:"cover",height:"100%"}),C=(0,o.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"space-between",position:"absolute",top:0,left:0,padding:"$1",width:"calc(100% - 2 * $space$1)",height:"calc(100% - 2 * $space$1)",background:"hsla(0, 0%, 0%, 0.5)",transition:"background $ease","&:hover":{background:"hsla(0, 0%, 0%, 0.75)"}}),S=function(e){var t=e.image;return void 0===t?l.createElement(a.S,{src:"../../media/replacement-image.jpg",alt:"Preview image for article",className:z(),__imageData:n(9982)}):l.createElement(a.G,{image:t,alt:"Preview image for article",className:z()})},k=function(e){var t=e.title,n=e.to,a=e.category,r=e.image;return l.createElement(w,null,l.createElement(H.H,{to:"/post/"+n},l.createElement(S,{image:r}),l.createElement(C,null,l.createElement($,null,t),l.createElement(H.H,{to:""},l.createElement(y,{to:"/category/"+a.slug},a.name)))))},F=(0,o.zo)("div",{display:"grid",gridTemplateColumns:"1fr",gridColumnGap:"$1",gridRowGap:"$1",margin:"calc(2 * $1) 0","@mdUp":{gridTemplateColumns:"repeat( 2, minmax(250px, 1fr) )"}}),j=function(e){var t=e.css,n=(0,g.useStaticQuery)("2699284690").allWpPost.posts.slice(4);return l.createElement(F,{css:t},n.map((function(e){var t=e.node,n=t.title,r=t.slug,i=t.categories.nodes,c=t.featuredImage;return l.createElement(k,{title:n,to:r,key:r,category:{name:i[0].name,slug:i[0].slug},image:(0,a.d)(null==c?void 0:c.node.localFile)})})))},_=n(6704),A=(0,o.zo)("div",{width:"300px"}),W=["January","February","March","April","May","June","July","August","September","October","November","December"],I=function(e){var t=e.css,n=(0,g.useStaticQuery)("1450970802").allIssues.edges[0].node,a=n.title,r=n.epoch,i=n.documentId,c=n.docname,o=new Date(r);return l.createElement(A,{style:t},l.createElement(_.o,{title:a,date:W[o.getMonth()]+" "+o.getFullYear(),link:"https://issuu.com/thelemonpress/docs/"+c,image:"https://image.issuu.com/"+i+"/jpg/page_1_thumb_large.jpg"}))},T=n(1503),U=(0,o.zo)("div",{padding:"$2"}),D=(0,o.zo)("div",{marginTop:"$1",marginBottom:"$1",display:"grid",gridColumnGap:"$1",gridTemplateColumns:"repeat(8, 1fr)",alignItems:"center"}),G=(0,o.zo)("div",{}),P=function(e){var t=e.image;return void 0===t?l.createElement(a.S,{src:"../../media/replacement-image.jpg",alt:"Preview image for article",style:{gridColumn:"6/-1",minHeight:"105px",maxHeight:"105px"},__imageData:n(9982)}):l.createElement(a.G,{image:t,alt:"Preview image for article",style:{gridColumn:"6/-1",minHeight:"105px",maxHeight:"105px"}})},X=function(e){var t=e.css,n=(0,g.useStaticQuery)("185802321").allWpPost.posts;return l.createElement(U,{css:t},l.createElement(u.H2,null,"Latest Articles"),n.map((function(e){var t=e.node,n=t.title,r=t.slug,i=t.content,c=t.featuredImage;return l.createElement(D,null,l.createElement(G,{style:{gridColumn:"1/6"}},l.createElement(u.H3,null,l.createElement(s.H,{to:"/post/"+r},n)),l.createElement("p",null,(0,d.Ue)(i)," minute read")),l.createElement(P,{image:(0,a.d)(null==c?void 0:c.node.localFile)}))})))},M=n(5625),N=(0,o.zo)("div",{padding:"$1"}),Q=(0,o.zo)("div",{display:"grid",gridColumnGap:"$1",gridTemplateColumns:"auto 200px"}),J=(0,o.zo)(u.H2,{color:"$textLight",fontSize:"2em"}),O=(0,o.zo)("div",{width:"100%",height:"2px",backgroundColor:"black",marginBottom:"$1"}),R={minHeight:"150px",maxHeight:"150px",justifySelf:"center",alignSelf:"center"},B=function(){var e,t=(0,M.a)(d.AV.landingMid),n={first:(e=(0,g.useStaticQuery)("2199089135").allWpCategory.categories).slice(0,1)[0],remaining:e.slice(1)},c=n.first,o=n.remaining,m=function(e){if(e)return l.createElement(a.G,{image:(0,a.d)(e.node.localFile),alt:"",style:R})};return t?l.createElement(i.A,null,l.createElement(T.H,{title:"Home"}),l.createElement(x,null),l.createElement(r.W,null,l.createElement(j,{css:{gridColumn:"1/8",gridRow:"1/4"}}),l.createElement(X,{css:{gridColumn:"8/-1",gridRow:"1/8"}}),l.createElement(N,{css:{gridColumn:"1/10"}},l.createElement(s.H,{to:"/category/"+c.node.slug},l.createElement(J,null,c.node.name)),c.node.posts.nodes.slice(0,2).map((function(e){var t=e.slug,n=e.title,a=e.content,r=e.excerpt,i=e.featuredImage,c=e.author.node.name;return i?l.createElement(l.Fragment,null,l.createElement(Q,null,l.createElement("div",null,l.createElement(s.H,{to:"/post/"+t},l.createElement(u.H2,null,n)),l.createElement("p",null,l.createElement("b",null,c)," | ",(0,d.Ue)(a)," minute read"),(0,d.rg)((0,d.SX)(r))),l.createElement(s.H,{to:"/post/"+t},m(i))),l.createElement(O,null)):l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement(s.H,{to:"/post/"+t},l.createElement(u.H2,null,n)),l.createElement("p",null,l.createElement("b",null,c)," | ",(0,d.Ue)(a)," minute read"),(0,d.rg)((0,d.SX)(r))),l.createElement(O,null))}))),l.createElement(I,{css:{gridColumn:"10/-1"}}),o.map((function(e){var t=e.node;if(t.posts.nodes.length>0)return l.createElement(N,{css:{gridColumn:"1/-1"}},l.createElement(s.H,{to:"/category/"+t.slug},l.createElement(J,null,t.name)),t.posts.nodes.slice(0,2).map((function(e){var t=e.slug,n=e.title,a=e.content,r=e.excerpt,i=e.featuredImage,c=e.author.node.name;return i?l.createElement(l.Fragment,null,l.createElement(Q,null,l.createElement("div",null,l.createElement(s.H,{to:"/post/"+t},l.createElement(u.H2,null,n)),l.createElement("p",null,l.createElement("b",null,c)," | ",(0,d.Ue)(a)," minute read"),(0,d.rg)((0,d.SX)(r))),l.createElement(s.H,{to:"/post/"+t},m(i))),l.createElement(O,null)):l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement(s.H,{to:"/post/"+t},l.createElement(u.H2,null,n)),l.createElement("p",null,l.createElement("b",null,c)," | ",(0,d.Ue)(a)," minute read"),(0,d.rg)((0,d.SX)(r))),l.createElement(O,null))})))})))):l.createElement(i.A,null,l.createElement(T.H,{title:"Home"}),l.createElement(x,null),l.createElement(r.W,null,l.createElement(j,{css:{gridColumn:"1/-1"}}),l.createElement(X,{css:{gridColumn:"1/-1"}}),l.createElement(I,{css:{gridColumn:"1/-1",width:"100%",display:"flex",justifyContent:"center"}}),l.createElement(N,{css:{gridColumn:"1/-1"}},l.createElement(s.H,{to:"/category/"+c.node.slug},l.createElement(J,null,c.node.name)),c.node.posts.nodes.slice(0,2).map((function(e){var t=e.slug,n=e.title,a=e.content,r=e.excerpt,i=e.author.node.name;return l.createElement(l.Fragment,null,l.createElement(s.H,{to:"/post/"+t},l.createElement(u.H2,null,n)),l.createElement("p",null,l.createElement("b",null,i)," | ",(0,d.Ue)(a)," minute read"),(0,d.rg)((0,d.SX)(r)),l.createElement(O,null))}))),o.map((function(e){var t=e.node;if(t.posts.nodes.length>0)return l.createElement(N,{css:{gridColumn:"1/-1"}},l.createElement(s.H,{to:"/category/"+t.slug},l.createElement(J,null,t.name)),t.posts.nodes.slice(0,2).map((function(e){var t=e.slug,n=e.title,a=e.content,r=e.excerpt,i=e.author.node.name;return l.createElement(l.Fragment,null,l.createElement(s.H,{to:"/post/"+t},l.createElement(u.H2,null,n)),l.createElement("p",null,l.createElement("b",null,i)," | ",(0,d.Ue)(a)," minute read"),(0,d.rg)((0,d.SX)(r)),l.createElement(O,null))})))}))))}},7301:function(e,t,n){n.d(t,{AV:function(){return a.A},Ue:function(){return r},aw:function(){return l},rg:function(){return E},SX:function(){return i}});var l=function(e){return e.replace(/(<([^>]+)>)/gi,"")},a=n(6293),r=function(e){var t=e.trim().split(/\s+/).length;return Math.ceil(t/225)},i=function(e){return e.split(' <a class="more-link" ')[0]},c=n(7294),o=n(3310),m=n(8822),u=n(5171),s=n(9502),g=(0,n(346).zo)("figure",{width:"100%",margin:"$1 0",img:{width:"100%",height:"100%"},figcaption:{fontStyle:"italic",textAlign:"center",marginTop:"$1"}}),d={p:u.x,h1:m.H1,h2:m.H2,h3:m.H3,a:s.h,figure:g},p={replace:function(e){var t=e.attribs&&(0,o.e_)(e.attribs);if(d[e.name]){var n=d[e.name];return e.children?c.createElement(n,t,(0,o.du)(e.children,p)):c.createElement(n,t)}}},E=function(e,t){return void 0===t&&(t={}),(0,o.ZP)(e,Object.assign({},p,t))}},9982:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b4df7e5767eb16e36c5681cc26cc9b04/71223/replacement-image.jpg","srcSet":"/static/b4df7e5767eb16e36c5681cc26cc9b04/9a8ce/replacement-image.jpg 382w,\\n/static/b4df7e5767eb16e36c5681cc26cc9b04/8f0ed/replacement-image.jpg 763w,\\n/static/b4df7e5767eb16e36c5681cc26cc9b04/71223/replacement-image.jpg 1526w","sizes":"(min-width: 1526px) 1526px, 100vw"},"sources":[{"srcSet":"/static/b4df7e5767eb16e36c5681cc26cc9b04/fcedb/replacement-image.webp 382w,\\n/static/b4df7e5767eb16e36c5681cc26cc9b04/eeeb9/replacement-image.webp 763w,\\n/static/b4df7e5767eb16e36c5681cc26cc9b04/6c505/replacement-image.webp 1526w","type":"image/webp","sizes":"(min-width: 1526px) 1526px, 100vw"}]},"width":1526,"height":2048}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5041503ee482ec5dfb75.js.map
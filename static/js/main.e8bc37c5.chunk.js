(this["webpackJsonprsz-strona"]=this["webpackJsonprsz-strona"]||[]).push([[0],{102:function(e,i,t){},103:function(e,i,t){"use strict";t.r(i);var s=t(1),a=t(2),c=t.n(a),n=t(41),o=t.n(n),l=(t(52),t(53),t(8)),r=t(3);t(54);var u=function(){var e=Object(a.useRef)(),i=Object(a.useRef)();Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){e.current.classList.toggle("scrolled",window.scrollY>0)}))}));var t=function(){i.current.classList.remove("opened"),e.current.classList.remove("burger-opened"),e.current.classList.add("closing-burger"),setTimeout((function(){e.current.classList.remove("closing-burger")}),700)};return Object(s.jsx)("div",{className:"navbar",ref:e,children:Object(s.jsxs)("div",{className:"nav-items",children:[Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)(l.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"is-active",onClick:t,children:Object(s.jsx)("li",{children:"G\u0142\xf3wna"})}),Object(s.jsx)(l.b,{to:"/zespol-zak",className:"nav-link",activeClassName:"is-active",onClick:t,children:Object(s.jsx)("li",{children:"Zesp\xf3\u0142 \u017bak"})}),Object(s.jsx)(l.b,{to:"/galeria",className:"nav-link",activeClassName:"is-active",onClick:t,children:Object(s.jsx)("li",{children:"Galeria"})}),Object(s.jsx)(l.b,{to:"/nuty",className:"nav-link",activeClassName:"is-active",onClick:t,children:Object(s.jsx)("li",{children:"Nuty"})}),Object(s.jsx)(l.b,{to:"/rodzinne-studio-zak",className:"nav-link",activeClassName:"is-active",onClick:t,children:Object(s.jsx)("li",{children:"RS\u017b"})})]}),Object(s.jsx)("div",{className:"nav-burger",children:Object(s.jsxs)("div",{className:"burger",ref:i,onClick:function(){e.current.classList.contains("burger-opened")?t():(i.current.classList.add("opened"),e.current.classList.add("burger-opened"))},children:[Object(s.jsx)("div",{className:"line line-1"}),Object(s.jsx)("div",{className:"line line-2"}),Object(s.jsx)("div",{className:"line line-3"})]})})]})})},d=t.p+"static/media/random_chimp_event.3e9644ad.jpeg",m=(t(59),t(15)),b=t(43);var j=function(){var e=Object(a.useRef)(),i=Object(a.useRef)();m.a.registerPlugin(b.a);var t=Object(a.useRef)(),c=Object(a.useRef)(),n=m.a.timeline();return Object(a.useEffect)((function(){n.to(i.current,{duration:1,height:"100%"}).to(t.current,{duration:1.6,width:"0"},"<").to(i.current,{duration:.4,width:"100vw"}).to(c.current,{duration:.4,filter:"blur(0px)",scale:"1.05"},"<"),m.a.to(e.current,{yPercent:10,ease:"none",scrollTrigger:{trigger:i.current,scrub:!0}})})),Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("div",{className:"img-container",children:Object(s.jsxs)("div",{className:"hero-image",ref:i,children:[Object(s.jsx)("img",{ref:e,className:"the-img",src:d,alt:"monke"}),Object(s.jsxs)("div",{className:"headline",ref:c,children:[Object(s.jsx)("h1",{children:"return to"}),Object(s.jsx)("span",{className:"gap",ref:t}),Object(s.jsx)("h1",{children:"\xa0monkee"})]})]})}),Object(s.jsx)("div",{className:"spam",children:Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis unde fuga cupiditate perspiciatis similique illo officia inventore, quaerat ducimus reiciendis, tempore, eos harum. Odit fugiat quasi exercitationem iste explicabo quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia similique enim deserunt facere, recusandae, voluptatibus possimus voluptatem quam adipisci numquam illum suscipit obcaecati a odit autem molestiae fugit debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione a corporis nisi est, odio aliquam ipsam corrupti nesciunt dolor debitis quisquam commodi, fugiat quasi, sequi recusandae. Aliquid, nesciunt quos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis unde fuga cupiditate perspiciatis similique illo officia inventore, quaerat ducimus reiciendis, tempore, eos harum. Odit fugiat quasi exercitationem iste explicabo quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia similique enim deserunt facere, recusandae, voluptatibus possimus voluptatem quam adipisci numquam illum suscipit obcaecati a odit autem molestiae fugit debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione a corporis nisi est, odio aliquam ipsam corrupti nesciunt dolor debitis quisquam commodi, fugiat quasi, sequi recusandae. Aliquid, nesciunt quos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis unde fuga cupiditate perspiciatis similique illo officia inventore, quaerat ducimus reiciendis, tempore, eos harum. Odit fugiat quasi exercitationem iste explicabo quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia similique enim deserunt facere, recusandae, voluptatibus possimus voluptatem quam adipisci numquam illum suscipit obcaecati a odit autem molestiae fugit debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione a corporis nisi est, odio aliquam ipsam corrupti nesciunt dolor debitis quisquam commodi, fugiat quasi, sequi recusandae. Aliquid, nesciunt quos?"})})]})};var p=function(){return Object(s.jsx)("div",{className:"band",children:Object(s.jsx)("h2",{children:"BAND"})})},h=t(9),v=(t(60),t(61),t(12));var g=function(e){var i=e.activeImg,t=e.deselectPhoto,c=Object(a.useRef)(),n=document.querySelector("body"),o=document.querySelector(".nav-items");return Object(a.useEffect)((function(){return n.style.paddingRight="16px",o.classList.add("no-scrollbar"),Object(v.b)(c.current),function(){Object(v.a)(),n.style.paddingRight="0",o.classList.remove("no-scrollbar")}}),[]),Object(s.jsx)("div",{className:"shadow",onClick:t,children:Object(s.jsxs)("div",{className:"window",children:[Object(s.jsx)("div",{className:"img-container",ref:c,children:Object(s.jsx)("img",{src:i.url,alt:""})}),Object(s.jsx)("h3",{className:"desc",children:"Bardzo super zdj\u0119cie"}),Object(s.jsx)("h3",{className:"date",children:"20.12.2020"})]})})};var O=function(){var e=Object(a.useState)(),i=Object(h.a)(e,2),t=i[0],c=i[1],n=[{id:0,url:"https://picsum.photos/400/300"},{id:1,url:"https://picsum.photos/400/300"},{id:2,url:"https://picsum.photos/400/300"},{id:3,url:"https://picsum.photos/400/300"},{id:4,url:"https://picsum.photos/400/300"},{id:5,url:"https://picsum.photos/400/300"},{id:6,url:"https://picsum.photos/400/300"},{id:7,url:"https://picsum.photos/400/300"},{id:8,url:"https://picsum.photos/400/300"},{id:9,url:"https://picsum.photos/400/300"},{id:10,url:"https://picsum.photos/400/300"},{id:11,url:"https://picsum.photos/400/300"},{id:12,url:"https://picsum.photos/400/300"}],o=function(e){c(e.target.id)};return Object(s.jsxs)("div",{className:"gallery",children:[Object(s.jsx)("div",{className:"gallery-header",children:Object(s.jsx)("h1",{children:"Galeria"})}),Object(s.jsx)("div",{className:"gallery-content",children:n&&n.map((function(e){return Object(s.jsx)("div",{className:"img-container",children:Object(s.jsx)("img",{src:e.url,alt:"random",onClick:o,id:e.id})},e.id)}))}),t&&Object(s.jsx)(g,{activeImg:n[t],deselectPhoto:function(){c(null)}})]})},f=t.p+"static/media/test_pdf.e64b495e.pdf",x=t.p+"static/media/test_mp3.0d659e2a.mp3",N=(t(62),t(63),t(14)),q=t.n(N),S=t(22);var k=function(e){var i=e.activeSongTitle,t=e.activeSongDesc,a=e.activeSongAvailableSheets,c=e.activeSongAvailableRecording,n=e.activeSongSheets,o=e.activeSongRecording,l=Object(S.useMediaQuery)({query:"(min-width: 950px)"}),r=Object(S.useMediaQuery)({query:"(max-width: 600px)"});return Object(s.jsxs)("div",{className:"song",children:[Object(s.jsx)("h2",{className:"song-title",children:i}),Object(s.jsx)("div",{className:"song-desc",children:Object(s.jsx)("p",{children:t})}),c?Object(s.jsxs)("div",{className:"active-song-recording",children:[Object(s.jsx)("h3",{children:"Nagranie"}),Object(s.jsx)("audio",{className:"recording",src:o,controls:!0})]}):Object(s.jsx)("div",{className:"active-song-no-recording not-found-label",children:"Nie znaleziono nagrania"}),a?l?Object(s.jsx)("div",{className:"active-song-sheets",children:Object(s.jsx)(q.a,{document:{url:n},scale:.9,showThumbnail:{scale:.2},scaleStep:.1,maxScale:1.1,minScale:.7,hideRotation:!0,navigation:{css:{navbarWrapper:"navbar-wrapper",zoomOutBtn:"zoom-btns btn mat-icon",zoomInBtn:"zoom-btns btn mat-icon",resetZoomBtn:"zoom-btns btn mat-icon",previousPageBtn:"page-nav-btns btn mat-icon",nextPageBtn:"page-nav-btns btn mat-icon",pageIndicator:"page-indicator"}}})}):r?Object(s.jsx)("div",{className:"active-song-sheets",children:Object(s.jsx)(q.a,{document:{url:n},scale:.5,showThumbnail:{scale:.2},scaleStep:.1,maxScale:1.1,minScale:.4,hideRotation:!0,navigation:{css:{navbarWrapper:"navbar-wrapper",zoomOutBtn:"zoom-btns btn mat-icon",zoomInBtn:"zoom-btns btn mat-icon",resetZoomBtn:"zoom-btns btn mat-icon",previousPageBtn:"page-nav-btns btn mat-icon",nextPageBtn:"page-nav-btns btn mat-icon",pageIndicator:"page-indicator"}}})}):Object(s.jsx)("div",{className:"active-song-sheets",children:Object(s.jsx)(q.a,{document:{url:n},scale:.7,showThumbnail:!1,scaleStep:.1,maxScale:1.1,minScale:.5,hideRotation:!0,navigation:{css:{navbarWrapper:"navbar-wrapper",zoomOutBtn:"zoom-btns btn mat-icon",zoomInBtn:"zoom-btns btn mat-icon",resetZoomBtn:"zoom-btns btn mat-icon",previousPageBtn:"page-nav-btns btn mat-icon",nextPageBtn:"page-nav-btns btn mat-icon",pageIndicator:"page-indicator"}}})}):Object(s.jsx)("div",{className:"active-song-no-sheets not-found-label",children:"Nie znaleziono nut"})]})},R=t(44),w=t(0);var z=function(){var e=[{id:0,title:"Masterpiece",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",availableSheets:!0,availableRecording:!0,sheets:f,recording:x},{id:1,title:"www",desc:"Garbo",availableSheets:!0,availableRecording:!1,sheets:f,recording:null},{id:2,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:3,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:4,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:5,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:6,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:7,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:8,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:9,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:10,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:11,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null},{id:12,title:"eeeee",desc:"Yuck",availableSheets:!1,availableRecording:!1,sheets:null,recording:null}],i=Object(a.useState)(),t=Object(h.a)(i,2),c=t[0],n=t[1],o=Object(a.useState)(!1),l=Object(h.a)(o,2),r=l[0],u=l[1],d=Object(a.useState)(),m=Object(h.a)(d,2),b=m[0],j=m[1],p=Object(a.useState)(),g=Object(h.a)(p,2),O=g[0],N=g[1],q=Object(a.useState)(!0),S=Object(h.a)(q,2),z=S[0],y=S[1],L=Object(a.useRef)(),C=Object(a.useRef)(),B=document.querySelector("body"),P=document.querySelector(".nav-items");Object(a.useEffect)((function(){j(document.querySelector(".content").offsetHeight),N(document.querySelector(".content"))}),[]),Object(a.useEffect)((function(){if(z)y(!1);else{var e=Math.ceil(3*b/100)-.5;L.current.classList.toggle("opened"),C.current.classList.toggle("opened"),r?(b&&window.pageYOffset>e&&window.scrollTo({top:e,behavior:"smooth"}),O&&b&&O.offsetHeight>b&&(B.style.paddingRight="16px",P.classList.add("no-scrollbar")),Object(v.b)(L.current)):(O&&b&&(B.style.paddingRight="0",P.classList.remove("no-scrollbar")),Object(v.a)()),Y()}}),[r]),Object(a.useEffect)((function(){Y()}),[c]);var Y=function(){O&&b&&(O.offsetHeight>b?L.current.style.maxHeight="89.5%":L.current.style.maxHeight="81.5%")};return Object(s.jsxs)("div",{className:"sheet-list",children:[Object(s.jsx)("div",{className:"song-list-menu",ref:C,children:Object(s.jsx)(w.b.Provider,{value:{size:"2em",color:"rgb(208, 223, 255)"},children:Object(s.jsx)(R.a,{className:"song-list-icon",onClick:function(){return u(!r)}})})}),Object(s.jsxs)("div",{className:"sheets",children:[Object(s.jsx)("div",{className:"song-list big-screen",ref:L,children:e&&e.map((function(e){return Object(s.jsx)("div",{className:"song-list-item",onClick:function(){return n(e)},children:e.title},e.id)}))}),Object(s.jsx)("div",{className:"song-list small-screen",ref:L,children:e&&e.map((function(e){return Object(s.jsx)("div",{className:"song-list-item",onClick:function(){n(e),u(!1)},children:e.title},e.id)}))}),Object(s.jsx)("div",{className:"active-song",children:c&&Object(s.jsx)(k,{activeSongTitle:c.title,activeSongDesc:c.desc,activeSongAvailableSheets:c.availableSheets,activeSongAvailableRecording:c.availableRecording,activeSongSheets:c.sheets,activeSongRecording:c.recording})})]})]})};var y=function(){return Object(s.jsx)("div",{className:"rsz",children:Object(s.jsx)("h2",{children:"RODZINNE STUDIO \u017bAK"})})},L=(t(102),t(46)),C=t(45);var B=function(){var e,i=Object(a.useRef)(),t=Object(a.useRef)(),c=function(){e&&clearTimeout(e),t.current.classList.add("opened"),e=setTimeout((function(){t.current.classList.remove("opened")}),2e3)};return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsx)("div",{className:"copyrights",children:Object(s.jsx)("p",{children:"COPYRIGHT \xa9 2020 \u2013 KRYSTYNA RZUCID\u0141O"})}),Object(s.jsxs)("div",{className:"contact",onClick:function(){return function(){var e=document.createElement("input");i.current.appendChild(e),e.setAttribute("value",i.current.innerText),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),i.current.removeChild(e),c()}()},children:[Object(s.jsx)("span",{className:"tooltip",ref:t,children:"Skopiowano do schowka"}),Object(s.jsxs)(w.b.Provider,{value:{size:"2em",color:"white"},children:[Object(s.jsx)(C.a,{className:"mail-icon"}),Object(s.jsx)("div",{className:"mail",children:Object(s.jsx)("p",{ref:i,children:"Place@holder.com"})})]})]}),Object(s.jsx)(w.b.Provider,{value:{size:"2em",color:"white"},children:Object(s.jsx)("div",{className:"social-media",children:Object(s.jsx)(L.a,{className:"sm-link yt",onClick:function(){var e;e="https://www.youtube.com/",window.open(e,"_blank")}})})})]})};var P=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(u,{}),Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("div",{className:"component",children:Object(s.jsxs)(r.c,{children:[Object(s.jsx)(r.a,{exact:!0,path:"/",component:j}),Object(s.jsx)(r.a,{path:"/zespol-zak",component:p}),Object(s.jsx)(r.a,{path:"/galeria",component:O}),Object(s.jsx)(r.a,{path:"/nuty",component:z}),Object(s.jsx)(r.a,{path:"/rodzinne-studio-zak",component:y})]})})}),Object(s.jsx)(B,{})]})})};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root"))},52:function(e,i,t){},53:function(e,i,t){},54:function(e,i,t){},59:function(e,i,t){},60:function(e,i,t){},61:function(e,i,t){},62:function(e,i,t){},63:function(e,i,t){},93:function(e,i){},94:function(e,i){},95:function(e,i){},96:function(e,i){},97:function(e,i){}},[[103,1,2]]]);
//# sourceMappingURL=main.e8bc37c5.chunk.js.map
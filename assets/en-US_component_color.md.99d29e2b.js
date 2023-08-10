import{h as T,O as $,r as g,o as s,c as F,w as i,a as c,e as o,d as t,j as b,z as _,b as l,t as n,u as a,F as x,H as P,P as B,Q as O,R as N,S as E,g as L}from"./app.3fe9a140.js";const M={class:"demo-color-box-group"},j={class:"value",text:"xs"},z={class:"demo-color-box-group"},A={class:"value",text:"xs"},H={class:"demo-color-box-group"},Q={class:"value",text:"xs"},R={class:"demo-color-box-group"},W=l(" Basic Black "),Y=l(" Basic White "),q=o("div",{class:"demo-color-box demo-color-box-other demo-color-box-lite bg-transparent"},[l(" Transparent "),o("div",{class:"value",text:"xs"},"Transparent")],-1),G={class:"value",text:"xs"},V="#000000",D="#FFFFFF",I=T({__name:"neutral-color",setup(U){const p=["page","","overlay"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Background`:"Base Background",var:$(B("bg-color",e))})),u=["darker","dark","","light","lighter","extra-light"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Border`:"Base Border",var:$(B("border-color",e))})),m=["darker","dark","","light","lighter","extra-light","blank"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Fill`:"Base Fill",var:$(B("fill-color",e))})),d=["primary","regular","secondary","placeholder","disabled"].map(e=>({name:`${e[0].toUpperCase()+e.slice(1)} Text`,var:$(B("text-color",e))}));return(e,w)=>{const C=g("el-col"),S=g("el-row");return s(),F(S,{gutter:12},{default:i(()=>[c(C,{span:6,xs:{span:12}},{default:i(()=>[o("div",M,[(s(!0),t(x,null,b(a(d),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other",style:_({color:"var(--el-bg-color)",background:r.var.value})},[l(n(r.name)+" ",1),o("div",j,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),c(C,{span:6,xs:{span:12}},{default:i(()=>[o("div",z,[(s(!0),t(x,null,b(a(u),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:_({background:r.var.value})},[l(n(r.name)+" ",1),o("div",A,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),c(C,{span:6,xs:{span:12}},{default:i(()=>[o("div",H,[(s(!0),t(x,null,b(a(m),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:_({background:r.var.value,border:`1px solid ${r.name==="Blank Fill"?"var(--el-border-color-light)":"transparent"}`})},[l(n(r.name)+" ",1),o("div",Q,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),c(C,{span:6,xs:{span:12}},{default:i(()=>[o("div",R,[o("div",{class:"demo-color-box demo-color-box-other",style:_({background:V})},[W,o("div",{class:"value",text:"xs"},n(V))],4),o("div",{class:"demo-color-box demo-color-box-other",style:_({background:D,color:"#303133",border:"1px solid #eee"})},[Y,o("div",{class:"value",text:"xs"},n(D))],4),q,(s(!0),t(x,null,b(a(p),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:_({background:r.var.value,border:"1px solid "+(!a(P)||r.name==="Base Background"?"var(--el-border-color-light)":"transparent")})},[l(n(r.name)+" ",1),o("div",G,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1})]),_:1})}}}),J={class:"value",text:"xs"},K={class:"bg-color-sub"},X=["onClick"],Z=T({__name:"secondary-colors",setup(U){const h=["success","warning","danger","info"],p=[3,5,7,8,9].map(u=>`light-${u}`);p.unshift("dark-2");const{copyColor:k}=O();return(u,y)=>{const m=g("el-col"),f=g("el-row");return s(),F(f,{gutter:12},{default:i(()=>[(s(),t(x,null,b(h,(d,e)=>c(m,{key:e,span:6,xs:{span:12}},{default:i(()=>[o("div",{class:"demo-color-box",style:_({background:a(N)(d)})},[l(n(d.charAt(0).toUpperCase()+d.slice(1))+" ",1),o("div",J,n(a(N)(d).toUpperCase()),1),o("div",K,[(s(!0),t(x,null,b(a(p),(w,C)=>(s(),t("div",{key:C,class:"bg-secondary-sub-item transition cursor-pointer hover:shadow",style:_({width:`${100/6}%`,background:`var(--el-color-${d}-`+w+")"}),onClick:S=>a(k)(d+"-"+w)},null,12,X))),128))])],4)]),_:2},1024)),64))]),_:1})}}}),oo=l(" Brand Color "),eo={class:"value",text:"xs"},ro=["onClick"],so=T({__name:"main-color",setup(U){const h=E("--el-color-primary"),p=[3,5,7,8,9].map(u=>`light-${u}`);p.unshift("dark-2");const{copyColor:k}=O();return(u,y)=>{const m=g("el-col"),f=g("el-row");return s(),F(f,{gutter:12},{default:i(()=>[c(m,{span:10,xs:{span:12}},{default:i(()=>[o("div",{class:"demo-color-box",style:_({background:a(h)})},[oo,o("div",eo,n(a(h).toUpperCase()),1),o("div",{class:"bg-color-sub",style:_({background:a(h)})},[(s(!0),t(x,null,b(a(p),d=>(s(),t("div",{key:d,class:"bg-blue-sub-item cursor-pointer hover:shadow",style:_({width:`${100/6}%`,background:"var(--el-color-primary-"+d+")"}),onClick:e=>a(k)("primary-"+d)},null,12,ro))),128))],4)],4)]),_:1})]),_:1})}}});const lo=o("h1",{id:"color",tabindex:"-1"},[l("Color "),o("a",{class:"header-anchor vp-link",href:"#color","aria-hidden":"true"},"#")],-1),to=o("p",null,"Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.",-1),ao=o("h2",{id:"main-color",tabindex:"-1"},[l("Main Color "),o("a",{class:"header-anchor vp-link",href:"#main-color","aria-hidden":"true"},"#")],-1),no=o("p",null,"The main color of Element Plus is bright and friendly blue.",-1),co=o("h2",{id:"secondary-color",tabindex:"-1"},[l("Secondary Color "),o("a",{class:"header-anchor vp-link",href:"#secondary-color","aria-hidden":"true"},"#")],-1),io=o("p",null,"Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)",-1),uo=o("h2",{id:"neutral-color",tabindex:"-1"},[l("Neutral Color "),o("a",{class:"header-anchor vp-link",href:"#neutral-color","aria-hidden":"true"},"#")],-1),_o=o("p",null,"Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.",-1),po=o("h2",{id:"source",tabindex:"-1"},[l("Source "),o("a",{class:"header-anchor vp-link",href:"#source","aria-hidden":"true"},"#")],-1),ho={href:"https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/color.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},mo=l("Docs"),xo='{"title":"Color","description":"","frontmatter":{"title":"Color","lang":"en-US"},"headers":[{"level":2,"title":"Main Color","slug":"main-color"},{"level":2,"title":"Secondary Color","slug":"secondary-color"},{"level":2,"title":"Neutral Color","slug":"neutral-color"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"en-US/component/color.md","lastUpdated":1691633021000}',vo={},go=Object.assign(vo,{__name:"color",setup(U){return(h,p)=>{const k=so,u=g("ClientOnly"),y=Z,m=I,f=L;return s(),t("div",null,[lo,to,ao,no,c(u,null,{default:i(()=>[c(k)]),_:1}),co,io,c(u,null,{default:i(()=>[c(y)]),_:1}),uo,_o,c(u,null,{default:i(()=>[c(m)]),_:1}),po,o("p",null,[o("a",ho,[mo,c(f,{class:"link-icon"})])])])}}});export{xo as __pageData,go as default};

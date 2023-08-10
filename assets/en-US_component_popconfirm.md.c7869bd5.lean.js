import{_ as k,r as o,o as C,c as d,w as e,a as t,b as s,h as D,u as E,N as F,d as m,e as n,f as h,g as f}from"./app.3fe9a140.js";import{_ as g}from"./chunks/contributors.5986e511.js";const A={},b=s("Delete");function v(r,p){const c=o("el-button"),i=o("el-popconfirm");return C(),d(i,{title:"Are you sure to delete this?"},{reference:e(()=>[t(c,null,{default:e(()=>[b]),_:1})]),_:1})}var y=k(A,[["render",v]]),x=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));const B=s("Delete"),w=D({__name:"customize",setup(r){return(p,c)=>{const i=o("el-button"),l=o("el-popconfirm");return C(),d(l,{width:"220","confirm-button-text":"OK","cancel-button-text":"No, Thanks",icon:E(F),"icon-color":"#626AEF",title:"Are you sure to delete this?"},{reference:e(()=>[t(i,null,{default:e(()=>[B]),_:1})]),_:1},8,["icon"])}}});var S=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const T=s("Delete"),P=D({__name:"trigger-event",setup(r){const p=()=>{console.log("confirm!")},c=()=>{console.log("cancel!")};return(i,l)=>{const u=o("el-button"),a=o("el-popconfirm");return C(),d(a,{"confirm-button-text":"Yes","cancel-button-text":"No",icon:E(F),"icon-color":"#626AEF",title:"Are you sure to delete this?",onConfirm:p,onCancel:c},{reference:e(()=>[t(u,null,{default:e(()=>[T]),_:1})]),_:1},8,["icon"])}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const I=n("h1",{id:"popconfirm",tabindex:"-1"},[s("Popconfirm "),n("a",{class:"header-anchor vp-link",href:"#popconfirm","aria-hidden":"true"},"#")],-1),N=n("p",null,"A simple confirmation dialog of an element click action.",-1),z={class:"tip custom-block"},O=n("p",{class:"custom-block-title"},"TIP",-1),j=s("This component requires the "),V=n("code",null,"<client-only></client-only>",-1),M=s(" wrap when used in SSR (eg: "),$={href:"https://nuxt.com/v3",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},U=s("Nuxt"),Y=s(") and SSG (eg: "),K={href:"https://vitepress.vuejs.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},R=s("VitePress"),G=s(")."),H=n("h2",{id:"basic-usage",tabindex:"-1"},[s("Basic usage "),n("a",{class:"header-anchor vp-link",href:"#basic-usage","aria-hidden":"true"},"#")],-1),L=n("p",null,"Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.",-1),Q=n("p",null,"popconfirm/basic-usage",-1),J=n("h2",{id:"customize",tabindex:"-1"},[s("Customize "),n("a",{class:"header-anchor vp-link",href:"#customize","aria-hidden":"true"},"#")],-1),W=n("p",null,"You can customize Popconfirm like:",-1),X=n("p",null,"popconfirm/customize",-1),Z=n("h2",{id:"trigger-event",tabindex:"-1"},[s("Trigger event "),n("a",{class:"header-anchor vp-link",href:"#trigger-event","aria-hidden":"true"},"#")],-1),n2=n("p",null,"Click the button to trigger the event",-1),t2=n("p",null,"popconfirm/trigger-event",-1),s2=n("h2",{id:"api",tabindex:"-1"},[s("API "),n("a",{class:"header-anchor vp-link",href:"#api","aria-hidden":"true"},"#")],-1),a2=n("h3",{id:"attributes",tabindex:"-1"},[s("Attributes "),n("a",{class:"header-anchor vp-link",href:"#attributes","aria-hidden":"true"},"#")],-1),e2={class:"vp-table"},o2=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Description"),n("th",null,"Type"),n("th",null,"Default")])],-1),p2=n("td",null,"title",-1),l2=n("td",null,"Title",-1),c2=n("td",null,"\u2014",-1),i2=n("td",null,"confirm-button-text",-1),u2=n("td",null,"Confirm button text",-1),E2=n("td",null,"\u2014",-1),C2=n("td",null,"cancel-button-text",-1),r2=n("td",null,"Cancel button text",-1),d2=n("td",null,"\u2014",-1),D2=n("td",null,"confirm-button-type",-1),F2=n("td",null,"Confirm button type",-1),_2=n("td",null,"primary",-1),k2=n("td",null,"cancel-button-type",-1),m2=n("td",null,"Cancel button type",-1),h2=n("td",null,"text",-1),f2=n("td",null,"icon",-1),g2=n("td",null,"Icon Component",-1),A2=s(" / "),b2=n("td",null,"QuestionFilled",-1),v2=n("td",null,"icon-color",-1),y2=n("td",null,"Icon color",-1),x2=n("td",null,"#f90",-1),B2=n("td",null,"hide-icon",-1),w2=n("td",null,"is hide Icon",-1),S2=n("td",null,"false",-1),T2=n("td",null,"hide-after",-1),P2=n("td",null,"delay of disappear, in millisecond",-1),q2=n("td",null,"200",-1),I2=n("td",null,"teleported",-1),N2=n("td",null,"whether popconfirm is teleported to the body",-1),z2=n("td",null,"true",-1),O2=n("td",null,"persistent",-1),j2=n("td",null,[s("when popconfirm inactive and "),n("code",null,"persistent"),s(" is "),n("code",null,"false"),s(" , popconfirm will be destroyed")],-1),V2=n("td",null,"false",-1),M2=n("td",null,"width",-1),$2=n("td",null,"popconfirm width, min width 150px",-1),U2=s(" / "),Y2=n("td",null,"150",-1),K2=n("h3",{id:"events",tabindex:"-1"},[s("Events "),n("a",{class:"header-anchor vp-link",href:"#events","aria-hidden":"true"},"#")],-1),R2={class:"vp-table"},G2=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Description"),n("th",null,"Type")])],-1),H2=n("td",null,"confirm",-1),L2=n("td",null,"triggers when click confirm button",-1),Q2=n("td",null,"cancel",-1),J2=n("td",null,"triggers when click cancel button",-1),W2=h("",3),X2={href:"https://github.com/element-plus/element-plus/tree/dev/packages/components/popconfirm",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Z2=s("Component"),nn=s(" \u2022 "),tn={href:"https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/popconfirm.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},sn=s("Docs"),an=n("h2",{id:"contributors",tabindex:"-1"},[s("Contributors "),n("a",{class:"header-anchor vp-link",href:"#contributors","aria-hidden":"true"},"#")],-1),ln='{"title":"Popconfirm","description":"","frontmatter":{"title":"Popconfirm","lang":"en-US"},"headers":[{"level":2,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Customize","slug":"customize"},{"level":2,"title":"Trigger event","slug":"trigger-event"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"}],"relativePath":"en-US/component/popconfirm.md","lastUpdated":1691633021000}',en={},cn=Object.assign(en,{__name:"popconfirm",setup(r){const p={"../../examples/popconfirm/basic-usage.vue":x,"../../examples/popconfirm/customize.vue":S,"../../examples/popconfirm/trigger-event.vue":q};return(c,i)=>{const l=f,u=o("Demo"),a=o("api-typing"),_=g;return C(),m("div",null,[I,N,n("div",z,[O,n("p",null,[j,V,M,n("a",$,[U,t(l,{class:"link-icon"})]),Y,n("a",K,[R,t(l,{class:"link-icon"})]),G])]),H,L,t(u,{demos:E(p),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAre%20you%20sure%20to%20delete%20this%3F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23reference%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDelete%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"popconfirm/basic-usage","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-popconfirm%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3EOnly%20%3Ccode%3Etitle%3C%2Fcode%3E%20attribute%20is%20available%20in%20Popconfirm%2C%20%3Ccode%3Econtent%3C%2Fcode%3E%20will%20be%20ignored.%3C%2Fp%3E%0A"},{default:e(()=>[Q]),_:1},8,["demos"]),J,W,t(u,{demos:E(p),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E220%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econfirm-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EOK%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecancel-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ENo%2C%20Thanks%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EInfoFilled%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23626AEF%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAre%20you%20sure%20to%20delete%20this%3F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23reference%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDelete%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20InfoFilled%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40element-plus%2Ficons-vue'%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"popconfirm/customize","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-popconfirm%0A%20%20%20%20width%3D%22220%22%0A%20%20%20%20confirm-button-text%3D%22OK%22%0A%20%20%20%20cancel-button-text%3D%22No%2C%20Thanks%22%0A%20%20%20%20%3Aicon%3D%22InfoFilled%22%0A%20%20%20%20icon-color%3D%22%23626AEF%22%0A%20%20%20%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20InfoFilled%20%7D%20from%20'%40element-plus%2Ficons-vue'%0A%3C%2Fscript%3E%0A",description:""},{default:e(()=>[X]),_:1},8,["demos"]),Z,n2,t(u,{demos:E(p),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econfirm-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EYes%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecancel-button-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ENo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EInfoFilled%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23626AEF%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EAre%20you%20sure%20to%20delete%20this%3F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40confirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EconfirmEvent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40cancel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcancelEvent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23reference%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EDelete%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-popconfirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20InfoFilled%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40element-plus%2Ficons-vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EconfirmEvent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'confirm!'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EcancelEvent%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'cancel!'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"popconfirm/trigger-event","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-popconfirm%0A%20%20%20%20confirm-button-text%3D%22Yes%22%0A%20%20%20%20cancel-button-text%3D%22No%22%0A%20%20%20%20%3Aicon%3D%22InfoFilled%22%0A%20%20%20%20icon-color%3D%22%23626AEF%22%0A%20%20%20%20title%3D%22Are%20you%20sure%20to%20delete%20this%3F%22%0A%20%20%20%20%40confirm%3D%22confirmEvent%22%0A%20%20%20%20%40cancel%3D%22cancelEvent%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0A%20%20%20%20%20%20%3Cel-button%3EDelete%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-popconfirm%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20InfoFilled%20%7D%20from%20'%40element-plus%2Ficons-vue'%0A%0Aconst%20confirmEvent%20%3D%20()%20%3D%3E%20%7B%0A%20%20console.log('confirm!')%0A%7D%0Aconst%20cancelEvent%20%3D%20()%20%3D%3E%20%7B%0A%20%20console.log('cancel!')%0A%7D%0A%3C%2Fscript%3E%0A",description:""},{default:e(()=>[t2]),_:1},8,["demos"]),s2,a2,n("div",e2,[n("table",null,[o2,n("tbody",null,[n("tr",null,[p2,l2,n("td",null,[t(a,{type:"string",details:""})]),c2]),n("tr",null,[i2,u2,n("td",null,[t(a,{type:"string",details:""})]),E2]),n("tr",null,[C2,r2,n("td",null,[t(a,{type:"string",details:""})]),d2]),n("tr",null,[D2,F2,n("td",null,[t(a,{type:"enum",details:"'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'"})]),_2]),n("tr",null,[k2,m2,n("td",null,[t(a,{type:"enum",details:"'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'"})]),h2]),n("tr",null,[f2,g2,n("td",null,[t(a,{type:"string",details:""}),A2,t(a,{type:"Component",details:""})]),b2]),n("tr",null,[v2,y2,n("td",null,[t(a,{type:"string",details:""})]),x2]),n("tr",null,[B2,w2,n("td",null,[t(a,{type:"boolean",details:""})]),S2]),n("tr",null,[T2,P2,n("td",null,[t(a,{type:"number",details:""})]),q2]),n("tr",null,[I2,N2,n("td",null,[t(a,{type:"boolean",details:""})]),z2]),n("tr",null,[O2,j2,n("td",null,[t(a,{type:"boolean",details:""})]),V2]),n("tr",null,[M2,$2,n("td",null,[t(a,{type:"string",details:""}),U2,t(a,{type:"number",details:""})]),Y2])])])]),K2,n("div",R2,[n("table",null,[G2,n("tbody",null,[n("tr",null,[H2,L2,n("td",null,[t(a,{type:"Function",details:"(e: MouseEvent) => void"})])]),n("tr",null,[Q2,J2,n("td",null,[t(a,{type:"Function",details:"(e: MouseEvent) => void"})])])])])]),W2,n("p",null,[n("a",X2,[Z2,t(l,{class:"link-icon"})]),nn,n("a",tn,[sn,t(l,{class:"link-icon"})])]),an,t(_,{id:"popconfirm"})])}}});export{ln as __pageData,cn as default};

var K=Object.defineProperty,Z=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var j=(a,l,s)=>l in a?K(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,L=(a,l)=>{for(var s in l||(l={}))X.call(l,s)&&j(a,s,l[s]);if(E)for(var s of E(l))Y.call(l,s)&&j(a,s,l[s]);return a},H=(a,l)=>Z(a,Q(l));import{d as p,r as V,o as r,c,a as e,b as g,w as G,e as k,f as B,n as R,u,g as T,v as ee,h as D,i as f,T as $,F as m,j as C,k as te,t as A,l as y,m as le,p as U,q as S,s as oe,M as ae,x as I,y as se,z as ne,A as re,B as ie,C as ce}from"./vendor.a578e3a3.js";const de=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};de();var ue="./assets/logo.03d6d6da.png";const he={class:"bg-light"},_e={class:"container-fluid py-1"},ve={class:"d-flex align-items-center"},me=e("img",{src:ue,alt:"",height:"32",class:"d-inline-block align-text-top"},null,-1),pe=e("div",{id:"navPortal",class:"ms-auto d-flex align-items-center gap-2"},null,-1),ge=p({setup(a){return(l,s)=>{const i=V("router-link");return r(),c("nav",he,[e("div",_e,[e("div",ve,[g(i,{to:"/",class:""},{default:G(()=>[me]),_:1}),pe])])])}}}),N=k(!1);B(N,()=>{N.value?document.body.classList.add("dark"):document.body.classList.remove("dark")});const fe={"-1":0,"1":12,"2":6,"3":4,"4":3,"6":2,"12":1};const be=p({setup(a){return(l,s)=>{const i=V("router-view");return r(),c("main",{class:R({dark:u(N)})},[g(ge),g(i)],2)}}}),_=T({loading:!1,data:[]});function J(a,l){_.loading=!0;try{_.data=localStorage.galleries?JSON.parse(localStorage.galleries):[]}catch(s){console.warn(s)}finally{_.loading=!1}}function O(){localStorage.galleries=JSON.stringify(_.data)}function q(a={nsfw:!1,col:6,embeds:[],createdAt:new Date().toISOString()}){const l=H(L({},a),{createdAt:new Date().toISOString(),id:ee()});return _.data.unshift(l),O(),l}const we=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),ye=[we],xe={class:"container py-5"},ke={class:"list-group list-group-flush"},Ve={key:0,title:"NSFW",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-exclamation-triangle text-danger",viewBox:"0 0 16 16"},$e=e("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"},null,-1),Ce=[$e],ze=p({setup(a){const l=D(),s=async()=>{const{id:i}=await q();l.push(`/${i}`)};return(i,t)=>{const n=V("router-link");return r(),c(m,null,[(r(),f($,{to:"#navPortal"},[e("button",{onClick:s,class:"btn btn-primary",title:"Add Gallery"},ye)])),e("div",xe,[e("div",ke,[(r(!0),c(m,null,C(u(_).data,o=>(r(),f(n,{key:o.id,to:`/${o.id}`,class:"list-group-item list-group-item-action text-center text-secondary"},{default:G(()=>[te(A(new Date(o.createdAt).toLocaleString())+" - "+A(o.embeds.length)+" embed(s) ",1),o.nsfw?(r(),c("svg",Ve,Ce)):y("",!0)]),_:2},1032,["to"]))),128))])])],64)}}}),Me=["value"],Le=["value"],He=p({props:{modelValue:null},emits:["update:modelValue"],setup(a,{emit:l}){const s=i=>{l("update:modelValue",parseInt(i.target.value))};return(i,t)=>(r(),c("select",{value:a.modelValue,onChange:s,class:"form-control"},[(r(!0),c(m,null,C(u(fe),(n,o)=>(r(),c("option",{key:`col-coption-${n}`,value:n},A(o),9,Le))),128))],40,Me))}}),Se={key:0,class:"container-fluid py-5"},Be={class:"ratio ratio-16x9"},Ae=["src"],Ne=["onClick"],Oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-arrows-fullscreen",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"})],-1),Ge=[Oe],W=p({props:{gallery:null},setup(a){const l=k(),s=()=>{var i;(i=l.value)==null||i.requestFullscreen()};return(i,t)=>(r(),c(m,null,[a.gallery?(r(),c("article",Se,[e("div",{ref_key:"fullscreen",ref:l,class:"row g-0 align-items-center justify-content-center"},[(r(!0),c(m,null,C(a.gallery.embeds,(n,o)=>(r(),c("div",{key:o,class:R(["col",{[`col-${a.gallery.col}`]:a.gallery.col!==0}])},[e("div",Be,[e("iframe",{src:n,frameborder:"0"},null,8,Ae)])],2))),128))],512)])):y("",!0),a.gallery?(r(),f($,{key:1,to:"#navPortal"},[g(He,{modelValue:a.gallery.col,"onUpdate:modelValue":t[0]||(t[0]=n=>a.gallery.col=n),title:"Columns Per Row"},null,8,["modelValue"]),e("button",{onClick:le(s,["prevent"]),class:"btn btn-dark",title:"Fullscreen"},Ge,8,Ne)])):y("",!0)],64))}}),De=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},[e("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})],-1),Pe=[De],Fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-share",viewBox:"0 0 16 16"},[e("path",{d:"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"})],-1),Ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[e("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),e("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),je=[Ee],Ie={class:"modal-dialog modal-lg"},Je={class:"modal-content"},Re=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"modalLabel"},"Edit Gallery"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Te={key:0,class:"modal-body"},Ue={class:"form-check"},qe=e("label",{class:"form-check-label",for:"nsfw"}," NSFW ",-1),We=e("hr",null,null,-1),Ke=["onUpdate:modelValue"],Ze=["onClick"],Qe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-chevron-double-up",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"}),e("path",{"fill-rule":"evenodd",d:"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})],-1),Xe=[Qe],Ye=["onClick"],et=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-chevron-up",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})],-1),tt=[et],lt=["onClick"],ot=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-chevron-down",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})],-1),at=[ot],st=["onClick"],nt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-chevron-double-down",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}),e("path",{"fill-rule":"evenodd",d:"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})],-1),rt=[nt],it=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[e("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),e("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),ct=[it],dt=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),ut=p({setup(a){const l=D(),s=U(),{id:i}=s.params,t=S(()=>_.data.find(d=>d.id===i)),n=S(()=>btoa(JSON.stringify(t.value))),o=S(()=>{var d;return((d=t.value)==null?void 0:d.embeds)||[]});B(()=>o.value,()=>{if(!!o.value.length)for(let d=0;d<o.value.length;d++)o.value[d]||o.value.splice(d,1)},{deep:!0}),B(()=>t.value,O,{deep:!0});const b=(d,v)=>{if(!o.value.length)return;const z=o.value[d];o.value.splice(d,1),o.value.splice(v,0,z)},P=k(),x=k();oe(()=>{x.value=new ae(P.value),o.value.length===0&&x.value.show()});const F=()=>{var d;if(t.value&&confirm("Are you sure?")){(d=x.value)==null||d.hide();const v=_.data.indexOf(t.value);_.data.splice(v,1),O(),l.push("/")}};return(d,v)=>{const z=V("router-link");return r(),c(m,null,[(r(),f($,{to:"#navPortal"},[e("button",{class:"btn btn-primary",onClick:v[0]||(v[0]=M=>{var h;return(h=x.value)==null?void 0:h.show()}),title:"Edit"},Pe),g(z,{to:`/a/${u(n)}`,class:"btn btn-outline-primary",title:"Share"},{default:G(()=>[Fe]),_:1},8,["to"]),e("button",{onClick:F,class:"btn btn-outline-danger",title:"Delete"},je),e("div",{class:"modal fade",id:"modal",ref_key:"modal",ref:P,tabindex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true"},[e("div",Ie,[e("div",Je,[Re,u(t)?(r(),c("div",Te,[e("div",Ue,[I(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":v[1]||(v[1]=M=>u(t).nsfw=M),id:"nsfw"},null,512),[[se,u(t).nsfw]]),qe]),We,(r(!0),c(m,null,C(u(o).length+1,(M,h)=>(r(),c("div",{key:h,class:"d-flex gap-1 align-items-center justify-content-end mb-2"},[I(e("input",{type:"text","onUpdate:modelValue":w=>u(o)[h]=w,class:"form-control"},null,8,Ke),[[ne,u(o)[h]]]),e("button",{onClick:w=>b(h,0),class:"btn btn-outline-secondary btn-sm",title:"Delete"},Xe,8,Ze),e("button",{onClick:w=>b(h,h-1),class:"btn btn-outline-secondary btn-sm"},tt,8,Ye),e("button",{onClick:w=>b(h,h+1),class:"btn btn-outline-secondary btn-sm"},at,8,lt),e("button",{onClick:w=>b(h,u(o).length-1),class:"btn btn-outline-secondary btn-sm"},rt,8,st)]))),128))])):y("",!0),e("div",{class:"modal-footer d-flex justify-content-between"},[e("button",{onClick:F,class:"btn btn-outline-danger",title:"Delete"},ct),dt])])])],512)])),u(t)?(r(),f(W,{key:0,gallery:u(t)},null,8,["gallery"])):y("",!0)],64)}}}),ht=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16"},[e("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"})],-1),_t=[ht],vt=p({setup(a){const l=D(),s=U(),{id:i}=s.params,t=T(H(L({},JSON.parse(atob(i))),{id:void 0})),n=()=>{const{id:o}=q(t);l.push(`/${o}`)};return(o,b)=>(r(),c(m,null,[(r(),f($,{to:"#navPortal"},[e("button",{onClick:n,class:"btn btn-primary",title:"Save Gallery"},_t)])),g(W,{gallery:u(t)},null,8,["gallery"])],64))}}),mt=[{name:"Home",path:"/",component:ze,beforeEnter:J},{name:"Gallery",path:"/:id",component:ut,beforeEnter:J},{name:"PermaGallery",path:"/a/:id",component:vt}],pt=re({history:ie(),routes:mt});ce(be).use(pt).mount("#app");

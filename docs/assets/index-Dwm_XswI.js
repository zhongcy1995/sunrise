import{b as m,o as E,c as F,a as o,f as t,w as s,d as U,r as u,k as L,p as h,q as C,s as O,v as V,F as Z,x as w,y as b,i as q}from"./index-DphcpSgh.js";import{_ as S,N as H}from"./NavMenu-WLHgsKRC.js";const j={},D={class:"foot-container"},G={class:"div-2"};function J($,i){const l=m("n-grid-item"),f=m("n-grid");return E(),F("div",D,[i[3]||(i[3]=o("div",{class:"div-1"},[o("div",{style:{color:"white","font-weight":"bold","font-size":"3rem","margin-bottom":"1rem"}}," Subscribe to our emails "),o("div",{class:"card-content"}," Be the first to know about new collections and exclusive offers. ")],-1)),o("div",G,[t(f,{cols:"3","item-responsive":"","x-gap":"20",style:{"margin-bottom":"2rem"}},{default:s(()=>[t(l,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:s(()=>i[0]||(i[0]=[o("div",{class:"card-head"},"Shop",-1),o("div",{class:"card-content"},"Find us on Alibaba.com",-1)])),_:1}),t(l,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:s(()=>i[1]||(i[1]=[o("div",{class:"card-head"},"Our mission",-1),o("div",{class:"card-content"},"We make the greatest roto-moulding sanitation prodcuts so you can conduct your business anywhere.",-1)])),_:1}),t(l,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:s(()=>i[2]||(i[2]=[o("div",{class:"card-head"},"About",-1)])),_:1})]),_:1})]),i[4]||(i[4]=o("div",{style:{"justify-content":"center",display:"flex","align-items":"center"}},[o("div",{class:"div-foot"}," © 2024, SunriseToilet ")],-1))])}const Q=S(j,[["render",J],["__scopeId","data-v-2966e652"]]),X={class:"container",id:"drawer-target"},Y={class:"form-container"},ee=U({__name:"index",setup($){const i=u(null),l=u({name:null,email:null,phone:null,comment:null});L(()=>{M(),B(),window.addEventListener("resize",B)});const f=u(0),k=u(0),N=u("49%"),g=u("8rem"),p=u([1,1,2,2]),B=function(){f.value=window.innerWidth,k.value=window.innerHeight,f.value<=720?(N.value="100%",g.value="",p.value=[2,2,2,2]):(N.value="49%",g.value="8rem",p.value=[1,1,2,2])},z=u("n-input__placeholder"),_=n=>{let e=document.getElementById("input-"+n);e&&(n!==3?e.className="n-input__placeholder_focus":e.className="n-input__placeholder_focus_c")},I=()=>{let n=document.getElementById("input-0");n&&(l.value.name===null||l.value.name==="")&&(n.className="n-input__placeholder",n.children[0].className="")},R=()=>{let n=document.getElementById("input-1");n&&(l.value.email===null||l.value.email==="")&&(n.className="n-input__placeholder",n.children[0].className="")},W=()=>{let n=document.getElementById("input-2");n&&(l.value.phone===null||l.value.phone==="")&&(n.className="n-input__placeholder",n.children[0].className="")},A=()=>{let n=document.getElementById("input-3");console.log("aaaa"),n&&(l.value.comment===null||l.value.comment==="")&&(n.className="n-input__placeholder",n.children[0].className="")},K=["Name","Email *","Phone number"],M=()=>{let n=document.getElementsByClassName("n-input__input");for(let a=0;a<n.length;a++){let v=h("div",{id:"input-"+a,class:z.value},[h("span",{class:"n-input__placeholder_blur"},{default:()=>K[a]})]),y=n[a].children[0];C(v,n[a]),n[a].removeChild(y),n[a].appendChild(y)}let e=document.getElementsByClassName("n-input__textarea"),r=h("div",{id:"input-3",class:z.value},[h("span",{class:"n-input__placeholder_blur"},{default:()=>"Comment"})]),c=e[0].children[0];C(r,e[0]),e[0].removeChild(c),e[0].appendChild(c)},x=O(),P=()=>{l.value.email?l.value.email.match(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)?x.success("Send success!"):x.error("Please enter a valid email !"):x.error("Send fail ! Please add your email.")};return(n,e)=>{const r=m("n-form-item-grid-item"),c=m("n-grid"),a=m("n-input"),v=m("n-form-item-gi"),y=m("n-button"),T=m("n-form");return E(),F(Z,null,[t(H),o("div",X,[o("div",Y,[t(c,{cols:"6","x-gap":"20"},{default:s(()=>[t(r,{span:"1"}),t(r,{span:"4"},{default:s(()=>e[12]||(e[12]=[o("div",{style:{color:"#0e1b4d","font-size":"60px","font-weight":"bold"}},"Contact us",-1)])),_:1}),t(r,{span:"1"}),t(r,{span:"1"}),t(r,{span:"4"},{default:s(()=>e[13]||(e[13]=[o("div",{style:{color:"#0e1b4d","font-size":"25px","font-weight":"bold"}},"To drop us an email, please fill out this form and we will be in touch shortly.",-1)])),_:1}),t(r,{span:"1"})]),_:1}),t(T,{ref_key:"formRef",ref:i,style:V({paddingLeft:g.value,paddingRight:g.value}),model:l.value,"label-placement":"left",rules:n.rules},{default:s(()=>[t(c,{cols:"2","x-gap":"20"},{default:s(()=>[t(v,{span:p.value[0],path:"name"},{default:s(()=>[t(a,{style:{height:"3.5rem"},value:l.value.name,"onUpdate:value":e[0]||(e[0]=d=>l.value.name=d),onKeydown:e[1]||(e[1]=w(b(()=>{},["prevent"]),["enter"])),round:"",size:"large",placeholder:null,onFocus:e[2]||(e[2]=d=>_(0)),onBlur:I},null,8,["value"])]),_:1},8,["span"]),t(v,{span:p.value[1]},{default:s(()=>[t(a,{style:{height:"3.5rem"},value:l.value.email,"onUpdate:value":e[3]||(e[3]=d=>l.value.email=d),onKeydown:e[4]||(e[4]=w(b(()=>{},["prevent"]),["enter"])),round:"",size:"large",placeholder:null,onFocus:e[5]||(e[5]=d=>_(1)),onBlur:R},null,8,["value"])]),_:1},8,["span"]),t(v,{span:p.value[2]},{default:s(()=>[t(a,{style:{height:"3.5rem"},value:l.value.phone,"onUpdate:value":e[6]||(e[6]=d=>l.value.phone=d),onKeydown:e[7]||(e[7]=w(b(()=>{},["prevent"]),["enter"])),round:"",size:"large",placeholder:null,onFocus:e[8]||(e[8]=d=>_(2)),onBlur:W},null,8,["value"])]),_:1},8,["span"]),t(v,{span:p.value[3]},{default:s(()=>[t(a,{value:l.value.comment,"onUpdate:value":e[9]||(e[9]=d=>l.value.comment=d),type:"textarea",autosize:{minRows:3},onKeydown:e[10]||(e[10]=w(b(()=>{},["prevent"]),["enter"])),round:"",size:"large",placeholder:null,onFocus:e[11]||(e[11]=d=>_(3)),onBlur:A},null,8,["value"])]),_:1},8,["span"])]),_:1}),t(y,{round:"",type:"info",size:"large",style:{width:"7rem"},onClick:P},{default:s(()=>e[14]||(e[14]=[q("Send")])),_:1})]),_:1},8,["style","model","rules"])]),e[15]||(e[15]=o("div",{style:{"margin-bottom":"2rem"}},[o("div",{style:{"margin-bottom":"1rem",color:"#0e1b4d","font-size":"40px","font-weight":"bold","text-align":"center"}},"Or, get the quotation NOW"),o("div",{style:{"margin-bottom":"1rem",color:"#0e1b4d","font-size":"15px","text-align":"center"}},"Whatsapp: +86 18100120628"),o("div",{style:{"margin-bottom":"1rem",color:"#0e1b4d","font-size":"15px","text-align":"center"}},"Email: Sales@sunrise-moulding.com")],-1)),t(Q)])],64)}}}),le=S(ee,[["__scopeId","data-v-d9227eda"]]);export{le as default};

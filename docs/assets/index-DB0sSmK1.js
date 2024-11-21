import{d as y,o as r,c as d,a as t,r as b,b as a,e as S,w as o,f as s,u as f,g as p,h as x,n as L,F as g,i as m,_ as $,j as W,k as B,t as z}from"./index-Cng07e75.js";import{A as I,a as T}from"./ArrowForward-Dgv7v8aY.js";import{g as N,a as E,N as R}from"./NavMenu-C4c3vqp8.js";import{P as D}from"./ProductCard-C8Wknzvl.js";const F={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},H=t("path",{d:"M190.06 414l163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z",fill:"currentColor"},null,-1),M=[H],O=y({name:"CaretForward",render:function(i,c){return r(),d("svg",F,M)}}),V={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},U=t("path",{d:"M392 432H120a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h272a40 40 0 0 1 40 40v272a40 40 0 0 1-40 40z",fill:"currentColor"},null,-1),j=[U],q=y({name:"Stop",render:function(i,c){return r(),d("svg",V,j)}}),G="/sunrise/assets/c1-C4tc67kq.png",X="/sunrise/assets/c2-sxAn55-U.jpg",Z="/sunrise/assets/c3-qlB1Z9xy.jpg",Q={class:"parent"},Y=["src"],J={class:"carousel-content-1"},K={class:"carousel-1"},tt={class:"parent"},st=["src"],et={class:"carousel-content-2"},ot={class:"carousel-2"},nt={class:"parent"},it=["src"],rt={class:"carousel-content-3"},dt={class:"carousel-3"},lt={class:"custom-arrow"},at=["onClick"],ct=["onClick"],ut={class:"custom-dots"},_t=["onClick"],vt=y({__name:"Carousel",setup(h){const i=b(!0);return(c,e)=>{const v=a("n-button"),n=a("n-flex"),l=a("n-icon"),u=a("n-carousel");return r(),S(u,{"show-arrow":"",autoplay:i.value},{arrow:o(({prev:_,next:w})=>[t("div",lt,[t("button",{type:"button",class:"custom-arrow--left",onClick:_},[s(l,null,{default:o(()=>[s(f(I))]),_:1})],8,at),i.value?p("",!0):(r(),d("button",{key:0,type:"button",class:"custom-arrow--right",onClick:e[0]||(e[0]=k=>i.value=!0)},[s(l,null,{default:o(()=>[s(f(O))]),_:1})])),i.value?(r(),d("button",{key:1,type:"button",class:"custom-arrow--right",onClick:e[1]||(e[1]=k=>i.value=!1)},[s(l,null,{default:o(()=>[s(f(q))]),_:1})])):p("",!0),t("button",{type:"button",class:"custom-arrow--right",onClick:w},[s(l,null,{default:o(()=>[s(f(T))]),_:1})],8,ct)])]),dots:o(({total:_,currentIndex:w,to:k})=>[t("ul",ut,[(r(!0),d(g,null,x(_,C=>(r(),d("li",{key:C,class:L({"is-active":w===C-1}),onClick:$s=>k(C-1)},null,10,_t))),128))])]),default:o(()=>[t("div",Q,[t("img",{class:"carousel-img",src:f(G)},null,8,Y),t("div",J,[t("div",K,[s(n,{vertical:""},{default:o(()=>[e[3]||(e[3]=t("div",{style:{"font-weight":"bolder","font-size":"30px",color:"white"}},"The Basic Model",-1)),e[4]||(e[4]=t("div",{style:{color:"lightgray"}},"PT-370",-1)),s(v,{style:{width:"120px"},ghost:"",round:"",color:"#ffffff",size:"large"},{default:o(()=>e[2]||(e[2]=[m(" Learn More ")])),_:1})]),_:1})])])]),t("div",tt,[t("img",{class:"carousel-img",src:f(X)},null,8,st),t("div",et,[t("div",ot,[s(n,{vertical:""},{default:o(()=>[e[6]||(e[6]=t("div",{style:{"font-weight":"bolder","font-size":"55px",color:"white"}},"Strong Supply",-1)),e[7]||(e[7]=t("div",{style:{"font-weight":"bolder","font-size":"55px",color:"white"}},"Ability",-1)),e[8]||(e[8]=t("div",{style:{color:"lightgray"}},"Up to 1000 units per month",-1)),s(v,{style:{width:"120px"},ghost:"",round:"",color:"#ffffff",size:"large"},{default:o(()=>e[5]||(e[5]=[m(" Contact us ")])),_:1})]),_:1})])])]),t("div",nt,[t("img",{class:"carousel-img",src:f(Z)},null,8,it),t("div",rt,[t("div",dt,[s(n,{vertical:""},{default:o(()=>[e[10]||(e[10]=t("div",{style:{"font-weight":"bolder","font-size":"30px",color:"white"}}," Real factory, branding options ",-1)),e[11]||(e[11]=t("div",{style:{color:"lightgray"}}," With more than 16-year experience ",-1)),s(v,{style:{width:"120px"},ghost:"",round:"",color:"#ffffff",size:"large"},{default:o(()=>e[9]||(e[9]=[m(" Contact us ")])),_:1})]),_:1})])])])]),_:1},8,["autoplay"])}}}),ft=$(vt,[["__scopeId","data-v-bac95230"]]),mt={class:"product-list-container"},gt={class:"product-list-container-foot"},pt=y({__name:"ProductList",setup(h){const i=W(),c=b(N("g1").products),e=()=>{i.replace({name:"ProductGroup",query:{id:"g1"}})};return(v,n)=>{const l=a("n-grid-item"),u=a("n-carousel"),_=a("n-grid"),w=a("n-button");return r(),d("div",mt,[n[1]||(n[1]=t("div",{class:"product-list-container-head"},[t("div",{class:"product-list-container-head-d"}," Featured Products ")],-1)),s(_,{cols:4,"item-responsive":""},{default:o(()=>[(r(!0),d(g,null,x(c.value,(k,C)=>(r(),S(l,{class:"menu-item",span:"0 720:1",key:C},{default:o(()=>[s(D,{card:k},null,8,["card"])]),_:2},1024))),128)),s(l,{class:"menu-item",span:"4 720:0"},{default:o(()=>[s(u,{"slides-per-view":2,loop:!1,draggable:""},{default:o(()=>[(r(!0),d(g,null,x(c.value,(k,C)=>(r(),d("div",{key:C},[s(D,{card:k},null,8,["card"])]))),128))]),_:1})]),_:1})]),_:1}),t("div",gt,[s(w,{class:"product-list-container-foot-d",strong:"",round:"",color:"#ffffff","text-color":"#000000",onClick:e},{default:o(()=>n[0]||(n[0]=[m(" View all ")])),_:1})])])}}}),ht=$(pt,[["__scopeId","data-v-687d4dff"]]),P="/sunrise/assets/desc1-XyU_urEf.png",wt={key:0,class:"desc-div-1-container"},yt={class:"desc-div-1"},bt={class:"desc-div-1-text"},xt={class:"desc-div-1-image-container"},$t=["src"],kt={key:1,class:"desc-div-2-container"},Ct={key:0,class:"desc-div-2"},zt={class:"desc-div-2-image-container"},St=["src"],Bt={class:"desc-div-2-text-container"},Dt={class:"desc-div-1-text"},Pt=y({__name:"DescDiv1",setup(h){const i=b(0),c=b(0);B(()=>{e(),window.addEventListener("resize",e)});const e=function(){i.value=window.innerWidth,c.value=window.innerHeight};return(v,n)=>{const l=a("n-button"),u=a("n-grid-item"),_=a("n-grid");return r(),d(g,null,[i.value>=720?(r(),d("div",wt,[t("div",yt,[s(_,{cols:"2"},{default:o(()=>[s(u,{span:"1"},{default:o(()=>[t("div",bt,[n[1]||(n[1]=t("div",{style:{"font-weight":"bolder","font-size":"3rem",color:"#ffffff"}},[m(" Portable"),t("br"),m(" Hand Wash"),t("br"),m(" Station ")],-1)),n[2]||(n[2]=t("div",{style:{color:"lightgray","margin-right":"5rem"}}," Whether it's outdoor, industrial or even daily use, our handwash stations have evrything you need! ",-1)),s(l,{class:"desc-div-button",strong:"",round:"",color:"#ffffff","text-color":"#000000"},{default:o(()=>n[0]||(n[0]=[m(" View all ")])),_:1})])]),_:1}),s(u,{span:"1"},{default:o(()=>[t("div",xt,[t("img",{class:"desc-div-1-image",src:f(P)},null,8,$t)])]),_:1})]),_:1})])])):p("",!0),i.value<720?(r(),d("div",kt,[i.value<720?(r(),d("div",Ct,[t("div",zt,[t("img",{class:"desc-div-2-image",src:f(P)},null,8,St)]),t("div",Bt,[t("div",Dt,[n[4]||(n[4]=t("div",{style:{"font-weight":"bolder","font-size":"2.5rem",color:"#ffffff"}}," Portable Hand Wash tation ",-1)),n[5]||(n[5]=t("div",{style:{color:"lightgray"}}," Whether it's outdoor, industrial or even daily use, our handwash stations have evrything you need! ",-1)),s(l,{class:"desc-div-button",strong:"",round:"",color:"#ffffff","text-color":"#000000"},{default:o(()=>n[3]||(n[3]=[m(" Learn more ")])),_:1})])])])):p("",!0)])):p("",!0)],64)}}}),At=$(Pt,[["__scopeId","data-v-500f4c50"]]),A="/sunrise/assets/desc2-C5mMg-8i.webp",Lt={key:0,class:"desc-div-1-container"},Wt={class:"desc-div-1"},It={class:"desc-div-1-image-container"},Tt=["src"],Nt={class:"desc-div-1-text"},Et={key:1,class:"desc-div-2-container"},Rt={key:0,class:"desc-div-2"},Ft={class:"desc-div-2-image-container"},Ht=["src"],Mt={class:"desc-div-2-text-container"},Ot={class:"desc-div-1-text"},Vt=y({__name:"DescDiv2",setup(h){const i=b(0),c=b(0);B(()=>{e(),window.addEventListener("resize",e)});const e=function(){i.value=window.innerWidth,c.value=window.innerHeight};return(v,n)=>{const l=a("n-grid-item"),u=a("n-button"),_=a("n-grid");return r(),d(g,null,[i.value>=720?(r(),d("div",Lt,[t("div",Wt,[s(_,{cols:"2"},{default:o(()=>[s(l,{span:"1"},{default:o(()=>[t("div",It,[t("img",{class:"desc-div-1-image",src:f(A)},null,8,Tt)])]),_:1}),s(l,{span:"1"},{default:o(()=>[t("div",Nt,[n[1]||(n[1]=t("div",{style:{"font-weight":"bolder","font-size":"3rem",color:"#0e1b4d"}}," Portable Shower ",-1)),n[2]||(n[2]=t("div",{style:{color:"#5d6688","margin-right":"5rem"}}," The Portable Shower is an ideal solution for when you have access to water mains, but no permanent showering facilities. ",-1)),s(u,{class:"desc-div-button",strong:"",round:"",color:"#4770db","text-color":"#ffffff"},{default:o(()=>n[0]||(n[0]=[m(" Learn more ")])),_:1})])]),_:1})]),_:1})])])):p("",!0),i.value<720?(r(),d("div",Et,[i.value<720?(r(),d("div",Rt,[t("div",Ft,[t("img",{class:"desc-div-2-image",src:f(A)},null,8,Ht)]),t("div",Mt,[t("div",Ot,[n[4]||(n[4]=t("div",{style:{"font-weight":"bolder","font-size":"2.5rem",color:"#0e1b4d"}}," Portable Shower ",-1)),n[5]||(n[5]=t("div",{style:{color:"#5d6688"}}," The Portable Shower is an ideal solution for when you have access to water mains, but no permanent showering facilities. ",-1)),s(u,{class:"desc-div-button",strong:"",round:"",color:"#4770db","text-color":"#ffffff"},{default:o(()=>n[3]||(n[3]=[m(" Learn more ")])),_:1})])])])):p("",!0)])):p("",!0)],64)}}}),Ut=$(Vt,[["__scopeId","data-v-34a08370"]]),jt="/sunrise/assets/ISO-ov9Zf-2B.webp",qt="/sunrise/assets/CE-Cn-xNnAh.webp",Gt="/sunrise/assets/CR-TAFC0adX.webp",Xt={class:"container"},Zt={key:0,style:{display:"flex","justify-content":"center","align-items":"center"}},Qt=["src"],Yt={key:1,class:"div-container"},Jt={class:"inner-container"},Kt=["src"],ts=y({__name:"DescDiv3",setup(h){const i=[qt,jt,Gt],c=b(0),e=b(0);B(()=>{v(),window.addEventListener("resize",v)});const v=function(){c.value=window.innerWidth,e.value=window.innerHeight};return(n,l)=>{const u=a("n-flex");return r(),d("div",Xt,[l[0]||(l[0]=t("div",{class:"div-container"},[t("div",{class:"div-h2"}," SUNRISE ENVIRONMENTAL PROTECTION SOLUTION ")],-1)),l[1]||(l[1]=t("div",{class:"div-container"},[t("div",{class:"div-h1"}," You don't need a reliable vendor, until you do. ")],-1)),c.value>=900?(r(),d("div",Zt,[(r(),d(g,null,x(i,(_,w)=>t("div",{style:{width:"18rem",margin:"2rem",height:"20rem"},key:w},[t("img",{class:"image-container",src:_},null,8,Qt)])),64))])):p("",!0),c.value<900?(r(),d("div",Yt,[s(u,{vertical:""},{default:o(()=>[t("div",Jt,[(r(),d(g,null,x(i,(_,w)=>t("img",{class:"image-container-flex",src:_,key:w},null,8,Kt)),64))])]),_:1})])):p("",!0)])}}}),ss=$(ts,[["__scopeId","data-v-ca5fbbff"]]),es="/sunrise/assets/desc4-1-ubXwxvPs.webp",os="/sunrise/assets/desc4-2-BdxRQdLM.webp",ns="/sunrise/assets/desc4-3-BuiHa2EB.webp",is={class:"inner-container"},rs=["src"],ds={class:"image-text"},ls=["src"],as={class:"image-text"},cs=y({__name:"DescDiv4",setup(h){const i=[{text:"with Austrialian Portable Toilet",image:es},{text:"with Airam Developments, the US",image:os},{text:"with 1300 Temp Fence, Australia",image:ns}];return(c,e)=>{const v=a("n-grid-item"),n=a("n-grid"),l=a("n-flex");return r(),d("div",null,[e[0]||(e[0]=t("div",{class:"div-text"},"Become the next partner with Sunrise",-1)),s(n,{cols:"3","item-responsive":""},{default:o(()=>[(r(),d(g,null,x(i,(u,_)=>s(v,{class:"container",span:"0 900:1",key:_},{default:o(()=>[t("div",is,[t("img",{class:"image-container",src:u.image},null,8,rs),t("div",ds,z(u.text),1)])]),_:2},1024)),64))]),_:1}),s(n,{cols:"1","item-responsive":""},{default:o(()=>[s(v,{span:"1 900:0"},{default:o(()=>[s(l,{vertical:""},{default:o(()=>[(r(),d(g,null,x(i,(u,_)=>t("div",{class:"inner-container",key:_},[t("img",{class:"image-container-flex",src:u.image},null,8,ls),t("div",as,z(u.text),1)])),64))]),_:1})]),_:1})]),_:1})])}}}),us=$(cs,[["__scopeId","data-v-86b14d24"]]),_s={},vs={class:"container"},fs={class:"div-2"};function ms(h,i){const c=a("n-grid-item"),e=a("n-grid");return r(),d("div",vs,[i[3]||(i[3]=t("div",{class:"div-1"},[t("div",{style:{color:"white","font-weight":"bold","font-size":"2rem","margin-bottom":"1rem"}}," Visit us in China. "),t("div",{style:{color:"white","font-weight":"bold","font-size":"1.2rem","margin-bottom":"1rem"}}," Company address: 222 Lehai Rd, Beilun District, Ningbo, Zhejiang, China 315800 ")],-1)),t("div",fs,[s(e,{cols:"3","item-responsive":"","x-gap":"20",style:{"margin-bottom":"2rem"}},{default:o(()=>[s(c,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:o(()=>i[0]||(i[0]=[t("div",{class:"card-head"},"Shop",-1),t("div",{class:"card-content"},"Find us on Alibaba.com",-1)])),_:1}),s(c,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:o(()=>i[1]||(i[1]=[t("div",{class:"card-head"},"Our mission",-1),t("div",{class:"card-content"},"We make the greatest roto-moulding sanitation prodcuts so you can conduct your business anywhere.",-1)])),_:1}),s(c,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:o(()=>i[2]||(i[2]=[t("div",{class:"card-head"},"About",-1)])),_:1})]),_:1})]),i[4]||(i[4]=t("div",{style:{"justify-content":"center",display:"flex","align-items":"center"}},[t("div",{class:"div-foot"}," © 2024, SunriseToilet ")],-1))])}const gs=$(_s,[["render",ms],["__scopeId","data-v-37794222"]]),ps={style:{"background-color":"#eff0f5",position:"relative"},id:"drawer-target"},hs={style:{"margin-left":"2rem"}},ws=["src"],ys={style:{"margin-top":"1rem","font-weight":"bold","font-size":"15px"}},bs={style:{"margin-top":"1rem"}},xs=y({__name:"index",setup(h){const i=E(["p0501","p0502"]);return(c,e)=>{const v=a("n-card"),n=a("n-flex");return r(),d(g,null,[s(R),t("div",ps,[t("div",null,[s(ft)]),e[0]||(e[0]=t("div",null,[t("div",{class:"div-h1"},"Get the B2B Price Today."),t("div",{class:"div-h1"},"(Our MOQ:10 sets)"),t("div",{class:"div-h2"},"Whatsapp: +86 18100120628"),t("div",{class:"div-h2"},"Email: Sales@sunrise-moulding.com")],-1)),s(ht),s(At),s(Ut),e[1]||(e[1]=t("div",{class:"div-h1"},"Accessories (more are coming soon...)",-1)),t("div",hs,[s(n,{wrap:!1},{default:o(()=>[(r(!0),d(g,null,x(f(i),(l,u)=>(r(),S(v,{size:"small",key:u},{cover:o(()=>[t("img",{src:l.imageUrl},null,8,ws)]),default:o(()=>[t("div",ys,z(l.name),1),t("div",bs,z(l.price),1)]),_:2},1024))),128))]),_:1})]),s(ss),s(us),s(gs)])],64)}}}),Bs=$(xs,[["__scopeId","data-v-61549af9"]]);export{Bs as default};

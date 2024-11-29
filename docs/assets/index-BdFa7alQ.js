import{d as b,o as r,c as d,a as t,r as y,b as u,e as B,w as o,f as s,u as f,g as h,h as x,n as A,F as p,i as g,j as W,k as S,t as z}from"./index-DphcpSgh.js";import{A as I}from"./ArrowBack-D7zVVDF6.js";import{A as T,_ as $,g as E,a as M,N}from"./NavMenu-WLHgsKRC.js";import{P as D}from"./ProductCard-CxndznYu.js";const R={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},F=t("path",{d:"M190.06 414l163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z",fill:"currentColor"},null,-1),H=[F],O=b({name:"CaretForward",render:function(i,l){return r(),d("svg",R,H)}}),V={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},U=t("path",{d:"M392 432H120a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h272a40 40 0 0 1 40 40v272a40 40 0 0 1-40 40z",fill:"currentColor"},null,-1),j=[U],q=b({name:"Stop",render:function(i,l){return r(),d("svg",V,j)}}),G="/sunrise/assets/c1-C4tc67kq.png",X="/sunrise/assets/c2-sxAn55-U.jpg",Z="/sunrise/assets/c3-qlB1Z9xy.jpg",Q={class:"parent"},Y=["src"],J={class:"carousel-content-1"},K={class:"carousel-1"},tt={class:"parent"},st=["src"],et={class:"carousel-content-2"},ot={class:"carousel-2"},nt={class:"parent"},it=["src"],rt={class:"carousel-content-3"},dt={class:"carousel-3"},lt={class:"custom-arrow"},at=["onClick"],ct=["onClick"],ut={class:"custom-dots"},_t=["onClick"],vt=b({__name:"Carousel",setup(w){const i=y(!0);return(l,e)=>{const v=u("n-button"),n=u("n-flex"),c=u("n-icon"),_=u("n-carousel");return r(),B(_,{"show-arrow":"",autoplay:i.value},{arrow:o(({prev:a,next:m})=>[t("div",lt,[t("button",{type:"button",class:"custom-arrow--left",onClick:a},[s(c,null,{default:o(()=>[s(f(I))]),_:1})],8,at),i.value?h("",!0):(r(),d("button",{key:0,type:"button",class:"custom-arrow--right",onClick:e[0]||(e[0]=k=>i.value=!0)},[s(c,null,{default:o(()=>[s(f(O))]),_:1})])),i.value?(r(),d("button",{key:1,type:"button",class:"custom-arrow--right",onClick:e[1]||(e[1]=k=>i.value=!1)},[s(c,null,{default:o(()=>[s(f(q))]),_:1})])):h("",!0),t("button",{type:"button",class:"custom-arrow--right",onClick:m},[s(c,null,{default:o(()=>[s(f(T))]),_:1})],8,ct)])]),dots:o(({total:a,currentIndex:m,to:k})=>[t("ul",ut,[(r(!0),d(p,null,x(a,C=>(r(),d("li",{key:C,class:A({"is-active":m===C-1}),onClick:xs=>k(C-1)},null,10,_t))),128))])]),default:o(()=>[t("div",Q,[t("img",{class:"carousel-img",src:f(G)},null,8,Y),t("div",J,[t("div",K,[s(n,{vertical:""},{default:o(()=>[e[3]||(e[3]=t("div",{style:{"font-weight":"bolder","font-size":"30px",color:"white"}},"The Basic Model",-1)),e[4]||(e[4]=t("div",{style:{color:"lightgray"}},"PT-370",-1)),s(v,{style:{width:"120px"},ghost:"",round:"",color:"#ffffff",size:"large"},{default:o(()=>e[2]||(e[2]=[g(" Learn More ")])),_:1})]),_:1})])])]),t("div",tt,[t("img",{class:"carousel-img",src:f(X)},null,8,st),t("div",et,[t("div",ot,[s(n,{vertical:""},{default:o(()=>[e[6]||(e[6]=t("div",{style:{"font-weight":"bolder","font-size":"55px",color:"white"}},"Strong Supply",-1)),e[7]||(e[7]=t("div",{style:{"font-weight":"bolder","font-size":"55px",color:"white"}},"Ability",-1)),e[8]||(e[8]=t("div",{style:{color:"lightgray"}},"Up to 1000 units per month",-1)),s(v,{style:{width:"120px"},ghost:"",round:"",color:"#ffffff",size:"large"},{default:o(()=>e[5]||(e[5]=[g(" Contact us ")])),_:1})]),_:1})])])]),t("div",nt,[t("img",{class:"carousel-img",src:f(Z)},null,8,it),t("div",rt,[t("div",dt,[s(n,{vertical:""},{default:o(()=>[e[10]||(e[10]=t("div",{style:{"font-weight":"bolder","font-size":"30px",color:"white"}}," Real factory, branding options ",-1)),e[11]||(e[11]=t("div",{style:{color:"lightgray"}}," With more than 16-year experience ",-1)),s(v,{style:{width:"120px"},ghost:"",round:"",color:"#ffffff",size:"large"},{default:o(()=>e[9]||(e[9]=[g(" Contact us ")])),_:1})]),_:1})])])])]),_:1},8,["autoplay"])}}}),ft=$(vt,[["__scopeId","data-v-bac95230"]]),mt={class:"product-list-container"},gt={class:"product-list-container-foot"},pt=b({__name:"ProductList",setup(w){const i=W(),l=y(E("g1").products),e=()=>{i.replace({name:"ProductGroup",query:{id:"g1"}})};return(v,n)=>{const c=u("n-grid-item"),_=u("n-carousel"),a=u("n-grid"),m=u("n-button");return r(),d("div",mt,[n[1]||(n[1]=t("div",{class:"product-list-container-head"},[t("div",{class:"product-list-container-head-d"}," Featured Products ")],-1)),s(a,{cols:4,"item-responsive":""},{default:o(()=>[(r(!0),d(p,null,x(l.value,(k,C)=>(r(),B(c,{class:"menu-item",span:"0 720:1",key:C},{default:o(()=>[s(D,{card:k},null,8,["card"])]),_:2},1024))),128)),s(c,{class:"menu-item",span:"4 720:0"},{default:o(()=>[s(_,{"slides-per-view":2,loop:!1,draggable:""},{default:o(()=>[(r(!0),d(p,null,x(l.value,(k,C)=>(r(),d("div",{key:C},[s(D,{card:k},null,8,["card"])]))),128))]),_:1})]),_:1})]),_:1}),t("div",gt,[s(m,{class:"product-list-container-foot-d",strong:"",round:"",color:"#ffffff","text-color":"#000000",onClick:e},{default:o(()=>n[0]||(n[0]=[g(" View all ")])),_:1})])])}}}),ht=$(pt,[["__scopeId","data-v-687d4dff"]]),P="/sunrise/assets/desc1-XyU_urEf.png",wt={key:0,class:"desc-div-1-container"},yt={class:"desc-div-1"},bt={class:"desc-div-1-text"},xt={class:"desc-div-1-image-container"},$t=["src"],kt={key:1,class:"desc-div-2-container"},Ct={key:0,class:"desc-div-2"},zt={class:"desc-div-2-image-container"},St=["src"],At={class:"desc-div-2-text-container"},Bt={class:"desc-div-1-text"},Dt=b({__name:"DescDiv1",setup(w){const i=y(0),l=y(0);S(()=>{e(),window.addEventListener("resize",e)});const e=function(){i.value=window.innerWidth,l.value=window.innerHeight};return(v,n)=>{const c=u("n-button"),_=u("n-grid-item"),a=u("n-grid");return r(),d(p,null,[i.value>=720?(r(),d("div",wt,[t("div",yt,[s(a,{cols:"2"},{default:o(()=>[s(_,{span:"1"},{default:o(()=>[t("div",bt,[n[1]||(n[1]=t("div",{style:{"font-weight":"bolder","font-size":"3rem",color:"#ffffff"}},[g(" Portable"),t("br"),g(" Hand Wash"),t("br"),g(" Station ")],-1)),n[2]||(n[2]=t("div",{style:{color:"lightgray","margin-right":"5rem"}}," Whether it's outdoor, industrial or even daily use, our handwash stations have evrything you need! ",-1)),s(c,{class:"desc-div-button",strong:"",round:"",color:"#ffffff","text-color":"#000000"},{default:o(()=>n[0]||(n[0]=[g(" View all ")])),_:1})])]),_:1}),s(_,{span:"1"},{default:o(()=>[t("div",xt,[t("img",{class:"desc-div-1-image",src:f(P)},null,8,$t)])]),_:1})]),_:1})])])):h("",!0),i.value<720?(r(),d("div",kt,[i.value<720?(r(),d("div",Ct,[t("div",zt,[t("img",{class:"desc-div-2-image",src:f(P)},null,8,St)]),t("div",At,[t("div",Bt,[n[4]||(n[4]=t("div",{style:{"font-weight":"bolder","font-size":"2.5rem",color:"#ffffff"}}," Portable Hand Wash tation ",-1)),n[5]||(n[5]=t("div",{style:{color:"lightgray"}}," Whether it's outdoor, industrial or even daily use, our handwash stations have evrything you need! ",-1)),s(c,{class:"desc-div-button",strong:"",round:"",color:"#ffffff","text-color":"#000000"},{default:o(()=>n[3]||(n[3]=[g(" Learn more ")])),_:1})])])])):h("",!0)])):h("",!0)],64)}}}),Pt=$(Dt,[["__scopeId","data-v-500f4c50"]]),L="/sunrise/assets/desc2-C5mMg-8i.webp",Lt={key:0,class:"desc-div-1-container"},Wt={class:"desc-div-1"},It={class:"desc-div-1-image-container"},Tt=["src"],Et={class:"desc-div-1-text"},Mt={key:1,class:"desc-div-2-container"},Nt={key:0,class:"desc-div-2"},Rt={class:"desc-div-2-image-container"},Ft=["src"],Ht={class:"desc-div-2-text-container"},Ot={class:"desc-div-1-text"},Vt=b({__name:"DescDiv2",setup(w){const i=y(0),l=y(0);S(()=>{e(),window.addEventListener("resize",e)});const e=function(){i.value=window.innerWidth,l.value=window.innerHeight};return(v,n)=>{const c=u("n-grid-item"),_=u("n-button"),a=u("n-grid");return r(),d(p,null,[i.value>=720?(r(),d("div",Lt,[t("div",Wt,[s(a,{cols:"2"},{default:o(()=>[s(c,{span:"1"},{default:o(()=>[t("div",It,[t("img",{class:"desc-div-1-image",src:f(L)},null,8,Tt)])]),_:1}),s(c,{span:"1"},{default:o(()=>[t("div",Et,[n[1]||(n[1]=t("div",{style:{"font-weight":"bolder","font-size":"3rem",color:"#0e1b4d"}}," Portable Shower ",-1)),n[2]||(n[2]=t("div",{style:{color:"#5d6688","margin-right":"5rem"}}," The Portable Shower is an ideal solution for when you have access to water mains, but no permanent showering facilities. ",-1)),s(_,{class:"desc-div-button",strong:"",round:"",color:"#4770db","text-color":"#ffffff"},{default:o(()=>n[0]||(n[0]=[g(" Learn more ")])),_:1})])]),_:1})]),_:1})])])):h("",!0),i.value<720?(r(),d("div",Mt,[i.value<720?(r(),d("div",Nt,[t("div",Rt,[t("img",{class:"desc-div-2-image",src:f(L)},null,8,Ft)]),t("div",Ht,[t("div",Ot,[n[4]||(n[4]=t("div",{style:{"font-weight":"bolder","font-size":"2.5rem",color:"#0e1b4d"}}," Portable Shower ",-1)),n[5]||(n[5]=t("div",{style:{color:"#5d6688"}}," The Portable Shower is an ideal solution for when you have access to water mains, but no permanent showering facilities. ",-1)),s(_,{class:"desc-div-button",strong:"",round:"",color:"#4770db","text-color":"#ffffff"},{default:o(()=>n[3]||(n[3]=[g(" Learn more ")])),_:1})])])])):h("",!0)])):h("",!0)],64)}}}),Ut=$(Vt,[["__scopeId","data-v-34a08370"]]),jt="/sunrise/assets/ISO-ov9Zf-2B.webp",qt="/sunrise/assets/CE-Cn-xNnAh.webp",Gt="/sunrise/assets/CR-TAFC0adX.webp",Xt={class:"container"},Zt={key:0,style:{display:"flex","justify-content":"center","align-items":"center"}},Qt=["src"],Yt={key:1,class:"div-container"},Jt={class:"inner-container"},Kt=["src"],ts=b({__name:"DescDiv3",setup(w){const i=[qt,jt,Gt],l=y(0),e=y(0);S(()=>{v(),window.addEventListener("resize",v)});const v=function(){l.value=window.innerWidth,e.value=window.innerHeight};return(n,c)=>{const _=u("n-flex");return r(),d("div",Xt,[c[0]||(c[0]=t("div",{class:"div-container"},[t("div",{class:"div-h2"}," SUNRISE ENVIRONMENTAL PROTECTION SOLUTION ")],-1)),c[1]||(c[1]=t("div",{class:"div-container"},[t("div",{class:"div-h1"}," You don't need a reliable vendor, until you do. ")],-1)),l.value>=900?(r(),d("div",Zt,[(r(),d(p,null,x(i,(a,m)=>t("div",{style:{width:"18rem",margin:"2rem",height:"20rem"},key:m},[t("img",{class:"image-container",src:a},null,8,Qt)])),64))])):h("",!0),l.value<900?(r(),d("div",Yt,[s(_,{vertical:""},{default:o(()=>[t("div",Jt,[(r(),d(p,null,x(i,(a,m)=>t("img",{class:"image-container-flex",src:a,key:m},null,8,Kt)),64))])]),_:1})])):h("",!0)])}}}),ss=$(ts,[["__scopeId","data-v-ca5fbbff"]]),es="/sunrise/assets/desc4-1-ubXwxvPs.webp",os="/sunrise/assets/desc4-2-BdxRQdLM.webp",ns="/sunrise/assets/desc4-3-BuiHa2EB.webp",is={class:"inner-container"},rs=["src"],ds={class:"image-text"},ls=["src"],as={class:"image-text"},cs=b({__name:"DescDiv4",setup(w){const i=[{text:"with Austrialian Portable Toilet",image:es},{text:"with Airam Developments, the US",image:os},{text:"with 1300 Temp Fence, Australia",image:ns}];return(l,e)=>{const v=u("n-grid-item"),n=u("n-grid"),c=u("n-flex");return r(),d("div",null,[e[0]||(e[0]=t("div",{class:"div-text"},"Become the next partner with Sunrise",-1)),s(n,{cols:"3","item-responsive":""},{default:o(()=>[(r(),d(p,null,x(i,(_,a)=>s(v,{class:"container",span:"0 900:1",key:a},{default:o(()=>[t("div",is,[t("img",{class:"image-container",src:_.image},null,8,rs),t("div",ds,z(_.text),1)])]),_:2},1024)),64))]),_:1}),s(n,{cols:"1","item-responsive":""},{default:o(()=>[s(v,{span:"1 900:0"},{default:o(()=>[s(c,{vertical:""},{default:o(()=>[(r(),d(p,null,x(i,(_,a)=>t("div",{class:"inner-container",key:a},[t("img",{class:"image-container-flex",src:_.image},null,8,ls),t("div",as,z(_.text),1)])),64))]),_:1})]),_:1})]),_:1})])}}}),us=$(cs,[["__scopeId","data-v-86b14d24"]]),_s={},vs={class:"container"},fs={class:"div-2"};function ms(w,i){const l=u("n-grid-item"),e=u("n-grid");return r(),d("div",vs,[i[3]||(i[3]=t("div",{class:"div-1"},[t("div",{style:{color:"white","font-weight":"bold","font-size":"2rem","margin-bottom":"1rem"}}," Visit us in China. "),t("div",{style:{color:"white","font-weight":"bold","font-size":"1.2rem","margin-bottom":"1rem"}}," Company address: 222 Lehai Rd, Beilun District, Ningbo, Zhejiang, China 315800 ")],-1)),t("div",fs,[s(e,{cols:"3","item-responsive":"","x-gap":"20",style:{"margin-bottom":"2rem"}},{default:o(()=>[s(l,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:o(()=>i[0]||(i[0]=[t("div",{class:"card-head"},"Shop",-1),t("div",{class:"card-content"},"Find us on Alibaba.com",-1)])),_:1}),s(l,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:o(()=>i[1]||(i[1]=[t("div",{class:"card-head"},"Our mission",-1),t("div",{class:"card-content"},"We make the greatest roto-moulding sanitation prodcuts so you can conduct your business anywhere.",-1)])),_:1}),s(l,{style:{"margin-top":"4rem"},span:"3 720:1"},{default:o(()=>i[2]||(i[2]=[t("div",{class:"card-head"},"About",-1)])),_:1})]),_:1})]),i[4]||(i[4]=t("div",{style:{"justify-content":"center",display:"flex","align-items":"center"}},[t("div",{class:"div-foot"}," © 2024, SunriseToilet ")],-1))])}const gs=$(_s,[["render",ms],["__scopeId","data-v-37794222"]]),ps={style:{"background-color":"#eff0f5",position:"relative"},id:"drawer-target"},hs={style:{"margin-left":"2rem"}},ws=["src"],ys={style:{"margin-top":"1rem"}},bs=b({__name:"index",setup(w){const i=M(["p0501","p0502"]),l=y([]);return S(()=>{i.forEach(e=>{l.value.push(!1)})}),(e,v)=>{const n=u("n-card"),c=u("n-flex");return r(),d(p,null,[s(N),t("div",ps,[t("div",null,[s(ft)]),v[0]||(v[0]=t("div",null,[t("div",{class:"div-h1"},"Get the B2B Price Today."),t("div",{class:"div-h1"},"(Our MOQ:10 sets)"),t("div",{class:"div-h2"},"Whatsapp: +86 18100120628"),t("div",{class:"div-h2"},"Email: Sales@sunrise-moulding.com")],-1)),s(ht),s(Pt),s(Ut),v[1]||(v[1]=t("div",{class:"div-h1"},"Accessories (more are coming soon...)",-1)),t("div",hs,[s(c,{wrap:!1},{default:o(()=>[(r(!0),d(p,null,x(f(i),(_,a)=>(r(),B(n,{onMouseleave:m=>l.value[a]=!l.value[a],onMouseenter:m=>l.value[a]=!l.value[a],size:"small",key:a},{cover:o(()=>[t("img",{class:A(l.value[a]?"Anim":"uAnim"),src:_.imageUrl},null,10,ws)]),default:o(()=>[t("div",{class:A(l.value[a]?"title title-underline":"title")},z(_.name),3),t("div",ys,z(_.price),1)]),_:2},1032,["onMouseleave","onMouseenter"]))),128))]),_:1})]),s(ss),s(us),s(gs)])],64)}}}),Ss=$(bs,[["__scopeId","data-v-01883d20"]]);export{Ss as default};

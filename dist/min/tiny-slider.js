var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=I.style.overflow,e.style.background="",e.style.overflow=I.style.overflow="hidden",I.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),I.style.overflow=t,I.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function u(e){return("insertRule"in e?e.cssRules:e.rules).length}function c(e,t){return Math.atan2(e,t)*(180/Math.PI)}function f(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function d(e,t,n){for(var i=0,a=e.length;i<a;i++)t.call(n,e[i],i)}function v(e,t){return e.className.indexOf(t)>=0}function h(e,t){v(e,t)||(e.className+=" "+t)}function p(e,t){v(e,t)&&(e.className=e.className.replace(t,""))}function m(e,t){return e.hasAttribute(t)}function y(e,t){return e.getAttribute(t)}function g(e){return void 0!==e.item}function b(e,t){if(e=g(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function x(e,t){e=g(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function T(e){e.style.cssText=""}function w(e){m(e,"hidden")||b(e,{hidden:""})}function C(e){m(e,"hidden")&&x(e,"hidden")}function E(e){return e.offsetWidth>0&&e.offsetHeight>0}function N(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function O(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function D(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function A(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&H;e.addEventListener(n,t[n],i)}}function k(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;e.removeEventListener(n,t[n],i)}}function M(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function P(e,t,n,i,a,r,o){function s(){r-=l,c+=f,e.style[t]=n+c+u+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),u=a.indexOf("%")>=0?"%":"px",a=a.replace(u,""),c=Number(e.style[t].replace(n,"").replace(i,"").replace(u,"")),f=(a-c)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var I=document.documentElement,S=!1;try{var W=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("test",null,W)}catch(e){}var H=!!S&&{passive:!0},L=navigator.userAgent,z=!0,B={};try{B=localStorage,B.tnsApp&&B.tnsApp!==L&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){B.removeItem(e)}),B.tnsApp=L}catch(e){z=!1}z&&!localStorage&&(B={});var R=document,j=window,q={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},G=t(B.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,u=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],c=0;c<3;c++)if(l=u[c],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),z),F=t(B.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),u=n.createElement("div");return l.style.cssText="width: 10px",u.style.cssText="float: left; width: 5.5px; height: 10px;",e=u.cloneNode(!0),l.appendChild(u),l.appendChild(e),i.appendChild(l),t=u.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),z),U=t(B.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),u="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=u:l.appendChild(t.createTextNode(u)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),z),X=t(B.tTf)||n("tTf",O(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),z),V=t(B.tTDu)||n("tTDu",O(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),z),Y=t(B.tTDe)||n("tTDe",O(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),z),K=t(B.tADu)||n("tADu",O(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),z),Q=t(B.tADe)||n("tADe",O(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),z),J=t(B.tTE)||n("tTE",D(V,"Transition"),z),Z=t(B.tAE)||n("tAE",D(K,"Animation"),z);U||(F=!1);var $=function(t){function n(){return j.innerWidth||R.documentElement.clientWidth||R.body.clientWidth}function a(e){var t;do{t=e.clientWidth,e=e.parentNode}while(!t);return t}function r(e){var n=t[e];return!n&&Et&&Ct.indexOf(e)>=0&&Et.forEach(function(t){wt[t][e]&&(n=!0)}),n}function o(e,n){n=n?n:Ot;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!st&&e in a)i=a[e];else if("items"===e&&o("fixedWidth"))i=Math.floor(Tt/(o("fixedWidth")+o("gutter")));else if("autoHeight"===e&&"outer"===Wt)i=!0;else if(i=t[e],Et&&Ct.indexOf(e)>=0)for(var r=0,s=Et.length;r<s;r++){var l=Et[r];if(!(n>=l))break;e in wt[l]&&(i=wt[l][e])}return"slideBy"===e&&"page"===i&&(i=o("items")),i}function g(e){return G?G+"("+100*e+"% / "+Yt+")":100*e/Yt+"%"}function O(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(Tt%(n+t)+t)/2+"px":ht?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=ht?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function D(e,t,n){return e?(e+t)*Yt+"px":G?G+"("+100*Yt+"% / "+n+")":100*Yt/n+"%"}function I(e,t,n){var i="";if(ht){if(i="width:",e)i+=e+t+"px";else{var a=st?Yt:n;i+=G?G+"(100% / "+a+")":100/a+"%"}i+=mn+";"}return i}function S(e){var t="";if(e!==!1){t=(ht?"padding-":"margin-")+(ht?"right":"bottom")+": "+e+"px;"}return t}function W(e){e=e||j.event,clearTimeout(kt),kt=setTimeout(function(){if(vt){var t=n();Ot!==t&&(Ot=t,H(),"outer"===Wt&&un.emit("outerResized",Ze(e)))}},100)}function H(){var e=Nt,t=en,n=It,i=pn;if(Tt=a(pt),dt=a(mt),Et&&L(),e!==Nt||zt){var r=Bt,s=Gt,c=zt,f=Lt,d=Ht,v=vn;if(It=o("items"),St=o("slideBy"),vn=o("disable"),pn=!!vn||!!hn&&xt<=It,It!==n&&(an=Yt-It,hi()),vn!==v&&_(vn),pn!==i&&(pn&&(en=st?Vt:0),z()),e!==Nt&&(Rt=o("speed"),Lt=o("edgePadding"),Ht=o("gutter"),zt=o("fixedWidth"),vn||zt===c||ye(),(Gt=o("autoHeight"))!==s&&(Gt||(mt.style.height=""))),Bt=!pn&&o("arrowKeys"),Bt!==r&&(Bt?A(R,Tn):k(R,Tn)),En){var h=Hn,p=Ln;Hn=!pn&&o("controls"),Ln=o("controlsText"),Hn!==h&&(Hn?C(zn):w(zn)),Ln!==p&&(Pn.innerHTML=Ln[0],In.innerHTML=Ln[1])}if(Nn){var m=Rn;Rn=!pn&&o("nav"),Rn!==m&&(Rn?(C(jn),Je()):w(jn))}if(An){var y=ui;ui=!pn&&o("touch"),ui!==y&&st&&(ui?A(yt,wn):k(yt,wn))}if(kn){var g=di;di=!pn&&o("mouseDrag"),di!==g&&st&&(di?A(yt,Cn):k(yt,Cn))}if(Dn){var b=$n,x=ni,T=ai,E=ti;if(pn?$n=ni=ai=!1:($n=o("autoplay"),$n?(ni=o("autoplayHoverPause"),ai=o("autoplayResetOnVisibility")):ni=ai=!1),ti=o("autoplayText"),_n=o("autoplayTimeout"),$n!==b&&($n?(ii&&C(ii),Kn||Jn||ke()):(ii&&w(ii),Kn&&Me())),ni!==x&&(ni?A(yt,bn):k(yt,bn)),ai!==T&&(ai?A(R,xn):k(R,xn)),ii&&ti!==E){var N=$n?1:0,M=ii.innerHTML,P=M.length-E[N].length;M.substring(P)===E[N]&&(ii.innerHTML=M.substring(0,P)+ti[N])}}if(!U){if(pn||Lt===f&&Ht===d||(mt.style.cssText=O(Lt,Ht,zt)),st&&ht&&(zt!==c||Ht!==d||It!==n)&&(yt.style.width=D(zt,Ht,It)),ht&&(It!==n||Ht!==d||zt!=c)){var W=I(zt,Ht,It)+S(Ht);Ft.removeRule(u(Ft)-1),l(Ft,"#"+dn+" > .tns-item",W,u(Ft))}zt||en!==t||be(0)}en!==t&&(un.emit("indexChanged",Ze()),be(0),tn=en),It!==n&&(ie(),le(),te(),navigator.msMaxTouchPoints&&oe())}ht||vn||(re(),Ke(),ye()),B(!0),te()}function L(){Nt=0,Et.forEach(function(e,t){Ot>=e&&(Nt=t+1)})}function z(){var e="tns-transparent";if(pn){if(!Pt){if(Lt&&(mt.style.margin="0px"),Vt)for(var t=Vt;t--;)st&&h(bt[t],e),h(bt[Yt-t-1],e);Pt=!0}}else if(Pt){if(Lt&&!zt&&U&&(mt.style.margin=""),Vt)for(var t=Vt;t--;)st&&p(bt[t],e),p(bt[Yt-t-1],e);Pt=!1}}function B(e){zt&&Lt&&(pn||Tt<=zt+Ht?"0px"!==mt.style.margin&&(mt.style.margin="0px"):e&&(mt.style.cssText=O(Lt,Ht,zt)))}function _(e){var t=bt.length;if(e){if(Ft.disabled=!0,yt.className=yt.className.replace(fn.substring(1),""),T(yt),qt)for(var n=Vt;n--;)st&&w(bt[n]),w(bt[t-n-1]);if(ht&&st||T(mt),!st)for(var i=en,a=en+xt;i<a;i++){var r=bt[i];T(r),p(r,lt),p(r,ft)}}else{if(Ft.disabled=!1,yt.className+=fn,ht||re(),ye(),qt)for(var n=Vt;n--;)st&&C(bt[n]),C(bt[t-n-1]);if(!st)for(var i=en,a=en+xt;i<a;i++){var r=bt[i],o=i<en+It?lt:ft;r.style.left=100*(i-en)/It+"%",h(r,o)}}}function ee(){if(Ut&&!vn){var e=en,t=en+It;for(Lt&&(e-=1,t+=1);e<t;e++)d(bt[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[J]=function(e){e.stopPropagation()},A(e,t),v(e,"loaded")||(e.src=y(e,"data-src"),h(e,"loaded"))})}}function te(){if(Gt&&!vn){for(var e=[],t=en,n=en+It;t<n;t++)d(bt[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?ae():ne(e)}}function ne(e){e.forEach(function(t,n){N(t)&&e.splice(n,1)}),0===e.length?ae():setTimeout(function(){ne(e)},16)}function ie(){ee(),se(),he(),Je(),ue()}function ae(){if(Gt){for(var e,t=[],n=en,i=en+It;n<i;n++)t.push(bt[n].offsetHeight);e=Math.max.apply(null,t),mt.style.height!==e&&(V&&pe(Rt),mt.style.height=e+"px")}}function re(){At=[0];for(var e,t=bt[0].getBoundingClientRect().top,n=1;n<Yt;n++)e=bt[n].getBoundingClientRect().top,At.push(e-t)}function oe(){pt.style.msScrollSnapPointsX="snapInterval(0%, "+100/It+"%)"}function se(){for(var e=en+Math.min(xt,It),t=Yt;t--;){var n=bt[t];t>=en&&t<e?m(n,"tabindex")&&(b(n,{"aria-hidden":"false"}),x(n,["tabindex"]),h(n,Mn)):(m(n,"tabindex")||b(n,{"aria-hidden":"true",tabindex:"-1"}),v(n,Mn)&&p(n,Mn))}}function le(){if(!st){for(var e=en+Math.min(xt,It),t=Yt;t--;){var n=bt[t];t>=en&&t<e?(h(n,"tns-moving"),n.style.left=100*(t-en)/It+"%",h(n,lt),p(n,ft)):n.style.left&&(n.style.left="",h(n,ft),p(n,lt)),p(n,ut)}setTimeout(function(){d(bt,function(e){p(e,"tns-moving")})},300)}}function ue(){if(Rn&&(Un=Fn!==-1?Fn:en%xt,Fn=-1,Un!==Xn)){var e=Bn[Xn],t=Bn[Un];b(e,{tabindex:"-1","aria-selected":"false"}),b(t,{tabindex:"0","aria-selected":"true"}),p(e,Vn),h(t,Vn)}}function ce(e){return e.nodeName.toLowerCase()}function fe(e){return"button"===ce(e)}function de(e){return"true"===e.getAttribute("aria-disabled")}function ve(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function he(){if(Hn&&!jt&&!qt){var e=Sn?Pn.disabled:de(Pn),t=Wn?In.disabled:de(In),n=en===nn,i=!jt&&en===an;n&&!e&&ve(Sn,Pn,!0),!n&&e&&ve(Sn,Pn,!1),i&&!t&&ve(Wn,In,!0),!i&&t&&ve(Wn,In,!1)}}function pe(e,t){e=e?e/1e3+"s":"",t=t||yt,t.style[V]=e,st||(t.style[K]=e),ht||(mt.style[V]=e)}function me(){var e;if(ht)if(zt)e=-(zt+Ht)*en+"px";else{var t=X?Yt:It;e=100*-en/t+"%"}else e=-At[en]+"px";return e}function ye(e){e||(e=me()),yt.style[Jt]=Zt+e+$t}function ge(e,t,n,i){for(var a=e,r=e+It;a<r;a++){var o=bt[a];i||(o.style.left=100*(a-en)/It+"%"),V&&pe(Rt,o),ct&&Y&&(o.style[Y]=o.style[Q]=ct*(a-e)/1e3+"s"),p(o,t),h(o,n),i&&Xt.push(o)}}function be(e,t){isNaN(e)&&(e=Rt),Kn&&!E(yt)&&(e=0),V&&pe(e),pi(e,t)}function xe(e,t){Qt&&hi(),(en!==tn||t)&&(un.emit("indexChanged",Ze()),un.emit("transitionStart",Ze()),Kn&&e&&["click","keydown"].indexOf(e.type)>=0&&Me(),sn=!0,be())}function Te(e){return e.toLowerCase().replace(/-/g,"")}function we(e){if(st||sn){if(un.emit("transitionEnd",Ze(e)),!st&&Xt.length>0)for(var t=0;t<It;t++){var n=Xt[t];n.style.left="",V&&pe(0,n),ct&&Y&&(n.style[Y]=n.style[Q]=""),p(n,ut),h(n,ft)}if(!e||!st&&e.target.parentNode===yt||e.target===yt&&Te(e.propertyName)===Te(Jt)){if(!Qt){var i=en;hi(),en!==i&&(un.emit("indexChanged",Ze()),V&&pe(0),ye())}te(),"inner"===Wt&&un.emit("innerLoaded",Ze()),sn=!1,Xn=Un,tn=en}}}function Ce(e,t){if(!pn)if("prev"===e)Ee(t,-1);else if("next"===e)Ee(t,1);else if(!sn){var n=en%xt,i=0;if(n<0&&(n+=xt),"first"===e)i=-n;else if("last"===e)i=xt-It-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%xt;a<0&&(a+=xt),i=a-n}en+=i,en%xt!=tn%xt&&xe(t)}}function Ee(e,t){if(!sn){var n;if(!t){e=e||j.event;for(var i=e.target||e.srcElement;i!==zn&&[Pn,In].indexOf(i)<0;)i=i.parentNode;var a=[Pn,In].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(jt){if(en===nn&&t===-1)return void Ce("last",e);if(en===an&&1===t)return void Ce(0,e)}t&&(en+=St*t,xe(n||e&&"keydown"===e.type?e:null))}}function Ne(e){if(!sn){e=e||j.event;for(var t,n=e.target||e.srcElement;n!==jn&&!m(n,"data-nav");)n=n.parentNode;m(n,"data-nav")&&(t=Fn=[].indexOf.call(Bn,n),Ce(t,e))}}function Oe(){Yn=setInterval(function(){Ee(null,ei)},_n),Kn=!0}function De(){clearInterval(Yn),Kn=!1}function Ae(e,t){b(ii,{"data-action":e}),ii.innerHTML=ri[0]+e+ri[1]+t}function ke(){Oe(),ii&&Ae("stop",ti[1])}function Me(){De(),ii&&Ae("start",ti[0])}function Pe(){$n&&!Kn&&(ke(),Jn=!1)}function Ie(){Kn&&(Me(),Jn=!0)}function Se(){Kn?(Me(),Jn=!0):(ke(),Jn=!1)}function We(){R.hidden?Kn&&(De(),Zn=!0):Zn&&(Oe(),Zn=!1)}function He(){Kn&&(De(),Qn=!0)}function Le(){Qn&&(Oe(),Qn=!1)}function ze(e){switch(e=e||j.event,e.keyCode){case q.LEFT:Ee(e,-1);break;case q.RIGHT:Ee(e,1)}}function Be(e){switch(e=e||j.event,e.keyCode){case q.LEFT:case q.UP:case q.PAGEUP:Pn.disabled||Ee(e,-1);break;case q.RIGHT:case q.DOWN:case q.PAGEDOWN:In.disabled||Ee(e,1);break;case q.HOME:Ce(0,e);break;case q.END:Ce(xt-1,e)}}function Re(e){e.focus()}function je(e){function n(e){return t.navContainer?e:qn[e]}var i=R.activeElement;if(m(i,"data-nav")){e=e||j.event;var a=e.keyCode,r=[].indexOf.call(Bn,i),o=qn.length,s=qn.indexOf(r);switch(t.navContainer&&(o=xt,s=r),a){case q.LEFT:case q.PAGEUP:s>0&&Re(Bn[n(s-1)]);break;case q.UP:case q.HOME:s>0&&Re(Bn[n(0)]);break;case q.RIGHT:case q.PAGEDOWN:s<o-1&&Re(Bn[n(s+1)]);break;case q.DOWN:case q.END:s<o-1&&Re(Bn[n(o-1)]);break;case q.ENTER:case q.SPACE:Fn=r,Ce(r,e)}}}function qe(){be(0,yt.scrollLeft()),tn=en}function Ge(e){return e.target||e.srcElement}function Fe(e){return e.type.indexOf("touch")>=0}function Ue(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Xe(e){if(!sn){e=e||j.event;var t;Fe(e)?(t=e.changedTouches[0],un.emit("touchStart",Ze(e))):(t=e,["img","a"].indexOf(ce(Ge(t)))>=0&&Ue(t),un.emit("dragStart",Ze(e))),ci=parseInt(t.clientX),fi=parseInt(t.clientY),oi=parseFloat(yt.style[Jt].replace(Zt,"").replace($t,""))}}function Ve(e){if(!sn&&null!==ci){e=e||j.event;var n=Fe(e)?e.changedTouches[0]:e;if(si=parseInt(n.clientX)-ci,li=parseInt(n.clientY)-fi,"?"===on&&(on=f(c(li,si),rn)===t.axis),on&&(Math.abs(si)>5||Math.abs(li)>5)){Fe(e)?un.emit("touchMove",Ze(e)):(vi||(vi=!0),un.emit("dragMove",Ze(e))),Mt||(Mt=!0);var i=oi;if(ht)if(zt)i+=si,i+="px";else{var a=X?si*It*100/(dt*Yt):100*si/dt;i+=a,i+="%"}else i+=li,i+="px";X&&pe(0),yt.style[Jt]=Zt+i+$t}}}function Ye(e){if(rn&&(on="?"),!sn)if(Mt){Mt=!1,e=e||j.event;var t;Fe(e)?(t=e.changedTouches[0],un.emit("touchEnd",Ze(e))):(t=e,un.emit("dragEnd",Ze(e))),si=parseInt(t.clientX)-ci,li=parseInt(t.clientY)-fi,ci=fi=null;var n=Boolean(ht?si:li);if(ht){var i=-si*It/dt;i=si>0?Math.floor(i):Math.ceil(i),en+=i}else{var a=-(oi+li);if(a<=0)en=nn;else if(a>=At[At.length-1])en=an;else{var r=0;do{r++,en=li<0?r+1:r}while(r<Yt&&a>=At[r+1])}}if(xe(e,n),vi){vi=!1;var o=Ge(e);A(o,{click:function e(t){Ue(t),k(o,{click:e})}})}}else ci=fi=null}function Ke(){mt.style.height=At[en+It]-At[en]+"px"}function Qe(){qn=[];for(var e=en%xt%It;e<xt;)!qt&&e+It>xt&&(e=xt-It),qn.push(e),e+=It;(qt&&qn.length*It<xt||!qt&&qn[0]>0)&&qn.unshift(0)}function Je(){Rn&&!On&&(Qe(),qn!==Gn&&(d(Bn,function(e,t){qn.indexOf(t)<0?w(e):C(e)}),Gn=qn))}function Ze(e){return{container:yt,slideItems:bt,navContainer:jn,navItems:Bn,controlsContainer:zn,hasControls:En,prevButton:Pn,nextButton:In,items:It,slideBy:St,cloneCount:Vt,slideCount:xt,slideCountNew:Yt,index:en,indexCached:tn,navCurrentIndex:Un,navCurrentIndexCached:Xn,visibleNavIndexes:qn,visibleNavIndexesCached:Gn,sheet:Ft,event:e||{}}}t=e({container:R.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1},t||{});for(var $e=j.console&&"function"==typeof j.console.warn,_e=["container","controlsContainer","navContainer","autoplayButton"],et=_e.length;et--;){var tt=_e[et];if("string"==typeof t[tt]){var nt=R.querySelector(t[tt]);if(!nt||!nt.nodeName)return void($e&&console.warn("Can't find",t[tt]));t[tt]=nt}}if(t.container.children&&t.container.children.length<1)return void($e&&console.warn("No slides found in",t.container));if(t.responsive){var it={},at=t.responsive;for(var rt in at){var ot=at[rt];it[rt]="number"==typeof ot?{items:ot}:ot}t.responsive=it,it=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var st="carousel"===t.mode;if(!st){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var lt="tns-fadeIn",ut="tns-fadeOut",ct=!1,ft=t.animateNormal||"tns-normal";J&&Z&&(lt=t.animateIn||lt,ut=t.animateOut||ut,ct=t.animateDelay||ct)}var dt,vt,ht="horizontal"===t.axis,pt=R.createElement("div"),mt=R.createElement("div"),yt=t.container,gt=yt.parentNode,bt=yt.children,xt=bt.length,Tt=a(gt),wt=t.responsive,Ct=[],Et=!1,Nt=0,Ot=n();if(wt){Et=Object.keys(wt).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),Et.forEach(function(e){Ct=Ct.concat(Object.keys(wt[e]))});var Dt=[];Ct.forEach(function(e){Dt.indexOf(e)<0&&Dt.push(e)}),Ct=Dt,L()}var At,kt,Mt,Pt,It=o("items"),St="page"===o("slideBy")?It:o("slideBy"),Wt=t.nested,Ht=o("gutter"),Lt=o("edgePadding"),zt=o("fixedWidth"),Bt=o("arrowKeys"),Rt=o("speed"),jt=t.rewind,qt=!jt&&t.loop,Gt=o("autoHeight"),Ft=s(),Ut=t.lazyload,Xt=[],Vt=qt?2*xt:0,Yt=st?xt+2*Vt:xt+Vt,Kt=!(!zt||qt||Lt),Qt=!st||!qt,Jt=ht?"left":"top",Zt="",$t="",_t=o("startIndex"),en=_t?function(e){return e%=xt,e<0&&(e+=xt),e=Math.min(e,Yt-It)}(_t):st?Vt:0,tn=en,nn=0,an=Yt-It,rn=t.swipeAngle,on=!rn||"?",sn=!1,ln=t.onInit,un=new M,cn=yt.id,fn=" tns-slider tns-"+t.mode,dn=yt.id||i(),vn=o("disable"),hn=t.freezable,pn=!!vn||!!hn&&xt<=It,mn="inner"===Wt?" !important":"",yn={click:Ee,keydown:Be},gn={click:Ne,keydown:je},bn={mouseover:He,mouseout:Le},xn={visibilitychange:We},Tn={keydown:ze},wn={touchstart:Xe,touchmove:Ve,touchend:Ye,touchcancel:Ye},Cn={mousedown:Xe,mousemove:Ve,mouseup:Ye,mouseleave:Ye},En=r("controls"),Nn=r("nav"),On=t.navAsThumbnails,Dn=r("autoplay"),An=r("touch"),kn=r("mouseDrag"),Mn="tns-slide-active";if(En)var Pn,In,Sn,Wn,Hn=o("controls"),Ln=o("controlsText"),zn=t.controlsContainer;if(Nn)var Bn,Rn=o("nav"),jn=t.navContainer,qn=[],Gn=qn,Fn=-1,Un=en%xt,Xn=Un,Vn="tns-nav-active";if(Dn)var Yn,Kn,Qn,Jn,Zn,$n=o("autoplay"),_n=o("autoplayTimeout"),ei="forward"===t.autoplayDirection?1:-1,ti=o("autoplayText"),ni=o("autoplayHoverPause"),ii=t.autoplayButton,ai=o("autoplayResetOnVisibility"),ri=["<span class='tns-visually-hidden'>"," animation</span>"];if(An)var oi,si,li,ui=o("touch"),ci=null,fi=null;if(kn)var di=o("mouseDrag"),vi=!1;pn&&(Hn=Rn=ui=di=Bt=$n=ni=ai=!1),X&&(Jt=X,Zt="translate",Zt+=ht?"X(":"Y(",$t=")"),function(){pt.appendChild(mt),gt.insertBefore(pt,yt),mt.appendChild(yt),dt=a(mt);var e="tns-outer",n="tns-inner",i=r("gutter");if(st?ht&&(r("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),pt.className=e,mt.className=n,mt.id=dn+"-iw",Gt&&(mt.className+=" tns-ah",mt.style[V]=Rt/1e3+"s"),""===yt.id&&(yt.id=dn),fn+=F?" tns-subpixel":" tns-no-subpixel",fn+=G?" tns-calc":" tns-no-calc",st&&(fn+=" tns-"+t.axis),yt.className+=fn,st&&J){var s={};s[J]=we,A(yt,s)}e=n=null;for(var c=0;c<xt;c++){var f=bt[c];f.id||(f.id=dn+"-item"+c),h(f,"tns-item"),!st&&ft&&h(f,ft),b(f,{"aria-hidden":"true",tabindex:"-1"})}if(qt||Lt){for(var v=R.createDocumentFragment(),m=R.createDocumentFragment(),y=Vt;y--;){var T=y%xt,C=bt[T].cloneNode(!0);if(x(C,"id"),m.insertBefore(C,m.firstChild),st){var E=bt[xt-1-T].cloneNode(!0);x(E,"id"),v.appendChild(E)}}yt.insertBefore(v,yt.firstChild),yt.appendChild(m),bt=yt.children}for(var N=en,k=en+Math.min(xt,It);N<k;N++){var f=bt[N];b(f,{"aria-hidden":"false"}),x(f,["tabindex"]),h(f,Mn),st||(f.style.left=100*(N-en)/It+"%",h(f,lt),p(f,ft))}if(st&&ht&&(F?(l(Ft,"#"+dn+" > .tns-item","font-size:"+j.getComputedStyle(bt[0]).fontSize+";",u(Ft)),l(Ft,"#"+dn,"font-size:0;",u(Ft))):d(bt,function(e,t){e.style.marginLeft=g(t)})),U){var M=O(t.edgePadding,t.gutter,t.fixedWidth);l(Ft,"#"+dn+"-iw",M,u(Ft)),st&&ht&&(M="width:"+D(t.fixedWidth,t.gutter,t.items),l(Ft,"#"+dn,M,u(Ft))),(ht||t.gutter)&&(M=I(t.fixedWidth,t.gutter,t.items)+S(t.gutter),l(Ft,"#"+dn+" > .tns-item",M,u(Ft)))}else if(mt.style.cssText=O(Lt,Ht,zt),st&&ht&&(yt.style.width=D(zt,Ht,It)),ht||Ht){var M=I(zt,Ht,It)+S(Ht);l(Ft,"#"+dn+" > .tns-item",M,u(Ft))}if(ht||vn||(re(),Ke()),wt&&U&&Et.forEach(function(e){var t=wt[e],n="",i="",a="",s="",l=o("items",e),u=o("fixedWidth",e),c=o("edgePadding",e),f=o("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+dn+"-iw{"+O(c,f,u)+"}"),st&&ht&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(a="#"+dn+"{width:"+D(u,f,l)+"}"),("fixedWidth"in t||r("fixedWidth")&&"gutter"in t||!st&&"items"in t)&&(s+=I(u,f,l)),"gutter"in t&&(s+=S(f)),s.length>0&&(s="#"+dn+" > .tns-item{"+s+"}"),n=i+a+s,n.length>0&&Ft.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",Ft.cssRules.length)}),st&&!vn&&ye(),navigator.msMaxTouchPoints&&(h(pt,"ms-touch"),A(pt,{scroll:qe}),oe()),Nn){var P=st?Vt:0;if(jn)b(jn,{"aria-label":"Carousel Pagination"}),Bn=jn.children,d(Bn,function(e,t){b(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":bt[P+t].id})});else{for(var L="",q=On?"":" hidden",N=0;N<xt;N++)L+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+bt[P+N].id+q+'" type="button"></button>';L='<div class="tns-nav" aria-label="Carousel Pagination">'+L+"</div>",pt.insertAdjacentHTML("afterbegin",L),jn=pt.querySelector(".tns-nav"),Bn=jn.children}if(Je(),V){var X=V.substring(0,V.length-18).toLowerCase(),M="transition: all "+Rt/1e3+"s";X&&(M="-"+X+"-"+M),l(Ft,"[aria-controls^="+dn+"-item]",M,u(Ft))}b(Bn[Un],{tabindex:"0","aria-selected":"true"}),h(Bn[Un],Vn),A(jn,gn),Rn||w(jn)}if(Dn){var Y=$n?"stop":"start";ii?b(ii,{"data-action":Y}):t.autoplayButtonOutput&&(mt.insertAdjacentHTML("beforebegin",'<button data-action="'+Y+'" type="button">'+ri[0]+Y+ri[1]+ti[0]+"</button>"),ii=pt.querySelector("[data-action]")),ii&&A(ii,{click:Se}),$n?(ke(),ni&&A(yt,bn),ai&&A(yt,xn)):ii&&w(ii)}En&&(zn?(Pn=zn.children[0],In=zn.children[1],b(zn,{"aria-label":"Carousel Navigation",tabindex:"0"}),b(Pn,{"data-controls":"prev"}),b(In,{"data-controls":"next"}),b(zn.children,{"aria-controls":dn,tabindex:"-1"})):(pt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+dn+'" type="button">'+Ln[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+dn+'" type="button">'+Ln[1]+"</button></div>"),zn=pt.querySelector(".tns-controls"),Pn=zn.children[0],In=zn.children[1]),Sn=fe(Pn),Wn=fe(In),he(),A(zn,yn),Hn||w(zn)),ui&&A(yt,wn),di&&A(yt,Cn),Bt&&A(R,Tn),"inner"===Wt?un.on("outerResized",function(){H(),un.emit("innerLoaded",Ze())}):(A(j,{resize:W}),"outer"===Wt&&un.on("innerLoaded",te)),ee(),te(),z(),B(),un.on("indexChanged",ie),"function"==typeof ln&&ln(Ze()),"inner"===Wt&&un.emit("innerLoaded",Ze()),vn&&_(!0),vt=!0}();var hi=function(){return qt?function(){var e=nn,t=an;if(st)if(e+=St,t-=St,Lt)e+=1,t-=1;else if(zt){var n=Ht?Ht:0;Tt%(zt+n)>n&&(t-=1)}if(en>t)for(;en>=e+xt;)en-=xt;else if(en<e)for(;en<=t-xt;)en+=xt}:function(){en=Math.max(nn,Math.min(an,en))}}(),pi=function(){return st?function(e,t){t||(t=me()),Kt&&en===an&&(t=-((zt+Ht)*Yt-dt)+"px"),V||!e?(ye(t),e&&E(yt)||we()):P(yt,Jt,Zt,$t,t,Rt,we),ht||Ke()}:function(e){Xt=[];var t={};t[J]=t[Z]=we,k(bt[tn],t),A(bt[en],t),ge(tn,lt,ut,!0),ge(en,ft,lt),J&&Z&&e||we()}}();return{getInfo:Ze,events:un,goTo:Ce,play:Pe,pause:Ie,isOn:vt,updateSliderHeight:ae,rebuild:function(){return $(t)},destroy:function(){if(k(j,{resize:W}),k(R,Tn),Ft.disabled=!0,qt)for(var e=Vt;e--;)st&&bt[0].remove(),bt[bt.length-1].remove();var n=["tns-item",Mn];st||(n=n.concat("tns-normal",lt));for(var i=xt;i--;){var a=bt[i];a.id.indexOf(dn+"-item")>=0&&(a.id=""),n.forEach(function(e){p(a,e)})}if(x(bt,["style","aria-hidden","tabindex"]),bt=dn=xt=Yt=Vt=null,Hn&&(k(zn,yn),t.controlsContainer&&(x(zn,["aria-label","tabindex"]),x(zn.children,["aria-controls","aria-disabled","tabindex"])),zn=Pn=In=null),Rn&&(k(jn,gn),t.navContainer&&(x(jn,["aria-label"]),x(Bn,["aria-selected","aria-controls","tabindex"])),jn=Bn=null),$n&&(clearInterval(Yn),ii&&k(ii,{click:Se}),k(yt,bn),k(yt,xn),t.autoplayButton&&x(ii,["data-action"])),yt.id=cn||"",yt.className=yt.className.replace(fn,""),T(yt),st&&J){var r={};r[J]=we,k(yt,r)}k(yt,wn),k(yt,Cn),gt.insertBefore(yt,pt),pt.remove(),pt=mt=yt=en=tn=It=St=Un=Xn=En=qn=Gn=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=vt=!1}}};return $}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{50381:function(e,s,t){"use strict";var r=t(91706),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,s){var t,o,i,l,n,c,_=!1;s||(s={}),t=s.debug||!1;try{if(i=r(),l=document.createRange(),n=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),s.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[s.format]||a.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(s.format,e);s.onCopy&&(r.preventDefault(),s.onCopy(r.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),n.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");_=!0}catch(d){t&&console.error("unable to copy using execCommand: ",d),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(s.format||"text",e),s.onCopy&&s.onCopy(window.clipboardData),_=!0}catch(d){t&&console.error("unable to copy using clipboardData: ",d),t&&console.error("falling back to prompt"),o=function(e){var s=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,s)}("message"in s?s.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{n&&("function"==typeof n.removeRange?n.removeRange(l):n.removeAllRanges()),c&&document.body.removeChild(c),i()}return _}},96844:function(e,s,t){"use strict";t.r(s)},11962:function(e,s,t){"use strict";t.r(s)},70572:function(e,s,t){"use strict";t.r(s)},86988:function(e,s,t){"use strict";t.r(s)},8205:function(e,s,t){"use strict";t.r(s)},77689:function(e,s,t){"use strict";t.r(s)},14964:function(e,s,t){"use strict";t.r(s)},55331:function(e,s,t){"use strict";t.r(s)},51559:function(e,s,t){"use strict";t.r(s)},35936:function(e,s,t){"use strict";t.r(s)},24267:function(e,s,t){"use strict";t.d(s,{Q:function(){return r}});const r=t(2784).createContext({})},2775:function(e,s,t){"use strict";function r(){return r=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(s,{w:function(){return ce}});var a=t(37328),o=t(96670),i=t(26297),l=t(52322),n=t(56036),c=t(39097),_=t.n(c),d=t(5632),m=t.n(d),p=t(84501),f=t.n(p),b=t(2784),h=t(30976),u=t(34236),g=t(9861),x=t(61342),w=t(35314),v=t(56448),j=t(5146),y=t(26189),k=t(5982),z=t(36475),N=t(46318),q=t(5943),C=t(79751),R=t(53569),L=t(52443),T=t(18585),Z=t(50381),S=t.n(Z),B=t(34989),$=t(65603),E=t(29688);const F=(0,b.forwardRef)(((e,s)=>{const{className:t,children:r,id:a,showLineNumbers:o=!1,isHero:i=!1,isCollapsible:n=!1,isHighlightingLines:c}=e,{0:_,1:d}=(0,b.useState)(i||n),{0:m,1:p}=(0,b.useState)(!1),{0:f,1:u}=(0,b.useState)(void 0),g=(0,b.useRef)(null);return(0,b.useEffect)((()=>{if(g.current){const e=g.current.querySelector("code");if(e){const s=e.innerText.replace(/\n{3,}/g,"\n");u(s)}}}),[g]),(0,b.useEffect)((()=>{m&&f&&S()(f);const e=setTimeout((()=>p(!1)),1500);return()=>{clearTimeout(e)}}),[m]),(0,l.jsxs)("div",{ref:s,className:(0,E.concatClassName)(" _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey  _mb-1ioq2s6 _pos-1ypdr05  "+(i?"  _mr-wr1zjg _ml-1rqe7ph _pr-4rm8mg _pl-1f95fv9":" ")+" "+(i?"  _mr-_gtMd_wr1zm1 _ml-_gtMd_1rqe7s2":" ")),children:[n&&(0,l.jsx)("div",{className:" _r-1bubeif _t-1i9d921 _jc-1lct8eo _pos-11f8u5c _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-tnn163 _fs-vf3l72 _ai-17do05s _r-_gtMd_1bubeja ",children:(0,l.jsx)(j.zx,{accessibilityLabel:"Show or hide code",size:"$2",paddingRight:"_pr-4rm8kq",paddingLeft:"_pl-1f95ftj",height:"_h-1ukajx7",borderTopLeftRadius:"_btlr-14fwd1r",borderTopRightRadius:"_btrr-jibzt8",borderBottomRightRadius:"_bbrr-wuhapm",borderBottomLeftRadius:"_bblr-10aeuox",onPress:()=>d((e=>!e)),children:_?"Show code":"Hide code"})}),(!_||!n)&&(0,l.jsxs)("div",{className:" _pos-1ypdr05 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,l.jsx)($.S,{ref:g,"data-invert-line-highlight":c,"data-line-numbers":o,className:t,p:0,mb:0,id:a,children:(0,l.jsx)(h.ScrollView,{style:{width:"100%"},contentContainerStyle:{minWidth:"100%"},horizontal:!0,showsHorizontalScrollIndicator:!1,children:(0,l.jsx)(C.E,{p:"$4",backgroundColor:"transparent",f:1,className:t,children:r})})}),(0,l.jsx)(B.w6,{label:m?"Copied":"Copy to clipboard",children:(0,l.jsx)(j.zx,{"aria-label":"Copy code to clipboard",position:"_pos-11f8u5c",size:"$2",display:"_disp-tnn163",right:"_r-1bubefu",top:"_t-n03vpv",paddingRight:"_pr-4rm8kq",paddingLeft:"_pl-1f95ftj",height:"_h-1ukajx7",borderTopLeftRadius:"_btlr-14fwd1r",borderTopRightRadius:"_btrr-jibzt8",borderBottomRightRadius:"_bbrr-wuhapm",borderBottomLeftRadius:"_bblr-10aeuox",icon:m?L.f:T.T,onPress:()=>p(!0),className:" copy-code _disp-_sm_sd4vsq "})})]})]})}));t(96844);var A=t(39170),D=t(45482);const P=(0,D.z)(w.FA,{elevation:"$6",borderTopLeftRadius:"_btlr-14fwd3h",borderTopRightRadius:"_btrr-jibzuy",borderBottomRightRadius:"_bbrr-wuharc",borderBottomLeftRadius:"_bblr-10aeuqn",minHeight:"_mih-vams1r",backgroundColor:"_bc-ea1zmt",minWidth:"_miw-1isr2cd",overflowX:"_ovx-wili9s",overflowY:"_ovy-1b6zsht",justifyContent:"_jc-3mx9pa",alignItems:"_ai-17do05s",transform:"_transform-w2ytz6"});t(86988);var H=t(2712),W=t(12070),I=t(46642),M=t(7517),O=t(24920),Q=t(71714),V=t(85328);var U=e=>{var{items:s}=e,t=(0,i.Z)(e,["items"]);return(0,l.jsx)(w.FA,(0,o.Z)((0,a.Z)({space:!0},t),{className:(0,E.concatClassName)(t&&t.className||"",t),children:s.map(((e,s)=>(0,l.jsxs)("li",{className:" _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,l.jsx)(V.f,{}),(0,l.jsx)("p",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _ussel-1k4z3v8 _col-tdgfk3 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:e})]},s)))}))};t(11962);var X=t(24267),Y=t(22532);const G=" _ml-1bhu2ba _o-nk7nd8 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",K=" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",J=" _zi-oiltw7 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ";t(8205);t(70572);const ee=(0,D.z)(x.n,{display:"list-item",tag:"li",pb:"$1"});var se=t(82810);function te(e){return b.Children.toArray(e).map((e=>{var s;return(null===e||void 0===e||null===(s=e.props)||void 0===s?void 0:s.children)?e.props.children:e}))}t(14964);const re=(0,D.z)(w.FA,{name:"OffsetBox",variants:{size:{hero:{$gtSm:{mx:"$-2"},$gtMd:{mx:"$-4"},$gtLg:{mx:"$-6"}}}}}),ae=e=>(0,l.jsx)(w.FA,(0,o.Z)((0,a.Z)({"data-preview":!0,alignItems:"_ai-1hnykjt",position:"_pos-1ypdr05",paddingLeft:"_pl-1f95fue",paddingBottom:"_pb-rnl9q1",paddingRight:"_pr-4rm8ll",paddingTop:"_pt-12emb0i",marginBottom:"_mb-1pkuzwi",borderTopRightRadius:"_btrr-jibzu3",borderTopLeftRadius:"_btlr-14fwd2m",borderLeftColor:"_blc-11gd9tv",borderBottomColor:"_bbc-1gkdz6n",borderRightColor:"_brc-lv4h9i",borderTopColor:"_btc-1ubgvm5",borderRightStyle:"_brs-r2rbii",borderLeftStyle:"_bls-69w1u5",borderTopStyle:"_bts-j2x5vn",borderBottomStyle:"_bbs-1d05hm9",borderLeftWidth:"_blw-np9skm",borderBottomWidth:"_bbw-he1b7u",borderRightWidth:"_brw-1737c2r",borderTopWidth:"_btw-1k5vq58",overflowY:"_ovy-z14anv",overflowX:"_ovx-67htlo",marginTop:"_mt-3qj9ch",marginRight:"_mr-wqi8oa",marginLeft:"_ml-1slqrlv"},e),{className:(0,E.concatClassName)(e&&e.className||"",e)}));t(55331);var oe=t(84786);const ie=" _maw-ao3bcm _w-1c386nm _transform-fx81n7 _mb-1ioq2qg _mt-ubbt46 _ml-dig7oy _mr-16at4rv _als-vgomwk _mah-ksh38t _h-18bv641 _fg-15m5m9x _brs-r2rbii _bls-69w1u5 _bts-j2x5vn _bbs-1d05hm9 _blw-np9rtx _bbw-he1b7u _brw-1737bc2 _btw-1k5vpej _fs-vf3l73 _blc-11gd9tv _bbc-1gkdz6n _brc-lv4h9i _btc-1ubgvm5 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey ";(0,D.z)(w.sL,{display:"table-cell",tag:"td",paddingTop:10});t(51559);var le=t(89187);const ne=(0,D.z)(w.FA,{tag:"ul",my:"$1",ml:"$4",mr:"$2"});var ce=(0,o.Z)((0,a.Z)({Spacer:u.LZ,ExampleAnimations:H.q,ScrollView:h.ScrollView,Text:g.x,Paragraph:x.n,OffsetBox:re,YStack:w.FA,XStack:w.sL,BenchmarkChart:q.i,Separator:v.Z,Code:C.E,HeroContainer:function(e){let{children:s,demoMultiple:t,smaller:r,noPad:a,alignItems:o}=e;return(0,l.jsx)(w.FA,{display:"_disp-sczph7",position:"_pos-1ypdr05",marginBottom:"_mb-1ioq2s6",marginTop:"_mt-ubbt5w",alignItems:o||"center",borderBottomLeftRadius:"_bblr-10aeuqn",borderBottomRightRadius:"_bbrr-wuharc",borderTopRightRadius:"_btrr-jibzuy",borderTopLeftRadius:"_btlr-14fwd3h",transform:"_transform-w2ytz6",minHeight:"_mih-vb5ao2",paddingBottom:"_pb-eae2il",paddingTop:"_pt-cp1r1h",justifyContent:"_jc-3mx9pa",className:(0,E.concatClassName)(" hero-gradient hero-scroll "+(a?"  _pt-bv6eyc _pb-15pd5p8":" ")+" "+(r?"  _mr-_gtMd_wqi8oa _ml-_gtMd_1slqrlv":" ")+" "+(r?" ":"  _mr-_gtMd_wr1zjg _ml-_gtMd_1rqe7ph")),children:t?(0,l.jsx)("div",{className:" _jc-1y9vvh3 _maw-1amdtsm _mah-58okn3 _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsxs)(w.sL,{space:"$3",paddingRight:"_pr-4rm8pw",paddingLeft:"_pl-1f95fyp",children:[(0,l.jsx)(z.Q,{name:"blue",children:(0,l.jsx)(P,{children:s})}),(0,l.jsx)(z.Q,{name:"red",children:(0,l.jsx)(P,{children:s})}),(0,l.jsx)(z.Q,{name:"pink",children:(0,l.jsx)(P,{children:s})}),(0,l.jsx)(z.Q,{name:"orange",children:(0,l.jsx)(P,{children:s})}),(0,l.jsx)(z.Q,{name:"green",children:(0,l.jsx)(P,{children:s})}),(0,l.jsx)(z.Q,{name:"yellow",children:(0,l.jsx)(P,{children:s})})]})}):s})}},R),{Highlights:function(e){let{features:s,disableLinks:t}=e;const r=(0,d.useRouter)(),a=b.useContext(X.Q);return(0,l.jsxs)("div",{className:" _fg-15m5m9x _mb-1ioq2qg _mt-ubbt46 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l73 _ai-o35pey _fd-_gtSm_1w148es ",children:[(0,l.jsxs)("div",{className:" _mih-va4awu _fg-15m5m9x _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l73 _ai-o35pey _mr-_gtSm_16at4sq _fg-_gtSm_15m5m9x _fs-_gtSm_vf3l73 ",children:[(0,l.jsx)("h2",{className:" _ussel-1k4z3v8 _lh-1rbdj2u _fos-m9py11 _letsp-1tlc5xs _col-f1vuru _fow-1lznnsh _ml-1slqrlv _mb-1ioq2qg _mr-wqi8oa _mt-3qj9ch _fofam-dqglny _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"Features"}),(0,l.jsx)(w.FA,{tag:"ul",marginLeft:"_ml-1slqrlv",marginBottom:"_mb-fob1un",marginRight:"_mr-wqi8oa",marginTop:"_mt-3qj9ch",paddingTop:"_pt-bv6eyc",paddingRight:"_pr-va8vyl",paddingBottom:"_pb-15pd5p8",paddingLeft:"_pl-wh8dj4",space:!0,children:(0,l.jsx)(U,{space:"$2",items:s})})]}),!t&&(0,l.jsxs)(w.FA,{space:"$3",tag:"nav","aria-labelledby":"site-component-info-header",children:[(0,l.jsx)("div",{className:" _pe-892hgu _o-k3ic96 _ovy-1b6zsht _ovx-wili9s _zi-72oqho _ml-dut0qp _mb-1nqr1r9 _mr-ke1hh6 _mt-18tdrzn _h-18bv6uq _w-1c387eb _pos-11f8u5c _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsx)("h2",{id:"site-component-info-heading",children:"Component Reference Links"})}),(0,l.jsx)("div",{className:" _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-17do05s ",children:(0,l.jsxs)(O.Ph,{size:"$2",value:a.version,onValueChange:e=>r.push("./".concat(a.name,"/").concat(e)),children:[(0,l.jsx)(O.Ph.Trigger,{w:200,iconAfter:W._,children:(0,l.jsx)(O.Ph.Value,{placeholder:"Something"})}),(0,l.jsxs)(O.Ph.Content,{children:[(0,l.jsxs)(O.Ph.ScrollUpButton,{ai:"center",jc:"center",pos:"relative",w:"100%",h:"$3",children:[(0,l.jsx)("div",{className:J,children:(0,l.jsx)(I.K,{size:20})}),(0,l.jsx)(Q.o,{end:"_end-1dju2gq",start:"_start-lryioi",fullscreen:!0,position:"_pos-11f8u5c",top:"_t-1ko9whv",left:"_l-wzdu9",right:"_r-1ba2x7g",bottom:"_b-14cfui5",colors:["$background","$backgroundTransparent"]})]}),(0,l.jsx)(O.Ph.Viewport,{minWidth:180,children:(a.versions||[]).map(((e,s)=>(0,l.jsx)(O.Ph.Item,{index:s,value:e,children:(0,l.jsx)(O.Ph.ItemText,{children:e})},e)))}),(0,l.jsxs)(O.Ph.ScrollDownButton,{ai:"center",jc:"center",pos:"relative",w:"100%",h:"$3",children:[(0,l.jsx)("div",{className:J,children:(0,l.jsx)(W._,{size:20})}),(0,l.jsx)(Q.o,{end:"_end-1dju2gq",start:"_start-lryioi",fullscreen:!0,position:"_pos-11f8u5c",top:"_t-1ko9whv",left:"_l-wzdu9",right:"_r-1ba2x7g",bottom:"_b-14cfui5",colors:["$backgroundTransparent","$background"]})]})]})]})}),(0,l.jsx)("div",{className:" _transform-16h52km _mah-ksh38t _h-18bv641 _fg-15m5m9x _brs-r2rbii _bls-69w1u5 _bts-j2x5vn _bbs-1d05hm9 _blw-np9rtx _bbw-he1b7u _brw-1737bc2 _btw-1k5vpej _fs-vf3l73 _blc-11gd9tv _bbc-1gkdz6n _brc-lv4h9i _btc-1ubgvm5 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey "}),(0,l.jsxs)(w.FA,{marginBottom:"_mb-1ioq2s6",space:"$1",children:[(0,l.jsx)(Y.r,{href:"https://github.com/tamagui/tamagui/tree/master/packages/tamagui/src/views/".concat(a.component,".tsx"),target:"_blank",children:(0,l.jsxs)(w.sL,{alignItems:"_ai-17do05s",space:"$1",children:[(0,l.jsx)("span",{className:K,children:"View source"}),(0,l.jsx)("div",{className:G,children:(0,l.jsx)(M.d,{size:12,color:"var(--colorHover)"})})]})}),(0,l.jsx)(Y.r,{href:"https://www.npmjs.com/package/tamagui",target:"_blank",children:(0,l.jsxs)(w.sL,{alignItems:"_ai-17do05s",space:"$1",children:[(0,l.jsx)("span",{className:K,children:"View on npm"}),(0,l.jsx)("div",{className:G,children:(0,l.jsx)(M.d,{size:12,color:"var(--colorHover)"})})]})}),(0,l.jsx)(Y.r,{href:"https://github.com/tamagui/tamagui/issues/new/choose",target:"_blank",children:(0,l.jsxs)(w.sL,{alignItems:"_ai-17do05s",space:"$1",children:[(0,l.jsx)("span",{className:K,children:"Report an issue"}),(0,l.jsx)("div",{className:G,children:(0,l.jsx)(M.d,{size:12,color:"var(--colorHover)"})})]})}),a.aria&&(0,l.jsx)("div",{className:" _mb-1ioq2qg _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsx)(Y.r,{theme:"blue",href:a.aria,target:"_blank",children:(0,l.jsxs)("div",{className:" _pos-1ypdr05 _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,l.jsx)(z.Q,{name:"alt1",children:(0,l.jsx)("p",{className:" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _ussel-1k4z3v8 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"ARIA design pattern"})}),(0,l.jsx)("div",{className:" _ml-dig7md _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsx)(z.Q,{name:"alt2",children:(0,l.jsx)("span",{className:" _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-1ffesbf ",children:(0,l.jsx)(M.d,{size:12,color:"var(--color)"})})})})]})})})]})]})]})},PropsTable:function(e){let{data:s,"aria-label":t,"aria-labelledby":r}=e;const a=!(!t&&!r);return(0,l.jsxs)("div",{"aria-label":a?t:"Component Props","aria-labelledby":r,className:" _fg-15m5m9x _blc-11gd9tv _bbc-1gkdz6n _brc-lv4h9i _btc-1ubgvm5 _brs-r2rbii _bls-69w1u5 _bts-j2x5vn _bbs-1d05hm9 _blw-np9skm _bbw-he1b7u _brw-1737c2r _btw-1k5vq58 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l73 _ai-o35pey _ml-1rqe7ph _mr-wr1zjg _ovy-1b6zsht _ovx-wili9s _bblr-10aeuqn _bbrr-wuharc _btrr-jibzuy _btlr-14fwd3h _mt-ubbt5w _mb-1ioq2s6 _mr-_sm_wqi8oa _ml-_sm_1slqrlv ",children:[(0,l.jsx)("div",{className:" _bc-11htjns _pl-1f95fv9 _pr-4rm8mg _pb-rnl9ob _pt-12emazn _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-17do05s ",children:(0,l.jsx)("h3",{className:" _ussel-1k4z3v8 _lh-1097201 _fos-9gr3ie _letsp-1h6t8gf _fow-1co50rc _textTransform-6qyi9u _col-kn6374 _ml-1slqrlv _mb-fob1un _mr-wqi8oa _mt-3qj9ch _fofam-1kcsehy _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"Props"})}),s.map(((e,s)=>{let{name:t,type:r,required:a,default:o,description:i}=e;return(0,l.jsxs)(oe.HC,{paddingTop:"_pt-bv6eyc",paddingRight:"_pr-va8vyl",paddingBottom:"_pb-15pd5p8",paddingLeft:"_pl-wh8dj4",children:[(0,l.jsxs)("div",{className:" _w-1y5rwnu _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,l.jsxs)("div",{className:" _pl-1f95fv9 _pr-4rm8mg _pb-rnl9p6 _pt-12emb0i _pos-1ypdr05 _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey _fd-_sm_1fwxi70 ",children:[(0,l.jsx)("div",{className:" _b-14cfui5 _r-1ba2x7g _l-wzdu9 _t-1ko9whv _pos-11f8u5c _o-nk7nd8 _zi-oiltss _bc-ea1zmt _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey "}),(0,l.jsx)(w.sL,{alignItems:"_ai-17do05s",minWidth:"_miw-1yhvnmc",space:!0,children:(0,l.jsxs)("h4",{className:" _ussel-1k4z3v8 _lh-19e24ag _fos-s1rvl3 _letsp-1m8xia8 _w-1827bqs _textTransform-1knq7p3 _fow-1lznnsh _col-f1vuru _ml-1slqrlv _mb-fob1un _mr-wqi8oa _mt-3qj9ch _fofam-jiij8v _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:[t,a?(0,l.jsxs)("span",{className:" _lh-1rbdj14 _letsp-1tlc5w2 _fow-1j6oylj _col-f1vuru _ussel-1k4z3v8 _o-nk7nd8 _fos-jgrrwr _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:[" ",(0,l.jsx)("span",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _col-f1vuru _ussel-1k4z3v8 _fow-1lznk30 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"(required)"})]}):null]})}),(0,l.jsx)("div",{className:ie}),(0,l.jsxs)(w.sL,{alignItems:"_ai-17do05s",minWidth:"_miw-1yhvnmc",flexGrow:"_fg-15m5m9y",flexShrink:"_fs-vf3l73",separator:(0,l.jsx)("div",{className:ie}),className:" _ai-_xs_1hnykjt _fd-_xs_1fwxi70 ",children:[(0,l.jsx)("p",{className:" _lh-19e248q _fos-s1rvjd _letsp-1m8xi8i _fow-1wni3ux _col-f1vuru _ussel-1k4z3v8 _whiteSpace-h2k65k _textOverflow-1so3e3k _maw-1amdtsm _mr-kf03b1 _ovy-1b6zsht _ovx-wili9s _o-nk7ndb _cur-1gpc3n _fofam-jiij8v _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:r}),(0,l.jsx)("div",{className:" _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-17do05s ",children:Boolean(o)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _ussel-1k4z3v8 _o-nk7nd8 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"Default:\xa0"}),(0,l.jsx)(C.E,{my:"$-1",bc:"$backgroundPress",children:o})]}):null})]})]}),!!i&&(0,l.jsx)("div",{className:" _pl-1f95fv9 _pr-4rm8mg _pb-rnl9ob _pt-12emazn _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsx)("p",{className:" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _ussel-1k4z3v8 _o-k3gkp4 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:i})})]}),(0,l.jsx)("div",{className:" _transform-16h52km _mb-fob3c1 _mt-3qjatv _mah-ksh38t _h-18bv641 _fg-15m5m9x _brs-r2rbii _bls-69w1u5 _bts-j2x5vn _bbs-1d05hm9 _blw-np9rtx _bbw-he1b7u _brw-1737bc2 _btw-1k5vpej _fs-vf3l73 _blc-11gd9tv _bbc-1gkdz6n _brc-lv4h9i _btc-1ubgvm5 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey "})]},"".concat(t,"-").concat(s))}))]})},Description:le.D,UL:ne,LI:ee,DeployToVercel:()=>(0,l.jsx)("a",{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftamagui%2Fstarters&root-directory=next-expo-solito/next&envDescription=Set%20this%20environment%20variable%20to%201%20for%20Turborepo%20to%20cache%20your%20node_modules.&envLink=https%3A%2F%2Ftamagui.dev&project-name=tamagui-app&repo-name=tamagui-app&demo-title=Tamagui%20App%20%E2%9A%A1%EF%B8%8F&demo-description=Tamagui%20React%20Native%20%2B%20Next.js%20starter&demo-url=https%3A%2F%2Ftamagui.dev%2Fstarter&demo-image=https%3A%2F%2Ftamagui.dev%2Fblog%2Fintroducing-tamagui%2Fhero.png",target:"_blank",children:(0,l.jsx)("img",{alt:"Deploy with Vercel",style:{height:32,width:90},src:"https://vercel.com/button"})}),Beta:()=>(0,l.jsx)(j.zx,{accessibilityLabel:"Beta blog post",pointerEvents:"_pe-892hgu",size:"$2",paddingRight:"_pr-4rm8kq",paddingLeft:"_pl-1f95ftj",height:"_h-1ukajx7",borderTopLeftRadius:"_btlr-14fwd1r",borderTopRightRadius:"_btrr-jibzt8",borderBottomRightRadius:"_bbrr-wuhapm",borderBottomLeftRadius:"_bblr-10aeuox",theme:"pink_alt3",transform:"_transform-11uuuwn",right:"_r-1bacak7",top:"_t-1i99iuc",position:"_pos-11f8u5c",children:"Beta"}),IntroParagraph:e=>{var{children:s}=e,t=(0,i.Z)(e,["children"]);return(0,l.jsx)(x.n,(0,o.Z)((0,a.Z)({tag:"span",size:"$5",color:"_col-f1vuru",fontFamily:"_fofam-dqglny",fontWeight:"_fow-1j6oyme",letterSpacing:"_letsp-1tlc5wx",fontSize:"_fos-m9py06",lineHeight:"_lh-1rbdj1z",marginTop:"_mt-ubbt3b",display:"_disp-qr7aq3"},t),{className:(0,E.concatClassName)(" paragraph "+(t&&t.className||""),t),children:s}))},Note:e=>(0,l.jsx)(w.FA,(0,o.Z)((0,a.Z)({tag:"aside",borderBottomLeftRadius:"_bblr-10aeups",borderBottomRightRadius:"_bbrr-wuhaqh",borderTopRightRadius:"_btrr-jibzu3",borderTopLeftRadius:"_btlr-14fwd2m",marginBottom:"_mb-1ioq2t1",marginTop:"_mt-ubbt6r"},e),{className:(0,E.concatClassName)(e&&e.className||"",e)})),Notice:e=>{var{children:s,theme:t="yellow"}=e,r=(0,i.Z)(e,["children","theme"]);return(0,l.jsx)(z.Q,{name:t,children:(0,l.jsx)(w.sL,(0,o.Z)((0,a.Z)({borderBottomLeftRadius:"_bblr-10aeuqn",borderBottomRightRadius:"_bbrr-wuharc",borderTopRightRadius:"_btrr-jibzuy",borderTopLeftRadius:"_btlr-14fwd3h",backgroundColor:"_bc-ea1zmt",paddingLeft:"_pl-1f95fv9",paddingBottom:"_pb-rnl9p6",paddingRight:"_pr-4rm8mg",paddingTop:"_pt-12emb0i",borderLeftColor:"_blc-11gd9tv",borderBottomColor:"_bbc-1gkdz6n",borderRightColor:"_brc-lv4h9i",borderTopColor:"_btc-1ubgvm5",borderTopWidth:"_btw-1k5vq58",borderRightWidth:"_brw-1737c2r",borderBottomWidth:"_bbw-he1b7u",borderLeftWidth:"_blw-np9skm",borderBottomStyle:"_bbs-1d05hm9",borderTopStyle:"_bts-j2x5vn",borderLeftStyle:"_bls-69w1u5",borderRightStyle:"_brs-r2rbii",space:"$3",position:"_pos-1ypdr05",marginTop:"_mt-ubbt5w",marginBottom:"_mb-1ioq2s6"},r),{className:(0,E.concatClassName)(r&&r.className||"",r),children:(0,l.jsx)(z.Q,{name:"alt1",children:(0,l.jsx)("p",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _col-f1vuru _ussel-1k4z3v8 _mb-1nqr38n _mt-18tdth1 _pb-rnl9ob _pt-12emazn _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf paragraph-parent ",children:te(s)})})}))})},h1:e=>(0,l.jsx)(y.H1,(0,o.Z)((0,a.Z)({marginBottom:"_mb-1ioq2qg",position:"_pos-1ypdr05",width:"_w-5pax6y"},e),{className:(0,E.concatClassName)(e&&e.className||"",e)})),h2:e=>{var{children:s}=e,t=(0,i.Z)(e,["children"]);return(0,l.jsx)(y.H2,(0,o.Z)((0,a.Z)({marginTop:"_mt-ubbt6r",size:"$9",letterSpacing:"_letsp-1gghvhr",color:"_col-f1vuru",textTransform:"_textTransform-6qyif0",fontFamily:"_fofam-1kcsehy",fontWeight:"_fow-1co50wi",fontSize:"_fos-9gr3nk",lineHeight:"_lh-1097257","data-heading":!0},t),{className:(0,E.concatClassName)(t&&t.className||"",t),children:s}))},h3:e=>{var{children:s,id:t}=e,r=(0,i.Z)(e,["children","id"]);return(0,l.jsxs)(_e,{mt:"$5",mb:"$1",id:t,children:[(0,l.jsx)(y.H3,(0,o.Z)((0,a.Z)({size:"$8",color:"_col-f1vuru",textTransform:"_textTransform-6qyie5",fontFamily:"_fofam-1kcsehy",fontWeight:"_fow-1co50vn",letterSpacing:"_letsp-1h6t8kq",fontSize:"_fos-9gr3mp",lineHeight:"_lh-109724c","data-heading":!0},r),{className:(0,E.concatClassName)(r&&r.className||"",r),children:s})),de(s)]})},h4:e=>(0,l.jsx)(y.H4,(0,o.Z)((0,a.Z)({marginTop:"_mt-ubbt7m"},e),{className:(0,E.concatClassName)(e&&e.className||"",e)})),h5:e=>(0,l.jsx)(y.H5,(0,o.Z)((0,a.Z)({marginTop:"_mt-ubbt6r"},e),{className:(0,E.concatClassName)(e&&e.className||"",e)})),p:e=>(0,l.jsx)(x.n,(0,o.Z)((0,a.Z)({marginBottom:"_mb-1ioq2rb",marginTop:"_mt-ubbt51",display:"_disp-qr7aq3",size:"$5",color:"_col-f1vuru",fontFamily:"_fofam-dqglny",fontWeight:"_fow-1j6oyme",letterSpacing:"_letsp-1tlc5wx",fontSize:"_fos-m9py06",lineHeight:"_lh-1rbdj1z"},e),{className:(0,E.concatClassName)(" docs-paragraph "+(e&&e.className||""),e)})),a:e=>{var{href:s="",children:t}=e,r=(0,i.Z)(e,["href","children"]);return(0,l.jsx)(_(),{href:s,passHref:!0,children:(0,l.jsxs)(x.n,(0,o.Z)((0,a.Z)({fontSize:"_fos-jgrrwr",tag:"a",cursor:"_cur-how55z",display:"_disp-1ffesbf"},r),{className:(0,E.concatClassName)(r&&r.className||"",r),children:[t,s.startsWith("http")?(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)("span",{className:" _transform-w303y8 _mr-wqia5o _fos-jgrrwr _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-tnn163 ",children:(0,l.jsx)(A.O,{})})]}):null]}))})},hr:()=>(0,l.jsxs)("div",{className:" _maw-ao3dgo _ml-dvrmkk _mr-kf03b1 _mb-1ioq2tw _mt-ubbt7m _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,l.jsx)("span",{className:" _bc-0hover-1ezgnu2 _pe-892hgu _fos-17ckeve _disp-sczph7 _h-18bv641 _lh-fzayvx _o-1omt5z9 _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq "}),(0,l.jsx)("div",{className:" _fg-15m5m9x _bbs-1d05hm9 _bbw-he1b7u _bbc-1gkdz6n _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l73 _ai-o35pey "})]}),ul:e=>{let{children:s}=e;return(0,l.jsx)(ne,{children:b.Children.toArray(s).map((e=>"string"===typeof e?null:e))})},ol:e=>(0,l.jsx)(w.FA,(0,o.Z)((0,a.Z)({},e),{tag:"ol",marginBottom:"_mb-1ioq2rb",className:(0,E.concatClassName)(e&&e.className||"",e)})),li:e=>(0,l.jsx)(ee,{children:(0,l.jsx)("span",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _col-f1vuru _ussel-1k4z3v8 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:e.children})}),strong:e=>(0,l.jsx)(x.n,(0,o.Z)((0,a.Z)({tag:"strong",fontSize:"_fos-jgrrwr"},e),{fontWeight:"_fow-1lznn1s",className:(0,E.concatClassName)(e&&e.className||"",e)})),img:e=>{var s=function(){return r.apply(this,arguments)}({},e);return(0,l.jsx)("div",{className:" _mb-1ioq2tw _mt-ubbt7m _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsx)(w.FA,(0,o.Z)((0,a.Z)({tag:"img"},s),{maxWidth:"_maw-1amdtsm",className:(0,E.concatClassName)(s&&s.className||"",s)}))})},pre:e=>{let{children:s}=e;return(0,l.jsx)(l.Fragment,{children:s})},code:e=>{const{hero:s,line:t,scrollable:r,className:n,children:c,id:_,showLineNumbers:d,collapsible:m}=e,p=(0,i.Z)(e,["hero","line","scrollable","className","children","id","showLineNumbers","collapsible"]);return n?(0,l.jsx)("div",{className:" _mt-ubbt51 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsx)(F,(0,o.Z)((0,a.Z)({isHighlightingLines:void 0!==t,className:n,isHero:void 0!==s,isCollapsible:void 0!==s||void 0!==m,isScrollable:void 0!==r,showLineNumbers:void 0!==d},p),{children:c}))}):(0,l.jsx)(C.w,{children:c})},Image:e=>{var{children:s,size:t}=e,r=(0,i.Z)(e,["children","size"]);return(0,l.jsxs)(re,{size:t,tag:"figure",f:1,mx:0,mb:"$3",ai:"center",jc:"center",ov:"hidden",children:[(0,l.jsx)(k.E,(0,o.Z)((0,a.Z)({maxWidth:"_maw-1amdtsm"},r),{className:(0,E.concatClassName)(r&&r.className||"",r)})),(0,l.jsx)("figcaption",{className:" _mt-ubbt46 _col-pfaxet _lh-1x7rq9w _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-1ffesbf ",children:s})]})},Video:e=>{var{small:s,large:t,src:r,children:a="",muted:o=!0,autoPlay:n=!0,controls:c,size:_}=e;(0,i.Z)(e,["small","large","src","children","muted","autoPlay","controls","size"]);return(0,l.jsxs)("figure",{className:" _mb-1ioq2tw _mt-ubbt7m _ml-1slqrlv _mr-wqi8oa _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,l.jsx)(re,{size:_,children:(0,l.jsx)("video",{src:r,autoPlay:n,playsInline:!0,muted:o,controls:c,loop:!0,style:{width:"100%",display:"block"}})}),(0,l.jsx)("figcaption",{className:" _col-pfaxet _mt-ubbt46 _lh-1x7rq9w _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-1ffesbf ",children:a})]})},blockquote:e=>{var{children:s}=e,t=(0,i.Z)(e,["children"]);return(0,l.jsx)(w.FA,(0,o.Z)((0,a.Z)({justifyContent:"_jc-3mx9pa",borderLeftColor:"_blc-11gd9tv",borderBottomColor:"_bbc-1gkdz6n",borderRightColor:"_brc-lv4h9i",borderTopColor:"_btc-1ubgvm5",borderLeftStyle:"_bls-69w1u5",borderLeftWidth:"_blw-np9skm",marginLeft:"_ml-dig7o3",paddingLeft:"_pl-1f95fv9",marginTop:"_mt-ubbt5w",marginBottom:"_mb-1ioq2s6"},t),{className:(0,E.concatClassName)(t&&t.className||"",t),children:(0,l.jsx)("p",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _ussel-1k4z3v8 _o-k3gkp4 _col-f1vuru _whiteSpace-it7tkx _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:b.Children.toArray(s).map((e=>{var s;return(null===e||void 0===e||null===(s=e.props)||void 0===s?void 0:s.children)?e.props.children:e}))})}))},Preview:e=>(0,l.jsx)(ae,(0,o.Z)((0,a.Z)({},e),{mt:"$5"})),RegisterLink:e=>{let{id:s,index:t,href:r}=e;const a=r.startsWith("http");return b.useEffect((()=>{const e=document.getElementById(s);if(!e)return;const o=e.querySelectorAll(".highlight-word")[t-1];if(!o)return;const i=()=>o.classList.add("on"),l=()=>o.classList.remove("on"),n=()=>a?window.location.replace(r):m().push(r);return o.addEventListener("mouseenter",i),o.addEventListener("mouseleave",l),o.addEventListener("click",n),()=>{o.removeEventListener("mouseenter",i),o.removeEventListener("mouseleave",l),o.removeEventListener("click",n)}}),[]),null},H:e=>{var{id:s,index:t}=e,r=(0,i.Z)(e,["id","index"]);const n=b.useRef(null);return b.useEffect((()=>{const e=n.current,r=document.getElementById(s);if(!r)return;const a=r.querySelectorAll(".highlight-word"),o=f()(t).map((e=>e-1));if(Math.max(...o)>=a.length)return;const i=()=>o.forEach((e=>a[e].classList.add("on"))),l=()=>o.forEach((e=>a[e].classList.remove("on")));return null===e||void 0===e||e.addEventListener("mouseenter",i),null===e||void 0===e||e.addEventListener("mouseleave",l),()=>{null===e||void 0===e||e.removeEventListener("mouseenter",i),null===e||void 0===e||e.removeEventListener("mouseleave",l)}}),[]),(0,l.jsx)(x.n,(0,o.Z)((0,a.Z)({cursor:"_cur-1dv50rv",ref:n,fontFamily:"$mono"},r),{className:(0,E.concatClassName)(r&&r.className||"",r)}))},MediaPlayerDemo:e=>{var{theme:s}=e,t=(0,i.Z)(e,["theme"]);return(0,l.jsx)(z.Q,{name:s,children:(0,l.jsx)(se.S,(0,a.Z)({},t))})},GroupDisabledDemo:()=>(0,l.jsxs)(N.Z,{alignSelf:"_als-10qrpfq",disabled:!0,children:[(0,l.jsx)(j.zx,{children:"First"}),(0,l.jsx)(j.zx,{children:"Second"}),(0,l.jsx)(j.zx,{children:"Third"})]}),DemoButton:()=>(0,l.jsx)(j.zx,{children:"Hello world"})});const _e=e=>{var{id:s,children:t}=e,r=(0,i.Z)(e,["id","children"]);return(0,l.jsxs)(w.sL,(0,o.Z)((0,a.Z)({tag:"a",href:"#".concat(s),id:s,"data-id":s,alignItems:"_ai-17do05s",display:"_disp-tnn163",space:!0},r),{className:(0,E.concatClassName)(r&&r.className||"",r),children:[t,(0,l.jsx)("span",{className:" _o-nk7nd6 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,l.jsx)(n.r,{size:12,color:"var(--color)","aria-hidden":!0})})]}))},de=e=>b.Children.map(e,(e=>"string"!==typeof e?e:null)).flat();t(77689)},89187:function(e,s,t){"use strict";t.d(s,{D:function(){return f}});var r=t(37328),a=t(96670),o=t(26297),i=t(52322),l=t(2784),n=t(54503),c=t(81223),_=t(36475);l.createElement;const d=e=>{const s=(0,l.useContext)(c.r2),[t,r]=(0,l.useState)(null);return n.$L&&"undefined"===typeof document||((0,l.useLayoutEffect)((()=>{s&&t!==s.parentName&&r(s.parentName)}),[null==s?void 0:s.parentName]),(0,l.useLayoutEffect)((()=>{if(s)return s.onChangeTheme((()=>{r(s.parentName)}))}),[])),s&&e.children?l.createElement(_.Q,{className:"tui-theme-reset",reset:!0,name:t},e.children):e.children||null};var m=t(26189),p=t(29688),f=e=>{var{children:s}=e,t=(0,o.Z)(e,["children"]);const l="string"===typeof s?s:s.props.children;return(0,i.jsx)(d,{children:(0,i.jsx)(m.H3,(0,a.Z)((0,r.Z)({width:"_w-5pax6y",position:"_pos-1ypdr05",size:"$8",letterSpacing:"_letsp-149hmjt",color:"_col-f1vuru",textTransform:"_textTransform-6qyie5",fontFamily:"_fofam-1kcsehy",fontSize:"_fos-9gr3mp",lineHeight:"_lh-109724c",theme:"alt3",fontWeight:"_fow-1lznk30",tag:"p",marginTop:"_mt-ubbt2g",marginBottom:"_mb-1ioq2qg",maxWidth:"_maw-1amdtsm"},t),{className:(0,p.concatClassName)(t&&t.className||"",t),children:l}))})};t(35936)},84501:function(e,s){function t(e){let s,t=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))t.push(parseInt(r,10));else if(s=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=s;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let s=r;s!==o;s+=e)t.push(s)}}return t}s.default=t,e.exports=t},91706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var s=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(s.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":s.blur();break;default:s=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(s){e.addRange(s)})),s&&s.focus()}}},53098:function(e,s,t){e.exports=t(7575)},7575:function(e,s,t){"use strict";s.getMDXComponent=function(e,s){return n(e,s).default};var r=l(t(2784)),a=l(t(52322)),o=l(t(28316));function i(e){if("function"!==typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:s})(e)}function l(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i(s);if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function n(e,s){const t={React:r,ReactDOM:o,_jsx_runtime:a,...s};return new Function(...Object.keys(t),e)(...Object.values(t))}}}]);
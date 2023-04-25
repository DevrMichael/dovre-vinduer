(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(1309),n=i(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});var o=i(4788),a=i(8754),l=i(1757),c=i(224),s=l._(i(7294)),u=a._(i(2636)),d=i(7757),f=i(3735),g=i(3341);i(4210);var h=a._(i(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function y(e,t,i,r,n,a,l){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==r?void 0:r.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var l=!1,c=!1;r.current(o._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return c},persist:function(){},preventDefault:function(){l=!0,t.preventDefault()},stopPropagation:function(){c=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}}))}function b(e){var t=r._(s.version.split("."),2),i=t[0],n=t[1],o=parseInt(i,10),a=parseInt(n,10);return o>18||18===o&&a>=3?{fetchPriority:e}:{fetchpriority:e}}var w=(0,s.forwardRef)(function(e,t){var i=e.imgAttributes,r=e.heightInt,n=e.widthInt,a=(e.qualityInt,e.className),l=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.fetchPriority,g=e.fill,h=e.placeholder,p=e.loading,m=e.srcString,v=(e.config,e.unoptimized),w=(e.loader,e.onLoadRef),_=e.onLoadingCompleteRef,S=e.setBlurComplete,z=e.setShowAltText,C=(e.onLoad,e.onError),E=c._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=d?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",o._({},E,b(f),{loading:p,width:n,height:r,decoding:"async","data-nimg":g?"fill":"1",className:a,style:o._({},l,u)},i,{ref:(0,s.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&y(e,m,h,w,_,S,v))},[m,h,w,_,S,C,v,t]),onLoad:function(e){y(e.currentTarget,m,h,w,_,S,v)},onError:function(e){z(!0),"blur"===h&&S(!0),C&&C(e)}})))}),_=(0,s.forwardRef)(function(e,t){var i,a,l,y=e.src,_=e.sizes,S=e.unoptimized,z=void 0!==S&&S,C=e.priority,E=void 0!==C&&C,j=e.loading,I=e.className,P=e.quality,R=e.width,x=e.height,L=e.fill,k=e.style,A=e.onLoad,O=e.onLoadingComplete,M=e.placeholder,N=void 0===M?"empty":M,q=e.blurDataURL,B=e.fetchPriority,D=e.layout,F=e.objectFit,W=e.objectPosition,T=(e.lazyBoundary,e.lazyRoot,c._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),U=(0,s.useContext)(g.ImageConfigContext),G=(0,s.useMemo)(function(){var e=p||U||f.imageConfigDefault,t=n._(e.deviceSizes).concat(n._(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o._({},e,{allSizes:t,deviceSizes:i})},[U]),H=T,V=H.loader||h.default;delete H.loader;var J="__next_img_default"in V;if(J){if("custom"===G.loader)throw Error('Image with src "'.concat(y,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var Y=V;V=function(e){return e.config,Y(c._(e,["config"]))}}if(D){"fill"===D&&(L=!0);var $={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];$&&(k=o._({},k,$));var K={responsive:"100vw",fill:"100vw"}[D];K&&!_&&(_=K)}var Q="",X=v(R),Z=v(x);if("object"==typeof(i=y)&&(m(i)||void 0!==i.src)){var ee=m(y)?y.default:y;if(!ee.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(ee)));if(!ee.height||!ee.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(ee)));if(a=ee.blurWidth,l=ee.blurHeight,q=q||ee.blurDataURL,Q=ee.src,!L){if(X||Z){if(X&&!Z){var et=X/ee.width;Z=Math.round(ee.height*et)}else if(!X&&Z){var ei=Z/ee.height;X=Math.round(ee.width*ei)}}else X=ee.width,Z=ee.height}}var er=!E&&("lazy"===j||void 0===j);(!(y="string"==typeof y?y:Q)||y.startsWith("data:")||y.startsWith("blob:"))&&(z=!0,er=!1),G.unoptimized&&(z=!0),J&&y.endsWith(".svg")&&!G.dangerouslyAllowSVG&&(z=!0),E&&(B="high");var en=r._((0,s.useState)(!1),2),eo=en[0],ea=en[1],el=r._((0,s.useState)(!1),2),ec=el[0],es=el[1],eu=v(P),ed=Object.assign(L?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:W}:{},ec?{}:{color:"transparent"},k),ef="blur"===N&&q&&!eo?{backgroundSize:ed.objectFit||"cover",backgroundPosition:ed.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,d.getImageBlurSvg)({widthInt:X,heightInt:Z,blurWidth:a,blurHeight:l,blurDataURL:q,objectFit:ed.objectFit}),'")')}:{},eg=function(e){var t=e.config,i=e.src,r=e.unoptimized,o=e.width,a=e.quality,l=e.sizes,c=e.loader;if(r)return{src:i,srcSet:void 0,sizes:void 0};var s=function(e,t,i){var r=e.deviceSizes,o=e.allSizes;if(i){for(var a=/(^|\s)(1?\d?\d)vw/g,l=[];c=a.exec(i);c)l.push(parseInt(c[2]));if(l.length){var c,s,u=.01*(s=Math).min.apply(s,n._(l));return{widths:o.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:n._(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,l),u=s.widths,d=s.kind,f=u.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:u.map(function(e,r){return"".concat(c({config:t,src:i,quality:a,width:e})," ").concat("w"===d?e:r+1).concat(d)}).join(", "),src:c({config:t,src:i,quality:a,width:u[f]})}}({config:G,src:y,unoptimized:z,width:X,quality:eu,sizes:_,loader:V}),eh=y,ep=(0,s.useRef)(A);(0,s.useEffect)(function(){ep.current=A},[A]);var em=(0,s.useRef)(O);(0,s.useEffect)(function(){em.current=O},[O]);var ev=o._({isLazy:er,imgAttributes:eg,heightInt:Z,widthInt:X,qualityInt:eu,className:I,imgStyle:ed,blurStyle:ef,loading:j,config:G,fetchPriority:B,fill:L,unoptimized:z,placeholder:N,loader:V,srcString:eh,onLoadRef:ep,onLoadingCompleteRef:em,setBlurComplete:ea,setShowAltText:es},H);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,o._({},ev,{ref:t})),E?s.default.createElement(u.default,null,s.default.createElement("link",o._({key:"__nimg-"+eg.src+eg.srcSet+eg.sizes,rel:"preload",as:"image",href:eg.srcSet?void 0:eg.src,imageSrcSet:eg.srcSet,imageSizes:eg.sizes,crossOrigin:H.crossOrigin},b(B)))):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function i(e){var t=e.widthInt,i=e.heightInt,r=e.blurWidth,n=e.blurHeight,o=e.blurDataURL,a=e.objectFit,l=r||t,c=n||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7746:function(e,t){"use strict";function i(e){var t=e.config,i=e.src,r=e.width,n=e.quality;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;var r=i},5675:function(e,t,i){e.exports=i(3740)}}]);
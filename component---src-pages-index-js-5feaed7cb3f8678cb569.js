(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),s=n(a("VbXa")),l=n(a("8OQS")),c=n(a("pVnL")),o=n(a("q1tI")),d=n(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},n&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),o.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:n})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:n})}))}function C(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+o+s+l+a+n+t+i+r+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=o.default.createElement(I,(0,c.default)({src:t},r));return a.length>1?o.default.createElement("picture",null,n(a),i):i},I=o.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,g=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:n,src:r},p,{onLoad:s,onError:d,onClick:u,ref:t,loading:f,draggable:g,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,C=e.loading,A=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,c.default)({opacity:N?1:0,transition:R?"opacity "+b+"ms":"none"},l),L="boolean"==typeof h?"lightgray":h,M={transitionDelay:b+"ms"},x=(0,c.default)({opacity:this.state.imgLoaded?0:1},R&&M,{},l,{},f),V={title:t,alt:this.state.isVisible?"":a,style:x,className:g,itemProp:y};if(p){var P=p,T=P[0];return o.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),L&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&M)}),T.base64&&o.default.createElement(O,{src:T.base64,spreadProps:V,imageVariants:P,generateSources:E}),T.tracedSVG&&o.default.createElement(O,{src:T.tracedSVG,spreadProps:V,imageVariants:P,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,S(P),o.default.createElement(I,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:C,draggable:A})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,c.default)({alt:a,title:t,loading:C},T,{imageVariants:P}))}}))}if(m){var H=m,D=H[0],J=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},i);return"inherit"===i.display&&delete J.display,o.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:J,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},L&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:L,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},R&&M)}),D.base64&&o.default.createElement(O,{src:D.base64,spreadProps:V,imageVariants:H,generateSources:E}),D.tracedSVG&&o.default.createElement(O,{src:D.tracedSVG,spreadProps:V,imageVariants:H,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,S(H),o.default.createElement(I,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:C,draggable:A})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,c.default)({alt:a,title:t,loading:C},D,{imageVariants:H}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:R,sizes:k,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([k,d.default.arrayOf(k)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=N;t.default=L},"B/Gt":function(e,t,a){e.exports=a.p+"static/gmto-dfa659e2546337f1a7c45e8d987ac664.png"},DKDR:function(e,t,a){e.exports=a.p+"static/playlist_logo-cd82d1514c71607c0a5cd3c6b6ab17cd.png"},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),s=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=(a("Wbzz"),a("vOnD")),s=a("Bl7J"),l=(a("ezAz"),a("9eSz"),a("vrFN")),c=a("ZXud"),o=a.n(c),d=a("DKDR"),u=a.n(d),f=a("B/Gt"),g=a.n(f),p=function(){return r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"social-icon"},r.a.createElement("title",null,"LinkedIn icon"),r.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))},m=function(){return r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"social-icon"},r.a.createElement("title",null,"GitHub icon"),r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))},h=function(){return r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"social-icon"},r.a.createElement("title",null,"Instagram icon"),r.a.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}))},b=function(){return r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"social-icon"},r.a.createElement("title",null,"Keybase icon"),r.a.createElement("path",{d:"M10.446 21.371c0 .528-.428.953-.954.953-.525 0-.954-.425-.954-.953 0-.526.428-.954.953-.954.524 0 .951.431.951.955m5.922-.001c0 .528-.428.953-.955.953-.526 0-.952-.425-.952-.953 0-.526.423-.954.949-.954s.954.431.954.955M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053-1.16-1.139-2.505-1.986-3.955-2.504l-.23-.078c.012-.027.024-.055.035-.083.41-1.064.367-2.223-.12-3.255-.491-1.035-1.356-1.8-2.438-2.16-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328-.328-.345-.766-.552-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003c-.061 1.029.727 1.915 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306-1.346.562-2.586 1.401-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06c-.833-1.114-1.419-2.426-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97.025.05.054.097.084.144.264.398.713.625 1.199.605.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003c-.279-.341-.694-.535-1.134-.535-.335 0-.664.117-.925.33-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425c-.046.036-.095.053-.146.053-.066 0-.133-.03-.177-.085l-.111-.135c-.083-.1-.067-.25.034-.334l.51-.42-1.055-1.299c-.109-.133-.091-.33.044-.436.058-.048.126-.072.194-.072.091 0 .181.038.24.113l2.963 3.645c.109.135.09.33-.042.436-.039.029-.082.053-.126.063-.023.006-.045.009-.07.009-.09 0-.178-.04-.24-.113l-.295-.365-1.045.854c-.046.037-.1.055-.154.055-.068 0-.139-.03-.186-.09l-.477-.579c-.082-.102-.068-.252.035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075c-.255-.015-.45-.235-.435-.488l.09-1.401c.014-.245.216-.436.461-.436h.024l1.401.091c.123.006.236.06.317.152.083.094.123.21.116.336l-.007.101c-.32.567-.585 1.134-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102-.183.458-.119.997.21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582c.266.325.659.513 1.079.513.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113.113 0 .222-.01.33-.035.218-.05.424-.15.598-.291.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315 1.005.445 1.954 1.1 2.771 1.897.029.03.059.055.085.083l.17.175c.038.039.076.079.111.12.079.085.16.175.239.267l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005zM7.719 4.115l-.835-.051.053-.835.834.051-.052.835z"}))};function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  text-align: center;\n  img {\n    height: 150px;\n    margin-bottom: 0;\n  }\n\n  color: #9fa5ad;\n\n  h1 {\n    font-weight: 100;\n  }\n\n  .devtag {\n    /*background: #880C23;\n    color: #FCAB06;\n    padding: 4px 10px;\n    display: inline-block;\n    border-radius: 20px;\n    border-bottom: 4px solid #D11D32;\n    border-right: 1px solid #D11D32;*/\n\n    font-weight: 200;\n  }\n\n  .projects {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    > div {\n      padding: 20px;\n    }\n  }\n\n  .social-links {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > a {\n      font-weight: 100;\n      margin-bottom: 20px;\n      height: 30px;\n    }\n    > a {\n      display: inline;\n      justify-content: center;\n    }\n  }\n\n  .social-icon {\n    width: 25px;\n    display: inline-block;\n    margin-right: 10px;\n\n    path {\n      fill: #fff;\n    }\n  }\n"]);return v=function(){return e},e}var S=i.a.div(v());t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement(S,null,r.a.createElement("img",{src:o.a,alt:"ローマン"}),r.a.createElement("h1",null,"Alfonso Roman"),r.a.createElement("p",{className:"devtag"},"software developer"),r.a.createElement("div",{className:"projects"},r.a.createElement("div",null,r.a.createElement("img",{src:g.a,alt:"GMTO"})),r.a.createElement("div",null,r.a.createElement("img",{src:u.a,alt:"Playlist"}))),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/aroman-dev/"},r.a.createElement(p,null)," linkedin.com/in/aroman-dev"),r.a.createElement("a",{href:"https://github.com/alroman"},r.a.createElement(m,null),"github.com/alroman"),r.a.createElement("a",{href:"https://instagram.com/alromanb"},r.a.createElement(h,null)," instagram.com/alromanb"),r.a.createElement("a",{href:"https://keybase.io/alroman"},r.a.createElement(b,null)," keybase.io/alroman"))))}},ZXud:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAADfCAYAAABF7ttgAAAAAXNSR0IArs4c6QAAD5xJREFUeAHtXXuQFMUZ7549boHDiKKilCKYlFUaNYWQaMzBWUZixULuEEGjHEGsSCwKuTvLkkNIrQbuQMs7VDTBhEdx4AMUDpNgSv/grZhCSWJMYsXEEhV8oYged3u3O53fN3szN7eP23nv7NFdtTXdM91f/35fT890f1/3LGMySA1IDUgNSA0Unwa4Xcj1TbsOMsEvtlvOVX4u/tlYVzHGlQxT4RJT3FJUMD6AMVFqKbNnmahO74LinajikWS7pXtR4yzOGP9jr3OeJcQkJljUM3EmQe5IC/7Vsnsm3GSS51l0wSO7P0E3OsszgSZBJ+XtLUmb7oB+HZUt3a+b10ROtrRJGf06Klu6XzeviZxsaZMy+nVUtnS/bl4TOdnSJmX066hs6X7dvCZysqVNyujXUdnS/bp5TeRcWUM5F6ULm/f+1CTPs6gQyVIhPBPXS5Ar0gA1FOC295JYBAnZp4ugkTyBaPv25gpfwJNsqCe1WxQiFH7MYlb/s1VXry/zvxbva7DtnzZDqLxtteCcddE5HGu3ttzxhPl6WOO2b+90IniCp3zHQimah2LRAE1Xtpu0JO1Ge8VU1lVL4+F1RCeLuKfrQnS5fhxdPsj4AawWuIGACSZGuwF4610bT2s7Hj8KSak3Cmd/2rbhjkluZOYq66qlsdLoYbSwSsIxN5gci+1wrMT24/HJBmHI4yLyWC7Qbs+7Ir1tw+17uOC/0ogLMfKv/31vgRNAU6rXn6Vy9qBeVmF8UevGWS/raa+PrgYnOpjKGWvHcybuRWtfzjhbPXzQZUueemqcNmjR8+Q6Vs5aeylPqE+jbc/C7XKQK6xxa8vsXbnyy/NSA1IDUgNSA1IDUgNSA1IDUgNFqgFPxt5m7tNmbTo73tV5A8biYzGWHoFrIzAeH4H4MByP4ngY5w4jfhiztDeiA0r/sHnd9I/NMvyOe0J62sxNIzsT8Z9halgJIleap4j5CWCexsR+TDi2lZZEn9m8fvqh/GXc5XBFesrMLcNUte1+zKjnwoiQ2sHD2QnQeBk24VeYon7Ak5HD6kDlSHRk5PP4oeQZSod6jogkRzBVOY8JMVFw8RO0/mCiwRnvZAp7QlHKlm5dfyMMCv4ER6TnzdsePfTFF7UAvQBkT6X5NFr4OaB+Nnpm9JXNzdPbrcKdVrtpUPyz+EQQvwUtfjNMygrIfwWlLRt5+unNjz9+PTbHeBtsk0712fhWEMZtTK3DtisRdt/Wlpn/yAatqenVQZ+KhGEFUbiyo6GuHPPnzABjwiVqki3HvPx67Srn+6MDolO87vO2SN84o+XypGDbhBDnoiXeQ5PMbt1QvTMTfs+ZWPPBoR3q8S/1MyjzZENdxVw9ne1YNaPlatw6a6DY0ZzzDyOcVW7ZUP1mtrxOzlk2F02e0TI5qbK9GmHGdkUiZd/PR9gJICpDckk+oruoPqqX6ncqL72cJdJVt24cy1X2LPrvIGh+1dlDLp7o54OGQJJ8qofq0+pF/XSnpRNwks5Lmvqw4GqrTnjbxupfWrV/OQFkLkP1UH06cepahMecx0m8T9L0lI53xbfSLYaKdw4vu2iek0rclumuV7vVCQ/hciOzT9Ldr6UrtYdWpOymoFo4nRDVGykZMpVw0FtDw5WeyUY6J2kaeNB7mGTRU9rvPpwPM9VPOLR8wKXhy1cox/WcpGmkhX58Kr2H/XpK58CU8zThIDyESxsJ5szZ94WspGksTUNLGmnRwKNvEcFeJTyaRwX4NJwOqs9KmiYP0GYpDS1zjbQc1OVJEcJDuAhfapJjX2xW0pj2VGmiMJa2LzKAEt24DJw2q8wgrb0HBbsCg+oTNHmwKS+Q7Bou4MMk5Qon7+0M0l2dKZcpTQ/tzJYCYdtdCeHSpq/wZZPBwm7dGaThbB6rCaH5cJiDjk+IcXZhZpDGK+EcTQgMAHaFBZq/G5+B10blGaRRluxajCweNuQEntWET8NrB0AmaTLiISiKGmrSBr5uvO5Ik9USIfKdqG82KjsAc+U18HXjzZUv2/lsLa2RTb4b18hnKxSGc2Rk1HCQWdlmyCSdskszVVVs9xWbdbvKTlZVTUA3XjvCMkmTIR5BM9PakRRwXhM+28+eTNLwPGj4yS4d5qCykRo8Ha8NrBmkMZh/QysPQ7wNOcFnFfxaqtTAawNBBmnyLeEtLcjzQIZ4G7ICy0q4NM8IcKbw2qs6g7RmWOfsdahwsOZ5sCcvkNzdHpHB8Ijsd+IIyCBNqLlgrRp6uFoCYWG3EgMX32a3KOXPSpq8h+RMgyZvJleLE8F+lSE8hIvwEU4n9WQlrblL4T0kZxr5lpwI9quM5usCLvJuOnXrZiVNgMldSt5DcqaRb8kvEnbkEg7CQ7gIn52y5rw5SWsmX7hLKTM509yYXM0VOo1rvnBy6lEALjcm6ZykSTb5h1HBfvIeJhPfvHDnnQcKsmWB6qX6CQfh0XARQIehT9LkECf/MFw6H0J+xSdt/3rcYT2uinXXW0E4CI9bR32fpAkpvQfJP4x+1A6f1pzK21p+a6fFvyXasZKA/77nF9lnVQNUD9VH9VL9hMPJezm9PlhbrAXyD5vctTsV+Lbc9Kt8tWp9ONn2PAhfrSlcYbe8uKH6xXzlrFy3TJqEkZ9ac9vaWIlgBUR6nvSVCFwoVa1P35aaE6RndpC2RZrkk52Z3KXkPaQ0BPS55oTyWA2hXHOigz/pVhfpxOmo9TsL68jIiEc2LTJBkUWmKNeRmYlTXF8xqPmWyCWk76JLz5g1jekNZnU0ySmKFYPZOFCfJ9cQeUrQ38mOlXVtKIaTRzDQOFCItaHZcMtzUgNSA1IDUgNSA1IDUgNSA1IDPmvA1ny6vmn3S7CFX+YzpvziFdGyrLZCW6ybP3NmDluf6ADhMzGDKqizHutCv4H56NFMKtbP5DUMWhcVTE64UxsaaicYX9JxUqutloZn7w1o+RsnFTkpgzvrItxZPf+vw/n/RpSc0+RElrmMrT5tLuh3vH7l68NEPP4fkD5Nr4srkamNteVb9HT6kT4FdOLrrmtaN8x6If2aOW2vpc0lfY7zzo4HYWjoIczZjlyEq2aseQ6m4ultxzt0VH02Zij79MJH910Cy8scnQHMSUl80LHGSLuMhLKlRSK5ArwiOjd8y+h3DTUT/q6n3R5D19L3N+3GdmTxY50YXlHHSssGL9bTXhxDRTq26e1SuIUf6UVM8Adic8Z93uucy0SoSMc/OlqDVv62zglPo3+PGjLY889yhob0whX7hwuVLdIJ0xGvqLo5c6x94stcLl88NA8yNRlvANhTdMDoy9sbastf0tNeHkPR0gubd1+Okd4sgxjnXRG0spH2OBKKllZVhgmEMDfAyiU15e94zNUQZ67IOBlkZMGKXTeDcLleJ5ZYfDaQn/Kgnvbj6FlL16/ccyHr5MN1kFjqdWRZ3VXv6ulsR+17CWriIZDuuSzE4ljdmGM9J7yPedbSPMHPx6fsd+s/Jrr2LF+913gwZYP+GUvcC+d+agkzZeD8b2POm4D1Kf4Gz0g31JS/gveqeU3I2ce+EgtzwY89tv9cXLvPfL2E85rp0/HJdJ+DZ6QJp+AD7sFTuFPHLJhau6B5zwV62nyMJ+LLMTPSPuqinef8hSW143ea8/gVz0u6asa6qVWz1g61AqC7D9NkIRXwr8JcFb2HlbhS37zvhzAQ3Kpnwx3SUTJA3Kun/T7mJY0++rzoUr+kr7bTvDUfIDjZl2Jg8YmeD8PKqkXNu64x0rD3MDXR28bFedOSeRXv6Xn8PuYlbRdA7O4rj3Ou9OrLCcFWbNoktKkiBiIz8aymb5h0B344Gh3WqKeCOHpOmkCX1pSvw/v2TYOAYJce/GjPnbEn3h6CR3Qvgpgr18fmfjcwuxth8oV0jHN8VkCZb5CmiBC/jnccfQgPr9R+KpyCYv6ytK68pVe+ABK+kCbcS+eX7wUpY6c9HlzD0L/vMjjhj3kUocxHHtPIxLjqa8Q30oQ6GlHuQ3O252Cwcek95fj4WvDBV9Kx+eWHFCEwzMwIbRFW4tgtkyHN5glfSROW0iFlD2HA8oEZF9KrltZd9ZH5XJBx30nDvnUC/43Ta7gJgpNWrSrMLgFSru+kqZJlteOfwQPLWNyOB9qF77e1303XChECIU3EsKeoBg8140mtCnVx7Df7evxUAbIPjDTexwcwxl5n4nZqvD25xJQOLBoYaWIUjQ7E8JR/bbAT7I7Fj706xkgHFAmUdGzuDz6GTyoGbh/TD33700SiK/BXl2fmIquN1Fg7nvzL9CtYCLSlC8YyreK8pDE37lnqIFjgd0Ya3qxJvBIMHr3wZs1typzjOk7TnwZ1B85G6dFwHXv8X73w5gBpaCjHdfrmgPGnQUh8b+rsNRfkyluI89Oq148GrkupbrQynJ784Xw48pKmPw2CDXtxSqCIJDpFM+bEeOUWPsRiQulSE81AAkMqEVYWE958yCyD1/80CNaAcehDu3iJclfrutt9Ncr3BV4zVibEk8BzNd3S1MJWCPclU16TGpAakBqQGpAakBqQGpAakBqQGpAakBqQGpAakBqQGjgpNWDZRqZrp37F3skwDDryP8EZ/1auvVW6/CCOto33IpmsBLDZjsBx9jTKbXFU1sNCeU3AHtYVGlEnJWnbt3dE+6cy5ujvKgSPvB+G5rb9ICsU6Fjza6M6RNdafI+6zMCAlYmMR2oba3/0mnHOQsR2S1uQ6XmWFOHOHfBZjTIWrWD9Cr4J/Au7hAlc6Pu0mbChTZ1wXcVq41xapK816qFuabuEK6vXXAc33p+JP9ao0yFr9w1tS9slTAythlCS9pMwKSZ0pP0mHDrSQRAOFemgCIeGdJCEQ0E6aMIFJ33/yn3nd4jUSIvAaMHCwEPP6vRYsKc3EU52JnbS0NIAHwBhqqsgpAtJuCCkC03YEmnaYEofQqLMbkMYCBOHvLc3bTDFh5C+SG0wXf2WU+JhIWyJtFOS5nJhIhwI6bAR9p10GAn7SjqshH0jHWbCvpAOO2HPSRcDYU9JFwthz0gXE2FPSBcbYSLtyu4dW3XgjHhb2zOYHg6ELNpKqAV4HhY19mGI1/MV6uiOdOqDh1cVCrzTevNOOJwKDnO5vKSx38nYdojtWK7uDL8VAcOLwceMO71eI1P6hZ60eduhGBmWjWg9+HpiIqmM7kmZcPec1GJ5SadtOxx8Y/W6a9NkhCaJB+hkApPajZd7+2Fe0uZthyRQZeryMP5F85SZayZhE/p1VrYfZnVlErn0oG87xO09FtfeKY2UVG9e//OCfavEjG9K9dpbhFAfQBu/I7cfmjUj41IDUgNSA1IDRa6B/wNjFUzTMCRR7gAAAABJRU5ErkJggg=="},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5feaed7cb3f8678cb569.js.map
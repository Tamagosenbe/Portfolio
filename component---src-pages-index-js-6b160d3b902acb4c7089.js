(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function R(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(x,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),x=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,R=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:L?1:0,transition:k?"opacity "+v+"ms":"none"},o),M="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},k&&T,{},o,{},f),q={title:t,alt:this.state.isVisible?"":a,style:z,className:p,itemProp:S};if(h){var j=h,X=g(h);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(X.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/X.aspectRatio+"%"}}),M&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&T)}),X.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:X.base64,spreadProps:q,imageVariants:j,generateSources:A}),X.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:X.tracedSVG,spreadProps:q,imageVariants:j,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(j),l.default.createElement(x,{alt:a,title:t,sizes:X.sizes,src:X.src,crossOrigin:this.props.crossOrigin,srcSet:X.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:E},X,{imageVariants:j}))}}))}if(m){var Z=m,F=g(m),N=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},n);return"inherit"===n.display&&delete N.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},M&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:M,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},k&&T)}),F.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:q,imageVariants:Z,generateSources:A}),F.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:q,imageVariants:Z,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(Z),l.default.createElement(x,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:E},F,{imageVariants:Z}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),M=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});k.propTypes={resolutions:C,sizes:M,fixed:u.default.oneOfType([C,u.default.arrayOf(C)]),fluid:u.default.oneOfType([M,u.default.arrayOf(M)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=k;t.default=T},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),p=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",b,v,l,!0,!0);f&&p&&(d((i=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!h(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("Bl7J"),o=a("r3oo"),d=a("9eSz"),l=a.n(d),u=function(){var e=o.data;return r.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},c=a("vrFN");t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:"Tamagosenbe_'s Portfolio"}),r.a.createElement("h1",null,"This is Tamagosenbe_'s portfolio"),r.a.createElement("p",null,"Welcome to my page!"),r.a.createElement("p",null,"!!!."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(u,null)),r.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2"))}},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),p=l(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&d(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?h(e).set(t,a):i[e._i]=a,e},ufstore:h}},r3oo:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEbklEQVQ4y22Ue0xbVRzHL22hD6D0RUdHpQJlPIrllnvbe2nRvdg6YJrFRYeZMxtjYSPG5yTGxU1hmcAYr7GNOUj2h/qf28xMTPQfjYmgAkbZynPOwcT9oYlxiWb29vz8ndt7sSae5NdzenLO53x/j/tjGBx7xFxGGRrm35GFduiJavvqHiEXngo5oMxlHMC9Z9As6iGABJ3S6I/TnM4wTQrMbNRqlTMGtOb6KuvkaMsGmD/Nw+qwSO4OCeSjV3wwcsALjaxtwuc2XcFzfIqAtLVVvjVDhT20M2D7drSlBBZ6g7AyKEg4k9keHuZ7eVgeEhIIlmJdPEyfrIajDW6IlJj7KQygjdlRmcMwjiyd6qZ7X8QZWzoThF8vhqXx11hp+gRHFs4ESaybJ5NvBgiqJTc6OTL1ekCaPcXH749FEu+3lQHePUwBGbo0nSpy/d6wc5qquj0g/D3XX0O+76CwkAxZGRIgdpyDiWMsfNMRIOPHWVjEh2c6ufhEOwuPB2xTyDCuuVzpNn1M3Vq9EHkQw5keXh4KkQWM3499IaAq3nrSA5sqcqDYZYDCPAO0bFpHFvtFcqtbTLzbXEJVtqi8aMduz58/9YfIzCmO3OpLunjpYAnUs1aI+q3AebPA6zZCbWUObOOssnmcevjsGEvuXYhIsXc4mqhJZOVQ4JH3jpTBz0NCfLydJXM9PHlazIXi9QaIICCMtiVggYaQDbZVW2ErrinwMT/u+y3k+gs+sniSly4dklUeoMC9F1Hy6llBmkdl4ydY+fUob4VGwS6D6hBEoRSmrul+octAhvcVk/tjj0qXn6+kwIPMVp/ly68wyJhdcntQJF93clCEMZJdw8t1iqodQZu8pyqk/4Ol2fBsrZOsDoelsdZyCmxmMLtw53SI3OziYKkvCBg/iFZZQSg3w3YFUKeAVXiUt0E9AqnbbGEmmXm7WurZ+XBSYanL2Hv15QpYHhQSNCn3zolwfr8XKjwm2W0VQBWpQDpT9fRBPEfwvPTB4bKkQhz7L7dugF+GxfgXL/oJ1haZw3LZjtkVK1SVycuqy6phHAlmn7zakC99+FLFWlLqadncGQzBja4Qme0OynX4X6BlLY6qSjSCa7KxykI2+nIedO72gCFdI38xjL8g89p3+G0un6+NLw3WwEIPR/CbxjhmyxAVSmfFXVKvlFGDYIuXYo2yBZmxAofeqxY3d7TRDb+N1MBMF5dYOReBkaYSUrTOAI2iPdVVohiFxzExf9EHXLaMaWTYlX52XZ6DRVn9n7RXwl3sMIu94fiVtkeI35NJtlDXAlaCiaEuSmhxTJZEMyxiJRQ49TdpY1GEaVP7mNZj1/9wFYMbwxL6fbQW2ncVxss9RmlX2CE1CHZpM5vMcMRnBodZdw3vvIEmu6lJY7RM6lg+W0PbmNvj0HdWFZg+H3jO+0dTbR647OmykiJsCpkGzZQ1S/epyaAZTu3uuC+v8x0ZahsH5n9GFK1VKYVmpZvkpR7QadPSTXqN7GG2MSnwH/ZBPs0AogTeAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/portfolio/static/86f88823564bbcb6fd2ed1013854e76b/630fb/Senbei.png","srcSet":"/portfolio/static/86f88823564bbcb6fd2ed1013854e76b/5db04/Senbei.png 75w,\\n/portfolio/static/86f88823564bbcb6fd2ed1013854e76b/6d161/Senbei.png 150w,\\n/portfolio/static/86f88823564bbcb6fd2ed1013854e76b/630fb/Senbei.png 300w,\\n/portfolio/static/86f88823564bbcb6fd2ed1013854e76b/62b1f/Senbei.png 450w,\\n/portfolio/static/86f88823564bbcb6fd2ed1013854e76b/2a4de/Senbei.png 600w,\\n/portfolio/static/86f88823564bbcb6fd2ed1013854e76b/fb0be/Senbei.png 4000w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-6b160d3b902acb4c7089.js.map
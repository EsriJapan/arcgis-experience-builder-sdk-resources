System.register(["jimu-core","jimu-arcgis"],(function(e,t){var i={},s={};return{setters:[function(e){i.React=e.React,i.jsx=e.jsx},function(e){s.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={4645:e=>{"use strict";e.exports=s},1810:e=>{"use strict";e.exports=i}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var o={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(o),r.d(o,{default:()=>i});var e=r(1810),t=r(4645);class i extends e.React.PureComponent{constructor(){super(...arguments),this.state={jimuMapView:null,latitude:"",longitude:""},this.activeViewChangeHandler=e=>{e&&(this.setState({jimuMapView:e}),e.view.on("pointer-move",(e=>{const t=this.state.jimuMapView.view.toMap({x:e.x,y:e.y});this.setState({latitude:t.latitude.toFixed(3),longitude:t.longitude.toFixed(3)})})))}}render(){var i;return(0,e.jsx)("div",{className:"widget-starter jimu-widget"},this.props.hasOwnProperty("useMapWidgetIds")&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(i=this.props.useMapWidgetIds)||void 0===i?void 0:i[0],onActiveViewChange:this.activeViewChangeHandler}),(0,e.jsx)("p",null,"Lat/Lon: ",this.state.latitude," ",this.state.longitude))}}})(),o})())}}}));
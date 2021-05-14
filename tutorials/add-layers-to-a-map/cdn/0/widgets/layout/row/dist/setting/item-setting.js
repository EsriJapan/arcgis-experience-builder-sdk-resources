System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-ui/advanced/style-setting-components","jimu-layouts/layout-builder"],(function(t){var e,o,n,i,a,s;return{setters:[function(t){e=t},function(t){o=t},function(t){n=t},function(t){i=t},function(t){a=t},function(t){s=t}],execute:function(){t(function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=421)}({0:function(t,o){t.exports=e},1:function(t,e){t.exports=o},14:function(t,e){t.exports=a},2:function(t,e){t.exports=n},24:function(t,e){t.exports=s},421:function(t,e,o){"use strict";o.r(e);var n,i,a=o(0),s=o(2),r=o(24),u=o(5),l=o(1),p=o(51),d=o(14),c=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),g=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},h={width:"7.5rem"},f=[u.LayoutItemSizeModes.Auto,u.LayoutItemSizeModes.Stretch,u.LayoutItemSizeModes.Custom],y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleAlignChange=function(t){e.updateStyle("alignSelf",t.target.value)},e.handleHeightChange=function(t){var o=e.props.layoutItem.bbox,n=t.distance,i=t.unit,a=o.height,s=e.getSizeOfContainer(),r=n.toFixed(2);u.utils.isPercentage(a)&&i===l.UnitTypes.PIXEL?null!=s&&(r=Math.round(parseFloat(a)*s.height/100)):u.utils.isPercentage(a)||i!==l.UnitTypes.PERCENTAGE||null!=s&&(r=(100*parseFloat(a)/s.height).toFixed(4)),o=o.set("height",i===l.UnitTypes.PERCENTAGE?r+"%":r+"px"),e.props.onPosChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},o)},e.handleHeightModeChange=function(t){var o,n=null!==(o=e.props.layoutItem.setting)&&void 0!==o?o:Object(a.Immutable)({});e.props.onSettingChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},n.setIn(["autoProps","height"],t))},e.updateAspectSetting=function(t){var o,n=null!==(o=e.props.layoutItem.setting)&&void 0!==o?o:Object(a.Immutable)({});if(n=n.set("heightMode",t),"ratio"===t){var i=e.getSizeOfItem();null!=i&&(n=n.set("aspectRatio",Number((i.height/i.width).toFixed(2))))}else{var s=e.props.layoutItem.bbox,r=e.getSizeOfItem();if(u.utils.isPercentage(s.height)){var l=e.getSizeOfContainer();e.props.onPosChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},s.set("height",(100*r.height/l.height).toFixed(4)+"%"))}else e.props.onPosChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},s.set("height",Math.round(r.height)+"px"))}e.props.onSettingChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},n)},e.handleAspectRatioChange=function(t){var o,n=null!==(o=e.props.layoutItem.setting)&&void 0!==o?o:Object(a.Immutable)({});n=n.set("aspectRatio",t),e.props.onSettingChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},n)},e.handleOffsetXChange=function(t){var o,n=null!==(o=e.props.layoutItem.setting)&&void 0!==o?o:Object(a.Immutable)({});e.props.onSettingChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},n.set("offsetX",t))},e.handleOffsetYChange=function(t){var o,n=null!==(o=e.props.layoutItem.setting)&&void 0!==o?o:Object(a.Immutable)({});e.props.onSettingChange({layoutId:e.props.layoutId,layoutItemId:e.props.layoutItem.id},n.set("offsetY",t))},e.formatMessage=function(t){return e.props.formatMessage(t)},e}return c(e,t),e.prototype.updateStyle=function(t,e){var o,n,i=this.props.layoutItem,s=Object(a.Immutable)(null!==(n=null===(o=null==i?void 0:i.setting)||void 0===o?void 0:o.style)&&void 0!==n?n:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},{style:s.set(t,e)})},e.prototype.getSizeOfContainer=function(){var t=this.querySelector('div.row-layout[data-layoutid="'+this.props.layoutId+'"]');return null!=t?t.getBoundingClientRect():null},e.prototype.getSizeOfItem=function(){var t=this.props,e=t.layoutId,o=t.layoutItem,n=this.querySelector('div.exb-rnd[data-layoutid="'+e+'"][data-layoutitemid="'+o.id+'"] > div.widget-renderer');return null!=n?n.getBoundingClientRect():null},e.prototype.querySelector=function(t){var e,o=document.querySelector('iframe[name="'+a.APP_FRAME_NAME_IN_BUILDER+'"]');return null!=o?(null!==(e=o.contentDocument)&&void 0!==e?e:o.contentWindow.document).querySelector(t):null},e.prototype.getStyle=function(){return Object(a.css)(i||(i=g(["\n      .align-select {\n        .dropdown-button, .dropdown-button:hover {\n          height: 26px;\n        }\n      }\n    "],["\n      .align-select {\n        .dropdown-button, .dropdown-button:hover {\n          height: 26px;\n        }\n      }\n    "])))},e.prototype.render=function(){var t,e,o,n,i=this,c=this.props,g=c.layoutId,y=c.layoutItem,m=c.isLockLayout;if(null==y)return null;var I=a.lodash.assign({},p.a,y.setting),b=y.bbox,j=null!==(t=I.style)&&void 0!==t?t:{},S=null!==(o=null===(e=I.autoProps)||void 0===e?void 0:e.height)&&void 0!==o?o:u.LayoutItemSizeModes.Stretch,v="ratio"===I.heightMode;return Object(a.jsx)("div",{className:"row-item-setting",css:this.getStyle()},!m&&Object(a.jsx)(a.React.Fragment,null,Object(a.jsx)(s.SettingSection,{title:this.formatMessage("size")},Object(a.jsx)(s.SettingRow,{label:this.formatMessage("height")},Object(a.jsx)("div",{style:h},Object(a.jsx)(d.SizeEditor,{label:"H",mode:S,sizeModes:f,value:l.utils.stringOfLinearUnit(b.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:v}))),S===u.LayoutItemSizeModes.Custom&&Object(a.jsx)(s.SettingRow,null,Object(a.jsx)(l.Checkbox,{checked:v,onChange:function(t){return i.updateAspectSetting(t.target.checked?"ratio":"fixed")},className:"mr-2"}),this.formatMessage("keepAspectRatio")),v&&Object(a.jsx)(s.SettingRow,{label:this.formatMessage("aspectRatio")},Object(a.jsx)(d.InputRatio,{value:I.aspectRatio,style:h,onChange:this.handleAspectRatioChange})),S!==u.LayoutItemSizeModes.Stretch&&Object(a.jsx)(s.SettingRow,{label:this.formatMessage("align")},Object(a.jsx)(l.Select,{className:"align-select",style:h,value:null!==(n=j.alignSelf)&&void 0!==n?n:"flex-start",onChange:this.handleAlignChange},Object(a.jsx)("option",{value:"flex-start"},this.formatMessage("T")),Object(a.jsx)("option",{value:"flex-end"},this.formatMessage("B")),Object(a.jsx)("option",{value:"center"},this.formatMessage("center"))))),Object(a.jsx)(s.SettingSection,{title:this.formatMessage("position")},Object(a.jsx)(r.CommonTransformSetting,{layoutId:g,layoutItemId:y.id,setting:y.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),Object(a.jsx)(s.SettingRow,{label:this.formatMessage("offsetX")},Object(a.jsx)(l.NumericInput,{style:h,value:I.offsetX,onChange:this.handleOffsetXChange,size:"sm"})),Object(a.jsx)(s.SettingRow,{label:this.formatMessage("offsetY")},Object(a.jsx)(l.NumericInput,{style:h,value:I.offsetY,onChange:this.handleOffsetYChange,size:"sm"})))),(null!=y.widgetId||null!=y.sectionId)&&Object(a.jsx)(r.CommonLayoutItemSetting,{layoutId:g,layoutItemId:y.id,isSection:y.type===a.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))},e}(a.React.PureComponent);e.default=y},5:function(t,e){t.exports=i},51:function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"a",(function(){return s}));var n=o(0),i=o(1),a=Object(n.Immutable)({space:20,style:{padding:{number:[10],unit:i.UnitTypes.PIXEL}}}),s={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}}}}))}}}));
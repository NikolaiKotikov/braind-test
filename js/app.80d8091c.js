(function(e){function t(t){for(var i,s,a=t[0],o=t[1],u=t[2],d=0,h=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);l&&l(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(i=!1)}i&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},c=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/braind-test/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0560":function(e,t,n){},3101:function(e,t,n){"use strict";n("c2af")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,r,c,s,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("Schedule"),n("Calendar")],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"schedule"},[n("button",{staticClass:"schedule__control-copy",attrs:{draggable:""}},[n("SvgSnowflake")],1),n("div",{staticClass:"schedule__content"},[e.$store.getters.currentSchedule.length?n("transition-group",{staticClass:"schedule__list",attrs:{tag:"ul",name:"list"}},e._l(e.$store.getters.currentSchedule,(function(t){return n("li",{key:t.uuid+e.$store.state.chosenDay,staticClass:"schedule__list-item"},[n("ScheduleItem",e._b({attrs:{mode:"edit"}},"ScheduleItem",t,!1))],1)})),0):n("p",{staticClass:"schedule__message"},[e._v("Тут пока ничего нет!")])],1),n("ScheduleItem",{staticClass:"schedule__item-add",attrs:{mode:"add"}})],1)},d=[],h=a["a"].extend({name:"SvgSnowflake",functional:!0,render:function(){var e=arguments[0];return e("svg",{attrs:{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11.303 23a3.5 3.5 0 0 0-.547-.608 4.595 4.595 0 0 0-.7-.578c-.222-.142-.394-.213-.516-.213h-.06l1.336-7.545-.607-.244-4.406 6.267c0-.06-.111-.111-.334-.152a5.459 5.459 0 0 0-.668-.152 3.722 3.722 0 0 0-.578-.06c-.223 0-.445.03-.668.09l-.304-.304a.815.815 0 0 0 .06-.304v-.365c0-.284-.05-.619-.151-1.004-.101-.406-.172-.608-.213-.608l6.26-4.412-.274-.608-7.535 1.369.03-.092c0-.121-.091-.294-.273-.517a4.597 4.597 0 0 0-.578-.7c-.223-.243-.415-.415-.577-.517v-.425c.162-.122.354-.295.577-.518.223-.223.416-.456.578-.7.182-.243.273-.425.273-.547l-.03-.091 7.535 1.369.243-.64-6.26-4.38c.062 0 .132-.203.213-.609.102-.426.152-.8.152-1.125v-.305a.433.433 0 0 0-.06-.243l.303-.304c.223.06.446.091.669.091.162 0 .364-.02.608-.06.243-.041.465-.092.668-.153.223-.081.334-.142.334-.182l4.375 6.297.638-.274L9.48 1.4l.06.03c.122 0 .304-.08.547-.242.243-.183.476-.386.699-.609.243-.223.415-.416.517-.578h.425c.06.122.202.294.425.517.243.223.486.436.73.64.263.182.455.273.577.273l.09-.03-1.336 7.544.608.274 4.375-6.297c.04.08.243.172.608.273.384.082.719.122 1.002.122.243 0 .466-.03.669-.091l.303.304c-.02.061-.04.142-.06.243v.305c0 .162.01.385.03.669.04.264.091.507.152.73.06.223.122.335.182.335l-6.259 4.38.213.61 7.565-1.34v.092c0 .122.081.314.243.578.183.243.385.477.608.7.223.223.405.375.547.456v.426c-.142.081-.324.243-.547.487a9.666 9.666 0 0 0-.608.73c-.162.243-.243.426-.243.547v.092l-7.565-1.37-.243.61 6.259 4.41c-.04 0-.091.112-.152.335-.06.203-.111.436-.152.7a3.73 3.73 0 0 0-.06.578v.365l.06.304-.304.305a2.315 2.315 0 0 0-.668-.092c-.264 0-.598.051-1.003.152-.385.082-.577.152-.577.213l-4.406-6.267-.577.244 1.337 7.545h-.06c-.122 0-.315.09-.578.273-.243.183-.486.376-.73.578-.222.223-.374.406-.455.548h-.425Z",fill:"#323C46"}})])}}),f=h,m=n("2877"),p=Object(m["a"])(f,i,r,!1,null,null,null),y=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["schedule-item","schedule-item--"+e.mode,{"schedule-item--outdated":e.isOutdated}]},[n("VueTimepicker",{ref:"timePicker",staticClass:"schedule-item__control schedule-item__control--time",attrs:{placeholder:" ","input-width":"80px","hide-clear-button":"","auto-scroll":""},model:{value:e.timeModel,callback:function(t){e.timeModel=t},expression:"timeModel"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.textModel,expression:"textModel"}],staticClass:"schedule-item__control schedule-item__control--text",attrs:{type:"text"},domProps:{value:e.textModel},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem.apply(null,arguments)},input:function(t){t.target.composing||(e.textModel=t.target.value)}}}),n("button",{staticClass:"schedule-item__control schedule-item__control--button",attrs:{disabled:e.isInvalid},on:{click:e.handleClick}},[n("SvgCross",{staticClass:"schedule__icon"})],1)],1)},_=[],g=(n("c740"),n("498a"),n("d3b7"),n("25f0"),n("ac1f"),n("5319"),function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}),C=(n("a15b"),n("1276"),n("99af"),function(e){return e?+e.split(":").join(""):+"".concat((new Date).getHours()).concat((new Date).getMinutes())}),x=n("fea2"),D=n("2638"),S=n.n(D),b=a["a"].extend({name:"SvgCross",functional:!0,render:function(e,t){var n=t.data,i=arguments[0];return i("svg",S()([{},n,{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}}]),[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C7.44769 0 7 0.447723 7 1V7H1C0.447693 7 0 7.44772 0 8C0 8.55228 0.447693 9 1 9H7V15C7 15.5523 7.44769 16 8 16C8.55231 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H9V1C9 0.447723 8.55231 0 8 0Z",fill:"white"}})])}}),w=b,I=Object(m["a"])(w,c,s,!1,null,null,null),E=I.exports,M={components:{SvgCross:E,VueTimepicker:x["a"]},name:"ScheduleItem",data:function(){return{item:{time:"",text:"",uuid:this.uuid}}},props:{mode:{type:String,default:"edit"},time:{type:String,default:""},text:{type:String,default:""},uuid:{type:String,default:""}},methods:{handleClick:function(){"edit"===this.mode?this.removeItem():this.addItem()},addItem:function(){this.isInvalid||(this.item.uuid=g(),this.$store.dispatch("updateSchedule",{type:"add",item:Object.assign({},this.item)}),this.item.time="",this.item.text="",this.$refs.timePicker.clearTime())},removeItem:function(){this.$store.dispatch("updateSchedule",{type:"remove",item:this.item})},updateItem:function(){"edit"===this.mode&&this.$store.dispatch("updateSchedule",{item:{time:this.timeModel,text:this.textModel,uuid:this.uuid},type:"update"})},findDayIndexByCode:function(e){return this.$store.state.days.findIndex((function(t){return t.code===e}))}},computed:{timeModel:{get:function(){return this.item.time||this.time},set:function(e){this.item.time=e}},textModel:{get:function(){return this.item.text||this.text},set:function(e){this.item.text=e}},chosenDayIndex:function(){return this.findDayIndexByCode(this.$store.state.chosenDay)},currentDayIndex:function(){return this.findDayIndexByCode(this.$store.state.currentDay)},isInvalid:function(){return"edit"!==this.mode&&(!this.item.time.trim()||!this.item.text.trim())},isOutdated:function(){return"add"!==this.mode&&(this.chosenDayIndex<this.currentDayIndex||this.chosenDayIndex===this.currentDayIndex&&C(this.timeModel)<C())}},watch:{"item.time":function(e,t){t&&t!==e&&this.updateItem()},"item.text":function(e,t){t&&t!==e&&this.updateItem()}}},O=M,k=(n("734d"),Object(m["a"])(O,v,_,!1,null,null,null)),$=k.exports,T={name:"Schedule",components:{ScheduleItem:$,SvgSnowflake:y}},j=T,P=(n("3101"),Object(m["a"])(j,l,d,!1,null,null,null)),A=P.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar"},e._l(e.days,(function(t){return n("button",{class:["calendar__day",{"calendar__day--active":t.code===e.$store.state.chosenDay}],on:{drop:function(n){return e.onDrop(n,t.code)},dragover:function(e){e.preventDefault()},dragenter:function(e){e.preventDefault()},click:function(n){return e.setCurrentDay(t.code)}}},[e._v(e._s(t.title))])})),0)},R=[],V={name:"Calendar",computed:{days:function(){return this.$store.state.days}},methods:{setCurrentDay:function(e){this.$store.dispatch("setDay",{type:"chosen",dayCode:e})},onDrop:function(e,t){this.$store.dispatch("updateSchedule",{type:"replace",item:t})}}},H=V,J=(n("e611"),Object(m["a"])(H,N,R,!1,null,null,null)),B=J.exports,L={name:"App",components:{Calendar:B,Schedule:A},mounted:function(){this.$store.dispatch("setDay",{type:"current",dayCode:this.getCurrentDayCode()}),this.$store.dispatch("setDay",{type:"chosen",dayCode:this.getCurrentDayCode()});var e=localStorage.getItem("schedule");e&&(this.$store.state.schedule=JSON.parse(e))},methods:{getLocalDay:function(){var e=(new Date).getDay();return 0===e&&(e=7),e-1},getCurrentDayCode:function(){return this.$store.state.days[this.getLocalDay()].code}}},U=L,Y=(n("5c0b"),Object(m["a"])(U,o,u,!1,null,null,null)),Z=Y.exports,q=(n("4e82"),n("4de4"),n("e9c4"),n("7db0"),n("2f62"));function z(e){return e.schedule[e.chosenDay]||[]}function F(e){z(e).sort((function(e,t){return C(e.time)-C(t.time)}))}a["a"].use(q["a"]);var G=new q["a"].Store({state:{currentDay:"",chosenDay:"",days:[{title:"пн",code:"mo"},{title:"вт",code:"tu"},{title:"ср",code:"we"},{title:"чт",code:"th"},{title:"пт",code:"fr"},{title:"сб",code:"sa"},{title:"вс",code:"su"}],schedule:{mo:[],tu:[],we:[],th:[],fr:[],sa:[],su:[]}},mutations:{SET_CHOSEN_DAY:function(e,t){e.chosenDay=t},SET_CURRENT_DAY:function(e,t){e.currentDay=t},ADD_ITEM:function(e,t){z(e).push(t),F(e)},REMOVE_ITEM:function(e,t){e.schedule[e.chosenDay]=z(e).filter((function(e){return e.uuid!==t.uuid}))},UPDATE_ITEM:function(e,t){var n=z(e).findIndex((function(e){return e.uuid===t.uuid}));n>=0&&(z(e)[n]=t,F(e))},REPLACE_ITEM:function(e,t){e.chosenDay!==t&&z(e).length&&(e.schedule[t]=JSON.parse(JSON.stringify(z(e))),alert("Данные из ".concat(e.days.find((function(t){return t.code===e.chosenDay})).title," скопированы в ").concat(e.days.find((function(e){return e.code===t})).title)))}},actions:{setDay:function(e,t){var n=e.commit,i=t.dayCode,r=t.type;switch(r){case"chosen":n("SET_CHOSEN_DAY",i);break;case"current":n("SET_CURRENT_DAY",i)}},updateSchedule:function(e,t){var n=e.commit,i=e.state,r=t.item,c=t.type;switch(c){case"add":n("ADD_ITEM",r);break;case"remove":n("REMOVE_ITEM",r);break;case"update":n("UPDATE_ITEM",r);break;case"replace":n("REPLACE_ITEM",r);break}localStorage.setItem("schedule",JSON.stringify(i.schedule))}},getters:{currentSchedule:function(e){return z(e)}}});a["a"].config.productionTip=!1,new a["a"]({store:G,render:function(e){return e(Z)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"734d":function(e,t,n){"use strict";n("f49e")},"9c0c":function(e,t,n){},c2af:function(e,t,n){},e611:function(e,t,n){"use strict";n("0560")},f49e:function(e,t,n){}});
//# sourceMappingURL=app.80d8091c.js.map
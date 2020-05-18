(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[3],{622:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a.n(n),o=a(186),l=a(32),i=a(191),s=a.n(i),d=a(187);d.d.global=s()(d.d.global,{defaultFontFamily:"Archia",elements:{line:{fill:!1},point:{pointStyle:"rectRounded"}},tooltips:{intersect:!1,mode:"nearest",position:"average",displayColors:!1,borderWidth:0,titleSpacing:4,titleMarginBottom:8,bodySpacing:5,cornerRadius:3,xPadding:6,yPadding:6,caretSize:0},legend:{display:!0,position:"bottom",labels:{padding:15,usePointStyle:!0}},hover:{intersect:!1},layout:{padding:{left:0,right:0,top:0,bottom:20}}});var c=function(e){return"Intl"in window?new Intl.NumberFormat("en-IN").format(e):e},u={responsive:!0,events:["click","mousemove","mouseout","touchstart","touchmove","touchend"],maintainAspectRatio:!1,tooltips:{backgroundColor:"rgba(20,20,20,0.9)",titleFontColor:"rgba(255,255,255, 0.9)",bodyFontColor:"rgba(255,255,255, 0.9)",caretSize:0,borderWidth:0,mode:"index",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=c(Math.round(100*e.yLabel)/100),a}}},elements:{point:{radius:0},line:{tension:.1}}},m={type:"linear",ticks:{beginAtZero:!0,max:void 0,precision:0,callback:function(e){return c(e)}},gridLines:{color:"rgba(0, 0, 0, 0.07)",drawBorder:!1,tickMarkLength:6}},b={gridLines:{color:"rgba(0, 0, 0, 0)"}},p=a(0),g=a.n(p);var h=function(e){var t=Array(10).fill(0);if(!e.data||0===e.data.length)return g.a.createElement("div",null);e.data.forEach((function(e){if(e.agebracket)for(var a=parseInt(e.agebracket),n=0;n<10;n++)a>10*n&&a<=10*(n+1)&&t[n]++}));var a={labels:["0-10","11-20","21-30","31-40","41-50","51-60","61-70","71-80","81-90","91-100"],datasets:[{data:t,label:"Cases",backgroundColor:"#bc79c9"}]},n=s()(u,{legend:{display:!1},scales:{xAxes:[s()(b,{stacked:!0})],yAxes:[{stacked:!0}]},events:["mousemove","mouseout","touchstart","touchmove","touchend"],responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index"}}),r=t.reduce((function(e,t){return e+t}),0);return g.a.createElement("div",{className:"charts-header"},g.a.createElement("div",{className:"chart-title"},e.title),g.a.createElement("div",{className:"chart-content doughnut"},g.a.createElement(d.a,{data:a,options:n})),g.a.createElement("div",{className:"chart-note"},"Sample Size: ",c(r)," patients"))},f=a(86),v=a(74),y=a(48);var M=function(e){var t=[],a=g.a.createRef();if(!e.data||0===e.data.length)return g.a.createElement("div",null);var n=new Map;e.data.forEach((function(e){"Confirmed"===e.status&&Object.keys(e).forEach((function(a){if("date"===a){var r=Object(y.a)(e.date,"dd-MMM-yy",new Date);t.push(r)}if("status"!==a&&"date"!==a){n.has(a)||n.set(a,[]);var o=n.get(a).length>0?parseInt(n.get(a)[n.get(a).length-1]):0,l=""!==e[a]?parseInt(e[a]):0;n.get(a).push(o+l)}}))}));var r=new Map(Object(f.a)(n.entries()).sort((function(e,t){return e[1][e[1].length-1]<t[1][t[1].length-1]?1:-1}))),o=["#718af0","#7dd6fa","#59b3aa","#9bc26b","#e5d22f","#ffb041","#ff8a66","#db6b8f","#bd66cc","#8e8e8e"],l=0,i=[];r.forEach((function(e,t){"tt"!==t&&(l>=10||(i.push({borderWidth:2,data:n.get(t),borderCapStyle:"round",pointBackgroundColor:o[l],label:Object(v.k)(t),borderColor:o[l],pointHoverRadius:.5}),l++))}));var c={labels:t,datasets:i},p=s()(u,{tooltips:{mode:"index"},elements:{point:{radius:0},line:{tension:0}},legend:{labels:{boxWidth:20,fontSize:11}},scales:{yAxes:[s()(m,{type:"linear",ticks:{beginAtZero:!0,max:void 0,precision:0},scaleLabel:{display:!1,labelString:"Total Cases"}})],xAxes:[s()(b,{type:"time",time:{unit:"day",tooltipFormat:"MMM DD",stepSize:7,displayFormats:{millisecond:"MMM DD",second:"MMM DD",minute:"MMM DD",hour:"MMM DD",day:"MMM DD",week:"MMM DD",month:"MMM DD",quarter:"MMM DD",year:"MMM DD"}},gridLines:{color:"rgba(0, 0, 0, 0)"}})]}});return g.a.createElement("div",{className:"charts-header"},g.a.createElement("div",{className:"chart-title"},e.title),g.a.createElement("div",{className:"chart-content"},g.a.createElement(d.c,{data:c,options:p,ref:a})),g.a.createElement("div",{className:"chart-note",style:{marginTop:"0px",height:"30px"}},g.a.createElement("button",{onClick:function(){for(var e=a.current.chartInstance,t=0;t<e.data.datasets.length;t++){var n=e.getDatasetMeta(t);n.hidden=null===n.hidden?!a.current.chartInstance.data.datasets[t].hidden:null}e.update()}},"Toggle Selection")))},E=a(72);var D=function(e){var t=[],a=[],n=[],r=[];if(!e.timeseries||0===e.timeseries.length)return g.a.createElement("div",null);e.timeseries.forEach((function(e,o){if(o>=31){var l=Object(y.a)(e.date,"dd MMMM",new Date(2020,0,1));t.push(Object(E.a)(l,"dd MMM")),a.push(e.dailyconfirmed),n.push(e.dailyrecovered),r.push(e.dailydeceased)}}));var o={labels:t,datasets:[{data:n,label:"Recovered",backgroundColor:"#7ebf80"},{data:r,label:"Deceased",backgroundColor:"#6c757d"},{data:a,label:"Confirmed",backgroundColor:"#ff6862"}]},l=s()(u,{tooltips:{mode:"index"},legend:{display:!0,reverse:!0,labels:{usePointStyle:!0,generateLabels:function(e){var t=d.d.global.legend.labels.generateLabels(e);return t.forEach((function(e){e.pointStyle="rectRounded"})),t}}},scales:{xAxes:[s()(b,{stacked:!0})],yAxes:[s()(m,{stacked:!0,ticks:{callback:function(e){return c(e)}}})]}});return g.a.createElement("div",{className:"charts-header"},g.a.createElement("div",{className:"chart-title"},e.title),g.a.createElement("div",{className:"chart-content"},g.a.createElement(d.a,{data:o,options:l})))};var C=function(e){var t=0,a=0;if(!e.data||0===e.data.length)return g.a.createElement("div",null);e.data.forEach((function(e){"M"===e.gender?t++:"F"===e.gender&&a++}));var n={datasets:[{data:[t,a],backgroundColor:["#6497f3","#ea6e9a"],label:"Hola"}],labels:["Male","Female"]},r=s()(u,{tooltips:{mode:"point",position:"nearest",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex],n=a._meta[Object.keys(a._meta)[0]].total,r=a.data[e.index],o=parseFloat((r/n*100).toFixed(1));return c(r)+" ("+o+"%)"},title:function(e,t){return t.labels[e[0].index]}}}});return g.a.createElement("div",{className:"charts-header"},g.a.createElement("div",{className:"chart-title"},e.title),g.a.createElement("div",{className:"chart-content doughnut"},g.a.createElement(d.b,{data:n,options:r})),g.a.createElement("div",{className:"chart-note"},"Sample size: ",c(t+a)," patients"))};var k=function(e){var t=[];if(d.d.global.elements.line.fill=!1,d.d.global.tooltips.intersect=!1,d.d.global.tooltips.mode="nearest",d.d.global.tooltips.position="average",d.d.global.tooltips.backgroundColor="rgba(255, 255, 255, 0.6)",d.d.global.tooltips.displayColors=!1,d.d.global.tooltips.borderColor="#c62828",d.d.global.tooltips.borderWidth=1,d.d.global.tooltips.titleFontColor="#000",d.d.global.tooltips.bodyFontColor="#000",d.d.global.tooltips.caretPadding=4,d.d.global.tooltips.intersect=!1,d.d.global.tooltips.mode="nearest",d.d.global.tooltips.position="nearest",d.d.global.legend.display=!0,d.d.global.legend.position="bottom",d.d.global.hover.intersect=!1,!e.data||0===e.data.length)return g.a.createElement("div",null);var a=new Map,n=new Map;e.data.forEach((function(e,r){"Confirmed"===e.status&&Object.keys(e).forEach((function(r){if("date"===r){var o=Object(y.a)(e.date,"dd-MMM-yy",new Date);t.push(o)}if("status"!==r&&"date"!==r){var l=""!==e[r]?parseInt(e[r]):0;if(0!==l||a.has(r)){a.has(r)||(a.set(r,[]),n.set(r,[]));for(var i=a.get(r).length>0?parseInt(a.get(r)[a.get(r).length-1].x):0,s=n.get(r),d=0,c=1;c<=7;++c){var u=s.length-c;u>=0&&(d+=s[u])}a.get(r).push({x:i+l,y:d}),n.get(r).push(l)}}}))}));var r=new Map(Object(f.a)(a.entries()).sort((function(e,t){return e[1][e[1].length-1].x<t[1][t[1].length-1].x?1:-1}))),o=["#ff073a","#28a745","#342ead","#7D5BA6","#DD7596","#16c8f0","#f67575","#2b580c","#9D44B5","#91132d","#6D9DC5","#2b580c","#6c757d","#f67575","#d4f8e8"],l=0,i=[];r.forEach((function(e,t){"tt"!==t&&(l>=10||(i.push({data:a.get(t),label:Object(v.k)(t),order:l,borderWidth:1,borderCapStyle:"round",borderColor:o[l],pointBackgroundColor:o[l],pointHoverRadius:1}),l++))}));var s={datasets:i},c={responsive:!0,events:["click","mousemove","mouseout","touchstart","touchmove"],maintainAspectRatio:!1,tooltips:{mode:"index",backgroundColor:"rgba(0, 0, 0, 0.9)",borderColor:"rgba(0, 0, 0, 0)",bodyFontColor:"white",titleFontColor:"white",displayColors:!0},elements:{point:{radius:0},line:{cubicInterpolationMode:"monotone"}},layout:{padding:{left:20,right:20,top:0,bottom:20}},scales:{yAxes:[{type:"logarithmic",ticks:{beginAtZero:!0,min:1,max:2e3,precision:0,callback:function(e,t,a){return Number(e.toString())}},scaleLabel:{display:!0,labelString:"New Cases (since last 7 days)"},gridLines:{color:"rgba(0, 0, 0, 0)"}}],xAxes:[{type:"logarithmic",ticks:{beginAtZero:!0,min:0,max:2e3,precision:0,callback:function(e,t,a){return Number(e.toString())}},scaleLabel:{display:!0,labelString:"Total Cases"},gridLines:{color:"rgba(0, 0, 0, 0)"}}]}};return g.a.createElement("div",{className:"charts-header"},g.a.createElement("div",{className:"chart-title"},e.title),g.a.createElement("div",{className:"chart-content"},g.a.createElement(d.c,{data:s,options:c})))};var x=function(e){if(!e.data||0===e.data.length)return g.a.createElement("div",null);var t={};e.data.forEach((function(e){e.nationality&&(t.hasOwnProperty(e.nationality.toLowerCase())||(t[e.nationality.toLowerCase()]=0),t[e.nationality.toLowerCase()]++)}));var a=[],n=[];Object.keys(t).forEach((function(e){e&&(n.push(e.toUpperCase()),a.push(t[e]))}));var r={datasets:[{data:a,backgroundColor:["#ff8a66","#718af0","#7dd6fa","#59b3aa","#9bc26b","#e5d22f","#ffb041","#db6b8f","#bd66cc","#8e8e8e"]}],labels:n},o={layout:{padding:{left:20,right:20,top:0,bottom:20}},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"point",backgroundColor:"rgba(0, 0, 0, 0.8)",borderColor:"rgba(0, 0, 0, 0)",bodyFontColor:"white",titleFontColor:"white",events:["mousemove","mouseout","touchstart","touchmove","touchend"],callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex],n=a._meta[Object.keys(a._meta)[0]].total,r=a.data[e.index];return r+" ("+parseFloat((r/n*100).toFixed(1))+"%)"},title:function(e,t){return t.labels[e[0].index]}}}},l=a.reduce((function(e,t){return e+t}),0);return g.a.createElement("div",{className:"charts-header"},g.a.createElement("div",{className:"chart-title"},e.title),g.a.createElement("div",{className:"chart-content doughnut"},g.a.createElement(d.b,{data:r,options:o})),g.a.createElement("div",{className:"chart-note"},"Sample size: ",c(l)," patients"))};var N=function(e){var t=[],a=[],n=[],r=[];if(!e.timeseries||0===e.timeseries.length)return g.a.createElement("div",null);e.timeseries.forEach((function(e,o){if(o>=31){var l=Object(y.a)(e.date,"dd MMMM",new Date(2020,0,1));t.push(l),a.push(e.totalconfirmed),n.push(e.totalrecovered),r.push(e.totaldeceased)}}));var o={labels:t,datasets:[{borderWidth:2,data:a,borderCapStyle:"round",pointBackgroundColor:"#ff6862",label:"Confirmed",borderColor:"#ff6862",pointHoverRadius:2},{borderWidth:2,data:n,borderCapStyle:"round",pointBackgroundColor:"#7ebf80",label:"Recovered",borderColor:"#7ebf80",pointHoverRadius:2},{borderWidth:2,data:r,borderCapStyle:"round",pointBackgroundColor:"#6c757d",label:"Deceased",borderColor:"#6c757d",pointHoverRadius:2}]},l=s()(u,{elements:{point:{radius:0},line:{tension:.1}},scales:{yAxes:[s()(m,{scaleLabel:{display:!1,labelString:"Total Cases"}})],xAxes:[s()(b,{type:"time",time:{unit:"day",tooltipFormat:"MMM DD",stepSize:7,displayFormats:{millisecond:"MMM DD",second:"MMM DD",minute:"MMM DD",hour:"MMM DD",day:"MMM DD",week:"MMM DD",month:"MMM DD",quarter:"MMM DD",year:"MMM DD"}}})]}});return e.mode&&(l.scales.yAxes=[{type:"logarithmic",ticks:{min:0,max:1e4,callback:function(e,t,a){return 1e4===e?"10000":2e3===e?"2500":500===e?"500":100===e?"100":20===e?"25":5===e?"5":0===e?"0":null}},scaleLabel:{display:!1,labelString:"Total Cases"}}]),g.a.createElement("div",{className:"charts-header"},g.a.createElement("div",{className:"chart-title"},e.title),g.a.createElement("div",{className:"chart-content"},g.a.createElement(d.c,{data:o,options:l})))},S=a(181),w=a.n(S),j=a(89);t.default=function(){var e=Object(p.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(p.useState)([]),s=Object(l.a)(i,2),d=s[0],c=s[1],u=Object(p.useState)([]),m=Object(l.a)(u,2),b=m[0],f=m[1],v=Object(p.useState)([]),y=Object(l.a)(v,2),E=y[0],S=y[1];Object(p.useEffect)((function(){!1===a&&O()}),[a]);var O=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,o,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([w.a.get("https://api.covid19india.org/data.json"),w.a.get("https://api.covid19india.org/raw_data.json"),w.a.get("https://api.covid19india.org/states_daily.json")]);case 3:t=e.sent,a=Object(l.a)(t,3),o=a[0],i=a[1],s=a[2],c(o.data.cases_time_series),S(s.data.states_daily),f(i.data.raw_data),n(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return g.a.createElement("div",{className:"cards-container"},g.a.createElement(j.a,null,g.a.createElement("title",null,"Deep Dive - covid19india.org"),g.a.createElement("meta",{name:"title",content:"Deep Dive - covid19india.org"})),g.a.createElement("section",{className:"cards"},g.a.createElement("div",{className:"card fadeInUp",style:{animationDelay:"0.7s"}},g.a.createElement(N,{title:"Total Cases",timeseries:d})),g.a.createElement("div",{className:"card fadeInUp",style:{animationDelay:"0.7s"}},g.a.createElement(D,{title:"Daily Cases",timeseries:d})),g.a.createElement("div",{className:"card card-big fadeInUp",style:{animationDelay:"0.7s"}},g.a.createElement(M,{title:"Total Cases by State",data:E})),g.a.createElement("div",{className:"card fadeInUp",style:{animationDelay:"0.7s"}},g.a.createElement(k,{title:"States - Growth Trend",data:E})),g.a.createElement("div",{className:"card fadeInUp",style:{animationDelay:"0.7s"}},g.a.createElement(C,{title:"Patient Gender",data:b})),g.a.createElement("div",{className:"card fadeInUp",style:{animationDelay:"0.7s"}},g.a.createElement(h,{title:"Patients by Age",data:b})),g.a.createElement("div",{className:"card fadeInUp",style:{animationDelay:"0.7s"}},g.a.createElement(x,{title:"Patients by  Nationality",data:b}))))}}}]);
//# sourceMappingURL=DeepDive.2320bdee.chunk.js.map
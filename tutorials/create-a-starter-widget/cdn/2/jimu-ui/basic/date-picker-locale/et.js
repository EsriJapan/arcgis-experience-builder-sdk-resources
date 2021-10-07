System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>d});var a={lessThanXSeconds:{standalone:{one:"vähem kui üks sekund",other:"vähem kui {{count}} sekundit"},withPreposition:{one:"vähem kui ühe sekundi",other:"vähem kui {{count}} sekundi"}},xSeconds:{standalone:{one:"üks sekund",other:"{{count}} sekundit"},withPreposition:{one:"ühe sekundi",other:"{{count}} sekundi"}},halfAMinute:{standalone:"pool minutit",withPreposition:"poole minuti"},lessThanXMinutes:{standalone:{one:"vähem kui üks minut",other:"vähem kui {{count}} minutit"},withPreposition:{one:"vähem kui ühe minuti",other:"vähem kui {{count}} minuti"}},xMinutes:{standalone:{one:"üks minut",other:"{{count}} minutit"},withPreposition:{one:"ühe minuti",other:"{{count}} minuti"}},aboutXHours:{standalone:{one:"umbes üks tund",other:"umbes {{count}} tundi"},withPreposition:{one:"umbes ühe tunni",other:"umbes {{count}} tunni"}},xHours:{standalone:{one:"üks tund",other:"{{count}} tundi"},withPreposition:{one:"ühe tunni",other:"{{count}} tunni"}},xDays:{standalone:{one:"üks päev",other:"{{count}} päeva"},withPreposition:{one:"ühe päeva",other:"{{count}} päeva"}},aboutXWeeks:{standalone:{one:"umbes üks nädal",other:"umbes {{count}} nädalat"},withPreposition:{one:"umbes ühe nädala",other:"umbes {{count}} nädala"}},xWeeks:{standalone:{one:"üks nädal",other:"{{count}} nädalat"},withPreposition:{one:"ühe nädala",other:"{{count}} nädala"}},aboutXMonths:{standalone:{one:"umbes üks kuu",other:"umbes {{count}} kuud"},withPreposition:{one:"umbes ühe kuu",other:"umbes {{count}} kuu"}},xMonths:{standalone:{one:"üks kuu",other:"{{count}} kuud"},withPreposition:{one:"ühe kuu",other:"{{count}} kuu"}},aboutXYears:{standalone:{one:"umbes üks aasta",other:"umbes {{count}} aastat"},withPreposition:{one:"umbes ühe aasta",other:"umbes {{count}} aasta"}},xYears:{standalone:{one:"üks aasta",other:"{{count}} aastat"},withPreposition:{one:"ühe aasta",other:"{{count}} aasta"}},overXYears:{standalone:{one:"rohkem kui üks aasta",other:"rohkem kui {{count}} aastat"},withPreposition:{one:"rohkem kui ühe aasta",other:"rohkem kui {{count}} aasta"}},almostXYears:{standalone:{one:"peaaegu üks aasta",other:"peaaegu {{count}} aastat"},withPreposition:{one:"peaaegu ühe aasta",other:"peaaegu {{count}} aasta"}}};function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var i={date:n({formats:{full:"eeee, d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:n({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} 'kell' {{time}}",long:"{{date}} 'kell' {{time}}",medium:"{{date}}. {{time}}",short:"{{date}}. {{time}}"},defaultWidth:"full"})},r={lastWeek:"'eelmine' eeee 'kell' p",yesterday:"'eile kell' p",today:"'täna kell' p",tomorrow:"'homme kell' p",nextWeek:"'järgmine' eeee 'kell' p",other:"P"};function o(e){return function(t,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;n=e.values[s]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}}var u,s={narrow:["J","V","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],wide:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"]},l={narrow:["P","E","T","K","N","R","L"],short:["P","E","T","K","N","R","L"],abbreviated:["pühap.","esmasp.","teisip.","kolmap.","neljap.","reede.","laup."],wide:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"]};function m(e){return function(t,a){var n=String(t),i=a||{},r=i.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=n.match(o);if(!u)return null;var s,l=u[0],m=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(m)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(l))return a}(m):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(l))return a}(m),s=e.valueCallback?e.valueCallback(s):s,{value:s=i.valueCallback?i.valueCallback(s):s,rest:n.slice(l.length)}}}const d={code:"et",formatDistance:function(e,t,n){var i,r=(n=n||{}).addSuffix?a[e].withPreposition:a[e].standalone;return i="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t),n.addSuffix?n.comparison>0?i+" pärast":i+" eest":i},formatLong:i,formatRelative:function(e,t,a,n){return r[e]},localize:{ordinalNumber:function(e){return Number(e)+"."},era:o({values:{narrow:["e.m.a","m.a.j"],abbreviated:["e.m.a","m.a.j"],wide:["enne meie ajaarvamist","meie ajaarvamise järgi"]},defaultWidth:"wide"}),quarter:o({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:o({values:s,formattingValues:s,defaultWidth:"wide"}),day:o({values:l,formattingValues:l,defaultWidth:"wide"}),dayPeriod:o({values:{narrow:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},abbreviated:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},wide:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"}},formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},abbreviated:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},wide:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"}},defaultWidth:"wide"})},match:{ordinalNumber:(u={matchPattern:/^\d+\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var a=String(e),n=t||{},i=a.match(u.matchPattern);if(!i)return null;var r=i[0],o=a.match(u.parsePattern);if(!o)return null;var s=u.valueCallback?u.valueCallback(o[0]):o[0];return{value:s=n.valueCallback?n.valueCallback(s):s,rest:a.slice(r.length)}}),era:m({matchPatterns:{narrow:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,abbreviated:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,wide:/^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^(m|p)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:{narrow:/^[jvmasond]/i,abbreviated:/^('jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets')/i,wide:/^('jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember')/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^v/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^v/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[petknrl]/i,short:/^[petknrl]/i,abbreviated:/^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,wide:/^('pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev')/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^e/i,/^t/i,/^k/i,/^n/i,/^r/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{any:/^(am|pm|kesköö|keskpäev|hommik|pärastlõuna|õhtu|öö)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^keskö/i,noon:/^keskp/i,morning:/hommik/i,afternoon:/pärastlõuna/i,evening:/õhtu/i,night:/öö/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};return t})())}}}));
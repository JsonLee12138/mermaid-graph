import{d as Zt}from"./chunk-55IACEB6-BO432aOl-B5rDRNot.js";import{d as te}from"./chunk-QN33PNHL-qyWdV5Se-Cl4oI1wI.js";import{p as u,F as _,f as R,U as ee,i as se,D as ie,b as re,P as ae,O as ne,R as oe,l as le,aB as ce,J as W,$ as he}from"./index-B8Niws7R.js";var Dt=(function(){var t=u(function(w,r,a,y){for(a=a||{},y=w.length;y--;a[w[y]]=r);return a},"o"),e=[1,2],o=[1,3],s=[1,4],d=[2,4],h=[1,9],f=[1,11],S=[1,16],n=[1,17],g=[1,18],L=[1,19],k=[1,33],D=[1,20],O=[1,21],c=[1,22],C=[1,23],b=[1,24],N=[1,26],v=[1,27],P=[1,28],Y=[1,29],tt=[1,30],et=[1,31],st=[1,32],it=[1,35],rt=[1,36],at=[1,37],nt=[1,38],K=[1,34],p=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],ot=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],xt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],gt={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:u(function(w,r,a,y,m,i,$){var l=i.length-1;switch(m){case 3:return y.setRootDoc(i[l]),i[l];case 4:this.$=[];break;case 5:i[l]!="nl"&&(i[l-1].push(i[l]),this.$=i[l-1]);break;case 6:case 7:this.$=i[l];break;case 8:this.$="nl";break;case 12:this.$=i[l];break;case 13:const V=i[l-1];V.description=y.trimColon(i[l]),this.$=V;break;case 14:this.$={stmt:"relation",state1:i[l-2],state2:i[l]};break;case 15:const St=y.trimColon(i[l]);this.$={stmt:"relation",state1:i[l-3],state2:i[l-1],description:St};break;case 19:this.$={stmt:"state",id:i[l-3],type:"default",description:"",doc:i[l-1]};break;case 20:var G=i[l],z=i[l-2].trim();if(i[l].match(":")){var ct=i[l].split(":");G=ct[0],z=[z,ct[1]]}this.$={stmt:"state",id:G,type:"default",description:z};break;case 21:this.$={stmt:"state",id:i[l-3],type:"default",description:i[l-5],doc:i[l-1]};break;case 22:this.$={stmt:"state",id:i[l],type:"fork"};break;case 23:this.$={stmt:"state",id:i[l],type:"join"};break;case 24:this.$={stmt:"state",id:i[l],type:"choice"};break;case 25:this.$={stmt:"state",id:y.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[l-1].trim(),note:{position:i[l-2].trim(),text:i[l].trim()}};break;case 29:this.$=i[l].trim(),y.setAccTitle(this.$);break;case 30:case 31:this.$=i[l].trim(),y.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:i[l-3],url:i[l-2],tooltip:i[l-1]};break;case 33:this.$={stmt:"click",id:i[l-3],url:i[l-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:i[l-1].trim(),classes:i[l].trim()};break;case 36:this.$={stmt:"style",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 37:this.$={stmt:"applyClass",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 38:y.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:y.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:y.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:y.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:i[l].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:i[l-2].trim(),classes:[i[l].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:i[l-2].trim(),classes:[i[l].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:o,6:s},{1:[3]},{3:5,4:e,5:o,6:s},{3:6,4:e,5:o,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],d,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:h,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:n,19:g,22:L,24:k,25:D,26:O,27:c,28:C,29:b,32:25,33:N,35:v,37:P,38:Y,41:tt,45:et,48:st,51:it,52:rt,53:at,54:nt,57:K},t(p,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:S,17:n,19:g,22:L,24:k,25:D,26:O,27:c,28:C,29:b,32:25,33:N,35:v,37:P,38:Y,41:tt,45:et,48:st,51:it,52:rt,53:at,54:nt,57:K},t(p,[2,7]),t(p,[2,8]),t(p,[2,9]),t(p,[2,10]),t(p,[2,11]),t(p,[2,12],{14:[1,40],15:[1,41]}),t(p,[2,16]),{18:[1,42]},t(p,[2,18],{20:[1,43]}),{23:[1,44]},t(p,[2,22]),t(p,[2,23]),t(p,[2,24]),t(p,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(p,[2,28]),{34:[1,49]},{36:[1,50]},t(p,[2,31]),{13:51,24:k,57:K},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(ot,[2,44],{58:[1,56]}),t(ot,[2,45],{58:[1,57]}),t(p,[2,38]),t(p,[2,39]),t(p,[2,40]),t(p,[2,41]),t(p,[2,6]),t(p,[2,13]),{13:58,24:k,57:K},t(p,[2,17]),t(xt,d,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(p,[2,29]),t(p,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(p,[2,14],{14:[1,71]}),{4:h,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:n,19:g,21:[1,72],22:L,24:k,25:D,26:O,27:c,28:C,29:b,32:25,33:N,35:v,37:P,38:Y,41:tt,45:et,48:st,51:it,52:rt,53:at,54:nt,57:K},t(p,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(p,[2,34]),t(p,[2,35]),t(p,[2,36]),t(p,[2,37]),t(ot,[2,46]),t(ot,[2,47]),t(p,[2,15]),t(p,[2,19]),t(xt,d,{7:78}),t(p,[2,26]),t(p,[2,27]),{5:[1,79]},{5:[1,80]},{4:h,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:n,19:g,21:[1,81],22:L,24:k,25:D,26:O,27:c,28:C,29:b,32:25,33:N,35:v,37:P,38:Y,41:tt,45:et,48:st,51:it,52:rt,53:at,54:nt,57:K},t(p,[2,32]),t(p,[2,33]),t(p,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:u(function(w,r){if(r.recoverable)this.trace(w);else{var a=new Error(w);throw a.hash=r,a}},"parseError"),parse:u(function(w){var r=this,a=[0],y=[],m=[null],i=[],$=this.table,l="",G=0,z=0,ct=2,V=1,St=i.slice.call(arguments,1),T=Object.create(this.lexer),j={yy:{}};for(var mt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,mt)&&(j.yy[mt]=this.yy[mt]);T.setInput(w,j.yy),j.yy.lexer=T,j.yy.parser=this,typeof T.yylloc>"u"&&(T.yylloc={});var _t=T.yylloc;i.push(_t);var qt=T.options&&T.options.ranges;typeof j.yy.parseError=="function"?this.parseError=j.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Qt(I){a.length=a.length-2*I,m.length=m.length-I,i.length=i.length-I}u(Qt,"popStack");function Lt(){var I;return I=y.pop()||T.lex()||V,typeof I!="number"&&(I instanceof Array&&(y=I,I=y.pop()),I=r.symbols_[I]||I),I}u(Lt,"lex");for(var x,U,A,Tt,M={},ht,B,It,dt;;){if(U=a[a.length-1],this.defaultActions[U]?A=this.defaultActions[U]:((x===null||typeof x>"u")&&(x=Lt()),A=$[U]&&$[U][x]),typeof A>"u"||!A.length||!A[0]){var kt="";dt=[];for(ht in $[U])this.terminals_[ht]&&ht>ct&&dt.push("'"+this.terminals_[ht]+"'");T.showPosition?kt="Parse error on line "+(G+1)+`:
`+T.showPosition()+`
Expecting `+dt.join(", ")+", got '"+(this.terminals_[x]||x)+"'":kt="Parse error on line "+(G+1)+": Unexpected "+(x==V?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(kt,{text:T.match,token:this.terminals_[x]||x,line:T.yylineno,loc:_t,expected:dt})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+x);switch(A[0]){case 1:a.push(x),m.push(T.yytext),i.push(T.yylloc),a.push(A[1]),x=null,z=T.yyleng,l=T.yytext,G=T.yylineno,_t=T.yylloc;break;case 2:if(B=this.productions_[A[1]][1],M.$=m[m.length-B],M._$={first_line:i[i.length-(B||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(B||1)].first_column,last_column:i[i.length-1].last_column},qt&&(M._$.range=[i[i.length-(B||1)].range[0],i[i.length-1].range[1]]),Tt=this.performAction.apply(M,[l,z,G,j.yy,A[1],m,i].concat(St)),typeof Tt<"u")return Tt;B&&(a=a.slice(0,-1*B*2),m=m.slice(0,-1*B),i=i.slice(0,-1*B)),a.push(this.productions_[A[1]][0]),m.push(M.$),i.push(M._$),It=$[a[a.length-2]][a[a.length-1]],a.push(It);break;case 3:return!0}}return!0},"parse")},Xt=(function(){var w={EOF:1,parseError:u(function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},"parseError"),setInput:u(function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:u(function(r){var a=r.length,y=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),y.length-1&&(this.yylineno-=y.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:y?(y.length===m.length?this.yylloc.first_column:0)+m[m.length-y.length].length-y[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:u(function(r){this.unput(this.match.slice(r))},"less"),pastInput:u(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:u(function(r,a){var y,m,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),m=r[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],y=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),y)return y;if(this._backtrack){for(var $ in i)this[$]=i[$];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,y,m;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),$=0;$<i.length;$++)if(y=this._input.match(this.rules[i[$]]),y&&(!a||y[0].length>a[0].length)){if(a=y,m=$,this.options.backtrack_lexer){if(r=this.test_match(y,i[$]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,i[m]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){var r=this.next();return r||this.lex()},"lex"),begin:u(function(r){this.conditionStack.push(r)},"begin"),popState:u(function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:u(function(r){this.begin(r)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:u(function(r,a,y,m){switch(y){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:break;case 9:break;case 10:return 5;case 11:break;case 12:break;case 13:break;case 14:break;case 15:return this.pushState("SCALE"),17;case 16:return 18;case 17:this.popState();break;case 18:return this.begin("acc_title"),33;case 19:return this.popState(),"acc_title_value";case 20:return this.begin("acc_descr"),35;case 21:return this.popState(),"acc_descr_value";case 22:this.begin("acc_descr_multiline");break;case 23:this.popState();break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 27:return this.popState(),this.pushState("CLASSDEFID"),42;case 28:return this.popState(),43;case 29:return this.pushState("CLASS"),48;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;case 31:return this.popState(),50;case 32:return this.pushState("STYLE"),45;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 34:return this.popState(),47;case 35:return this.pushState("SCALE"),17;case 36:return 18;case 37:this.popState();break;case 38:this.pushState("STATE");break;case 39:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),25;case 40:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),26;case 41:return this.popState(),a.yytext=a.yytext.slice(0,-10).trim(),27;case 42:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),25;case 43:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),26;case 44:return this.popState(),a.yytext=a.yytext.slice(0,-10).trim(),27;case 45:return 51;case 46:return 52;case 47:return 53;case 48:return 54;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";case 51:return this.popState(),"ID";case 52:this.popState();break;case 53:return"STATE_DESCR";case 54:return 19;case 55:this.popState();break;case 56:return this.popState(),this.pushState("struct"),20;case 57:break;case 58:return this.popState(),21;case 59:break;case 60:return this.begin("NOTE"),29;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:return this.popState(),this.pushState("NOTE_ID"),60;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 65:break;case 66:return"NOTE_TEXT";case 67:return this.popState(),"ID";case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;case 69:return this.popState(),a.yytext=a.yytext.substr(2).trim(),31;case 70:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),31;case 71:return 6;case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return a.yytext=a.yytext.trim(),14;case 77:return 15;case 78:return 28;case 79:return 58;case 80:return 5;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}};return w})();gt.lexer=Xt;function lt(){this.yy={}}return u(lt,"Parser"),lt.prototype=gt,gt.Parser=lt,new lt})();Dt.parser=Dt;var Fe=Dt,de="TB",Pt="TB",vt="dir",J="state",H="root",Ct="relation",ue="classDef",pe="style",ye="applyClass",Q="default",Yt="divider",Ft="fill:none",Gt="fill: #333",jt="c",Ut="text",Wt="normal",bt="rect",Et="rectWithTitle",fe="stateStart",ge="stateEnd",At="divider",Ot="roundedWithTitle",Se="note",me="noteGroup",Z="statediagram",_e="state",Te=`${Z}-${_e}`,Kt="transition",ke="note",be="note-edge",Ee=`${Kt} ${be}`,De=`${Z}-${ke}`,Ce="cluster",$e=`${Z}-${Ce}`,xe="cluster-alt",Le=`${Z}-${xe}`,zt="parent",Mt="note",Ie="state",$t="----",ve=`${$t}${Mt}`,wt=`${$t}${zt}`,Ht=u((t,e=Pt)=>{if(!t.doc)return e;let o=e;for(const s of t.doc)s.stmt==="dir"&&(o=s.value);return o},"getDir"),Ae=u(function(t,e){return e.db.getClasses()},"getClasses"),Oe=u(async function(t,e,o,s){_.info("REF0:"),_.info("Drawing state diagram (v2)",e);const{securityLevel:d,state:h,layout:f}=R();s.db.extract(s.db.getRootDocV2());const S=s.db.getData(),n=Zt(e,d);S.type=s.type,S.layoutAlgorithm=f,S.nodeSpacing=h?.nodeSpacing||50,S.rankSpacing=h?.rankSpacing||50,S.markers=["barb"],S.diagramId=e,await ee(S,n);const g=8;try{(typeof s.db.getLinks=="function"?s.db.getLinks():new Map).forEach((L,k)=>{const D=typeof k=="string"?k:typeof k?.id=="string"?k.id:"";if(!D){_.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(k));return}const O=n.node()?.querySelectorAll("g");let c;if(O?.forEach(v=>{v.textContent?.trim()===D&&(c=v)}),!c){_.warn("⚠️ Could not find node matching text:",D);return}const C=c.parentNode;if(!C){_.warn("⚠️ Node has no parent, cannot wrap:",D);return}const b=document.createElementNS("http://www.w3.org/2000/svg","a"),N=L.url.replace(/^"+|"+$/g,"");if(b.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",N),b.setAttribute("target","_blank"),L.tooltip){const v=L.tooltip.replace(/^"+|"+$/g,"");b.setAttribute("title",v)}C.replaceChild(b,c),b.appendChild(c),_.info("🔗 Wrapped node in <a> tag for:",D,L.url)})}catch(L){_.error("❌ Error injecting clickable links:",L)}se.insertTitle(n,"statediagramTitleText",h?.titleTopMargin??25,s.db.getDiagramTitle()),te(n,g,Z,h?.useMaxWidth??!0)},"draw"),Ge={getClasses:Ae,draw:Oe,getDir:Ht},yt=new Map,F=0;function ft(t="",e=0,o="",s=$t){const d=o!==null&&o.length>0?`${s}${o}`:"";return`${Ie}-${t}${d}-${e}`}u(ft,"stateDomId");var we=u((t,e,o,s,d,h,f,S)=>{_.trace("items",e),e.forEach(n=>{switch(n.stmt){case J:q(t,n,o,s,d,h,f,S);break;case Q:q(t,n,o,s,d,h,f,S);break;case Ct:{q(t,n.state1,o,s,d,h,f,S),q(t,n.state2,o,s,d,h,f,S);const g={id:"edge"+F,start:n.state1.id,end:n.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Ft,labelStyle:"",label:W.sanitizeText(n.description??"",R()),arrowheadStyle:Gt,labelpos:jt,labelType:Ut,thickness:Wt,classes:Kt,look:f};d.push(g),F++}break}})},"setupDoc"),Rt=u((t,e=Pt)=>{let o=e;if(t.doc)for(const s of t.doc)s.stmt==="dir"&&(o=s.value);return o},"getDir");function X(t,e,o){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(d=>{const h=o.get(d);h&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...h.styles])}));const s=t.find(d=>d.id===e.id);s?Object.assign(s,e):t.push(e)}u(X,"insertOrUpdateNode");function Jt(t){return t?.classes?.join(" ")??""}u(Jt,"getClassesFromDbInfo");function Vt(t){return t?.styles??[]}u(Vt,"getStylesFromDbInfo");var q=u((t,e,o,s,d,h,f,S)=>{const n=e.id,g=o.get(n),L=Jt(g),k=Vt(g),D=R();if(_.info("dataFetcher parsedItem",e,g,k),n!=="root"){let O=bt;e.start===!0?O=fe:e.start===!1&&(O=ge),e.type!==Q&&(O=e.type),yt.get(n)||yt.set(n,{id:n,shape:O,description:W.sanitizeText(n,D),cssClasses:`${L} ${Te}`,cssStyles:k});const c=yt.get(n);e.description&&(Array.isArray(c.description)?(c.shape=Et,c.description.push(e.description)):c.description?.length&&c.description.length>0?(c.shape=Et,c.description===n?c.description=[e.description]:c.description=[c.description,e.description]):(c.shape=bt,c.description=e.description),c.description=W.sanitizeTextOrArray(c.description,D)),c.description?.length===1&&c.shape===Et&&(c.type==="group"?c.shape=Ot:c.shape=bt),!c.type&&e.doc&&(_.info("Setting cluster for XCX",n,Rt(e)),c.type="group",c.isGroup=!0,c.dir=Rt(e),c.shape=e.type===Yt?At:Ot,c.cssClasses=`${c.cssClasses} ${$e} ${h?Le:""}`);const C={labelStyle:"",shape:c.shape,label:c.description,cssClasses:c.cssClasses,cssCompiledStyles:[],cssStyles:c.cssStyles,id:n,dir:c.dir,domId:ft(n,F),type:c.type,isGroup:c.type==="group",padding:8,rx:10,ry:10,look:f};if(C.shape===At&&(C.label=""),t&&t.id!=="root"&&(_.trace("Setting node ",n," to be child of its parent ",t.id),C.parentId=t.id),C.centerLabel=!0,e.note){const b={labelStyle:"",shape:Se,label:e.note.text,cssClasses:De,cssStyles:[],cssCompiledStyles:[],id:n+ve+"-"+F,domId:ft(n,F,Mt),type:c.type,isGroup:c.type==="group",padding:D.flowchart?.padding,look:f,position:e.note.position},N=n+wt,v={labelStyle:"",shape:me,label:e.note.text,cssClasses:c.cssClasses,cssStyles:[],id:n+wt,domId:ft(n,F,zt),type:"group",isGroup:!0,padding:16,look:f,position:e.note.position};F++,v.id=N,b.parentId=N,X(s,v,S),X(s,b,S),X(s,C,S);let P=n,Y=b.id;e.note.position==="left of"&&(P=b.id,Y=n),d.push({id:P+"-"+Y,start:P,end:Y,arrowhead:"none",arrowTypeEnd:"",style:Ft,labelStyle:"",classes:Ee,arrowheadStyle:Gt,labelpos:jt,labelType:Ut,thickness:Wt,look:f})}else X(s,C,S)}e.doc&&(_.trace("Adding nodes children "),we(e,e.doc,o,s,d,!h,f,S))},"dataFetcher"),Re=u(()=>{yt.clear(),F=0},"reset"),E={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Nt=u(()=>new Map,"newClassesList"),Bt=u(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),ut=u(t=>JSON.parse(JSON.stringify(t)),"clone"),pt,je=(pt=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Nt(),this.documents={root:Bt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=ie,this.setAccTitle=re,this.getAccDescription=ae,this.setAccDescription=ne,this.setDiagramTitle=oe,this.getDiagramTitle=le,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}extract(t){this.clear(!0);for(const s of Array.isArray(t)?t:t.doc)switch(s.stmt){case J:this.addState(s.id.trim(),s.type,s.doc,s.description,s.note);break;case Ct:this.addRelation(s.state1,s.state2,s.description);break;case ue:this.addStyleClass(s.id.trim(),s.classes);break;case pe:this.handleStyleDef(s);break;case ye:this.setCssClass(s.id.trim(),s.styleClass);break;case"click":this.addLink(s.id,s.url,s.tooltip);break}const e=this.getStates(),o=R();Re(),q(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,o.look,this.classes);for(const s of this.nodes)if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${s.id}]`);s.label=s.label[0]}}handleStyleDef(t){const e=t.id.trim().split(","),o=t.styleClass.split(",");for(const s of e){let d=this.getState(s);if(!d){const h=s.trim();this.addState(h),d=this.getState(h)}d&&(d.styles=o.map(h=>h.replace(/;/g,"")?.trim()))}}setRootDoc(t){_.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,o){if(e.stmt===Ct){this.docTranslator(t,e.state1,!0),this.docTranslator(t,e.state2,!1);return}if(e.stmt===J&&(e.id===E.START_NODE?(e.id=t.id+(o?"_start":"_end"),e.start=o):e.id=e.id.trim()),e.stmt!==H&&e.stmt!==J||!e.doc)return;const s=[];let d=[];for(const h of e.doc)if(h.type===Yt){const f=ut(h);f.doc=ut(d),s.push(f),d=[]}else d.push(h);if(s.length>0&&d.length>0){const h={stmt:J,id:ce(),type:"divider",doc:ut(d)};s.push(ut(h)),e.doc=s}e.doc.forEach(h=>this.docTranslator(e,h,!0))}getRootDocV2(){return this.docTranslator({id:H,stmt:H},{id:H,stmt:H,doc:this.rootDoc},!0),{id:H,doc:this.rootDoc}}addState(t,e=Q,o=void 0,s=void 0,d=void 0,h=void 0,f=void 0,S=void 0){const n=t?.trim();if(!this.currentDocument.states.has(n))_.info("Adding state ",n,s),this.currentDocument.states.set(n,{stmt:J,id:n,descriptions:[],type:e,doc:o,note:d,classes:[],styles:[],textStyles:[]});else{const g=this.currentDocument.states.get(n);if(!g)throw new Error(`State not found: ${n}`);g.doc||(g.doc=o),g.type||(g.type=e)}if(s&&(_.info("Setting state description",n,s),(Array.isArray(s)?s:[s]).forEach(g=>this.addDescription(n,g.trim()))),d){const g=this.currentDocument.states.get(n);if(!g)throw new Error(`State not found: ${n}`);g.note=d,g.note.text=W.sanitizeText(g.note.text,R())}h&&(_.info("Setting state classes",n,h),(Array.isArray(h)?h:[h]).forEach(g=>this.setCssClass(n,g.trim()))),f&&(_.info("Setting state styles",n,f),(Array.isArray(f)?f:[f]).forEach(g=>this.setStyle(n,g.trim()))),S&&(_.info("Setting state styles",n,f),(Array.isArray(S)?S:[S]).forEach(g=>this.setTextStyle(n,g.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:Bt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Nt(),t||(this.links=new Map,he())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){_.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,o){this.links.set(t,{url:e,tooltip:o}),_.warn("Adding link",t,e,o)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===E.START_NODE?(this.startEndCount++,`${E.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=Q){return t===E.START_NODE?E.START_TYPE:e}endIdIfNeeded(t=""){return t===E.END_NODE?(this.startEndCount++,`${E.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=Q){return t===E.END_NODE?E.END_TYPE:e}addRelationObjs(t,e,o=""){const s=this.startIdIfNeeded(t.id.trim()),d=this.startTypeIfNeeded(t.id.trim(),t.type),h=this.startIdIfNeeded(e.id.trim()),f=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(s,d,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(h,f,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:s,id2:h,relationTitle:W.sanitizeText(o,R())})}addRelation(t,e,o){if(typeof t=="object"&&typeof e=="object")this.addRelationObjs(t,e,o);else if(typeof t=="string"&&typeof e=="string"){const s=this.startIdIfNeeded(t.trim()),d=this.startTypeIfNeeded(t),h=this.endIdIfNeeded(e.trim()),f=this.endTypeIfNeeded(e);this.addState(s,d),this.addState(h,f),this.currentDocument.relations.push({id1:s,id2:h,relationTitle:o?W.sanitizeText(o,R()):void 0})}}addDescription(t,e){const o=this.currentDocument.states.get(t),s=e.startsWith(":")?e.replace(":","").trim():e;o?.descriptions?.push(W.sanitizeText(s,R()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const o=this.classes.get(t);e&&o&&e.split(E.STYLECLASS_SEP).forEach(s=>{const d=s.replace(/([^;]*);/,"$1").trim();if(RegExp(E.COLOR_KEYWORD).exec(s)){const h=d.replace(E.FILL_KEYWORD,E.BG_FILL).replace(E.COLOR_KEYWORD,E.FILL_KEYWORD);o.textStyles.push(h)}o.styles.push(d)})}getClasses(){return this.classes}setCssClass(t,e){t.split(",").forEach(o=>{let s=this.getState(o);if(!s){const d=o.trim();this.addState(d),s=this.getState(d)}s?.classes?.push(e)})}setStyle(t,e){this.getState(t)?.styles?.push(e)}setTextStyle(t,e){this.getState(t)?.textStyles?.push(e)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===vt)}getDirection(){return this.getDirectionStatement()?.value??de}setDirection(t){const e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:vt,value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){const t=R();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Ht(this.getRootDocV2())}}getConfig(){return R().state}},u(pt,"StateDB"),pt.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},pt),Ne=u(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles"),Ue=Ne;export{Fe as B,je as M,Ue as U,Ge as V};

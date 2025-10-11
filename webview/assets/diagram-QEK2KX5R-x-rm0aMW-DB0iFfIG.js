import{p as l,O as I,P as S,l as F,R as E,D as P,b as R,a3 as D,$ as z,A as v,E as w,Q as B,F as G,a9 as j}from"./index-B8Niws7R.js";import{t as Q}from"./chunk-4BX2VUAB-DSRBRo00-EDlMssVa.js";import{I as V}from"./treemap-KMMF4GRG-CyuxVbyz-BtoPfj7g.js";import"./_baseUniq-BzLb7mWO-BGdTVlZb.js";import"./_basePickBy-Dbi2eNXL-RusX3rO0.js";import"./clone-BeCxvQMd-BIcSwGhD.js";var u={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},b={axes:[],curves:[],options:u},x=structuredClone(b),W=B.radar,Z=l(()=>v({...W,...w().radar}),"getConfig"),M=l(()=>x.axes,"getAxes"),_=l(()=>x.curves,"getCurves"),q=l(()=>x.options,"getOptions"),H=l(a=>{x.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),J=l(a=>{x.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:K(t.entries)}))},"setCurves"),K=l(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=M();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>s.axis?.$refText===e.name);if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),N=l(a=>{const t=a.reduce((e,r)=>(e[r.name]=r,e),{});x.options={showLegend:t.showLegend?.value??u.showLegend,ticks:t.ticks?.value??u.ticks,max:t.max?.value??u.max,min:t.min?.value??u.min,graticule:t.graticule?.value??u.graticule}},"setOptions"),U=l(()=>{z(),x=structuredClone(b)},"clear"),y={getAxes:M,getCurves:_,getOptions:q,setAxes:H,setCurves:J,setOptions:N,getConfig:Z,clear:U,setAccTitle:R,getAccTitle:P,setDiagramTitle:E,getDiagramTitle:F,getAccDescription:S,setAccDescription:I},X=l(a=>{Q(a,y);const{axes:t,curves:e,options:r}=a;y.setAxes(t),y.setCurves(e),y.setOptions(r)},"populate"),Y={parse:l(async a=>{const t=await V("radar",a);G.debug(t),X(t)},"parse")},tt=l((a,t,e,r)=>{const s=r.db,n=s.getAxes(),o=s.getCurves(),i=s.getOptions(),c=s.getConfig(),d=s.getDiagramTitle(),p=D(t),g=et(p,c),h=i.max??Math.max(...o.map(f=>Math.max(...f.entries))),m=i.min,$=Math.min(c.width,c.height)/2;at(g,n,$,i.ticks,i.graticule),rt(g,n,$,c),C(g,n,o,m,h,i.graticule,c),O(g,o,i.showLegend,c),g.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),et=l((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),at=l((a,t,e,r,s)=>{if(s==="circle")for(let n=0;n<r;n++){const o=e*(n+1)/r;a.append("circle").attr("r",o).attr("class","radarGraticule")}else if(s==="polygon"){const n=t.length;for(let o=0;o<r;o++){const i=e*(o+1)/r,c=t.map((d,p)=>{const g=2*p*Math.PI/n-Math.PI/2,h=i*Math.cos(g),m=i*Math.sin(g);return`${h},${m}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),rt=l((a,t,e,r)=>{const s=t.length;for(let n=0;n<s;n++){const o=t[n].label,i=2*n*Math.PI/s-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(i)).attr("y2",e*r.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),a.append("text").text(o).attr("x",e*r.axisLabelFactor*Math.cos(i)).attr("y",e*r.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function C(a,t,e,r,s,n,o){const i=t.length,c=Math.min(o.width,o.height)/2;e.forEach((d,p)=>{if(d.entries.length!==i)return;const g=d.entries.map((h,m)=>{const $=2*Math.PI*m/i-Math.PI/2,f=L(h,r,s,c),T=f*Math.cos($),k=f*Math.sin($);return{x:T,y:k}});n==="circle"?a.append("path").attr("d",A(g,o.curveTension)).attr("class",`radarCurve-${p}`):n==="polygon"&&a.append("polygon").attr("points",g.map(h=>`${h.x},${h.y}`).join(" ")).attr("class",`radarCurve-${p}`)})}l(C,"drawCurves");function L(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}l(L,"relativeRadius");function A(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const n=a[(s-1+e)%e],o=a[s],i=a[(s+1)%e],c=a[(s+2)%e],d={x:o.x+(i.x-n.x)*t,y:o.y+(i.y-n.y)*t},p={x:i.x-(c.x-o.x)*t,y:i.y-(c.y-o.y)*t};r+=` C${d.x},${d.y} ${p.x},${p.y} ${i.x},${i.y}`}return`${r} Z`}l(A,"closedRoundCurve");function O(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,n=-(r.height/2+r.marginTop)*3/4,o=20;t.forEach((i,c)=>{const d=a.append("g").attr("transform",`translate(${s}, ${n+c*o})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}l(O,"drawLegend");var st={draw:tt},it=l((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),nt=l(a=>{const t=j(),e=w(),r=v(t,e.themeVariables),s=v(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),ot=l(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=nt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t,e)}
	`},"styles"),xt={parser:Y,db:y,renderer:st,styles:ot};export{xt as diagram};

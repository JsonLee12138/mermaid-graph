import{p as u,P as _,O as j,D as q,b as H,l as J,R as K,F,f as X,A as Y,a3 as Z,a5 as ee,s as te,$ as ae,Q as re,a6 as x,a7 as ie,a8 as R}from"./index-B8Niws7R.js";import{t as ne}from"./chunk-4BX2VUAB-DSRBRo00-EDlMssVa.js";import{I as le}from"./treemap-KMMF4GRG-CyuxVbyz-BtoPfj7g.js";import{h as I}from"./arc-DYOHDP_m-DgxI5wYi.js";import{h as se}from"./ordinal-Cboi1Yqb-DUCuiKwa.js";import"./_baseUniq-BzLb7mWO-BGdTVlZb.js";import"./_basePickBy-Dbi2eNXL-RusX3rO0.js";import"./clone-BeCxvQMd-BIcSwGhD.js";import"./init-Gi6I4Gst-DHuO7-vr.js";function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function pe(){var e=ce,a=oe,g=null,s=x(0),o=x(R),w=x(0);function l(t){var i,c=(t=ie(t)).length,d,$,m=0,p=new Array(c),n=new Array(c),y=+s.apply(this,arguments),v=Math.min(R,Math.max(-R,o.apply(this,arguments)-y)),h,b=Math.min(Math.abs(v)/c,w.apply(this,arguments)),D=b*(v<0?-1:1),f;for(i=0;i<c;++i)(f=n[p[i]=i]=+e(t[i],i,t))>0&&(m+=f);for(a!=null?p.sort(function(S,A){return a(n[S],n[A])}):g!=null&&p.sort(function(S,A){return g(t[S],t[A])}),i=0,$=m?(v-c*D)/m:0;i<c;++i,y=h)d=p[i],f=n[d],h=y+(f>0?f*$:0)+D,n[d]={data:t[d],index:i,value:f,startAngle:y,endAngle:h,padAngle:b};return n}return l.value=function(t){return arguments.length?(e=typeof t=="function"?t:x(+t),l):e},l.sortValues=function(t){return arguments.length?(a=t,g=null,l):a},l.sort=function(t){return arguments.length?(g=t,a=null,l):g},l.startAngle=function(t){return arguments.length?(s=typeof t=="function"?t:x(+t),l):s},l.endAngle=function(t){return arguments.length?(o=typeof t=="function"?t:x(+t),l):o},l.padAngle=function(t){return arguments.length?(w=typeof t=="function"?t:x(+t),l):w},l}var ue=re.pie,z={sections:new Map,showData:!1},C=z.sections,P=z.showData,de=structuredClone(ue),fe=u(()=>structuredClone(de),"getConfig"),ge=u(()=>{C=new Map,P=z.showData,ae()},"clear"),he=u(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(e)||(C.set(e,a),F.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),me=u(()=>C,"getSections"),ye=u(e=>{P=e},"setShowData"),xe=u(()=>P,"getShowData"),L={getConfig:fe,clear:ge,setDiagramTitle:K,getDiagramTitle:J,setAccTitle:H,getAccTitle:q,setAccDescription:j,getAccDescription:_,addSection:he,getSections:me,setShowData:ye,getShowData:xe},we=u((e,a)=>{ne(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),$e={parse:u(async e=>{const a=await le("pie",e);F.debug(a),we(a,L)},"parse")},ve=u(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),Se=ve,Ae=u(e=>{const a=[...e.values()].reduce((s,o)=>s+o,0),g=[...e.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return pe().value(s=>s.value)(g)},"createPieArcs"),be=u((e,a,g,s)=>{F.debug(`rendering pie chart
`+e);const o=s.db,w=X(),l=Y(o.getConfig(),w.pie),t=40,i=18,c=4,d=450,$=d,m=Z(a),p=m.append("g");p.attr("transform","translate("+$/2+","+d/2+")");const{themeVariables:n}=w;let[y]=ee(n.pieOuterStrokeWidth);y??=2;const v=l.textPosition,h=Math.min($,d)/2-t,b=I().innerRadius(0).outerRadius(h),D=I().innerRadius(h*v).outerRadius(h*v);p.append("circle").attr("cx",0).attr("cy",0).attr("r",h+y/2).attr("class","pieOuterCircle");const f=o.getSections(),S=Ae(f),A=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let T=0;f.forEach(r=>{T+=r});const W=S.filter(r=>(r.data.value/T*100).toFixed(0)!=="0"),k=se(A);p.selectAll("mySlices").data(W).enter().append("path").attr("d",b).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(W).enter().append("text").text(r=>(r.data.value/T*100).toFixed(0)+"%").attr("transform",r=>"translate("+D.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const B=[...f.entries()].map(([r,O])=>({label:r,value:O})),M=p.selectAll(".legend").data(B).enter().append("g").attr("class","legend").attr("transform",(r,O)=>{const N=i+c,Q=N*B.length/2,G=12*i,U=O*N-Q;return"translate("+G+","+U+")"});M.append("rect").attr("width",i).attr("height",i).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),M.append("text").attr("x",i+c).attr("y",i-c).text(r=>o.getShowData()?`${r.label} [${r.value}]`:r.label);const V=Math.max(...M.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),E=$+t+i+c+V;m.attr("viewBox",`0 0 ${E} ${d}`),te(m,d,E,l.useMaxWidth)},"draw"),De={draw:be},We={parser:$e,db:L,renderer:De,styles:Se};export{We as diagram};

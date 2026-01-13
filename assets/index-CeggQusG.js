(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();class s{container;maxStars=50;currentStars=0;constructor(){this.container=document.createElement("div"),this.container.className="fixed inset-0 overflow-hidden pointer-events-none z-0",document.body.prepend(this.container),this.spawnInitialStars(20),this.scheduleRandomStar()}spawnInitialStars(t){for(let a=0;a<t;a++)setTimeout(()=>this.createStar(),a*100)}scheduleRandomStar(){const t=Math.random()*2e3+500;setTimeout(()=>{this.currentStars<this.maxStars&&this.createStar(),this.scheduleRandomStar()},t)}createStar(){const t=document.createElement("div"),a=Math.random()*2+1,o=Math.random()*100,e=Math.random()*100,r=Math.random()*3+2,i=Math.random()*2;t.className="star",t.style.cssText=`
      position: absolute;
      width: ${a}px;
      height: ${a}px;
      left: ${o}%;
      top: ${e}%;
      background: white;
      border-radius: 50%;
      animation: twinkle ${r}s ease-in-out ${i}s infinite;
      opacity: 0;
    `,this.container.appendChild(t),this.currentStars++}createShootingStar(){const t=document.createElement("div"),a=Math.random()*70+10,o=Math.random()*30+5,e=Math.random()*20+25;t.style.cssText=`
      position: absolute;
      left: ${a}%;
      top: ${o}%;
      width: 80px;
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 100%);
      transform: rotate(${e}deg);
      transform-origin: right center;
      animation: shoot 0.8s ease-out forwards;
    `,this.container.appendChild(t),setTimeout(()=>t.remove(),800)}scheduleShootingStar(){const t=Math.random()*4e3+2e3;setTimeout(()=>{this.createShootingStar(),this.scheduleShootingStar()},t)}}function c(){return new s}c();const l=[{name:"github",url:"https://github.com/gabegaglio"},{name:"linkedin",url:"https://www.linkedin.com/in/gabrielgaglio/"}],d=[{name:"canvit",url:"https://gabegaglio.github.io/canvit/"},{name:"nousena",url:"https://nousena.com"},{name:"gaglio ceramic tile",url:"https://gaglioceramictile.com"},{name:"pomotimer",url:"https://gabegaglio.github.io/pomotimer/"},{name:"mesmer",url:"https://gabegaglio.github.io/mesmer/"}];document.querySelector("#app").innerHTML=`
  <header class="header">
    ${l.map(n=>`<a href="${n.url}" target="_blank" rel="noopener">${n.name}</a>`).join("")}
  </header>
  <nav class="container">
    ${d.map(n=>`<a href="${n.url}" target="_blank" rel="noopener">${n.name}</a>`).join("")}
  </nav>
`;

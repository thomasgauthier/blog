let l=0,i=!0;window.addEventListener("scroll",()=>{const t=window.pageYOffset||document.documentElement.scrollTop;i=t>l,l=t});customElements.define("dynamic-toc",class extends HTMLElement{connectedCallback(){const t=JSON.parse(this.getAttribute("data-headings")),r=t.map(e=>document.getElementById(e));let c=t[0]||null;c&&s(c,!0);function s(e,n=!1){(c!==e||n)&&(document.querySelectorAll(".toc-element").forEach(o=>{o.style.fontWeight=o.getAttribute("data-section")===e?"bold":"normal"}),c=e)}function a(e){const n=t.indexOf(e);return t[Math.max(n-1,0)]}const d=new IntersectionObserver(e=>{e.forEach(n=>{const o=n.target.id;i&&n.isIntersecting?s(o):!i&&!n.isIntersecting&&s(a(o))})},{rootMargin:"0px"});r.forEach(e=>d.observe(e))}});

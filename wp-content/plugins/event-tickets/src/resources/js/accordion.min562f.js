!function(){"use strict";var t=0;window.MTAccordion=function(e,a){if(void 0===e.target)return!1;var i=document.querySelector(e.target);if(i){var r=function(t,e,a){for(var i=0,r=t.length;i<r;i++)e.call(a,i,t[i])};i.setAttribute("role","tablist");var n=i.getElementsByClassName("accordion-content"),s=i.getElementsByClassName("accordion-header");t++,r(s,function(e,a){var i=a;e++,"tab"!==i.getAttribute("role")&&(i.setAttribute("id","tab"+t+"-"+e),i.setAttribute("aria-selected","false"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","panel"+t+"-"+e),i.setAttribute("role","tab"),i.addEventListener("click",function(t){var e=a.nextElementSibling,r=e.getElementsByClassName("accordion-label")[0];a.classList.toggle("is-active"),e.classList.toggle("is-active"),r.setAttribute("tabindex",-1),r.focus(),e.classList.contains("is-active")?(i.setAttribute("aria-selected","true"),i.setAttribute("aria-expanded","true"),e.setAttribute("aria-hidden","false")):(i.setAttribute("aria-selected","false"),i.setAttribute("aria-expanded","false"),e.setAttribute("aria-hidden","true"));t.preventDefault()}))}),r(n,function(e,a){var i=a;e++,"tabpanel"!==i.getAttribute("role")&&(i.setAttribute("id","panel"+t+"-"+e),i.setAttribute("aria-hidden","true"),i.setAttribute("aria-labelledby","tab"+t+"-"+e),i.setAttribute("role","tabpanel"))}),"function"==typeof a&&a.call()}},document.onreadystatechange=function(){"interactive"===document.readyState&&window.MTAccordion({target:".accordion"})}}();
import{_ as o,a as p,b as c}from"./chunks/target.e7a165e4.js";import{_ as i}from"./chunks/contributors.b2e79e9b.js";import{c as d,a,w as l,u as r,e as t,r as u,o as E,b as C}from"./app.c3571ef0.js";const f=t('<h1 id="affix" tabindex="-1">Affix <a class="header-anchor" href="#affix" aria-hidden="true">#</a></h1><p>Fija el elemento a una posici\xF3n l\xEDmite si el scrolling del usuario va a sacarlo de la visualizaci\xF3n.</p><h2 id="uso-basico" tabindex="-1">Uso b\xE1sico <a class="header-anchor" href="#uso-basico" aria-hidden="true">#</a></h2><p>Por defecto, el componente se fijar\xE1 en la parte superior de la p\xE1gina.</p><p>Mediante el atributo <code>offset</code> se puede desplazar la posici\xF3n de fijaci\xF3n. Por defecto es 0.</p><p>affix/b\xE1sico</p><p>:::</p><h2 id="contenedor" tabindex="-1">Contenedor <a class="header-anchor" href="#contenedor" aria-hidden="true">#</a></h2><p>Mediante el atributo <code>target</code> el elemento se mostrar\xE1 solo dentro de los l\xEDmites de su contenedor. Por lo tanto ser\xE1 arrastrado por su contendor si dicho contenedor queda fuera de la pantalla debido al scrolling del usuario.</p>',9),h=C("p",null,"affix/target",-1),D=t('<h2 id="posicion-fija" tabindex="-1">Posici\xF3n fija <a class="header-anchor" href="#posicion-fija" aria-hidden="true">#</a></h2><p>El componente affix proporciona dos posiciones fijas: <code>top</code> y <code>bottom</code>.</p><p>Puede establecer el atributo <code>position</code> para cambiar la posici\xF3n arriba &quot;top&quot; o abajo &quot;bottom&quot;. El valor predeterminado es <code>top</code>.</p><p>affix/posici\xF3n</p><p>:::</p><h2 id="api-de-affix" tabindex="-1">API de Affix <a class="header-anchor" href="#api-de-affix" aria-hidden="true">#</a></h2><h3 id="atributos-de-affix" tabindex="-1">Atributos de Affix <a class="header-anchor" href="#atributos-de-affix" aria-hidden="true">#</a></h3><table><thead><tr><th>Nombre</th><th>Descripci\xF3n</th><th>Tipo</th><th>Por defecto</th><th>Requerido</th></tr></thead><tbody><tr><td><code>offset</code></td><td>desplazamiento.</td><td><code>number</code></td><td><code>0</code></td><td>No</td></tr><tr><td><code>position</code></td><td>posici\xF3n de la affix.</td><td><code>&#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>No</td></tr><tr><td><code>target</code></td><td>contenedor. (selector CSS)</td><td><code>string</code></td><td>\u2014</td><td>No</td></tr><tr><td><code>z-index</code></td><td><code>z-index</code> de affix</td><td><code>number</code></td><td><code>100</code></td><td>No</td></tr></tbody></table><h3 id="eventos-de-affix" tabindex="-1">Eventos de Affix <a class="header-anchor" href="#eventos-de-affix" aria-hidden="true">#</a></h3><table><thead><tr><th>Nombre</th><th>Descripci\xF3n</th><th>Tipo</th></tr></thead><tbody><tr><td><code>change</code></td><td>se dispara cuando el estado fixed cambia.</td><td><code>(fixed: boolean) =&gt; void</code></td></tr><tr><td><code>scroll</code></td><td>se dispara al hacer scrolling.</td><td><code>(value: { scrollTop: number, fixed: boolean }) =&gt; void</code></td></tr></tbody></table><h3 id="exposicion-de-affix" tabindex="-1">Exposici\xF3n de Affix <a class="header-anchor" href="#exposicion-de-affix" aria-hidden="true">#</a></h3><table><thead><tr><th>M\xE9todo</th><th>Descripci\xF3n</th><th>Tipo</th></tr></thead><tbody><tr><td><code>update</code></td><td>actualizar el estado manualmente</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="slots-de-affix" tabindex="-1">Slots de Affix <a class="header-anchor" href="#slots-de-affix" aria-hidden="true">#</a></h3><table><thead><tr><th>Nombre</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td><code>default</code></td><td>personaliza el contenido por defecto.</td></tr></tbody></table><h2 id="fuente" tabindex="-1">Fuente <a class="header-anchor" href="#fuente" aria-hidden="true">#</a></h2><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/components/affix" target="_blank" rel="noopener noreferrer">Componentes</a> \u2022 <a href="https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/affix.md" target="_blank" rel="noopener noreferrer">Documentaci\xF3n</a></p><h2 id="contribuidores" tabindex="-1">Contribuidores <a class="header-anchor" href="#contribuidores" aria-hidden="true">#</a></h2>',17),A='{"title":"Affix","description":"","frontmatter":{"title":"Affix","lang":"es-ES"},"headers":[{"level":2,"title":"Uso b\xE1sico","slug":"uso-basico"},{"level":2,"title":"Contenedor","slug":"contenedor"},{"level":2,"title":"Posici\xF3n fija","slug":"posicion-fija"},{"level":2,"title":"API de Affix","slug":"api-de-affix"},{"level":3,"title":"Atributos de Affix","slug":"atributos-de-affix"},{"level":3,"title":"Eventos de Affix","slug":"eventos-de-affix"},{"level":3,"title":"Exposici\xF3n de Affix","slug":"exposicion-de-affix"},{"level":3,"title":"Slots de Affix","slug":"slots-de-affix"},{"level":2,"title":"Fuente","slug":"fuente"},{"level":2,"title":"Contribuidores","slug":"contribuidores"}],"relativePath":"es-ES/component/affix.md","lastUpdated":null}',F={},v=Object.assign(F,{setup(k){const e={"../../examples/affix/basic.vue":o,"../../examples/affix/fixed.vue":p,"../../examples/affix/target.vue":c};return(x,b)=>{const n=u("Demo"),s=i;return E(),d("div",null,[f,a(n,{demos:r(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eaffix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etarget%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E.affix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E80%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ETarget%20container%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.affix-container%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Etext-align%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20400px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Eborder-radius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%204px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ebackground%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--el-color-primary-light-9%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/target","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22affix-container%22%3E%0A%20%20%20%20%3Cel-affix%20target%3D%22.affix-container%22%20%3Aoffset%3D%2280%22%3E%0A%20%20%20%20%20%20%3Cel-button%20type%3D%22primary%22%3ETarget%20container%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Fel-affix%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%3E%0A.affix-container%20%7B%0A%20%20text-align%3A%20center%3B%0A%20%20height%3A%20400px%3B%0A%20%20border-radius%3A%204px%3B%0A%20%20background%3A%20var(--el-color-primary-light-9)%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3ETenga%20en%20cuenta%20que%20el%20contenedor%20evita%20tener%20scrollbar.%3C%2Fp%3E%0A"},{default:l(()=>[h]),_:1},8,["demos"]),D,a(s,{id:"affix"})])}}});export{A as __pageData,v as default};
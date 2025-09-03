/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderComponent, f as renderScript, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import { $ as $$SubPageLayoutWithBase } from '../../chunks/SubPageLayoutWithBase_DdfsaLU4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ciberwarrior.github.io");
const $$Kuhanje = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kuhanje;
  const {
    title = "Kuhanje",
    description = "Jednostavna metoda sterilizacije na temperaturi vrenja vode"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SubPageLayoutWithBase", $$SubPageLayoutWithBase, { "chapterNumber": 2, "chapterNumber": 2, "title": title, "description": description, "chapterNumber": 2, "primaryColor": "blue", "breadcrumbPath": [
    { name: "Kuhanje", url: "/poglavlje-2/kuhanje/" }
  ] }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex max-w-7xl mx-auto"> <!-- Table of Contents Sidebar --> <aside class="hidden lg:block w-64 p-6 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto shadow-lg"> <div class="mb-6"> <div class="flex items-center mb-6"> <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900">Sadržaj stranice</h3> </div> <!-- Bookmark Button --> <button id="bookmark-btn" class="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 mb-6 p-3 rounded-lg hover:bg-blue-50 w-full"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path> </svg> <span id="bookmark-text" class="font-medium">Označiti kao bookmark</span> </button> <!-- Table of Contents --> <nav class="space-y-1"> <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Sadržaj stranice</div> <a href="#opis-metode" class="toc-link group flex items-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50" data-target="opis-metode"> <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 transition-all duration-300"></span>
Opis metode
</a> </nav> </div> </aside> <!-- Main Content --> <main class="flex-1 px-6 py-8"> <div class="max-w-4xl mx-auto"> <div class="prose prose-lg max-w-none"> <!-- Content Blocks --> <div class="space-y-8"> <!-- Opis metode --> <div id="opis-metode" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-200"> <div class="flex items-center mb-4"> <span class="text-3xl mr-4">♨️</span> <h3 class="text-2xl font-bold text-blue-900">Opis metode</h3> </div> <div class="bg-white rounded-lg p-6 shadow-sm"> <h4 class="text-xl font-semibold text-blue-800 mb-4">Sterilizacija kuhanjem</h4> <p class="text-gray-700 leading-relaxed">
Kuhanjem u vodi na 100°C 30 min uspješno se steriliziraju metalni instrumenti i stakleni bakteriološki pribor. U vodi koja vrije vegetativni oblici bakterija, rikecije i virusi (osim virusa hepatitisa i priona bolesti goveđeg ludila) uginu za nekoliko sekundi.
</p> </div> </div> </div> </div> </div> </main> </div>  <div class="flex justify-between mt-16 mb-8 max-w-4xl mx-auto px-4 sm:px-6"> <!-- Prethodna stranica --> <a href="/poglavlje-2/pasterizacija/" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 no-underline transform hover:-translate-y-1" aria-label="Prijeđi na prethodnu stranicu: pasterizacija">
←
<span class="text-lg">pasterizacija</span> </a> <!-- Iduća stranica --> <a href="/poglavlje-2/frakciona-sterilizacija/" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 no-underline transform hover:-translate-y-1" aria-label="Prijeđi na sljedeću stranicu: frakciona sterilizacija (tindalizacija)"> <span class="text-lg">frakciona sterilizacija (tindalizacija)</span>
→
</a> </div> ` })} ${renderScript($$result, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-2/kuhanje.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-2/kuhanje.astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-2/kuhanje.astro";
const $$url = "/poglavlje-2/kuhanje";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kuhanje,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

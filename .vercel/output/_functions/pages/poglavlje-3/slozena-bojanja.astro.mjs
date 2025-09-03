/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, f as renderScript } from '../../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import { $ as $$SubPageLayoutWithBase } from '../../chunks/SubPageLayoutWithBase_DdfsaLU4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ciberwarrior.github.io");
const $$SlozenaBojanja = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SlozenaBojanja;
  const {
    title = "Slo\u017Eena bojanja",
    description = "Diferencijalna bojenja bakterija za razlikovanje pojedinih skupina"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SubPageLayoutWithBase", $$SubPageLayoutWithBase, { "chapterNumber": 3, "title": title, "description": description, "chapterNumber": 3, "primaryColor": "red", "breadcrumbPath": [
    { name: "Poglavlje 3", url: "/poglavlje-3/" },
    { name: "Slo\u017Eena bojanja", url: "/poglavlje-3/slozena-bojanja/" }
  ] }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex max-w-7xl mx-auto"> <!-- Table of Contents Sidebar --> <aside class="hidden lg:block w-64 p-6 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto shadow-lg"> <div class="mb-6"> <div class="flex items-center mb-6"> <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900">Sadržaj stranice</h3> </div> <!-- Bookmark Button --> <button id="bookmark-btn" class="flex items-center space-x-3 text-sm text-gray-600 hover:text-red-600 transition-all duration-300 mb-6 p-3 rounded-lg hover:bg-red-50 w-full"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path> </svg> <span id="bookmark-text" class="font-medium">Označiti kao bookmark</span> </button> <!-- Table of Contents --> <nav class="space-y-1"> <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Sadržaj stranice</div> <a href="#slozena-bojanja" class="toc-link group flex items-center text-sm text-gray-600 hover:text-red-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-red-50" data-target="slozena-bojanja"> <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 transition-all duration-300"></span>
Složena bojanja
</a> </nav> </div> </aside> <!-- Main Content --> <main class="flex-1 px-6 py-8"> <div class="max-w-4xl mx-auto"> <div class="prose prose-lg max-w-none"> <!-- Content Blocks --> <div class="space-y-8"> <!-- Složena bojanja --> <div id="slozena-bojanja" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-200"> <div class="flex items-center mb-4"> <div class="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center mr-4"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-2xl font-bold text-blue-900">Složena bojanja</h3> </div> <div class="bg-white rounded-lg p-4 shadow-sm"> <h4 class="text-lg font-semibold text-gray-800 mb-3">Složena bojenja</h4> <p class="text-gray-700 leading-relaxed mb-4">
Složena ili diferencijalna bojenja vrste su bojenja u kojima se upotrebljavaju dvije ili više vrsta boja, a služe diferencijaciji, razlikovanju pojedinih skupina bakterija.
</p> <h4 class="text-lg font-semibold text-gray-800 mb-3">Bojenje po Gramu</h4> <p class="text-gray-700 leading-relaxed mb-4">
Razvrstavanje bakterija u pojedine taksonomske skupine osniva se u samom početku na njihovu obliku i na reakciji složenog bojenja po Gramu. Bojenje po Gramu (Hans Christian Gram 1883.) najčešće je upotrebljavana metoda složenih bojenja bakterija u svim granama bakteriologije.
</p> <p class="text-gray-700 leading-relaxed mb-4">
Bojenje po Gramu posebno je važno u medicini i veterini jer Gram-negativne i Gram-pozitivne patogene bakterije čovjeka i životinja različito reagiraju na pojedine antibiotike, pa se već na osnovi bojenja po Gramu može s određenom sigurnošću odmah započeti s antibiotskom terapijom.
</p> <p class="text-gray-700 leading-relaxed mb-4">
Mehanizam bojenja po Gramu objašnjava se građom stanične stijenke, prije svega debljinom mureinskog sloja u Gram-pozitivnih bakterija. Zbog debljine mureina stanične stijenke Gram-pozitivnih bakterija stvoreni kompleks kristal violeta i lugola teže će se isprati 96%-tnim alkoholom, a u Gram-negativnih relativno će se lako isprati iz stanice zbog tankog peptidoglikanskog sloja.
</p> <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4"> <p class="text-gray-700 leading-relaxed"> <strong>Napomena:</strong> kako bismo bili sigurni da su bojila ispravna, a metoda izvedena lege artis, u pravilu se s lijeve i s desne strane razmaza ispitivane bakterije naprave istovremeno na predmetnom stakalcu i razmažu jedne poznate Gram-pozitivne (<em>Staphylococcus aureus</em>) i Gram-negativne bakterije (<em>Escherichia coli</em>).
</p> </div> </div> </div> </div> </div> </div> </main> </div>  <button id="mobile-toc-toggle" class="lg:hidden fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg z-50"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path> </svg> </button>  <div id="mobile-toc-overlay" class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 hidden"> <div class="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform translate-x-full transition-transform duration-300" id="mobile-toc-panel"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h3 class="text-lg font-semibold text-gray-900">Brza navigacija</h3> <button id="mobile-toc-close" class="text-gray-500 hover:text-gray-700"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Bookmark Button --> <button id="mobile-bookmark-btn" class="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 mb-4 w-full"> <svg id="mobile-bookmark-icon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path> </svg> <span id="mobile-bookmark-text">Označiti kao bookmark</span> </button> <!-- Navigation Links --> <nav class="space-y-2"> <a href="/poglavlje-3/" class="mobile-toc-link block text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 py-2 border-l-2 border-transparent hover:border-red-600 pl-3">
Pregled poglavlja
</a> <a href="/sadrzaj/" class="mobile-toc-link block text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 py-2 border-l-2 border-transparent hover:border-red-600 pl-3">
Svi sadržaji
</a> </nav> </div> </div> </div> ${renderScript($$result2, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-3/slozena-bojanja.astro?astro&type=script&index=0&lang.ts")}  <div class="flex justify-between mt-16 mb-8 max-w-4xl mx-auto px-4 sm:px-6"> <!-- Prethodna stranica --> <a href="/poglavlje-3/jednostavna-bojenja/" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 no-underline transform hover:-translate-y-1" aria-label="Prijeđi na prethodnu stranicu: jednostavna bojenja">
←
<span class="text-lg">jednostavna bojenja</span> </a> <!-- Iduća stranica --> <a href="/poglavlje-3/test-s-kalijevom-luzinom/" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 no-underline transform hover:-translate-y-1" aria-label="Prijeđi na sljedeću stranicu: test s kalijevom lužinom"> <span class="text-lg">test s kalijevom lužinom</span>
→
</a> </div> ` })}`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-3/slozena-bojanja.astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-3/slozena-bojanja.astro";
const $$url = "/poglavlje-3/slozena-bojanja";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SlozenaBojanja,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

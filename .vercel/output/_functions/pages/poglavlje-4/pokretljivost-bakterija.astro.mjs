/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, f as renderScript } from '../../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import { $ as $$SubPageLayoutWithBase } from '../../chunks/SubPageLayoutWithBase_DdfsaLU4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ciberwarrior.github.io");
const $$PokretljivostBakterija = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PokretljivostBakterija;
  const {
    title = "Pokretljivost bakterija",
    description = "Teorijski osnovi pokretljivosti bakterija, struktura flagela i tipovi pokretanja"
  } = Astro2.props;
  const tocItems = [
    { id: "content", title: "Sadr\u017Eaj", level: 2 }
  ];
  const breadcrumbPath = [
    { name: "Poglavlje 4", url: "/poglavlje-4/" },
    { name: "Pokretljivost bakterija", url: "/poglavlje-4/pokretljivost-bakterija/" }
  ];
  return renderTemplate`${renderComponent($$result, "SubPageLayoutWithBase", $$SubPageLayoutWithBase, { "chapterNumber": 4, "title": title, "description": description, "chapterNumber": 4, "primaryColor": "blue", "prevLink": "/poglavlje-4/", "nextLink": "/poglavlje-4/vjezba-4/", "prevText": "Poglavlje 4", "nextText": "Vje\u017Eba 4", "breadcrumbPath": breadcrumbPath, "tocItems": tocItems }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6"> <!-- Content Blocks --> <div class="space-y-8"> <!-- Pokretljivost bakterija --> <div id="content" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-200"> <div class="flex items-center mb-4"> <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-2xl font-bold text-blue-900">Pokretljivost bakterija</h3> </div> <div class="bg-white rounded-lg p-4 shadow-sm"> <p class="text-gray-700 leading-relaxed">
Flagele ili bičevi filamentozne su strukture na površini bakterijskih stanica koje služe za pokretanje u većine pokretnih bakterija. Prema rasporedu i broju bičeva razlikujemo četiri tipa bakterijskih stanica:
</p> <div class="mt-4 space-y-1"> <div class="text-gray-700"><strong>Atrih</strong> – bakterije bez bičeva</div> <div class="text-gray-700"><strong>Monotrih</strong> – jedan bič lociran na jednom polu</div> <div class="text-gray-700"><strong>Amfitrih</strong> – jedan bič lociran na svakom polu</div> <div class="text-gray-700"><strong>Lofotrih</strong> – dva ili više bičeva lociranih na jednom ili oba pola</div> <div class="text-gray-700"><strong>Peritrih</strong> – mnogo bičeva na cijeloj površini stanica</div> </div> <p class="text-gray-700 leading-relaxed mt-4">
Postoje specijalne metode bojenja bičeva kojima se postiže povećanje debljine bičeva, tako da se mogu uočiti i pod imerzijskim objektivom svjetlosnog mikroskopa. To su vrlo osjetljive metode, prikladne za specijalizirane laboratorije, a česta u bojenju bičeva je metoda po Leiffsonu. Ispitivanje pokretljivosti bakterija u praksi uspješno se dokazuje u dubokom polukrutom hranjivom agaru s dodatkom 2,3,5 trifeniltetrazolium klorida (TTC).
</p> </div> </div> </div> </div> </section> ${renderScript($$result2, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-4/pokretljivost-bakterija.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-4/pokretljivost-bakterija.astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-4/pokretljivost-bakterija.astro";
const $$url = "/poglavlje-4/pokretljivost-bakterija";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PokretljivostBakterija,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, v as renderSlot } from '../../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import { $ as $$SubPageLayoutWithBase } from '../../chunks/SubPageLayoutWithBase_DdfsaLU4.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_DBQXKa5L.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ciberwarrior.github.io");
async function getStaticPaths() {
  const files = /* #__PURE__ */ Object.assign({});
  const paths = [];
  for (const path in files) {
    const slug = path.split("/").pop()?.replace(".mdx", "");
    if (slug && slug !== "index") {
      paths.push({
        params: { slug }
      });
    }
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    throw new Error("Slug je obavezan");
  }
  const entry = await getEntryBySlug("chapters", `poglavlje-4/${slug}`);
  if (!entry) {
    throw new Error(`Entry nije prona\u0111en za slug: ${slug}`);
  }
  const { Content } = await entry.render();
  const { data } = entry;
  const chapterNumber = data.chapterNumber || 4;
  const breadcrumbPath = data.breadcrumbPath || [
    { name: data.title || slug, url: `/poglavlje-4/${slug}/` }
  ];
  const generateTOCItems = (content2) => {
    const headings = content2.match(/<h[23][^>]*id="([^"]*)"[^>]*>([^<]*)<\/h[23]>/g);
    if (!headings) return [];
    return headings.map((heading) => {
      const idMatch = heading.match(/id="([^"]*)"/);
      const titleMatch = heading.match(/>([^<]*)</);
      const levelMatch = heading.match(/<h([23])/);
      return {
        id: idMatch ? idMatch[1] : "",
        title: titleMatch ? titleMatch[1] : "",
        level: levelMatch ? parseInt(levelMatch[1]) : 2
      };
    }).filter((item) => item.id && item.title);
  };
  const { remarkPluginFrontmatter } = await entry.render();
  const content = remarkPluginFrontmatter?.content || "";
  const tocItems = generateTOCItems(content);
  const getNavigationLinks = (currentSlug) => {
    const pages = [
      { slug: "index", title: "Poglavlje 4: Pokretljivost bakterija", isTheory: true },
      { slug: "flagele-struktura", title: "Struktura i funkcija flagela", isTheory: true },
      { slug: "metode-ispitivanja", title: "Metode ispitivanja pokretljivosti", isTheory: true },
      { slug: "vjezba-4", title: "Vje\u017Eba 4: TTC metoda", isTheory: false },
      { slug: "vjezba-4-1", title: "Vje\u017Eba 4.1: Mikroskopska metoda", isTheory: false },
      { slug: "vjezba-4-2", title: "Vje\u017Eba 4.2: Craigie tuba", isTheory: false }
    ];
    const currentIndex = pages.findIndex((page) => page.slug === currentSlug);
    const prev2 = currentIndex > 0 ? pages[currentIndex - 1] : null;
    const next2 = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;
    return { prev: prev2, next: next2 };
  };
  const { prev, next } = getNavigationLinks(slug);
  return renderTemplate`${renderComponent($$result, "SubPageLayoutWithBase", $$SubPageLayoutWithBase, { "chapterNumber": 4, "title": data.title || `Poglavlje 4 - ${slug}`, "description": data.description || "", "chapterNumber": chapterNumber, "primaryColor": "blue", "prevLink": prev ? `/poglavlje-4/${prev.slug}/` : "/poglavlje-3/", "nextLink": next ? `/poglavlje-4/${next.slug}/` : "/poglavlje-5/", "prevText": prev ? prev.isTheory ? "Poglavlje 4" : "Vje\u017Eba 4" : "\u2190 Poglavlje 3", "nextText": next ? next.isTheory ? "Poglavlje 4" : "Vje\u017Eba 4" : "Poglavlje 5 \u2192", "breadcrumbPath": breadcrumbPath, "tocItems": tocItems }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6"> <!-- Sadržaj stranice --> <div class="prose prose-lg max-w-none"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </section> ` })}`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-4/[slug].astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-4/[slug].astro";
const $$url = "/poglavlje-4/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

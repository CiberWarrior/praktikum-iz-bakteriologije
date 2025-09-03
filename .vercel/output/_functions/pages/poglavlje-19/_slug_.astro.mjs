/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import { $ as $$ChapterLayout } from '../../chunks/ChapterLayout_V2rZjP_N.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_DBQXKa5L.mjs';
/* empty css                                     */
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
  const entry = await getEntryBySlug("chapters", `poglavlje-19/${slug}`);
  if (!entry) {
    throw new Error(`Entry nije prona\u0111en za slug: ${slug}`);
  }
  const { Content } = await entry.render();
  const { data } = entry;
  const chapterNumber = data.chapterNumber || 19;
  return renderTemplate`${renderComponent($$result, "ChapterLayout", $$ChapterLayout, { "title": data.title || `Poglavlje 19 - ${slug}`, "description": data.description || "", "chapterNumber": chapterNumber, "primaryColor": data.primaryColor || "blue", "prevLink": data.prevLink || "/poglavlje-18/", "nextLink": data.nextLink || "/poglavlje-20/", "prevText": data.prevText || `\u2190 Poglavlje 18`, "nextText": data.nextText || `Poglavlje 20 \u2192`, "ctaTitle": data.ctaTitle || "Nastavi na sljede\u0107e poglavlje", "ctaDescription": data.ctaDescription || "Nastavite s u\u010Denjem.", "ctaPrimaryText": data.ctaPrimaryText || `Poglavlje 20`, "ctaPrimaryLink": data.ctaPrimaryLink || "/poglavlje-20/", "ctaSecondaryText": data.ctaSecondaryText || "Povratak na sadr\u017Eaj", "ctaSecondaryLink": data.ctaSecondaryLink || "/sadrzaj/", "showBreadcrumb": data.showBreadcrumb !== false, "breadcrumbPath": data.breadcrumbPath || [
    { name: "Sadr\u017Eaj", url: "/sadrzaj/" },
    { name: `Poglavlje 19`, url: "/poglavlje-19/" },
    { name: data.title || slug, url: `/poglavlje-19/${slug}/` }
  ], "data-astro-cid-5at2jc7v": true }, { "default": async ($$result2) => renderTemplate`  ${data.title && renderTemplate`${maybeRenderHead()}<div class="mb-8" data-astro-cid-5at2jc7v> <h1 class="text-4xl font-bold text-gray-900 mb-4" data-astro-cid-5at2jc7v>${data.title}</h1> ${data.description && renderTemplate`<p class="text-xl text-gray-600 leading-relaxed" data-astro-cid-5at2jc7v>${data.description}</p>`} </div>`} <div class="prose prose-slate max-w-none lg:prose-lg xl:prose-xl prose-headings:scroll-mt-28 prose-h1:text-3xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-gray-800 prose-h2:mb-4 prose-h2:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-700 prose-h3:mb-3 prose-h3:mt-5 prose-h4:text-lg prose-h4:font-medium prose-h4:text-gray-700 prose-h4:mb-2 prose-h4:mt-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-img:rounded-xl prose-img:shadow-lg prose-img:my-6 prose-hr:border-gray-300 prose-hr:my-8 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-table:border-collapse prose-table:w-full prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-td:border prose-td:border-gray-300 prose-td:p-3" data-astro-cid-5at2jc7v> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-5at2jc7v": true })} </div> ` })} `;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-19/[slug].astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/poglavlje-19/[slug].astro";
const $$url = "/poglavlje-19/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

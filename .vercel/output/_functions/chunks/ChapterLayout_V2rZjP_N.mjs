import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent, v as renderSlot, f as renderScript } from './astro/server_B-kAR108.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_CmOSeCQ9.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://ciberwarrior.github.io");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    title,
    description,
    primaryText,
    primaryLink,
    secondaryText,
    secondaryLink,
    primaryColor = "purple",
    customBgColor
  } = Astro2.props;
  const colorClasses = {
    purple: {
      bg: "from-purple-600 via-purple-700 to-purple-900",
      text: "text-blue-100",
      button: "text-purple-700",
      hover: "hover:text-purple-700"
    },
    blue: {
      bg: "from-blue-600 via-blue-700 to-blue-900",
      text: "text-blue-100",
      button: "text-blue-700",
      hover: "hover:text-blue-700"
    },
    green: {
      bg: "from-green-600 via-green-700 to-green-900",
      text: "text-green-100",
      button: "text-green-700",
      hover: "hover:text-green-700"
    },
    red: {
      bg: "from-red-600 via-red-700 to-red-900",
      text: "text-red-100",
      button: "text-red-700",
      hover: "hover:text-red-700"
    }
  };
  const colors = colorClasses[primaryColor] || colorClasses.purple;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-16 bg-gradient-to-br ${colors.bg} text-white`, "class")}${addAttribute(customBgColor ? `background: ${customBgColor}` : "background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);", "style")}> <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-body"> ${title} </h2> <p${addAttribute(`text-xl ${colors.text} mb-8 max-w-2xl mx-auto font-body`, "class")}> ${description} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(primaryLink, "href")}${addAttribute(`inline-flex items-center justify-center px-8 py-4 bg-white ${colors.button} font-bold font-body rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`, "class")}> ${primaryText} <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> ${secondaryText && secondaryLink && renderTemplate`<a${addAttribute(secondaryLink, "href")}${addAttribute(`inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold font-body rounded-full ${colors.hover} hover:bg-white transition-all duration-300`, "class")}> ${secondaryText} </a>`} </div> </div> </section>`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/components/CallToAction.astro", void 0);

const $$Astro = createAstro("https://ciberwarrior.github.io");
const $$ChapterLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChapterLayout;
  const {
    title,
    description,
    chapterNumber,
    primaryColor = "green",
    secondaryColor = "emerald",
    prevLink,
    nextLink,
    prevText = "\u2190 Prethodno poglavlje",
    nextText = "Sljede\u0107e poglavlje \u2192",
    ctaTitle = "Nastavi na sljede\u0107e poglavlje",
    ctaDescription = "Nastavite s u\u010Denjem i pro\u0161irite svoje znanje o bakteriologiji.",
    ctaPrimaryText = "Sljede\u0107e poglavlje",
    ctaPrimaryLink = "/sadrzaj/",
    ctaSecondaryText = "Povratak na sadr\u017Eaj",
    ctaSecondaryLink = "/sadrzaj/",
    showBreadcrumb = false,
    breadcrumbPath = [],
    ctaCustomBgColor,
    showZapocniUcenje = false
  } = Astro2.props;
  const finalConfig = {
    title: title || "Stranica",
    description: description || "Opis stranice",
    primaryColor: primaryColor || "green",
    prevLink,
    nextLink,
    prevText: prevText || "\u2190 Prethodno poglavlje",
    nextText: nextText || "Sljede\u0107e poglavlje \u2192",
    ctaTitle: ctaTitle || "Nastavi na sljede\u0107e poglavlje",
    ctaDescription: ctaDescription || "Nastavite s u\u010Denjem i pro\u0161irite svoje znanje o bakteriologiji.",
    ctaPrimaryText: ctaPrimaryText || "Sljede\u0107e poglavlje",
    ctaPrimaryLink: ctaPrimaryLink || "/sadrzaj/",
    ctaSecondaryText: ctaSecondaryText || "Povratak na sadr\u017Eaj",
    ctaSecondaryLink: ctaSecondaryLink || "/sadrzaj/",
    showBreadcrumb,
    breadcrumbPath,
    ctaCustomBgColor,
    showZapocniUcenje
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": finalConfig.title, "description": finalConfig.description }, { "default": ($$result2) => renderTemplate`  ${finalConfig.showBreadcrumb && finalConfig.breadcrumbPath.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 border-b border-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 py-2"> <nav class="flex" aria-label="Breadcrumb"> <ol class="flex items-center space-x-2"> <li> <a href="/" class="text-gray-500 hover:text-gray-700 transition-colors duration-300">
Početna
</a> </li> ${finalConfig.breadcrumbPath.map((item, index) => renderTemplate`<li class="flex items-center"> <span class="text-gray-400 mx-2">/</span> ${index === finalConfig.breadcrumbPath.length - 1 ? renderTemplate`<span class="text-gray-900 font-medium">${item.name}</span>` : renderTemplate`<a${addAttribute(item.url, "href")} class="text-gray-500 hover:text-gray-700 transition-colors duration-300"> ${item.name} </a>`} </li>`)} </ol> </nav> </div> </div>`} <section class="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden"> <!-- Pozadinski uzorak --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center"> <p class="text-green-200 font-bold uppercase tracking-wide mb-5 text-sm"> ${chapterNumber ? `Poglavlje ${chapterNumber}` : "Bakteriolo\u0161ki praktikum"} </p> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"> ${finalConfig.title} </h1> <p class="text-xl text-green-200 mb-8 leading-relaxed max-w-3xl mx-auto"> ${finalConfig.description} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${finalConfig.prevLink && renderTemplate`<a${addAttribute(finalConfig.prevLink, "href")} class="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"> ${finalConfig.prevText} </a>`} ${finalConfig.nextLink && renderTemplate`<a${addAttribute(finalConfig.nextLink, "href")} class="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-all duration-300"> ${finalConfig.nextText} </a>`} </div> </div> </div> </section>  <main class="flex-1 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 py-12"> <article class="prose prose-lg max-w-none"> ${renderSlot($$result2, $$slots["default"])} </article> </div> </main> ${finalConfig.showZapocniUcenje && renderTemplate`<!-- Započni učenje Section -->
    <section class="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 mt-20 relative overflow-hidden" style="background: linear-gradient(135deg, #d12423 0%, #b91c1c 50%, #991b1b 100%);"> <!-- Pozadinski uzorak --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div> </div> <!-- Dekorativni elementi --> <div class="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-xl"></div> <div class="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div> <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"> <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
Započni učenje?
</h2> <p class="text-xl md:text-2xl text-red-200 mb-12 leading-relaxed max-w-3xl mx-auto">
Započni svoj put u bakteriologiji danas. Svako poglavlje je samostalna cjelina
          s teorijom, praktičnim vježbama i provjerom znanja.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center"> <a href="/sadrzaj/" class="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 no-underline text-lg"> <span>Sadržaj</span> <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/" class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-700 transition-all duration-300 transform hover:-translate-y-1 no-underline text-lg">
Povratak na početnu
</a> </div> </div> </section>`} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": finalConfig.ctaTitle, "description": finalConfig.ctaDescription, "primaryText": finalConfig.ctaPrimaryText, "primaryLink": finalConfig.ctaPrimaryLink, "secondaryText": finalConfig.ctaSecondaryText, "secondaryLink": finalConfig.ctaSecondaryLink, "primaryColor": finalConfig.primaryColor, "customBgColor": finalConfig.ctaCustomBgColor })}  ${renderScript($$result2, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/components/ChapterLayout.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/components/ChapterLayout.astro", void 0);

export { $$ChapterLayout as $ };

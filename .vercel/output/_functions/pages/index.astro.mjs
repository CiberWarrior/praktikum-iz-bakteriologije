/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderTemplate, b as addAttribute, e as renderComponent, f as renderScript } from '../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CmOSeCQ9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://ciberwarrior.github.io");
const $$FeaturesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturesSection;
  const {
    title = "Zna\u010Dajke",
    subtitle = "",
    items = [
      {
        title: "Fokus na praksu",
        description: "Sa\u017Eete upute, jasno ozna\u010Deni koraci i fotografije o\u010Dekivanih rezultata.",
        buttonText: "Pogledaj primjere",
        buttonLink: "/sadrzaj/"
      },
      {
        title: "Standardizirani protokoli",
        description: "Sterilizacija, bojenja, brojanja i biokemijski testovi \u2013 sve na jednom mjestu.",
        buttonText: "Istra\u017Ei protokole",
        buttonLink: "/poglavlje-1/"
      },
      {
        title: "U\u010Denje po modulima",
        description: "Svako poglavlje je samostalna cjelina s ciljevima i provjerom znanja.",
        buttonText: "Zapo\u010Dni u\u010Denje",
        buttonLink: "/predgovor/"
      }
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="max-w-5xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> ${title && renderTemplate`<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 font-heading text-gray-900"> ${title} </h2>`} ${subtitle && renderTemplate`<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"> ${subtitle} </p>`} </div> <div class="grid gap-8 md:gap-12 md:grid-cols-3"> ${items.map((item, index) => {
    const gradients = [
      "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
      "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200",
      "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200"
    ];
    const colors = [
      "text-purple-600 hover:text-purple-800",
      "text-indigo-600 hover:text-indigo-800",
      "text-violet-600 hover:text-violet-800"
    ];
    const iconColors = [
      "bg-gradient-to-br from-purple-500 to-pink-500",
      "bg-gradient-to-br from-indigo-500 to-purple-500",
      "bg-gradient-to-br from-violet-500 to-purple-500"
    ];
    return renderTemplate`<div${addAttribute(`${gradients[index]} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`, "class")}> <div class="flex items-start mb-4"> <div${addAttribute(`text-white rounded-full w-12 h-12 p-3 mr-4 flex-shrink-0 ${iconColors[index]}`, "class")}> ${index === 0 && renderTemplate`<!-- Žarulja za "Fokus na praksu" -->
                  <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg>`} ${index === 1 && renderTemplate`<!-- Beaker za "Standardizirani protokoli" -->
                  <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path> </svg>`} ${index === 2 && renderTemplate`<!-- Knjiga za "Učenje po modulima" -->
                  <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg>`} </div> <div> <h3 class="text-xl font-bold mb-2 md:text-[1.3rem] text-gray-900">${item.title}</h3> <p class="text-gray-600 mb-4">${item.description}</p> ${item.buttonText && item.buttonLink && renderTemplate`<a${addAttribute(item.buttonLink, "href")}${addAttribute(`inline-flex items-center font-semibold ${colors[index]} transition-all duration-300`, "class")}> ${item.buttonText} <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>`} </div> </div> </div>`;
  })} </div> </div> </section>`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/components/FeaturesSection.astro", void 0);

const $$Astro = createAstro("https://ciberwarrior.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    title = "Mre\u017Eni ud\u017Ebenik iz bakteriologije",
    description = "Priru\u010Dnik za studente s detaljnim uputama za bakteriolo\u0161ki praktikum"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white overflow-hidden" style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);"> <!-- Pozadinski uzorak --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <!-- Tekst sekcija --> <div class="text-center lg:text-left hero-text"> <p class="text-green-200 font-bold uppercase tracking-wide mb-5 text-sm">
Praktični pristup bakteriologiji
</p> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight font-heading" style="letter-spacing: -0.02em;">
Mrežni udžbenik iz bakteriologije
</h1> <p class="text-xl text-green-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body">
Priručnik za studente s detaljnim uputama za bakteriološki praktikum. Naučite ključne tehnike od sigurnog rada i aseptike do identifikacije i interpretacije rezultata.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> <a href="/sadrzaj/" class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
Sadržaj udžbenika
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/poglavlje-1/" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300">
Započni učenje
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> <!-- Slika sekcija --> <div class="relative hero-image"> <div class="relative z-10"> <img src="/Images/petri.jpg" alt="Petrijeva zdjelica s bakterijskim kulturama i testovima osjetljivosti" class="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20" loading="eager" width="600" height="400" decoding="async" fetchpriority="high" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 4px solid rgba(255, 255, 255, 0.2);"> </div> <!-- Dekorativni elementi --> <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div> <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div> </div> </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="max-w-4xl mx-auto px-4 sm:px-6"> <div class="bg-white rounded-2xl shadow-lg p-8"> <div class="grid md:grid-cols-4 gap-6"> <div class="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 quick-start-card"> <h3 class="text-xl font-semibold mb-3 text-purple-800 font-heading">Predgovor</h3> <p class="text-purple-700 mb-4 font-body leading-relaxed">Uvod u udžbenik i upute za korištenje</p> <a href="/predgovor/" class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800">
Pročitaj predgovor
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 quick-start-card"> <h3 class="text-xl font-semibold mb-3 text-indigo-800 font-heading">Sadržaj udžbenika</h3> <p class="text-indigo-700 mb-4 font-body leading-relaxed">Pregled svih poglavlja i vježbi</p> <a href="/sadrzaj/" class="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800">
Pregledaj sadržaj
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <div class="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 quick-start-card"> <h3 class="text-xl font-semibold mb-3 text-violet-800 font-heading">Započni učenje</h3> <p class="text-violet-700 mb-4 font-body leading-relaxed">Prvo poglavlje - Uvod u bakteriološki praktikum</p> <a href="/poglavlje-1/" class="inline-flex items-center text-violet-600 font-semibold hover:text-violet-800">
Započni
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <div class="bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 quick-start-card"> <h3 class="text-xl font-semibold mb-3 text-fuchsia-800 font-heading">Provjeri znanje</h3> <p class="text-fuchsia-700 mb-4 font-body leading-relaxed">Testiraj svoje znanje iz svih 23 poglavlja</p> <a href="/provjeri-znanje/" class="inline-flex items-center text-fuchsia-600 font-semibold hover:text-fuchsia-800">
Započni kviz
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </div> </div> </section>  <section class="py-16 bg-white border-t border-gray-100"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center blurb-item"> <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3"> <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">23 Poglavlja</h3> <p class="text-gray-600 text-sm">Kompletan sadržaj bakteriološkog praktikuma</p> </div> <div class="text-center blurb-item"> <div class="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3"> <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">Besplatno</h3> <p class="text-gray-600 text-sm">Dostupno svim studentima biologije</p> </div> <div class="text-center blurb-item"> <div class="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3"> <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">24/7 Dostupnost</h3> <p class="text-gray-600 text-sm">Učite u svom tempu</p> </div> <div class="text-center blurb-item"> <div class="w-12 h-12 bg-gradient-to-br from-fuchsia-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3"> <svg class="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">Tim stručnjaka</h3> <p class="text-gray-600 text-sm">Kreirao tim s PMF-a</p> </div> </div> </div> </section>  ${renderComponent($$result2, "FeaturesSection", $$FeaturesSection, { "title": "Za\u0161to ovaj ud\u017Ebenik?", "subtitle": "Moderna platforma za efikasno u\u010Denje bakteriolo\u0161kih tehnika", "items": [
    {
      title: "Fokus na praksu",
      description: "Sa\u017Eete upute, jasno ozna\u010Deni koraci i fotografije o\u010Dekivanih rezultata za brzo prelazak s teorije na praksu.",
      buttonText: "Pogledaj primjere",
      buttonLink: "/sadrzaj/"
    },
    {
      title: "Standardizirani protokoli",
      description: "Sterilizacija, bojenja, brojanja i biokemijski testovi \u2013 sve na jednom mjestu s detaljnim uputama.",
      buttonText: "Istra\u017Ei protokole",
      buttonLink: "/poglavlje-1/"
    },
    {
      title: "U\u010Denje po modulima",
      description: "Svako poglavlje je samostalna cjelina s jasnim ciljevima i provjerom znanja za efikasno u\u010Denje.",
      buttonText: "Zapo\u010Dni u\u010Denje",
      buttonLink: "/predgovor/"
    }
  ] })}  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50"> <div class="max-w-4xl mx-auto px-4 sm:px-6"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 section-title tracking-tight font-heading">Kako koristiti?</h2> <div class="grid gap-8"> <div class="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 how-to-step"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div> <div> <p class="text-lg text-gray-700">Kreni od <a href="/sadrzaj/" class="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300">Sadržaja</a> (pregled svih poglavlja).</p> </div> </div> </div> <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 how-to-step"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div> <div> <p class="text-lg text-gray-700">Otvori <a href="/predgovor/#pregled-poglavlja" class="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300">Pregled poglavlja</a> i izaberi temu.</p> </div> </div> </div> <div class="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 how-to-step"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div> <div> <p class="text-lg text-gray-700">Slijedi protokol → odradi vježbu → usporedi rezultat sa slikama.</p> </div> </div> </div> <div class="bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 how-to-step"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div> <div> <p class="text-lg text-gray-700">Bilježi opažanja i ponovi ključne korake.</p> </div> </div> </div> </div> <div class="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 recommendation-box"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 text-white rounded-full flex items-center justify-center text-2xl">💡</div> <div> <h3 class="text-xl font-semibold text-yellow-800 mb-3">Preporuka</h3> <p class="text-yellow-700 text-lg leading-relaxed">Najbolje rezultate daje kombinacija čitanja i izvođenja vježbi u laboratoriju.</p> </div> </div> </div> </div> </section>  <section class="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden"> <!-- Pozadinski uzorak --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div> </div> <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight font-heading">
Započni učenje?
</h2> <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed font-body">
Započnite svoj put u bakteriologiji danas. Naš tim stručnjaka spreman je pomoći vam na svakom koraku.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/sadrzaj/" class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
Pregledaj sadržaj
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/kontakt/" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300">
Kontaktirajte nas
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </a> </div> </div> </section>  ${renderScript($$result2, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/index.astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

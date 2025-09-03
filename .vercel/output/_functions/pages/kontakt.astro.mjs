/* empty css                                 */
import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderTemplate } from '../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ciberwarrior.github.io");
const $$Kontakt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kontakt;
  const {
    title = "Kontakt",
    description = "Kontaktirajte nas za pitanja o ud\u017Ebeniku iz bakteriologije"
  } = Astro2.props;
  return renderTemplate`<html lang="hr" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="bg-page font-sans text-page"> <!-- Hero Section --> <section class="relative py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white overflow-hidden"> <!-- Pozadinski uzorak --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div> </div> <div class="relative max-w-6xl mx-auto px-4 sm:px-6"> <div class="text-center"> <p class="text-purple-200 font-bold uppercase tracking-wide mb-4 text-sm">
Javite nam se
</p> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
Kontakt
</h1> <p class="text-xl text-purple-200 mb-8 leading-relaxed max-w-3xl mx-auto">
Imate pitanja o udžbeniku iz bakteriologije? Kontaktirajte nas i odgovorit ćemo vam u najkraćem mogućem roku.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
← Povratak na početnu
</a> <a href="/o-nama/" class="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300">
O nama →
</a> </div> </div> </div> </section> <!-- Main Content Section --> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="grid lg:grid-cols-2 gap-12"> <!-- Kontakt forma --> <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200"> <h2 class="text-3xl font-bold text-purple-900 mb-6">Pošaljite nam poruku</h2> <form class="space-y-6"> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="firstName" class="block text-sm font-semibold text-purple-800 mb-2">Ime *</label> <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" placeholder="Vaše ime"> </div> <div> <label for="lastName" class="block text-sm font-semibold text-purple-800 mb-2">Prezime *</label> <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" placeholder="Vaše prezime"> </div> </div> <div> <label for="email" class="block text-sm font-semibold text-purple-800 mb-2">Email *</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" placeholder="vas.email@primjer.com"> </div> <div> <label for="subject" class="block text-sm font-semibold text-purple-800 mb-2">Tema *</label> <select id="subject" name="subject" required class="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"> <option value="">Odaberite temu</option> <option value="general">Opća pitanja</option> <option value="technical">Tehnička pitanja</option> <option value="content">Pitanja o sadržaju</option> <option value="feedback">Povratne informacije</option> <option value="other">Ostalo</option> </select> </div> <div> <label for="message" class="block text-sm font-semibold text-purple-800 mb-2">Poruka *</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Napišite svoju poruku ovdje..."></textarea> </div> <button type="submit" class="w-full bg-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
Pošaljite poruku
<svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg> </button> </form> </div> <!-- Kontakt informacije --> <div class="space-y-8"> <!-- Glavne informacije --> <div> <h2 class="text-3xl font-bold text-gray-900 mb-6">Kontakt informacije</h2> <p class="text-lg text-gray-700 mb-8">
Slobodno nas kontaktirajte za bilo kakva pitanja o udžbeniku iz bakteriologije. 
                Naš tim stručnjaka spreman je pomoći vam.
</p> </div> <!-- Email --> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-gray-900 mb-2">Email</h3> <p class="text-gray-700 mb-1">kontakt@bakteriologija.hr</p> <p class="text-gray-600 text-sm">Odgovoramo u roku od 24 sata</p> </div> </div> <!-- Radno vrijeme --> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-gray-900 mb-2">Radno vrijeme</h3> <p class="text-gray-700 mb-1">Ponedjeljak - Petak: 9:00 - 17:00</p> <p class="text-gray-600 text-sm">Subota: 9:00 - 13:00</p> </div> </div> <!-- Lokacija --> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-gray-900 mb-2">Lokacija</h3> <p class="text-gray-700 mb-1">Sveučilište u Zagrebu</p> <p class="text-gray-600 text-sm">Prirodoslovno-matematički fakultet</p> </div> </div> <!-- FAQ sekcija --> <div class="bg-gray-50 rounded-xl p-6"> <h3 class="text-xl font-bold text-gray-900 mb-4">Česta pitanja</h3> <div class="space-y-4"> <div> <h4 class="font-semibold text-gray-800 mb-1">Kako mogu pristupiti udžbeniku?</h4> <p class="text-gray-600 text-sm">Udžbenik je dostupan online 24/7. Samo posjetite našu web stranicu i započnite s učenjem.</p> </div> <div> <h4 class="font-semibold text-gray-800 mb-1">Je li udžbenik besplatan?</h4> <p class="text-gray-600 text-sm">Da, udžbenik je potpuno besplatan za sve studente biologije.</p> </div> <div> <h4 class="font-semibold text-gray-800 mb-1">Mogu li preuzeti sadržaj?</h4> <p class="text-gray-600 text-sm">Udžbenik je dostupan online, ali možete isprintati pojedinačne stranice za osobnu upotrebu.</p> </div> </div> </div> </div> </div> </div> </section> <!-- Call to Action Section --> <section class="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
Trebate pomoć?
</h2> <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
Naš tim stručnjaka spreman je odgovoriti na sva vaša pitanja o udžbeniku i bakteriološkim tehnikama.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kontakt@bakteriologija.hr" class="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
Pošaljite email
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </a> <a href="/" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300">
Povratak na početnu
</a> </div> </div> </section> </body></html>`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/kontakt.astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/kontakt.astro";
const $$url = "/kontakt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontakt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                 */
import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, f as renderScript, d as renderTemplate } from '../chunks/astro/server_B-kAR108.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ciberwarrior.github.io");
const $$Rjenik = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rjenik;
  const {
    title = "Rje\u010Dnik - Rje\u010Dnik bakteriolo\u0161kih pojmova",
    description = "Kompletan rje\u010Dnik bakteriolo\u0161kih pojmova, tehnika i termina iz svih poglavlja ud\u017Ebenika"
  } = Astro2.props;
  const pojmovi = {
    A: [
      {
        pojam: "Agar",
        definicija: "Gel substanca izvu\u010Dena iz algi koji se koristi kao \u010Dvrsta podloga za uzgoj mikroorganizama",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/ekstrakti/#agar"
      },
      {
        pojam: "Antibiogram",
        definicija: "Laboratorijska metoda za odre\u0111ivanje osjetljivosti bakterijskih izolata na razli\u010Dite antibiotike",
        poglavlje: "Poglavlje 13",
        link: "/poglavlje-13/antibiogram/#definicija-antibiograma"
      },
      {
        pojam: "Aromatogram",
        definicija: "Test za odre\u0111ivanje antimikrobne aktivnosti eteri\u010Dnih ulja i aromatskih tvari",
        poglavlje: "Poglavlje 13",
        link: "/poglavlje-13/aromatogram/#definicija-aromatograma"
      },
      {
        pojam: "Aseptika",
        definicija: "Postupci i metode rada koji sprje\u010Davaju kontaminaciju sterilnih materijala i prostora",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/bakterioloske-tehnike/#sigurnost-sterilizacija"
      },
      {
        pojam: "Ashby agar",
        definicija: "Selektivna podloga za uzgoj bakterija koje fiksiraju atmosferski du\u0161ik, ne sadr\u017Ei izvor du\u0161ika",
        poglavlje: "Poglavlje 18",
        link: "/poglavlje-18/nesimbiotski-fiksatori-dusika/#ashby-agar"
      },
      {
        pojam: "Autoklaviranje",
        definicija: "Metoda sterilizacije vla\u017Enom parom pod pritiskom na temperaturi 121\xB0C",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/uredaji-u-laboratoriju/#autoklav"
      },
      {
        pojam: "Azotobacter",
        definicija: "Rod aerobnih bakterija koje fiksiraju atmosferski du\u0161ik, imaju debelu kapsulu",
        poglavlje: "Poglavlje 18",
        link: "/poglavlje-18/nesimbiotski-fiksatori-dusika/"
      }
    ],
    B: [
      {
        pojam: "Bakterijska endospora",
        definicija: "Otporna forma bakterije koja mo\u017Ee pre\u017Eivjeti ekstremne uvjete (toplinu, su\u0161u, zra\u010Denje)",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/bojenje-bakterijskih-endospora-po-schaffer-fultonu/"
      },
      {
        pojam: "Bakterijska kultura",
        definicija: "Populacija bakterija nastala na hranjivim podlogama razmno\u017Eavanjem iz jedne ili vi\u0161e istovrsnih stanica",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/osnovni-pojmovi/#bakterijska-kultura"
      },
      {
        pojam: "Bakterijska kolonija",
        definicija: "Nakupina bakterijskih stanica na krutoj hranjivoj podlozi nastala rastom i razmno\u017Eavanjem od jedne prvobotne bakterijske stanice",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/osnovni-pojmovi/#bakterijska-kolonija"
      },
      {
        pojam: "Bakterijska suspenzija",
        definicija: "Raspr\u0161ene bakterijske stanice u teku\u0107em mediju",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/osnovni-pojmovi/#bakterijska-suspenzija"
      },
      {
        pojam: "Bojenje po Gramu",
        definicija: "Osnovno diferencijalno bojenje koje dijeli bakterije na Gram pozitivne (plave) i Gram negativne (crvene)",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/slozena-bojanja/"
      },
      {
        pojam: "Bojenje po Sh\xE4ffer-Fultonu",
        definicija: "Metoda bojenja bakterijskih endospora pomo\u0107u malahitnog zelenila i safranina",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/bojenje-bakterijskih-endospora-po-schaffer-fultonu/"
      }
    ],
    C: [
      {
        pojam: "CFU (Colony Forming Unit)",
        definicija: "Jedinica za brojanje \u017Eivljih bakterija, broj kolonija koje mogu narasti iz uzorka",
        poglavlje: "Poglavlje 5",
        link: "/poglavlje-5/"
      },
      {
        pojam: "Clostridium",
        definicija: "Rod anaerobnih, sporogenih bakterija, uzro\u010Dnici plinse gangrene, tetanusa i botulizma",
        poglavlje: "Poglavlje 19",
        link: "/poglavlje-19/sulfit-reducirajuce-klostridije/#clostridium-rod"
      },
      {
        pojam: "\u010Cista kultura",
        definicija: "Kultura samo jedne vrste, odnosno jednog soja bakterija",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/osnovni-pojmovi/#cista-kultura"
      },
      {
        pojam: "Czapekova podloga",
        definicija: "Sintetska podloga za uzgoj gljiva i aktinomiceta, sadr\u017Ei natrijev nitrat kao izvor du\u0161ika",
        poglavlje: "Poglavlje 22",
        link: "/poglavlje-22/streptomiceti/#sastav-czapekovog-agara"
      }
    ],
    D: [
      {
        pojam: "Decimalno razrje\u0111enje",
        definicija: "Postupak razrje\u0111ivanja uzorka u odnosu 1:10 za kvantitativno brojanje bakterija",
        poglavlje: "Poglavlje 5",
        link: "/poglavlje-5/"
      },
      {
        pojam: "Diferencijalna podloga",
        definicija: "Podloga koja omogu\u0107ava razlikovanje bakterija na osnovu njihovih metaboli\u010Dkih svojstava",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/hranjivi-mediji/"
      },
      {
        pojam: "Direktne metode brojenja",
        definicija: "Metode brojenja bakterija pod mikroskopom u Petroff-Hauserovoj komorici",
        poglavlje: "Poglavlje 7",
        link: "/poglavlje-7/odredivanje-broja-bakterija-u-suspenziji-direktnim-metodama/#direktne-metode"
      }
    ],
    E: [
      {
        pojam: "E. coli (Escherichia coli)",
        definicija: "Gram negativna bakterija, indikator fekalnog zaga\u0111enja vode, uzgaja se na 37\xB0C",
        poglavlje: "Poglavlje 8",
        link: "/poglavlje-8/koliformne-bakterije/"
      },
      {
        pojam: "EC-X-GLUC agar",
        definicija: "Selektivno-diferencijalna kromogena podloga za isolaciju i identifikaciju E. coli",
        poglavlje: "Poglavlje 8",
        link: "/poglavlje-8/koliformne-bakterije/"
      },
      {
        pojam: "Endo agar",
        definicija: "Selektivno-diferencijalna podloga za enterobakterije, sadr\u017Ei laktozu i bazi\u010Dni fuksin",
        poglavlje: "Poglavlje 8",
        link: "/poglavlje-8/koliformne-bakterije/"
      },
      {
        pojam: "Enterokoki",
        definicija: "Gram pozitivne bakterije, indikatori fekalnog zaga\u0111enja, otporne na \u017Eu\u010Dne soli",
        poglavlje: "Poglavlje 8",
        link: "/poglavlje-8/"
      },
      {
        pojam: "Eza",
        definicija: "Bakteriolo\u0161ka u\u0161ica - osnovni pribor za rad s bakterijskim materijalom, prvi ju je uveo L. Pasteur",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/bakterioloske-tehnike/#bakterioloska-usica-eza"
      }
    ],
    F: [
      {
        pojam: "Fiksacija du\u0161ika",
        definicija: "Proces pretvaranja atmosferskog du\u0161ika u amonijak koji bakterije mogu koristiti",
        poglavlje: "Poglavlje 18",
        link: "/poglavlje-18/nesimbiotski-fiksatori-dusika/"
      },
      {
        pojam: "Fiksiranje preparata",
        definicija: "Postupak u\u010Dvr\u0161\u0107ivanja bakterija na staklo toplinom prije bojenja",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/metode-bojenja-bakterija/"
      }
    ],
    G: [
      {
        pojam: "Gram negativne bakterije",
        definicija: "Bakterije s tankim slojem peptidoglikana, boje se crveno u Gram bojenju",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/slozena-bojanja/"
      },
      {
        pojam: "Gram pozitivne bakterije",
        definicija: "Bakterije s debelim slojem peptidoglikana, boje se plavo u Gram bojenju",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/slozena-bojanja/"
      }
    ],
    H: [
      {
        pojam: "Hranjiva podloga",
        definicija: "Medij koji sadr\u017Ei sve potrebne hranjive tvari za rast mikroorganizama",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/hranjivi-mediji/"
      }
    ],
    I: [
      {
        pojam: "Indol test",
        definicija: "Biokemijski test za dokazivanje sposobnosti bakterije da proizvede indol iz triptofana",
        poglavlje: "Poglavlje 6",
        link: "/poglavlje-6/"
      },
      {
        pojam: "Inkubacija",
        definicija: "Postupak dr\u017Eanja kultura bakterija na optimalnoj temperaturi za njihov rast",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/vjezba-3/#inkubacija"
      }
    ],
    K: [
      {
        pojam: "Kapsula",
        definicija: "Sluzava ovojnica oko bakterijske stanice, vidljiva negativnim bojenjem",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/negativna-bojenja/"
      },
      {
        pojam: "Katalaza test",
        definicija: "Test za dokazivanje enzima katalaze koji razla\u017Ee vodikov peroksid",
        poglavlje: "Poglavlje 5",
        link: "/poglavlje-5/katalaza-test/"
      },
      {
        pojam: "KOH test",
        definicija: "Test s 3% kalijum hidroksidom za razlikovanje Gram pozitivnih i Gram negativnih bakterija",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/test-s-kalijevom-luzinom/"
      },
      {
        pojam: "Kromogena podloga",
        definicija: "Podloga koja sadr\u017Ei supstrate koji daju obojene proizvode s odre\u0111enim enzimima",
        poglavlje: "Poglavlje 7",
        link: "/poglavlje-7/"
      }
    ],
    L: [
      {
        pojam: "Laktoza",
        definicija: "Disaharid koji se koristi u diferencijalnim podlogama za razlikovanje bakterija",
        poglavlje: "Poglavlje 7",
        link: "/poglavlje-7/"
      }
    ],
    M: [
      {
        pojam: "MacConkey agar",
        definicija: "Selektivno-diferencijalna podloga za Gram negativne bakterije, sadr\u017Ei laktozu",
        poglavlje: "Poglavlje 9",
        link: "/poglavlje-9/potvrdni-test/"
      },
      {
        pojam: "Malahitno zelenilo",
        definicija: "Boja koja se koristi za bojenje bakterijskih endospora",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/bojenje-bakterijskih-endospora-po-schaffer-fultonu/"
      },
      {
        pojam: "Mje\u0161ovita kultura",
        definicija: "Kultura bakterija koja sadr\u017Ei dvije ili vi\u0161e vrsta ili sojeva bakterija",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/osnovni-pojmovi/#mjesovita-kultura"
      },
      {
        pojam: "MR-VP test",
        definicija: "Kombinacija Methyl Red i Voges-Proskauer testova za identifikaciju enterobakterija",
        poglavlje: "Poglavlje 6",
        link: "/poglavlje-6/"
      }
    ],
    N: [
      {
        pojam: "Negativno bojenje",
        definicija: "Metoda bojenja gdje se pozadina boji a bakterije ostaju prozirne",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/negativna-bojenja/"
      },
      {
        pojam: "Nesimbiotski fiksatori du\u0161ika",
        definicija: "Bakterije koje fiksiraju atmosferski du\u0161ik neovisno o biljkama (npr. Azotobacter)",
        poglavlje: "Poglavlje 18",
        link: "/poglavlje-18/nesimbiotski-fiksatori-dusika/"
      }
    ],
    P: [
      {
        pojam: "Pasterizacija",
        definicija: "Djelomi\u010Dna sterilizacija zagrijavanjem na temperaturu ispod 100\xB0C",
        poglavlje: "Poglavlje 2",
        link: "/poglavlje-2/pasterizacija/"
      },
      {
        pojam: "Peptonska voda",
        definicija: "Osnovna teku\u0107a podloga s peptonom kao izvorom du\u0161ika",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/ekstrakti/"
      },
      {
        pojam: "Petrijeva zdjelica",
        definicija: "Stakle\u0161ka posuda s poklopcem za uzgoj bakterija na \u010Dvrstim podlogama",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/laboratorijski-pribor/"
      },
      {
        pojam: "Petroff-Hauserova komorica",
        definicija: "Komorica za brojenje bakterija pod mikroskopom, volumen 0,02 mm\xB3",
        poglavlje: "Poglavlje 7",
        link: "/poglavlje-7/odredivanje-broja-bakterija-u-suspenziji-direktnim-metodama/#direktne-metode"
      }
    ],
    S: [
      {
        pojam: "Safranin",
        definicija: "Crvena boja koja se koristi kao kontrastna boja u Gram bojenju",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/"
      },
      {
        pojam: "Sterilizacija zra\u010Denjem",
        definicija: "Metoda sterilizacije pomo\u0107u gama zraka ili rendgenskih zraka",
        poglavlje: "Poglavlje 2",
        link: "/poglavlje-2/sterilizacija-zracenjem/"
      },
      {
        pojam: "Selektivna podloga",
        definicija: "Podloga koja omogu\u0107ava rast samo odre\u0111enih vrsta bakterija",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/hranjivi-mediji/"
      },
      {
        pojam: "SPS agar",
        definicija: "Selektivna podloga za Clostridium bakterije, sadr\u017Ei natrijev sulfit",
        poglavlje: "Poglavlje 19",
        link: "/poglavlje-19/sulfit-reducirajuce-klostridije/#sps-agar"
      },
      {
        pojam: "Staphylococcus aureus",
        definicija: "Gram pozitivna bakterija, katalaza pozitivna, uzro\u010Dnik gnojnih infekcija",
        poglavlje: "Poglavlje 3",
        link: "/poglavlje-3/slozena-bojanja/"
      },
      {
        pojam: "Sterilizacija",
        definicija: "Potpuno uni\u0161tavanje svih oblika mikrobnog \u017Eivota uklju\u010Duju\u0107i spore",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/bakterioloske-tehnike/#sigurnost-sterilizacija"
      },
      {
        pojam: "Streptomiceti",
        definicija: "Rod aktinobakterija, proizvo\u0111a\u010Di antibiotika, imaju micelijski rast",
        poglavlje: "Poglavlje 22",
        link: "/poglavlje-22/streptomiceti/"
      },
      {
        pojam: "Suha sterilizacija",
        definicija: "Sterilizacija suhom toplinom na visokim temperaturama (160-180\xB0C)",
        poglavlje: "Poglavlje 1",
        link: "/poglavlje-1/uredaji-u-laboratoriju/#suhi-sterilizator"
      }
    ],
    T: [
      {
        pojam: "TTC test",
        definicija: "Test za procjenu bakterijske aktivnosti pomo\u0107u 2,3,5-trifeniltetrazolium klorida koji se reducira do crvenog formazana",
        poglavlje: "Poglavlje 15",
        link: "/poglavlje-15/ttc-test/#ttc-kemikalija"
      },
      {
        pojam: "Titar",
        definicija: "Najve\u0107e razrje\u0111enje uzorka u kojem se jo\u0161 mo\u017Ee dokazati prisutnost tra\u017Eene bakterije",
        poglavlje: "Poglavlje 6",
        link: "/poglavlje-6/titar-bakterija/"
      }
    ],
    V: [],
    Z: [
      {
        pojam: "\u017Du\u010Dne soli",
        definicija: "Komponente selektivnih podloga koji inhibiraju rast Gram pozitivnih bakterija",
        poglavlje: "Poglavlje 7",
        link: "/poglavlje-7/"
      }
    ]
  };
  const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return renderTemplate`<html lang="hr" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="bg-page font-sans text-page"> <!-- Navigation --> <nav class="bg-white shadow-sm border-b border-gray-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="flex justify-between items-center py-4"> <a href="/" class="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
Bakteriologija
</a> <!-- Desktop navigacija --> <div class="hidden md:flex items-center space-x-8"> <a href="/sadrzaj/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Sadržaj
</a> <a href="/predgovor/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Predgovor
</a> <a href="/rječnik/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Rječnik
</a> <a href="/provjeri-znanje/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Provjeri znanje
</a> <a href="/kontakt/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Kontakt
</a> <!-- Search --> <div class="relative"> <a href="/pretraga/" class="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300" title="Pretraga"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </a> </div> </div> <!-- Mobilni hamburger menu --> <div class="md:hidden"> <button id="mobile-menu-button" class="text-gray-700 hover:text-blue-600 transition-colors duration-300" aria-label="Otvori navigacijski menu" aria-expanded="false" aria-controls="mobile-menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobilni menu --> <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 border-t border-gray-200" role="navigation" aria-label="Mobilna navigacija"> <div class="flex flex-col space-y-4 pt-4"> <a href="/sadrzaj/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Sadržaj
</a> <a href="/predgovor/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Predgovor
</a> <a href="/rječnik/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Rječnik
</a> <a href="/provjeri-znanje/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Provjeri znanje
</a> <a href="/pretraga/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Pretraga
</a> <a href="/kontakt/" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-wide text-sm">
Kontakt
</a> </div> </div> </div> </nav> <!-- Header --> <section class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16"> <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center"> <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <h1 class="text-4xl md:text-5xl font-bold mb-4">Rječnik</h1> <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
Rječnik bakterioloških pojmova, tehnika i termina iz svih poglavlja udžbenika
</p> </div> </section> <!-- Search Section --> <section class="py-8 bg-gray-50 border-b border-gray-200"> <div class="max-w-4xl mx-auto px-4 sm:px-6"> <div class="relative"> <input type="text" id="searchInput" placeholder="Pretražite pojmove..." class="w-full px-4 py-3 pl-12 pr-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"> <svg class="absolute left-4 top-3.5 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> </section> <!-- Alphabet Navigation --> <section class="py-6 bg-white border-b border-gray-200 sticky top-16 z-40"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="flex flex-wrap justify-center gap-2"> ${alfabet.map((slovo) => renderTemplate`<a${addAttribute(`#${slovo}`, "href")}${addAttribute(`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${pojmovi[slovo] ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`, "class")}${addAttribute(pojmovi[slovo] ? void 0 : "return false;", "onclick")}> ${slovo} </a>`)} </div> </div> </section> <!-- Main Content --> <main class="py-12 bg-white"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <!-- Statistics --> <div class="mb-12 text-center"> <div class="inline-flex items-center bg-blue-50 text-blue-800 px-6 py-3 rounded-full"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> <span class="font-semibold"> ${Object.values(pojmovi).flat().length} pojmova • ${Object.keys(pojmovi).length} kategorija
</span> </div> </div> <!-- Terms by Letter --> ${Object.entries(pojmovi).map(([slovo, termini]) => renderTemplate`<section${addAttribute(slovo, "id")} class="mb-12"> <div class="flex items-center mb-6"> <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4"> ${slovo} </div> <h2 class="text-3xl font-bold text-gray-900">${slovo}</h2> <div class="ml-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"> ${termini.length} pojm${termini.length === 1 ? "" : termini.length < 5 ? "a" : "ova"} </div> </div> <div class="grid gap-6"> ${termini.map((item) => renderTemplate`<div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 term-card"> <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between"> <div class="flex-1"> <h3 class="text-xl font-bold text-gray-900 mb-2 term-title">${item.pojam}</h3> <p class="text-gray-700 text-lg leading-relaxed mb-4 term-definition">${item.definicija}</p> </div> <div class="flex items-center space-x-3 lg:ml-6 lg:flex-shrink-0"> <span class="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> ${item.poglavlje} </span> <a${addAttribute(item.link, "href")} class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
Idi na poglavlje
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div>`)} </div> </section>`)} <!-- Back to Top --> <div class="text-center pt-12"> <a href="#top" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg>
Povratak na vrh
</a> </div> </div> </main> <!-- Navigation --> <section class="py-16 bg-gray-50"> <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center"> <h2 class="text-2xl font-bold text-gray-900 mb-8">Korisni linkovi</h2> <div class="grid md:grid-cols-3 gap-6"> <a href="/sadrzaj/" class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">Sadržaj udžbenika</h3> <p class="text-gray-600">Povratak na pregled svih poglavlja</p> </a> <a href="/provjeri-znanje/" class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">Provjeri znanje</h3> <p class="text-gray-600">Testiraj svoje znanje kvizom</p> </a> <a href="/" class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">Početna stranica</h3> <p class="text-gray-600">Povratak na početnu</p> </a> </div> </div> </section> <!-- JavaScript for Search and Mobile Menu --> ${renderScript($$result, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/rje\u010Dnik.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/rje\u010Dnik.astro", void 0);

const $$file = "/Users/renchi/Desktop/praktikum-iz-bakteriologije/src/pages/rječnik.astro";
const $$url = "/rječnik";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Rjenik,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

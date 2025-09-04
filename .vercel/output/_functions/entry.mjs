import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Cz0tZVrm.mjs';
import { manifest } from './manifest_juGkFnnl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/kontakt.astro.mjs');
const _page3 = () => import('./pages/o-nama.astro.mjs');
const _page4 = () => import('./pages/poglavlje-1/bakterije-u-nastavi.astro.mjs');
const _page5 = () => import('./pages/poglavlje-1/bakterioloske-tehnike.astro.mjs');
const _page6 = () => import('./pages/poglavlje-1/dezinfekcija-i-antisepsa.astro.mjs');
const _page7 = () => import('./pages/poglavlje-1/ekstrakti.astro.mjs');
const _page8 = () => import('./pages/poglavlje-1/hranjivi-mediji.astro.mjs');
const _page9 = () => import('./pages/poglavlje-1/laboratorijski-pribor.astro.mjs');
const _page10 = () => import('./pages/poglavlje-1/opce-tehnike-rada.astro.mjs');
const _page11 = () => import('./pages/poglavlje-1/osnovni-pojmovi.astro.mjs');
const _page12 = () => import('./pages/poglavlje-1/pravila-ponasanja.astro.mjs');
const _page13 = () => import('./pages/poglavlje-1/preuzimanje-radnog-mjesta.astro.mjs');
const _page14 = () => import('./pages/poglavlje-1/prva-pomoc.astro.mjs');
const _page15 = () => import('./pages/poglavlje-1/quiz-1.astro.mjs');
const _page16 = () => import('./pages/poglavlje-1/uredaji-u-laboratoriju.astro.mjs');
const _page17 = () => import('./pages/poglavlje-1/vjezba-1.astro.mjs');
const _page18 = () => import('./pages/poglavlje-1/vjezba-2.astro.mjs');
const _page19 = () => import('./pages/poglavlje-1/vjezba-3.astro.mjs');
const _page20 = () => import('./pages/poglavlje-1/vjezba-4.astro.mjs');
const _page21 = () => import('./pages/poglavlje-1/vjezba-5.astro.mjs');
const _page22 = () => import('./pages/poglavlje-1/zbrinjavanje-materijala.astro.mjs');
const _page23 = () => import('./pages/poglavlje-1/_slug_.astro.mjs');
const _page24 = () => import('./pages/poglavlje-1.astro.mjs');
const _page25 = () => import('./pages/poglavlje-10/quiz-10.astro.mjs');
const _page26 = () => import('./pages/poglavlje-10/termofilne-bakterije.astro.mjs');
const _page27 = () => import('./pages/poglavlje-10/vjezba-10.astro.mjs');
const _page28 = () => import('./pages/poglavlje-10/_slug_.astro.mjs');
const _page29 = () => import('./pages/poglavlje-10.astro.mjs');
const _page30 = () => import('./pages/poglavlje-11/aerobne-sporogene-bakterije.astro.mjs');
const _page31 = () => import('./pages/poglavlje-11/quiz-11.astro.mjs');
const _page32 = () => import('./pages/poglavlje-11/vjezba-11.astro.mjs');
const _page33 = () => import('./pages/poglavlje-11/vjezbe/vjezba-11-1.astro.mjs');
const _page34 = () => import('./pages/poglavlje-11/_slug_.astro.mjs');
const _page35 = () => import('./pages/poglavlje-11.astro.mjs');
const _page36 = () => import('./pages/poglavlje-12/anaerobne-bakterije.astro.mjs');
const _page37 = () => import('./pages/poglavlje-12/quiz-12.astro.mjs');
const _page38 = () => import('./pages/poglavlje-12/vjezba-12.astro.mjs');
const _page39 = () => import('./pages/poglavlje-12/_slug_.astro.mjs');
const _page40 = () => import('./pages/poglavlje-12.astro.mjs');
const _page41 = () => import('./pages/poglavlje-13/antibiogram.astro.mjs');
const _page42 = () => import('./pages/poglavlje-13/aromatogram.astro.mjs');
const _page43 = () => import('./pages/poglavlje-13/quiz-13.astro.mjs');
const _page44 = () => import('./pages/poglavlje-13/vjezba-13.astro.mjs');
const _page45 = () => import('./pages/poglavlje-13/_slug_.astro.mjs');
const _page46 = () => import('./pages/poglavlje-13.astro.mjs');
const _page47 = () => import('./pages/poglavlje-14/quiz-14.astro.mjs');
const _page48 = () => import('./pages/poglavlje-14/test-toksicnosti.astro.mjs');
const _page49 = () => import('./pages/poglavlje-14/vjezba-14.astro.mjs');
const _page50 = () => import('./pages/poglavlje-14/_slug_.astro.mjs');
const _page51 = () => import('./pages/poglavlje-14.astro.mjs');
const _page52 = () => import('./pages/poglavlje-15/hil-test.astro.mjs');
const _page53 = () => import('./pages/poglavlje-15/quiz-15.astro.mjs');
const _page54 = () => import('./pages/poglavlje-15/test-s-metilenskim-modrilom.astro.mjs');
const _page55 = () => import('./pages/poglavlje-15/ttc-test.astro.mjs');
const _page56 = () => import('./pages/poglavlje-15/vjezba-15.astro.mjs');
const _page57 = () => import('./pages/poglavlje-15/_slug_.astro.mjs');
const _page58 = () => import('./pages/poglavlje-15.astro.mjs');
const _page59 = () => import('./pages/poglavlje-16/bakterije-mlijecne-fermentacije.astro.mjs');
const _page60 = () => import('./pages/poglavlje-16/quiz-16.astro.mjs');
const _page61 = () => import('./pages/poglavlje-16/vjezba-16.astro.mjs');
const _page62 = () => import('./pages/poglavlje-16/_slug_.astro.mjs');
const _page63 = () => import('./pages/poglavlje-16.astro.mjs');
const _page64 = () => import('./pages/poglavlje-17/amiloliticke-bakterije.astro.mjs');
const _page65 = () => import('./pages/poglavlje-17/biogeokemijski-ciklus-ugljika.astro.mjs');
const _page66 = () => import('./pages/poglavlje-17/oligokarbofilne-i-polikarbofilne-bakterije.astro.mjs');
const _page67 = () => import('./pages/poglavlje-17/quiz-17.astro.mjs');
const _page68 = () => import('./pages/poglavlje-17/vjezba-17-1.astro.mjs');
const _page69 = () => import('./pages/poglavlje-17/vjezba-17-2.astro.mjs');
const _page70 = () => import('./pages/poglavlje-17/_slug_.astro.mjs');
const _page71 = () => import('./pages/poglavlje-17.astro.mjs');
const _page72 = () => import('./pages/poglavlje-18/amonifikatori.astro.mjs');
const _page73 = () => import('./pages/poglavlje-18/biogeokemijski-ciklus-dusika.astro.mjs');
const _page74 = () => import('./pages/poglavlje-18/denitrifikatori.astro.mjs');
const _page75 = () => import('./pages/poglavlje-18/nesimbiotski-fiksatori-dusika.astro.mjs');
const _page76 = () => import('./pages/poglavlje-18/nitrifikatori.astro.mjs');
const _page77 = () => import('./pages/poglavlje-18/proteoliticke-zelatinolitiske-bakterije.astro.mjs');
const _page78 = () => import('./pages/poglavlje-18/quiz-18.astro.mjs');
const _page79 = () => import('./pages/poglavlje-18/razgradnja-ureje.astro.mjs');
const _page80 = () => import('./pages/poglavlje-18/vjezba-18.astro.mjs');
const _page81 = () => import('./pages/poglavlje-18/_slug_.astro.mjs');
const _page82 = () => import('./pages/poglavlje-18.astro.mjs');
const _page83 = () => import('./pages/poglavlje-19/biogeokemijski-ciklus-sumpora.astro.mjs');
const _page84 = () => import('./pages/poglavlje-19/proizvodaci-sumporovodika-iz-proteina.astro.mjs');
const _page85 = () => import('./pages/poglavlje-19/quiz-19.astro.mjs');
const _page86 = () => import('./pages/poglavlje-19/sulfat-i-tiosulfat-reducirajuce-bakterije.astro.mjs');
const _page87 = () => import('./pages/poglavlje-19/sulfit-reducirajuce-klostridije.astro.mjs');
const _page88 = () => import('./pages/poglavlje-19/vjezba-19.astro.mjs');
const _page89 = () => import('./pages/poglavlje-19/_slug_.astro.mjs');
const _page90 = () => import('./pages/poglavlje-19.astro.mjs');
const _page91 = () => import('./pages/poglavlje-2/autoklaviranje.astro.mjs');
const _page92 = () => import('./pages/poglavlje-2/fizicka-sterilizacija.astro.mjs');
const _page93 = () => import('./pages/poglavlje-2/flambiranje.astro.mjs');
const _page94 = () => import('./pages/poglavlje-2/frakciona-sterilizacija.astro.mjs');
const _page95 = () => import('./pages/poglavlje-2/hladna-sterilizacija.astro.mjs');
const _page96 = () => import('./pages/poglavlje-2/kemijska-sterilizacija.astro.mjs');
const _page97 = () => import('./pages/poglavlje-2/kuhanje.astro.mjs');
const _page98 = () => import('./pages/poglavlje-2/opaljivanje.astro.mjs');
const _page99 = () => import('./pages/poglavlje-2/pasterizacija.astro.mjs');
const _page100 = () => import('./pages/poglavlje-2/quiz-2.astro.mjs');
const _page101 = () => import('./pages/poglavlje-2/spaljivanje.astro.mjs');
const _page102 = () => import('./pages/poglavlje-2/sterilizacija-ultrazvukom.astro.mjs');
const _page103 = () => import('./pages/poglavlje-2/sterilizacija-zracenjem.astro.mjs');
const _page104 = () => import('./pages/poglavlje-2/suha-sterilizacija.astro.mjs');
const _page105 = () => import('./pages/poglavlje-2/vjezba-2-1.astro.mjs');
const _page106 = () => import('./pages/poglavlje-2/vjezba-2-2.astro.mjs');
const _page107 = () => import('./pages/poglavlje-2/vjezba-2-3.astro.mjs');
const _page108 = () => import('./pages/poglavlje-2/vjezba-2-4.astro.mjs');
const _page109 = () => import('./pages/poglavlje-2/vjezba-2-5.astro.mjs');
const _page110 = () => import('./pages/poglavlje-2/zarenje.astro.mjs');
const _page111 = () => import('./pages/poglavlje-2/_slug_.astro.mjs');
const _page112 = () => import('./pages/poglavlje-2.astro.mjs');
const _page113 = () => import('./pages/poglavlje-20/biogeokemijski-ciklus-fosfora.astro.mjs');
const _page114 = () => import('./pages/poglavlje-20/fosfat-akumulirajuce-bakterije.astro.mjs');
const _page115 = () => import('./pages/poglavlje-20/fosfomobilizatori.astro.mjs');
const _page116 = () => import('./pages/poglavlje-20/quiz-20.astro.mjs');
const _page117 = () => import('./pages/poglavlje-20/vjezba-20.astro.mjs');
const _page118 = () => import('./pages/poglavlje-20/_slug_.astro.mjs');
const _page119 = () => import('./pages/poglavlje-20.astro.mjs');
const _page120 = () => import('./pages/poglavlje-21/metoda-otiska.astro.mjs');
const _page121 = () => import('./pages/poglavlje-21/quiz-21.astro.mjs');
const _page122 = () => import('./pages/poglavlje-21/vjezba-21-1.astro.mjs');
const _page123 = () => import('./pages/poglavlje-21/vjezba-21-2.astro.mjs');
const _page124 = () => import('./pages/poglavlje-21/_slug_.astro.mjs');
const _page125 = () => import('./pages/poglavlje-21.astro.mjs');
const _page126 = () => import('./pages/poglavlje-22/antibiotska-svojstva-streptomiceta.astro.mjs');
const _page127 = () => import('./pages/poglavlje-22/quiz-22.astro.mjs');
const _page128 = () => import('./pages/poglavlje-22/razgradnja-celuloze.astro.mjs');
const _page129 = () => import('./pages/poglavlje-22/streptomiceti.astro.mjs');
const _page130 = () => import('./pages/poglavlje-22/vjezba-22.astro.mjs');
const _page131 = () => import('./pages/poglavlje-22/_slug_.astro.mjs');
const _page132 = () => import('./pages/poglavlje-22.astro.mjs');
const _page133 = () => import('./pages/poglavlje-23/purpurne-sumporne-bakterije.astro.mjs');
const _page134 = () => import('./pages/poglavlje-23/quiz-23.astro.mjs');
const _page135 = () => import('./pages/poglavlje-23/vjezba-23.astro.mjs');
const _page136 = () => import('./pages/poglavlje-23/_slug_.astro.mjs');
const _page137 = () => import('./pages/poglavlje-23.astro.mjs');
const _page138 = () => import('./pages/poglavlje-3/bojenje-acidorezistentnih-bakterija-po-ziehl-neelsenu.astro.mjs');
const _page139 = () => import('./pages/poglavlje-3/bojenje-bakterijskih-endospora-po-schaffer-fultonu.astro.mjs');
const _page140 = () => import('./pages/poglavlje-3/jednostavna-bojenja.astro.mjs');
const _page141 = () => import('./pages/poglavlje-3/metode-bojenja-bakterija.astro.mjs');
const _page142 = () => import('./pages/poglavlje-3/negativna-bojenja.astro.mjs');
const _page143 = () => import('./pages/poglavlje-3/osnovne-otopine-boja.astro.mjs');
const _page144 = () => import('./pages/poglavlje-3/quiz-3.astro.mjs');
const _page145 = () => import('./pages/poglavlje-3/slozena-bojanja.astro.mjs');
const _page146 = () => import('./pages/poglavlje-3/test-s-kalijevom-luzinom.astro.mjs');
const _page147 = () => import('./pages/poglavlje-3/vjezba-3-1.astro.mjs');
const _page148 = () => import('./pages/poglavlje-3/vjezba-3-2.astro.mjs');
const _page149 = () => import('./pages/poglavlje-3/vjezba-3-3.astro.mjs');
const _page150 = () => import('./pages/poglavlje-3/vjezba-3-4.astro.mjs');
const _page151 = () => import('./pages/poglavlje-3/vjezba-3-5.astro.mjs');
const _page152 = () => import('./pages/poglavlje-3/vjezba-3-6.astro.mjs');
const _page153 = () => import('./pages/poglavlje-3/vjezba-3-7.astro.mjs');
const _page154 = () => import('./pages/poglavlje-3/vjezba-3-8.astro.mjs');
const _page155 = () => import('./pages/poglavlje-3/_slug_.astro.mjs');
const _page156 = () => import('./pages/poglavlje-3.astro.mjs');
const _page157 = () => import('./pages/poglavlje-4/pokretljivost-bakterija.astro.mjs');
const _page158 = () => import('./pages/poglavlje-4/quiz-4.astro.mjs');
const _page159 = () => import('./pages/poglavlje-4/vjezba-4.astro.mjs');
const _page160 = () => import('./pages/poglavlje-4/_slug_.astro.mjs');
const _page161 = () => import('./pages/poglavlje-4.astro.mjs');
const _page162 = () => import('./pages/poglavlje-5/biokemijska-svojstva-bakterija.astro.mjs');
const _page163 = () => import('./pages/poglavlje-5/katalaza-test.astro.mjs');
const _page164 = () => import('./pages/poglavlje-5/metilno-crvenilo-i-voges-proskauerov-test.astro.mjs');
const _page165 = () => import('./pages/poglavlje-5/oksidaza-test.astro.mjs');
const _page166 = () => import('./pages/poglavlje-5/quiz-5.astro.mjs');
const _page167 = () => import('./pages/poglavlje-5/razgradnja-ugljikohidrata.astro.mjs');
const _page168 = () => import('./pages/poglavlje-5/razgradnja-ureje.astro.mjs');
const _page169 = () => import('./pages/poglavlje-5/redukcija-nitrata-do-nitrita.astro.mjs');
const _page170 = () => import('./pages/poglavlje-5/stvaranje-amonijaka.astro.mjs');
const _page171 = () => import('./pages/poglavlje-5/stvaranje-indola.astro.mjs');
const _page172 = () => import('./pages/poglavlje-5/stvaranje-sumporovodika.astro.mjs');
const _page173 = () => import('./pages/poglavlje-5/test-na-kliglerovu-dvostrukom-seceru.astro.mjs');
const _page174 = () => import('./pages/poglavlje-5/uporaba-citrata.astro.mjs');
const _page175 = () => import('./pages/poglavlje-5/vazni-testovi-u-determinaciji-koliformnih-bakterija.astro.mjs');
const _page176 = () => import('./pages/poglavlje-5/vjezba-5-1.astro.mjs');
const _page177 = () => import('./pages/poglavlje-5/vjezba-5-2.astro.mjs');
const _page178 = () => import('./pages/poglavlje-5/_slug_.astro.mjs');
const _page179 = () => import('./pages/poglavlje-5.astro.mjs');
const _page180 = () => import('./pages/poglavlje-6/broj-kolonija-bakterija.astro.mjs');
const _page181 = () => import('./pages/poglavlje-6/quiz-6.astro.mjs');
const _page182 = () => import('./pages/poglavlje-6/titar-bakterija.astro.mjs');
const _page183 = () => import('./pages/poglavlje-6/vjezba-6.astro.mjs');
const _page184 = () => import('./pages/poglavlje-6.astro.mjs');
const _page185 = () => import('./pages/poglavlje-7/odredivanje-broja-bakterija-u-suspenziji-direktnim-metodama.astro.mjs');
const _page186 = () => import('./pages/poglavlje-7/quiz-7.astro.mjs');
const _page187 = () => import('./pages/poglavlje-7/vjezba-7.astro.mjs');
const _page188 = () => import('./pages/poglavlje-7/_slug_.astro.mjs');
const _page189 = () => import('./pages/poglavlje-7.astro.mjs');
const _page190 = () => import('./pages/poglavlje-8/fekalni-streptokoki.astro.mjs');
const _page191 = () => import('./pages/poglavlje-8/koliformne-bakterije.astro.mjs');
const _page192 = () => import('./pages/poglavlje-8/quiz-8.astro.mjs');
const _page193 = () => import('./pages/poglavlje-8/vjezba-8.astro.mjs');
const _page194 = () => import('./pages/poglavlje-8/_slug_.astro.mjs');
const _page195 = () => import('./pages/poglavlje-8.astro.mjs');
const _page196 = () => import('./pages/poglavlje-9/izracunavanje-najvjerojatnijeg-broja-ukupnih-i-fekalnih-koliformnih-bakterija.astro.mjs');
const _page197 = () => import('./pages/poglavlje-9/koliformne-bakterije.astro.mjs');
const _page198 = () => import('./pages/poglavlje-9/potvrdni-test.astro.mjs');
const _page199 = () => import('./pages/poglavlje-9/prethodni-test.astro.mjs');
const _page200 = () => import('./pages/poglavlje-9/quiz-9.astro.mjs');
const _page201 = () => import('./pages/poglavlje-9/saprofitske-bakterije.astro.mjs');
const _page202 = () => import('./pages/poglavlje-9/vjezba-9.astro.mjs');
const _page203 = () => import('./pages/poglavlje-9/zavrsni-test.astro.mjs');
const _page204 = () => import('./pages/poglavlje-9/_slug_.astro.mjs');
const _page205 = () => import('./pages/poglavlje-9.astro.mjs');
const _page206 = () => import('./pages/predgovor.astro.mjs');
const _page207 = () => import('./pages/pretraga.astro.mjs');
const _page208 = () => import('./pages/provjeri-znanje.astro.mjs');
const _page209 = () => import('./pages/rječnik.astro.mjs');
const _page210 = () => import('./pages/sadrzaj.astro.mjs');
const _page211 = () => import('./pages/video-tutorijali.astro.mjs');
const _page212 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/kontakt.astro", _page2],
    ["src/pages/o-nama.astro", _page3],
    ["src/pages/poglavlje-1/bakterije-u-nastavi.astro", _page4],
    ["src/pages/poglavlje-1/bakterioloske-tehnike.astro", _page5],
    ["src/pages/poglavlje-1/dezinfekcija-i-antisepsa.astro", _page6],
    ["src/pages/poglavlje-1/ekstrakti.astro", _page7],
    ["src/pages/poglavlje-1/hranjivi-mediji.astro", _page8],
    ["src/pages/poglavlje-1/laboratorijski-pribor.astro", _page9],
    ["src/pages/poglavlje-1/opce-tehnike-rada.astro", _page10],
    ["src/pages/poglavlje-1/osnovni-pojmovi.astro", _page11],
    ["src/pages/poglavlje-1/pravila-ponasanja.astro", _page12],
    ["src/pages/poglavlje-1/preuzimanje-radnog-mjesta.astro", _page13],
    ["src/pages/poglavlje-1/prva-pomoc.astro", _page14],
    ["src/pages/poglavlje-1/quiz-1.astro", _page15],
    ["src/pages/poglavlje-1/uredaji-u-laboratoriju.astro", _page16],
    ["src/pages/poglavlje-1/vjezba-1.astro", _page17],
    ["src/pages/poglavlje-1/vjezba-2.astro", _page18],
    ["src/pages/poglavlje-1/vjezba-3.astro", _page19],
    ["src/pages/poglavlje-1/vjezba-4.astro", _page20],
    ["src/pages/poglavlje-1/vjezba-5.astro", _page21],
    ["src/pages/poglavlje-1/zbrinjavanje-materijala.astro", _page22],
    ["src/pages/poglavlje-1/[slug].astro", _page23],
    ["src/pages/poglavlje-1.astro", _page24],
    ["src/pages/poglavlje-10/quiz-10.astro", _page25],
    ["src/pages/poglavlje-10/termofilne-bakterije.astro", _page26],
    ["src/pages/poglavlje-10/vjezba-10.astro", _page27],
    ["src/pages/poglavlje-10/[slug].astro", _page28],
    ["src/pages/poglavlje-10.astro", _page29],
    ["src/pages/poglavlje-11/aerobne-sporogene-bakterije.astro", _page30],
    ["src/pages/poglavlje-11/quiz-11.astro", _page31],
    ["src/pages/poglavlje-11/vjezba-11.astro", _page32],
    ["src/pages/poglavlje-11/vjezbe/vjezba-11-1.astro", _page33],
    ["src/pages/poglavlje-11/[slug].astro", _page34],
    ["src/pages/poglavlje-11.astro", _page35],
    ["src/pages/poglavlje-12/anaerobne-bakterije.astro", _page36],
    ["src/pages/poglavlje-12/quiz-12.astro", _page37],
    ["src/pages/poglavlje-12/vjezba-12.astro", _page38],
    ["src/pages/poglavlje-12/[slug].astro", _page39],
    ["src/pages/poglavlje-12.astro", _page40],
    ["src/pages/poglavlje-13/antibiogram.astro", _page41],
    ["src/pages/poglavlje-13/aromatogram.astro", _page42],
    ["src/pages/poglavlje-13/quiz-13.astro", _page43],
    ["src/pages/poglavlje-13/vjezba-13.astro", _page44],
    ["src/pages/poglavlje-13/[slug].astro", _page45],
    ["src/pages/poglavlje-13.astro", _page46],
    ["src/pages/poglavlje-14/quiz-14.astro", _page47],
    ["src/pages/poglavlje-14/test-toksicnosti.astro", _page48],
    ["src/pages/poglavlje-14/vjezba-14.astro", _page49],
    ["src/pages/poglavlje-14/[slug].astro", _page50],
    ["src/pages/poglavlje-14.astro", _page51],
    ["src/pages/poglavlje-15/hil-test.astro", _page52],
    ["src/pages/poglavlje-15/quiz-15.astro", _page53],
    ["src/pages/poglavlje-15/test-s-metilenskim-modrilom.astro", _page54],
    ["src/pages/poglavlje-15/ttc-test.astro", _page55],
    ["src/pages/poglavlje-15/vjezba-15.astro", _page56],
    ["src/pages/poglavlje-15/[slug].astro", _page57],
    ["src/pages/poglavlje-15.astro", _page58],
    ["src/pages/poglavlje-16/bakterije-mlijecne-fermentacije.astro", _page59],
    ["src/pages/poglavlje-16/quiz-16.astro", _page60],
    ["src/pages/poglavlje-16/vjezba-16.astro", _page61],
    ["src/pages/poglavlje-16/[slug].astro", _page62],
    ["src/pages/poglavlje-16.astro", _page63],
    ["src/pages/poglavlje-17/amiloliticke-bakterije.astro", _page64],
    ["src/pages/poglavlje-17/biogeokemijski-ciklus-ugljika.astro", _page65],
    ["src/pages/poglavlje-17/oligokarbofilne-i-polikarbofilne-bakterije.astro", _page66],
    ["src/pages/poglavlje-17/quiz-17.astro", _page67],
    ["src/pages/poglavlje-17/vjezba-17-1.astro", _page68],
    ["src/pages/poglavlje-17/vjezba-17-2.astro", _page69],
    ["src/pages/poglavlje-17/[slug].astro", _page70],
    ["src/pages/poglavlje-17.astro", _page71],
    ["src/pages/poglavlje-18/amonifikatori.astro", _page72],
    ["src/pages/poglavlje-18/biogeokemijski-ciklus-dusika.astro", _page73],
    ["src/pages/poglavlje-18/denitrifikatori.astro", _page74],
    ["src/pages/poglavlje-18/nesimbiotski-fiksatori-dusika.astro", _page75],
    ["src/pages/poglavlje-18/nitrifikatori.astro", _page76],
    ["src/pages/poglavlje-18/proteoliticke-zelatinolitiske-bakterije.astro", _page77],
    ["src/pages/poglavlje-18/quiz-18.astro", _page78],
    ["src/pages/poglavlje-18/razgradnja-ureje.astro", _page79],
    ["src/pages/poglavlje-18/vjezba-18.astro", _page80],
    ["src/pages/poglavlje-18/[slug].astro", _page81],
    ["src/pages/poglavlje-18.astro", _page82],
    ["src/pages/poglavlje-19/biogeokemijski-ciklus-sumpora.astro", _page83],
    ["src/pages/poglavlje-19/proizvodaci-sumporovodika-iz-proteina.astro", _page84],
    ["src/pages/poglavlje-19/quiz-19.astro", _page85],
    ["src/pages/poglavlje-19/sulfat-i-tiosulfat-reducirajuce-bakterije.astro", _page86],
    ["src/pages/poglavlje-19/sulfit-reducirajuce-klostridije.astro", _page87],
    ["src/pages/poglavlje-19/vjezba-19.astro", _page88],
    ["src/pages/poglavlje-19/[slug].astro", _page89],
    ["src/pages/poglavlje-19.astro", _page90],
    ["src/pages/poglavlje-2/autoklaviranje.astro", _page91],
    ["src/pages/poglavlje-2/fizicka-sterilizacija.astro", _page92],
    ["src/pages/poglavlje-2/flambiranje.astro", _page93],
    ["src/pages/poglavlje-2/frakciona-sterilizacija.astro", _page94],
    ["src/pages/poglavlje-2/hladna-sterilizacija.astro", _page95],
    ["src/pages/poglavlje-2/kemijska-sterilizacija.astro", _page96],
    ["src/pages/poglavlje-2/kuhanje.astro", _page97],
    ["src/pages/poglavlje-2/opaljivanje.astro", _page98],
    ["src/pages/poglavlje-2/pasterizacija.astro", _page99],
    ["src/pages/poglavlje-2/quiz-2.astro", _page100],
    ["src/pages/poglavlje-2/spaljivanje.astro", _page101],
    ["src/pages/poglavlje-2/sterilizacija-ultrazvukom.astro", _page102],
    ["src/pages/poglavlje-2/sterilizacija-zracenjem.astro", _page103],
    ["src/pages/poglavlje-2/suha-sterilizacija.astro", _page104],
    ["src/pages/poglavlje-2/vjezba-2-1.astro", _page105],
    ["src/pages/poglavlje-2/vjezba-2-2.astro", _page106],
    ["src/pages/poglavlje-2/vjezba-2-3.astro", _page107],
    ["src/pages/poglavlje-2/vjezba-2-4.astro", _page108],
    ["src/pages/poglavlje-2/vjezba-2-5.astro", _page109],
    ["src/pages/poglavlje-2/zarenje.astro", _page110],
    ["src/pages/poglavlje-2/[slug].astro", _page111],
    ["src/pages/poglavlje-2.astro", _page112],
    ["src/pages/poglavlje-20/biogeokemijski-ciklus-fosfora.astro", _page113],
    ["src/pages/poglavlje-20/fosfat-akumulirajuce-bakterije.astro", _page114],
    ["src/pages/poglavlje-20/fosfomobilizatori.astro", _page115],
    ["src/pages/poglavlje-20/quiz-20.astro", _page116],
    ["src/pages/poglavlje-20/vjezba-20.astro", _page117],
    ["src/pages/poglavlje-20/[slug].astro", _page118],
    ["src/pages/poglavlje-20.astro", _page119],
    ["src/pages/poglavlje-21/metoda-otiska.astro", _page120],
    ["src/pages/poglavlje-21/quiz-21.astro", _page121],
    ["src/pages/poglavlje-21/vjezba-21-1.astro", _page122],
    ["src/pages/poglavlje-21/vjezba-21-2.astro", _page123],
    ["src/pages/poglavlje-21/[slug].astro", _page124],
    ["src/pages/poglavlje-21.astro", _page125],
    ["src/pages/poglavlje-22/antibiotska-svojstva-streptomiceta.astro", _page126],
    ["src/pages/poglavlje-22/quiz-22.astro", _page127],
    ["src/pages/poglavlje-22/razgradnja-celuloze.astro", _page128],
    ["src/pages/poglavlje-22/streptomiceti.astro", _page129],
    ["src/pages/poglavlje-22/vjezba-22.astro", _page130],
    ["src/pages/poglavlje-22/[slug].astro", _page131],
    ["src/pages/poglavlje-22.astro", _page132],
    ["src/pages/poglavlje-23/purpurne-sumporne-bakterije.astro", _page133],
    ["src/pages/poglavlje-23/quiz-23.astro", _page134],
    ["src/pages/poglavlje-23/vjezba-23.astro", _page135],
    ["src/pages/poglavlje-23/[slug].astro", _page136],
    ["src/pages/poglavlje-23.astro", _page137],
    ["src/pages/poglavlje-3/bojenje-acidorezistentnih-bakterija-po-ziehl-neelsenu.astro", _page138],
    ["src/pages/poglavlje-3/bojenje-bakterijskih-endospora-po-schaffer-fultonu.astro", _page139],
    ["src/pages/poglavlje-3/jednostavna-bojenja.astro", _page140],
    ["src/pages/poglavlje-3/metode-bojenja-bakterija.astro", _page141],
    ["src/pages/poglavlje-3/negativna-bojenja.astro", _page142],
    ["src/pages/poglavlje-3/osnovne-otopine-boja.astro", _page143],
    ["src/pages/poglavlje-3/quiz-3.astro", _page144],
    ["src/pages/poglavlje-3/slozena-bojanja.astro", _page145],
    ["src/pages/poglavlje-3/test-s-kalijevom-luzinom.astro", _page146],
    ["src/pages/poglavlje-3/vjezba-3-1.astro", _page147],
    ["src/pages/poglavlje-3/vjezba-3-2.astro", _page148],
    ["src/pages/poglavlje-3/vjezba-3-3.astro", _page149],
    ["src/pages/poglavlje-3/vjezba-3-4.astro", _page150],
    ["src/pages/poglavlje-3/vjezba-3-5.astro", _page151],
    ["src/pages/poglavlje-3/vjezba-3-6.astro", _page152],
    ["src/pages/poglavlje-3/vjezba-3-7.astro", _page153],
    ["src/pages/poglavlje-3/vjezba-3-8.astro", _page154],
    ["src/pages/poglavlje-3/[slug].astro", _page155],
    ["src/pages/poglavlje-3.astro", _page156],
    ["src/pages/poglavlje-4/pokretljivost-bakterija.astro", _page157],
    ["src/pages/poglavlje-4/quiz-4.astro", _page158],
    ["src/pages/poglavlje-4/vjezba-4.astro", _page159],
    ["src/pages/poglavlje-4/[slug].astro", _page160],
    ["src/pages/poglavlje-4.astro", _page161],
    ["src/pages/poglavlje-5/biokemijska-svojstva-bakterija.astro", _page162],
    ["src/pages/poglavlje-5/katalaza-test.astro", _page163],
    ["src/pages/poglavlje-5/metilno-crvenilo-i-voges-proskauerov-test.astro", _page164],
    ["src/pages/poglavlje-5/oksidaza-test.astro", _page165],
    ["src/pages/poglavlje-5/quiz-5.astro", _page166],
    ["src/pages/poglavlje-5/razgradnja-ugljikohidrata.astro", _page167],
    ["src/pages/poglavlje-5/razgradnja-ureje.astro", _page168],
    ["src/pages/poglavlje-5/redukcija-nitrata-do-nitrita.astro", _page169],
    ["src/pages/poglavlje-5/stvaranje-amonijaka.astro", _page170],
    ["src/pages/poglavlje-5/stvaranje-indola.astro", _page171],
    ["src/pages/poglavlje-5/stvaranje-sumporovodika.astro", _page172],
    ["src/pages/poglavlje-5/test-na-kliglerovu-dvostrukom-seceru.astro", _page173],
    ["src/pages/poglavlje-5/uporaba-citrata.astro", _page174],
    ["src/pages/poglavlje-5/vazni-testovi-u-determinaciji-koliformnih-bakterija.astro", _page175],
    ["src/pages/poglavlje-5/vjezba-5-1.astro", _page176],
    ["src/pages/poglavlje-5/vjezba-5-2.astro", _page177],
    ["src/pages/poglavlje-5/[slug].astro", _page178],
    ["src/pages/poglavlje-5.astro", _page179],
    ["src/pages/poglavlje-6/broj-kolonija-bakterija.astro", _page180],
    ["src/pages/poglavlje-6/quiz-6.astro", _page181],
    ["src/pages/poglavlje-6/titar-bakterija.astro", _page182],
    ["src/pages/poglavlje-6/vjezba-6.astro", _page183],
    ["src/pages/poglavlje-6.astro", _page184],
    ["src/pages/poglavlje-7/odredivanje-broja-bakterija-u-suspenziji-direktnim-metodama.astro", _page185],
    ["src/pages/poglavlje-7/quiz-7.astro", _page186],
    ["src/pages/poglavlje-7/vjezba-7.astro", _page187],
    ["src/pages/poglavlje-7/[slug].astro", _page188],
    ["src/pages/poglavlje-7.astro", _page189],
    ["src/pages/poglavlje-8/fekalni-streptokoki.astro", _page190],
    ["src/pages/poglavlje-8/koliformne-bakterije.astro", _page191],
    ["src/pages/poglavlje-8/quiz-8.astro", _page192],
    ["src/pages/poglavlje-8/vjezba-8.astro", _page193],
    ["src/pages/poglavlje-8/[slug].astro", _page194],
    ["src/pages/poglavlje-8.astro", _page195],
    ["src/pages/poglavlje-9/izracunavanje-najvjerojatnijeg-broja-ukupnih-i-fekalnih-koliformnih-bakterija.astro", _page196],
    ["src/pages/poglavlje-9/koliformne-bakterije.astro", _page197],
    ["src/pages/poglavlje-9/potvrdni-test.astro", _page198],
    ["src/pages/poglavlje-9/prethodni-test.astro", _page199],
    ["src/pages/poglavlje-9/quiz-9.astro", _page200],
    ["src/pages/poglavlje-9/saprofitske-bakterije.astro", _page201],
    ["src/pages/poglavlje-9/vjezba-9.astro", _page202],
    ["src/pages/poglavlje-9/zavrsni-test.astro", _page203],
    ["src/pages/poglavlje-9/[slug].astro", _page204],
    ["src/pages/poglavlje-9.astro", _page205],
    ["src/pages/predgovor.astro", _page206],
    ["src/pages/pretraga.astro", _page207],
    ["src/pages/provjeri-znanje.astro", _page208],
    ["src/pages/rječnik.astro", _page209],
    ["src/pages/sadrzaj.astro", _page210],
    ["src/pages/video-tutorijali.astro", _page211],
    ["src/pages/index.astro", _page212]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ce423a14-c5fb-44b2-92fe-34174ca2b001",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

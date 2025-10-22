# Deploy Upute - bakteriologija.biol.pmf.hr

## Brzi pregled

Ova stranica je statički generirana Astro aplikacija koja se deploya na:
- **Produkcija**: https://bakteriologija.biol.pmf.hr (FTP server)
- **Development**: https://praktikum-iz-bakteriologije.vercel.app (Vercel)

## Priprema za deploy na produkcijski server

### 1. Ažuriranje sadržaja

Nakon što napravite promjene u `src/` direktoriju:

```bash
# Testirajte lokalno
npm run dev

# Generirajte produkcijski build
npm run build
```

### 2. Konfiguracija

Provjerite da je u `astro.config.mjs` postavljena ispravna domena:

```javascript
const siteUrl = isVercel && process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://bakteriologija.biol.pmf.hr';  // ← Produkcijska domena
```

### 3. Build proces

```bash
npm run build
```

Ova naredba će generirati:
- `dist/` direktorij sa svim statičkim datotekama
- 197 HTML stranica
- Optimizirani CSS i JS u `_astro/` direktoriju
- Sve slike u `Images/` direktoriju

### 4. Upload na server

Koristite FileZilla ili drugi FTP klijent:

1. Otvorite `FILEZILLA_UPUTE.txt` za vizualni vodič
2. Ili `UPLOAD_UPUTE.md` za detaljne upute

**Kratko:**
- Povežite se na FTP server (ftp.biol.pmf.hr)
- Uploadajte SVE datoteke iz `dist/` direktorija
- Provjerite da su sve datoteke uploadane

### 5. Provjera

Testirajte u browseru:
- https://bakteriologija.biol.pmf.hr/
- https://bakteriologija.biol.pmf.hr/poglavlje-5/oksidaza-test/
- Provjerite da slike, CSS i navigacija rade

## Struktura projekta

```
praktikum-iz-bakteriologije/
├── src/                          # Source datoteke
│   ├── pages/                    # Astro stranice
│   ├── components/               # React/Astro komponente
│   ├── layouts/                  # Layout template-i
│   ├── styles/                   # CSS datoteke
│   └── utils/                    # Helper funkcije
├── public/                       # Statički resursi
│   ├── Images/                   # Slike (103 slika)
│   └── robots.txt
├── dist/                         # Build output (generira npm run build)
├── astro.config.mjs             # Astro konfiguracija
├── package.json                  # Dependencies
├── .htaccess                     # Apache konfiguracija
├── UPLOAD_UPUTE.md              # Detaljne FTP upute
└── FILEZILLA_UPUTE.txt          # Brzi FTP vodič
```

## Važne datoteke za deploy

### .htaccess
Automatski se kopira u `dist/` pri build-u. Sadrži:
- URL redirect pravila (www → non-www)
- Cache kontrolu
- GZIP kompresiju
- Sigurnosne headere

**Napomena**: Radi SAMO na Apache serverima!

### robots.txt
Već se nalazi u `public/` i kopira se u `dist/`.

## Česte greške i rješenja

### Build greške

```bash
# Problem: npm run build ne radi
# Rješenje: Instalirajte dependencies
npm install

# Problem: TypeScript greške
# Rješenje: Provjerite tipove
npm run build -- --verbose
```

### Upload greške

**Problem**: 404 Not Found nakon upload-a
- **Uzrok**: Datoteke nisu u pravom direktoriju
- **Rješenje**: Uploadajte sadržaj `dist/` direktno u web root

**Problem**: Slike se ne učitavaju
- **Uzrok**: `Images/` direktorij nije uploadan ili ima krivi naziv
- **Rješenje**: Provjerite da je `Images/` (veliko I!) uploadan

**Problem**: CSS ne radi
- **Uzrok**: `_astro/` direktorij nije uploadan
- **Rješenje**: Uploadajte cijeli `_astro/` folder

## Razvoj vs Produkcija

### Development (Vercel)
- Automatski deploy pri push na GitHub
- URL: https://praktikum-iz-bakteriologije.vercel.app
- Idealno za testiranje

### Produkcija (FTP Server)
- Ručni deploy preko FTP-a
- URL: https://bakteriologija.biol.pmf.hr
- Službena stranica

## Git workflow

```bash
# Lokalni razvoj
git checkout -b feature/nova-stranica
# ... napravite promjene ...
npm run dev  # testirajte lokalno

# Commit i push
git add .
git commit -m "Add: Nova stranica za poglavlje X"
git push origin feature/nova-stranica

# Merge u main (automatski deploy na Vercel)
git checkout main
git merge feature/nova-stranica
git push origin main

# Za produkciju:
npm run build
# ... uploadajte dist/ preko FTP-a
```

## Kontakt informacije

Za pristup FTP serveru kontaktirajte:
- Web hosting administrator PMF-a
- IT podrška Biološkog odsjeka

Trebate:
- FTP hostname (ftp.biol.pmf.hr)
- FTP username
- FTP password
- Lokaciju web root direktorija

## Dodatne napomene

### Performance

- Slike su optimizirane i lazy-loaded
- CSS i JS su minificirani
- .htaccess postavlja caching za sve resurse
- GZIP kompresija omogućena

### Sigurnost

- .htaccess postavlja security headere
- Koristi HTTPS
- X-Frame-Options: DENY (sprječava clickjacking)
- X-Content-Type-Options: nosniff

### Backup

**VAŽNO**: Prije svakog upload-a napravite backup postojećih datoteka na serveru!

```bash
# Preko FileZilla:
# 1. Downloadajte cijeli sadržaj servera lokalno
# 2. Spremite u backup folder s datumom
# Primjer: backup-2025-10-22/
```

## Checklist za deploy

- [ ] Testirano lokalno (`npm run dev`)
- [ ] Build uspješan (`npm run build`)
- [ ] `dist/` direktorij generiran
- [ ] Provjerena domena u `astro.config.mjs`
- [ ] `.htaccess` u `dist/` direktoriju
- [ ] Backup postojeće stranice napravljen
- [ ] FTP konekcija uspješna
- [ ] Svi direktoriji i datoteke uploadani
- [ ] Stranica testirana u browseru
- [ ] Slike se učitavaju
- [ ] CSS radi
- [ ] Navigacija funkcionira

## Korisni linkovi

- **Astro dokumentacija**: https://docs.astro.build/
- **FileZilla dokumentacija**: https://wiki.filezilla-project.org/
- **Vercel dashboard**: https://vercel.com/dashboard

---

**Zadnja promjena**: 22. listopada 2025.  
**Domena**: bakteriologija.biol.pmf.hr  
**Status**: Produkcijski


# FileZilla Upload Upute za bakteriologija.biol.pmf.hr

## Pregled dist direktorija
- **Ukupna veličina**: 45 MB
- **Broj HTML stranica**: 197
- **Broj slika**: 105 (u `Images/` direktoriju)

## KORAK 1: Preuzimanje i instalacija FileZilla

1. Idite na: https://filezilla-project.org/
2. Download **FileZilla Client** (besplatno)
3. Instalirajte aplikaciju na vaše računalo

## KORAK 2: Konfiguracija FTP konekcije

### Otvaranje FileZilla
1. Pokrenite FileZilla Client
2. U gornjem dijelu vidjet ćete polja za konekciju

### Unos FTP podataka
Unesite sljedeće podatke (dobijete ih od web hosting administratora):

```
Host: ftp.biol.pmf.hr (ili ftp://ftp.biol.pmf.hr)
Username: [vaš FTP korisničko ime]
Password: [vaša FTP lozinka]
Port: 21 (standardni FTP) ili 22 (SFTP - sigurniji)
```

### Povezivanje
1. Kliknite gumb **"Quickconnect"** ili pritisnite Enter
2. Ako je ovo prva konekcija, možda će se pojaviti sigurnosna poruka - prihvatite certifikat

## KORAK 3: Navigacija na serveru

### Lijeva strana - Lokalni direktorij (vaše računalo)
1. Na lijevoj strani navigirajte do:
   ```
   /Users/renchi/Desktop/praktikum-iz-bakteriologije/dist/
   ```
2. Vidjet ćete sve datoteke i direktorije spremne za upload

### Desna strana - Remote server
1. Na desnoj strani navigirajte do web root direktorija
2. Najčešće lokacije:
   - `/public_html/`
   - `/www/`
   - `/htdocs/`
   - `/web/`

**VAŽNO**: Pitajte administratora gdje točno postaviti datoteke!

## KORAK 4: Priprema za upload

### A. Brisanje postojećeg sadržaja (ako postoji)
**NAPOMENA**: Napravite backup postojećih datoteka prije brisanja!

1. Na desnoj strani (server) označite sve postojeće datoteke
2. Desni klik → **Delete**
3. Potvrdite brisanje

### B. Struktura za upload
Iz `dist/` direktorija trebate uploadati:

```
dist/
├── index.html                  (glavna stranica)
├── favicon.svg                 (ikona)
├── Images/                     (cijeli direktorij - 105 slika)
├── _astro/                     (CSS i JS datoteke)
├── poglavlje-1/                (sva poglavlja)
├── poglavlje-2/
├── poglavlje-3/
├── poglavlje-4/
├── poglavlje-5/
│   ├── oksidaza-test/
│   ├── vazni-testovi-u-determinaciji-koliformnih-bakterija/
│   └── ... (ostale stranice)
├── poglavlje-6/ ... do poglavlje-23/
├── kontakt/
├── o-nama/
├── pretraga/
├── rječnik/
├── sadrzaj/
├── robots.txt
└── ... (sve ostale datoteke i direktorije)
```

## KORAK 5: Upload proces

### Metoda 1: Označavanje i upload
1. Na **lijevoj strani** (Local site):
   - Dvostruki klik na `dist` folder da ga otvorite
   - Pritisnite **Ctrl+A** (Windows) ili **Cmd+A** (Mac) da označite SVE datoteke
2. Desni klik → **Upload**
3. Ili jednostavno povucite sve datoteke s lijeva na desno (drag & drop)

### Metoda 2: Drag & Drop
1. Označite sve datoteke i direktorije u `dist/` na lijevoj strani
2. Povucite ih na desnu stranu (server)
3. Pustite da se uploadaju

### Praćenje upload-a
- U donjem dijelu FileZilla vidjet ćete queue (red čekanja)
- **Successful transfers**: uspješno uploadane datoteke
- **Failed transfers**: neuspješne datoteke (pokušajte ponovno)
- **Files in queue**: datoteke koje čekaju upload

### Vrijeme potrebno za upload
- Oko **5-15 minuta** ovisno o brzini interneta
- 45 MB podataka + 197 HTML datoteka + 105 slika

## KORAK 6: Verifikacija upload-a

### A. Provjera datotečne strukture na serveru
Na desnoj strani (server) provjerite da imate:
- ✅ `index.html` u root direktoriju
- ✅ `Images/` direktorij sa svim slikama
- ✅ `_astro/` direktorij
- ✅ Svi `poglavlje-X/` direktoriji

### B. Testiranje stranica u browseru
1. **Glavna stranica**:
   ```
   https://bakteriologija.biol.pmf.hr/
   ```

2. **Testna stranica 1**:
   ```
   https://bakteriologija.biol.pmf.hr/poglavlje-5/oksidaza-test/
   ```

3. **Testna stranica 2**:
   ```
   https://bakteriologija.biol.pmf.hr/poglavlje-5/vazni-testovi-u-determinaciji-koliformnih-bakterija/
   ```

4. **Provjerite navigaciju**: Kliknite na gumbove između stranica

5. **Provjerite resurse**:
   - Učitavaju li se slike?
   - Radi li styling (CSS)?
   - Funkcionira li JavaScript?

## KORAK 7: Dodatne konfiguracije (opcionalno)

### A. Kreiranje .htaccess datoteke (za Apache server)

**NAPOMENA**: Upitajte prvo administratora koristi li server Apache!

Kreirajte datoteku `.htaccess` s ovim sadržajem:

```apache
# Omogući praćenje greške
Options -Indexes

# Redirect sa www na non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.bakteriologija\.biol\.pmf\.hr [NC]
RewriteRule ^(.*)$ https://bakteriologija.biol.pmf.hr/$1 [R=301,L]

# Cache kontrola za bolje performanse
<IfModule mod_expires.c>
    ExpiresActive On
    
    # Slike
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    
    # CSS i JavaScript
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    
    # HTML
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# GZIP kompresija
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript image/svg+xml
</IfModule>

# Sigurnosni headeri
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "DENY"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Upload ovu datoteku u root direktorij (gdje je i `index.html`).

### B. Provjera robots.txt
Provjerite da postoji `robots.txt` datoteka u root direktoriju.

## Troubleshooting - Rješavanje problema

### Problem: 404 Not Found greška
**Uzrok**: Datoteke nisu uploadane ili su na krivoj lokaciji
**Rješenje**: 
- Provjerite da su sve datoteke u root direktoriju (ne u poddirektoriju)
- Provjerite putanje na serveru

### Problem: CSS/stilovi ne rade
**Uzrok**: `_astro/` direktorij nije uploadan ili putanje nisu ispravne
**Rješenje**:
- Provjerite da postoji `_astro/` direktorij na serveru
- Uploadajte ponovno cijeli `_astro/` folder

### Problem: Slike se ne učitavaju
**Uzrok**: `Images/` direktorij nije uploadan ili nazivi datoteka nisu ispravni
**Rješenje**:
- Provjerite da postoji `Images/` direktorij (veliko I!)
- Uploadajte ponovno cijeli `Images/` folder
- Provjerite da nazivi slika točno odgovaraju (case-sensitive!)

### Problem: FTP konekcija ne radi
**Uzrok**: Krivi kredencijali ili firewall blokira konekciju
**Rješenje**:
- Provjerite username i password
- Pokušajte koristiti SFTP (port 22) umjesto FTP (port 21)
- Provjerite s administratorom da li je FTP pristup omogućen

### Problem: Upload traje predugo ili se prekida
**Uzrok**: Spora internet veza ili nestabilna konekcija
**Rješenje**:
- Uploadajte direktorij po direktorij umjesto sve odjednom
- Prvo uploadajte manje datoteke (HTML), zatim veće (slike)
- Koristite FileZilla opciju za restart prekinutih transfera

## Dodatne FileZilla opcije

### Transfer settings
1. Menu: **Edit → Settings → Transfers**
2. Postavite:
   - **Maximum simultaneous transfers**: 5-10
   - **File exists action**: Overwrite (za ponovno uploadanje)

### Queue
1. FileZilla automatski stavlja datoteke u queue
2. Možete pauzirati/nastaviti upload
3. Failed transfers možete ponovno pokrenuti desnim klikom

### Bookmarks
1. **Menu → File → Site Manager**
2. **New Site** → Unesite sve FTP podatke
3. Spremite za buduće konekcije

## Kontakt za podršku

Ako imate problema:
1. Kontaktirajte web hosting administratora na PMF-u
2. Tražite:
   - FTP kredencijale
   - Točnu putanju za web root
   - Vrstu servera (Apache/Nginx)
   - Pristup .htaccess datotekama

---

## Checklist prije završetka

- [ ] Svi direktoriji iz `dist/` uploadani na server
- [ ] Glavna stranica se učitava (https://bakteriologija.biol.pmf.hr/)
- [ ] Testne stranice rade (oksidaza-test, vazni-testovi...)
- [ ] Slike se prikazuju
- [ ] CSS stilovi rade
- [ ] Navigacija između stranica funkcionira
- [ ] robots.txt je uploadan
- [ ] .htaccess postavljen (opcionalno)

---

**Napomena**: Sačuvajte ove upute za buduća ažuriranja stranice!


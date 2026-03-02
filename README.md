# Readme - Jonathan Isaksson

## Filer i projektet

Projektet består av:

* `index.html`
* `styles.css`
* `script.js`

## Genomförda förbättringar

### Tillgänglighet

Följande förbättringar har gjorts för att göra sidan mer tillgänglig:

* förbättrad semantisk HTML-struktur med element som `header`, `nav`, `main`, `section`, `article` och `footer`
* förbättrad rubrikhierarki så att sidan använder en mer korrekt struktur
* klickbara `div`-element ersattes med riktiga `button`-element
* formuläret i nyhetsbrevssektionen fick riktiga `label`-element
* bilder fick `alt`-texter
* länktexten i sidfoten gjordes mer beskrivande
* fokusmarkering för tangentbordsnavigering återställdes
* kontrast och läsbarhet förbättrades i CSS

### Prestanda / LCP

Följande ändringar gjordes för att förbättra sidans LCP:

* bilddimensioner (`width` och `height`) lades till direkt i HTML
* produktbilder fick `loading="lazy"` för att minska onödig laddning vid första rendering
* hero-bilden lazy-loadades inte, eftersom den är viktig för innehållet ovanför folden
* `script.js` laddas nu med `defer`
* blockerande JavaScript vid sidladdning togs bort
* LCP-mätning lades till med `PerformanceObserver`

## Mätningar

### Axe-resultat

Mätning med **axe-core** genomfördes på både originalversionen och den förbättrade versionen.

#### Originalversion

* Axe violations: **3**
* Axe incomplete: **0**
* Axe inapplicable: **85**
* Axe passes: **1**

#### Uppdaterad version

* Axe violations: **2**
* Axe incomplete: **1**
* Axe inapplicable: **53**
* Axe passes: **36**

### Tolkning av axe-resultat

Antalet violations minskade från **3 till 2**, men den tydligaste förbättringen är att antalet godkända kontroller ökade från **1 till 36**. Det visar att sidan i den uppdaterade versionen uppfyller betydligt fler tillgänglighetskrav än tidigare.

### LCP-resultat

LCP mättes flera gånger i både originalversionen och den förbättrade versionen.

#### Originalversion

* 4010 ms
* 840 ms
* 620 ms

#### Uppdaterad version

* 1080 ms
* 560 ms
* 240 ms

### Tolkning av LCP-resultat

LCP-värdena varierade mellan körningarna, vilket är normalt vid lokala labbmätningar. Trots variationen visade den förbättrade versionen genomgående bättre resultat.

Medianvärdet förbättrades från **840 ms** i originalversionen till **560 ms** i den uppdaterade versionen. Det motsvarar ungefär **33 % förbättring**. Den lägsta uppmätta tiden förbättrades från **620 ms** till **240 ms**.

## Testning

Projektet har testats genom:

* manuell kontroll i webbläsare
* tangentbordsnavigering
* körning av **axe-core**
* mätning av **LCP** med `PerformanceObserver`

## Slutsats

Arbetet har lett till en sida som är mer tillgänglig, mer semantiskt korrekt och bättre anpassad för tangentbordsanvändning och hjälpmedel. Samtidigt har prestandan förbättrats, särskilt när det gäller LCP och den första upplevda laddningen.

Projektet visar både kodmässiga förbättringar och mätbara resultat före och efter ändringarna.

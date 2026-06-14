# Denis Capital Chief of Staff

Een statische webapp die nieuws, marktdata en trendinformatie vertaalt naar acties, beslissingen, theses en triggers.

## Concept

De Chief of Staff is geen extra dashboard, maar een operating layer:

- `Vandaag`: dagelijkse briefing en wat aandacht nodig heeft.
- `Acties`: concrete opvolging met bron, impact en deadline.
- `Theses`: investeringshypotheses met bewijs voor/tegen en een volgende check.
- `Besluiten`: besluitlog met rationale, confidence en reviewdatum.
- `Triggers`: markt- en nieuwssignalen waarop gewacht wordt.
- `Review`: wekelijkse discipline: wat veranderde, wat moet gesloten worden, wat leren we?
- `Roadmap`: technische integratiekaart en datamodel.

De eerste versie gebruikt demo-data en `localStorage`. Integratiepunten zijn voorbereid voor Denis Capital News, CryptoPulse en de Macro/Crypto Trends Bubble Map.

De live versie leest nu read-only `signals.json` exports in vanuit de drie bestaande Denis Capital-sites. Als een bron niet bereikbaar is, valt de app terug op de ingebouwde demo-signalen.

De exports zijn nu bron-gebaseerd:

- News: topartikelen uit de bestaande SQLite/exportdata, gewogen op relevantiescore.
- CryptoPulse: dashboard-watchsignalen uit assets, nieuwsfeeds en regulatory monitor.
- Trends: nieuwste Bubble Map-week, inclusief trendgrootte, tag, signal en tone.

## Publicatie

- Chief of Staff: https://dvb1974.github.io/denis-capital-chief-of-staff/
- News signals: https://dvb1974.github.io/denis-news-reader/signals.json
- CryptoPulse signals: https://dvb1974.github.io/cryptopulse-dashboard/signals.json
- Trends signals: https://dvb1974.github.io/trends-bubbles/signals.json
- Live ingest: de Chief haalt deze drie signal exports automatisch op en valt terug op demo-data wanneer een bron niet bereikbaar is.

## Aanbevolen volgende integraties

1. Publiceer uit elke bestaande site een kleine `signals.json`.
2. Laat de Chief of Staff die read-only inlezen.
3. Score elk signaal op bron, impact, confidence, leeftijd en overlap met actieve theses.
4. Maak alleen acties aan wanneer een signaal een thesis, trigger of open besluit raakt.

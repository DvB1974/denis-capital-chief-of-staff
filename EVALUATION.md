# Evaluation Log

Deze app wordt iteratief beoordeeld op investeringswaarde, focus, bruikbaarheid en uitbreidbaarheid.

## Iteration 0 - Initial build

- Doel: een werkende Chief of Staff app neerzetten met dagelijkse briefing, acties, theses, besluiten, triggers en review.
- Status: gebouwd.

## Iteration 1 - Integratiekritiek

- Kritiek: de eerste versie werkte als losse Chief of Staff, maar maakte onvoldoende zichtbaar dat hij bovenop News, CryptoPulse en Trends Bubble Map zit.
- Verbetering: bronkaarten toegevoegd met live URLs, rol per bron en expliciete handoff naar acties, triggers en theses.
- Resterend risico: de links zijn nog handmatig geconfigureerd; echte data-inname is nog niet gekoppeld.

## Iteration 2 - Besluitdisciplinekritiek

- Kritiek: de app kon signalen naar werk vertalen, maar benadrukte onvoldoende dat beleggingsbesluiten guardrails nodig hebben.
- Verbetering: investment guardrails toegevoegd met invalidatie, scheiding tussen nieuws en positie, en reviewplicht voor exposure-verhoging.
- Resterend risico: guardrails zijn nog tekstueel; toekomstige versie moet afdwingen dat nieuwe theses een invalidatiecriterium hebben.

## Iteration 3 - Thesiskwaliteitkritiek

- Kritiek: theses hadden bewijs voor/tegen, maar misten catalyst en invalidatie; daardoor was het nog te makkelijk om een narratief te laten zweven.
- Verbetering: iedere demo-thesis heeft nu catalyst, invalidatie, bewijs voor, bewijs tegen en volgende check.
- Resterend risico: handmatig toegevoegde theses krijgen placeholders; een volgende versie moet een formulier met verplichte velden krijgen.

## Iteration 4 - Dagelijkse workflowkritiek

- Kritiek: de app had de juiste informatie-objecten, maar nog te weinig dagritme; gebruikers moeten direct weten hoe ze beginnen.
- Verbetering: morning operating checklist toegevoegd met briefing, triggers, besluit/wacht-keuze en wekelijkse review.
- Resterend risico: checklist is lokaal en handmatig; later koppelen aan notificaties of kalender zou de gewoontevorming versterken.

## Iteration 5 - Uitbreidbaarheidskritiek

- Kritiek: het prototype had nog geen expliciete route naar echte integratie met de drie bestaande Denis Capital-sites.
- Verbetering: Roadmap-view toegevoegd met fases, integratiestrategie en voorgesteld datamodel voor signals, actions, theses en decisions.
- Resterend risico: zonder read-only exports uit de drie sites blijft dit een handmatig prototype.

## Deployment

- Chief of Staff gepubliceerd naar GitHub Pages.
- Starter `signals.json` exports toegevoegd aan News, CryptoPulse en Trends Bubble Map.
- Live verificatie: alle vier URLs geven HTTP 200.

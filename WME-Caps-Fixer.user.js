// ==UserScript==
// @name         WME Caps Fixer
// @name:fr      WME Caps Fixer
// @name:de      WME Caps Fixer
// @name:es      WME Caps Fixer
// @name:it      WME Caps Fixer
// @name:pt-BR   WME Caps Fixer
// @name:pt      WME Caps Fixer
// @name:he      WME Caps Fixer
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41IDE4IFYyMi41IE0xNS41IDE4IFYyMi41IiBzdHJva2U9IiM2MDdkOGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMiIgeT0iNi41IiB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHJ4PSIyLjgiIGZpbGw9IiM2MDdkOGIiLz48cGF0aCBkPSJNNi4yIDE1LjYgTDkgOSBMMTEuOCAxNS42IE03LjIgMTMuNCBIMTAuOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGNpcmNsZSBjeD0iMTUuNyIgY3k9IjEzLjIiIHI9IjIuMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48cGF0aCBkPSJNMTcuOTUgMTAuOCBWMTUuNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUuMiIgcj0iNCIgZmlsbD0iI2ZiOGMwMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxwYXRoIGQ9Ik02LjYgNS40IEExLjcgMS43IDAgMSAxIDUuMSAzLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik00LjQgMi42IEw2LjEgMy41IEw0LjYgNC43IFoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=
// @namespace    https://github.com/DrSlump34
// @version      0.02.03
// @description  Fix the capitalization of street and city names on segments (primary and alternate names), country by country — typically names imported in ALL CAPS from GIS data. Preview first, nothing is saved for you.
// @description:fr Corrige la casse des noms de rue et de ville des segments (adresse principale et alternatives), pays par pays — typiquement des noms importés tout en MAJUSCULES depuis des SIG. Aperçu d'abord ; rien n'est enregistré à votre place.
// @description:de Korrigiert die Groß-/Kleinschreibung der Straßen- und Stadtnamen von Segmenten (Haupt- und alternative Adressen), Land für Land — typischerweise Namen, die IN GROSSBUCHSTABEN aus GIS-Daten importiert wurden. Zuerst eine Vorschau; nichts wird für dich gespeichert.
// @description:es Corrige las mayúsculas de los nombres de calle y de ciudad de los segmentos (dirección principal y alternativas), país por país — típicamente nombres importados TODO EN MAYÚSCULAS desde un SIG. Primero una vista previa; nada se guarda en su lugar.
// @description:it Corregge le maiuscole dei nomi di via e di città dei segmenti (indirizzo principale e alternativi), paese per paese — tipicamente nomi importati TUTTI IN MAIUSCOLO da un GIS. Prima un'anteprima; niente viene salvato al posto dell'utente.
// @description:pt-BR Corrige as maiúsculas dos nomes de rua e de cidade dos segmentos (endereço principal e alternativos), país por país — tipicamente nomes importados TODO EM MAIÚSCULAS de um SIG. Primeiro uma prévia; nada é salvo no seu lugar.
// @description:pt Corrige as maiúsculas dos nomes de rua e de localidade dos segmentos (endereço principal e alternativos), país a país — tipicamente nomes importados TUDO EM MAIÚSCULAS de um SIG. Primeiro uma pré-visualização; nada é guardado no seu lugar.
// @description:he מתקן אותיות גדולות וקטנות בשמות רחובות וערים של מקטעים (כתובת ראשית וחלופיות), מדינה אחר מדינה — בדרך כלל שמות שיובאו באותיות גדולות בלבד מנתוני GIS. קודם תצוגה מקדימה; שום דבר לא נשמר במקומכם.
// @author       DrSlump34
// @copyright    DrSlump34 2026
// @license      MIT
// @match        https://www.waze.com/*/editor*
// @match        https://www.waze.com/editor*
// @match        https://beta.waze.com/*/editor*
// @match        https://beta.waze.com/editor*
// @exclude      https://www.waze.com/*user/*editor/*
// @exclude      https://www.waze.com/discuss/*
// @exclude      https://www.waze.com/editor/sdk/*
// @exclude      https://beta.waze.com/*user/*editor/*
// @exclude      https://beta.waze.com/editor/sdk/*
// @grant        GM_xmlhttpRequest
// @connect      update.greasyfork.org
// @connect      raw.githubusercontent.com
// @run-at       document-idle
// ==/UserScript==

/*  Des noms de rue importés d'un SIG arrivent souvent TOUT EN MAJUSCULES, ou avec une casse
 *  bancale (« Chemin des luzes »). Le script propose la bonne casse selon les règles du pays,
 *  montre un aperçu avant / après, puis écrit les corrections SANS enregistrer.
 *
 *  Pourquoi un espace final : WME ignore la casse quand il retrouve une rue à l'enregistrement
 *  (« Rue de Laigné » retombe sur l'objet « Rue de laigné »). Écrire « Rue de Laigné␣ » crée une
 *  rue distincte côté navigateur ; le serveur retire l'espace à l'enregistrement. Mesuré le
 *  07/11/2026 (SPEC § 11.1) : rue principale, alternative, voie à deux segments, rue créée.
 *
 *  Les villes ne sont jamais créées : une ville en mauvaise casse n'est corrigée que si la ville
 *  de bonne casse existe déjà ; sinon le script dit de voir le coordinateur (règle de l'auteur).
 *
 *  Pas de requête hors de waze.com, aucune dépendance.
 */

(function _wmeIntegre() {
    'use strict';

    // =====================================================================
    //  MOTEUR DE CASSE — pur, sans DOM ni SDK, essayé au banc (tools/banc.js)
    // =====================================================================

    // Une fiche par pays, en données. Chaque règle vient des wikis des communautés (relevés du
    // 07/11/2026, dossier recherche/) ; ce que les wikis ne disent pas (listes de petits mots) vient
    // de la grammaire de la langue et reste à faire relire.
    //  - locale       : pour les minuscules / majuscules (le turc a İ/ı)
    //  - petits       : mots en minuscules sauf en tête (y compris entre traits d'union)
    //  - elisions     : l', d' — en minuscules sauf en tête, la lettre qui suit en majuscule
    //  - uneLettre    : une lettre isolée qu'une capitale a privée de son accent (FR : A → à)
    //  - sigles       : jetons gardés en MAJUSCULES
    //  - graphies     : casse imposée d'un mot (clé en minuscules)
    //  - ordinal      : chiffres + suffixe d'ordinal, suffixe remis en minuscules
    //  - mc           : Mc + majuscule (McDonald)
    //  - accents      : signaler un nom en MAJUSCULES sans aucun accent (le SIG les a peut-être perdus)
    //  - mode         : 'corriger' ou 'signaler' (la casse officielle ne se devine pas, ou pas de fiche)
    //  - mixtes       : false = un nom en casse mixte n'est jamais touché (fiche défaut)
    //  - toujoursMin  : mots en minuscules même en tête (« to I-10 W »)
    //  - abrevSignalees : graphies appliquées mais signalées, ligne décochée (FR : St, Dr, Bd…)
    //  - ambigusEnTete  : en tête de nom, graphie NON appliquée et signalée (« St » Street / « St. » Saint)
    //  - codesRoute     : codes gardés en MAJUSCULES devant un numéro (US : SR, CR, codes d'État)
    //  - ordinalRomain  : « XXE » → « XXe » (FR) ; articleNomPropre : « Rue La Fayette » garde « La »
    //  Toute autre clé est refusée par le banc (tools/banc.js) : une faute de frappe ne passe pas en silence.
    const ORD_EN = /^(\d+)(st|nd|rd|th)$/i;
    // Abréviations anglaises de voies, casse exacte (table du wiki US 377720, et formes communes à
    // l'Australie, la Nouvelle-Zélande, le Royaume-Uni et le Canada : Cl, Cct, Esp, Gr, Pde, Prom,
    // Rdg, Tce, Wy). Beaucoup n'ont pas de voyelle : sans cette table, « ST » serait pris pour un
    // sigle. Les titres que le wiki US écrit AVEC un point (Gen., Col., Sr., Mr.…) n'y sont pas :
    // « GEN. » devient « Gen. » de lui-même, « SGT » sans point reste tel quel (rien ne se devine).
    const ABR_EN = {};
    ('Aly Arpt Ave Av Bch Bldg Blvd Br Cir Cors Cres Crk Cswy Ct Crt Ctr Cv Cyn Dr Dtwn Expwy Ext Fwy Grv Hts Hwy Lk Ln Lndg Lp ' +
        'Mdw Mkt Mnr Mt Ft Pk Pkwy Pky Pkwys Plns Plz Pl Pso Psge Pt Pts Rd Rte Skwy Spgs Sq St Sta Ste Sts Ter Terr Thwy Tpk Trfy ' +
        'Trl Tun Twp Upr Vly Jr Cl Cct Esp Gr Pde Prom Rdg Tce Wy')
        .split(' ').forEach(w => { ABR_EN[w.toLowerCase()] = w; });
    // Abréviations propres à une fiche (audit rang 9) : jamais dans la table commune, le Canada
    // interdit par exemple Cr et Ct.
    const avec = (base, mots) => { const g = Object.assign({}, base); mots.split(' ').forEach(w => { g[w.toLowerCase()] = w; }); return g; };
    const ABR_AU_NZ = avec(ABR_EN, 'Bvd Bwlk Brk Ch Cr Crst Ftrl Rtt Stps Trk');
    const ABR_GB = avec(ABR_EN, 'Gdn Gdns Gn');
    const ABR_CA = avec(ABR_EN, 'Brg Cds Crnrs Pvt Rdpt Rg');
    // En tête de nom, « St » (Street) et « St. » (Saint), « Dr » et « Dr. »… ne se départagent pas.
    const AMBIGUS_EN = ['st', 'ste', 'dr', 'ft', 'mt'];
    // Titres que le wiki US écrit AVEC un point (Sgt., Lt., Mr.…) : la casse est corrigée, la ligne
    // signalée et décochée — le point ne se devine pas (audit de la différence, constat 4).
    const TITRES_EN = ['sgt', 'lt', 'mr', 'mrs', 'ms', 'sr'];
    // Codes gardés en MAJUSCULES devant un numéro (« Old SR 7 », « PA 28 ») : liste FERMÉE, Hwy, Rte
    // et Exit n'y sont pas.
    const CODES_US = 'SR CR SH FM RM US AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC PR'.split(' ');
    Object.assign(ABR_EN, { "int'l": "Int'l", "nat'l": "Nat'l", intl: 'Intl', 'x-ing': 'X-ing' });
    const PETITS_EN = ['of', 'at', 'on', 'over', 'and', 'the', 'to', 'in', 'for', 'by', 'a', 'an', 'or'];
    const SIGLES_EN = ['N', 'S', 'E', 'W', 'NE', 'NW', 'SE', 'SW'];
    const anglais = (nom, locale, plus) => Object.assign({
        nom, locale, petits: PETITS_EN, elisions: [], sigles: SIGLES_EN, graphies: ABR_EN, ambigusEnTete: AMBIGUS_EN, titresPoint: TITRES_EN, ordinal: ORD_EN, mc: true, accents: false, mode: 'corriger',
    }, plus || {});
    // Royaume-Uni, Irlande : « Stratford-upon-Avon », « Newcastle-under-Lyme » ; Irlande : « Bóthar na Trá ».
    // Jamais pour l'Australie (« Brighton-Le-Sands »).
    const PETITS_GB = PETITS_EN.concat(['upon', 'under', 'super', 'en', 'le', 'la', 'de']);
    const FICHES = {
        // Pays sans fiche relue : signaler seulement (audit 08/11 rang 2). Les petits mots, les
        // particules (van, de, del…) et les sigles changent d'un pays à l'autre : rien ne se devine.
        defaut: { nom: 'défaut', locale: 'en', petits: [], elisions: [], sigles: [], graphies: {}, ordinal: ORD_EN, mc: false, accents: false, mixtes: false, mode: 'signaler' },
        // wiki US : Road names (377963), Abbreviations and acronyms (377720) ; forum 41069 pour les petits mots.
        // Les codes d'État (LA, OR, IN…) ne sont PAS des sigles : seuls ils se confondent avec des mots
        // (« La Paloma Rd ») ; dans un code de route (« LA-308 ») le chiffre les protège déjà.
        // « to » reste en minuscules même en tête : les bretelles s'écrivent « to I-10 W » (wiki US 377963, UK, IE).
        US: anglais('États-Unis', 'en-US', { toujoursMin: ['to'], codesRoute: CODES_US, sigles: SIGLES_EN.concat(['BUS', 'ALT', 'SPUR', 'BYP', 'AFB', 'AAF', 'ANG', 'ANGB', 'BIA', 'FM', 'IRR', 'JRB', 'NAS', 'SCN', 'SSR', 'NASA', 'YMCA']) }),
        CA: anglais('Canada (anglais)', 'en-CA', { graphies: ABR_CA }),
        GB: anglais('Royaume-Uni', 'en-GB', { toujoursMin: ['to'], petits: PETITS_GB, graphies: ABR_GB }),
        IE: anglais('Irlande', 'en-IE', { toujoursMin: ['to'], petits: PETITS_GB.concat(['na', 'an']) }),
        // Relevé AU : HMAS (navires), KI (Kangaroo Island), OB, MP.
        AU: anglais('Australie', 'en-AU', { graphies: ABR_AU_NZ, sigles: SIGLES_EN.concat(['HMAS', 'OB', 'KI', 'MP']) }),
        NZ: anglais('Nouvelle-Zélande', 'en-NZ', { graphies: ABR_AU_NZ }),
        ZA: anglais('Afrique du Sud', 'en-ZA'),
        // wiki FR : Nommage des segments / des rues / des routes (375658).
        FR: {
            nom: 'France', locale: 'fr',
            petits: ['de', 'du', 'des', 'la', 'le', 'les', 'et', 'à', 'au', 'aux', 'en', 'sur', 'sous', 'lès', 'lez'],
            elisions: ['l', 'd'], uneLettre: { a: 'à' },
            sigles: ['ZA', 'ZI', 'ZAC', 'ZAE', 'ZAD', 'ZUP', 'RN', 'RD', 'CD', 'VC', 'CV', 'CC', 'RC', 'SNCF', 'RER', 'TGV', 'EDF', 'GDF', 'PTT', 'ONF', 'CHU', 'CHR', 'HLM', 'ZAL',
                // Institutions (audit rang 7) : des sigles AVEC voyelle, à lister un à un.
                'RATP', 'ONU', 'OTAN', 'CRS'],
            // Régiments : seulement après un ordinal (« 152e RI ») ; ailleurs « Chemin du Ric » est un mot.
            siglesApresOrdinal: ['RI', 'RIC', 'RIMA', 'REI', 'RA', 'RAMA', 'RCP'],
            // Sigles reconnus même écrits en minuscules (« Gare sncf ») : jamais des mots ordinaires.
            siglesMinuscules: ['SNCF', 'RATP', 'HLM', 'ONF', 'EDF', 'GDF', 'TGV', 'RER', 'CHU', 'CHR', 'ZAC', 'ZUP', 'PTT'],
            // L'article d'un nom propre n'est gardé qu'après un TYPE de voie (« Rue La Fayette »),
            // jamais après « Entre », « Derrière », « Vers »… (audit de la différence, constat 2).
            generiques: ['rue', 'avenue', 'boulevard', 'bd', 'place', 'allee', 'impasse', 'chemin', 'route', 'quai', 'cours', 'square',
                'lotissement', 'residence', 'rond-point', 'passage', 'sentier', 'voie', 'promenade', 'esplanade', 'parvis', 'cite', 'hameau',
                'montee', 'rampe', 'ruelle', 'traverse', 'venelle', 'villa', 'clos', 'domaine', 'parc', 'mail', 'rocade'],
            // Abréviations que le wiki FR interdit : la casse est corrigée, la ligne signalée et décochée.
            graphies: { 'rond-point': 'Rond-point', st: 'St', ste: 'Ste', dr: 'Dr', mgr: 'Mgr', bd: 'Bd' },
            abrevSignalees: ['st', 'ste', 'dr', 'mgr', 'bd'],
            ordinal: /^(\d+)(er|ère|ere|re|e|ème|eme|nd|nde)$/i, ordinalRomain: true, articleNomPropre: true, mc: false, accents: true, mode: 'corriger',
        },
        // wiki CZ : le nom officiel ČÚZK est recopié casse comprise (« tř. », « Tř. », « třída »).
        CZ: { nom: 'Tchéquie', locale: 'cs', petits: [], elisions: [], sigles: [], graphies: {}, ordinal: ORD_EN, mc: false, accents: true, mode: 'signaler' },
        // wiki Québec : « de/De », « la/La » selon l'origine du nom, panneaux eux-mêmes incohérents.
        'CA-QC': { nom: 'Québec', locale: 'fr-CA', petits: ['de', 'du', 'des', 'la', 'le', 'les', 'et', 'à', 'au', 'aux', 'en'], elisions: ['l', 'd'], sigles: [], graphies: {}, ordinal: /^(\d+)(e|er|re)$/i, mc: false, accents: true, mode: 'signaler' },
    };
    // 🔴 Le code pays que WME rend (country.abbr) est du FIPS 10-4, PAS de l'ISO : Australie = AS,
    // Royaume-Uni = UK, et AU = AUTRICHE, GB = GABON, ZA = ZAMBIE (relevé du 05/09/2026 dans WME,
    // WME-Closures-Toolkit/RELEVE_pays-et-etats-waze.md : 68 pays sur 259 ont un abbr qui est le code
    // ISO d'un AUTRE pays). Table FERMÉE code WME → fiche ; tout autre code va à la fiche défaut.
    const FIPS_FICHE = { US: 'US', CA: 'CA', NZ: 'NZ', FR: 'FR', AS: 'AU', UK: 'GB', EI: 'IE', SF: 'ZA', EZ: 'CZ' };
    // Pays sans fiche : fiche défaut (signaler), mais la piste est dans la bonne langue de casse.
    // Clés FIPS : Turquie TU, Azerbaïdjan AJ, Grèce GR, Chypre CY, Bulgarie BU, Ukraine UP,
    // Macédoine du Nord MK, Serbie RI, Lituanie LH, Pays-Bas NL.
    const FIPS_LOCALE = { TU: 'tr', AJ: 'az', GR: 'el', CY: 'el', BU: 'bg', UP: 'uk', MK: 'mk', RI: 'sr', LH: 'lt', NL: 'nl' };

    // Une fiche par son code INTERNE (US, CA, GB, AU…, CA-QC) : règles imposées dans l'onglet, banc.
    function ficheParCode(code, regionNom) {
        if (code === 'CA' && /qu[ée]bec/i.test(regionNom || '')) code = 'CA-QC';
        if (code && Object.prototype.hasOwnProperty.call(FICHES, code)) return Object.assign({ code }, FICHES[code]);
        return Object.assign({ code: 'defaut' }, FICHES.defaut);
    }
    // La fiche d'un segment, d'après le code FIPS que WME rend.
    function choisirFiche(abbrWme, regionNom) {
        const code = FIPS_FICHE[abbrWme];
        if (code) return ficheParCode(code, regionNom);
        return Object.assign({ code: 'defaut' }, FICHES.defaut, FIPS_LOCALE[abbrWme] ? { locale: FIPS_LOCALE[abbrWme] } : {});
    }

    const RE_LETTRE = /\p{L}/u;
    const RE_VOYELLE = /[aeiouyàâäáãåæéèêëíìîïóòôöõøœúùûüÿıаеёиоуыэюяєіїαάεέηήιίοόυύωώ]/iu;
    const RE_ROMAIN = /^(?=[IVXLC])(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    const RE_SIGLE_POINTE = /^(\p{L}\.){2,}\p{L}?$/u;
    // Séparateurs entre deux noms ou deux parties d'un nom : chaque moitié est traitée seule
    // (« Bruxelles | Brussel », « A86 - Intérieure », « Exit 24: US-103 • Main Rd »).
    const RE_SEPARATEUR = /( \| | \/ | • | » | - | – | > |: )/;

    function creerMoteur(f, o) {
        o = o || {};
        const bas = s => s.toLocaleLowerCase(f.locale);
        const haut = s => s.toLocaleUpperCase(f.locale);
        const petits = new Set(f.petits || []);
        const sigles = new Set(f.sigles || []);
        const elisions = new Set(f.elisions || []);
        const abrevs = new Set(f.abrevSignalees || []);
        const ambigus = new Set(f.ambigusEnTete || []);
        const codes = new Set(f.codesRoute || []);
        const titres = new Set(f.titresPoint || []);
        const regiments = new Set(f.siglesApresOrdinal || []);
        const siglesMin = new Set(f.siglesMinuscules || []);
        const generiques = new Set(f.generiques || []);
        const sansAccent = s => s.normalize('NFD').replace(/\p{M}/gu, '');
        // Voyelle cherchée sur la forme décomposée : İ, Ư, Ơ, Ů en sont (audit rang 13).
        const aVoyelle = s => RE_VOYELLE.test(s.normalize('NFD').replace(/\p{M}/gu, ''));
        const estMaj = s => RE_LETTRE.test(s) && s === haut(s) && s !== bas(s);
        const estMin = s => RE_LETTRE.test(s) && s === bas(s) && s !== haut(s);
        // Majuscule sur la première LETTRE (un guillemet ou une parenthèse peut précéder).
        const cap = s => { const i = s.search(RE_LETTRE); return i < 0 ? s : s.slice(0, i) + haut(s[i]) + s.slice(i + 1); };

        // Un morceau sans trait d'union, dans sa casse d'origine.
        function cassePart(p, premier, alertes) {
            const low = bas(p);
            if (!RE_LETTRE.test(low)) return p;
            const el = /^(\p{L})(['’])(\p{L}.*|\d.*)$/u.exec(p);
            if (el) {
                // Ce qui suit l'apostrophe : un code ou un sigle reste tel quel, un petit mot en minuscules.
                const r = el[3], rl = bas(r);
                const suite = /\d/.test(r) ? r : sigles.has(haut(r)) && (estMaj(r) || r.length >= 3) ? haut(r) : petits.has(rl) ? rl : cap(rl);
                if (elisions.has(bas(el[1]))) return (premier ? haut(el[1]) : bas(el[1])) + el[2] + suite;
                return haut(el[1]) + el[2] + suite;               // O'Brien, D'Angelo
            }
            if (/\d/.test(p)) {                                   // « A7 », « 1945 » : intacts ; « 1ER » → « 1er »
                const m = f.ordinal && f.ordinal.exec(p);
                return m ? m[1] + bas(m[2]) : p;
            }
            if (f.graphies && f.graphies[low]) { if (abrevs.has(low)) alertes.add('abrev'); return f.graphies[low]; }
            if (f.mc && /^mc\p{L}{2,}/u.test(low)) return 'Mc' + cap(low.slice(2));
            if (f.toujoursMin && f.toujoursMin.includes(low)) return low;
            if (!premier && petits.has(low)) return low;
            if (!premier && f.uneLettre && f.uneLettre[low]) return f.uneLettre[low];
            return cap(low);
        }
        function casseMot(mot, premier, alertes) {
            if (f.graphies && f.graphies[bas(mot)]) return f.graphies[bas(mot)];
            return mot.split('-').map((p, i) => cassePart(p, premier && i === 0, alertes)).join('-');
        }

        // Ce qui ne se touche jamais, ou presque. toutMaj : le nom entier est en MAJUSCULES ;
        // suivant : un autre mot suit dans la même moitié.
        function motProtege(mot, toutMaj, suivMot, alertes, premier) {
            const suivant = suivMot !== undefined;
            if (mot.includes('&')) return mot;                    // « AT&T »
            if (/\d/.test(mot)) {
                const m = f.ordinal && f.ordinal.exec(mot);
                if (m) return m[1] + bas(m[2]);                   // « 1ST » → « 1st »
                // « 14-JUILLET », « L'A7 » : seule la partie au chiffre reste telle quelle. Un code collé
                // au chiffre (« US-90 », « LA-308 », « I-35E ») est gardé : court, sans voyelle ou sigle.
                if (/[-'’]/.test(mot) && toutMaj) {
                    // La partie au chiffre passe par l'ordinal (« 1ER-MAI » → « 1er-Mai ») ; un petit mot
                    // (« -ET-DU- ») suit la casse normale (audit de la différence, constat 10).
                    return mot.split('-').map((p, k) => {
                        if (/\d/.test(p) && !/['’]/.test(p)) { const o2 = f.ordinal && f.ordinal.exec(p); return o2 ? o2[1] + bas(o2[2]) : p; }
                        const garde = !/['’]/.test(p) && ((p.length <= 2 && !petits.has(bas(p))) || !aVoyelle(p) || sigles.has(haut(p)));
                        return garde ? p : cassePart(p, premier && k === 0, alertes);
                    }).join('-');
                }
                return mot;                                       // « D70 », « SR-12 », « 50A » intacts
            }
            const nu = mot.replace(/[.,;]+$/, '');
            const motMaj = estMaj(nu);
            // Graphie imposée : « ST » → « St », « Rond-Point » → « Rond-point ». Dans un nom mixte,
            // un mot tout en MAJ n'est touché qu'avec l'option (SPEC § 5, audit rang 5).
            const g = f.graphies && f.graphies[bas(nu)];
            // « St » / « St. », « Dr » / « Dr. »… ne se départagent pas devant un nom : en tête, ou suivi d'un
            // mot qui n'est ni un cardinal, ni une abréviation, ni un numéro (« E ST CHARLES RD »).
            // « MAIN ST W », « MAIN ST EXT » restent Street (audit de la différence, constat 12).
            const devantNom = premier || (suivant && !sigles.has(haut(suivMot)) && !(f.graphies && f.graphies[bas(suivMot)]) && !/^\d/.test(suivMot));
            if (g && devantNom && nu === mot && ambigus.has(bas(nu)) && (toutMaj || motMaj)) { alertes.add('ambigu'); return mot; }
            if (titres.has(bas(nu)) && nu === mot && (toutMaj || motMaj)) { alertes.add('titre'); return cap(bas(nu)); }
            if (g && (toutMaj || !motMaj || o.majusculesInconnues)) { if (abrevs.has(bas(nu))) alertes.add('abrev'); return g + mot.slice(nu.length); }
            if (RE_SIGLE_POINTE.test(mot) || RE_SIGLE_POINTE.test(nu)) return haut(mot);   // « D.B. », « T.I.V. »
            if (RE_ROMAIN.test(nu)) return mot;                   // « VIII », « IV »
            if (f.ordinalRomain && (toutMaj || motMaj)) {         // « XXE » → « XXe » ; ni LE, ni VIE
                // « ER » seulement après un I seul (« Ier ») : « LIER », « VIER » sont des mots (constat 9).
                const r = /^(?:(I)(ER)|([IVXLC]{2,})(E|ÈME|EME))$/u.exec(haut(nu));
                const rom = r && (r[1] || r[3]), suf = r && (r[2] || r[4]);
                if (r && RE_ROMAIN.test(rom) && !['VIE', 'LIE', 'LIVE', 'CIE'].includes(haut(nu))) return rom + bas(suf) + mot.slice(nu.length);
            }
            if ((toutMaj || motMaj) && sigles.has(haut(nu))) return haut(mot);
            if (toutMaj && nu.length === 1) {
                // « à » seulement devant un vrai mot (« Chemin à la Mer ») ; « Allée A », « Allée A et B »,
                // « Rue A 1 », « Bâtiment A bis » gardent leur lettre (rang 4, constat 18).
                const motVrai = suivant && RE_LETTRE.test(suivMot) && !/\d/.test(suivMot) && !['bis', 'ter', 'et', 'ou'].includes(bas(suivMot)) && suivMot.replace(/\P{L}/gu, '').length > 1;
                if (f.uneLettre && f.uneLettre[bas(nu)] && motVrai) return null;
                return mot;                                       // initiales, cardinaux, voies lettrées
            }
            // Sigle sans voyelle : « SNCF », « PTT ». Un mot à point est une abréviation (« STR. »).
            if ((toutMaj || motMaj) && nu === mot && nu.length >= 2 && nu.length <= 5 && !aVoyelle(nu) && !/['’-]/.test(nu)) return mot;
            return null;
        }

        // Un article juste après le générique (« Rue La Fayette », « Avenue Le Corbusier ») est pris
        // pour celui d'un nom propre : majuscule gardée, et signalé (décision de l'auteur, 08/11).
        const articleNomPropre = (mots, i) => !!f.articleNomPropre && i === 1 && mots.length > 2 &&
            ['le', 'la', 'les'].includes(bas(mots[1])) && generiques.has(sansAccent(bas(mots[0])));

        function corrigerMoitie(texte, alertes) {
            const lettres = texte.replace(/\([^)]*\)/g, '');
            const toutMaj = estMaj(lettres);
            if (!toutMaj && f.mixtes === false) return texte;
            if (toutMaj && f.accents && !/[À-ÖØ-öø-ÿĀ-ž]/.test(lettres) && /\p{L}{3,}/u.test(lettres)) alertes.add('accents');
            const morceaux = texte.split(/(\s+|\([^)]*\))/);
            const mots = morceaux.filter(m => m && !/^\s+$/.test(m) && !/^\(/.test(m));
            let i = -1;
            return morceaux.map(m => {
                if (!m || /^\s+$/.test(m)) return m;
                if (/^\(/.test(m)) {
                    // Parenthèses d'un nom en MAJ : corrigées comme un nom, sauf un code de 1 à 3 lettres
                    // (« (PU) », « (VT) ») ; dans un nom mixte, intactes (décision de l'auteur, 08/11).
                    const dedans = /^\((.*)\)$/s.exec(m);
                    if (!toutMaj || !dedans || /^\s*\p{L}{1,3}\s*$/u.test(dedans[1])) return m;
                    return '(' + corrigerMoitie(dedans[1], alertes) + ')';
                }
                i++;
                const estPremier = i === 0;
                const suivant = i < mots.length - 1;
                if (codes.size && (toutMaj || estMaj(m)) && codes.has(haut(m)) && suivant && /^\d/.test(mots[i + 1])) return haut(m);
                if (regiments.has(haut(m)) && (toutMaj || estMaj(m)) && i > 0 && f.ordinal && f.ordinal.test(mots[i - 1])) return haut(m);
                const prot = motProtege(m, toutMaj, suivant ? mots[i + 1] : undefined, alertes, estPremier);
                if (prot !== null) return prot;
                if (toutMaj && articleNomPropre(mots, i)) { alertes.add('article'); return cap(bas(m)); }
                if (toutMaj) return casseMot(m, estPremier, alertes);
                // Nom en casse mixte : on ne relève que les mots tout en minuscules.
                const nu = m.replace(/[.,;]+$/, '');
                if (estMin(nu) && siglesMin.has(haut(nu))) return haut(m);   // « sncf » → « SNCF », jamais « spur » (constat 3)
                if (estMin(m)) return casseMot(m, estPremier, alertes);
                if (o.majusculesInconnues && estMaj(m) && m.replace(/\P{L}/gu, '').length > 1) return casseMot(m, estPremier, alertes);
                if (o.forcerPetitsMots && !estPremier && petits.has(bas(m)) && m === cap(bas(m)) && !articleNomPropre(mots, i)) return bas(m);
                // Un mot composé en partie minuscule (« Jean-pierre ») : chaque morceau minuscule est relevé.
                if (m.includes('-')) return m.split('-').map((p, k) => estMin(p) ? cassePart(p, estPremier && k === 0, alertes) : p).join('-');
                return m;
            }).join('');
        }

        // Point d'entrée : un nom → { texte, change, alertes[] }.
        function corriger(nom) {
            if (!nom || !RE_LETTRE.test(nom)) return { texte: nom, change: false, alertes: [] };
            // Un caractère invisible (U+200B, U+00AD, U+202E…) : rien n'est touché, c'est signalé.
            if (/\p{Cf}/u.test(nom)) return { texte: nom, change: false, alertes: ['invisible'] };
            const src = nom.normalize('NFC');
            const alertes = new Set();
            const passe = s => s.split(RE_SEPARATEUR).map((x, i) => i % 2 ? x : corrigerMoitie(x, alertes)).join('');
            // Deux passes au plus : « ALLEE b » → « ALLEE B » → « Allee B » en un seul clic.
            let texte = passe(src);
            const deux = passe(texte);
            if (deux !== texte) texte = deux;
            texte = texte.normalize('NFC');
            return { texte, change: texte !== src, alertes: [...alertes] };
        }
        return { corriger };
    }

    // Le banc charge ce fichier dans Node : il récupère le moteur et s'arrête là.
    if (typeof window === 'undefined' && typeof globalThis !== 'undefined' && globalThis.__WCF_BANC__) {
        Object.assign(globalThis.__WCF_BANC__, { FICHES, choisirFiche, ficheParCode, creerMoteur });
        return;
    }

    // =====================================================================
    //  LE SCRIPT DANS WME
    // =====================================================================

    const SCRIPT_ID = 'wme-caps-fixer';
    const SCRIPT_NAME = 'WME Caps Fixer';
    const VERSION = (typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || 'dev';
    const BAR_ID = 'wcf-bar';
    // Adresses publiques. GreasyFork et Discuss n'ont pas encore de numéro à la première publication :
    // GF renvoie alors à une recherche, et le lien Discuss n'est pas affiché tant que URL_DISCUSS est nul.
    const URL_GH = 'https://github.com/DrSlump34/WME-Caps-Fixer';
    const URL_GF = 'https://greasyfork.org/scripts?q=WME+Caps+Fixer';
    const URL_DISCUSS = null;
    const OPTS_KEY = 'wcf.opts';
    const OPTS_DEF = { voieEntiere: true, majusculesInconnues: false, forcerPetitsMots: false, pays: 'auto' };
    // Avec GM_xmlhttpRequest (pastille de nouvelle version, accord de l'auteur du 08/11/2026), le
    // script tourne dans le bac à sable du gestionnaire : getWmeSdk, SDK_INITIALIZED et le verrou
    // anti-double-chargement se lisent sur la page par unsafeWindow, comme dans WJN, WDA et WRP.
    const pw = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

    // Icône détourée (même dessin que @icon et icon.svg) : panneau de rue ardoise, « Aa » blanc,
    // pastille orange de correction — le motif de l'icône vitrine ICON.png.
    const icone = h => '<svg xmlns="http://www.w3.org/2000/svg" width="' + h + '" height="' + h + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path d="M8.5 18 V22.5 M15.5 18 V22.5" stroke="#607d8b" stroke-width="2" stroke-linecap="round"/><rect x="2" y="6.5" width="20" height="12" rx="2.8" fill="#607d8b"/><path d="M6.2 15.6 L9 9 L11.8 15.6 M7.2 13.4 H10.8" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15.7" cy="13.2" r="2.25" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M17.95 10.8 V15.6" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><circle cx="5" cy="5.2" r="4" fill="#fb8c00" stroke="#fff" stroke-width="1.2"/><path d="M6.6 5.4 A1.7 1.7 0 1 1 5.1 3.5" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><path d="M4.4 2.6 L6.1 3.5 L4.6 4.7 Z" fill="#fff"/></svg>';

    let sdk = null;
    let opts = Object.assign({}, OPTS_DEF);
    let plan = null;              // la dernière proposition calculée
    let apercuOuvert = false;
    // Les choix de l'éditeur survivent aux recalculs : clé de ligne → coche (vidé à chaque sélection).
    const choix = new Map();
    const cleLigne = l => l.id + '|' + l.apres + '|' + l.villeCible;
    // Pendant Appliquer : un seul appliquer() à la fois, et la barre n'est ni recalculée ni reposée.
    let enCours = false;

    const log = m => console.log('[WCF] ' + m);
    const dejaDit = new Set();
    const logUneFois = (cle, m) => { if (!dejaDit.has(cle)) { dejaDit.add(cle); log(m); } };
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // =====================================================================
    //  I18N
    // =====================================================================

    const DICO = {
        en: {
            barLbl: 'Caps',
            barN: n => n === 1 ? '1 fix' : n + ' fixes',
            barTip: 'Show the capitalization fixes before applying them',
            titre: 'Capitalization fixes',
            lPrim: 'Street', lAlt: 'Alt. street',
            nSeg: n => n === 1 ? '1 segment' : n + ' segments',
            rien: 'Nothing to fix in the selection.',
            fiche: noms => 'Rules: ' + noms,
            alerteAccents: 'Name in capitals without any accent: the GIS may have dropped them. Check the accents before saving.',
            villeCoord: (v, b) => 'The city “' + v + '” should read “' + b + '”, and no city with that spelling is loaded here. If it does not exist, ask your coordinator to have “' + v + '” corrected.',
            villeRattache: b => 'Re-attach to the existing city “' + b + '”',
            sansDroit: n => n === 1 ? '1 segment you cannot edit (lock or outside your area): skipped.' : n + ' segments you cannot edit (lock or outside your area): skipped.',
            appliquer: 'Apply',
            fermer: 'Close',
            applique: (n, s) => (n === 1 ? '1 name' : n + ' names') + ' fixed on ' + (s === 1 ? '1 segment' : s + ' segments') + '. Nothing is saved: check, then Save. The space at the end of the name is intended: Waze removes it when saving, do not delete it.',
            change: 'The names changed since the preview: preview again.',
            erreur: m => 'Not applied: ' + m,
            enCours: 'Applying…',
            sc: 'Show the capitalization fixes of the selection',
            sbHint: 'Fixes the capitalization of street and city names of the selected segments — names in ALL CAPS, or words left in lower case — following the rules of each country. A preview comes first; nothing is saved for you.',
            sbOpts: 'Options',
            oVoie: 'Whole road (loaded segments)', oVoieH: 'Apply to every loaded segment that carries the same street name, not only the selection.',
            oMaj: 'Words in capitals inside mixed names',
            oPetits: 'Lower-case short words',
            oPays: 'Rules', oPaysAuto: 'Country of the segment',
            sbHelp: 'Help',
            hHowT: 'How it works',
            hHowB: '<p>Select one or more segments: if a name needs fixing, a <b>Caps</b> line appears under the segment header. Click it to see the preview, untick what you do not want, then <b>Apply</b>.</p><p>Nothing is saved: the fixes wait in the Save button, and <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes them.</p>',
            hRulesT: 'The rules',
            hRulesB: '<p>Rules taken from the community wikis of the United States, Canada, the United Kingdom, Ireland, Australia, New Zealand, South Africa and France: short words in lower case (FR: de, la, du…), acronyms and route numbers kept as they are (D70, I-35E, SR-12, BUS), ordinals (1st, 1er), Mc (McDonald)…</p><p>Names in ALL CAPS are rewritten word by word. In mixed names, only words left in lower case are fixed: “Chemin des luzes” → “Chemin des Luzes”.</p><p>Czechia and Québec: the official capitalization cannot be guessed. Other countries: no rules yet. In both cases the script only reports, and writes nothing.</p>',
            hTrickT: 'Why a trailing space',
            hTrickB: '<p>WME ignores letter case when it finds a street name at save time: renamed to “Rue de Laigné”, the segment falls back on “Rue de laigné”. The script therefore writes the new name with a trailing space, which WME removes when saving. This is the trick editors use by hand; it is not documented by Waze.</p>',
            hCityT: 'Cities',
            hCityB: '<p>The script never creates a city. If a city with the right capitalization is loaded, it offers to re-attach the road to it. Otherwise it tells you to ask your coordinator: renaming a city takes a country manager, and a change of capitalization alone may need Waze staff.</p>',
            hKeysT: 'Keyboard',
            hKeysB: '<p>One shortcut is listed <b>without a key</b> under Settings › Keyboard shortcuts. Assign it there.</p>',
            sbFoot: 'The script writes to the map only when you click Apply, and never saves.',
            forcee: nom => 'Rules forced in the Scripts tab: ' + nom + '.',
            piste: 'Hint: ',
            barV: n => n + ' to check',
            noteSignaler: 'Here the official capitalization cannot be guessed: the script only reports. Check each name against the official source.',
            sansFiche: 'No rules for this country yet: the script only reports. Check each name and fix it by hand if needed.',
            alInvisible: 'The name holds an invisible character (zero-width space, soft hyphen…): the script touches nothing. Retype the name by hand.',
            alAbrev: 'Abbreviation that the French wiki forbids (St, Ste, Dr, Mgr, Bd): write the word in full. Unticked.',
            alArticle: '“Le”, “La” or “Les” right after the type of road is taken for part of a proper name (La Fayette) and keeps its capital: check.',
            alAmbigu: 'At the start of a name, “St” means Street and “St.” Saint (likewise Dr / Dr., Ft, Mt): the script cannot tell. Fix by hand. Unticked.',
            espaceRetire: 'Waze removed the trailing space as soon as the street was created: the capitalization cannot be fixed this way any more. No segment was changed; Ctrl+Z removes the prepared street.',
            annulePrep: 'Ctrl+Z removes what was prepared.',
            aucunSeg: 'No segment was changed.',
            echecs: (n, m) => (n === 1 ? '1 segment failed' : n + ' segments failed') + ': ' + m + '.',
            oPetitsH: 'In a mixed name, turn “Rue De La Gare” into “Rue de la Gare” (French: de, la, du…).',
            oMajH: 'In “Old MILL Rd”, also fix “MILL”. Off by default: capitals are often acronyms, and the voice reads them differently.',
            accentsAVerifier: n => (n === 1 ? '1 name was' : n + ' names were') + ' written without any accent: check the accents before saving.',
            chargesSeuls: 'Fixed on the loaded segments only: move or zoom out, then run it again for the rest of the road.',
            ficheQC: 'Québec',
            ficheCA: 'Canada (English)',
            ficheDefaut: 'no rules for this country (report only)',
            majInstall: 'Install',
            majBtn: v => 'Version ' + v + ' is available',
            villeVerif: v => 'The capitalization of the city “' + v + '” cannot be guessed here (St / St., Dr / Dr.…): ask your coordinator to check it.',
            alTitre: 'The wiki writes this title with a period (Sgt., Lt., Mr., Sr.): add it by hand. Unticked.',
            lnkDiscuss: 'Discuss thread',
        },
        fr: {
            barLbl: 'Casse',
            barN: n => n === 1 ? '1 correction' : n + ' corrections',
            barTip: 'Voir les corrections de casse avant de les appliquer',
            titre: 'Corrections de casse',
            lPrim: 'Rue', lAlt: 'Rue alt.',
            nSeg: n => n === 1 ? '1 segment' : n + ' segments',
            rien: 'Rien à corriger dans la sélection.',
            fiche: noms => 'Règles : ' + noms,
            alerteAccents: 'Nom en majuscules sans aucun accent : le SIG les a peut-être perdus. Vérifiez les accents avant d\'enregistrer.',
            villeCoord: (v, b) => 'La ville « ' + v + ' » devrait s\'écrire « ' + b + ' », et aucune ville de cette graphie n\'est chargée ici. Si elle n\'existe pas, rapprochez-vous de votre coordinateur pour faire corriger « ' + v + ' ».',
            villeRattache: b => 'Rattacher à la ville existante « ' + b + ' »',
            sansDroit: n => n === 1 ? '1 segment que vous ne pouvez pas modifier (verrou ou hors de votre zone) : ignoré.' : n + ' segments que vous ne pouvez pas modifier (verrou ou hors de votre zone) : ignorés.',
            appliquer: 'Appliquer',
            fermer: 'Fermer',
            applique: (n, s) => (n === 1 ? '1 nom corrigé' : n + ' noms corrigés') + ' sur ' + (s === 1 ? '1 segment' : s + ' segments') + '. Rien n\'est enregistré : vérifiez, puis Enregistrer. L\'espace en fin de nom est voulu : Waze le retire à l\'enregistrement, ne l\'effacez pas.',
            change: 'Les noms ont changé depuis l\'aperçu : relancez l\'aperçu.',
            erreur: m => 'Non appliqué : ' + m,
            enCours: 'Application en cours…',
            sc: 'Afficher les corrections de casse de la sélection',
            sbHint: 'Corrige la casse des noms de rue et de ville des segments sélectionnés — noms TOUT EN MAJUSCULES, ou mots restés en minuscules — selon les règles de chaque pays. Un aperçu d\'abord ; rien n\'est enregistré à votre place.',
            sbOpts: 'Options',
            oVoie: 'Toute la voie (segments chargés)', oVoieH: 'Appliquer à tous les segments chargés qui portent le même nom de rue, pas seulement à la sélection.',
            oMaj: 'Mots en majuscules dans un nom mixte',
            oPetits: 'Petits mots en minuscules',
            oPays: 'Règles', oPaysAuto: 'Pays du segment',
            sbHelp: 'Aide',
            hHowT: 'Fonctionnement',
            hHowB: '<p>Sélectionnez un ou plusieurs segments : si un nom est à corriger, une ligne <b>Casse</b> apparaît sous l\'en-tête du segment. Cliquez pour voir l\'aperçu, décochez ce que vous ne voulez pas, puis <b>Appliquer</b>.</p><p>Rien n\'est enregistré : les corrections attendent dans le bouton Enregistrer, et <kbd>Ctrl</kbd>+<kbd>Z</kbd> les annule.</p>',
            hRulesT: 'Les règles',
            hRulesB: '<p>Règles tirées des wikis des communautés des États-Unis, du Canada, du Royaume-Uni, d\'Irlande, d\'Australie, de Nouvelle-Zélande, d\'Afrique du Sud et de France : petits mots en minuscules (de, la, du…), sigles et numéros de route gardés tels quels (D70, A6a, I-35E, SR-12), ordinaux (1er, 1st), Mc (McDonald)…</p><p>Un nom TOUT EN MAJUSCULES est réécrit mot par mot. Dans un nom mixte, seuls les mots restés en minuscules sont corrigés : « Chemin des luzes » → « Chemin des Luzes ».</p><p>Tchéquie et Québec : la casse officielle ne se devine pas. Autres pays : pas encore de règles. Dans les deux cas, le script se contente de signaler et n\'écrit rien.</p>',
            hTrickT: 'Pourquoi un espace final',
            hTrickB: '<p>WME ignore la casse quand il retrouve un nom de rue à l\'enregistrement : renommé en « Rue de Laigné », le segment retombe sur « Rue de laigné ». Le script écrit donc le nouveau nom suivi d\'un espace, que WME retire à l\'enregistrement. C\'est l\'astuce que les éditeurs font à la main ; Waze ne la documente pas.</p>',
            hCityT: 'Les villes',
            hCityB: '<p>Le script ne crée jamais de ville. Si une ville de la bonne casse est chargée, il propose d\'y rattacher la voie. Sinon, il vous dit de voir votre coordinateur : renommer une ville demande un coordinateur national, et une simple correction de casse peut demander le staff de Waze.</p>',
            hKeysT: 'Clavier',
            hKeysB: '<p>Un raccourci est listé <b>sans touche</b> dans Paramètres › Raccourcis clavier. Attribuez-lui celle que vous voulez.</p>',
            sbFoot: 'Le script n\'écrit sur la carte que quand vous cliquez sur Appliquer, et n\'enregistre jamais.',
            forcee: nom => 'Règles imposées dans l\'onglet Scripts : ' + nom + '.',
            piste: 'Piste : ',
            barV: n => n + ' à vérifier',
            noteSignaler: 'Ici, la casse officielle ne se devine pas : le script se contente de signaler. Vérifiez chaque nom sur la source officielle.',
            sansFiche: 'Pas encore de règles pour ce pays : le script se contente de signaler. Vérifiez chaque nom et corrigez-le à la main s\'il le faut.',
            alInvisible: 'Le nom contient un caractère invisible (espace sans largeur, trait d\'union conditionnel…) : le script n\'y touche pas. Retapez le nom à la main.',
            alAbrev: 'Abréviation interdite par le wiki FR (St, Ste, Dr, Mgr, Bd) : écrivez le mot en entier. Décochée.',
            alArticle: '« Le », « La » ou « Les » juste après le type de voie est pris pour un nom propre (La Fayette) et garde sa majuscule : vérifiez.',
            alAmbigu: 'En tête de nom, « St » veut dire Street et « St. » Saint (de même Dr / Dr., Ft, Mt) : le script ne peut pas trancher. Corrigez à la main. Décochée.',
            espaceRetire: 'Waze a retiré l\'espace final dès la création de la rue : la casse ne peut plus être corrigée ainsi. Aucun segment n\'a été modifié ; Ctrl+Z retire la rue préparée.',
            annulePrep: 'Ctrl+Z retire ce qui a été préparé.',
            aucunSeg: 'Aucun segment n\'a été modifié.',
            echecs: (n, m) => (n === 1 ? '1 segment en échec' : n + ' segments en échec') + ' : ' + m + '.',
            oPetitsH: 'Dans un nom mixte, passer « Rue De La Gare » en « Rue de la Gare » (de, la, du…).',
            oMajH: 'Dans « Rue du MOULIN », corriger aussi « MOULIN ». Coupé par défaut : les majuscules sont souvent des sigles, et la voix les lit autrement.',
            accentsAVerifier: n => (n === 1 ? '1 nom a été écrit' : n + ' noms ont été écrits') + ' sans aucun accent : vérifiez les accents avant d\'enregistrer.',
            chargesSeuls: 'Corrigé sur les segments chargés seulement : déplacez la carte ou dézoomez, puis relancez pour le reste de la voie.',
            ficheQC: 'Québec',
            ficheCA: 'Canada (anglais)',
            ficheDefaut: 'pas de règles pour ce pays (signalement)',
            majInstall: 'Installer',
            majBtn: v => 'La version ' + v + ' est disponible',
            villeVerif: v => 'La casse de la ville « ' + v + ' » ne se devine pas ici (St / St., Dr / Dr.…) : demandez à votre coordinateur de la vérifier.',
            alTitre: 'Le wiki écrit ce titre avec un point (Sgt., Lt., Mr., Sr.) : ajoutez-le à la main. Décochée.',
            lnkDiscuss: 'Fil Discuss',
        },
        de: {
            barLbl: 'Schreibung',
            barN: n => n === 1 ? '1 Korrektur' : n + ' Korrekturen',
            barTip: 'Die Korrekturen der Groß-/Kleinschreibung vor dem Anwenden ansehen',
            titre: 'Korrekturen der Schreibung',
            lPrim: 'Straße', lAlt: 'Alt. Straße',
            nSeg: n => n === 1 ? '1 Segment' : n + ' Segmente',
            rien: 'In der Auswahl gibt es nichts zu korrigieren.',
            fiche: noms => 'Regeln: ' + noms,
            alerteAccents: 'Name in Großbuchstaben ohne jeden Akzent: Das GIS hat sie vielleicht verloren. Akzente vor dem Speichern prüfen.',
            villeCoord: (v, b) => 'Die Stadt „' + v + '“ müsste „' + b + '“ heißen, und hier ist keine Stadt mit dieser Schreibung geladen. Gibt es sie nicht, bitte deinen Koordinator, „' + v + '“ korrigieren zu lassen.',
            villeRattache: b => 'Der bestehenden Stadt „' + b + '“ zuordnen',
            sansDroit: n => n === 1 ? '1 Segment, das du nicht bearbeiten kannst (Sperre oder außerhalb deines Gebiets): übersprungen.' : n + ' Segmente, die du nicht bearbeiten kannst (Sperre oder außerhalb deines Gebiets): übersprungen.',
            appliquer: 'Anwenden',
            fermer: 'Schließen',
            applique: (n, s) => (n === 1 ? '1 Name' : n + ' Namen') + ' auf ' + (s === 1 ? '1 Segment' : s + ' Segmenten') + ' korrigiert. Nichts ist gespeichert: prüfen, dann Speichern. Das Leerzeichen am Namensende ist gewollt: Waze entfernt es beim Speichern, bitte nicht löschen.',
            change: 'Die Namen haben sich seit der Vorschau geändert: Vorschau neu öffnen.',
            erreur: m => 'Nicht angewendet: ' + m,
            enCours: 'Wird angewendet…',
            sc: 'Die Korrekturen der Schreibung für die Auswahl zeigen',
            sbHint: 'Korrigiert die Groß-/Kleinschreibung der Straßen- und Stadtnamen der ausgewählten Segmente — Namen IN GROSSBUCHSTABEN oder klein gebliebene Wörter — nach den Regeln jedes Landes. Zuerst eine Vorschau; nichts wird für dich gespeichert.',
            sbOpts: 'Optionen',
            oVoie: 'Ganze Straße (geladene Segmente)', oVoieH: 'Auf alle geladenen Segmente mit demselben Straßennamen anwenden, nicht nur auf die Auswahl.',
            oMaj: 'Großgeschriebene Wörter in gemischten Namen',
            oPetits: 'Kurze Wörter klein',
            oPays: 'Regeln', oPaysAuto: 'Land des Segments',
            sbHelp: 'Hilfe',
            hHowT: 'So funktioniert es',
            hHowB: '<p>Ein oder mehrere Segmente auswählen: ist ein Name zu korrigieren, erscheint unter dem Segmentkopf eine Zeile <b>Schreibung</b>. Anklicken, Vorschau prüfen, Unerwünschtes abwählen, dann <b>Anwenden</b>.</p><p>Nichts wird gespeichert: die Korrekturen warten im Speichern-Knopf, und <kbd>Strg</kbd>+<kbd>Z</kbd> macht sie rückgängig.</p>',
            hRulesT: 'Die Regeln',
            hRulesB: '<p>Regeln aus den Community-Wikis der USA, Kanadas, des Vereinigten Königreichs, Irlands, Australiens, Neuseelands, Südafrikas und Frankreichs: kurze Wörter klein (FR: de, la, du…), Abkürzungen und Straßennummern bleiben unverändert (D70, I-35E, SR-12, BUS), Ordnungszahlen (1st, 1er), Mc (McDonald)…</p><p>Namen IN GROSSBUCHSTABEN werden Wort für Wort neu geschrieben. In gemischten Namen werden nur klein gebliebene Wörter korrigiert: „Chemin des luzes“ → „Chemin des Luzes“.</p><p>Tschechien und Québec: Die amtliche Schreibung lässt sich nicht erraten. Andere Länder: noch keine Regeln. In beiden Fällen meldet das Skript nur und schreibt nichts.</p>',
            hTrickT: 'Warum ein Leerzeichen am Ende',
            hTrickB: '<p>WME ignoriert die Groß-/Kleinschreibung, wenn es beim Speichern einen Straßennamen wiederfindet: in „Rue de Laigné“ umbenannt, fällt das Segment auf „Rue de laigné“ zurück. Das Skript schreibt den neuen Namen daher mit einem Leerzeichen am Ende, das WME beim Speichern entfernt. Editoren machen das so von Hand; Waze dokumentiert es nicht.</p>',
            hCityT: 'Städte',
            hCityB: '<p>Das Skript legt nie eine Stadt an. Ist eine Stadt in richtiger Schreibung geladen, schlägt es vor, die Straße ihr zuzuordnen. Sonst bittet es dich, deinen Koordinator zu fragen: Eine Stadt umzubenennen erfordert einen Country Manager, und eine reine Änderung der Groß-/Kleinschreibung womöglich das Waze-Team.</p>',
            hKeysT: 'Tastatur',
            hKeysB: '<p>Ein Tastenkürzel steht <b>ohne Taste</b> unter Einstellungen › Tastenkürzel. Dort belegen.</p>',
            sbFoot: 'Das Skript schreibt nur auf die Karte, wenn du auf Anwenden klickst, und speichert nie.',
            forcee: nom => 'Im Skript-Tab erzwungene Regeln: ' + nom + '.',
            piste: 'Hinweis: ',
            barV: n => n + ' zu prüfen',
            noteSignaler: 'Hier lässt sich die amtliche Schreibung nicht erraten: Das Skript meldet nur. Prüfe jeden Namen an der amtlichen Quelle.',
            sansFiche: 'Für dieses Land gibt es noch keine Regeln: Das Skript meldet nur. Prüfe jeden Namen und korrigiere ihn bei Bedarf von Hand.',
            alInvisible: 'Der Name enthält ein unsichtbares Zeichen (Leerzeichen ohne Breite, weiches Trennzeichen…): Das Skript ändert nichts. Namen von Hand neu eingeben.',
            alAbrev: 'Vom französischen Wiki verbotene Abkürzung (St, Ste, Dr, Mgr, Bd): Wort ausschreiben. Nicht angehakt.',
            alArticle: '„Le“, „La“ oder „Les“ direkt nach der Straßenart wird als Teil eines Eigennamens (La Fayette) behandelt und bleibt großgeschrieben: bitte prüfen.',
            alAmbigu: 'Am Namensanfang bedeutet „St“ Street und „St.“ Saint (ebenso Dr / Dr., Ft, Mt): Das Skript kann das nicht entscheiden. Von Hand korrigieren. Nicht angehakt.',
            espaceRetire: 'Waze hat das Leerzeichen am Ende schon beim Anlegen der Straße entfernt: Die Schreibung lässt sich so nicht mehr korrigieren. Kein Segment wurde geändert; Strg+Z entfernt die vorbereitete Straße.',
            annulePrep: 'Strg+Z entfernt, was vorbereitet wurde.',
            aucunSeg: 'Kein Segment wurde geändert.',
            echecs: (n, m) => (n === 1 ? '1 Segment fehlgeschlagen' : n + ' Segmente fehlgeschlagen') + ': ' + m + '.',
            oPetitsH: 'In einem gemischten Namen „Rue De La Gare“ zu „Rue de la Gare“ machen (Französisch: de, la, du…).',
            oMajH: 'In „Old MILL Rd“ auch „MILL“ korrigieren. Standardmäßig aus: Großbuchstaben sind oft Abkürzungen, und die Sprachausgabe liest sie anders.',
            accentsAVerifier: n => (n === 1 ? '1 Name wurde' : n + ' Namen wurden') + ' ohne jeden Akzent geschrieben: Akzente vor dem Speichern prüfen.',
            chargesSeuls: 'Nur auf den geladenen Segmenten korrigiert: Karte verschieben oder herauszoomen, dann für den Rest der Straße erneut starten.',
            ficheQC: 'Québec',
            ficheCA: 'Kanada (Englisch)',
            ficheDefaut: 'keine Regeln für dieses Land (nur Hinweis)',
            majInstall: 'Installieren',
            majBtn: v => 'Version ' + v + ' ist verfügbar',
            villeVerif: v => 'Die Schreibung der Stadt „' + v + '“ lässt sich hier nicht erraten (St / St., Dr / Dr.…): bitte deinen Koordinator, sie zu prüfen.',
            alTitre: 'Das Wiki schreibt diesen Titel mit Punkt (Sgt., Lt., Mr., Sr.): ergänze ihn von Hand. Nicht angehakt.',
            lnkDiscuss: 'Discuss-Thread',
        },
        es: {
            barLbl: 'Mayúsculas',
            barN: n => n === 1 ? '1 corrección' : n + ' correcciones',
            barTip: 'Ver las correcciones de mayúsculas antes de aplicarlas',
            titre: 'Correcciones de mayúsculas',
            lPrim: 'Calle', lAlt: 'Calle alt.',
            nSeg: n => n === 1 ? '1 segmento' : n + ' segmentos',
            rien: 'Nada que corregir en la selección.',
            fiche: noms => 'Reglas: ' + noms,
            alerteAccents: 'Nombre en mayúsculas sin ninguna tilde: el SIG puede haberlas perdido. Revise las tildes antes de guardar.',
            villeCoord: (v, b) => 'La ciudad «' + v + '» debería escribirse «' + b + '», y aquí no hay cargada ninguna ciudad con esa escritura. Si no existe, pida a su coordinador que corrija «' + v + '».',
            villeRattache: b => 'Asignar a la ciudad existente «' + b + '»',
            sansDroit: n => n === 1 ? '1 segmento que no puede editar (bloqueo o fuera de su zona): omitido.' : n + ' segmentos que no puede editar (bloqueo o fuera de su zona): omitidos.',
            appliquer: 'Aplicar',
            fermer: 'Cerrar',
            applique: (n, s) => (n === 1 ? '1 nombre corregido' : n + ' nombres corregidos') + ' en ' + (s === 1 ? '1 segmento' : s + ' segmentos') + '. Nada está guardado: revise y luego Guardar. El espacio al final del nombre es intencional: Waze lo quita al guardar, no lo borre.',
            change: 'Los nombres cambiaron desde la vista previa: vuelva a abrirla.',
            erreur: m => 'No aplicado: ' + m,
            enCours: 'Aplicando…',
            sc: 'Mostrar las correcciones de mayúsculas de la selección',
            sbHint: 'Corrige las mayúsculas de los nombres de calle y de ciudad de los segmentos seleccionados — nombres TODO EN MAYÚSCULAS o palabras que quedaron en minúsculas — según las reglas de cada país. Primero una vista previa; nada se guarda en su lugar.',
            sbOpts: 'Opciones',
            oVoie: 'Toda la vía (segmentos cargados)', oVoieH: 'Aplicar a todos los segmentos cargados que llevan el mismo nombre de calle, no solo a la selección.',
            oMaj: 'Palabras en mayúsculas en nombres mixtos',
            oPetits: 'Palabras cortas en minúsculas',
            oPays: 'Reglas', oPaysAuto: 'País del segmento',
            sbHelp: 'Ayuda',
            hHowT: 'Funcionamiento',
            hHowB: '<p>Seleccione uno o varios segmentos: si hay un nombre que corregir, aparece una línea <b>Mayúsculas</b> bajo el encabezado del segmento. Haga clic para ver la vista previa, desmarque lo que no quiera y luego <b>Aplicar</b>.</p><p>Nada se guarda: las correcciones esperan en el botón Guardar, y <kbd>Ctrl</kbd>+<kbd>Z</kbd> las deshace.</p>',
            hRulesT: 'Las reglas',
            hRulesB: '<p>Reglas tomadas de los wikis de las comunidades de Estados Unidos, Canadá, Reino Unido, Irlanda, Australia, Nueva Zelanda, Sudáfrica y Francia: palabras cortas en minúsculas (FR: de, la, du…), siglas y números de ruta sin cambios (D70, I-35E, SR-12, BUS), ordinales (1st, 1er), Mc (McDonald)…</p><p>Los nombres TODO EN MAYÚSCULAS se reescriben palabra por palabra. En los nombres mixtos solo se corrigen las palabras que quedaron en minúsculas: «Chemin des luzes» → «Chemin des Luzes».</p><p>Chequia y Quebec: la escritura oficial no se puede adivinar. Otros países: aún no hay reglas. En ambos casos el script solo avisa y no escribe nada.</p>',
            hTrickT: 'Por qué un espacio final',
            hTrickB: '<p>WME no distingue mayúsculas al reencontrar un nombre de calle al guardar: renombrado «Rue de Laigné», el segmento vuelve a «Rue de laigné». El script escribe por eso el nuevo nombre seguido de un espacio, que WME quita al guardar. Es el truco que los editores hacen a mano; Waze no lo documenta.</p>',
            hCityT: 'Ciudades',
            hCityB: '<p>El script nunca crea una ciudad. Si hay cargada una ciudad con la escritura correcta, propone asignarle la vía. Si no, le dice que consulte a su coordinador: renombrar una ciudad requiere un coordinador nacional, y un simple cambio de mayúsculas puede requerir al personal de Waze.</p>',
            hKeysT: 'Teclado',
            hKeysB: '<p>Un atajo aparece <b>sin tecla</b> en Ajustes › Atajos de teclado. Asígnele la que quiera.</p>',
            sbFoot: 'El script solo escribe en el mapa cuando hace clic en Aplicar, y nunca guarda.',
            forcee: nom => 'Reglas impuestas en la pestaña Scripts: ' + nom + '.',
            piste: 'Pista: ',
            barV: n => n + ' por revisar',
            noteSignaler: 'Aquí la escritura oficial no se puede adivinar: el script solo avisa. Revise cada nombre en la fuente oficial.',
            sansFiche: 'Aún no hay reglas para este país: el script solo avisa. Revise cada nombre y corríjalo a mano si hace falta.',
            alInvisible: 'El nombre contiene un carácter invisible (espacio de ancho cero, guion condicional…): el script no lo toca. Vuelva a escribir el nombre a mano.',
            alAbrev: 'Abreviatura prohibida por el wiki francés (St, Ste, Dr, Mgr, Bd): escriba la palabra completa. Desmarcada.',
            alArticle: '«Le», «La» o «Les» justo después del tipo de vía se toma como parte de un nombre propio (La Fayette) y conserva la mayúscula: revise.',
            alAmbigu: 'Al inicio de un nombre, «St» significa Street y «St.» Saint (igual Dr / Dr., Ft, Mt): el script no puede decidir. Corrija a mano. Desmarcada.',
            espaceRetire: 'Waze quitó el espacio final al crear la calle: la escritura ya no se puede corregir así. No se modificó ningún segmento; Ctrl+Z quita la calle preparada.',
            annulePrep: 'Ctrl+Z quita lo que se preparó.',
            aucunSeg: 'No se modificó ningún segmento.',
            echecs: (n, m) => (n === 1 ? '1 segmento con error' : n + ' segmentos con error') + ': ' + m + '.',
            oPetitsH: 'En un nombre mixto, pasar «Rue De La Gare» a «Rue de la Gare» (francés: de, la, du…).',
            oMajH: 'En «Rue du MOULIN» (francés), corregir también «MOULIN». Desactivado por defecto: las mayúsculas suelen ser siglas, y la voz las lee de otro modo.',
            accentsAVerifier: n => (n === 1 ? '1 nombre se escribió' : n + ' nombres se escribieron') + ' sin ninguna tilde: revise las tildes antes de guardar.',
            chargesSeuls: 'Corregido solo en los segmentos cargados: mueva el mapa o aleje el zoom y vuelva a lanzarlo para el resto de la vía.',
            ficheQC: 'Quebec',
            ficheCA: 'Canadá (inglés)',
            ficheDefaut: 'sin reglas para este país (solo aviso)',
            majInstall: 'Instalar',
            majBtn: v => 'La versión ' + v + ' está disponible',
            villeVerif: v => 'La escritura de la ciudad «' + v + '» no se puede adivinar aquí (St / St., Dr / Dr.…): pida a su coordinador que la revise.',
            alTitre: 'El wiki escribe este título con punto (Sgt., Lt., Mr., Sr.): añádalo a mano. Desmarcada.',
            lnkDiscuss: 'Hilo en Discuss',
        },
        it: {
            barLbl: 'Maiuscole',
            barN: n => n === 1 ? '1 correzione' : n + ' correzioni',
            barTip: 'Vedere le correzioni delle maiuscole prima di applicarle',
            titre: 'Correzioni delle maiuscole',
            lPrim: 'Via', lAlt: 'Via alt.',
            nSeg: n => n === 1 ? '1 segmento' : n + ' segmenti',
            rien: 'Niente da correggere nella selezione.',
            fiche: noms => 'Regole: ' + noms,
            alerteAccents: 'Nome in maiuscolo senza alcun accento: il GIS potrebbe averli persi. Controllare gli accenti prima di salvare.',
            villeCoord: (v, b) => 'La città «' + v + '» dovrebbe scriversi «' + b + '», e qui non è caricata alcuna città con questa grafia. Se non esiste, chiedere al proprio coordinatore di far correggere «' + v + '».',
            villeRattache: b => 'Associare alla città esistente «' + b + '»',
            sansDroit: n => n === 1 ? '1 segmento non modificabile (blocco o fuori dalla propria area): ignorato.' : n + ' segmenti non modificabili (blocco o fuori dalla propria area): ignorati.',
            appliquer: 'Applica',
            fermer: 'Chiudi',
            applique: (n, s) => (n === 1 ? '1 nome corretto' : n + ' nomi corretti') + ' su ' + (s === 1 ? '1 segmento' : s + ' segmenti') + '. Niente è salvato: controllare, poi Salva. Lo spazio alla fine del nome è voluto: Waze lo toglie al salvataggio, non cancellarlo.',
            change: 'I nomi sono cambiati dopo l\'anteprima: riaprire l\'anteprima.',
            erreur: m => 'Non applicato: ' + m,
            enCours: 'Applicazione in corso…',
            sc: 'Mostrare le correzioni delle maiuscole della selezione',
            sbHint: 'Corregge le maiuscole dei nomi di via e di città dei segmenti selezionati — nomi TUTTI IN MAIUSCOLO o parole rimaste in minuscolo — secondo le regole di ogni paese. Prima un\'anteprima; niente viene salvato al posto vostro.',
            sbOpts: 'Opzioni',
            oVoie: 'Tutta la strada (segmenti caricati)', oVoieH: 'Applicare a tutti i segmenti caricati con lo stesso nome di via, non solo alla selezione.',
            oMaj: 'Parole in maiuscolo nei nomi misti',
            oPetits: 'Parole brevi in minuscolo',
            oPays: 'Regole', oPaysAuto: 'Paese del segmento',
            sbHelp: 'Aiuto',
            hHowT: 'Funzionamento',
            hHowB: '<p>Selezionare uno o più segmenti: se un nome è da correggere, sotto l\'intestazione del segmento compare una riga <b>Maiuscole</b>. Cliccare per vedere l\'anteprima, togliere la spunta a ciò che non si vuole, poi <b>Applica</b>.</p><p>Niente viene salvato: le correzioni attendono nel pulsante Salva, e <kbd>Ctrl</kbd>+<kbd>Z</kbd> le annulla.</p>',
            hRulesT: 'Le regole',
            hRulesB: '<p>Regole prese dai wiki delle comunità di Stati Uniti, Canada, Regno Unito, Irlanda, Australia, Nuova Zelanda, Sudafrica e Francia: parole brevi in minuscolo (FR: de, la, du…), sigle e numeri di strada invariati (D70, I-35E, SR-12, BUS), ordinali (1st, 1er), Mc (McDonald)…</p><p>I nomi TUTTI IN MAIUSCOLO sono riscritti parola per parola. Nei nomi misti si correggono solo le parole rimaste in minuscolo: «Chemin des luzes» → «Chemin des Luzes».</p><p>Cechia e Québec: la grafia ufficiale non si può indovinare. Altri paesi: ancora nessuna regola. In entrambi i casi lo script si limita a segnalare e non scrive nulla.</p>',
            hTrickT: 'Perché uno spazio finale',
            hTrickB: '<p>WME ignora le maiuscole quando ritrova un nome di via al salvataggio: rinominato «Rue de Laigné», il segmento ricade su «Rue de laigné». Lo script scrive quindi il nuovo nome seguito da uno spazio, che WME toglie al salvataggio. È il trucco che gli editor fanno a mano; Waze non lo documenta.</p>',
            hCityT: 'Le città',
            hCityB: '<p>Lo script non crea mai una città. Se è caricata una città con la grafia giusta, propone di associarle la strada. Altrimenti invita a rivolgersi al proprio coordinatore: rinominare una città richiede un coordinatore nazionale, e un semplice cambio di maiuscole può richiedere lo staff di Waze.</p>',
            hKeysT: 'Tastiera',
            hKeysB: '<p>Una scorciatoia è elencata <b>senza tasto</b> in Impostazioni › Scorciatoie da tastiera. Assegnarle quello voluto.</p>',
            sbFoot: 'Lo script scrive sulla mappa solo quando si clicca su Applica, e non salva mai.',
            forcee: nom => 'Regole imposte nella scheda Script: ' + nom + '.',
            piste: 'Suggerimento: ',
            barV: n => n + ' da controllare',
            noteSignaler: 'Qui la grafia ufficiale non si può indovinare: lo script si limita a segnalare. Controllare ogni nome sulla fonte ufficiale.',
            sansFiche: 'Non ci sono ancora regole per questo paese: lo script si limita a segnalare. Controllare ogni nome e correggerlo a mano se serve.',
            alInvisible: 'Il nome contiene un carattere invisibile (spazio a larghezza zero, trattino facoltativo…): lo script non lo tocca. Riscrivere il nome a mano.',
            alAbrev: 'Abbreviazione vietata dal wiki francese (St, Ste, Dr, Mgr, Bd): scrivere la parola per intero. Non spuntata.',
            alArticle: '«Le», «La» o «Les» subito dopo il tipo di strada è preso per parte di un nome proprio (La Fayette) e resta maiuscolo: controllare.',
            alAmbigu: 'All\'inizio di un nome, «St» significa Street e «St.» Saint (così Dr / Dr., Ft, Mt): lo script non può decidere. Correggere a mano. Non spuntata.',
            espaceRetire: 'Waze ha tolto lo spazio finale già alla creazione della strada: la grafia non si può più correggere così. Nessun segmento è stato modificato; Ctrl+Z rimuove la strada preparata.',
            annulePrep: 'Ctrl+Z rimuove ciò che è stato preparato.',
            aucunSeg: 'Nessun segmento è stato modificato.',
            echecs: (n, m) => (n === 1 ? '1 segmento non riuscito' : n + ' segmenti non riusciti') + ': ' + m + '.',
            oPetitsH: 'In un nome misto, passare «Rue De La Gare» a «Rue de la Gare» (francese: de, la, du…).',
            oMajH: 'In «Rue du MOULIN» (francese), correggere anche «MOULIN». Disattivato per impostazione predefinita: le maiuscole sono spesso sigle, e la voce le legge diversamente.',
            accentsAVerifier: n => (n === 1 ? '1 nome è stato scritto' : n + ' nomi sono stati scritti') + ' senza alcun accento: controllare gli accenti prima di salvare.',
            chargesSeuls: 'Corretto solo sui segmenti caricati: spostare la mappa o ridurre lo zoom, poi rilanciare per il resto della strada.',
            ficheQC: 'Québec',
            ficheCA: 'Canada (inglese)',
            ficheDefaut: 'nessuna regola per questo paese (solo segnalazione)',
            majInstall: 'Installa',
            majBtn: v => 'La versione ' + v + ' è disponibile',
            villeVerif: v => 'La grafia della città «' + v + '» qui non si può indovinare (St / St., Dr / Dr.…): chiedere al proprio coordinatore di verificarla.',
            alTitre: 'Il wiki scrive questo titolo con il punto (Sgt., Lt., Mr., Sr.): aggiungerlo a mano. Non spuntata.',
            lnkDiscuss: 'Discussione su Discuss',
        },
        'pt-BR': {
            barLbl: 'Maiúsculas',
            barN: n => n === 1 ? '1 correção' : n + ' correções',
            barTip: 'Ver as correções de maiúsculas antes de aplicá-las',
            titre: 'Correções de maiúsculas',
            lPrim: 'Rua', lAlt: 'Rua alt.',
            nSeg: n => n === 1 ? '1 segmento' : n + ' segmentos',
            rien: 'Nada a corrigir na seleção.',
            fiche: noms => 'Regras: ' + noms,
            alerteAccents: 'Nome em maiúsculas sem nenhum acento: o SIG pode tê-los perdido. Confira os acentos antes de salvar.',
            villeCoord: (v, b) => 'A cidade “' + v + '” deveria ser escrita “' + b + '”, e nenhuma cidade com essa grafia está carregada aqui. Se ela não existir, peça ao seu coordenador para corrigir “' + v + '”.',
            villeRattache: b => 'Associar à cidade existente “' + b + '”',
            sansDroit: n => n === 1 ? '1 segmento que você não pode editar (bloqueio ou fora da sua área): ignorado.' : n + ' segmentos que você não pode editar (bloqueio ou fora da sua área): ignorados.',
            appliquer: 'Aplicar',
            fermer: 'Fechar',
            applique: (n, s) => (n === 1 ? '1 nome corrigido' : n + ' nomes corrigidos') + ' em ' + (s === 1 ? '1 segmento' : s + ' segmentos') + '. Nada foi salvo: confira e depois Salvar. O espaço no fim do nome é proposital: o Waze o remove ao salvar, não o apague.',
            change: 'Os nomes mudaram desde a prévia: abra a prévia de novo.',
            erreur: m => 'Não aplicado: ' + m,
            enCours: 'Aplicando…',
            sc: 'Mostrar as correções de maiúsculas da seleção',
            sbHint: 'Corrige as maiúsculas dos nomes de rua e de cidade dos segmentos selecionados — nomes TODO EM MAIÚSCULAS ou palavras que ficaram em minúsculas — segundo as regras de cada país. Primeiro uma prévia; nada é salvo no seu lugar.',
            sbOpts: 'Opções',
            oVoie: 'Via inteira (segmentos carregados)', oVoieH: 'Aplicar a todos os segmentos carregados com o mesmo nome de rua, não só à seleção.',
            oMaj: 'Palavras em maiúsculas em nomes mistos',
            oPetits: 'Palavras curtas em minúsculas',
            oPays: 'Regras', oPaysAuto: 'País do segmento',
            sbHelp: 'Ajuda',
            hHowT: 'Como funciona',
            hHowB: '<p>Selecione um ou mais segmentos: se um nome precisa de correção, aparece uma linha <b>Maiúsculas</b> sob o cabeçalho do segmento. Clique para ver a prévia, desmarque o que não quiser e depois <b>Aplicar</b>.</p><p>Nada é salvo: as correções esperam no botão Salvar, e <kbd>Ctrl</kbd>+<kbd>Z</kbd> as desfaz.</p>',
            hRulesT: 'As regras',
            hRulesB: '<p>Regras tiradas dos wikis das comunidades dos Estados Unidos, Canadá, Reino Unido, Irlanda, Austrália, Nova Zelândia, África do Sul e França: palavras curtas em minúsculas (FR: de, la, du…), siglas e números de rodovia sem mudança (D70, I-35E, SR-12, BUS), ordinais (1st, 1er), Mc (McDonald)…</p><p>Nomes TODO EM MAIÚSCULAS são reescritos palavra por palavra. Em nomes mistos, só as palavras que ficaram em minúsculas são corrigidas: “Chemin des luzes” → “Chemin des Luzes”.</p><p>Tchéquia e Quebec: a grafia oficial não pode ser adivinhada. Outros países: ainda não há regras. Nos dois casos, o script só avisa e não escreve nada.</p>',
            hTrickT: 'Por que um espaço no final',
            hTrickB: '<p>O WME ignora maiúsculas ao reencontrar um nome de rua ao salvar: renomeado para “Rue de Laigné”, o segmento volta a “Rue de laigné”. Por isso o script escreve o novo nome seguido de um espaço, que o WME remove ao salvar. É o truque que os editores fazem à mão; a Waze não o documenta.</p>',
            hCityT: 'Cidades',
            hCityB: '<p>O script nunca cria uma cidade. Se uma cidade com a grafia certa estiver carregada, ele propõe associar a via a ela. Senão, pede que você fale com seu coordenador: renomear uma cidade exige um coordenador nacional, e uma simples mudança de maiúsculas pode exigir a equipe da Waze.</p>',
            hKeysT: 'Teclado',
            hKeysB: '<p>Um atalho aparece <b>sem tecla</b> em Configurações › Atalhos de teclado. Atribua a tecla que quiser.</p>',
            sbFoot: 'O script só escreve no mapa quando você clica em Aplicar, e nunca salva.',
            forcee: nom => 'Regras impostas na aba Scripts: ' + nom + '.',
            piste: 'Sugestão: ',
            barV: n => n + ' a verificar',
            noteSignaler: 'Aqui a grafia oficial não pode ser adivinhada: o script só avisa. Confira cada nome na fonte oficial.',
            sansFiche: 'Ainda não há regras para este país: o script só avisa. Confira cada nome e corrija à mão, se for preciso.',
            alInvisible: 'O nome contém um caractere invisível (espaço de largura zero, hífen condicional…): o script não mexe. Digite o nome de novo à mão.',
            alAbrev: 'Abreviação proibida pelo wiki francês (St, Ste, Dr, Mgr, Bd): escreva a palavra por extenso. Desmarcada.',
            alArticle: '“Le”, “La” ou “Les” logo após o tipo de via é tomado como parte de um nome próprio (La Fayette) e mantém a maiúscula: confira.',
            alAmbigu: 'No início de um nome, “St” quer dizer Street e “St.” Saint (o mesmo para Dr / Dr., Ft, Mt): o script não pode decidir. Corrija à mão. Desmarcada.',
            espaceRetire: 'O Waze removeu o espaço final já na criação da rua: a grafia não pode mais ser corrigida assim. Nenhum segmento foi alterado; Ctrl+Z remove a rua preparada.',
            annulePrep: 'Ctrl+Z remove o que foi preparado.',
            aucunSeg: 'Nenhum segmento foi alterado.',
            echecs: (n, m) => (n === 1 ? '1 segmento com falha' : n + ' segmentos com falha') + ': ' + m + '.',
            oPetitsH: 'Num nome misto, passar “Rue De La Gare” para “Rue de la Gare” (francês: de, la, du…).',
            oMajH: 'Em “Rue du MOULIN” (francês), corrigir também “MOULIN”. Desligado por padrão: maiúsculas costumam ser siglas, e a voz as lê de outro jeito.',
            accentsAVerifier: n => (n === 1 ? '1 nome foi escrito' : n + ' nomes foram escritos') + ' sem nenhum acento: confira os acentos antes de salvar.',
            chargesSeuls: 'Corrigido só nos segmentos carregados: mova o mapa ou diminua o zoom e rode de novo para o resto da via.',
            ficheQC: 'Quebec',
            ficheCA: 'Canadá (inglês)',
            ficheDefaut: 'sem regras para este país (só aviso)',
            majInstall: 'Instalar',
            majBtn: v => 'A versão ' + v + ' está disponível',
            villeVerif: v => 'A grafia da cidade “' + v + '” não pode ser adivinhada aqui (St / St., Dr / Dr.…): peça ao seu coordenador para verificá-la.',
            alTitre: 'O wiki escreve este título com ponto (Sgt., Lt., Mr., Sr.): acrescente-o à mão. Desmarcada.',
            lnkDiscuss: 'Tópico no Discuss',
        },
        'pt-PT': {
            barLbl: 'Maiúsculas',
            barN: n => n === 1 ? '1 correção' : n + ' correções',
            barTip: 'Ver as correções de maiúsculas antes de as aplicar',
            titre: 'Correções de maiúsculas',
            lPrim: 'Rua', lAlt: 'Rua alt.',
            nSeg: n => n === 1 ? '1 segmento' : n + ' segmentos',
            rien: 'Nada a corrigir na seleção.',
            fiche: noms => 'Regras: ' + noms,
            alerteAccents: 'Nome em maiúsculas sem qualquer acento: o SIG pode tê-los perdido. Verifique os acentos antes de guardar.',
            villeCoord: (v, b) => 'A localidade «' + v + '» deveria escrever-se «' + b + '», e nenhuma localidade com essa grafia está carregada aqui. Se não existir, peça ao seu coordenador que corrija «' + v + '».',
            villeRattache: b => 'Associar à localidade existente «' + b + '»',
            sansDroit: n => n === 1 ? '1 segmento que não pode editar (bloqueio ou fora da sua área): ignorado.' : n + ' segmentos que não pode editar (bloqueio ou fora da sua área): ignorados.',
            appliquer: 'Aplicar',
            fermer: 'Fechar',
            applique: (n, s) => (n === 1 ? '1 nome corrigido' : n + ' nomes corrigidos') + ' em ' + (s === 1 ? '1 segmento' : s + ' segmentos') + '. Nada foi guardado: verifique e depois Guardar. O espaço no fim do nome é intencional: o Waze retira-o ao guardar, não o apague.',
            change: 'Os nomes mudaram desde a pré-visualização: abra-a novamente.',
            erreur: m => 'Não aplicado: ' + m,
            enCours: 'A aplicar…',
            sc: 'Mostrar as correções de maiúsculas da seleção',
            sbHint: 'Corrige as maiúsculas dos nomes de rua e de localidade dos segmentos selecionados — nomes TUDO EM MAIÚSCULAS ou palavras que ficaram em minúsculas — segundo as regras de cada país. Primeiro uma pré-visualização; nada é guardado no seu lugar.',
            sbOpts: 'Opções',
            oVoie: 'Via inteira (segmentos carregados)', oVoieH: 'Aplicar a todos os segmentos carregados com o mesmo nome de rua, não só à seleção.',
            oMaj: 'Palavras em maiúsculas em nomes mistos',
            oPetits: 'Palavras curtas em minúsculas',
            oPays: 'Regras', oPaysAuto: 'País do segmento',
            sbHelp: 'Ajuda',
            hHowT: 'Funcionamento',
            hHowB: '<p>Selecione um ou mais segmentos: se um nome precisar de correção, aparece uma linha <b>Maiúsculas</b> sob o cabeçalho do segmento. Clique para ver a pré-visualização, desmarque o que não quiser e depois <b>Aplicar</b>.</p><p>Nada é guardado: as correções aguardam no botão Guardar, e <kbd>Ctrl</kbd>+<kbd>Z</kbd> anula-as.</p>',
            hRulesT: 'As regras',
            hRulesB: '<p>Regras retiradas dos wikis das comunidades dos Estados Unidos, Canadá, Reino Unido, Irlanda, Austrália, Nova Zelândia, África do Sul e França: palavras curtas em minúsculas (FR: de, la, du…), siglas e números de estrada inalterados (D70, I-35E, SR-12, BUS), ordinais (1st, 1er), Mc (McDonald)…</p><p>Os nomes TUDO EM MAIÚSCULAS são reescritos palavra a palavra. Nos nomes mistos só se corrigem as palavras que ficaram em minúsculas: «Chemin des luzes» → «Chemin des Luzes».</p><p>Chéquia e Quebeque: a grafia oficial não pode ser adivinhada. Outros países: ainda não há regras. Nos dois casos, o script limita-se a avisar e não escreve nada.</p>',
            hTrickT: 'Porquê um espaço no fim',
            hTrickB: '<p>O WME ignora as maiúsculas ao reencontrar um nome de rua ao guardar: renomeado «Rue de Laigné», o segmento volta a «Rue de laigné». Por isso o script escreve o novo nome seguido de um espaço, que o WME retira ao guardar. É o truque que os editores fazem à mão; a Waze não o documenta.</p>',
            hCityT: 'Localidades',
            hCityB: '<p>O script nunca cria uma localidade. Se estiver carregada uma localidade com a grafia certa, propõe associar-lhe a via. Caso contrário, pede-lhe que fale com o seu coordenador: mudar o nome de uma localidade exige um coordenador nacional, e uma simples mudança de maiúsculas pode exigir a equipa da Waze.</p>',
            hKeysT: 'Teclado',
            hKeysB: '<p>Um atalho aparece <b>sem tecla</b> em Definições › Atalhos de teclado. Atribua-lhe a tecla que quiser.</p>',
            sbFoot: 'O script só escreve no mapa quando clica em Aplicar, e nunca guarda.',
            forcee: nom => 'Regras impostas no separador Scripts: ' + nom + '.',
            piste: 'Sugestão: ',
            barV: n => n + ' a verificar',
            noteSignaler: 'Aqui a grafia oficial não pode ser adivinhada: o script limita-se a avisar. Verifique cada nome na fonte oficial.',
            sansFiche: 'Ainda não há regras para este país: o script limita-se a avisar. Verifique cada nome e corrija-o à mão, se for preciso.',
            alInvisible: 'O nome contém um carácter invisível (espaço de largura zero, hífen condicional…): o script não lhe toca. Escreva o nome de novo à mão.',
            alAbrev: 'Abreviatura proibida pelo wiki francês (St, Ste, Dr, Mgr, Bd): escreva a palavra por extenso. Desmarcada.',
            alArticle: '«Le», «La» ou «Les» logo após o tipo de via é tomado como parte de um nome próprio (La Fayette) e mantém a maiúscula: verifique.',
            alAmbigu: 'No início de um nome, «St» quer dizer Street e «St.» Saint (o mesmo para Dr / Dr., Ft, Mt): o script não pode decidir. Corrija à mão. Desmarcada.',
            espaceRetire: 'O Waze removeu o espaço final logo na criação da rua: a grafia já não pode ser corrigida assim. Nenhum segmento foi alterado; Ctrl+Z remove a rua preparada.',
            annulePrep: 'Ctrl+Z remove o que foi preparado.',
            aucunSeg: 'Nenhum segmento foi alterado.',
            echecs: (n, m) => (n === 1 ? '1 segmento com falha' : n + ' segmentos com falha') + ': ' + m + '.',
            oPetitsH: 'Num nome misto, passar «Rue De La Gare» para «Rue de la Gare» (francês: de, la, du…).',
            oMajH: 'Em «Rue du MOULIN» (francês), corrigir também «MOULIN». Desligado por omissão: as maiúsculas são muitas vezes siglas, e a voz lê-as de outra forma.',
            accentsAVerifier: n => (n === 1 ? '1 nome foi escrito' : n + ' nomes foram escritos') + ' sem qualquer acento: verifique os acentos antes de guardar.',
            chargesSeuls: 'Corrigido só nos segmentos carregados: mova o mapa ou afaste o zoom e volte a correr para o resto da via.',
            ficheQC: 'Quebeque',
            ficheCA: 'Canadá (inglês)',
            ficheDefaut: 'sem regras para este país (só aviso)',
            majInstall: 'Instalar',
            majBtn: v => 'A versão ' + v + ' está disponível',
            villeVerif: v => 'A grafia da localidade «' + v + '» não pode ser adivinhada aqui (St / St., Dr / Dr.…): peça ao seu coordenador que a verifique.',
            alTitre: 'O wiki escreve este título com ponto (Sgt., Lt., Mr., Sr.): acrescente-o à mão. Desmarcada.',
            lnkDiscuss: 'Tópico no Discuss',
        },
        he: {
            barLbl: 'אותיות',
            barN: n => n === 1 ? 'תיקון אחד' : n + ' תיקונים',
            barTip: 'הצגת תיקוני האותיות הגדולות לפני החלתם',
            titre: 'תיקוני אותיות גדולות',
            lPrim: 'רחוב', lAlt: 'רחוב חלופי',
            nSeg: n => n === 1 ? 'מקטע אחד' : n + ' מקטעים',
            rien: 'אין מה לתקן בבחירה.',
            fiche: noms => 'כללים: ' + noms,
            alerteAccents: 'שם באותיות גדולות ללא סימנים דיאקריטיים (כמו é או à): ייתכן שה-GIS השמיט אותם. בדקו לפני השמירה.',
            villeCoord: (v, b) => 'העיר "' + v + '" צריכה להיכתב "' + b + '", ואין כאן עיר טעונה בכתיב הזה. אם היא לא קיימת, פנו לרכז שלכם כדי לתקן את "' + v + '".',
            villeRattache: b => 'שיוך לעיר הקיימת "' + b + '"',
            sansDroit: n => n === 1 ? 'מקטע אחד שאינכם יכולים לערוך (נעילה או מחוץ לאזור שלכם): דולג.' : n + ' מקטעים שאינכם יכולים לערוך (נעילה או מחוץ לאזור שלכם): דולגו.',
            appliquer: 'החלה',
            fermer: 'סגירה',
            applique: (n, s) => (n === 1 ? 'תוקן שם אחד' : 'תוקנו ' + n + ' שמות') + ' ב-' + (s === 1 ? 'מקטע אחד' : s + ' מקטעים') + '. שום דבר לא נשמר: בדקו ואז שמרו. הרווח בסוף השם מכוון: Waze מסיר אותו בשמירה, אל תמחקו אותו.',
            change: 'השמות השתנו מאז התצוגה המקדימה: פתחו אותה מחדש.',
            erreur: m => 'לא הוחל: ' + m,
            enCours: 'מחיל…',
            sc: 'הצגת תיקוני האותיות הגדולות של הבחירה',
            sbHint: 'מתקן אותיות גדולות וקטנות בשמות הרחובות והערים של המקטעים הנבחרים — שמות באותיות גדולות בלבד, או מילים שנשארו באותיות קטנות — לפי הכללים של כל מדינה. קודם תצוגה מקדימה; שום דבר לא נשמר במקומכם.',
            sbOpts: 'אפשרויות',
            oVoie: 'כל הדרך (מקטעים טעונים)', oVoieH: 'החלה על כל המקטעים הטעונים שנושאים את אותו שם רחוב, לא רק על הבחירה.',
            oMaj: 'מילים באותיות גדולות בשם מעורב',
            oPetits: 'מילים קצרות באותיות קטנות',
            oPays: 'כללים', oPaysAuto: 'מדינת המקטע',
            sbHelp: 'עזרה',
            hHowT: 'איך זה עובד',
            hHowB: '<p>בחרו מקטע אחד או יותר: אם יש שם לתיקון, מופיעה שורת <b>אותיות</b> מתחת לכותרת המקטע. לחצו כדי לראות את התצוגה המקדימה, בטלו את מה שאינכם רוצים, ואז <b>החלה</b>.</p><p>שום דבר לא נשמר: התיקונים ממתינים בכפתור השמירה, ו-<kbd>Ctrl</kbd>+<kbd>Z</kbd> מבטל אותם.</p>',
            hRulesT: 'הכללים',
            hRulesB: '<p>כללים מתוך הוויקי של הקהילות בארצות הברית, קנדה, בריטניה, אירלנד, אוסטרליה, ניו זילנד, דרום אפריקה וצרפת: מילים קצרות באותיות קטנות (FR: de, la, du…), ראשי תיבות ומספרי כבישים ללא שינוי (D70, I-35E, SR-12, BUS), מספרים סודרים (1st, 1er), Mc (McDonald)…</p><p>שמות באותיות גדולות בלבד נכתבים מחדש מילה אחר מילה. בשמות מעורבים מתוקנות רק המילים שנשארו באותיות קטנות: <bdi>Chemin des luzes</bdi> ← <bdi>Chemin des Luzes</bdi>.</p><p>צ׳כיה וקוויבק: אי אפשר לנחש את הכתיב הרשמי. שאר המדינות: עדיין אין כללים. בשני המקרים הסקריפט רק מדווח ואינו כותב דבר.</p>',
            hTrickT: 'למה רווח בסוף',
            hTrickB: '<p>WME מתעלם מאותיות גדולות וקטנות כשהוא מוצא שם רחוב בשמירה: אחרי שינוי השם ל-<bdi>Rue de Laigné</bdi>, המקטע חוזר ל-<bdi>Rue de laigné</bdi>. לכן הסקריפט כותב את השם החדש עם רווח בסוף, ש-WME מסיר בשמירה. זה הטריק שעורכים עושים ידנית; Waze לא מתעדת אותו.</p>',
            hCityT: 'ערים',
            hCityB: '<p>הסקריפט לעולם לא יוצר עיר. אם טעונה עיר בכתיב הנכון, הוא מציע לשייך אליה את הדרך. אחרת הוא מבקש שתפנו לרכז שלכם: שינוי שם של עיר דורש מנהל מדינה, ותיקון של אותיות גדולות וקטנות בלבד עשוי לדרוש את צוות Waze.</p>',
            hKeysT: 'מקלדת',
            hKeysB: '<p>קיצור דרך אחד מופיע <b>ללא מקש</b> בהגדרות › קיצורי מקלדת. הקצו לו את המקש שתרצו.</p>',
            sbFoot: 'הסקריפט כותב במפה רק כשלוחצים על החלה, ולעולם לא שומר.',
            forcee: nom => 'כללים שנכפו בלשונית הסקריפטים: ' + nom + '.',
            piste: 'הצעה: ',
            barV: n => n + ' לבדיקה',
            noteSignaler: 'כאן אי אפשר לנחש את הכתיב הרשמי: הסקריפט רק מדווח. בדקו כל שם מול המקור הרשמי.',
            sansFiche: 'עדיין אין כללים למדינה זו: הסקריפט רק מדווח. בדקו כל שם ותקנו אותו ידנית במידת הצורך.',
            alInvisible: 'השם מכיל תו בלתי נראה (רווח ברוחב אפס, מקף רך…): הסקריפט לא נוגע בו. הקלידו את השם מחדש ידנית.',
            alAbrev: 'קיצור שהוויקי הצרפתי אוסר (St, Ste, Dr, Mgr, Bd): כתבו את המילה במלואה. לא מסומן.',
            alArticle: '«Le», «La» או «Les» מיד אחרי סוג הדרך נחשב לחלק משם פרטי (La Fayette) ונשאר באות גדולה: בדקו.',
            alAmbigu: 'בתחילת שם, «St» פירושו Street ו־«St.» פירושו Saint (וכך גם Dr / Dr., Ft, Mt): הסקריפט אינו יכול להכריע. תקנו ידנית. לא מסומן.',
            espaceRetire: 'Waze הסיר את הרווח שבסוף השם כבר ביצירת הרחוב: אי אפשר עוד לתקן כך את הכתיב. אף מקטע לא שונה; Ctrl+Z מסיר את הרחוב שהוכן.',
            annulePrep: 'Ctrl+Z מסיר את מה שהוכן.',
            aucunSeg: 'אף מקטע לא שונה.',
            echecs: (n, m) => (n === 1 ? 'מקטע אחד נכשל' : n + ' מקטעים נכשלו') + ': ' + m + '.',
            oPetitsH: 'בשם מעורב, להפוך "Rue De La Gare" ל-"Rue de la Gare" (צרפתית: de, la, du…).',
            oMajH: 'ב-"Old MILL Rd", לתקן גם את "MILL". כבוי כברירת מחדל: אותיות גדולות הן לעיתים קרובות ראשי תיבות, והקול מקריא אותן אחרת.',
            accentsAVerifier: n => (n === 1 ? 'שם אחד נכתב' : n + ' שמות נכתבו') + ' ללא סימנים דיאקריטיים: בדקו אותם לפני השמירה.',
            chargesSeuls: 'תוקן רק במקטעים הטעונים: הזיזו את המפה או הקטינו את התצוגה, ואז הפעילו שוב לשאר הדרך.',
            ficheQC: 'קוויבק',
            ficheCA: 'קנדה (אנגלית)',
            ficheDefaut: 'אין כללים למדינה זו (דיווח בלבד)',
            majInstall: 'התקנה',
            majBtn: v => 'גרסה ' + v + ' זמינה',
            villeVerif: v => 'אי אפשר לנחש כאן את הכתיב של העיר "' + v + '" (St / St., Dr / Dr.…): בקשו מהרכז שלכם לבדוק אותו.',
            alTitre: 'הוויקי כותב תואר זה עם נקודה (Sgt., Lt., Mr., Sr.): הוסיפו אותה ידנית. לא מסומן.',
            lnkDiscuss: 'שרשור ב-Discuss',
        },
    };

    let _lang = 'en';
    const t = (key, ...args) => {
        const v = (DICO[_lang] && DICO[_lang][key]) || DICO.en[key];
        if (typeof v === 'function') return v(...args);
        return v !== undefined ? v : key;
    };
    const detectLang = async () => {
        try {
            let code = '';
            try { code = (await sdk.Settings.getLocale())?.localeCode || ''; } catch (e) { }
            const l = (code || document.documentElement.lang || navigator.language || 'en').toLowerCase();
            // Seul « br » distingue le portugais brésilien ; d'anciens navigateurs rendent « iw » pour l'hébreu.
            if (l.startsWith('pt')) return l.includes('br') ? 'pt-BR' : 'pt-PT';
            if (l.startsWith('he') || l.startsWith('iw')) return 'he';
            return ['fr', 'de', 'es', 'it', 'en'].find(c => l.startsWith(c)) || 'en';
        } catch (e) { return 'en'; }
    };

    // Liste blanche typée : une option inconnue ou une fiche disparue retombe sur la valeur par défaut.
    function lireOpts() {
        const o = Object.assign({}, OPTS_DEF);
        let lu = {};
        try { lu = JSON.parse(localStorage.getItem(OPTS_KEY) || '{}') || {}; } catch (e) { }
        for (const k of ['voieEntiere', 'majusculesInconnues', 'forcerPetitsMots']) if (typeof lu[k] === 'boolean') o[k] = lu[k];
        if (lu.pays === 'auto' || (typeof lu.pays === 'string' && Object.prototype.hasOwnProperty.call(FICHES, lu.pays))) o.pays = lu.pays;
        else if (lu.pays !== undefined) log('règles « ' + lu.pays + ' » inconnues : pays du segment');
        return o;
    }
    function ecrireOpts() { try { localStorage.setItem(OPTS_KEY, JSON.stringify(opts)); } catch (e) { } }

    // =====================================================================
    //  LE PLAN : ce qu'il y a à corriger dans la sélection (ou la voie)
    // =====================================================================

    async function idsSelection() {
        try {
            const s = await sdk.Editing.getSelection();
            if (!s || s.objectType !== 'segment' || !s.ids || !s.ids.length) return [];
            return s.ids.map(Number);
        } catch (e) { logUneFois('selection', 'sélection illisible : ' + e.message); return []; }
    }

    // Un calcul dépassé (nouvelle sélection, nouveau rendu) s'arrête au prochain appel au SDK.
    const ABANDON = { abandon: true };
    async function calculerPlan(g) {
        const vivant = () => { if (g !== undefined && g !== generation) throw ABANDON; };
        const sel = await idsSelection();
        if (!sel.length) return null;
        const M = sdk.DataModel;
        // Les adresses des seuls segments SÉLECTIONNÉS : rues, villes et pays. La rue vide (segment
        // sans nom) n'entre pas : elle ferait balayer tous les segments sans nom chargés.
        const rues = new Map();       // streetId → { street, city, role, segs:Set, fiche }
        const fiches = new Map();     // code → fiche
        const ficheDe = (abbr, region) => {
            const fi = opts.pays !== 'auto' ? ficheParCode(opts.pays, region) : choisirFiche(abbr, region);
            if (!fiches.has(fi.code)) fiches.set(fi.code, fi);
            return fiches.get(fi.code);
        };
        for (const id of sel) {
            const ad = await M.Segments.getAddress({ segmentId: id });
            vivant();
            if (!ad) continue;
            // Une fiche PAR RUE, d'après le pays (et l'État) du segment qui la porte : une sélection
            // à cheval sur une frontière ne prête pas les règles d'un pays à l'autre (audit rang 11).
            const fiche = ficheDe(ad.country && ad.country.abbr, ad.state && ad.state.name);
            const paires = [{ st: ad.street, ci: ad.city, role: 'prim' }].concat((ad.altStreets || []).map(a => ({ st: a.street, ci: a.city, role: 'alt' })));
            for (const p of paires) {
                if (!p.st || p.st.isEmpty || !p.st.name) continue;
                let r = rues.get(p.st.id);
                if (!r) { r = { street: p.st, city: p.ci, role: p.role, segs: new Set(), fiche }; rues.set(p.st.id, r); }
                r.segs.add(id);
            }
        }
        // « Toute la voie » : les segments chargés qui portent ces rues (une rue appartient à une
        // ville, donc à un pays : la fiche de la rue vaut pour eux).
        if (opts.voieEntiere && rues.size) {
            const tous = await M.Segments.getAll();
            vivant();
            for (const s of tous) {
                for (const sid of [s.primaryStreetId].concat(s.alternateStreetIds || [])) {
                    const r = rues.get(sid);
                    if (r) r.segs.add(s.id);
                }
            }
        }
        const moteurs = new Map();    // code → moteur
        const moteurDe = fi => { if (!moteurs.has(fi.code)) moteurs.set(fi.code, creerMoteur(fi, opts)); return moteurs.get(fi.code); };
        const villes = new Map();     // cityId → { city, texte, change, existante }
        const alertes = new Set();
        const lignes = [];
        for (const [id, r] of rues) {
            const moteur = moteurDe(r.fiche);
            const res = moteur.corriger(r.street.name);
            // Un caractère invisible : rien n'est proposé, la ligne est seulement à vérifier.
            const invisible = res.alertes.includes('invisible');
            // « St / St. » devant un nom ne se devine pas : ligne à vérifier, sans case (constat 11).
            const signale = r.fiche.mode === 'signaler' || invisible || res.alertes.includes('ambigu');
            res.alertes.forEach(a => alertes.add(a));
            // La ville de la rue : bonne casse ? existe-t-elle ? (pas en signalement : rien ne se devine)
            const villeId = r.city ? r.city.id : null;
            let villeCible = villeId;
            if (!signale && r.city && !r.city.isEmpty) {
                let v = villes.get(r.city.id);
                if (!v) {
                    const rc = moteur.corriger(r.city.name);
                    // « ST GEORGE » : aucune graphie proposée, seulement « à vérifier » (constat 8).
                    const douteuse = rc.alertes.some(a => a === 'ambigu' || a === 'abrev' || a === 'titre');
                    v = { city: r.city, texte: rc.texte, change: rc.change, existante: null, douteuse };
                    if (rc.change && !douteuse) {
                        try { v.existante = await M.Cities.getCity({ cityName: rc.texte, stateId: r.city.stateId, countryId: r.city.countryId }); }
                        catch (e) { v.existante = null; logUneFois('ville', 'getCity : ' + e.message); }
                        vivant();
                    }
                    villes.set(r.city.id, v);
                }
                if (v.change && v.existante && v.existante.id !== r.city.id) villeCible = v.existante.id;
            }
            if (!res.change && villeCible === villeId && !invisible) continue;
            const l = { id, role: r.role, avant: r.street.name, apres: res.texte, ville: r.city, villeCible, segs: [...r.segs], fiche: r.fiche, signale, alertes: res.alertes };
            l.cle = cleLigne(l);
            // Une abréviation interdite par le wiki, ou « St » / « St. » en tête, part décochée.
            // Un refus de l'éditeur suit la RUE : si la proposition change (ville cible chargée entre-temps),
            // la ligne reste décochée (audit de la différence, constat 14).
            const refusee = [...choix].some(([k, v]) => !v && k.startsWith(l.id + '|'));
            l.coche = !signale && (choix.has(l.cle) ? choix.get(l.cle) : !refusee && !res.alertes.some(a => a === 'abrev' || a === 'titre'));
            lignes.push(l);
        }
        lignes.sort((a, b) => (a.signale === b.signale ? 0 : a.signale ? 1 : -1) || (a.role === b.role ? 0 : a.role === 'prim' ? -1 : 1) || a.avant.localeCompare(b.avant));
        return { fiches: [...fiches.values()], force: opts.pays !== 'auto', lignes, villes: [...villes.values()].filter(v => v.change), alertes: [...alertes] };
    }

    // =====================================================================
    //  APPLIQUER
    // =====================================================================

    async function appliquer() {
        if (enCours || !plan) return;
        const choisies = plan.lignes.filter(l => l.coche && !l.signale);
        if (!choisies.length) return;
        enCours = true;
        // Une note AVANT la première écriture : la barre reste ouverte jusqu'au compte rendu.
        message(t('enCours'), false);
        try { await ecrire(choisies); }
        // Fin d'écriture : le bouton Appliquer est recalculé (cases encore cochées après un échec, constat 5).
        finally { enCours = false; rendre(); setTimeout(planifierPlacement, 300); }
    }

    const ESPACE = { espace: true };
    async function ecrire(choisies) {
        const M = sdk.DataModel;
        // Les noms n'ont pas bougé depuis l'aperçu : au moins un segment porte encore chaque rue.
        const lus = new Map();
        const lire = async segmentId => { if (!lus.has(segmentId)) lus.set(segmentId, await M.Segments.getById({ segmentId })); return lus.get(segmentId); };
        for (const l of choisies) {
            let porte = false;
            for (const id of l.segs) { const s = await lire(id); if (s && (s.primaryStreetId === l.id || (s.alternateStreetIds || []).includes(l.id))) { porte = true; break; } }
            if (!porte) { message(t('change'), true); return; }
        }
        // 1. Les droits AVANT toute création : un segment illisible ou dont la permission ne se lit
        //    pas vaut un refus (audit rangs 14 et 15).
        const autorises = new Set();
        let refuses = 0, echecs = 0, raison = '';
        for (const segmentId of new Set(choisies.flatMap(l => l.segs))) {
            // Une exception, ou un segment déchargé, vaut un refus d'ÉCRIRE (rang 14), mais compte en
            // échec avec sa raison : ce n'est pas un verrou (constat 15).
            try {
                if (!(await lire(segmentId))) { echecs++; raison = raison || 'segment ' + segmentId + ' déchargé'; continue; }
                if (await M.Segments.hasPermissions({ segmentId })) autorises.add(segmentId); else refuses++;
            } catch (e) { echecs++; raison = raison || e.message; }
        }
        const utiles = choisies.filter(l => l.segs.some(id => autorises.has(id)));
        if (!utiles.length) { message(t('aucunSeg') + (refuses ? ' ' + t('sansDroit', refuses) : '') + (echecs ? ' ' + t('echecs', echecs, raison) : ''), true); return; }
        // 2. Une seule rue cible par (ville, nom) : toute la voie rejoint le MÊME objet rue. Une rue de
        //    cette graphie EXACTE déjà connue sert telle quelle ; sinon l'espace final empêche le
        //    serveur de retomber sur l'ancienne casse.
        const cible = new Map();
        let cree = false;
        const rueCible = async (cityId, nom) => {
            const k = cityId + '\u0000' + nom;
            if (cible.has(k)) return cible.get(k);
            let st = await M.Streets.getStreet({ cityId, streetName: nom });
            if (!st) st = await M.Streets.getStreet({ cityId, streetName: nom + ' ' });
            if (!st) {
                st = await M.Streets.addStreet({ cityId, streetName: nom + ' ' });
                cree = true;
                // Le jour où Waze retire l'espace dès la création, l'astuce est fermée (audit rang 40).
                if (!st || st.name !== nom + ' ') throw ESPACE;
            }
            cible.set(k, st.id);
            return st.id;
        };
        const remplace = new Map();   // ancien streetId → nouveau
        try { for (const l of utiles) remplace.set(l.id, await rueCible(l.villeCible, l.apres)); }
        catch (e) {
            if (e === ESPACE) { message(t('espaceRetire'), true); log('astuce de l\'espace final refusée par le serveur'); return; }
            message(cree ? t('aucunSeg') + ' ' + t('echecs', autorises.size, e.message) + ' ' + t('annulePrep') : t('erreur', e.message), true); log('appliquer : ' + e.message); return;
        }
        // 3. Segment par segment, la principale ET la liste complète des alternatives, dans l'ordre :
        //    alternateStreetIds REMPLACE la liste, une liste partielle effacerait des noms. Deux
        //    variantes qui convergent ne laissent pas de doublon (audit rang 21). Un échec n'arrête
        //    pas les autres segments.
        let faits = 0;
        const posees = new Set(), ecritsIds = [];
        for (const segmentId of new Set(utiles.flatMap(l => l.segs))) {
            if (!autorises.has(segmentId)) continue;
            try {
                const s = await M.Segments.getById({ segmentId });
                if (!s) throw new Error('segment ' + segmentId + ' déchargé');
                const prim = remplace.get(s.primaryStreetId) || s.primaryStreetId;
                const vus = new Set([prim]);
                const alts = (s.alternateStreetIds || []).map(a => remplace.get(a) || a).filter(a => !vus.has(a) && vus.add(a));
                const addressData = { primaryStreetId: prim };
                const altsAvant = s.alternateStreetIds || [];
                if (alts.length !== altsAvant.length || alts.some((a, i) => a !== altsAvant[i])) addressData.alternateStreetIds = alts;
                if (prim === s.primaryStreetId && !addressData.alternateStreetIds) continue;
                await M.Segments.updateAddress({ segmentId, addressData });
                faits++;
                ecritsIds.push(segmentId);
                for (const l of utiles) if (l.segs.includes(segmentId)) posees.add(l.id);
            } catch (e) { echecs++; raison = raison || e.message; log('appliquer, segment ' + segmentId + ' : ' + e.message); }
        }
        // Les choix de l'éditeur restent : une ligne refusée ne revient pas cochée (mesuré dans WME le 08/11).
        const suite = (refuses ? ' ' + t('sansDroit', refuses) : '') + (echecs ? ' ' + t('echecs', echecs, raison) : '');
        if (!faits) { message(t('aucunSeg') + suite + (cree ? ' ' + t('annulePrep') : ''), true); return; }
        // L'aperçu se vide : il ne reste que le compte rendu, sans bouton Appliquer actif.
        plan = { fiches: plan.fiches, force: plan.force, lignes: [], villes: [], alertes: [] };
        const sansAccent = utiles.filter(l => posees.has(l.id) && (l.alertes || []).includes('accents')).length;
        message(t('applique', posees.size, faits) + suite + (sansAccent ? ' ' + t('accentsAVerifier', sansAccent) : '') + (opts.voieEntiere ? ' ' + t('chargesSeuls') : ''),
            !!echecs, { cles: utiles.filter(l => posees.has(l.id)).map(l => l.cle), ecrits: ecritsIds });
    }

    // =====================================================================
    //  APPARENCE — jetons et gabarits de WCT / WJN (charte du 25/09/2026)
    // =====================================================================

    // ⚠️ Pas d'accent grave dans ce bloc : il vit dans un template literal.
    const CSS = `
:root {
    --wcf-blue: #2196f3; --wcf-blue-btn: #1976d2; --wcf-blue-dk: #1565c0; --wcf-grey: #9e9e9e;
    --wcf-surface: #ffffff; --wcf-bg: #f5f7f9; --wcf-border: #dde3ea;
    --wcf-text: #2d3748; --wcf-text2: #566372; --wcf-radius: 8px;
}
#${BAR_ID} { padding: 4px 16px 6px; font-family: 'Rubik','Open Sans',sans-serif; font-size: 12px; color: var(--wcf-text); }
.wcf-row { display: flex; align-items: center; gap: 6px; }
.wcf-lbl { font-size: 10px; font-weight: 600; color: var(--wcf-text2); text-transform: uppercase; letter-spacing: .04em; white-space: nowrap; }
.wcf-pill {
    display: inline-flex; align-items: center; gap: 4px; height: 22px; min-height: 0; margin: 0; padding: 0 10px;
    border-radius: 50px; border: 1px solid var(--wcf-border); background: var(--wcf-surface); color: var(--wcf-blue-dk);
    font-family: inherit; font-size: 11px; font-weight: 600; cursor: pointer; white-space: nowrap;
}
.wcf-pill:hover { background: #eef4fb; }
.wcf-pill.wcf-plein { background: var(--wcf-blue-btn); border-color: var(--wcf-blue-btn); color: #fff; }
.wcf-pill.wcf-plein:hover { background: var(--wcf-blue-dk); }
.wcf-pill[disabled] { opacity: .45; cursor: not-allowed; }
.wcf-pill:focus-visible, #wcf-sidebar :focus-visible, .wcf-apercu :focus-visible { outline: 2px solid var(--wcf-blue); outline-offset: 1px; }
.wcf-apercu { margin-top: 6px; border: 1px solid var(--wcf-border); border-radius: var(--wcf-radius); padding: 8px; background: var(--wcf-surface); }
.wcf-apercu h4 { margin: 0 0 4px; font-size: 11px; font-weight: 700; color: var(--wcf-blue-btn); text-transform: uppercase; letter-spacing: .05em; }
.wcf-fiche { font-size: 11px; color: var(--wcf-text2); margin: 0 0 6px; }
.wcf-tab { width: 100%; border-collapse: collapse; font-size: 12px; }
.wcf-tab td { padding: 3px 4px; vertical-align: top; border-top: 1px solid var(--wcf-border); }
.wcf-tab td.wcf-k { width: 18px; }
.wcf-tab .wcf-role { font-size: 10px; color: var(--wcf-text2); text-transform: uppercase; letter-spacing: .03em; }
.wcf-avant { color: var(--wcf-text2); text-decoration: line-through; text-decoration-color: #c62828; }
.wcf-apres { font-weight: 600; }
.wcf-piste { color: var(--wcf-text2); }
.wcf-al { margin-top: 2px; font-size: 11px; line-height: 1.4; color: #6d4c00; }
.wcf-n { font-size: 10px; color: var(--wcf-text2); white-space: nowrap; }
.wcf-sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.wcf-note { margin: 6px 0 0; padding: 5px 8px; border-radius: 8px; font-size: 11px; line-height: 1.5; background: #fff8e1; color: #6d4c00; }
.wcf-note.wcf-err { background: #ffebee; color: #c62828; }
.wcf-note.wcf-ok { background: #e8f5e9; color: #1b5e20; }
.wcf-actions { display: flex; gap: 6px; justify-content: flex-end; margin-top: 8px; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) :is(#wcf-sidebar, #${BAR_ID}) { color: var(--wme-studio-text, #e8eaed); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) .wcf-apercu { background: var(--wme-studio-input, #3a3f44); border-color: var(--wme-studio-border, #4a5056); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) :is(.wcf-fiche, .wcf-avant, .wcf-role, .wcf-lbl, .wcf-sb-hint, .wcf-opt-h) { color: var(--wme-studio-text-secondary, #b6c0ca); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) :is(#wcf-sidebar h2, #wcf-sidebar .wcf-sb-sec, .wcf-apercu h4) { color: #64b5f6; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) :is(.wcf-n, .wcf-piste, .wcf-sb-ver, .wcf-sb-foot) { color: var(--wme-studio-text-secondary, #b6c0ca); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) .wcf-al { color: #ffcc80; }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) :is(.wcf-pill:focus-visible, #wcf-sidebar :focus-visible, .wcf-apercu :focus-visible, .wcf-toggle input:focus-visible + .wcf-toggle-slider) { outline-color: #64b5f6; }
#wcf-sidebar { padding: 10px 12px; font-family: 'Rubik','Open Sans',sans-serif; font-size: 12px; color: var(--wcf-text); }
#wcf-sidebar h2 { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--wcf-blue-btn); margin: 0 0 8px; }
#wcf-sidebar h2 .wcf-sb-ver { font-size: 11px; font-weight: 400; color: var(--wcf-text2); }
.wcf-sb-maj { margin: 0 0 8px; padding: 5px 8px; border-radius: 8px; background: #ffebee; color: #c62828; font-size: 11px; font-weight: 600; }
.wcf-sb-maj[hidden] { display: none; }
.wcf-sb-maj a { color: #c62828; }
.wcf-sb-hint { font-size: 11px; color: var(--wcf-text2); line-height: 1.6; margin: 0; }
.wcf-sb-sec { font-size: 11px; font-weight: 700; color: var(--wcf-blue-btn); text-transform: uppercase; letter-spacing: .05em; margin: 14px 0 6px; }
.wcf-toggle-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 10px; }
.wcf-toggle-lbl { font-size: 12px; font-weight: 600; cursor: pointer; }
.wcf-opt-h { font-size: 11px; color: var(--wcf-text2); line-height: 1.5; margin: 2px 0 0; }
.wcf-toggle { position: relative; width: 36px; height: 20px; flex-shrink: 0; }
.wcf-toggle input { opacity: 0; width: 0; height: 0; }
.wcf-toggle-slider { position: absolute; cursor: pointer; inset: 0; background: #8a94a0; border-radius: 50px; transition: background .2s; }
.wcf-toggle-slider:before { content: ''; position: absolute; width: 14px; height: 14px; inset-inline-start: 3px; bottom: 3px; background: #fff; border-radius: 50%; transition: transform .2s; }
.wcf-toggle input:checked + .wcf-toggle-slider { background: var(--wcf-blue); }
.wcf-toggle input:focus-visible + .wcf-toggle-slider { outline: 2px solid var(--wcf-blue-dk); outline-offset: 2px; }
.wcf-toggle input:checked + .wcf-toggle-slider:before { transform: translateX(16px); }
#wcf-sidebar[dir="rtl"] .wcf-toggle input:checked + .wcf-toggle-slider:before { transform: translateX(-16px); }
#wcf-sidebar label.wcf-sel { display: block; font-size: 12px; font-weight: 600; margin: 10px 0 3px; }
#wcf-sidebar select { width: 100%; min-width: 0; height: 26px; font-family: inherit; font-size: 12px; }
.wcf-help-section { border: 1px solid var(--wcf-border); border-radius: var(--wcf-radius); margin-bottom: 4px; overflow: hidden; }
.wcf-help-hdr { display: flex; align-items: center; justify-content: space-between; width: 100%; height: auto; min-height: 0; margin: 0; border: none; font-family: inherit; text-align: start; padding: 5px 9px; font-size: 11px; font-weight: 700; cursor: pointer; background: var(--wcf-bg); color: var(--wcf-text); }
.wcf-help-hdr.on { color: var(--wcf-blue-dk); background: #e3f2fd; }
.wcf-help-body { padding: 7px 9px; font-size: 11px; line-height: 1.5; }
.wcf-help-body p { margin: 0 0 5px; }
#wcf-sidebar kbd { display: inline-block; background: var(--wcf-bg); color: var(--wcf-text); border: 1px solid var(--wcf-border); border-bottom-width: 2px; border-radius: 3px; padding: 0 4px; font-family: ui-monospace,Menlo,Consolas,monospace; font-size: 10px; line-height: 1.5; }
.wcf-sb-links { margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--wcf-border); font-size: 11px; color: var(--wcf-text2); text-align: center; }
.wcf-sb-links a { color: var(--wcf-blue-dk); }
html:is([data-wme-studio-theme="dark"],[data-wme-studio-theme="black"]) .wcf-sb-links a { color: #64b5f6; }
.wcf-sb-foot { margin-top: 10px; font-size: 11px; color: var(--wcf-text2); line-height: 1.6; }
`;

    // =====================================================================
    //  LA BARRE DU PANNEAU ET L'APERÇU
    // =====================================================================

    let derniereNote = null;
    function message(txt, erreur, plus) {
        derniereNote = Object.assign({ txt, erreur }, plus || {});
        rendre();
    }

    // Nom d'une fiche dans la langue de l'éditeur (Intl, natif) ; FICHES[].nom reste pour les journaux.
    const nomFiche = f => {
        if (f.code === 'defaut') return t('ficheDefaut');
        if (f.code === 'CA') return t('ficheCA');
        if (f.code === 'CA-QC') return t('ficheQC');
        try { const n = new Intl.DisplayNames([_lang], { type: 'region' }).of(f.code); if (n && n !== f.code) return n; } catch (e) { }
        return f.nom;
    };
    const nomsFiches = () => plan.fiches.map(nomFiche).join(', ');
    // Hébreu : la flèche suit le sens de lecture ; les noms latins sont isolés par <bdi>.
    const fleche = () => _lang === 'he' ? '\u2190' : '\u2192';
    const bdi = x => '<bdi>' + esc(x) + '</bdi>';
    // Alertes du moteur montrées SOUS la ligne qu'elles concernent.
    const ALERTES_LIGNE = { accents: 'alerteAccents', article: 'alArticle', abrev: 'alAbrev', ambigu: 'alAmbigu', titre: 'alTitre', invisible: 'alInvisible' };
    function rendreApercu() {
        if (!plan) return '';
        const ligne = (l, i) => {
            const villeId = l.ville ? l.ville.id : null;
            const cibleTxt = l.villeCible !== villeId ? ((plan.villes.find(v => v.city.id === villeId) || {}).texte || '') : null;
            const ville = l.ville && !l.ville.isEmpty ? ' <span class="wcf-n">· ' + bdi(cibleTxt !== null ? cibleTxt : l.ville.name) + '</span>' : '';
            const vCible = cibleTxt !== null ? '<div class="wcf-n"><span aria-hidden="true">' + fleche() + '</span> ' + esc(t('villeRattache', cibleTxt)) + '</div>' : '';
            const al = (l.alertes || []).filter(a => ALERTES_LIGNE[a]).map(a => '<div class="wcf-al"><span aria-hidden="true">&#x26A0;&#xFE0F;</span> ' + esc(t(ALERTES_LIGNE[a])) + '</div>').join('');
            const role = '<div class="wcf-role">' + t(l.role === 'prim' ? 'lPrim' : 'lAlt') + ' <span class="wcf-n">' + t('nSeg', l.segs.length) + '</span></div>';
            // Signalement : ni case, ni rayure, ni gras ; la proposition n'est qu'une piste.
            if (l.signale) return '<tr><td class="wcf-k"></td><td>' + role + '<div>' + bdi(l.avant) + ville + '</div>' + (l.apres !== l.avant ? '<div class="wcf-piste">' + esc(t('piste')) + bdi(l.apres) + '</div>' : '') + al + '</td></tr>';
            return '<tr><td class="wcf-k"><input type="checkbox" data-wcf-l="' + i + '"' + (l.coche ? ' checked' : '') + ' aria-label="' + esc(l.avant + ' ' + fleche() + ' ' + l.apres + (cibleTxt !== null ? ' (' + t('villeRattache', cibleTxt) + ')' : '')) + '"></td>' +
                '<td>' + role + (l.apres !== l.avant ? '<div class="wcf-avant">' + bdi(l.avant) + '</div>' : '') + '<div class="wcf-apres">' + bdi(l.apres) + ville + '</div>' + vCible + al + '</td></tr>';
        };
        const notes = [];
        if (plan.force) notes.push('<p class="wcf-note">' + esc(t('forcee', nomsFiches())) + '</p>');
        for (const f of plan.fiches) {
            if (f.mode !== 'signaler' || !plan.lignes.some(l => l.fiche === f)) continue;
            notes.push('<p class="wcf-note">' + esc(t(f.code === 'defaut' ? 'sansFiche' : 'noteSignaler')) + '</p>');
        }
        for (const v of plan.villes) if (!v.existante) notes.push('<p class="wcf-note">' + esc(v.douteuse ? t('villeVerif', v.city.name) : t('villeCoord', v.city.name, v.texte)) + '</p>');
        if (derniereNote) notes.push('<p class="wcf-note ' + (derniereNote.erreur ? 'wcf-err' : 'wcf-ok') + '">' + esc(derniereNote.txt) + '</p>');
        // Sans ligne, « Rien à corriger » seulement s'il n'y a pas non plus de ville à signaler.
        const corps = plan.lignes.length ? '<table class="wcf-tab">' + plan.lignes.map(ligne).join('') + '</table>'
            : plan.villes.some(v => !v.existante) ? '' : '<p class="wcf-fiche">' + esc(t('rien')) + '</p>';
        const applicable = plan.lignes.some(l => !l.signale);
        const peut = !enCours && plan.lignes.some(l => l.coche);
        return '<div class="wcf-apercu" id="wcf-apercu" role="region" aria-label="' + esc(t('titre')) + '"><h4>' + esc(t('titre')) + '</h4>' +
            '<p class="wcf-fiche">' + esc(t('fiche', nomsFiches())) + '</p>' + corps + notes.join('') +
            '<div class="wcf-actions"><button type="button" class="wcf-pill" data-wcf="fermer">' + esc(t('fermer')) + '</button>' +
            (applicable ? '<button type="button" class="wcf-pill wcf-plein" data-wcf="appliquer"' + (peut ? '' : ' disabled') + '>' + esc(t('appliquer')) + '</button>' : '') + '</div></div>';
    }

    function rendre() {
        const bar = document.getElementById(BAR_ID);
        if (!bar) return;
        sigRendue = etatAffiche();
        // À corriger (ce que le script écrira) et à vérifier (signalements, villes) comptés à part.
        const nCorr = plan ? plan.lignes.filter(l => !l.signale).length : 0;
        const nVer = plan ? plan.lignes.filter(l => l.signale).length + plan.villes.filter(v => !v.existante).length : 0;
        const parts = [];
        if (nCorr || !nVer) parts.push(t('barN', nCorr));
        if (nVer) parts.push(t('barV', nVer));
        // Le focus clavier survit à la réécriture de la barre (constat 13).
        const actif = document.activeElement && bar.contains(document.activeElement) ? document.activeElement : null;
        const cleFocus = actif ? (actif.getAttribute('data-wcf') ? '[data-wcf="' + actif.getAttribute('data-wcf') + '"]' : actif.getAttribute('data-wcf-l') ? '[data-wcf-l="' + actif.getAttribute('data-wcf-l') + '"]' : null) : null;
        const lbl = t('barLbl') + (plan && plan.force ? ' (' + nomsFiches() + ')' : '');
        bar.innerHTML = '<div class="wcf-row"><span class="wcf-lbl">' + esc(lbl) + '</span>' +
            '<button type="button" class="wcf-pill" data-wcf="ouvrir" title="' + esc(t('barTip')) + '" aria-controls="wcf-apercu" aria-expanded="' + apercuOuvert + '">' + icone(14) + ' ' + esc(parts.join(' · ')) + '</button></div>' +
            (apercuOuvert ? rendreApercu() : '');
        // Le compte rendu, aussi dans une zone STABLE annoncée par les lecteurs d'écran (rang 29) :
        // le reste de la barre est réécrit, une zone réécrite n'est pas annoncée.
        if (cleFocus) { const e = bar.querySelector(cleFocus); if (e) e.focus(); }
        let st = document.getElementById('wcf-statut');
        if (!st) { st = document.createElement('div'); st.id = 'wcf-statut'; st.className = 'wcf-sr'; bar.after(st); }
        st.setAttribute('role', derniereNote && derniereNote.erreur ? 'alert' : 'status');
        const lu = derniereNote ? derniereNote.txt : '';
        if (st.textContent !== lu) st.textContent = lu;
    }

    // WME reconstruit le panneau à chaque sélection : la barre est reposée à chaque fois, et
    // n'apparaît que s'il y a quelque chose à corriger (ou un message à lire).
    // Signature de ce que montre la barre, SANS les coches : un recalcul identique ne réécrit rien
    // (sinon chaque rendu, mutation du panneau, relancerait un recalcul : la boucle de la 0.01.03).
    const signature = p => !p ? '' : JSON.stringify([p.fiches.map(f => f.code), p.force, p.alertes,
        p.lignes.map(l => [l.cle, l.role, l.avant, l.segs.length, l.ville && l.ville.name]),
        p.villes.map(v => [v.city.id, v.texte, !!v.existante])]);
    const etatAffiche = () => signature(plan) + '|' + apercuOuvert + '|' + JSON.stringify(derniereNote);
    let generation = 0, sigRendue = null, parRaccourci = false;
    async function placerBarre() {
        if (enCours) return;
        const g = ++generation;
        let p;
        try { p = await calculerPlan(g); } catch (e) { if (e === ABANDON) return; throw e; }
        if (g !== generation || enCours) return;
        const entete = document.querySelector('.segment-feature-editor wz-section-header');
        if (!entete && p) logUneFois('entete', 'en-tête du segment introuvable (.segment-feature-editor wz-section-header) : barre non posée');
        let bar = document.getElementById(BAR_ID);
        // Après Ctrl+Z, les lignes appliquées reviennent : la note de succès n'est plus vraie.
        // Une ligne appliquée revenue SUR UN SEGMENT ÉCRIT (et non sur un segment refusé) = Ctrl+Z (constat 6).
        if (derniereNote && derniereNote.cles && p && p.lignes.some(l => derniereNote.cles.includes(l.cle) && l.segs.some(id => derniereNote.ecrits.includes(id)))) derniereNote = null;
        const utile = p && (p.lignes.length || p.villes.some(v => !v.existante));
        // Un compte rendu à lire (après Appliquer), ou le raccourci, garde la barre ouverte.
        const garder = apercuOuvert && (derniereNote || parRaccourci) && entete && (bar || parRaccourci) && p;
        if (!entete || (!utile && !garder)) {
            if (bar) bar.remove();
            apercuOuvert = false;
            plan = p;
            return;
        }
        // Plan après Appliquer (vide, compte rendu affiché) : on garde ce qui est rendu.
        const memePlace = bar && bar.parentElement === entete.parentElement;
        plan = p;
        if (memePlace && etatAffiche() === sigRendue) return;
        if (!memePlace) {
            if (bar) bar.remove();
            bar = document.createElement('div');
            bar.id = BAR_ID;
            bar.dir = _lang === 'he' ? 'rtl' : 'ltr';
            bar.addEventListener('click', surClic);
            bar.addEventListener('change', ev => {
                const c = ev.target.closest('[data-wcf-l]');
                if (!c || !plan) return;
                // Une case ne change que le plan et le bouton : pas de rendu complet (focus gardé).
                const l = plan.lignes[+c.getAttribute('data-wcf-l')];
                if (!l) return;
                l.coche = c.checked;
                choix.set(l.cle, c.checked);
                const b = bar.querySelector('[data-wcf="appliquer"]');
                if (b) b.disabled = enCours || !plan.lignes.some(x => x.coche);
            });
            entete.after(bar);
        }
        rendre();
        // Venu du raccourci : le focus va à l'aperçu, pour le clavier et le lecteur d'écran.
        if (parRaccourci) { const a = bar.querySelector('.wcf-apercu'); if (a) { a.setAttribute('tabindex', '-1'); a.focus(); } }
    }
    function surClic(ev) {
        const b = ev.target.closest('[data-wcf]');
        if (!b) return;
        const q = b.getAttribute('data-wcf');
        if (q === 'ouvrir') { apercuOuvert = !apercuOuvert; derniereNote = null; parRaccourci = false; rendre(); }
        else if (q === 'fermer') { apercuOuvert = false; derniereNote = null; parRaccourci = false; rendre(); }
        else if (q === 'appliquer') { b.disabled = true; appliquer().catch(e => { message(t('erreur', e.message), true); log(e.message); }); }
    }
    let placementPrevu = false;
    function planifierPlacement() {
        if (placementPrevu) return;
        placementPrevu = true;
        setTimeout(() => { placementPrevu = false; placerBarre().catch(e => logUneFois('barre', 'barre : ' + e.message)); }, 60);
    }

    // =====================================================================
    //  NOUVELLE VERSION PUBLIÉE — même mécanique que WJN, WCT, WRP et WDA
    // =====================================================================
    //  La pastille ne s'allume que sur une version PUBLIÉE strictement supérieure à celle qui tourne ;
    //  hors ligne, réponse illisible ou page absente, elle reste éteinte. On lit le .meta.js de
    //  GreasyFork (quelques centaines d'octets), au plus une fois par 24 h. L'adresse vient du
    //  gestionnaire (installé depuis GreasyFork) : sans elle, rien n'est demandé.

    const gmScript = () => (typeof GM_info !== 'undefined' && GM_info.script) || {};
    const VER_RE = /^\d+(\.\d+)*$/;
    const MAJ_KEY = 'wcf.maj.v1', MAJ_DELAI = 864e5;
    let majEnLigne = null;
    // Segment par segment, en nombres : en chaînes, « 0.9.00 » passerait pour plus récent que « 0.13.00 ».
    const majCmp = (a, b) => {
        const pa = String(a).split('.'), pb = String(b).split('.');
        for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
            const x = Number(pa[i]) || 0, y = Number(pb[i]) || 0;
            if (x !== y) return x < y ? -1 : 1;
        }
        return 0;
    };
    function majRendre() {
        const e = document.getElementById('wcf-sb-maj');
        if (e) { e.hidden = !majEnLigne; if (majEnLigne) e.querySelector('span').textContent = t('majBtn', majEnLigne); }
    }
    function verifierMaj() {
        const url = gmScript().updateURL;
        if (!url || !VER_RE.test(VERSION) || typeof GM_xmlhttpRequest !== 'function') return;
        let memo = null;
        try { memo = JSON.parse(localStorage.getItem(MAJ_KEY) || 'null'); } catch (e) { }
        if (memo && Date.now() - memo.t < MAJ_DELAI) {
            if (memo.v && VER_RE.test(memo.v) && majCmp(VERSION, memo.v) < 0) { majEnLigne = memo.v; majRendre(); }
            return;
        }
        const retenir = v => { try { localStorage.setItem(MAJ_KEY, JSON.stringify({ t: Date.now(), v })); } catch (e) { } };
        GM_xmlhttpRequest({
            method: 'GET', url, timeout: 10000, nocache: true,
            onload: r => {
                // onload vient AUSSI sur un 404 : la page d'erreur ne doit pas être lue comme un script.
                if (r.status < 200 || r.status >= 300) { retenir(null); return; }
                const m = (r.responseText || '').match(/^\/\/\s*@version\s+(\S+)/m);
                retenir(m && VER_RE.test(m[1]) ? m[1] : null);
                if (!m || !VER_RE.test(m[1]) || majCmp(VERSION, m[1]) >= 0) return;
                majEnLigne = m[1];
                majRendre();
                log('nouvelle version publiée : ' + m[1] + ' (installée : ' + VERSION + ')');
            },
            onerror: () => { }, ontimeout: () => { },
        });
    }

    // =====================================================================
    //  ONGLET SCRIPTS
    // =====================================================================

    const AIDE = [
        { id: 'how', t: 'hHowT', b: 'hHowB' },
        { id: 'rules', t: 'hRulesT', b: 'hRulesB' },
        { id: 'trick', t: 'hTrickT', b: 'hTrickB' },
        { id: 'city', t: 'hCityT', b: 'hCityB' },
        { id: 'keys', t: 'hKeysT', b: 'hKeysB' },
    ];
    const interrupteur = (id, cle, aide) => `
    <div class="wcf-toggle-row">
        <label class="wcf-toggle-lbl" for="${id}">${t(cle)}</label>
        <label class="wcf-toggle"><input type="checkbox" id="${id}" data-opt="${id.replace('wcf-o-', '')}" aria-describedby="${id}-h"><span class="wcf-toggle-slider"></span></label>
    </div><p class="wcf-opt-h" id="${id}-h">${t(aide)}</p>`;
    const construireOnglet = () => `
<div id="wcf-sidebar" dir="${_lang === 'he' ? 'rtl' : 'ltr'}">
    <h2><span style="display:inline-flex">${icone(18)}</span>${SCRIPT_NAME} <span class="wcf-sb-ver">v${VERSION}</span></h2>
    <p class="wcf-sb-maj" id="wcf-sb-maj" role="status" hidden><span></span> <a href="#" id="wcf-maj">${t('majInstall')}</a></p>
    <p class="wcf-sb-hint">${t('sbHint')}</p>
    <div class="wcf-sb-sec">&#x2699;&#xFE0F; ${t('sbOpts')}</div>
    ${interrupteur('wcf-o-voieEntiere', 'oVoie', 'oVoieH')}
    ${interrupteur('wcf-o-majusculesInconnues', 'oMaj', 'oMajH')}
    ${interrupteur('wcf-o-forcerPetitsMots', 'oPetits', 'oPetitsH')}
    <label class="wcf-sel" for="wcf-o-pays">${t('oPays')}</label>
    <select id="wcf-o-pays">
        <option value="auto">${t('oPaysAuto')}</option>
        ${Object.keys(FICHES).map(k => '<option value="' + k + '">' + esc(nomFiche(Object.assign({ code: k }, FICHES[k]))) + '</option>').join('')}
    </select>
    <div class="wcf-sb-sec">&#x2753; ${t('sbHelp')}</div>
    ${AIDE.map((s, i) => `
    <div class="wcf-help-section">
        <button type="button" class="wcf-help-hdr${i === 0 ? ' on' : ''}" data-aide="${s.id}" aria-expanded="${i === 0}">${t(s.t)} <span aria-hidden="true">${i === 0 ? '&#x25BC;' : (_lang === 'he' ? '&#x25C0;' : '&#x25B6;')}</span></button>
        <div class="wcf-help-body" data-corps="${s.id}"${i === 0 ? '' : ' hidden'}>${t(s.b)}</div>
    </div>`).join('')}
    <div class="wcf-sb-links">${URL_DISCUSS ? '<span aria-hidden="true">&#x1F4AC;</span> <a href="' + URL_DISCUSS + '" target="_blank" rel="noopener">' + t('lnkDiscuss') + '</a> &nbsp;&#xB7;&nbsp; ' : ''}<span aria-hidden="true">&#x1F517;</span> <a href="${URL_GF}" target="_blank" rel="noopener">GreasyFork</a> &nbsp;&#xB7;&nbsp; <a href="${URL_GH}" target="_blank" rel="noopener">GitHub</a></div>
    <p class="wcf-sb-foot"><span aria-hidden="true">&#x1F512;</span> ${t('sbFoot')}</p>
</div>`;

    async function poserOnglet() {
        try {
            const res = await sdk.Sidebar.registerScriptTab();
            res.tabLabel.innerHTML = '<span style="display:inline-flex;vertical-align:middle">' + icone(20) + '</span>';
            res.tabLabel.title = SCRIPT_NAME;
            res.tabLabel.setAttribute('aria-label', SCRIPT_NAME);
            res.tabPane.innerHTML = construireOnglet();
            res.tabPane.querySelectorAll('[data-opt]').forEach(cb => {
                const k = cb.getAttribute('data-opt');
                cb.checked = !!opts[k];
                cb.addEventListener('change', () => { opts[k] = cb.checked; ecrireOpts(); planifierPlacement(); });
            });
            const sel = res.tabPane.querySelector('#wcf-o-pays');
            sel.value = opts.pays;
            sel.addEventListener('change', () => { opts.pays = sel.value; ecrireOpts(); planifierPlacement(); });
            majRendre();
            res.tabPane.addEventListener('click', ev => {
                if (ev.target.closest('#wcf-maj')) { ev.preventDefault(); const u = gmScript().downloadURL; if (u) window.open(u, '_blank', 'noopener'); return; }
                const h = ev.target.closest('[data-aide]');
                if (!h) return;
                const corps = res.tabPane.querySelector('[data-corps="' + h.getAttribute('data-aide') + '"]');
                const ouvrir = corps.hidden;
                corps.hidden = !ouvrir;
                h.classList.toggle('on', ouvrir);
                h.setAttribute('aria-expanded', String(ouvrir));
                h.querySelector('span').innerHTML = ouvrir ? '&#x25BC;' : (_lang === 'he' ? '&#x25C0;' : '&#x25B6;');
            });
        } catch (e) { log('onglet : ' + e.message); }
    }

    // Déclaré sans touche (comme WJN) ; la touche attribuée est relue et redonnée au rechargement,
    // WME ne la gardant pas d'une session à l'autre.
    const TOUCHES_KEY = 'wcf.raccourcis';
    function versFormatSdk(k) {
        const m = /^(\d+),(\d+)$/.exec(String(k || ''));
        if (!m) return k || null;
        const bits = +m[1], code = +m[2];
        const touche = (code >= 48 && code <= 57) || (code >= 65 && code <= 90) ? String.fromCharCode(code).toLowerCase() : null;
        if (!touche) return null;
        return ((bits & 1 ? 'C' : '') + (bits & 2 ? 'S' : '') + (bits & 4 ? 'A' : '') + '+').replace(/^\+/, '') + touche;
    }
    let raccourcisLus = null, touchesConnues = '{}';
    async function relireTouches() { try { raccourcisLus = await sdk.Shortcuts.getAllShortcuts(); } catch (e) { logUneFois('touches', 'raccourcis illisibles : ' + e.message); } }
    function ecrireTouches(liste) {
        if (!liste) return;
        const o = {};
        for (const r of liste) { if (r && /^wcf-/.test(r.shortcutId) && r.shortcutKeys) { const k = versFormatSdk(r.shortcutKeys); if (k) o[r.shortcutId] = k; } }
        const s = JSON.stringify(o);
        if (s === touchesConnues) return;
        try { localStorage.setItem(TOUCHES_KEY, s); touchesConnues = s; } catch (e) { }
    }
    const retenirTouches = () => { ecrireTouches(raccourcisLus); relireTouches().then(() => ecrireTouches(raccourcisLus), () => { }); };
    async function poserRaccourci() {
        let touches = {};
        try { touches = JSON.parse(localStorage.getItem(TOUCHES_KEY) || '{}') || {}; } catch (e) { }
        touchesConnues = JSON.stringify(touches);
        const creer = cles => sdk.Shortcuts.createShortcut({
            shortcutId: 'wcf-apercu', shortcutKeys: cles, description: t('sc'),
            callback: () => { apercuOuvert = true; derniereNote = null; parRaccourci = true; planifierPlacement(); },
        });
        try { await creer(versFormatSdk(touches['wcf-apercu'])); }
        catch (e) { log('raccourci : ' + e.message); if (touches['wcf-apercu']) { try { await creer(null); } catch (e2) { log('raccourci : ' + e2.message); } } }
        await relireTouches();
        setInterval(relireTouches, 10000);
        pw.addEventListener('beforeunload', retenirTouches);
        document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') retenirTouches(); });
    }

    // =====================================================================
    //  INIT
    // =====================================================================

    // ─── VERSION MINIMALE ET INTÉGRITÉ (consignes de l'auteur, 11/10/2026) ───────────────────────
    // Au démarrage, le script lit version-min.json à la racine de son dépôt GitHub. Il NE DÉMARRE PAS :
    //  - si sa version est plus ancienne que `min` (version retirée après une correction) ;
    //  - si son code ne correspond pas à l'empreinte publiée pour sa version (`empreintes`) — copie
    //    modifiée ou abîmée. L'empreinte est un SHA-256 du code, sans les lignes @downloadURL et
    //    @updateURL que GreasyFork réécrit ;
    //  - si le gestionnaire de scripts ne lui donne pas son code (Tampermonkey requis : choix de l'auteur) ;
    //  - si sa version n'est pas publiée (absente de `empreintes`) — sauf pour l'auteur, qui essaie ses
    //    versions avant de les publier.
    // Fichier injoignable ou illisible : le script démarre (une panne de GitHub ne doit pas paralyser
    // les éditeurs). ⚠️ Tout cela tourne dans le navigateur : il arrête la copie périmée ou bricolée,
    // pas celui qui retire ces lignes ; la vraie barrière reste côté Waze.
    const _VM_URL = 'https://raw.githubusercontent.com/DrSlump34/WME-Caps-Fixer/master/version-min.json';
    const _VM_MAJ = URL_GF;
    const _vmCmp = (a, b) => {
        const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number);
        for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d < 0 ? -1 : 1; }
        return 0;
    };
    const _vmJson = () => new Promise(res => {
        setTimeout(() => res(null), 7000);   // gestionnaire de scripts qui ne rappelle jamais : on démarre
        try {
            GM_xmlhttpRequest({ method: 'GET', url: _VM_URL + '?t=' + Date.now(), timeout: 6000,
                onload: r => { try { res(r.status === 200 ? JSON.parse(r.responseText) : null); } catch (e) { res(null); } },
                onerror: () => res(null), ontimeout: () => res(null) });
        } catch (e) { res(null); }
    });
    const _vmHx = t => { let x = 0x811c9dc5; for (let i = 0; i < t.length; i++) { x ^= t.charCodeAt(i); x = Math.imul(x, 0x01000193) >>> 0; } return x >>> 0; };
    // L'auteur essaie ses versions avant de les publier. ⚠️ Le contrôle tourne au DÉBUT du démarrage, souvent
    // AVANT que WME ait chargé le profil : getUserInfo() rend alors un pseudo vide (mesuré le 11/10/2026 —
    // une version non publiée bloquée chez l'auteur). On attend donc le pseudo jusqu'à 10 s, puis on essaie
    // la session Discuss (même site, mêmes cookies).
    const _vmAuteur = async () => {
        const estAuteur = n => !!n && _vmHx(String(n).toLowerCase()) === 0xc0bef069;
        try {
            const w = (typeof unsafeWindow !== 'undefined' && unsafeWindow.getWmeSdk) ? unsafeWindow : window;
            const sdkVm = w.getWmeSdk({ scriptId: 'wme-caps-fixer-vm', scriptName: String(SCRIPT_NAME) + ' (version)', mode: 'async' });
            for (let i = 0; i < 20; i++) {
                let u = null;
                try { u = await sdkVm.State.getUserInfo(); } catch (e) { u = null; }
                if (u && u.userName) return estAuteur(u.userName);
                await new Promise(r => setTimeout(r, 500));
            }
        } catch (e) { /* SDK indisponible : on tente Discuss */ }
        try {
            const w = (typeof unsafeWindow !== 'undefined' && unsafeWindow.fetch) ? unsafeWindow : window;
            const r = await w.fetch('/discuss/session/current.json', { credentials: 'same-origin' });
            const j = r.ok ? await r.json() : null;
            return estAuteur(j && j.current_user && j.current_user.username);
        } catch (e) { return false; }
    };
    const _vmEmpreinte = async src => {
        const t = String(src).replace(/\r\n/g, '\n').split('\n').filter(l => !/^\/\/ @(downloadURL|updateURL)\b/.test(l)).join('\n');
        const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
        return [...new Uint8Array(h)].map(b => b.toString(16).padStart(2, '0')).join('');
    };
    // Rend null (démarrer) ou le motif du refus : 'retiree', 'modifiee', 'source', 'inconnue'.
    // L'empreinte calculée est écrite dans la console : c'est le contrôle de l'auteur au moment de publier.
    const _vmVerdict = async () => {
        // Le texte de l'enveloppe du script, tel que le navigateur l'a chargé (indépendant du gestionnaire).
        const src = (() => { try { return _wmeIntegre.toString(); } catch (e) { return ''; } })();
        let h = '';
        if (typeof src === 'string' && src.length) {
            try { h = await _vmEmpreinte(src); console.info('[' + String(SCRIPT_NAME) + ' v' + String(VERSION) + '] empreinte ' + h); } catch (e) { h = ''; }
        }
        // Lisible depuis la page (les journaux d'un script Tampermonkey n'y arrivent pas) : l'empreinte, ou 'sans-source'.
        try { document.documentElement.setAttribute('data-vm-' + _vmHx(_VM_URL).toString(36), h || 'sans-source'); } catch (e) { }
        const j = await _vmJson();
        if (!j || typeof j !== 'object') return null;
        const v = String(VERSION), num = /^\d+(\.\d+)*$/;
        if (num.test(v) && typeof j.min === 'string' && num.test(j.min) && _vmCmp(v, j.min) < 0) return { motif: 'retiree', min: j.min };
        if (!j.empreintes || typeof j.empreintes !== 'object') return null;
        const attendue = j.empreintes[v];
        if (!attendue) return (await _vmAuteur()) ? null : { motif: 'inconnue' };
        if (typeof src !== 'string' || !src.length) return null;
        if (!h) return null;
        return h === String(attendue).toLowerCase() ? null : { motif: 'modifiee' };
    };
    const _vmBandeau = j => {
        const ident = 'vm-' + _vmHx(_VM_URL).toString(36);
        if (document.getElementById(ident)) return;
        const l = ((location.pathname.match(/^\/([a-z]{2})(-[A-Za-z]{2})?\//) || [])[1] || (navigator.language || 'en').slice(0, 2)).toLowerCase();
        const n = String(SCRIPT_NAME), v = String(VERSION), m = j.min;
        const T = {
            fr: { retiree: `${n} v${v} est retirée : une version corrigée est publiée (v${m} ou plus récente). Le script ne démarre pas tant qu’il n’est pas mis à jour (Tampermonkey ▸ Rechercher des mises à jour).`,
                  modifiee: `${n} v${v} ne correspond pas au code publié (copie modifiée ou abîmée). Le script ne démarre pas : réinstallez-le depuis sa page officielle.`,
                  source: `${n} a besoin de Tampermonkey pour vérifier son code : il ne démarre pas avec ce gestionnaire de scripts.`,
                  inconnue: `${n} v${v} n’est pas une version publiée. Le script ne démarre pas : installez-le depuis sa page officielle.`,
                  maj: 'Mettre à jour', page: 'Page officielle' },
            en: { retiree: `${n} v${v} has been withdrawn: a fixed version is published (v${m} or later). The script will not start until it is updated (Tampermonkey ▸ Check for updates).`,
                  modifiee: `${n} v${v} does not match the published code (modified or damaged copy). The script will not start: reinstall it from its official page.`,
                  source: `${n} needs Tampermonkey to check its code: it will not start with this script manager.`,
                  inconnue: `${n} v${v} is not a published version. The script will not start: install it from its official page.`,
                  maj: 'Update', page: 'Official page' },
            it: { retiree: `${n} v${v} è stata ritirata: è pubblicata una versione corretta (v${m} o successiva). Lo script non si avvia finché non viene aggiornato (Tampermonkey ▸ Cerca aggiornamenti).`,
                  modifiee: `${n} v${v} non corrisponde al codice pubblicato (copia modificata o danneggiata). Lo script non si avvia: reinstallalo dalla sua pagina ufficiale.`,
                  source: `${n} ha bisogno di Tampermonkey per verificare il proprio codice: non si avvia con questo gestore di script.`,
                  inconnue: `${n} v${v} non è una versione pubblicata. Lo script non si avvia: installalo dalla sua pagina ufficiale.`,
                  maj: 'Aggiorna', page: 'Pagina ufficiale' },
            de: { retiree: `${n} v${v} wurde zurückgezogen: eine korrigierte Version ist veröffentlicht (v${m} oder neuer). Das Skript startet erst nach dem Update (Tampermonkey ▸ Nach Updates suchen).`,
                  modifiee: `${n} v${v} entspricht nicht dem veröffentlichten Code (veränderte oder beschädigte Kopie). Das Skript startet nicht: von der offiziellen Seite neu installieren.`,
                  source: `${n} braucht Tampermonkey, um seinen Code zu prüfen: mit diesem Skriptmanager startet es nicht.`,
                  inconnue: `${n} v${v} ist keine veröffentlichte Version. Das Skript startet nicht: von der offiziellen Seite installieren.`,
                  maj: 'Aktualisieren', page: 'Offizielle Seite' },
            es: { retiree: `${n} v${v} ha sido retirada: hay una versión corregida publicada (v${m} o posterior). El script no se inicia hasta que se actualice (Tampermonkey ▸ Buscar actualizaciones).`,
                  modifiee: `${n} v${v} no coincide con el código publicado (copia modificada o dañada). El script no se inicia: reinstálalo desde su página oficial.`,
                  source: `${n} necesita Tampermonkey para verificar su código: no se inicia con este gestor de scripts.`,
                  inconnue: `${n} v${v} no es una versión publicada. El script no se inicia: instálalo desde su página oficial.`,
                  maj: 'Actualizar', page: 'Página oficial' },
            pt: { retiree: `${n} v${v} foi retirada: há uma versão corrigida publicada (v${m} ou mais recente). O script não arranca enquanto não for atualizado (Tampermonkey ▸ Procurar atualizações).`,
                  modifiee: `${n} v${v} não corresponde ao código publicado (cópia modificada ou danificada). O script não arranca: reinstale-o a partir da página oficial.`,
                  source: `${n} precisa do Tampermonkey para verificar o seu código: não arranca com este gestor de scripts.`,
                  inconnue: `${n} v${v} não é uma versão publicada. O script não arranca: instale-o a partir da página oficial.`,
                  maj: 'Atualizar', page: 'Página oficial' },
            he: { retiree: `${n} v${v} הוסרה: פורסמה גרסה מתוקנת (v${m} ומעלה). הסקריפט לא יופעל עד שיעודכן (Tampermonkey ▸ חיפוש עדכונים).`,
                  modifiee: `${n} v${v} אינו תואם לקוד שפורסם (עותק ששונה או נפגם). הסקריפט לא יופעל: התקינו אותו מחדש מהדף הרשמי.`,
                  source: `${n} זקוק ל-Tampermonkey כדי לאמת את הקוד שלו: הוא לא יופעל עם מנהל הסקריפטים הזה.`,
                  inconnue: `${n} v${v} אינה גרסה שפורסמה. הסקריפט לא יופעל: התקינו אותו מהדף הרשמי.`,
                  maj: 'עדכון', page: 'הדף הרשמי' },
        };
        const L = T[l] || T.en;
        const d = document.createElement('div');
        d.id = ident;
        d.dir = l === 'he' ? 'rtl' : 'ltr';
        d.setAttribute('role', 'alert');
        d.style.cssText = 'position:fixed;top:56px;left:50%;transform:translateX(-50%);z-index:100000;max-width:560px;padding:10px 14px;' +
            'background:#ffebee;color:#b71c1c;border:1px solid #c62828;border-radius:8px;font:600 12px/1.5 Rubik,Arial,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.25)';
        const p = document.createElement('div'); p.textContent = L[j.motif] || L.inconnue; d.appendChild(p);
        const a = document.createElement('a'); a.href = _VM_MAJ; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = (j.motif === 'retiree' ? L.maj : L.page) + ' ↗';
        a.style.cssText = 'display:inline-block;margin-top:6px;padding:3px 10px;border-radius:50px;background:#c62828;color:#fff;text-decoration:none';
        const x = document.createElement('button'); x.type = 'button'; x.textContent = '×'; x.setAttribute('aria-label', 'OK');
        x.style.cssText = 'position:absolute;top:2px;inset-inline-end:6px;border:0;background:none;color:#b71c1c;font-size:16px;cursor:pointer';
        x.onclick = () => d.remove();
        d.appendChild(a); d.appendChild(x);
        (document.body || document.documentElement).appendChild(d);
    };
    // Vrai si le script ne doit pas démarrer : le bandeau est posé, et l'appelant s'arrête.
    const _vmBloque = async () => { const j = await _vmVerdict(); if (j) { _vmBandeau(j); return true; } return false; };
    const init = async () => {
        if (await _vmBloque()) return;   // version retirée ou copie modifiée : bandeau, rien d’autre
        if (pw.__WCF_LOADED) return;
        pw.__WCF_LOADED = true;
        sdk = pw.getWmeSdk({ scriptId: SCRIPT_ID, scriptName: SCRIPT_NAME, mode: 'async' });
        _lang = await detectLang();
        opts = lireOpts();
        const st = document.createElement('style');
        st.textContent = CSS;
        document.head.appendChild(st);
        await poserRaccourci();
        poserOnglet();
        try { sdk.Events.on({ eventName: 'wme-selection-changed', eventHandler: () => { apercuOuvert = false; derniereNote = null; parRaccourci = false; choix.clear(); planifierPlacement(); } }); }
        catch (e) { log('événement sélection : ' + e.message); }
        const panneau = document.getElementById('edit-panel') || document.body;
        // Une mutation compte si elle vient de WME : ni DANS la barre (ses propres rendus), ni la
        // seule pose ou dépose de la barre. Les nœuds retirés sont détachés : on juge par la CIBLE.
        const dansBarre = n => !!n && (n.id === BAR_ID || !!(n.closest && n.closest('#' + BAR_ID)));
        const deWme = m => !dansBarre(m.target) && ![...m.addedNodes, ...m.removedNodes].every(n => n.id === BAR_ID);
        new MutationObserver(muts => { if (muts.some(deWme)) planifierPlacement(); })
            .observe(panneau, { childList: true, subtree: true });
        planifierPlacement();
        verifierMaj();
        log('v' + VERSION + ' prêt — langue ' + _lang);
    };

    const lancer = () => { init().catch(e => log('démarrage : ' + e.message)); };
    (() => {
        let lance = false;
        const go = () => { if (lance) return; lance = true; clearInterval(minuterie); Promise.resolve(pw.SDK_INITIALIZED).then(lancer); };
        const pret = () => !!(pw.SDK_INITIALIZED || (pw.W && pw.W.userscripts && pw.W.userscripts.state && pw.W.userscripts.state.isReady));
        const minuterie = setInterval(() => { if (pret()) go(); }, 300);
        if (pret()) go();
        document.addEventListener('wme-initialized', go, { once: true });
        document.addEventListener('wme-ready', go, { once: true });
    })();

})();

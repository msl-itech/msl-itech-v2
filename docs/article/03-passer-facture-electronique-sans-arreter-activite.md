---
numero: 3
hub: A — Facturation électronique DGI
slug: passer-facture-electronique-sans-arreter-activite
title: "Passer de Word, Excel ou du carnet à souches à la facture électronique sans arrêter l'activité"
metaTitle: "De Word/Excel à la facture électronique : méthode en 4 semaines"
metaDescription: "Vous facturez sur Word, Excel ou un carnet ? Voici la méthode que suivent les PME marocaines pour passer à la facture électronique conforme sans interrompre les ventes."
motCle: "passer à la facturation électronique"
motsCleSecondaires: ["migrer facturation excel", "facture word conforme dgi", "logiciel facturation pme maroc"]
auteur: "[Nom du consultant] — Consultant Odoo, MSL-iTECH"
datePublication: "AAAA-MM-JJ"
dateMiseAJour: "AAAA-MM-JJ"
cta: "Recevoir un devis détaillé sous 48 h → /contact?besoin=erp"
liensInternes:
  - /facturation-electronique-maroc-odoo
  - /blog/facturation-electronique-maroc-qui-quand-que-faire
  - /blog/migration-excel-vers-odoo-maroc-methode
  - /blog/cout-erp-odoo-maroc-2026
  - /odoo-finance-comptabilite
  - /integrateur-odoo-maroc
validation: "Aucune dépendance réglementaire bloquante (renvoie aux articles 1 et 2 pour les dates et formats). Compléter [CHIFFRE À VALIDER] avec un cas client autorisé."
---

# Passer de Word, Excel ou du carnet à souches à la facture électronique sans arrêter l'activité

**Une PME qui facture sur Word, Excel ou un carnet peut être opérationnelle sur un outil de facturation électronique conforme en quatre à six semaines, à condition de traiter le sujet comme un petit projet et non comme un achat de logiciel. Voici la méthode que nous appliquons, étape par étape, avec les pièges qui font perdre du temps.**

> **En bref**
> - Le vrai travail n'est pas le logiciel, c'est la **mise au propre de vos données** : clients avec ICE, produits avec taux de TVA, numérotation.
> - On ne bascule pas « un lundi matin » : on fait tourner l'ancien et le nouveau système en parallèle sur une courte période, puis on coupe.
> - Le périmètre minimal est la facturation ; ventes, comptabilité et stock peuvent venir ensuite, sur la même base.
> - Le budget dépend de trois choses : le nombre d'utilisateurs, la quantité de données à reprendre et le périmètre. Les fourchettes sont dans [Combien coûte Odoo au Maroc](/blog/cout-erp-odoo-maroc-2026).

## Pourquoi Word et Excel ne peuvent pas être « mis à jour »

Word et Excel produisent des documents, pas des données. Ils ne savent pas : garantir une numérotation continue, rattacher chaque ligne à un taux de TVA, produire un fichier structuré au format exigé, transmettre la facture par le canal réglementaire, ni archiver de façon intègre. Ce que la réforme demande (voir [qui est concerné et quand](/blog/facturation-electronique-maroc-qui-quand-que-faire)) suppose donc un changement d'outil, pas un ajustement de modèle.

Le carnet à souches pose le même problème, avec en plus la ressaisie manuelle en comptabilité, source d'écarts.

## La méthode en cinq étapes

### Étape 1 — Cadrer (une réunion de 30 minutes)

Quatre questions suffisent :

1. Combien de factures émettez-vous par mois, et combien de clients actifs avez-vous ?
2. Qui facture aujourd'hui, et qui devra facturer demain (une personne, plusieurs, plusieurs sites) ?
3. Votre comptabilité est-elle tenue en interne ou par un cabinet ? Sous quel outil ?
4. Quelle est votre échéance d'obligation (voir [le calendrier](/blog/facturation-electronique-maroc-qui-quand-que-faire)) ?

À la sortie, vous savez si le périmètre est « facturation seule » ou « facturation + devis + suivi des paiements », et vous avez une date cible.

### Étape 2 — Mettre les données au propre (1 à 2 semaines, en interne)

C'est l'étape que les entreprises sous-estiment et c'est celle qui conditionne tout le reste.

| Donnée | Ce qu'il faut obtenir | Piège fréquent |
|---|---|---|
| Clients | Un fichier unique : raison sociale exacte, adresse, **ICE**, IF si connu, contact, conditions de paiement | Le même client saisi trois fois avec trois orthographes |
| Produits et services | Une désignation claire par article, unité, prix HT, **taux de TVA** | Des lignes « Divers » ou « Prestation » sans détail |
| Numérotation | La dernière facture émise, pour que la nouvelle séquence continue sans trou | Reprendre à 1 dans le nouvel outil |
| Encours | La liste des factures non encore payées à la date de bascule | Les oublier et perdre le suivi des impayés |
| Modèle de facture | Logo, mentions légales, coordonnées bancaires | Mentions manquantes (voir [la liste](/blog/facture-electronique-maroc-mentions-obligatoires-formats)) |

Notre article [Migrer d'Excel vers Odoo sans perdre votre historique](/blog/migration-excel-vers-odoo-maroc-methode) détaille la reprise d'historique lorsqu'elle est souhaitée.

### Étape 3 — Paramétrer l'outil (1 à 2 semaines, avec l'intégrateur)

Dans Odoo, cela recouvre : la fiche société (toutes les mentions obligatoires, une fois pour toutes), les taux de TVA marocains, la séquence de numérotation avec préfixe, le modèle de facture, l'import des clients et produits, les conditions de paiement, la configuration du format électronique et du canal de transmission **[À SOURCER : selon spécification DGI]**, et l'archivage.

Si votre comptabilité est tenue par un cabinet, on définit à cette étape comment il récupère les écritures : export périodique, ou accès direct en lecture.

### Étape 4 — Tester en parallèle (1 semaine)

Pendant une semaine, chaque facture réelle est émise dans l'ancien système **et** saisie dans le nouveau, en environnement de test. On compare : montants, TVA, mentions, numérotation, rendu du PDF, fichier structuré produit. On corrige ce qui manque. C'est aussi la semaine de formation : une demi-journée pour les personnes qui facturent, une heure pour celles qui consultent.

### Étape 5 — Basculer (un jour)

On arrête l'ancien outil à une date fixée, on émet la première facture réelle dans le nouveau, on vérifie la transmission, on archive. Les factures antérieures restent dans leur format d'origine et sont conservées. Pendant un mois, un point hebdomadaire de 15 minutes règle les questions d'usage.

## Le calendrier type

| Semaine | Activité | Qui |
|---|---|---|
| 0 | Cadrage, devis | Vous + intégrateur |
| 1–2 | Données au propre | Vous (avec un modèle de fichier fourni) |
| 2–3 | Paramétrage, imports | Intégrateur |
| 4 | Tests en parallèle, formation | Vous + intégrateur |
| 5 | Bascule | Vous |

Sur une PME de 5 à 30 personnes, périmètre facturation seule, c'est le rythme que nous observons quand l'étape 2 est faite sérieusement. **[CHIFFRE À VALIDER : citer un cas client, par exemple la durée réelle chez Ait Oukhali Travaux, si l'accord est obtenu]**

## Les quatre erreurs qui font déraper

1. **Vouloir tout faire en même temps** (facturation, stock, paie, CRM). Commencez par la facturation, c'est elle qui a une échéance ; le reste s'ajoute ensuite sur la même base.
2. **Reprendre tout l'historique.** Pour la conformité, seuls les encours et la continuité de numérotation sont indispensables. L'historique complet peut être importé plus tard, ou conservé dans l'ancien format.
3. **Négliger la formation.** Un outil conforme mal utilisé produit des factures non conformes (mauvais taux de TVA, client sans ICE).
4. **Attendre le dernier trimestre.** À l'approche des échéances, les intégrateurs sont saturés et les délais s'allongent.

## Et après la facturation ?

Une fois la facturation en place, la même base permet, sans nouveau projet lourd : d'émettre les devis et de les transformer en factures en un clic, de suivre les paiements et de relancer automatiquement, de tenir la comptabilité dans [Odoo Finance](/odoo-finance-comptabilite) ou de l'exporter vers votre cabinet, puis d'ajouter le stock si vous vendez des produits. C'est l'intérêt de choisir dès le départ un outil qui couvre ces domaines plutôt qu'un simple logiciel de facturation.

## Ce que fait MSL-iTECH

Nous accompagnons cette bascule de bout en bout : cadrage gratuit de 30 minutes, modèle de fichier pour mettre vos données au propre, paramétrage d'Odoo, tests en parallèle et formation. Nous sommes [intégrateur Odoo officiel au Maroc](/integrateur-odoo-maroc), avec une équipe à Marrakech et des clients à Casablanca et dans tout le pays. Le devis détaillé est envoyé sous 48 heures après le cadrage.

## Questions fréquentes

**Combien de temps faut-il pour passer d'Excel à la facture électronique ?**
Pour une PME sur le seul périmètre facturation, quatre à six semaines entre le cadrage et la première facture réelle, dont une à deux semaines de mise au propre des données de votre côté.

**Dois-je arrêter de facturer pendant la transition ?**
Non. L'ancien système reste actif jusqu'à la bascule ; la semaine de test se fait en parallèle.

**Que deviennent mes anciennes factures Word ou Excel ?**
Elles restent valables et doivent être conservées dans leur format d'origine. La nouvelle séquence continue là où l'ancienne s'est arrêtée.

**Mon comptable externe peut-il continuer à travailler comme avant ?**
Oui, soit par export périodique des écritures, soit avec un accès direct à l'outil. Cela se définit au paramétrage.

**Faut-il reprendre tout l'historique dans le nouvel outil ?**
Pas pour la conformité. Les encours et la continuité de numérotation suffisent au démarrage ; l'historique peut être importé ensuite si vous le souhaitez.

---

**Prêt à cadrer votre bascule ?** [Demandez un devis détaillé sous 48 h](/contact?besoin=erp) ou [réservez un cadrage gratuit de 30 minutes](/prendre-rendez-vous).

<!-- JSON-LD à insérer dans le <head> -->
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "Article",
     "headline": "Passer de Word, Excel ou du carnet à souches à la facture électronique sans arrêter l'activité",
     "description": "Méthode en cinq étapes pour qu'une PME marocaine passe à la facture électronique conforme en quatre à six semaines.",
     "author": {"@type": "Person", "name": "[Nom du consultant]", "jobTitle": "Consultant Odoo", "url": "https://msl-itech.com/a-propos"},
     "publisher": {"@type": "Organization", "name": "MSL-iTECH", "url": "https://msl-itech.com", "logo": {"@type": "ImageObject", "url": "https://msl-itech.com/logo.png"}},
     "datePublished": "[AAAA-MM-JJ]", "dateModified": "[AAAA-MM-JJ]",
     "mainEntityOfPage": "https://msl-itech.com/blog/passer-facture-electronique-sans-arreter-activite", "inLanguage": "fr"},
    {"@type": "HowTo", "name": "Passer à la facture électronique sans arrêter l'activité",
     "step": [
       {"@type": "HowToStep", "name": "Cadrer", "text": "Une réunion de 30 minutes : volume de factures, utilisateurs, comptabilité, échéance d'obligation."},
       {"@type": "HowToStep", "name": "Mettre les données au propre", "text": "Fichier clients avec ICE, produits avec taux de TVA, dernière facture émise, encours, modèle."},
       {"@type": "HowToStep", "name": "Paramétrer l'outil", "text": "Fiche société, TVA, séquence, modèle, imports, format électronique, transmission, archivage."},
       {"@type": "HowToStep", "name": "Tester en parallèle", "text": "Une semaine de double saisie en environnement de test et formation des utilisateurs."},
       {"@type": "HowToStep", "name": "Basculer", "text": "Arrêt de l'ancien outil, première facture réelle, vérification de la transmission et de l'archivage."}
     ]},
    {"@type": "BreadcrumbList", "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://msl-itech.com/"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://msl-itech.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "Facturation électronique DGI", "item": "https://msl-itech.com/facturation-electronique-maroc-odoo"},
      {"@type": "ListItem", "position": 4, "name": "Passer à la facture électronique sans arrêter l'activité"}]},
    {"@type": "FAQPage", "mainEntity": [
      {"@type": "Question", "name": "Combien de temps faut-il pour passer d'Excel à la facture électronique ?", "acceptedAnswer": {"@type": "Answer", "text": "Quatre à six semaines pour une PME sur le périmètre facturation, dont une à deux semaines de mise au propre des données."}},
      {"@type": "Question", "name": "Dois-je arrêter de facturer pendant la transition ?", "acceptedAnswer": {"@type": "Answer", "text": "Non, l'ancien système reste actif jusqu'à la bascule et la semaine de test se fait en parallèle."}},
      {"@type": "Question", "name": "Que deviennent mes anciennes factures Word ou Excel ?", "acceptedAnswer": {"@type": "Answer", "text": "Elles restent valables et sont conservées dans leur format d'origine ; la nouvelle séquence continue sans trou."}},
      {"@type": "Question", "name": "Faut-il reprendre tout l'historique ?", "acceptedAnswer": {"@type": "Answer", "text": "Pas pour la conformité : encours et continuité de numérotation suffisent au démarrage."}}
    ]}
  ]
}
```

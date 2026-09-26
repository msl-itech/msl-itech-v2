# Formule de scoring lead — MSL-iTECH

## Formule

```
Score (0–100) = Taille + Outil actuel + Urgence + Email + Téléphone + Outil utilisé
```

---

## Détail des points

### Taille de l'entreprise

| Collaborateurs | Points |
|----------------|--------|
| > 50           | 25     |
| 20–50          | 15     |
| 10–20          | 10     |
| < 10           | 5      |

### Outil actuel

| Outil        | Points |
|--------------|--------|
| Sage         | 20     |
| Excel / Word | 18     |
| Odoo         | 15     |
| Autre        | 10     |

### Urgence

| Situation                                      | Points |
|------------------------------------------------|--------|
| DGI — déjà concerné / le plus vite possible   | 20     |
| Cette année                                    | 15     |
| En réflexion (12–24 mois)                      | 8      |
| Curieux / je me renseigne                      | 2      |

### Qualité du contact

| Critère                        | Points |
|--------------------------------|--------|
| Email professionnel            | 15     |
| Email perso (Gmail, Yahoo…)    | 5      |
| Téléphone renseigné            | 10     |

### Outil utilisé (bonus intention)

| Outil                 | Points |
|-----------------------|--------|
| Simulateur DGI        | 10     |
| Calculateur ROI ERP   | 10     |
| Comparateur Sage-Odoo | 8      |
| Diagnostic Digital    | 5      |

---

## Segments

| Score  | Segment |
|--------|---------|
| ≥ 55   | Chaud   |
| 35–54  | Tiède   |
| < 35   | Froid   |

---

## Exemple

**Test du 25/09/2026 — Simulateur DGI**

| Critère        | Valeur            | Points |
|----------------|-------------------|--------|
| Taille         | 10–20 pers.       | 10     |
| Outil actuel   | Excel / Word      | 18     |
| Urgence        | D'ici 12 à 24 mois | 8    |
| Email          | Gmail (perso)     | 5      |
| Téléphone      | Non renseigné     | 0      |
| Outil utilisé  | Simulateur DGI    | 10     |
| **Total**      |                   | **51 → Tiède** |

---

*Source : `src/lib/lead-scoring.ts`*

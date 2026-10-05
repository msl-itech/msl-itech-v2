# T13 — Checklist de vérification

05/10/2026 · À cocher au fil de l'exécution · Junior → El Houssine pour feu vert final

---

## Prérequis P1 — Réponses dans le fil du lead

- [ ] Envoi d'un email depuis un lead de test (bouton « Envoyer un message »)
- [ ] Réponse depuis une boîte Gmail externe
- [ ] La réponse apparaît dans le fil de discussion du lead *(si non → corriger Reply-to des modèles 372–379)*
- [ ] Le vendeur reçoit la notification de réponse
- [ ] Même test en répondant à un email issu des modèles 372–379 (accusés + diagnostics) → réponse dans le fil

---

## Prérequis P2 — Automatisations d'arrêt MSL-iTECH ✅ partiellement script

- [x] Règles d'arrêt MFINANCES « réponse reçue » et « rendez-vous pris » identifiées et lues
- [x] Règle existante MSL (id=86) mise à jour pour stopper sur `rendez-vous pris` (35) **ET** `réponse reçue` (36) *(script P2)*
- [ ] Règle « réponse reçue » dupliquée pour MSL-iTECH (condition société = MSL-iTECH) — *à vérifier si besoin d'une règle séparée*
- [ ] Règle « rendez-vous pris » dupliquée pour MSL-iTECH — *à vérifier si besoin d'une règle séparée*
- [ ] Les deux nouvelles règles sont **activées**
- [ ] Test : poser manuellement l'étiquette `réponse reçue` sur un lead de test → la règle se déclenche
- [ ] Test : poser manuellement l'étiquette `rendez-vous pris` sur un lead de test → la règle se déclenche
- [ ] Noté (sans corriger) : les réponses automatiques d'absence sont-elles filtrées ?

---

## Bloc D — Motifs de perte

### D1 — Liste des motifs ✅ script

- [x] Motifs existants listés (vérifier ce qui est commun MSL-iTECH / MFINANCES)
- [x] `Sans réponse` présent ou créé *(id=8)*
- [x] `Budget insuffisant` présent ou créé *(id=9)*
- [x] `Projet reporté` présent ou créé *(id=10)*
- [x] `Choix d'un concurrent` présent ou créé *(id=11)*
- [x] `Outil actuel conservé` présent ou créé *(id=12)*
- [x] `Hors cible` présent ou créé *(id=13)*
- [x] `Doublon` présent ou créé *(id=14)*
- [x] `Test ou spam` présent ou créé *(id=15)*
- [x] `Non renseigné` présent ou créé *(id=16 · usage automatique uniquement)*
- [x] Aucun motif existant renommé ou supprimé

### D2 — Automatisation rattrapage perdus sans motif ✅ script

- [x] Règle `MSL — Rattrapage leads perdus sans motif` créée *(rule id=88)*
- [x] Déclencheur : Après la dernière mise à jour · délai 15 min
- [x] Conditions : société = MSL-iTECH · actif = faux · probabilité = 0 · motif de perte vide
- [x] Action 1 : motif de perte → `Non renseigné` *(action id=2220)*
- [x] Action 2 : email au commercial du lead avec lien direct vers le lead *(action id=2221)*
- [ ] **Test 1** : marquer un lead perdu **sans motif** → porte `Non renseigné` dans les 30 min ✓
- [ ] **Test 2** : marquer un lead perdu **avec motif** → conserve son motif ✓
- [ ] Commercial du lead reçoit bien l'email de notification

### D3 — Filtre favori ✅ script

- [x] Filtre `Perdus — Non renseigné` créé *(filter id=338)* (actif = faux + motif = Non renseigné + société = MSL-iTECH)
- [x] Filtre coché **Partagé** *(user_ids vide = partagé)*
- [ ] Filtre visible dans le pipeline pour El Houssine

---

## Bloc A — Rappels internes vendeur

### A0 — Modèle email URGENT (pour A3) ✅ script

- [x] Modèle `URGENT — Lead ERP sans appel 48 h` créé *(template id=380)*
- [x] S'applique à : `Piste/Opportunité`
- [x] Destinataire : `houssine@msl-itech.com`
- [x] Objet contient le nom du lead en champ dynamique
- [x] Corps contient : nom, société, outil source, vendeur assigné, lien direct
- [ ] Aperçu depuis un lead de test : les champs dynamiques s'affichent correctement

### A1 — Rappel H+20 (toutes équipes) ✅ script

- [x] Règle `MSL — Rappel vendeur H+20` créée *(rule id=89)*
- [x] Déclencheur : Après la création · délai **20 heures**
- [x] Conditions : société = MSL-iTECH · étape = Nouveau · actif · étiquette parmi (Odoo ERP / Site web / Marketing digital) · sans `rendez-vous pris`
- [x] Action : activité type `À faire` · résumé correct · assignée au **vendeur dynamique** · échéance aujourd'hui *(action id=2222)*
- [ ] **Test** : dupliquer A1 avec délai 15 min → activité créée sur le bon vendeur → supprimer la copie

### A2 — Escalade H+48, Web & Marketing ✅ script

- [x] Règle `MSL — Escalade Web&Marketing H+48` créée *(rule id=90)*
- [x] Déclencheur : Après la création · délai **48 heures**
- [x] Conditions : condition commune + équipe = `Web & Marketing`
- [x] Action 1 : activité `À faire` assignée à **El Houssine BOUHMAIDA** (fixe) · échéance aujourd'hui *(action id=2223)*
- [x] Action 2 : note dans le fil du lead *(dans le même code Python)*
- [ ] **Test** : dupliquer A2 avec délai 15 min → activité chez El Houssine + note dans le fil → supprimer la copie

### A3 — Rappel renforcé H+48, ERP Odoo ✅ script

- [x] Règle `MSL — Rappel renforcé ERP H+48` créée *(rule id=91)*
- [x] Déclencheur : Après la création · délai **48 heures**
- [x] Conditions : condition commune + équipe = `ERP Odoo`
- [x] Action 1 : email → modèle `URGENT — Lead ERP sans appel 48 h` *(action id=2224 · mail_post → template 380)*
- [x] Action 2 : activité `À faire` assignée à **El Houssine BOUHMAIDA** (fixe) · échéance aujourd'hui *(action id=2225)*
- [ ] **Test** : dupliquer A3 avec délai 15 min → email reçu par El Houssine + activité créée → supprimer la copie

---

## Bloc C — Correction des 4 campagnes existantes

### C0 — Archiver les vieux mailings ✅ script

- [x] Mailing **210** archivé (campagne 21)
- [x] Mailing **215** archivé (campagne 22)
- [x] Mailing **220** archivé (campagne 23)
- [x] Mailing **225** archivé (campagne 24)
- [x] Aucun mailing supprimé (archivage uniquement)

### C1 — Filtres mis à jour dans les 4 campagnes ✅ script

- [x] Campagne 21 : filtre commun ajouté (société / étape / actif / email / sans réponse reçue / sans rdv pris)
- [x] Campagne 22 : filtre commun ajouté
- [x] Campagne 23 : filtre commun ajouté
- [x] Campagne 24 : filtre commun ajouté

### C2 — Structure vérifiée (4 relances + clôture) ✅ script

**Campagne 21 — Conformité DGI**
- [x] Relance 1 (mailing 211) : J+3 *(activité 100)*
- [x] Relance 2 (mailing 212) : +4 jours *(activité 101)*
- [x] Relance 3 (mailing 213) : +7 jours *(activité 102)*
- [x] Relance 4 (mailing 214) : +16 jours *(activité 103)*
- [x] Activité clôture : +7 jours · action serveur 2226 · activité pour El Houssine *(activité 104)*

**Campagne 22 — ROI ERP**
- [x] Relance 1 (mailing 216) : J+3 *(activité 105)*
- [x] Relance 2 (mailing 217) : +4 jours *(activité 106)*
- [x] Relance 3 (mailing 218) : +7 jours *(activité 107)*
- [x] Relance 4 (mailing 219) : +16 jours *(activité 108)*
- [x] Activité clôture : +7 jours · action serveur 2227 · activité pour El Houssine *(activité 109)*

**Campagne 23 — Diagnostic Digital**
- [x] Relance 1 (mailing 221) : J+3 *(activité 110)*
- [x] Relance 2 (mailing 222) : +4 jours *(activité 111)*
- [x] Relance 3 (mailing 223) : +7 jours *(activité 112)*
- [x] Relance 4 (mailing 224) : +16 jours *(activité 113)*
- [x] Activité clôture : +7 jours · action serveur 2228 · activité pour El Houssine *(activité 114)*

**Campagne 24 — Comparateur Sage-Odoo**
- [x] Relance 1 (mailing 226) : J+3 *(activité 115)*
- [x] Relance 2 (mailing 227) : +4 jours *(activité 116)*
- [x] Relance 3 (mailing 228) : +7 jours *(activité 117)*
- [x] Relance 4 (mailing 229) : +16 jours *(activité 118)*
- [x] Activité clôture : +7 jours · action serveur 2229 · activité pour El Houssine *(activité 119)*

### C3 — Contenu des 16 mailings corrigé ✅ script

> Appliqué à chacun des mailings 211–214, 216–219, 221–224, 226–229.

**Dates dépassées**
- [x] Aucune occurrence de `Q1 2026` → remplacé par `avant l'échéance qui vous concerne`
- [x] Aucune occurrence de `serein pour 2026` → remplacé par `serein pour vos prochaines échéances`
- [x] Aucune autre date 2026 dans le corps du texte

**Contradiction DGI — mailing 211 uniquement**
- [x] Phrase affirmant qu'un PDF signé est rejeté → remplacée par la phrase provisoire du cahier

**Faute**
- [x] `Décisions plus vites` → `Décisions plus rapides` (chercher dans les 16 mailings)

**Salutation**
- [x] Valeur par défaut du prénom : `là` → `Madame, Monsieur` dans les 16 mailings

**Reply-to**
- [x] Champ « Répondre à » vidé dans les 16 mailings (réponse revient dans le document)

**Désinscription**
- [x] Bloc « Se désinscrire » géré par `use_exclusion_list: true` sur les 16 mailings

---

## Bloc B — Création des 2 nouvelles campagnes formulaire

### Campagne B1 — Relances formulaire ERP Odoo *(nouvelle)* ✅ script

- [x] Campagne `Relances formulaire — ERP Odoo` créée *(campagne id=27)*
- [x] Cible : `Piste/Opportunité` · unicité : email du contact
- [x] Filtre : société MSL-iTECH · outil source = Formulaire de contact · étiquette Odoo ERP · étape Nouveau · actif · email renseigné · sans `réponse reçue` · sans `rendez-vous pris`
- [x] Expéditeur : El Houssine BOUHMAIDA · `houssine@msl-itech.com`
- [x] Email 1 (J+2) : mailing 230 · objet `Votre demande Odoo : quand peut-on échanger ?` *(activité 120)*
- [x] Email 2 (J+7) : mailing 231 · objet `Votre projet Odoo : deux repères en attendant` *(activité 121)*
- [x] Email 3 (J+21) : mailing 232 · objet `Je clôture votre demande ?` *(activité 122)*
- [x] Action serveur (J+28) : action 2230 · activité `À faire` pour le commercial *(activité 123)*
- [ ] **Test** : bouton « Lancer un test » → exécuter chaque activité sur un lead de test · email reçu correct

### Campagne B2 — Relances formulaire Web & Marketing *(nouvelle)* ✅ script

- [x] Campagne `Relances formulaire — Web & Marketing` créée *(campagne id=28)*
- [x] Cible : `Piste/Opportunité` · unicité : email du contact
- [x] Filtre : société MSL-iTECH · outil source = Formulaire de contact · étiquette Site web **OU** Marketing digital · étape Nouveau · actif · email renseigné · sans `réponse reçue` · sans `rendez-vous pris`
- [x] Expéditeur : Manal AIT AYAD · `manal@msl-itech.com`
- [x] Email 1 (J+2) : mailing 233 · objet `Votre projet web : quand peut-on échanger ?` *(activité 124)*
- [x] Email 2 (J+7) : mailing 234 · objet `Un audit gratuit de votre site ?` *(activité 125)*
- [x] Email 3 (J+21) : mailing 235 · objet `Je clôture votre demande ?` *(activité 126)*
- [x] Action serveur (J+28) : action 2231 · activité `À faire` pour le commercial *(activité 127)*
- [ ] **Test** : bouton « Lancer un test » → exécuter chaque activité sur un lead de test · email reçu correct

---

## Recette finale — avant de lancer B et C

- [ ] **Arrêt** : passer un lead de test hors de l'étape Nouveau → l'activité suivante de la campagne est refusée
- [ ] **Désinscription** : cliquer le lien de désinscription → email mis en liste noire → activité suivante refusée
- [ ] **Salutation** : tous les emails affichent `Madame, Monsieur` quand le prénom est vide
- [ ] **Liens** : tous les liens dans les emails sont cliquables et mènent à la bonne page
- [ ] **Signature** : une seule signature par email, expéditeur conforme au tableau du cahier
- [ ] Leads de test créés pendant la recette **supprimés**

---

## Livraison

Junior envoie à El Houssine :
- [ ] Cette checklist complètement cochée
- [ ] Noms exacts des règles Studio créées (A1, A2, A3, D2)
- [ ] Noms exacts des campagnes créées (B1, B2)
- [ ] Confirmation que les campagnes C (21–24) sont corrigées mais **pas encore lancées**

→ El Houssine donne le feu vert · Junior lance les campagnes B et C.

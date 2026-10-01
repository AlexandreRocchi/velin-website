---
title: "Vélin : la PSSI vivante, reliée à vos risques"
description: "Pourquoi un deuxième outil après Beffroi, pourquoi ce nom, et ce que Vélin va changer dans la façon d'écrire une politique de sécurité."
date: 2026-10-01
tags: ["Annonce"]
---

Vélin est une application libre et auto-hébergée pour **rédiger, valider et faire vivre la politique
de sécurité des systèmes d'information (PSSI)** d'une organisation, en équipe. Elle part des
référentiels publics (ANSSI, NIS 2) et relie chaque règle aux risques analysés dans
[Beffroi](https://alexandrerocchi.github.io/beffroi-website/).

> Beffroi dit quels risques traiter ; Vélin écrit les règles qui les traitent.

Les deux outils forment la partie gouvernance d'une même suite souveraine. Vélin est aujourd'hui en
conception : ce billet en pose les intentions.

## Pourquoi « Vélin »

Le vélin était le parchemin le plus fin, réservé aux actes officiels et aux textes qu'on voulait faire
durer. Une PSSI est exactement cela : le texte de référence, validé par la direction, qui fixe les
règles de toute l'organisation. Le nom prolonge l'univers médiéval et civique de Beffroi, dont la tour
abritait justement les chartes de la ville.

## Le problème

La plupart des PSSI sont rédigées dans un traitement de texte, à partir d'un modèle trouvé en ligne,
puis oubliées dans un dossier partagé. Cela pose quatre problèmes concrets :

- **Déconnectée des risques** : personne ne sait quelle règle traite quel risque, ni ce qu'il faut
  revoir quand le contexte change.
- **Générique** : un modèle de 80 pages appliqué tel quel à une PME de 30 personnes est illisible et
  inapplicable.
- **Figée** : pas de revue planifiée, pas d'historique lisible, des dérogations accordées par courriel
  et jamais suivies.
- **Invérifiable** : impossible de prouver à un auditeur ou à l'autorité NIS 2 quelles exigences sont
  couvertes, qui a validé quoi et quand.

Les outils GRC qui règlent ces problèmes sont souvent des SaaS étrangers et coûteux, incompatibles avec
les contraintes d'un acteur public ou d'une entité sensible.

## La réponse de Vélin

Six blocs suivent le cycle de vie d'une PSSI : **démarrer** (assistant de cadrage, bibliothèque de
référentiels, reprise de l'existant), **rédiger** (éditeur structuré, variables, architecture
documentaire), **tracer** (matrice de couverture, déclaration d'applicabilité, lien avec Beffroi),
**valider** (circuit de validation, visa horodaté, versions), **faire vivre** (suivi de mise en œuvre,
dérogations, revue) et **diffuser** (exports, mention de protection).

Le tout avec l'ADN de Beffroi : libre (Apache-2.0), auto-hébergé, sans aucune requête sortante,
chiffré, gratuit et pensé d'après les guides de l'ANSSI. Le détail est sur la page
[Fonctionnalités](../../fonctionnalites/).

## Et maintenant

Le code sera publié dès qu'une première version sera utilisable. D'ici là, ce blog racontera la
conception, et Beffroi reste disponible pour analyser les risques que Vélin traitera.

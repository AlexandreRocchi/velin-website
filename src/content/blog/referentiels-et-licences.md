---
title: "Ce que Vélin embarquera, et ce qu'il n'embarquera pas"
description: "Guides ANSSI, PSSIE, PGSSI-S, NIS 2, ISO 27001 : tous les référentiels ne se redistribuent pas librement. Notre règle du jeu."
date: 2026-10-01
tags: ["Référentiels", "Licences"]
---

Une PSSI ne s'écrit jamais à partir de rien : elle s'appuie sur des référentiels. Vélin en proposera
une bibliothèque, avec des règles types prêtes à adapter. Mais un logiciel libre ne peut embarquer que
ce qu'il a le droit de redistribuer, et **tout ne l'est pas**.

## La règle du jeu

| Référentiel | Usage dans Vélin | Point d'attention |
|---|---|---|
| Guides ANSSI (hygiène, PSSI, homologation) | Texte des règles types embarqué | En général sous Licence Ouverte Etalab : réutilisable avec mention de la source, à vérifier guide par guide |
| PSSIE | Règles types pour les acteurs publics | Texte public, citer la source |
| PGSSI-S | Règles types pour la santé | Texte public, citer la source |
| NIS 2 et sa transposition | Exigences et correspondances | Texte de loi, réutilisable |
| ISO 27001 / 27002 | Correspondances par numéro de mesure seulement | Texte protégé par le droit d'auteur : il n'est pas embarqué |

## Le cas ISO 27001 / 27002

Les normes ISO sont protégées par le droit d'auteur. Vélin ne reprendra donc **que les numéros de
mesures**, pour établir les correspondances (par exemple, telle règle de sauvegarde couvre telle
mesure). L'organisation qui dispose d'une copie sous licence pourra l'importer elle-même : le texte
restera chez elle, comme le reste de ses données.

## Des correspondances vérifiables

Chaque correspondance entre une règle et un référentiel sera documentée, pour qu'un auditeur puisse la
contrôler, et les mises à jour des référentiels arriveront par paquets signés, importés hors ligne,
avec la liste des règles impactées.

Comme Beffroi, Vélin n'est ni labellisé ni approuvé par l'ANSSI, et les marques citées appartiennent à
leurs titulaires.

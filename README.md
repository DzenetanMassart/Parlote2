# Parlote2

## La version précédente:
[Cliquer ici pour accéder à la version précédente](https://github.com/DzenetanMassart/Parlote) !

## But

Le but de Parlote est d'animer la bouche d'un personnage selon le volume sonore du microphone en live !

## Ajout de la version 2
Si la première version donnait une base en Canvas seulement (ce qui peut être intéressant pour la création d'une application de base), le support de l'image se devait d'être possible pour augmenter l'accessibilité du projet !

## Le fonctionnement

Pour le canvas: 3 canvas (tête,fond de la bouche et bouche) sont chargés dans l'ordre énoncé ! Ils sont ensuite mis en position absolue et les canvas sont soumis au script permettant les transformations en fonction de l'intensité du microphone arrondit et divisé soit par 500,soit par 100 avant de rajouter au résultat " 1 " !

Pour l'image, 3 images (tête,fond de la bouche et bouche) sont intégrées dans l'ordre énoncé ! Ils sont ensuite mises en position absolue et les images sont soumises au script permettant les transformations en fonction de l'intensité du microphone arrondit et divisé soit par 500, soit par 100 avant de rajouter au résultat " 1 " !

Les images et les canvas mesures 200px² par défaut (sans les transformations) !

La structure est très permissive en terme de mesures au-delà du contour, vous avez toute l'espace requise pour faire une bouche différente!

## Sites pour créer des têtes

Afin d'être sur que tout le monde puisse en profiter, voici des sites pour créer les têtes:

Pour le Canvas, je remercie [John King](https://github.com/canvimation?tab=repositories) pour Canvimation: http://canvimation.github.io/

Pour l'image, Photopea représente une bonne alternative à Photoshop en ligne: https://www.photopea.com/


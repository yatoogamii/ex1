# Algo de tri

Une méthode de travail consiste à écrire le test unitaire d'une fonction avant d'écrire la fonction elle même. Mais encore faut-il connaitre le comportement de cette fonction, ce qu'on attend comme comportement en la soumettant à des données.

Le test est déjà écrit. A vous d'écrire la fonction correspondante.

### Le cas

Nous avons des candidats qui parlent soit anglais, soit espagnol, soit allemand, soit italien, soit rien, soit n'importe quelle combinaison de ces langues.

Ils parlent tous avec un niveau soit ecellent (1), soit bon (2), soit débutant (3).

En tant que recruteur, je cherche des gens parlant une ou plusieurs de ces langues, avec un niveau excellent (1), bon(2) ou débutant(3). Pour moi ce critère est soit impératif (required=true) soit facultatif (required=false).

### L'object de la fonction

La fonction prend un tableau de candidats en json : par exemple :
```json
[ {"name": "elias", "languages": [{ "language": "english", "level": 2 }, {"language": "german", "level": 1 } ] }, ................... ]
```

Et un objet contenant la demande du recruteur, par exemple : 
```json
{ "language": "spanish", "level": 2, "required": true }
```

### Le resultat

La fonction doit éliminer tous les candidats ne correspondant pas au moins à la demande. Bien entendu elle conserve ceux qui excèdent la demande (en parlant mieux la langue que ce qui est demandé)

## BUT 1

entrer une demande d'un recruteur, et les candidats suivants (qui seront envoyés à la fonction pour le test) : 
- un candidat qui vérifie pile la demande (langues et niveau) 
- un candidat qui ne parle pas les langues de la demande mais parle d'autres langues avec un très bon niveau
- un candidat qui parle exactement les langues de la demande mais pas assez bien 
- un candidat qui parle exactement les langues de la demande et encore mieux que ce qui est demandé 
- un candidat qui parle les langues demandées, mieux, et en plus d'autres langues non demandées.

## BUT 2

Vérifier en sortie que ceux qui doivent se trouver s'y trouvent bien , et ceux qui ne doivent pas s'y trouver ne s'y trouvent pas

Lancer le test, il doit évidement échouer puisque la fonction est vide.

## BUT 3

Ecrire la fonction de tri, les tests doivent tous renvoyer ok !

## BUT 4

Ecrire une nouvelle fonction qui chronomètre l'execution de 100.000 fois son execution OU une fonction qui compte combien de fois la fonction s'éxecute en 10s 

Lancer cette fonction.

### Commandes utiles 

(execute ces commandes à la racine du projet)

install les dépendences avec: 
```
npm run i
```

lance les tests avec: 
``` 
npm run test
```

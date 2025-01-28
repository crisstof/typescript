# typescript
javascript.typescript


Notion ts:
.ts   ----> tsc (transcompile)  ----> en js brut  ---->  webpack   ou  vitejs -----> crée un bundle.js

créer un package.json ::
>npm init -y
crée un package-lock.json et installe node_module pour le .bin de la cli pour le npm run test
>npm install typescript
ajoute dans package.json:
 "scripts": {
    "tsc": "tsc",
et > npm run tsc   execute le tsc.js  lance lib>tsccmd  >> typescript>bin>lib>tsc.js (code typescript compiler en javascript)
Et   "init": "tsc --init",     cil va créer le tsconfig.json fichier de config pour tsc (pour l'ensemble de nos fichier)

créer un tsconfig.json ::
>npm run init

avec le bout de class dans main.js
génère le code::
>npm run tsc 

le tsc a lu le ts.config et a créer un main.js (javascript brut)

côté html 
et le tester en local avec l'extension: Live Server click droit sur index.html ouvrir avec liveServer

pour les chemins directories
on peut dire de générer nos js dans un autre fichiers la config est le tsconfig.json : outDir
petite apparté: vscode à un ts qui tourne en tâche de fond pour les erreurs au fil de l'eau mais
pour une vrai vérification il faut la cli > npm run ts

mais si on veut après compilation dans un repertoire dist à la racine.


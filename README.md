# typescript
javascript.typescript


Notion ts:
.ts   ----> tsc (transcompile)  ----> en js brut  ---->  webpack   ou  vitejs -----> crée un bundle.js

Commencer le projet:
>npm init -y      //créer un package.json
Installer pour faire du typescript:
>npm install typescript
//crée un package-lock.json et installe node_module qui contient par exemple le .bin de la cli 
pour le npm run test il va exécuter le code script dans le package.json
ainsi on peut rajouter des scripts comme les suivants
ajoute dans package.json:
 "scripts": {
    "tsc": "tsc", //on peut maintenant exécuter
>npm run tsc   execute le tsc.js  lance lib>tsccmd  >> typescript>bin>lib>tsc.js (code typescript compiler en javascript)
On peut aussi faire 
    "init": "tsc --init",     cli va créer le tsconfig.json fichier de config pour tsc (pour l'ensemble de nos fichier)

créer un tsconfig.json  pour tsc pour qu'il soit ts compilable, il prend l'ensemble des fichiers:
>npm run init   //crée un tesconfig et ici nous avons target:"ES6" ...

Nous créons le main.ts un class et on génère le code tsc:
>npm run tsc     //le tsc a lu le ts.config et a créer un main.js (javascript brut)

côté html pour le tester en local avec l'extension Live Server:
                 Live Server click droit sur index.html ouvrir avec liveServer

pour les chemins directories
on peut dire de générer nos js dans un autre fichiers la config est le tsconfig.json : outDir
petite apparté: vscode à un ts qui tourne en tâche de fond pour les erreurs au fil de l'eau mais
pour une vrai vérification il faut la cli 
>npm run tsc
click droit sur le html > live server > ctrl+mag+i console on doit avoir Je mange
mais si on veut après compilation dans un repertoire dist à la racine. (automatique avec webpack)
le principe une classe un fichier typescript on se retrouve avec beaucoup de fichier mais,
certain ne serons pas utiliser: secouage d'arbre
Pour compiler ce qu'on a vraiment besoin à partir d'un point centrale sur une recherche en étoile (rech recusive):
dans tsconfig.json ajouter après 
"compilerOptions":{...
},
"file":{
    "src/main.ts"   //tu vas à partir
}


--------------------------------------------------------------------------------------------
2 partie:
---------
install webpack
>npm install webpack-cli
>npm install ts-loader    //charger le typescript depuis webpack
>npm install html-webpack-plugin    //prendre le html est de le générer automatiquement comme angular
ce qui va écrire automatiquement  donc supprimer
<script src="../main.js"></script>
    <script>
        const pers = new personne();
        pers.manger();
    </script>

créer un fichier webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
-----------------------------------------------------------------------------------------------
//configuration pour webpack on va renvoyer un objet
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//configuration pour webpack on va renvoyer un objet
module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: './src/main.ts', //on démarre de quel fichier
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    optimization: {
        emitOnErrors: true,
        //noEmitOnErrors: true, deprected

    },
    watch: true,  //pour regarder ce qu'il se passe
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',//va chercher index
            inject: 'body', //et l'indexé dans le body
            template: 'src/template/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',

            },
        ],
    },
},
-----------------------------------------------------------------------------------------------

   avec ls directives de webpack
et dans la package.json le build en dessous de init
     "init": "tsc --init",
    "build": "webpack --mode development", plutôt ça: "build": "webpack --config=webpack.config.js",
    pour un webpack en mode production ou development (pas de source map qui permet de débuger le typescript coté console )

>npm run build
il a créer dans le dossier dist un main.js et index.js (ajout du code <script defer src="main.js"></script></body> )
Le code a été bundler

Réorganisons
le main et l'orchestreur donc nous devons pas avoir de class
on crée dans le src un person.ts où l'on mets la classe person
on compile 
[tsl] ERROR in D:\github\typescript\typescripts\src\person.ts(1,7)
      TS2300: Duplicate identifier 'person'.

mais en typescript il faut exporter la classe pour l'importer dans le main
import {person} from './person';

let frodon = new person();
frodon.manger();
// Output: Je mange

comme nous avons le watch dans webpack le terminal nous pouvons voir que la compilation se met à jour
onpeut isoler un fichier class c'est une isolation en namespace (package)
on peut aussi faire avec export default person donc pas besoin d'accolade c'est plutôt l'entité qui représente ce fichier.
résultat je mange.






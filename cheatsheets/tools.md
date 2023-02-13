NodeJS

Conoscere versione di NodeJS installata
node --version

Eseuire un file .js attraverso NodeJS
node ./index.js

NPM -Node package manager
npm install <alias>
Es. 
npm install bootstrap

aggiunta parametro per salvare la mia dipendenza tra le devDependencies (usate solo come tool di sviluppo) o le dependencies (usate dal sito pe funzionare)

se voglio installare la mia dipendenza di sviluppo
npm install <alias> --save-dev

se voglio installare la mia dipendenza che deve far funzionare il sito
npm install <alias> --save


Inizializzazione di un progetto npm -> pubblicabile sul registry pubblico di npm (https://registry.npmjs.com)
npm init

se voglio rispondere automaticamente all'init del mio progetto
npm init -y

Comandi console:
ls mac
dir windows
pwd (mi dice il percorso nel quale mi trovo)
Créer un nouveau projet React :

shell
npx create-react-app nom-du-projet

Remplacez nom-du-projet par le nom que vous souhaitez donner à votre application. Cette commande crée un nouveau dossier avec tous les fichiers nécessaires pour votre projet React.

. Lancer le serveur de développement React
Une fois dans le dossier de votre projet, vous pouvez démarrer le serveur de développement.

shell
npm install react-router-dom
Permet de créer des Routes dans le dossier App.js
import {BrowserRouter , Routes , Route} from 'react-router-dom';


Démarrer le projet React :
shell
npm start


Cette commande démarre le serveur de développement React. Votre application sera automatiquement ouverte dans votre navigateur par défaut à l'adresse http://localhost:3000.


Construire l'application pour la production
Pour déployer votre application, vous devrez créer une version de production.

Construire l'application :
shell
npm run build
Cette commande crée une version optimisée de votre application dans un dossier build.


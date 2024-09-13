import Image from "@/components/ui/image";
import Title from "@/components/ui/title";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto font-kennerly px-16">
      <div className="flex justify-between mt-6">
        <div>
          {" "}
          <Title
            type="h2"
            content="Alternance chez Mobalib"
            style="font-bold dark:text-primary-200"
          />
          <p className="text-primary-400  leading-10 font-light tracking-wide">
            9/2021-12/2021
          </p>
        </div>
        <div>
          <Image
            src="/logo/lifat-full.png"
            height={120}
            width={150}
            alt="Université de Tours logo"
          />
        </div>
      </div>
      <div className="flex justify-end text-gray-500 text-bold text-lg italic pb-8">
        <p>HTML, CSS, Javascript, NodeJS, Git, Gitlab, Procreate.</p>
      </div>
      <div className="mt-8">
        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 pb-10 leading-9 text-justify">
          Dans le cadre de ma formation “DÉVELOPPEUR WEB ET WEB MOBILE”, j’ai
          effectué un stage de développement web au sein du Laboratoire
          d’Informatique Fondamentale et Appliquée de Tours (LIFAT). Il conçoit
          et développe des modèles, des méthodes et des algorithmes et de
          fournir des ressources et des logiciels pour extraire des
          informations, tire des connaissances des données, en intégrant
          l’interaction homme-machine (IHM), et résout des problèmes
          d’optimisation combinatoire avec la volonté d’obtenir de bons
          résultats avec un bon temps de calcul.
        </p>

        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 leading-9 text-justify pb-10">
          Je travaille sur un projet de développement d&rsquo;une application en
          ligne. Le but du projet est de proposer une application/logiciel léger
          et gratuit pour un support visuel pour les visioconférences en direct.
          Le point principal est d&rsquo;optimiser la consummation
          d&rsquo;énergie. Il propose trois outils suivants :
          <span className="block px-8 mt-5">
            — Affichage et annotation de diapositives : diffusion de
            diapositives en direct, qui peuvent être éditées avec des outils de
            dessin simples. Les utilisateurs de stylet peuvent afficher des
            diapositives vierges et les utiliser comme une série de petits
            tableaux blancs fixes (figure 1). Les outils de dessin sont
            construits sur le code source du tableau blanc collaboratif en
            ligne. Dans le stage, le travail est appuyé sur cette
            fonctionnalité. Donc, une présentation plus détaillée sur le projet
            est donnée juste après.
          </span>{" "}
          <span className="block px-8 mt-5">
            {" "}
            — Tableau de texte formaté en ligne : affichage en direct du texte,
            éventuellement formaté avec des tags HTML, y compris le formatage du
            code source avec Prism et l&rsquo;affichage mathématique avec jqMath
            (figure 2).
          </span>
          <span className="block px-8 mt-5">
            {" "}
            — Diffusion de terminal virtuel : affichage en direct d&rsquo;un
            terminal virtuel, en utilisant Xterm.js.
          </span>
        </p>

        <div className="flex justify-center my-6 gap-24">
          <div className="flex justify-center gap-1 flex-col">
            <Image
              src="/projects/lifat/openning_screen.png"
              height={400}
              width={400}
              alt="Capture d'écran du site Mobalib"
              className="rounded-lg shadow "
            />

            <p className="text-xs text-gray-400 text-plantin text-center pt-1">
              Figure 1. L&rsquo;écran principal de la fonctionnalité de
              diffusion de diaporama.
            </p>
          </div>
          <div className="flex justify-center gap-1 flex-col">
            <Image
              src="/projects/lifat/remote_textboard.png"
              height={400}
              width={400}
              alt="Interface de la fonctionnalité Demo"
              className="rounded-lg shadow "
            />

            <p className="text-xs text-gray-400 text-plantin text-center">
              Figure 2. L&rsquo;interface de la fonctionnalité "Tableau de texte
              formaté en ligne".
            </p>
          </div>
        </div>
        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 leading-9 text-justify pb-10">
          Le diaporama est beaucoup utilisé comme support de cours magistral.
          Son contenu est déterminé à l&rsquo;avance, c&rsquo;est donc
          l&rsquo;outil le plus simple à mettre en œuvre en ligne : chaque
          diapositive est servie comme une image, affichée en plein écran.
          L&rsquo;enseignant peut se contenter de faire défiler les diapositives
          à l&rsquo;aide des touches directionnelles de son clavier, à mesure
          qu&rsquo;il les commente
        </p>
        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 leading-9 text-justify pb-10">
          Pendant mon stage, je travaille principalement sur le développement
          d&rsquo;une fonctionnalité de donner au conférencier la possibilité de
          téléverser un docu- mentde, précisement le téléchargement d&rsquo;un
          fichier de type SVG ou PDF. En plus, la mission pour le téléversement
          les données du côté client au côté serveur avec XMLHtt- pReques est
          étudiée. En même temps, j&rsquo;ai aussi ajouté un bouton pour choisir
          la couleur de l&rsquo;outil &lsquo;Whiteboard&rsquo; dans les outils
          pour dessiner/écrire ou modifier les diapositives. De outre, j’ai
          refait une partie de l&rsquo;interface : ajouter un bouton pour
          changer la couleur de l&rsquo;arrière-plan ; réorganiser
          l&rsquo;affichage des boutons ; création des icônes pour quelques
          boutons ; création des messages d&rsquo;alerte à l&rsquo;utilisateur.
        </p>

        <div className="flex justify-center my-6 gap-24">
          <div className="flex justify-center gap-1 flex-col">
            <Image
              src="/projects/lifat/tele1.png"
              height={400}
              width={400}
              alt="Demo svg telechargement"
              className="rounded-lg shadow "
            />

            <p className="text-xs text-gray-400 text-plantin text-center pt-1">
              (a)
            </p>
          </div>
          <div className="flex justify-center gap-1 flex-col">
            <Image
              src="/projects/lifat/tele2.png"
              height={400}
              width={400}
              alt="Demo svg telechargement pas 2"
              className="rounded-lg shadow "
            />

            <p className="text-xs text-gray-400 text-plantin text-center">
              (b)
            </p>
          </div>
        </div>
        <div className="px-36 text-center tracking-wide  text-primary-600 dark:text-primary-400  text-center mb-12">
          Une démonstration des étapes de vérification du fichier téléchargé au
          client. On assume que nous sommes à la dernière page de présentation
          (a). Puis, un fichier de type .png est choisi, l&rsquo;utilisateur
          reçoit un message d&rsquo;erreur (b).
        </div>
        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 leading-9 text-justify">
          En général, notre preuve de concept est encourageante, chacun de ces
          outils ayant rempli leurs promesses de simplicité et
          d&rsquo;efficacité lors de nos essais préliminaires. Nous pensons que
          ces outils et les avantages qu&rsquo;ils représentent devraient
          d&rsquo;ores et déjà nous permettre de nous passer des solutions de
          visioconférence que l&rsquo;on met aujourd&rsquo;hui en œuvre, au prix
          d&rsquo;investissement matériels, financiers, mais aussi de
          l&rsquo;indépendance numérique de l&rsquo;enseignement supérieur. Nous
          avons réussi à atteindre nos objectifs de stage. Premièrement, pour la
          partie princi- pale du stage, nous avons pu créer une nouvelle
          fonctionnalité pour données aux utilisateur la possibilité de
          téléverser les diapositives de type PDF ou SVG. Pendant le développe-
          ment, nous avons aussi réussi à optimiser les codes source pour
          traiter et afficher les documents dans le meilleur délai.
          Deuxièmement, nous avons développé un outils qui per- met
          l&rsquo;utilisateur de sélectionner la couleur utilisée par le
          correcteur. Finalement, la partie front-end a été abordée. Nous avons
          refait l&rsquo;interface de la fonctionnalité d&rsquo;affichage des
          diapositives et les nouveaux icônes ont été ajoutés
        </p>
        <p className="text-right text-sm text-gray-400 mt-5"> 12/01/2022</p>
      </div>
    </div>
  );
}

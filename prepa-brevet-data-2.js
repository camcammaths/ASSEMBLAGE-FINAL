var EXERCICES_DB2 = {
  "brevet_amerique_nord_2025": [
    {
      "id": "brevet_amerique_nord_2025_ex1",
      "titre": "cinq situations indépendantes",
      "notion": "Probabilités",
      "source": "Brevet Amérique du Nord · 2025",
      "enonce": "Les cinq situations sont indépendantes. Chaque réponse doit être justifiée sauf indication contraire.",
      "figure": null,
      "questions": [
        {
          "id": "Situation 1",
          "texte": "Une urne contient40 boulesindiscernables au toucher : 5 rouges, 20 vertes et 15 blanches. On tire une boule au hasard. Calculer la probabilité d'obtenir une bouleverte.",
          "points": 4,
          "reponse": "P(verte) = nombre de boules vertes / nombre total de boules\nP(verte) = 20/40 = …"
        },
        {
          "id": "Situation 2",
          "texte": "Décomposer en produit de facteurs premiers le nombre1 050.Aucune justification n'est attendue.",
          "points": 4,
          "reponse": "1050 = 2 × … = 2 × … × … = …"
        },
        {
          "id": "Situation 3",
          "texte": "Un article coûte25 €. Calculer son prix après une augmentation de14 %.",
          "points": 4,
          "reponse": "Augmentation = 25 × 14/100 = … €\nNouveau prix = 25 + … = … € \nOu : 25 × 1,14 = … €"
        },
        {
          "id": "Situation 4",
          "texte": "Le polygone 2 est un agrandissement du polygone 1 de coefficient2,5. L'aire du polygone 1 est7,5 cm². Calculer l'aire du polygone 2.",
          "points": 4,
          "reponse": "Lors d'un agrandissement de coefficient k, l'aire est multipliée par k².\nAire polygone 2 = Aire polygone 1 × k² = 7,5 × (2,5)² = 7,5 × … = … cm²"
        },
        {
          "id": "Situation 5",
          "texte": "Dans une classe de 3e, voici la répartition des tailles des élèves :",
          "points": 4,
          "reponse": "Effectif total = 2+4+2+5+2+4+6+5 = … élèves\nSomme = 152×2 + 157×4 + 160×2 + 162×5 + 165×2 + 170×4 + 174×6 + 180×5\n     = … + … + … + … + … + … + … + … = …\nMoyenne = … / … = … cm",
          "tableau": "<table class=\"brevet-table\">\n<thead>\n<tr>\n<th>Taille (en cm)</th>\n<th>152</th><th>157</th><th>160</th><th>162</th>\n<th>165</th><th>170</th><th>174</th><th>180</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"font-weight:700;text-align:left;padding-left:14px\">Effectif</td>\n<td>2</td><td>4</td><td>2</td><td>5</td>\n<td>2</td><td>4</td><td>6</td><td>5</td>\n</tr>\n</tbody>\n</table>"
        }
      ]
    },
    {
      "id": "brevet_amerique_nord_2025_ex2",
      "titre": "triangles ADE et ABC — pythagore, thalès & trigonométrie",
      "notion": "Géométrie",
      "source": "Brevet Amérique du Nord · 2025",
      "enonce": "La figure ci-dessous n'est pas en vraie grandeur. • A, B, E et M sont alignés  •  A, C et D sont alignés • ADE rectangle en E  •  ABC rectangle en B • AD = 70 m • BC = 30 m • AC = 50 m • angle DME = 60°",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Calculer la longueurAB.",
          "points": 4,
          "reponse": "Triangle ABC rectangle en B → Pythagore :\nAC² = AB² + BC²\n50² = AB² + 30²\nAB² = 2500 − 900 = …\nAB = √… = … m"
        },
        {
          "id": "2.",
          "texte": "Montrer que les droites(DE)et(BC)sontparallèles.",
          "points": 4,
          "reponse": "DE ⊥ EA (angle droit en E) et BC ⊥ BA (angle droit en B).\nEA et BA sont la même droite (A, B, E, M alignés).\nDeux droites perpendiculaires à une même droite sont parallèles entre elles.\nDonc (DE) // (BC). ✓"
        },
        {
          "id": "3.",
          "texte": "Montrer que la longueurDE = 42 m.",
          "points": 4,
          "reponse": "(DE) // (BC), A,B,E,M alignés et A,C,D alignés → Thalès dans triangle ADE/ABC :\nDE/BC = AD/AC ... ou Pythagore dans ADE rectangle en E :\nAD² = DE² + EA²\nAE = AB + BE... ou par Thalès : DE/BC = AE/AB\n\nAutre approche : triangle ADE rectangle en E, AD=70m, AE=AB=40m\nDE² = AD² − AE² = 70² − 40² = 4900 −"
        },
        {
          "id": "4.",
          "texte": "Montrer que la longueurEMest environ égale à24,2 m.",
          "points": 4,
          "reponse": "Dans le triangle DME rectangle en E, angle DME = 60°\ntan(DME) = DE/EM\ntan(60°) = 42/EM\nEM = 42/tan(60°) = 42/√3 ≈ 42/1,732 ≈ … m ✓"
        },
        {
          "id": "5.",
          "texte": "En déduire l'aire du triangleAMD.",
          "points": 4,
          "reponse": "Triangle AMD : base AM = AE − EM = 40 − 24,2 = … m, hauteur = DE = 42 m\nAire = (base × hauteur) / 2 = (… × 42) / 2 = … m²"
        }
      ]
    },
    {
      "id": "brevet_amerique_nord_2025_ex3",
      "titre": "programmes de calcul A et B",
      "notion": "Calcul littéral",
      "source": "Brevet Amérique du Nord · 2025",
      "enonce": "On considère les deux programmes de calcul suivants.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Montrer que, lorsque le nombre choisi est4, le résultat obtenu avec le programme A est5.",
          "points": 2,
          "reponse": "4 → ×3 → 12 → +15 → 27 → ÷3 → 9 → −4 = 5 ✓"
        },
        {
          "id": "2.",
          "texte": "Montrer que, lorsque le nombre choisi est−2, le résultat obtenu avec le programme A est5.",
          "points": 2,
          "reponse": "−2 → ×3 → −6 → +15 → 9 → ÷3 → 3 → −(−2) = 3+2 = 5 ✓"
        },
        {
          "id": "3.",
          "texte": "Justifier que l'affirmation suivante est vraie :« Le programme A donne toujours le même résultat. »",
          "points": 5,
          "reponse": "Soit x le nombre choisi.\nx → ×3 → 3x → +15 → 3x+15 → ÷3 → (3x+15)/3 = x+5 → −x → x+5−x = 5\nLe programme A donne toujours 5, quel que soit x. ✓"
        },
        {
          "id": "4.",
          "texte": "Lorsque le nombre choisi est10, quel résultat obtient-on avec le programme B ?",
          "points": 3,
          "reponse": "10 → soustraire 1 → 9\n10 → soustraire 6 → 4\n9 × 4 = 36 → +5 = …"
        },
        {
          "id": "5.",
          "texte": "Il existe exactementdeux nombrespour lesquels les programmes A et B fournissent des résultats identiques. Quels sont ces deux nombres ?",
          "points": 8,
          "reponse": "Programme A donne toujours 5.\nProgramme B avec x : (x−1)(x−6) + 5\nRésultats identiques → (x−1)(x−6) + 5 = 5\n(x−1)(x−6) = 0\nx−1 = 0 → x = …\nx−6 = 0 → x = …\nLes deux nombres sont … et …"
        }
      ]
    },
    {
      "id": "brevet_amerique_nord_2025_ex4",
      "titre": "course de Malo — graphique & vitesses",
      "notion": "Lecture graphique",
      "source": "Brevet Amérique du Nord · 2025",
      "enonce": "Malo s'entraîne sur un parcours de 13,5 km . La courbe ci-dessous représente la distance parcourue (en km) en fonction du temps écoulé (en minutes).",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Le temps et la distance parcourue par Malo sont-ilsproportionnels?",
          "points": 4,
          "reponse": "Non, car la courbe n'est pas une droite passant par l'origine sur tout le trajet.\nIl y a un palier entre 30 et 40 minutes (Malo s'arrête ou ralentit fortement).\n→ La distance n'est pas proportionnelle au temps."
        },
        {
          "id": "2.",
          "texte": "Quelle distance Malo a-t-il parcourue au bout de20 minutes?Aucune justification n'est attendue.",
          "points": 3,
          "reponse": "Lecture graphique à t = 20 min → distance ≈ … km"
        },
        {
          "id": "3.",
          "texte": "Combien de temps a-t-il mis pour faire les9 premiers kilomètres?Aucune justification n'est attendue.",
          "points": 3,
          "reponse": "Lecture graphique à d = 9 km → temps ≈ … minutes"
        },
        {
          "id": "4.",
          "texte": "Quelle est la vitesse moyenne de Malo lors de cette course ? Résultat audixième de km/h près.",
          "points": 4,
          "reponse": "Distance totale = 13,5 km\nTemps total = 80 min = 80/60 h = …h\nVitesse moyenne = 13,5 / … = … km/h"
        },
        {
          "id": "5.",
          "texte": "Louise court à12 km/het Hillal à10 km/hsur le même parcours de 13,5 km. Ils partent en même temps.",
          "points": 3,
          "reponse": "Temps Louise = 13,5 / 12 = … h = … min\nTemps Hillal = 13,5 / 10 = … h = … min\n→ … est arrivé(e) en premier."
        }
      ]
    },
    {
      "id": "brevet_amerique_nord_2025_ex5",
      "titre": "scratch — motifs, script principal & probabilités",
      "notion": "Scratch",
      "source": "Brevet Amérique du Nord · 2025",
      "enonce": "Aucune justification n'est attendue dans cet exercice.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Les scripts 1 et 2 permettent chacun d'obtenir un des dessins ci-dessous. Associer chacun des scripts à son dessin.",
          "points": 4,
          "reponse": "Script 1 → Dessin …\nScript 2 → Dessin …"
        },
        {
          "id": "2.",
          "texte": "Le script 3 permet d'obtenir le losange ci-contre. La partie effacée contient les 3 instructions A, B et C. Recopier dans le bon ordre les instructions cachées.Chaque instruction ne doit être utilisée qu'une seule fois.",
          "points": 4,
          "reponse": "1re instruction : …\n2e instruction : …\n3e instruction : …"
        },
        {
          "id": "3.",
          "texte": "Quelles sont lescoordonnées du point de départdu lutin ?",
          "points": 2,
          "reponse": "x = … et y = …"
        },
        {
          "id": "4.",
          "texte": "Parmi les 5 captures d'écran proposées ci-dessous,seules deux sont possibles. Lesquelles ?",
          "points": 4,
          "reponse": "Les deux captures possibles sont les n° … et n° …\nCar Motif=3 déclenche 6× Motif3+avancer60 → …\nCaptures impossibles : n°… car …"
        },
        {
          "id": "5.",
          "texte": "On clique sur le drapeau vert et on observe le message affiché. Quelle est la probabilité que le message affiché soit« Voici le dessin ! »?",
          "points": 3,
          "reponse": "Le message 'Voici le dessin !' s'affiche si Motif = 3.\nMotif est tiré au hasard parmi {1, 2, 3} → P(Motif=3) = …/3"
        },
        {
          "id": "6.",
          "texte": "On lance le programme100 fois. Résultats obtenus :",
          "points": 2,
          "reponse": "Fréquence = 40/100 = …",
          "tableau": "<table class=\"brevet-table\">\n<thead><tr><th>Message du lutin</th><th>« Voici le dessin ! »</th><th>« Perdu ! »</th></tr></thead>\n<tbody><tr><td style=\"font-weight:700\">Effectif</td><td>40</td><td>60</td></tr></tbody>\n</table>"
        }
      ]
    }
  ],
  "brevet_asie_2025": [
    {
      "id": "brevet_asie_2025_ex1",
      "titre": "QCM — 4 questions",
      "notion": "Probabilités",
      "source": "Brevet Asie · 2025",
      "enonce": "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée.",
      "figure": null,
      "questions": [
        {
          "id": "Question 1",
          "texte": "Une urne contient 4 boules bleues, 6 boules violettes, 7 boules rouges et 3 boules jaunes. On tire une boule au hasard. Quelle est la probabilité d'obtenir une bouleviolette?",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 2",
          "texte": "Calculer 70 % d'une quantité revient à multiplier cette quantité par :",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 3",
          "texte": "On considère la série composée des 5 valeurs :7 ; 18 ; 12 ; 13 ; 15.",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 4",
          "texte": "Une fonction affinefa pour représentation graphique la courbe 𝒞fci-contre. L'expression de la fonctionfest :",
          "points": 4,
          "reponse": "",
          "tableau": "<table class=\"brevet-table\">\n<tbody>\n<tr><td style=\"text-align:left;padding-left:14px;font-weight:600\">Proposition A</td><td>f(x) = 2x + 4</td></tr>\n<tr><td style=\"text-align:left;padding-left:14px;font-weight:600\">Proposition B</td><td>f(x) = 4x − 2</td></tr>\n<tr><td style=\"text-align:left;padding-left:14px;font-weight:600\">Proposition C</td><td>f(x) = −2x + 4</td></tr>\n<tr><td style=\"text-align:left;padding-left:14px;font-weight:600\">Proposition D</td><td>f(x) = −4x + 2</td></tr>\n</tbody>\n</table>"
        }
      ]
    },
    {
      "id": "brevet_asie_2025_ex2",
      "titre": "triangles CDE et GCF — pythagore, thalès & semblables",
      "notion": "Géométrie",
      "source": "Brevet Asie · 2025",
      "enonce": "Dans la figure ci-contre (pas en vraie grandeur) : • G, C et E sont alignés • F, C et D sont alignés • (GF) // (DE) • Triangle CDE rectangle en D • CD = 21,6 cm • CE = 29,1 cm • FC = 17,2 cm",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Montrer que la longueurDE = 19,5 cm.",
          "points": 4,
          "reponse": "Triangle CDE rectangle en D → Pythagore :\nCE² = CD² + DE²\n29,1² = 21,6² + DE²\nDE² = 846,81 − 466,56 = 380,25\nDE = √380,25 = 19,5 cm ✓"
        },
        {
          "id": "2.",
          "texte": "Calculer l'aire du triangleCDE.",
          "points": 4,
          "reponse": "Triangle CDE rectangle en D :\nAire = (CD × DE) / 2 = (21,6 × 19,5) / 2 = 420,12 / 2 = 210,06 cm²"
        },
        {
          "id": "3.",
          "texte": "Calculer la longueurGFarrondie au millimètre près.",
          "points": 6,
          "reponse": "(GF) // (DE), G-C-E alignés et F-C-D alignés → Thalès :\nGF/DE = FC/CD\nGF = DE × FC/CD = 19,5 × 17,2/21,6 ≈ … cm"
        },
        {
          "id": "4.",
          "texte": "On trace une droite (d) perpendiculaire à (FC) coupant [GC] en A et [FC] en B. L'aire du triangle ABC =23,4 cm².",
          "points": 5,
          "reponse": "Aire CDE = 210,06 cm²\n1/9 × Aire CDE = 210,06 / 9 ≈ 23,34 ≈ 23,4 cm²\nOr Aire ABC = 23,4 cm² ✓"
        }
      ]
    },
    {
      "id": "brevet_asie_2025_ex3",
      "titre": "rectangle ABCD et carré EFGH — périmètres & équation",
      "notion": "Calcul littéral",
      "source": "Brevet Asie · 2025",
      "enonce": "Toutes les longueurs sont en centimètres. • Rectangle ABCD : AD = x et AB = 16 − 2x • Carré EFGH : EF = 2x",
      "figure": null,
      "questions": [
        {
          "id": "A.1.",
          "texte": "Calculer le périmètre du carréEFGH.",
          "points": 2,
          "reponse": "EF = 2x = 2×1,5 = 3 cm\nPérimètre EFGH = 4 × 3 = … cm"
        },
        {
          "id": "A.2.",
          "texte": "CalculerAB.",
          "points": 2,
          "reponse": "AB = 16 − 2x = 16 − 2×1,5 = 16 − 3 = … cm"
        },
        {
          "id": "A.3.",
          "texte": "Construire en vraie grandeur le rectangleABCD.",
          "points": 3,
          "reponse": "AD = x = 1,5 cm, AB = 13 cm\nRectangle ABCD : longueur 13 cm, largeur 1,5 cm"
        },
        {
          "id": "A.4.",
          "texte": "Les périmètres de ABCD et EFGH sont-ils égaux ?",
          "points": 3,
          "reponse": "Périmètre ABCD = 2×(AD + AB) = 2×(1,5 + 13) = 2×14,5 = … cm\nPérimètre EFGH = 12 cm\n… ≠ 12 → non, ils ne sont pas égaux."
        }
      ]
    },
    {
      "id": "brevet_asie_2025_ex4",
      "titre": "scratch — hexagone & triangles équilatéraux",
      "notion": "Scratch",
      "source": "Brevet Asie · 2025",
      "enonce": "Aucune justification n'est attendue. Rappel : s'orienter à 90 signifie que le lutin se dirige vers la droite.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Compléter et recopier les lignes 2, 3 et 4 du script pour que le lutin dessine un triangle équilatéral de côté50 pas.",
          "points": 3,
          "reponse": "Ligne 2 : répéter … fois\nLigne 3 : avancer de … pas\nLigne 4 : tourner ↩ de … degrés"
        },
        {
          "id": "2.",
          "texte": "L'élève teste les programmes A et B et obtient les deux dessins ci-dessous. Quel programme permet de tracer l'hexagone souhaité ?",
          "points": 4,
          "reponse": "Le programme … permet de tracer l'hexagone souhaité car …"
        }
      ]
    },
    {
      "id": "brevet_asie_2025_ex5",
      "titre": "poissons — PGCD, volumes & pourcentages",
      "notion": "Factorisation",
      "source": "Brevet Asie · 2025",
      "enonce": "Un magasin a reçu 650 poissons : 350 de type A et 300 de type B. La responsable souhaite les vendre par lots avec le même nombre de poissons de chaque type par lot, et tous les poissons répartis.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Parmi les trois propositions, laquelle correspond à la décomposition en produits de facteurs premiers du nombre300?Aucune justification n'est demandée.",
          "points": 3,
          "reponse": "La proposition … car …",
          "tableau": "<table class=\"brevet-table\">\n<thead>\n<tr><th>Proposition 1</th><th>Proposition 2</th><th>Proposition 3</th></tr>\n</thead>\n<tbody>\n<tr>\n<td>2² × 5 × 15</td>\n<td>2 × 2 × 3 × 5 × 5</td>\n<td>22 × 3 × 5²</td>\n</tr>\n</tbody>\n</table>"
        },
        {
          "id": "2.",
          "texte": "Donner la décomposition en produit de facteurs premiers du nombre350.",
          "points": 3,
          "reponse": "350 = 2 × 175 = 2 × 5 × 35 = 2 × 5 × 5 × 7 = …"
        },
        {
          "id": "3.",
          "texte": "Quel est lenombre maximal de lotsque la responsable pourra constituer ?(PGCD)",
          "points": 4,
          "reponse": "Le nombre maximal de lots = PGCD(350, 300)\n350 = 2 × 5² × 7\n300 = 2² × 3 × 5²\nPGCD = 2 × 5² = … lots"
        },
        {
          "id": "4.",
          "texte": "Dans ce cas, combien y aura-t-il de poissons de chaque type dans chaque lot ?",
          "points": 3,
          "reponse": "Nombre de lots = …\nPoissons de type A par lot = 350 / … = … poissons\nPoissons de type B par lot = 300 / … = … poissons"
        },
        {
          "id": "1.",
          "texte": "En captivité, il faut au moins15 litres d'eaupar poisson combattant. Un aquarium est rempli aux4/5 de sa hauteur. Lequel choisir pour un poisson combattant ?",
          "points": 7,
          "reponse": "Aquarium 1 (cylindre) : r = 15 cm = 0,15 dm, H = 25 cm = 0,25 dm\nVolume total = π × 0,15² × 0,25 = … dm³\nVolume eau = 4/5 × … = … L\n\nAquarium 2 (pavé) : L = l = 28 cm = 0,28 dm, H = 30 cm = 0,30 dm\nVolume total = 0,28 × 0,28 × 0,30 = … dm³\nVolume eau = 4/5 × … = … L\n\n→ Choisir l'aquarium …"
        },
        {
          "id": "2.",
          "texte": "Un poisson combattant coûte15 €et un aquarium coûte40 €. Le vendeur propose une remise de15 %sur le prix total. Combien va payer la famille ?",
          "points": 3,
          "reponse": "Prix total = 15 + 40 = 55 €\nRemise = 15% × 55 = 0,15 × 55 = … €\nPrix à payer = 55 − … = … €\nOu : 55 × 0,85 = … €"
        }
      ]
    }
  ],
  "brevet_centres_etrangers_2025": [
    {
      "id": "brevet_centres_etrangers_2025_ex1",
      "titre": "QCM — 5 questions",
      "notion": "Factorisation",
      "source": "Brevet Centres Étrangers · 2025",
      "enonce": "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée.",
      "figure": null,
      "questions": [
        {
          "id": "Question 1",
          "texte": "La décomposition en produit de facteurs premiers de120est :",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 2",
          "texte": "Dans la cellule A2, la formule« = −4 * A1 − 12 »a été saisie. On l'étire jusqu'à la cellule B2. La valeur obtenue dans la cellule B2 est :",
          "points": 4,
          "reponse": "",
          "tableau": "<table class=\"brevet-table\" style=\"font-size:12px;min-width:120px\">\n<thead><tr><th></th><th>A</th><th>B</th></tr></thead>\n<tbody>\n<tr><td style=\"font-weight:700\">1</td><td>2</td><td>5</td></tr>\n<tr><td style=\"font-weight:700\">2</td><td>−20</td><td></td></tr>\n</tbody>\n</table>"
        },
        {
          "id": "Question 3",
          "texte": "Sur la figure ci-contre, le rapport de l'homothétie de centre O qui transforme le carré A en le carré B est :",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 4",
          "texte": "Une écriture factorisée de4x² − 1est :",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 5",
          "texte": "Dans le triangle TER ci-contre, la mesure de la longueurREarrondie au centième de cm est :",
          "points": 4,
          "reponse": ""
        }
      ]
    },
    {
      "id": "brevet_centres_etrangers_2025_ex2",
      "titre": "colis « Transport Rapide » — stats, probabilité & volumes",
      "notion": "Statistiques",
      "source": "Brevet Centres Étrangers · 2025",
      "enonce": "L'entreprise « Transport Rapide » doit livrer cinq colis A, B, C, D et E ayant des masses différentes :",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Calculer lamoyennedes masses des colis en kg.",
          "points": 2,
          "reponse": "Moyenne = (4 + 9 + 2 + 7 + 11) / 5 = … / 5 = … kg"
        },
        {
          "id": "2.",
          "texte": "Déterminer lamédianedes masses des colis en kg. Interpréter ce résultat.",
          "points": 3,
          "reponse": "Valeurs triées : 2, 4, 7, 9, 11\n5 valeurs → médiane = 3e valeur = … kg\nInterprétation : la moitié des colis pèse moins de … kg, l'autre moitié plus."
        },
        {
          "id": "3.",
          "texte": "Le transporteur choisit au hasard un colis parmi les cinq pour une livraison express. Calculer la probabilité pour qu'il sélectionne un colis dont la masse estinférieure à 8 kg.",
          "points": 3,
          "reponse": "Colis de masse < 8 kg : A(4), C(2), D(7) → 3 colis\nP(masse < 8 kg) = 3/5"
        },
        {
          "id": "4.",
          "texte": "Vérifier que le volume du colis E est de0,12 m³.",
          "points": 2,
          "reponse": "V(E) = L × l × h = 0,5 × 0,4 × 0,6 = … m³ ✓"
        }
      ]
    },
    {
      "id": "brevet_centres_etrangers_2025_ex3",
      "titre": "calcul littéral & équations",
      "notion": "Développer",
      "source": "Brevet Centres Étrangers · 2025",
      "enonce": "On considère les expressions suivantes : A = (2x + 3)² − (2x + 3)(x − 1) B = (3x − 5)(3x + 5) − 9(x − 2)²",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Développer et réduire l'expressionA.",
          "points": 5,
          "reponse": "A = (2x + 3)² − (2x + 3)(x − 1)\n  = (2x + 3)[(2x + 3) − (x − 1)]\n  = (2x + 3)(2x + 3 − x + 1)\n  = (2x + 3)(x + 4)"
        },
        {
          "id": "2.",
          "texte": "Factoriser l'expressionA.",
          "points": 4,
          "reponse": "A = (2x + 3)(x + 4)  ← forme factorisée"
        },
        {
          "id": "3.",
          "texte": "Développer et réduire l'expressionB.",
          "points": 6,
          "reponse": "B = (3x − 5)(3x + 5) − 9(x − 2)²\n  = 9x² − 25 − 9(x² − 4x + 4)\n  = 9x² − 25 − 9x² + 36x − 36\n  = 36x − 61"
        },
        {
          "id": "4.",
          "texte": "Résoudre l'équationB = −25.",
          "points": 5,
          "reponse": "36x − 61 = −25\n36x = −25 + 61\n36x = 36\nx = 1"
        },
        {
          "id": "5.",
          "texte": "En utilisant la forme factorisée deA, calculer la valeur deApourx = −2.",
          "points": 5,
          "reponse": "A = (2x + 3)(x + 4)\nPour x = −2 :\nA = (2×(−2) + 3)((−2) + 4)\n  = (−4 + 3)(2)\n  = (−1)(2)\n  = −2"
        }
      ]
    },
    {
      "id": "brevet_centres_etrangers_2025_ex4",
      "titre": "géométrie — triangles & Pythagore",
      "notion": "Géométrie",
      "source": "Brevet Centres Étrangers · 2025",
      "enonce": "On considère le triangle ABC rectangle en A , avec : AB = 9 cm,  AC = 12 cm. Le point D est le pied de la hauteur issue de A dans le triangle ABC. La droite passant par A et parallèle à BC coupe la droite BD en un point E .",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Calculer la longueurBC.",
          "points": 5,
          "reponse": "Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore :\nBC² = AB² + AC²\nBC² = 9² + 12² = 81 + 144 = 225\nBC = √225 = 15 cm"
        },
        {
          "id": "2.",
          "texte": "Montrer queBD = 5,4 cm.",
          "points": 6,
          "reponse": "Dans le triangle ABC rectangle en A, D est le pied de la hauteur issue de A.\nLes triangles ABD et ABC sont semblables (même angle en B, angles droits).\nDonc : BD/AB = AB/BC\nBD = AB² / BC = 81 / 15 = 5,4 cm ✓"
        },
        {
          "id": "3.",
          "texte": "Calculer la longueurAD.",
          "points": 5,
          "reponse": "Dans le triangle ABD rectangle en D :\nAD² = AB² − BD²\nAD² = 81 − 5,4² = 81 − 29,16 = 51,84\nAD = √51,84 = 7,2 cm"
        },
        {
          "id": "4.",
          "texte": "La droite passant par A et parallèle à BC coupe la droite (BD) en E. Justifier queAE = BD = 5,4 cm, puis calculer l'angleBAEarrondi au degré.",
          "points": 9,
          "reponse": "AE // BC et AD ⊥ BC (AD est la hauteur), donc ADBE est un rectangle.\nDans un rectangle, les côtés opposés sont égaux, donc AE = BD = 5,4 cm."
        }
      ]
    },
    {
      "id": "brevet_centres_etrangers_2025_ex5",
      "titre": "statistiques & probabilités",
      "notion": "Moyenne",
      "source": "Brevet Centres Étrangers · 2025",
      "enonce": "Une association sportive propose des cours de natation. Le tableau ci-dessous indique le nombre de longueurs effectuées par 30 élèves lors d'une séance d'entraînement.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Vérifier que l'effectif total est bien30 élèves.",
          "points": 2,
          "reponse": "4 + 8 + 10 + 5 + 3 = 30 ✓"
        },
        {
          "id": "2.",
          "texte": "Calculer lamoyennedu nombre de longueurs effectuées. Arrondir au dixième.",
          "points": 6,
          "reponse": "Moyenne = (10×4 + 15×8 + 20×10 + 25×5 + 30×3) / 30\n= (40 + 120 + 200 + 125 + 90) / 30\n= 575 / 30\n≈ 19,2 longueurs"
        },
        {
          "id": "3.",
          "texte": "Déterminer lamédianedu nombre de longueurs effectuées.",
          "points": 5,
          "reponse": "30 élèves → médiane = moyenne des 15e et 16e valeurs.\nEffectifs cumulés : 10→4 ; 15→12 ; 20→22\nLes 15e et 16e valeurs sont toutes les deux à 20 longueurs.\nMédiane = 20 longueurs."
        },
        {
          "id": "4.",
          "texte": "On choisit au hasard un élève parmi les 30. Calculer la probabilité que cet élève ait effectuéau moins 20 longueurs.",
          "points": 6,
          "reponse": "Élèves ayant effectué au moins 20 longueurs : 10 + 5 + 3 = 18\nP(≥ 20 longueurs) = 18/30 = 3/5 = 0,6"
        },
        {
          "id": "5.",
          "texte": "L'entraîneur affirme : « Plus de la moitié des élèves ont effectué strictement plus de 15 longueurs ». A-t-il raison ? Justifier.",
          "points": 6,
          "reponse": "Élèves ayant effectué strictement plus de 15 longueurs (donc 20, 25 ou 30) :\n10 + 5 + 3 = 18 élèves.\n18/30 = 0,6 > 0,5 (plus de la moitié).\n→ L'entraîneur a raison."
        }
      ]
    }
  ],
  "brevet_metropole_2025": [
    {
      "id": "brevet_metropole_2025_ex1",
      "titre": "urnes & probabilités",
      "notion": "Probabilités",
      "source": "Brevet Métropole · Juin 2025",
      "enonce": "On dispose d'une urne A contenant 6 boules numérotées : 7 ; 10 ; 12 ; 15 ; 24 ; 30 et d'une urne B contenant 9 boules numérotées : 2 ; 5 ; 6 ; 8 ; 17 ; 18 ; 21 ; 22 ; 25 . Les boules sont indiscernables au toucher.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "On tire une boule dans l'urne A. Quelle est la probabilité d'obtenir unnombre pair?",
          "points": 4,
          "reponse": "Nombres pairs dans l'urne A : 10 ; 12 ; 24 ; 30 → 4 boules paires sur 6\nP(pair) = 4/6 = 2/3"
        },
        {
          "id": "2.",
          "texte": "On tire une boule dans l'urne B. Justifier que la probabilité d'obtenir unnombre premierest de1/3.",
          "points": 4,
          "reponse": "Nombres premiers dans l'urne B : 2 ; 5 ; 17 → 3 boules premières sur 9\nP(premier) = 3/9 = 1/3 ✓"
        },
        {
          "id": "3.",
          "texte": "Quelle urne contient le plus grand nombre de boules dont le numéro est unmultiple de 6?",
          "points": 4,
          "reponse": "Multiples de 6 dans l'urne A : 12 ; 24 ; 30 → 3 boules\nMultiples de 6 dans l'urne B : 6 ; 18 → 2 boules\n→ L'urne A contient le plus grand nombre de multiples de 6."
        },
        {
          "id": "4.",
          "texte": "On tire une boule au hasard dans l'une des urnes. Démontrer que la probabilité d'obtenir un nombresupérieur ou égal à 20est la même quelle que soit l'urne choisie.",
          "points": 4,
          "reponse": "Urne A — boules ≥ 20 : 24 ; 30 → 2 boules sur 6\nP_A(≥ 20) = 2/6 = 1/3\n\nUrne B — boules ≥ 20 : 21 ; 22 ; 25 → 3 boules sur 9\nP_B(≥ 20) = 3/9 = 1/3\n\nP_A(≥ 20) = P_B(≥ 20) = 1/3 ✓"
        },
        {
          "id": "5.",
          "texte": "En repartant avec la composition initiale, on ajoute une boule numérotée50dans chacune des urnes. La probabilité d'obtenir un résultat supérieur ou égal à 20 est-elle toujours égale quelle que soit l'urne choisie ?",
          "points": 4,
          "reponse": "Urne A → 7 boules — boules ≥ 20 : 24 ; 30 ; 50 → 3 boules\nP_A(≥ 20) = 3/7\n\nUrne B → 10 boules — boules ≥ 20 : 21 ; 22 ; 25 ; 50 → 4 boules\nP_B(≥ 20) = 4/10 = 2/5\n\n3/7 ≠ 2/5 → Non, la probabilité n'est plus la même."
        }
      ]
    },
    {
      "id": "brevet_metropole_2025_ex2",
      "titre": "aquathlon — course à pied & natation",
      "notion": "Géométrie",
      "source": "Brevet Métropole · Juin 2025",
      "enonce": "Cette année, les professeurs d'EPS proposent aux élèves un aquathlon (course à pied et natation).",
      "figure": "<svg height=\"300\" style=\"font-family:var(--fd)\" viewbox=\"0 0 420 300\" width=\"420\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Axes de référence : A en haut à gauche, E en bas, C et B à droite -->\n<!-- A(80,80), D(80,210), E(80,270), C(290,80), B(370,80) -->\n<!-- Ligne ACB horizontale -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"80\" x2=\"370\" y1=\"80\" y2=\"80\"></line>\n<!-- Ligne ADE verticale -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"80\" x2=\"80\" y1=\"80\" y2=\"270\"></line>\n<!-- Parcours ACDEB -->\n<!-- A→C déjà dans la ligne -->\n<!-- C→D diagonale -->\n<line stroke=\"var(--blue)\" stroke-width=\"2\" x1=\"290\" x2=\"80\" y1=\"80\" y2=\"210\"></line>\n<!-- D→E déjà dans la verticale -->\n<!-- E→B diagonale -->\n<line stroke=\"var(--blue)\" stroke-width=\"2\" x1=\"80\" x2=\"370\" y1=\"270\" y2=\"80\"></line>\n<!-- CB en pointillés (non parcouru) -->\n<line stroke=\"#999\" stroke-dasharray=\"6,4\" stroke-width=\"1.5\" x1=\"290\" x2=\"370\" y1=\"80\" y2=\"80\"></line>\n<!-- Angle droit en A -->\n<rect fill=\"none\" height=\"12\" stroke=\"#EE6E34\" stroke-width=\"1.5\" width=\"12\" x=\"80\" y=\"80\"></rect>\n<!-- Points -->\n<circle cx=\"80\" cy=\"80\" fill=\"var(--blue)\" r=\"4\"></circle>\n<circle cx=\"290\" cy=\"80\" fill=\"var(--blue)\" r=\"4\"></circle>\n<circle cx=\"370\" cy=\"80\" fill=\"var(--blue)\" r=\"4\"></circle>\n<circle cx=\"80\" cy=\"210\" fill=\"var(--blue)\" r=\"4\"></circle>\n<circle cx=\"80\" cy=\"270\" fill=\"var(--blue)\" r=\"4\"></circle>\n<!-- Labels points -->\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"64\" y=\"78\">A</text>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"293\" y=\"72\">C</text>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"373\" y=\"78\">B</text>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"64\" y=\"214\">D</text>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"64\" y=\"278\">E</text>\n<!-- Cotes -->\n<!-- AC = 480 m -->\n<text fill=\"var(--muted)\" font-size=\"11\" text-anchor=\"middle\" x=\"178\" y=\"70\">480 m</text>\n<!-- CB = 120 m -->\n<text fill=\"var(--muted)\" font-size=\"11\" text-anchor=\"middle\" x=\"332\" y=\"70\">120 m</text>\n<!-- AE = 250 m (AD+DE) avec accolade -->\n<line stroke=\"var(--muted)\" stroke-dasharray=\"3,3\" stroke-width=\"1\" x1=\"56\" x2=\"56\" y1=\"80\" y2=\"270\"></line>\n<text fill=\"var(--muted)\" font-size=\"11\" text-anchor=\"middle\" transform=\"rotate(-90,40,180)\" x=\"40\" y=\"180\">250 m</text>\n<!-- DE = 50 m -->\n<line stroke=\"var(--orange)\" stroke-width=\"2\" x1=\"58\" x2=\"58\" y1=\"210\" y2=\"270\"></line>\n<text fill=\"var(--orange)\" font-size=\"11\" text-anchor=\"middle\" x=\"44\" y=\"244\">50 m</text>\n<!-- Flèches direction parcours -->\n<text fill=\"var(--blue)\" font-size=\"10\" text-anchor=\"middle\" transform=\"rotate(-37,178,148)\" x=\"178\" y=\"148\">→</text>\n<text fill=\"var(--blue)\" font-size=\"10\" text-anchor=\"middle\" transform=\"rotate(-30,225,178)\" x=\"225\" y=\"178\">→</text>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Justifier queAD = 200 m.",
          "points": 3,
          "reponse": "AE = AD + DE, donc AD = AE − DE = 250 − 50 = 200 m ✓"
        },
        {
          "id": "2.",
          "texte": "Calculer la longueurCD.",
          "points": 4,
          "reponse": "Le triangle ADC est rectangle en A, donc d'après le théorème de Pythagore :\nCD² = AC² + AD²\nCD² = 480² + 200² = 230 400 + 40 000 = 270 400\nCD = √270 400 = 520 m"
        },
        {
          "id": "3.",
          "texte": "Pour que le parcours soit validé, il est nécessaire que les droites (CD) et (BE) soient parallèlesetque la mesure de l'angle ACD soit supérieure à 20°.",
          "points": 5,
          "reponse": "On vérifie si le rapport AC/AB = AD/AE :\nAB = AC + CB = 480 + 120 = 600 m\nAC/AB = 480/600 = 4/5\nAD/AE = 200/250 = 4/5\n\nLes rapports sont égaux, donc d'après la réciproque du théorème de Thalès,\nles droites (CD) et (BE) sont parallèles. ✓"
        },
        {
          "id": "4.",
          "texte": "Quel est letemps médiande cette série ?",
          "points": 3,
          "reponse": "La série est déjà ordonnée, 9 valeurs → médiane = 5e valeur\nMédiane = 6 min = 360 s"
        },
        {
          "id": "5.",
          "texte": "Un poisson rouge nage à la vitesse de5 km/h. Nage-t-il plus vite que l'élève le plus rapide ?",
          "points": 2,
          "reponse": "L'élève le plus rapide : 5 min 30 s = 330 s pour 200 m\nVitesse élève = 200 m / 330 s = 0,606 m/s = 0,606 × 3,6 ≈ 2,18 km/h\n\nVitesse poisson = 5 km/h > 2,18 km/h\n→ Oui, le poisson rouge nage plus vite que l'élève le plus rapide."
        }
      ]
    },
    {
      "id": "brevet_metropole_2025_ex3",
      "titre": "QCM — 5 questions",
      "notion": "Proportionnalité",
      "source": "Brevet Métropole · Juin 2025",
      "enonce": "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée.",
      "figure": "<svg height=\"100\" viewbox=\"0 0 100 100\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect fill=\"#f8f9ff\" height=\"100\" width=\"100\"></rect>\n<!-- Grille -->\n<g stroke=\"rgba(0,33,188,.1)\" stroke-width=\"0.5\">\n<line x1=\"20\" x2=\"20\" y1=\"0\" y2=\"100\"></line><line x1=\"40\" x2=\"40\" y1=\"0\" y2=\"100\"></line>\n<line x1=\"60\" x2=\"60\" y1=\"0\" y2=\"100\"></line><line x1=\"80\" x2=\"80\" y1=\"0\" y2=\"100\"></line>\n<line x1=\"0\" x2=\"100\" y1=\"20\" y2=\"20\"></line><line x1=\"0\" x2=\"100\" y1=\"40\" y2=\"40\"></line>\n<line x1=\"0\" x2=\"100\" y1=\"60\" y2=\"60\"></line><line x1=\"0\" x2=\"100\" y1=\"80\" y2=\"80\"></line>\n</g>\n<!-- Figure 1 : flèche pointant vers le haut-droite -->\n<polygon fill=\"var(--blue)\" opacity=\"0.8\" points=\"30,70 30,40 50,40 30,20 70,50 50,50 50,70\"></polygon>\n</svg>",
      "questions": [
        {
          "id": "Question 1",
          "texte": "Le prix de 3 melons est 8,40 €. Combien coûtent 5 melons ?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 2",
          "texte": "Quelle transformation permet de passer de la figure 1 à la figure 2 ?",
          "points": 3,
          "reponse": "",
          "graphique": "<svg height=\"100\" viewbox=\"0 0 100 100\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect fill=\"#f8f9ff\" height=\"100\" width=\"100\"></rect>\n<!-- Grille -->\n<g stroke=\"rgba(0,33,188,.1)\" stroke-width=\"0.5\">\n<line x1=\"20\" x2=\"20\" y1=\"0\" y2=\"100\"></line><line x1=\"40\" x2=\"40\" y1=\"0\" y2=\"100\"></line>\n<line x1=\"60\" x2=\"60\" y1=\"0\" y2=\"100\"></line><line x1=\"80\" x2=\"80\" y1=\"0\" y2=\"100\"></line>\n<line x1=\"0\" x2=\"100\" y1=\"20\" y2=\"20\"></line><line x1=\"0\" x2=\"100\" y1=\"40\" y2=\"40\"></line>\n<line x1=\"0\" x2=\"100\" y1=\"60\" y2=\"60\"></line><line x1=\"0\" x2=\"100\" y1=\"80\" y2=\"80\"></line>\n</g>\n<!-- Figure 1 : flèche pointant vers le haut-droite -->\n<polygon fill=\"var(--blue)\" opacity=\"0.8\" points=\"30,70 30,40 50,40 30,20 70,50 50,50 50,70\"></polygon>\n</svg>"
        },
        {
          "id": "Question 3",
          "texte": "Un article coûte 350 €. Son prix augmente de 20 %. Quel est son nouveau prix ?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 4",
          "texte": "Quelle est l'aire du triangle rectangle ABC ?",
          "points": 3,
          "reponse": "",
          "graphique": "<svg height=\"160\" style=\"font-family:var(--fd)\" viewbox=\"0 0 240 160\" width=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- A(20,130), B(140,20), C(200,130) -->\n<polygon fill=\"rgba(0,33,188,.05)\" points=\"20,130 140,20 200,130\" stroke=\"#333\" stroke-width=\"1.8\"></polygon>\n<!-- Angle droit en B -->\n<rect fill=\"none\" height=\"11\" stroke=\"#555\" stroke-width=\"1.3\" width=\"11\" x=\"130\" y=\"20\"></rect>\n<!-- Labels -->\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"8\" y=\"145\">A</text>\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"138\" y=\"16\">B</text>\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"203\" y=\"145\">C</text>\n<!-- Cotes -->\n<text fill=\"var(--muted)\" font-size=\"11\" text-anchor=\"middle\" transform=\"rotate(-52,70,85)\" x=\"70\" y=\"85\">6 cm</text>\n<text fill=\"var(--muted)\" font-size=\"11\" text-anchor=\"middle\" transform=\"rotate(52,178,85)\" x=\"178\" y=\"85\">4,5 cm</text>\n<text fill=\"var(--muted)\" font-size=\"11\" text-anchor=\"middle\" x=\"110\" y=\"148\">7,5 cm</text>\n</svg>"
        },
        {
          "id": "Question 5",
          "texte": "Quelle est la forme développée et réduite de l'expression(2x + 3)(x − 4)?",
          "points": 3,
          "reponse": ""
        }
      ]
    },
    {
      "id": "brevet_metropole_2025_ex4",
      "titre": "programmes de calcul & Scratch",
      "notion": "Calcul littéral",
      "source": "Brevet Métropole · Juin 2025",
      "enonce": "Au club « Mathsetmagie », on s'amuse à créer des programmes de calcul plus ou moins magiques.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Vérifier que si on choisit10comme nombre de départ, on obtient20avec ce programme.",
          "points": 2,
          "reponse": "10 → 10 − 4 = 6 → 6 × 2 = 12 → 12 + 8 = 20 ✓"
        },
        {
          "id": "2.",
          "texte": "Quel résultat obtient-on avec ce programme si on choisit−7comme nombre de départ ?",
          "points": 3,
          "reponse": "−7 → −7 − 4 = −11 → −11 × 2 = −22 → −22 + 8 = −14"
        },
        {
          "id": "3.",
          "texte": "Zoé prétend que son programme est « magique » car, quel que soit le nombre choisi, le résultat est toujours ledouble du nombre de départ. A-t-elle raison ?",
          "points": 5,
          "reponse": "Soit x le nombre de départ :\nx → x − 4 → (x − 4) × 2 = 2x − 8 → 2x − 8 + 8 = 2x\n\nLe résultat est 2x, soit bien le double du nombre de départ.\n→ Zoé a raison, son programme est magique. ✓"
        },
        {
          "id": "4.",
          "texte": "Démontrer que si le nombre de départ estx, le résultat obtenu avec le programme de Fred est20x + 50.",
          "points": 4,
          "reponse": "Étape 1 : résultat ← réponse × 4 = 4x\nÉtape 2 : résultat ← résultat + 10 = 4x + 10\nÉtape 3 : résultat ← résultat × 5 = (4x + 10) × 5 = 20x + 50\n\nLe programme de Fred donne bien 20x + 50. ✓"
        },
        {
          "id": "5.",
          "texte": "Quel nombre faut-il choisir au départ pour obtenir75avec le programme de Fred ?",
          "points": 3,
          "reponse": "20x + 50 = 75\n20x = 75 − 50 = 25\nx = 25 / 20 = 1,25\n\nIl faut choisir 1,25 comme nombre de départ."
        },
        {
          "id": "6.",
          "texte": "Fred souhaite modifier son programme afin que le résultat soit toujours20 fois plus grand que le nombre de départ. Recopier et compléter la sixième ligne du programme.",
          "points": 3,
          "reponse": "Le programme donne 20x + 50. Pour obtenir 20x il faut supprimer le +50.\nAprès l'étape 3 : résultat = 20x + 50\nIl faut soustraire 50 : résultat ← résultat − 50\n\n6e ligne : mettre résultat à résultat − 50"
        }
      ]
    },
    {
      "id": "brevet_metropole_2025_ex5",
      "titre": "achat ou location — fonctions & graphique",
      "notion": "Algèbre et Fonctions",
      "source": "Brevet Métropole · Juin 2025",
      "enonce": "Un garage propose 2 options au client : • Option Achat : prix d'achat de la voiture 22 400 € . Assurance obligatoire 75 € par mois . • Option Location : 425 € par mois , assurance comprise. L'objectif de cet exercice est de comparer ces deux options.",
      "figure": "<svg height=\"400\" style=\"font-family:var(--fd);font-size:10px\" viewbox=\"0 0 520 400\" width=\"520\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Marges : left=60, bottom=30, right=20, top=20 -->\n<!-- x : 0 à 130 mois → 440px → 1 mois = 440/130 ≈ 3.385px -->\n<!-- y : 0 à 45000 € → 350px → 1000€ = 350/45 ≈ 7.78px -->\n<defs>\n<clippath id=\"graphClip\">\n<rect height=\"350\" width=\"440\" x=\"60\" y=\"20\"></rect>\n</clippath>\n</defs>\n<!-- Fond grille -->\n<rect fill=\"#fafafa\" height=\"350\" stroke=\"rgba(0,0,0,.08)\" stroke-width=\"1\" width=\"440\" x=\"60\" y=\"20\"></rect>\n<!-- Grille fine (tous les 5 mois / 2500€) -->\n<g stroke=\"rgba(0,0,0,.06)\" stroke-width=\"0.5\">\n<!-- Verticales tous les 5 mois -->\n<line x1=\"77\" x2=\"77\" y1=\"20\" y2=\"370\"></line><line x1=\"94\" x2=\"94\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"111\" x2=\"111\" y1=\"20\" y2=\"370\"></line><line x1=\"128\" x2=\"128\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"145\" x2=\"145\" y1=\"20\" y2=\"370\"></line><line x1=\"162\" x2=\"162\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"179\" x2=\"179\" y1=\"20\" y2=\"370\"></line><line x1=\"196\" x2=\"196\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"213\" x2=\"213\" y1=\"20\" y2=\"370\"></line><line x1=\"230\" x2=\"230\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"247\" x2=\"247\" y1=\"20\" y2=\"370\"></line><line x1=\"264\" x2=\"264\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"281\" x2=\"281\" y1=\"20\" y2=\"370\"></line><line x1=\"298\" x2=\"298\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"315\" x2=\"315\" y1=\"20\" y2=\"370\"></line><line x1=\"332\" x2=\"332\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"349\" x2=\"349\" y1=\"20\" y2=\"370\"></line><line x1=\"366\" x2=\"366\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"383\" x2=\"383\" y1=\"20\" y2=\"370\"></line><line x1=\"400\" x2=\"400\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"417\" x2=\"417\" y1=\"20\" y2=\"370\"></line><line x1=\"434\" x2=\"434\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"451\" x2=\"451\" y1=\"20\" y2=\"370\"></line><line x1=\"468\" x2=\"468\" y1=\"20\" y2=\"370\"></line>\n<!-- Horizontales tous les 2500€ -->\n<line x1=\"60\" x2=\"500\" y1=\"351\" y2=\"351\"></line><line x1=\"60\" x2=\"500\" y1=\"331\" y2=\"331\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"312\" y2=\"312\"></line><line x1=\"60\" x2=\"500\" y1=\"293\" y2=\"293\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"273\" y2=\"273\"></line><line x1=\"60\" x2=\"500\" y1=\"254\" y2=\"254\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"234\" y2=\"234\"></line><line x1=\"60\" x2=\"500\" y1=\"215\" y2=\"215\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"195\" y2=\"195\"></line><line x1=\"60\" x2=\"500\" y1=\"176\" y2=\"176\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"157\" y2=\"157\"></line><line x1=\"60\" x2=\"500\" y1=\"137\" y2=\"137\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"118\" y2=\"118\"></line><line x1=\"60\" x2=\"500\" y1=\"98\" y2=\"98\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"79\" y2=\"79\"></line><line x1=\"60\" x2=\"500\" y1=\"59\" y2=\"59\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"40\" y2=\"40\"></line>\n</g>\n<!-- Grille principale (tous les 10 mois / 5000€) -->\n<g stroke=\"rgba(0,0,0,.12)\" stroke-width=\"0.8\">\n<line x1=\"94\" x2=\"94\" y1=\"20\" y2=\"370\"></line> <!-- 10 -->\n<line x1=\"128\" x2=\"128\" y1=\"20\" y2=\"370\"></line> <!-- 20 -->\n<line x1=\"162\" x2=\"162\" y1=\"20\" y2=\"370\"></line> <!-- 30 -->\n<line x1=\"196\" x2=\"196\" y1=\"20\" y2=\"370\"></line> <!-- 40 -->\n<line x1=\"230\" x2=\"230\" y1=\"20\" y2=\"370\"></line> <!-- 50 -->\n<line x1=\"264\" x2=\"264\" y1=\"20\" y2=\"370\"></line> <!-- 60 -->\n<line x1=\"298\" x2=\"298\" y1=\"20\" y2=\"370\"></line> <!-- 70 -->\n<line x1=\"332\" x2=\"332\" y1=\"20\" y2=\"370\"></line> <!-- 80 -->\n<line x1=\"366\" x2=\"366\" y1=\"20\" y2=\"370\"></line> <!-- 90 -->\n<line x1=\"400\" x2=\"400\" y1=\"20\" y2=\"370\"></line> <!-- 100 -->\n<line x1=\"434\" x2=\"434\" y1=\"20\" y2=\"370\"></line> <!-- 110 -->\n<line x1=\"468\" x2=\"468\" y1=\"20\" y2=\"370\"></line> <!-- 120 -->\n<line x1=\"60\" x2=\"500\" y1=\"331\" y2=\"331\"></line> <!-- 5000 -->\n<line x1=\"60\" x2=\"500\" y1=\"293\" y2=\"293\"></line> <!-- 10000 -->\n<line x1=\"60\" x2=\"500\" y1=\"254\" y2=\"254\"></line> <!-- 15000 -->\n<line x1=\"60\" x2=\"500\" y1=\"215\" y2=\"215\"></line> <!-- 20000 -->\n<line x1=\"60\" x2=\"500\" y1=\"176\" y2=\"176\"></line> <!-- 25000 -->\n<line x1=\"60\" x2=\"500\" y1=\"137\" y2=\"137\"></line> <!-- 30000 -->\n<line x1=\"60\" x2=\"500\" y1=\"98\" y2=\"98\"></line> <!-- 35000 -->\n<line x1=\"60\" x2=\"500\" y1=\"59\" y2=\"59\"></line> <!-- 40000 -->\n</g>\n<!-- Axes -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"60\" x2=\"505\" y1=\"370\" y2=\"370\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"60\" x2=\"60\" y1=\"20\" y2=\"375\"></line>\n<!-- Flèches -->\n<polygon fill=\"#333\" points=\"505,370 498,366 498,374\"></polygon>\n<polygon fill=\"#333\" points=\"60,17 56,24 64,24\"></polygon>\n<!-- Labels axe X (mois) -->\n<g fill=\"#555\" text-anchor=\"middle\">\n<text x=\"94\" y=\"384\">10</text><text x=\"128\" y=\"384\">20</text>\n<text x=\"162\" y=\"384\">30</text><text x=\"196\" y=\"384\">40</text>\n<text x=\"230\" y=\"384\">50</text><text x=\"264\" y=\"384\">60</text>\n<text x=\"298\" y=\"384\">70</text><text x=\"332\" y=\"384\">80</text>\n<text x=\"366\" y=\"384\">90</text><text x=\"400\" y=\"384\">100</text>\n<text x=\"434\" y=\"384\">110</text><text x=\"468\" y=\"384\">120</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-weight=\"600\" x=\"508\" y=\"374\">Durée en mois</text>\n<!-- Labels axe Y (€) -->\n<g fill=\"#555\" text-anchor=\"end\">\n<text x=\"55\" y=\"334\">5 000</text>\n<text x=\"55\" y=\"296\">10 000</text>\n<text x=\"55\" y=\"257\">15 000</text>\n<text x=\"55\" y=\"218\">20 000</text>\n<text x=\"55\" y=\"179\">25 000</text>\n<text x=\"55\" y=\"140\">30 000</text>\n<text x=\"55\" y=\"101\">35 000</text>\n<text x=\"55\" y=\"62\">40 000</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-weight=\"600\" x=\"58\" y=\"14\">Dépense en euros</text>\n<!-- Courbe Cg : g(x)=425x — rouge -->\n<!-- à x=0 : y=0 → (60,370) ; à x=130 : y=55250 (hors graphe) → clip à y=20 : x=44444/425≈104.6 mois → px=60+104.6*3.385≈414 -->\n<line clip-path=\"url(#graphClip)\" stroke=\"#EF4444\" stroke-width=\"2.2\" x1=\"60\" x2=\"414\" y1=\"370\" y2=\"20\"></line>\n<text fill=\"#EF4444\" font-size=\"12\" font-weight=\"700\" x=\"416\" y=\"18\">C<tspan baseline-shift=\"sub\" font-size=\"9\">g</tspan></text>\n<!-- Courbe Cf : f(x)=22400+75x — bleu/vert -->\n<!-- à x=0 : y=22400 → py=370-(22400/45000)*350=370-174=196 → (60,196) -->\n<!-- à x=130 : y=22400+75*130=32150 → py=370-(32150/45000)*350=370-250=120 → (500,120) -->\n<line stroke=\"#2A7B6F\" stroke-width=\"2.2\" x1=\"60\" x2=\"500\" y1=\"196\" y2=\"120\"></line>\n<text fill=\"#2A7B6F\" font-size=\"12\" font-weight=\"700\" x=\"502\" y=\"118\">C<tspan baseline-shift=\"sub\" font-size=\"9\">f</tspan></text>\n<!-- Point d'intersection : f(x)=g(x) → 22400+75x=425x → 22400=350x → x=64 mois -->\n<!-- x=64 → px=60+64*3.385=277 ; y=22400+75*64=27200 → py=370-(27200/45000)*350=370-211.6=158 -->\n<circle cx=\"277\" cy=\"158\" fill=\"none\" r=\"5\" stroke=\"var(--orange)\" stroke-width=\"2\"></circle>\n<line stroke=\"var(--orange)\" stroke-dasharray=\"5,3\" stroke-width=\"1.2\" x1=\"277\" x2=\"277\" y1=\"158\" y2=\"370\"></line>\n<text fill=\"var(--orange)\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\" x=\"277\" y=\"383\">64</text>\n<text fill=\"var(--orange)\" font-size=\"10\" font-weight=\"700\" x=\"282\" y=\"150\">intersection</text>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Montrer qu'avec l'optionAchat, la dépense à la fin de la première année est de23 300 €.",
          "points": 3,
          "reponse": "Dépense option Achat après 12 mois :\n= prix d'achat + assurance × 12 mois\n= 22 400 + 75 × 12\n= 22 400 + 900\n= 23 300 € ✓"
        },
        {
          "id": "2.",
          "texte": "Après36 mois, calculer l'économie réalisée par le client s'il choisit l'optionLocation.",
          "points": 4,
          "reponse": "Option Achat après 36 mois = 22 400 + 75 × 36 = 22 400 + 2 700 = 25 100 €\nOption Location après 36 mois = 425 × 36 = 15 300 €\n\nÉconomie = 25 100 − 15 300 = 9 800 €"
        },
        {
          "id": "3.",
          "texte": "Afin de comparer les dépenses, le client a réalisé le tableau suivant à l'aide d'un tableur. Quelle formule doit être saisie dans la celluleB3qui, étendue jusqu'à la cellule F3, permet de compléter le tableau ?",
          "points": 3,
          "reponse": "La dépense Location = 425 × nombre de mois\nLa cellule B1 contient le nombre de mois.\n\nFormule à saisir en B3 : =425*B1\n(étendue vers la droite, elle donne automatiquement 425×C1, 425×D1, etc.)",
          "tableau": "<table class=\"brevet-table\">\n<thead>\n<tr>\n<th></th>\n<th>A</th>\n<th>B</th>\n<th>C</th>\n<th>D</th>\n<th>E</th>\n<th>F</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"font-weight:700;color:var(--blue)\">1</td>\n<td>Nombre de mois</td>\n<td>12</td><td>24</td><td>36</td><td>48</td><td>60</td>\n</tr>\n<tr>\n<td style=\"font-weight:700;color:var(--blue)\">2</td>\n<td>Dépense en € Option <em>Achat</em></td>\n<td>23 300</td><td>24 200</td><td>25 100</td><td>26 000</td><td>26 900</td>\n</tr>\n<tr>\n<td style=\"font-weight:700;color:var(--blue)\">3</td>\n<td>Dépense en € Option <em>Location</em></td>\n<td style=\"background:#FFF0E8;color:var(--orange);font-weight:700\">B3 = ?</td>\n<td></td><td></td><td></td><td></td>\n</tr>\n</tbody>\n</table>"
        },
        {
          "id": "4.",
          "texte": "Déterminer l'expression def(x)permettant de calculer la dépense correspondant à l'optionAchat.",
          "points": 3,
          "reponse": "Dépense Achat = prix d'achat + assurance × nombre de mois\nf(x) = 22 400 + 75x"
        },
        {
          "id": "5.",
          "texte": "Sur le graphique ci-dessous, on a tracé les courbes représentatives Cfet Cgdes fonctions f et g. Par lecture graphique, déterminer à partir de combien de mois l'optionAchatest la plus avantageuse.",
          "points": 6,
          "reponse": "Par lecture graphique, les deux courbes se croisent vers x ≈ 64 mois.\n\nPour x < 64 mois : Cf est en dessous de Cg → l'option Achat coûte moins cher.\nPour x > 64 mois : Cf est au-dessus de Cg → l'option Location coûte moins cher.\n\n→ L'option Achat est la plus avantageuse à partir d'environ 64 mois (≈",
          "graphique": "<svg height=\"400\" style=\"font-family:var(--fd);font-size:10px\" viewbox=\"0 0 520 400\" width=\"520\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Marges : left=60, bottom=30, right=20, top=20 -->\n<!-- x : 0 à 130 mois → 440px → 1 mois = 440/130 ≈ 3.385px -->\n<!-- y : 0 à 45000 € → 350px → 1000€ = 350/45 ≈ 7.78px -->\n<defs>\n<clippath id=\"graphClip\">\n<rect height=\"350\" width=\"440\" x=\"60\" y=\"20\"></rect>\n</clippath>\n</defs>\n<!-- Fond grille -->\n<rect fill=\"#fafafa\" height=\"350\" stroke=\"rgba(0,0,0,.08)\" stroke-width=\"1\" width=\"440\" x=\"60\" y=\"20\"></rect>\n<!-- Grille fine (tous les 5 mois / 2500€) -->\n<g stroke=\"rgba(0,0,0,.06)\" stroke-width=\"0.5\">\n<!-- Verticales tous les 5 mois -->\n<line x1=\"77\" x2=\"77\" y1=\"20\" y2=\"370\"></line><line x1=\"94\" x2=\"94\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"111\" x2=\"111\" y1=\"20\" y2=\"370\"></line><line x1=\"128\" x2=\"128\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"145\" x2=\"145\" y1=\"20\" y2=\"370\"></line><line x1=\"162\" x2=\"162\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"179\" x2=\"179\" y1=\"20\" y2=\"370\"></line><line x1=\"196\" x2=\"196\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"213\" x2=\"213\" y1=\"20\" y2=\"370\"></line><line x1=\"230\" x2=\"230\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"247\" x2=\"247\" y1=\"20\" y2=\"370\"></line><line x1=\"264\" x2=\"264\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"281\" x2=\"281\" y1=\"20\" y2=\"370\"></line><line x1=\"298\" x2=\"298\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"315\" x2=\"315\" y1=\"20\" y2=\"370\"></line><line x1=\"332\" x2=\"332\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"349\" x2=\"349\" y1=\"20\" y2=\"370\"></line><line x1=\"366\" x2=\"366\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"383\" x2=\"383\" y1=\"20\" y2=\"370\"></line><line x1=\"400\" x2=\"400\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"417\" x2=\"417\" y1=\"20\" y2=\"370\"></line><line x1=\"434\" x2=\"434\" y1=\"20\" y2=\"370\"></line>\n<line x1=\"451\" x2=\"451\" y1=\"20\" y2=\"370\"></line><line x1=\"468\" x2=\"468\" y1=\"20\" y2=\"370\"></line>\n<!-- Horizontales tous les 2500€ -->\n<line x1=\"60\" x2=\"500\" y1=\"351\" y2=\"351\"></line><line x1=\"60\" x2=\"500\" y1=\"331\" y2=\"331\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"312\" y2=\"312\"></line><line x1=\"60\" x2=\"500\" y1=\"293\" y2=\"293\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"273\" y2=\"273\"></line><line x1=\"60\" x2=\"500\" y1=\"254\" y2=\"254\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"234\" y2=\"234\"></line><line x1=\"60\" x2=\"500\" y1=\"215\" y2=\"215\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"195\" y2=\"195\"></line><line x1=\"60\" x2=\"500\" y1=\"176\" y2=\"176\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"157\" y2=\"157\"></line><line x1=\"60\" x2=\"500\" y1=\"137\" y2=\"137\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"118\" y2=\"118\"></line><line x1=\"60\" x2=\"500\" y1=\"98\" y2=\"98\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"79\" y2=\"79\"></line><line x1=\"60\" x2=\"500\" y1=\"59\" y2=\"59\"></line>\n<line x1=\"60\" x2=\"500\" y1=\"40\" y2=\"40\"></line>\n</g>\n<!-- Grille principale (tous les 10 mois / 5000€) -->\n<g stroke=\"rgba(0,0,0,.12)\" stroke-width=\"0.8\">\n<line x1=\"94\" x2=\"94\" y1=\"20\" y2=\"370\"></line> <!-- 10 -->\n<line x1=\"128\" x2=\"128\" y1=\"20\" y2=\"370\"></line> <!-- 20 -->\n<line x1=\"162\" x2=\"162\" y1=\"20\" y2=\"370\"></line> <!-- 30 -->\n<line x1=\"196\" x2=\"196\" y1=\"20\" y2=\"370\"></line> <!-- 40 -->\n<line x1=\"230\" x2=\"230\" y1=\"20\" y2=\"370\"></line> <!-- 50 -->\n<line x1=\"264\" x2=\"264\" y1=\"20\" y2=\"370\"></line> <!-- 60 -->\n<line x1=\"298\" x2=\"298\" y1=\"20\" y2=\"370\"></line> <!-- 70 -->\n<line x1=\"332\" x2=\"332\" y1=\"20\" y2=\"370\"></line> <!-- 80 -->\n<line x1=\"366\" x2=\"366\" y1=\"20\" y2=\"370\"></line> <!-- 90 -->\n<line x1=\"400\" x2=\"400\" y1=\"20\" y2=\"370\"></line> <!-- 100 -->\n<line x1=\"434\" x2=\"434\" y1=\"20\" y2=\"370\"></line> <!-- 110 -->\n<line x1=\"468\" x2=\"468\" y1=\"20\" y2=\"370\"></line> <!-- 120 -->\n<line x1=\"60\" x2=\"500\" y1=\"331\" y2=\"331\"></line> <!-- 5000 -->\n<line x1=\"60\" x2=\"500\" y1=\"293\" y2=\"293\"></line> <!-- 10000 -->\n<line x1=\"60\" x2=\"500\" y1=\"254\" y2=\"254\"></line> <!-- 15000 -->\n<line x1=\"60\" x2=\"500\" y1=\"215\" y2=\"215\"></line> <!-- 20000 -->\n<line x1=\"60\" x2=\"500\" y1=\"176\" y2=\"176\"></line> <!-- 25000 -->\n<line x1=\"60\" x2=\"500\" y1=\"137\" y2=\"137\"></line> <!-- 30000 -->\n<line x1=\"60\" x2=\"500\" y1=\"98\" y2=\"98\"></line> <!-- 35000 -->\n<line x1=\"60\" x2=\"500\" y1=\"59\" y2=\"59\"></line> <!-- 40000 -->\n</g>\n<!-- Axes -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"60\" x2=\"505\" y1=\"370\" y2=\"370\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"60\" x2=\"60\" y1=\"20\" y2=\"375\"></line>\n<!-- Flèches -->\n<polygon fill=\"#333\" points=\"505,370 498,366 498,374\"></polygon>\n<polygon fill=\"#333\" points=\"60,17 56,24 64,24\"></polygon>\n<!-- Labels axe X (mois) -->\n<g fill=\"#555\" text-anchor=\"middle\">\n<text x=\"94\" y=\"384\">10</text><text x=\"128\" y=\"384\">20</text>\n<text x=\"162\" y=\"384\">30</text><text x=\"196\" y=\"384\">40</text>\n<text x=\"230\" y=\"384\">50</text><text x=\"264\" y=\"384\">60</text>\n<text x=\"298\" y=\"384\">70</text><text x=\"332\" y=\"384\">80</text>\n<text x=\"366\" y=\"384\">90</text><text x=\"400\" y=\"384\">100</text>\n<text x=\"434\" y=\"384\">110</text><text x=\"468\" y=\"384\">120</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-weight=\"600\" x=\"508\" y=\"374\">Durée en mois</text>\n<!-- Labels axe Y (€) -->\n<g fill=\"#555\" text-anchor=\"end\">\n<text x=\"55\" y=\"334\">5 000</text>\n<text x=\"55\" y=\"296\">10 000</text>\n<text x=\"55\" y=\"257\">15 000</text>\n<text x=\"55\" y=\"218\">20 000</text>\n<text x=\"55\" y=\"179\">25 000</text>\n<text x=\"55\" y=\"140\">30 000</text>\n<text x=\"55\" y=\"101\">35 000</text>\n<text x=\"55\" y=\"62\">40 000</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-weight=\"600\" x=\"58\" y=\"14\">Dépense en euros</text>\n<!-- Courbe Cg : g(x)=425x — rouge -->\n<!-- à x=0 : y=0 → (60,370) ; à x=130 : y=55250 (hors graphe) → clip à y=20 : x=44444/425≈104.6 mois → px=60+104.6*3.385≈414 -->\n<line clip-path=\"url(#graphClip)\" stroke=\"#EF4444\" stroke-width=\"2.2\" x1=\"60\" x2=\"414\" y1=\"370\" y2=\"20\"></line>\n<text fill=\"#EF4444\" font-size=\"12\" font-weight=\"700\" x=\"416\" y=\"18\">C<tspan baseline-shift=\"sub\" font-size=\"9\">g</tspan></text>\n<!-- Courbe Cf : f(x)=22400+75x — bleu/vert -->\n<!-- à x=0 : y=22400 → py=370-(22400/45000)*350=370-174=196 → (60,196) -->\n<!-- à x=130 : y=22400+75*130=32150 → py=370-(32150/45000)*350=370-250=120 → (500,120) -->\n<line stroke=\"#2A7B6F\" stroke-width=\"2.2\" x1=\"60\" x2=\"500\" y1=\"196\" y2=\"120\"></line>\n<text fill=\"#2A7B6F\" font-size=\"12\" font-weight=\"700\" x=\"502\" y=\"118\">C<tspan baseline-shift=\"sub\" font-size=\"9\">f</tspan></text>\n<!-- Point d'intersection : f(x)=g(x) → 22400+75x=425x → 22400=350x → x=64 mois -->\n<!-- x=64 → px=60+64*3.385=277 ; y=22400+75*64=27200 → py=370-(27200/45000)*350=370-211.6=158 -->\n<circle cx=\"277\" cy=\"158\" fill=\"none\" r=\"5\" stroke=\"var(--orange)\" stroke-width=\"2\"></circle>\n<line stroke=\"var(--orange)\" stroke-dasharray=\"5,3\" stroke-width=\"1.2\" x1=\"277\" x2=\"277\" y1=\"158\" y2=\"370\"></line>\n<text fill=\"var(--orange)\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\" x=\"277\" y=\"383\">64</text>\n<text fill=\"var(--orange)\" font-size=\"10\" font-weight=\"700\" x=\"282\" y=\"150\">intersection</text>\n</svg>"
        }
      ]
    }
  ],
  "brevet_metropole_septembre_2025": [
    {
      "id": "brevet_metropole_septembre_2025_ex1",
      "titre": "playlist d'Aurélie — dénombrement & probabilités",
      "notion": "Dénombrement",
      "source": "Brevet Métropole · Septembre 2025",
      "enonce": "Pour faire écouter de la musique à son enfant, Aurélie a sélectionné 22 chansons : 9 chants de Noël , 6 comptines et des berceuses. Le temps d'écoute total des chansons de sa liste est de 55 minutes .",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Calculer le nombre deberceusesprésentes dans la liste.",
          "points": 3,
          "reponse": "22 = 9 + 6 + berceuses → berceuses = 22 − 9 − 6 = 7"
        },
        {
          "id": "2.",
          "texte": "Calculer ladurée moyenned'une chanson. Le résultat sera donné en minute et seconde.",
          "points": 4,
          "reponse": "55 / 22 = 2,5 min = 2 min 30 s"
        },
        {
          "id": "3.",
          "texte": "Aurélie écoute une chanson choisie au hasard parmi toutes les chansons de la liste.",
          "points": 3,
          "reponse": "P(comptine) = 6/22 = 3/11 ✓"
        }
      ]
    },
    {
      "id": "brevet_metropole_septembre_2025_ex2",
      "titre": "QCM — 6 questions",
      "notion": "Statistiques",
      "source": "Brevet Métropole · Septembre 2025",
      "enonce": "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée.",
      "figure": null,
      "questions": [
        {
          "id": "Question 1",
          "texte": "On considère la série :4 ; 8 ; 11 ; 7 ; 2 ; 3 ; 14. Quelle est l'étendue de cette série ?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 2",
          "texte": "Quel est le volume correspondant à1 L?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 3",
          "texte": "Quel est le nombre dont l'écriture scientifique est8,6 × 10⁻⁴?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 4",
          "texte": "La longueur et la largeur du drapeau français sont dans le ratio3 : 2. Quelle est la largeur si la longueur est90 cm?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 5",
          "texte": "Le prix d'un parfum est passé de75 €à60 €. Quel pourcentage de réduction a été appliqué ?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 6",
          "texte": "Quelle est la forme factorisée de4x² − 25?",
          "points": 3,
          "reponse": ""
        }
      ]
    },
    {
      "id": "brevet_metropole_septembre_2025_ex3",
      "titre": "triangles — Thalès & trigonométrie",
      "notion": "Géométrie",
      "source": "Brevet Métropole · Septembre 2025",
      "enonce": "On considère la figure ci-dessous où : • ABC est un triangle rectangle en B • Les points B, E et C sont alignés ainsi que les points A, D, F et C • Les droites (BD) et (EF) sont parallèles • AB = 10 cm, BC = 7,5 cm, BE = 3 cm, BD = 6 cm et CF = 2,7 cm",
      "figure": "<svg font-family=\"-apple-system,sans-serif\" height=\"300\" style=\"max-width:100%;height:auto\" viewbox=\"0 0 320 300\" width=\"320\" xmlns=\"http://www.w3.org/2000/svg\">\n<!--\n        B(60,260), A(300,260), C(60,20) — triangle rectangle en B\n        BC vertical, BA horizontal\n        E sur [BC] : BE/BC = 3/7.5 = 0.4 → E(60, 260-0.4*240) = (60,164)\n        D sur [AC], A,D,F,C alignés. BD // EF.\n        Direction BD : B(60,260)→D sur AC. AC : de A(300,260) à C(60,20).\n        Par Thalès dans triangle CAB avec E sur CB et D sur CA et BD//... :\n        CE/CB = CD/CA → D placé à t=0.4 depuis A → D=(300-0.4*240, 260-0.4*240)=(204,164)\n        → BD va de (60,260) à (204,164), direction (144,-96)\n        F sur [AC] avec EF // BD :\n        E(60,164) + k*(144,-96) = F sur AC\n        AC param: (300-240t, 260-240t)\n        60+144k = 300-240t et 164-96k = 260-240t\n        → k=0.6 → F=(60+86.4, 164-57.6)=(146,106)\n        CE/CB = 4.5/7.5 = 0.6, EF/BD = 0.6 → EF = 3.6 ✓ parallèles confirmés\n      -->\n<!-- Triangle principal ABC -->\n<polygon fill=\"rgba(0,33,188,.04)\" points=\"60,260 300,260 60,20\" stroke=\"#333\" stroke-width=\"1.8\"></polygon>\n<!-- Angle droit en B -->\n<rect fill=\"none\" height=\"12\" stroke=\"#555\" stroke-width=\"1.3\" width=\"12\" x=\"60\" y=\"248\"></rect>\n<!-- Segment BD : B(60,260) → D(204,164) -->\n<line stroke=\"#333\" stroke-width=\"1.4\" x1=\"60\" x2=\"204\" y1=\"260\" y2=\"164\"></line>\n<!-- Segment EF : E(60,164) → F(146,106) — parallèle à BD -->\n<line stroke=\"#333\" stroke-width=\"1.4\" x1=\"60\" x2=\"146\" y1=\"164\" y2=\"106\"></line>\n<!-- Marques de parallélisme // sur BD -->\n<line stroke=\"var(--orange)\" stroke-width=\"1.8\" x1=\"126\" x2=\"134\" y1=\"216\" y2=\"208\"></line>\n<line stroke=\"var(--orange)\" stroke-width=\"1.8\" x1=\"133\" x2=\"141\" y1=\"220\" y2=\"212\"></line>\n<!-- Marques de parallélisme // sur EF -->\n<line stroke=\"var(--orange)\" stroke-width=\"1.8\" x1=\"97\" x2=\"105\" y1=\"139\" y2=\"131\"></line>\n<line stroke=\"var(--orange)\" stroke-width=\"1.8\" x1=\"104\" x2=\"112\" y1=\"143\" y2=\"135\"></line>\n<!-- Points -->\n<circle cx=\"60\" cy=\"260\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"300\" cy=\"260\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"60\" cy=\"20\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"60\" cy=\"164\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"204\" cy=\"164\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"146\" cy=\"106\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<!-- Labels -->\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"44\" y=\"278\">B</text>\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"304\" y=\"268\">A</text>\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"44\" y=\"16\">C</text>\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"38\" y=\"168\">E</text>\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"208\" y=\"162\">D</text>\n<text fill=\"var(--blue)\" font-size=\"13\" font-weight=\"700\" x=\"150\" y=\"104\">F</text>\n<!-- Cotes -->\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"30\" y=\"216\">BE=3</text>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"30\" y=\"100\">CE=4,5</text>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"185\" y=\"278\">AB=10</text>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"44\" y=\"242\">BC=7,5</text>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"145\" y=\"222\">BD=6</text>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Montrer queCE = 4,5 cm.",
          "points": 3,
          "reponse": "B, E et C sont alignés, donc CE = BC − BE = 7,5 − 3 = 4,5 cm ✓"
        },
        {
          "id": "2.",
          "texte": "Démontrer que le triangleCEF est rectangle en F.",
          "points": 5,
          "reponse": "On vérifie si CE² = CF² + EF² (réciproque de Pythagore) :\nCE² = 4,5² = 20,25\nCF² + EF² = 2,7² + 3,6² = 7,29 + 12,96 = 20,25\n\nCE² = CF² + EF² = 20,25 ✓\nDonc le triangle CEF est rectangle en F."
        },
        {
          "id": "3.",
          "texte": "Calculer la mesure de l'angleB̂CA. Arrondir au degré.",
          "points": 4,
          "reponse": "Dans le triangle ABC rectangle en B :\ntan(∠BCA) = AB/BC = 10/7,5 = 4/3\n∠BCA = arctan(4/3) ≈ 53°"
        }
      ]
    },
    {
      "id": "brevet_metropole_septembre_2025_ex4",
      "titre": "filtration de piscine — fonction affine",
      "notion": "Fonction affine",
      "source": "Brevet Métropole · Septembre 2025",
      "enonce": "M. Durand vient de faire construire une piscine. Le temps quotidien de filtration idéal (en heure) est donné en fonction de la température de l'eau (en °C). La méthode ci-dessous permet de calculer ce temps de filtration :",
      "figure": "<svg height=\"280\" style=\"font-family:var(--fd);font-size:10px\" viewbox=\"0 0 440 280\" width=\"440\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Marges : left=40, bottom=30, top=15, right=20 -->\n<!-- x : 0 à 17 → 380px → 1 unité = 380/17 ≈ 22.35px -->\n<!-- y : 0 à 12 → 235px → 1 unité = 235/12 ≈ 19.58px -->\n<!-- Grille fine -->\n<g stroke=\"rgba(0,0,0,.06)\" stroke-width=\"0.5\">\n<line x1=\"40\" x2=\"420\" y1=\"15\" y2=\"15\"></line><line x1=\"40\" x2=\"420\" y1=\"35\" y2=\"35\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"54\" y2=\"54\"></line><line x1=\"40\" x2=\"420\" y1=\"74\" y2=\"74\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"93\" y2=\"93\"></line><line x1=\"40\" x2=\"420\" y1=\"113\" y2=\"113\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"132\" y2=\"132\"></line><line x1=\"40\" x2=\"420\" y1=\"152\" y2=\"152\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"171\" y2=\"171\"></line><line x1=\"40\" x2=\"420\" y1=\"191\" y2=\"191\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"210\" y2=\"210\"></line><line x1=\"40\" x2=\"420\" y1=\"230\" y2=\"230\"></line>\n<line x1=\"62\" x2=\"62\" y1=\"15\" y2=\"250\"></line><line x1=\"84\" x2=\"84\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"107\" x2=\"107\" y1=\"15\" y2=\"250\"></line><line x1=\"129\" x2=\"129\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"151\" x2=\"151\" y1=\"15\" y2=\"250\"></line><line x1=\"174\" x2=\"174\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"196\" x2=\"196\" y1=\"15\" y2=\"250\"></line><line x1=\"218\" x2=\"218\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"241\" x2=\"241\" y1=\"15\" y2=\"250\"></line><line x1=\"263\" x2=\"263\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"285\" x2=\"285\" y1=\"15\" y2=\"250\"></line><line x1=\"308\" x2=\"308\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"330\" x2=\"330\" y1=\"15\" y2=\"250\"></line><line x1=\"352\" x2=\"352\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"375\" x2=\"375\" y1=\"15\" y2=\"250\"></line><line x1=\"397\" x2=\"397\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"420\" x2=\"420\" y1=\"15\" y2=\"250\"></line>\n</g>\n<!-- Axes -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"40\" x2=\"425\" y1=\"250\" y2=\"250\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"15\" y2=\"255\"></line>\n<polygon fill=\"#333\" points=\"425,250 417,246 417,254\"></polygon>\n<polygon fill=\"#333\" points=\"40,12 36,20 44,20\"></polygon>\n<!-- Labels axe X -->\n<g fill=\"#555\" text-anchor=\"middle\">\n<text x=\"40\" y=\"263\">0</text>\n<text x=\"62\" y=\"263\">1</text><text x=\"84\" y=\"263\">2</text>\n<text x=\"107\" y=\"263\">3</text><text x=\"129\" y=\"263\">4</text>\n<text x=\"151\" y=\"263\">5</text><text x=\"174\" y=\"263\">6</text>\n<text x=\"196\" y=\"263\">7</text><text x=\"218\" y=\"263\">8</text>\n<text x=\"241\" y=\"263\">9</text><text x=\"263\" y=\"263\">10</text>\n<text x=\"285\" y=\"263\">11</text><text x=\"308\" y=\"263\">12</text>\n<text x=\"330\" y=\"263\">13</text><text x=\"352\" y=\"263\">14</text>\n<text x=\"375\" y=\"263\">15</text><text x=\"397\" y=\"263\">16</text>\n<text x=\"420\" y=\"263\">17</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-style=\"italic\" x=\"428\" y=\"253\">x</text>\n<!-- Labels axe Y -->\n<g fill=\"#555\" text-anchor=\"end\">\n<text x=\"36\" y=\"254\">0</text>\n<text x=\"36\" y=\"231\">2</text><text x=\"36\" y=\"211\">4</text>\n<text x=\"36\" y=\"191\">6</text><text x=\"36\" y=\"172\">8</text>\n<text x=\"36\" y=\"152\">10</text><text x=\"36\" y=\"132\">12</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-style=\"italic\" x=\"38\" y=\"10\">f(x)</text>\n<!-- Droite f(x) = 0.5x + 2 -->\n<!-- x=0 : f=2 → y=250-2*19.58=250-39.17=211 → (40,211) -->\n<!-- x=17 : f=10.5 → y=250-10.5*19.58=250-205.6=44 → (420,44) -->\n<line stroke=\"var(--blue)\" stroke-width=\"2.2\" x1=\"40\" x2=\"420\" y1=\"211\" y2=\"44\"></line>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Vérifier que pour une température de l'eau de26 °C, le temps de filtration est de15 h.",
          "points": 3,
          "reponse": "Température : 26°C\n26 + 4 = 30\n30 × 0,5 = 15 h ✓"
        },
        {
          "id": "2.",
          "texte": "On notexla température de l'eau (en °C). Montrer que le temps de filtration, en heure, peut s'écrire0,5x + 2.",
          "points": 3,
          "reponse": "Temps = (x + 4) × 0,5\n= 0,5x + 0,5 × 4\n= 0,5x + 2 ✓"
        },
        {
          "id": "3.",
          "texte": "On donne ci-dessous la courbe représentative de la fonctionfdéfinie parf(x) = 0,5x + 2, où x désigne la température de l'eau (en °C) et f(x) le temps de filtration (en h).",
          "points": 3,
          "reponse": "Non. La fonction f(x) = 0,5x + 2 est une fonction affine (et non linéaire) car elle a un terme constant +2.\nSa représentation graphique ne passe pas par l'origine.\n→ Le temps de filtration n'est pas proportionnel à la température.",
          "graphique": "<svg height=\"280\" style=\"font-family:var(--fd);font-size:10px\" viewbox=\"0 0 440 280\" width=\"440\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Marges : left=40, bottom=30, top=15, right=20 -->\n<!-- x : 0 à 17 → 380px → 1 unité = 380/17 ≈ 22.35px -->\n<!-- y : 0 à 12 → 235px → 1 unité = 235/12 ≈ 19.58px -->\n<!-- Grille fine -->\n<g stroke=\"rgba(0,0,0,.06)\" stroke-width=\"0.5\">\n<line x1=\"40\" x2=\"420\" y1=\"15\" y2=\"15\"></line><line x1=\"40\" x2=\"420\" y1=\"35\" y2=\"35\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"54\" y2=\"54\"></line><line x1=\"40\" x2=\"420\" y1=\"74\" y2=\"74\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"93\" y2=\"93\"></line><line x1=\"40\" x2=\"420\" y1=\"113\" y2=\"113\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"132\" y2=\"132\"></line><line x1=\"40\" x2=\"420\" y1=\"152\" y2=\"152\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"171\" y2=\"171\"></line><line x1=\"40\" x2=\"420\" y1=\"191\" y2=\"191\"></line>\n<line x1=\"40\" x2=\"420\" y1=\"210\" y2=\"210\"></line><line x1=\"40\" x2=\"420\" y1=\"230\" y2=\"230\"></line>\n<line x1=\"62\" x2=\"62\" y1=\"15\" y2=\"250\"></line><line x1=\"84\" x2=\"84\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"107\" x2=\"107\" y1=\"15\" y2=\"250\"></line><line x1=\"129\" x2=\"129\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"151\" x2=\"151\" y1=\"15\" y2=\"250\"></line><line x1=\"174\" x2=\"174\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"196\" x2=\"196\" y1=\"15\" y2=\"250\"></line><line x1=\"218\" x2=\"218\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"241\" x2=\"241\" y1=\"15\" y2=\"250\"></line><line x1=\"263\" x2=\"263\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"285\" x2=\"285\" y1=\"15\" y2=\"250\"></line><line x1=\"308\" x2=\"308\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"330\" x2=\"330\" y1=\"15\" y2=\"250\"></line><line x1=\"352\" x2=\"352\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"375\" x2=\"375\" y1=\"15\" y2=\"250\"></line><line x1=\"397\" x2=\"397\" y1=\"15\" y2=\"250\"></line>\n<line x1=\"420\" x2=\"420\" y1=\"15\" y2=\"250\"></line>\n</g>\n<!-- Axes -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"40\" x2=\"425\" y1=\"250\" y2=\"250\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"15\" y2=\"255\"></line>\n<polygon fill=\"#333\" points=\"425,250 417,246 417,254\"></polygon>\n<polygon fill=\"#333\" points=\"40,12 36,20 44,20\"></polygon>\n<!-- Labels axe X -->\n<g fill=\"#555\" text-anchor=\"middle\">\n<text x=\"40\" y=\"263\">0</text>\n<text x=\"62\" y=\"263\">1</text><text x=\"84\" y=\"263\">2</text>\n<text x=\"107\" y=\"263\">3</text><text x=\"129\" y=\"263\">4</text>\n<text x=\"151\" y=\"263\">5</text><text x=\"174\" y=\"263\">6</text>\n<text x=\"196\" y=\"263\">7</text><text x=\"218\" y=\"263\">8</text>\n<text x=\"241\" y=\"263\">9</text><text x=\"263\" y=\"263\">10</text>\n<text x=\"285\" y=\"263\">11</text><text x=\"308\" y=\"263\">12</text>\n<text x=\"330\" y=\"263\">13</text><text x=\"352\" y=\"263\">14</text>\n<text x=\"375\" y=\"263\">15</text><text x=\"397\" y=\"263\">16</text>\n<text x=\"420\" y=\"263\">17</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-style=\"italic\" x=\"428\" y=\"253\">x</text>\n<!-- Labels axe Y -->\n<g fill=\"#555\" text-anchor=\"end\">\n<text x=\"36\" y=\"254\">0</text>\n<text x=\"36\" y=\"231\">2</text><text x=\"36\" y=\"211\">4</text>\n<text x=\"36\" y=\"191\">6</text><text x=\"36\" y=\"172\">8</text>\n<text x=\"36\" y=\"152\">10</text><text x=\"36\" y=\"132\">12</text>\n</g>\n<text fill=\"#333\" font-size=\"11\" font-style=\"italic\" x=\"38\" y=\"10\">f(x)</text>\n<!-- Droite f(x) = 0.5x + 2 -->\n<!-- x=0 : f=2 → y=250-2*19.58=250-39.17=211 → (40,211) -->\n<!-- x=17 : f=10.5 → y=250-10.5*19.58=250-205.6=44 → (420,44) -->\n<line stroke=\"var(--blue)\" stroke-width=\"2.2\" x1=\"40\" x2=\"420\" y1=\"211\" y2=\"44\"></line>\n</svg>"
        },
        {
          "id": "4.",
          "texte": "Résoudre l'équation0,5x + 2 = 17et interpréter ce résultat dans le contexte du problème.",
          "points": 4,
          "reponse": "0,5x + 2 = 17\n0,5x = 15\nx = 30\n\n→ Pour une température de l'eau de 30 °C, le temps de filtration idéal est de 17 heures."
        },
        {
          "id": "5.",
          "texte": "M. Durand a décidé de filtrer sa piscine16 h par jour, tous les jours du1ᵉʳ juillet au 31 août inclus. Calculer la dépense liée au fonctionnement de la filtration au cours de cette période.",
          "points": 5,
          "reponse": "Nombre de jours : juillet = 31 jours + août = 31 jours = 62 jours\n\nConsommation = 0,8 × 16 × 62 = 793,6 kWh\n\nDépense = 793,6 × 0,23 ≈ 182,53 €"
        }
      ]
    },
    {
      "id": "brevet_metropole_septembre_2025_ex5",
      "titre": "table carrée — aires, transformation & Scratch",
      "notion": "Aire",
      "source": "Brevet Métropole · Septembre 2025",
      "enonce": "Le dessus d'une table carrée, de côté 80 cm , est composé de quatre plaques rectangulaires en bois identiques et d'une plaque carrée en verre au centre. Chaque plaque en bois a pour longueur 60 cm et pour largeur 20 cm .",
      "figure": "<svg font-family=\"-apple-system,sans-serif\" font-size=\"11\" height=\"220\" style=\"max-width:100%;height:auto\" viewbox=\"0 0 260 220\" width=\"260\" xmlns=\"http://www.w3.org/2000/svg\">\n<!--\n        Table 80×80 cm, scale = 2px/cm → 160×160px, départ (20,20)\n        Plaque bois : 60×20 cm → 120×40px  (mais en vue, les 4 plaques sont en L autour du verre)\n        Carré verre : 40×40 cm → 80×80px, centre de la table → (20+40, 20+40)=(60,60)\n        4 rectangles bois :\n          haut   : (60,20)  80×40\n          bas    : (60,140) 80×40\n          gauche : (20,60)  40×80\n          droite : (140,60) 40×80\n        4 coins (partie de la table) :\n          (20,20)(140,20)(20,140)(140,140) chacun 40×40\n      -->\n<!-- 4 coins gris -->\n<rect fill=\"rgba(0,0,0,.15)\" height=\"40\" stroke=\"#333\" stroke-width=\"1.4\" width=\"40\" x=\"20\" y=\"20\"></rect>\n<rect fill=\"rgba(0,0,0,.15)\" height=\"40\" stroke=\"#333\" stroke-width=\"1.4\" width=\"40\" x=\"140\" y=\"20\"></rect>\n<rect fill=\"rgba(0,0,0,.15)\" height=\"40\" stroke=\"#333\" stroke-width=\"1.4\" width=\"40\" x=\"20\" y=\"140\"></rect>\n<rect fill=\"rgba(0,0,0,.15)\" height=\"40\" stroke=\"#333\" stroke-width=\"1.4\" width=\"40\" x=\"140\" y=\"140\"></rect>\n<!-- 4 plaques bois gris -->\n<rect fill=\"rgba(0,0,0,.15)\" height=\"40\" stroke=\"#333\" stroke-width=\"1.4\" width=\"80\" x=\"60\" y=\"20\"></rect>\n<rect fill=\"rgba(0,0,0,.15)\" height=\"40\" stroke=\"#333\" stroke-width=\"1.4\" width=\"80\" x=\"60\" y=\"140\"></rect>\n<rect fill=\"rgba(0,0,0,.15)\" height=\"80\" stroke=\"#333\" stroke-width=\"1.4\" width=\"40\" x=\"20\" y=\"60\"></rect>\n<rect fill=\"rgba(0,0,0,.15)\" height=\"80\" stroke=\"#333\" stroke-width=\"1.4\" width=\"40\" x=\"140\" y=\"60\"></rect>\n<!-- Plaque verre blanche centrale -->\n<rect fill=\"white\" height=\"80\" stroke=\"#333\" stroke-width=\"1.4\" width=\"80\" x=\"60\" y=\"60\"></rect>\n<!-- Contour global table -->\n<rect fill=\"none\" height=\"160\" stroke=\"#333\" stroke-width=\"1.8\" width=\"160\" x=\"20\" y=\"20\"></rect>\n<!-- Numéros -->\n<text fill=\"#333\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" x=\"100\" y=\"168\">1</text>\n<text fill=\"#333\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" x=\"162\" y=\"103\">2</text>\n<!-- Flèche plaque en verre -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"110\" x2=\"185\" y1=\"85\" y2=\"55\"></line>\n<circle cx=\"110\" cy=\"85\" fill=\"#333\" r=\"2\"></circle>\n<text fill=\"#333\" x=\"188\" y=\"54\">Plaque en verre</text>\n<!-- Flèche plaque en bois -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"40\" x2=\"5\" y1=\"100\" y2=\"130\"></line>\n<circle cx=\"40\" cy=\"100\" fill=\"#333\" r=\"2\"></circle>\n<text fill=\"#333\" x=\"2\" y=\"142\">Plaque en bois</text>\n<!-- Cote 80 cm en bas -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"20\" x2=\"180\" y1=\"196\" y2=\"196\"></line>\n<polygon fill=\"#333\" points=\"20,196 28,193 28,199\"></polygon>\n<polygon fill=\"#333\" points=\"180,196 172,193 172,199\"></polygon>\n<line stroke=\"#333\" stroke-dasharray=\"3,3\" stroke-width=\"0.8\" x1=\"20\" x2=\"20\" y1=\"182\" y2=\"200\"></line>\n<line stroke=\"#333\" stroke-dasharray=\"3,3\" stroke-width=\"0.8\" x1=\"180\" x2=\"180\" y1=\"182\" y2=\"200\"></line>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"100\" y=\"210\">80 cm</text>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Montrer que l'aire du dessus de la table est égale à6 400 cm².",
          "points": 2,
          "reponse": "La table est un carré de côté 80 cm.\nAire = 80² = 6 400 cm² ✓"
        },
        {
          "id": "2.",
          "texte": "Montrer que l'aire de la plaque en verre représente25 %de l'aire totale du dessus de la table.",
          "points": 5,
          "reponse": "Aire totale du dessus = 6 400 cm²\nAire des 4 plaques en bois = 4 × (60 × 20) = 4 × 1 200 = 4 800 cm²\nAire de la plaque en verre = 6 400 − 4 800 = 1 600 cm²\n\nProportion = 1 600 / 6 400 = 0,25 = 25 % ✓"
        },
        {
          "id": "3.",
          "texte": "Quel est le nom de la transformation géométrique permettant de passer du rectangle n°1 au rectangle n°2 ? Aucune justification n'est demandée.",
          "points": 3,
          "reponse": "Une rotation de 90° (ou une symétrie)"
        },
        {
          "id": "4.",
          "texte": "On souhaite réaliser un dessin du dessus de cette table avec Scratch. Le lutin est orienté vers la droite. On a créé le bloc ci-dessous pour dessiner le rectangle n°1 (1 pas = 1 cm).",
          "points": 2,
          "reponse": "Le rectangle n°1 mesure 60 cm × 20 cm.\nLigne 3 : répéter 2 fois (un rectangle a 2 paires de côtés)\nLigne 5 : tourner ↩ de 90 degrés\nLigne 6 : avancer de 20 pas"
        }
      ]
    }
  ],
  "brevet_nouvelle_caledonie_2025": [
    {
      "id": "brevet_nouvelle_caledonie_2025_ex1",
      "titre": "5 questions — 3 réponses",
      "notion": "Nombres premiers",
      "source": "Brevet Nouvelle-Calédonie · 2025",
      "enonce": "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée. Aucun point ne sera enlevé en cas de mauvaise réponse.",
      "figure": "<svg font-family=\"-apple-system,sans-serif\" font-size=\"11\" height=\"130\" viewbox=\"0 0 160 130\" width=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Echelle : 1cm = 16px -->\n<!-- Grand rectangle 7×5 = 112×80px, départ (24,10) -->\n<!-- Encoche bas-droite : 2×2 cm = 32×32px -->\n<!-- Figure = L-shape : points (24,10),(136,10),(136,90),(104,90),(104,58),(24,58)... -->\n<!-- Recalcul : hauteur totale 5cm=80px, largeur 7cm=112px -->\n<!-- Encoche bas-droite 2cm×2cm=32×32 -->\n<!-- Polygone : (24,10)→(136,10)→(136,90)→(104,90)→(104,58... non -->\n<!-- Encoche en bas à droite : on enlève un rectangle 2×2 du coin bas-droit -->\n<!-- Points : BL(24,90), TL(24,10), TR(136,10), puis descend à (136, 90-32=58), -->\n<!--          puis va à gauche (136-32=104, 58), puis descend (104,90), revient BL -->\n<polygon fill=\"rgba(0,33,188,.06)\" points=\"24,10 136,10 136,58 104,58 104,90 24,90\" stroke=\"#333\" stroke-linejoin=\"round\" stroke-width=\"1.6\"></polygon>\n<!-- Angles droits -->\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"24\" y=\"10\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"24\" y=\"82\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"128\" y=\"10\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"96\" y=\"58\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"96\" y=\"82\"></rect>\n<!-- Marques d'égalité sur les côtés de l'encoche -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"116\" x2=\"122\" y1=\"74\" y2=\"74\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"119\" x2=\"119\" y1=\"71\" y2=\"77\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"119\" x2=\"125\" y1=\"63\" y2=\"63\"></line>\n<!-- Cotes -->\n<!-- 7 cm en haut -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"24\" x2=\"136\" y1=\"4\" y2=\"4\"></line>\n<polygon fill=\"#333\" points=\"24,4 32,1 32,7\"></polygon>\n<polygon fill=\"#333\" points=\"136,4 128,1 128,7\"></polygon>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"80\" y=\"2\">7 cm</text>\n<!-- 5 cm à droite -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"142\" x2=\"142\" y1=\"10\" y2=\"58\"></line>\n<polygon fill=\"#333\" points=\"142,10 139,18 145,18\"></polygon>\n<polygon fill=\"#333\" points=\"142,58 139,50 145,50\"></polygon>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"154\" y=\"37\">5 cm</text>\n<!-- 2 cm encoche bas -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"104\" x2=\"136\" y1=\"96\" y2=\"96\"></line>\n<polygon fill=\"#333\" points=\"104,96 112,93 112,99\"></polygon>\n<polygon fill=\"#333\" points=\"136,96 128,93 128,99\"></polygon>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"120\" y=\"108\">2 cm</text>\n</svg>",
      "questions": [
        {
          "id": "Question 1",
          "texte": "Parmi les nombres suivants, lequel est premier ?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 2",
          "texte": "Quelle est l'aire de la figure ci-dessous ?",
          "points": 3,
          "reponse": "",
          "graphique": "<svg font-family=\"-apple-system,sans-serif\" font-size=\"11\" height=\"130\" viewbox=\"0 0 160 130\" width=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Echelle : 1cm = 16px -->\n<!-- Grand rectangle 7×5 = 112×80px, départ (24,10) -->\n<!-- Encoche bas-droite : 2×2 cm = 32×32px -->\n<!-- Figure = L-shape : points (24,10),(136,10),(136,90),(104,90),(104,58),(24,58)... -->\n<!-- Recalcul : hauteur totale 5cm=80px, largeur 7cm=112px -->\n<!-- Encoche bas-droite 2cm×2cm=32×32 -->\n<!-- Polygone : (24,10)→(136,10)→(136,90)→(104,90)→(104,58... non -->\n<!-- Encoche en bas à droite : on enlève un rectangle 2×2 du coin bas-droit -->\n<!-- Points : BL(24,90), TL(24,10), TR(136,10), puis descend à (136, 90-32=58), -->\n<!--          puis va à gauche (136-32=104, 58), puis descend (104,90), revient BL -->\n<polygon fill=\"rgba(0,33,188,.06)\" points=\"24,10 136,10 136,58 104,58 104,90 24,90\" stroke=\"#333\" stroke-linejoin=\"round\" stroke-width=\"1.6\"></polygon>\n<!-- Angles droits -->\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"24\" y=\"10\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"24\" y=\"82\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"128\" y=\"10\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"96\" y=\"58\"></rect>\n<rect fill=\"none\" height=\"8\" stroke=\"#555\" stroke-width=\"1.2\" width=\"8\" x=\"96\" y=\"82\"></rect>\n<!-- Marques d'égalité sur les côtés de l'encoche -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"116\" x2=\"122\" y1=\"74\" y2=\"74\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"119\" x2=\"119\" y1=\"71\" y2=\"77\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"119\" x2=\"125\" y1=\"63\" y2=\"63\"></line>\n<!-- Cotes -->\n<!-- 7 cm en haut -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"24\" x2=\"136\" y1=\"4\" y2=\"4\"></line>\n<polygon fill=\"#333\" points=\"24,4 32,1 32,7\"></polygon>\n<polygon fill=\"#333\" points=\"136,4 128,1 128,7\"></polygon>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"80\" y=\"2\">7 cm</text>\n<!-- 5 cm à droite -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"142\" x2=\"142\" y1=\"10\" y2=\"58\"></line>\n<polygon fill=\"#333\" points=\"142,10 139,18 145,18\"></polygon>\n<polygon fill=\"#333\" points=\"142,58 139,50 145,50\"></polygon>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"154\" y=\"37\">5 cm</text>\n<!-- 2 cm encoche bas -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"104\" x2=\"136\" y1=\"96\" y2=\"96\"></line>\n<polygon fill=\"#333\" points=\"104,96 112,93 112,99\"></polygon>\n<polygon fill=\"#333\" points=\"136,96 128,93 128,99\"></polygon>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"120\" y=\"108\">2 cm</text>\n</svg>"
        },
        {
          "id": "Question 3",
          "texte": "Une de ces fonctions est affine. Laquelle ?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 4",
          "texte": "La distance de Tontouta à Narita est égale à environ6 980 km. Le vol Tontouta-Narita dure environ9 heures. Quelle est la vitesse moyenne, arrondie à la centaine de km/h, de l'avion sur ce trajet ?",
          "points": 3,
          "reponse": ""
        },
        {
          "id": "Question 5",
          "texte": "Dans un collège de730 élèves,60 %des élèves sont des filles. Quel est le nombre de filles dans ce collège ?",
          "points": 3,
          "reponse": ""
        }
      ]
    },
    {
      "id": "brevet_nouvelle_caledonie_2025_ex2",
      "titre": "trigonométrie & vitesse",
      "notion": "Géométrie",
      "source": "Brevet Nouvelle-Calédonie · 2025",
      "enonce": "Thomas souhaite construire le cerf-volant représenté par la figure ci-dessous. On donne : D̂EB = 90° , ÊBD = 30° , AB = 50 cm , CD = 40 cm , ED = EC",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "CalculerBE. On donnera une valeur arrondie au millimètre.(Rédiger en faisant apparaître les différentes étapes.)",
          "points": 7,
          "reponse": "Dans le triangle BED rectangle en E :\ntan(∠EBD) = ED/BE\ntan(30°) = ED/BE\n\nOr ED = CD/2 = 40/2 = 20 cm (car ED = EC et CD = 40 cm)\n\ntan(30°) = 20/BE\nBE = 20/tan(30°)\nBE = 20/(1/√3)\nBE = 20√3\nBE ≈ 34,641…\nBE ≈ 34,6 mm (au millimètre)"
        },
        {
          "id": "2.",
          "texte": "CalculerHT, altitude à laquelle volait son cerf-volant. On donnera une valeur arrondie au mètre.(SH = 20,50 m, ST = 7,60 m, angle droit en T)",
          "points": 6,
          "reponse": "Dans le triangle STH rectangle en T :\nD'après le théorème de Pythagore :\nSH² = ST² + HT²\nHT² = SH² − ST²\nHT² = 20,50² − 7,60²\nHT² = 420,25 − 57,76\nHT² = 362,49\nHT = √362,49\nHT ≈ 19 m"
        },
        {
          "id": "3.",
          "texte": "Il est conseillé de ne pas utiliser ce cerf-volant lorsque le vent dépasse20 km/h. La météo annonce un vent ne dépassant pas15 nœuds. On donne1 nœud = 0,514 m/s. Thomas peut-il faire voler son cerf-volant sans risque ? Justifier.",
          "points": 7,
          "reponse": "Vitesse du vent = 15 nœuds = 15 × 0,514 = 7,71 m/s\n\nConversion en km/h :\n7,71 m/s × 3,6 = 27,756 km/h\n\n27,756 km/h > 20 km/h\n\n→ Non, Thomas ne peut pas faire voler son cerf-volant sans risque car le vent peut atteindre environ 27,8 km/h, ce qui dépasse la limite de 20 km/h."
        }
      ]
    },
    {
      "id": "brevet_nouvelle_caledonie_2025_ex3",
      "titre": "fonctions affines & équations",
      "notion": "Calcul littéral",
      "source": "Brevet Nouvelle-Calédonie · 2025",
      "enonce": "On considère les programmes de calcul suivants :",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Dans cette question, on choisit le nombre2pour tester les deux programmes.",
          "points": 2,
          "reponse": "2 → 2 + 4 = 6 → 6 × 3 = 18 ✓"
        },
        {
          "id": "2.",
          "texte": "Soitfla fonction associée au programme A, qui au nombre choisi x fait correspondre le résultat f(x).",
          "points": 3,
          "reponse": "x → x + 4 → (x + 4) × 3 = 3x + 12\nDonc f(x) = 3x + 12 ✓"
        },
        {
          "id": "3.",
          "texte": "Soitgla fonction associée au programme B, qui au nombre choisi x fait correspondre le résultat g(x).",
          "points": 3,
          "reponse": "x → x × 5 = 5x → 5x − 3 → 5x − 3 − x = 4x − 3\nDonc g(x) = 4x − 3"
        },
        {
          "id": "4.",
          "texte": "Hugo a choisi un nombre. Il l'a testé avec les deux programmes et a trouvé lemême résultatà chaque fois. Quel nombre a-t-il choisi ?",
          "points": 1,
          "reponse": "f(x) = g(x)\n3x + 12 = 4x − 3\n12 + 3 = 4x − 3x\n15 = x\n\nHugo a choisi le nombre 15."
        }
      ]
    },
    {
      "id": "brevet_nouvelle_caledonie_2025_ex4",
      "titre": "probabilités & dénombrement",
      "notion": "Probabilités",
      "source": "Brevet Nouvelle-Calédonie · 2025",
      "enonce": "Dans un jeu, les candidats tirent une bille dans une boîte et notent sa couleur, puis lancent un dé de la couleur de la bille tirée. Les issues sont des couples (couleur ; nombre). La boîte contient : 15 billes rouges , 10 billes vertes et 5 billes bleues . • Le dé rouge a 10 faces numérotées de 0 à 9. • Le dé vert a 6 faces numérotées de 1 à 6. • Le dé bleu a 4 faces numérotées de 1 à 4. Pour gagner au jeu il faut obtenir 1 au lancé de dé.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Quelle est la probabilité de tirer unebille bleuedans la boîte ?",
          "points": 3,
          "reponse": "Total de billes : 15 + 10 + 5 = 30\nP(bille bleue) = 5/30 = 1/6"
        },
        {
          "id": "2.",
          "texte": "Amandine a tiré une billeverteet Alexis a tiré une billerouge. Qui a le plus de chance de gagner à ce jeu ? Justifier.",
          "points": 4,
          "reponse": "Pour gagner, il faut obtenir 1 au lancer de dé.\n\nAmandine (dé vert, 6 faces) : P(1) = 1/6\nAlexis (dé rouge, 10 faces) : P(1) = 1/10\n\n1/6 > 1/10\n→ Amandine a plus de chances de gagner."
        },
        {
          "id": "3.",
          "texte": "Donner l'ensemble des issues possibles de ce jeu. On notera « R » pour rouge, « V » pour vert et « B » pour bleu.Par exemple : l'issue (R ; 3) correspond à « bille rouge et résultat du dé = 3 ».",
          "points": 6,
          "reponse": "Bille rouge → dé rouge (0 à 9) :\n(R;0), (R;1), (R;2), (R;3), (R;4), (R;5), (R;6), (R;7), (R;8), (R;9)\n\nBille verte → dé vert (1 à 6) :\n(V;1), (V;2), (V;3), (V;4), (V;5), (V;6)\n\nBille bleue → dé bleu (1 à 4) :\n(B;1), (B;2), (B;3), (B;4)\n\nTotal : 10 + 6 + 4 = 20 issues possibles."
        }
      ]
    },
    {
      "id": "brevet_nouvelle_caledonie_2025_ex5",
      "titre": "thalès, aires & triangles semblables",
      "notion": "Géométrie",
      "source": "Brevet Nouvelle-Calédonie · 2025",
      "enonce": "La figure ci-dessous n'est pas à l'échelle. On donne : AE = 6 cm , AD = 15 cm , BE = 4 cm B̂EA = ĈDA = 110° Les points A, B et C sont alignés. Les points A, E et D sont alignés.",
      "figure": "<svg font-family=\"-apple-system,sans-serif\" font-size=\"12\" height=\"240\" viewbox=\"0 0 400 240\" width=\"400\" xmlns=\"http://www.w3.org/2000/svg\">\n<!--\n        A(30,190), E(126,190), D(330,190) — alignés horizontalement\n        AE=6, AD=15 → scale: 1cm=19.2px → AE=115px, AD=288px... trop grand\n        Simplifié : A(30,190), E(150,190), D(330,190)\n        B au-dessus de E : BE=4cm, angle BEA=110° depuis AE\n        Angle BEA=110° → depuis la droite AE vers B : 180°-110°=70° au-dessus de AE\n        B = E + 4×(cos(70°), -sin(70°)) px... trop petit\n        On place B visuellement : B(180,110)\n        C en haut à droite, aligné avec A et B : droite AB prolongée\n        Direction AB : (180-30, 110-190) = (150,-80) → C = B + t*(150,-80)\n        C sur la droite AD (prolongée? non, C est en haut)\n        En fait A,B,C alignés → C = A + s*(B-A) pour s>1\n        s=2 → C = (30+300, 190-160) = (330, 30) — mais D=(330,190) → CD vertical\n        C(330,30), D(330,190) → CD vertical = bon !\n        angle CDA = angle entre DA et DC = arctan(CD/AD)... on vérifie 110°\n      -->\n<!-- Triangle ABE (petit) -->\n<polygon fill=\"rgba(0,33,188,.05)\" points=\"30,190 150,190 180,110\" stroke=\"none\"></polygon>\n<!-- Triangle ACD (grand) -->\n<polygon fill=\"rgba(238,110,52,.04)\" points=\"30,190 330,190 330,30\" stroke=\"none\"></polygon>\n<!-- Segments principaux -->\n<!-- AD horizontal -->\n<line stroke=\"#333\" stroke-width=\"1.6\" x1=\"30\" x2=\"330\" y1=\"190\" y2=\"190\"></line>\n<!-- AB prolongé jusqu'à C -->\n<line stroke=\"#333\" stroke-width=\"1.6\" x1=\"30\" x2=\"330\" y1=\"190\" y2=\"30\"></line>\n<!-- BE -->\n<line stroke=\"var(--blue)\" stroke-width=\"1.4\" x1=\"150\" x2=\"180\" y1=\"190\" y2=\"110\"></line>\n<!-- CD -->\n<line stroke=\"var(--blue)\" stroke-width=\"1.4\" x1=\"330\" x2=\"330\" y1=\"190\" y2=\"30\"></line>\n<!-- Angles 110° en E et D -->\n<path d=\"M 135,190 A 18,18 0 0,0 144,174\" fill=\"none\" stroke=\"var(--orange)\" stroke-width=\"1.3\"></path>\n<text fill=\"var(--orange)\" font-size=\"10\" x=\"118\" y=\"183\">110°</text>\n<path d=\"M 315,190 A 18,18 0 0,0 320,172\" fill=\"none\" stroke=\"var(--orange)\" stroke-width=\"1.3\"></path>\n<text fill=\"var(--orange)\" font-size=\"10\" x=\"290\" y=\"183\">110°</text>\n<!-- Points -->\n<circle cx=\"30\" cy=\"190\" fill=\"#333\" r=\"3\"></circle>\n<circle cx=\"150\" cy=\"190\" fill=\"var(--blue)\" r=\"3\"></circle>\n<circle cx=\"330\" cy=\"190\" fill=\"var(--blue)\" r=\"3\"></circle>\n<circle cx=\"180\" cy=\"110\" fill=\"var(--blue)\" r=\"3\"></circle>\n<circle cx=\"330\" cy=\"30\" fill=\"var(--blue)\" r=\"3\"></circle>\n<!-- Labels -->\n<text fill=\"#333\" font-weight=\"700\" x=\"18\" y=\"205\">A</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"148\" y=\"207\">E</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"334\" y=\"207\">D</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"183\" y=\"108\">B</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"334\" y=\"28\">C</text>\n<!-- Cotes -->\n<!-- AE = 6 cm -->\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"90\" y=\"208\">6 cm</text>\n<!-- AD = 15 cm -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"30\" x2=\"330\" y1=\"216\" y2=\"216\"></line>\n<polygon fill=\"#333\" points=\"30,216 38,213 38,219\"></polygon>\n<polygon fill=\"#333\" points=\"330,216 322,213 322,219\"></polygon>\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" x=\"180\" y=\"228\">15 cm</text>\n<!-- BE = 4 cm -->\n<text fill=\"var(--muted)\" font-size=\"10\" text-anchor=\"middle\" transform=\"rotate(-75,175,155)\" x=\"175\" y=\"155\">4 cm</text>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Prouver que les droites(BE)et(CD)sont parallèles.",
          "points": 5,
          "reponse": "Les angles B̂EA et ĈDA sont des angles correspondants formés par les droites (BE), (CD) et la sécante (AD).\n\nB̂EA = ĈDA = 110°\n\nDeux droites sont parallèles si les angles correspondants sont égaux.\n→ Les droites (BE) et (CD) sont parallèles."
        },
        {
          "id": "2.",
          "texte": "CalculerCD.(Rédiger en faisant apparaître les différentes étapes.)",
          "points": 7,
          "reponse": "(BE) // (CD), et les points A, B, C sont alignés ainsi que A, E, D.\nD'après le théorème de Thalès dans le triangle ACD :\nAE/AD = BE/CD\n6/15 = 4/CD\nCD = 4 × 15/6\nCD = 60/6\nCD = 10 cm"
        },
        {
          "id": "3.",
          "texte": "L'aire du triangle ABE, arrondie au dixième, est égale à11,3 cm². En déduire l'aire du triangle ACD arrondie au dixième.",
          "points": 5,
          "reponse": "Les triangles ABE et ACD sont semblables (même angle en A, (BE)//(CD)).\nLe rapport de similitude est : AE/AD = 6/15 = 2/5\n\nLe rapport des aires est le carré du rapport de similitude :\nAire(ABE)/Aire(ACD) = (2/5)² = 4/25\n\n11,3 / Aire(ACD) = 4/25\nAire(ACD) = 11,3 × 25/4 = 70,625\nAire(ACD) ≈ 70,6 cm²"
        },
        {
          "id": "4.",
          "texte": "Construire cette figure en vraie grandeur sur l'annexe 1.",
          "points": 3,
          "reponse": "Construction à réaliser sur papier :\n1. Tracer le segment AD = 15 cm\n2. Placer E sur AD avec AE = 6 cm\n3. En E, tracer l'angle BEA = 110° et reporter BE = 4 cm → placer B\n4. Tracer la droite (AB) et la prolonger\n5. En D, tracer l'angle CDA = 110° et reporter CD = 10 cm → placer C\n6. Vérifier que A, "
        }
      ]
    },
    {
      "id": "brevet_nouvelle_caledonie_2025_ex6",
      "titre": "scripts & figures géométriques",
      "notion": "Scratch",
      "source": "Brevet Nouvelle-Calédonie · 2025",
      "enonce": "",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Associer à chaque script ci-dessous la figure qui lui correspond.",
          "points": 6,
          "reponse": "Script 1 (tourner 60°, répéter 3) → tracé incomplet avec angle aigu → Figure A\nScript 2 (tourner 90°, répéter 3) → 3 côtés d'un carré → Figure C\nScript 3 (tourner 120°, répéter 3) → triangle équilatéral complet → Figure B"
        },
        {
          "id": "2.",
          "texte": "Compléter le script qui commande la construction de laFigure E(3 carrés imbriqués de côtés 20, 60 et 100 pas).",
          "points": 10,
          "reponse": "Le script pour la Figure E doit tracer 3 carrés imbriqués.\nOn peut utiliser répéter 3 fois un bloc qui :\n  - trace un carré (répéter 4 fois : avancer de côté pas, tourner 90°)\n  - agrandit le côté\n\nExemple de script complet :\nquand 🚩 est cliqué\nstylo en position d'écriture\nmettre côté à 20\nrépéter 3"
        }
      ]
    }
  ],
  "brevet_polynesie_2025": [
    {
      "id": "brevet_polynesie_2025_ex1",
      "titre": "escalade — tableur & statistiques",
      "notion": "Tableur",
      "source": "Brevet Polynésie · 2025",
      "enonce": "L'association sportive d'un collège propose aux élèves une activité escalade. La feuille de calcul ci-dessous obtenue à l'aide d'un tableur indique la répartition par âge des élèves inscrits à l'escalade.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Quel est le nombre d'élèves âgés de12 ansinscrits à l'escalade ?",
          "points": 2,
          "reponse": "D'après le tableau, la colonne D correspond à l'âge 12 ans.\nIl y a 8 élèves âgés de 12 ans."
        },
        {
          "id": "2.",
          "texte": "Calculer lenombre totald'élèves inscrits à l'escalade.",
          "points": 3,
          "reponse": "Total = 1 + 3 + 8 + 12 + 4 + 2 = 30 élèves"
        },
        {
          "id": "3.",
          "texte": "Quelle formule peut-on saisir dans la celluleH2pour obtenir le nombre total d'élèves inscrits à l'escalade ?",
          "points": 3,
          "reponse": "=SOMME(B2:G2)\nou encore : =B2+C2+D2+E2+F2+G2"
        },
        {
          "id": "4.",
          "texte": "Le professeur affirme : «1/5des élèves inscrits à l'escalade ont 14 ans ou plus ». A-t-il raison ?",
          "points": 4,
          "reponse": "Élèves de 14 ans ou plus : 4 + 2 = 6 élèves\nProportion = 6/30 = 1/5\n\n→ Oui, le professeur a raison."
        },
        {
          "id": "5.",
          "texte": "L'année dernière, la moyenne des âges des élèves inscrits à l'escalade était de13 ans. La moyenne des âges cette année a-t-elle augmenté par rapport à l'année dernière ?",
          "points": 5,
          "reponse": "Moyenne = (10×1 + 11×3 + 12×8 + 13×12 + 14×4 + 15×2) / 30\n= (10 + 33 + 96 + 156 + 56 + 30) / 30\n= 381 / 30\n= 12,7 ans\n\n12,7 < 13 → La moyenne a diminué par rapport à l'année dernière."
        },
        {
          "id": "6.",
          "texte": "L'association prévoit une hausse de10 %des inscriptions à l'escalade l'année prochaine. Déterminer le nombre d'élèves qui seront inscrits à l'escalade l'année prochaine.",
          "points": 3,
          "reponse": "Nombre d'élèves l'année prochaine = 30 × 1,10 = 33 élèves"
        }
      ]
    },
    {
      "id": "brevet_polynesie_2025_ex2",
      "titre": "jardin botanique — géométrie & trigonométrie",
      "notion": "Géométrie",
      "source": "Brevet Polynésie · 2025",
      "enonce": "Le jardin botanique d'une ville peut être représenté par le quadrilatère ABCD ci-dessous. On sait que : • AB = 500 m , BE = 250 m et DE = 750 m • Les segments [AC] et [BD] se coupent au point E . La figure ci-contre n'est pas à l'échelle.",
      "figure": "<svg height=\"300\" style=\"font-family:var(--fd)\" viewbox=\"0 0 380 300\" width=\"380\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- A(40,30), B(200,30), C(340,250), D(40,250), E≈(144,107) -->\n<polygon fill=\"rgba(0,33,188,.08)\" points=\"40,30 200,30 144,107 40,250\" stroke=\"none\"></polygon>\n<polygon fill=\"rgba(0,33,188,.03)\" points=\"40,30 200,30 340,250 40,250\" stroke=\"#333\" stroke-dasharray=\"6,4\" stroke-width=\"1.8\"></polygon>\n<line stroke=\"#333\" stroke-width=\"1.8\" x1=\"40\" x2=\"200\" y1=\"30\" y2=\"30\"></line>\n<line stroke=\"#333\" stroke-width=\"1.8\" x1=\"40\" x2=\"40\" y1=\"30\" y2=\"250\"></line>\n<line stroke=\"var(--blue)\" stroke-width=\"1.4\" x1=\"40\" x2=\"340\" y1=\"30\" y2=\"250\"></line>\n<line stroke=\"var(--blue)\" stroke-width=\"1.4\" x1=\"200\" x2=\"40\" y1=\"30\" y2=\"250\"></line>\n<rect fill=\"none\" height=\"12\" stroke=\"#555\" stroke-width=\"1.3\" width=\"12\" x=\"40\" y=\"30\"></rect>\n<rect fill=\"none\" height=\"12\" stroke=\"#555\" stroke-width=\"1.3\" width=\"12\" x=\"40\" y=\"238\"></rect>\n<rect fill=\"none\" height=\"9\" stroke=\"var(--orange)\" stroke-width=\"1.3\" width=\"9\" x=\"144\" y=\"107\"></rect>\n<circle cx=\"40\" cy=\"30\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"200\" cy=\"30\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"340\" cy=\"250\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"40\" cy=\"250\" fill=\"var(--blue)\" r=\"3.5\"></circle>\n<circle cx=\"144\" cy=\"107\" fill=\"var(--orange)\" r=\"3.5\"></circle>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"26\" y=\"26\">A</text>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"204\" y=\"26\">B</text>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"344\" y=\"256\">C</text>\n<text fill=\"var(--blue)\" font-size=\"14\" font-weight=\"700\" x=\"22\" y=\"262\">D</text>\n<text fill=\"var(--orange)\" font-size=\"13\" font-weight=\"700\" x=\"150\" y=\"103\">E</text>\n<text fill=\"var(--muted)\" font-size=\"11\" text-anchor=\"middle\" x=\"112\" y=\"22\">500 m</text>\n<text fill=\"var(--muted)\" font-size=\"10\" x=\"168\" y=\"72\">250 m</text>\n<text fill=\"var(--muted)\" font-size=\"10\" x=\"52\" y=\"190\">750 m</text>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Quelle est la longueur du segment[DB]?",
          "points": 2,
          "reponse": "E est sur [DB], donc DB = DE + EB = 750 + 250 = 1 000 m"
        },
        {
          "id": "2.",
          "texte": "En raisonnant dans le triangle rectangle ABD, montrer que la longueur du segment[AD], arrondie au mètre, est égale à environ866 m.",
          "points": 4,
          "reponse": "Le triangle ABD est rectangle en A.\nD'après le théorème de Pythagore :\nBD² = AB² + AD²\n1 000² = 500² + AD²\nAD² = 1 000 000 − 250 000 = 750 000\nAD = √750 000 ≈ 866 m ✓"
        },
        {
          "id": "3.",
          "texte": "Calculer le sinus de l'angleÊAB.",
          "points": 3,
          "reponse": "Dans le triangle ABE rectangle en E :\nsin(∠EAB) = BE / AB = 250 / 500 = 1/2"
        },
        {
          "id": "4.",
          "texte": "Montrer que les droites(AB)et(DC)sont parallèles.",
          "points": 4,
          "reponse": "On vérifie le rapport EB/ED = EA/EC :\nEB/ED = 250/750 = 1/3\n\nD'après la réciproque du théorème de Thalès dans le triangle avec les diagonales,\nsi EB/ED = EA/EC alors (AB) ∥ (DC). ✓"
        },
        {
          "id": "5.",
          "texte": "Un piéton fait le tour du jardin botanique à la vitesse moyenne de1,1 m/s. Il lit que [BC] ≈1 323 m. Le temps mis pour faire le tour est-il inférieur àune heure?",
          "points": 3,
          "reponse": "Périmètre = AB + BC + CD + DA\n= 500 + 1 323 + 1 500 + 866 = 4 189 m\n\nTemps = distance / vitesse = 4 189 / 1,1 ≈ 3 808 s\n\n1 heure = 3 600 s\n3 808 s > 3 600 s → Non, le temps est supérieur à une heure."
        }
      ]
    },
    {
      "id": "brevet_polynesie_2025_ex3",
      "titre": "QCM — 5 questions",
      "notion": "Calcul",
      "source": "Brevet Polynésie · 2025",
      "enonce": "QCM — une seule réponse est exacte par question. Aucune justification n'est demandée.",
      "figure": "<svg height=\"50\" style=\"font-family:var(--fd)\" viewbox=\"0 0 320 50\" width=\"320\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Droite -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"20\" x2=\"300\" y1=\"25\" y2=\"25\"></line>\n<polygon fill=\"#333\" points=\"300,25 292,21 292,29\"></polygon>\n<polygon fill=\"#333\" points=\"20,25 28,21 28,29\"></polygon>\n<!-- Points B, D, E, G -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"18\" y2=\"32\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"110\" x2=\"110\" y1=\"18\" y2=\"32\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"160\" x2=\"160\" y1=\"18\" y2=\"32\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"270\" x2=\"270\" y1=\"18\" y2=\"32\"></line>\n<!-- Labels -->\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"40\" y=\"14\">B</text>\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"110\" y=\"14\">D</text>\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"160\" y=\"14\">E</text>\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"270\" y=\"14\">G</text>\n<!-- Cote x sous BD -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"40\" x2=\"110\" y1=\"38\" y2=\"38\"></line>\n<polygon fill=\"#333\" points=\"40,38 48,35 48,41\"></polygon>\n<polygon fill=\"#333\" points=\"110,38 102,35 102,41\"></polygon>\n<text fill=\"var(--ink)\" font-size=\"11\" font-style=\"italic\" text-anchor=\"middle\" x=\"75\" y=\"48\">x</text>\n<!-- Cote 3 sous EG (flèche gauche) -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"160\" x2=\"270\" y1=\"38\" y2=\"38\"></line>\n<polygon fill=\"#333\" points=\"270,38 262,35 262,41\"></polygon>\n<polygon fill=\"#333\" points=\"160,38 168,35 168,41\"></polygon>\n<text fill=\"var(--ink)\" font-size=\"11\" text-anchor=\"middle\" x=\"215\" y=\"48\">3</text>\n</svg>",
      "questions": [
        {
          "id": "Question 1",
          "texte": "(−3)² est égal à",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 2",
          "texte": "La décomposition en produit de facteurs premiers du nombre360est",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 3",
          "texte": "Un rectangle d'aire135 cm²a pour largeur3 cm. Combien mesure sa longueur ?",
          "points": 4,
          "reponse": ""
        },
        {
          "id": "Question 4",
          "texte": "Quelle expression littérale correspond à la longueur du segment [BG] ?",
          "points": 4,
          "reponse": "",
          "graphique": "<svg height=\"50\" style=\"font-family:var(--fd)\" viewbox=\"0 0 320 50\" width=\"320\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Droite -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"20\" x2=\"300\" y1=\"25\" y2=\"25\"></line>\n<polygon fill=\"#333\" points=\"300,25 292,21 292,29\"></polygon>\n<polygon fill=\"#333\" points=\"20,25 28,21 28,29\"></polygon>\n<!-- Points B, D, E, G -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"18\" y2=\"32\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"110\" x2=\"110\" y1=\"18\" y2=\"32\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"160\" x2=\"160\" y1=\"18\" y2=\"32\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"270\" x2=\"270\" y1=\"18\" y2=\"32\"></line>\n<!-- Labels -->\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"40\" y=\"14\">B</text>\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"110\" y=\"14\">D</text>\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"160\" y=\"14\">E</text>\n<text fill=\"var(--blue)\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\" x=\"270\" y=\"14\">G</text>\n<!-- Cote x sous BD -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"40\" x2=\"110\" y1=\"38\" y2=\"38\"></line>\n<polygon fill=\"#333\" points=\"40,38 48,35 48,41\"></polygon>\n<polygon fill=\"#333\" points=\"110,38 102,35 102,41\"></polygon>\n<text fill=\"var(--ink)\" font-size=\"11\" font-style=\"italic\" text-anchor=\"middle\" x=\"75\" y=\"48\">x</text>\n<!-- Cote 3 sous EG (flèche gauche) -->\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"160\" x2=\"270\" y1=\"38\" y2=\"38\"></line>\n<polygon fill=\"#333\" points=\"270,38 262,35 262,41\"></polygon>\n<polygon fill=\"#333\" points=\"160,38 168,35 168,41\"></polygon>\n<text fill=\"var(--ink)\" font-size=\"11\" text-anchor=\"middle\" x=\"215\" y=\"48\">3</text>\n</svg>"
        },
        {
          "id": "Question 5",
          "texte": "Le rectangle ADCB est partagé en neuf rectangles identiques. L'image du rectangle GFHI par la translation qui transforme D en M est le rectangle :",
          "points": 4,
          "reponse": "",
          "graphique": "<svg height=\"180\" style=\"font-family:var(--fd);font-size:11px\" viewbox=\"0 0 200 180\" width=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\n<!-- Grille 3×3 : cellule 54×48 px, départ (20,20) -->\n<!-- Lignes horizontales -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"20\" x2=\"182\" y1=\"20\" y2=\"20\"></line>\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"20\" x2=\"182\" y1=\"68\" y2=\"68\"></line>\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"20\" x2=\"182\" y1=\"116\" y2=\"116\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"20\" x2=\"182\" y1=\"164\" y2=\"164\"></line>\n<!-- Lignes verticales -->\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"20\" x2=\"20\" y1=\"20\" y2=\"164\"></line>\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"74\" x2=\"74\" y1=\"20\" y2=\"164\"></line>\n<line stroke=\"#333\" stroke-width=\"1\" x1=\"128\" x2=\"128\" y1=\"20\" y2=\"164\"></line>\n<line stroke=\"#333\" stroke-width=\"1.5\" x1=\"182\" x2=\"182\" y1=\"20\" y2=\"164\"></line>\n<!-- Mise en évidence GFHI (col 1-2, row 0-1) en bleu -->\n<rect fill=\"rgba(0,33,188,.12)\" height=\"48\" stroke=\"var(--blue)\" stroke-width=\"1.5\" width=\"54\" x=\"74\" y=\"20\"></rect>\n<!-- Labels coins principaux -->\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"14\" y=\"18\">A</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"130\" y=\"18\">I</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"184\" y=\"18\">D</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"14\" y=\"70\">E</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"184\" y=\"70\">J</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"14\" y=\"118\">K</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"184\" y=\"118\">N</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"14\" y=\"168\">B</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"72\" y=\"168\">O</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"126\" y=\"168\">P</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"184\" y=\"168\">C</text>\n<!-- Points intérieurs -->\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"72\" y=\"18\">G</text>\n<text fill=\"var(--orange)\" font-weight=\"700\" x=\"72\" y=\"70\">F</text>\n<text fill=\"var(--orange)\" font-weight=\"700\" x=\"126\" y=\"70\">H</text>\n<text fill=\"var(--blue)\" font-weight=\"700\" x=\"72\" y=\"118\">L</text>\n<text fill=\"var(--orange)\" font-weight=\"700\" x=\"126\" y=\"118\">M</text>\n<!-- Flèche translation D→M -->\n<line marker-end=\"url(#arr)\" stroke=\"var(--orange)\" stroke-dasharray=\"4,3\" stroke-width=\"1.2\" x1=\"182\" x2=\"128\" y1=\"20\" y2=\"116\"></line>\n<defs>\n<marker id=\"arr\" markerheight=\"6\" markerwidth=\"6\" orient=\"auto\" refx=\"3\" refy=\"3\">\n<path d=\"M0,0 L6,3 L0,6 Z\" fill=\"var(--orange)\"></path>\n</marker>\n</defs>\n</svg>"
        }
      ]
    },
    {
      "id": "brevet_polynesie_2025_ex4",
      "titre": "programme de calcul & fonction affine",
      "notion": "Calcul littéral",
      "source": "Brevet Polynésie · 2025",
      "enonce": "On considère le programme de calcul suivant.",
      "figure": "<svg font-family=\"-apple-system,sans-serif\" height=\"305\" viewbox=\"0 0 460 320\" width=\"440\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs><marker id=\"arr\" markerheight=\"7\" markerwidth=\"7\" orient=\"auto\" refx=\"3.5\" refy=\"3\"><path d=\"M0,0 L0,6 L6,3 z\" fill=\"#8A8DAA\"></path></marker></defs>\n<!-- Boîte départ -->\n<rect fill=\"white\" height=\"34\" rx=\"6\" stroke=\"#0021BC\" stroke-width=\"1.5\" width=\"170\" x=\"145\" y=\"8\"></rect>\n<text fill=\"#0021BC\" font-size=\"12\" font-weight=\"600\" text-anchor=\"middle\" x=\"230\" y=\"30\">Nombre choisi au départ</text>\n<!-- Flèches vers les deux boîtes -->\n<line marker-end=\"url(#arr)\" stroke=\"#8A8DAA\" stroke-width=\"1.5\" x1=\"195\" x2=\"86\" y1=\"42\" y2=\"84\"></line>\n<line marker-end=\"url(#arr)\" stroke=\"#8A8DAA\" stroke-width=\"1.5\" x1=\"265\" x2=\"374\" y1=\"42\" y2=\"84\"></line>\n<!-- Boîte \"Ajouter 4\" -->\n<rect fill=\"white\" height=\"34\" rx=\"6\" stroke=\"#0021BC\" stroke-width=\"1.5\" width=\"130\" x=\"20\" y=\"84\"></rect>\n<text fill=\"var(--ink)\" font-size=\"12\" text-anchor=\"middle\" x=\"85\" y=\"106\">Ajouter 4</text>\n<!-- Boîte \"Soustraire 2\" -->\n<rect fill=\"white\" height=\"34\" rx=\"6\" stroke=\"#0021BC\" stroke-width=\"1.5\" width=\"130\" x=\"310\" y=\"84\"></rect>\n<text fill=\"var(--ink)\" font-size=\"12\" text-anchor=\"middle\" x=\"375\" y=\"106\">Soustraire 2</text>\n<!-- Flèches convergentes vers Multiplier -->\n<line marker-end=\"url(#arr)\" stroke=\"#8A8DAA\" stroke-width=\"1.5\" x1=\"85\" x2=\"175\" y1=\"118\" y2=\"186\"></line>\n<line marker-end=\"url(#arr)\" stroke=\"#8A8DAA\" stroke-width=\"1.5\" x1=\"375\" x2=\"285\" y1=\"118\" y2=\"186\"></line>\n<!-- Boîte \"Multiplier les deux résultats\" -->\n<rect fill=\"white\" height=\"34\" rx=\"6\" stroke=\"#0021BC\" stroke-width=\"1.5\" width=\"260\" x=\"100\" y=\"186\"></rect>\n<text fill=\"var(--ink)\" font-size=\"12\" text-anchor=\"middle\" x=\"230\" y=\"208\">Multiplier les deux résultats</text>\n<!-- Flèche vers Soustraire carré -->\n<line marker-end=\"url(#arr)\" stroke=\"#8A8DAA\" stroke-width=\"1.5\" x1=\"230\" x2=\"230\" y1=\"220\" y2=\"238\"></line>\n<!-- Boîte \"Soustraire le carré du nombre de départ\" -->\n<rect fill=\"white\" height=\"34\" rx=\"6\" stroke=\"#0021BC\" stroke-width=\"1.5\" width=\"330\" x=\"65\" y=\"238\"></rect>\n<text fill=\"var(--ink)\" font-size=\"12\" text-anchor=\"middle\" x=\"230\" y=\"260\">Soustraire le carré du nombre de départ</text>\n<!-- Flèche vers Résultat -->\n<line marker-end=\"url(#arr)\" stroke=\"#8A8DAA\" stroke-width=\"1.5\" x1=\"230\" x2=\"230\" y1=\"272\" y2=\"288\"></line>\n<!-- Boîte \"Résultat final\" -->\n<rect fill=\"#EEF2FF\" height=\"28\" rx=\"6\" stroke=\"#0021BC\" stroke-width=\"1.8\" width=\"170\" x=\"145\" y=\"288\"></rect>\n<text fill=\"#0021BC\" font-size=\"12\" font-weight=\"600\" text-anchor=\"middle\" x=\"230\" y=\"307\">Résultat final</text>\n</svg>",
      "questions": [
        {
          "id": "1.",
          "texte": "Montrer que si on choisit5comme nombre de départ, le résultat du programme est2.",
          "points": 3,
          "reponse": "Départ : 5\nAjouter 4 → 9    Soustraire 2 → 3\nMultiplier : 9 × 3 = 27\nSoustraire le carré du départ : 27 − 5² = 27 − 25 = 2 ✓"
        },
        {
          "id": "2.",
          "texte": "On choisitxcomme nombre de départ.",
          "points": 3,
          "reponse": "Expression C : (x+4) × (x−2) − x²",
          "tableau": "<table class=\"brevet-table\">\n<thead>\n<tr><th>Expression A</th><th>Expression B</th><th>Expression C</th><th>Expression D</th></tr>\n</thead>\n<tbody>\n<tr>\n<td id=\"ex_a\" onclick=\"selExpr('a')\" style=\"cursor:pointer;transition:all .15s\">x + 4 × x − 2 − x²</td>\n<td id=\"ex_b\" onclick=\"selExpr('b')\" style=\"cursor:pointer;transition:all .15s\">x + 4 × x − 2 − 2x</td>\n<td id=\"ex_c\" onclick=\"selExpr('c')\" style=\"cursor:pointer;transition:all .15s\">(x+4) × (x−2) − x²</td>\n<td id=\"ex_d\" onclick=\"selExpr('d')\" style=\"cursor:pointer;transition:all .15s\">(x+4) × (x−2) − 2x</td>\n</tr>\n</tbody>\n</table>"
        },
        {
          "id": "3.",
          "texte": "On appellefla fonction définie parf(x) = 2x − 8. Voici trois représentations graphiques :",
          "points": 4,
          "reponse": "Représentation n°1 : c'est une courbe (parabole), or f(x) = 2x − 8 est une fonction affine dont la représentation est une droite. Elle ne convient pas.\n\nReprésentation n°2 : c'est bien une droite, mais elle est décroissante, or f a un coefficient directeur positif (2 > 0) donc sa représentation doit"
        },
        {
          "id": "4.",
          "texte": "Quel nombre de départ faut-il choisir pour que le résultat du programme de calcul soit égal à100?",
          "points": 4,
          "reponse": "Le résultat vaut f(x) = 2x − 8\n2x − 8 = 100\n2x = 108\nx = 54\n\nIl faut choisir 54 comme nombre de départ."
        }
      ]
    },
    {
      "id": "brevet_polynesie_2025_ex5",
      "titre": "dé à 12 faces & Scratch",
      "notion": "Probabilités",
      "source": "Brevet Polynésie · 2025",
      "enonce": "Tom a acheté un dé équilibré à 12 faces numérotées de 1 à 12. Il lance ce dé et s'intéresse au résultat qui apparaît sur la face du dessus.",
      "figure": null,
      "questions": [
        {
          "id": "1.",
          "texte": "Expliquer pourquoi la probabilité d'obtenir le nombre4est égale à1/12.",
          "points": 2,
          "reponse": "Le dé est équilibré et possède 12 faces numérotées de 1 à 12.\nChaque face a la même probabilité d'apparaître.\nIl y a une seule face portant le numéro 4.\nDonc P(4) = 1/12."
        },
        {
          "id": "2.",
          "texte": "Quelle est la probabilité que le résultat obtenu soit unnombre pair?",
          "points": 3,
          "reponse": "Nombres pairs entre 1 et 12 : 2, 4, 6, 8, 10, 12 → 6 nombres pairs\nP(pair) = 6/12 = 1/2"
        },
        {
          "id": "3.",
          "texte": "Tom pense que la probabilité d'obtenir unmultiple de 3est supérieure à0,3. A-t-il raison ?",
          "points": 3,
          "reponse": "Multiples de 3 entre 1 et 12 : 3, 6, 9, 12 → 4 nombres\nP(multiple de 3) = 4/12 = 1/3 ≈ 0,333…\n\n0,333 > 0,3 → Oui, Tom a raison."
        },
        {
          "id": "1.",
          "texte": "Recopier les lignes 2, 3 et 4du bloc « Lancer » en les complétant.",
          "points": 6,
          "reponse": "Ligne 2 : mettre Dé 1 à nombre aléatoire entre 1 et 12\nLigne 3 : mettre Dé 2 à nombre aléatoire entre 1 et 12\nLigne 4 : mettre Résultat à Dé 1 + Dé 2"
        },
        {
          "id": "2.",
          "texte": "Si le résultat du dé n°1 est égal à8et le résultat du dé n°2 est égal à3, qu'affichera le programme ? Justifier.",
          "points": 4,
          "reponse": "Résultat = Dé 1 + Dé 2 = 8 + 3 = 11\n\nLe programme teste : Résultat > 6 ?\n11 > 6 → oui, la condition est vraie.\n\n→ Le programme affiche « Gagné ! » pendant 2 secondes."
        }
      ]
    }
  ]
};
import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext({});

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [gameData, setGameData] = useState({
        steps: [{
            title: "Début de partie",
            description: "Vous avez 25 points de compétences à répartir entre les 5 compétences suivantes :",
            choices: [],
            help:{
                argent: "L'argent dont vous disposez au départ, si vous n'avez pas assez d'argent pour payer vos dettes (dette courante / (nombre d'étapes restantes+10)) et vos charges, vous perdez la partie.",
                motivation: "Votre motivation à travailler, elle influence vos résultats. Vous pouvez en perdre ou en gagner en fonction de vos actions. Si la motivation tombe à 0, vous perdez la partie.",
                famille: "L'importance de votre famille et loisirs, Vous pouvez en perdre ou en gagner en fonction de vos actions. Si la famille tombe à 0, vous perdez la partie (Burn out).",
                strategie: "Votre capacité à prendre des décisions, et votre organisation / Serieux général. Elle influence vos charges, résultats et vos aides. Vous pouvez en gagner en fonction de vos actions. Sans stratégie, vous aurez des difficultés et la partie sera plus difficile.",
                polyvalence: "Votre capacité à faire plusieurs choses à la fois, et votre capacité à vous adapter à des situations inconnues. La polyvalence influence les résultats, et votre capacité à évoluer. Vous pouvez en gagner en fonction de vos actions."
            },
            advices: [
                {
                    title: "Parler à Maxime Eisler (Via chat)",
                    description: "Position actuelle : Gérant chez alpestetiers.com. Domaine d'expertise : Spécialiste des coffrages en bois pour le béton. Maxime peut vous aider à comprendre l'importance de la gestion stratégique et efficace des ressources, notamment financières et humaines, dans le démarrage et la croissance de votre entreprise."
                },
                {
                    title: "Parler à Cédric Garna (Via chat)",
                    description: "Entrepreneur chez Laiterie Gilbert. Expérience en développement de franchises et en diversification des activités commerciales. Cédric peut vous conseiller sur la manière de maintenir la motivation, l'importance de la polyvalence dans la gestion d'une entreprise et les stratégies de croissance."
                },
                {
                    title: "Parler à Laetitia de Zesti (Via chat)",
                    description: "Fondatrice de Zesti, spécialisée dans la livraison de paniers de légumes locaux. Laetitia peut vous offrir des conseils précieux sur l'équilibre entre vie professionnelle et vie familiale, l'importance de la motivation dans un contexte entrepreneurial et les stratégies pour gérer une entreprise en démarrage."
                }
            ],
            chat: [
                {
                    name: "Maxime Eisler",
                    description: "Maxime Eisler, gérant chez alpestetiers.com, est un spécialiste des coffrages en bois pour le béton. Son parcours inclut une formation en M2 MAE, une expérience chez Eiffage. Animé par une ambition entrepreneuriale, Maxime a racheté une entreprise quelques mois seulement après sa formation. Il dirige cette entreprise depuis 8 ans. Il gère les défis quotidiens avec une approche stratégique et polyvalente, tout en maintenant l'équilibre entre travail, famille et loisirs.",
                    questions: [
                        {
                            question: "Comment avez-vous équilibré l'investissement initial et les charges courantes pour assurer la viabilité financière de votre entreprise dès le début?",
                            answer: "J'ai dû faire preuve de prudence financière en équilibrant mon budget de départ pour couvrir les coûts initiaux et les charges courantes. Cela impliquait une allocation judicieuse de l'argent disponible et une planification stratégique pour éviter les dettes insurmontables."
                        },
                        {
                            question: "Face aux multiples responsabilités en tant que gérant, comment avez-vous maintenu votre motivation et évité l'épuisement professionnel?",
                            answer: "Garder un équilibre entre le travail, la famille et les loisirs a été crucial. Je me suis assuré de prendre du temps pour moi-même et ma famille, ce qui a renforcé ma motivation et m'a aidé à éviter le burn-out."
                        },
                        {
                            question: "Quelles stratégies avez-vous employées pour développer votre polyvalence et votre capacité à prendre des décisions efficaces dans un environnement d'entreprise en constante évolution?",
                            answer: "Je me suis concentré sur l'apprentissage continu et l'adaptabilité. Cela incluait la consultation d'experts, l'ouverture à de nouvelles idées et une évaluation constante de l'environnement commercial pour prendre des décisions informées et efficaces."
                        }
                    ]
                },
                {
                    name: "Cédric Garna",
                    description: "Cédric Garna, actuellement à la tête de la Laiterie Gilbert, a un parcours professionnel varié, ayant travaillé dans de nombreux secteurs avant de reprendre la laiterie en 2012. Avec un diplôme de GEM et une expérience riche en diversité, il a réussi à développer un réseau de franchises prospère et à moderniser l'entreprise tout en mettant l'accent sur les relations humaines et le terroir.",
                    questions: [
                        {
                            question: "Comment avez-vous géré la diversification de votre carrière et quels enseignements avez-vous tirés de vos expériences dans des secteurs variés?",
                            answer: "La diversification m'a permis de développer une polyvalence et une capacité d'adaptation essentielles. Chaque expérience, même celle de trois mois en immobilier, m'a apporté des leçons précieuses sur la compréhension des différents marchés et la gestion des relations humaines."
                        },
                        {
                            question: "Quelles stratégies avez-vous utilisées pour évaluer et améliorer la performance de vos collaborateurs, et comment avez-vous géré la situation avec le collaborateur insatisfaisant?",
                            answer: "J'ai misé sur une évaluation continue et un dialogue ouvert pour améliorer les performances. Pour le collaborateur insatisfaisant, j'ai essayé de trouver des solutions, mais finalement, j'ai dû prendre la décision difficile de le licencier après trois ans, ce qui a été un processus compliqué mais nécessaire pour le bien de l'entreprise."
                        },
                        {
                            question: "En tant que dirigeant de la Laiterie Gilbert, comment avez-vous équilibré les besoins de modernisation de l'entreprise tout en préservant les valeurs traditionnelles liées au terroir et aux relations humaines?",
                            answer: "L'équilibre a été atteint en intégrant la technologie pour rationaliser les opérations, tout en maintenant un engagement fort envers les valeurs traditionnelles. Le service 'clic & collect' est un bon exemple de cette fusion entre modernité et tradition."
                        }
                    ]
                },
                {
                    name: "Laetitia - Zesti",
                    description: "Laetitia, fondatrice de Zesti, a suivi un M2 en entrepreneuriat à l'IAE Grenoble et a travaillé en logistique avant de se lancer dans l'entrepreneuriat. Zesti, sa startup, se concentre sur la livraison de paniers de légumes locaux principalement aux employés d'entreprises. Elle met l'accent sur l'importance du réseau, de la solidarité entrepreneuriale, et de l'équilibre entre travail et vie personnelle, tout en visant des objectifs financiers ambitieux.",
                    questions: [
                        {
                            question: "Comment votre expérience en logistique a-t-elle influencé votre approche entrepreneuriale, en particulier pour Zesti?",
                            answer: "Ma formation en logistique a été cruciale pour la mise en place de Zesti. Elle m'a permis de comprendre les défis liés à la distribution et à la gestion des stocks, et d'appliquer ces compétences pour optimiser les livraisons de paniers de légumes."
                        },
                        {
                            question: "Face aux défis de la conciliation entre vie familiale et carrière entrepreneuriale, quelles stratégies avez-vous adoptées pour maintenir cet équilibre?",
                            answer: "Avec quatre enfants et un mari souvent absent, il est essentiel de planifier et prioriser. J'ai appris à déléguer et à être flexible, tout en m'assurant que ma famille reste une priorité. Le soutien de ma famille a également été un pilier important dans cette démarche."
                        },
                        {
                            question: "Quels conseils donneriez-vous à d'autres entrepreneurs pour développer et maintenir un réseau solide et bénéfique?",
                            answer: "Le réseautage est essentiel. Il faut être proactif, assister à des événements, se montrer ouvert aux collaborations et ne pas hésiter à demander de l'aide. Partager vos expériences et apprendre des autres est aussi crucial pour renforcer et entretenir votre réseau."
                        }
                    ]
                }
            ],
        },
            {
            title: "Choix du domaine",
            description: "Vous devez choisir le domaine dans lequel vous souhaitez travailler",
            choices: [
                {
                    title: "Vente",
                    id: "vente",
                    description: "Vous produisez et vendez des produits physiques (ex: vêtements, nourriture, etc.) en boutique ou sur internet.",
                    icon: "mdi:cart",
                    impact: {
                        argent: {value: 0, type: "add"},
                        dettes: {value: 0, type: "add"},
                        ca: {value: 0, type: "add"},
                        employes: {value: 0, type: "add"},
                        ventes: {value: 0, type: "add"},
                        charges: {value: 0, type: "add"},
                    },
                    configImpact: {
                        domaine: "vente",
                    }
                },
                {
                    title: "Services",
                    id: "services",
                    description: "Vous proposez des services, en ligne ou en physique (ex: coiffeur, consultant, etc.).",
                    icon: "mdi:account-tie",
                    impact: {
                        argent: {value: 0, type: "add"},
                        dettes: {value: 0, type: "add"},
                        ca: {value: 0, type: "add"},
                        employes: {value: 0, type: "add"},
                        ventes: {value: 0, type: "add"},
                        charges: {value: 0, type: "add"},
                    },
                    configImpact: {
                        domaine: "services",
                    }
                }
            ],
            help:{
                vente: "Vous avez des frais par produit, mais plus de potentiel de vente.",
                services: "Vous avez moins de frais, mais moins de potentiel de vente.",
                plus: "Discutez via le chat pour avoir plus d'informations sur les différents domaines en questionnant des entrepreneurs ou associations.",
            },
            chat: [
                {
                    name: "Maxime Eisler",
                    description: "Gérant chez alpestetiers.com, Maxime Eisler est un spécialiste des coffrages en bois pour le béton avec un parcours impressionnant. Après un M2 MAE, il a commencé sa carrière chez Eiffage avant de se lancer dans l'entrepreneuriat en rachetant et en dirigeant avec succès sa propre entreprise depuis 8 ans.",
                    questions: [
                        {
                            question: "Comment la diversification des clients et des services a-t-elle impacté votre entreprise dans le domaine de la vente ?",
                            answer: "La diversification a été cruciale pour réduire notre dépendance à un petit nombre de clients, ce qui a stabilisé et augmenté notre chiffre d'affaires. Cela nous a permis de mieux naviguer dans un marché fluctuant."
                        },
                        {
                            question: "Quels ont été les défis majeurs dans le secteur de la vente, et comment les avez-vous surmontés ?",
                            answer: "Le plus grand défi était la dépendance à quelques clients. En diversifiant notre clientèle et en investissant dans de nouvelles machines pour renforcer la production, nous avons pu surmonter ce défi.",
                            reward: {
                                motivation: 1,
                                claimed: false,
                            }
                        },
                        {
                            question: "Quels conseils donneriez-vous à un nouvel entrepreneur désirant se lancer dans la vente ?",
                            answer: "Je conseillerais de ne pas rester isolé, de solliciter des conseils extérieurs et de s'assurer d'avoir une bonne assurance pour sécuriser l'entreprise. Aussi, avoir un site web pour augmenter la visibilité est crucial."
                        }
                    ]
                },
                {
                    name: "Cédric Garna",
                    description: "Cédric Garna, actuellement à la tête de la Laiterie Gilbert, a un parcours professionnel varié, ayant travaillé dans de nombreux secteurs avant de reprendre la laiterie en 2012. Avec un diplôme de GEM et une expérience riche en diversité, il a réussi à développer un réseau de franchises prospère et à moderniser l'entreprise tout en mettant l'accent sur les relations humaines et le terroir.",
                    questions: [
                        {
                            question: "Comment la stratégie de franchise a-t-elle influencé votre succès dans le domaine de la vente ?",
                            answer: "La franchise a permis une croissance rapide et efficace, en partageant le modèle d'affaires tout en conservant un contrôle de qualité. Cela a grandement contribué à notre expansion et à notre visibilité sur le marché."
                        },
                        {
                            question: "Quels sont les principaux défis rencontrés dans la gestion d'une chaîne de franchises et comment les avez-vous surmontés ?",
                            answer: "Les principaux défis étaient de maintenir une qualité et une expérience client homogène à travers toutes les franchises. Nous avons surmonté cela par une formation rigoureuse des franchisés et une communication constante."
                        },
                        {
                            question: "Quels conseils donneriez-vous à un entrepreneur cherchant à entrer dans le secteur de la vente avec un modèle de franchise ?",
                            answer: "Il est crucial d'avoir un modèle d'affaires solide et de choisir soigneusement les franchisés. La formation et le soutien continu sont essentiels pour le succès de chaque franchise."
                        }
                    ]
                },
                {
                    name: "Lucien Rumbroso",
                    description: "Lucien Rumbroso, un ingénieur de formation et parrain chez 60000rebonds, a un parcours marqué par la résilience et la capacité à surmonter les échecs. Sa carrière diverse, du poste d'ingénieur à la direction d'une entreprise en difficulté, illustre son adaptabilité et son expertise dans la gestion des risques et des conflits.",
                    questions: [
                        {
                            question: "Comment votre expérience dans la gestion des conflits et des risques a-t-elle influencé votre approche dans le domaine des services ?",
                            answer: "Ma gestion des conflits m'a appris l'importance de la négociation et de la communication claire, surtout dans les services où la relation client est clé. Savoir anticiper et gérer les risques est fondamental pour maintenir la stabilité de l'entreprise."
                        },
                        {
                            question: "Quels défis spécifiques rencontre-t-on dans le domaine des services, et comment les surmonter ?",
                            answer: "Dans les services, les défis majeurs incluent la gestion des attentes clients et la fourniture d'un service de qualité constante. Surmonter ces défis implique une formation continue de l'équipe et une attention particulière aux retours clients."
                        },
                        {
                            question: "Quel conseil donneriez-vous à un nouvel entrepreneur désireux de se lancer dans le secteur des services ?",
                            answer: "Il est essentiel d'écouter et de comprendre les besoins des clients. Construire une équipe fiable et compétente est tout aussi crucial, car dans les services, les employés sont souvent le visage de l'entreprise."
                        }
                    ]
                }
            ],
            advices: [
                {
                    title: "Parler à Maxime Eisler (Via chat)",
                    description: "Position actuelle : Gérant chez alpestetiers.com. Domaine d'expertise : Spécialiste des coffrages en bois pour le béton. Maxime peut vous aider à comprendre l'importance de la gestion stratégique et efficace des ressources, notamment financières et humaines, dans le démarrage et la croissance de votre entreprise."
                },
                {
                    title: "Parler à Cédric Garna (Via chat)",
                    description: "Entrepreneur chez Laiterie Gilbert. Expérience en développement de franchises et en diversification des activités commerciales. Cédric peut vous conseiller sur la manière de maintenir la motivation, l'importance de la polyvalence dans la gestion d'une entreprise et les stratégies de croissance."
                },
                {
                    title: "Parler à Lucien Rumbroso (Via chat)",
                    description: "Ingénieur de formation et parrain au bureau de 60000rebonds. Lucien a un parcours riche en défis et en réussites. Il peut vous fournir des conseils précieux sur la résilience, la gestion des conflits et des risques, et l'importance de l'adaptabilité dans l'entrepreneuriat."
                }
            ]

        },
            {
            title: "Rachat ou création ?",
            description: "Vous devez choisir entre créer une entreprise de toute pièce ou en reprendre une existante.",
            choices: [
                {
                    title: "Création",
                    id: "creation",
                    description: "Vous créez une entreprise de toute pièce",
                    icon: "mdi:plus",
                    impact: {
                        argent: {value: 100000, type: "add"},
                        dettes: {value: 100000, type: "add"},
                        ca: {value: 0, type: "add"},
                        employes: {value: 0, type: "add"},
                        ventes: {value: 0, type: "add"},
                        charges: {value: 0, type: "add"},
                    }
                },
                {
                    title: "Reprise d'entreprise",
                    description: "Vous rachetez une entreprise existante",
                    id: "reprise",
                    icon: "mdi:sync",
                    impact: {
                        argent: {value: 50000, type: "add"},
                        dettes: {value: 200000, type: "add"},
                        ca: {value: 400000, type: "add"},
                        employes: {value: 5, type: "add"},
                        ventes: {value: 500, type: "add"},
                        charges: {value: 0, type: "add"},
                    }
                }
            ],
            chat: [
                {
                    name: "Lucien Rumbroso",
                    description: "Ingénieur de formation et parrain au bureau de 60000rebonds. Lucien a un parcours riche en défis et en réussites, montrant une adaptabilité exceptionnelle et une expertise dans la gestion des risques et des conflits.",
                    questions: [
                        {
                            question: "Comment avez-vous financé et géré les risques lors du redressement d'entreprises en difficulté ?",
                            answer: "La clé du financement était de négocier avec les créanciers et d'optimiser les ressources existantes. La gestion des risques impliquait une évaluation précise des défis et la mise en place de stratégies adaptatives pour surmonter les obstacles."
                        },
                        {
                            question: "Quels ont été les plus grands défis rencontrés dans vos négociations avec les partenaires internationaux et comment les avez-vous surmontés ?",
                            answer: "Les plus grands défis étaient les différences culturelles et les barrières linguistiques. J'ai surmonté ces défis en me concentrant sur une communication claire et en m'entourant d'une équipe compétente et expérimentée dans les affaires internationales."
                        },
                        {
                            question: "Quel conseil donneriez-vous à un entrepreneur qui fait face à des conflits juridiques dans son entreprise ?",
                            answer: "Il est crucial d'être bien préparé et de documenter minutieusement toutes les transactions. Faites appel à des experts juridiques et n'ayez pas peur de défendre fermement vos droits tout en restant ouvert à la négociation."
                        }
                    ]
                },
                {
                    name: "Cédric Garna",
                    description: "Cédric Garna, actuellement à la tête de la Laiterie Gilbert, a un parcours professionnel varié et a réussi à développer un réseau de franchises prospère tout en modernisant l'entreprise.",
                    questions: [
                        {
                            question: "Quelle a été votre stratégie pour financer l'expansion de la Laiterie Gilbert en franchise ?",
                            answer: "Nous avons commencé avec des magasins en propre avant de nous tourner vers la franchise, ce qui a réduit les besoins initiaux de capitaux tout en permettant une expansion rapide grâce aux investissements des franchisés."
                        },
                        {
                            question: "Comment gérez-vous la qualité et la cohérence dans un réseau de franchises en expansion ?",
                            answer: "Nous mettons l'accent sur une formation rigoureuse des franchisés et sur des systèmes de contrôle de qualité, assurant ainsi que chaque franchise respecte nos standards et offre une expérience client homogène."
                        },
                        {
                            question: "Quels conseils donneriez-vous pour établir des relations durables avec des franchisés ?",
                            answer: "Il est important de choisir des franchisés alignés avec la vision de l'entreprise, de maintenir une communication transparente, et d'offrir un soutien constant pour les aider à réussir."
                        }
                    ]
                },
                {
                    name: "Quentin de l'Adie",
                    description: "Quentin, directeur de l'Adie Isère, offre des solutions de financement et d'accompagnement aux entrepreneurs sans accès au crédit bancaire traditionnel.",
                    questions: [
                        {
                            question: "Quels sont les critères pour accéder aux financements de l'Adie et comment cela peut-il aider un entrepreneur à démarrer ?",
                            answer: "L'Adie cible les individus sans accès aux fonds bancaires classiques. Nous offrons des prêts jusqu'à 12 000 € sans exigence d'apport personnel, ce qui est crucial pour les entrepreneurs en phase de démarrage."
                        },
                        {
                            question: "Comment l'Adie soutient-elle les entrepreneurs après l'octroi d'un prêt ?",
                            answer: "Au-delà du financement, l'Adie offre un accompagnement à chaque étape, avec des conseils, des solutions d'assurance, et un accompagnement en ligne, afin de maximiser les chances de succès des entrepreneurs."
                        },
                        {
                            question: "Quels sont les avantages et inconvénients des prêts de l'Adie comparés à ceux des banques traditionnelles ?",
                            answer: "Les avantages incluent l'accessibilité pour ceux qui n'ont pas d'autres options de financement et un processus d'approbation plus souple. L'inconvénient peut être un taux d'intérêt légèrement plus élevé."
                        }
                    ]
                }
            ]
            ,
            advices: [
                {
                    title: "Parler à Lucien Rumbroso (Via chat)",
                    description: "Position actuelle : Gérant chez alpestetiers.com. Domaine d'expertise : Spécialiste des coffrages en bois pour le béton. Maxime peut vous aider à comprendre l'importance de la gestion stratégique et efficace des ressources, notamment financières et humaines, dans le démarrage et la croissance de votre entreprise."
                },
                {
                    title: "Parler à Cédric Garna (Via chat)",
                    description: "Entrepreneur à la Laiterie Gilbert. Cédric Garna, grâce à son expérience dans le développement de franchises, peut vous conseiller sur les stratégies de croissance, la diversification des activités commerciales, et la gestion d'un réseau de franchises"
                },
                {
                    title: "Consulter Quentin de l'Adie (Via chat)",
                    description: "Directeur Adie pour l'Isère. Quentin peut vous fournir des informations sur les options de financement pour les entrepreneurs sans accès au crédit bancaire, notamment les prêts sans exigence d'apport personnel et les services d'accompagnement proposés par l'Adie."
                }
            ]
        },
            {
                title: "Seul ou accompagné ?",
                description: "Vous devez choisir si vous souhaitez vous lancer seul ou accompagné par une structure d'accompagnement",
                choices: [
                    {
                        title: "Seul",
                        id: "none",
                        description: "Vous vous lancez seul dans l'aventure",
                        icon: "mdi:account",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        }
                    },
                    {
                        title: "Accompagnement classique",
                        description: "Vous vous faites accompagner par une structure d'accompagnement",
                        id: "classic",
                        icon: "mdi:account-group",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 15000, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        }
                    },
                    {
                        title: "Accompagnement avancé",
                        description: "Vous vous faites accompagner par une structure d'accompagnement et un mentor toujours disponible",
                        id: "mentor",
                        icon: "mdi:target-account",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 30000, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        }
                    }
                ],
                help:{
                    attention: "L'accompagnement vous permet d'augmenter vos compétences mais vous rajoute 15 000$ de dettes pour le classique, 30 000$ pour l'avancé, et vous prends 5% de vos bénéfices pour le classique et 10% pour l'avancé."
                },
                chat: [
                    {
                        name: "Véronique Rostas",
                        description: "Véronique Rostas, coach professionnel et bénévole à 60000 rebonds, offre son expertise en résilience et transformation des échecs en opportunités pour les entrepreneurs.",
                        questions: [
                            {
                                question: "Comment aborder et surmonter les échecs dans l'entrepreneuriat ?",
                                answer: "Il est essentiel de percevoir les échecs non pas comme des fins, mais comme des leçons. Analyser ce qui n'a pas fonctionné, s'adapter, et rebondir en tirant des enseignements constructifs est crucial pour la croissance personnelle et professionnelle."
                            },
                            {
                                question: "Quelle est l'importance du coaching et du mentorat pour un entrepreneur ?",
                                answer: "Le coaching offre un regard extérieur objectif et expérimenté, permettant de déceler des angles morts dans la gestion et la stratégie. Le mentorat, en particulier, apporte un soutien émotionnel et pratique, essentiel dans les moments de doute ou de transition."
                            },
                            {
                                question: "Comment maintenir un équilibre entre vie professionnelle et personnelle en tant qu'entrepreneur ?",
                                answer: "Il est vital de définir des limites claires entre le travail et la vie personnelle. Cela inclut une gestion efficace du temps, la délégation de tâches, et la priorisation des moments de repos et de qualité avec la famille et les amis."
                            }
                        ]
                    },
                    {
                        name: "Quentin de l'Adie",
                        description: "Quentin, directeur de l'Adie Isère, offre des solutions de financement et d'accompagnement aux entrepreneurs sans accès au crédit bancaire traditionnel.",
                        questions: [
                            {
                                question: "Quels sont les critères pour accéder aux financements de l'Adie et comment cela peut-il aider un entrepreneur à démarrer ?",
                                answer: "L'Adie cible les individus sans accès aux fonds bancaires classiques. Nous offrons des prêts jusqu'à 12 000 € sans exigence d'apport personnel, ce qui est crucial pour les entrepreneurs en phase de démarrage. Ces fonds peuvent être utilisés pour des investissements initiaux, tels que l'achat de matériel, le stock initial ou la mise en place d'un local."
                            },
                            {
                                question: "Comment l'Adie soutient-elle les entrepreneurs après l'octroi d'un prêt ?",
                                answer: "Au-delà du financement, l'Adie offre un accompagnement complet, incluant des conseils personnalisés, des ateliers de formation, et un accès à des ressources en ligne. Cela inclut des aides dans des domaines tels que la gestion financière, le marketing, et le développement commercial."
                            },
                            {
                                question: "Quels sont les avantages et inconvénients des prêts de l'Adie comparés à ceux des banques traditionnelles ?",
                                answer: "Les avantages des prêts de l'Adie incluent leur accessibilité pour les personnes exclues du système bancaire traditionnel et une approche plus humaine et flexible. Cependant, ils peuvent venir avec un taux d'intérêt légèrement plus élevé par rapport aux prêts bancaires classiques, bien que cela soit compensé par l'absence de garanties matérielles et de frais de dossier."
                            }
                        ]
                    },
                    {
                        name: "Réseau Entreprendre France",
                        description: "Réseau Entreprendre France offre du mentorat, du financement et un réseau de soutien aux entrepreneurs pour les aider à démarrer et à développer leur entreprise.",
                        questions: [
                            {
                                question: "Quels sont les avantages de rejoindre un réseau comme Réseau Entreprendre pour un nouvel entrepreneur ?",
                                answer: "Rejoindre un réseau comme Réseau Entreprendre offre plusieurs avantages, dont l'accès à un mentorat expérimenté, des opportunités de networking, et potentiellement des financements sous forme de prêts d'honneur. Ce soutien permet de développer des compétences entrepreneuriales et d'éviter des erreurs courantes."
                            },
                            {
                                question: "Comment Réseau Entreprendre accompagne-t-il les entrepreneurs dans le développement de leur entreprise ?",
                                answer: "Réseau Entreprendre accompagne les entrepreneurs en leur fournissant un mentorat personnalisé, en organisant des ateliers et des séminaires de formation, et en facilitant l'accès à un réseau d'entrepreneurs et de professionnels. Cela aide les entrepreneurs à acquérir des compétences clés et à établir des relations commerciales importantes."
                            },
                            {
                                question: "Quel est l'impact d'un prêt d'honneur sur le démarrage d'une entreprise ?",
                                answer: "Un prêt d'honneur a un impact significatif sur le démarrage d'une entreprise. Il fournit des fonds sans intérêt et sans garanties, ce qui réduit la pression financière sur l'entrepreneur. Cela permet d'investir dans des aspects cruciaux de l'entreprise, tels que le développement de produits, le marketing, et la croissance de l'équipe."
                            }
                        ]
                    }
                ]
                ,
                advices: [
                    {
                        title: "Parler à Véronique Rostas (Via chat)",
                        description: "Coach professionnel et bénévole à 60000 rebonds. Véronique Rostas, avec son expérience en coaching et son parcours personnel marqué par des défis et des rebondissements, peut vous guider dans le développement de stratégies de résilience, l'importance de l'adaptabilité en entrepreneuriat, et l'art de transformer les échecs en opportunités."
                    },
                    {
                        title: "Consulter Quentin de l'Adie (Via chat)",
                        description: "Directeur Adie pour l'Isère. Quentin peut vous fournir des informations sur les options de financement pour les entrepreneurs sans accès au crédit bancaire, notamment les prêts sans exigence d'apport personnel et les services d'accompagnement proposés par l'Adie."
                    },
                    {
                        title: "Se renseigner auprès de Réseau Entreprendre France (Via chat)",
                        description: "Réseau Entreprendre France offre un soutien et un accompagnement aux entrepreneurs, notamment à travers des prêts d'honneur et un coaching personnalisé. Ils peuvent vous aider à naviguer dans les défis de la création d'entreprise et offrir un réseau de soutien pour assurer votre succès."
                    }
                ]
            },
            {
                title: "Emprunter ?",
                description: "Vous devez choisir si vous souhaitez emprunter de l'argent (Pour de futurs investissements) ou si vous préférez continuer ainsi.",
                choices: [
                    {
                        title: "Ne pas emprunter",
                        id: "no",
                        description: "Vous ne souhaitez pas emprunter d'argent",
                        icon: "mdi:close-circle-outline",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        }
                    },
                    {
                        title: "Emprunter 100 000€",
                        description: "Vous empruntez 100 000€ à la banque (ou à votre structure d'accompagnement) pour investir dans votre entreprise",
                        id: "100K",
                        icon: "mdi:cash",
                        impact: {
                            argent: {value: 100000, type: "add"},
                            dettes: {value: 100000, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        }
                    },
                    {
                        title: "Emprunter 1 000 000€",
                        description: "Vous empruntez 1 000 000€ à la banque (ou à votre structure d'accompagnement) pour investir dans votre entreprise",
                        id: "mentor",
                        icon: "mdi:cash-multiple",
                        impact: {
                            argent: {value: 1000000, type: "add"},
                            dettes: {value: 1000000, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        }
                    }
                ],
                advices: [
                    {
                        title: "Vous pouvez changer votre nombre d'employés en bas de page. (Oui, depuis le début).",
                        description: "La limite évolue au fur et à mesure de votre progression. Ils coutent chacun 6000€ par étape, et augmentent vos ventes d'environ 10% à chaque étape. Vous pouvez même choisir le nom de votre entreprise."
                    },
                    {
                        title: "Ceci est le derier conseil de la partie. Bonne chance pour la suite !",
                        description: "Vous avez compris le principe. C'est pourquoi les conseils ne sont plus affichés. Bonne chance pour la suite !"
                    }
                ],
                chat: [
                    {
                        name: "Offline",
                        description: "Aucune discussion possible.",
                        questions: [
                        ]
                    }
                ]
            },
            {
                title: "Stratégie marketing",
                description: "Vous devez coisir votre stratégie marketing. Vous pouvez choisir de vous concentrer sur la qualité de votre produit, ou sur la quantité de ventes.",
                choices: [
                    {
                        title: "Qualité",
                        id: "qualite",
                        description: "Vous vous concentrez sur la qualité de votre produit. Le prix sera augmenté.",
                        icon: "mdi:star",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        },
                        configImpact: {
                            marketing: "qualite"
                        }
                    },
                    {
                        title: "Quantité",
                        description: "Vous vous concentrez sur la quantité de ventes. Vous vendrez surement plus.",
                        id: "quantite",
                        icon: "mdi:cash",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        },
                        configImpact: {
                            marketing: "quantite"
                        }
                    }
                    ],
                advices: [],
                chat: [
                    {
                        name: "Offline",
                        description: "Aucune discussion possible.",
                        questions: [
                        ]
                    }
                ]
            },
            {
                title: "Stratégie de management",
                description: "Vous devez choisir votre stratégie de management. Vous pouvez accorder une prime exceptionnelle de 10% de l'argent disponible à vos employés, ou diminuer votre dette courante de 20% avec 10% de l'argent que vous avez (deal avec la banque).",
                choices: [
                    {
                        title: "Prime",
                        id: "prime",
                        description: "Vous accordez une prime exceptionnelle de 10% de l'argent disponible à vos employés.",
                        icon: "mdi:user-heart",
                        impact: {
                            argent: {value: 0.9, type: "multiply"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        },
                        configImpact: {
                            management: "prime"
                        }
                    },
                    {
                        title: "Dette",
                        description: "Vous diminuez votre dette courante de 20%.",
                        id: "dette",
                        icon: "mdi:hand-coin",
                        impact: {
                            argent: {value: 0.9, type: "multiply"},
                            dettes: {value: 0.8, type: "multiply"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        },
                        configImpact: {
                            management: "dette"
                        }
                    }],
                advices: [],
                chat: [
                    {
                        name: "Offline",
                        description: "Aucune discussion possible.",
                        questions: [
                        ]
                    }
                ]
            },
            {
                title: "Investir ?",
                description: "Vous pouvez investir dans votre entreprise. Vous pouvez choisir d'investir ou non. Cela influencera vos compétences.",
                choices: [
                    {
                        title: "Ne pas investir",
                        id: "no",
                        description: "Vous ne faites pas d'investissement.",
                        icon: "mdi:close",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        },
                        configImpact: {
                            investissement: "no"
                        }
                    },
                    {
                        title: "Investir 100 000€",
                        description: "Vous investissez 100 000€ dans votre entreprise.",
                        id: "100k",
                        icon: "mdi:cash",
                        impact: {
                            argent: {value: -100000, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        },
                        configImpact: {
                            investissement: "100k"
                        }
                    },
                    {
                        title: "Investir 1 000 000€",
                        description: "Vous investissez 1 000 000€ dans votre entreprise.",
                        id: "1m",
                        icon: "mdi:cash-multiple",
                        impact: {
                            argent: {value: -1000000, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0, type: "add"},
                            charges: {value: 0, type: "add"},
                        },
                        configImpact: {
                            investissement: "1m"
                        }
                    }
                ],
                advices: [],
                chat: [
                    {
                        name: "Offline",
                        description: "Aucune discussion possible.",
                        questions: [
                        ]
                    }
                ]
            },
            {
                title: "Développement international ?",
                description: "Vous pouvez développer votre entreprise à l'international. Vous pouvez choisir de le faire ou non. Cela coute cher mais peut bien influencer vos ventes.",
                choices: [
                    {
                        title: "Ne pas développer",
                        id: "no",
                        description: "Vous ne développez pas votre entreprise à l'international.",
                        icon: "mdi:map-marker",
                        impact: {
                            argent: {value: 0, type: "add"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 0.9, type: "multiply"},
                            charges: {value: 0, type: "add"},
                        }
                    },
                    {
                        title: "Développer",
                        description: "Vous développez votre entreprise à l'international.",
                        id: "yes",
                        icon: "mdi:earth",
                        impact: {
                            argent: {value: 2, type: "divide"},
                            dettes: {value: 0, type: "add"},
                            ca: {value: 0, type: "add"},
                            employes: {value: 0, type: "add"},
                            ventes: {value: 2, type: "multiply"},
                            charges: {value: 0, type: "add"},
                        }
                    }
                ],
                advices: [],
                chat: [
                    {
                        name: "Offline",
                        description: "Aucune discussion possible.",
                        questions: [
                        ]
                    }
                ]
            },
            {
                title: "Fin de partie",
                description: "Vous avez terminé votre partie. Félicitations !",
                choices: [],
                advices: [],
                chat: [
                    {
                        name: "Offline",
                        description: "Aucune discussion possible.",
                        questions: [
                        ]
                    }
                ]
            }
        ],
        currentStep: 0,
        config: {
            type: "creation",
            name: "Entreprise",
            domaine: "vente",
            accompagnement: "none",
            marketing: "qualite",
            management: "debt",
            investissement: "no",
        },
        competences: {
            argent: 0,
            motivation: 0,
            famille: 0,
            strategie: 0,
            polyvalence: 0
        },
        stats: {
            argent: [0],
            dettes: [0],
            ca: [0],
            employes: [0],
            ventes: [0],
            charges: [0],
        },
        history: []
    });

    return (
        <GameContext.Provider value={{ gameData, setGameData }}>
            {children}
        </GameContext.Provider>
    );
};

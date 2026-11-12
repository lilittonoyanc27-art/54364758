export interface LessonItem {
  id: string;
  es: string;
  hy: string;
  explanationHy?: string;
  examTipHy?: string;
  tag?: string;
}

export interface LessonSection {
  id: string;
  num: number;
  badge: string;
  titleEs: string;
  titleHy: string;
  subtitleHy: string;
  contentBlocks: {
    titleEs: string;
    titleHy: string;
    type?: 'text' | 'table' | 'story' | 'rules' | 'script';
    items: LessonItem[];
    tableData?: {
      headers: { es: string; hy: string }[];
      rows: { col1: { es: string; hy: string }; col2: { es: string; hy: string }; col3?: { es: string; hy: string }; col4?: { es: string; hy: string } }[];
    };
    storyAnalysis?: { labelEs: string; labelHy: string; valueEs: string; valueHy: string }[];
  }[];
}

export const LESSONS: LessonSection[] = [
  // --------------------------------------------------------------------------
  // PARTE 1 / TEMA 1
  // --------------------------------------------------------------------------
  {
    id: "generos",
    num: 1,
    badge: "PARTE 1",
    titleEs: "Los grandes géneros literarios",
    titleHy: "Գրականության հիմնական ժանրերը",
    subtitleHy: "Գրականությունն ունի երեք հիմնական ժանր՝ lírica (քնարերգություն), narrativa (պատմողական) և teatro (թատրոն)։",
    contentBlocks: [
      {
        titleEs: "1. La lírica — Քնարերգություն",
        titleHy: "Սահմանում, հատկանիշներ և քննական հարց",
        items: [
          {
            id: "g1-def",
            es: "La lírica es el género literario en el que el autor expresa sus sentimientos, emociones, pensamientos y estados de ánimo de manera subjetiva.",
            hy: "Քնարերգությունը գրական ժանր է, որի միջոցով հեղինակը արտահայտում է իր զգացմունքները, հույզերը, մտքերը և տրամադրությունը սուբյեկտիվ ձևով։",
            explanationHy: "Քնարերգության մեջ խոսողը կոչվում է «yo lírico» կամ «voz poética» (քնարական «ես»)։ Այն միշտ չէ, որ հենց հեղինակն է։",
            examTipHy: "Քննության հարց. «¿Qué expresa principalmente la lírica?» → «La lírica expresa los sentimientos y las emociones del autor de manera subjetiva.»",
            tag: "Definición"
          },
          {
            id: "g1-c1",
            es: "Subjetividad — El autor presenta sentimientos y experiencias desde una perspectiva personal e íntima.",
            hy: "Սուբյեկտիվություն — Հեղինակը ներկայացնում է զգացմունքներն ու ապրումները անձնական տեսանկյունից։",
            tag: "Característica"
          },
          {
            id: "g1-c2",
            es: "Emociones — Expresa amor, alegría, tristeza, nostalgia, miedo o esperanza.",
            hy: "Զգացմունքներ — Արտահայտում է սեր, ուրախություն, տխրություն, կարոտ, վախ կամ հույս։",
            tag: "Característica"
          },
          {
            id: "g1-c3",
            es: "Verso — Uso frecuente de versos, aunque también existe la prosa poética.",
            hy: "Չափածո խոսք — Հաճախ գրվում է բանաստեղծական տողերով, թեև կա նաև բանաստեղծական արձակ։",
            tag: "Característica"
          },
          {
            id: "g1-c4",
            es: "Ritmo y musicalidad — La repetición de sonidos, las pausas y el ritmo crean una sonoridad especial.",
            hy: "Ռիթմ և մեղեդայնություն — Հնչյունների կրկնությունը, դադարները և ռիթմը ստեղծում են հատուկ հնչողություն։",
            tag: "Característica"
          },
          {
            id: "g1-c5",
            es: "Recursos literarios — Se utilizan metáforas, comparaciones, personificaciones y repeticiones.",
            hy: "Գեղարվեստական միջոցներ — Օգտագործվում են փոխաբերություններ, համեմատություններ, անձնավորումներ և այլ հնարներ։",
            tag: "Característica"
          },
          {
            id: "g1-ej1",
            es: "Mi corazón guarda recuerdos y mis ojos buscan la luz.",
            hy: "Իմ սիրտը պահում է հիշողություններ, իսկ աչքերս լույս են փնտրում։",
            explanationHy: "Այստեղ խոսքը վերաբերում է հույզերին ու ներաշխարհին, հետևաբար սա lírica է։",
            tag: "Ejemplo"
          },
          {
            id: "g1-ej2",
            es: "Cuando miro las estrellas, mi corazón siente paz. Y en el silencio de la noche, mis pensamientos quieren volar.",
            hy: "Երբ նայում եմ աստղերին, սիրտս խաղաղություն է զգում։ Եվ գիշերվա լռության մեջ մտքերս ցանկանում են թռչել։",
            explanationHy: "Արտահայտում է անձնական զգացմունքներ և մտքեր՝ չափածո տողերով և գեղարվեստական պատկերներով։",
            tag: "Ejemplo poético"
          }
        ]
      },
      {
        titleEs: "2. La narrativa — Պատմողական գրականություն",
        titleHy: "Սահմանում, տարրեր և պատմողի 4 տեսակները",
        items: [
          {
            id: "g2-def",
            es: "La narrativa es el género literario en el que un narrador cuenta una historia real o ficticia protagonizada por unos personajes que realizan acciones en un tiempo y un lugar determinados.",
            hy: "Պատմողական ժանրում պատմողը ներկայացնում է իրական կամ հորինված պատմություն, որտեղ հերոսները կատարում են գործողություններ որոշակի ժամանակում և վայրում։",
            examTipHy: "Քննության հարց. «¿Qué elemento caracteriza especialmente a la narrativa?» → «La presencia de un narrador que cuenta una historia.»",
            tag: "Definición"
          },
          {
            id: "g2-n1",
            es: "Narrador en primera persona («yo»): Participa en los hechos como protagonista o como testigo.",
            hy: "Առաջին դեմքով պատմող («yo» / ես). Պատմում է առաջին դեմքով և մասնակցում է պատմությանը՝ որպես գլխավոր հերոս կամ ականատես։",
            explanationHy: "Օրինակ՝ «Esta mañana fui al parque y encontré un perro pequeño.» (Այս առավոտ գնացի այգի և հանդիպեցի փոքրիկ շան)։",
            tag: "Tipo de narrador"
          },
          {
            id: "g2-n2",
            es: "Narrador en tercera persona («él / ella / ellos»): Cuenta desde fuera lo que les sucede a otros personajes.",
            hy: "Երրորդ դեմքով պատմող («նա», «նրանք»). Պատմողը դրսից ներկայացնում է ուրիշների գործողությունները։",
            explanationHy: "Օրինակ՝ «Laura salió de casa y encontró un perro pequeño.» (Լաուրան դուրս եկավ տնից և հանդիպեց փոքրիկ շան)։",
            tag: "Tipo de narrador"
          },
          {
            id: "g2-n3",
            es: "Narrador omnisciente: Conoce todo sobre los personajes: pensamientos, sentimientos, secretos y hechos futuros.",
            hy: "Ամենագետ պատմող (omnisciente). Գիտի հերոսների ներքին մտքերը, զգացմունքները, գաղտնիքները և այն, ինչ հերոսներն իրենք դեռ չգիտեն։",
            explanationHy: "Օրինակ՝ «Laura sonrió, pero en el fondo estaba preocupada.» (Լաուրան ժպտաց, սակայն հոգու խորքում անհանգստացած էր)։",
            tag: "Tipo de narrador"
          },
          {
            id: "g2-n4",
            es: "Narrador testigo: Observa y cuenta lo que ve como espectador, pero no es el protagonista.",
            hy: "Վկա պատմող (testigo). Ականատես է իրադարձություններին և պատմում է դրանք, բայց պարտադիր չէ, որ գլխավոր հերոսը լինի։",
            explanationHy: "Օրինակ՝ «Vi cómo Laura entró en la habitación y empezó a buscar sus llaves.» (Ես տեսա, թե ինչպես Լաուրան մտավ սենյակ և սկսեց փնտրել բանալիները)։",
            tag: "Tipo de narrador"
          }
        ],
        tableData: {
          headers: [{ es: "Elemento de la narrativa", hy: "Պատմության տարրը" }, { es: "Significado", hy: "Նշանակությունը" }],
          rows: [
            { col1: { es: "Narrador", hy: "Պատմող" }, col2: { es: "La voz que cuenta la historia.", hy: "Այն ձայնը, որը ներկայացնում է պատմությունը։" } },
            { col1: { es: "Personajes", hy: "Հերոսներ" }, col2: { es: "Los seres que intervienen en la historia.", hy: "Պատմության գործող անձինք (մարդիկ, կենդանիներ)։" } },
            { col1: { es: "Protagonista", hy: "Գլխավոր հերոս" }, col2: { es: "El personaje principal del relato.", hy: "Պատմության գլխավոր կերպարը։" } },
            { col1: { es: "Personajes secundarios", hy: "Երկրորդական հերոսներ" }, col2: { es: "Acompañan al protagonista.", hy: "Օգնում կամ շրջապատում են գլխավոր հերոսին։" } },
            { col1: { es: "Acción", hy: "Գործողություն" }, col2: { es: "Los hechos y sucesos que ocurren.", hy: "Իրադարձությունները և դեպքերը։" } },
            { col1: { es: "Tiempo", hy: "Ժամանակ" }, col2: { es: "Cuándo ocurren los hechos y su duración.", hy: "Երբ են տեղի ունենում դեպքերը և որքան են տևում։" } },
            { col1: { es: "Espacio / Lugar", hy: "Վայր" }, col2: { es: "El lugar físico donde suceden los hechos.", hy: "Այն տարածքը, որտեղ տեղի են ունենում դեպքերը։" } },
            { col1: { es: "Argumento", hy: "Սյուժե" }, col2: { es: "Resumen de los hechos principales.", hy: "Հիմնական իրադարձությունների ընթացքը։" } },
            { col1: { es: "Descripción", hy: "Նկարագրություն" }, col2: { es: "Detalles sobre personajes o lugares.", hy: "Հերոսների կամ վայրի հատկանիշների մանրամասնումը։" } }
          ]
        },
        storyAnalysis: [
          { labelEs: "Texto de ejemplo", labelHy: "Օրինակելի տեքստ", valueEs: "Una mañana, Pablo salió de casa para ir al colegio. Mientras caminaba, encontró una mochila abandonada cerca de un árbol. Miró a su alrededor, pero no vio a nadie. Decidió llevarla a la policía. Por la tarde, una niña recuperó su mochila y le dio las gracias.", valueHy: "Մի առավոտ Պաբլոն դուրս եկավ տնից՝ դպրոց գնալու։ Քայլելիս ծառի մոտ գտավ թողնված պայուսակ։ Նա նայեց շուրջը, բայց ոչ ոքի չտեսավ։ Որոշեց պայուսակը տանել ոստիկանություն։ Երեկոյան մի աղջիկ հետ ստացավ իր պայուսակը և շնորհակալություն հայտնեց նրան։" },
          { labelEs: "Narrador", labelHy: "Պատմող", valueEs: "En tercera persona («salió», «encontró»)", valueHy: "Երրորդ դեմքով պատմող" },
          { labelEs: "Protagonista", labelHy: "Գլխավոր հերոս", valueEs: "Pablo", valueHy: "Պաբլո" },
          { labelEs: "Personaje secundario", labelHy: "Երկրորդական հերոս", valueEs: "La niña", valueHy: "Աղջիկը" },
          { labelEs: "Tiempo", labelHy: "Ժամանակ", valueEs: "Una mañana y por la tarde", valueHy: "Մի առավոտ և երեկոյան" },
          { labelEs: "Espacio", labelHy: "Վայր", valueEs: "La calle (árbol) y la comisaría", valueHy: "Փողոցը (ծառի մոտ) և ոստիկանությունը" },
          { labelEs: "Planteamiento (սկիզբ)", labelHy: "Սկիզբ", valueEs: "Pablo encuentra una mochila abandonada.", valueHy: "Պաբլոն գտնում է լքված պայուսակը։" },
          { labelEs: "Nudo (հանգույց)", labelHy: "Հանգույց", valueEs: "Busca al dueño y la lleva a la comisaría.", valueHy: "Փորձում է գտնել տիրոջը և տանում է ոստիկանություն։" },
          { labelEs: "Desenlace (ավարտ)", labelHy: "Հանգուցալուծում", valueEs: "La niña recupera la mochila y agradece.", valueHy: "Աղջիկը հետ է ստանում պայուսակը և շնորհակալություն հայտնում։" }
        ]
      },
      {
        titleEs: "3. El teatro — Թատրոն",
        titleHy: "Սահմանում և հիմնական առանձնահատկություններ",
        items: [
          {
            id: "g3-def",
            es: "El teatro es el género literario destinado principalmente a ser representado por actores ante un público en un escenario mediante diálogos y acciones.",
            hy: "Թատրոնը գրական ժանր է, որը նախատեսված է դերասանների կողմից բեմի վրա հանդիսատեսի առջև ներկայացվելու համար՝ երկխոսությունների և գործողությունների միջոցով։",
            explanationHy: "Թատրոնի ամենամեծ առանձնահատկությունն այն է, որ սովորաբար պատմող չկա (ausencia habitual de narrador)։ Գործողությունները ծավալվում են ուղիղ հանդիսատեսի աչքի առաջ։",
            tag: "Definición"
          },
          {
            id: "g3-c1",
            es: "Diálogo: Los personajes hablan directamente entre sí.",
            hy: "Երկխոսություն. Հերոսներն անմիջապես խոսում են միմյանց հետ։",
            tag: "Característica"
          },
          {
            id: "g3-c2",
            es: "Acción: Los personajes se mueven y actúan en el escenario.",
            hy: "Գործողություն. Դեպքերը զարգանում են հերոսների արարքներով։",
            tag: "Característica"
          },
          {
            id: "g3-c3",
            es: "Acotaciones: Indicaciones del autor sobre movimientos, gestos y ambiente (no se leen en voz alta).",
            hy: "Բեմական ցուցումներ. Հեղինակի նշումները շարժումների, ժեստերի և դեկորացիայի մասին (դերասանները բարձրաձայն չեն կարդում)։",
            tag: "Característica"
          }
        ]
      },
      {
        titleEs: "Comparación de los tres géneros — Երեք ժանրերի համեմատությունը",
        titleHy: "Արագ աղյուսակ քննության համար",
        items: [],
        tableData: {
          headers: [
            { es: "Género literario", hy: "Ժանրը" },
            { es: "Finalidad principal", hy: "Հիմնական նպատակը" },
            { es: "¿Cómo reconocerlo?", hy: "Ինչպե՞ս ճանաչել" }
          ],
          rows: [
            {
              col1: { es: "Lírica (Քնարերգություն)", hy: "Քնարերգություն" },
              col2: { es: "Expresar sentimientos y emociones subjetivas.", hy: "Արտահայտել սուբյեկտիվ զգացմունքներ և հույզեր։" },
              col3: { es: "Voz poética, versos, ritmo, musicalidad.", hy: "Բանաստեղծական խոսք, չափածո տողեր, ռիթմ, երաժշտականություն։" }
            },
            {
              col1: { es: "Narrativa (Պատմողական)", hy: "Պատմողական" },
              col2: { es: "Contar una historia o acontecimientos.", hy: "Պատմել պատմություն կամ իրադարձություններ։" },
              col3: { es: "Presencia de un narrador, personajes, tiempo y espacio.", hy: "Պատմողի առկայություն, հերոսներ, ժամանակ և վայր։" }
            },
            {
              col1: { es: "Teatro (Թատրոն)", hy: "Թատրոն" },
              col2: { es: "Representar una acción ante un público.", hy: "Բեմում հանդիսատեսի առջև ներկայացնել գործողություն։" },
              col3: { es: "Diálogos entre personajes, acotaciones, sin narrador.", hy: "Երկխոսություններ, բեմական ցուցումներ, առանց պատմողի։" }
            }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PARTE 2 / TEMA 2
  // --------------------------------------------------------------------------
  {
    id: "lenguaje",
    num: 2,
    badge: "PARTE 2",
    titleEs: "El lenguaje literario",
    titleHy: "Գրական լեզու — Չափածո և արձակ",
    subtitleHy: "Գեղարվեստական խոսքի նպատակն է ստեղծել գեղեցկություն, փոխանցել հույզեր և գրավել ընթերցողի ուշադրությունը։",
    contentBlocks: [
      {
        titleEs: "4. ¿Qué es el lenguaje literario?",
        titleHy: "Գեղարվեստական լեզվի սահմանումը և առանձնահատկությունները",
        items: [
          {
            id: "l2-def",
            es: "El lenguaje literario es una forma de utilizar la lengua con una finalidad estética y expresiva, buscando crear belleza, transmitir emociones y captar la atención del lector.",
            hy: "Գեղարվեստական լեզուն բառերի հատուկ կիրառությունն է, որի նպատակն է ստեղծել գեղեցիկ, արտահայտիչ խոսք և ազդել ընթերցողի զգացմունքների վրա։",
            examTipHy: "Քննության հարց. «¿Cuál es la finalidad del lenguaje literario?» → «Crear belleza, transmitir emociones y llamar la atención del lector.»",
            tag: "Definición"
          },
          {
            id: "l2-feat",
            es: "El lenguaje literario utiliza recursos literarios, rima, ritmo, musicalidad, lenguaje figurado y un orden especial de las palabras.",
            hy: "Գրական լեզուն հաճախ օգտագործում է գեղարվեստական հնարներ, հանգ, ռիթմ, երաժշտականություն, փոխաբերական խոսք և բառերի ոչ սովորական շարադասություն։",
            tag: "Recursos"
          }
        ],
        tableData: {
          headers: [
            { es: "Lenguaje cotidiano (Առօրյա լեզու)", hy: "Առօրյա լեզու" },
            { es: "Lenguaje literario (Գեղարվեստական լեզու)", hy: "Գեղարվեստական լեզու" },
            { es: "Figura literaria utilizada", hy: "Կիրառված արտահայտչամիջոցը" }
          ],
          rows: [
            {
              col1: { es: "El sol brilla. / El sol ilumina la habitación.", hy: "Արևը փայլում է։ / Արևը լուսավորում է սենյակը։" },
              col2: { es: "El sol sonríe al mundo. / Los rayos del sol acarician las paredes.", hy: "Արևը ժպտում է աշխարհին։ / Արևի ճառագայթները շոյում են պատերը։" },
              col3: { es: "Personificación (արևին տրվում է մարդկային գործողություն՝ ժպտալ, շոյել)", hy: "Անձնավորում" }
            },
            {
              col1: { es: "Está muy triste.", hy: "Նա շատ տխուր է։" },
              col2: { es: "Su corazón está lleno de sombras.", hy: "Նրա սիրտը լի է ստվերներով։" },
              col3: { es: "Metáfora (տխրությունը փոխաբերաբար ներկայացվում է որպես ստվերներ)", hy: "Փոխաբերություն" }
            },
            {
              col1: { es: "Hace mucho viento.", hy: "Ուժեղ քամի է։" },
              col2: { es: "El viento canta entre los árboles.", hy: "Քամին երգում է ծառերի միջով։" },
              col3: { es: "Personificación (քամին երգում է)", hy: "Անձնավորում" }
            },
            {
              col1: { es: "Tiene los ojos bonitos.", hy: "Նա գեղեցիկ աչքեր ունի։" },
              col2: { es: "Sus ojos son dos estrellas.", hy: "Նրա աչքերը երկու աստղեր են։" },
              col3: { es: "Metáfora (աչքերը նույնացվում են աստղերի հետ)", hy: "Փոխաբերություն" }
            }
          ]
        }
      },
      {
        titleEs: "5. El verso y la prosa — Չափածո և արձակ",
        titleHy: "Verso, Estrofa, Poema և Prosa",
        items: [
          {
            id: "l2-verso",
            es: "El verso es cada una de las líneas de un poema. Puede tener métrica, ritmo y rima.",
            hy: "Verso-ն բանաստեղծության յուրաքանչյուր առանձին տողն է։ Այն կարող է ունենալ չափ, ռիթմ և հանգ։",
            tag: "Verso"
          },
          {
            id: "l2-estrofa",
            es: "La estrofa es un conjunto de versos que forman una unidad dentro de un poema.",
            hy: "Estrofa-ն (տուն) մի քանի բանաստեղծական տողերից կազմված խումբն է։",
            tag: "Estrofa"
          },
          {
            id: "l2-poema",
            es: "El poema es la obra literaria completa escrita en verso.",
            hy: "Poema-ն (բանաստեղծություն) չափածո գրված ամբողջական ստեղծագործությունն է։",
            tag: "Poema"
          },
          {
            id: "l2-prosa",
            es: "La prosa es una forma de expresión que no sigue una estructura de versos métricos, sino que normalmente se organiza en oraciones y párrafos.",
            hy: "Արձակը (la prosa) խոսքի ձև է, որը չի կազմակերպվում չափական տողերով, այլ կազմված է նախադասություններից և պարբերություններից։",
            tag: "Prosa"
          },
          {
            id: "l2-notatodos",
            es: "¡Importante! No todos los versos tienen rima (hay versos sueltos), y no toda obra escrita en verso es lírica (el teatro y la narrativa también pueden escribirse en verso).",
            hy: "Կարևոր է. Ոչ բոլոր բանաստեղծական տողերն ունեն հանգ, և ոչ բոլոր չափածո ստեղծագործություններն են քնարերգություն (թատրոնն ու պատմողական ստեղծագործությունները ևս կարող են գրվել չափածո)։",
            tag: "Regla de oro"
          }
        ],
        tableData: {
          headers: [{ es: "El verso (Չափածո)", hy: "Չափածո" }, { es: "La prosa (Արձակ)", hy: "Արձակ" }],
          rows: [
            { col1: { es: "Se organiza en líneas poéticas (versos).", hy: "Կազմակերպվում է բանաստեղծական տողերով։" }, col2: { es: "Se organiza en oraciones y párrafos.", hy: "Կազմակերպվում է նախադասություններով և պարբերություններով։" } },
            { col1: { es: "Puede tener métrica y rima.", hy: "Կարող է ունենալ չափ (վանկաքանակ) և հանգ։" }, col2: { es: "No sigue una métrica poética regular.", hy: "Չունի բանաստեղծական կանոնավոր տաղաչափություն։" } },
            { col1: { es: "Frecuente en poesía.", hy: "Հաճախակի է պոեզիայում։" }, col2: { es: "Frecuente en novelas y cuentos.", hy: "Հաճախակի է վեպերում և պատմվածքներում։" } },
            { col1: { es: "Utiliza musicalidad y pausas métricas.", hy: "Օգտագործում է մեղեդայնություն և դադարներ։" }, col2: { es: "Tiene un ritmo más libre y natural.", hy: "Ունի ավելի ազատ և բնական ռիթմ։" } }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PARTE 3 / TEMA 3
  // --------------------------------------------------------------------------
  {
    id: "popular-culta",
    num: 3,
    badge: "PARTE 3",
    titleEs: "La literatura popular y la literatura culta",
    titleHy: "Ժողովրդական և հեղինակային գրականություն",
    subtitleHy: "Համեմատություն, հատկանիշներ, ժանրերի ցանկ և հիշելու ամենահեշտ բանաձևը։",
    contentBlocks: [
      {
        titleEs: "6. La literatura popular — Ժողովրդական գրականություն",
        titleHy: "Սահմանում և 7 հիմնական հատկանիշներ",
        items: [
          {
            id: "p3-def",
            es: "La literatura popular es el conjunto de obras literarias que pertenecen a la tradición de un pueblo y que, generalmente, son anónimas y se transmiten oralmente de generación en generación.",
            hy: "Ժողովրդական գրականությունը ժողովրդի մշակութային ավանդությանը պատկանող ստեղծագործությունների ամբողջությունն է, որոնք հաճախ անանուն են և փոխանցվում են բանավոր՝ սերնդեսերունդ։",
            tag: "Definición"
          },
          {
            id: "p3-c1",
            es: "1. Es anónima: No se conoce el nombre del autor original o se ha olvidado con el tiempo.",
            hy: "1. Անանուն է. Սկզբնական հեղինակի անունը հայտնի չէ կամ ժամանակի ընթացքում մոռացվել է։",
            tag: "Característica"
          },
          {
            id: "p3-c2",
            es: "2. Se transmite oralmente: Las historias pasan de padres a hijos a través de la voz.",
            hy: "2. Փոխանցվում է բանավոր. Պատմությունները փոխանցվում են ծնողներից երեխաներին՝ խոսքի միջոցով։",
            tag: "Característica"
          },
          {
            id: "p3-c3",
            es: "3. Puede modificarse: Cada persona puede introducir cambios, existiendo varias versiones de una misma obra.",
            hy: "3. Կարող է փոփոխվել. Տարբեր մարդիկ կարող են փոխել մանրամասները, ուստի գոյություն ունեն նույն գործի տարբեր տարբերակներ։",
            tag: "Característica"
          },
          {
            id: "p3-c4",
            es: "4. Suele ser breve: Su brevedad facilita la memorización y la transmisión.",
            hy: "4. Սովորաբար կարճ է. Կարճ լինելը հեշտացնում է հիշելն ու փոխանցելը։",
            tag: "Característica"
          },
          {
            id: "p3-c5",
            es: "5. Emplea un lenguaje sencillo y coloquial: Cercano a la forma de hablar cotidiana del pueblo.",
            hy: "5. Օգտագործում է պարզ, խոսակցական լեզու. Մոտ է ժողովրդի առօրյա խոսքին։",
            tag: "Característica"
          },
          {
            id: "p3-c6",
            es: "6. Puede estar en verso o en prosa: Existen tanto poemas y canciones como cuentos y leyendas.",
            hy: "6. Կարող է լինել չափածո կամ արձակ. Կան և՛ երգեր ու ռոմանսներ, և՛ հեքիաթներ ու ավանդապատումներ։",
            tag: "Característica"
          },
          {
            id: "p3-c7",
            es: "7. Acompañamiento musical: Muchas canciones y romances se cantan con instrumentos.",
            hy: "7. Երաժշտական ուղեկցություն. Շատ ստեղծագործություններ երգվում են կամ ուղեկցվում երաժշտությամբ։",
            tag: "Característica"
          }
        ],
        tableData: {
          headers: [{ es: "Tipo de literatura popular", hy: "Ժողովրդական գրականության տեսակը" }, { es: "Significado", hy: "Նշանակությունը" }],
          rows: [
            { col1: { es: "Canciones de trabajo", hy: "Աշխատանքային երգեր" }, col2: { es: "Se cantan durante las faenas del campo o talleres.", hy: "Երգվում են աշխատանքի ընթացքում՝ ռիթմ տալու համար։" } },
            { col1: { es: "Canciones de fiesta", hy: "Տոնական երգեր" }, col2: { es: "Se cantan en celebraciones populares y bailes.", hy: "Երգվում են ժողովրդական տոնակատարություններին։" } },
            { col1: { es: "Canciones de amor", hy: "Սիրային երգեր" }, col2: { es: "Expresan sentimientos amorosos.", hy: "Արտահայտում են սիրային զգացմունքներ։" } },
            { col1: { es: "Nanas", hy: "Օրորոցային երգեր" }, col2: { es: "Canciones suaves para dormir a los bebés.", hy: "Մեղմ երգեր՝ երեխաներին քնեցնելու համար։" } },
            { col1: { es: "Villancicos", hy: "Սուրբծննդյան երգեր" }, col2: { es: "Canciones tradicionales de Navidad.", hy: "Սուրբ Ծննդյան ավանդական տոնական երգեր։" } },
            { col1: { es: "Romances", hy: "Ռոմանսներ" }, col2: { es: "Poemas narrativos de tradición oral.", hy: "Ժողովրդական պատմողական բանաստեղծություններ։" } },
            { col1: { es: "Coplas", hy: "Կոպլաներ (ժողովրդական քառյակներ)" }, col2: { es: "Composiciones breves de cuatro versos populares.", hy: "Չորս տողանի ժողովրդական բանաստեղծական տներ։" } },
            { col1: { es: "Leyendas", hy: "Ավանդապատումներ" }, col2: { es: "Relatos tradicionales con elementos fantásticos.", hy: "Ավանդական պատմություններ՝ ֆանտաստիկ տարրերով։" } },
            { col1: { es: "Cuentos populares", hy: "Ժողովրդական հեքիաթներ" }, col2: { es: "Narraciones breves de tradición colectiva.", hy: "Սերնդեսերունդ փոխանցվող կարճ հեքիաթներ։" } },
            { col1: { es: "Mitos", hy: "Առասպելներ" }, col2: { es: "Relatos de dioses que explican orígenes.", hy: "Աստվածների մասին պատմություններ՝ ծագումը բացատրող։" } }
          ]
        }
      },
      {
        titleEs: "7. La literatura culta — Հեղինակային գրականություն",
        titleHy: "Սահմանում, հատկանիշներ և համեմատություն",
        items: [
          {
            id: "p3-culta-def",
            es: "La literatura culta es aquella que tiene un autor conocido, se elabora de forma cuidada y normalmente se transmite por escrito (manuscritos o libros impresos).",
            hy: "Հեղինակային գրականությունը ստեղծվում է հայտնի հեղինակի կողմից, մշակվում է մանրակրկիտ և սովորաբար տարածվում է գրավոր ձևով (ձեռագրերով կամ տպագիր գրքերով)։",
            tag: "Definición"
          },
          {
            id: "p3-culta-f1",
            es: "Autor conocido + Transmisión escrita + Lenguaje elaborado + Vocabulario variado + Texto fijo (no se modifica libremente).",
            hy: "Հայտնի հեղինակ + Գրավոր փոխանցում + Մշակված լեզու + Հարուստ բառապաշար + Հաստատուն տեքստ (կամայականորեն չի փոփոխվում)։",
            tag: "Claves"
          },
          {
            id: "p3-memorizar",
            es: "FÓRMULA PARA RECORDAR: Popular → anónima, oral, tradicional, variable. Culta → autor conocido, escrita, elaborada, texto fijo.",
            hy: "ՀԻՇԵԼՈՒ ԲԱՆԱՁԵՎ. Ժողովրդական (Popular) → անանուն, բանավոր, ավանդական, փոփոխվող։ Հեղինակային (Culta) → հայտնի հեղինակ, գրավոր, մշակված, հաստատուն։",
            tag: "Truco de memoria"
          }
        ],
        tableData: {
          headers: [{ es: "Literatura popular", hy: "Ժողովրդական գրականություն" }, { es: "Literatura culta", hy: "Հեղինակային գրականություն" }],
          rows: [
            { col1: { es: "Autor generalmente anónimo.", hy: "Հեղինակը հաճախ անանուն է։" }, col2: { es: "Autor conocido e identificado.", hy: "Հեղինակը հայտնի է։" } },
            { col1: { es: "Tradición principalmente oral.", hy: "Հիմնականում բանավոր ավանդույթ։" }, col2: { es: "Transmisión principalmente escrita.", hy: "Հիմնականում գրավոր փոխանցում։" } },
            { col1: { es: "Puede tener muchas versiones y cambios.", hy: "Կարող է ունենալ բազմաթիվ տարբերակներ։" }, col2: { es: "Suele conservar un texto establecido.", hy: "Պահպանում է հաստատուն, անփոփոխ տեքստ։" } },
            { col1: { es: "Lenguaje habitualmente sencillo y coloquial.", hy: "Սովորաբար պարզ, խոսակցական լեզու։" }, col2: { es: "Lenguaje más elaborado y cuidado.", hy: "Ավելի մշակված, հարուստ գեղարվեստական լեզու։" } },
            { col1: { es: "Pertenece a la tradición colectiva del pueblo.", hy: "Պատկանում է ժողովրդի հավաքական հիշողությանը։" }, col2: { es: "Creación individual de un escritor.", hy: "Կոնկրետ գրողի անհատական ստեղծագործություն է։" } }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PARTE 4 / TEMA 4
  // --------------------------------------------------------------------------
  {
    id: "cuento-leyenda-mito",
    num: 4,
    badge: "PARTE 4",
    titleEs: "El cuento, la leyenda y el mito",
    titleHy: "Պատմվածքը (հեքիաթը), ավանդապատումը և առասպելը",
    subtitleHy: "Սահմանումներ, կառուցվածք, օրինակներ և քննության արագ տարբերակման եղանակը։",
    contentBlocks: [
      {
        titleEs: "8. El cuento — Կարճ պատմվածք / հեքիաթ",
        titleHy: "Սահմանում, կառուցվածք (Planteamiento, Nudo, Desenlace) և օրինակ",
        items: [
          {
            id: "c4-def",
            es: "El cuento es una narración breve, generalmente ficticia, escrita normalmente en prosa, que presenta pocos personajes y un argumento sencillo.",
            hy: "Կարճ պատմվածքը (հեքիաթը) փոքր ծավալով պատմողական ստեղծագործություն է, որը սովորաբար հորինված է, գրված է արձակով, ունի քիչ հերոսներ և պարզ սյուժե։",
            tag: "Definición"
          },
          {
            id: "c4-est1",
            es: "1. Planteamiento o inicio: Se presentan los personajes, el lugar, el tiempo y la situación inicial.",
            hy: "1. Սկիզբ (Planteamiento). Ներկայացվում են հերոսները, վայրը, ժամանակը և սկզբնական իրավիճակը։",
            tag: "Estructura"
          },
          {
            id: "c4-est2",
            es: "2. Nudo: Aparece un problema, conflicto o dificultad y se desarrollan los acontecimientos.",
            hy: "2. Զարգացում / հանգույց (Nudo). Առաջանում է խնդիր, հակամարտություն, և զարգանում են դեպքերը։",
            tag: "Estructura"
          },
          {
            id: "c4-est3",
            es: "3. Desenlace: La historia concluye y el conflicto se resuelve de forma favorable o desfavorable.",
            hy: "3. Հանգուցալուծում (Desenlace). Պատմությունն ավարտվում է, խնդիրը լուծվում է կամ ստանում վերջնական ելք։",
            tag: "Estructura"
          },
          {
            id: "c4-ej",
            es: "Había una vez un niño llamado Daniel que vivía cerca de un bosque. Un día encontró una llave dorada junto a un árbol. Daniel buscó durante horas hasta que descubrió una pequeña puerta escondida. Al abrirla, encontró un jardín lleno de flores mágicas.",
            hy: "Կար մի տղա՝ Դանիել անունով, որն ապրում էր անտառի մոտ։ Մի օր նա ծառի կողքին ոսկե բանալի գտավ։ Դանիելը ժամերով փնտրեց, մինչև հայտնաբերեց թաքնված փոքրիկ դուռ։ Դուռը բացելով՝ նա գտավ կախարդական ծաղիկներով լի այգի։",
            explanationHy: "Հերոս՝ Դանիել, Վայր՝ անտառ և այգի, Խնդիր՝ բանալու դուռը գտնելը, Ավարտ՝ կախարդական այգու բացահայտումը։",
            tag: "Ejemplo de cuento"
          }
        ]
      },
      {
        titleEs: "9. La leyenda — Ավանդապատում",
        titleHy: "Իրականության և ֆանտաստիկայի միաձուլումը",
        items: [
          {
            id: "l4-def",
            es: "La leyenda es un relato tradicional que suele partir de acontecimientos, personajes o lugares reales, pero que incorpora elementos fantásticos o sobrenaturales.",
            hy: "Ավանդապատումը ավանդական պատմություն է, որի հիմքում կարող են լինել իրական մարդիկ, վայրեր կամ պատմական դեպքեր, սակայն պատմության մեջ ավելացվում են նաև ֆանտաստիկ կամ գերբնական տարրեր։",
            tag: "Definición"
          },
          {
            id: "l4-ej",
            es: "Hace muchos años, en un antiguo pueblo, había un castillo abandonado. Los habitantes contaban que una mujer vestida de blanco aparecía cada noche junto a la torre. Según la tradición, era el espíritu de una princesa que esperaba el regreso de su amado.",
            hy: "Շատ տարիներ առաջ մի հին գյուղում լքված ամրոց կար։ Բնակիչները պատմում էին, որ ամեն գիշեր աշտարակի մոտ հայտնվում էր սպիտակ հագուստով մի կին։ Ըստ ավանդության՝ նա արքայադստեր հոգին էր, որը սպասում էր իր սիրելիի վերադարձին։",
            explanationHy: "Ինչո՞ւ է leyenda. Կապված է կոնկրետ վայրի հետ (ամրոց), փոխանցվել է որպես ավանդություն և պարունակում է գերբնական տարր (արքայադստեր հոգին)։",
            tag: "Ejemplo de leyenda"
          }
        ]
      },
      {
        titleEs: "10. El mito — Առասպել",
        titleHy: "Աստվածներ, հերոսներ և աշխարհի ծագման բացատրություն",
        items: [
          {
            id: "m4-def",
            es: "El mito es una narración tradicional, protagonizada por dioses, héroes o seres sobrenaturales, que intenta explicar el origen del mundo, de los seres humanos o de fenómenos naturales.",
            hy: "Առասպելը ավանդական պատմություն է աստվածների, հերոսների կամ գերբնական էակների մասին, որը փորձում է բացատրել աշխարհի, մարդկության կամ բնության երևույթների ծագումը։",
            tag: "Definición"
          },
          {
            id: "m4-ej",
            es: "Según un mito antiguo, un poderoso dios creó el sol para iluminar la Tierra y luego creó la luna para que los seres humanos no tuvieran miedo durante la noche.",
            hy: "Ըստ հին առասպելի՝ հզոր աստվածը ստեղծեց արևը՝ երկիրը լուսավորելու համար, իսկ հետո ստեղծեց լուսինը, որպեսզի մարդիկ գիշերը չվախենան։",
            explanationHy: "Ինչո՞ւ է mito. Գլխավոր կերպարն աստված է, և բացատրվում է արևի ու լուսնի ծագումը։",
            tag: "Ejemplo de mito"
          }
        ],
        tableData: {
          headers: [
            { es: "Característica", hy: "Հատկանիշ" },
            { es: "Cuento (Պատմվածք)", hy: "Պատմվածք / Հեքիաթ" },
            { es: "Leyenda (Ավանդապատում)", hy: "Ավանդապատում" },
            { es: "Mito (Առասպել)", hy: "Առասպել" }
          ],
          rows: [
            {
              col1: { es: "Base / Հիմքը", hy: "Հիմքը" },
              col2: { es: "Ficción inventada.", hy: "Հորինված պատմություն։" },
              col3: { es: "Hechos/lugares reales + fantasía.", hy: "Իրական վայրեր + երևակայություն։" },
              col4: { es: "Creencias sagradas tradicionales.", hy: "Ավանդական կրոնական պատկերացումներ։" }
            },
            {
              col1: { es: "Personajes / Հերոսները", hy: "Հերոսները" },
              col2: { es: "Personas, animales, seres mágicos.", hy: "Մարդիկ, կենդանիներ։" },
              col3: { es: "Personas reales o fantasmas.", hy: "Իրական մարդիկ, ասպետներ, ուրվականներ։" },
              col4: { es: "Dioses, héroes sobrenaturales.", hy: "Աստվածներ, դյուցազուններ։" }
            },
            {
              col1: { es: "Finalidad / Նպատակը", hy: "Նպատակը" },
              col2: { es: "Entretener y divertir.", hy: "Հետաքրքրել և զվարճացնել։" },
              col3: { es: "Transmitir tradición o enseñanza.", hy: "Պահպանել ավանդույթը, երբեմն խրատել։" },
              col4: { es: "Explicar el origen del mundo/fenómenos.", hy: "Բացատրել աշխարհի կամ երևույթների ծագումը։" }
            }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PARTE 5 / TEMA 5
  // --------------------------------------------------------------------------
  {
    id: "romance",
    num: 5,
    badge: "PARTE 5",
    titleEs: "El Romance — Ռոմանս",
    titleHy: "Ռոմանսի կառուցվածքը, չափը (8− / 8a), սինալեֆան և հանգը",
    subtitleHy: "Քննության ամենակարևոր թեման՝ վանկերի հաշվարկ, շեշտի կանոններ (+1, 0, -1), sinalefa, rima asonante և ամբողջական քննական պատասխան։",
    contentBlocks: [
      {
        titleEs: "11. ¿Qué es un romance? — Ռոմանսի սահմանումը",
        titleHy: "Անգիր սովորելու իսպաներեն և հայերեն սահմանումը",
        items: [
          {
            id: "r5-def",
            es: "Un romance es un poema formado por un número indefinido de versos, normalmente octosílabos, con rima asonante en los versos pares y versos impares sueltos.",
            hy: "Ռոմանսը իսպանական բանաստեղծության տեսակ է, որը կազմված է անորոշ քանակությամբ ութվանկանի տողերից, որոնց զույգ տողերն ունեն ձայնավորային հանգ, իսկ կենտ տողերը մնում են անհանգ։",
            examTipHy: "Քննության մոդելային պատասխան. «Es un romance porque está formado por una serie de versos octosílabos, presenta rima asonante en los versos pares y deja sueltos los impares. Su esquema métrico es 8−, 8a, 8−, 8a...»",
            tag: "Definición clave"
          },
          {
            id: "r5-esquema",
            es: "Esquema métrico del romance: 8− (verso 1, impar suelto) / 8a (verso 2, par con rima asonante) / 8− (verso 3, impar suelto) / 8a (verso 4, par con rima asonante)...",
            hy: "Ռոմանսի չափական սխեման՝ 8− (1-ին տող, կենտ անհանգ) / 8a (2-րդ տող, զույգ ձայնավորային հանգ) / 8− (3-րդ տող) / 8a (4-րդ տող)...",
            explanationHy: "«8» = ութ բանաստեղծական վանկ։ «−» = հանգ չունի (suelto)։ «a» = զույգ տողերի նույն ձայնավորային հանգը։",
            tag: "Esquema"
          }
        ]
      },
      {
        titleEs: "13. Las reglas de la métrica — Վանկերի հաշվման կանոնները",
        titleHy: "Սինալեֆա և վերջին բառի շեշտադրության կանոնները (+1, 0, -1)",
        items: [
          {
            id: "r5-sinalefa",
            es: "Regla 1. La sinalefa: Cuando una palabra termina en vocal y la siguiente empieza por vocal (o 'h' muda), se pronuncian juntas formando una sola sílaba métrica.",
            hy: "Կանոն 1. Սինալեֆա (La sinalefa). Երբ մի բառն ավարտվում է ձայնավորով, իսկ հաջորդը սկսվում է ձայնավորով (կամ չարտասանվող h-ով), դրանք միավորվում են մեկ բանաստեղծական վանկի մեջ։",
            explanationHy: "Օրինակ՝ «Mi amigo está aquí» → առանձին 8 քերականական վանկ, բայց սինալեֆաներով՝ Mi_amigo_está_aquí = 5 բանաստեղծական վանկ։",
            tag: "Regla 1"
          },
          {
            id: "r5-aguda",
            es: "Regla 2. Palabra aguda al final: Si el verso termina en palabra aguda (acento en la última sílaba), se suma una sílaba (+1).",
            hy: "Կանոն 2. Վերջում aguda բառ (+1). Եթե տողի վերջին բառի շեշտը վերջին վանկի վրա է, գումարվում է +1 վանկ։",
            explanationHy: "Օրինակ՝ «Las nubes cubren el sol» → 7 վանկ + 1 (sol-ը aguda է) = 8 sílabas métricas։",
            tag: "Regla 2"
          },
          {
            id: "r5-llana",
            es: "Regla 3. Palabra llana al final: Si el verso termina en palabra llana (acento en la penúltima sílaba), el cómputo no cambia (0).",
            hy: "Կանոն 3. Վերջում llana բառ (0). Եթե շեշտը նախավերջին վանկի վրա է, վանկերի թիվը չի փոխվում։",
            explanationHy: "Օրինակ՝ «Por la plaza va la niña» → niña (llana) → 8 վանկ (չի փոխվում)։",
            tag: "Regla 3"
          },
          {
            id: "r5-esdrujula",
            es: "Regla 4. Palabra esdrújula al final: Si el verso termina en palabra esdrújula (acento en la antepenúltima sílaba), se resta una sílaba (−1).",
            hy: "Կանոն 4. Վերջում esdrújula բառ (−1). Եթե շեշտը վերջից երրորդ վանկի վրա է, հանվում է -1 վանկ։",
            explanationHy: "Օրինակ՝ «La gente canta con música» → 9 վանկ - 1 (música-ն esdrújula է) = 8 sílabas métricas։",
            tag: "Regla 4"
          }
        ],
        tableData: {
          headers: [
            { es: "Última palabra del verso", hy: "Տողի վերջին բառը" },
            { es: "Regla métrica", hy: "Տաղաչափական կանոնը" },
            { es: "Ejemplo y resultado", hy: "Օրինակ և արդյունք" }
          ],
          rows: [
            {
              col1: { es: "Aguda (շեշտը վերջին վանկում)", hy: "Aguda" },
              col2: { es: "+1 sílaba métrica", hy: "+1 վանկ" },
              col3: { es: "Las nubes cubren el sol → 7 + 1 = 8", hy: "7 + 1 = 8" }
            },
            {
              col1: { es: "Llana (շեշտը նախավերջին վանկում)", hy: "Llana" },
              col2: { es: "No cambia (0)", hy: "Չի փոխվում (0)" },
              col3: { es: "Por la plaza va la niña → 8 + 0 = 8", hy: "8 + 0 = 8" }
            },
            {
              col1: { es: "Esdrújula (շեշտը վերջից 3-րդ վանկում)", hy: "Esdrújula" },
              col2: { es: "−1 sílaba métrica", hy: "−1 վանկ" },
              col3: { es: "La gente canta con música → 9 − 1 = 8", hy: "9 − 1 = 8" }
            },
            {
              col1: { es: "Sinalefa (հարևան ձայնավորներ)", hy: "Sinalefa" },
              col2: { es: "Une vocales en 1 sola sílaba", hy: "Միավորում է մեկ վանկի մեջ" },
              col3: { es: "Pasa despacio_un caballo → 9 − 1 = 8", hy: "9 − 1 = 8" }
            }
          ]
        }
      },
      {
        titleEs: "14. Rima asonante vs consonante — Ձայնավորային և լիակատար հանգ",
        titleHy: "Ինչպե՞ս գտնել ձայնավորների համընկնումը (օր.՝ a-o)",
        items: [
          {
            id: "r5-as-def",
            es: "Rima asonante: Coinciden únicamente las vocales a partir de la última vocal acentuada (las consonantes son distintas). Es la rima típica del romance.",
            hy: "Ձայնավորային հանգ (rima asonante). Համընկնում են միայն ձայնավորները՝ սկսած վերջին շեշտված ձայնավորից (բաղաձայնները տարբեր են)։ Ռոմանսի դասական հանգն է։",
            explanationHy: "Օրինակ՝ dorado (a-o) և caballo (a-o), gato / mano (a-o), cielo / viento (e-o), casa / rama (a-a)։",
            tag: "Asonante"
          },
          {
            id: "r5-cons-def",
            es: "Rima consonante: Coinciden todos los sonidos (tanto vocales como consonantes) a partir de la última vocal acentuada.",
            hy: "Լիակատար հանգ (rima consonante). Համընկնում են բոլոր հնչյունները՝ և՛ ձայնավորները, և՛ բաղաձայնները՝ սկսած վերջին շեշտված ձայնավորից։",
            explanationHy: "Օրինակ՝ camino / destino (-ino), corazón / canción (-ón), flor / amor (-or)։",
            tag: "Consonante"
          }
        ]
      },
      {
        titleEs: "15. Ejemplo completo de romance — Տող առ տող վերլուծություն",
        titleHy: "«Por la plaza va la niña» հատվածի մանրակրկիտ քննում",
        items: [
          {
            id: "r5-v1",
            es: "Verso 1: «Por la plaza va la niña» → Por / la / pla / za / va / la / ni / ña (8 sílabas). Última palabra «niña» (llana). Verso impar suelto → 8−",
            hy: "Տող 1. «Por la plaza va la niña» → 8 վանկ։ Վերջին բառը՝ niña (llana)։ Կենտ տող է և հանգ չունի → 8−",
            tag: "Verso 1"
          },
          {
            id: "r5-v2",
            es: "Verso 2: «con su pañuelo dorado» → Con / su / pa / ñue / lo / do / ra / do (8 sílabas). «Dorado» acaba en a–o. Verso par rimado → 8a",
            hy: "Տող 2. «con su pañuelo dorado» → 8 վանկ։ «Dorado» բառի ձայնավորները a–o են։ Զույգ տող է → 8a",
            tag: "Verso 2"
          },
          {
            id: "r5-v3",
            es: "Verso 3: «y contempla las estrellas» → Y / con / tem / pla / las / es / tre / llas (8 sílabas). Verso impar suelto → 8−",
            hy: "Տող 3. «y contempla las estrellas» → 8 վանկ։ Կենտ տող է և հանգ չունի → 8−",
            tag: "Verso 3"
          },
          {
            id: "r5-v4",
            es: "Verso 4: «pasa despacio un caballo» → Pa / sa / des / pa / cio_un / ca / ba / llo (8 sílabas por sinalefa cio_un). «Caballo» acaba en a–o. Rima asonante con «dorado» → 8a",
            hy: "Տող 4. «pasa despacio un caballo» → 8 վանկ (cio_un սինալեֆայի շնորհիվ)։ «Caballo»-ն ունի a–o ձայնավորները, ինչպես «dorado»-ն → 8a",
            tag: "Verso 4"
          },
          {
            id: "r5-resumen",
            es: "Esquema resultante: 8− / 8a / 8− / 8a. Cumple todos los requisitos métricos del romance.",
            hy: "Ստացված սխեման՝ 8− / 8a / 8− / 8a։ Ամբողջությամբ համապատասխանում է ռոմանսի կանոններին։",
            tag: "Conclusión"
          }
        ]
      },
      {
        titleEs: "17. ¿Qué pasa si cambia la rima? — Հանգի փոփոխության 3 դեպքերը",
        titleHy: "Caso A, Caso B և Caso C",
        items: [
          {
            id: "r5-ca",
            es: "Caso A (CORRECTO): Verso 2: dorado (a-o), Verso 4: caballo (a-o), Verso 6: canto (a-o). Todos tienen las mismas vocales a-o → Todos son 8a.",
            hy: "Դեպք A (ՃԻՇՏ Է). Բոլոր զույգ տողերի վերջին բառերն ունեն նույն a-o ձայնավորները (dorado, caballo, canto) → բոլորը նշվում են 8a։",
            tag: "Caso A"
          },
          {
            id: "r5-cb",
            es: "Caso B (INCORRECTO en romance tradicional): Verso 2: dorado (a-o), Verso 4: camino (i-o). Las vocales son diferentes (a-o ≠ i-o), por tanto no riman en asonante.",
            hy: "Դեպք B (ՍԽԱԼ Է դասական ռոմանսում). Verso 2-ում a-o է (dorado), իսկ Verso 4-ում՝ i-o (camino)։ Ձայնավորները տարբեր են, ուստի չեն կարող նույն «a» հանգը կազմել։",
            tag: "Caso B"
          },
          {
            id: "r5-cc",
            es: "Caso C (CORRECTO asonante): Verso 2: gato (a-o), Verso 4: mano (a-o). Las consonantes son distintas (t vs n), pero las vocales son idénticas → Es rima asonante correcta.",
            hy: "Դեպք C (ՃԻՇՏ ձայնավորային հանգ). Բառերի բաղաձայնները տարբեր են (gato / mano), բայց ձայնավորները նույն a-o-ն են → սա իսկական rima asonante է։",
            tag: "Caso C"
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PARTE 6 / TEMA 7
  // --------------------------------------------------------------------------
  {
    id: "teatro",
    num: 6,
    badge: "PARTE 6",
    titleEs: "El Teatro — Թատրոն",
    titleHy: "Թատրոնի տարրերը, կառուցվածքը, ակոտացիաները և ժանրերը",
    subtitleHy: "13 տարրեր (atrezo, decorado, vestuario...), երկխոսություն vs մենախոսություն vs aparte, ակտ/տեսարան/բեմապատկեր և Լաուրայի ու Պաբլոյի տեսարանը։",
    contentBlocks: [
      {
        titleEs: "19. ¿Qué es el teatro? — Թատրոնի սահմանումը",
        titleHy: "Նպատակը և տարբերությունը պատմողական գրականությունից",
        items: [
          {
            id: "t6-def",
            es: "El teatro es un género literario en el que una historia se presenta principalmente mediante los diálogos y las acciones de los personajes, destinada a ser representada por actores ante un público en un escenario.",
            hy: "Թատրոնը գրական ժանր է, որտեղ պատմությունը ներկայացվում է հիմնականում հերոսների երկխոսությունների և գործողությունների միջոցով և նախատեսված է դերասանների կողմից բեմի վրա հանդիսատեսի առջև ներկայացվելու համար։",
            explanationHy: "Հիմնական տարբերությունը՝ սովորաբար պատմող չկա (ausencia habitual de narrador)։",
            tag: "Definición"
          }
        ],
        tableData: {
          headers: [{ es: "Elemento del teatro", hy: "Թատրոնի տարրը" }, { es: "Significado en español", hy: "Իսպաներեն բացատրություն" }, { es: "Հայերեն բացատրություն", hy: "Հայերեն նշանակություն" }],
          rows: [
            { col1: { es: "Dramaturgo", hy: "Թատերագիր" }, col2: { es: "Autor que escribe la obra teatral.", hy: "Գրում է թատերական ստեղծագործությունը։" } },
            { col1: { es: "Actor / Actriz", hy: "Դերասան / դերասանուհի" }, col2: { es: "Persona que interpreta a un personaje.", hy: "Մարմնավորում է պիեսի հերոսին։" } },
            { col1: { es: "Personaje", hy: "Հերոս / գործող անձ" }, col2: { es: "Ser ficticio que interviene en la trama.", hy: "Ստեղծագործության գործող անձը։" } },
            { col1: { es: "Público / Espectadores", hy: "Հանդիսատես" }, col2: { es: "Personas que asisten a ver la obra.", hy: "Ներկայացումը դիտող մարդիկ։" } },
            { col1: { es: "Escenario", hy: "Բեմ" }, col2: { es: "Espacio físico donde actúan los actores.", hy: "Տարածքը, որտեղ խաղում են դերասանները։" } },
            { col1: { es: "Diálogo", hy: "Երկխոսություն" }, col2: { es: "Conversación entre dos o más personajes.", hy: "Երկու կամ ավելի հերոսների խոսակցությունը։" } },
            { col1: { es: "Monólogo", hy: "Մենախոսություն" }, col2: { es: "Intervención extensa de un solo personaje.", hy: "Մեկ հերոսի երկարատև խոսքը։" } },
            { col1: { es: "Aparte", hy: "Խոսք հանդիսատեսին" }, col2: { es: "Comentario que el público oye pero otros no.", hy: "Հանդիսատեսը լսում է, իսկ բեմի մյուս հերոսները՝ ոչ։" } },
            { col1: { es: "Acotaciones", hy: "Բեմական ցուցումներ" }, col2: { es: "Indicaciones del autor sobre la puesta en escena.", hy: "Հեղինակի ցուցումները շարժումների և բեմի մասին։" } },
            { col1: { es: "Decorado", hy: "Դեկորացիա" }, col2: { es: "Elementos que representan el ambiente o lugar.", hy: "Տարրեր, որոնք պատկերում են վայրը (պատեր, կահույք)։" } },
            { col1: { es: "Atrezo", hy: "Բեմական պարագաներ (ռեկվիզիտ)" }, col2: { es: "Objetos que los actores manipulan en escena.", hy: "Դերասանների ձեռքի առարկաները (նամակ, բաժակ, հեռախոս)։" } },
            { col1: { es: "Vestuario", hy: "Հանդերձանք" }, col2: { es: "Ropa y accesorios que llevan los personajes.", hy: "Հերոսների զգեստները և աքսեսուարները։" } },
            { col1: { es: "Iluminación y sonido", hy: "Լուսավորություն և ձայն" }, col2: { es: "Crean atmósfera y efectos escénicos.", hy: "Ստեղծում են մթնոլորտ և տրամադրություն։" } }
          ]
        }
      },
      {
        titleEs: "20–23. Formas de intervención y Acotaciones",
        titleHy: "Diálogo, Monólogo, Aparte և Acotaciones-ի տեսակները",
        items: [
          {
            id: "t6-dia",
            es: "Diálogo: Conversación entre dos o más personajes (Ejemplo: Laura pregunta dónde está la mochila y Pablo le responde).",
            hy: "Երկխոսություն (Diálogo). Երկու կամ ավելի հերոսների խոսակցություն։",
            tag: "Diálogo"
          },
          {
            id: "t6-mono",
            es: "Monólogo: Un personaje habla a solas durante un tiempo prolongado expresando sus pensamientos o dudas.",
            hy: "Մենախոսություն (Monólogo). Մեկ հերոսը երկար ժամանակ միայնակ խոսում է՝ արտահայտելով իր մտքերը կամ կասկածները։",
            tag: "Monólogo"
          },
          {
            id: "t6-apa",
            es: "El aparte: Palabras que dice un personaje dirigidas al público y que, por convención, los demás personajes no escuchan (ej: Laura dice «En realidad estoy preocupada» sin que Pablo lo sepa).",
            hy: "Aparte. Խոսք հանդիսատեսին, որը մյուս հերոսները պայմանականորեն չեն լսում (օր.՝ Լաուրան ասում է «իրականում շատ անհանգստացած եմ»)։",
            tag: "El aparte"
          },
          {
            id: "t6-acot",
            es: "Las acotaciones pueden indicar: movimiento «(Entra Pablo rápidamente)», gestos «(Laura sonríe)», emoción «(Sorprendida)», tono de voz «(En voz baja)» o decorado «(Una habitación pequeña con una mesa)».",
            hy: "Բեմական ցուցումները կարող են նշել՝ շարժում «(Պաբլոն արագ ներս է մտնում)», ժեստ «(Լաուրան ժպտում է)», հույզ «(Զարմացած)», ձայնի տոն «(Ցածրաձայն)», կամ բեմական միջավայր «(Փոքր սենյակ՝ սեղանով)»։",
            tag: "Acotaciones"
          }
        ]
      },
      {
        titleEs: "24–27. Estructura, Códigos y Tipos de Obras",
        titleHy: "Acto/Escena/Cuadro, 6 թատերական կոդեր և Comedia/Tragedia/Drama",
        items: [
          {
            id: "t6-div",
            es: "Divisiones de la obra teatral: Acto (división principal), Escena (delimitada por la entrada o salida de personajes), Cuadro (marcado por un cambio de espacio o decorado).",
            hy: "Պիեսի բաժանումները՝ Acto (հիմնական խոշոր գործողությունը), Escena (տեսարան՝ որոշվում է հերոսների մուտքով կամ ելքով), Cuadro (բեմապատկերային հատված՝ նույն դեկորացիայով)։",
            tag: "Estructura"
          },
          {
            id: "t6-tipos",
            es: "Tipos de obras teatrales: Comedia (situaciones cómicas, desenlace favorable), Tragedia (conflictos graves, desenlace desgraciado), Drama (conflictos serios que pueden combinar lo trágico y lo cómico).",
            hy: "Թատերական ժանրերի տեսակները՝ Comedia (կատակերգություն՝ ծիծաղելի դեպքեր, բարեհաջող ավարտ), Tragedia (ողբերգություն՝ ծանր հակամարտություններ, դժբախտ ավարտ), Drama (դրամա՝ լուրջ մարդկային խնդիրներ)։",
            tag: "Géneros dramáticos"
          }
        ],
        tableData: {
          headers: [{ es: "Código del teatro", hy: "Թատրոնի արտահայտչամիջոցը" }, { es: "Ejemplo", hy: "Օրինակ" }, { es: "Հայերեն բացատրություն", hy: "Հայերեն նշանակություն" }],
          rows: [
            { col1: { es: "Verbal", hy: "Խոսքային" }, col2: { es: "Palabras, diálogos, monólogos.", hy: "Խոսքեր, երկխոսություն, մենախոսություն։" } },
            { col1: { es: "Gestual", hy: "Ժեստային" }, col2: { es: "Sonreír, mirar sorprendido, guiñar un ojo.", hy: "Ժպտալ, զարմացած նայել, աչքով անել։" } },
            { col1: { es: "Corporal", hy: "Մարմնական" }, col2: { es: "Caminar, correr, sentarse, abrazar.", hy: "Քայլել, վազել, նստել, գրկել։" } },
            { col1: { es: "Sonoro", hy: "Ձայնային" }, col2: { es: "Música ambiental, sonido de pasos o truenos.", hy: "Երաժշտություն, քայլերի կամ որոտի ձայն։" } },
            { col1: { es: "Visual", hy: "Տեսողական" }, col2: { es: "Luces de colores, decorado, vestuario.", hy: "Լույսեր, գույներ, դեկորացիա, հագուստ։" } },
            { col1: { es: "Paraverbal", hy: "Ձայնի երանգավորում" }, col2: { es: "Tono de voz, volumen, pausas, silencios.", hy: "Ձայնի տոն, բարձրություն, դադարներ, լռություն։" } }
          ]
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PARTE 7 / TEMA 6
  // --------------------------------------------------------------------------
  {
    id: "figuras",
    num: 7,
    badge: "PARTE 7",
    titleEs: "Las figuras literarias",
    titleHy: "Գեղարվեստական արտահայտչամիջոցներ",
    subtitleHy: "Երեք մակարդակ՝ Nivel fónico (հնչյունական), Nivel morfosintáctico (ձևաշարահյուսական) և Nivel semántico (իմաստային)։",
    contentBlocks: [
      {
        titleEs: "29. Nivel fónico — Հնչյունական մակարդակ",
        titleHy: "Աշխատում է հնչյունների, բառերի հնչողության և կրկնության հետ",
        items: [
          {
            id: "f7-ali",
            es: "Aliteración: Repetición de uno o varios sonidos iguales o semejantes en palabras próximas para producir un efecto sonoro («Susana susurra suavemente»).",
            hy: "Ալիտերացիա (Aliteración). Նույն կամ նման հնչյունների կրկնություն մոտ գտնվող բառերում («Susana susurra suavemente» — կրկնվում է «s»-ը)։",
            explanationHy: "Ինչպե՞ս ճանաչել. Փնտրիր հաճախակի կրկնվող տառեր կամ հնչյուններ։",
            tag: "Aliteración"
          },
          {
            id: "f7-ono",
            es: "Onomatopeya: Utilización de palabras que imitan sonidos reales («Miau, miau», «Tic, tac», «¡Pum!», «Guau, guau»).",
            hy: "Ձայնանմանություն (Onomatopeya). Բառեր, որոնք ընդօրինակում են իրական ձայները (կատվի մլավոց, ժամացույցի տկտկոց, պայթյունի ձայն)։",
            explanationHy: "Ինչպե՞ս ճանաչել. Բառը ներկայացնում է ձայն։",
            tag: "Onomatopeya"
          },
          {
            id: "f7-par",
            es: "Paronomasia: Empleo de palabras que tienen sonidos muy parecidos pero significados totalmente diferentes («La brisa trae prisa», «hombre / hambre»).",
            hy: "Պարոնոմազիա (Paronomasia). Նման հնչողությամբ, բայց տարբեր իմաստներով բառերի օգտագործում («La brisa trae prisa» — քամի / շտապողականություն)։",
            explanationHy: "Ինչպե՞ս ճանաչել. Բառերը գրեթե նույնն են արտասանվում, բայց իմաստները տարբեր են։",
            tag: "Paronomasia"
          },
          {
            id: "f7-epa",
            es: "Epanadiplosis: Repetición de una misma palabra al principio y al final de un mismo verso o enunciado («Luz, toda mi vida busca luz», «Verde, todo el campo está verde»).",
            hy: "Էպանադիպլոսիս (Epanadiplosis). Նույն բառի կրկնություն տողի կամ նախադասության սկզբում և վերջում («Luz... Luz»)։",
            explanationHy: "Ինչպե՞ս ճանաչել. Առաջին և վերջին բառը նույնն են։",
            tag: "Epanadiplosis"
          }
        ]
      },
      {
        titleEs: "30. Nivel morfosintáctico — Ձևաշարահյուսական մակարդակ",
        titleHy: "Բառերի դասավորություն, կրկնություն, բացթողում և շաղկապներ",
        items: [
          {
            id: "f7-hip",
            es: "Hipérbaton: Alteración del orden habitual de las palabras en una oración para destacar una idea («De verdes hojas se viste el árbol» en vez de «El árbol se viste de verdes hojas»).",
            hy: "Հիպերբատոն (Hipérbaton). Նախադասության բառերի սովորական շարադասության փոփոխություն՝ խոսքն ավելի արտահայտիչ դարձնելու համար։",
            explanationHy: "Ինչպե՞ս ճանաչել. Բառերը դասավորված են անսովոր հերթականությամբ։",
            tag: "Hipérbaton"
          },
          {
            id: "f7-ana",
            es: "Anáfora: Repetición de una o varias palabras al comienzo de varios versos o frases consecutivas («Quiero aprender. Quiero descubrir. Quiero conocer»).",
            hy: "Անաֆորա (Anáfora). Նույն բառի կամ բառախմբի կրկնություն մի քանի հաջորդական տողերի կամ նախադասությունների սկզբում։",
            explanationHy: "Տարբերությունը էպանադիպլոսիսից՝ անաֆորան մի քանի տողերի սկզբում է, իսկ էպանադիպլոսիսը՝ մեկ տողի սկզբում և վերջում։",
            tag: "Anáfora"
          },
          {
            id: "f7-asi",
            es: "Asíndeton: Eliminación intencionada de conjunciones entre palabras para dar rapidez y dinamismo («Corre, salta, juega, ríe»).",
            hy: "Ասինդետոն (Asíndeton). Շաղկապների դիտավորյալ բացթողում՝ խոսքին արագություն և դինամիկա տալու համար (առանց «y»-ի)։",
            tag: "Asíndeton"
          },
          {
            id: "f7-pol",
            es: "Polisíndeton: Repetición intencionada de conjunciones para dar énfasis, lentitud o intensidad («Y canta y ríe y salta y baila»).",
            hy: "Պոլիսինդետոն (Polisíndeton). Շաղկապների դիտավորյալ կրկնություն՝ միտքն ընդգծելու կամ հատուկ ռիթմ ստեղծելու համար («և՛... Եվ՛... Եվ՛...»)։",
            tag: "Polisíndeton"
          },
          {
            id: "f7-enu",
            es: "Enumeración: Sucesión ordenada de varios elementos relacionados («En mi mochila tengo libros, lápices, cuadernos y una botella»).",
            hy: "Թվարկում (Enumeración). Միևնույն խմբին պատկանող մի քանի իրերի, գործողությունների կամ հատկանիշների ցուցակ։",
            tag: "Enumeración"
          },
          {
            id: "f7-ple",
            es: "Pleonasmo: Empleo de palabras aparentemente innecesarias que refuerzan una idea («Lo vi con mis propios ojos», «Lo escuché con mis propios oídos»).",
            hy: "Պլեոնազմ (Pleonasmo). Իմաստով ավելորդ բառերի օգտագործում՝ միտքն ուժեղացնելու կամ շեշտելու համար («Տեսա իմ սեփական աչքերով»)։",
            tag: "Pleonasmo"
          }
        ]
      },
      {
        titleEs: "31. Nivel semántico — Իմաստային մակարդակ",
        titleHy: "Փոխաբերություն (Metáfora՝ 3 ձևերով), Անձնավորում, Հիպերբոլ, Անտիթեզ",
        items: [
          {
            id: "f7-meta",
            es: "Metáfora: Identificación de un término real (A) con otro término figurado (B) porque existe alguna semejanza entre ellos.",
            hy: "Փոխաբերություն (Metáfora). Իրական տարրի (A) նույնացումն է փոխաբերական տարրի (B) հետ՝ դրանց նմանության հիման վրա (առանց «como»-ի)։",
            tag: "Metáfora"
          },
          {
            id: "f7-f1",
            es: "Forma 1: A es B — Aparecen los dos términos: «Tus ojos (A) son estrellas (B)».",
            hy: "Ձև 1. A es B — Նշվում են երկու տարրերն էլ՝ «Քո աչքերը (A) աստղեր են (B)»։",
            tag: "Forma A es B"
          },
          {
            id: "f7-f2",
            es: "Forma 2: B — Aparece solo el término figurado: «Dos luceros (B) me miraban» (luceros = ojos).",
            hy: "Ձև 2. B — Նշվում է միայն փոխաբերական տարրը՝ «Երկու լուսատուներ (B) նայում էին ինձ» (հասկացվում է՝ աչքեր)։",
            tag: "Forma B"
          },
          {
            id: "f7-f3",
            es: "Forma 3: B de A — Término figurado unido al real con «de»: «El oro (B) de su pelo (A)».",
            hy: "Ձև 3. B de A — Փոխաբերական տարրը միացված է իրականին «de»-ով՝ «Նրա մազերի (A) ոսկին (B)»։",
            tag: "Forma B de A"
          },
          {
            id: "f7-pers",
            es: "Personificación: Atribuir cualidades o acciones humanas a animales, objetos o ideas («El viento susurra entre los árboles»).",
            hy: "Անձնավորում (Personificación). Մարդկային հատկություններ կամ գործողություններ վերագրել կենդանիներին, իրերին կամ բնությանը («Քամին շշնջում է ծառերի միջով»)։",
            tag: "Personificación"
          },
          {
            id: "f7-hipe",
            es: "Hipérbole: Exageración desmesurada de una realidad para intensificar la expresión («Te he llamado mil veces»).",
            hy: "Հիպերբոլ (Hipérbole). Իրականության չափազանցում՝ ազդեցությունն ուժեղացնելու համար («Քեզ հազար անգամ զանգել եմ»)։",
            tag: "Hipérbole"
          },
          {
            id: "f7-anti",
            es: "Antítesis: Contraposición de palabras o ideas de significados opuestos («De día río, de noche lloro»).",
            hy: "Անտիթեզ (Antítesis). Հակադիր իմաստ ունեցող բառերի կամ մտքերի հակադրում («Ցերեկը ծիծաղում եմ, գիշերը լացում»)։",
            tag: "Antítesis"
          }
        ]
      }
    ]
  }
];

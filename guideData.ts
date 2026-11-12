export interface InteractiveItem {
  id: string;
  es: string;
  hy: string;
  explanationHy?: string;
  notes?: string;
  type?: 'definition' | 'example' | 'rule' | 'dialogue' | 'qa' | 'term';
}

export interface TableRowData {
  col1: { es: string; hy: string };
  col2: { es: string; hy: string };
  col3?: { es: string; hy: string };
}

export interface SectionContent {
  id: string;
  titleEs: string;
  titleHy: string;
  badge: string;
  summaryHy: string;
  items: InteractiveItem[];
  subsections?: {
    id: string;
    titleEs: string;
    titleHy: string;
    descEs?: string;
    descHy?: string;
    items: InteractiveItem[];
    table?: {
      headers: { es: string; hy: string }[];
      rows: TableRowData[];
    };
  }[];
}

export interface ExamQuestion {
  id: number;
  category: string;
  questionHy: string;
  questionEs: string;
  answerEs: string;
  answerHy: string;
  explanationHy?: string;
}

export interface MiniQuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: { es: string; hy: string }[];
  correctIndex: number;
  explanationEs: string;
  explanationHy: string;
}

export interface VocabularyWord {
  id: string;
  wordEs: string;
  wordHy: string;
  explanationEs: string;
  explanationHy: string;
  exampleEs?: string;
  exampleHy?: string;
}

export interface GrammarTip {
  expressionEs: string;
  expressionHy: string;
  ruleEs: string;
  ruleHy: string;
}

export interface FigureDistinction {
  figure: string;
  figureHy: string;
  claveEs: string;
  claveHy: string;
  ejemploEs: string;
  ejemploHy: string;
}

export interface RecognitionCard {
  id: number;
  textEs: string;
  textHy: string;
  figureEs: string;
  figureHy: string;
  explanationHy: string;
  level: 'Fónico' | 'Morfosintáctico' | 'Semántico';
}

// -------------------------------------------------------------
// 12 Recognition exercises from Parte 8 / 32
// -------------------------------------------------------------
export const RECOGNITION_CARDS: RecognitionCard[] = [
  {
    id: 1,
    textEs: "Sofía susurra suavemente.",
    textHy: "Սոֆիան մեղմ շշնջում է։",
    figureEs: "Aliteración",
    figureHy: "Ալիտերացիա (հնչյունների կրկնություն)",
    explanationHy: "Կրկնվում է «s» հնչյունը բառերի սկզբում և մեջտեղում՝ ստեղծելով շշնջոցի տպավորություն։",
    level: "Fónico"
  },
  {
    id: 2,
    textEs: "Tic, tac, tic, tac hacía el viejo reloj.",
    textHy: "Տիկ-տակ, տիկ-տակ էր անում հին ժամացույցը։",
    figureEs: "Onomatopeya",
    figureHy: "Ձայնանմանություն",
    explanationHy: "«Tic, tac» բառերն ընդօրինակում են ժամացույցի մեխանիզմի իրական ձայնը։",
    level: "Fónico"
  },
  {
    id: 3,
    textEs: "La brisa trae prisa.",
    textHy: "Մեղմ քամին բերում է շտապողականություն։",
    figureEs: "Paronomasia",
    figureHy: "Պարոնոմազիա (նմանահունչ բառեր)",
    explanationHy: "«Brisa» և «prisa» բառերը նման են հնչում, բայց ունեն բոլորովին տարբեր իմաստներ։",
    level: "Fónico"
  },
  {
    id: 4,
    textEs: "Luz, toda mi vida busca luz.",
    textHy: "Լույս, իմ ամբողջ կյանքը փնտրում է լույս։",
    figureEs: "Epanadiplosis",
    figureHy: "Էպանադիպլոսիս (կրկնություն սկզբում և վերջում)",
    explanationHy: "Նույն «luz» բառը կրկնվում է տողի / նախադասության սկզբում և վերջում։",
    level: "Fónico"
  },
  {
    id: 5,
    textEs: "De verdes hojas se viste el árbol.",
    textHy: "Կանաչ տերևներով է հագնվում ծառը։",
    figureEs: "Hipérbaton",
    figureHy: "Հիպերբատոն (շրջադասություն)",
    explanationHy: "Սովորական շարադասությունը կլիներ «El árbol se viste de verdes hojas»։ Բառերի դասավորությունը դիտավորյալ փոխված է։",
    level: "Morfosintáctico"
  },
  {
    id: 6,
    textEs: "Quiero aprender. Quiero descubrir. Quiero conocer el mundo.",
    textHy: "Ուզում եմ սովորել։ Ուզում եմ բացահայտել։ Ուզում եմ ճանաչել աշխարհը։",
    figureEs: "Anáfora",
    figureHy: "Անաֆորա (նույն բառերի կրկնություն սկզբում)",
    explanationHy: "Բոլոր նախադասությունները սկսվում են նույն «Quiero» բառով։",
    level: "Morfosintáctico"
  },
  {
    id: 7,
    textEs: "Corre, salta, juega, ríe.",
    textHy: "Վազում է, ցատկում է, խաղում է, ծիծաղում է։",
    figureEs: "Asíndeton",
    figureHy: "Ասինդետոն (շաղկապների բացթողում)",
    explanationHy: "Բայերը թվարկված են առանց շաղկապների (առանց «y»-ի)՝ տալով արագ և դինամիկ ռիթմ։",
    level: "Morfosintáctico"
  },
  {
    id: 8,
    textEs: "Y canta y ríe y salta y baila.",
    textHy: "Եվ երգում է, և ծիծաղում է, և ցատկում է, և պարում է։",
    figureEs: "Polisíndeton",
    figureHy: "Պոլիսինդետոն (շաղկապների կրկնություն)",
    explanationHy: "«Y» շաղկապը կրկնվում է մի քանի անգամ՝ տալով հատուկ շեշտադրում և արտահայտչականություն։",
    level: "Morfosintáctico"
  },
  {
    id: 9,
    textEs: "En mi mochila tengo libros, lápices, cuadernos y una botella.",
    textHy: "Իմ պայուսակում ունեմ գրքեր, մատիտներ, տետրեր և շիշ։",
    figureEs: "Enumeración",
    figureHy: "Թվարկում",
    explanationHy: "Միևնույն խմբի տարրերի հաջորդական թվարկում։",
    level: "Morfosintáctico"
  },
  {
    id: 10,
    textEs: "Lo vi con mis propios ojos.",
    textHy: "Ես դա տեսա իմ սեփական աչքերով։",
    figureEs: "Pleonasmo",
    figureHy: "Պլեոնազմ (իմաստային ավելորդ կրկնություն)",
    explanationHy: "«Տեսնել» բայն արդեն աչքերով է լինում. «con mis propios ojos» արտահայտությունն ավելացված է միտքն ուժեղացնելու համար։",
    level: "Morfosintáctico"
  },
  {
    id: 11,
    textEs: "Tus ojos son dos estrellas brillantes.",
    textHy: "Քո աչքերը երկու փայլուն աստղեր են։",
    figureEs: "Metáfora (A es B)",
    figureHy: "Փոխաբերություն (A es B)",
    explanationHy: "Աչքերը (A) ուղղակիորեն նույնացվում են աստղերի (B) հետ՝ առանց «como» բառի։",
    level: "Semántico"
  },
  {
    id: 12,
    textEs: "El viento cantaba melancólico entre las ramas de los viejos árboles.",
    textHy: "Քամին թախծոտ երգում էր ծեր ծառերի ճյուղերի միջով։",
    figureEs: "Personificación",
    figureHy: "Անձնավորում",
    explanationHy: "Քամուն վերագրվում է մարդկային հատկանիշ և գործողություն՝ «երգել» և «թախծոտ լինել»։",
    level: "Semántico"
  }
];

// -------------------------------------------------------------
// Distinction table (Parte 8)
// -------------------------------------------------------------
export const FIGURES_DISTINCTION_TABLE: FigureDistinction[] = [
  {
    figure: "Aliteración",
    figureHy: "Ալիտերացիա",
    claveEs: "Repetición frecuente del mismo sonido en palabras cercanas.",
    claveHy: "Նույն հնչյունը հաճախ կրկնվում է իրար մոտ բառերում։",
    ejemploEs: "Susana susurra suavemente.",
    ejemploHy: "Սուսանան մեղմ շշնջում է։"
  },
  {
    figure: "Onomatopeya",
    figureHy: "Ձայնանմանություն",
    claveEs: "Palabras que imitan sonidos reales de seres o cosas.",
    claveHy: "Ընդօրինակում է իրական ձայնը (կենդանիների, առարկաների)։",
    ejemploEs: "Tic, tac; guau, guau; ¡pum!",
    ejemploHy: "Տիկ-տակ, հաֆ-հաֆ, բում։"
  },
  {
    figure: "Paronomasia",
    figureHy: "Պարոնոմազիա",
    claveEs: "Palabras de sonido semejante pero significados distintos.",
    claveHy: "Նման հնչողությամբ, բայց տարբեր իմաստներով բառեր։",
    ejemploEs: "La brisa trae prisa.",
    ejemploHy: "Քամին բերում է շտապողականություն։"
  },
  {
    figure: "Epanadiplosis",
    figureHy: "Էպանադիպլոսիս",
    claveEs: "La misma palabra aparece al principio y al final del verso.",
    claveHy: "Նույն բառը տողի / նախադասության սկզբում և վերջում։",
    ejemploEs: "Luz, toda mi vida busca luz.",
    ejemploHy: "Լույս, իմ ամբողջ կյանքը փնտրում է լույս։"
  },
  {
    figure: "Anáfora",
    figureHy: "Անաֆորա",
    claveEs: "Repetición de palabras al comienzo de varios versos o frases.",
    claveHy: "Նույն բառը մի քանի հաջորդական տողերի սկզբում։",
    ejemploEs: "Quiero cantar. Quiero bailar.",
    ejemploHy: "Ուզում եմ երգել։ Ուզում եմ պարել։"
  },
  {
    figure: "Hipérbaton",
    figureHy: "Հիպերբատոն",
    claveEs: "Alteración intencionada del orden sintáctico habitual.",
    claveHy: "Փոխված, անսովոր բառերի դասավորություն։",
    ejemploEs: "De verdes hojas se viste el árbol.",
    ejemploHy: "Կանաչ տերևներով է զգեստավորվում ծառը։"
  },
  {
    figure: "Asíndeton",
    figureHy: "Ասինդետոն",
    claveEs: "Omisión deliberada de conjunciones.",
    claveHy: "Շաղկապները բացակայում են (առանց «y»-ի)։",
    ejemploEs: "Corre, salta, juega, ríe.",
    ejemploHy: "Վազում է, ցատկում, խաղում, ծիծաղում։"
  },
  {
    figure: "Polisíndeton",
    figureHy: "Պոլիսինդետոն",
    claveEs: "Repetición intencionada de muchas conjunciones.",
    claveHy: "Շաղկապները շատ են կրկնվում (օրինակ՝ «y», «ni»)։",
    ejemploEs: "Y canta y ríe y salta y baila.",
    ejemploHy: "Եվ երգում է, և ծիծաղում, և ցատկում, և պարում։"
  },
  {
    figure: "Enumeración",
    figureHy: "Թվարկում",
    claveEs: "Sucesión de elementos pertenecientes a un mismo conjunto.",
    claveHy: "Մի քանի իրերի, գործողությունների կամ հատկանիշների ցուցակ։",
    ejemploEs: "Tengo libros, lápices, cuadernos...",
    ejemploHy: "Ունեմ գրքեր, մատիտներ, տետրեր..."
  },
  {
    figure: "Pleonasmo",
    figureHy: "Պլեոնազմ",
    claveEs: "Uso de palabras redundantes para dar fuerza o emoción.",
    claveHy: "Իմաստով ավելորդ բառերի օգտագործում՝ միտքն ուժեղացնելու։",
    ejemploEs: "Lo vi con mis propios ojos.",
    ejemploHy: "Տեսա իմ սեփական աչքերով։"
  },
  {
    figure: "Metáfora",
    figureHy: "Փոխաբերություն",
    claveEs: "Identificación de un término real con otro imaginario.",
    claveHy: "Մի տարրը ներկայացվում է որպես մյուսը (առանց como-ի)։",
    ejemploEs: "Tus ojos son estrellas.",
    ejemploHy: "Քո աչքերը աստղեր են։"
  },
  {
    figure: "Personificación",
    figureHy: "Անձնավորում",
    claveEs: "Atribuir cualidades humanas a seres no humanos o cosas.",
    claveHy: "Ոչ մարդկայինին տրվում են մարդկային հատկանիշներ։",
    ejemploEs: "El viento susurra entre los árboles.",
    ejemploHy: "Քամին շշնջում է ծառերի միջով։"
  },
  {
    figure: "Hipérbole",
    figureHy: "Հիպերբոլ (չափազանցություն)",
    claveEs: "Exageración deliberada de una realidad.",
    claveHy: "Իրականության չափազանցում՝ տպավորություն թողնելու համար։",
    ejemploEs: "Te he llamado mil veces.",
    ejemploHy: "Քեզ հազար անգամ զանգել եմ։"
  },
  {
    figure: "Antítesis",
    figureHy: "Անտիթեզ (հակադրություն)",
    claveEs: "Contraposición de palabras o ideas de sentido opuesto.",
    claveHy: "Հակադիր գաղափարների կամ բառերի միավորում։",
    ejemploEs: "De día río, de noche lloro.",
    ejemploHy: "Ցերեկը ծիծաղում եմ, գիշերը լացում։"
  }
];

// -------------------------------------------------------------
// Vocabulary & Grammar Expressions (Parte 9 & Tema 8)
// -------------------------------------------------------------
export const VOCABULARY_LIST: VocabularyWord[] = [
  {
    id: "v1",
    wordEs: "Recuperar",
    wordHy: "Վերականգնել, հետ ստանալ",
    explanationEs: "Volver a obtener o conseguir algo que se había perdido.",
    explanationHy: "Կորցրած բանը նորից ձեռք բերել կամ հետ ստանալ։",
    exampleEs: "La niña recuperó su mochila en la policía.",
    exampleHy: "Աղջիկը ոստիկանությունում հետ ստացավ իր պայուսակը։"
  },
  {
    id: "v2",
    wordEs: "Comprender",
    wordHy: "Հասկանալ, ըմբռնել",
    explanationEs: "Entender el significado de algo con claridad.",
    explanationHy: "Որևէ բանի իմաստը հստակ հասկանալը։",
    exampleEs: "Es importante comprender las reglas de la métrica.",
    exampleHy: "Կարևոր է հասկանալ տաղաչափության կանոնները։"
  },
  {
    id: "v3",
    wordEs: "Haber / Hay",
    wordHy: "Լինել / Կա, կան",
    explanationEs: "Verbo impersonal para indicar existencia de personas o cosas.",
    explanationHy: "Գոյություն արտահայտող անդեմ բայ («կա», «կան»)։",
    exampleEs: "En el escenario hay una mesa y dos sillas.",
    exampleHy: "Բեմի վրա կա մեկ սեղան և երկու աթոռ։"
  },
  {
    id: "v4",
    wordEs: "Protagonista",
    wordHy: "Գլխավոր հերոս",
    explanationEs: "Personaje principal de una obra literaria o teatral.",
    explanationHy: "Գրական կամ թատերական ստեղծագործության գլխավոր գործող անձը։",
    exampleEs: "Pablo es el protagonista del relato.",
    exampleHy: "Պաբլոն պատմության գլխավոր հերոսն է։"
  },
  {
    id: "v5",
    wordEs: "Distraer",
    wordHy: "Շեղել, զվարճացնել",
    explanationEs: "Desviar la atención de alguien o apartarlo de una preocupación.",
    explanationHy: "Ուշադրությունը շեղել կամ զվարճացնել։",
    exampleEs: "La música sirve para distraer al público.",
    exampleHy: "Երաժշտությունը ծառայում է հանդիսատեսին զվարճացնելու համար։"
  },
  {
    id: "v6",
    wordEs: "Un favor",
    wordHy: "Լավություն, ծառայություն",
    explanationEs: "Ayuda o servicio que se concede a otra persona con amabilidad.",
    explanationHy: "Մեկ այլ մարդու մատուցված բարյացակամ օգնություն կամ ծառայություն։",
    exampleEs: "¿Puedes hacerme un favor?",
    exampleHy: "Կարո՞ղ ես ինձ մի լավություն անել։"
  },
  {
    id: "v7",
    wordEs: "Un yate",
    wordHy: "Զբոսանավ (յախտա)",
    explanationEs: "Embarcación de recreo o lujo para navegar.",
    explanationHy: "Հանգստի կամ շքեղության նավակ ծովում նավարկելու համար։",
    exampleEs: "El caballero navegaba en un yate blanco.",
    exampleHy: "Ասպետը նավարկում էր սպիտակ զբոսանավով։"
  },
  {
    id: "v8",
    wordEs: "Aparte",
    wordHy: "Առանձին, մի կողմ. Թատրոնում՝ խոսք հանդիսատեսին",
    explanationEs: "Palabras que dice un personaje para el público y que los demás no oyen.",
    explanationHy: "Հերոսի խոսքը, որը լսում է հանդիսատեսը, բայց բեմի մյուսները՝ ոչ։",
    exampleEs: "Laura (aparte): En realidad estoy muy preocupada.",
    exampleHy: "Լաուրա (մի կողմ՝ հանդիսատեսին). Իրականում շատ անհանգստացած եմ։"
  },
  {
    id: "v9",
    wordEs: "Dar consejos",
    wordHy: "Խորհուրդներ տալ",
    explanationEs: "Recomendar a alguien lo que debe hacer en una situación.",
    explanationHy: "Ինչ-որ մեկին խորհուրդ տալ, թե ինչպես վարվել։",
    exampleEs: "El profesor sabe dar consejos útiles.",
    exampleHy: "Ուսուցիչը գիտի օգտակար խորհուրդներ տալ։"
  },
  {
    id: "v10",
    wordEs: "Cancelar",
    wordHy: "Չեղարկել",
    explanationEs: "Anular un compromiso, reunión o actividad prevista.",
    explanationHy: "Նախատեսված պայմանավորվածությունը կամ միջոցառումը չեղյալ հայտարարել։",
    exampleEs: "Tuvieron que cancelar la representación por la lluvia.",
    exampleHy: "Ստիպված եղան անձրևի պատճառով չեղարկել ներկայացումը։"
  },
  {
    id: "v11",
    wordEs: "Narración",
    wordHy: "Պատմում, շարադրանք",
    explanationEs: "Relato ordenado de hechos reales o ficticios.",
    explanationHy: "Իրական կամ հորինված դեպքերի հաջորդական պատմում։",
    exampleEs: "El cuento es una narración breve.",
    exampleHy: "Պատմվածքը կարճ պատմողական ստեղծագործություն է։"
  },
  {
    id: "v12",
    wordEs: "Ficticio / Ficticia",
    wordHy: "Հորինված, երևակայական",
    explanationEs: "Inventado por la imaginación, no real.",
    explanationHy: "Երևակայությամբ ստեղծված, ոչ իրական։",
    exampleEs: "Los personajes del cuento son ficticios.",
    exampleHy: "Պատմվածքի հերոսները հորինված են։"
  },
  {
    id: "v13",
    wordEs: "Argumento",
    wordHy: "Սյուժե",
    explanationEs: "Conjunto de acontecimientos principales que forman la historia.",
    explanationHy: "Պատմության հիմնական իրադարձությունների ամբողջությունը։",
    exampleEs: "El argumento del cuento es sencillo y claro.",
    exampleHy: "Պատմվածքի սյուժեն պարզ է և հստակ։"
  },
  {
    id: "v14",
    wordEs: "Autoría",
    wordHy: "Հեղինակություն, հեղինակի ով լինելը",
    explanationEs: "Condición de ser autor de una obra literaria o artística.",
    explanationHy: "Ստեղծագործության հեղինակ լինելու փաստը։",
    exampleEs: "En la literatura popular no se conoce la autoría.",
    exampleHy: "Ժողովրդական գրականության մեջ հեղինակությունը հայտնի չէ։"
  },
  {
    id: "v15",
    wordEs: "Receptor",
    wordHy: "Հաղորդագրություն ստացող, ունկնդիր",
    explanationEs: "Persona o público que recibe e interpreta un mensaje u obra.",
    explanationHy: "Մարդը կամ հանդիսատեսը, ով ստանում է հաղորդագրությունը։",
    exampleEs: "¡Oíd bien! es una llamada de atención al receptor.",
    exampleHy: "«Լսե՛ք ուշադիր»-ը ունկնդրի ուշադրությունը գրավելու միջոց է։"
  },
  {
    id: "v16",
    wordEs: "Oralmente",
    wordHy: "Բանավոր կերպով",
    explanationEs: "Mediante la voz y la palabra hablada, no por escrito.",
    explanationHy: "Խոսքի և ձայնի միջոցով, ոչ թե գրավոր։",
    exampleEs: "Los mitos se transmitían oralmente.",
    exampleHy: "Առասպելները փոխանցվում էին բանավոր։"
  },
  {
    id: "v17",
    wordEs: "Generación",
    wordHy: "Սերունդ",
    explanationEs: "Conjunto de personas nacidas en una misma época.",
    explanationHy: "Միևնույն ժամանակաշրջանում ծնված մարդկանց ամբողջությունը։",
    exampleEs: "Las leyendas pasan de generación en generación.",
    exampleHy: "Ավանդապատումները փոխանցվում են սերնդեսերունդ։"
  },
  {
    id: "v18",
    wordEs: "Modificación",
    wordHy: "Փոփոխություն",
    explanationEs: "Cambio o variación que experimenta una obra al transmitirse.",
    explanationHy: "Ստեղծագործության մեջ կատարված որևէ փոփոխություն։",
    exampleEs: "La literatura popular puede sufrir modificaciones.",
    exampleHy: "Ժողովրդական գրականությունը կարող է փոփոխություններ կրել։"
  },
  {
    id: "v19",
    wordEs: "Rima",
    wordHy: "Հանգ",
    explanationEs: "Repetición de sonidos al final de dos o más versos.",
    explanationHy: "Բանաստեղծական տողերի վերջում հնչյունների կրկնությունը։",
    exampleEs: "El romance tiene rima asonante en los pares.",
    exampleHy: "Ռոմանսն ունի ձայնավորային հանգ զույգ տողերում։"
  },
  {
    id: "v20",
    wordEs: "Verso",
    wordHy: "Բանաստեղծական տող",
    explanationEs: "Cada una de las líneas que componen un poema.",
    explanationHy: "Բանաստեղծության յուրաքանչյուր առանձին տողը։",
    exampleEs: "Un verso octosílabo tiene ocho sílabas métricas.",
    exampleHy: "Ութվանկանի տողն ունի ութ բանաստեղծական վանկ։"
  },
  {
    id: "v21",
    wordEs: "Escenario",
    wordHy: "Բեմ",
    explanationEs: "Espacio del teatro donde los actores representan la obra.",
    explanationHy: "Թատրոնի տարածքը, որտեղ դերասանները ներկայացնում են պիեսը։",
    exampleEs: "Los actores suben al escenario para actuar.",
    exampleHy: "Դերասանները բարձրանում են բեմ՝ խաղալու։"
  },
  {
    id: "v22",
    wordEs: "Atrezo",
    wordHy: "Բեմական պարագաներ (ռեկվիզիտ)",
    explanationEs: "Conjunto de objetos que los actores manejan en escena.",
    explanationHy: "Այն առարկաները, որոնք դերասաններն օգտագործում են բեմում։",
    exampleEs: "El actor utiliza una carta y una taza como atrezo.",
    exampleHy: "Դերասանն օգտագործում է նամակ և բաժակ որպես ռեկվիզիտ։"
  },
  {
    id: "v23",
    wordEs: "Decorado",
    wordHy: "Բեմական դեկորացիա",
    explanationEs: "Conjunto de telones, muebles y estructuras que crean el ambiente.",
    explanationHy: "Տարրեր (պատեր, կահույք, նկարներ), որոնք ստեղծում են վայրը։",
    exampleEs: "El decorado representa un antiguo castillo.",
    exampleHy: "Դեկորացիան ներկայացնում է հին ամրոց։"
  },
  {
    id: "v24",
    wordEs: "Vestuario",
    wordHy: "Բեմական հանդերձանք (կոստյումներ)",
    explanationEs: "Ropa y accesorios que llevan los personajes.",
    explanationHy: "Հերոսների հագուստը և աքսեսուարները ներկայացման ընթացքում։",
    exampleEs: "El vestuario indica la época de los personajes.",
    exampleHy: "Հանդերձանքը ցույց է տալիս հերոսների ապրած դարաշրջանը։"
  }
];

export const GRAMMAR_EXPRESSIONS: GrammarTip[] = [
  {
    expressionEs: "Espero que juguemos bien y que ganemos.",
    expressionHy: "Հուսով եմ՝ լավ կխաղանք և կհաղթենք։",
    ruleEs: "Después de «espero que», cuando expresamos un deseo sobre una acción futura, utilizamos el presente de subjuntivo (juguemos, ganemos).",
    ruleHy: "«Espero que»-ից հետո ապագա ցանկություն արտահայտելիս պարտադիր օգտագործվում է ներկա ենթադրական եղանակը՝ Presente de Subjuntivo (juguemos, ganemos)։"
  },
  {
    expressionEs: "Lo mejor es hablar directamente con ella.",
    expressionHy: "Ամենալավը նրա հետ անմիջապես խոսելն է։",
    ruleEs: "Después de «lo mejor es», cuando se formula una recomendación general sin sujeto específico, se utiliza el infinitivo (hablar).",
    ruleHy: "«Lo mejor es»-ից հետո ընդհանուր խորհուրդ տալիս գործածվում է անորոշ դերբայը՝ Infinitivo (hablar)։"
  },
  {
    expressionEs: "Es mejor que hables con ella.",
    expressionHy: "Ավելի լավ է, որ նրա հետ խոսես։",
    ruleEs: "Después de «es mejor que», cuando se dirige la recomendación a una persona concreta, se utiliza el subjuntivo (hables).",
    ruleHy: "«Es mejor que»-ից հետո, երբ խորհուրդն ուղղված է կոնկրետ անձի (tú), օգտագործվում է ենթադրական եղանակը՝ Subjuntivo (hables)։"
  },
  {
    expressionEs: "Yo que tú, hablaría con ella.",
    expressionHy: "Ես քո փոխարեն նրա հետ կխոսեի։",
    ruleEs: "La estructura «yo que tú» sirve para dar consejos empáticos y suele ir seguida del condicional simple (hablaría).",
    ruleHy: "«Yo que tú» կառույցն օգտագործվում է կարեկցական խորհուրդ տալու համար և ուղեկցվում է պայմանական եղանակով՝ Condicional Simple (hablaría)։"
  },
  {
    expressionEs: "¿Puedes hacerme un favor?",
    expressionHy: "Կարո՞ղ ես ինձ մի լավություն անել։",
    ruleEs: "Fórmula de cortesía muy habitual para solicitar ayuda amablemente utilizando el verbo poder en presente.",
    ruleHy: "Քաղաքավարի դիմելաձև ինչ-որ մեկից օգնություն կամ լավություն խնդրելու համար՝ «poder» բայի միջոցով։"
  }
];

// -------------------------------------------------------------
// 30 Comprehensive Exam Questions (Parte 10 & Tema 9)
// -------------------------------------------------------------
export const EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    category: "Literatura y géneros",
    questionHy: "Որո՞նք են գրականության երեք հիմնական ժանրերը։",
    questionEs: "¿Cuáles son los tres grandes géneros literarios?",
    answerEs: "Los tres grandes géneros literarios son la lírica, la narrativa y el teatro.",
    answerHy: "Գրականության երեք հիմնական ժանրերն են քնարերգությունը, պատմողական գրականությունը և թատրոնը։",
    explanationHy: "Քննության ժամանակ անպայման թվարկիր այս երեքը՝ lírica, narrativa, teatro։"
  },
  {
    id: 2,
    category: "Literatura y géneros",
    questionHy: "Ի՞նչ է քնարերգությունը։",
    questionEs: "¿Qué es la lírica?",
    answerEs: "La lírica es un género literario en el que el autor expresa sus sentimientos, emociones y pensamientos de manera subjetiva.",
    answerHy: "Քնարերգությունը գրական ժանր է, որում հեղինակը սուբյեկտիվ ձևով արտահայտում է իր զգացմունքները, հույզերն ու մտքերը։",
    explanationHy: "Հիմնական բանալի բառերն են՝ sentimientos, emociones, subjetiva, verso։"
  },
  {
    id: 3,
    category: "Literatura y géneros",
    questionHy: "Ի՞նչ է պատմողական գրականությունը։",
    questionEs: "¿Qué es la narrativa?",
    answerEs: "La narrativa es el género literario en el que un narrador cuenta una historia real o ficticia protagonizada por unos personajes en un tiempo y un lugar determinados.",
    answerHy: "Պատմողական գրականությունը ժանր է, որտեղ պատմողը ներկայացնում է իրական կամ հորինված իրադարձություններ՝ հերոսների, ժամանակի և վայրի մասնակցությամբ։",
    explanationHy: "Բանալի բառեր՝ narrador, cuenta una historia, personajes, tiempo, lugar/espacio։"
  },
  {
    id: 4,
    category: "Literatura y géneros",
    questionHy: "Ո՞րն է պատմողի դերը։",
    questionEs: "¿Cuál es la función del narrador?",
    answerEs: "La función del narrador es contar los acontecimientos que forman la historia.",
    answerHy: "Պատմողի գործառույթը պատմությունը կազմող իրադարձությունները ներկայացնելն է։",
    explanationHy: "Հիշիր՝ պատմողը (narrador) և հեղինակը (autor) նույն անձը չեն։"
  },
  {
    id: 5,
    category: "Literatura y géneros",
    questionHy: "Ի՞նչ տարբերություն կա առաջին և երրորդ դեմքով պատմողի միջև։",
    questionEs: "¿Qué diferencia hay entre un narrador en primera y en tercera persona?",
    answerEs: "El narrador en primera persona cuenta los hechos desde el «yo» y participa en la historia como protagonista o testigo, mientras que el de tercera persona cuenta los hechos de otros utilizando «él» o «ellos».",
    answerHy: "Առաջին դեմքով պատմողը խոսում է «ես»-ի անունից և մասնակցում է դեպքերին, իսկ երրորդ դեմքով պատմողը պատմում է ուրիշների մասին («նա», «նրանք»)։",
    explanationHy: "Առաջին դեմք՝ yo / nosotros. Երրորդ դեմք՝ él / ella / ellos, ներառյալ omnisciente (ամենագետ)։"
  },
  {
    id: 6,
    category: "Lenguaje literario",
    questionHy: "Ի՞նչ է գեղարվեստական լեզուն։",
    questionEs: "¿Qué es el lenguaje literario?",
    answerEs: "El lenguaje literario es una forma especial de utilizar la lengua con una finalidad estética y expresiva, buscando crear belleza y transmitir emociones.",
    answerHy: "Գեղարվեստական լեզուն լեզվի կիրառման ձև է՝ գեղագիտական և արտահայտչական նպատակով՝ գեղեցկություն ստեղծելու և հույզեր փոխանցելու համար։",
    explanationHy: "Կարևոր է նշել՝ «finalidad estética y expresiva»։"
  },
  {
    id: 7,
    category: "Lenguaje literario",
    questionHy: "Ի՞նչ տարբերություն կա արձակի և չափածոյի միջև։",
    questionEs: "¿Cuál es la diferencia entre prosa y verso?",
    answerEs: "El verso se organiza en líneas poéticas con ritmo y posible rima, mientras que la prosa se organiza en oraciones y párrafos sin métrica fija.",
    answerHy: "Չափածոն կազմված է բանաստեղծական տողերից (ռիթմ, հանգ, չափ), իսկ արձակը կազմված է նախադասություններից և պարբերություններից։",
    explanationHy: "Verso = líneas poéticas; Prosa = oraciones y párrafos."
  },
  {
    id: 8,
    category: "Popular y culta",
    questionHy: "Ի՞նչ է ժողովրդական գրականությունը։",
    questionEs: "¿Qué es la literatura popular?",
    answerEs: "Es el conjunto de obras literarias que pertenecen a la tradición de un pueblo, generalmente de autor anónimo y transmitidas oralmente de generación en generación.",
    answerHy: "Ժողովրդի ավանդությանը պատկանող գրականությունն է՝ սովորաբար անանուն հեղինակով և սերնդեսերունդ բանավոր փոխանցվող։",
    explanationHy: "Հիշիր բանալի երեք բառը՝ anónima, oral, tradicional."
  },
  {
    id: 9,
    category: "Popular y culta",
    questionHy: "Ինչո՞ւ են ժողովրդական ստեղծագործությունները հաճախ անանուն։",
    questionEs: "¿Por qué muchas obras populares son anónimas?",
    answerEs: "Porque se han transmitido durante siglos de memoria y no se conoce o se ha olvidado el nombre de su creador original.",
    answerHy: "Քանի որ դրանք դարեր շարունակ փոխանցվել են հիշողությամբ, և սկզբնական հեղինակի անունը մոռացվել է կամ հայտնի չէ։",
    explanationHy: "Տեքստը դառնում է համայնքի և ժողովրդի սեփականությունը։"
  },
  {
    id: 10,
    category: "Popular y culta",
    questionHy: "Ինչո՞ւ կարող են ժողովրդական ստեղծագործությունները փոփոխվել։",
    questionEs: "¿Por qué puede modificarse la literatura popular?",
    answerEs: "Porque al transmitirse de boca en boca de generación en generación, cada persona puede cambiar palabras, añadir detalles o crear una versión diferente.",
    answerHy: "Քանի որ բերանացի փոխանցվելիս յուրաքանչյուր պատմող կարող է փոխել բառեր, ավելացնել մանրամասներ կամ ստեղծել նոր տարբերակ։",
    explanationHy: "Բանավոր փոխանցումը (transmisión oral) բերում է տարբերակների (distintas versiones)։"
  },
  {
    id: 11,
    category: "Popular y culta",
    questionHy: "Ի՞նչ է հեղինակային գրականությունը։",
    questionEs: "¿Qué es la literatura culta?",
    answerEs: "Es la literatura creada por un autor conocido, transmitida principalmente por escrito y caracterizada por un lenguaje elaborado.",
    answerHy: "Հայտնի հեղինակի կողմից ստեղծված, հիմնականում գրավոր փոխանցվող և մշակված լեզվով առանձնացող գրականությունն է։",
    explanationHy: "Autor conocido + transmisión escrita + lenguaje elaborado."
  },
  {
    id: 12,
    category: "Popular y culta",
    questionHy: "Ո՞րն է ժողովրդական և հեղինակային գրականության հիմնական տարբերությունը։",
    questionEs: "¿Cuál es la principal diferencia entre la literatura popular y la culta?",
    answerEs: "La popular suele ser anónima, oral y variable, mientras que la culta tiene un autor conocido, se conserva por escrito y mantiene un texto fijo.",
    answerHy: "Ժողովրդականը սովորաբար անանուն է, բանավոր և փոփոխվող, իսկ հեղինակայինն ունի հայտնի հեղինակ, գրավոր է և պահպանում է հաստատուն տեքստ։",
    explanationHy: "Համեմատության հիանալի պատասխան քննության համար։"
  },
  {
    id: 13,
    category: "Cuento, mito y leyenda",
    questionHy: "Ի՞նչ է կարճ պատմվածքը / հեքիաթը։",
    questionEs: "¿Qué es un cuento?",
    answerEs: "Es una narración breve, generalmente ficticia, escrita normalmente en prosa, con pocos personajes y un argumento sencillo.",
    answerHy: "Կարճ, սովորաբար հորինված, արձակ պատմություն է՝ քիչ հերոսներով և պարզ սյուժեով։",
    explanationHy: "Ունի 3 մաս՝ planteamiento, nudo, desenlace։"
  },
  {
    id: 14,
    category: "Cuento, mito y leyenda",
    questionHy: "Ի՞նչ է ավանդապատումը։",
    questionEs: "¿Qué es una leyenda?",
    answerEs: "Es un relato tradicional que suele basarse en hechos, personas o lugares reales, pero que incorpora elementos fantásticos o sobrenaturales.",
    answerHy: "Ավանդական պատմություն է, որը հիմնվում է իրական վայրերի կամ դեպքերի վրա, բայց պարունակում է ֆանտաստիկ կամ գերբնական տարրեր։",
    explanationHy: "Օրինակ՝ լքված ամրոցում սպիտակ հագուստով հայտնվող արքայադստեր ուրվականը։"
  },
  {
    id: 15,
    category: "Cuento, mito y leyenda",
    questionHy: "Ի՞նչ է առասպելը։",
    questionEs: "¿Qué es un mito?",
    answerEs: "Es una narración tradicional protagonizada por dioses, héroes o seres sobrenaturales que intenta explicar el origen del mundo o de fenómenos naturales.",
    answerHy: "Ավանդական պատմություն է աստվածների կամ դյուցազունների մասին, որը բացատրում է աշխարհի կամ բնության երևույթների ծագումը։",
    explanationHy: "Հիմնական նպատակը՝ «explicar el origen del mundo o de la naturaleza»։"
  },
  {
    id: 16,
    category: "Romance y métrica",
    questionHy: "Ի՞նչ է ռոմանսը։",
    questionEs: "¿Qué es un romance?",
    answerEs: "Es una composición poética de un número indefinido de versos octosílabos, con rima asonante en los versos pares y versos impares sueltos (8−, 8a, 8−, 8a...).",
    answerHy: "Բանաստեղծական ստեղծագործություն է՝ անորոշ քանակի ութվանկանի տողերով, զույգ տողերում ձայնավորային հանգով և կենտ տողերում առանց հանգի։",
    explanationHy: "Անգիր սովորելու կարևորագույն սահմանումը։"
  },
  {
    id: 17,
    category: "Romance y métrica",
    questionHy: "Ի՞նչ է նշանակում octosílabo։",
    questionEs: "¿Qué significa octosílabo?",
    answerEs: "Significa que el verso tiene ocho sílabas métricas.",
    answerHy: "Նշանակում է, որ տողն ունի ութ բանաստեղծական վանկ։",
    explanationHy: "Ուշադրություն. Բանաստեղծական վանկերը կարող են տարբերվել քերականականից։"
  },
  {
    id: 18,
    category: "Romance y métrica",
    questionHy: "Ի՞նչ է ձայնավորային հանգը (rima asonante)։",
    questionEs: "¿Qué es la rima asonante?",
    answerEs: "Es la repetición únicamente de los sonidos vocálicos a partir de la última vocal acentuada de dos o más versos.",
    answerHy: "Վերջին շեշտված ձայնավորից սկսած միայն ձայնավոր հնչյունների համընկնումն է։",
    explanationHy: "Օրինակ՝ dorado և caballo → a-o։ Բաղաձայնները կարող են տարբերվել։"
  },
  {
    id: 19,
    category: "Romance y métrica",
    questionHy: "Ո՞ր տողերն են հանգավորվում ռոմանսում։",
    questionEs: "¿Qué versos riman en un romance?",
    answerEs: "En un romance riman los versos pares (el segundo, el cuarto, el sexto...), mientras que los impares quedan sueltos.",
    answerHy: "Ռոմանսում հանգավորվում են միայն զույգ տողերը (2, 4, 6...), իսկ կենտերը մնում են անհանգ։",
    explanationHy: "Զույգ՝ versos pares. Կենտ՝ versos impares sueltos."
  },
  {
    id: 20,
    category: "Romance y métrica",
    questionHy: "Ի՞նչ է նշանակում 8−։",
    questionEs: "¿Qué significa 8−?",
    answerEs: "Significa que el verso tiene ocho sílabas métricas y es suelto, es decir, que no tiene rima.",
    answerHy: "Նշանակում է, որ տողն ունի 8 բանաստեղծական վանկ և անհանգ է (չի հանգավորվում)։",
    explanationHy: "«8» = վանկաքանակ, «−» = առանց հանգի (suelto)։"
  },
  {
    id: 21,
    category: "Romance y métrica",
    questionHy: "Ի՞նչ է նշանակում 8a։",
    questionEs: "¿Qué significa 8a?",
    answerEs: "Significa que el verso tiene ocho sílabas métricas y comparte la rima asonante «a» con los demás versos pares.",
    answerHy: "Նշանակում է, որ տողն ունի 8 վանկ և պատկանում է զույգ տողերի ձայնավորային «a» հանգային խմբին։",
    explanationHy: "Փոքրատառ «a» է, քանի որ մինչև 8 վանկ արտե մենոր (arte menor) է։"
  },
  {
    id: 22,
    category: "Romance y métrica",
    questionHy: "Ի՞նչ է սինալեֆան (la sinalefa)։",
    questionEs: "¿Qué es la sinalefa?",
    answerEs: "Es la unión métrica en una sola sílaba de la vocal final de una palabra con la vocal inicial de la siguiente (o con 'h' muda).",
    answerHy: "Մի բառի վերջին ձայնավորի և հաջորդ բառի սկզբի ձայնավորի (կամ չարտասանվող h-ի) միավորումն է մեկ բանաստեղծական վանկի մեջ։",
    explanationHy: "Օրինակ՝ «despacio_un» → միավորվում է մեկ վանկի մեջ։"
  },
  {
    id: 23,
    category: "Teatro",
    questionHy: "Ի՞նչ է թատրոնը։",
    questionEs: "¿Qué es el teatro?",
    answerEs: "El teatro es un género literario en el que una historia se presenta ante un público por medio de las acciones y diálogos de los personajes interpretados por actores.",
    answerHy: "Թատրոնը գրական ժանր է, որտեղ պատմությունը ներկայացվում է հանդիսատեսին դերասանների երկխոսությունների և գործողությունների միջոցով։",
    explanationHy: "Սովորաբար պատմող չկա (ausencia habitual de narrador)։"
  },
  {
    id: 24,
    category: "Teatro",
    questionHy: "Ի՞նչ են բեմական ցուցումները (acotaciones)։",
    questionEs: "¿Qué son las acotaciones?",
    answerEs: "Son las indicaciones del dramaturgo que explican los gestos, movimientos, emociones o el decorado. Los actores no las leen en voz alta.",
    answerHy: "Թատերագրի նշումներն են, որոնք բացատրում են շարժումները, ժեստերը, հույզերը կամ միջավայրը։ Դերասանները դրանք բարձրաձայն չեն ասում։",
    explanationHy: "Հաճախ գրվում են փակագծերում՝ (Laura sonríe), (Entra Pablo)։"
  },
  {
    id: 25,
    category: "Teatro",
    questionHy: "Ի՞նչ է երկխոսությունը (el diálogo)։",
    questionEs: "¿Qué es el diálogo?",
    answerEs: "Es una conversación hablada entre dos o más personajes que hace avanzar la acción dramática.",
    answerHy: "Երկու կամ ավելի հերոսների խոսակցությունն է, որի միջոցով առաջ է գնում գործողությունը։",
    explanationHy: "Թատերական տեքստի հիմնական շարժիչ ուժն է։"
  },
  {
    id: 26,
    category: "Teatro",
    questionHy: "Ի՞նչ է մենախոսությունը (el monólogo)։",
    questionEs: "¿Qué es el monólogo?",
    answerEs: "Es una intervención extensa de un solo personaje que expresa en voz alta sus pensamientos o sentimientos sin dialogar con otros.",
    answerHy: "Մեկ հերոսի երկարատև խոսքն է, որի ընթացքում նա բարձրաձայն արտահայտում է իր մտքերը՝ առանց ուրիշի հետ երկխոսելու։",
    explanationHy: "Միայն մեկ գործող անձ է խոսում բեմի վրա։"
  },
  {
    id: 27,
    category: "Teatro",
    questionHy: "Ի՞նչ է բեմական պարագան (el atrezo)։",
    questionEs: "¿Qué es el atrezo?",
    answerEs: "Es el conjunto de objetos móviles que los actores utilizan durante la representación (por ejemplo, una carta, una taza, una espada).",
    answerHy: "Այն շարժական առարկաների ամբողջությունն է, որոնք դերասաններն օգտագործում են բեմում (նամակ, բաժակ, սուր և այլն)։",
    explanationHy: "Մի շփոթիր decorado-ի հետ (դեկորացիան ամբողջ բեմի միջավայրն է, իսկ atrezo-ն՝ առարկաները)։"
  },
  {
    id: 28,
    category: "Figuras literarias",
    questionHy: "Ի՞նչ է anáfora-ն (անաֆորան)։",
    questionEs: "¿Qué es la anáfora?",
    answerEs: "Es la repetición intencionada de una o varias palabras al comienzo de varios versos o frases consecutivas.",
    answerHy: "Մի քանի հաջորդական տողերի կամ նախադասությունների սկզբում նույն բառի կամ բառախմբի դիտավորյալ կրկնությունն է։",
    explanationHy: "Օրինակ՝ «Quiero cantar. Quiero bailar. Quiero vivir.»"
  },
  {
    id: 29,
    category: "Figuras literarias",
    questionHy: "Ի՞նչ է hipérbaton-ը (հիպերբատոնը)։",
    questionEs: "¿Qué es el hipérbaton?",
    answerEs: "Es la alteración voluntaria del orden lógico o habitual de las palabras en una oración para conseguir un efecto poético.",
    answerHy: "Նախադասության մեջ բառերի սովորական կամ տրամաբանական շարադասության դիտավորյալ փոփոխությունն է։",
    explanationHy: "Օրինակ՝ «De verdes hojas se viste el árbol» փոխարեն «El árbol se viste de verdes hojas»։"
  },
  {
    id: 30,
    category: "Figuras literarias",
    questionHy: "Ի՞նչ տարբերություն կա asíndeton-ի և polisíndeton-ի միջև։",
    questionEs: "¿Cuál es la diferencia entre asíndeton y polisíndeton?",
    answerEs: "El asíndeton elimina las conjunciones para dar rapidez («corre, salta, ríe»), mientras que el polisíndeton las repite intencionadamente para dar énfasis («y corre y salta y ríe»).",
    answerHy: "Ասինդետոնը բաց է թողնում շաղկապները՝ տալով արագություն («վազում է, ցատկում, ծիծաղում»), իսկ պոլիսինդետոնը դրանք կրկնում է՝ տալով շեշտադրում («և վազում է, և ցատկում, և ծիծաղում»)։",
    explanationHy: "Asíndeton = sin conjunciones. Polisíndeton = muchas conjunciones repetidas."
  }
];

// -------------------------------------------------------------
// 10 Mini-Examen Questions (Parte 11)
// -------------------------------------------------------------
export const MINI_QUIZ: MiniQuizQuestion[] = [
  {
    id: 1,
    questionEs: "¿Qué género literario expresa principalmente sentimientos?",
    questionHy: "Ո՞ր գրական ժանրն է հիմնականում արտահայտում զգացմունքներ։",
    options: [
      { es: "Teatro", hy: "Թատրոն" },
      { es: "Lírica", hy: "Քնարերգություն" },
      { es: "Narrativa", hy: "Պատմողական" },
      { es: "Leyenda", hy: "Ավանդապատում" }
    ],
    correctIndex: 1,
    explanationEs: "La lírica se define fundamentalmente por la expresión subjetiva de los sentimientos y emociones del autor o voz poética.",
    explanationHy: "Քնարերգությունը բնորոշվում է հեղինակի կամ քնարական հերոսի անձնական զգացմունքների և հույզերի արտահայտմամբ։"
  },
  {
    id: 2,
    questionEs: "¿Cuál es una característica de la literatura popular?",
    questionHy: "Ո՞րն է ժողովրդական գրականության բնորոշ հատկանիշը։",
    options: [
      { es: "Autor siempre conocido", hy: "Հեղինակը միշտ հայտնի է" },
      { es: "Sin cambios nunca", hy: "Երբեք փոփոխություններ չկան" },
      { es: "Transmisión oral", hy: "Բանավոր փոխանցում" },
      { es: "Lenguaje necesariamente científico", hy: "Պարտադիր գիտական լեզու" }
    ],
    correctIndex: 2,
    explanationEs: "La literatura popular se caracteriza por transmitirse oralmente de generación en generación, lo que permite variantes.",
    explanationHy: "Ժողովրդական գրականությունը փոխանցվում է բանավոր՝ սերնդեսերունդ, և սովորաբար անանուն է։"
  },
  {
    id: 3,
    questionEs: "¿Qué relato trata de explicar el origen de un fenómeno natural mediante dioses?",
    questionHy: "Ո՞ր ստեղծագործությունն է փորձում բացատրել բնության երևույթների ծագումը աստվածների միջոցով։",
    options: [
      { es: "Cuento", hy: "Հեքիաթ / Պատմվածք" },
      { es: "Mito", hy: "Առասպել" },
      { es: "Comedia", hy: "Կատակերգություն" },
      { es: "Novela", hy: "Վեպ" }
    ],
    correctIndex: 1,
    explanationEs: "El mito intenta dar explicación a los orígenes del mundo o fenómenos naturales recurriendo a dioses o seres sobrenaturales.",
    explanationHy: "Առասպելն (el mito) է, որ աստվածների և գերբնական ուժերի միջոցով բացատրում է աշխարհի ու բնության երևույթների ծագումը։"
  },
  {
    id: 4,
    questionEs: "¿Cuál es el esquema típico de un romance?",
    questionHy: "Ո՞րն է ռոմանսի բնորոշ չափական սխեման։",
    options: [
      { es: "8a 8b 8a 8b", hy: "8a 8b 8a 8b" },
      { es: "11A 11B 11B 11A", hy: "11A 11B 11B 11A" },
      { es: "8− 8a 8− 8a", hy: "8− 8a 8− 8a" },
      { es: "7a 7a 7b 7b", hy: "7a 7a 7b 7b" }
    ],
    correctIndex: 2,
    explanationEs: "El romance se compone de versos octosílabos donde los pares llevan rima asonante (8a) y los impares quedan sueltos (8−).",
    explanationHy: "Ռոմանսում կենտ տողերն անհանգ են (8−), իսկ զույգ տողերն ունեն նույն ձայնավորային հանգը (8a)։"
  },
  {
    id: 5,
    questionEs: "¿Qué ocurre si un verso termina en palabra aguda?",
    questionHy: "Ի՞նչ է տեղի ունենում, եթե տողի վերջին բառը aguda է (շեշտը վերջին վանկում)։",
    options: [
      { es: "Se resta una sílaba", hy: "Հանվում է մեկ վանկ (-1)" },
      { es: "Se añade una sílaba", hy: "Ավելացվում է մեկ վանկ (+1)" },
      { es: "No cambia", hy: "Չի փոխվում (0)" },
      { es: "Se añaden dos sílabas", hy: "Ավելացվում է երկու վանկ (+2)" }
    ],
    correctIndex: 1,
    explanationEs: "Por la ley del acento final, si la última palabra es aguda, se suma una sílaba métrica (+1).",
    explanationHy: "Տաղաչափական կանոնով՝ եթե վերջին բառը aguda է, վանկերի հաշվին ավելանում է +1 վանկ։"
  },
  {
    id: 6,
    questionEs: "¿Qué tipo de rima tienen «gato» y «mano»?",
    questionHy: "Ի՞նչ տեսակի հանգ ունեն «gato» և «mano» բառերը։",
    options: [
      { es: "Consonante", hy: "Լիակատար (կոնսոնանտ)" },
      { es: "Asonante", hy: "Ձայնավորային (ասոնանտ)" },
      { es: "Ninguna", hy: "Ոչ մի հանգ" },
      { es: "Rima interna obligatoria", hy: "Պարտադիր ներքին հանգ" }
    ],
    correctIndex: 1,
    explanationEs: "Coinciden únicamente las vocales a partir de la última vocal acentuada: g-a-t-o y m-a-n-o comparten a-o. Las consonantes son distintas (t vs n).",
    explanationHy: "Շեշտված վանկից սկսած համընկնում են միայն ձայնավորները՝ a-o (gAto, mAno), իսկ բաղաձայնները տարբեր են (t և n), ուրեմն rima asonante է։"
  },
  {
    id: 7,
    questionEs: "¿Cómo se llaman las indicaciones del autor en una obra teatral?",
    questionHy: "Ինչպե՞ս են կոչվում հեղինակի բեմական ցուցումները թատերական պիեսում։",
    options: [
      { es: "Diálogos", hy: "Երկխոսություններ" },
      { es: "Acotaciones", hy: "Բեմական ցուցումներ (ակոտացիաներ)" },
      { es: "Actos", hy: "Գործողություններ" },
      { es: "Monólogos", hy: "Մենախոսություններ" }
    ],
    correctIndex: 1,
    explanationEs: "Las acotaciones son las indicaciones del dramaturgo sobre gestos, movimientos, tonos de voz y escenografía.",
    explanationHy: "Հեղինակի բեմական ցուցումները կոչվում են acotaciones, որոնք դերասանները բարձրաձայն չեն կարդում։"
  },
  {
    id: 8,
    questionEs: "¿Qué figura aparece en «Y corre y salta y canta»?",
    questionHy: "Ի՞նչ գեղարվեստական միջոց է կիրառված «Y corre y salta y canta» նախադասության մեջ։",
    options: [
      { es: "Asíndeton", hy: "Ասինդետոն" },
      { es: "Metáfora", hy: "Փոխաբերություն" },
      { es: "Polisíndeton", hy: "Պոլիսինդետոն" },
      { es: "Hipérbaton", hy: "Հիպերբատոն" }
    ],
    correctIndex: 2,
    explanationEs: "Se repite de forma intencionada la conjunción «y» entre los términos.",
    explanationHy: "«Y» շաղկապի դիտավորյալ կրկնությունը կոչվում է polisíndeton։"
  },
  {
    id: 9,
    questionEs: "¿Qué figura aparece en «Quiero cantar. Quiero bailar. Quiero reír»?",
    questionHy: "Ի՞նչ միջոց է կիրառված «Quiero cantar. Quiero bailar. Quiero reír» տողերում։",
    options: [
      { es: "Anáfora", hy: "Անաֆորա" },
      { es: "Epanadiplosis", hy: "Էպանադիպլոսիս" },
      { es: "Pleonasmo", hy: "Պլեոնազմ" },
      { es: "Onomatopeya", hy: "Ձայնանմանություն" }
    ],
    correctIndex: 0,
    explanationEs: "La anáfora es la repetición de una misma palabra al principio de varias frases consecutivas («Quiero...»).",
    explanationHy: "Նույն «Quiero» բառը կրկնվում է մի քանի հաջորդական նախադասությունների սկզբում՝ anáfora։"
  },
  {
    id: 10,
    questionEs: "¿Qué figura aparece en «Tus ojos son dos estrellas»?",
    questionHy: "Ի՞նչ միջոց է կիրառված «Tus ojos son dos estrellas» արտահայտության մեջ։",
    options: [
      { es: "Aliteración", hy: "Ալիտերացիա" },
      { es: "Metáfora", hy: "Փոխաբերություն" },
      { es: "Asíndeton", hy: "Ասինդետոն" },
      { es: "Enumeración", hy: "Թվարկում" }
    ],
    correctIndex: 1,
    explanationEs: "Es una metáfora (forma A es B) porque identifica directamente el término real (ojos) con el imaginario (estrellas) por su brillo.",
    explanationHy: "Սա փոխաբերություն է (Metáfora՝ A es B ձևով), որտեղ աչքերը նույնացվում են աստղերի հետ առանց «como» բառի։"
  }
];

// -------------------------------------------------------------
// Interactive Metric Practice Examples (From notes & guide)
// -------------------------------------------------------------
export interface MetricExercise {
  id: number;
  titleEs: string;
  titleHy: string;
  verseEs: string;
  verseHy: string;
  syllablesText: string;
  sinalefaNote?: string;
  accentRule: string;
  accentRuleHy: string;
  totalMétricas: number;
  explanationHy: string;
}

export const METRIC_EXERCISES: MetricExercise[] = [
  {
    id: 1,
    titleEs: "Verso llano normal",
    titleHy: "Նախավերջին վանկի շեշտով (llana)",
    verseEs: "Por la plaza va la niña.",
    verseHy: "Հրապարակով քայլում է աղջիկը։",
    syllablesText: "Por (1) / la (2) / pla (3) / za (4) / va (5) / la (6) / ni (7) / ña (8)",
    accentRule: "Palabra llana al final: 0 sílabas de cambio.",
    accentRuleHy: "Վերջին բառը llana է (niña) → վանկերի թիվը չի փոխվում (+0)։",
    totalMétricas: 8,
    explanationHy: "8 քերականական վանկ = 8 բանաստեղծական վանկ։ Հանգ չունի (versos impares) → 8−"
  },
  {
    id: 2,
    titleEs: "Palabra aguda al final (+1)",
    titleHy: "Շեշտը վերջին վանկի վրա (+1)",
    verseEs: "Las nubes cubren el sol.",
    verseHy: "Ամպերը ծածկում են արևը։",
    syllablesText: "Las (1) / nu (2) / bes (3) / cu (4) / bren (5) / el (6) / sol (7)",
    accentRule: "Palabra aguda al final (sol): +1 sílaba métrica.",
    accentRuleHy: "Վերջին բառը aguda է (sol) → գումարում ենք +1։",
    totalMétricas: 8,
    explanationHy: "7 քերականական վանկ + 1 (aguda-ի կանոն) = 8 sílabas métricas (octosílabo)։"
  },
  {
    id: 3,
    titleEs: "Sinalefa entre palabras",
    titleHy: "Սինալեֆա բառերի սահմանում",
    verseEs: "Pasa despacio un caballo.",
    verseHy: "Դանդաղ անցնում է մի ձի։",
    syllablesText: "Pa (1) / sa (2) / des (3) / pa (4) / cio_un (5) / ca (6) / ba (7) / llo (8)",
    sinalefaNote: "Sinalefa en «despacio_un»: la -o final y la u- inicial se unen en una sola sílaba.",
    accentRule: "Palabra llana al final (caballo): +0.",
    accentRuleHy: "Despacio և un բառերի միջև ձայնավորները միավորվում են մեկ վանկի մեջ (սինալեֆա)։ Վերջին caballo-ն llana է (+0)։",
    totalMétricas: 8,
    explanationHy: "Սովորական 9 վանկ - 1 սինալեֆա = 8 բանաստեղծական վանկ։ Dorado-ի հետ հանգավորվում է a-o → 8a։"
  },
  {
    id: 4,
    titleEs: "Palabra esdrújula al final (-1)",
    titleHy: "Շեշտը վերջից երրորդ վանկի վրա (-1)",
    verseEs: "La gente canta con música.",
    verseHy: "Մարդիկ երգում են երաժշտությամբ։",
    syllablesText: "La (1) / gen (2) / te (3) / can (4) / ta (5) / con (6) / mú (7) / si (8) / ca (9)",
    accentRule: "Palabra esdrújula al final (música): −1 sílaba métrica.",
    accentRuleHy: "Վերջին բառը esdrújula է (música) → հանում ենք -1 վանկ։",
    totalMétricas: 8,
    explanationHy: "9 քերականական վանկ - 1 (esdrújula-ի կանոն) = 8 sílabas métricas (octosílabo)։"
  }
];

// -------------------------------------------------------------
// Repaso Final (Parte 12 & Summary table)
// -------------------------------------------------------------
export interface QuickReviewItem {
  temaEs: string;
  temaHy: string;
  importantEs: string;
  importantHy: string;
}

export const QUICK_REVIEW_TABLE: QuickReviewItem[] = [
  { temaEs: "Lírica", temaHy: "Քնարերգություն", importantEs: "Expresa sentimientos, emociones y estados de ánimo de forma subjetiva.", importantHy: "Արտահայտում է անձնական զգացմունքներ, հույզեր և տրամադրություն։" },
  { temaEs: "Narrativa", temaHy: "Պատմողական գրականություն", importantEs: "Un narrador cuenta una historia con personajes, tiempo y espacio.", importantHy: "Պատմողը ներկայացնում է պատմություն՝ հերոսներով, ժամանակով և վայրով։" },
  { temaEs: "Teatro", temaHy: "Թատրոն", importantEs: "Destinado a ser representado; diálogos, acciones, sin narrador habitual.", importantHy: "Նախատեսված է բեմականացման համար՝ երկխոսություններ, առանց սովորական պատմողի։" },
  { temaEs: "Lenguaje literario", temaHy: "Գեղարվեստական լեզու", importantEs: "Finalidad estética y expresiva; busca belleza y emocionar al lector.", importantHy: "Գեղագիտական և արտահայտչական նպատակ. Գեղեցկացնել և հուզել ընթերցողին։" },
  { temaEs: "Verso", temaHy: "Չափածո տող", importantEs: "Cada una de las líneas que forman un poema.", importantHy: "Բանաստեղծության յուրաքանչյուր առանձին տողը։" },
  { temaEs: "Prosa", temaHy: "Արձակ", importantEs: "Expresión organizada en oraciones y párrafos, sin versos métricos.", importantHy: "Նախադասություններով և պարբերություններով կազմված խոսք։" },
  { temaEs: "Literatura popular", temaHy: "Ժողովրդական գրականություն", importantEs: "Anónima, oral, tradicional, breve y sujeta a modificaciones.", importantHy: "Անանուն, բանավոր, ավանդական, կարճ և փոփոխվող տարբերակներով։" },
  { temaEs: "Literatura culta", temaHy: "Հեղինակային գրականություն", importantEs: "Autor conocido, transmisión escrita, lenguaje elaborado y texto fijo.", importantHy: "Հայտնի հեղինակ, գրավոր փոխանցում, մշակված լեզու, հաստատուն տեքստ։" },
  { temaEs: "Cuento", temaHy: "Պատմվածք / Հեքիաթ", importantEs: "Narración breve, ficticia, en prosa, pocos personajes y trama sencilla.", importantHy: "Կարճ, հորինված, արձակ, քիչ հերոսներով և պարզ սյուժեով։" },
  { temaEs: "Leyenda", temaHy: "Ավանդապատում", importantEs: "Relato tradicional basado en hechos o lugares reales con elementos fantásticos.", importantHy: "Իրական վայրի կամ դեպքի վրա հիմնված պատմություն՝ ֆանտաստիկ տարրերով։" },
  { temaEs: "Mito", temaHy: "Առասպել", importantEs: "Narración con dioses y héroes que explica el origen del mundo o fenómenos.", importantHy: "Աստվածների և հերոսների մասին պատմություն, որը բացատրում է ծագումը։" },
  { temaEs: "Romance", temaHy: "Ռոմանս", importantEs: "Versos octosílabos, rima asonante en pares y versos impares sueltos (8−, 8a).", importantHy: "Ութվանկանի տողեր, զույգերում ձայնավորային հանգ, կենտերն անհանգ (8−, 8a)։" },
  { temaEs: "Sinalefa", temaHy: "Սինալեֆա", importantEs: "Unión métrica de vocales consecutivas entre palabras en una sola sílaba.", importantHy: "Հարևան բառերի սահմանում ձայնավորների միավորումը մեկ վանկում։" },
  { temaEs: "Acotaciones", temaHy: "Բեմական ցուցումներ", importantEs: "Indicaciones escénicas del autor sobre movimientos, gestos y decorado.", importantHy: "Հեղինակի ցուցումները դերասանների շարժումների, հույզերի և բեմի մասին։" },
  { temaEs: "Atrezo", temaHy: "Բեմական առարկաներ", importantEs: "Conjunto de objetos que los actores manipulan en la escena.", importantHy: "Բեմում դերասանների կողմից օգտագործվող առարկաները (նամակ, բաժակ և այլն)։" },
  { temaEs: "Decorado", temaHy: "Դեկորացիա", importantEs: "Elementos que crean el ambiente o lugar escénico.", importantHy: "Տարրեր, որոնք կերտում են տեսարանի վայրը (պատեր, ամրոց, կահույք)։" },
  { temaEs: "Aliteración", temaHy: "Ալիտերացիա", importantEs: "Repetición de sonidos semejantes en palabras próximas.", importantHy: "Նույն կամ նման հնչյունների կրկնություն իրար մոտ բառերում։" },
  { temaEs: "Onomatopeya", temaHy: "Ձայնանմանություն", importantEs: "Palabras que imitan sonidos reales (miau, tic-tac, pum).", importantHy: "Իրական ձայներն ընդօրինակող բառեր (մլավոց, տիկ-տակ, բում)։" },
  { temaEs: "Paronomasia", temaHy: "Պարոնոմազիա", importantEs: "Palabras de pronunciación parecida pero significados distintos (brisa/prisa).", importantHy: "Նման հնչողությամբ, բայց տարբեր իմաստներով բառեր (brisa/prisa)։" },
  { temaEs: "Epanadiplosis", temaHy: "Էպանադիպլոսիս", importantEs: "Repetición de la misma palabra al principio y al final del verso.", importantHy: "Նույն բառի կրկնություն տողի սկզբում և վերջում (Luz... Luz)։" },
  { temaEs: "Anáfora", temaHy: "Անաֆորա", importantEs: "Repetición de una o más palabras al comienzo de versos o frases consecutivas.", importantHy: "Նույն բառի կրկնություն հաջորդական տողերի սկզբում (Quiero... Quiero...)։" },
  { temaEs: "Hipérbaton", temaHy: "Հիպերբատոն", importantEs: "Alteración del orden sintáctico habitual de las palabras.", importantHy: "Նախադասության բառերի սովորական դասավորության փոփոխություն։" },
  { temaEs: "Asíndeton", temaHy: "Ասինդետոն", importantEs: "Omisión deliberada de conjunciones para dar rapidez (corre, salta, juega).", importantHy: "Շաղկապների բացթողում արագության համար (առանց «y»-ի)։" },
  { temaEs: "Polisíndeton", temaHy: "Պոլիսինդետոն", importantEs: "Repetición intencionada de conjunciones para dar énfasis (y corre y salta).", importantHy: "Շաղկապների կրկնություն շեշտադրման համար («y... Y... Y...»)։" },
  { temaEs: "Enumeración", temaHy: "Թվարկում", importantEs: "Sucesión de varios elementos relacionados en una lista.", importantHy: "Միևնույն խմբին պատկանող տարրերի հաջորդական թվարկում։" },
  { temaEs: "Pleonasmo", temaHy: "Պլեոնազմ", importantEs: "Palabras innecesarias para reforzar la expresividad (lo vi con mis propios ojos).", importantHy: "Իմաստով ավելորդ բառեր միտքն ուժեղացնելու համար։" },
  { temaEs: "Metáfora", temaHy: "Փոխաբերություն", importantEs: "Identificación de un término real (A) con otro figurado (B) por semejanza.", importantHy: "Իրական (A) և պատկերավոր (B) տարրերի նույնացում նմանության հիման վրա։" }
];

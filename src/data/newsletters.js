// Newsletter Library - Content extracted and categorized from collected newsletters
// Based on your Notion notes: https://www.notion.so/Apuntes-de-newsletters-48dc7ddc8baa486f8a9e4043f9b3ee91

export const CATEGORIES = {
  PRODUCTIVITY: {
    id: 'productivity',
    name: 'Productividad',
    emoji: '⚡',
    color: '#F59E0B',
    description: 'Maximiza tu tiempo y energía',
  },
  MINDSET: {
    id: 'mindset',
    name: 'Mentalidad',
    emoji: '🧠',
    color: '#8B5CF6',
    description: 'Transforma tu forma de pensar',
  },
  HABITS: {
    id: 'habits',
    name: 'Hábitos',
    emoji: '🔄',
    color: '#10B981',
    description: 'Construye rutinas que funcionen',
  },
  FINANCE: {
    id: 'finance',
    name: 'Finanzas',
    emoji: '💰',
    color: '#3B82F6',
    description: 'Domina tu dinero',
  },
  HEALTH: {
    id: 'health',
    name: 'Salud & Bienestar',
    emoji: '🏃',
    color: '#EF4444',
    description: 'Cuida tu cuerpo y mente',
  },
  LEARNING: {
    id: 'learning',
    name: 'Aprendizaje',
    emoji: '📚',
    color: '#06B6D4',
    description: 'Aprende más rápido y mejor',
  },
  FOCUS: {
    id: 'focus',
    name: 'Enfoque & Deep Work',
    emoji: '🎯',
    color: '#F97316',
    description: 'Elimina distracciones, logra más',
  },
  RELATIONSHIPS: {
    id: 'relationships',
    name: 'Relaciones',
    emoji: '🤝',
    color: '#EC4899',
    description: 'Construye conexiones reales',
  },
};

export const NEWSLETTERS = [
  // ─── PRODUCTIVIDAD ───────────────────────────────────────────────────────────
  {
    id: 'nl_001',
    title: 'El Sistema GTD: Vacía tu mente',
    source: 'Getting Things Done Newsletter',
    category: 'productivity',
    difficulty: 'medium',
    xpReward: 150,
    readTime: 5,
    tags: ['gtd', 'organización', 'tareas'],
    summary:
      'David Allen propone que tu mente es para tener ideas, no para guardarlas. Captura todo en un sistema externo confiable.',
    keyInsight:
      'Una mente vacía es una mente productiva. No es relajación, es liberar RAM mental para pensar mejor.',
    howToApply: [
      'Crea una bandeja de entrada única: un lugar (app, libreta) donde captures CUALQUIER cosa que llame tu atención',
      'Cada mañana, procesa esa bandeja: ¿Requiere acción? Si sí, ¿menos de 2 minutos? Hazlo ya.',
      'Si tarda más de 2 min, programa cuándo lo harás o delégalo',
      'Revisa tu sistema cada domingo 15 minutos para que sigas confiando en él',
    ],
    dailyApplication:
      'Hoy cuando llegue algo a tu mente (tarea, idea, preocupación), escríbelo inmediatamente en tu app de notas en vez de intentar recordarlo.',
    personalExample:
      'En vez de cargar mentalmente con "tengo que llamar al banco", lo escribes y tu mente descansa. Esa energía la usas para trabajar en lo que importa.',
    challenge: {
      title: 'Vaciado Mental Completo',
      description: 'Pasa 20 minutos escribiendo TODO lo que tienes pendiente en tu mente.',
      xp: 200,
      duration: 'today',
    },
  },
  {
    id: 'nl_002',
    title: 'La Regla de los 2 Minutos',
    source: 'Productivity Weekly',
    category: 'productivity',
    difficulty: 'easy',
    xpReward: 80,
    readTime: 3,
    tags: ['eficiencia', 'procrastinación'],
    summary:
      'Si una tarea tarda menos de 2 minutos en completarse, hazla ahora mismo. No la pospones, no la agendas: la ejecutas.',
    keyInsight:
      'El costo de procesar, recordar y re-revisar tareas pequeñas es mayor que simplemente hacerlas al momento.',
    howToApply: [
      'Cuando revisar un email, respóndelo si puedes hacerlo en 2 min',
      'Cuando veas algo fuera de lugar en tu cuarto/escritorio, ponlo en su sitio ahora',
      'Cuando alguien te pida algo simple, dales respuesta en el momento',
      'Atención: las tareas de 2 min se acumulan. No abuses de esta regla en medio de trabajo profundo.',
    ],
    dailyApplication:
      'Esta semana, antes de agregar algo a tu lista de tareas, pregúntate: ¿Puedo hacer esto ahora en 2 minutos?',
    personalExample:
      'Lavar el plato que usaste al terminar de comer en vez de dejarlo "para después". Pequeño hábito, gran diferencia en cómo se ve y siente tu espacio.',
    challenge: {
      title: 'Caza de Tareas de 2 Min',
      description: 'Identifica y completa 5 tareas de 2 minutos hoy.',
      xp: 100,
      duration: 'today',
    },
  },
  {
    id: 'nl_003',
    title: 'Time Blocking: Diseña tu día',
    source: 'Cal Newport Deep Work Newsletter',
    category: 'productivity',
    difficulty: 'medium',
    xpReward: 120,
    readTime: 4,
    tags: ['tiempo', 'planificación', 'calendario'],
    summary:
      'En vez de una lista de tareas, asigna bloques de tiempo específicos en tu calendario para cada tarea o tipo de trabajo.',
    keyInsight:
      'Una lista de tareas dice qué hacer. Un calendario con time blocking dice cuándo exactamente lo harás. La diferencia es la que separa intención de ejecución.',
    howToApply: [
      'Cada noche, planea el día siguiente en tu calendario bloqueando slots de tiempo',
      'Agrupa tareas similares (responder correos, llamadas, trabajo profundo)',
      'Incluye bloques de "buffer" para imprevistos (15-20% del día)',
      'Respeta tus bloques como si fueran reuniones con tu jefe',
    ],
    dailyApplication:
      'Mañana, en vez de empezar el día viendo qué "se te ocurre hacer", revisa tu calendario y sigue el plan.',
    personalExample:
      '8:00-10:00 Trabajo profundo (sin interrupciones), 10:00-10:30 Emails, 10:30-12:30 Reuniones, 15:00-17:00 Trabajo creativo.',
    challenge: {
      title: 'Primer Time Block del Día',
      description: 'Planea mañana completo con time blocking antes de dormir hoy.',
      xp: 150,
      duration: 'tonight',
    },
  },

  // ─── MENTALIDAD ──────────────────────────────────────────────────────────────
  {
    id: 'nl_004',
    title: 'Growth Mindset vs Fixed Mindset',
    source: 'Brain Food Newsletter',
    category: 'mindset',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 4,
    tags: ['carol-dweck', 'creencias', 'aprendizaje'],
    summary:
      'Carol Dweck descubrió que las personas con mentalidad de crecimiento creen que sus habilidades se pueden desarrollar. Las de mentalidad fija creen que son innatas.',
    keyInsight:
      '"Todavía no" es una de las frases más poderosas. "No puedo hacer esto" vs "No puedo hacer esto TODAVÍA" marca toda la diferencia en cómo enfrentas desafíos.',
    howToApply: [
      'Cuando algo te salga mal, pregunta: ¿Qué puedo aprender de esto?',
      'Reemplaza "soy malo en X" por "todavía no domino X"',
      'Celebra el esfuerzo y el proceso, no solo el resultado',
      'Busca el desafío, no la comodidad. La incomodidad es señal de crecimiento.',
    ],
    dailyApplication:
      'Hoy cuando enfrentes algo difícil, di en voz alta: "Esto es difícil porque estoy creciendo".',
    personalExample:
      'En vez de "no soy bueno con los números", practicar 10 min de matemáticas o finanzas cada día. En 3 meses, la historia que te cuentas cambia.',
    challenge: {
      title: 'Reencuadre Mental',
      description:
        'Escribe 3 cosas en las que "no eres bueno" y reescríbelas con mentalidad de crecimiento.',
      xp: 120,
      duration: 'today',
    },
  },
  {
    id: 'nl_005',
    title: 'Estoicismo Práctico: El Dichotomía del Control',
    source: 'The Daily Stoic Newsletter',
    category: 'mindset',
    difficulty: 'medium',
    xpReward: 130,
    readTime: 5,
    tags: ['estoicismo', 'control', 'epicteto'],
    summary:
      'Epicteto enseñó: hay cosas que dependen de nosotros (pensamientos, juicios, impulsos) y cosas que no (el cuerpo, la reputación, el clima). Enfócate solo en lo primero.',
    keyInsight:
      'La mayor fuente de sufrimiento es intentar controlar lo que no puedes controlar. La paz viene de aceptar qué es tuyo y qué no.',
    howToApply: [
      'Ante cualquier problema, pregunta: ¿Esto está en mi control o no?',
      'Si no está en tu control: acéptalo y sigue',
      'Si está en tu control: actúa con toda tu energía',
      'Practica el "memento mori": recuerda que todo es temporal, incluyendo los problemas',
    ],
    dailyApplication:
      'Hoy, cuando te estreses por algo, para y pregúntate: ¿Está esto en mi control? Si no: respira y suéltalo.',
    personalExample:
      'No puedes controlar si llueve, si alguien llega tarde, o qué piensan de ti. Sí puedes controlar cómo respondes, qué preparas, y qué haces hoy.',
    challenge: {
      title: 'Auditoría de Control',
      description:
        'Escribe tus 5 preocupaciones principales. Clasifica cada una como "en mi control" o "fuera de mi control". Actúa en las primeras, suelta las segundas.',
      xp: 160,
      duration: 'today',
    },
  },
  {
    id: 'nl_006',
    title: 'El Poder del Momento Presente',
    source: 'Mindfulness Weekly',
    category: 'mindset',
    difficulty: 'easy',
    xpReward: 90,
    readTime: 3,
    tags: ['mindfulness', 'presente', 'ansiedad'],
    summary:
      'El 47% del tiempo nuestra mente está en otro lugar que no sea lo que estamos haciendo. Esto genera infelicidad. Estar presente es una habilidad entrenable.',
    keyInsight:
      'La ansiedad vive en el futuro. La depresión vive en el pasado. La paz vive en el presente. Entrenarte para vivir aquí reduce el sufrimiento.',
    howToApply: [
      'Practica "micro-presencia": 5 respiraciones conscientes cuando transitions entre tareas',
      'Cuando notes que tu mente se va, sin juzgarte, regresa suavemente',
      'Elige una actividad diaria para hacerla 100% presente (comer, ducharte, caminar)',
      'Usa anclas sensoriales: ¿qué ves, escuchas, sientes ahora mismo?',
    ],
    dailyApplication:
      'Mientras comes hoy, deja el teléfono y come con total atención. Siente cada bocado.',
    personalExample:
      'La próxima vez que estés con alguien, guarda el teléfono. Tu atención es el regalo más valioso que puedes dar.',
    challenge: {
      title: 'Meditación de 5 Minutos',
      description: 'Siéntate 5 minutos sin hacer nada, solo observando tu respiración.',
      xp: 80,
      duration: 'today',
    },
  },

  // ─── HÁBITOS ─────────────────────────────────────────────────────────────────
  {
    id: 'nl_007',
    title: 'Atomic Habits: El 1% Mejor Cada Día',
    source: 'James Clear Newsletter',
    category: 'habits',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 5,
    tags: ['james-clear', 'mejora-continua', 'sistemas'],
    summary:
      'Mejorar un 1% cada día resulta en ser 37 veces mejor al cabo de un año. Los hábitos son el interés compuesto del auto-mejoramiento.',
    keyInsight:
      'No necesitas grandes cambios dramáticos. Necesitas pequeñas mejoras consistentes. Los sistemas importan más que las metas.',
    howToApply: [
      'Identifica un hábito que quieres construir y hazlo ridículamente pequeño (2 minutos)',
      'Usa "habit stacking": ancla el nuevo hábito a uno que ya tienes (después de X, haré Y)',
      'Diseña tu entorno para que el buen hábito sea el camino de menor resistencia',
      'Celebra cada pequeña victoria. Tu cerebro necesita la señal de éxito.',
    ],
    dailyApplication:
      'Elige UN hábito que quieres desarrollar. Empiézalo hoy en su versión más pequeña posible.',
    personalExample:
      'Quieres leer más: pon un libro en tu almohada. Quieres ejercitarte: deja la ropa de deporte lista la noche anterior. El entorno es el truco.',
    challenge: {
      title: 'Diseño de Hábito 2-Minutos',
      description:
        'Elige un hábito deseado y escribe cómo hacerlo en exactamente 2 minutos. Hazlo hoy.',
      xp: 130,
      duration: 'today',
    },
  },
  {
    id: 'nl_008',
    title: 'La Regla de No Romper la Cadena',
    source: 'Productivity Lab Newsletter',
    category: 'habits',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 3,
    tags: ['racha', 'consistencia', 'jerry-seinfeld'],
    summary:
      'Jerry Seinfeld escribía chistes todos los días y marcaba con una X en el calendario. Su objetivo: no romper la cadena. La visión de la cadena de X\'s es motivadora en sí misma.',
    keyInsight:
      'La consistencia supera a la intensidad. Mejor 10 minutos diarios que 3 horas una vez a la semana. La cadena crea identidad.',
    howToApply: [
      'Elige el hábito diario más importante para ti',
      'Consigue un calendario físico o usa un habit tracker',
      'Cada día que lo haces, marca la X',
      'Tu único trabajo: no romper la cadena. Los días malos, haz la versión mínima.',
    ],
    dailyApplication:
      'Hoy empieza tu cadena. Marca el día 1 en algún lugar visible.',
    personalExample:
      'Escribir 200 palabras cada día (no 2000 una vez por semana). Hacer 10 minutos de ejercicio diario (no 1h los sábados). La cadena te sostiene cuando la motivación falla.',
    challenge: {
      title: 'Día 1 de tu Cadena',
      description:
        'Define tu hábito más importante, créa un tracker y marca el día 1 hoy.',
      xp: 120,
      duration: 'today',
    },
  },
  {
    id: 'nl_009',
    title: 'El Loop del Hábito: Señal-Rutina-Recompensa',
    source: 'The Power of Habit Newsletter',
    category: 'habits',
    difficulty: 'medium',
    xpReward: 110,
    readTime: 4,
    tags: ['neurociencia', 'loop', 'charles-duhigg'],
    summary:
      'Charles Duhigg explica que todo hábito tiene 3 componentes: una señal (trigger), una rutina (el comportamiento), y una recompensa. Para cambiar hábitos, debes entender estos loops.',
    keyInsight:
      'No puedes eliminar un hábito, solo puedes reemplazarlo. Mantén la señal y la recompensa, cambia solo la rutina.',
    howToApply: [
      'Identifica un hábito que quieres cambiar. ¿Cuál es su señal? ¿Su recompensa real?',
      'Busca una rutina alternativa que dé la misma recompensa',
      'Para hábitos nuevos: crea una señal clara y una recompensa inmediata',
      'Prueba el nuevo loop 30 días. El cerebro necesita tiempo para automatizarlo.',
    ],
    dailyApplication:
      'Identifica un hábito que quieres eliminar. Escribe: ¿Cuál es su señal? ¿Qué recompensa te da realmente? ¿Con qué lo puedes reemplazar?',
    personalExample:
      'Si revisas el móvil en momentos de aburrimiento (señal: aburrimiento, recompensa: estímulo), reemplaza por respirar profundo o estirar. La recompensa de calma es similar.',
    challenge: {
      title: 'Ingeniería Inversa de un Hábito',
      description:
        'Elige un mal hábito, mapea su loop completo y diseña el reemplazo.',
      xp: 140,
      duration: 'today',
    },
  },

  // ─── FINANZAS ─────────────────────────────────────────────────────────────────
  {
    id: 'nl_010',
    title: 'Págate Primero: El Principio Fundamental',
    source: 'I Will Teach You To Be Rich Newsletter',
    category: 'finance',
    difficulty: 'easy',
    xpReward: 120,
    readTime: 4,
    tags: ['ahorro', 'automatización', 'ramit-sethi'],
    summary:
      'Ramit Sethi propone automatizar tus finanzas para que el ahorro e inversión ocurran automáticamente antes de que puedas gastar.',
    keyInsight:
      'La fuerza de voluntad es limitada y poco confiable para ahorrar. La automatización es infalible. Configúrala una vez y funciona para siempre.',
    howToApply: [
      'Abre una cuenta de ahorro separada de tu cuenta corriente',
      'Configura una transferencia automática el día que cobras (aunque sea pequeña)',
      'Automatiza pagos de facturas para no olvidarlos ni incurrir en penalizaciones',
      'Regla: primero ahorro/inversión, luego gastos, no al revés',
    ],
    dailyApplication:
      'Hoy configura una transferencia automática mensual aunque sea de 10€/$ a una cuenta de ahorro.',
    personalExample:
      'Si cobras el día 1, ese mismo día 50€ van automáticamente a tu cuenta de ahorro. No lo ves, no lo gastas. En un año: 600€ sin esfuerzo.',
    challenge: {
      title: 'Automatización Financiera',
      description:
        'Configura hoy una transferencia automática de ahorro, por pequeña que sea.',
      xp: 200,
      duration: 'today',
    },
  },
  {
    id: 'nl_011',
    title: 'La Regla del 50/30/20',
    source: 'Financial Independence Newsletter',
    category: 'finance',
    difficulty: 'easy',
    xpReward: 90,
    readTime: 3,
    tags: ['presupuesto', 'regla', 'distribución'],
    summary:
      '50% de tus ingresos para necesidades (alquiler, comida, transporte), 30% para deseos (ocio, restaurantes, ropa), 20% para ahorro e inversión.',
    keyInsight:
      'No necesitas una hoja de cálculo compleja. Esta regla simple te da una guía instantánea para saber si estás en buen camino financieramente.',
    howToApply: [
      'Calcula tu ingreso mensual neto',
      'Multiplica por 0.5 para tu techo de necesidades',
      'Multiplica por 0.3 para gastos de estilo de vida',
      'Multiplica por 0.2 para ahorro mínimo. Si ahorras más, mejor.',
    ],
    dailyApplication:
      'Hoy revisa tus gastos del último mes y clasifícalos en las 3 categorías. ¿Estás dentro de los límites?',
    personalExample:
      'Si ganas 2000€: necesidades hasta 1000€, deseos hasta 600€, y mínimo 400€ de ahorro. Ajusta según tu situación pero úsalo como mapa.',
    challenge: {
      title: 'Auditoría 50/30/20',
      description:
        'Revisa tus gastos del último mes y calcula en qué porcentaje cae cada categoría.',
      xp: 130,
      duration: 'today',
    },
  },

  // ─── SALUD & BIENESTAR ────────────────────────────────────────────────────────
  {
    id: 'nl_012',
    title: 'El Sueño: La Superpotencia Ignorada',
    source: 'Why We Sleep - Matthew Walker Newsletter',
    category: 'health',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 4,
    tags: ['sueño', 'rendimiento', 'matthew-walker'],
    summary:
      'Matthew Walker explica que dormir mal destruye literalmente la memoria, el sistema inmune, el metabolismo y el rendimiento cognitivo. No hay ningún área de la salud que el sueño no afecte.',
    keyInsight:
      'No existe una sola función del cuerpo que no mejore con el sueño. Es el mejor nootrópico, el mejor rendimiento deportivo, el mejor regulador emocional. Y es gratis.',
    howToApply: [
      'Establece un horario de sueño fijo (misma hora de dormir y despertar, incluso fines de semana)',
      'Oscurece y enfría tu habitación (18-19°C es ideal)',
      'Elimina pantallas 1 hora antes de dormir (la luz azul suprime melatonina)',
      'No tomes cafeína después de las 2pm (su vida media es de 5-7 horas)',
    ],
    dailyApplication:
      'Define hoy tu hora de dormir y ponla como alarma. Respétala esta semana.',
    personalExample:
      'Dormir 7 horas vs 6 horas puede duplicar tu rendimiento cognitivo, mejorar tu estado de ánimo y reducir tu hambre. Es la decisión de mayor ROI que puedes tomar.',
    challenge: {
      title: 'Higiene del Sueño',
      description: 'Esta noche: sin pantallas 1h antes, habitación oscura, misma hora. Mide cómo te sientes mañana.',
      xp: 110,
      duration: 'tonight',
    },
  },
  {
    id: 'nl_013',
    title: 'Ejercicio: La Pastilla Milagrosa',
    source: 'Huberman Lab Newsletter',
    category: 'health',
    difficulty: 'medium',
    xpReward: 130,
    readTime: 5,
    tags: ['ejercicio', 'neurociencia', 'andrew-huberman'],
    summary:
      'Andrew Huberman explica que el ejercicio es el nootrópico más potente existente: mejora la memoria, reduce la ansiedad, aumenta la creatividad y protege el cerebro del envejecimiento.',
    keyInsight:
      'Incluso 20 minutos de ejercicio moderado aumentan inmediatamente el BDNF (factor neurotrófico) que es literalmente el fertilizante de las neuronas. Tu cerebro es diferente después de moverse.',
    howToApply: [
      'Mueve tu cuerpo 150-180 min/semana de ejercicio aeróbico moderado',
      'Añade 2 sesiones de fuerza/semana (aunque sean 20 min de pesas)',
      'Caminar es suficiente para empezar. 30 min diarios tienen impacto enorme.',
      'El horario importa: mañana = más energía y foco. Tarde = mejor rendimiento físico.',
    ],
    dailyApplication:
      'Hoy, camina 20 minutos mínimo. No hace falta más para empezar.',
    personalExample:
      'Si tienes un problema que resolver, sal a caminar mientras piensas. El movimiento activa redes neuronales que el estar sentado bloquea.',
    challenge: {
      title: 'Movimiento de 20 Minutos',
      description: 'Sal a caminar o hacer ejercicio 20 minutos hoy sin el móvil.',
      xp: 120,
      duration: 'today',
    },
  },

  // ─── APRENDIZAJE ─────────────────────────────────────────────────────────────
  {
    id: 'nl_014',
    title: 'La Técnica Feynman: Entiende de Verdad',
    source: 'Learning How to Learn Newsletter',
    category: 'learning',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 4,
    tags: ['feynman', 'comprensión', 'enseñanza'],
    summary:
      'Richard Feynman tenía una técnica simple para verificar si realmente entendía algo: intentar explicarlo como si se lo estuviera enseñando a un niño de 12 años.',
    keyInsight:
      'La complejidad es una señal de confusión. Si no puedes explicarlo simple, no lo entiendes realmente. La simplificación fuerza la comprensión profunda.',
    howToApply: [
      'Elige un concepto que estés aprendiendo',
      'Explícalo en voz alta o por escrito como si fuera para alguien que no sabe nada del tema',
      'Cuando te atasques o uses jerga, ahí es donde está el hueco en tu comprensión',
      'Vuelve a la fuente solo para llenar esos huecos específicos, luego repite',
    ],
    dailyApplication:
      'Toma algo que hayas aprendido esta semana y explícalo en 3 frases simples.',
    personalExample:
      'Si estás aprendiendo inversión: "Una acción es una pequeña parte de una empresa. Cuando la empresa gana dinero, tú ganas. El precio sube si más gente quiere comprarla." Si no puedes hacer eso, necesitas repasar.',
    challenge: {
      title: 'Enseñar para Aprender',
      description:
        'Elige un concepto que hayas aprendido este mes y explícalo a alguien (o escríbelo) en términos simples.',
      xp: 150,
      duration: 'today',
    },
  },
  {
    id: 'nl_015',
    title: 'Repetición Espaciada: Aprende Para Siempre',
    source: 'Making Things Stick Newsletter',
    category: 'learning',
    difficulty: 'medium',
    xpReward: 120,
    readTime: 4,
    tags: ['memoria', 'anki', 'spaced-repetition'],
    summary:
      'Hermann Ebbinghaus descubrió que olvidamos exponencialmente pero si repasamos justo antes de olvidar, la memoria se consolida con mucho menos esfuerzo.',
    keyInsight:
      'Estudiar 30 minutos en 6 sesiones separadas retiene 5x más que estudiar 3 horas seguidas. El espaciado es el secreto de los maestros.',
    howToApply: [
      'Usa Anki (app gratuita) para crear flashcards de lo que aprendes',
      'El algoritmo de Anki te muestra las tarjetas justo antes de que las olvides',
      '15 minutos diarios de Anki vale más que 2 horas de re-leer notas',
      'Convierte cualquier concepto importante en una pregunta-respuesta',
    ],
    dailyApplication:
      'Crea 5 flashcards de algo que aprendiste hoy y ponlas en Anki.',
    personalExample:
      'Si aprendes vocabulario, conceptos de un libro, o fórmulas, Anki los convierte en memoria a largo plazo. Sin él, olvidas el 80% en 7 días.',
    challenge: {
      title: 'Primera Sesión Anki',
      description: 'Descarga Anki y crea tu primer deck con 10 tarjetas de algo que estés aprendiendo.',
      xp: 160,
      duration: 'today',
    },
  },

  // ─── ENFOQUE & DEEP WORK ─────────────────────────────────────────────────────
  {
    id: 'nl_016',
    title: 'Deep Work: El Trabajo que Importa',
    source: 'Cal Newport Newsletter',
    category: 'focus',
    difficulty: 'hard',
    xpReward: 200,
    readTime: 6,
    tags: ['cal-newport', 'concentración', 'deep-work'],
    summary:
      'Cal Newport define Deep Work como actividades cognitivamente demandantes realizadas en concentración total. Es escaso, valioso y cada vez más difícil en el mundo de las distracciones.',
    keyInsight:
      'La habilidad de enfocarse profundamente está volviéndose rara exactamente cuando se está volviendo más valiosa. Quien la cultiva tiene una ventaja enorme.',
    howToApply: [
      'Bloquea 2-4 horas de trabajo profundo ininterrumpido cada día',
      'Durante esas horas: sin email, sin móvil, sin notificaciones, sin redes sociales',
      'Anuncia a los demás que estarás no disponible (o pon el modo avión)',
      'Empieza con 1 hora y aumenta gradualmente. La concentración es músculo.',
    ],
    dailyApplication:
      'Mañana, programa 90 minutos de deep work antes del mediodía. Sin interrupciones.',
    personalExample:
      'En lugar de trabajar 8 horas con interrupciones constantes (efectivas: 2h), trabaja 4 horas en deep work puro (efectivas: 4h). Mismo resultado, mitad de tiempo.',
    challenge: {
      title: 'Primera Sesión Deep Work',
      description:
        'Trabaja 90 minutos sin interrupciones en tu tarea más importante. Cronómetro en marcha.',
      xp: 250,
      duration: 'today',
    },
  },
  {
    id: 'nl_017',
    title: 'Digital Minimalism: Recupera tu Atención',
    source: 'Digital Minimalism Newsletter',
    category: 'focus',
    difficulty: 'hard',
    xpReward: 160,
    readTime: 5,
    tags: ['tecnología', 'atención', 'redes-sociales'],
    summary:
      'Cal Newport argumenta que las redes sociales están diseñadas por ingenieros de persuasión para maximizar el tiempo que pasas en ellas, no para beneficiarte. Tu atención es el producto.',
    keyInsight:
      'Cada vez que revisas el móvil sin razón, entrenas tu cerebro a necesitar estímulo constante y a ser incapaz de tolerar el aburrimiento. El aburrimiento es donde nacen las ideas.',
    howToApply: [
      'Elimina (o al menos oculta) apps de redes sociales del teléfono',
      'Desactiva TODAS las notificaciones excepto llamadas y mensajes directos',
      'Define horarios específicos para revisar redes (ej: 2 veces/día, 20 min máximo)',
      'Practica el "aburrimiento intencional": períodos sin estímulos digitales',
    ],
    dailyApplication:
      'Hoy, pon el teléfono en otro cuarto durante 2 horas de trabajo.',
    personalExample:
      'Prueba 1 semana sin redes sociales. La mayoría reporta más creatividad, mejor sueño y más paz mental. Las noticias importantes llegan de todas formas.',
    challenge: {
      title: 'Detox Digital de 24h',
      description:
        'Pasa 24 horas sin redes sociales (no cuentan mensajería directa). Anota cómo te sientes.',
      xp: 300,
      duration: '24h',
    },
  },

  // ─── RELACIONES ──────────────────────────────────────────────────────────────
  {
    id: 'nl_018',
    title: 'Escucha Activa: La Habilidad más Subestimada',
    source: 'Relationships & Communication Newsletter',
    category: 'relationships',
    difficulty: 'medium',
    xpReward: 110,
    readTime: 4,
    tags: ['comunicación', 'empatía', 'escucha'],
    summary:
      'La mayoría escucha para responder, no para entender. La escucha activa transforma las conversaciones y las relaciones porque la gente se siente genuinamente comprendida.',
    keyInsight:
      '"El mayor regalo que puedes darle a alguien es tu atención." No estás escuchando si al mismo tiempo estás pensando qué responder.',
    howToApply: [
      'Cuando alguien hable contigo, guarda el teléfono completamente',
      'No interrumpas. Espera 2 segundos después de que terminen antes de responder.',
      'Haz preguntas de seguimiento que demuestren que escuchaste: "¿Qué hiciste entonces?"',
      'Parafrasea para confirmar: "Si te entiendo bien, lo que sientes es..."',
    ],
    dailyApplication:
      'En tu próxima conversación importante, practica no interrumpir y hacer 1 pregunta de seguimiento.',
    personalExample:
      'La persona promedio interrumpe a los 17 segundos. Solo dejando que terminen de hablar ya te destacas como un oyente excepcional.',
    challenge: {
      title: 'Escucha Sin Interrumpir',
      description:
        'En tu próxima conversación, no interrumpas ni una vez. Al terminar, haz una pregunta de seguimiento.',
      xp: 130,
      duration: 'today',
    },
  },
];

// Get newsletters by category
export const getByCategory = (categoryId) =>
  NEWSLETTERS.filter((n) => n.category === categoryId);

// Get a random newsletter
export const getRandom = () =>
  NEWSLETTERS[Math.floor(Math.random() * NEWSLETTERS.length)];

// Get daily featured (changes each day based on date)
export const getDailyFeatured = () => {
  const dayOfYear = Math.floor(
    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  return NEWSLETTERS[dayOfYear % NEWSLETTERS.length];
};

export const getTotalNewsletters = () => NEWSLETTERS.length;

// Newsletter Library — Contenido REAL extraído de tus apuntes de Notion
// Fuente: https://www.notion.so/Apuntes-de-newsletters-48dc7ddc8baa486f8a9e4043f9b3ee91
// Cada artículo refleja fielmente lo que apuntaste de cada newsletter

export const CATEGORIES = {
  INVERSION: {
    id: 'inversion',
    name: 'Inversión',
    emoji: '📈',
    color: '#10B981',
    description: 'Haz crecer tu dinero',
  },
  CRYPTO: {
    id: 'crypto',
    name: 'Crypto & Bitcoin',
    emoji: '₿',
    color: '#F59E0B',
    description: 'El mundo cripto explicado',
  },
  EMPRENDIMIENTO: {
    id: 'emprendimiento',
    name: 'Emprendimiento',
    emoji: '🚀',
    color: '#8B5CF6',
    description: 'Construye tu negocio',
  },
  MARKETING: {
    id: 'marketing',
    name: 'Marketing & Contenido',
    emoji: '📣',
    color: '#EF4444',
    description: 'Crece online',
  },
  FINANZAS: {
    id: 'finanzas',
    name: 'Finanzas Personales',
    emoji: '💰',
    color: '#3B82F6',
    description: 'Domina tu dinero',
  },
  LIBROS: {
    id: 'libros',
    name: 'Libros & Aprendizaje',
    emoji: '📚',
    color: '#06B6D4',
    description: 'Ideas que cambian vidas',
  },
  AUTONOMO: {
    id: 'autonomo',
    name: 'Negocio & Liderazgo',
    emoji: '💼',
    color: '#EC4899',
    description: 'Dirige tu propio camino',
  },
  CREACION: {
    id: 'creacion',
    name: 'Creación & Contenido',
    emoji: '🎨',
    color: '#F97316',
    description: 'Construye tu audiencia',
  },
};

export const NEWSLETTERS = [
  // ─── NUDISTA INVERSOR ─────────────────────────────────────────────────────────
  {
    id: 'nl_001',
    title: 'No te harás rico ahorrando — hay que ganar más',
    source: 'Nudista Inversor',
    category: 'inversion',
    difficulty: 'easy',
    xpReward: 120,
    readTime: 4,
    tags: ['ingresos', 'marca-personal', 'libertad-financiera'],
    summary:
      'Por más que ahorres en gastos hormiga y vivas por debajo de tus posibilidades, el ahorro es mínimo. Tampoco ayuda mucho invertir ese poco dinero porque el mercado cambia. Lo mejor que puedes hacer para generar más ingresos es simplemente ganar más.',
    keyInsight:
      'Ser rico no es yates y mansiones. Ser rico es poder eliminar las cosas que no necesitas. La libertad financiera consiste en tener tiempo para realizar tus proyectos y presupuesto para crear nuevos.',
    howToApply: [
      'Estudia más para mejorar tus habilidades en tu campo profesional',
      'Dedícale el tiempo necesario para mejorar tu marca personal',
      'Mejora tu comunicación y aprende a hablar con clientes',
      'Una vez hayas mejorado, crea cursos o genera ingresos pasivos con tus redes sociales',
    ],
    dailyApplication:
      'Hoy pregúntate: ¿Qué habilidad específica, si la mejorara, me permitiría cobrar un 20% más? Escríbela y busca cómo desarrollarla esta semana.',
    personalExample:
      'Diversifica, haz de todo para ganar más dinero. Busca una vía más fácil y rápida para conseguirlo joven, pero con sus matices. No pienses que la vía es solo trabajar y ahorrar hasta viejo.',
    challenge: {
      title: 'Define tu Plan para Ganar Más',
      description: 'Escribe 3 habilidades que mejorarías para aumentar tus ingresos. Para cada una, anota 1 acción concreta que puedes tomar esta semana.',
      xp: 130,
      duration: 'today',
    },
  },
  {
    id: 'nl_002',
    title: 'Las 5 claves de un negocio online escalable',
    source: 'Nudista Inversor',
    category: 'emprendimiento',
    difficulty: 'medium',
    xpReward: 150,
    readTime: 5,
    tags: ['negocio-online', 'escalabilidad', 'independencia'],
    summary:
      'Para un negocio online que funcione de verdad necesitas 5 cosas: que sea una necesidad real del mercado (no tuya), que tengas una barrera de entrada, que sea controlable por ti, escalable, y que no dependa de tu tiempo.',
    keyInsight:
      '"¿Tu hábitat empresarial es tu barrio o el mundo?" El mundo online te hace un privilegiado del mundo moderno. Cualquier cosa que empieces como proyecto paralelo puede llegar a ser un negocio.',
    howToApply: [
      '✋ Barrera de entrada: cuando entres, los demás no tendrán lo que tú tienes (dinero, conocimiento)',
      '📊 Controlable: que tus decisiones lo hagan más rentable, sin depender solo de Google o Amazon',
      '📈 Escalable: crece con el tiempo tanto en personal como económicamente',
      '🕐 Tiempo: un negocio debe funcionar solo, no depender de ti constantemente',
    ],
    dailyApplication:
      'Evalúa tu idea o negocio actual con estas 5 claves. ¿Cuántas cumples? ¿En cuál fallas más?',
    personalExample:
      '"¿Pueden incrementar los ingresos de tu negocio de forma ilimitada o hay un límite?" Si es online y ya grabado, es ilimitado. Vuélvete un pescador, no un cazador.',
    challenge: {
      title: 'Auditoría de tu Negocio con las 5 Claves',
      description: 'Puntúa tu negocio/idea del 1 al 5 en cada clave (necesidad, barrera, controlable, escalable, tiempo). Total máximo: 25 puntos.',
      xp: 140,
      duration: 'today',
    },
  },

  // ─── INVIERTE JOVEN ───────────────────────────────────────────────────────────
  {
    id: 'nl_003',
    title: 'Los errores más comunes al invertir en bolsa',
    source: 'Invierte Joven',
    category: 'inversion',
    difficulty: 'easy',
    xpReward: 110,
    readTime: 3,
    tags: ['bolsa', 'errores', 'largo-plazo'],
    summary:
      'Dos errores críticos al invertir: invertir todo de golpe (es mejor poco a poco porque puede que la bolsa baje) y vender cuando la bolsa cae. "No pierdes hasta que no vendas" — cuando baja, sigue siendo tuyo, igual que una casa.',
    keyInsight:
      '"El largo plazo es como un telescopio: quizás lo estiras un poco y no se ve nada diferente, pero si miras por el agujero verás lo lejos que llega." Toda pequeña acción de hoy está construyendo tu futuro.',
    howToApply: [
      'Invierte poco a poco cada mes (DCA) en vez de todo de golpe',
      'Cuando la bolsa baje, NO vendas. Sigue siendo tuyo. Solo pierdes si vendes.',
      'Piensa en años y décadas, no en semanas. Cambia el chip del corto plazo.',
      'Aprende de alguien que lleve más tiempo que tú pero que esté 2-3 pasos más, tienen ideas más frescas',
    ],
    dailyApplication:
      'Revisa si tienes alguna inversión en rojo. Recuerda: todavía no has perdido nada si no vendes. ¿Hay razón real para vender o es miedo emocional?',
    personalExample:
      'Lo mejor que puedes hacer al invertir es observar a los grandes, dónde mueven su dinero (no cuánto gastan) e ir más rápido y seguro para ahorrarte tiempo de investigación.',
    challenge: {
      title: 'Plan de Inversión Mensual',
      description: 'Define HOY cuánto vas a invertir cada mes (aunque sean 50€) y qué día automatizarás la transferencia. Escríbelo como compromiso.',
      xp: 150,
      duration: 'today',
    },
  },
  {
    id: 'nl_004',
    title: 'Cómo invertir según lo que puedes ahorrar cada mes',
    source: 'Invierte Joven',
    category: 'inversion',
    difficulty: 'medium',
    xpReward: 170,
    readTime: 6,
    tags: ['indexados', 'etfs', 'bitcoin', 'estrategia'],
    summary:
      'Estrategia concreta según tu capacidad de ahorro: 100€/mes → fondo indexado simple automatizado. 500€/mes → añade emergentes (20%) y Bitcoin (10-20%). +1000€/mes → suma dividendos o crowdlending. La base siempre es la misma.',
    keyInsight:
      '"Si ahorras 500€/mes a 20 años puedes plantarte con +300.000€. Nada mal." La estrategia óptima: 80-90% en indexados, 10-20% en Bitcoin, automatizado cada mes y sin mirar constantemente.',
    howToApply: [
      '100€/mes: Fidelity MSCI World o MyInvestor S&P500. Automático el día 5 del mes. Olvidarse.',
      '500€/mes: 80% desarrollados + 20% emergentes (Vanguard Emerging Markets) + algo de BTC',
      '+1000€/mes: añade dividendos (JGPI, VHYL) o acciones individuales (máx 20% cartera)',
      'Regla del 4%: cuando vivas de inversiones, retira máximo un 4% anual',
    ],
    dailyApplication:
      'Calcula en qué nivel de ahorro estás ahora mismo. ¿Sigues la estrategia correspondiente a tu nivel? ¿Qué ajuste deberías hacer?',
    personalExample:
      'Yo invertiría: 80-90% en fondos indexados (MyInvestor o Finizens) + 10-20% en Bitcoin (Bit2Me). Todos los meses durante años, sin importar el precio.',
    challenge: {
      title: 'Configura tu Cartera Base',
      description: 'Abre o revisa tu cuenta de MyInvestor/Trade Republic. Configura las aportaciones automáticas según el nivel que te corresponde.',
      xp: 200,
      duration: 'this-week',
    },
  },
  {
    id: 'nl_005',
    title: '14 consejos financieros para tu yo más joven',
    source: 'Invierte Joven',
    category: 'inversion',
    difficulty: 'easy',
    xpReward: 130,
    readTime: 5,
    tags: ['consejos', 'mentalidad', 'carrera'],
    summary:
      'Conecta tus fortalezas con el campo profesional mejor pagado. Cambia de empresa cada 2-3 años para crecer un mínimo del 20%. Di "sí" a todo cuando empiezas. Inicia al menos 3 proyectos paralelos. Invierte el 40%+ de tus ingresos.',
    keyInsight:
      '"Las personas más ricas inician sus propias empresas. Es muy difícil ser rico con un empleo, a menos que seas un big boss a temprana edad." Y: no intentes aparentar mejor que tu vecino. Es una competencia contigo mismo.',
    howToApply: [
      'Cambia de empresa cada 2-3 años si no tienes gran proyección. Busca un mínimo del 20% de subida.',
      'Di "sí" a todo lo que no dominas. Aprendes. La riqueza viene para quienes dicen sí a oportunidades.',
      'Inicia al menos 3 proyectos paralelos. Si uno falla, empieza otro. No te dé miedo.',
      'Invierte al menos el 40% de tus ingresos. Si tus gastos son altos, REDÚCELOS.',
    ],
    dailyApplication:
      'De los 14 consejos, ¿cuáles estás siguiendo ya? ¿Cuál es el que más te cuesta? Escribe 1 acción concreta para empezar a aplicarlo esta semana.',
    personalExample:
      '"Apaga las noticias. Te harán sentir miedo y depresión. La gente con miedo no hace cosas." E invierte en formación en salud, deporte, relaciones, marketing, negocios, finanzas e inversión.',
    challenge: {
      title: 'Autoevaluación de los 14 Consejos',
      description: 'Puntúa del 0-10 cuánto aplicas cada uno de los 14 consejos. Elige el más bajo y diseña un plan de mejora.',
      xp: 120,
      duration: 'today',
    },
  },

  // ─── CELIA RUBIO ─────────────────────────────────────────────────────────────
  {
    id: 'nl_006',
    title: '5 consejos para tu futuro financiero',
    source: 'Celia Rubio',
    category: 'finanzas',
    difficulty: 'easy',
    xpReward: 90,
    readTime: 3,
    tags: ['finanzas-básicas', 'ahorro', 'fondo-emergencia'],
    summary:
      'Los 5 fundamentos financieros: 1) Seguir tus gastos y apuntarlos. 2) Crear un fondo de emergencia de mínimo 3 meses. 3) Reducir gastos innecesarios. 4) Explorar ingresos adicionales. 5) Invertir y diversificar.',
    keyInsight:
      'Los factores que afectan tu economía son más psicológicos de lo que crees: la programación verbal ("el dinero es malo"), los modelos de referencia que tuviste, y las malas experiencias con el dinero en el pasado.',
    howToApply: [
      'Empieza por seguir tus gastos: apunta TODO lo que gastas durante 1 mes sin juzgarte',
      'Crea un fondo de emergencia de 3 meses de ingresos en una cuenta separada e intocable',
      'Compara precios antes de comprar y reduce 1 gasto innecesario cada semana',
      'Explora qué puedes hacer fuera de tu trabajo para generar ingresos extra',
    ],
    dailyApplication:
      'Hoy revisa tus creencias sobre el dinero: ¿qué te decían en casa sobre él? ¿Esas creencias te ayudan o te limitan ahora?',
    personalExample:
      'Tu cartera de inversiones según Celia: ING Fondo S&P500, Fondo Cartera Naranja, Bitcoin en SwissBorg, Ethereum en Metamask, y Trade Republic para acciones.',
    challenge: {
      title: 'Fondo de Emergencia Check',
      description: '¿Tienes un fondo de emergencia de 3 meses? Si no: calcula cuánto necesitas y abre una cuenta de ahorro separada hoy.',
      xp: 100,
      duration: 'today',
    },
  },

  // ─── OMAR LOPEZ BTC ───────────────────────────────────────────────────────────
  {
    id: 'nl_007',
    title: 'Bitcoin no es un activo refugio — es algo diferente',
    source: 'Omar Lopez BTC',
    category: 'crypto',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 4,
    tags: ['bitcoin', 'store-of-value', 'inflación'],
    summary:
      'Bitcoin no es un activo refugio (esos son el oro o los bonos del gobierno, que se mantienen mejor en la volatilidad). Bitcoin es un objeto de valor pensado más para el largo plazo y como reserva de valor frente a la inflación de las monedas fiat.',
    keyInsight:
      '"A veces nos centramos tanto en lo que pasará que olvidamos buscar una solución. Hay que dejar el miedo sobre el futuro de Bitcoin y aprovechar lo que nos ofrece como herramienta."',
    howToApply: [
      'Entiende la diferencia: activo refugio = estabilidad (oro, bonos). Bitcoin = crecimiento largo plazo.',
      'Como reserva de valor: dado lo inestable de las monedas y que acciones/bonos fluctúan, BTC al no estar ligado al sistema es protección ante inflación',
      'Si compras BTC, piensa en años, no en meses. La volatilidad a corto es su naturaleza.',
      'DeFi en Rootstock: finanzas descentralizadas sobre Bitcoin para depositar, prestar y ganar rendimiento',
    ],
    dailyApplication:
      'Define cuál es tu objetivo con Bitcoin: ¿reserva de valor a largo plazo? ¿especulación? Tener claro el por qué define cuánto invertir y cuándo.',
    personalExample:
      'Grandes inversores institucionales ya tienen posición en Bitcoin: iShares Bitcoin Trust, Fidelity Bitcoin ETF, Grayscale BTC. El dinero institucional ya ha entrado.',
    challenge: {
      title: 'Define tu Estrategia BTC',
      description: 'Escribe en 3 frases: qué es Bitcoin para ti, cuánto % de tu cartera dedicarías y en qué plataforma lo guardarías.',
      xp: 130,
      duration: 'today',
    },
  },

  // ─── MOVIDAS DE EMPRENDER ─────────────────────────────────────────────────────
  {
    id: 'nl_008',
    title: 'Cómo conseguir clientes: canales, confianza y newsletter',
    source: 'Movidas de Emprender',
    category: 'emprendimiento',
    difficulty: 'medium',
    xpReward: 160,
    readTime: 5,
    tags: ['clientes', 'audiencia', 'newsletter'],
    summary:
      'Para conseguir clientes: ser descubierto por canales de captación en redes sociales centrándote en el contenido. Generar confianza con contenido que la cree y dé autoridad. Y reforzar esa confianza con newsletters — algo más personal que las redes.',
    keyInsight:
      '"Invierte tiempo en crear buen contenido — contenido que solucione un problema, que sea diferencial, hecho con mimo. Invierte tiempo en construir relaciones. Solo así tendrás el engranaje para que la inversión en publicidad sea rentable."',
    howToApply: [
      'Crea contenido que solucione problemas reales de tu cliente ideal, no que te guste a ti',
      'Construye relaciones con otros creadores de sectores complementarios. Es una palanca de crecimiento.',
      'Crea una newsletter para comunicarte de forma más personal con tu audiencia. Sin algoritmos.',
      'Conoce a tu audiencia y optimiza contenidos y productos. Solo así la publicidad de pago será rentable.',
    ],
    dailyApplication:
      'Hoy escribe 1 pieza de contenido (post, video, email) que resuelva un problema específico de tu cliente ideal. No que te guste a ti — que le ayude a él.',
    personalExample:
      'Sistema para lanzar un curso: lista VIP de espera semanas antes, grabar por bloques, conseguir afiliados que muevan el lanzamiento, bonus exclusivos para las primeras 48h.',
    challenge: {
      title: 'Identifica tus 3 Canales de Captación',
      description: 'Escribe cuáles son los 3 canales donde está tu cliente ideal y qué contenido publicarás en cada uno esta semana.',
      xp: 150,
      duration: 'today',
    },
  },
  {
    id: 'nl_009',
    title: 'Gestionar el burnout y los días temáticos',
    source: 'Movidas de Emprender',
    category: 'emprendimiento',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 3,
    tags: ['burnout', 'productividad', 'organización'],
    summary:
      'El burnout en el emprendimiento tiene 3 dimensiones: físico, emocional y mental. Para combatirlo: aprende a gestionar las tareas, usa días temáticos, y en temporadas de muchas cosas date un parón para organizar lo que ya tienes.',
    keyInsight:
      '"En temporadas de tantas cosas en la vida, es bueno dar un parón para organizar todo lo que ya tienes y trabajar en aquello que siempre quisiste hacer." A veces menos es más.',
    howToApply: [
      'Identifica en qué dimensión estás quemado: física, emocional o mental',
      'Usa días temáticos: lunes para contenido, martes para cliente, etc. No mezcles todo',
      'Sé consciente de cómo eres y dónde puedes llegar. Tener una mentalidad realista es clave.',
      'Date permiso para hacer una pausa y reorganizar antes de seguir a tope',
    ],
    dailyApplication:
      'Hoy organiza tu semana en días temáticos. Cada día tiene un "sombrero" diferente. ¿Qué tipo de trabajo harás cada día?',
    personalExample:
      'Ejemplo de días temáticos: Lunes=creación de contenido, Martes=clientes, Miércoles=operaciones, Jueves=aprendizaje, Viernes=revisión y planificación.',
    challenge: {
      title: 'Diseña tu Semana Temática',
      description: 'Asigna un tema principal a cada día de la próxima semana y escribe qué NO harás en cada día para respetar el tema.',
      xp: 110,
      duration: 'today',
    },
  },

  // ─── EMPRENDE APRENDIENDO ─────────────────────────────────────────────────────
  {
    id: 'nl_010',
    title: 'Las 8 herramientas de un negocio digital que factura',
    source: 'Emprende Aprendiendo',
    category: 'emprendimiento',
    difficulty: 'easy',
    xpReward: 110,
    readTime: 4,
    tags: ['herramientas', 'sistemas', 'eficiencia'],
    summary:
      'Todo su sistema de negocio está basado en solo 8 herramientas: Notion (centro de operaciones), Beehiiv (email marketing), Checkoutpage+Stripe (pagos), Riverside (grabación), Vimeo+Dropbox (vídeos), y ChatGPT (comodín para todo).',
    keyInsight:
      '"Cuanto menos tiempo pierdas en configuraciones interminables, en intentar integrar apps, más tiempo puedes dedicar a pensar en lo importante: cómo generar más valor para tus clientes." Primero monetiza, luego automatiza.',
    howToApply: [
      'Notion: organización de proyectos, tareas, documentación. Versión gratis, 0€.',
      'Beehiiv: para tu newsletter (gratis hasta 2.500 suscriptores). Tu activo más valioso.',
      'Checkoutpage + Stripe: páginas de venta y cobro en minutos. Sin complicaciones.',
      'No te metas en muchos gastos de herramientas hasta que no generes ingresos primero.',
    ],
    dailyApplication:
      'Revisa cuántas herramientas de pago tienes activas. ¿Cuáles realmente usas? Cancela las que no uses y quédate con lo esencial.',
    personalExample:
      'Con estas 8 herramientas gestionan creación de contenido, marketing, ventas, distribución, cobros y entrega. El objetivo: ponérselo fácil a ellos y al cliente.',
    challenge: {
      title: 'Auditoría de Herramientas',
      description: 'Lista todas las herramientas que pagas o usas. ¿Cuántas son realmente necesarias? ¿Qué puedes simplificar?',
      xp: 100,
      duration: 'today',
    },
  },
  {
    id: 'nl_011',
    title: 'El caso de Schedule I: 20M€ solo, con un videojuego',
    source: 'Emprende Aprendiendo',
    category: 'emprendimiento',
    difficulty: 'medium',
    xpReward: 160,
    readTime: 5,
    tags: ['producto-digital', 'lanzamiento', 'comunidad'],
    summary:
      'Tyler lanzó Schedule I (videojuego de una persona) y vendió +20 millones de euros. Claves: creó comunidad primero en TikTok/YouTube antes del lanzamiento, lanzó en acceso anticipado imperfecto, eligió un ángulo provocador y aprovechó plataformas existentes (Steam).',
    keyInsight:
      '"No construyas en silencio. Documenta. Comparte. Deja que la gente se suba al tren antes de que arranque." Y: no esperes al producto final. Vende cuanto antes y mejora en público.',
    howToApply: [
      'Crea comunidad ANTES del producto. Meses de documentación generan miles de personas esperando comprar.',
      'Lanza en "acceso anticipado": ingresos desde el día 1, feedback real, construyes con la comunidad.',
      'El ángulo importa: un producto que cuenta una historia única se comparte solo.',
      'Usa plataformas con tráfico ya existente (Steam, YouTube, Amazon, Etsy, Udemy).',
    ],
    dailyApplication:
      'Piensa en tu proyecto actual: ¿estás construyendo en silencio esperando al "producto perfecto"? ¿Cuál es la versión más pequeña que podrías lanzar o compartir esta semana?',
    personalExample:
      '"El coste marginal es cero: vender 1.000 copias o 1 millón cuesta lo mismo. Los productos digitales son máquinas de escalar." No un trabajo — un activo.',
    challenge: {
      title: 'Documenta Públicamente tu Proceso',
      description: 'Publica hoy en alguna red social el detrás de escenas de algo en lo que estés trabajando. No el resultado — el proceso.',
      xp: 140,
      duration: 'today',
    },
  },
  {
    id: 'nl_012',
    title: '5 pilares para crear algo que la gente quiera',
    source: 'Emprende Aprendiendo',
    category: 'emprendimiento',
    difficulty: 'medium',
    xpReward: 170,
    readTime: 5,
    tags: ['producto', 'validación', 'pricing'],
    summary:
      '1) Empieza por el problema, no por la tecnología. 2) Lanza rápido, aunque sea imperfecto. 3) Cobra por el valor, no por las características. 4) El equipo cambia según la etapa. 5) Escucha más a los clientes que pagan y usan mucho.',
    keyInsight:
      '"Para tener éxito, resuelve un problema que conozcas bien, lanza tu solución al mercado cuanto antes para aprender de los errores y cobra por el valor real que aportas a la vida de tus clientes."',
    howToApply: [
      'No vendas "pasta de dientes para encías sanas". Vende "una sonrisa bonita". Cobra por el resultado emocional.',
      'Al principio: contrata generalistas. Al crecer: especialistas.',
      'El verdadero trabajo del fundador es decidir qué NO hacer para avanzar rápido.',
      'El dinero es la mejor forma de saber si tu producto realmente importa.',
    ],
    dailyApplication:
      'Reescribe tu oferta: ¿qué vende realmente tu producto en términos de resultado emocional o práctico? No las características — la transformación.',
    personalExample:
      '"No compres tecnología — compra una forma más fácil o barata de progresar en tu vida." Apple ganó a los GPS no por mejor tecnología, sino por ser más útil.',
    challenge: {
      title: 'Reescribe tu Oferta',
      description: 'Escribe tu propuesta de valor actual. Luego reescríbela centrándote 100% en el resultado del cliente, no en lo que haces tú.',
      xp: 160,
      duration: 'today',
    },
  },

  // ─── LIBRO AL DÍA ─────────────────────────────────────────────────────────────
  {
    id: 'nl_013',
    title: 'Las 6 carpetas de tu segundo cerebro',
    source: 'Libro al Día',
    category: 'libros',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 3,
    tags: ['segundo-cerebro', 'notion', 'organización'],
    summary:
      'El sistema de segundo cerebro tiene 6 carpetas: 1) Bandeja de entrada (capturar). 2) Áreas de administración. 3) Objetivos actuales. 4) Compromisos a futuro. 5) Temas de interés por aprender. 6) Carpeta de espera (lo que será importante en algún punto).',
    keyInsight:
      '"La mejor manera para aprender es crear un mapa y una guía en orden para acordarte. Crear un Notion es la mejor manera." No basta con leer — tienes que releer lo aprendido para que se quede.',
    howToApply: [
      'Crea las 6 carpetas en Notion hoy. Empieza por la bandeja de entrada — apunta algo ahí ahora mismo.',
      'Objetivos actuales: anota todos los que tienes en este momento, por pequeños que sean.',
      'Temas de interés: lista todo lo que quieres aprender. Priorizarás después.',
      'Carpeta de espera: lo que no es urgente ahora pero no quieres olvidar.',
    ],
    dailyApplication:
      'Dedica 20 minutos hoy a organizar tu Notion o app de notas con estas 6 categorías. Solo la estructura. Luego ya las rellenas.',
    personalExample:
      '"De qué sirve aprender y aprender pero luego eso no se queda en ningún sitio." El conocimiento sin sistema se evapora. El sistema multiplica cada cosa que aprendes.',
    challenge: {
      title: 'Configura tu Segundo Cerebro',
      description: 'Crea las 6 carpetas en Notion (o tu herramienta favorita) y añade al menos 3 entradas en cada una.',
      xp: 120,
      duration: 'today',
    },
  },
  {
    id: 'nl_014',
    title: 'Los 2 tipos de personas y el 0.1% diario',
    source: 'Libro al Día',
    category: 'libros',
    difficulty: 'easy',
    xpReward: 90,
    readTime: 3,
    tags: ['hábitos', 'mejora-continua', 'mentalidad'],
    summary:
      'Hay 2 tipos de personas: los que persiguen su cola constantemente, y los que hacen un 0.1% de cambios día a día para ser mejor en cualquier ámbito. Nadie llega a donde está de suerte, sino de pequeñas cosas que con el tiempo se vuelven grandes.',
    keyInsight:
      '"Trátate a ti mismo como te gustaría que te trataran. Tú eres tu propio compañero de piso con tus manías, secretos, gustos y disgustos. ¿Por qué tratarte tan mal y a todos bien?"',
    howToApply: [
      'Sal de tu zona de confort: prueba ir en dirección contraria en algo de tu rutina y observa qué pasa',
      'Para tomar decisiones: define tus prioridades primero. ¿Dinero o amor? ¿Familia o amigos? Elige.',
      'En el trabajo: tomate un momento de reflexión diaria. ¿Qué hice hoy que me acerca a mis objetivos?',
      'El mundo del arte: lo que importa es el acto de crear, no los likes. Que te motive crear, no validar.',
    ],
    dailyApplication:
      'Hoy elige UN pequeño cambio del 0.1% en un área de tu vida. Algo tan pequeño que sea ridículo no hacerlo. Hazlo y repítelo mañana.',
    personalExample:
      '"Si crees que la rutina te hace infeliz, adopta esta mentalidad: nadie se baña dos veces en el mismo río. Ningún día es exactamente igual."',
    challenge: {
      title: 'Tu Mejora del 0.1% de Hoy',
      description: 'Define una mejora diminuta en 1 área (salud, negocio, relaciones, finanzas). Hazla ahora y ponla en tu calendario para mañana.',
      xp: 80,
      duration: 'today',
    },
  },

  // ─── BIGSEO ───────────────────────────────────────────────────────────────────
  {
    id: 'nl_015',
    title: '5 beneficios de tener una newsletter para tu negocio',
    source: 'Bigseo',
    category: 'marketing',
    difficulty: 'easy',
    xpReward: 110,
    readTime: 3,
    tags: ['newsletter', 'email', 'audiencia'],
    summary:
      'Audiencia real: los suscriptores han decidido recibir tu contenido, puedes comunicarte sin algoritmos. Fidelización: es más fácil crear relaciones de confianza. Conversión: el email convierte más que cualquier red social.',
    keyInsight:
      '"A diferencia de la visibilidad en redes sociales, los suscriptores de tu newsletter han decidido suscribirse. Podrás comunicarte con ellos cuando tú quieras sin depender de algoritmos."',
    howToApply: [
      'Invita a tu audiencia a participar: pide retroalimentación o consejos. Genera interacción.',
      'Comparte vivencias personales, consejos y reflexiones. Si aportas valor, te seguirán leyendo.',
      'Empieza aunque tengas 10 suscriptores. La consistencia construye la audiencia.',
      'Plataformas recomendadas: Beehiiv (lo que usa Emprende Aprendiendo), Kit, Mailchimp',
    ],
    dailyApplication:
      'Si no tienes newsletter: define hoy el tema, el nombre y la frecuencia. Si la tienes: escribe el siguiente email antes de que pase el día.',
    personalExample:
      '"Una lista de 500 suscriptores comprometidos vale más que 50.000 seguidores en Instagram. La primera convierte, la segunda depende de un algoritmo."',
    challenge: {
      title: 'Primer Email de tu Newsletter',
      description: 'Escribe un email de presentación: quién eres, qué vas a compartir y por qué debería importarle al lector. Aunque no lo envíes aún.',
      xp: 120,
      duration: 'today',
    },
  },

  // ─── DINERO Y BOLSA ──────────────────────────────────────────────────────────
  {
    id: 'nl_016',
    title: 'Warren Buffett: el consejo que nunca cambia',
    source: 'Dinero y Bolsa',
    category: 'inversion',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 2,
    tags: ['buffett', 'indexados', 'sp500'],
    summary:
      'La recomendación de Warren Buffett que se ha mantenido igual durante décadas: invertir en un fondo indexado low cost que replique el S&P500. Simple, barato y consistentemente superior al 90% de los gestores activos.',
    keyInsight:
      '"Para aprender a invertir, bastan dos cursos: cómo valorar una empresa y cómo pensar en los mercados. No hace falta ser un genio. Basta con entender tu círculo de competencia y conservar la estabilidad emocional."',
    howToApply: [
      'Elige un fondo indexado S&P500 o MSCI World con las comisiones más bajas (TER < 0.20%)',
      'Invierte de forma automática y periódica. Cada mes, el mismo día.',
      'Mantén la estabilidad emocional: ni euforia en subidas, ni pánico en bajadas.',
      'Tu círculo de competencia: solo invierte en lo que entiendes de verdad.',
    ],
    dailyApplication:
      'Busca cuánto cobra de comisión el fondo o plan de pensiones que tienes en tu banco. Compáralo con un indexado equivalente. La diferencia en 20 años puede ser enorme.',
    personalExample:
      '"El mercado es una máquina de transferir dinero de los impacientes a los pacientes." Invertir en S&P500 y esperar décadas es el consejo más aburrido y más rentable a la vez.',
    challenge: {
      title: 'Comparativa de Comisiones',
      description: 'Compara las comisiones de tu inversión actual con las de un fondo indexado equivalente (MyInvestor, Finizens). ¿Cuánto dinero pierdes al año en comisiones?',
      xp: 90,
      duration: 'today',
    },
  },

  // ─── BOOTSTRAPING ─────────────────────────────────────────────────────────────
  {
    id: 'nl_017',
    title: 'Los pilares para llevar un negocio con excelencia',
    source: 'Bootstraping',
    category: 'autonomo',
    difficulty: 'medium',
    xpReward: 150,
    readTime: 5,
    tags: ['liderazgo', 'equipo', 'hospitalidad'],
    summary:
      'Los 7 pilares para llevar un negocio: pasión, servicio y hospitalidad, optimismo genuino, inteligencia curiosa, ética del trabajo, empatía, y autoconciencia. Y el más importante: un buen líder conoce sus puntos fuertes y se pregunta "¿por qué deberían ser dirigidos por mí?"',
    keyInsight:
      '"Hospitalidad es cómo hacer sentir al cliente al entrar a tu producto. El servicio es la entrega de aquello." Son distintos. Puedes tener buen producto pero mala experiencia, y el cliente no vuelve.',
    howToApply: [
      'Los 5 pasos para gestionar errores: 1) Consciencia, 2) Reconocimiento, 3) Disculpa, 4) Acción, 5) Generosidad adicional.',
      'Ejerce presión con suavidad: da al equipo la sensación de querer seguir, sin pasarte de amable hasta perder credibilidad.',
      'No bases tu cultura en el miedo. Da confianza de que el trabajador quiera seguir aprendiendo allí.',
      'Para contratar: busca iniciativa, qué le motiva y cómo lo consigue. Más que experiencia pura.',
    ],
    dailyApplication:
      'Piensa en el último error que cometiste con un cliente o colega. ¿Seguiste los 5 pasos? ¿Qué faltó?',
    personalExample:
      '"Ahorra como un pesimista, invierte como un optimista. Planifica para los peores escenarios, pero sueña con los mejores. Ambos deben coexistir."',
    challenge: {
      title: 'Protocolo de Gestión de Errores',
      description: 'Escribe tu protocolo personal de 5 pasos para cuando cometas un error con un cliente. Que sea concreto y usable.',
      xp: 140,
      duration: 'today',
    },
  },
  {
    id: 'nl_018',
    title: 'Adversidades y emprendimiento: lo que nadie te cuenta',
    source: 'Bootstraping',
    category: 'autonomo',
    difficulty: 'medium',
    xpReward: 130,
    readTime: 4,
    tags: ['adversidad', 'resiliencia', 'incertidumbre'],
    summary:
      'Aceptar la incertidumbre y estar abierto a experimentar nichos dejándolo al destino construyéndolo. La transformación viene de un momento caótico. Los desafíos de la vida no son el enemigo — son el catalizador.',
    keyInsight:
      '"Crear algo toma paciencia y tiempo. Al romperlo no tarda segundos. Lo mejor que puedes hacer es dejarlo al tiempo." Y: la eficiencia real viene de equilibrar producción con espacios para pensar y explorar.',
    howToApply: [
      'Aunque aún no suceda, prepárate para un imprevisto. Tener un plan B es profesionalismo, no pesimismo.',
      'Prioriza los problemas más grandes de tu emprendimiento (80%) y dedica el 20% a los menores.',
      'Sigue aprendiendo de todos los temas necesarios: lee, infórmate, no dejes de formarte.',
      'Averigua cómo emplear tu tiempo en lo que es tu verdadero valor como persona.',
    ],
    dailyApplication:
      'Identifica el mayor problema actual de tu negocio o proyecto. ¿Estás dedicándole el 80% de tu energía o te distraes con cosas menores?',
    personalExample:
      '"La vida no se trata de ganar más, sino de saber cuándo has ganado lo suficiente." La libertad no es un número — es saber parar cuando has llegado.',
    challenge: {
      title: 'El 80/20 de tu Negocio',
      description: 'Lista todos los problemas de tu negocio. Identifica el 20% que causa el 80% del dolor. Dedica la próxima semana solo a esos.',
      xp: 130,
      duration: 'today',
    },
  },

  // ─── JAVI ORTEGA ─────────────────────────────────────────────────────────────
  {
    id: 'nl_019',
    title: 'Cómo crear vídeos que la gente quiere ver (no los que te gustan a ti)',
    source: 'Javi Ortega',
    category: 'creacion',
    difficulty: 'easy',
    xpReward: 110,
    readTime: 3,
    tags: ['video', 'contenido', 'cliente'],
    summary:
      'Olvídate de hacer vídeos que te gusten. Céntrate en lo que quiere TU PÚBLICO. Rompe el hielo antes de grabar — deja que la persona se familiarice contigo con la cámara en mano. Luego pasarás desapercibido.',
    keyInsight:
      '"La pregunta para negociar: ¿Qué tendría que pasar para que dijerais que este proyecto fue un éxito total?" Esta pregunta cambia toda la conversación con el cliente y alinea expectativas desde el principio.',
    howToApply: [
      'Antes de grabar: empatiza con el cliente. ¿Qué espera realmente de este vídeo?',
      'Iluminación: si no puedes mover las luces, mueve al sujeto.',
      'Enviar correo a posibles clientes: personaliza el mensaje, no te vendas al instante, muestra entusiasmo real.',
      'Precio: dilo con naturalidad. Si dudas, el cliente también dudará. Da un rango en vez de número fijo.',
    ],
    dailyApplication:
      'En tu próximo proyecto de contenido, antes de empezar pregúntate: "¿Esto lo hago porque me gusta a mí o porque realmente le sirve a mi audiencia?"',
    personalExample:
      '"El truco alemán: la comunicación del producto debe impactar mucho más. Es el mismo producto pero con un slogan más llamativo." La forma en que lo presentas vale tanto como lo que es.',
    challenge: {
      title: 'Pregunta de Éxito con tu Cliente',
      description: 'La próxima vez que hables con un cliente o colaborador, haz esta pregunta: "¿Qué tendría que pasar para que dijerais que fue un éxito total?" Anota su respuesta.',
      xp: 100,
      duration: 'this-week',
    },
  },

  // ─── GALICIAN INVESTOR ───────────────────────────────────────────────────────
  {
    id: 'nl_020',
    title: 'Cómo analizar una empresa en 30 minutos',
    source: 'Galician Investor',
    category: 'inversion',
    difficulty: 'hard',
    xpReward: 200,
    readTime: 7,
    tags: ['value-investing', 'análisis', 'moat'],
    summary:
      '6 preguntas en 5 minutos cada una: 1) ¿Entiendo el negocio? 2) ¿Hay problema estructural? 3) ¿Tiene histórico de creación de valor? 4) ¿Quién está detrás? 5) ¿Tiene moat (ventaja competitiva)? 6) ¿Hay algún red flag?',
    keyInsight:
      '"Invierte en empresas de calidad: aquellas cuyo negocio es estable, que tienen margen para innovar o cuyo producto es bueno. No pienses tanto en baratas o en subidones." — Warren Buffett: conserva la estabilidad emocional.',
    howToApply: [
      '¿Entiendo el negocio? Si no puedo explicarlo en 2 frases a un amigo: descartar o poner en espera.',
      '¿Hay moat? ¿Por qué esta empresa es diferente? ¿Qué costaría copiarla y robarle clientes?',
      '¿Quién manda? ¿Fundador o directiva alineada? ¿Tienen skin in the game o solo cobran bonus?',
      '¿Red flag rápido? Escándalos, litigios, salidas de directivos, cuentas poco claras.',
    ],
    dailyApplication:
      'Elige una empresa que ya conozcas como cliente. Aplica las 6 preguntas del framework. ¿La comprarías a precios actuales?',
    personalExample:
      '"Para aprender a invertir bastan 2 cursos: cómo valorar una empresa y cómo pensar en los mercados. No hace falta un CI de 180. Basta con entender tu círculo de competencia."',
    challenge: {
      title: 'Analiza una Empresa en 30 Minutos',
      description: 'Elige una empresa que uses en tu día a día. Aplica las 6 preguntas del framework de Galician Investor. ¿Pasaría el filtro?',
      xp: 220,
      duration: 'this-week',
    },
  },

  // ─── ANIMATION MAGAZINE ──────────────────────────────────────────────────────
  {
    id: 'nl_021',
    title: '11 consejos para una carrera larga en la industria creativa',
    source: 'Animation Magazine',
    category: 'creacion',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 5,
    tags: ['creatividad', 'carrera', 'industria'],
    summary:
      'Abre tu puerta: muestra tu trabajo en LinkedIn, Instagram, Vimeo. Encuentra tiempo para concentrarte (auriculares con cancelación de ruido, estado "tiempo de concentración"). No olvides descansos. Invierte en ergonomía. Prepárate para los ciclos de la industria.',
    keyInsight:
      '"Creo que la diversión que te da crear se puede ver en el resultado final. Haz cosas que te gustaría ver y trata de ser tu propio público." La pasión genuina se nota y atrae.',
    howToApply: [
      'LinkedIn es extremadamente útil. Si es posible, incluye una nota al agregar a alguien a tu red.',
      'Concéntrate limitando acceso a internet y distracciones. Solo necesitas pocas horas de trabajo real al día.',
      'Los comentarios no tienen por qué ser dolorosos. Si 2 personas coinciden en una nota: abórdala.',
      'Prepárate financieramente para las recesiones de la industria. Ahorra lo suficiente para la próxima.',
    ],
    dailyApplication:
      'Actualiza hoy tu portafolio o perfil en LinkedIn/Instagram/Behance con tu trabajo más reciente. Añade una nota sobre el proceso creativo.',
    personalExample:
      '"No todas las tomas tienen que ser una obra maestra. Confía en el proceso y ten un buen flujo de trabajo que te permita desarrollar confianza en tus habilidades."',
    challenge: {
      title: 'Actualiza tu Portafolio',
      description: 'Añade tu mejor trabajo reciente a tu portafolio online con una descripción del proceso y lo que aprendiste haciéndolo.',
      xp: 130,
      duration: 'today',
    },
  },

  // ─── ANYELO RICO ─────────────────────────────────────────────────────────────
  {
    id: 'nl_022',
    title: 'Cómo salir de pobre: la pregunta correcta',
    source: 'Anyelo Rico',
    category: 'finanzas',
    difficulty: 'easy',
    xpReward: 80,
    readTime: 2,
    tags: ['mentalidad', 'aprendizaje', 'salida'],
    summary:
      'La pregunta más poderosa para mejorar tu situación económica: "¿Dónde puedo aprender lo que necesito aprender para conseguir lo que quiero?" No es una pregunta de dinero — es una pregunta de conocimiento y acción.',
    keyInsight:
      'La diferencia entre quienes progresan y quienes no, no es el talento ni la suerte. Es saber hacerse la pregunta correcta y actuar sobre la respuesta. El aprendizaje dirigido al objetivo es la clave.',
    howToApply: [
      'Define con claridad qué quieres conseguir. Sé específico (no "ganar más" sino "ganar 3.000€/mes trabajando por cuenta propia").',
      'Pregúntate: ¿qué conocimiento/habilidad me falta para llegar ahí?',
      'Busca quién ya lo ha conseguido y aprende de su camino, no del camino genérico.',
      'Actúa en las próximas 48 horas sobre la respuesta. El conocimiento sin acción es entretenimiento.',
    ],
    dailyApplication:
      'Escribe ahora mismo: "Quiero [OBJETIVO]. Para eso necesito aprender [CONOCIMIENTO]. Lo aprenderé de [FUENTE] en los próximos [PLAZO]."',
    personalExample:
      'Pregunta aplicada: "Quiero vivir de mi negocio online. Para eso necesito aprender a conseguir clientes. Lo aprenderé viendo los casos de éxito de Emprende Aprendiendo y aplicando en los próximos 3 meses."',
    challenge: {
      title: 'La Pregunta Correcta',
      description: 'Escribe tu objetivo más importante y completa: "Para conseguirlo necesito aprender ___. Esta semana daré este paso concreto: ___".',
      xp: 70,
      duration: 'today',
    },
  },

  // ─── AUTONOMOS ───────────────────────────────────────────────────────────────
  {
    id: 'nl_023',
    title: 'El secreto de Aquaservice: constancia en el foco',
    source: 'Autonomos',
    category: 'autonomo',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 3,
    tags: ['foco', 'crecimiento-orgánico', 'constancia'],
    summary:
      'Aquaservice nunca se distrajo con fuegos artificiales. Creció de forma orgánica, ampliando delegaciones, cuidando su red y ofreciendo siempre un servicio impecable. Esa constancia en el foco es lo que los llevó de una idea rara en 1996 a facturar cientos de millones.',
    keyInsight:
      '"Lo importante para un negocio: es mejor el ingenio que los recursos. Cuando quieres emprender, analiza en tu sector qué te dará beneficio a largo plazo. Es mejor buscar calidad que cantidad para un trabajo más óptimo."',
    howToApply: [
      'Antes de ir a más, fortalece lo que ya te funciona. No abandones lo que da resultados.',
      'No te distraigas con "fuegos artificiales": nuevas redes, nuevas herramientas, nuevas tendencias.',
      'El crecimiento orgánico tarda más pero es más sólido. Cuida a los clientes actuales primero.',
      'Foco constante en el servicio: cada interacción con el cliente es una oportunidad de retenerlo.',
    ],
    dailyApplication:
      'Hoy identifica las 3 cosas en tu negocio que YA funcionan. ¿Estás dedicándoles suficiente energía o te distraes con lo nuevo?',
    personalExample:
      '"No inventes la necesidad — resuélvela mejor." Aquaservice no inventó el agua. Resolvió mejor la entrega. El diferenciador puede estar en la ejecución, no en la idea.',
    challenge: {
      title: 'Fortalecer lo que Funciona',
      description: 'Identifica tu canal o producto que mejores resultados da. Define 3 acciones para mejorarlo aún más esta semana (antes de empezar algo nuevo).',
      xp: 110,
      duration: 'today',
    },
  },

  // ─── ADRIA LOPEZ PASTOR ──────────────────────────────────────────────────────
  {
    id: 'nl_024',
    title: 'La persuasión como herramienta de éxito',
    source: 'Adria Lopez Pastor',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 130,
    readTime: 4,
    tags: ['persuasión', 'ventas', 'comunicación'],
    summary:
      'La persuasión te lleva al éxito. No se trata de manipular — se trata de comunicar el valor de lo que haces de forma que resuene con quien lo recibe. El ajo envuelto en jamón: primero das lo que quieren, luego lo que necesitan.',
    keyInsight:
      '"Tu marketing es el jamón, tu producto es el ajo. A la gente no le interesa mejorar su mentalidad (ajo). Quieren multiplicar sus ventas o ganar sus primeros 1.000€ online (jamón). Primero da lo que quieren. Después, lo que necesitan."',
    howToApply: [
      'Construye una narrativa poderosa: conecta tu producto con emociones, no solo con características.',
      'Crea hábitos o tradiciones alrededor de tu producto para generar clientes recurrentes.',
      'No apuntes a la luna — ve a las estrellas. El 99% se conforma con ser mediocre porque cree que es incapaz de más.',
      '"Vender no es hablar de ti sino de los resultados del cliente." Ve a las emociones primero, luego a la razón.',
    ],
    dailyApplication:
      'Reescribe el mensaje principal de tu oferta usando el framework "jamón-ajo": ¿qué quiere el cliente (jamón)? ¿Qué necesita realmente (ajo)?',
    personalExample:
      '"No se trata de vender caro, sino de hacer sentir que vale la pena pagar más." El precio percibido no viene del coste — viene de la historia que cuentas.',
    challenge: {
      title: 'Reescribe con la Fórmula Jamón-Ajo',
      description: 'Escribe el mensaje de venta de tu producto/servicio usando: JAMÓN (lo que el cliente quiere conseguir) + AJO (la forma en que lo consigue con tu ayuda).',
      xp: 140,
      duration: 'today',
    },
  },
];

// Get newsletters by category
export const getByCategory = (categoryId) =>
  NEWSLETTERS.filter((n) => n.category === categoryId);

export const getRandom = () =>
  NEWSLETTERS[Math.floor(Math.random() * NEWSLETTERS.length)];

export const getDailyFeatured = () => {
  const dayOfYear = Math.floor(
    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  return NEWSLETTERS[dayOfYear % NEWSLETTERS.length];
};

export const getTotalNewsletters = () => NEWSLETTERS.length;

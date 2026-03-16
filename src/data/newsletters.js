// Newsletter Library - Basado en los newsletters reales recopilados en Notion
// Fuentes: Nudista Inversor, Invierte Joven, Omar Lopez BTC, Movidas de Emprender,
// Emprende Aprendiendo, Libro al Dia, Crypto Noticias, Bigseo, Zumitow,
// Javi Rueda, Rafa Caston, Aura Pods, Eladio Mendoza, Dinero y Bolsa,
// Bootstraping, Javi Ortega, Galician Investor, Anyelo Rico, Autonomos,
// Adria Lopez Pastor, Celia Rubio, Animation Magazine

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
    name: 'Marketing & SEO',
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
    name: 'Autónomo & Freelance',
    emoji: '💼',
    color: '#EC4899',
    description: 'Trabaja para ti mismo',
  },
  CREACION: {
    id: 'creacion',
    name: 'Creación de Contenido',
    emoji: '🎨',
    color: '#F97316',
    description: 'Construye tu audiencia',
  },
};

export const NEWSLETTERS = [
  // ─── INVERSIÓN ────────────────────────────────────────────────────────────────
  {
    id: 'nl_001',
    title: 'El Nudista Inversor: Invierte sin complicaciones',
    source: 'Nudista Inversor',
    category: 'inversion',
    difficulty: 'easy',
    xpReward: 120,
    readTime: 4,
    tags: ['indexados', 'largo-plazo', 'simplicidad'],
    summary:
      'La filosofía del Nudista Inversor: invertir sin capas innecesarias. Fondos indexados, automatización y no mirar la cartera cada día. La inversión simple gana a la inversión compleja.',
    keyInsight:
      'El 90% de los gestores activos no baten al índice en el largo plazo. ¿Por qué pagar más por peores resultados? Un fondo indexado + consistencia = resultado superior.',
    howToApply: [
      'Abre una cuenta en MyInvestor, Indexa Capital o similar y elige un fondo indexado mundial (MSCI World)',
      'Configura una aportación automática mensual aunque sea de 50€. La constancia es el secreto.',
      'NO mires tu cartera cada día. Configúrala y olvídate meses.',
      'Reinvierte los dividendos automáticamente para aprovechar el interés compuesto',
    ],
    dailyApplication:
      'Hoy calcula cuánto podrías invertir mensualmente si recortaras 1 gasto innecesario. Aunque sean 30€.',
    personalExample:
      'Invertir 200€/mes durante 30 años al 7% anual = +226.000€. No necesitas ser experto. Solo necesitas empezar y no parar.',
    challenge: {
      title: 'Calcula tu número de FIRE',
      description: 'Calcula cuánto dinero necesitas para ser independiente financieramente (gastos anuales × 25).',
      xp: 150,
      duration: 'today',
    },
  },
  {
    id: 'nl_002',
    title: 'Invierte Joven: El tiempo es tu mayor activo',
    source: 'Invierte Joven',
    category: 'inversion',
    difficulty: 'easy',
    xpReward: 110,
    readTime: 3,
    tags: ['jóvenes', 'interés-compuesto', 'etfs'],
    summary:
      'Empezar a invertir a los 25 vs a los 35 puede significar el doble de patrimonio final con las mismas aportaciones. La ventaja del joven inversor no es el dinero, es el tiempo.',
    keyInsight:
      'El interés compuesto necesita tiempo para funcionar. Cada año que esperas es exponencialmente más caro que el anterior. Empezar con poco, hoy, vale más que empezar con mucho, mañana.',
    howToApply: [
      'Abre una cuenta broker hoy (DEGIRO, Interactive Brokers, Trade Republic son opciones low-cost)',
      'Empieza con ETFs simples: uno de mundo desarrollado + uno de emergentes',
      'Define un porcentaje fijo de tu sueldo para invertir antes de gastar (mínimo 10%)',
      'Ignora las noticias del mercado. Tu horizonte es décadas, no días.',
    ],
    dailyApplication:
      'Busca en tu banco cuánto llevas ahorrado sin invertir y calcula cuánto habrías ganado si lo hubieras puesto en un indexado hace 3 años.',
    personalExample:
      'A los 25 años invirtiendo 150€/mes: a los 55 tienes ~170.000€. Si empiezas a los 35 con lo mismo: ~85.000€. Los primeros 10 años valen lo mismo que los siguientes 20.',
    challenge: {
      title: 'Primera Inversión Real',
      description: 'Abre una cuenta broker gratuita y haz tu primera compra aunque sea de 10€.',
      xp: 300,
      duration: 'this-week',
    },
  },
  {
    id: 'nl_003',
    title: 'Galician Investor: Value Investing en español',
    source: 'Galician Investor',
    category: 'inversion',
    difficulty: 'hard',
    xpReward: 180,
    readTime: 7,
    tags: ['value-investing', 'análisis', 'empresas'],
    summary:
      'El value investing consiste en comprar empresas por debajo de su valor intrínseco y esperar a que el mercado las reconozca. No es timing, es paciencia y análisis.',
    keyInsight:
      'Warren Buffett dijo: "El mercado es una máquina de transferir dinero de los impacientes a los pacientes." Comprar miedo, vender euforia.',
    howToApply: [
      'Lee los balances anuales de empresas que entiendes y usas en tu vida cotidiana',
      'Calcula el PER (precio/beneficios) y compáralo con el histórico del sector',
      'Busca empresas con ventajas competitivas duraderas (moat): marca, patentes, costes de cambio',
      'Crea una lista de empresas a vigilar y espera a comprar en correcciones del mercado',
    ],
    dailyApplication:
      'Elige una empresa que uses cada día (una app, una tienda, un producto) y busca si cotiza en bolsa. Lee su último informe anual.',
    personalExample:
      'Si entiendes cómo gana dinero una empresa mejor que el mercado, tienes ventaja. El análisis fundamental te da convicción para mantener en caídas.',
    challenge: {
      title: 'Análisis de una Empresa',
      description: 'Elige una empresa que conozcas y analiza: ¿A qué precio te parecería barata?',
      xp: 200,
      duration: 'this-week',
    },
  },
  {
    id: 'nl_004',
    title: 'Dinero y Bolsa: Gestión del riesgo primero',
    source: 'Dinero y Bolsa',
    category: 'inversion',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 5,
    tags: ['riesgo', 'diversificación', 'cartera'],
    summary:
      'Antes de pensar en rentabilidad, piensa en riesgo. Una cartera bien diversificada reduce volatilidad sin sacrificar retorno. La regla: no pongas todos los huevos en la misma cesta.',
    keyInsight:
      'No ganar un 10% extra duele menos que perder un 50%. Las pérdidas grandes destruyen el interés compuesto: una caída del 50% requiere un +100% para recuperarse.',
    howToApply: [
      'Divide tu cartera por tipos de activo: RV (acciones), RF (bonos), liquidez',
      'Dentro de RV: diversifica por geografía, sector y divisa',
      'Nunca inviertas dinero que puedas necesitar en menos de 5 años',
      'Rebalancea tu cartera 1-2 veces al año para mantener los porcentajes objetivo',
    ],
    dailyApplication:
      'Revisa si tienes dinero concentrado en una sola empresa, sector o país. La concentración es el mayor riesgo para el inversor amateur.',
    personalExample:
      'Si el 80% de tu cartera es una sola acción "segura" y cae un 60% (pasa), tu portafolio total cae un 48%. Diversificar no es cobardía, es inteligencia.',
    challenge: {
      title: 'Auditoría de Cartera',
      description: 'Revisa tu distribución actual de activos y calcula el % en cada categoría.',
      xp: 130,
      duration: 'today',
    },
  },

  // ─── CRYPTO ───────────────────────────────────────────────────────────────────
  {
    id: 'nl_005',
    title: 'Omar Lopez BTC: Por qué Bitcoin es diferente',
    source: 'Omar Lopez BTC',
    category: 'crypto',
    difficulty: 'medium',
    xpReward: 150,
    readTime: 5,
    tags: ['bitcoin', 'escasez', 'store-of-value'],
    summary:
      'Bitcoin tiene una oferta fija de 21 millones de monedas. Ningún gobierno, empresa ni persona puede cambiarlo. Esta escasez programada lo convierte en el activo más duro jamás creado.',
    keyInsight:
      'El oro lleva 5.000 años siendo escaso porque es difícil de minar. Bitcoin lleva 15 años siendo escaso porque es matemáticamente imposible crear más de 21M. La diferencia: Bitcoin es verificable en segundos.',
    howToApply: [
      'Entiende el halving: cada 4 años, la recompensa a los mineros se reduce a la mitad. Menos supply nuevo = precio tiende a subir.',
      'Si decides tener BTC, usa cold wallet (hardware wallet) para cantidades significativas',
      'La estrategia DCA (Dollar Cost Average): comprar la misma cantidad cada mes, independientemente del precio',
      'Nunca inviertas más de lo que estás dispuesto a perder. Es un activo volátil.',
    ],
    dailyApplication:
      'Lee sobre el concepto de "escasez digital" y piensa: ¿qué otros activos digitales tienen supply limitado y por qué?',
    personalExample:
      'Comprar 50€ de BTC cada mes durante 3 años (DCA) independientemente del precio históricamente ha dado mejor resultado que intentar hacer timing.',
    challenge: {
      title: 'Explica Bitcoin en 3 frases',
      description: 'Si puedes explicar qué es Bitcoin en 3 frases simples, lo entiendes. Escríbelas.',
      xp: 120,
      duration: 'today',
    },
  },
  {
    id: 'nl_006',
    title: 'Crypto Noticias: Cómo no perder dinero en cripto',
    source: 'Crypto Noticias',
    category: 'crypto',
    difficulty: 'medium',
    xpReward: 130,
    readTime: 4,
    tags: ['altcoins', 'riesgo', 'scams'],
    summary:
      'El 95% de las altcoins acaban en cero. Entender los ciclos del mercado cripto y los errores más comunes puede salvarte de perder todo en el siguiente bear market.',
    keyInsight:
      'En crypto: "Not your keys, not your coins." Si tus cripto están en un exchange y este quiebra (FTX, Celsius...), lo pierdes todo. La custodia propia es la única custodia real.',
    howToApply: [
      'Diferencia entre Bitcoin (reserva de valor) y altcoins (especulación pura)',
      'Nunca dejes grandes cantidades en exchanges. Aprende a usar wallets propias.',
      'En bull market: todo sube y parece fácil. En bear: todo cae 80-90%. Gestiona el riesgo en el bull.',
      'Evita los proyectos con promesas de APY del 100%+ — es matemáticamente insostenible.',
    ],
    dailyApplication:
      'Si tienes cripto en exchanges, investiga cómo configurar una wallet propia (MetaMask para ETH, Electrum para BTC).',
    personalExample:
      'El usuario que metió 10.000€ en Luna a máximos perdió el 99,9% en una semana. El que tenía solo BTC y ETH en cold wallet perdió 70% pero recuperó. El activo importa, pero la custodia también.',
    challenge: {
      title: 'Seguridad Cripto',
      description: 'Revisa dónde tienes guardadas tus criptos. ¿Están en tu propia wallet o en un exchange?',
      xp: 100,
      duration: 'today',
    },
  },

  // ─── EMPRENDIMIENTO ──────────────────────────────────────────────────────────
  {
    id: 'nl_007',
    title: 'Movidas de Emprender: Tu primer cliente',
    source: 'Movidas de Emprender',
    category: 'emprendimiento',
    difficulty: 'medium',
    xpReward: 160,
    readTime: 5,
    tags: ['ventas', 'clientes', 'validación'],
    summary:
      'Antes de construir el producto perfecto, consigue 1 cliente. La validación real viene con dinero en la cuenta, no con "me parece interesante". El dinero es el único voto que cuenta.',
    keyInsight:
      '"Un negocio sin clientes es un hobby caro." No hay mejor feedback que alguien pagando. Todo lo demás son hipótesis.',
    howToApply: [
      'Define a quién ayudas, con qué problema específico y qué resultado concreto obtendrán',
      'Crea una oferta de precio antes de crear el producto completo (pre-venta)',
      'Habla con 10 personas de tu cliente ideal esta semana. Escucha más de lo que hablas.',
      'El primer cliente está en tu red cercana. No necesitas anuncios para empezar.',
    ],
    dailyApplication:
      'Hoy describe en 1 oración: "Ayudo a [QUIÉN] a [RESULTADO] a través de [CÓMO]". Si no puedes, tu propuesta de valor necesita trabajo.',
    personalExample:
      'Antes de crear una academia online completa, ofrece 5 plazas a precio de fundador y entrega el contenido en directo. Validas demanda y cobras antes de crear.',
    challenge: {
      title: 'Propuesta de Valor en 1 Línea',
      description: 'Escribe tu propuesta de valor en máximo 20 palabras. Que sea clara, específica y medible.',
      xp: 140,
      duration: 'today',
    },
  },
  {
    id: 'nl_008',
    title: 'Emprende Aprendiendo: Aprende haciendo, no esperando',
    source: 'Emprende Aprendiendo',
    category: 'emprendimiento',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 3,
    tags: ['aprendizaje', 'acción', 'mvp'],
    summary:
      'El error más común del emprendedor: estudiar durante años y nunca lanzar. El conocimiento sin acción no genera resultados. El mercado enseña más que cualquier curso.',
    keyInsight:
      '"Perfecto es el enemigo de lanzado." Un producto mediocre que llega al mercado aprende más en 1 semana que un producto perfecto que nunca sale.',
    howToApply: [
      'Define un MVP (Producto Mínimo Viable): lo mínimo para que alguien te pague',
      'Pon un límite temporal: "lanzo en 30 días, con lo que tenga en ese momento"',
      'Documenta tu proceso de aprendizaje públicamente. Eso ya es marketing.',
      'Itera rápido: lanza, mide feedback, ajusta, vuelve a lanzar.',
    ],
    dailyApplication:
      'Si llevas más de 3 meses "preparando" algo, pregúntate: ¿Qué versión simplificada podría lanzar esta semana?',
    personalExample:
      'Un newsletter semanal lanzado con 50 suscriptores y contenido "imperfecto" vale más que el newsletter "perfecto" que nunca sale porque le falta el diseño.',
    challenge: {
      title: 'Define tu MVP',
      description: 'Para tu idea actual: ¿Cuál es la versión más simple que alguien pagaría? Escríbela en 5 puntos máximo.',
      xp: 130,
      duration: 'today',
    },
  },
  {
    id: 'nl_009',
    title: 'Bootstraping: Crecer sin inversores',
    source: 'Bootstraping',
    category: 'emprendimiento',
    difficulty: 'hard',
    xpReward: 190,
    readTime: 6,
    tags: ['bootstrapping', 'rentabilidad', 'independencia'],
    summary:
      'Bootstrapping es construir un negocio con tus propios recursos, sin inversores externos. Más lento, más difícil, pero te quedas con el 100% y tomas todas las decisiones.',
    keyInsight:
      'Un negocio bootstrapped que genera 5.000€/mes en beneficio neto es más valioso para su dueño que una startup "valorada" en millones que pierde dinero cada mes.',
    howToApply: [
      'Prioriza rentabilidad desde el día 1, no crecimiento. Cash es rey.',
      'Reduce costes fijos al mínimo. Cuando empieces: sin oficina, sin empleados, sin servidores caros.',
      'El modelo de suscripción es el mejor para bootstrapping: predice ingresos y reduce churn',
      'Reinvierte el 50% de beneficios en el negocio. Escala lo que funciona, elimina lo que no.',
    ],
    dailyApplication:
      'Calcula el "ramen profitability" de tu negocio: ¿cuántos clientes necesitas para cubrir tus gastos básicos de vida? Ese es tu primer hito real.',
    personalExample:
      'DHH y Jason Fried construyeron Basecamp (software de gestión) con 0 inversores, lo cobran desde el día 1 y hoy facturan millones con un equipo pequeño. No necesitas VC.',
    challenge: {
      title: 'Cálculo de Punto de Equilibrio',
      description: 'Calcula cuántos clientes/ventas necesitas para que tu negocio se pague a sí mismo.',
      xp: 170,
      duration: 'today',
    },
  },
  {
    id: 'nl_010',
    title: 'Anyelo Rico: Monetiza tu conocimiento',
    source: 'Anyelo Rico',
    category: 'emprendimiento',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 4,
    tags: ['infoproductos', 'conocimiento', 'monetización'],
    summary:
      'Lo que sabes tiene valor. El conocimiento especializado que para ti es obvio, para otros es oro. Los infoproductos (cursos, ebooks, consultoría) tienen márgenes del 90%+.',
    keyInsight:
      'No necesitas ser el mejor del mundo en algo para enseñarlo. Solo necesitas saber más que tu cliente objetivo. El experto que enseña a principiantes gana más que el experto que solo aplica.',
    howToApply: [
      'Identifica tu "zona de conocimiento especial": ¿En qué eres notablemente mejor que la media?',
      'Valida el producto antes de crearlo: pre-vende con una landing simple y Stripe',
      'Empieza con un infoproducto barato (ebook, mini-curso) para ganar confianza y testimonios',
      'Sube precios cuando tengas prueba social. El precio bajo al inicio es para acumular casos de éxito.',
    ],
    dailyApplication:
      'Lista 5 cosas que sabes hacer mejor que la mayoría de tu entorno. Elige una y pregunta: ¿Pagarían por aprender esto?',
    personalExample:
      'Si dominas Excel mejor que el 95% de tu empresa, hay pymes que pagarían 500€ por un taller de 4h. Tu conocimiento tiene precio de mercado.',
    challenge: {
      title: 'Tu Conocimiento Vendible',
      description: 'Crea una oferta de 1 hora de consultoría sobre algo que domines. Ponle precio y comparte el enlace con alguien.',
      xp: 160,
      duration: 'this-week',
    },
  },

  // ─── MARKETING & SEO ─────────────────────────────────────────────────────────
  {
    id: 'nl_011',
    title: 'Bigseo: SEO que funciona en 2024',
    source: 'Bigseo',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 150,
    readTime: 5,
    tags: ['seo', 'google', 'contenido'],
    summary:
      'El SEO ha cambiado: Google ya no premia el contenido que usa más palabras clave. Premia el contenido que responde mejor una intención de búsqueda y demuestra autoridad real.',
    keyInsight:
      'EEAT (Experience, Expertise, Authoritativeness, Trustworthiness). Google quiere saber que quien escribe tiene experiencia real. El contenido genérico de IA sin expertise humano pierde posiciones.',
    howToApply: [
      'Investiga la intención de búsqueda antes de escribir: ¿Qué quiere REALMENTE el usuario?',
      'Linkbuilding interno: conecta tus artículos entre sí para distribuir autoridad',
      'Usa Google Search Console para ver qué páginas tuyas tienen impresiones pero poca CTR. Mejora el title y la meta description.',
      'La velocidad de carga y la experiencia móvil ya son factores de ranking. Core Web Vitals.',
    ],
    dailyApplication:
      'Busca tu negocio/blog en Google. ¿Apareces? Si no: ¿qué buscaría tu cliente ideal para encontrarte? Crea contenido para esa búsqueda.',
    personalExample:
      'Un artículo largo, profundo y con experiencia propia sobre "cómo hacer X" que resuelve la búsqueda al 100% supera a 10 artículos superficiales con más palabras clave.',
    challenge: {
      title: 'Auditoría SEO Básica',
      description: 'Busca tu web/perfil en Google y analiza: ¿Qué 3 búsquedas deberían encontrarte y no te encuentran?',
      xp: 140,
      duration: 'today',
    },
  },
  {
    id: 'nl_012',
    title: 'Javi Rueda: Email marketing que convierte',
    source: 'Javi Rueda',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 130,
    readTime: 4,
    tags: ['email', 'lista', 'conversión'],
    summary:
      'Una lista de email es el único activo digital que realmente te pertenece. Instagram puede cerrarte la cuenta, Google puede quitarte el tráfico. Tu lista, nadie te la quita.',
    keyInsight:
      'El email tiene un ROI de 36€ por cada 1€ invertido (según DMA). Es el canal con mayor conversión porque es directo, personal y el usuario ha elegido recibirlo.',
    howToApply: [
      'Crea un lead magnet irresistible: algo gratis de tanto valor que la gente se suscriba solo por eso',
      'Escribe emails como si escribieras a UN amigo, no a miles. La personalización aumenta la apertura.',
      'La frecuencia importa: mejor 1 email semanal de calidad que 5 correos mediocres',
      'Segmenta tu lista: no todo el mundo quiere lo mismo. Los emails segmentados tienen 2x más clicks.',
    ],
    dailyApplication:
      'Si no tienes newsletter: crea una cuenta gratuita en Brevo o Mailchimp hoy y escribe el primer email a tus contactos explicando qué vas a compartir.',
    personalExample:
      'Una lista de 500 suscriptores comprometidos vale más que 50.000 seguidores en Instagram. La primera convierte, la segunda depende de un algoritmo.',
    challenge: {
      title: 'Primera Pieza de Email Marketing',
      description: 'Escribe un email de bienvenida para tu lista (real o futura). Que explique quién eres y qué valor aportas.',
      xp: 120,
      duration: 'today',
    },
  },
  {
    id: 'nl_013',
    title: 'Eladio Mendoza: Marketing sin presupuesto',
    source: 'Eladio Mendoza',
    category: 'marketing',
    difficulty: 'easy',
    xpReward: 110,
    readTime: 3,
    tags: ['growth', 'orgánico', 'comunidad'],
    summary:
      'El mejor marketing es el que hace que tus clientes hablen de ti. El boca a boca supera a cualquier campaña de pago. Obsesiónate con la experiencia del cliente antes que con la adquisición.',
    keyInsight:
      '"Si tienes que gastar en marketing para crecer, tu producto no es suficientemente bueno." Los mejores negocios crecen porque el producto se vende solo y los clientes traen a otros.',
    howToApply: [
      'Supera las expectativas en cada entrega. El "wow factor" genera referencias.',
      'Pide testimonios activamente. El 90% de compras online empieza por reviews.',
      'Crea un programa de referidos: incentiva a tus clientes a traer nuevos clientes',
      'Documenta los resultados de tus clientes con casos de estudio. Es tu mejor anuncio.',
    ],
    dailyApplication:
      'Contacta hoy a un cliente o usuario satisfecho y pídele un testimonio honesto. Úsalo en tu web, redes o materiales de venta.',
    personalExample:
      'Una empresa de servicio que entrega un 20% más de lo prometido genera clientes que vuelven y refieren. El coste de adquisición se acerca a cero.',
    challenge: {
      title: 'Recopilar 3 Testimonios',
      description: 'Escribe a 3 personas que se hayan beneficiado de tu trabajo/producto y pídeles un testimonio.',
      xp: 100,
      duration: 'this-week',
    },
  },
  {
    id: 'nl_014',
    title: 'Javi Ortega: SEO técnico para no técnicos',
    source: 'Javi Ortega',
    category: 'marketing',
    difficulty: 'hard',
    xpReward: 170,
    readTime: 6,
    tags: ['seo-técnico', 'core-web-vitals', 'indexación'],
    summary:
      'El SEO técnico es el cimiento sobre el que construyes el resto. Si Google no puede rastrear, indexar y entender tu web, el mejor contenido del mundo es invisible.',
    keyInsight:
      'La mayoría de los problemas de SEO no son de contenido, son técnicos. Un sitio lento, sin HTTPS, con canonical errors o contenido duplicado nunca rankeará bien independientemente de lo bueno que sea el artículo.',
    howToApply: [
      'Instala Google Search Console GRATIS y revisa los errores de cobertura (páginas que Google no puede indexar)',
      'Comprueba tu velocidad con PageSpeed Insights. Menos de 3 segundos de carga en móvil es el objetivo.',
      'Asegúrate de que tienes HTTPS, un sitemap.xml y un robots.txt correctos',
      'Evita contenido duplicado: usa canonical tags cuando tengas URLs similares',
    ],
    dailyApplication:
      'Entra en pagespeed.web.dev y analiza la velocidad de tu web. Si puntúas menos de 50 en móvil, tienes trabajo urgente.',
    personalExample:
      'Un ecommerce que pasó de 8 segundos de carga a 2 segundos incrementó conversiones un 32% y posiciones en Google un 40%. La velocidad es dinero.',
    challenge: {
      title: 'Análisis Técnico SEO',
      description: 'Analiza tu web con Search Console y PageSpeed. Identifica el problema técnico #1 a resolver.',
      xp: 180,
      duration: 'today',
    },
  },
  {
    id: 'nl_015',
    title: 'Rafa Castón: Copywriting que vende',
    source: 'Rafa Castón',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 5,
    tags: ['copywriting', 'persuasión', 'textos'],
    summary:
      'El copywriting es el arte de escribir textos que provocan una acción. No se trata de escribir bonito, se trata de entender a tu cliente mejor que él mismo y mostrarle que tienes la solución.',
    keyInsight:
      'La gente no compra productos, compra transformaciones. No compra un curso de Excel, compra "conseguir ese ascenso" o "no depender del becario". Vende el resultado, no el proceso.',
    howToApply: [
      'Fórmula PAS: Problema (agita el dolor), Agitación (hazlo sentir más urgente), Solución (tu oferta)',
      'Usa las palabras de tus clientes, no las tuyas. Lee reviews, encuestas, comentarios.',
      'El headline es el 80% del éxito. Si el título no engancha, el resto no importa.',
      'Añade prueba social específica: no "miles de clientes satisfechos", sino "Ana López multiplicó sus ventas un 230% en 90 días".',
    ],
    dailyApplication:
      'Reescribe el título de tu web o perfil con la fórmula: "[Resultado deseado] para [cliente ideal] sin [mayor obstáculo]".',
    personalExample:
      '"Aprende inglés" vs "Habla inglés con confianza en reuniones internacionales sin años de academia". El segundo vende 5x más porque conecta con el deseo real.',
    challenge: {
      title: 'Reescribe tu Propuesta',
      description: 'Aplica la fórmula PAS a tu oferta principal. Escribe los 3 párrafos (Problema, Agitación, Solución).',
      xp: 150,
      duration: 'today',
    },
  },

  // ─── FINANZAS PERSONALES ──────────────────────────────────────────────────────
  {
    id: 'nl_016',
    title: 'Celia Rubio: Dinero y bienestar van juntos',
    source: 'Celia Rubio',
    category: 'finanzas',
    difficulty: 'easy',
    xpReward: 100,
    readTime: 3,
    tags: ['finanzas-personales', 'bienestar', 'mindset-dinero'],
    summary:
      'La relación con el dinero empieza en la cabeza. Las creencias limitantes sobre el dinero ("el dinero es malo", "yo no sirvo para esto") sabotean tus finanzas antes de que empieces.',
    keyInsight:
      'Si crees que no mereces ganar más, inconscientemente lo harás realidad. La libertad financiera empieza con revisar qué te contaron sobre el dinero cuando eras pequeño.',
    howToApply: [
      'Escribe tus 3 creencias sobre el dinero heredadas de tu familia. ¿Son ciertas o son limitaciones?',
      'Habla de dinero con normalidad: es una herramienta, no un tabú',
      'Educa tu instinto financiero: lleva un presupuesto 1 mes sin juzgarte, solo observando',
      'El bienestar financiero no es tener millones: es tener más de lo que gastas, mes a mes.',
    ],
    dailyApplication:
      'Anota hoy TODOS tus gastos del día, por pequeños que sean. Sin juzgar, solo observando.',
    personalExample:
      'Alguien que gana 4.000€/mes y gasta 3.800€ está en peor situación financiera que alguien que gana 2.000€ y gasta 1.400€. El margen importa más que el sueldo.',
    challenge: {
      title: 'Creencias sobre el Dinero',
      description: 'Escribe 5 frases sobre el dinero que escuchaste de niño. Clasifícalas: ¿te ayudan o te limitan?',
      xp: 90,
      duration: 'today',
    },
  },

  // ─── LIBROS & APRENDIZAJE ─────────────────────────────────────────────────────
  {
    id: 'nl_017',
    title: 'Libro al Día: Cómo leer más y recordar más',
    source: 'Libro al Día',
    category: 'libros',
    difficulty: 'easy',
    xpReward: 110,
    readTime: 3,
    tags: ['lectura', 'retención', 'notas'],
    summary:
      'El problema no es cuántos libros lees. Es cuánto retienes y aplicas. Leer 50 libros al año sin sistema de notas = perder el 95% en 7 días. Leer 12 con notas aplicadas = transformación real.',
    keyInsight:
      'La lectura pasiva es entretenimiento. La lectura activa (subrayar, parafrasear, conectar ideas, aplicar) es educación. El papel del libro no es darte información, es cambiar tu forma de actuar.',
    howToApply: [
      'Lee con un objetivo: "¿Qué quiero aprender específicamente con este libro?"',
      'Subraya solo lo que vas a usar. Si subrayas todo, es que no filtras nada.',
      'Al terminar un capítulo, cierra el libro y resume en 3 frases lo más importante',
      'Crea un sistema de notas (Notion, Obsidian, libreta) donde conectas ideas de distintos libros',
    ],
    dailyApplication:
      'Toma el último libro que leíste. Sin mirarlo, escribe las 5 ideas más importantes que recuerdes. Ese es tu nivel real de retención.',
    personalExample:
      'Charlie Munger leyó durante décadas con un sistema simple: si una idea no cabe en una frase propia, no la has entendido. La comprensión se demuestra con la simplificación.',
    challenge: {
      title: 'Sistema de Notas de Lectura',
      description: 'Crea tu plantilla de notas para libros: título, idea central, 3 puntos clave, 1 acción concreta.',
      xp: 100,
      duration: 'today',
    },
  },
  {
    id: 'nl_018',
    title: 'Aura Pods: El poder del podcast como herramienta de aprendizaje',
    source: 'Aura Pods',
    category: 'libros',
    difficulty: 'easy',
    xpReward: 90,
    readTime: 3,
    tags: ['podcasts', 'audio', 'aprendizaje-pasivo'],
    summary:
      'Los podcasts son la universidad gratuita más subestimada. Mientras haces deporte, cocinas o conduces, puedes absorber conocimiento de los mejores del mundo en cualquier área.',
    keyInsight:
      'El problema no es falta de tiempo para aprender. Es falta de sistematización. Escuchar un podcast sin tomar notas = olvidar el 90% en 48 horas. Necesitas un sistema de captura.',
    howToApply: [
      'Cuando un podcast te dé una idea valiosa: para, graba una nota de voz o escríbela inmediatamente',
      'Usa herramientas como Snipd o Airr para guardar clips de audio directamente',
      'Procesa tus notas de podcast cada semana: ¿qué puedo aplicar esta semana?',
      'Elige 3-5 podcasts de referencia en tu área. Más de eso es ruido.',
    ],
    dailyApplication:
      'La próxima vez que escuches un podcast, ten el móvil listo para apuntar la idea más valiosa. Solo una. Luego aplícala.',
    personalExample:
      'Convertir el trayecto de 30 min al trabajo en aprendizaje = 250h de conocimiento al año. Eso es más de 10 cursos universitarios de forma gratuita.',
    challenge: {
      title: 'Sistema de Captura de Podcasts',
      description: 'Escucha un episodio de tu podcast favorito y extrae las 3 ideas más accionables. Escríbelas y decide cuál aplicas esta semana.',
      xp: 80,
      duration: 'today',
    },
  },

  // ─── AUTÓNOMO & FREELANCE ─────────────────────────────────────────────────────
  {
    id: 'nl_019',
    title: 'Autónomos: Darse de alta sin morir en el intento',
    source: 'Autonomos',
    category: 'autonomo',
    difficulty: 'medium',
    xpReward: 160,
    readTime: 5,
    tags: ['autónomo', 'hacienda', 'facturación'],
    summary:
      'Ser autónomo en España tiene más ventajas fiscales de las que crees si las usas bien. La clave: deducir todos los gastos legalmente permitidos y planificar la facturación.',
    keyInsight:
      'El autónomo que no lleva contabilidad paga impuestos de más. Cada gasto relacionado con tu actividad es deducible. Tu formación, tu móvil (parcial), tu ordenador, la gasolina... todo tiene precio fiscal.',
    howToApply: [
      'Guarda TODOS los tickets de gastos relacionados con tu negocio. Digitalízalos (app Holded, Refy)',
      'Conoce los modelos obligatorios: 303 (IVA trimestral), 130 (IRPF trimestral)',
      'Valora la tarifa plana de autónomos si empiezas: primeros meses con cuota reducida',
      'Considera si te conviene el régimen de módulos o estimación directa simplificada según tu facturación',
    ],
    dailyApplication:
      'Revisa tus últimas 10 facturas de gastos de negocio. ¿Cuántas deduces? ¿Cuántas no?',
    personalExample:
      'Un autónomo que factura 30.000€/año y deduce 8.000€ en gastos reales solo tributa por 22.000€. La diferencia en cuota de IRPF puede ser 2.000-3.000€ al año.',
    challenge: {
      title: 'Auditoría de Deducciones',
      description: 'Lista todos los gastos mensuales de tu actividad que son deducibles. ¿Los estás declarando todos?',
      xp: 150,
      duration: 'today',
    },
  },
  {
    id: 'nl_020',
    title: 'Adria Lopez Pastor: De empleado a emprendedor',
    source: 'Adria Lopez Pastor',
    category: 'autonomo',
    difficulty: 'hard',
    xpReward: 180,
    readTime: 6,
    tags: ['transición', 'seguridad', 'ingresos-propios'],
    summary:
      'El salto de empleado a emprendedor no tiene que ser un salto al vacío. La estrategia correcta: construir ingresos alternativos mientras tienes nómina, y saltar cuando el colchón está listo.',
    keyInsight:
      'No necesitas renunciar mañana. Necesitas llegar a 3 meses de gastos ahorrados + ingresos del lado iguales al 50% de tu nómina antes de saltar. Con esa base, el riesgo es calculado, no una apuesta.',
    howToApply: [
      'Empieza tu proyecto paralelo mientras tienes empleo. Los fines de semana y tardes son tuyos.',
      'Define tu número: ¿cuánto necesitas ganar para cubrir gastos básicos de vida como autónomo?',
      'Consigue tus primeros 3-5 clientes antes de dejar tu trabajo',
      'Crea un colchón de 6 meses de gastos fijos antes del salto',
    ],
    dailyApplication:
      'Calcula tu "número de libertad": el ingreso mensual mínimo para ser autónomo cómodamente. ¿Cuánto te falta para llegar?',
    personalExample:
      'Si necesitas 1.500€/mes para vivir y ya generas 800€/mes con tu proyecto: te falta 700€ para dar el salto. Eso es un objetivo concreto, no una ilusión.',
    challenge: {
      title: 'Plan de Transición',
      description: 'Escribe tu plan de 6 meses para generar ingresos propios antes de tomar una decisión de cambio.',
      xp: 200,
      duration: 'this-week',
    },
  },

  // ─── CREACIÓN DE CONTENIDO ───────────────────────────────────────────────────
  {
    id: 'nl_021',
    title: 'Zumitow: Construir una audiencia desde cero',
    source: 'Zumitow',
    category: 'creacion',
    difficulty: 'medium',
    xpReward: 140,
    readTime: 4,
    tags: ['audiencia', 'redes-sociales', 'consistencia'],
    summary:
      'Construir una audiencia es un juego de largo plazo y consistencia. No de viralizaciones. La persona que publica 3 veces por semana durante 1 año siempre supera a la que publica 10 veces en un mes y luego desaparece.',
    keyInsight:
      '"Los primeros 100 posts son basura. Los siguientes 100 son aprendizaje. Los últimos 100 son lo que funciona." La mayoría abandona antes de llegar al punto de inflexión.',
    howToApply: [
      'Elige 1 o máximo 2 plataformas. Dominar una es mejor que ser mediocre en cinco.',
      'Define tu nicho: cuanto más específico, más fácil conectar con tu audiencia ideal',
      'Crea un calendario de contenido y trátalo como una cita de trabajo irrenunciable',
      'Analiza tus 5 posts con más engagement. ¿Qué tienen en común? Crea más de eso.',
    ],
    dailyApplication:
      'Escribe hoy 5 ideas de contenido para esta semana. Elige la que más miedo te dé publicar y publícala primera.',
    personalExample:
      'Justin Welsh construyó 500.000 seguidores en LinkedIn publicando 1 post diario durante 2 años. Sin trucos. Sin viralización. Solo consistencia extrema.',
    challenge: {
      title: 'Plan de Contenido de 30 Días',
      description: 'Diseña un calendario con 12 publicaciones para los próximos 30 días. Tema, formato y fecha.',
      xp: 160,
      duration: 'today',
    },
  },
  {
    id: 'nl_022',
    title: 'Animation Magazine: Creatividad como negocio',
    source: 'Animation Magazine',
    category: 'creacion',
    difficulty: 'medium',
    xpReward: 120,
    readTime: 4,
    tags: ['creatividad', 'diseño', 'monetización-creativa'],
    summary:
      'El creativo del siglo XXI no elige entre arte y dinero. Aprende a monetizar su creatividad sin vender su alma. El diseño, la animación y el contenido visual son habilidades de alto valor de mercado.',
    keyInsight:
      '"Los creativos que aprenden a vender se vuelven libres. Los que solo crean, dependen siempre de alguien que venda por ellos." Entender el negocio detrás del arte es la ventaja del creativo moderno.',
    howToApply: [
      'Construye un portafolio online con tus mejores piezas. Behance, Dribbble o tu propia web.',
      'Especialízate: "diseñador de packaging para marcas de lujo" cobra 3x más que "diseñador gráfico"',
      'Aprende los básicos de pricing: tu precio = horas × tarifa horaria + valor percibido del resultado',
      'Crea contenido mostrando tu proceso creativo. El "behind the scenes" atrae clientes mejor que las piezas acabadas.',
    ],
    dailyApplication:
      'Actualiza tu portafolio hoy con tu pieza más reciente. Si no tienes portafolio online, crea uno en Behance en 30 minutos.',
    personalExample:
      'Un animador que documenta en TikTok cómo hace sus animaciones atrae más clientes que uno que solo muestra el resultado. El proceso genera confianza y contexto.',
    challenge: {
      title: 'Portafolio Actualizado',
      description: 'Sube tus 5 mejores trabajos a una plataforma online con descripción del proyecto y proceso.',
      xp: 130,
      duration: 'this-week',
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

// Daily Challenges & Gamification Data

export const DIFFICULTY_CONFIG = {
  easy: { label: 'Fácil', color: '#10B981', xpMultiplier: 1, emoji: '🟢' },
  medium: { label: 'Medio', color: '#F59E0B', xpMultiplier: 1.5, emoji: '🟡' },
  hard: { label: 'Difícil', color: '#EF4444', xpMultiplier: 2, emoji: '🔴' },
  epic: { label: 'Épico', color: '#8B5CF6', xpMultiplier: 3, emoji: '🟣' },
};

export const LEVELS = [
  { level: 1, name: 'Novato', minXP: 0, maxXP: 200, emoji: '🌱', badge: '#6B7280' },
  { level: 2, name: 'Aprendiz', minXP: 200, maxXP: 500, emoji: '📖', badge: '#10B981' },
  { level: 3, name: 'Explorador', minXP: 500, maxXP: 1000, emoji: '🧭', badge: '#3B82F6' },
  { level: 4, name: 'Practicante', minXP: 1000, maxXP: 1800, emoji: '⚙️', badge: '#F59E0B' },
  { level: 5, name: 'Estratega', minXP: 1800, maxXP: 3000, emoji: '♟️', badge: '#8B5CF6' },
  { level: 6, name: 'Maestro', minXP: 3000, maxXP: 5000, emoji: '🎯', badge: '#EF4444' },
  { level: 7, name: 'Experto', minXP: 5000, maxXP: 8000, emoji: '🏆', badge: '#F97316' },
  { level: 8, name: 'Elite', minXP: 8000, maxXP: 12000, emoji: '💎', badge: '#06B6D4' },
  { level: 9, name: 'Leyenda', minXP: 12000, maxXP: 20000, emoji: '⭐', badge: '#EC4899' },
  { level: 10, name: 'Iluminado', minXP: 20000, maxXP: Infinity, emoji: '🌟', badge: '#FFD700' },
];

export const BADGES = [
  { id: 'first_challenge', name: 'Primer Paso', description: 'Completa tu primer reto', emoji: '👶', xpNeeded: 0 },
  { id: 'streak_3', name: 'En Racha', description: '3 días seguidos', emoji: '🔥', xpNeeded: 0 },
  { id: 'streak_7', name: 'Semana Perfecta', description: '7 días seguidos', emoji: '💪', xpNeeded: 0 },
  { id: 'streak_30', name: 'Imparable', description: '30 días seguidos', emoji: '🚀', xpNeeded: 0 },
  { id: 'inversor', name: 'Inversor Joven', description: 'Completa 3 retos de inversión', emoji: '📈', xpNeeded: 0 },
  { id: 'crypto_nerd', name: 'Crypto Nerd', description: 'Completa 3 retos de crypto', emoji: '₿', xpNeeded: 0 },
  { id: 'emprendedor', name: 'Emprendedor Nato', description: 'Completa 3 retos de emprendimiento', emoji: '🚀', xpNeeded: 0 },
  { id: 'growth_hacker', name: 'Growth Hacker', description: 'Completa 3 retos de marketing', emoji: '📣', xpNeeded: 0 },
  { id: 'level_5', name: 'Estratega', description: 'Alcanza el nivel 5', emoji: '♟️', xpNeeded: 1800 },
  { id: 'level_10', name: 'Iluminado', description: 'Alcanza el nivel 10', emoji: '🌟', xpNeeded: 20000 },
  { id: 'reader_10', name: 'Lector Voraz', description: 'Lee 10 newsletters completos', emoji: '📚', xpNeeded: 0 },
  { id: 'autonomo_pro', name: 'Autónomo Pro', description: 'Completa 2 retos de autónomo', emoji: '💼', xpNeeded: 0 },
];

// Daily challenge pool - rotates based on day of year
// Basado en las temáticas de los newsletters reales del usuario
export const DAILY_CHALLENGES = [
  {
    id: 'dc_001',
    title: '📈 Configura tu Aportación Automática',
    description: 'Hoy configuras (o revisas) tu aportación automática mensual a un fondo indexado o ETF. Aunque sean 30€.',
    category: 'inversion',
    difficulty: 'medium',
    xpReward: 200,
    tips: [
      'Plataformas gratuitas: Trade Republic, MyInvestor, DEGIRO',
      'La automatización elimina la excusa de "no me acuerdo"',
      'La fecha ideal: el mismo día que cobras tu nómina',
    ],
    newsletterRef: 'nl_001',
    completionQuestion: '¿Cuánto configuraste y en qué plataforma?',
  },
  {
    id: 'dc_002',
    title: '₿ Entiende el Halving de Bitcoin',
    description: 'Lee sobre el próximo halving de Bitcoin y escribe con tus palabras qué significa para el precio y el ecosistema.',
    category: 'crypto',
    difficulty: 'medium',
    xpReward: 150,
    tips: [
      'El halving ocurre cada ~4 años y reduce la emisión de nuevos BTC a la mitad',
      'Históricamente los halvings han precedido a bull markets',
      'No te dejes llevar por el FOMO: entiende antes de invertir',
    ],
    newsletterRef: 'nl_005',
    completionQuestion: '¿Cómo explicarías el halving a alguien que no sabe nada de crypto?',
  },
  {
    id: 'dc_003',
    title: '🚀 Valida tu Idea de Negocio Hoy',
    description: 'Contacta a 3 personas de tu red y pregúntales si pagarían por tu solución. No vendas, solo escucha.',
    category: 'emprendimiento',
    difficulty: 'hard',
    xpReward: 250,
    tips: [
      'La pregunta mágica: "¿Cuánto pagarías por resolver este problema?"',
      'Si nadie pagaría nada, tu idea necesita ajuste. Si alguien dice "sí": sigue.',
      'El silencio y el "no" son el feedback más valioso que existe',
    ],
    newsletterRef: 'nl_007',
    completionQuestion: '¿Qué te dijeron? ¿Qué te sorprendió de sus respuestas?',
  },
  {
    id: 'dc_004',
    title: '📣 Publica un Post de Valor Hoy',
    description: 'Crea y publica en tu red principal (LinkedIn, X, Instagram) un post que enseñe algo útil de lo que sabes.',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 160,
    tips: [
      'Estructura: Hook (primera línea que engancha) + Cuerpo (la enseñanza) + CTA (qué hacer)',
      'El mejor contenido es el que tú habrías querido leer hace 1 año',
      'Publica aunque no sea perfecto. El algoritmo premia la frecuencia.',
    ],
    newsletterRef: 'nl_021',
    completionQuestion: '¿Cuál fue el post? ¿Qué engagement tuvo?',
  },
  {
    id: 'dc_005',
    title: '💰 Auditoría de Gastos Semanal',
    description: 'Revisa todos tus gastos de los últimos 7 días. Clasifícalos: necesidad, deseo, o gasto evitable.',
    category: 'finanzas',
    difficulty: 'easy',
    xpReward: 120,
    tips: [
      'Abre tu app bancaria y ve transacción a transacción',
      'No te juzgues, solo observa los patrones sin emoción',
      'Identifica 1 suscripción que no uses y cancélala hoy mismo',
    ],
    newsletterRef: 'nl_016',
    completionQuestion: '¿Cuánto gastaste esta semana? ¿Cuánto fue realmente necesario?',
  },
  {
    id: 'dc_006',
    title: '📚 Resumen de Libro en 5 Puntos',
    description: 'Elige el último libro que leíste. Sin abrirlo, escribe las 5 ideas más importantes que recuerdas.',
    category: 'libros',
    difficulty: 'easy',
    xpReward: 100,
    tips: [
      'Si no recuerdas 5 ideas, tu nivel de retención es bajo. Necesitas un sistema de notas.',
      'Luego abre el libro y compara. ¿Qué olvidaste?',
      'La idea que no puedes explicar en tus palabras no la has entendido realmente',
    ],
    newsletterRef: 'nl_017',
    completionQuestion: '¿Cuántas ideas recordaste sin mirar? ¿Qué idea fue la más valiosa?',
  },
  {
    id: 'dc_007',
    title: '💼 Lista de Deducciones como Autónomo',
    description: 'Haz una lista completa de todos los gastos de tu actividad que podrías deducir en tu declaración.',
    category: 'autonomo',
    difficulty: 'medium',
    xpReward: 170,
    tips: [
      'Gastos deducibles frecuentes: móvil (parcial), internet, formación, suscripciones de trabajo',
      'Guarda siempre las facturas, no los tickets (necesitas nombre + NIF + IVA separado)',
      'Consulta con un gestor si tienes dudas: la inversión se paga sola en deducciones',
    ],
    newsletterRef: 'nl_019',
    completionQuestion: '¿Cuánto podrías deducir al mes que no estás declarando?',
  },
  {
    id: 'dc_008',
    title: '🎨 Actualiza tu Portafolio o Perfil Online',
    description: 'Dedica 45 minutos a mejorar tu presencia online: web, LinkedIn, Behance o donde tengas tu trabajo.',
    category: 'creacion',
    difficulty: 'easy',
    xpReward: 130,
    tips: [
      'Añade tus últimos trabajos o proyectos',
      'Actualiza tu descripción: ¿quién eres, a quién ayudas, cómo contactarte?',
      'Una foto de perfil profesional puede aumentar el contacto inbound un 30%',
    ],
    newsletterRef: 'nl_022',
    completionQuestion: '¿Qué actualizaste? Comparte el enlace.',
  },
  {
    id: 'dc_009',
    title: '📈 Calcula tu Patrimonio Neto Actual',
    description: 'Suma todos tus activos (ahorro, inversiones, crypto) y réstale tus deudas. Ese es tu patrimonio neto hoy.',
    category: 'finanzas',
    difficulty: 'medium',
    xpReward: 150,
    tips: [
      'Activos: cuenta corriente + ahorro + inversiones + crypto + otros',
      'Pasivos: préstamos, deudas pendientes, hipoteca (si aplica)',
      'Anótalo y calcula trimestralmente. Ver el número crecer es la mejor motivación.',
    ],
    newsletterRef: 'nl_004',
    completionQuestion: '¿Cuál es tu patrimonio neto hoy? ¿Cómo lo ves en 1 año?',
  },
  {
    id: 'dc_010',
    title: '🔍 Keyword Research para tu Negocio',
    description: 'Busca las 5 palabras clave principales que debería rankear tu web o contenido. Usa Google, Ubersuggest o Ahrefs free.',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 160,
    tips: [
      'Busca keywords con intención de compra, no solo informacional',
      'Las keywords de cola larga (más de 3 palabras) tienen menos competencia',
      'Comprueba qué páginas ya rankean para esas búsquedas: así sabes qué tienes que superar',
    ],
    newsletterRef: 'nl_011',
    completionQuestion: '¿Cuáles son tus 5 keywords objetivo? ¿Alguna te sorprendió?',
  },
  {
    id: 'dc_011',
    title: '₿ Configura tu Compra DCA de Crypto',
    description: 'Configura una compra periódica automática pequeña de BTC o el activo crypto que hayas elegido.',
    category: 'crypto',
    difficulty: 'medium',
    xpReward: 180,
    tips: [
      'DCA = Dollar Cost Average: misma cantidad, regularmente, independiente del precio',
      'Plataformas con DCA automático: Relai (BTC), Trade Republic, Coinbase',
      'No importa el precio de hoy. Importa el precio promedio de los próximos 3 años.',
    ],
    newsletterRef: 'nl_006',
    completionQuestion: '¿Cuánto configuraste y con qué frecuencia?',
  },
  {
    id: 'dc_012',
    title: '🚀 Escribe tu Propuesta de Valor',
    description: 'Escribe en 1 frase: "Ayudo a [QUIÉN] a [RESULTADO] sin/aunque [OBSTÁCULO]". Prueba 3 versiones.',
    category: 'emprendimiento',
    difficulty: 'easy',
    xpReward: 110,
    tips: [
      'El quién tiene que ser específico: no "emprendedores" sino "freelancers de diseño"',
      'El resultado debe ser medible o concreto: no "mejorar" sino "doblar clientes"',
      'Pide feedback a 3 personas de tu target: ¿Resuena contigo?',
    ],
    newsletterRef: 'nl_007',
    completionQuestion: '¿Cuál de las 3 versiones te quedas? ¿Por qué?',
  },
];


export const getLevelForXP = (xp) => {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return LEVELS[i];
  }
  return LEVELS[0];
};

export const getProgressToNextLevel = (xp) => {
  const currentLevel = getLevelForXP(xp);
  if (currentLevel.maxXP === Infinity) return 100;
  const range = currentLevel.maxXP - currentLevel.minXP;
  const progress = xp - currentLevel.minXP;
  return Math.min(100, Math.floor((progress / range) * 100));
};

export const getDailyChallenge = () => {
  const dayOfYear = Math.floor(
    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  return DAILY_CHALLENGES[dayOfYear % DAILY_CHALLENGES.length];
};

export const getWeeklyChallenges = () => {
  const dayOfYear = Math.floor(
    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  const weekStart = dayOfYear - (dayOfYear % 7);
  return [
    DAILY_CHALLENGES[weekStart % DAILY_CHALLENGES.length],
    DAILY_CHALLENGES[(weekStart + 2) % DAILY_CHALLENGES.length],
    DAILY_CHALLENGES[(weekStart + 4) % DAILY_CHALLENGES.length],
  ];
};

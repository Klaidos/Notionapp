// Daily Challenges & Gamification Data
export { CATEGORIES } from './newsletters';

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

// Daily challenge pool — basado en el contenido REAL de los newsletters del usuario
export const DAILY_CHALLENGES = [
  {
    id: 'dc_001',
    title: '📈 Automatiza tu inversión mensual',
    description: 'Configura hoy una aportación automática mensual a un fondo indexado (MyInvestor, Trade Republic o similar). Aunque sean 50€. El día que cobras, se invierte automáticamente.',
    category: 'inversion',
    difficulty: 'medium',
    xpReward: 200,
    tips: [
      'Invierte Joven recomienda: 80-90% indexados + 10-20% Bitcoin, automatizado',
      'Nudista Inversor: "Lo mejor que puedes hacer para ganar más es precisamente ganar más, no solo ahorrar"',
      'La fecha ideal: el día 5 del mes, justo después de cobrar',
    ],
    newsletterRef: 'nl_004',
    completionQuestion: '¿Cuánto configuraste, en qué plataforma y qué día del mes?',
  },
  {
    id: 'dc_002',
    title: '₿ Define tu estrategia Bitcoin',
    description: 'Escribe en 3 frases qué es Bitcoin para ti, qué % de tu cartera le dedicarías y por qué. Basa tu respuesta en lo que aprendiste de Omar Lopez BTC.',
    category: 'crypto',
    difficulty: 'medium',
    xpReward: 140,
    tips: [
      'Omar Lopez BTC: "Bitcoin no es activo refugio. Es una reserva de valor a largo plazo frente a la inflación"',
      '"Pensar en la solución: deja el miedo sobre el futuro de Bitcoin y aprovecha lo que nos ofrece"',
      'No inviertas lo que no puedes permitirte perder. DCA mensual es más seguro que comprar de golpe.',
    ],
    newsletterRef: 'nl_007',
    completionQuestion: '¿Qué porcentaje de tu cartera le asignarias a Bitcoin y por qué?',
  },
  {
    id: 'dc_003',
    title: '🚀 Habla con 3 posibles clientes hoy',
    description: 'Contacta a 3 personas de tu red y pregúntales si pagarían por tu solución. No vendas — escucha. El dinero es el único voto que cuenta.',
    category: 'emprendimiento',
    difficulty: 'hard',
    xpReward: 250,
    tips: [
      'Movidas de Emprender: "El dinero es el único voto que cuenta. Todo lo demás son hipótesis."',
      'Pregunta: "¿Cuánto pagarías por resolver este problema específico?"',
      'Si 2 de 3 dicen que sí y cuánto: tienes validación. Si ninguno: pivota.',
    ],
    newsletterRef: 'nl_008',
    completionQuestion: '¿Qué te dijeron? ¿Alguno pagaría? ¿Cuánto?',
  },
  {
    id: 'dc_004',
    title: '📣 Publica contenido que resuelve un problema',
    description: 'Crea y publica hoy un post, vídeo o email que resuelva UN problema específico de tu cliente ideal. Recuerda: no lo que te gusta a ti — lo que le sirve a él.',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 160,
    tips: [
      'Javi Ortega: "Olvídate de hacer vídeos que te gusten. Céntrate en lo que quiere TU PÚBLICO."',
      'Emprende Aprendiendo: "El mejor contenido es el que tú habrías querido hace 1 año"',
      'Estructura: Hook (primera línea) + Enseñanza + Qué hacer ahora',
    ],
    newsletterRef: 'nl_019',
    completionQuestion: '¿Qué publicaste y dónde? ¿Qué reacción tuvo?',
  },
  {
    id: 'dc_005',
    title: '💰 Auditoría de gastos: apunta todo',
    description: 'Celia Rubio dice: sigue tus gastos y apúntalos para saber en qué se va cada cosa. Hoy: revisa los últimos 7 días y clasifica cada gasto en necesidad, deseo, o prescindible.',
    category: 'finanzas',
    difficulty: 'easy',
    xpReward: 110,
    tips: [
      'Celia Rubio: "Reducir gastos innecesarios y comparar precios para así guardar e invertir"',
      'No te juzgues — solo observa patrones. El primer mes es solo de observación.',
      'Identifica 1 suscripción que no usas y cancélala hoy mismo.',
    ],
    newsletterRef: 'nl_006',
    completionQuestion: '¿Cuánto gastaste esta semana? ¿Qué descubriste que no sabías?',
  },
  {
    id: 'dc_006',
    title: '📚 Configura tu Segundo Cerebro en Notion',
    description: 'Libro al Día dice que crear un Notion es la mejor manera de recordar lo que aprendes. Crea hoy las 6 carpetas: Bandeja entrada, Áreas, Objetivos actuales, Compromisos futuros, Temas de interés, Espera.',
    category: 'libros',
    difficulty: 'easy',
    xpReward: 120,
    tips: [
      '"De qué sirve aprender y aprender pero luego eso no se queda en ningún sitio"',
      'Empieza solo con la estructura. Rellena las carpetas en los próximos días.',
      'La carpeta de Objetivos actuales: escribe ahí tus 3 objetivos de este mes.',
    ],
    newsletterRef: 'nl_013',
    completionQuestion: '¿Creaste las 6 carpetas? ¿Qué pusiste en tus objetivos actuales?',
  },
  {
    id: 'dc_007',
    title: '🚀 Evalúa tu negocio con las 5 claves del Nudista Inversor',
    description: 'Nudista Inversor: un buen negocio online cumple 5 requisitos. Puntúa tu idea o negocio actual en: necesidad real, barrera de entrada, controlable, escalable, independiente de tu tiempo.',
    category: 'emprendimiento',
    difficulty: 'medium',
    xpReward: 150,
    tips: [
      '"¿Tu hábitat empresarial es tu barrio o el mundo?" Piensa en escala.',
      '"¿Puedes desvincular tu negocio de tu tiempo?" Si no: no es un negocio, es un empleo.',
      'Puntuación mínima para seguir: 3/5. Si tienes menos de 3, rediseña.',
    ],
    newsletterRef: 'nl_002',
    completionQuestion: '¿Qué puntuación sacó tu negocio? ¿En qué clave fallas más?',
  },
  {
    id: 'dc_008',
    title: '🎨 Actualiza tu perfil de LinkedIn o portafolio',
    description: 'Animation Magazine: abre tu puerta mostrando tu trabajo en LinkedIn, Instagram o Vimeo. Hoy: actualiza tu perfil con tu trabajo más reciente y añade una nota de proceso creativo.',
    category: 'creacion',
    difficulty: 'easy',
    xpReward: 130,
    tips: [
      '"LinkedIn es extremadamente útil. He respondido a personas que me enviaron mensajes diciendo: Vi tu nombre en los créditos finales de esta película..."',
      'Añade tu trabajo más reciente con descripción del proceso, no solo el resultado.',
      'Si es posible, incluye una nota al conectar con alguien en LinkedIn.',
    ],
    newsletterRef: 'nl_021',
    completionQuestion: '¿Qué actualizaste? Comparte el enlace aquí.',
  },
  {
    id: 'dc_009',
    title: '💰 Calcula tu Patrimonio Neto',
    description: 'Suma todos tus activos (ahorro, inversiones, crypto) menos tus deudas. Ese número es tu patrimonio neto HOY. Anótalo — en 3 meses lo comparas.',
    category: 'finanzas',
    difficulty: 'medium',
    xpReward: 150,
    tips: [
      'Activos: cuenta corriente + ahorro + indexados + BTC + otros',
      'Invierte Joven: "Si sigues así, a 20 años puedes plantarte con +300.000€. Nada mal."',
      'El truco: calcularlo trimestralmente. Ver el número crecer es la mejor motivación.',
    ],
    newsletterRef: 'nl_004',
    completionQuestion: '¿Cuál es tu patrimonio neto hoy? Guárdalo para comparar en 90 días.',
  },
  {
    id: 'dc_010',
    title: '📣 Reescribe tu oferta con la fórmula Jamón-Ajo',
    description: 'Adria Lopez Pastor: "Tu marketing es el jamón, tu producto es el ajo." Reescribe tu propuesta de valor centrada en lo que QUIERE el cliente (jamón), no en lo que tú haces (ajo).',
    category: 'marketing',
    difficulty: 'medium',
    xpReward: 140,
    tips: [
      '"No se trata de vender caro, sino de hacer sentir que vale la pena pagar más."',
      'Ejemplo ajo: "Curso de Excel de 10 horas". Ejemplo jamón: "Domina Excel en tu trabajo y consigue ese ascenso".',
      'Escribe 3 versiones y quédate con la que más resuena emocionalmente.',
    ],
    newsletterRef: 'nl_024',
    completionQuestion: '¿Cuál fue tu versión jamón-ajo final? ¿Qué cambió respecto a la versión original?',
  },
  {
    id: 'dc_011',
    title: '₿ Configura tu DCA mensual de crypto',
    description: 'La estrategia recomendada por Invierte Joven y Omar Lopez BTC: compra automática periódica de BTC sin importar el precio. Configúrala hoy en Bit2Me, Trade Republic o Relai.',
    category: 'crypto',
    difficulty: 'medium',
    xpReward: 170,
    tips: [
      'Invierte Joven: "80-90% indexados + 10-20% Bitcoin. Todos los meses durante años, sin importar el precio."',
      'DCA elimina el error de intentar hacer timing al mercado. Nadie lo acierta consistentemente.',
      'Empieza aunque sean 20€/mes. Lo importante es el hábito y la constancia.',
    ],
    newsletterRef: 'nl_007',
    completionQuestion: '¿Cuánto configuraste y en qué plataforma? ¿Qué día del mes?',
  },
  {
    id: 'dc_012',
    title: '🚀 Documenta públicamente tu proceso hoy',
    description: 'Emprende Aprendiendo (caso Schedule I): "No construyas en silencio. Documenta. Comparte. Deja que la gente se suba al tren antes de que arranque." Publica hoy el detrás de escenas de tu proyecto.',
    category: 'emprendimiento',
    difficulty: 'easy',
    xpReward: 130,
    tips: [
      '"Meses de documentación generan miles de personas esperando comprar el día del lanzamiento"',
      'No hace falta que sea perfecto. Una foto, un texto de 200 palabras, un vídeo de 60 segundos.',
      'Documenta el proceso, los errores, las decisiones. Eso conecta más que el resultado.',
    ],
    newsletterRef: 'nl_011',
    completionQuestion: '¿Qué publicaste y en qué red? ¿Qué reacción tuviste?',
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

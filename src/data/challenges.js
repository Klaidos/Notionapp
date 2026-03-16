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
  { id: 'productivity_master', name: 'Maestro Productivo', description: 'Completa 5 retos de productividad', emoji: '⚡', xpNeeded: 0 },
  { id: 'mindset_warrior', name: 'Guerrero Mental', description: 'Completa 5 retos de mentalidad', emoji: '🧠', xpNeeded: 0 },
  { id: 'habit_builder', name: 'Constructor de Hábitos', description: 'Completa 5 retos de hábitos', emoji: '🔄', xpNeeded: 0 },
  { id: 'level_5', name: 'Estratega', description: 'Alcanza el nivel 5', emoji: '♟️', xpNeeded: 1800 },
  { id: 'level_10', name: 'Iluminado', description: 'Alcanza el nivel 10', emoji: '🌟', xpNeeded: 20000 },
  { id: 'reader_100', name: 'Bibliófilo', description: 'Lee 10 newsletters completos', emoji: '📚', xpNeeded: 0 },
];

// Daily challenge pool - rotates based on day of year
export const DAILY_CHALLENGES = [
  {
    id: 'dc_001',
    title: '☀️ Ritual de Mañana',
    description: 'Completa tu mañana sin revisar el teléfono durante la primera hora después de despertar.',
    category: 'habits',
    difficulty: 'medium',
    xpReward: 150,
    tips: [
      'Deja el móvil cargando en otro cuarto',
      'La primera hora define el tono del día',
      'Usa ese tiempo para: ejercicio, meditación o lectura',
    ],
    newsletterRef: 'nl_008',
    completionQuestion: '¿Cómo te sentiste al llegar a la primera hora sin móvil?',
  },
  {
    id: 'dc_002',
    title: '🎯 Una Tarea Importante',
    description: 'Identifica tu tarea más importante del día y complétala ANTES de hacer cualquier otra cosa.',
    category: 'productivity',
    difficulty: 'medium',
    xpReward: 175,
    tips: [
      'La tarea más importante = la que más te cuesta empezar',
      'Hazla en tus primeras 2 horas del día',
      'No revises email antes de completarla',
    ],
    newsletterRef: 'nl_003',
    completionQuestion: '¿Cuál fue tu tarea más importante hoy?',
  },
  {
    id: 'dc_003',
    title: '🧘 Meditación Express',
    description: 'Siéntate 10 minutos en silencio, solo observando tu respiración. Sin guía, sin música.',
    category: 'mindset',
    difficulty: 'easy',
    xpReward: 100,
    tips: [
      'El objetivo no es vaciar la mente, sino observar los pensamientos sin engancharte',
      'Usa un timer para no preocuparte por el tiempo',
      'Cuando tu mente divague (lo hará), gentilmente vuelve a la respiración',
    ],
    newsletterRef: 'nl_006',
    completionQuestion: '¿Pudiste mantener 10 minutos o cuántos completaste?',
  },
  {
    id: 'dc_004',
    title: '📝 Journaling de Gratitud',
    description: 'Escribe 3 cosas específicas por las que estés agradecido hoy. No vale repetir de días anteriores.',
    category: 'mindset',
    difficulty: 'easy',
    xpReward: 80,
    tips: [
      'La especificidad importa: no "mi familia" sino "la llamada de mamá esta mañana"',
      'Añade por qué agradeces cada cosa',
      'Hazlo a la misma hora cada día para convertirlo en hábito',
    ],
    newsletterRef: 'nl_006',
    completionQuestion: '¿Cuál de las 3 cosas te sorprendió más?',
  },
  {
    id: 'dc_005',
    title: '💰 Revisión Financiera',
    description: 'Revisa tus gastos de los últimos 7 días. Clasifícalos en necesidades, deseos y ahorro.',
    category: 'finance',
    difficulty: 'medium',
    xpReward: 160,
    tips: [
      'Usa tu app bancaria o Notion para ver las transacciones',
      'No te juzgues, solo observa los patrones',
      'Identifica un gasto que podrías reducir',
    ],
    newsletterRef: 'nl_011',
    completionQuestion: '¿Encontraste algún gasto sorpresa o patrón que no esperabas?',
  },
  {
    id: 'dc_006',
    title: '🏃 Movimiento de 20 Minutos',
    description: 'Sal a caminar, correr, o haz cualquier ejercicio durante 20 minutos consecutivos.',
    category: 'health',
    difficulty: 'easy',
    xpReward: 120,
    tips: [
      'Sin móvil o con modo avión para maximizar los beneficios cognitivos',
      'Si caminas, elige rutas nuevas para estimular el cerebro',
      'El mejor ejercicio es el que realmente haces',
    ],
    newsletterRef: 'nl_013',
    completionQuestion: '¿Hiciste el ejercicio por la mañana o tarde?',
  },
  {
    id: 'dc_007',
    title: '📚 Lectura Profunda',
    description: 'Lee 20 páginas de un libro (no artículos ni posts) sin interrupciones.',
    category: 'learning',
    difficulty: 'easy',
    xpReward: 110,
    tips: [
      'Teléfono en otro cuarto o modo avión',
      'Toma notas de ideas que te impacten',
      'Si no tienes libro: elige uno de los newsletters de la biblioteca y léelo completo',
    ],
    newsletterRef: 'nl_014',
    completionQuestion: '¿Cuál fue la idea más importante que encontraste?',
  },
  {
    id: 'dc_008',
    title: '🔇 Silencio Digital',
    description: 'Pasa 3 horas consecutivas sin revisar redes sociales, noticias, ni emails.',
    category: 'focus',
    difficulty: 'hard',
    xpReward: 200,
    tips: [
      'Anuncia a quien necesites que estarás desconectado',
      'Úsalo para trabajo profundo o actividad offline que disfrutes',
      'Nota cómo se siente la ausencia de dopamina digital',
    ],
    newsletterRef: 'nl_017',
    completionQuestion: '¿Qué sentiste durante las 3 horas de silencio digital?',
  },
  {
    id: 'dc_009',
    title: '🗣️ Conexión Real',
    description: 'Llama (voz, no mensaje de texto) a alguien que te importe y no hayas contactado en semanas.',
    category: 'relationships',
    difficulty: 'medium',
    xpReward: 130,
    tips: [
      'No hace falta una razón especial, solo querer saber cómo están',
      'Escucha más de lo que hablas',
      'Las relaciones se mantienen con pequeños contactos frecuentes',
    ],
    newsletterRef: 'nl_018',
    completionQuestion: '¿A quién llamaste y cómo fue la conversación?',
  },
  {
    id: 'dc_010',
    title: '🛏️ Noche Perfecta',
    description: 'Prepara tu ambiente de sueño óptimo: sin pantallas 1h antes, habitación fría y oscura, misma hora.',
    category: 'health',
    difficulty: 'easy',
    xpReward: 100,
    tips: [
      'Cena al menos 2h antes de dormir',
      'Anota las preocupaciones del día antes de dormir para "descargar" la mente',
      'La temperatura ideal para dormir es 18-19°C',
    ],
    newsletterRef: 'nl_012',
    completionQuestion: '¿A qué hora dormiste y cómo te despertaste al día siguiente?',
  },
  {
    id: 'dc_011',
    title: '⚡ Procesado GTD',
    description: 'Captura TODO lo que tienes en mente: preocupaciones, tareas, ideas, compromisos. Escríbelo todo.',
    category: 'productivity',
    difficulty: 'medium',
    xpReward: 180,
    tips: [
      'Usa papel, Notion, o cualquier app. Lo que importa es vaciarte',
      'No organices todavía, solo captura',
      'Incluye tanto lo profesional como lo personal',
    ],
    newsletterRef: 'nl_001',
    completionQuestion: '¿Cuántas cosas tenías en mente? ¿Cómo te sientes después de escribirlas?',
  },
  {
    id: 'dc_012',
    title: '🧠 Técnica Feynman',
    description: 'Elige algo que hayas aprendido esta semana y explícalo como si enseñaras a alguien de 12 años.',
    category: 'learning',
    difficulty: 'medium',
    xpReward: 140,
    tips: [
      'Puedes grabarte en video o audio, escribirlo, o explicárselo a alguien real',
      'Cuando te atasques, ahí está el hueco en tu comprensión',
      'La simplicidad en la explicación es señal de comprensión profunda',
    ],
    newsletterRef: 'nl_014',
    completionQuestion: '¿En qué parte te atascaste? ¿Qué tuviste que repasar?',
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

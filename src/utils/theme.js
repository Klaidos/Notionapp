// App Theme - Dark Gamified UI
export const COLORS = {
  // Backgrounds
  bg: '#0A0A0F',
  bgCard: '#12121A',
  bgCardHover: '#1A1A25',
  bgSurface: '#1E1E2E',
  bgSurfaceLight: '#252535',

  // Primary
  primary: '#7C3AED',
  primaryLight: '#A78BFA',
  primaryDark: '#5B21B6',
  primaryGlow: 'rgba(124, 58, 237, 0.3)',

  // Accent
  accent: '#F59E0B',
  accentLight: '#FCD34D',
  accentGlow: 'rgba(245, 158, 11, 0.3)',

  // XP / Gold
  xp: '#F59E0B',
  xpGlow: 'rgba(245, 158, 11, 0.4)',

  // Status
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Text
  textPrimary: '#F1F0FF',
  textSecondary: '#A0A0B8',
  textMuted: '#6B6B80',
  textInverse: '#0A0A0F',

  // Borders
  border: '#2A2A3E',
  borderLight: '#3A3A50',

  // Gradients (used as arrays)
  gradientPrimary: ['#7C3AED', '#5B21B6'],
  gradientAccent: ['#F59E0B', '#D97706'],
  gradientDark: ['#1E1E2E', '#0A0A0F'],
  gradientCard: ['#1A1A25', '#12121A'],
  gradientSuccess: ['#10B981', '#059669'],

  // Category colors
  productivity: '#F59E0B',
  mindset: '#8B5CF6',
  habits: '#10B981',
  finance: '#3B82F6',
  health: '#EF4444',
  learning: '#06B6D4',
  focus: '#F97316',
  relationships: '#EC4899',
};

export const FONTS = {
  regular: 'System',
  bold: 'System',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  primary: {
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  accent: {
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
};

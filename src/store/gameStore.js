// Zustand Global State Store
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLevelForXP, getProgressToNextLevel } from '../data/challenges';

const STORAGE_KEY = '@newsletter_game_state';

const defaultState = {
  // Player stats
  xp: 0,
  streak: 0,
  lastPlayedDate: null,
  completedChallenges: [],
  completedNewsletters: [],
  unlockedBadges: [],
  totalChallengesCompleted: 0,

  // Category progress
  categoryProgress: {
    inversion: 0,
    crypto: 0,
    emprendimiento: 0,
    marketing: 0,
    finanzas: 0,
    libros: 0,
    autonomo: 0,
    creacion: 0,
  },

  // Settings
  dailyGoal: 1, // challenges per day
  notificationsEnabled: true,
  playerName: 'Jugador',

  // App state
  isLoaded: false,
};

const useGameStore = create((set, get) => ({
  ...defaultState,

  // Load state from AsyncStorage
  loadState: async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        set({ ...parsed, isLoaded: true });
      } else {
        set({ isLoaded: true });
      }
    } catch (e) {
      set({ isLoaded: true });
    }
  },

  // Save state to AsyncStorage
  saveState: async () => {
    try {
      const state = get();
      const toSave = {
        xp: state.xp,
        streak: state.streak,
        lastPlayedDate: state.lastPlayedDate,
        completedChallenges: state.completedChallenges,
        completedNewsletters: state.completedNewsletters,
        unlockedBadges: state.unlockedBadges,
        totalChallengesCompleted: state.totalChallengesCompleted,
        categoryProgress: state.categoryProgress,
        dailyGoal: state.dailyGoal,
        notificationsEnabled: state.notificationsEnabled,
        playerName: state.playerName,
      };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.error('Error saving state:', e);
    }
  },

  // Add XP and check for level up
  addXP: async (amount, category = null) => {
    const state = get();
    const oldLevel = getLevelForXP(state.xp);
    const newXP = state.xp + amount;
    const newLevel = getLevelForXP(newXP);

    const updates = { xp: newXP };

    if (category && state.categoryProgress[category] !== undefined) {
      updates.categoryProgress = {
        ...state.categoryProgress,
        [category]: state.categoryProgress[category] + amount,
      };
    }

    set(updates);
    await get().saveState();

    return {
      oldLevel,
      newLevel,
      leveledUp: newLevel.level > oldLevel.level,
      xpGained: amount,
    };
  },

  // Complete a challenge
  completeChallenge: async (challengeId, category) => {
    const state = get();

    if (state.completedChallenges.includes(challengeId)) return null;

    const today = new Date().toDateString();
    const alreadyPlayedToday = state.lastPlayedDate === today;
    const wasPlayedYesterday =
      state.lastPlayedDate === new Date(Date.now() - 86400000).toDateString();
    const newStreak = alreadyPlayedToday
      ? state.streak
      : wasPlayedYesterday
      ? state.streak + 1
      : 1;

    const newBadges = [];

    // Check for first challenge badge
    if (state.completedChallenges.length === 0) {
      newBadges.push('first_challenge');
    }

    // Check streak badges
    if (newStreak === 3) newBadges.push('streak_3');
    if (newStreak === 7) newBadges.push('streak_7');
    if (newStreak === 30) newBadges.push('streak_30');

    // Check category badges
    const categoryCount = state.completedChallenges.filter((id) =>
      id.startsWith(category)
    ).length;
    if (categoryCount + 1 >= 3) {
      const badgeMap = {
        inversion: 'inversor',
        crypto: 'crypto_nerd',
        emprendimiento: 'emprendedor',
        marketing: 'growth_hacker',
        autonomo: 'autonomo_pro',
      };
      if (badgeMap[category]) newBadges.push(badgeMap[category]);
    }

    set({
      completedChallenges: [...state.completedChallenges, challengeId],
      totalChallengesCompleted: state.totalChallengesCompleted + 1,
      streak: newStreak,
      lastPlayedDate: today,
      unlockedBadges: [...new Set([...state.unlockedBadges, ...newBadges])],
    });

    await get().saveState();
    return { newBadges, newStreak };
  },

  // Mark newsletter as read
  markNewsletterRead: async (newsletterId) => {
    const state = get();
    if (!state.completedNewsletters.includes(newsletterId)) {
      const newList = [...state.completedNewsletters, newsletterId];
      set({ completedNewsletters: newList });

      // Unlock reader badge at 10 newsletters
      if (newList.length >= 10 && !state.unlockedBadges.includes('reader_10')) {
        set({ unlockedBadges: [...state.unlockedBadges, 'reader_10'] });
      }

      await get().saveState();
    }
  },

  // Update player name
  setPlayerName: async (name) => {
    set({ playerName: name });
    await get().saveState();
  },

  // Get computed values
  getLevel: () => getLevelForXP(get().xp),
  getLevelProgress: () => getProgressToNextLevel(get().xp),
  isChallengeCompleted: (id) => get().completedChallenges.includes(id),
  isNewsletterRead: (id) => get().completedNewsletters.includes(id),

  // Reset (for testing)
  resetState: async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    set({ ...defaultState, isLoaded: true });
  },
}));

export default useGameStore;

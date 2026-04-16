import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { ChallengeCard } from '../components/ChallengeCard';
import LevelUpModal from '../components/LevelUpModal';
import { DAILY_CHALLENGES, getDailyChallenge, CATEGORIES } from '../data/challenges';
import useGameStore from '../store/gameStore';

const FILTER_OPTIONS = [
  { id: 'all', label: '🎮 Todos' },
  { id: 'pending', label: '⏳ Pendientes' },
  { id: 'completed', label: '✅ Completados' },
  { id: 'inversion', label: '📈 Inversión' },
  { id: 'crypto', label: '₿ Crypto' },
  { id: 'emprendimiento', label: '🚀 Emprender' },
  { id: 'marketing', label: '📣 Marketing' },
  { id: 'finanzas', label: '💰 Finanzas' },
  { id: 'libros', label: '📚 Libros' },
  { id: 'autonomo', label: '💼 Autónomo' },
  { id: 'creacion', label: '🎨 Creación' },
];

export default function ChallengesScreen() {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState('all');
  const [levelUpData, setLevelUpData] = useState(null);

  const completedChallenges = useGameStore((s) => s.completedChallenges);
  const totalChallenges = useGameStore((s) => s.totalChallengesCompleted);
  const streak = useGameStore((s) => s.streak);

  const dailyChallenge = getDailyChallenge();

  const filteredChallenges = DAILY_CHALLENGES.filter((c) => {
    if (filter === 'completed') return completedChallenges.includes(c.id);
    if (filter === 'pending') return !completedChallenges.includes(c.id);
    if (['inversion', 'crypto', 'emprendimiento', 'marketing', 'finanzas', 'libros', 'autonomo', 'creacion'].includes(filter)) {
      return c.category === filter;
    }
    return true;
  });

  const handleChallengeComplete = (result, xpGained) => {
    if (result) {
      setLevelUpData({
        xpGained,
        level: result.leveledUp ? result.newLevel : null,
        newBadges: result.newBadges || [],
      });
    }
  };

  const completedCount = completedChallenges.length;
  const totalCount = DAILY_CHALLENGES.length;
  const completionPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />

        {/* Header Stats */}
        <View style={styles.header}>
          <Text style={styles.title}>⚔️ Retos</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBadge}>
              <Text style={styles.statValue}>{completedCount}/{totalCount}</Text>
              <Text style={styles.statLabel}>Completados</Text>
            </View>
            <View style={styles.statBadge}>
              <Text style={[styles.statValue, { color: COLORS.accent }]}>{streak} 🔥</Text>
              <Text style={styles.statLabel}>Racha</Text>
            </View>
            <View style={styles.statBadge}>
              <Text style={[styles.statValue, { color: COLORS.success }]}>{completionPercent}%</Text>
              <Text style={styles.statLabel}>Progreso</Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: `${completionPercent}%` }]} />
          </View>
        </View>

        {/* Daily Quest Banner */}
        <View style={styles.questBanner}>
          <Text style={styles.questEmoji}>📅</Text>
          <View style={styles.questContent}>
            <Text style={styles.questTitle}>Misión Diaria Activa</Text>
            <Text style={styles.questName}>{dailyChallenge.title}</Text>
          </View>
          <View style={styles.questXP}>
            <Text style={styles.questXPText}>+{dailyChallenge.xpReward}</Text>
            <Text style={styles.questXPLabel}>XP</Text>
          </View>
        </View>

        {/* Filter Chips */}
        <FlatList
          horizontal
          data={FILTER_OPTIONS}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.filterChip, filter === item.id && styles.filterChipActive]}
              onPress={() => setFilter(item.id)}
            >
              <Text style={[styles.filterText, filter === item.id && styles.filterTextActive]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* Challenges List */}
        <FlatList
          data={filteredChallenges}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ChallengeCard
              challenge={item}
              featured={item.id === dailyChallenge.id}
              onComplete={handleChallengeComplete}
            />
          )}
          ListHeaderComponent={
            filter === 'all' ? (
              <View style={styles.listHeader}>
                <Text style={styles.listHeaderTitle}>
                  🎮 {filteredChallenges.length} retos disponibles
                </Text>
                <Text style={styles.listHeaderSub}>
                  Completa retos para ganar XP y subir de nivel
                </Text>
              </View>
            ) : null
          }
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>
                {filter === 'completed' ? '🏆' : '🎯'}
              </Text>
              <Text style={styles.emptyTitle}>
                {filter === 'completed' ? '¡Aún no has completado retos!' : 'Sin retos en esta categoría'}
              </Text>
              <Text style={styles.emptySubtitle}>
                {filter === 'completed'
                  ? 'Completa tu primer reto para ver tu historial aquí'
                  : 'Prueba con otro filtro'}
              </Text>
            </View>
          }
        />
      </View>

      <LevelUpModal
        visible={!!levelUpData}
        level={levelUpData?.level}
        xpGained={levelUpData?.xpGained}
        newBadges={levelUpData?.newBadges}
        onClose={() => setLevelUpData(null)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    backgroundColor: COLORS.bg,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  title: { color: COLORS.textPrimary, fontSize: 22, fontWeight: '800', marginBottom: SPACING.sm },
  statsRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.sm },
  statBadge: {
    flex: 1,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statValue: { color: COLORS.textPrimary, fontSize: 16, fontWeight: '800' },
  statLabel: { color: COLORS.textMuted, fontSize: 10, marginTop: 2 },
  progressBg: {
    height: 6,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
  },
  questBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary + '15',
    margin: SPACING.md,
    marginBottom: 0,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
    gap: SPACING.sm,
  },
  questEmoji: { fontSize: 24 },
  questContent: { flex: 1 },
  questTitle: { color: COLORS.textMuted, fontSize: 11, fontWeight: '600' },
  questName: { color: COLORS.primaryLight, fontSize: 13, fontWeight: '700' },
  questXP: { alignItems: 'center' },
  questXPText: { color: COLORS.xp, fontSize: 18, fontWeight: '900' },
  questXPLabel: { color: COLORS.textMuted, fontSize: 9 },
  filtersContainer: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.xs,
  },
  filterChip: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 8,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.xs,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary + '20',
    borderColor: COLORS.primary,
  },
  filterText: { color: COLORS.textSecondary, fontSize: 13 },
  filterTextActive: { color: COLORS.primaryLight, fontWeight: '700' },
  list: { padding: SPACING.md, paddingTop: SPACING.sm, paddingBottom: SPACING.xxl },
  listHeader: { marginBottom: SPACING.sm },
  listHeaderTitle: { color: COLORS.textPrimary, fontSize: 15, fontWeight: '700' },
  listHeaderSub: { color: COLORS.textMuted, fontSize: 12, marginTop: 2 },
  emptyState: { alignItems: 'center', paddingVertical: SPACING.xxl },
  emptyEmoji: { fontSize: 48, marginBottom: SPACING.md },
  emptyTitle: { color: COLORS.textPrimary, fontSize: 18, fontWeight: '700', textAlign: 'center', marginBottom: 4 },
  emptySubtitle: { color: COLORS.textMuted, fontSize: 14, textAlign: 'center' },
});

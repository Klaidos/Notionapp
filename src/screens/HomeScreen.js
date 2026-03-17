import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../utils/theme';
import XPBar from '../components/XPBar';
import { ChallengeCard } from '../components/ChallengeCard';
import { NewsletterCard } from '../components/NewsletterCard';
import LevelUpModal from '../components/LevelUpModal';
import { getDailyChallenge, getWeeklyChallenges } from '../data/challenges';
import { getDailyFeatured, CATEGORIES } from '../data/newsletters';
import useGameStore from '../store/gameStore';

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [levelUpData, setLevelUpData] = useState(null);

  const playerName = useGameStore((s) => s.playerName);
  const streak = useGameStore((s) => s.streak);
  const xp = useGameStore((s) => s.xp);
  const totalChallenges = useGameStore((s) => s.totalChallengesCompleted);
  const getLevel = useGameStore((s) => s.getLevel);

  const level = getLevel();
  const dailyChallenge = getDailyChallenge();
  const weeklyChallenges = getWeeklyChallenges();
  const featuredNewsletter = getDailyFeatured();

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return '🌅 Buenos días';
    if (h < 19) return '☀️ Buenas tardes';
    return '🌙 Buenas noches';
  };

  const handleChallengeComplete = (result, xpGained) => {
    if (result) {
      setLevelUpData({
        xpGained,
        level: result.leveledUp ? result.newLevel : null,
        newBadges: result.newBadges || [],
      });
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 600);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <ScrollView
        style={[styles.container, { paddingTop: insets.top }]}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primary}
            colors={[COLORS.primary]}
          />
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting()},</Text>
            <Text style={styles.playerName}>{playerName}</Text>
          </View>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.profileEmoji}>{level.emoji}</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <StatCard emoji="🔥" value={streak} label="Racha" color={COLORS.accent} />
          <StatCard emoji="⚡" value={xp} label="XP Total" color={COLORS.xp} />
          <StatCard emoji="✅" value={totalChallenges} label="Retos" color={COLORS.success} />
          <StatCard emoji={level.emoji} value={`Lv.${level.level}`} label={level.name} color={COLORS.primaryLight} />
        </View>

        {/* XP Bar */}
        <View style={styles.xpSection}>
          <XPBar />
        </View>

        {/* Streak Banner */}
        {streak > 0 && (
          <View style={styles.streakBanner}>
            <Text style={styles.streakEmoji}>🔥</Text>
            <View>
              <Text style={styles.streakTitle}>¡{streak} días en racha!</Text>
              <Text style={styles.streakSub}>
                {streak < 3
                  ? 'Sigue así para desbloquear la insignia "En Racha"'
                  : streak < 7
                  ? `${7 - streak} días para "Semana Perfecta" 💪`
                  : '¡Eres imparable! Mantén la racha 🚀'}
              </Text>
            </View>
          </View>
        )}

        {/* Daily Challenge */}
        <SectionHeader
          title="⚔️ Reto del Día"
          subtitle="Complétalo hoy para ganar XP"
          onSeeAll={() => navigation.navigate('Challenges')}
          seeAllLabel="Ver todos"
        />
        <ChallengeCard
          challenge={dailyChallenge}
          featured={true}
          onComplete={handleChallengeComplete}
        />

        {/* Weekly Challenges */}
        <SectionHeader
          title="📆 Esta Semana"
          subtitle="Retos semanales adicionales"
          onSeeAll={() => navigation.navigate('Challenges')}
          seeAllLabel="Ver todos"
        />
        {weeklyChallenges.slice(1).map((ch) => (
          <ChallengeCard
            key={ch.id}
            challenge={ch}
            onComplete={handleChallengeComplete}
          />
        ))}

        {/* Featured Newsletter */}
        <SectionHeader
          title="📬 Newsletter Destacado"
          subtitle="Conocimiento de hoy"
          onSeeAll={() => navigation.navigate('Library')}
          seeAllLabel="Biblioteca"
        />
        <NewsletterCard
          newsletter={featuredNewsletter}
          onPress={() =>
            navigation.navigate('NewsletterDetail', { newsletter: featuredNewsletter })
          }
        />

        {/* Categories Quick Access */}
        <SectionHeader
          title="📚 Explorar por Categoría"
          subtitle="Encuentra lo que necesitas"
        />
        <View style={styles.categoriesGrid}>
          {Object.values(CATEGORIES).map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.catCard, { borderColor: cat.color + '40' }]}
              onPress={() => navigation.navigate('Library', { categoryFilter: cat.id })}
              activeOpacity={0.8}
            >
              <Text style={styles.catEmoji}>{cat.emoji}</Text>
              <Text style={[styles.catName, { color: cat.color }]}>{cat.name}</Text>
              <Text style={styles.catDesc} numberOfLines={1}>{cat.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Level Up Modal */}
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

function StatCard({ emoji, value, label, color }) {
  return (
    <View style={[styles.statCard, { borderColor: color + '30' }]}>
      <Text style={styles.statEmoji}>{emoji}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function SectionHeader({ title, subtitle, onSeeAll, seeAllLabel }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionHeaderLeft}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {subtitle && <Text style={styles.sectionSubtitle}>{subtitle}</Text>}
      </View>
      {onSeeAll && (
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>{seeAllLabel} →</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { padding: SPACING.md, paddingBottom: SPACING.xxl },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  greeting: { color: COLORS.textMuted, fontSize: 14 },
  playerName: { color: COLORS.textPrimary, fontSize: 24, fontWeight: '800' },
  profileBtn: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary + '40',
  },
  profileEmoji: { fontSize: 24 },
  statsRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    borderWidth: 1,
  },
  statEmoji: { fontSize: 16, marginBottom: 2 },
  statValue: { fontSize: 15, fontWeight: '800' },
  statLabel: { color: COLORS.textMuted, fontSize: 9, textAlign: 'center' },
  xpSection: { marginBottom: SPACING.md },
  streakBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: COLORS.accent + '15',
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.accent + '30',
  },
  streakEmoji: { fontSize: 32 },
  streakTitle: { color: COLORS.accentLight, fontWeight: '700', fontSize: 15 },
  streakSub: { color: COLORS.textMuted, fontSize: 12, marginTop: 2 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: SPACING.sm,
    marginTop: SPACING.md,
  },
  sectionHeaderLeft: { flex: 1 },
  sectionTitle: { color: COLORS.textPrimary, fontSize: 16, fontWeight: '700' },
  sectionSubtitle: { color: COLORS.textMuted, fontSize: 12, marginTop: 2 },
  seeAll: { color: COLORS.primaryLight, fontSize: 13, fontWeight: '600' },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  catCard: {
    width: '47%',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
  },
  catEmoji: { fontSize: 24, marginBottom: 4 },
  catName: { fontSize: 13, fontWeight: '700', marginBottom: 2 },
  catDesc: { color: COLORS.textMuted, fontSize: 11 },
});

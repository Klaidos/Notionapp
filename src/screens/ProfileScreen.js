import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
  Modal,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../utils/theme';
import XPBar from '../components/XPBar';
import { BADGES, LEVELS, DAILY_CHALLENGES } from '../data/challenges';
import { NEWSLETTERS, CATEGORIES } from '../data/newsletters';
import useGameStore from '../store/gameStore';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [showLevels, setShowLevels] = useState(false);

  const playerName = useGameStore((s) => s.playerName);
  const xp = useGameStore((s) => s.xp);
  const streak = useGameStore((s) => s.streak);
  const totalChallenges = useGameStore((s) => s.totalChallengesCompleted);
  const unlockedBadges = useGameStore((s) => s.unlockedBadges);
  const completedNewsletters = useGameStore((s) => s.completedNewsletters);
  const categoryProgress = useGameStore((s) => s.categoryProgress);
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const resetState = useGameStore((s) => s.resetState);
  const getLevel = useGameStore((s) => s.getLevel);
  const getLevelProgress = useGameStore((s) => s.getLevelProgress);

  const level = getLevel();
  const progress = getLevelProgress();

  const handleSaveName = async () => {
    if (nameInput.trim()) {
      await setPlayerName(nameInput.trim());
    }
    setEditingName(false);
  };

  const handleReset = () => {
    Alert.alert(
      '⚠️ Reiniciar Progreso',
      '¿Estás seguro? Perderás todo tu XP, retos completados y racha.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Reiniciar',
          style: 'destructive',
          onPress: async () => {
            await resetState();
          },
        },
      ]
    );
  };

  // Category stats
  const topCategory = Object.entries(categoryProgress)
    .sort(([, a], [, b]) => b - a)
    .find(([, xp]) => xp > 0);

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />

      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { borderColor: COLORS.primary }]}>
            <Text style={styles.avatarEmoji}>{level.emoji}</Text>
          </View>
          <View style={[styles.levelBadge, { backgroundColor: COLORS.primary }]}>
            <Text style={styles.levelBadgeText}>{level.level}</Text>
          </View>
        </View>

        {editingName ? (
          <View style={styles.editNameRow}>
            <TextInput
              style={styles.nameInput}
              value={nameInput}
              onChangeText={setNameInput}
              placeholder={playerName}
              placeholderTextColor={COLORS.textMuted}
              autoFocus
              onSubmitEditing={handleSaveName}
            />
            <TouchableOpacity style={styles.saveNameBtn} onPress={handleSaveName}>
              <Text style={styles.saveNameText}>✓</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => { setNameInput(playerName); setEditingName(true); }}
            style={styles.nameRow}
          >
            <Text style={styles.playerName}>{playerName}</Text>
            <Text style={styles.editIcon}>✏️</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.levelTitle}>
          {level.emoji} {level.name} · Nivel {level.level}
        </Text>
      </View>

      {/* XP Bar */}
      <View style={styles.section}>
        <XPBar />
      </View>

      {/* Stats Grid */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📊 Estadísticas</Text>
        <View style={styles.statsGrid}>
          <BigStat emoji="⚡" value={xp.toLocaleString()} label="XP Total" color={COLORS.xp} />
          <BigStat emoji="🔥" value={streak} label="Racha Actual" color={COLORS.accent} />
          <BigStat emoji="✅" value={totalChallenges} label="Retos Hechos" color={COLORS.success} />
          <BigStat emoji="📚" value={completedNewsletters.length} label="Newsletters Leídos" color={COLORS.info} />
          <BigStat
            emoji="🏆"
            value={unlockedBadges.length}
            label="Insignias"
            color={COLORS.primaryLight}
          />
          <BigStat
            emoji="🎯"
            value={`${Math.round((totalChallenges / DAILY_CHALLENGES.length) * 100)}%`}
            label="Completado"
            color={COLORS.focus}
          />
        </View>
      </View>

      {/* Top Category */}
      {topCategory && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌟 Tu Especialidad</Text>
          <View style={styles.topCategoryCard}>
            <Text style={styles.topCategoryEmoji}>
              {CATEGORIES[topCategory[0].toUpperCase()]?.emoji || '⭐'}
            </Text>
            <View style={styles.topCategoryInfo}>
              <Text style={styles.topCategoryName}>
                {CATEGORIES[topCategory[0].toUpperCase()]?.name || topCategory[0]}
              </Text>
              <Text style={styles.topCategoryXP}>⚡ {topCategory[1]} XP ganados aquí</Text>
            </View>
          </View>
        </View>
      )}

      {/* Category Progress */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📈 Progreso por Área</Text>
        {Object.entries(CATEGORIES).map(([key, cat]) => {
          const catXP = categoryProgress[cat.id] || 0;
          const maxCatXP = 1500;
          const pct = Math.min(100, Math.round((catXP / maxCatXP) * 100));
          return (
            <View key={key} style={styles.catRow}>
              <Text style={styles.catEmoji}>{cat.emoji}</Text>
              <View style={styles.catInfo}>
                <View style={styles.catLabelRow}>
                  <Text style={styles.catName}>{cat.name}</Text>
                  <Text style={[styles.catXP, { color: cat.color }]}>⚡{catXP}</Text>
                </View>
                <View style={styles.catBar}>
                  <View
                    style={[
                      styles.catBarFill,
                      { width: `${pct}%`, backgroundColor: cat.color },
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>

      {/* Badges */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏅 Insignias</Text>
        <View style={styles.badgesGrid}>
          {BADGES.map((badge) => {
            const isUnlocked = unlockedBadges.includes(badge.id);
            return (
              <View
                key={badge.id}
                style={[styles.badgeCard, !isUnlocked && styles.badgeLocked]}
              >
                <Text style={[styles.badgeEmoji, !isUnlocked && styles.badgeEmojiLocked]}>
                  {isUnlocked ? badge.emoji : '🔒'}
                </Text>
                <Text style={[styles.badgeName, !isUnlocked && styles.badgeNameLocked]}>
                  {badge.name}
                </Text>
                <Text style={styles.badgeDesc} numberOfLines={2}>
                  {badge.description}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Level Roadmap Button */}
      <TouchableOpacity
        style={styles.roadmapBtn}
        onPress={() => setShowLevels(true)}
        activeOpacity={0.8}
      >
        <Text style={styles.roadmapBtnText}>🗺️ Ver Mapa de Niveles</Text>
      </TouchableOpacity>

      {/* Danger Zone */}
      <View style={styles.dangerZone}>
        <Text style={styles.dangerTitle}>⚠️ Zona de Peligro</Text>
        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetBtnText}>Reiniciar Todo el Progreso</Text>
        </TouchableOpacity>
      </View>

      {/* Levels Modal */}
      <Modal
        visible={showLevels}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowLevels(false)}
      >
        <ScrollView style={styles.levelsModal}>
          <View style={styles.levelsHeader}>
            <Text style={styles.levelsTitle}>🗺️ Mapa de Niveles</Text>
            <TouchableOpacity onPress={() => setShowLevels(false)}>
              <Text style={styles.closeText}>✕ Cerrar</Text>
            </TouchableOpacity>
          </View>
          {LEVELS.map((lvl) => {
            const isCurrent = level.level === lvl.level;
            const isPassed = xp >= lvl.minXP;
            return (
              <View
                key={lvl.level}
                style={[
                  styles.levelRow,
                  isCurrent && styles.levelRowCurrent,
                  !isPassed && styles.levelRowLocked,
                ]}
              >
                <Text style={styles.levelRowEmoji}>{isPassed ? lvl.emoji : '🔒'}</Text>
                <View style={styles.levelRowInfo}>
                  <Text style={[styles.levelRowName, isCurrent && { color: COLORS.primaryLight }]}>
                    Nivel {lvl.level} · {lvl.name}
                    {isCurrent ? ' ← TÚ' : ''}
                  </Text>
                  <Text style={styles.levelRowXP}>
                    {lvl.maxXP === Infinity
                      ? `${lvl.minXP.toLocaleString()}+ XP`
                      : `${lvl.minXP.toLocaleString()} – ${lvl.maxXP.toLocaleString()} XP`}
                  </Text>
                </View>
                {isPassed && <Text style={styles.levelCheckmark}>✓</Text>}
              </View>
            );
          })}
        </ScrollView>
      </Modal>
    </ScrollView>
  );
}

function BigStat({ emoji, value, label, color }) {
  return (
    <View style={styles.bigStat}>
      <Text style={styles.bigStatEmoji}>{emoji}</Text>
      <Text style={[styles.bigStatValue, { color }]}>{value}</Text>
      <Text style={styles.bigStatLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  hero: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  avatarContainer: { position: 'relative', marginBottom: SPACING.md },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    ...SHADOWS.primary,
  },
  avatarEmoji: { fontSize: 40 },
  levelBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelBadgeText: { color: '#fff', fontSize: 12, fontWeight: '900' },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: 4 },
  playerName: { color: COLORS.textPrimary, fontSize: 26, fontWeight: '900' },
  editIcon: { fontSize: 16 },
  editNameRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: 4 },
  nameInput: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    borderWidth: 1,
    borderColor: COLORS.primary,
    minWidth: 150,
  },
  saveNameBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveNameText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  levelTitle: { color: COLORS.textMuted, fontSize: 14 },
  section: { padding: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  bigStat: {
    width: '30%',
    flex: 1,
    minWidth: '28%',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  bigStatEmoji: { fontSize: 22, marginBottom: 4 },
  bigStatValue: { fontSize: 20, fontWeight: '800' },
  bigStatLabel: { color: COLORS.textMuted, fontSize: 10, textAlign: 'center', marginTop: 2 },
  topCategoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    gap: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.primary + '40',
  },
  topCategoryEmoji: { fontSize: 32 },
  topCategoryInfo: { flex: 1 },
  topCategoryName: { color: COLORS.textPrimary, fontSize: 16, fontWeight: '700' },
  topCategoryXP: { color: COLORS.xp, fontSize: 13, marginTop: 2 },
  catRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.sm },
  catEmoji: { fontSize: 20, width: 28, textAlign: 'center' },
  catInfo: { flex: 1 },
  catLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  catName: { color: COLORS.textSecondary, fontSize: 13 },
  catXP: { fontSize: 12, fontWeight: '700' },
  catBar: {
    height: 6,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.full,
    overflow: 'hidden',
  },
  catBarFill: { height: '100%', borderRadius: RADIUS.full },
  badgesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  badgeCard: {
    width: '30%',
    flex: 1,
    minWidth: '28%',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
  },
  badgeLocked: { borderColor: COLORS.border, opacity: 0.5 },
  badgeEmoji: { fontSize: 28, marginBottom: 4 },
  badgeEmojiLocked: { opacity: 0.4 },
  badgeName: { color: COLORS.textPrimary, fontSize: 11, fontWeight: '700', textAlign: 'center', marginBottom: 2 },
  badgeNameLocked: { color: COLORS.textMuted },
  badgeDesc: { color: COLORS.textMuted, fontSize: 9, textAlign: 'center', lineHeight: 13 },
  roadmapBtn: {
    margin: SPACING.md,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary + '40',
  },
  roadmapBtnText: { color: COLORS.primaryLight, fontWeight: '700', fontSize: 14 },
  dangerZone: {
    margin: SPACING.md,
    padding: SPACING.md,
    backgroundColor: COLORS.error + '10',
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.error + '30',
    marginBottom: SPACING.xxl,
  },
  dangerTitle: { color: COLORS.error, fontWeight: '700', fontSize: 13, marginBottom: SPACING.sm },
  resetBtn: {
    backgroundColor: COLORS.error + '20',
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.error + '40',
  },
  resetBtnText: { color: COLORS.error, fontWeight: '600', fontSize: 13 },
  levelsModal: { flex: 1, backgroundColor: COLORS.bg },
  levelsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    paddingTop: SPACING.xl,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  levelsTitle: { color: COLORS.textPrimary, fontSize: 20, fontWeight: '800' },
  closeText: { color: COLORS.primaryLight, fontSize: 14, fontWeight: '600' },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: SPACING.sm,
  },
  levelRowCurrent: { backgroundColor: COLORS.primary + '10' },
  levelRowLocked: { opacity: 0.4 },
  levelRowEmoji: { fontSize: 28, width: 36, textAlign: 'center' },
  levelRowInfo: { flex: 1 },
  levelRowName: { color: COLORS.textPrimary, fontSize: 15, fontWeight: '600' },
  levelRowXP: { color: COLORS.textMuted, fontSize: 12, marginTop: 2 },
  levelCheckmark: { color: COLORS.success, fontSize: 18, fontWeight: '700' },
});

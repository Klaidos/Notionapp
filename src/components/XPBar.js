import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import useGameStore from '../store/gameStore';

export default function XPBar({ compact = false }) {
  const xp = useGameStore((s) => s.xp);
  const getLevel = useGameStore((s) => s.getLevel);
  const getLevelProgress = useGameStore((s) => s.getLevelProgress);

  const level = getLevel();
  const progress = getLevelProgress();

  const animWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animWidth, {
      toValue: progress,
      useNativeDriver: false,
      tension: 50,
      friction: 7,
    }).start();
  }, [progress]);

  const widthInterpolated = animWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  if (compact) {
    return (
      <View style={styles.compactContainer}>
        <Text style={styles.compactLevel}>
          {level.emoji} Lv.{level.level}
        </Text>
        <View style={styles.compactBar}>
          <Animated.View style={[styles.compactFill, { width: widthInterpolated }]} />
        </View>
        <Text style={styles.compactXP}>⚡{xp}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.levelRow}>
        <View style={styles.levelBadge}>
          <Text style={styles.levelEmoji}>{level.emoji}</Text>
          <Text style={styles.levelText}>Nivel {level.level}</Text>
          <Text style={styles.levelName}>{level.name}</Text>
        </View>
        <View style={styles.xpContainer}>
          <Text style={styles.xpLabel}>⚡ XP Total</Text>
          <Text style={styles.xpValue}>{xp.toLocaleString()}</Text>
        </View>
      </View>

      <View style={styles.barContainer}>
        <View style={styles.barBg}>
          <Animated.View
            style={[
              styles.barFill,
              { width: widthInterpolated },
            ]}
          />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>

      <Text style={styles.nextLevel}>
        {level.maxXP === Infinity
          ? '¡Nivel máximo alcanzado! 🌟'
          : `${(level.maxXP - xp).toLocaleString()} XP para nivel ${level.level + 1}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  levelEmoji: { fontSize: 20 },
  levelText: {
    color: COLORS.primaryLight,
    fontWeight: '700',
    fontSize: 16,
  },
  levelName: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  xpContainer: { alignItems: 'flex-end' },
  xpLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
  },
  xpValue: {
    color: COLORS.xp,
    fontWeight: '800',
    fontSize: 18,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  barBg: {
    flex: 1,
    height: 10,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.full,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  progressText: {
    color: COLORS.primaryLight,
    fontSize: 12,
    fontWeight: '600',
    width: 35,
    textAlign: 'right',
  },
  nextLevel: {
    color: COLORS.textMuted,
    fontSize: 11,
    textAlign: 'center',
  },
  // Compact
  compactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  compactLevel: {
    color: COLORS.primaryLight,
    fontSize: 13,
    fontWeight: '700',
  },
  compactBar: {
    flex: 1,
    height: 6,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.full,
    overflow: 'hidden',
  },
  compactFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
  },
  compactXP: {
    color: COLORS.xp,
    fontSize: 12,
    fontWeight: '700',
  },
});

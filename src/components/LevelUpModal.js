import React, { useEffect, useRef } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../utils/theme';

export default function LevelUpModal({ visible, level, xpGained, newBadges = [], onClose }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 60,
          friction: 6,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scaleAnim.setValue(0);
      opacityAnim.setValue(0);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.container,
            { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
          ]}
        >
          {/* Glow effect */}
          <View style={styles.glow} />

          <Text style={styles.superTitle}>¡XP GANADOS!</Text>
          <Text style={styles.xpAmount}>+{xpGained} ⚡</Text>

          {level && (
            <>
              <View style={styles.divider} />
              <Text style={styles.levelUpText}>¡NIVEL ALCANZADO!</Text>
              <Text style={styles.levelEmoji}>{level.emoji}</Text>
              <Text style={styles.levelName}>{level.name}</Text>
              <Text style={styles.levelNumber}>Nivel {level.level}</Text>
            </>
          )}

          {newBadges.length > 0 && (
            <View style={styles.badgesSection}>
              <Text style={styles.badgesTitle}>🏅 Insignias Desbloqueadas</Text>
              {newBadges.map((badge) => (
                <View key={badge} style={styles.badgeRow}>
                  <Text style={styles.badgeEmoji}>🏆</Text>
                  <Text style={styles.badgeName}>{badge}</Text>
                </View>
              ))}
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>¡Seguir jugando! 🎮</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  container: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    borderWidth: 2,
    borderColor: COLORS.primary,
    ...SHADOWS.primary,
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    opacity: 0.12,
  },
  superTitle: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: SPACING.sm,
  },
  xpAmount: {
    color: COLORS.xp,
    fontSize: 48,
    fontWeight: '900',
    textShadowColor: COLORS.xp,
    textShadowRadius: 20,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    width: '80%',
    marginVertical: SPACING.md,
  },
  levelUpText: {
    color: COLORS.primaryLight,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: SPACING.sm,
  },
  levelEmoji: { fontSize: 52, marginBottom: SPACING.xs },
  levelName: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  levelNumber: { color: COLORS.textMuted, fontSize: 14, marginBottom: SPACING.md },
  badgesSection: {
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    width: '100%',
    marginBottom: SPACING.md,
    alignItems: 'center',
  },
  badgesTitle: {
    color: COLORS.accentLight,
    fontWeight: '700',
    fontSize: 13,
    marginBottom: SPACING.sm,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  badgeEmoji: { fontSize: 20 },
  badgeName: { color: COLORS.textPrimary, fontSize: 14, fontWeight: '600' },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    ...SHADOWS.primary,
    marginTop: SPACING.sm,
  },
  buttonText: { color: '#fff', fontWeight: '800', fontSize: 16 },
});

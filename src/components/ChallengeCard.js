import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  ScrollView,
  Animated,
} from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../utils/theme';
import { DIFFICULTY_CONFIG, CATEGORIES } from '../data/challenges';
import useGameStore from '../store/gameStore';

export function ChallengeCard({ challenge, featured = false, onComplete }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [reflection, setReflection] = useState('');
  const isChallengeCompleted = useGameStore((s) => s.isChallengeCompleted);
  const completeChallenge = useGameStore((s) => s.completeChallenge);
  const addXP = useGameStore((s) => s.addXP);

  const isCompleted = isChallengeCompleted(challenge.id);
  const diff = DIFFICULTY_CONFIG[challenge.difficulty];
  const category = CATEGORIES[challenge.category?.toUpperCase()];

  const handleComplete = async () => {
    if (isCompleted) return;

    const challengeResult = await completeChallenge(challenge.id, challenge.category);
    const xpResult = await addXP(challenge.xpReward, challenge.category);

    setModalVisible(false);
    if (onComplete) {
      onComplete(
        { ...challengeResult, leveledUp: xpResult?.leveledUp, newLevel: xpResult?.newLevel },
        challenge.xpReward
      );
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.card,
          featured && styles.featuredCard,
          isCompleted && styles.completedCard,
        ]}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.85}
      >
        {featured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>⚔️ RETO DEL DÍA</Text>
          </View>
        )}

        <View style={styles.header}>
          <Text style={styles.emoji}>{category?.emoji || '🎯'}</Text>
          <View style={styles.headerText}>
            <Text style={[styles.title, featured && styles.featuredTitle]}>
              {challenge.title}
            </Text>
            <View style={styles.badges}>
              <View style={[styles.diffBadge, { backgroundColor: diff?.color + '20' }]}>
                <Text style={[styles.diffText, { color: diff?.color }]}>
                  {diff?.emoji} {diff?.label}
                </Text>
              </View>
              {category && (
                <View style={[styles.catBadge, { backgroundColor: category.color + '20' }]}>
                  <Text style={[styles.catText, { color: category.color }]}>
                    {category.name}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.xpBadge}>
            <Text style={styles.xpValue}>+{challenge.xpReward}</Text>
            <Text style={styles.xpLabel}>XP</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={featured ? 3 : 2}>
          {challenge.description}
        </Text>

        {isCompleted ? (
          <View style={styles.completedBanner}>
            <Text style={styles.completedText}>✅ Completado · +{challenge.xpReward} XP ganados</Text>
          </View>
        ) : (
          <View style={styles.startButton}>
            <Text style={styles.startText}>
              {featured ? '⚔️ Aceptar Reto' : '▶ Ver Reto'}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Challenge Detail Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView style={styles.modal} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={[styles.modalHeader, { backgroundColor: (category?.color || COLORS.primary) + '15' }]}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.modalEmoji}>{category?.emoji || '🎯'}</Text>
            <Text style={styles.modalTitle}>{challenge.title}</Text>
            <View style={styles.modalBadges}>
              <View style={[styles.diffBadge, { backgroundColor: diff?.color + '20' }]}>
                <Text style={[styles.diffText, { color: diff?.color }]}>
                  {diff?.emoji} {diff?.label}
                </Text>
              </View>
              <Text style={styles.modalXP}>⚡ +{challenge.xpReward} XP</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.modalSection}>
            <Text style={styles.sectionLabel}>🎯 El Reto</Text>
            <Text style={styles.modalDesc}>{challenge.description}</Text>
          </View>

          {/* Tips */}
          <View style={styles.modalSection}>
            <Text style={styles.sectionLabel}>💡 Tips para lograrlo</Text>
            {challenge.tips?.map((tip, i) => (
              <View key={i} style={styles.tipRow}>
                <Text style={styles.tipDot}>•</Text>
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>

          {/* Duration */}
          {challenge.duration && (
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>
                ⏰ Duración: {
                  challenge.duration === 'today' ? 'Hoy' :
                  challenge.duration === 'tonight' ? 'Esta noche' :
                  challenge.duration === '24h' ? '24 horas' :
                  challenge.duration
                }
              </Text>
            </View>
          )}

          {/* Reflection if not completed */}
          {!isCompleted && (
            <View style={styles.modalSection}>
              <Text style={styles.sectionLabel}>📝 {challenge.completionQuestion || '¿Cómo fue?'}</Text>
              <TextInput
                style={styles.reflectionInput}
                value={reflection}
                onChangeText={setReflection}
                placeholder="Escribe tu reflexión aquí (opcional)..."
                placeholderTextColor={COLORS.textMuted}
                multiline
                numberOfLines={4}
              />
            </View>
          )}

          {/* Action Button */}
          <TouchableOpacity
            style={[styles.completeButton, isCompleted && styles.completedButton]}
            onPress={isCompleted ? () => setModalVisible(false) : handleComplete}
            activeOpacity={0.8}
          >
            <Text style={styles.completeButtonText}>
              {isCompleted
                ? `✅ Ya completaste este reto (+${challenge.xpReward} XP)`
                : `⚡ Completar Reto y Ganar ${challenge.xpReward} XP`}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.sm,
  },
  featuredCard: {
    backgroundColor: COLORS.bgCard,
    borderColor: COLORS.primary + '60',
    borderWidth: 1.5,
    ...SHADOWS.primary,
  },
  completedCard: {
    borderColor: COLORS.success + '40',
    backgroundColor: COLORS.success + '06',
  },
  featuredBadge: {
    backgroundColor: COLORS.primary + '20',
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
    marginBottom: SPACING.sm,
  },
  featuredText: { color: COLORS.primaryLight, fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  emoji: { fontSize: 28, width: 36, textAlign: 'center' },
  headerText: { flex: 1 },
  title: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 4,
  },
  featuredTitle: { fontSize: 17 },
  badges: { flexDirection: 'row', gap: SPACING.xs, flexWrap: 'wrap' },
  diffBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.full,
  },
  diffText: { fontSize: 11, fontWeight: '600' },
  catBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.full,
  },
  catText: { fontSize: 11, fontWeight: '600' },
  xpBadge: { alignItems: 'center', minWidth: 44 },
  xpValue: { color: COLORS.xp, fontWeight: '800', fontSize: 18 },
  xpLabel: { color: COLORS.textMuted, fontSize: 10, fontWeight: '600' },
  description: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: SPACING.sm,
  },
  completedBanner: {
    backgroundColor: COLORS.success + '15',
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
  },
  completedText: { color: COLORS.success, fontSize: 13, fontWeight: '600' },
  startButton: {
    backgroundColor: COLORS.primary + '20',
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary + '40',
  },
  startText: { color: COLORS.primaryLight, fontWeight: '700', fontSize: 14 },
  // Modal
  modal: { flex: 1, backgroundColor: COLORS.bg },
  modalHeader: {
    padding: SPACING.xl,
    alignItems: 'center',
    paddingTop: SPACING.xxl,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    padding: SPACING.sm,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.full,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: { color: COLORS.textSecondary, fontSize: 16, fontWeight: '700' },
  modalEmoji: { fontSize: 48, marginBottom: SPACING.sm },
  modalTitle: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: SPACING.sm,
  },
  modalBadges: { flexDirection: 'row', gap: SPACING.sm, alignItems: 'center' },
  modalXP: { color: COLORS.xp, fontWeight: '700', fontSize: 16 },
  modalSection: {
    padding: SPACING.md,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionLabel: {
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: SPACING.sm,
  },
  modalDesc: { color: COLORS.textSecondary, fontSize: 15, lineHeight: 22 },
  tipRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.xs },
  tipDot: { color: COLORS.primary, fontSize: 16, lineHeight: 22 },
  tipText: { color: COLORS.textSecondary, fontSize: 14, flex: 1, lineHeight: 20 },
  durationBadge: {
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    alignItems: 'center',
  },
  durationText: { color: COLORS.textMuted, fontSize: 13 },
  reflectionInput: {
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    color: COLORS.textPrimary,
    fontSize: 14,
    minHeight: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  completeButton: {
    margin: SPACING.md,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.xxl,
    ...SHADOWS.primary,
  },
  completedButton: {
    backgroundColor: COLORS.bgSurface,
    borderWidth: 1,
    borderColor: COLORS.success,
  },
  completeButtonText: { color: COLORS.textPrimary, fontWeight: '800', fontSize: 15 },
});

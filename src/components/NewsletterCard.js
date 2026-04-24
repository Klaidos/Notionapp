import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../utils/theme';
import { CATEGORIES, DIFFICULTY_CONFIG } from '../data/challenges';
import useGameStore from '../store/gameStore';

// ── Markdown cleanup ──────────────────────────────────────────────────────────
function cleanMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/^#{1,6}\s*/gm, '')            // remove # headings
    .replace(/^[-*]\s*\[[ xX]\]\s*/gm, '')  // remove task list markers - [ ]
    .replace(/^\s*[•·▪]\s*/gm, '')          // remove bullet points
    .replace(/^\s*\d+[.)]\s+/gm, '')        // remove numbered lists
    .replace(/\*\*(.*?)\*\*/g, '$1')        // remove **bold**
    .replace(/\*(.*?)\*/g, '$1')            // remove *italic*
    .replace(/`(.*?)`/g, '$1')             // remove `code`
    .replace(/\t/g, ' ')                    // tabs → space
    .replace(/\n{3,}/g, '\n\n')            // collapse extra newlines
    .trim();
}

// Pick a real insight: skip generic headers, fall back to first howToApply step
function resolveKeyInsight(newsletter) {
  const raw = newsletter.keyInsight || '';
  const cleaned = cleanMarkdown(raw);

  const isGenericHeader =
    !cleaned ||
    /^conceptos principales/i.test(cleaned) ||
    /^lo que aprend/i.test(cleaned) ||
    /^apuntes/i.test(cleaned) ||
    /^resumen/i.test(cleaned) ||
    cleaned.length < 20;

  if (isGenericHeader) {
    // Use the first real howToApply point as the key insight
    const firstStep = newsletter.howToApply?.[0];
    if (firstStep) return cleanMarkdown(firstStep);
    // Last resort: first sentence of summary
    const summaryClean = cleanMarkdown(newsletter.summary || '');
    const firstSentence = summaryClean.split(/[.!?]\s/)[0];
    return firstSentence || summaryClean;
  }

  return cleaned;
}

function resolveDailyApplication(newsletter) {
  const da = newsletter.dailyApplication;
  if (da && da.trim().length > 5) return cleanMarkdown(da);
  // Use the last howToApply step as the "today task"
  const steps = newsletter.howToApply || [];
  if (steps.length > 0) {
    return `Haz esto hoy: ${cleanMarkdown(steps[steps.length - 1])}`;
  }
  return 'Elige una idea de este artículo y aplícala antes de que acabe el día.';
}

function resolvePersonalExample(newsletter) {
  const pe = newsletter.personalExample;
  if (pe && pe.trim().length > 5) return cleanMarkdown(pe);
  const insight = resolveKeyInsight(newsletter);
  return `Pregúntate: ¿cómo aplica esto a tu situación? Idea clave que puedes usar: "${insight.substring(0, 80)}${insight.length > 80 ? '…' : ''}"`;
}

// ── NewsletterCard ────────────────────────────────────────────────────────────
export const NewsletterCard = React.memo(function NewsletterCard({ newsletter, onPress, compact = false }) {
  const isRead = useGameStore((s) => s.isNewsletterRead(newsletter.id));
  const category = CATEGORIES[newsletter.category.toUpperCase()];
  const diff = DIFFICULTY_CONFIG[newsletter.difficulty];
  const cleanSummary = cleanMarkdown(newsletter.summary);

  if (compact) {
    return (
      <TouchableOpacity
        style={[styles.compactCard, isRead && styles.readCard]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.compactEmoji}>{category?.emoji}</Text>
        <View style={styles.compactContent}>
          <Text style={styles.compactTitle} numberOfLines={2}>
            {newsletter.title}
          </Text>
          <Text style={styles.compactSource}>{newsletter.source}</Text>
        </View>
        <View style={styles.compactRight}>
          <Text style={styles.xpBadge}>+{newsletter.xpReward}XP</Text>
          {isRead && <Text style={styles.readDot}>✓</Text>}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.card, isRead && styles.readCard]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={[styles.categoryBadge, { backgroundColor: category?.color + '20' }]}>
          <Text style={styles.categoryEmoji}>{category?.emoji}</Text>
          <Text style={[styles.categoryName, { color: category?.color }]}>
            {category?.name}
          </Text>
        </View>
        <View style={styles.metaRight}>
          <Text style={[styles.diffBadge, { color: diff?.color }]}>
            {diff?.emoji} {diff?.label}
          </Text>
          <Text style={styles.readTime}>⏱ {newsletter.readTime}min</Text>
        </View>
      </View>

      <Text style={styles.title}>{newsletter.title}</Text>
      <Text style={styles.source}>{newsletter.source}</Text>
      <Text style={styles.summary} numberOfLines={3}>
        {cleanSummary}
      </Text>

      <View style={styles.footer}>
        <View style={styles.tags}>
          {newsletter.tags.slice(0, 3).map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>
        <View style={styles.xpContainer}>
          <Text style={styles.xpText}>⚡ +{newsletter.xpReward} XP</Text>
          {isRead && <Text style={styles.readBadge}>✓ Leído</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
});

// ── NewsletterDetail ──────────────────────────────────────────────────────────
export function NewsletterDetail({ newsletter, onClose }) {
  const markRead = useGameStore((s) => s.markNewsletterRead);
  const addXP = useGameStore((s) => s.addXP);
  const isRead = useGameStore((s) => s.isNewsletterRead(newsletter.id));
  const category = CATEGORIES[newsletter.category.toUpperCase()];

  const cleanSummary = cleanMarkdown(newsletter.summary);
  const keyInsight = resolveKeyInsight(newsletter);
  const dailyApplication = resolveDailyApplication(newsletter);
  const personalExample = resolvePersonalExample(newsletter);

  const handleMarkRead = async () => {
    if (!isRead) {
      await markRead(newsletter.id);
      await addXP(newsletter.xpReward, newsletter.category);
    }
  };

  return (
    <ScrollView style={styles.detailContainer} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={[styles.detailHeader, { backgroundColor: (category?.color || COLORS.primary) + '15' }]}>
        <Text style={styles.detailEmoji}>{category?.emoji}</Text>
        <Text style={[styles.detailCategory, { color: category?.color }]}>
          {category?.name}
        </Text>
        <Text style={styles.detailTitle}>{newsletter.title}</Text>
        <Text style={styles.detailSource}>{newsletter.source}</Text>
      </View>

      {/* Summary */}
      <Section title="💡 Resumen" color={COLORS.info}>
        <Text style={styles.bodyText}>{cleanSummary}</Text>
      </Section>

      {/* Key Insight */}
      <Section title="🔑 Insight Clave" color={COLORS.accent}>
        <View style={styles.insightBox}>
          <Text style={styles.insightText}>"{keyInsight}"</Text>
        </View>
      </Section>

      {/* How to Apply */}
      <Section title="🛠️ Cómo Aplicarlo" color={COLORS.success}>
        {(newsletter.howToApply || []).map((step, i) => (
          <View key={i} style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{i + 1}</Text>
            </View>
            <Text style={styles.stepText}>{cleanMarkdown(step)}</Text>
          </View>
        ))}
      </Section>

      {/* Daily Application */}
      <Section title="📅 Aplícalo Hoy" color={COLORS.primary}>
        <View style={styles.todayBox}>
          <Text style={styles.todayText}>{dailyApplication}</Text>
        </View>
      </Section>

      {/* Personal Example */}
      <Section title="👤 Ejemplo Personal" color={COLORS.relationships}>
        <View style={styles.personalBox}>
          <Text style={styles.personalText}>{personalExample}</Text>
        </View>
      </Section>

      {/* Challenge */}
      {newsletter.challenge && (
        <Section title="🎮 Reto Asociado" color={COLORS.accent}>
          <View style={styles.challengeBox}>
            <Text style={styles.challengeTitle}>{newsletter.challenge.title}</Text>
            <Text style={styles.challengeDesc}>{newsletter.challenge.description}</Text>
            <Text style={styles.challengeXP}>⚡ +{newsletter.challenge.xp} XP</Text>
          </View>
        </Section>
      )}

      {/* Tags */}
      <View style={styles.tagsContainer}>
        {newsletter.tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>#{tag}</Text>
          </View>
        ))}
      </View>

      {/* Mark as Read Button */}
      <TouchableOpacity
        style={[styles.readButton, isRead && styles.readButtonDone]}
        onPress={handleMarkRead}
        activeOpacity={0.8}
      >
        <Text style={styles.readButtonText}>
          {isRead
            ? '✓ Ya leíste esto • +' + newsletter.xpReward + ' XP ganados'
            : '✅ Marcar como leído • +' + newsletter.xpReward + ' XP'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Section({ title, color, children }) {
  return (
    <View style={styles.section}>
      <View style={[styles.sectionLine, { backgroundColor: color }]} />
      <Text style={[styles.sectionTitle, { color }]}>{title}</Text>
      {children}
    </View>
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
  readCard: {
    borderColor: COLORS.success + '40',
    backgroundColor: COLORS.success + '08',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
    gap: 4,
  },
  categoryEmoji: { fontSize: 14 },
  categoryName: { fontSize: 12, fontWeight: '600' },
  metaRight: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  diffBadge: { fontSize: 12, fontWeight: '600' },
  readTime: { color: COLORS.textMuted, fontSize: 11 },
  title: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    lineHeight: 22,
  },
  source: { color: COLORS.textMuted, fontSize: 12, marginBottom: SPACING.sm },
  summary: { color: COLORS.textSecondary, fontSize: 14, lineHeight: 20 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  tags: { flexDirection: 'row', gap: 4, flex: 1, flexWrap: 'wrap' },
  tag: {
    backgroundColor: COLORS.bgSurface,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: RADIUS.full,
  },
  tagText: { color: COLORS.textMuted, fontSize: 10 },
  xpContainer: { alignItems: 'flex-end', gap: 4 },
  xpText: { color: COLORS.xp, fontWeight: '700', fontSize: 13 },
  readBadge: { color: COLORS.success, fontSize: 11, fontWeight: '600' },
  // Compact
  compactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.sm,
  },
  compactEmoji: { fontSize: 24, width: 32, textAlign: 'center' },
  compactContent: { flex: 1 },
  compactTitle: { color: COLORS.textPrimary, fontSize: 13, fontWeight: '600', lineHeight: 18 },
  compactSource: { color: COLORS.textMuted, fontSize: 11, marginTop: 2 },
  compactRight: { alignItems: 'flex-end', gap: 4 },
  xpBadge: { color: COLORS.xp, fontSize: 11, fontWeight: '700' },
  readDot: { color: COLORS.success, fontSize: 14 },
  // Detail
  detailContainer: { flex: 1, backgroundColor: COLORS.bg },
  detailHeader: {
    padding: SPACING.xl,
    alignItems: 'center',
    paddingTop: SPACING.xxl,
  },
  detailEmoji: { fontSize: 40, marginBottom: SPACING.sm },
  detailCategory: { fontSize: 13, fontWeight: '600', marginBottom: SPACING.xs },
  detailTitle: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: SPACING.xs,
  },
  detailSource: { color: COLORS.textMuted, fontSize: 13 },
  section: {
    padding: SPACING.md,
    paddingLeft: SPACING.lg,
    borderLeftWidth: 3,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    borderRadius: 2,
  },
  sectionLine: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, borderRadius: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', marginBottom: SPACING.sm },
  bodyText: { color: COLORS.textSecondary, fontSize: 15, lineHeight: 24 },
  insightBox: {
    backgroundColor: COLORS.accent + '15',
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },
  insightText: {
    color: COLORS.accentLight,
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 22,
  },
  stepRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.success + '20',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepNumberText: { color: COLORS.success, fontSize: 12, fontWeight: '700' },
  stepText: { color: COLORS.textSecondary, fontSize: 14, flex: 1, lineHeight: 20 },
  todayBox: {
    backgroundColor: COLORS.primary + '15',
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
  },
  todayText: { color: COLORS.primaryLight, fontSize: 15, lineHeight: 22 },
  personalBox: {
    backgroundColor: COLORS.relationships + '12',
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.relationships + '30',
  },
  personalText: { color: '#F9A8D4', fontSize: 15, lineHeight: 22 },
  challengeBox: {
    backgroundColor: COLORS.accent + '10',
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.accent + '30',
  },
  challengeTitle: { color: COLORS.accentLight, fontSize: 15, fontWeight: '700', marginBottom: 4 },
  challengeDesc: { color: COLORS.textSecondary, fontSize: 14, marginBottom: SPACING.sm, lineHeight: 20 },
  challengeXP: { color: COLORS.xp, fontWeight: '700', fontSize: 14 },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  readButton: {
    margin: SPACING.md,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.xxl,
  },
  readButtonDone: { backgroundColor: COLORS.bgSurface, borderWidth: 1, borderColor: COLORS.success },
  readButtonText: { color: COLORS.textPrimary, fontWeight: '700', fontSize: 14 },
});

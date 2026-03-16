import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { NewsletterCard } from '../components/NewsletterCard';
import { NEWSLETTERS, CATEGORIES, getTotalNewsletters } from '../data/newsletters';
import useGameStore from '../store/gameStore';

const ALL_FILTER = { id: 'all', name: 'Todos', emoji: '🌐', color: COLORS.primary };

export default function LibraryScreen({ navigation, route }) {
  const initialCategory = route?.params?.categoryFilter || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default'); // default | xp | readTime

  const completedNewsletters = useGameStore((s) => s.completedNewsletters);

  const filters = [ALL_FILTER, ...Object.values(CATEGORIES)];

  const filtered = useMemo(() => {
    let list = [...NEWSLETTERS];

    if (selectedCategory !== 'all') {
      list = list.filter((n) => n.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q) ||
          n.tags.some((t) => t.includes(q)) ||
          n.source.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'xp') list.sort((a, b) => b.xpReward - a.xpReward);
    if (sortBy === 'readTime') list.sort((a, b) => a.readTime - b.readTime);

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const readCount = completedNewsletters.length;
  const totalCount = getTotalNewsletters();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />

      {/* Header */}
      <View style={[styles.header, { paddingTop: useSafeAreaInsets().top + SPACING.sm }]}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>📚 Biblioteca</Text>
          <View style={styles.progressBadge}>
            <Text style={styles.progressText}>
              {readCount}/{totalCount} leídos
            </Text>
          </View>
        </View>

        {/* Progress bar */}
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${Math.round((readCount / totalCount) * 100)}%` },
            ]}
          />
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Buscar por título, tema o fuente..."
            placeholderTextColor={COLORS.textMuted}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearSearch}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category Filters */}
      <FlatList
        horizontal
        data={filters}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.filterChip,
              selectedCategory === item.id && {
                backgroundColor: item.color + '20',
                borderColor: item.color,
              },
            ]}
            onPress={() => setSelectedCategory(item.id)}
          >
            <Text style={styles.filterEmoji}>{item.emoji}</Text>
            <Text
              style={[
                styles.filterText,
                selectedCategory === item.id && { color: item.color, fontWeight: '700' },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Sort Options */}
      <View style={styles.sortRow}>
        <Text style={styles.resultsCount}>{filtered.length} artículos</Text>
        <View style={styles.sortButtons}>
          {[
            { key: 'default', label: 'Defecto' },
            { key: 'xp', label: '⚡ Mayor XP' },
            { key: 'readTime', label: '⏱ Más rápido' },
          ].map((s) => (
            <TouchableOpacity
              key={s.key}
              style={[styles.sortBtn, sortBy === s.key && styles.sortBtnActive]}
              onPress={() => setSortBy(s.key)}
            >
              <Text style={[styles.sortBtnText, sortBy === s.key && styles.sortBtnTextActive]}>
                {s.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Newsletter List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NewsletterCard
            newsletter={item}
            onPress={() => navigation.navigate('NewsletterDetail', { newsletter: item })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyTitle}>Sin resultados</Text>
            <Text style={styles.emptySubtitle}>
              Intenta con otro término o categoría
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    backgroundColor: COLORS.bg,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  headerTitle: { color: COLORS.textPrimary, fontSize: 22, fontWeight: '800' },
  progressBadge: {
    backgroundColor: COLORS.primary + '20',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.primary + '40',
  },
  progressText: { color: COLORS.primaryLight, fontSize: 12, fontWeight: '600' },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.full,
    marginBottom: SPACING.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.xs,
  },
  searchIcon: { fontSize: 16 },
  searchInput: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 14,
    paddingVertical: SPACING.sm,
  },
  clearSearch: { color: COLORS.textMuted, fontSize: 16, padding: 4 },
  filtersContainer: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.xs,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 8,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 4,
    marginRight: SPACING.xs,
  },
  filterEmoji: { fontSize: 14 },
  filterText: { color: COLORS.textSecondary, fontSize: 13 },
  sortRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },
  resultsCount: { color: COLORS.textMuted, fontSize: 12 },
  sortButtons: { flexDirection: 'row', gap: SPACING.xs },
  sortBtn: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sortBtnActive: {
    backgroundColor: COLORS.primary + '20',
    borderColor: COLORS.primary,
  },
  sortBtnText: { color: COLORS.textMuted, fontSize: 11 },
  sortBtnTextActive: { color: COLORS.primaryLight, fontWeight: '600' },
  list: { padding: SPACING.md, paddingTop: 0, paddingBottom: SPACING.xxl },
  emptyState: { alignItems: 'center', paddingVertical: SPACING.xxl },
  emptyEmoji: { fontSize: 40, marginBottom: SPACING.md },
  emptyTitle: { color: COLORS.textPrimary, fontSize: 18, fontWeight: '700', marginBottom: 4 },
  emptySubtitle: { color: COLORS.textMuted, fontSize: 14 },
});

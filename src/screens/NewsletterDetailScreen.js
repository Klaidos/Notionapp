import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { NewsletterDetail } from '../components/NewsletterCard';

export default function NewsletterDetailScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { newsletter } = route.params;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>
          {newsletter.title}
        </Text>
        <View style={{ width: 70 }} />
      </View>
      <NewsletterDetail newsletter={newsletter} onClose={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backBtn: { paddingVertical: SPACING.sm },
  backText: { color: COLORS.primaryLight, fontSize: 15, fontWeight: '600' },
  navTitle: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: SPACING.sm,
  },
});

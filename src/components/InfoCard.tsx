import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type Props = { title: string; description?: string; children?: React.ReactNode };
export default function InfoCard({ title, description, children }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, padding: 18, borderRadius: 16, marginBottom: 14 },
  title: { fontSize: 18, fontWeight: '700', color: colors.accent, marginBottom: 8 },
  description: { color: colors.text, fontSize: 15, lineHeight: 23 },
});

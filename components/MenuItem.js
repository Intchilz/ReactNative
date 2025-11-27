import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>K {item.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#10b981'
  },
  category: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280'
  },
  desc: {
    marginTop: 4,
    fontSize: 12,
    color: '#6b7280',
    flex: 1,
    textAlign: 'right'
  }
});

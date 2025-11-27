import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import MenuItem from '../components/MenuItem';

export default function RestaurantDetail({ route }) {
  const { restaurant } = route.params;
  const imgSource = restaurant.image
    ? { uri: restaurant.image }
    : require('../assets/placeholder.jpg');

  const groupedMenu = useMemo(() => {
    const map = new Map();
    restaurant.menu.forEach((m) => {
      const arr = map.get(m.category) || [];
      arr.push(m);
      map.set(m.category, arr);
    });
    return Array.from(map.entries()).map(([category, items]) => ({ category, items }));
  }, [restaurant.menu]);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Image source={imgSource} style={styles.image} />
          <View style={styles.header}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>{restaurant.shortDescription}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.meta}>{restaurant.cuisine}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.meta}>{restaurant.location}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.meta}>⭐ {restaurant.rating.toFixed(1)}</Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Menu</Text>
        </>
      }
      data={groupedMenu}
      keyExtractor={(section) => section.category}
      renderItem={({ item }) => (
        <View style={styles.section}>
          <Text style={styles.category}>{item.category}</Text>
          {item.items.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem} />
          ))}
        </View>
      )}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 220
  },
  header: {
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827'
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#6b7280'
  },
  metaRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  meta: {
    fontSize: 12,
    color: '#374151'
  },
  dot: {
    marginHorizontal: 6,
    color: '#9ca3af'
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    backgroundColor: '#f9fafb'
  },
  content: {
    paddingBottom: 24
  },
  section: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8
  },
  category: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6b7280',
    marginBottom: 4,
    textTransform: 'uppercase'
  }
});

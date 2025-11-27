import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function RestaurantCard({ restaurant, onPress }) {
  const { name, shortDescription, image, cuisine, location, rating } = restaurant;
  const imgSource = image
    ? { uri: image }
    : require('../assets/placeholder.jpg');

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.85}>
      <Image source={imgSource} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{shortDescription}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{cuisine}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>{location}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>⭐ {rating.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 }
  },
  image: {
    width: '100%',
    height: 160
  },
  info: {
    padding: 12
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937'
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#6b7280'
  },
  metaRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  meta: {
    fontSize: 12,
    color: '#374151'
  },
  dot: {
    marginHorizontal: 6,
    color: '#9ca3af'
  }
});

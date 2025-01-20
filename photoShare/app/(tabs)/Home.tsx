import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#007BFF',
  background: '#f5f5f5',
  text: '#333',
  white: '#fff',
  shadow: '#000',
};

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [photos, setPhotos] = useState([
    { id: 1, uri: 'https://picsum.photos/400/600', caption: 'Photo 1' },
    { id: 2, uri: 'https://picsum.photos/400/600', caption: 'Photo 2' },
    { id: 3, uri: 'https://picsum.photos/400/600', caption: 'Photo 3' },
  ]);

  const handleSwipeLeft = (index: number) => {
    console.log('Swiped left on photo:', photos[index].caption);
  };

  const handleSwipeRight = (index: number) => {
    console.log('Swiped right on photo:', photos[index].caption);
  };

  const handleAddPhoto = () => {
    router.push('/addPhoto');
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.swiperContainer}>
        <Swiper
          cards={photos}
          renderCard={(card) => (
            <View style={styles.card}>
              <Image source={{ uri: card.uri }} style={styles.image} resizeMode="cover" />
              <Text style={styles.caption}>{card.caption}</Text>
            </View>
          )}
          onSwipedLeft={handleSwipeLeft}
          onSwipedRight={handleSwipeRight}
          backgroundColor="transparent"
          stackSize={3}
          infinite
          cardIndex={0} // Start from the first card
          verticalSwipe={false} // Disable vertical swipe
          cardVerticalMargin={0} // No vertical margin
          cardHorizontalMargin={0} // No horizontal margin
          cardStyle={styles.cardStyle} // Custom card style
          containerStyle={styles.swiperContainerStyle} // Custom container style
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
        <Ionicons name="person" size={24} color={COLORS.white} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={handleAddPhoto}>
        <Ionicons name="add" size={30} color={COLORS.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  swiperContainer: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.7, // 70% of screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    padding: 20,
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 15,
    marginBottom: 15,
  },
  caption: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  profileButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 30,
    zIndex: 1,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 30,
    zIndex: 1,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardStyle: {
    width: width * 0.8, // 80% of screen width
    height: height * 0.6, // 60% of screen height
  },
  swiperContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
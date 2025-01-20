import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function Landing() {

    
  const goToRegister = ()=>{
    router.push('/register')
  }

  const goToLogin = ()=>{
    router.push('/login')
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f5f5f5', dark: '#1c1c1c' }}
      headerImage={
        <Image
        source={{uri: 'https://i.pinimg.com/736x/80/5d/c9/805dc9ccf737d167e01584545ebf7872.jpg'}} 
        style={styles.heroImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to PhotoShare</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText type="subtitle">Share Your Moments</ThemedText>
        <ThemedText style={styles.description}>
          Join our community and share your favorite photos with friends and family. Explore stunning images from around the world.
        </ThemedText>

        <TouchableOpacity style={styles.button} onPress={goToRegister}>
          <Text style={styles.buttonText}>Join us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </ThemedView>

      <ThemedView style={styles.featuredContainer}>
        <ThemedText type="subtitle">Featured Photos</ThemedText>
        <View style={styles.featuredImages}>
          <Image
            source={{uri: 'https://i.pinimg.com/736x/80/5d/c9/805dc9ccf737d167e01584545ebf7872.jpg'}} 
            style={styles.featuredImage}
          />
          <Image
            source={{uri: 'https://i.pinimg.com/736x/80/5d/c9/805dc9ccf737d167e01584545ebf7872.jpg'}} 
            style={styles.featuredImage}
          />
          <Image
            source={{uri: 'https://i.pinimg.com/736x/80/5d/c9/805dc9ccf737d167e01584545ebf7872.jpg'}} 
            style={styles.featuredImage}
          />
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredContainer: {
    marginTop: 40,
    padding: 20,
    alignItems: 'center',
  },
  featuredImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  featuredImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
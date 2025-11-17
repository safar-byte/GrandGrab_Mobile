import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type OnboardingScreenProps = {
  navigation: { navigate: (route: string) => void };
};

export default function OnboardingScreen3({ navigation }: OnboardingScreenProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/onboarding-chef.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      <View style={styles.progressContainer}>
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDotActive} />
      </View>

      <Text style={styles.title}>Enjoy your savings</Text>

      <Text style={styles.subtitle}>
        Pick up your order at the scheduled time, enjoy delicious dishes, and feel great about
        reducing food waste.
      </Text>

      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.nextText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021B46',
    alignItems: 'center',
    paddingTop: 70,
    paddingHorizontal: 24,
  },
  skipBtn: {
    position: 'absolute',
    top: 50,
    right: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
  },
  skipText: {
    color: '#fff',
    fontSize: 14,
  },
  illustration: {
    width: '80%',
    height: 260,
    marginTop: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  progressDotActive: {
    width: 18,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 4,
  },
  progressDot: {
    width: 6,
    height: 6,
    backgroundColor: '#6A7BA2',
    borderRadius: 3,
    marginHorizontal: 4,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    color: '#BFC9E3',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  nextBtn: {
    backgroundColor: '#fff',
    width: '85%',
    paddingVertical: 14,
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
  },
  nextText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});


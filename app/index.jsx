import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import HiveBackground from "@/assets/images/Hive.jpeg"
import { Link } from 'expo-router'
import { Pressable } from 'react-native'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={HiveBackground}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Fyt</Text>
        <Link href={'/explore'} stlye={{ marginHorizatonal: 'auto' }} asChild>
          <Pressable>
            <Text>Explore Fyt</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 2,
  }
})
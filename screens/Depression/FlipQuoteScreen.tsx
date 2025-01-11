
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const AnimatedCardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false); // state of card
  const flipAnimation = useRef(new Animated.Value(0)).current // animated value for flip animation

  // front card rotation
  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const flipToFrontStyle = {
    transform: [{rotateY: frontInterpolate}]
  };

  // back card rotation
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipToBackStyle = {
    transform: [{rotateY: backInterpolate}]
  };

  // card flip animation
  const flipCard = () => {
    if(isFlipped) {
      // animate back to the front side
      Animated.spring(flipAnimation, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      // animate to the back side
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };

  // card ui
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={flipCard}>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.front, styles.card, flipToFrontStyle]}>
            <Text style={styles.text}>FLIP TO SEE A QUOTE FOR TODAY!</Text>
          </Animated.View>
          <Animated.View style={[styles.back, styles.card, flipToBackStyle]}>
            <View>
              <Text style={styles.text}>“Happiness is a place between too much and too little." </Text>
              <Text>Finnish Proverb</Text>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
    borderRadius: 50,
    shadowColor: '#000', // Shadow color
    shadowOffset: {
        width: 0,
        height: 2,
    },
    
  },
  cardContainer: {
    width: width - 50,
    height: height / 4,
  },
  front: {
    backgroundColor: '#52B774',
  },
  back: {
    backgroundColor: '#E6FDED',
  },
  card: {
    width: width - 50,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  text: {
    color: 'black',
    marginBottom: 20 ,
    fontSize: 40,
  },
});

export default AnimatedCardFlip;

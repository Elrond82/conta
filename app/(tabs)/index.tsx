import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [contador, setContador] = useState(0);

  return (
    <ImageBackground
      source={require('@/assets/Copilot_20250530_003107.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Botón superior izquierdo */}
      <TouchableOpacity
        style={[
          styles.topLeftButton,
          { top: insets.top + 10 }
        ]}
        onPress={() => setContador(contador + 5)}
      >
        <Text style={styles.buttonText}>+5</Text>
      </TouchableOpacity>

      {/* Botón superior derecho */}
      <TouchableOpacity
        style={[
          styles.topRightButton,
          { top: insets.top + 10 }
        ]}
        onPress={() => setContador(contador + 10)}
      >
        <Text style={styles.buttonText}>+10</Text>
      </TouchableOpacity>

      {/* Contador en el centro */}
      <View style={styles.centerContainer}>
        <Text style={styles.buttonText1}>{contador}</Text>
      </View>

      {/* Botón inferior izquierdo */}
      <TouchableOpacity
        style={[
          styles.bottomLeftButton,
          { bottom: insets.bottom + 10 }
        ]}
        onPress={() => setContador(contador + 50)}
      >
        <Text style={styles.buttonText}>+50</Text>
      </TouchableOpacity>

      {/* Botón inferior derecho */}
      <TouchableOpacity
        style={[
          styles.bottomRightButton,
          { bottom: insets.bottom + 10 }
        ]}
        onPress={() => setContador(0)}
      >
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  topLeftButton: {
    position: 'absolute',
    left: 20,
    padding: 10,
    width: 90,
    backgroundColor: 'red',
    borderRadius: 8,
    zIndex: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRightButton: {
    position: 'absolute',
    right: 20,
    width: 90,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    zIndex: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLeftButton: {
    position: 'absolute',
    left: 20,
    padding: 10,
    width: 90,
    backgroundColor: 'gold',
    borderRadius: 8,
    zIndex: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomRightButton: {
    position: 'absolute',
    right: 20,
    padding: 10,
    width: 90,
    backgroundColor: 'green',
    borderRadius: 8,
    zIndex: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
    centerContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }], // Ajusta según el tamaño del texto
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    minHeight: 120,
  },
  counterText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 20, // Cambia el tamaño aquí
    textAlign: 'center',
  },
   buttonText1: {
    color: 'black', // Blanco para mejor contraste
    fontWeight: 'bold',
    fontSize: 80, // Tamaño grande para el contador
    textAlign: 'center',
  },
});
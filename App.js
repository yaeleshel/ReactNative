import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Header } from './Container/Header/Header';

export default function App() {


  const pressHamburger = () => {
    debugger
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapHeader}>
        <TouchableOpacity onPress={pressHamburger}>
          <Image style={styles.hamburger} source={require('./Container/Images/hamburger.png')} />
        </TouchableOpacity>
        <Image style={styles.icon} source={require('./Container/Images/maccabi.png')} />
      </View>
      <View >
        <Text>
          שלום אבי
        </Text>
        <Text style={styles.disclaimer}>
          סיימת כרגע ביקור אצל הרופא, לנוחיותך, ריכזנו את כל המשימות שלך במרחק לחיצת כפתור
        </Text>
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFA',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 10
  },
  wrapHeader: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse'
  },
  hamburger: {
    width: 30,
    height: 30,
    marginLeft: 20
  },
  icon: {

  }
});

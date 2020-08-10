import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    text: 'تطلق هيئة تنظيم الاتصالات بجمهورية مصر العربية هذة المنصه الجديدة لخدمة الافراد والشركات من المواطنين المصرين وغير المصرين ',
    image: require('./assets/one.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    text: 'حيث يستطيع المستخدم من تقديم جميع الطلبات والشكاوي من خلال تطبيق التليفون المحمول  وايضا معرفة نتيجة الشكاوي وحالتها',
    image: require('./assets/two.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    text:  'هذا بالاضافة الي معرفة اخبار الهيئة واخر التحديثات الخاصة بسوق الاتصالات المصريه ومعرفة اخر التعديلات بالقوانين المصريه الخاصة بسوق الإتصالات',
    image: require('./assets/three.jpg'),
    backgroundColor: '#22bcb5',
  }
];
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 180, // Add padding to offset large buttons and pagination in bottom of page
  },
  logo:{
    width:150,
    height:50
  },
  image: {
    width: '100%',
    height: 400,  
   
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginTop:-180,
    textAlign:'center',
    marginLeft:15,
    marginRight:15
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  }
});



export default class Swiper extends React.Component {
  state = {
    showRealApp: false
  };

  componentDidMount() {
    debugger;
  }
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </SafeAreaView>
      </View>
    );
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  _keyExtractor = (item) => item.title;

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons 
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderSkip=()=>{
    return(
      <View style={styles.skipBtn}>
       <Text>تخطي الان</Text>
      </View>
    )
  }
  _renderPreviousButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <Ionicons 
        name="md-arrow-round-back"
        color="rgba(255, 255, 255, .9)"
        size={24}
      />
    </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons  name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
        <Image style={styles.logo} source={require('./assets/ntra-logo.png')} />
        </View>
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderPrevButton={this._renderPreviousButton}
          showSkipButton
          showPrevButton
          renderSkipButton={this._renderSkip}
          data={slides}
          doneLabel="start"
          dotStyle={{display:'none'}}
        />
      </View>
    );
  }
}
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Colors from './_constants/Colors';
import window from './_constants/Layout'

const dashboard = [
  { name1: 'Meus', name2: 'Horários', route: 'MySchedule' },
  { name1: 'Agendar', name2: 'Horário', route: 'NewSchedule' },
  { name1: 'Meu', name2:'Treino', route: 'MyWorkouts' },
  { name1: 'Avaliação', name2:'Física', route: 'Bla' },
  { name1: 'Dicas de', name2:'Saúde', route: 'Tips' },
  { name1: 'Eventos', name2: null, route: 'Events' },
]

const {width, height} = Dimensions.get('window')

export default class HomeScreen extends React.Component {

  render() {
    console.log(window.height)
    return (
      <View style={styles.container}>
        <SafeAreaView style={{backgroundColor: Colors.black, width: '100%', height: '12%', justifyContent: 'center', borderBottomColor: 'grey', borderBottomWidth: 1}}>
          <View style={{alignSelf:'center'}}>
            <Image source={require('../assets/images/marcanova.png')} style={{width: 150}} resizeMode='contain'/>
          </View>
        </SafeAreaView>

        <View style={{paddingHorizontal: width*.07, flex: 1}}>
          <View>
            <Text style={{fontSize: 24, fontWeight: '300'}}>Olá,</Text>
            <Text style={{fontSize: 24, fontWeight: '700'}}>Henrique</Text>
            <Text style={{fontSize: 12, fontWeight: '300'}}>Como posso te ajudar?</Text>
          </View>
          <View style={{flex: 1, flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-between', alignContent:'flex-start'}}>
            {
              dashboard.map(option => 
                <TouchableHighlight
                  key={option.route}
                  onPress={() => this.props.navigation.navigate(option.route)}
                  underlayColor={Colors.orange}
                  style={{height: height*.22, width: width*.42, }}>
                  <View style={{ flex: 1, marginVertical: height*.005, borderWidth: 1, borderColor: Colors.orange, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 18, fontWeight: '500'}}>{option.name1.toUpperCase()}</Text>
                    <Text style={{fontSize: 18, fontWeight: '500'}}>{option.name2 && option.name2.toUpperCase()}</Text>
                  </View>
                </TouchableHighlight>  
              )
            }
            <View style={{height: height*.25}}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  }
});

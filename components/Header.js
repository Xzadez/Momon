import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';

import Rating from './star-rating';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.top}>
            <ImageBackground source={require('../assets/images/bakso.jpg')} style={{width: '100%', height: '100%'}}>
              <View style={styles.center}/>
              <Rating/>
              <View style={styles.nom}>
                <Text style={styles.ranking}>#15</Text>
              </View>
               <View style={styles.descContainer}>
                <Text style={styles.title}>Nasi Lemak Kang Mat</Text>
                <Text style={styles.desc}>Menjual berbagai makanan khas melayu.</Text>
                <Text style={styles.street}>Jalan Merdeka Timur, Klojen, Malang</Text>
              </View>
              <View style={styles.info}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
              </View>
            </ImageBackground>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3691F',
    marginBottom: 135,
  },
  center: {
    marginTop: 100,
    height: 150,
    backgroundColor: '#000',
    opacity: 0.3,
  },
  info: {
    height: 150,
    position: 'absolute',
    borderRadius: 5,
    padding: 20,
    bottom:-110,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    elevation: 2,
  },
  nom: {
      left: 290,
      height:35,
      bottom: 195,
      width: 70,
      padding: 6,
      alignItems: 'center',
      backgroundColor:'#D3691F',
  },
  ranking:{
    fontSize: 15,
    color: 'white',
  },
  descContainer: {
      height:35,
      bottom: 190,
      width: 250,
      padding: 6,
      alignItems: 'center',
      flexDirection: 'column',
  },
  title:{
      right: 29,
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  desc: {
      left:10,
      color: 'white',
      fontSize: 13
  },
  street: {
      right:1,
      color: 'white',
      fontSize: 13
  }
})
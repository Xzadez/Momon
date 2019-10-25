import React, { Component } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';


export default class StarRating extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/star-filled.png')}/>
                <Image
                    style={styles.image}
                    source={require('../assets/images/star-filled.png')}/>
                <Image
                    style={styles.image}
                    source={require('../assets/images/star-filled.png')}/>
                <Image
                    style={styles.image}
                    source={require('../assets/images/star-filled.png')}/>
                <Image
                    style={styles.image}
                    source={require('../assets/images/star-unfilled.png')}/>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        marginTop:10,
		width: 100,
        height: 35,
        bottom: 150,
        left: 20,
    },
    image: {
        width: 20,
        height: 20,
    }
});
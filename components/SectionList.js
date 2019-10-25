import React, {Component} from 'react';
import {StyleSheet, Text, View, SectionList, Image, TouchableOpacity} from 'react-native';
import SectionData from './SectionData';
import Header from './Header';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.initData = SectionData;
        this.state = {
            sectiondata: this.initData
        };
    }
    renderSectionHeader = ({section}) => {
        return <View style={styles.sectionheader}>
              <Text style={styles.secti}>{section.title}</Text>
            </View>
    }

    renderItem = ({item}) => {
        return <View style={styles.item}>
                    <View style={styles.marginLeft}>
                            <Image source={{ uri: item.photo }} style={styles.photo} />
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}> {item.text}</Text>
                        <Text style={styles.desc}> {item.desc}</Text>
                        <Text style={styles.price}>Rp {item.price}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}>
                            <Text style={styles.txtbutton}> Tambah +</Text>
                    </TouchableOpacity>
               </View>
    }

    render(){
        const header = () => {
            return <Header style={styles.header}/>
        }
    
        return(
            <View style={styles.contentContainer}>
                <SectionList
                    renderSectionHeader={this.renderSectionHeader}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={header}
                    sections={this.state.sectiondata}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'white'
    },
    txtbutton:{
        bottom: 3,
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        top:20,
        right: 50,
        alignItems: 'center',
        width: 80,
        height: 30,
        backgroundColor: '#D3691F',
        padding: 10
      },
    photo: {
        borderRadius: 5,
        height: 75,
        width: 75,
    },
    secti: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionheader: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
    },
    marginLeft: {
        marginLeft: 10,
    },
    info:{
        height: 80,
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 5,
        flexDirection: 'column'
    },
    header: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    desc: {
        height: 30,
        width: 200,
        marginLeft: 5,
        fontSize: 11,
        color: '#797A7E',
    },
    price: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})
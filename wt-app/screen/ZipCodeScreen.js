
import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Bangkok', code:'10400'},
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
        <View style={styles.zipItem}>
            <Text style={styles.t1}>{place}</Text>
            <Text style={styles.t1}>{code}</Text>
        </View>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View >
            <Text style={styles.t2}>City-Zipcode</Text>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                style={styles.backdrop}
            />
            <StatusBar style="auto" />
        </View>
    ); 
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        flex:1 ,
    },
    zipCode: {
        flex:1 ,
    },
    t1:{
        fontSize: 30 ,
        color: 'white', 
    },
    t2:{
        fontSize: 40 ,
        color: 'white',
        backgroundColor:'lightsalmon',
        textAlign: 'center',
        fontWeight: "bold"
    },
    backdrop:{
        backgroundColor:'rosybrown',
        width: '100%',
        height: '100%',
    },
}) 
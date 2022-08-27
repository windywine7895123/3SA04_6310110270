import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Forecast from "./Forcast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        name:'-'
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=36f789c0ff6fd5313a5eb574bbcc8796`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    name: json.name}); 
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                
                <Forecast {...forecastInfo} />
                <Text style={styles.t2}>Zip Code : {props.zipCode}</Text>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    t2: {
        fontSize: 20 ,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
    },
});
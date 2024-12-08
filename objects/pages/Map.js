import React, {useEffect, useState} from "react";
import {Text, StyleSheet, View, PermissionsAndroid, Platform, Button, Alert } from "react-native";
import MapView, {Marker} from "react-native-maps";

export default function ViewMap() {

//Aquire device location data
    const [location,setLocation] = useState({});
    useEffect(()=>{
        (async ()=>{
            let {status} = await location.requestForegroundPermissionsAsync()
            if (status === 'granted'){
                console.log("permission granted!")
                return
            }
            else
            {
                console.log("no permission granted!")
                Alert.alert(
                    "Location Permission Needed",
                    "This app requires location permissions to show your position on the map. You can enable it in app settings.",
                    [{ text: "OK" }]
                );
            }
            const loc = await location.getCurrentPositionAsync()

            setLocation(JSON.parse(loc));

            console.log("location data: ",location)
        })()
    })

    //aquire marker locations from api
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const getLocations = async () => {
        try {
            const response = await fetch('https://stud.hosted.hr.nl/1034047/brielleApi.json');
            const json = await response.json();
            setData(json['items']);
            setLoaded(true);
        } catch (error) {
            console.error(error);
        }
    };


    //avtivate marker location aquiëre funtion only once first loaded.
    useEffect(() => {
        getLocations();
    }, []);

//check if data set with markers is loaded if so proceed otherwise wait.
    if (!loaded) {
        return (
            <View>
                <Text>
                    Loading
                </Text>
            </View>)
    } else {
        // console.log(data)
        return (
            <React.Fragment>

                <MapView style={styles.map}

                    initialRegion={{
                        latitude: 51.9017, // Brielle's latitude
                        longitude: 4.1630, // Brielle's longitude
                        latitudeDelta: 0.05, // Adjust this to zoom out slightly
                        longitudeDelta: 0.05, // Adjust this to zoom out slightly
                    }}
                >
                    {
                        data.map((landMark) => (<Marker
                            key={landMark.id}

                            coordinate={
                            {
                                latitude: landMark.latitude,
                                longitude: landMark.longitude
                            }

                        }
                            title={
                                landMark.title.nl
                            }
                            description={

                                landMark.description.nl
                            }
                        />))
                    }
                </MapView>
            </React.Fragment>)
    }
}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    safe: {
        flex: 1,
    },
    title: {
        textAlign: "center"
    }
});
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Platform, Text, View, Dimensions } from "react-native";
var { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 18.5329849;
const LONGITUDE = 73.8247899;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const markerList = [
  {
    lat: 18.6440784,
    long: 73.7627473,
    title: "pune",
    description: "aaaa"
  },
  {
    lat: 18.5329849,
    long: 73.8247899,
    title: "Shivaji Nagar",
    description: "Center Point Of Pune"
  },
  {
    lat: 18.532987,
    long: 73.8247899,
    title: "Pune Station",
    description: "Center Point Of Pune"
  },
  {
    lat: 18.532988,
    long: 73.8247899,
    title: "Shivaji Nagar",
    description: "Center Point Of Pune"
  }
];

export default class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: [
        {
          title: "hello",
          coordinates: {
            latitude: 3.148561,
            longitude: 101.652778
          }
        },
        {
          title: "hello",
          coordinates: {
            latitude: 3.149771,
            longitude: 101.655449
          }
        }
      ]
    };
  }
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          mapType={Platform.OS == "android" ? "none" : "standard"}
          //onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChange.bind(this)}
          provider="google"
          showsScale={true}
          paddingAdjustmentBehavior="automatic"
          //liteMode={false}
          mapType="standard"
          style={styles.mapStyle}
        >
          {markerList.map(
            marker => (
              console.log("---------", marker),
              (
                <Marker
                  // image={require('../assets/pin.png')}
                  //coordinate={marker.coordinates}
                  coordinate={{ latitude: marker.lat, longitude: marker.long }}
                  title={marker.title}
                  description={marker.description}
                />
              )
            )
          )}
          {/* 
          <Marker
            pinColor="red"
            //coordinate={(18.6440784, 73.7627473)}
            image={require("../images/user.png")}
          >
            <View style={{ backgroundColor: "red", padding: 10 }}>
              <Text>SF</Text>
            </View>
          </Marker> */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

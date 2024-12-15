import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: route?.params?.location.lat,
          longitude: route?.params?.location.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        onMapReady={() => {}}
        onRegionChange={() => {}}
      >
        <Marker
          title={route?.params?.location.name}
          coordinate={{
            latitude: route?.params?.location.lat,
            longitude: route?.params?.location.lon,
          }}
          description={route?.params?.name}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

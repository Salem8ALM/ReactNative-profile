import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 300,
        width: 300,
        borderRadius: 10,
        alignContent: "center",
        alignItems: "center",
        gap:10
      }}
    >
      <Image style={{height:100, width: 100, borderRadius:100 , marginTop:30}}
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          
        }}
      />
      <View style={{
        alignItems:"center"
      }}>
      <Text style={{
        fontWeight:"bold"
        ,fontSize:25
      }}>Salem</Text>
      <Text style={{
        color:"grey",
        fontSize:15,
      }}>Kuwait</Text>
      </View>
      <View style={{
        height:1,
        width:"90%"
        ,backgroundColor: "grey"
      }}>
      </View>

      <View style={{
        flexDirection: "row"
        ,gap:"35"
      }}>
      <View style={{
        alignItems:"center"
        
      }}>
      <Text style={{

        fontSize:25
        ,fontWeight:"bold"
      }}>80K</Text>
      <Text style={{
        color:"grey",
        fontSize:15,
      }}>followers</Text>
      </View>
      <View style={{
        alignItems:"center"
        
      }}>
      <Text style={{

        fontSize:25
        ,fontWeight:"bold"

      }}>8K</Text>
      <Text style={{
        color:"grey",
        fontSize:15,
      }}>likes</Text>
      </View>

      <View style={{
        alignItems:"center"
        
      }}>
      <Text style={{

        fontSize:25
        ,fontWeight:"bold"

      }}>2.5K</Text>
      <Text style={{
        color:"grey",
        fontSize:15,
      }}>photos</Text>
      </View>


      </View>
    
    </View>
  );
}

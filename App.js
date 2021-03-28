import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState} from 'react'
import Dropdown from './Dropdown'
// VIew, Text, Image, Button, TouchableOpacity

export default function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
    if(styles.dropdownButton.backgroundColor !== "#808080"){
      styles.dropdownButton.backgroundColor = "#808080"
    }else{
      styles.dropdownButton.backgroundColor = "#bfbfbf"
    }
  }
  return (
    <View style={{width:1000, height:1000, backgroundColor:"grey"}}>
      <View style={styles.container}>
        <View style={styles.headingCont}>
          <Text style={styles.heading}>Game Night!</Text>
          <Image
            style={styles.mainImage}
            source={{
              uri: "https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg",
            }}
          />
        </View>
        <View style={styles.infoRowFirst}>
          <Image
            style={styles.infoImage}
            source={{
              uri: "https://img.pokemondb.net/artwork/large/charizard.jpg",
            }}
          />
          <Text style={styles.infoText}>George Garmin Street ...</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            style={styles.infoImage}
            source={{
              uri: "https://miro.medium.com/max/302/1*KuSu6ZTyLAcRDwOsI9ZzZA.png",
            }}
          />
          <Text style={styles.infoText}>Mon, September 21st</Text>
        </View>
        <View style={styles.infoRowFinal}>
          <View style={styles.timeText}>
            <Image
              style={styles.infoImage}
              source={{
                uri: "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
              }}
            />
            <Text style={styles.infoText}>10:00 AM</Text>
          </View>
          <View style={styles.dropdownCont}>
            <TouchableOpacity style={visible? styles.dropdownButtonVisible : styles.dropdownButtonHidden} onPress={() => setVisible(!visible)}>
              <Image
                style={styles.dropdownImage}
                source={{
                  uri: "https://static.thenounproject.com/png/1380510-200.png",
                }}
              />
            </TouchableOpacity>
            {visible ? <Dropdown/> : null}
          </View>
        </View>
        <View style={styles.finalRow}>
          <Image
            style={styles.infoImage}
            source={{
              uri: "https://i.pinimg.com/originals/12/8d/e8/128de8ce51ee0c498a4dfa67610f5843.jpg",
            }}
          />
          <View style={styles.status}><Text style={styles.statusText}>You RSVP'd yes - Event is today!</Text></View>
        </View>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    height:195,
    width:280,
    padding:20,
    paddingTop:5,
    paddingRight:0,
    overflow:'visible'
  },
  heading:{
    fontWeight:700,
    marginTop:'auto',
    marginBottom:'auto',
    fontSize:16
  },
  mainImage:{
    width:40,
    height:40,
    marginRight:10
  },
  headingCont:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  infoRowFirst:{
    marginTop:0,
    flexDirection:'row'
  },
  infoRow:{
    marginTop:10,
    flexDirection:'row'
  },
  infoText:{
    marginTop:'auto',
    marginLeft:10,
  },
  infoImage:{
    width:30,
    height:30
  },
  infoRowFinal:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    zIndex:10
  },
  timeText:{
    flexDirection:'row'
  },
  finalRow:{
    zIndex:1,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    zIndex:1,
  },
  status:{
    backgroundColor:"#00b386",
    borderBottomRightRadius:5,
    borderTopLeftRadius:15,
    paddingHorizontal:10,
    width:220,
    zIndex:1,
    textAlign:'center',
    marginTop:5
  },
  statusText:{
    marginTop:'auto',
    color:'white',
    fontSize:12,
    zIndex:1,
    marginBottom:'auto'
  },
  dropdownCont:{
    position:'relative',
  },
  dropdownImage:{
    width:30,
    height:30
  },
  dropdownButtonVisible:{
    backgroundColor:"#808080",
    marginRight:10,
    paddingHorizontal:5,
    borderRadius:10
  },
  dropdownButtonHidden:{
    backgroundColor:"#bfbfbf",
    marginRight:10,
    paddingHorizontal:5,
    borderRadius:10
  }
});

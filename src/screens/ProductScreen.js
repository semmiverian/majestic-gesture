import React, { useState} from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'
import { PanGestureHandler, PinchGestureHandler} from 'react-native-gesture-handler'

const HomeDetailScreen = props => {
  const [translateX, settranslateX] = useState(0)
  const [translateY, settranslateY] = useState(0)
  const [scale, setscale] = useState(1)

  function onGestureEvent(event) {
    console.log(event)
    setscale(event.nativeEvent.scale)
    // settranslateX(event.nativeEvent.translationX)
    // settranslateY(event.nativeEvent.translationY)
  }


  return (
    <PinchGestureHandler onGestureEvent={onGestureEvent}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <TouchableOpacity
        style={{ 
          borderRadius: 999,
          backgroundColor: 'blue',
          height: 350,
          width: 350,
          transform: [
            {
              scale
            }
          ]
        }}
      >
      </TouchableOpacity>
      </View>
    </PinchGestureHandler>
  )
}

export default HomeDetailScreen

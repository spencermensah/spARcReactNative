'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroARImageMarker,
  ViroARTrackingTargets,
  Viro3DObject,
  ViroAmbientLight,
  ViroBox
} from 'react-viro';

export default class Trousers extends Component {
  render() {
    return (
      <ViroARImageMarker target={"ben"}>
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          source={{uri:"https://firebasestorage.googleapis.com/v0/b/arvisual-ebcc4.appspot.com/o/logostd.txt?alt=media&token=db732078-4ee8-488b-b3fd-ef29202928bf"}} type="OBJ"
          position={[0, 0, 0]}
          scale={[.02, .02, .02]}
          />
      </ViroARImageMarker>

    );
  }
}

ViroARTrackingTargets.createTargets({
  "ben" : {
    source : require('./res/colours.png'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
})

module.exports = Trousers;

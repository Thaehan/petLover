import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {RTCView} from 'react-native-webrtc';

import {useVideoCall} from '@Utils/Services/VideoCall';

export function ChatScreen() {
  const {createOffer, remoteStream, localStream} = useVideoCall();

  return (
    <View style={styles.container}>
      {localStream && (
        <RTCView
          streamURL={localStream.toURL()}
          style={{width: '100%', height: 200}}
          mirror
        />
      )}
      {remoteStream && (
        <RTCView
          streamURL={remoteStream.toURL()}
          style={{width: '100%', height: 200}}
          mirror
        />
      )}
      <Button title="Start Call" onPress={createOffer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

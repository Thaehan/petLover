import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {RTCView} from 'react-native-webrtc';

import {useVideoCall} from '@Utils/Services/VideoCall';
import {PADDING_SIZE} from '@Theme/AppTheme';

export function ChatScreen() {
  const {
    createACall,
    remoteStream,
    localStream,
    startCalling,
    endCalling,
    acceptCalling,
  } = useVideoCall();

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
      <Button title="Join the room for the call" onPress={startCalling} />
      {<Button title="Create the call" onPress={createACall} />}
      {<Button title="Accept the call" onPress={acceptCalling} />}
      {<Button title="End the call" onPress={endCalling} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: PADDING_SIZE.lg},
});

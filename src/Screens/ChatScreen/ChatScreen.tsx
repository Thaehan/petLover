import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {
  RTCPeerConnection,
  RTCSessionDescription,
  RTCView,
  mediaDevices,
  RTCIceCandidate,
} from 'react-native-webrtc';
import io from 'socket.io-client';

const socket = io('https://a2f8-27-72-100-85.ngrok-free.app');

const pc = new RTCPeerConnection();

export function ChatScreen() {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const roomId = 'room1'; // Use a fixed room ID or generate dynamically

  useEffect(() => {
    socket.emit('join-room', roomId, socket.id);

    socket.on('user-connected', userId => {
      console.log('User connected:', userId);
      callUser();
    });

    socket.on('signal', async signal => {
      console.log({signal});
      if (signal.type === 'offer') {
        await pc.setRemoteDescription(new RTCSessionDescription(signal));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socket.emit('signal', roomId, answer);
      } else if (signal.type === 'answer') {
        await pc.createAnswer();
        await pc.setRemoteDescription(new RTCSessionDescription(signal));
      } else if (signal.type === 'candidate') {
        pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
      }
    });

    return () => {
      pc.close();
      socket.disconnect();
    };
  }, []);

  const callUser = async () => {
    try {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      socket.emit('signal', roomId, offer);

      pc.onicecandidate = event => {
        if (event.candidate) {
          socket.emit('signal', roomId, {candidate: event.candidate});
        }
      };

      pc.ontrack = event => {
        setRemoteStream(event.streams[0]);
      };

      const stream = await mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setLocalStream(stream);
      stream.getTracks().forEach(track => pc.addTrack(track, stream));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Video Call App</Text>
        {localStream && (
          <RTCView
            streamURL={localStream.toURL()}
            style={{width: 200, height: 200}}
            mirror
          />
        )}
        {remoteStream && (
          <RTCView
            streamURL={remoteStream.toURL()}
            style={{width: 200, height: 200}}
            mirror
          />
        )}
        <Button title="Call" onPress={callUser} />
      </View>
    </SafeAreaView>
  );
}

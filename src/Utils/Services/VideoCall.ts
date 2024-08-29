import {useEffect, useRef, useState} from 'react';
import {
  mediaDevices,
  MediaStream,
  RTCIceCandidate,
  RTCPeerConnection,
  RTCSessionDescription,
} from 'react-native-webrtc';

import {SOCKET} from './Socket';

export function useVideoCall() {
  const pc = useRef(
    new RTCPeerConnection({
      iceServers: [
        {urls: 'stun:stun.l.google.com:19302'}, // Sử dụng server STUN của Google để tạo ICE candidates
      ],
      bundlePolicy: 'max-bundle',
      iceTransportPolicy: 'all',
      rtcpMuxPolicy: 'require',
    }),
  );
  const [localStream, setLocalStream] = useState<MediaStream>();
  const [remoteStream, setRemoteStream] = useState<MediaStream>();

  // Tạo offer
  const createOffer = async () => {
    if (pc.current) {
      const offer = await pc.current.createOffer({});
      await pc.current.setLocalDescription(offer);
      SOCKET.emit('offer', offer);
    }
  };

  const socketListener = () => {
    //Handle recieve offer from socket
    SOCKET.on('offer', async offer => {
      await pc.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pc.current.createAnswer();
      await pc.current.setLocalDescription(answer);
      SOCKET.emit('answer', answer);
    });

    //Handle recieve answer from socket
    SOCKET.on('answer', answer => {
      pc.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    //Handle recieve ice candidate from socket
    SOCKET.on('ice-candidate', data => {
      pc.current.addIceCandidate(new RTCIceCandidate(data));
    });
  };

  const peerConnectionHandler = () => {
    // Nhận remote stream từ peer
    //@ts-ignore
    pc.current.ontrack = event => {
      if (event.streams && event.streams[0]) {
        setRemoteStream(event.streams[0]);
      }
    };

    // // Xử lý sự kiện ICE candidate
    //@ts-ignore
    pc.current.onicecandidate = event => {
      if (event.candidate) {
        SOCKET.emit('ice-candidate', event.candidate);
      }
    };
  };

  const recieveLocalStream = async () => {
    try {
      // Nhận local stream từ camera
      const stream = await mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      stream.getTracks().forEach(track => pc.current.addTrack(track, stream));
      setLocalStream(stream);
    } catch (error) {}
  };

  useEffect(() => {
    socketListener();
    peerConnectionHandler();
    recieveLocalStream();

    return () => {
      pc.current?.close();
      SOCKET.disconnect();
    };
  }, []);

  return {
    createOffer,
    localStream,
    remoteStream,
  };
}

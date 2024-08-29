import {useEffect} from 'react';
import io from 'socket.io-client';
import {useNetInfo} from '@react-native-community/netinfo';

export enum SocketEvent {
  CONNECT = 'CONNECT',
  DISCONNECT = 'DISCONNECT',
}

export enum RTCStatus {
  OFFER = 'OFFER',
  ANSWER = 'ANSWER',
  ICE_CANDIDATE = 'ICE_CANDIDATE',
}

const SOCKET_URL = process.env.SOCKET_URL as string;

///workaround to persistent socketId after reconnect
export const SOCKET = io(SOCKET_URL, {
  // autoConnect: false,
  // reconnection: true,
});

export const useSocketIOInit = () => {
  const network = useNetInfo();

  useEffect(() => {
    const onConnect = () => {};
    //io server disconnect
    const onDisconnect = () => {
      if (SOCKET.active) {
        return;
      }
      SOCKET.connect();
    };

    SOCKET.on(SocketEvent.CONNECT, onConnect);
    SOCKET.on(SocketEvent.DISCONNECT, onDisconnect);

    return () => {
      SOCKET.off(SocketEvent.CONNECT);
      SOCKET.off(SocketEvent.DISCONNECT);
    };
  }, []);

  useEffect(() => {
    if (SOCKET.connected) {
      return;
    }
    SOCKET.connect();
  }, [network.isConnected, network.type]);
};

import { io, Socket } from "socket.io-client";
import eventNames from "../configs/eventNames";

class SocketService {
  socket: Socket | null = null;

  connect(url: string) {
    return new Promise<Socket>((resolve, reject) => {
      this.socket = io(url);

      if (!this.socket) {
        return reject();
      }

      this.socket.on(eventNames.predefined.connect, () => {
        return resolve(this.socket as Socket);
      });

      this.socket.on(eventNames.predefined.connectError, (error) => {
        reject(error);
      });
    });
  }
}

export default new SocketService();

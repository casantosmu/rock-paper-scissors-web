import { io, Socket } from "socket.io-client";
import configs from "../configs/configs";

const { eventNames } = configs;

class SocketService {
  public socket: Socket | null = null;

  public connect(url: string): Promise<Socket> {
    return new Promise((resolve, reject) => {
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

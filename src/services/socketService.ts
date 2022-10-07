import { io, Socket } from "socket.io-client";

class SocketService {
  public socket: Socket | null = null;

  public connect(url: string): Promise<Socket> {
    return new Promise((resolve, reject) => {
      this.socket = io(url);

      if (!this.socket) {
        return reject();
      }

      this.socket.on("connect", () => {
        return resolve(this.socket as Socket);
      });

      this.socket.on("connect_error", (error) => {
        reject(error);
      });
    });
  }
}

export default new SocketService();

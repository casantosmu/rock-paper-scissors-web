import { io, Socket } from "socket.io-client";

class SocketService {
  public socket: Socket | null = null;

  public connect(url: string): Promise<Socket> {
    return new Promise((resolve, reject) => {
      this.socket = io(url);

      if (!this.socket) {
        reject();
        return;
      }

      this.socket.on("connect", () => {
        resolve(this.socket as Socket);
        return;
      });

      this.socket.on("connect_error", (error) => {
        reject(error);
      });
    });
  }
}

export default new SocketService();

import configs from "../configs/configs";
import { Socket } from "socket.io-client";

const { eventMessages } = configs;

class RoomService {
  public async joinGame(socket: Socket, gameId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      socket.emit(eventMessages.room.joinBase, gameId);
      socket.on(eventMessages.room.joinSucces, () => {
        resolve(true);
      });
      socket.on(eventMessages.room.joinError, () => {
        reject(false);
      });
    });
  }
}

export default new RoomService();

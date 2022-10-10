import configs from "../configs/configs";
import { Socket } from "socket.io-client";

const { eventNames } = configs;

class RoomService {
  public async joinGame(socket: Socket, gameId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      socket.emit(eventNames.room.joinBase, gameId);
      socket.on(eventNames.room.joinSucces, () => {
        resolve(true);
      });
      socket.on(eventNames.room.joinError, () => {
        reject(false);
      });
    });
  }
}

export default new RoomService();

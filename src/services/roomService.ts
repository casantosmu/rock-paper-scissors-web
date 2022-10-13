import configs from "../configs/configs";
import { Socket } from "socket.io-client";

const { eventNames } = configs;

class RoomService {
  joinGame(socket: Socket, gameId: string) {
    return new Promise<boolean>((resolve, reject) => {
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

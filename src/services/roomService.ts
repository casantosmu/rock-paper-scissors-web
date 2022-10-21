import { Socket } from "socket.io-client";
import eventNames from "../configs/eventNames";

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

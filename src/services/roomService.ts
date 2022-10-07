import configs from "../configs/configs";
import { Socket } from "socket.io-client";

class RoomService {
  public async joinGame(socket: Socket, gameId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      socket.emit(configs.eventMessages.room.joinBase, gameId);
      socket.on(configs.eventMessages.room.joinSucces, () => {
        resolve(true);
      });
      socket.on(configs.eventMessages.room.joinError, () => {
        reject(false);
      });
    });
  }
}

export default new RoomService();

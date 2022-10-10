import { Socket } from "socket.io-client";
import configs from "../configs/configs";
import { HandNames } from "../types/interfaces";

const { eventNames } = configs;

class MoveServices {
  public updateHand(socket: Socket, handName: HandNames): void {
    socket.emit(eventNames.hand.update, handName);
  }

  public handleUpdatedHand(
    socket: Socket,
    listener: (handName: HandNames) => void
  ): void {
    socket.on(eventNames.hand.updated, listener);
  }
}

export default new MoveServices();

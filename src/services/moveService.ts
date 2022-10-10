import { Socket } from "socket.io-client";
import configs from "../configs/configs";
import { HandNames } from "../types/interfaces";

const { eventNames } = configs;

class MoveServices {
  uploadUserWaiting(socket: Socket) {
    socket.emit(eventNames.move.uploadUserWaiting);
  }

  updateHand(socket: Socket, handName: HandNames) {
    socket.emit(eventNames.hand.update, handName);
  }

  handleUpdatedHand(socket: Socket, listener: (handName: HandNames) => void) {
    socket.on(eventNames.hand.updated, listener);
  }
}

export default new MoveServices();

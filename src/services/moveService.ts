import { Socket } from "socket.io-client";
import eventNames from "../configs/eventNames";
import { HandNames } from "../types/interfaces";

class MoveServices {
  uploadUserWaiting(socket: Socket) {
    socket.emit(eventNames.move.uploadUserWaiting);
  }

  handleMoveStarts(socket: Socket, listener: () => void) {
    socket.on(eventNames.move.starts, listener);
  }

  updateHand(socket: Socket, handName: HandNames) {
    socket.emit(eventNames.hand.update, handName);
  }

  handleUpdatedHand(socket: Socket, listener: (handName: HandNames) => void) {
    socket.on(eventNames.hand.updated, listener);
  }
}

export default new MoveServices();

import { useState } from "react";
import gameService from "../services/moveService";
import socketService from "../services/socketService";

const useCurrentGame = () => {
  const [isStarted, setIsStarted] = useState(false);

  const socket = socketService.socket;

  const gameStartsHandler = () => {
    if (socket) {
      gameService.uploadUserWaiting(socket);
      gameService.handleMoveStarts(socket, () => {
        setIsStarted(true);
      });
    }
  };

  return {
    isStarted,
    gameStartsHandler,
  };
};

export default useCurrentGame;

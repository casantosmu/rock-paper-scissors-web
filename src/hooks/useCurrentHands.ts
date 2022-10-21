import { useState } from "react";
import moveService from "../services/moveService";
import socketService from "../services/socketService";
import { HandNames } from "../types/interfaces";

const useCurrentHands = () => {
  const [userHand, setUserHand] = useState<HandNames | null>(null);
  const [rivalHand, setRivalHand] = useState<HandNames | null>(null);

  const socket = socketService.socket;

  const updateUserHand = (handName: HandNames) => {
    if (socket) {
      moveService.updateHand(socket, handName);
      setUserHand(handName);
    }
  };

  const rivalHandHandler = () => {
    if (socket) {
      moveService.handleUpdatedHand(socket, setRivalHand);
    }
  };

  return {
    userHand,
    rivalHand,
    updateUserHand,
    rivalHandHandler,
  };
};

export default useCurrentHands;

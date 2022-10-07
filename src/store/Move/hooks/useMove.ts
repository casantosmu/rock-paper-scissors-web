import { useContext } from "react";
import moveService from "../../../services/moveService";
import socketService from "../../../services/socketService";
import { HandNames } from "../../../types/interfaces";
import MoveContext from "../context/MoveContext";

const useMove = () => {
  const socket = socketService.socket;
  const { setUserHand, setRivalHand } = useContext(MoveContext);

  const updateUserHand = (handName: HandNames) => {
    if (socket) {
      moveService.updateHand(socket, handName);
      setUserHand(handName);
    }
  };

  const updateRivalHand = () => {
    if (socket) {
      moveService.handleUpdatedHand(socket, setRivalHand);
    }
  };

  return { updateUserHand, updateRivalHand };
};

export default useMove;

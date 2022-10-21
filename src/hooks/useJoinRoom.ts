import { useState } from "react";
import roomService from "../services/roomService";
import socketService from "../services/socketService";

const useJoinRoom = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState<string | false>(false);

  const socket = socketService.socket;

  const joinRoom = async (roomId: string) => {
    setIsJoining(true);

    try {
      if (!socket) throw new Error();
      await roomService.joinGame(socket, roomId);

      setIsJoined(true);
    } catch {
      setError("Could not join the room");
    } finally {
      setIsJoining(false);
    }
  };

  return {
    isJoined,
    isJoining,
    error,
    joinRoom,
  };
};

export default useJoinRoom;

import { useContext } from "react";
import roomService from "../../../services/roomService";
import socketService from "../../../services/socketService";
import RoomContext from "../context/RoomContext";

const useRoom = () => {
  const socket = socketService.socket;

  const { setIsLoading, setRoomId, setError } = useContext(RoomContext);

  const joinRoom = async (gameId: string) => {
    setIsLoading(true);

    try {
      if (!socket) throw new Error();

      await roomService.joinGame(socket, gameId);
      setIsLoading(false);
      setRoomId(gameId);
    } catch {
      setError("Could not join the room");
    }
  };

  return {
    joinRoom,
  };
};

export default useRoom;

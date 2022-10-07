import { useContext, useState } from "react";
import RoomContext from "../store/Room/context/RoomContext";
import useRoom from "../store/Room/hooks/useRoom";
import Button from "./Button";
import Input from "./Input";

const JoinRoomForm = () => {
  const [gameId, setGameId] = useState("");
  const { joinRoom } = useRoom();
  const { error, isLoading, roomId } = useContext(RoomContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (gameId.trim() || isLoading || error || !roomId) {
      joinRoom(gameId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pb-10">
        <label
          htmlFor="game-id"
          className="block pb-3 text-neutral-50 text-center"
        >
          Enter room ID to join the game
        </label>
        <Input
          id="game-id"
          value={gameId}
          onChange={(event) => {
            setGameId(event.target.value);
          }}
        />
      </div>
      <Button
        type="submit"
        size="large"
        variant="outlined"
        style={{ margin: "0 auto" }}
        disabled={isLoading || Boolean(error) || Boolean(roomId)}
      >
        Join
      </Button>
    </form>
  );
};

export default JoinRoomForm;

import { useContext, useState } from "react";
import RoomContext from "../store/Room/context/RoomContext";
import useRoom from "../store/Room/hooks/useRoom";
import Button from "./Button";
import Input from "./Input";

const JoinRoomForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { joinRoom } = useRoom();
  const { isLoading, roomId } = useContext(RoomContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim() && !isLoading && !roomId) {
      joinRoom(inputValue);
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
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </div>
      <Button
        type="submit"
        size="large"
        variant="outlined"
        style={{ margin: "0 auto" }}
        disabled={!inputValue.trim() || isLoading || Boolean(roomId)}
      >
        Join
      </Button>
    </form>
  );
};

export default JoinRoomForm;

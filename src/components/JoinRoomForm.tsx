import { useState } from "react";

import Button from "./Button";
import Input from "./Input";

interface JoinRoomFormProps {
  joinRoom: (roomId: string) => Promise<void>;
  isJoining: boolean;
}

const JoinRoomForm = ({ joinRoom, isJoining }: JoinRoomFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim() || !isJoining) {
      await joinRoom(inputValue);
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="pb-10">
        <label
          htmlFor="game-id"
          className="block pb-3 text-neutral-50 text-center"
        >
          Enter room ID to join the game
        </label>
        <Input id="game-id" value={inputValue} onChange={onChangeInput} />
      </div>
      <Button
        type="submit"
        size="large"
        variant="outlined"
        style={{ margin: "0 auto" }}
        disabled={!inputValue.trim() || isJoining}
      >
        Join
      </Button>
    </form>
  );
};

export default JoinRoomForm;

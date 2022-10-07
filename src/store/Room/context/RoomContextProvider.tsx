import { PropsWithChildren, useState } from "react";
import RoomContext from "./RoomContext";

const RoomContextProvier = ({ children }: PropsWithChildren): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | false>(false);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [userScore, setUserScore] = useState(0);

  return (
    <RoomContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        roomId,
        setRoomId,
        userScore,
        setUserScore,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvier;

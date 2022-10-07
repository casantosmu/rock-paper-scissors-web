import { createContext, Dispatch, SetStateAction } from "react";

interface InitialRoomContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string | false;
  setError: Dispatch<SetStateAction<string | false>>;
  roomId: string | null;
  setRoomId: Dispatch<SetStateAction<string | null>>;
  userScore: number;
  incrementUserScore: () => void;
  decrementUserScore: () => void;
}

const initialRoomContext: InitialRoomContext = {
  isLoading: false,
  setIsLoading: () => {},
  error: false,
  setError: () => {},
  roomId: null,
  setRoomId: () => {},
  userScore: 0,
  incrementUserScore: () => {},
  decrementUserScore: () => {},
};

const RoomContext = createContext(initialRoomContext);

export default RoomContext;

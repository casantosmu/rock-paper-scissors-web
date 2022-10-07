import { createContext, Dispatch, SetStateAction } from "react";

interface InitialRoomContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string | false;
  setError: Dispatch<SetStateAction<string | false>>;
  roomId: string | null;
  setRoomId: Dispatch<SetStateAction<string | null>>;
}

const initialRoomContext: InitialRoomContext = {
  isLoading: false,
  setIsLoading: () => {},
  error: false,
  setError: () => {},
  roomId: null,
  setRoomId: () => {},
};

const RoomContext = createContext(initialRoomContext);

export default RoomContext;

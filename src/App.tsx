import { useContext, useEffect } from "react";
import HandChipResults from "./components/HandChipsResult";
import HandChipSelect from "./components/HandChipsSelect";
import JoinRoomForm from "./components/JoinRoomForm";
import SharedLayout from "./layouts/SharedLayout";
import MoveContext from "./store/Move/context/MoveContext";
import useMove from "./store/Move/hooks/useMove";
import RoomContext from "./store/Room/context/RoomContext";
import WaitingRoom from "./components/WaitingRoom";
import useConnectSocket from "./hooks/useConnectSocket";
import Error from "./components/Error";

const App = () => {
  const { isConnecting, error: socketError } = useConnectSocket();
  const { roomId, error: joinError } = useContext(RoomContext);
  const { userHand, isStarted } = useContext(MoveContext);
  const { updateRivalHand, handleMoveStarts } = useMove();

  useEffect(() => {
    handleMoveStarts();
  }, [handleMoveStarts]);

  useEffect(() => {
    updateRivalHand();
  }, [updateRivalHand]);

  const error = socketError || joinError;

  if (error) {
    return (
      <SharedLayout>
        <Error errorMessage={error}></Error>
      </SharedLayout>
    );
  }

  if (isConnecting) {
    return <SharedLayout>Connecting... </SharedLayout>;
  }

  if (!roomId) {
    return (
      <SharedLayout>
        <JoinRoomForm />
      </SharedLayout>
    );
  }

  if (!isStarted) {
    return (
      <SharedLayout>
        <WaitingRoom />
      </SharedLayout>
    );
  }

  if (!userHand) {
    return (
      <SharedLayout>
        <HandChipSelect />
      </SharedLayout>
    );
  }

  return (
    <SharedLayout>
      <HandChipResults />
    </SharedLayout>
  );
};

export default App;

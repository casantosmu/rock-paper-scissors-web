import { useContext, useEffect } from "react";
import HandChipResults from "./components/HandChipsResult";
import HandChipSelect from "./components/HandChipsSelect";
import JoinRoomForm from "./components/JoinRoomForm";
import MoveContext from "./store/Move/context/MoveContext";
import useMove from "./store/Move/hooks/useMove";
import Loading from "./components/Loading";
import useConnectSocket from "./hooks/useConnectSocket";
import Error from "./components/Error";
import useJoinRoom from "./hooks/useJoinRoom";
import RoomLayout from "./layouts/RoomLayout";

const App = () => {
  const { isConnecting, error: socketError } = useConnectSocket();
  const { isJoined, isJoining, error: joinError, joinRoom } = useJoinRoom();
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
      <RoomLayout>
        <Error errorMessage={error}></Error>
      </RoomLayout>
    );
  }

  if (isConnecting) {
    return (
      <RoomLayout>
        <Loading loadingMessage="Connecting..." />;
      </RoomLayout>
    );
  }

  if (!isJoined) {
    return (
      <RoomLayout>
        <JoinRoomForm joinRoom={joinRoom} isJoining={isJoining} />
      </RoomLayout>
    );
  }

  if (!isStarted) {
    return (
      <RoomLayout>
        <Loading loadingMessage="Waiting for another player..." />
      </RoomLayout>
    );
  }

  if (!userHand) {
    return (
      <RoomLayout>
        <HandChipSelect />
      </RoomLayout>
    );
  }

  return (
    <RoomLayout>
      <HandChipResults />
    </RoomLayout>
  );
};

export default App;

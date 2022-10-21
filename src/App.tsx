import { useContext, useEffect } from "react";
import HandChipResults from "./components/HandChipsResult";
import HandChipSelect from "./components/HandChipsSelect";
import JoinRoomForm from "./components/JoinRoomForm";
import SharedLayout from "./layouts/SharedLayout";
import MoveContext from "./store/Move/context/MoveContext";
import useMove from "./store/Move/hooks/useMove";
import Loading from "./components/Loading";
import useConnectSocket from "./hooks/useConnectSocket";
import Error from "./components/Error";
import useJoinRoom from "./hooks/useJoinRoom";

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
      <SharedLayout>
        <Error errorMessage={error}></Error>
      </SharedLayout>
    );
  }

  if (isConnecting) {
    return (
      <SharedLayout>
        <Loading loadingMessage="Connecting..." />;
      </SharedLayout>
    );
  }

  if (!isJoined) {
    return (
      <SharedLayout>
        <JoinRoomForm joinRoom={joinRoom} isJoining={isJoining} />
      </SharedLayout>
    );
  }

  if (!isStarted) {
    return (
      <SharedLayout>
        <Loading loadingMessage="Waiting for another player..." />
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

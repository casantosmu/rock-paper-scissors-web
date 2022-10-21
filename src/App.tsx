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
import BaseLayout from "./layouts/BaseLayout";

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
      <BaseLayout>
        <Error errorMessage={error}></Error>
      </BaseLayout>
    );
  }

  if (isConnecting) {
    return (
      <BaseLayout>
        <Loading loadingMessage="Connecting..." />;
      </BaseLayout>
    );
  }

  if (!isJoined) {
    return (
      <BaseLayout>
        <JoinRoomForm joinRoom={joinRoom} isJoining={isJoining} />
      </BaseLayout>
    );
  }

  if (!isStarted) {
    return (
      <BaseLayout>
        <Loading loadingMessage="Waiting for another player..." />
      </BaseLayout>
    );
  }

  if (!userHand) {
    return (
      <BaseLayout>
        <HandChipSelect />
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <HandChipResults />
    </BaseLayout>
  );
};

export default App;

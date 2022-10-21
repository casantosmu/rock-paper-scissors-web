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
import useUserScore from "./hooks/useUserScore";
import GameLayout from "./layouts/MoveLayout";

const App = () => {
  const { isConnecting, error: socketError } = useConnectSocket();
  const { isJoined, isJoining, error: joinError, joinRoom } = useJoinRoom();
  const { userScore } = useUserScore();
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
      <GameLayout userScore={userScore}>
        <Loading loadingMessage="Waiting for another player..." />
      </GameLayout>
    );
  }

  if (!userHand) {
    return (
      <GameLayout userScore={userScore}>
        <HandChipSelect />
      </GameLayout>
    );
  }

  return (
    <GameLayout userScore={userScore}>
      <HandChipResults />
    </GameLayout>
  );
};

export default App;

import { useContext, useEffect } from "react";
import HandChipResults from "./components/HandChipsResult";
import HandChipSelect from "./components/HandChipsSelect";
import JoinRoomForm from "./components/JoinRoomForm";
import configs from "./configs/configs";
import SharedLayout from "./layouts/SharedLayout";
import socketService from "./services/socketService";
import MoveContext from "./store/Move/context/MoveContext";
import useMove from "./store/Move/hooks/useMove";
import RoomContext from "./store/Room/context/RoomContext";
import WaitingRoom from "./components/WaitingRoom";

const App = () => {
  const { roomId, setIsLoading, error, setError } = useContext(RoomContext);
  const { userHand, isStarted } = useContext(MoveContext);
  const { updateRivalHand, handleMoveStarts } = useMove();

  useEffect(() => {
    (async () => {
      try {
        await socketService.connect(configs.env.socketApiUrl);
      } catch {
        setError("Ups! Something went wrong");
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateRivalHand();
    handleMoveStarts();
  }, [handleMoveStarts, updateRivalHand]);

  if (error) {
    return <div>Error!: {error}</div>;
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

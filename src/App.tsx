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

const App = () => {
  const { roomId, setIsLoading, error, setError } = useContext(RoomContext);
  const { userHand } = useContext(MoveContext);
  const { updateRivalHand } = useMove();

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
  }, [updateRivalHand]);

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

  if (!userHand) {
    return (
      <SharedLayout>
        <HandChipSelect hands={[...configs.game.handNames]} />
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

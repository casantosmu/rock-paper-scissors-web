import { useContext, useEffect } from "react";
import { HandChip } from "./components/HandChip";
import Header from "./components/Header";
import JoinRoomForm from "./components/JoinRoomForm";
import configs from "./configs/configs";
import socketService from "./services/socketService";
import useMove from "./store/Move/hooks/useMove";
import RoomContext from "./store/Room/context/RoomContext";

const App = () => {
  const { roomId, setIsLoading, error, setError } = useContext(RoomContext);
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

  return (
    <div className="bg-blue-900">
      <div className="flex flex-col min-h-screen w-full max-w-lg m-auto ">
        <Header />
        {roomId ? (
          <HandChip name="paper" isButton />
        ) : (
          <div className="grow flex justify-center items-center">
            <JoinRoomForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

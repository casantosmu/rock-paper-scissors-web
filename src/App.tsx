import { useContext, useEffect, useState } from "react";
import Button from "./components/Button";
import configs from "./configs/configs";
import socketService from "./services/socketService";
import RoomContext from "./store/Room/context/RoomContext";

const App = () => {
  const { isLoading, setIsLoading, error, setError } = useContext(RoomContext);

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

  if (error) {
    return <div>Error!: {error}</div>;
  }

  return (
    <div>
      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-blue-900">
          <div className="grow flex justify-center items-center">
            <Button size="base" variant="filled">
              Rules
            </Button>
            <Button size="large" variant="outlined">
              Join
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

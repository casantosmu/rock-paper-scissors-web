import { useEffect, useState } from "react";
import Button from "./components/Button";
import configs from "./configs/configs";
import socketService from "./services/socketService";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await socketService.connect(configs.env.socketApiUrl);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return <div>Error!</div>;
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

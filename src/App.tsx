import { useEffect, useState } from "react";
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

  return <div>{!isLoading && "Home"}</div>;
};

export default App;

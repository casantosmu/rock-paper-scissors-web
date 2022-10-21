import { useState, useEffect } from "react";
import environmentVariables from "../configs/environmentVariables";
import socketService from "../services/socketService";

const useConnectSocket = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | false>(false);

  const connectSocket = async () => {
    setIsConnecting(true);

    try {
      await socketService.connect(environmentVariables.socketApiUrl);
    } catch {
      setError("Ups! Something went wrong");
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return {
    isConnecting,
    error,
  };
};

export default useConnectSocket;

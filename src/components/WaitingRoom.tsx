import loadingSpinner from "../assets/loading-spinner.svg";
import moveService from "../services/moveService";
import socketService from "../services/socketService";

const WaitingRoom = () => {
  const socket = socketService.socket;

  if (socket) {
    moveService.uploadUserWaiting(socket);
  }

  return (
    <div>
      <span className="block text-neutral-50 text-center pb-5">
        Waiting for another player...
      </span>
      <img
        src={loadingSpinner}
        alt="Loading spinner"
        height={50}
        width={50}
        className="mx-auto"
      />
    </div>
  );
};

export default WaitingRoom;

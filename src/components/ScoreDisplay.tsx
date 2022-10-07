import { useContext } from "react";
import RoomContext from "../store/Room/context/RoomContext";

const ScoreDisplay = (): JSX.Element => {
  const { userScore } = useContext(RoomContext);

  return (
    <div className="p-2 w-20 aspect-square bg-neutral-50 rounded-md shadow-md">
      <span className="block text-center text-blue-800 text-sm">Score</span>
      <span className="block text-center text-3xl tracking-tighter font-bold text-gray-800">
        {userScore}
      </span>
    </div>
  );
};

export default ScoreDisplay;

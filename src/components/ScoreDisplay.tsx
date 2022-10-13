import { useContext } from "react";
import RoomContext from "../store/Room/context/RoomContext";

const ScoreDisplay = (): JSX.Element => {
  const { userScore } = useContext(RoomContext);

  return (
    <div className="py-3 px-8 bg-neutral-50 rounded-md shadow-md">
      <span className="block text-center text-blue-800 text-xs spacing tracking-wider uppercase">
        Score
      </span>
      <span className="block text-center text-4xl tracking-wider font-bold text-neutral-600 ">
        {userScore}
      </span>
    </div>
  );
};

export default ScoreDisplay;

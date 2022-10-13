import { useContext } from "react";
import logoImage from "../assets/logo.svg";
import RoomContext from "../store/Room/context/RoomContext";
import ScoreDisplay from "./ScoreDisplay";

const Header = (): JSX.Element => {
  const { roomId } = useContext(RoomContext);

  return (
    <header className="flex justify-between items-center p-4 rounded-lg border-3 border-neutral-50/30">
      <img
        src={logoImage}
        alt="Rock, Paper, Scissors logo"
        width={162}
        height={99}
      />
      {roomId && <ScoreDisplay />}
    </header>
  );
};

export default Header;

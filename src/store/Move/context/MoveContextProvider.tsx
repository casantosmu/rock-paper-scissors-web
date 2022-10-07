import { PropsWithChildren, useState } from "react";
import { HandNames } from "../../../types/interfaces";
import MoveContext from "./MoveContext";

const MoveContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [userHand, setUserHand] = useState<HandNames | null>(null);
  const [rivalHand, setRivalHand] = useState<HandNames | null>(null);

  return (
    <MoveContext.Provider
      value={{
        userHand,
        setUserHand,
        rivalHand,
        setRivalHand,
      }}
    >
      {children}
    </MoveContext.Provider>
  );
};

export default MoveContextProvider;

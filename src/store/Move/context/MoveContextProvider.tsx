import { PropsWithChildren, useState } from "react";
import { HandNames, ResultsTypes } from "../../../types/interfaces";
import MoveContext from "./MoveContext";

const MoveContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [userHand, setUserHand] = useState<HandNames | null>(null);
  const [rivalHand, setRivalHand] = useState<HandNames | null>(null);
  const [result, setResult] = useState<ResultsTypes | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <MoveContext.Provider
      value={{
        userHand,
        setUserHand,
        rivalHand,
        setRivalHand,
        result,
        setResult,
        isStarted,
        setIsStarted,
      }}
    >
      {children}
    </MoveContext.Provider>
  );
};

export default MoveContextProvider;

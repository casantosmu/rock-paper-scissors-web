import { createContext, Dispatch, SetStateAction } from "react";
import { HandNames, ResultsTypes } from "../../../types/interfaces";

interface InitialMoveContext {
  userHand: HandNames | null;
  setUserHand: Dispatch<SetStateAction<HandNames | null>>;
  rivalHand: HandNames | null;
  setRivalHand: Dispatch<SetStateAction<HandNames | null>>;
  result: ResultsTypes | null;
  setResult: Dispatch<SetStateAction<ResultsTypes | null>>;
  isStarted: boolean;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
}

const initialMoveContext: InitialMoveContext = {
  userHand: null,
  setUserHand: () => {},
  rivalHand: null,
  setRivalHand: () => {},
  result: null,
  setResult: () => {},
  isStarted: false,
  setIsStarted: () => {},
};

const MoveContext = createContext(initialMoveContext);

export default MoveContext;

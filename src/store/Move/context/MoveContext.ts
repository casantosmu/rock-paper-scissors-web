import { createContext, Dispatch, SetStateAction } from "react";
import { HandNames, ResultsTypes } from "../../../types/interfaces";

interface InitialMoveContext {
  userHand: HandNames | null;
  setUserHand: Dispatch<SetStateAction<HandNames | null>>;
  rivalHand: HandNames | null;
  setRivalHand: Dispatch<SetStateAction<HandNames | null>>;
  result: ResultsTypes | null;
  setResult: Dispatch<SetStateAction<ResultsTypes | null>>;
}

const initialMoveContext: InitialMoveContext = {
  userHand: null,
  setUserHand: () => {},
  rivalHand: null,
  setRivalHand: () => {},
  result: null,
  setResult: () => {},
};

const MoveContext = createContext(initialMoveContext);

export default MoveContext;

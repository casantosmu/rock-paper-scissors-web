import { createContext, Dispatch, SetStateAction } from "react";
import { HandNames } from "../../../types/interfaces";

interface InitialMoveContext {
  userHand: HandNames | null;
  setUserHand: Dispatch<SetStateAction<HandNames | null>>;
  rivalHand: HandNames | null;
  setRivalHand: Dispatch<SetStateAction<HandNames | null>>;
}

const initialMoveContext: InitialMoveContext = {
  userHand: null,
  setUserHand: () => {},
  rivalHand: null,
  setRivalHand: () => {},
};

const MoveContext = createContext(initialMoveContext);

export default MoveContext;

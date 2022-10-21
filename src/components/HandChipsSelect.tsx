import { HandNames } from "../types/interfaces";
import { HandChip } from "./HandChip";

interface HandChipsSelect {
  updateUserHand: (handName: HandNames) => void;
}

const HandChipSelect = ({ updateUserHand }: HandChipsSelect): JSX.Element => {
  return (
    <ul className="flex flex-wrap max-w-xs m-auto">
      <li className="w-6/12">
        <HandChip name="paper" onClick={() => updateUserHand("paper")} />
      </li>
      <li className="w-6/12 flex justify-end">
        <HandChip name="rock" onClick={() => updateUserHand("rock")} />
      </li>
      <li className="w-full flex justify-center">
        <HandChip name="scissors" onClick={() => updateUserHand("scissors")} />
      </li>
    </ul>
  );
};

export default HandChipSelect;

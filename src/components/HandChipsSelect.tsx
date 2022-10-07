import { HandNames } from "../types/interfaces";
import { HandChip } from "./HandChip";

interface HandChipSelectProps {
  hands: HandNames[];
}

const HandChipSelect = ({ hands }: HandChipSelectProps): JSX.Element => {
  return (
    <>
      {hands.map((hand) => {
        return <HandChip name={hand} isButton key={hand} />;
      })}
    </>
  );
};

export default HandChipSelect;

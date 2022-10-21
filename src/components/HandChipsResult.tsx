import { HandNames } from "../types/interfaces";
import { HandChip, HandChipEmpty } from "./HandChip";

interface HandChipResultsProps {
  userHand: HandNames;
  rivalHand: HandNames | null;
}

const HandChipResults = ({
  userHand,
  rivalHand,
}: HandChipResultsProps): JSX.Element => {
  return (
    <div className="flex justify-between max-w-md sm:max-w-none m-auto sm:m-0">
      <div className="flex flex-col-reverse sm:flex-col items-center gap-6 sm:gap-10">
        <span className="text-neutral-50 uppercase tracking-wider">
          You picked
        </span>
        <HandChip name={userHand} size="large" />
      </div>
      <div className="flex flex-col-reverse sm:flex-col items-center gap-6 sm:gap-10">
        <span className="text-neutral-50 uppercase tracking-wider">
          The rival picked
        </span>
        {rivalHand ? (
          <HandChip name={rivalHand} size="large" />
        ) : (
          <HandChipEmpty />
        )}
      </div>
    </div>
  );
};

export default HandChipResults;

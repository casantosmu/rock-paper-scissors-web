import { useContext } from "react";
import MoveContext from "../store/Move/context/MoveContext";
import { HandChip, HandChipEmpty } from "./HandChip";

const HandChipResults = (): JSX.Element => {
  const { userHand, rivalHand } = useContext(MoveContext);

  return (
    <div className="flex justify-between max-w-md m-auto sm:max-w-none sm:m-0">
      <div className="flex flex-col-reverse sm:flex-col items-center gap-6 sm:gap-10">
        <span className="text-neutral-50 uppercase tracking-wider">
          You picked
        </span>
        {userHand && <HandChip name={userHand} size="large" />}
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

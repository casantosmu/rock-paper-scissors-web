import { useContext } from "react";
import MoveContext from "../store/Move/context/MoveContext";
import { HandChip, HandChipEmpty } from "./HandChip";

const HandChipResults = (): JSX.Element => {
  const { userHand, rivalHand } = useContext(MoveContext);

  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col items-center gap-3">
        <div className="grow">{userHand && <HandChip name={userHand} />}</div>
        <span className="text-neutral-50">You picked</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        {rivalHand ? <HandChip name={rivalHand} /> : <HandChipEmpty />}
        <span className="text-neutral-50">The rival picked</span>
      </div>
    </div>
  );
};

export default HandChipResults;

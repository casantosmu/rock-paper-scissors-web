import { HandChip } from "./HandChip";

const HandChipSelect = (): JSX.Element => {
  return (
    <ul className="flex flex-wrap max-w-xs m-auto">
      <li className="w-6/12">
        <HandChip name="paper" isButton />
      </li>
      <li className="w-6/12 flex justify-end">
        <HandChip name="rock" isButton />
      </li>
      <li className="w-full flex justify-center">
        <HandChip name="scissors" isButton />
      </li>
    </ul>
  );
};

export default HandChipSelect;

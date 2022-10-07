import iconScissors from "../assets/icon-scissors.svg";
import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import { HandNames } from "../types/interfaces";
import useMove from "../store/Move/hooks/useMove";

interface HandChipProps {
  name: HandNames;
  isButton?: boolean;
}

interface HandChipStyles {
  image: string;
  borderColor: string;
}

const handStylesMap: Record<HandNames, HandChipStyles> = {
  scissors: {
    image: iconScissors,
    borderColor: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  },
  paper: {
    image: iconPaper,
    borderColor: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  rock: {
    image: iconRock,
    borderColor: "bg-gradient-to-br from-red-500 to-red-600",
  },
};

export const HandChip = ({ name, isButton }: HandChipProps): JSX.Element => {
  const { updateUserHand } = useMove();
  const Component = isButton ? "button" : "span";

  const handleClick = () => {
    if (isButton) {
      updateUserHand(name);
    }
  };

  return (
    <Component
      onClick={handleClick}
      className={`block ${handStylesMap[name].borderColor} w-24 h-24 p-3 rounded-full shadow-[inset_0px_-5px_0px_rgba(0,0,0,0.15)] shadow-neutral-800/20`}
    >
      <span
        style={{
          backgroundImage: `url(${handStylesMap[name].image})`,
          backgroundSize: "40px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={`flex bg-neutral-50 p-4 aspect-square rounded-full shadow-[inset_0px_2px_0px_rgba(0,0,0,0.15)] shadow-neutral-800/40`}
      >
        <span className="sr-only">{`${name} handsign`} </span>
      </span>
    </Component>
  );
};

export const HandChipEmpty = (): JSX.Element => {
  return (
    <span
      className={`block bg-neutral-800/30 w-20 h-20 p-2 rounded-full shadow-inner`}
    ></span>
  );
};

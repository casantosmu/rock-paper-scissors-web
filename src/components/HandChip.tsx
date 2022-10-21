import iconScissors from "../assets/icon-scissors.svg";
import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import { HandNames } from "../types/interfaces";

type Sizes = "medium" | "large";

interface HandChipProps {
  name: HandNames;
  size?: Sizes;
  onClick?: () => void;
}

interface HandChipVariantsStyle {
  image: string;
  borderColor: string;
}

interface HandChipSizeStyles {
  border: string;
  inner: string;
}

const handChipVariantsStyleMap: Record<HandNames, HandChipVariantsStyle> = {
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

const handChipSizeStylesMap: Record<Sizes, HandChipSizeStyles> = {
  medium: {
    border:
      "w-28 h-28 p-3 sm:w-32 sm:h-32 sm:p-4 shadow-[inset_0px_-6px_0px_rgb(0,0,0)]",
    inner: "bg-handchip-medium shadow-[inset_0px_4px_0px_rgb(0,0,0)]",
  },
  large: {
    border:
      "w-28 h-28 p-3 sm:w-48 sm:h-48 sm:p-6 shadow-[inset_0px_-6px_0px_rgb(0,0,0)] sm:shadow-[inset_0px_-10px_0px_rgba(0,0,0,0.3)]",
    inner:
      "bg-handchip-medium sm:bg-handchip-large shadow-[inset_0px_4px_0px_rgb(0,0,0)] sm:shadow-[inset_0px_8px_0px_rgba(0,0,0,0.3)]",
  },
};

export const HandChip = ({
  name,
  size = "medium",
  onClick,
}: HandChipProps): JSX.Element => {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      onClick={onClick}
      className={`block ${handChipVariantsStyleMap[name].borderColor} ${handChipSizeStylesMap[size].border} rounded-full shadow-neutral-800/30 focus:shadow-focus focus:shadow-neutral-50/50 outline-none`}
    >
      <span
        style={{
          backgroundImage: `url(${handChipVariantsStyleMap[name].image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={`flex bg-neutral-50 p-4 aspect-square rounded-full shadow-neutral-800/30 ${handChipSizeStylesMap[size].inner}`}
      >
        <span className="sr-only">{`${name} handsign`} </span>
      </span>
    </Component>
  );
};

export const HandChipEmpty = (): JSX.Element => {
  return (
    <span
      className={
        "block bg-neutral-800/30 w-24 h-24 sm:w-44 sm:h-44 p-2 rounded-full shadow-inner"
      }
    ></span>
  );
};

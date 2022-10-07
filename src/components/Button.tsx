import { ReactNode } from "react";

type Variant = "filled" | "outlined";
type Size = "base" | "large";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant: Variant;
  size: Size;
  children: ReactNode;
}

const variantMap: Record<Variant, string> = {
  filled:
    "bg-neutral-50 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300",
  outlined:
    "border-2 border-gray-50 hover:bg-gray-50 active:bg-gray-50 text-white hover:text-neutral-900 active:text-neutral-900",
};

const sizeMap: Record<Size, string> = {
  base: "px-8 py-3 text-sm",
  large: "px-12 text-base",
};

const Button = ({
  variant,
  size,
  children,
  ...restProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      {...restProps}
      className={`block py-3 ${variantMap[variant]} ${sizeMap[size]} uppercase rounded-lg drop-shadow-lg focus:shadow-focus focus:shadow-neutral-50/50 outline-none transition-colors`}
    >
      {children}
    </button>
  );
};

export default Button;

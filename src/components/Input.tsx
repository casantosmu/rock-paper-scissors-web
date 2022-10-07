interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
}

const Input = ({ id, ...props }: InputProps): JSX.Element => {
  return (
    <input
      type="text"
      {...props}
      id={id}
      className="py-3 px-2 block w-full mx-auto border-2 border-gray-50text-neutral-900 rounded-lg focus:shadow-focus focus:shadow-neutral-50/50 outline-none"
    />
  );
};

export default Input;

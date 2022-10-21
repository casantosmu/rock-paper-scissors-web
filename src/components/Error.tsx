import errorIcon from "../assets/error_icon.svg";

interface ErrorProps {
  errorMessage: string;
}

const Error = ({ errorMessage }: ErrorProps) => {
  return (
    <div>
      <img
        src={errorIcon}
        alt="Error icon"
        height={50}
        width={50}
        className="mx-auto pb-5"
      />
      <span className="block text-neutral-50 text-center">{errorMessage}</span>
    </div>
  );
};

export default Error;

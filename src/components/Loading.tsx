import loadingSpinner from "../assets/loading-spinner.svg";

interface LoadingProps {
  loadingMessage: string;
}

const Loading = ({ loadingMessage }: LoadingProps) => {
  return (
    <>
      <span className="block text-neutral-50 text-center pb-5">
        {loadingMessage}
      </span>
      <img
        src={loadingSpinner}
        alt="Loading spinner"
        height={50}
        width={50}
        className="mx-auto"
      />
    </>
  );
};

export default Loading;

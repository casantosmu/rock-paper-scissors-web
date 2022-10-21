import { PropsWithChildren } from "react";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-blue-900">
      <div className="flex flex-col gap-20 min-h-screen max-w-lg m-auto pt-10 w-11/12">
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;

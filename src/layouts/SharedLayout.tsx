import { PropsWithChildren } from "react";
import Header from "../components/Header";

const SharedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-blue-900">
      <div className="flex flex-col min-h-screen w-full max-w-lg m-auto ">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default SharedLayout;

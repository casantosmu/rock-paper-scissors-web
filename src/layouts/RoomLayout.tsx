import Header from "../components/Header";
import { PropsWithChildren } from "react";
import BaseLayout from "./BaseLayout";

const RoomLayout = ({ children }: PropsWithChildren) => {
  return (
    <BaseLayout>
      <Header />
      <main>{children}</main>
    </BaseLayout>
  );
};

export default RoomLayout;

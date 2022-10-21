import Header from "../components/Header";
import ScoreDisplay from "../components/ScoreDisplay";
import BaseLayout from "./BaseLayout";

interface GameLayoutProps {
  userScore: number;
  children: JSX.Element;
}

const GameLayout = ({ userScore, children }: GameLayoutProps) => {
  return (
    <BaseLayout>
      <Header scoreDisplay={<ScoreDisplay userScore={userScore} />} />
      <main>{children}</main>
    </BaseLayout>
  );
};

export default GameLayout;

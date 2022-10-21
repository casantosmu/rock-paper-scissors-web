import { useState } from "react";
import { ResultsTypes } from "../types/interfaces";

const useUserScore = () => {
  const [userScore, setUserScore] = useState(0);

  const incrementUserScore = () => setUserScore((prev) => prev + 1);
  const decrementUserScore = () => setUserScore((prev) => prev - 1);

  const updateUserScore = (result: ResultsTypes | null) => {
    if (result === "win") {
      incrementUserScore();
      return;
    }

    if (result === "lose") {
      decrementUserScore();
      return;
    }
  };

  return { userScore, updateUserScore };
};

export default useUserScore;

import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { UserState, PlayState } from "../gameSetting";

function EvilsVote() {
  const gameState = useContext(PlayState);
  const [isClick, setIsClick] = useState(false);
  const onClick = (e) => {
    gameState.vote.push(e.target.value);
    setIsClick(true);
  };
  return (
    <div>
      <button onClick={onClick} value={"success"} disabled={isClick}>
        성공
      </button>
      <button onClick={onClick} value={"fail"} disabled={isClick}>
        실패
      </button>
    </div>
  );
}

export default EvilsVote;

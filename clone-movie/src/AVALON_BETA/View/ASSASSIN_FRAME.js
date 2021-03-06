import React, { useState, useContext } from "react";
import { angels, END_GAME_FRAME, GameContext } from "../Store";
import { ASSASSIN_KILL } from "../MVC/AVALON_Reducer";
import * as S from "../Styled";

function ASSASSIN_FRAME() {
  const { dispatch, gameState, buttonAnimation } = useContext(GameContext);
  const [killedPlayer, setKilledPlayer] = useState("");
  const onChange = (e) => {
    setKilledPlayer(e.target.value);
  };
  const onClick = (e) => {
    if (killedPlayer === "") {
      buttonAnimation(e);
    } else {
      const winner = killedPlayer === "Merlin" ? "악의 승리" : "선의 승리";
      dispatch({
        type: ASSASSIN_KILL,
        component: END_GAME_FRAME,
        winner: winner,
      });
    }
  };

  return (
    <S.MainVote>
      <S.MAIN_VOTE_HEADER>멀린을 찾아 암살하시오.</S.MAIN_VOTE_HEADER>
      <S.SelectPlayer>
        {gameState.usingPlayers.map(
          (user, index) =>
            angels.includes(user.role) && (
              <label key={index}>
                <S.MainVoteLabel>{user.nickname}</S.MainVoteLabel>
                <S.MainVoteCheckbox
                  type="radio"
                  name={"vote"}
                  value={user.role}
                  onChange={onChange}
                />
                <br />
              </label>
            )
        )}
      </S.SelectPlayer>
      <S.ButtonAnimation />
      <S.MainVoteButton onClick={onClick}>kill</S.MainVoteButton>
    </S.MainVote>
  );
}

export default ASSASSIN_FRAME;

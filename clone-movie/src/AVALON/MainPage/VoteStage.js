import React, {useContext} from "react";
import {VoteStageFrame, Circle} from "./Styled";
import {voteStageColor} from "../Ability/gameSetting"
import {PlayState} from "../../App";

function VoteStage() {
    const gameState = useContext(PlayState)
    const colors = voteStageColor.slice(gameState.voteStage, 5);
    return (
        <VoteStageFrame>
            {
                colors.map((color, index) => (
                    <Circle color={color} key={index}/>
                ))
            }
        </VoteStageFrame>
    )
}

export default VoteStage;
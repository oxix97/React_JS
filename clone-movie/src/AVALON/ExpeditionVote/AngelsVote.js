import React, {useState} from "react";
import {Background} from "../Ability/gameSetting"

function AngelsVote() {
    const [isClick,setIsClick] = useState(false);
    const onClick = e =>{
        Background.vote.push(e.target.value);
        setIsClick(true);
    }
    return(
        <div>
            <button onClick={onClick} value={'success'} disabled={isClick}>
                성공
            </button>
        </div>
    )
}

export default AngelsVote;
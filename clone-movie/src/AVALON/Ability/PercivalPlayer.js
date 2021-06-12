import React, {useContext} from "react";
import {percivalSight} from "./gameSetting";
import {UserState} from "../../App";


function PercivalPlayer() {
    const userState = useContext(UserState)
    return (
        <div>
            {
                userState.map((user, index) => (
                    <div key={index}>
                        {percivalSight.includes(user.role) ? user.nickname : null}
                    </div>
                ))
            }
        </div>
    )
}

export default PercivalPlayer
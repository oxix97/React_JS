import React from "react";

function VoteResult({ history }) {
  return (
    <div>
      {/*<div>*/}
      {/*    {Users.map((user) => (*/}
      {/*        <div>*/}
      {/*            <li>{user.nickname}</li>*/}
      {/*            <li>LIFE : {user.life}</li>*/}
      {/*            <li>VOTE : {user.vote}</li>*/}
      {/*            <br/>*/}
      {/*        </div>*/}
      {/*    ))}*/}
      {/*</div>*/}
      <div></div>
      <button
        onClick={() =>
          history.push({
            pathname: "/night",
          })
        }
      >
        기자 이벤트
      </button>
    </div>
  );
}

export default VoteResult;
